import { z } from 'zod';

const createNumberValidation = (tag: string) => {
  return z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined))
    .refine((val) => val === undefined || (typeof val === 'number' && !isNaN(val)), {
      message: `${tag} must be a valid number`,
    })
    .refine((val) => val === undefined || val >= 0, {
      message: `${tag} cannot be negative`,
    });
};

export const filtersSchema = z
  .object({
    cat: z.string().optional(),
    brand: z.string().optional(),
    disc: z
      .string()
      .transform((val) => parseInt(val))
      .refine((val) => !isNaN(val), { message: 'Must be a valid number' })
      .refine((val) => val >= 0, { message: 'Discount cannot be negative' })
      .optional(),
    rating: z
      .string()
      .transform((val) => parseInt(val))
      .refine((val) => !isNaN(val), { message: 'Must be a valid number' })
      .refine((val) => val >= 0 && val <= 5, { message: 'Rating must be between 0 and 5' })
      .optional(),
    min: createNumberValidation('Price'),
    max: createNumberValidation('Price'),
  })
  .refine((data) => !data.max || !data.min || data.max >= data.min, {
    message: 'Maximum value must be greater than or equal to minimum value',
    path: ['max'],
  });

export type FiltersForm = z.infer<typeof filtersSchema>;
