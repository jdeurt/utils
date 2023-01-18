export type DeepPartial<T> = T extends (infer U)[]
    ? DeepPartial<U>[]
    : T extends Record<PropertyKey, unknown>
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;
