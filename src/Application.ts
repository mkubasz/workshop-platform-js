import { CommandConfig } from "./modules/command/application/CommandConfig";
import { BaseCommandRoutes } from "./modules/command/BaseCommandConfig";
import * as http from "http";

const Middlewares = () => {
    const middlewares: any[] = [];
    return {
        use: (middleware: any) => {
            middlewares.push(middleware);
        },
        init: (req: http.IncomingMessage, res: http.ServerResponse) => {
            middlewares.forEach((middleware) => {
                middleware.use(req, res);
            });
        }
    };
}
export const Application = ({}) => {
    const { commandFacade } = CommandConfig({});
    const CommandRoutes = BaseCommandRoutes(commandFacade);
    const middlewares = Middlewares();
    const server = http.createServer(async (req, res) => {
        middlewares.init(req, res);
        res.end();
    });

    return { app: server };
};
