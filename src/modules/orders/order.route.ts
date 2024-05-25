import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

//create route
router.post('/', OrderController.createOrder);

export const OrderRouter = router;
