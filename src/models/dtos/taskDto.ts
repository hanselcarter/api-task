import { Task } from '../task';

export type TaskDto = Omit<Task, 'id' | 'createdAt'>;
export type TaskDtoCreate = Omit<Task, 'id'>;
