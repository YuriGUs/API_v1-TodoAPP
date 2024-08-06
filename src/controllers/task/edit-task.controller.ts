import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { EditTaskDto } from 'src/dto/edit-task.dto';
import { EditTaskService } from 'src/services/task/edit-task.service';

@Controller('task')
export class EditTaskController {
  constructor(private readonly editTaskService: EditTaskService) {}

  @Put(':id')
  async editTask(@Param('id') id: string, @Body() editTaskDto: EditTaskDto) {
    try {
      editTaskDto.id = id;
      return this.editTaskService.editTask(editTaskDto);
    } catch (error) {
      console.error('Error updating task:', error);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

/**
 *
 * new knowledge acquired!
 * here -> editTask(@Param('id') id: string, @Body() editTaskDto: EditTaskDto)
 * first, we use the @param('id') decorator to identify the task we want to edit, in this case, is the ID.
 * after this, we have the @Body() decorator which receives updated data for the task.
 * Finally, we use the data that we get from the @body to edit the task.
 *
 */
