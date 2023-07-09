import { WorkshopRepository } from './WorkshopRepository';

type WorkshopProps = {
    repository: WorkshopRepository;
}

export type Workshop = ReturnType<typeof Workshop>;
export const Workshop = ({ repository }: WorkshopProps) => {
    return {
        addWorkshop: async (script: any) => {
            return repository.create(script);
        },
        getWorkshops: async () => {
            return repository.findAll();
        }
    };
};