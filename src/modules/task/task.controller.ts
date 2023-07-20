import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Types } from 'mongoose';
import { InsertTaskDto } from './dto/insert-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  @UseGuards(AuthGuard)
  createTask(@Body() dto: InsertTaskDto) {
    return this.taskService.createTask(dto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  updateTask(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('id is not valid');
    }

    return this.taskService.updateTask(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteTask(@Param('id') id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('id is not valid');
    }

    return this.taskService.deleteTask(id);
  }
}
