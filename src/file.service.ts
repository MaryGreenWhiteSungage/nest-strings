import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { I18nFileDto } from './i18n.dto';

export const stringPath = path.join(__dirname + `/../src`, '/i18n');
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
      // console.log(`save to file ${filePath}`);
      fs.writeFileSync(filePath, jsonString);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  public async readFile(stringType: string, language = 'en'): Promise<string> {
    try {
      if (!stringType) {
        throw 'Invalid String Type found';
      }
      if (!language) {
        throw 'Invalid language  found';
      }

      const filePath = `${stringPath}/${language}/${stringType}.json`;
      if (!fs.existsSync(filePath)) {
        throw new Error(`${filePath} does not exist.`);
      }

      return new Promise((resolve, reject) => {
        fs.readFile(filePath, function (err, data: Buffer) {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(data.toString()));
          }
        });
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
