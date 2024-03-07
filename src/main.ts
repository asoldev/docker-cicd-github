import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigModule } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ConfigModule.forRoot();
  app.enableCors();
  await app.listen(3000);

  console.log(await app.getUrl());
}
bootstrap();
