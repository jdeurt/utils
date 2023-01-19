import { makeCallable } from "../src";

describe("makeCallable", () => {
    it("Should make objects callable", () => {
        const obj = { a: 1 };
        const func = () => 4;

        const callableObj = makeCallable(obj, func);

        expect(callableObj.a).toEqual(1);
        expect(callableObj()).toEqual(4);
    });
});
