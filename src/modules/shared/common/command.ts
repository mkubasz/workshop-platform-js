export type Command<
  CommandType extends string = string,
  CommandData extends Record<string, unknown> = Record<string, unknown>,
> = Readonly<{
  type: Readonly<CommandType>;
  data: Readonly<CommandData>;
}>;

// export const CommandHandler =
//   <State,
//     CommandType extends Command,
//     StreamEvent extends Event
//   >({
//     decide,
//     evolve,
//     getInitialState,
//   }: Decider<State, CommandType, StreamEvent>) =>
//     async (eventStore: any, streamId: StreamId, command: CommandType): Promise<void> => {
//       return Promise.all(void);
//     }
