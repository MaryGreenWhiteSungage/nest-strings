import { Injectable } from '@nestjs/common';
import { rejects } from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { resolve } from 'path';

const stringPath = path.join(__dirname, '/i18n/');
@Injectable()
export class FileService {
  public async saveFile(
    stringType: string,
    language: string,
    jsonBody: string,
  ): Promise <boolean> {
    const filePath = `${stringPath}/${language}/${stringType}.json`;
    if (fs.existsSync(filePath)) {
      const backupFile = `$filePath`
      fs.rename(filePath, )

    }

    if (stat.is)
      fs.writeFile('file.txt', 'I am cool!', function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('File created!');
      });
  }
  return true;
}


