import { Module } from '@nestjs/common';
import { CreateCategoryController } from 'src/controllers/category/create-category.controller';
import { CreateCategoryService } from 'src/services/category/create-category.service';

@Module({
  imports: [],
  controllers: [CreateCategoryController],
  providers: [CreateCategoryService],
})
export class CreateCategory {}
