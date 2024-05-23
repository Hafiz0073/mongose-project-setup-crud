import Joi from 'joi';

// Variant schema
const variantSchema = Joi.object({
  type: Joi.string().required().messages({
    'string.empty': 'Type is Required',
  }),
  value: Joi.string().required().messages({
    'string.empty': 'Value is Required',
  }),
});

// Inventory schema
const inventorySchema = Joi.object({
  quantity: Joi.number().required().messages({
    'number.base': 'Quantity must be a number',
    'any.required': 'Quantity is Required',
  }),
  inStock: Joi.boolean().required().messages({
    'boolean.base': 'InStock must be a boolean',
    'any.required': 'InStock is Required',
  }),
});

// Product schema
const productSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Name is Required',
  }),
  description: Joi.string().required().messages({
    'string.empty': 'Description is Required',
  }),
  price: Joi.number().precision(2).required().messages({
    'number.base': 'Price must be a number',
    'any.required': 'Price is Required',
  }),
  category: Joi.string().required().messages({
    'string.empty': 'Category is Required',
  }),
  tags: Joi.array().items(Joi.string()).optional(),
  variants: Joi.array().items(variantSchema).optional(),
  inventory: inventorySchema.required().messages({
    'any.required': 'Inventory is Required',
  }),
});
// const productsSchema = Joi.array().items(productSchema).messages({
//   'array.base': 'Products must be an array of product objects',
// });
export default productSchema;
