import { WorkshopConfig } from "./modules/workshop/application/WorkshopConfig";
import { BaseWorkshopRoutes } from "./modules/workshop/BaseWorkshopConfig";

export const Application = ({}) => {
    const { scriptFacade } = WorkshopConfig({});
    const scriptRoutes = BaseWorkshopRoutes(scriptFacade);
    return { routes: [ scriptRoutes ] };
};
