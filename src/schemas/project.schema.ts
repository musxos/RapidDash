import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Project {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: Array,
    default: [],
  })
  tags: string[];

  @Prop({
    type: String,
    required: false,
  })
  projectUrl?: string;

  @Prop({
    type: String,
    required: false,
  })
  image: string;
}

export const schema = SchemaFactory.createForClass(Project);
