import { IsBoolean } from 'class-validator';

export class MarkTaskCompletedDto {
  @IsBoolean()
  completed: boolean;
}
