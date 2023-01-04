import { Injectable } from '@nestjs/common';
import { fs, stat } from 'fs';
import * as path from 'path';

const stringPath = path.join(__dirname, '/i18n/');
@Injectable()
export class FileService {
  saveFile(stringType: string, language: string, jsonBody: string): boolean {
    const filePath = `${stringPath}/${language}/${stringType}.json`;
    const status = fs.stat(filePath);
    if (stat.)
    fs.writeFile('file.txt', 'I am cool!',  function(err) {
      if (err) {
          return console.error(err);
      }
      console.log("File created!");
  });
  }

}
