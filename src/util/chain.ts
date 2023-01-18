export function chain<T>(value: T) {
    const then = <U>(nextFn: (using: T) => U) => chain<U>(nextFn(value));

    // eslint-disable-next-line unicorn/no-thenable
    return { then, value };
}
