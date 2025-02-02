import { z } from 'zod';

export const updatePostSchema = z.object({
  id: z.string(),
  title: z.string().min(1, { message: 'Title cannot be empty' }),
  body: z.string().min(1, { message: 'Body cannot be empty' })
});

export type UpdatePostDto = z.infer<typeof updatePostSchema>;
