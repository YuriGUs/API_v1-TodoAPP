import { Priority } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class EditTaskDto {
  id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(Priority)
  priority: Priority;
}
