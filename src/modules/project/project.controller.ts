import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Types } from 'mongoose';
import { escapeRegExp } from 'src/app/utils/escape-regExp';
import { InsertProjectDto } from './dto/insert-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('search')
  getProjectsByText(@Query('q') q: string) {
    q = escapeRegExp(q);

    return this.projectService.searchProject(q);
  }

  @Get(':id')
  getProjectById(@Param('id') id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('id is not valid');
    }

    return this.projectService.getProjectById(id);
  }

  @Get()
  getProjects(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.projectService.getProjects({
      page,
      limit,
    });
  }

  @Post()
  @UseGuards(AuthGuard)
  insertProject(@Body() dto: InsertProjectDto) {
    return this.projectService.createProject(dto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  updateProject(@Param('id') id: string, @Body() dto: UpdateProjectDto) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('id parameter is not valid');
    }

    return this.projectService.updateProject(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteProject(@Param('id') id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('id is not valid');
    }

    return this.projectService.deleteProject(id);
  }
}
