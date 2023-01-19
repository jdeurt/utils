type LeftBracket = "(" | "[";
type RightBracket = "]" | ")";
type RangeString =
    | `${LeftBracket}${number},${number}${RightBracket}`
    | `${LeftBracket}${number}, ${number}${RightBracket}`;

export const isInRange = (x: number, [...range]: RangeString) => {
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
};
