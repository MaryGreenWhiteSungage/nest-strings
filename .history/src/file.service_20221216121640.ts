import { Injectable } from '@nestjs/common';
import { fs } from 'fs';

@Injectable()
export class AppService {
  saveFile(): string {
    return 'Hello World!';
  }
}
