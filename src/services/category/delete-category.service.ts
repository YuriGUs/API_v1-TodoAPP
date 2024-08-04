import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DeleteCategoryDto } from 'src/dto/delete-category.dto';

@Injectable()
export class DeleteCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async deleteCategory(deleteCategoryDto: DeleteCategoryDto) {
    const { id } = deleteCategoryDto;

    try {
      return await this.prisma.category.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException('Category not found or cannot be deleted');
    }
  }
}
