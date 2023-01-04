import { Injectable } from '@nestjs/common';
import { fs}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
