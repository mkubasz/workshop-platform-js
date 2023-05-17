import { CommandFacade } from "../application/CommandFacade";

export type CommandController = ReturnType<typeof CommandController>;
export const CommandController = (commandFacade: CommandFacade) => {
    return {

    };
};