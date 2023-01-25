/**
 * Extracts the last type of an array type `T`.
 */
export type Tail<T extends unknown[]> = T extends [...unknown[], infer U]
    ? U
    : never;
