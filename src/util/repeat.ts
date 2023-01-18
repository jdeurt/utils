export const repeat = <T>(fn: (index: number) => T, times: number): T[] =>
    Array.from({ length: times }, (_, i) => fn(i));
