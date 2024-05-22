import { Response, Request } from 'express';
import { ProductServices } from './product.service';
import productSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const { error } = productSchema.validate(productData);
    console.log(error);

    //will all service function to send this data
    const result = await ProductServices.createProduct(productData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Could not create Product!',
      error: error.details,
    });
  }
};
//get all product
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: 'Product found successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Could not found product data!',
      error: err,
    });
  }
};
//get single product
const getSingleProductbyId = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductbyId(productId);
    res.status(200).json({
      success: true,
      message: 'Product found successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Could not found product data!',
      error: err,
    });
  }
};
//update one  product name
const updateProductbyId = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.updateSingleProductbyId(productId);
    res.status(200).json({
      success: true,
      message: 'Product update successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Could not found product data!',
      error: err,
    });
  }
};
export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProductbyId,
  updateProductbyId,
};
