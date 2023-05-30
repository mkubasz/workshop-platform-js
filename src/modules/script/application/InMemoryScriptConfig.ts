import { InMemoryScriptRepository } from "../infrastructure/InMemoryScriptRepository";
import { Script } from "../domain/Script";
import { ScriptFacade } from "./ScriptFacade";

export const ScriptConfig = () => {
    const repository = InMemoryScriptRepository({});

    const script = Script({ repository });
    const scriptFacade = ScriptFacade({
        repository,

    });

};