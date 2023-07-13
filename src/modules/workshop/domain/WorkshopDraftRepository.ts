export interface WorkshopDraftRepository {
    create: (workshopDraft: any) => Promise<Record<any, any>>;
    findAll: () => Promise<Array<any>>;
}