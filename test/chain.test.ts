import { chain } from "../src";

describe("Chain", () => {
    it("Should chain functions", () => {
        const result = chain([1, 2, 3]).then((vals) => Math.max(...vals)).value;

        expect(result).toEqual(3);
    });
});
