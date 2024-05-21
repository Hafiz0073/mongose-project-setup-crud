"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
//variant schema
const variantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: [true, 'Type is Required'],
    },
    value: {
        type: String,
        required: true,
    },
});
//inventory schema
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
//product schema
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required'],
    },
    description: {
        type: String,
        required: [true, 'description Is Required'],
    },
    price: {
        type: Number,
        required: [true, 'Price must be required'],
    },
    category: {
        type: String,
        required: [true, 'category is required'],
    },
    tags: [
        {
            type: String,
        },
    ],
    variants: [variantSchema],
    inventory: inventorySchema,
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
