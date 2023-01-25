import type { Composable } from "../types/composable";

/**
 * Creates a composable version of `fn`.
 * @param fn The function to make composable.
 */
export function makeComposable<F extends (...args: any[]) => unknown>(
    fn: F
): Composable<F> {
    return (...args: Parameters<Composable<F>>) =>
        (input: Parameters<ReturnType<Composable<F>>>[0]) =>
            fn(input, ...args) as ReturnType<F>;
}
