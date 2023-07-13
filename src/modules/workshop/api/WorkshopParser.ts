import { z, ZodIssue } from 'zod';

export const WorkshopParser = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    script: z.string(),
    language: z.string().optional(),
    tags: z.array(z.string()).optional(),
    group: z.string().optional(),
});
export const WorkshopDraftParser = z.object({
    title: z.string(),
    description: z.string().optional(),
    agenda: z.string(),
    attendeesCount: z.number(),
    price: z.number().max(100),
    workshopLectureRatio: z.string().optional(),
    meetings: z.array(z.object({
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        meetingLocation: z.string().optional(),
        agenda: z.string().optional(),
    }).optional()).optional(),
    trainer: z.object({
        name: z.string(),
        email: z.string(),
        discordNick: z.string(),
    })
});

export const BodyParseError = (issues: ZodIssue[]) => {
    const errorMessages = issues.map(issue => `Error: Failed to parse ${issue.message} properties: ${issue.path.join()}.`);
    return {
        statusCode: 400,
        message: errorMessages.join('\n')
    }
};

export type WorkshopDTO = z.infer<typeof WorkshopParser>;
export type WorkshopDraftDTO = z.infer<typeof WorkshopDraftParser>;
