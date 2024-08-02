import { IsArray, IsOptional, IsString, IsNumberString } from 'class-validator';
import { Task } from '@prisma/client';

export class CreateCategoryDto {
  @IsNumberString()
  id: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsArray()
  task: Task[];
}
