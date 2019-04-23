import { Module } from "@nestjs/common";
import { BcryptRepositoryService } from "./bcrypt-repository.service";
import { JsonWebTokenRepositoryService } from "./jwt-repository.service";

@Module({
  providers: [BcryptRepositoryService, JsonWebTokenRepositoryService],
  exports: [BcryptRepositoryService, JsonWebTokenRepositoryService],
})
export class RepositoriesModule {}
