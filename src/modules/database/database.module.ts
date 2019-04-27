import { Module, OnApplicationShutdown } from "@nestjs/common";

import { databaseConnection } from "./database.connection";
import { databaseProviders } from "./database.providers";

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule implements OnApplicationShutdown {
  public async onApplicationShutdown(signal: string) {
    await databaseConnection.close();
  }
}
