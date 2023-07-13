import { WorkshopRepository } from "../domain/WorkshopRepository";
import { WorkshopDraftRepository } from '../domain/WorkshopDraftRepository';

export const InMemoryWorkshopDraftRepository = ({}): WorkshopDraftRepository => {
    const workshopDrafts: Array<any> = [];
    return {
        create: async (workshopDraft: any) => {
            workshopDrafts.push(workshopDraft);
            return { body: workshopDrafts };
        },
        findAll: async (): Promise<Array<any>> => {
            return Promise.resolve(workshopDrafts);
        }
    };
};