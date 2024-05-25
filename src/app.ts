import express, { Request, Response } from 'express';
import { ProductRouter } from './modules/products/product.route';
import { OrderRouter } from './modules/orders/order.route';

const app = express();
app.use(express.json());
app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello w!');
});

export default app;
