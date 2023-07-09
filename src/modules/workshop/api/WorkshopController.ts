import { WorkshopFacade } from "../application/WorkshopFacade";
import { Workshop, WorkshopBodyParseError, WorkshopParser } from "./WorkshopParser";
import { ZodIssue } from "zod";

export type WorkshopController = ReturnType<typeof WorkshopController>;
export const WorkshopController = (scriptFacade: WorkshopFacade) => {
    return {
        get: async (req: any, res: any) => {
            res.send({ scripts: await scriptFacade.getWorkshops() });
        },
        post: async (req: any, res: any) => {
            const { body } = req;
            const scriptObject = WorkshopParser.safeParse(body);
            if (!scriptObject.success) {
                const scriptBodyParseError = WorkshopBodyParseError(scriptObject.error.issues);
                res.status(scriptBodyParseError.statusCode);
                return res.send({ error: scriptBodyParseError.message });
            }
            const result = await scriptFacade.addWorkshop(scriptObject.data as Workshop);
            res.status(201);
            res.send(result);
        }
    };
};