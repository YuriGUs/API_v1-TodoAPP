import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ListCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async listCategory() {
    try {
      return this.prisma.category.findMany();
    } catch (error) {
      throw new NotFoundException('Categories not found or cannot be listed');
    }
  }
}
