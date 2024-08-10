import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { Priority } from '@prisma/client';

export class CreateTaskDto {
  /**
   * Título da tarefa
   * @example "Finalizar relatório"
   */
  @IsString()
  title: string;

  /**
   * Descrição detalhada da tarefa
   * @example "Finalizar o relatório trimestral para apresentação."
   */
  @IsOptional()
  @IsString()
  description?: string;

  /**
   * Data de vencimento da tarefa no formato ISO 8601
   * @example "2024-08-15T14:30:00.000Z"
   */
  @IsOptional()
  dueDate?: Date;

  /**
   * Prioridade da tarefa: LOW, MEDIUM, ou HIGH
   * @example "MEDIUM"
   */
  @IsOptional()
  @IsEnum(Priority, {
    message: 'Priority must be either LOW, MEDIUM, or HIGH',
  })
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';

  /**
   * Categorias associadas à tarefa
   * @example ["trabalho", "urgente", "relatório"]
   */
  @IsArray()
  @IsString({ each: true })
  categories: string[];
}
