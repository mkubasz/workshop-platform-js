import { ScriptController } from "./ScriptController";
import { HttpMethod } from "@shared/utils/HttpMethod";
export type ScriptRoutes = ReturnType<typeof ScriptRoutes>;


export const ScriptRoutes = (scriptController: ScriptController) => {
    const buildUrl = (path: string) => `/script${path}`;
    return [
        { method: HttpMethod.get, url: buildUrl(''), handler: scriptController.get },
        { method: HttpMethod.post, url: buildUrl(''), handler: scriptController.post },
    ];
};