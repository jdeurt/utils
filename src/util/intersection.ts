export function intersection<T>(arr: T[][]): T[] {
    return arr.reduce((acc, elems) =>
        acc.filter((elem) => elems.includes(elem))
    );
}
