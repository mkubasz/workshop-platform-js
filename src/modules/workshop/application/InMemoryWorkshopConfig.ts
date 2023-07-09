import { InMemoryWorkshopRepository } from "../infrastructure/InMemoryWorkshopRepository";
import { Workshop } from "../domain/Workshop";
import { WorkshopFacade } from "./WorkshopFacade";

export const WorkshopConfig = () => {
    const repository = InMemoryWorkshopRepository({});

    const script = Workshop({ repository });
    const scriptFacade = WorkshopFacade({
        repository,

    });

};