import { z } from 'zod';

export const createUserSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8),
  image: z.string().url().optional(),
});

export const updateUserSchema = createUserSchema.partial();

export const resetPasswordSchema = z.object({
  newPassword: z.string().min(8),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
export type ResetPasswordDto = z.infer<typeof resetPasswordSchema>; 