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
export function pick<O, K extends string>(
    obj: O,
    path: PathOf<O, K>,
    softFail?: boolean
): ResolvePath<O, K> | undefined {
    const parts = path.split(".");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let currProp: any = obj;

    for (const part of parts) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        currProp = currProp[part];

        if (softFail && currProp === undefined) {
            return undefined;
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return currProp;
}
