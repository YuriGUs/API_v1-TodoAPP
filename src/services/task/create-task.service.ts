import { Injectable } from '@nestjs/common';
import { PrismaClient, Task } from '@prisma/client';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Injectable()
export class CreateTaskService {
  private prisma = new PrismaClient();

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description, dueDate, priority, categories } = createTaskDto;
    // here we getting the informations about the table on BD.

    return this.prisma.task.create({
      data: {
        title,
        description,
        dueDate,
        priority,
        categories: {
          // Task needs IDs from category on the. Body To work.
          connect: categories.map((categoryId) => ({ id: categoryId })),
        },
      },
    });
  }
}

/**
 * At this moment, i was surprised with error where the app notify me
 * that was missing some arguments from task.create. The problems for me
 * was really boring, because i just should have passed the category ID array
 * on the body not with the name about the especify category, like "Category 1",
 * but, the category ID, like "be4-642f-4d7e-bb6d-d091b234dc51".
 *
 * I just forgot that is require categoryID. :).
 *
 */

// Writing in english for training
