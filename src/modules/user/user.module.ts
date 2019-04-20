import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/modules/database/database.module";
import { UserService } from "./user.service";
import { userProviders } from "./user.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    UserService,
    ...userProviders,
  ],
  exports:[UserService]
})
export class UserModule {}
