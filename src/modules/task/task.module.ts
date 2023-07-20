import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, schema } from 'src/schemas/task.schema';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Task.name,
        schema: schema,
      },
    ]),
  ],

  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
