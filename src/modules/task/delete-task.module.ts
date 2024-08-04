import { Module } from '@nestjs/common';
import { DeleteTaskController } from 'src/controllers/task/delete-task.controller';
import { DeleteTaskService } from 'src/services/task/delete-task.service';
import { PrismaModule } from '../prisma/Prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DeleteTaskController],
  providers: [DeleteTaskService],
})
export class DeleteTaskModule {}
