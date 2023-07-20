import { IsArray, IsString } from 'class-validator';
import { Task } from 'src/schemas/task.schema';

export class InsertTaskDto implements Task {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  list: string[];
}
