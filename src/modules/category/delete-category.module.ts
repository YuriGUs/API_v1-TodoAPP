import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/Prisma.module';
import { DeleteCategoryController } from 'src/controllers/category/delete-category.controller';
import { DeleteCategoryService } from 'src/services/category/delete-category.service';

@Module({
  imports: [PrismaModule],
  controllers: [DeleteCategoryController],
  providers: [DeleteCategoryService],
})
export class DeleteCategoryModule {}
