import express, { Request, Response } from 'express';
import { ProductRouter } from './modules/products/product.route';

const app = express();
app.use(express.json());
app.use('/api/products', ProductRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello w!');
});

export default app;
