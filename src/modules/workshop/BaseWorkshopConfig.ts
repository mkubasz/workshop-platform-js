import { WorkshopController } from "./api/WorkshopController";
import { WorkshopRoutes } from "./api/WorkshopRoutes";
import { WorkshopFacade } from "./application/WorkshopFacade";

export const BaseWorkshopRoutes = (WorkshopFacade: WorkshopFacade): WorkshopRoutes => {
    return WorkshopRoutes(WorkshopController(WorkshopFacade));
};