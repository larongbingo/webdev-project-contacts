import { Controller, Get, UseGuards, Headers } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  @Get("verify")
  @UseGuards(AuthGuard("bearer"))
  public async verifySession(@Headers("Authorization") sessionToken: string) {
    return {sessionToken};
  }
}