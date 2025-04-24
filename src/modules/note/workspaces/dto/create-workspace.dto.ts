import { z } from 'zod';

export const CreateWorkspaceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  
});

export type CreateWorkspaceDto = z.infer<typeof CreateWorkspaceSchema>;