"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Zod schema for TVariants
const TVariantsSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
// Define the Zod schema for TInventory
const TInventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0), // Assuming quantity cannot be negative
    inStock: zod_1.z.boolean(),
});
// Define the Zod schema for TProduct
const TProductSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number().positive(), // Assuming price must be a positive number
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(TVariantsSchema), // Using array instead of tuple to allow for multiple variants
    inventory: TInventorySchema,
});
// Exporting the inferred types from Zod schemas
exports.default = TProductSchema;
// Example usage:
// const parsedData = TProductSchema.parse(data); // This will throw if data is invalid
