import type { AnyIterable } from "../../../types/any-iterable";
import type { MaybePromise } from "../../../types/maybe-promise";
import { NOTHING } from "../../constants/nothing";

export function makeReduce<T>(iter: Iterable<T>) {
    return function <U = T>(
        callback: (accumulator: U, value: T, index: number) => U,
        startingValue?: U
    ): U {
        let index = 0;
        let accumulator: U | typeof NOTHING =
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            arguments.length === 2 ? startingValue! : NOTHING;

        for (const value of iter) {
            if (accumulator === NOTHING) {
                index++;
                accumulator = value as unknown as U;

                continue;
            }

            accumulator = callback(accumulator, value, index++);
        }

        return accumulator as U;
    };
}

export function makeAsyncReduce<T>(iter: AnyIterable<T>) {
    return async function <U = T>(
        callback: (accumulator: U, value: T, index: number) => MaybePromise<U>,
        startingValue?: MaybePromise<U>
    ): Promise<U> {
        let index = 0;
        let accumulator: U | typeof NOTHING =
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            arguments.length === 2 ? await startingValue! : NOTHING;

        for await (const value of iter) {
            if (accumulator === NOTHING) {
                index++;
                accumulator = value as unknown as U;

                continue;
            }

            accumulator = await callback(accumulator, value, index++);
        }

        return accumulator as U;
    };
}
