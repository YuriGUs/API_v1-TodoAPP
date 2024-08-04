import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteTaskDto } from 'src/dto/delete-task.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class DeleteTaskService {
  constructor(private prisma: PrismaService) {}

  async deleteTask(deleteTaskDto: DeleteTaskDto) {
    const { id } = deleteTaskDto;

    try {
      return await this.prisma.task.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException('Task not found or cannot be deleted');
    }
  }
}
