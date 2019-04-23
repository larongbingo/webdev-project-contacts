import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "src/modules/user/user.module";
import { HttpStrategy } from "./http.strategy";
import { RepositoriesModule } from "../repositories/repositories.module";

@Module({
  imports: [UserModule, RepositoriesModule],
  providers: [AuthService, HttpStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
