import type { AnyIterable } from "../../../types/any-iterable";
import type { MaybePromise } from "../../../types/maybe-promise";

export function makeFind<T>(iter: Iterable<T>) {
    return (callback: (value: T, index: number) => boolean): T | undefined => {
        let index = 0;

        for (const value of iter) {
            if (callback(value, index++)) {
                return value;
            }
        }
    };
}

export function makeAsyncFind<T>(iter: AnyIterable<T>) {
    return async (
        callback: (value: T, index: number) => MaybePromise<boolean>
    ): Promise<T | undefined> => {
        let index = 0;

        for await (const value of iter) {
            if (await callback(value, index++)) {
                return value;
            }
        }
    };
}
