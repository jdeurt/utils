import type { PathOf, ResolvePath } from "../types/object-path";

export function pick<O, K extends string>(
    obj: O,
    path: PathOf<O, K>,
    softFail?: false
): ResolvePath<O, K>;
export function pick<O, K extends string>(
    obj: O,
    path: PathOf<O, K>,
    softFail: true
): ResolvePath<O, K> | undefined;
export function pick<O, K extends string, S extends symbol>(
    obj: O,
    path: PathOf<O, K>,
    softFail: S
): ResolvePath<O, K> | S;
export function pick<O, K extends string, S extends symbol>(
    obj: O,
    path: PathOf<O, K>,
    softFail?: boolean | S
): ResolvePath<O, K> | undefined | S {
    const parts = path.split(".");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let currProp: any = obj;

    for (const part of parts) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        currProp = currProp[part];

        if (softFail && currProp === undefined) {
            return softFail === true ? undefined : softFail;
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return currProp;
}
