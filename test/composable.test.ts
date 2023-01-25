import { pipe, composable } from "../src";

describe("Composable functions", () => {
    it("Should be composable variants of original functions", () => {
        const p = pipe(
            composable.repeat(5),
            composable.pluck("a"),
            (x: number[]) => x.map(composable.isInRange("[1, 3]"))
        )((i) => ({
            a: i,
        }));

        expect(p).toEqual([false, true, true, true, false]);
    });
});
