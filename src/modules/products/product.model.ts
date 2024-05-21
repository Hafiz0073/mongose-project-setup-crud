import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariants } from './product.interface';

//variant schema
const variantSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: [true, 'Type is Required'],
  },
  value: {
    type: String,
    required: true,
  },
});
//inventory schema
const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});
//product schema
const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'Name is Required'],
  },
  description: {
    type: String,
    required: [true, 'description Is Required'],
  },
  price: {
    type: Number,
    required: [true, 'Price must be required'],
  },
  category: {
    type: String,
    required: [true, 'category is required'],
  },
  tags: [
    {
      type: String,
    },
  ],
  variants: [variantSchema],
  inventory: inventorySchema,
});

export const ProductModel = model<TProduct>('Product', productSchema);
