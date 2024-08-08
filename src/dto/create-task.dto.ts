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

  @IsOptional()
  @IsEnum(Priority, {
    message: 'Priority must be either LOW, MEDIUM, or HIGH',
    /**
     * Validates if the values of priority is 'low', 'medium', 'high'. if not, return the message.
     * Be sure to put the priorities in capital letters. By default the value is MEDIUM.
     */
  })
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  @IsArray()
  @IsString({ each: true })
  categories: string[];
}
