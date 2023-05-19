import { Script } from "../domain/Script";
import { InMemoryScriptRepository } from "../infrastructure/InMemoryScriptRepository";
import { ScriptFacade } from "./ScriptFacade";

export const ScriptConfig = () => {
    const repository = InMemoryScriptRepository({});

    const script = Script({ repository });
    const scriptFacade = ScriptFacade({
        repository,
        script
    });

};