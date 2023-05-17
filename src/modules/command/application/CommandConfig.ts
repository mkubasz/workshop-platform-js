import { Command } from "../domain/Command";
import { CommandRepositoryImpl } from "../infrastructure/CommandRepositoryImpl";
import { CommandFacade } from './CommandFacade';

export const CommandConfig = ({}) => {
    const repository = CommandRepositoryImpl({});

    const command = Command({ repository });
    const commandFacade = CommandFacade({
        repository,
        command
    });
    return { commandFacade };
};