import type { PathOf, ResolvePath } from "../types/object-path";
import type { ElementOf } from "../types/element-of";
import { pick } from "./pick";

type PluckedValue<A, K extends string, O extends boolean> = O extends true
    ? A extends readonly [infer E, ...infer Rest]
        ? ResolvePath<E, K> | PluckedValue<Rest, K, O>
        : PluckedValue<A, K, false>
    : A extends (infer E)[]
    ? ResolvePath<E, K>
    : never;

export function pluck<
    T extends unknown[] | readonly unknown[],
    K extends string,
    O extends boolean
>(
    arr: T,
    propertyPath: PathOf<ElementOf<T>, K>,
    omitMissing?: O
): PluckedValue<T, K, O>[] {
    const NOTHING = Symbol("nothing");

    const result: PluckedValue<T, K, O>[] = [];

    for (const elem of arr) {
        const plucked = pick(elem as ElementOf<T>, propertyPath, NOTHING);

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
