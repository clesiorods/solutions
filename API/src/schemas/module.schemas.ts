import { z } from 'zod'


export const createModuleSchema = z.object({
  group: z.string().min(1, 'group is required'),
  description: z.string().min(1, 'description is required'),
  icon: z.string(),
  path: z.string().min(1, 'location is required'),
  order: z.number(),
  created_by: z.number().optional(),
  updated_by: z.number().optional(),
});
export type CreateModuleProps = z.infer<typeof createModuleSchema>
