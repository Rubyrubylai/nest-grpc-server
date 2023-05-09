import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

interface INumberArray {
  data: number[]
}

interface ISumOfNumberArray {
  sum: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray): ISumOfNumberArray {
    return { sum: this.appService.accumulate(numberArray.data)};
  }
}
