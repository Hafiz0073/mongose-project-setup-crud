import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProduct = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

//get or show product
const getAllProducts = async (searchTerm: string) => {
  let products;
  let searchRegex = new RegExp(searchTerm, 'i');
  if (searchTerm) {
    products = await ProductModel.find({
      $or: [{ name: searchRegex }, { description: searchRegex }],
    });
  } else {
    products = await ProductModel.find();
  }
  return products;
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
      useFindAndModify: false,
      upsert: true, // Make this update into an upsert
    },
  );
  return result;
};
//delete one product

const deleteSingleProductbyId = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProductbyId,
  updateSingleProductbyId,
  deleteSingleProductbyId,
};
