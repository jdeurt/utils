import { withAsyncIterable, withIterable } from "../src/util/iterable";

describe("withIterable", () => {
    const map = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]);

    it("Should allow for concatenating multiple iterables into one", async () => {
        const concatMap = new Map([
            ["d", 4],
            ["e", 5],
        ]);

        const newIter = withIterable(map).concat(concatMap);
        const newAsyncIter = withAsyncIterable(map).concat(concatMap);

        expect([...newIter]).toEqual([...map].concat([...concatMap]));

        for await (const value of newAsyncIter) {
            expect(value.length).toEqual(2);
        }
    });

    it("Should allow for .every and .some to be called and have expected behavior", () => {
        const areAllValuesNumbers = withIterable(map).every(
            (v) => typeof v[1] === "number"
        );
        const is1KeyC = withIterable(map).some((v) => v[0] === "c");
        const areAllValuesStrings = withIterable(map).every(
            (v) => typeof v[1] === "string"
        );
        const is1KeyD = withIterable(map).some((v) => v[0] === "d");

        expect(areAllValuesNumbers).toEqual(true);
        expect(is1KeyC).toEqual(true);
        expect(areAllValuesStrings).toEqual(false);
        expect(is1KeyD).toEqual(false);
    });

    it("Should allow for filtering values", () => {
        const filteredIter = withIterable(map).filter((v) => v[1] % 2 === 1);

        expect([...filteredIter]).toEqual(
            [...map].filter((v) => v[1] % 2 === 1)
        );
    });

    it("Should allow for finding values", () => {
        const found2 = withIterable(map).find((v) => v[1] === 2);
        const found3 = withIterable(map).find((v) => v[1] === 3);
        const found4 = withIterable(map).find((v) => v[1] === 4);

        expect(found2).toEqual(["b", 2]);
        expect(found3).toEqual(["c", 3]);
        expect(found4).toEqual(undefined);
    });

    // TODO
    // it("Should allow for flattening values", () => {
    //     const nestedIter = (function* () {
    //         for (let i = 0; i < 3; i++) {
    //             yield map;
    //         }
    //     })();

    //     const fullyFlattenedIter = withIterable(nestedIter).flat(10);
    //     const flattenedIter = withIterable(nestedIter).flat();
    //     const normalIter = withIterable(nestedIter).flat(0);

    //     expect([...fullyFlattenedIter]).toEqual(
    //         [[...map], [...map], [...map]].flat(10)
    //     );
    //     expect([...flattenedIter]).toEqual(
    //         [[...map], [...map], [...map]].flat()
    //     );
    //     expect([...normalIter]).toEqual([map, map, map]);
    // });

    it("Should allow for mapping values", () => {
        const remappedIter = withIterable(map).map((v) => v[1]);

        expect([...remappedIter]).toEqual([...map].map((v) => v[1]));
    });

    it("Should allow for reducing values", () => {
        const sum = withIterable(map).reduce((acc, v) => acc + v[1], 0);

        expect(sum).toEqual(6);
    });
});
