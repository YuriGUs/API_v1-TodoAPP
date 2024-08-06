import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditTaskDto } from 'src/dto/edit-task.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class EditTaskService {
  constructor(private readonly prisma: PrismaService) {}

  async editTask(editTaskDto: EditTaskDto) {
    const { id, title, description, priority } = editTaskDto;

    try {
      const updatedTask = await this.prisma.task.update({
        where: { id },
        data: { title, description, priority },
      });
      return updatedTask;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Check for a specific Prisma error
        if (error.code === 'P2025') {
          throw new NotFoundException(`Task with ID ${id} not found`);
        }
      }
      console.error('Failed to update task:', error);
      throw new InternalServerErrorException('Failed to update task');
    }
  }
}

/**
 * I need to try to improve "my" error handling.
 * end learn about test
 */
