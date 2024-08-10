import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { CreateTaskService } from 'src/services/task/create-task.service';

@ApiTags('Tarefas')
@Controller('task')
export class CreateTaskController {
  constructor(private readonly createTaskService: CreateTaskService) {}
  // This constructor has the "createTaskService"

  @Post('create')
  @UsePipes()
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    // The method POST need some from the body() requesitions, that is type from CreateTaskDto

    /**
     * the return uses the service as a convention in API
     * or, for more details, the CONTROLLER uses the service.
     *
     * the property "createTaskService" has the instance of the class
     * CreateTaskService. That allows we access to the method createTask created
     * in this same class.
     *
     * Using in the parameter the Dto as parameter typed. Like interface. at least for me.
     */
    return this.createTaskService.createTask(createTaskDto);
  }
}
