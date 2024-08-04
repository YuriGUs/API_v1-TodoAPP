import { Module } from '@nestjs/common';
import { CreateTaskController } from 'src/controllers/task/create-task.controller';
import { CreateTaskService } from 'src/services/task/create-task.service';
import { PrismaModule } from '../prisma/Prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CreateTaskController],
  providers: [CreateTaskService],
})
export class CreateTaskModule {}

/**
 * Possible changes here for better pratices.
 */
