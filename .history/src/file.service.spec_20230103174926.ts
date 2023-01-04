import { FileService, stringPath } from './file.service';
import * as fs from 'fs';
import * as path from 'path';
import { I18nFileDto } from './i18n.dto';

const distPath = path.join(__dirname + `/../dist`, '/i18n');

const test2 =
  '{"APPLICATION_NAME":"Funding Portal One","HELLO":"Hello","PRODUCT":{"NEW":"Updated New Product: {name}"},"ENGLISH":"English","ARRAY":["ONE","TWO","EIGHT"],"cat":"Cat","cat_name":"Cat: {name}","set-up-password":{"heading":"Hello, {username}","title":"Forgot password","followLink":"Please follow the link to set up your password"},"day_interval":{"one":"Every day","other":"Every {count} days","zero":"Never"},"nested":"We go shopping: $t(test.day_interval, {{"count": {count} }})"}';

const test1 =
  '{"APPLICATION_NAME":"Funding Portal Three","HELLO":"Hello","PRODUCT":{"NEW":"Updated New Product: {name}"},"ENGLISH":"English","ARRAY":["ONE","TWO","EIGHT"],"cat":"Cat","cat_name":"Cat: {name}","set-up-password":{"heading":"Hello, {username}","title":"Forgot password","followLink":"Please follow the link to set up your password"},"day_interval":{"one":"Every day","other":"Every {count} days","zero":"Never"},"nested":"We go shopping: $t(test.day_interval, {{"count": {count} }})"}';
describe('FileService', () => {
  const fileService = new FileService();
  describe('root', () => {
    it('should create and remove the file from src and dist should auto update.', () => {
      const dto: I18nFileDto = {
        stringType: 'test1',
        language: 'en',
        jsonBody: test1,
      };
      const filePath = `${stringPath}/${dto.language}/${dto.stringType}.json`;
      const distFilePath = `${distPath}/${dto.language}/${dto.stringType}.json`;
      fileService.saveFile(dto);

      fs.rmSync(filePath);
      expect(fs.existsSync(distFilePath)).toBe(false);
      expect(fs.existsSync(filePath)).toBe(false);
    });
    it('should create and remove the file from src and dist should auto update.', () => {
      const dto: I18nFileDto = {
        stringType: 'test1',
        language: 'en',
        jsonBody: test1,
      };
      const filePath = `${stringPath}/${dto.language}/${dto.stringType}.json`;
      const distFilePath = `${distPath}/${dto.language}/${dto.stringType}.json`;
      fileService.saveFile(dto);

      fs.rmSync(filePath);
      expect(fs.existsSync(distFilePath)).toBe(false);
      expect(fs.existsSync(filePath)).toBe(false);
    });
  });
});
