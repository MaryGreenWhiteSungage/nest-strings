import { Test, TestingModule } from '@nestjs/testing';
import { FileService } from './file.service';
import * as fs from 'fs';
import * as path from 'path';
import { I18nFileDto } from './i18n.dto';

const stringPath = path.join(__dirname + `/../src`, '/i18n');
const distPath = path.join(__dirname + `/../dist`, '/i18n');

describe('FileService', () => {
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [FileService],
    }).compile();

    const fileService = app.get<FileService>(FileService);
    const dto:I18nFileDto = {
      stringType: "en",
      language
    }
    fileService.saveFile()
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
