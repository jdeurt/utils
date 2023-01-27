import { using } from "../src";

describe("using", () => {
    it("Should chain functions", () => {
        const result = using([1, 2, 3]).next((vals) => Math.max(...vals)).value;

        expect(result).toEqual(3);
    });
});
