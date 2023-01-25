/**
 * Creates an array containing all elements in `arr`'s sub-arrays that exist in all sub-arrays.
 * @param arr A 2-dimensional array.
 * @example
 * // Returns [2]
 * intersection([
 *     [1, 2, 3],
 *     [1, 2, 5],
 *     [0, 6, 2],
 * ]);
 * @returns An array containing all elements in `arr`'s sub-arrays that exist in all sub-arrays.
 */
export function intersection<T>(arr: T[][]): T[] {
    return arr.reduce((acc, elems) =>
        acc.filter((elem) => elems.includes(elem))
    );
}
