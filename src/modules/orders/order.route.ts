import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

//create route
router.post('/', OrderController.createOrder);
//order get route
router.get('/', OrderController.getAllOrders);
//Total orders route by email
router.get('/');

export const OrderRouter = router;
