import { ScriptRepository } from "../domain/ScriptRepository";
import { Script } from "../api/ScriptParser";

type ScriptFacadeProps = {
    repository: ScriptRepository;
};

export type ScriptFacade = ReturnType<typeof ScriptFacade>;
export const ScriptFacade = ({
    repository
}: ScriptFacadeProps) => {
    return {
        addScript: async (script: Script) => {
            return await repository.create(script);
        },
        getScripts: async () => {
            return await repository.findAll();
        }
    };
};