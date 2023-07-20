import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from 'src/schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<ProjectDocument>,
  ) {}

  searchProject(str: string) {
    return this.projectModel
      .find(
        {
          $or: [
            {
              name: {
                $regex: `${str}`,
                $options: 'i',
              },
            },
            {
              description: {
                $regex: `${str}`,
                $options: 'i',
              },
            },
            {
              tags: {
                $regex: `${str}`,
                $options: 'i',
              },
            },
          ],
        },
        undefined,
        {
          limit: 10,
        },
      )
      .lean();
  }

  getProjectById(id: string) {
    return this.projectModel.findById(id).lean();
  }

  getProjects({ page, limit }: { page?: number; limit?: number }) {
    return this.projectModel
      .find({}, undefined, {
        skip: page * limit - page,
        limit: limit,
      })
      .lean();
  }

  createProject(project: Project) {
    return this.projectModel.create(project);
  }

  deleteProject(id: string) {
    return this.projectModel.deleteOne({
      _id: id,
    });
  }

  updateProject(id: string, payload: Partial<Project>) {
    return this.projectModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          ...payload,
        },
      },
    );
  }
}
