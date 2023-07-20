import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  createTask(task: Task) {
    return this.taskModel.create(task);
  }

  updateTask(id: string, task: Partial<Task>) {
    return this.taskModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          ...task,
        },
      },
    );
  }

  deleteTask(id: string) {
    return this.taskModel.deleteOne({
      _id: id,
    });
  }

  getTasks() {
    return this.taskModel.find({});
  }
}
