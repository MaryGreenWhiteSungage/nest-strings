import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { I18nFileDto } from './i18n.dto';

const stringPath = path.join(__dirname, '/i18n/');
@Injectable()
export class FileService {
  public async saveFile(i18nFileDto: I18nFileDto): Promise<boolean> {
    try {
      if (!i18nFileDto.stringType) {
        throw 'Invalid String Type found';
      }
      if (!i18nFileDto.language) {
        throw 'Invalid language  found';
      }
      if (!i18nFileDto.jsonBody) {
        throw 'Invalid Json found';
      }
      const jsonString: string = JSON.stringify(i18nFileDto.jsonBody);
      const filePath = `${stringPath}/${i18nFileDto.language}/${i18nFileDto.stringType}.json`;
      console.log("")
      if (fs.existsSync(filePath)) {
        const dateExt = new Date().getUTCMilliseconds();
        const backupFile = `${filePath}.${dateExt}`;
        fs.renameSync(filePath, backupFile);
      }
      fs.writeFileSync(filePath, jsonString);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
