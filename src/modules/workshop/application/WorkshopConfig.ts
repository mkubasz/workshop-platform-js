import { WorkshopFacade } from './WorkshopFacade';
import { InMemoryWorkshopRepository } from "../infrastructure/InMemoryWorkshopRepository";
import { InMemoryWorkshopDraftRepository } from '../infrastructure/InMemoryWorkshopDraftRepository';

export const WorkshopConfig = ({
                             }) => {
    const workshopRepository = InMemoryWorkshopRepository({});
    const workshopDraftRepository = InMemoryWorkshopDraftRepository({});

    const scriptFacade = WorkshopFacade({
        workshopRepository,
        workshopDraftRepository
    });
    return { scriptFacade };
};