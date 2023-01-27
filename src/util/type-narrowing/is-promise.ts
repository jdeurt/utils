/* eslint-disable @typescript-eslint/unbound-method */

import type { MaybePromise } from "../../types/maybe-promise";
import { isCallable } from "./is-callable";
import { isObject } from "./is-object";

export function isPromise<T>(value: MaybePromise<T>): value is Promise<T> {
    return (
        isObject<Promise<T>>(value) &&
        isCallable(value.then) &&
        isCallable(value.catch) &&
        isCallable(value.finally)
    );
}
