import { Module } from "@nestjs/common";

import { MessageModule } from "./modules/messages/message.module";
import { DatabaseModule } from "./modules/database/database.module";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
