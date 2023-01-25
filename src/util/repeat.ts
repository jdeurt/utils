/**
 * Repeats a the `fn` callback `times` times and returns an array containing the results.
 * @param fn The callbacl to repeat.
 * @param times The amount of times to repeat the callback.
 * @example
 * // Returns [0, 2, 4]
 * repeat((i) => i * 2, 3);
 * @returns The results of every call to the callback function.
 */
export const repeat = <T>(fn: (index: number) => T, times: number): T[] =>
    Array.from({ length: times }, (_, i) => fn(i));
