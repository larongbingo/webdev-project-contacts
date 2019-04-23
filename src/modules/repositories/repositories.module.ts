import { Module } from "@nestjs/common";
import { BcryptRepositoryService } from "./bcrypt-repository.service";

@Module({
  exports: [BcryptRepositoryService],
})
export class RepositoriesModule {}
