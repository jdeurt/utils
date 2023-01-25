/**
 * Starts a new function chain using the `value` parameter as the starting value.
 * @param value The value to start the chain with.
 * @example
 * // Returns "1"
 * chain(1.5).then(Math.floor).then(String).value;
 * @returns An object containing a `then` method that continues the chain and a `value` property that ends the chain and returns the result.
 */
export function chain<T>(value: T) {
    const then = <U>(nextFn: (using: T) => U) => chain<U>(nextFn(value));

    // eslint-disable-next-line unicorn/no-thenable
    return { then, value };
}
