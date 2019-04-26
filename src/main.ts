import { NestFactory } from "@nestjs/core";
import * as compression from "compression";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {logger: console});
  app.enableCors();
  app.use(compression());
  await app.listen(process.env.PORT || 8080, process.env.HOST || "127.0.0.1");
}
bootstrap();
