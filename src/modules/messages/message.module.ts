import { Module } from "@nestjs/common";

import { messageProviders } from "./message.providers";
import { MessageService } from "./message.service";
import { MessageController } from "./message.controller";

@Module({
  controllers: [MessageController],
  providers: [
    ...messageProviders,
    MessageService,
  ],
  exports: [
    MessageService,
  ],
})
export class MessageModule {}
