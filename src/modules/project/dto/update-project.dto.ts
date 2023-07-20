import { PartialType } from '@nestjs/mapped-types';
import { InsertProjectDto } from './insert-project.dto';

export class UpdateProjectDto extends PartialType(InsertProjectDto) {}
