import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './models/task';
import { TaskDto, TaskDtoCreate } from './models/dtos/taskDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Gets api info on the root
   */
  @Get()
  public getApiInfo(): string {
    return this.appService.getApiInfo();
  }

  /**
   * Get all tasks from DB
   */
  @Get('/tasks')
  public async getTasks(): Promise<Task[] | HttpException> {
    return this.appService.getTasks();
  }

  /**
   * Receives a task dto as body which is a task without the id and the created at prop
   * Then we create task into the db
   */
  @Post('/task')
  public async createTask(
    @Body() task: TaskDtoCreate,
  ): Promise<Task | HttpException> {
    return this.appService.createTask(task);
  }

  /**
   * Receives a task dto as body which is a task without the id and the created at prop
   * Then we update task that has id coming in the params into the db
   */
  @Put('/task/:id')
  public async updateTask(
    @Param() params: { id: string },
    @Body() task: TaskDto,
  ): Promise<TaskDto | HttpException> {
    return this.appService.updateTask(params.id, task);
  }

  /**
   * Receives a task id as param to delete the task containing that id
   */
  @Delete('/task/:id')
  public async deleteTask(
    @Param() params: { id: string },
  ): Promise<string | HttpException> {
    return this.appService.deleteTask(params.id);
  }
}
