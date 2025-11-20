// Nest
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

// Services
import { ChatsService, MessagesResponse } from './chats.service';

// Utils
import { requestResponseMessages } from 'src/utils/common/messages/requestResponse.messages';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get('/auth/qr')
  getQRCode() {
    return this.chatsService.initSession();
  }

  @Get('overview')
  async chat(@Query('page') page?: number, @Query('total') total?: number) {
    const chats = await this.chatsService.listChats(page, total);

    return { msg: requestResponseMessages.SUCCESSFUL_REQUEST, chats };
  }

  @Get('/:chatId')
  async getChatMessages(
    @Param('chatId') chatId: string,
    @Query('page') page = '1',
    @Query('pageSize') pageSize = '50',
    @Query('beforeId') beforeId?: string,
  ): Promise<MessagesResponse> {
    const pageNum = parseInt(page, 10);
    const size = parseInt(pageSize, 10);
    return this.chatsService.getMessagesByChatId(
      chatId,
      pageNum,
      size,
      beforeId,
    );
  }

  @Post('send')
  async sendMenssagem(@Body() body: { to: string; msg: string }) {
    const { to, msg } = body;

    return this.chatsService.sendMessage(to, msg);
  }

  @Post('/:to/image')
  @UseInterceptors(FileInterceptor('file'))
  async sendChatImage(
    @Param('to') to: string,
    @UploadedFile() file?: Express.Multer.File,
    @Body('imageUrl') imageUrl?: string,
    @Body('caption') caption?: string,
  ) {
    if (!file && !imageUrl) {
      throw new BadRequestException(
        'Você deve enviar um arquivo ou fornecer imageUrl.',
      );
    }

    let content: string;
    if (file) {
      // upload de arquivo fornecido
      if (!file.buffer || file.buffer.length === 0) {
        throw new BadRequestException('Arquivo de imagem inválido.');
      }
      const mime = file.mimetype;
      content = `data:${mime};base64,${file.buffer.toString('base64')}`;
    } else {
      // URL fornecida
      content = imageUrl ?? '';
    }

    return this.chatsService.sendImage(to, content, caption);
  }
}
