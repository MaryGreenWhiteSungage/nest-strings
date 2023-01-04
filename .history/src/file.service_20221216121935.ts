import { Injectable } from '@nestjs/common';
import { fs } from 'fs';

const 
@Injectable()
export class AppService {
  saveFile(stringType: string, language: string, jsonBody: string): boolean {
    return 'Hello World!';
  }
}
