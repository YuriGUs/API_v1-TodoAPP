import { IsArray, IsOptional, IsString, IsNumberString } from 'class-validator';
import { Task } from '@prisma/client';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
