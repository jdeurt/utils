/* eslint-disable @typescript-eslint/no-unsafe-return */
import { isInRange as _isInRange } from "./util/is-in-range";
import { makeCallable as _makeCallable } from "./util/make-callable";
import { repeat as _repeat } from "./util/repeat";
import { makeComposable } from "./util/make-composable";

export const isInRange = makeComposable(_isInRange);
export const makeCallable = makeComposable(_makeCallable);
// TODO
export const pick = makeComposable(function (
    obj: unknown,
    path: string,
    softFail?: boolean
) {
    const parts = path.split(".");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let currProp: any = obj;

    for (const part of parts) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        currProp = currProp[part];

        if (softFail && currProp === undefined) {
            return;
        }
    }

    return currProp;
});
export const pluck = makeComposable(function (arr: unknown[], keyPath: string) {
    return arr.map(pick(keyPath));
});
// end TODO
export const repeat = makeComposable(_repeat);
