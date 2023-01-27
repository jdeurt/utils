import { isCallable } from "./is-callable";
import { isObject } from "./is-object";

export function isIterable<T>(value: unknown): value is Iterable<T> {
    return isObject<Iterable<T>>(value) && isCallable(value[Symbol.iterator]);
}

export function isAsyncIterable<T>(value: unknown): value is Iterable<T> {
    return (
        (isObject<AsyncIterable<T>>(value) &&
            isCallable(value[Symbol.asyncIterator])) ||
        isIterable(value)
    );
}
