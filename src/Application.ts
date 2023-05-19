import { ScriptConfig } from "./modules/script/application/ScriptConfig";
import { BaseScriptRoutes } from "./modules/script/BaseScriptConfig";

export const Application = ({}) => {
    const { scriptFacade } = ScriptConfig({});
    const scriptRoutes = BaseScriptRoutes(scriptFacade);
    return { routes: [ scriptRoutes ] };
};
