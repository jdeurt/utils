/**
 * Constructs a union type from the properties of `T`.
 */
export type PropertyOf<T extends Record<PropertyKey, unknown>> =
    T extends Record<PropertyKey, infer P> ? P : never;
