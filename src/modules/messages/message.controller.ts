import { Controller, Body, Post, Get, UseGuards, Query } from "@nestjs/common";
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
    return await this.MESSAGE_SERVICE.findAll({
      where: {
        email: (findMessageDto.email) ? { [Op.like]: `%${findMessageDto.email}%` } : null,
        title: (findMessageDto.title) ? { [Op.like]: `%${findMessageDto.title}%` } : null,
        message: (findMessageDto.message) ? { [Op.like]: `%${findMessageDto.message}%` } : null,
      },
    });
  }
}
