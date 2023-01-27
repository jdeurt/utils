import type {
    FlattenAsyncIterable,
    FlattenIterable,
} from "../../../types/flatten-iterable";
import { isAsyncIterable, isIterable } from "../../type-narrowing/is-iterable";
import type { AnyIterable } from "../../../types/any-iterable";

// TODO: Fix recursive calls consuming the iterable

export function makeFlat<T>(iter: Iterable<T>) {
    return <Depth extends number = 1>(
        depth?: Depth
    ): Iterable<FlattenIterable<T, Depth>> => ({
        [Symbol.iterator]: function* () {
            for (const item of iter) {
                if ((depth === undefined || depth > 0) && isIterable(item)) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    yield* makeFlat<any>(item)((depth ?? 1) - 1);
                } else {
                    yield item as FlattenIterable<T, Depth>;
                }
            }
        },
    });
}

export function makeAsyncFlat<T>(iter: AnyIterable<T>) {
    return <Depth extends number = 1>(
        depth?: Depth
    ): AsyncIterable<FlattenAsyncIterable<T, Depth>> => ({
        [Symbol.asyncIterator]: async function* () {
            for await (const item of iter) {
                if (
                    (depth === undefined || depth > 0) &&
                    isAsyncIterable(item)
                ) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    yield* makeAsyncFlat<any>(item)((depth ?? 1) - 1);
                } else {
                    yield item as FlattenIterable<T, Depth>;
                }
            }
        },
    });
}
