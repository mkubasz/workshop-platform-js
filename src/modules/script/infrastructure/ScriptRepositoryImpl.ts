import { ScriptRepository } from "../domain/ScriptRepository";

export const ScriptRepositoryImpl = ({}): ScriptRepository => {
    return {
        create: async (script: any) => {
            return { hello: "world" };
        },
        findAll: async (): Promise<Array<any>> => {
            return [];
        }
    };
};