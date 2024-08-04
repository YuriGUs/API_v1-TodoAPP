import {
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { DeleteTaskService } from 'src/services/task/delete-task.service';

@Controller('task')
export class DeleteTaskController {
  constructor(private readonly deleteTaskService: DeleteTaskService) {}

  @Delete('deleteById')
  async deleteTask(@Query('id') id: string) {
    try {
      await this.deleteTaskService.deleteTask({ id });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
