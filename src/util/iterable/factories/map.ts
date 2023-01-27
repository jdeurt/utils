import type { AnyIterable } from "../../../types/any-iterable";
import type { MaybePromise } from "../../../types/maybe-promise";

export function makeMap<T>(iter: Iterable<T>) {
    return <U>(callback: (value: T, index: number) => U): Iterable<U> => ({
        [Symbol.iterator]: function* () {
            let index = 0;

            for (const value of iter) {
                yield callback(value, index++);
            }
        },
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function composableMap<T = any, U = any>(
    callback: (value: T, index: number) => U
) {
    return (iter: Iterable<T>) => makeMap(iter)(callback);
}

export function makeAsyncMap<T>(iter: AnyIterable<T>) {
    return <U>(
        callback: (value: T, index: number) => MaybePromise<U>
    ): AsyncIterable<U> => ({
        [Symbol.asyncIterator]: async function* () {
            let index = 0;

            for await (const value of iter) {
                yield callback(value, index++);
            }
        },
    });
}
