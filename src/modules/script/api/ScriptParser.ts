import { z } from 'zod';

export const ScriptParser = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    script: z.string(),
    language: z.string().optional(),
    tags: z.array(z.string()).optional(),
    group: z.string().optional(),
});

export type Script = z.infer<typeof ScriptParser>;
