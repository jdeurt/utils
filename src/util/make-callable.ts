export const makeCallable = <
    T extends Record<PropertyKey, unknown>,
    U extends (...args: never[]) => unknown
>(
    obj: T,
    callable: U
): T extends number | string | boolean | symbol ? never : T & U => {
    for (const key in obj) {
        // @ts-expect-error dynamic key assignment
        callable[key] = obj[key];
    }

    return callable as T extends number | string | boolean | symbol
        ? never
        : T & U;
};
