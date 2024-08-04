import { Injectable } from '@nestjs/common';
import { Category, PrismaClient } from '@prisma/client';
import { CreateCategoryDto } from 'src/dto/create-category.dto';

@Injectable()
export class CreateCategoryService {
  private prisma = new PrismaClient();

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const { name, description } = createCategoryDto;

    return this.prisma.category.create({
      data: {
        name,
        description,
      },
    });
  }
}
