import { z } from 'zod';

// Define the Zod schema for TVariants
const TVariantsSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define the Zod schema for TInventory
const TInventorySchema = z.object({
  quantity: z.number().min(0), // Assuming quantity cannot be negative
  inStock: z.boolean(),
});

// Define the Zod schema for TProduct
const TProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(), // Assuming price must be a positive number
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(TVariantsSchema), // Using array instead of tuple to allow for multiple variants
  inventory: TInventorySchema,
});

// Exporting the inferred types from Zod schemas

export default TProductSchema;

// Example usage:
// const parsedData = TProductSchema.parse(data); // This will throw if data is invalid
