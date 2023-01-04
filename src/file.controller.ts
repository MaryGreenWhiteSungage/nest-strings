import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { FileService } from './file.service';
import { I18nFileDto } from './i18n.dto';

const DEFAULT_STRING_GROUP = 'funding';
@Controller()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('i18n/:stringGroup')
  async getI18n(
    @I18n() i18n: I18nContext,
    @Param('stringGroup') stringGroup: string = DEFAULT_STRING_GROUP,
  ) {
    return await i18n.t(stringGroup);
  }

  @Get(':stringGroup')
  async getAll(
    @I18n() i18n: I18nContext,
    @Param('stringGroup') stringGroup: string = DEFAULT_STRING_GROUP,
  ) {
    console.log(`StringType is: ${stringGroup} Language: ${i18n.lang} `);
    return await this.fileService.readFile(stringGroup, i18n.lang);
  }

  @Post()
  async save(@Body() i18nOptions: I18nFileDto) {
    return await this.fileService.saveFile(i18nOptions);
  }
}
