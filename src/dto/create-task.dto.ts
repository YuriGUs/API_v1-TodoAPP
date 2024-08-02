import { Priority } from '@prisma/client';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  dueDate?: Date;

  @IsEnum(Priority)
  priority: Priority;

  @IsArray()
  @IsString({ each: true })
  categories: string[];
}
