import { WorkshopController } from "./WorkshopController";
import { HttpMethod } from "@shared/utils/HttpMethod";
export type WorkshopRoutes = ReturnType<typeof WorkshopRoutes>;


export const WorkshopRoutes = (workshopController: WorkshopController) => {
    const buildUrl = (path: string) => `/workshop${path}`;
    return [
        { method: HttpMethod.get, url: buildUrl(''), handler: workshopController.getAvailableWorkshops },
        { method: HttpMethod.get, url: buildUrl('/archive'), handler: workshopController.getAvailableWorkshops },
        { method: HttpMethod.post, url: buildUrl(''), handler: workshopController.publishWorkshop },
        { method: HttpMethod.get, url: buildUrl('/draft'), handler: workshopController.getWorkshopDrafts },
        { method: HttpMethod.post, url: buildUrl('/draft'), handler: workshopController.createDraft },
    ];
};