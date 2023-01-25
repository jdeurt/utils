/**
 * Constructs a composable function type from a normal function type.
 */
export type Composable<F extends (...args: any[]) => unknown> = (
    ...args: Parameters<F> extends [infer _, ...infer Rest] ? Rest : never
) => (
    input: Parameters<F> extends [infer C, ...infer _] ? C : never
) => ReturnType<F>;
