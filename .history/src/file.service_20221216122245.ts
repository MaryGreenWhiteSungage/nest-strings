import { Injectable } from '@nestjs/common';
import { fs } from 'fs';
import * as path from 'path';

const stringPath = path.join(__dirname, '/i18n/');
@Injectable()
export class FService {
  saveFile(stringType: string, language: string, jsonBody: string): boolean {
    return 'Hello World!';
  }
}
