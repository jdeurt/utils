/**
 * Constructs a type by picking properties of union members assigned to `T` that appear in all union members
 */
export type Intersection<T> = {
    [key in Extract<keyof T, keyof T>]: T[key];
};
