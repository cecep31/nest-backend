import { z } from 'zod';

export const sendMessageSchema = z.object({
  content: z.string().min(1, 'Message content is required'),
  model: z.string().optional().describe('Model to use for the response'),
  temperature: z
    .number()
    .min(0)
    .max(2)
    .optional()
    .describe('Temperature for the response'),
});

export type SendMessageDto = z.infer<typeof sendMessageSchema>;
