import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { CreateCategoryDto } from 'src/dto/create-category.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CreateCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const { name, description } = createCategoryDto;

    const task = await this.prisma.category.create({
      data: {
        name,
        description,
      },
    });

    return task;
  }
}
