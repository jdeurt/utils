/**
 * Constructs a function type with the parameters type of `F` and the return type of `G`.
 */
export type Compose<
    G extends (x: ReturnType<F>) => unknown,
    F extends (...args: any[]) => unknown
> = (...args: Parameters<F>) => ReturnType<G>;
