import { Injectable } from '@nestjs/common';
import { rejects } from 'assert';
import * as fs from 'fs';
import * as path from 'path';
import { I18}

const stringPath = path.join(__dirname, '/i18n/');
@Injectable()
export class FileService {
  public async saveFile(
    stringType: string,
    language: string,
    jsonBody: string,
  ): Promise <boolean> {
    try {
    const filePath = `${stringPath}/${language}/${stringType}.json`;
    if (fs.existsSync(filePath)) {
      const dateExt = new Date().getUTCMilliseconds();
      const backupFile = `${filePath}.${dateExt}`;
      fs.renameSync(filePath,backupFile);
    }
    fs.writeFileSync(filePath, jsonBody);
    return true;
  }
  catch (e) {
    console.error(e);
    return false;
  }
}


