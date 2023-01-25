type LeftBracket = "(" | "[";
type RightBracket = "]" | ")";
type RangeString =
    | `${LeftBracket}${number},${number}${RightBracket}`
    | `${LeftBracket}${number}, ${number}${RightBracket}`;

/**
 * Checks if `x` is in a range.
 * @param x The number to check.
 * @param range The range to check against.
 * @example
 * // Returns true
 * isInRange(3, "[3, 5)");
 * @returns True if `x` is in the passed `range`, false otherwise.
 */
export function isInRange(x: number, [...range]: RangeString): boolean {
    const commaIndex = range.indexOf(",");
    const spaceIndex = range.indexOf(" ");

    const lNumberBounds = [1, commaIndex] as const;
    const rNumberBounds = [spaceIndex + 1 || commaIndex + 1, range.length - 1];

    const lBracket = range[0] as LeftBracket;
    const rBracket = range[range.length - 1] as RightBracket;

    const lNumber = +range.slice(...lNumberBounds);
    const rNumber = +range.slice(...rNumberBounds);

    return (
        (lBracket === "(" ? x > lNumber : x >= lNumber) &&
        (rBracket === ")" ? x < rNumber : x <= rNumber)
    );
}
