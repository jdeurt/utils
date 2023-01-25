/**
 * Attaches a function to an object.
 * @param obj The object to attach the function to.
 * @param callable The function to attach to the object.
 * @example
 * const obj = makeCallable({ a: 1 }, () => 2);
 * obj.a; // 1
 * obj(); // 2
 * @returns The now-callable object.
 */
export const makeCallable = <
    T extends Record<PropertyKey, unknown>,
    U extends (...args: never[]) => unknown
>(
    obj: T,
    callable: U
): T & U => {
    for (const key in obj) {
        // @ts-expect-error dynamic key assignment
        callable[key] = obj[key];
    }

    return callable as T & U;
};
