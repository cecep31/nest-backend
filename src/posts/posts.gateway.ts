import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PostsService } from './posts.service';

@WebSocketGateway({ namespace: 'posts' })
export class PostsGateway implements OnGatewayConnection {
  constructor(private postservice: PostsService) {}
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    this.server.emit('newConnection', `${client.id} joined`);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(client: any, payload: any) {
    const data = await this.postservice.commentCreate(payload);
    this.server.emit("newComment", data)
  }
}
