import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(request: CreateTaskDto): Task {
    const { title, description } = request;
    console.log('title:', title);
    console.log('description:', description);

    const ctask: Task = {
      id: Number(this.tasks.length) + 1,
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(ctask);
    return ctask;
  }
}
