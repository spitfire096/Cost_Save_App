import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CostDocument = Cost & Document;

@Schema()
export class Cost {
  @Prop({ type: String, required: true })
  service!: string;

  @Prop({ type: Number, required: true })
  amount!: number;

  @Prop({ type: String, required: true })
  date!: string;
}

export const CostSchema = SchemaFactory.createForClass(Cost);