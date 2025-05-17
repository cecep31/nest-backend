import { z } from 'zod';

export const MessageResponseSchema = z.object({
  id: z.string().uuid(),
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string(),
  model: z.string().optional(),
  promptTokens: z.number().optional(),
  completionTokens: z.number().optional(),
  totalTokens: z.number().optional(),
  createdAt: z.date(),
});

export const ConversationResponseSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  workspaceId: z.string().uuid().optional(),
  messages: z.array(MessageResponseSchema),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MessageResponseDto = z.infer<typeof MessageResponseSchema>;
export type ConversationResponseDto = z.infer<typeof ConversationResponseSchema>;
