import { z } from 'zod';

export const UpdateWorkspaceSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  
});

export type UpdateWorkspaceDto = z.infer<typeof UpdateWorkspaceSchema>;