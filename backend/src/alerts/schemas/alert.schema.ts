import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AlertDocument = Alert & Document;

@Schema()
export class Alert {
  @Prop({ required: true })
  message!: string;

  @Prop({ required: true })
  type!: string;

  @Prop({ default: Date.now })
  createdAt!: Date;
}

export const AlertSchema = SchemaFactory.createForClass(Alert);