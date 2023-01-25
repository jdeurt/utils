import type { PathOf, ResolvePath } from "../types/object-path";
import type { ElementOf } from "../types/element-of";
import { pick } from "./pick";

// TODO: fix typings to not include undefined in the return type when not necessary
// probably check out type defs for `ResolvePath`
export function pluck<T extends unknown[], K extends string>(
    arr: T,
    propertyPath: PathOf<ElementOf<T>, K>,
    omitMissing = false
): (ResolvePath<ElementOf<T>, K> | undefined)[] {
    const NOTHING = Symbol("nothing");

    const result: (ResolvePath<ElementOf<T>, K> | undefined)[] = [];

    for (const elem of arr) {
        const plucked = pick(elem as ElementOf<T>, propertyPath, NOTHING);

        if (plucked === NOTHING) {
            !omitMissing && result.push(undefined);
        } else {
            result.push(
                typeof plucked === "function"
                    ? (plucked.bind(elem) as ResolvePath<ElementOf<T>, K>)
                    : plucked
            );
        }
    }

    return result;
}
