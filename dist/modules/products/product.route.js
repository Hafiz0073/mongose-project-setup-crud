"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
//create route
router.post('/', product_controller_1.ProductController.createProduct);
//get all products route
router.get('/', product_controller_1.ProductController.getAllProducts);
//get single product route
router.get('/:productId', product_controller_1.ProductController.getSingleProductbyId);
//update one product
router.put('/:productId', product_controller_1.ProductController.updateProductbyId);
//delete one product
router.delete('/:productId', product_controller_1.ProductController.deleteSingleProductbyId);
exports.ProductRouter = router;
