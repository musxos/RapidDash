import { PartialType } from '@nestjs/mapped-types';
import { InsertTaskDto } from './insert-task.dto';

export class UpdateTaskDto extends PartialType(InsertTaskDto) {}
