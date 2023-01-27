import type { AnyIterable } from "../../../types/any-iterable";
import type { MaybePromise } from "../../../types/maybe-promise";

export function makeFilter<T>(iter: Iterable<T>) {
    return (callback: (value: T, index: number) => boolean): Iterable<T> => ({
        [Symbol.iterator]: function* () {
            let index = 0;

            for (const value of iter) {
                if (callback(value, index++)) {
                    yield value;
                }
            }
        },
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function composableFilter<T = any>(
    callback: (value: T, index: number) => boolean
) {
    return (iter: Iterable<T>): Iterable<T> => makeFilter(iter)(callback);
}

export function makeAsyncFilter<T>(iter: AnyIterable<T>) {
    return (
        callback: (value: T, index: number) => MaybePromise<boolean>
    ): AsyncIterable<T> => ({
        [Symbol.asyncIterator]: async function* () {
            let index = 0;

            for await (const value of iter) {
                if (await callback(value, index++)) {
                    yield value;
                }
            }
        },
    });
}
