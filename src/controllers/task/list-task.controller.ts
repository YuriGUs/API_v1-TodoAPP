import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ListTaskService } from 'src/services/task/list-task.service';

@ApiTags('Tarefas')
@Controller('task')
export class ListTaskController {
  constructor(private readonly listTaskService: ListTaskService) {}

  @Get('list')
  async ListTask() {
    return this.listTaskService.ListTask();
  }
}
