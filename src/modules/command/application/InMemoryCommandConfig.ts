import { Command } from "../domain/Command";
import { InMemoryCommandRepository } from "../infrastructure/InMemoryCommandRepository";
import { CommandFacade } from "./CommandFacade";

export const CommandConfig = () => {
    const repository = InMemoryCommandRepository({});

    const command = Command({ repository });
    const commandFacade = CommandFacade({
        repository,
        command
    });

};