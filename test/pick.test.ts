import { pick } from "../src";

describe("Path", () => {
    let someObject = {
        a: {
            b: {
                c: 2,
            },
        },
    };

    beforeEach(() => {
        someObject = {
            a: {
                b: {
                    c: 2,
                },
            },
        };
    });

    it("Should retrieve the value at path", () => {
        const value = pick(someObject, "a.b.c");

        expect(value).toEqual(2);
    });

    it("Should retrieve the value at path as a reference", () => {
        const value = pick(someObject, "a.b");

        value.c = 3;

        expect(someObject.a.b.c).toEqual(3);
    });
});
