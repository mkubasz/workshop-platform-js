export type Result<T, E> = { kind: "Ok"; data: T } | { kind: 'Error'; error: E };

export const Ok = <T>(data: T): Result<T, never> => ({ kind: 'Ok', data });
export const Error = <E>(error: E): Result<never, E> => ({ kind: 'Error', error });
