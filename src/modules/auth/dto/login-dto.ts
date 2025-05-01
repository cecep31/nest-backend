import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(5, 'email/username is required')
    .max(100, 'email/username is too long'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password is too long'),
});

export type LoginDto = z.infer<typeof LoginSchema>;