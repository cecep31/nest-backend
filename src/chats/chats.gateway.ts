import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Server, Socket } from 'socket.io';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { WsAuthGuard } from 'src/auth/wsauth.guard';

@WebSocketGateway({ cors: '*', namespace: 'chat' })
export class ChatsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly chatsService: ChatsService) {}

  @WebSocketServer()
  server: Server;

  connectedClients: Map<string, Socket> = new Map();

  @SubscribeMessage('sendMessage')
  async handleSendMessage(createChatDto: CreateChatDto): Promise<void> {
    const specificUserId = '1';
    const specificClient = this.connectedClients.get(specificUserId);
    if (specificClient) {
      specificClient.emit('message', createChatDto);
    }
    await this.chatsService.create(createChatDto);
    this.server.emit('recMessage', createChatDto);
  }

  afterInit(server: Server) {
    console.log(server);
  }

  handleDisconnect(client: Socket) {
    this.connectedClients.delete(client.id);
    this.server.emit('lostConnection', `${client.id} leave`);
  }

  @UseGuards(WsAuthGuard)
  handleConnection(client: Socket, ...args: any[]) {
    // console.log(client.handshake);
    
    this.connectedClients.set(client.id, client);
    this.server.emit('newConnection', `${client.id} joined`);
  }

  @SubscribeMessage('createChat')
  create(@MessageBody() createChatDto: CreateChatDto) {
    return this.chatsService.create(createChatDto);
  }

  @SubscribeMessage('findAllChats')
  findAll() {
    return this.chatsService.findAll();
  }

  @SubscribeMessage('findOneChat')
  findOne(@MessageBody() id: number) {
    return this.chatsService.findOne(id);
  }

  @SubscribeMessage('updateChat')
  update(@MessageBody() updateChatDto: UpdateChatDto) {
    return this.chatsService.update(updateChatDto.id, updateChatDto);
  }

  @SubscribeMessage('removeChat')
  remove(@MessageBody() id: number) {
    return this.chatsService.remove(id);
  }
}
