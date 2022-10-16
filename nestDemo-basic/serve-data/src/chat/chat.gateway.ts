import { WsMessageHandler } from '@nestjs/common';
import { WebSocketGateway, SubscribeMessage } from '@nestjs/websockets';
import { Socket } from 'net';
import { Observable } from 'rxjs';
import { ChatService } from './chat.service';

interface WsResponse<T> {
  event: string;
  data: T;
}

@WebSocketGateway(3001, { namespace: 'chat' })
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  // 该项目 nestjs 版本过低。导致依赖的 @nestjs/websockets 也很低，很多装饰器都不支持。websocket demo 切换到 【nest-js-crud-demo】实现
  @SubscribeMessage('createChat')
  handleEvent(client: Socket, data: string) {}
}
