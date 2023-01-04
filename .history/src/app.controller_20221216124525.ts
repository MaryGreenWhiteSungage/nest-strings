import { Controller, Get, Param } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

import { AppService } from './app.service';

const DEFAULT_STRING_GROUP = 'funding';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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

  @Put(':stringGroup:language')
  async getAll(
    @I18n() i18n: I18nContext,
    @Param('stringGroup') stringGroup: string = DEFAULT_STRING_GROUP,
  ) {
    return await i18n.t(stringGroup);
  }  
}
