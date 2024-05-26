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
exports.OrderServices = void 0;
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongodb_1 = require("mongodb");
const product_model_1 = require("../products/product.model");
const order_model_1 = require("./order.model");
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.ProductModel.findOne({
            _id: new mongodb_1.ObjectId(payload.productId),
        });
        // console.log(product);
        //check product id
        if (!product) {
            throw new Error('Product not found');
        }
        //check quantity
        if (product.inventory.quantity < payload.quantity) {
            throw new Error('Insufficient quantity available in inventory quantity not enough');
        }
        const result = yield order_model_1.Order.create(payload);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const updateProductQty = yield product_model_1.ProductModel.findOneAndUpdate({ _id: new mongodb_1.ObjectId(payload.productId) }, [
            {
                $set: {
                    'inventory.quantity': {
                        $subtract: ['$inventory.quantity', payload.quantity],
                    },
                    'inventory.inStock': {
                        $cond: {
                            if: {
                                $lte: [
                                    { $subtract: ['$inventory.quantity', payload.quantity] },
                                    0,
                                ],
                            },
                            then: false,
                            else: true,
                        },
                    },
                },
            },
        ], { returnOriginal: false, new: true });
        return result;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
//get or show product
const getAllOrders = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let orders;
        let orderEmail = email;
        if (email) {
            orders = yield order_model_1.Order.find({ email: { $in: [orderEmail] } });
        }
        else {
            orders = yield order_model_1.Order.find();
        }
        return orders;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.OrderServices = {
    createOrder,
    getAllOrders,
};
