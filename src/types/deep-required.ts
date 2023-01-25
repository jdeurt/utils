/**
 * Recursively constructs a type with all of `T`'s and its children's properties set to required.
 */
export type DeepRequired<T> = T extends (infer U)[]
    ? DeepRequired<U>[]
    : T extends Record<PropertyKey, unknown>
    ? { [K in keyof T]-?: DeepRequired<T[K]> }
    : T;
