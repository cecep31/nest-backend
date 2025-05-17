import { z } from 'zod';

export const createConversationSchema = z.object({
  title: z.string().optional().describe('Title of the conversation'),
  workspaceId: z.string().uuid().optional().describe('Workspace ID'),
  message: z.string().min(1, 'Message is required').describe('Initial message content'),
});

export type CreateConversationDto = z.infer<typeof createConversationSchema>;
