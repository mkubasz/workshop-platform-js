import { ScriptFacade } from "../application/ScriptFacade";
import { Script, ScriptParser } from "./ScriptParser";

export type ScriptController = ReturnType<typeof ScriptController>;
export const ScriptController = (scriptFacade: ScriptFacade) => {
    return {
        get: async (req: any, res: any) => {
            res.send({ scripts: await scriptFacade.getScripts() });
        },
        post: async (req: any, res: any) => {
            const { body } = req;
            const scriptObject = ScriptParser.safeParse(body);
            if (!scriptObject.success) {
                return res.send(scriptObject.error);
            }
            const result = await scriptFacade.addScript(scriptObject.data as Script);
            res.send(result);
        }
    };
};