import {
  BadRequestException,
  Injectable,
  HttpException,
  NotFoundException,
} from '@nestjs/common';

import { TaskDto, TaskDtoCreate } from './models/dtos/taskDto';
import dayjs from 'dayjs';
import { apiDescription } from './utils/helpers';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './entities/task.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Task)
    private taskRepository: typeof Task,
  ) {}

  public async getTasks(): Promise<Task[] | HttpException> {
    try {
      return this.taskRepository.findAll();
    } catch (err) {
      throw new BadRequestException();
    }
  }

  public async createTask(task: TaskDtoCreate): Promise<Task | HttpException> {
    try {
      const taskCreated: TaskDtoCreate = {
        ...task,

        createdAt: dayjs().format(),
      };

      return this.taskRepository.create(taskCreated as any);
    } catch (err) {
      throw new BadRequestException();
    }
  }

  public async updateTask(
    id: string,
    task: TaskDto,
  ): Promise<TaskDto | HttpException> {
    try {
      await this.taskRepository.update(task as any, { where: { id: id } });

      return task;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  public async deleteTask(id: string): Promise<string | HttpException> {
    try {
      await this.taskRepository.destroy({ where: { id: id } });
      return id;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  public getApiInfo(): string {
    return apiDescription;
  }
}
