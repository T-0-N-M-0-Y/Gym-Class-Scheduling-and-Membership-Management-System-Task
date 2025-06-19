import { Schema, model } from 'mongoose';
import { TClass } from './classInterface';

const classSchema = new Schema<TClass>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ClassModel = model<TClass>('Class', classSchema);
