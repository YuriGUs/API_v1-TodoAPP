import { Module } from '@nestjs/common';
import { CreateCategoryController } from 'src/controllers/create-category.controller';
import { CreateTaskController } from 'src/controllers/create-task.controller';
import { CreateCategoryService } from 'src/services/create-category.service';
import { CreateTaskService } from 'src/services/create-task.service';

@Module({
  imports: [],
  controllers: [CreateTaskController, CreateCategoryController],
  providers: [CreateTaskService, CreateCategoryService],
})
export class AppModule {}
