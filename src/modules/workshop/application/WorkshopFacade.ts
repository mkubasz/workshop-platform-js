import { WorkshopRepository } from "../domain/WorkshopRepository";
import { Workshop } from "../api/WorkshopParser";

type WorkshopFacadeProps = {
    repository: WorkshopRepository;
};

export type WorkshopFacade = ReturnType<typeof WorkshopFacade>;
export const WorkshopFacade = ({
    repository
}: WorkshopFacadeProps) => {
    return {
        addWorkshop: async (script: Workshop) => {
            return await repository.create(script);
        },
        getWorkshops: async () => {
            return await repository.findAll();
        }
    };
};