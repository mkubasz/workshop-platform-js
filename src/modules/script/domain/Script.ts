import { ScriptRepository } from './ScriptRepository';

type ScriptProps = {
    repository: ScriptRepository;
}

export type Script = ReturnType<typeof Script>;
export const Script = ({ repository }: ScriptProps) => {
    return {
        addScript: async (script: any) => {
            return repository.create(script);
        },
        getScripts: async () => {
            return repository.findAll();
        }
    };
};