import type { Intersection } from "./intersection";

/**
 * Constructs a type by making all properties of union members assigned to `T` optional unless they appear in all union members
 */
export type PartialIntersection<T> = Intersection<T> & Partial<T>;
