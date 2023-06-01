import { ScriptFacade } from "../application/ScriptFacade";
import { Script, ScriptBodyParseError, ScriptParser } from "./ScriptParser";
import { ZodIssue } from "zod";

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
                const scriptBodyParseError = ScriptBodyParseError(scriptObject.error.issues);
                res.status(scriptBodyParseError.statusCode);
                return res.send({ error: scriptBodyParseError.message });
            }
            const result = await scriptFacade.addScript(scriptObject.data as Script);
            res.status(201);
            res.send(result);
        }
    };
};