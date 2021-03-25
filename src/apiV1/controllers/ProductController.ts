import { Request, Response } from 'express';
import ProductServices from '../services/ProductServices';
import Helpers from '../../helpers/messageHelpers';
import Product from '../models/Product';

const MessageHelpers = new Helpers();

export default class ProductController {

    public findAll = async (req: Request, res: Response): Promise<any> => {
        try {
            const products = await ProductServices.listProducts();
            if (!products) {
                return res.status(404).send(
                    MessageHelpers.errorResponse("Products Not Found")
                );
            }

            res.status(200).send(
                MessageHelpers.successResponse("Products request was successful", products)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };

    public findOne = async (req: Request, res: Response): Promise<any> => {
        try {
            const product = await ProductServices.findOneProduct(req.params.id);
            if (!product) {
                return res.status(404).send(
                    MessageHelpers.errorResponse("Product Not Found")
                );
            }

            res.status(200).send(
                MessageHelpers.successResponse("Product request was successful", product)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };

    public create = async (req: Request, res: Response): Promise<any> => {
        const { name, description, price, vendorId, categoryId } = req.body;
        try {
            const productData = { name, description, price, vendorId, categoryId }
            const product = await ProductServices.createProduct(productData);
            if (!product) {
                return res.status(400).send(
                    MessageHelpers.errorResponse("Error Creating Product")
                );
            }

            res.status(200).send(
                MessageHelpers.successResponse("Product Created Successfully", product)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };

    public update = async (req: Request, res: Response): Promise<any> => {
        const { name, description, price, vendorId, categoryId } = req.body;
        try {
            const productData = { name, description, price, vendorId, categoryId }
            const updatedProduct = await ProductServices.updateProduct( req.params.id, productData)
                
            if (!updatedProduct) {
                return res.status(404).send(
                    MessageHelpers.errorResponse("Product Not Found")
                );
            }
            res.status(200).send(
                MessageHelpers.successResponse("Product Updated Successfully", updatedProduct)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };

    public delete = async (req: Request, res: Response): Promise<any> => {
        try {
            const product = await ProductServices.deleteProduct(req.params.id);

            if (!product) {
                return res.status(404).send(
                    MessageHelpers.errorResponse("Product Not Found")
                );
            }
            res.status(200).send(
                MessageHelpers.successResponse("Product deleted Successfull", product)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };
}



