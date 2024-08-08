import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/Prisma.module';
import { EditCategoryController } from 'src/controllers/category/edit-category.controller';
import { EditCategoryService } from 'src/services/category/edit-category.service';

@Module({
  imports: [PrismaModule],
  controllers: [EditCategoryController],
  providers: [EditCategoryService],
})
export class EditCategoryModule {}
