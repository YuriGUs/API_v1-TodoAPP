import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  /**
   * Nome da categoria
   * @example "Futebol"
   */
  @IsString()
  name: string;

  /**
   * Descrição da categoria
   * @example "Categoria destinada para conteúdos sobre futebol"
   */
  @IsOptional()
  @IsString()
  description?: string;
}
