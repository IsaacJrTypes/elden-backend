import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Region, RegionDocument } from './entities/region.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class RegionsService {
  constructor(
    @InjectModel(Region.name) private regionModel: Model<RegionDocument>,
  ) {}

  async create(createRegionDto: CreateRegionDto):Promise<RegionDocument> {
    const createRegion = new this.regionModel(createRegionDto);
    if (!createRegion)
      throw new HttpException(
        'Error creating region in Mongo',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return createRegion.save();
  }

  async findAll() {
    return this.regionModel.find().exec();
  }

  async findOne(regionID: number):Promise<RegionDocument> {
    const region = await this.regionModel.findOne({ regionID }).exec();
    if (!region) {
      throw new HttpException('Region not found', HttpStatus.NOT_FOUND);
    }
    return region;
  }

   async updateTasks(regionID: number, tasks: UpdateTaskDto[]): Promise<RegionDocument> {
    const region = await this.findOne(regionID);
    if (!region) {
      throw new HttpException(`Region with ID ${regionID} not found for updating`, HttpStatus.BAD_REQUEST);
    }
    region.tasks = tasks;

    return region.save();
  }

  async remove(regionID: number): Promise<RegionDocument> {
    const region = await this.regionModel.findOneAndDelete({ regionID }).exec();
    if (!region) {
      throw new HttpException(`RegionID ${regionID} not found for deletion`, HttpStatus.BAD_REQUEST);
    }
    return region;
  }
}
