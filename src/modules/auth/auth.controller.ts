import { Controller, Get, UseGuards, Headers, Body, Post, UnprocessableEntityException } from "@nestjs/common";
import { sign } from "jsonwebtoken";
import { AuthGuard } from "@nestjs/passport";

import { JWT_PRIVATE_KEY } from "../../constants/jsonwebtokens";
import { CredentialsDto } from "./dto/credentials.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Get("verify")
  @UseGuards(AuthGuard("bearer"))
  public async verifySession(@Headers("Authorization") sessionToken: string) {
    return {sessionToken};
  }

  @Post()
  public async login(@Body() credentialDto: CredentialsDto) {
    const user = await this.authService.validateCredentials(credentialDto.username, credentialDto.password);

    if (!user) {
      return new UnprocessableEntityException("Incorrect Username/Password");
    }

    user.token = sign({username: user.username, id: user.id}, JWT_PRIVATE_KEY);
    user.save();

    return {token: user.token};
  }
}
