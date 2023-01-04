import { Injectable } from '@nestjs/common';
import { fs } from 'fs';

@Injectable()
export class AppService {
  saveFile(fileName: string): string {
    return 'Hello World!';
  }
}
