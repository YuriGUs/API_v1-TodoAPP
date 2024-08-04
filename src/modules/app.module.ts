import { Module } from '@nestjs/common';
import { ListModule } from './task/list.module';
import { DeleteTaskModule } from './task/delete-task.module';
import { CreateCategory } from './category/create-category.module';
import { CreateTaskModule } from './task/create-task.module';

@Module({
  imports: [ListModule, DeleteTaskModule, CreateCategory, CreateTaskModule],
})
export class AppModule {}

/**
 * Possible changes here for better pratices.
 */
