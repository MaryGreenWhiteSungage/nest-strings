import { Test, TestingModule } from '@nestjs/testing';
import { FileService } from './file.service';
import * as fs from 'fs';
import * as path from 'path';
import { I18nFileDto } from './i18n.dto';

const stringPath = path.join(__dirname + `/../src`, '/i18n');
const distPath = path.join(__dirname + `/../dist`, '/i18n');

const test1 =
  '{"APPLICATION_NAME":"Funding Portal Three","HELLO":"Hello","PRODUCT":{"NEW":"Updated New Product: {name}"},"ENGLISH":"English","ARRAY":["ONE","TWO","EIGHT"],"cat":"Cat","cat_name":"Cat: {name}","set-up-password":{"heading":"Hello, {username}","title":"Forgot password","followLink":"Please follow the link to set up your password"},"day_interval":{"one":"Every day","other":"Every {count} days","zero":"Never"},"nested":"We go shopping: $t(test.day_interval, {{"count": {count} }})"}';
describe('FileService', () => {
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [FileService],
    }).compile();

    const fileService = app.get<FileService>(FileService);
    const dto: I18nFileDto = {
      stringType: 'test1',
      language: 'en',
      jsonBody: '',
    };
    fileService.saveFile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
