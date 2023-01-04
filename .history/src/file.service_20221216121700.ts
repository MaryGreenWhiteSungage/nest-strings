import { Injectable } from '@nestjs/common';
import { fs } from 'fs';

@Injectable()
export class AppService {
  saveFile(fileName): string {
    return 'Hello World!';
  }
}
