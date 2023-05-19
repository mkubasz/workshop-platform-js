import { ScriptController } from "./api/ScriptController";
import { ScriptRoutes } from "./api/ScriptRoutes";
import { ScriptFacade } from "./application/ScriptFacade";

export const BaseScriptRoutes = (ScriptFacade: ScriptFacade): ScriptRoutes => {
    return ScriptRoutes(ScriptController(ScriptFacade));
};