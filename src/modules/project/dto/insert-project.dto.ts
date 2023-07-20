import { IsArray, IsOptional, IsString } from 'class-validator';
import { Project } from 'src/schemas/project.schema';

export class InsertProjectDto implements Project {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  tags: string[];

  @IsOptional()
  @IsString()
  projectUrl?: string;

  @IsString()
  image: string;
}
