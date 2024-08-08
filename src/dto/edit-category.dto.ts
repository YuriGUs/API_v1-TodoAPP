import { IsString } from 'class-validator';

export class EditCategoryDto {
  id: string;

  @IsString()
  name: string;

  @IsString()
  description?: string;
}
