export type Args = unknown[];
export type AsyncFunction<T extends Args, R> = (...args: T) => Promise<R>;
export type Function<T extends Args, R> = (...args: T) => R;
