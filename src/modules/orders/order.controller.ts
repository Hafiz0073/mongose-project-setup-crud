import { OrderServices } from './order.service';
import { Response, Request } from 'express';

const createOrder = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    // console.log(productData);
    const result = await OrderServices.createOrder(productData);

    res.status(200).json({
      success: true,
      message: 'order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Could not create order!',
    });
  }
};
//get all product
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email }: any = req.query;
    const result = await OrderServices.getAllOrders(email);
    res.status(200).json({
      success: true,
      message: 'order found successfully',
      data: result,
    });
  } catch (err: unknown) {
    res.status(500).json({
      success: false,
      message: 'Could not found order data!',
      error: err,
    });
  }
};
export const OrderController = {
  createOrder,
  getAllOrders,
};
