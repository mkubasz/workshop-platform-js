import { ScriptFacade } from './ScriptFacade';
import { InMemoryScriptRepository } from "../infrastructure/InMemoryScriptRepository";

export const ScriptConfig = ({
                             }) => {
    const repository = InMemoryScriptRepository({});

    const scriptFacade = ScriptFacade({
        repository,
    });
    return { scriptFacade };
};