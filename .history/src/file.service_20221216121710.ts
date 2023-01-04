import { Injectable } from '@nestjs/common';
import { fs } from 'fs';

@Injectable()
export class AppService {
  saveFile(stringType: string): string {
    return 'Hello World!';
  }
}
