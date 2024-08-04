import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/Prisma.module';
import { ListCategoryController } from 'src/controllers/category/list-category.controller';
import { ListCategoryService } from 'src/services/category/list-category.service';

@Module({
  imports: [PrismaModule],
  controllers: [ListCategoryController],
  providers: [ListCategoryService],
})
export class ListCategoryModule {}
