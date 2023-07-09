// Monad types
enum ResultType {
    Ok,
    Err,
}
export type Ok<T> = { kind: ResultType.Ok; value: T };
export type Err<E> = { kind: ResultType.Err; error: E };
export type Result<T, E> = Ok<T> | Err<E>;


export const ok = <T>(value: T): Ok<T> => ({ kind: ResultType.Ok, value });
export const err = <E>(error: E): Err<E> => ({ kind: ResultType.Err, error });

