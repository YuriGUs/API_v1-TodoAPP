import { Module } from '@nestjs/common';
import { EditTaskController } from 'src/controllers/task/edit-task.controller';
import { EditTaskService } from 'src/services/task/edit-task.service';
import { PrismaModule } from '../prisma/Prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EditTaskController],
  providers: [EditTaskService],
})
export class EditTaskModule {}
