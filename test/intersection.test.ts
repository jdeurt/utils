import { intersection } from "../src";

describe("intersection", () => {
    it("Should output an array of elements that are present in every sub-array", () => {
        const arr = [
            ["a", "b", "c"],
            ["b", "a", "d"],
            ["c", "a", "d"],
        ];

        expect(intersection(arr)).toEqual(["a"]);
    });
});
