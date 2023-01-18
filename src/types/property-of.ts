import type { ObjectKey } from "./object-key";

/**
 * Extracts the type of the properties in a Record `T`.
 */
export type PropertyOf<T extends Record<ObjectKey, unknown>> = T extends Record<
    ObjectKey,
    infer P
>
    ? P
    : never;

type NonSymbol<T> = T extends symbol ? never : T;

function convert<C extends Record<string, unknown>, K extends keyof C>(
    someConfig: unknown,
    conversion: [K, Exclude<keyof C, K>],
    using: C
) {
    throw "Not implemented";
}

convert({}, ["USD", "EUR"], {
    USD: {
        /* ... */
    },
    ZL: {
        /* ... */
    },
    EUR: {
        /* ... */
    },
});
