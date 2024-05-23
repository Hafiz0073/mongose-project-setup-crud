import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();
//create route
router.post('/', ProductController.createProduct);

//get all products route
router.get('/', ProductController.getAllProducts);
//get single product route
router.get('/:productId', ProductController.getSingleProductbyId);
//update one product
router.put('/:productId', ProductController.updateProductbyId);
//delete one product
router.delete('/:productId', ProductController.deleteSingleProductbyId);

export const ProductRouter = router;
