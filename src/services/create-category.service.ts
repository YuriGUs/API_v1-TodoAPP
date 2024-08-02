import { Injectable } from '@nestjs/common';
import { Category, PrismaClient } from '@prisma/client';
import { todo } from 'node:test';
import { CreateCategoryDto } from 'src/dto/create-category.dto';

@Injectable()
export class CreateCategoryService {
  private prisma = new PrismaClient();

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const { id, name, description, task } = createCategoryDto;

    return this.prisma.category.create({
      data: {
        id,
        name,
        description,
      },
    });
  }
}

/**
 * @todo
 */
