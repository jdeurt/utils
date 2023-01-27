import type { AnyIterable } from "../../../types/any-iterable";

export function makeConcat<T>(iter: Iterable<T>) {
    return (...items: Iterable<T>[]): Iterable<T> => ({
        [Symbol.iterator]: function* () {
            const iterables = [iter, ...items];

            for (const iterable of iterables) {
                yield* iterable;
            }
        },
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function composableConcat<T = any>(...items: Iterable<T>[]) {
    return (iter: Iterable<T>): Iterable<T> => makeConcat(iter)(...items);
}

export function makeAsyncConcat<T>(iter: AnyIterable<T>) {
    return (...items: AnyIterable<T>[]): AsyncIterable<T> => ({
        [Symbol.asyncIterator]: async function* () {
            const iterables = [iter, ...items];

            for await (const iterable of iterables) {
                yield* iterable;
            }
        },
    });
}
