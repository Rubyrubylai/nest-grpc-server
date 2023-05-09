import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      'app',
      'hero',
    ],
    protoPath: [
      join(__dirname, './app.proto'),
      join(__dirname, './hero/hero.proto')
    ],
    // url: 'localhost:3005'
  },
}
