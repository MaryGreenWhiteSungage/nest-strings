import { Injectable } from '@nestjs/common';
import { fs } fromm

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
