
import{IsString, MinLength, IsNotEmpty,IsArray,ArrayMinSize,ArrayNotEmpty}from 'class-validator'

export class CreateDogDto {
    
}

export class CreateRegionDto {
    @IsString()
    @MinLength(2, {message:"Name must have atleast 2 characters"})
    @IsNotEmpty()
    name:string;

    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @IsString({ each: true })
    tasks: string[];
}
