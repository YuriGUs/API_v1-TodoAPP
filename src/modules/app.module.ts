import { Module } from '@nestjs/common';
import { ListModule } from './task/list.module';
import { DeleteTaskModule } from './task/delete-task.module';
import { CreateCategory } from './category/create-category.module';
import { CreateTaskModule } from './task/create-task.module';
import { DeleteCategoryModule } from './category/delete-category.module';
import { ListCategoryModule } from './category/list-category.module';

@Module({
  imports: [
    ListModule,
    DeleteTaskModule,
    CreateCategory,
    CreateTaskModule,
    DeleteCategoryModule,
    ListCategoryModule,
  ],
})
export class AppModule {}

/**
 * Possible changes here for better pratices.
 */
