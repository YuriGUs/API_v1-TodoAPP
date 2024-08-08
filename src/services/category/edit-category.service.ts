import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditCategoryDto } from 'src/dto/edit-category.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class EditCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async editCategory(editCategoryDto: EditCategoryDto) {
    const { id, name, description } = editCategoryDto;

    try {
      const updatedCategory = await this.prisma.category.update({
        where: { id },
        data: { name, description },
      });
      return updatedCategory;
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
 * @Error This specific error code (P2025) indicates that the database query or modification
 * operation did not find any matching records. In other words, this occurs when you try
 * to search, update or delete a record that doesn't exist.
 */
