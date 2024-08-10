import {
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteTaskService } from 'src/services/task/delete-task.service';
import { DeleteTaskDto } from 'src/dto/delete-task.dto';

@ApiTags('Tarefas')
@Controller('task')
export class DeleteTaskController {
  constructor(private readonly deleteTaskService: DeleteTaskService) {}

  @Delete('deleteById')
  async deleteTask(@Body() deleteTaskDto: DeleteTaskDto) {
    try {
      await this.deleteTaskService.deleteTask(deleteTaskDto);
      return { message: 'Task deleted with success' };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
