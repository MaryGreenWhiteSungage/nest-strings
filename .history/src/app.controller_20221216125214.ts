import { Controller, Get, Param, Post } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

import { AppService } from './app.service';
import { FileService } from './file.service';
import { I18nFileDto } from './i18n.dto';

const DEFAULT_STRING_GROUP = 'funding';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly FileService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  async getInternationalHello(@I18n() i18n: I18nContext) {
    return await i18n.t(`${DEFAULT_STRING_GROUP}.HELLO`);
  }

  @Get(':stringGroup')
  async getAll(
    @I18n() i18n: I18nContext,
    @Param('stringGroup') stringGroup: string = DEFAULT_STRING_GROUP,
  ) {
    return await i18n.t(stringGroup);
  }

  @Post(':stringGroup:language')
  async save(
    @I18n() i18n: I18nContext,
    @Body() createCatDto: i18nFileDto
    @Param('stringGroup') stringGroup: string = DEFAULT_STRING_GROUP,
  ) {
    return await i18n.t(stringGroup);
  }  
}
