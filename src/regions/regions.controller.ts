import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionsService.create(createRegionDto);
  }

  @Get()
  findAll() {
    return this.regionsService.findAll();
  }

  @Get(':regionID')
  findOne(@Param('regionID') regionID: number) {
    return this.regionsService.findOne(+regionID);
  }

  @Put(':regionID')
updateTasks(@Param('regionID') regionID: number,@Body() updateTasksDto: { tasks: UpdateTaskDto[] }) {
  return this.regionsService.updateTasks(regionID, updateTasksDto.tasks);
}

  @Delete(':regionID')
  remove(@Param('regionID') regionID: number) {
    return this.regionsService.remove(regionID);
  }
}
