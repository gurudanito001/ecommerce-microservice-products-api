import Product from '../models/Product';

function ProductServices() {
    return {
        listProducts: () => Product.find(),
        findOneProduct: (id) => Product.findById( id ),
        createProduct: data => new Product(data).save(),
        updateProduct: (orderId, data) => Product.findByIdAndUpdate(orderId, data, {new: true}),
        deleteProduct: id => Product.findByIdAndRemove(id)
    };
}

export default ProductServices() 

