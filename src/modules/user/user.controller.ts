import { Controller, Post, Body, UseGuards, Put, Headers, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  public async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create({...createUserDto});
    return {id: user.id};
  }

  @Put()
  @UseGuards(AuthGuard("bearer"))
  public async update(@Body() createUserDto: CreateUserDto, @Headers("authorization") token: string) {
    const user = await this.userService.findOneByToken(token.split(" ")[1]);
    if (!user) {
      return new BadRequestException();
    }
    Object.keys(user).forEach(key => user[key] = createUserDto[key]);
    await user.save();
    return createUserDto;
  }
}
