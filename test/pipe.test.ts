import { pipe } from "../src";

describe("pipe", () => {
    it("Should pipe", () => {
        const f = pipe(
            (x: number) => x * 10,
            (x) => x * 2,
            (x) => String(x)
        );

        expect(f(10)).toEqual("200");
    });
});
