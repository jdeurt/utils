import { repeat } from "../src";

describe("repeat", () => {
    it("Should output an array of returned values for a function", () => {
        const result = repeat((i) => i * 2, 5);

        expect(result).toEqual([0, 2, 4, 6, 8]);
    });
});
