import { Module } from '@nestjs/common';
import { CreateTaskController } from 'src/controllers/task/create-task.controller';
import { CreateTaskService } from 'src/services/task/create-task.service';
import { ListModule } from './task/list.module';
import { DeleteTaskModule } from './task/delete-task.module';
import { CreateCategory } from './category/create-category.module';

@Module({
  imports: [ListModule, DeleteTaskModule, CreateCategory],
  controllers: [CreateTaskController],
  providers: [CreateTaskService],
})
export class AppModule {}

/**
 * Possible changes here for better pratices.
 */
