export type Compose<
    G extends (x: ReturnType<F>) => unknown,
    F extends (x: never) => unknown
> = (x: Parameters<F>[0]) => ReturnType<G>;
