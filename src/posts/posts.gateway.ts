import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PostsService } from './posts.service';

@WebSocketGateway({ namespace: 'posts', cors: true })
export class PostsGateway implements OnGatewayConnection {
  constructor(private postservice: PostsService) {}
  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {
    const post_id = client.handshake.query.post_id + '';
    client.join(post_id);
    const data = await this.postservice.getAllcomment(post_id + '');
    client.emit('newComment', data);
  }

  @SubscribeMessage('sendComment')
  async handleMessage(client: Socket, payload: any) {
    const post_id = client.handshake.query.post_id + '';
    payload.post = { id: post_id };
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