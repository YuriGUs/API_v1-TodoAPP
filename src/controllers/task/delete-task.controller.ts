import { Controller, Delete, Query } from '@nestjs/common';
import { DeleteTaskService } from 'src/services/task/delete-task.service';

@Controller('task')
export class DeleteTaskController {
  constructor(private readonly deleteTaskService: DeleteTaskService) {}

  @Delete('deleteById')
  async deleteTask(@Query('id') id: string) {
    return this.deleteTaskService.deleteTask({ id });
  }
}
