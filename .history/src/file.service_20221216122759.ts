import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

const stringPath = path.join(__dirname, '/i18n/');
@Injectable()
export class FileService {
  saveFile(stringType: string, language: string, jsonBody: string): boolean {
    const filePath = `${stringPath}/${language}/${stringType}.json`;
    fs.stat(f, (err, stat) => {
      if (!err) {
          if (stat.isDirectory()) {
              console.log(path_directory)
              fs.readdirSync(path_directory).forEach(file => {
                  console.log(`\t${file}`);
              });
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
