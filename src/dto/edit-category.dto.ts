import { IsOptional, IsString } from 'class-validator';

export class EditCategoryDto {
  /**
   * ID da categoria a ser editada
   * @example "9f1f7a8d-2b6d-4c4f-8d1e-2f9f4a91e3f3"
   */
  @IsString()
  id: string;

  /**
   * Novo nome da categoria
   * @example "Urgente"
   */
  @IsString()
  name: string;

  /**
   * Nova descrição da categoria
   * @example "Tarefas que precisam ser concluídas com urgência"
   */
  @IsOptional()
  @IsString()
  description?: string;
}
