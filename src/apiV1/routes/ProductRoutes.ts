import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const Product: Router = Router();
const controller = new ProductController();

// Retrieve all Orders
Product.get('/', controller.findAll);

// Retrieve a Specific Order
Product.get('/:id', controller.findOne);

// Create a Specific Order
Product.post('/add', controller.create);

// Update an Order with Id
Product.put('/update/:id', controller.update);

// Delete an Order with Id
Product.delete('/delete/:id', controller.delete);


export default Product;
