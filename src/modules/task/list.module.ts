import { Module } from '@nestjs/common';
import { ListTaskController } from 'src/controllers/task/list-task.controller';
import { ListTaskService } from 'src/services/task/list-task.service';
import { PrismaModule } from '../prisma/Prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ListTaskController],
  providers: [ListTaskService],
})
export class ListModule {}
