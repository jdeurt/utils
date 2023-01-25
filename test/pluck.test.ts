import { pluck } from "../src";

describe("pluck", () => {
    it("Should correctly pluck elements of an array", () => {
        const values = pluck([{ a: 1 }, { a: 2 }], "a");

        expect(values).toEqual([1, 2]);
    });

    it("Should omit values if the behavior is specified", () => {
        const values = pluck([{ a: 1 }, { a: 2 }, { b: 3 }], "a");
        const valuesWithOmit = pluck(
            [{ a: 1 }, { a: 2 }, { b: 3 }] as const,
            "a",
            true
        );
        const valuesWithOmitTricky = pluck(
            [{ a: undefined }, { a: undefined }, { b: 3 }],
            "a",
            true
        );

        expect(values).toEqual([1, 2, undefined]);
        expect(valuesWithOmit).toEqual([1, 2]);
        expect(valuesWithOmitTricky).toEqual([undefined, undefined]);
    });

    it("Should work with methods", () => {
        const values = pluck([1, 2, 3], "toString");

        expect(values.map((v) => v!(2))).toEqual(["1", "10", "11"]);
    });
});
