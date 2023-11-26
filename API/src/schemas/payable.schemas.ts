import { z } from 'zod'


export const createPayableSchema = z.object({
  title: z.string().optional(),
  type: z.number(),
  description: z.string(),
  code: z.string().optional(),
  date_expiration: z.string(),
  string_payment: z.date().optional(),
  value: z.number(),
  discount: z.number().optional(),
  addiction: z.number().optional(),
  amount_paid: z.number().optional(),
  is_parcel: z.number().optional(),
  first_parcel: z.number().optional(),
  total_parcel_value: z.number().optional(),
  quantity_parcel: z.number().optional(),
  id_user: z.number(),
  obs: z.string().optional(),
  created_by: z.number()
});
export type createPayableProps = z.infer<typeof createPayableSchema>