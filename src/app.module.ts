import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv'
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { RegionsModule } from './regions/regions.module';
import { QuestsModule } from './quests/quests.module';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    RegionsModule,
    QuestsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
