import { ScriptRepository } from "../domain/ScriptRepository";

export const InMemoryScriptRepository = ({}): ScriptRepository => {
    const scripts: Array<any> = [];
    return {
        create: async (script: any) => {
            scripts.push(script);
            return { body: script };
        },
        findAll: async (): Promise<Array<any>> => {
            return Promise.resolve(scripts);
        }
    };
};