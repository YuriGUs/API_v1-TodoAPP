import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Priority } from '@prisma/client';

export class EditTaskDto {
  /**
   * ID da tarefa a ser editada
   * @example "4e08d7a7-fd34-4b9b-88a8-5c8a8d2b4d8a"
   */
  @IsString()
  id: string;

  /**
   * Novo título da tarefa
   * @example "Atualizar o software para a versão 2.0"
   */
  @IsString()
  title: string;

  /**
   * Nova descrição da tarefa
   * @example "Atualização necessária para incluir novos recursos e corrigir bugs."
   */
  @IsOptional()
  @IsString()
  description: string;

  /**
   * Nova prioridade da tarefa: LOW, MEDIUM, ou HIGH
   * @example "HIGH"
   */
  @IsEnum(Priority)
  priority: Priority;
}
