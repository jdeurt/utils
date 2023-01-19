import { isInRange } from "../src";

describe("isInRange", () => {
    it("Should check if a number is in a range", () => {
        expect(isInRange(3, "[3, 4)")).toEqual(true);
        expect(isInRange(4, "[3, 4)")).toEqual(false);
        expect(isInRange(3, "(3, 4)")).toEqual(false);
        expect(isInRange(4, "[3, 4]")).toEqual(true);
    });
});
