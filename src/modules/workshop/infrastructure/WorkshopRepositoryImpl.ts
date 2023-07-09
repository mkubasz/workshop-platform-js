import { WorkshopRepository } from "../domain/WorkshopRepository";

export const WorkshopRepositoryImpl = ({}): WorkshopRepository => {
    return {
        create: async (script: any) => {
            return { hello: "world" };
        },
        findAll: async (): Promise<Array<any>> => {
            return [];
        }
    };
};