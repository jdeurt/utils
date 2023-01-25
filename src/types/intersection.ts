/**
 * Constructs a type by picking properties of union members assignable to `T` that are shared between all members.
 */
export type Intersection<T> = {
    [key in Extract<keyof T, keyof T>]: T[key];
};
