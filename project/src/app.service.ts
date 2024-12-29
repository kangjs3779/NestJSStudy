import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(Body, Param): string {
    console.log(Body);
    console.log(Param);
    return 'Hello World!';
  }
}
