import { CommandRepository } from './CommandRepository';

type CommandProps = {
    repository: CommandRepository;
}

export type Command = ReturnType<typeof Command>;
export const Command = ({ repository }: CommandProps) => {};