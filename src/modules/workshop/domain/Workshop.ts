import { WorkshopRepository } from './WorkshopRepository';

type WorkshopProps = {
    repository: WorkshopRepository;
}

export type Workshop = ReturnType<typeof Workshop>;
export const Workshop = ({ repository }: WorkshopProps) => {
    return {
        prepareDraft: async (script: any) => {
            return repository.create(script);
        },
        drafts: async () => {
            return repository.findAll();
        },
        getWorkshops: async () => {
            return repository.findAll();
        }
    };
};