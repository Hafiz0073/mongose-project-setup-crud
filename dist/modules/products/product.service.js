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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(payload);
    return result;
});
//get or show product|| search section
const getAllProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let products;
    const searchRegex = new RegExp(searchTerm, 'i');
    if (searchTerm) {
        products = yield product_model_1.ProductModel.find({
            $or: [{ name: searchRegex }, { description: searchRegex }],
        });
    }
    else {
        products = yield product_model_1.ProductModel.find();
    }
    return products;
});
//get single  product
const getSingleProductbyId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findById(id);
    return result;
});
//update one  product
const updateSingleProductbyId = (_id, name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOneAndUpdate({ _id }, { $set: { name: name } }, {
        new: true,
        useFindAndModify: false,
    });
    return result;
});
//delete one product
const deleteSingleProductbyId = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.deleteOne({ _id });
    return result;
});
exports.ProductServices = {
    createProduct,
    getAllProducts,
    getSingleProductbyId,
    updateSingleProductbyId,
    deleteSingleProductbyId,
};
