import type { PathOf, ResolvePath } from "../types/object-path";
import type { ElementOf } from "../types/element-of";
import { pick } from "./pick";

// TODO: Clean this up lol
type PluckedValue<A, K extends string, O extends boolean> = O extends true
    ? A extends readonly [infer E, ...infer Rest]
        ? ResolvePath<E, K> | PluckedValue<Rest, K, O>
        : PluckedValue<A, K, false>
    : A extends (infer E)[]
    ? ResolvePath<E, K>
    : never;

/**
 * Creates an array containing the values at a path for each input array element.
 * @param arr The array with the objects to pluck from.
 * @param keyPath The path to pluck with.
 * @param omitMissing Whether or not to include `undefined` if a path does not exist for any element.
 * @example
 * // Returns [1, 2]
 * pluck([
 *     { a: 1 },
 *     { a: 2 },
 * ], "a");
 * @returns An array containing the plucked values.
 */
export function pluck<
    T extends unknown[] | readonly unknown[],
    K extends string,
    O extends boolean
>(
    arr: T,
    keyPath: PathOf<ElementOf<T>, K>,
    omitMissing?: O
): PluckedValue<T, K, O>[] {
    const NOTHING = Symbol("nothing");

    const result: PluckedValue<T, K, O>[] = [];

    for (const elem of arr) {
        const plucked = pick(elem as ElementOf<T>, keyPath, NOTHING);

        if (plucked === NOTHING) {
            !omitMissing && result.push(undefined as PluckedValue<T, K, O>);
        } else {
            result.push(
                (typeof plucked === "function"
                    ? plucked.bind(elem)
                    : plucked) as PluckedValue<T, K, O>
            );
        }
    }

    return result;
}
