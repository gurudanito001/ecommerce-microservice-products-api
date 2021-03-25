import { Router } from 'express';
import Product from './routes/ProductRoutes';

const router: Router = Router();

router.use('/products', Product);

export default router;
