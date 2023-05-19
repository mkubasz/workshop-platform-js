import { ScriptController } from "./ScriptController";
import { HTTPMethods } from "fastify";
export type ScriptRoutes = ReturnType<typeof ScriptRoutes>;
export const ScriptRoutes = (scriptController: ScriptController) => {
    const buildUrl = (path: string) => `/script${path}`;
    return [
        { method: 'GET' as HTTPMethods, url: buildUrl(''), handler: scriptController.get },
        { method: 'POST' as HTTPMethods, url: buildUrl(''), handler: scriptController.post },
    ];
};