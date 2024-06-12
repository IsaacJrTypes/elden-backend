import { Injectable, HttpException,HttpStatus } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Region, RegionDocument } from './entities/region.entity';

@Injectable()
export class RegionsService {
  constructor(@InjectModel(Region.name) private regionModel: Model<RegionDocument>) {}
  
  async create(createRegionDto: CreateRegionDto) {
    const createRegion = new this.regionModel(createRegionDto)
    if (!createRegion) throw new HttpException(
      'Error creating region in Mongo',
      HttpStatus.INTERNAL_SERVER_ERROR
    );
    return createRegion.save();
  }

  async findAll() {
    return this.regionModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} region`;
  // }

  // update(id: number, updateRegionDto: UpdateRegionDto) {
  //   return `This action updates a #${id} region`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} region`;
  // }
}
