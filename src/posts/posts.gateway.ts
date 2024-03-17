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
import { Logger } from '@nestjs/common';

@WebSocketGateway({ namespace: 'posts', cors: true })
export class PostsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private postservice: PostsService, private jwtservice: JwtService, private userSocketMapService: UserSocketMapService) { }

  @WebSocketServer()
  server: Server;

  private logger = new Logger('PostsGateway'); 

  private extractToken(authorization: string): string | undefined {
    const [type, token] = authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async handleConnection(client: Socket) {
    
    const token = this.extractToken(client.handshake.headers.authorization ?? '');
    // if (!token) return;

    const postId = client.handshake.query.post_id + '';
    
    try {
      const { id: userId } = await this.jwtservice.verifyAsync(token, {
        secret: process.env.JWT_KEY,
      });
      this.userSocketMapService.addUserToRoom(userId, postId, client);
    } catch {
    }
    this.logger.log(`Socket connected: ${client.id}`);
    client.join(postId);
    const comments = await this.postservice.getAllComments(postId);
    client.emit('newComment', comments);
  }
  async handleDisconnect(client: Socket) {
    this.logger.log(`Socket disconnected: ${client.id}`);
    const post_id = client.handshake.query.post_id + '';
    const userid = this.userSocketMapService.getUserIdBySocket(client);
    this.userSocketMapService.removeUserFromRoom(userid, post_id);
  }

  @SubscribeMessage('sendComment')
  async handleMessage(client: Socket, payload: any) {
    this.logger.log(`Received message from ${client.id}`);
    const post_id = client.handshake.query.post_id + '';
    const userid = this.userSocketMapService.getUserIdBySocket(client);
    payload.post_id = post_id;
    payload.created_by = userid;
    await this.postservice.commentCreate(payload);
    const data = await this.postservice.getAllComments(post_id);
    this.server.to(post_id).emit('newComment', data);
  }

  @SubscribeMessage('getAllComments')
  async fetchComments(client: Socket) {
    const postId = client.handshake.query.post_id+'';
    const comments = await this.postservice.getAllComments(postId);
    client.emit('newComment', comments);
  }
}
