import type { PathOf, ResolvePath } from "../types/object-path";

/**
 * Retrieves a value from an object at a path.
 * @param obj The object to retrieve the value from.
 * @param path The path to take to reach the value.
 * @param softFail Omitting this argument or setting it to `false` will cause the function to throw an error if the path is invalid.
 * @returns The value at the path.
 */
export function pick<O, K extends string>(
    obj: O,
    path: PathOf<O, K>,
    softFail?: false
): ResolvePath<O, K>;

/**
 * Retrieves a value from an object at a path.
 * @param obj The object to retrieve the value from.
 * @param path The path to take to reach the value.
 * @param softFail Setting this argument to `true` will cause the function to return `undefined` if the path is invalid.
 * @returns The value at the path or `undefined`.
 */
export function pick<O, K extends string>(
    obj: O,
    path: PathOf<O, K>,
    softFail: true
): ResolvePath<O, K> | undefined;

/**
 * Retrieves a value from an object at a path.
 * @param obj The object to retrieve the value from.
 * @param path The path to take to reach the value.
 * @param softFail Setting this argument to a symbol will cause the function to return that symbol if the path is invalid.
 * @returns The value at the path or a symbol.
 */
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
