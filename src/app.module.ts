import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv'
//import { AppController } from './app.controller';
//import { AppService } from './app.service';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
