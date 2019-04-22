import { Controller, Get, UseGuards, Headers, Body, Post, UnprocessableEntityException } from "@nestjs/common";
import { sign } from "jsonwebtoken";
import { AuthGuard } from "@nestjs/passport";
import { compare } from "bcrypt";
import { Op } from "sequelize";

import { JWT_PRIVATE_KEY } from "../../constants/jsonwebtokens";
import { CredentialsDto } from "./dto/credentials.dto";
import { UserService } from "../user/user.service";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get("verify")
  @UseGuards(AuthGuard("bearer"))
  public async verifySession(@Headers("Authorization") sessionToken: string) {
    return {sessionToken};
  }

  @Post()
  public async login(@Body() credentialDto: CredentialsDto) {
    const user = await this.userService.findOne({where: {username: {[Op.eq]: credentialDto.username}}});
    if (!user || !await compare(credentialDto.password, user.password)) {
      return new UnprocessableEntityException("Incorrect username/password");
    }

    user.token = sign({username: user.username, id: user.id}, JWT_PRIVATE_KEY);
    user.save();

    return {token: user.token};
  }
}
