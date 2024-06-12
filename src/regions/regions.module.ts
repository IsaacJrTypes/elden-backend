import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionsController } from './regions.controller';
import { Region, RegionSchema } from './entities/region.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Region.name, schema: RegionSchema }])
  ],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}
