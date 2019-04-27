import { Controller, Body, Post, Get, UseGuards, Query, Param } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Op } from "sequelize";

import { FindMessageDto } from "./dto/find-message.dto";
import { CreateMessageDto } from "./dto/create-message.dto";
import { MessageService } from "./message.service";

@Controller("message")
export class MessageController {
  constructor(
    private readonly MESSAGE_SERVICE: MessageService,
  ) {}

  @Post()
  public async createMessage(@Body() createMessageDto: CreateMessageDto) {
    const message = await this.MESSAGE_SERVICE.create({...createMessageDto});
    return {id: message.id};
  }

  @Get()
  @UseGuards(AuthGuard("bearer"))
  public async findAllMessages(@Query() findMessageDto: FindMessageDto) {
    const messages = await this.MESSAGE_SERVICE.findAll({
      where: {
        email: (findMessageDto.email) ? { [Op.like]: `%${findMessageDto.email}%` } : null,
        title: (findMessageDto.title) ? { [Op.like]: `%${findMessageDto.title}%` } : null,
        message: (findMessageDto.message) ? { [Op.like]: `%${findMessageDto.message}%` } : null,
      },
    });
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < messages.length; i++) {
      messages[i].message = messages[i].message.substring(0, 30);
    }
    return messages;
  }

  @Get(":messageId")
  @UseGuards(AuthGuard("bearer"))
  public async getMessageDetails(@Param("messageId") messageId: string) {
    const message = await this.MESSAGE_SERVICE.findOne({where: {id: {[Op.eq]: messageId}}});
    message.isRead = true;
    await message.save();
    return message;
  }
}
