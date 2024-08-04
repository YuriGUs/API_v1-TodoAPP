import { Controller, Get } from '@nestjs/common';
import { ListTaskService } from 'src/services/task/list-task.service';

@Controller('task')
export class ListTaskController {
  constructor(private readonly listTaskService: ListTaskService) {}

  @Get('list')
  async ListTask() {
    return this.listTaskService.ListTask();
  }
}
