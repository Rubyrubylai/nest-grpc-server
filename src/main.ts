import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceOptions } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  // await app.startAllMicroservices();
  // await app.listen(300);
  // console.log(`Application is running on: ${await app.getUrl()}`);
  await app.listen();
}
bootstrap();
