import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProduct = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

//get or show product
const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};
//get single  product
const getSingleProductbyId = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};
//update one  product
const updateSingleProductbyId = async (_id: string) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id },
    { $set: { name: 'xiomi' } },
    {
      new: true,
      upsert: true, // Make this update into an upsert
    },
  );
  return result;
};
export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProductbyId,
  updateSingleProductbyId,
};
