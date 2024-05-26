"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // const { error } = productSchema.validate(productData);
        // console.log(error);
        //will all service function to send this data
        const result = yield product_service_1.ProductServices.createProduct(productData);
        // if (error)
        //   res.status(500).json({
        //     success: false,
        //     message: 'Could not create Product!',
        //     error: error.details,
        //   });
        //send response
        res.status(200).json({
            success: true,
            message: 'Product created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Could not create Product!',
            error,
        });
    }
});
//get all product
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.ProductServices.getAllProducts(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term ${searchTerm} fetched successfully!`,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Could not found product data!',
            error: err,
        });
    }
});
//get single product
const getSingleProductbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductbyId(productId);
        res.status(200).json({
            success: true,
            message: 'Product found successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Could not found product data!',
            error: err,
        });
    }
});
//update one  product name
const updateProductbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const { name } = req.body;
        const result = yield product_service_1.ProductServices.updateSingleProductbyId(productId, name);
        res.status(200).json({
            success: true,
            message: 'Product update successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'cannot update succcessfully product data!',
            error: err,
        });
    }
});
//delete single product
const deleteSingleProductbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteSingleProductbyId(productId);
        res.status(200).json({
            success: true,
            message: 'Product Deleted successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Could not Delete product data!',
            error: err,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProducts,
    getSingleProductbyId,
    updateProductbyId,
    deleteSingleProductbyId,
};
