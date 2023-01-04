import { Module } from '@nestjs/common';

import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileService } from './file.service';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, FileService],
})
export class AppModule {}
