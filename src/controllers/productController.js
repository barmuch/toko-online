import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../services/productService.js';
import { sendResponse } from '../utils/response.js';

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await getProducts();
        sendResponse(res, 200, 'Products fetched successfully', products);
    } catch (error) {
        next(error);
    }
};

export const getProduct = async (req, res, next) => {
    try {
        const product = await getProductById(req.params.id);
        sendResponse(res, 200, 'Product fetched successfully', product);
    } catch (error) {
        next(error);
    }
};

export const addProduct = async (req, res, next) => {
    try {
        const product = await createProduct(req.body);
        sendResponse(res, 201, 'Product created successfully', product);
    } catch (error) {
        next(error);
    }
};

export const editProduct = async (req, res, next) => {
    try {
        const product = await updateProduct(req.params.id, req.body);
        sendResponse(res, 200, 'Product updated successfully', product);
    } catch (error) {
        next(error);
    }
};

export const removeProduct = async (req, res, next) => {
    try {
        await deleteProduct(req.params.id);
        sendResponse(res, 200, 'Product deleted successfully');
    } catch (error) {
        next(error);
    }
};
