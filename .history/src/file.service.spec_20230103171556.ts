import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as fs from 'fs';
import * as path from 'path';
import { I18nFileDto } from './i18n.dto';

const stringPath = path.join(__dirname + `/../src`, '/i18n');
const distPath = path.join(__dirname + `/../dist`, '/i18n');

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});


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
      console.log(`save to file ${filePath}`);
      if (fs.existsSync(filePath)) {
        const dateExt = new Date().getTime();
        const backupFile = `${filePath}.${dateExt}`;
        fs.renameSync(filePath, backupFile);
      }
      fs.writeFileSync(filePath, jsonString);
      fs.writeFileSync(distPath, jsonString);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
