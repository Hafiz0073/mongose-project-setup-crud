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
router.patch('/:productId', ProductController.updateProductbyId);

export const ProductRouter = router;
