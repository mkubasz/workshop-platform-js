export interface WorkshopRepository {
    create: (script: any) => Promise<Record<any, any>>;
    findAll: () => Promise<Array<any>>;
}