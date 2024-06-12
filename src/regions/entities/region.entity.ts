import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegionDocument = Region & Document;

@Schema()
class Task {
  @Prop({ required: true })
  description: string;

  @Prop({ default: false })
  complete: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

@Schema()
export class Region {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  regionID: number;

  @Prop({ default: false })
  complete: boolean;

  @Prop({ type: [TaskSchema], default: [] })
  tasks: Task[];
}

export const RegionSchema = SchemaFactory.createForClass(Region);
