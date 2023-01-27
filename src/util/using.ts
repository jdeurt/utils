/* eslint-disable @typescript-eslint/no-explicit-any */
type Action<T> = <TNext>(actionFn: (using: T) => TNext) => {
    next: Action<TNext>;
    value: TNext;
};
type ActionWithIntermediaryStep<T, U extends (x: any) => unknown> = <
    TNext extends Parameters<U>[0]
>(
    actionFn: (using: T) => TNext
) => {
    next: Action<ReturnType<U>>;
    value: ReturnType<U>;
};

/**
 * Starts a new function chain using the `value` parameter as the starting value.
 * @param value The value to start the chain with.
 * @example
 * // Returns "1"
 * using(1.5).next(Math.floor).next(String).value;
 * @returns An object containing a `then` method that continues the chain and a `value` property that ends the chain and returns the result.
 */
export function using<T>(value: T): { next: Action<T>; value: T };

/**
 * Starts a new function chain using the `value` parameter as the starting value.
 * @param value The value to start the chain with.
 * @param intermediaryStep A function to run on the result of the action function before continuing the chain.
 * @example
 * // Returns "2"
 * using(1.5, (n) => n * 2).next(Math.floor).next(String).value;
 * @returns An object containing a `then` method that continues the chain and a `value` property that ends the chain and returns the result.
 */
export function using<T, U extends (x: any) => unknown>(
    value: T,
    intermediaryStep: U
): { next: ActionWithIntermediaryStep<T, U>; value: T };

export function using<T, U extends (x: any) => unknown>(
    value: T,
    intermediaryStep?: U
) {
    const next = (nextFn: (using: T) => unknown) => {
        if (intermediaryStep === undefined) {
            return using(nextFn(value));
        }

        return using(intermediaryStep(nextFn(value)));
    };

    return { next, value };
}
