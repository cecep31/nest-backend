import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PostsService } from './posts.service';
import { JwtService } from '@nestjs/jwt';
import { UserSocketMapService } from './user-map-service';

@WebSocketGateway({ namespace: 'posts', cors: true })
export class PostsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private postservice: PostsService, private jwtservice: JwtService, private userSocketMapService: UserSocketMapService) { }
  
  @WebSocketServer()
  server: Server;

  private extractToken(authorization: string): string | undefined {
    const [type, token] = authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async handleConnection(client: Socket) {

    try {
      const token = client.handshake.query?.token;
      const payload = await this.jwtservice.verifyAsync(token + "", {
        secret: process.env.JWT_KEY,
      });
      const userid = payload.id
      const post_id = client.handshake.query.post_id + '';
      this.userSocketMapService.addUserToRoom(userid, post_id, client);
    } catch (error) {
      console.log(error);
    }

    const post_id = client.handshake.query.post_id + '';
    client.join(post_id);
    const data = await this.postservice.getAllcomment(post_id + '');
    client.emit('newComment', data);
  }

  async handleDisconnect(client: Socket) {
    const post_id = client.handshake.query.post_id + '';
    const userid = this.userSocketMapService.getUserIdBySocket(client);
    this.userSocketMapService.removeUserFromRoom(userid, post_id);
  }

  @SubscribeMessage('sendComment')
  async handleMessage(client: Socket, payload: any) {
    const post_id = client.handshake.query.post_id + '';
    const userid = this.userSocketMapService.getUserIdBySocket(client);
    payload.post_id = post_id;
    payload.created_by = userid;
    await this.postservice.commentCreate(payload);
    const data = await this.postservice.getAllcomment(post_id);
    this.server.to(post_id).emit('newComment', data);
  }

  @SubscribeMessage('getAllComments')
  async getallmessage(client: Socket) {
    const data = await this.postservice.getAllcomment(
      client.handshake.query.post_id + '',
    );
    client.emit('newComment', data);
  }
}
