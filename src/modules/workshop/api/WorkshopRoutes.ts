import { WorkshopController } from "./WorkshopController";
import { HttpMethod } from "@shared/utils/HttpMethod";
export type WorkshopRoutes = ReturnType<typeof WorkshopRoutes>;


export const WorkshopRoutes = (scriptController: WorkshopController) => {
    const buildUrl = (path: string) => `/script${path}`;
    return [
        { method: HttpMethod.get, url: buildUrl(''), handler: scriptController.get },
        { method: HttpMethod.post, url: buildUrl(''), handler: scriptController.post },
    ];
};