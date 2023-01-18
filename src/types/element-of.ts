/**
 * Extracts the type of the elements in an iterable `T`
 */
export type ElementOf<T extends Iterable<unknown>> = T extends Iterable<infer E>
    ? E
    : never;
