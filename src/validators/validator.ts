import { z } from 'zod';

export const carSchema = z.object({
  brand: z
    .string()
    .min(2, 'Brand must contain at least 2 characters'),

  model: z
    .string()
    .min(1, 'Model is required'),

  year: z
    .number({
      error: 'Year must be a number'
    })
    .min(1900, 'Year must be greater than 1900')
    .max(new Date().getFullYear(), 'Invalid year'),

  price: z
    .number({
      error: 'Price must be a number'
    })
    .positive('Price must be positive')
});

export type CarSchemaType = z.infer<typeof carSchema>;