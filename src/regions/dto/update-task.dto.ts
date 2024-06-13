import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  complete: boolean;
}
