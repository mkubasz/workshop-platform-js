export interface ScriptRepository {
    create: (script: any) => Promise<Record<any, any>>;
    findAll: () => Promise<Array<any>>;
}