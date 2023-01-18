export type DeepRequired<T> = T extends (infer U)[]
    ? DeepRequired<U>[]
    : T extends Record<PropertyKey, unknown>
    ? { [K in keyof T]-?: DeepRequired<T[K]> }
    : T;
