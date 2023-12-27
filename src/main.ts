import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { configDotenv } from "dotenv";
import path from "path";
import { AuthModule } from "./auth.module";

async function bootstrap() {
  try {
    configDotenv({ path: path.join(__dirname, "/../.env") });

    const app = await NestFactory.create(AuthModule);

    await app.listen(5000);

    Logger.log(`~ Application is running on: ${await app.getUrl()}`);
  } catch (error: any) {
    Logger.error(`~ Ouch, something went wrong: ${error.message}`);
  }
}
bootstrap();
