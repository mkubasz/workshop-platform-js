import { CommandController } from "./api/CommandController";
import { CommandRoutes } from "./api/CommandValidation";
import { CommandFacade } from "./application/CommandFacade";

export const BaseCommandRoutes = (CommandFacade: CommandFacade): CommandRoutes => {
    return CommandRoutes(CommandController(CommandFacade));
};