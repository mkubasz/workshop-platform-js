import { WorkshopFacade } from "../application/WorkshopFacade";
import { WorkshopDTO, BodyParseError, WorkshopParser, WorkshopDraftParser, WorkshopDraftDTO } from "./WorkshopParser";
import { ZodIssue } from "zod";

export const FindWorkshopsQuery = () => ({});
export const FindAvailableWorkshopsQuery = () => ({});
export const FindWorkshopDraftsQuery = () => ({});

export type WorkshopController = ReturnType<typeof WorkshopController>;
export const WorkshopController = (workFacade: WorkshopFacade) => {
    return {
        getWorkshops: async (req: any, res: any) => {
            res.send({ workshops: await workFacade.getWorkshops(FindWorkshopsQuery()) });
        },
        getAvailableWorkshops: async (req: any, res: any) => {
            res.send({ workshops: await workFacade.getWorkshops(FindAvailableWorkshopsQuery()) });
        },
        getWorkshopDrafts: async (req: any, res: any) => {
            res.send({ workshopDrafts: await workFacade.getDrafts() });
        },
        publishWorkshop: async (req: any, res: any) => {
            const { body } = req;
            const scriptObject = WorkshopParser.safeParse(body);
            if (!scriptObject.success) {
                const scriptBodyParseError = BodyParseError(scriptObject.error.issues);
                res.status(scriptBodyParseError.statusCode);
                return res.send({ error: scriptBodyParseError.message });
            }
            const result = await workFacade.publishWorkshop(scriptObject.data as WorkshopDTO);
            res.status(201);
            res.send(result);
        },
        createDraft: async (req: any, res: any) => {
            const { body } = req;
            const workshopDraftObject = WorkshopDraftParser.safeParse(body);
            if (!workshopDraftObject.success) {
                const scriptBodyParseError = BodyParseError(workshopDraftObject.error.issues);
                res.status(scriptBodyParseError.statusCode);
                return res.send({ error: scriptBodyParseError.message });
            }
            const result = await workFacade.createDraft(workshopDraftObject.data as WorkshopDraftDTO);
            res.status(201);
            res.send(result);
        }
    };
};