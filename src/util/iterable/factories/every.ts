import type { AnyIterable } from "../../../types/any-iterable";
import type { MaybePromise } from "../../../types/maybe-promise";

export function makeEvery<T>(iter: Iterable<T>) {
    return (callback: (value: T, index: number) => boolean): boolean => {
        let index = 0;
        let accumulator = true;

        for (const value of iter) {
            accumulator = accumulator && callback(value, index++);
        }

        return accumulator;
    };
}

export function makeAsyncEvery<T>(iter: AnyIterable<T>) {
    return async (
        callback: (value: T, index: number) => MaybePromise<boolean>
    ): Promise<boolean> => {
        let index = 0;
        let accumulator = true;

        for await (const value of iter) {
            accumulator = accumulator && (await callback(value, index++));
        }

        return accumulator;
    };
}
