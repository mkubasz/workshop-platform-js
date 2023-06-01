import { z, ZodIssue } from 'zod';

export const ScriptParser = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    script: z.string(),
    language: z.string().optional(),
    tags: z.array(z.string()).optional(),
    group: z.string().optional(),
});

export const ScriptBodyParseError = (issues: ZodIssue[]) => {
    const errorMessages = issues.map(issue => `Error: Failed to parse ${issue.message} properties: ${issue.path.join()}.`);
    return {
        statusCode: 400,
        message: errorMessages.join('\n')
    }
};

export type Script = z.infer<typeof ScriptParser>;
