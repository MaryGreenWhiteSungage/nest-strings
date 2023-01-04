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

  @Get('/international')
  async getInternationalHello(@I18n() i18n: I18nContext) {
    return await i18n.t('strings.HELLO');
  }

  @Get('/dayInt')
  async getDayInterval(@I18n() i18n: I18nContext) {
    return await i18n.t('strings.day_interval');
  }

  @Get('':stringGroup')
  async getAll(
    @I18n() i18n: I18nContext,
    @Param('stringGroup') stringGroup: string = DEFAULT_STRING_GROUP,
  ) {
    return await i18n.t(stringGroup);
  }
}
