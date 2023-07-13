import { WorkshopRepository } from "../domain/WorkshopRepository";
import { WorkshopDTO, WorkshopDraftDTO } from "../api/WorkshopParser";
import { WorkshopDraftRepository } from '../domain/WorkshopDraftRepository';
import { WorkshopDraft } from '../domain/WorkshopDraft';
import * as crypto from 'crypto';
type WorkshopFacadeProps = {
    workshopRepository: WorkshopRepository;
    workshopDraftRepository: WorkshopDraftRepository;
};

export type WorkshopFacade = ReturnType<typeof WorkshopFacade>;
export const WorkshopFacade = ({
    workshopRepository,
    workshopDraftRepository
}: WorkshopFacadeProps) => {
    return {
        addWorkshop: async (script: WorkshopDTO) => {
            return await workshopRepository.create(script);
        },
        getWorkshops: async (query: any) => {
            return await workshopRepository.findAll();
        },
        getDrafts: async ()=> {
            return await workshopDraftRepository.findAll()
        },
        publishWorkshop(data: WorkshopDTO) {

        },
        createDraft: async (data:  WorkshopDraftDTO)=>  {
            // Map WorkshopDraftDTO from api to WorkshopDraft from domain
            const workshopDraft = {
                id: crypto.randomUUID(),
                ...data,
            } as WorkshopDraft;
            return await workshopDraftRepository.create(workshopDraft);
        }
    };
};