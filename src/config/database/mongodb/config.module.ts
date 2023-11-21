import { Module } from '@nestjs/common';
import { MongodbConfigService } from './config.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        MONGODB_URL: Joi.string(),
        MONGODB_DATABASE: Joi.string(),
      }),
    }),
  ],
  providers: [MongodbConfigService],
  exports: [MongodbConfigService],
})
export class MongodbConfigModule {}
