import mongoose from 'mongoose';
import { MongoClient, ObjectId } from 'mongodb';
import { ProductModel } from '../products/product.model';
import { POrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: POrder) => {
  try {
    const product = await ProductModel.findOne({
      _id: new ObjectId(payload.productId),
    });
    // console.log(product);
    //check product id
    if (!product) {
      throw new Error('Product not found');
    }
    //check quantity
    if (product.inventory.quantity < payload.quantity) {
      throw new Error(
        'Insufficient quantity available in inventory quantity not enough',
      );
    }

    const result = await Order.create(payload);
    const updateProductQty = await ProductModel.findOneAndUpdate(
      { _id: new ObjectId(payload.productId) },
      [
        {
          $set: {
            'inventory.quantity': {
              $subtract: ['$inventory.quantity', payload.quantity],
            },
            'inventory.inStock': {
              $cond: {
                if: {
                  $lte: [
                    { $subtract: ['$inventory.quantity', payload.quantity] },
                    0,
                  ],
                },
                then: false,
                else: true,
              },
            },
          },
        },
      ],
      { returnOriginal: false, new: true },
    );
    // const updateProductQty = await ProductModel.findOneAndUpdate(
    //   { _id: new ObjectId(payload.productId) },
    //   { $inc: { 'inventory.quantity': -payload.quantity } },
    //   { returnOriginal: false },
    // );
    // if (updateProductQty.inventory.quantity === 0) {
    //   await ProductModel.updateOne(
    //     { _id: new ObjectId(payload.productId) },
    //     { $set: { 'inventory.inStock': false } },
    //   );
    // }
    return result;

    // return savedOrder;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const OrderServices = {
  createOrder,
};
