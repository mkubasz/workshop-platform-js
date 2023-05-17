import { Command } from "../domain/Command";
import { CommandRepository } from "../domain/CommandRepository";

type CommandFacadeProps = {
    command: Command;
    repository: CommandRepository;
};

export type CommandFacade = ReturnType<typeof CommandFacade>;
export const CommandFacade = ({
    command, repository
}: CommandFacadeProps) => {
    return {

    };
};