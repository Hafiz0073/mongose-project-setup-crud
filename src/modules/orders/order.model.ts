import { number, string } from 'joi';
import { POrder } from './order.interface';
import { Schema, model } from 'mongoose';

const OrderSchema = new Schema<POrder>({
  productId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export const Order = model<POrder>('Order', OrderSchema);
