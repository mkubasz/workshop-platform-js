import { CommandConfig } from "./modules/command/application/CommandConfig";
import { BaseCommandRoutes } from "./modules/command/BaseCommandConfig";

export const Application = ({}) => {
    const { commandFacade } = CommandConfig({});
    const CommandRoutes = BaseCommandRoutes(commandFacade);


    return { app: {} };
};
