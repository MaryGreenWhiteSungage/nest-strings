import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

const stringPath = path.join(__dirname, '/i18n/');
@Injectable()
export class FileService {
  public async saveFile(stringType: string, language: string, jsonBody: string): Promiseboolean {
    const filePath = `${stringPath}/${language}/${stringType}.json`;
    fs.stat(filePath, (err, stat) => {
      if (!err) {
          if (stat.isFile()) {
              const time = new Date().getUTCDate();
              await fs.rename(filePath, `${filePath}.${time}`);
              console.log();
          }
      }
  });
    if (stat.is)
    fs.writeFile('file.txt', 'I am cool!',  function(err) {
      if (err) {
          return console.error(err);
      }
      console.log("File created!");
  });
  }

}
