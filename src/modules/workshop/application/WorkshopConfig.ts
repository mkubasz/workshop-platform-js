import { WorkshopFacade } from './WorkshopFacade';
import { InMemoryWorkshopRepository } from "../infrastructure/InMemoryWorkshopRepository";

export const WorkshopConfig = ({
                             }) => {
    const repository = InMemoryWorkshopRepository({});

    const scriptFacade = WorkshopFacade({
        repository,
    });
    return { scriptFacade };
};