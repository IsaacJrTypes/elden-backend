
import{IsString, MinLength, IsNotEmpty,IsArray,ArrayMinSize,ArrayNotEmpty,ValidateNested}from 'class-validator'
import { Type } from 'class-transformer';

class TaskDto {
  @IsString()
  @MinLength(2, { message: "Description must have at least 2 characters" })
  @IsNotEmpty()
  description: string;

  complete: boolean;
}


export class CreateRegionDto {
    @IsString()
    @MinLength(2, {message:"Name must have atleast 2 characters"})
    @IsNotEmpty()
    name:string;

    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => TaskDto)
    tasks: TaskDto[];
}
