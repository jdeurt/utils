import { makeAsyncConcat, makeConcat } from "./factories/concat";
import { makeAsyncEvery, makeEvery } from "./factories/every";
import { makeAsyncFilter, makeFilter } from "./factories/filter";
import { makeAsyncFind, makeFind } from "./factories/find";
import { makeAsyncMap, makeMap } from "./factories/map";
// import { makeAsyncFlat, makeFlat } from "./factories/flat";
import { makeAsyncReduce, makeReduce } from "./factories/reduce";
import { makeAsyncSome, makeSome } from "./factories/some";
import type { AnyIterable } from "../../types/any-iterable";

export const withIterable = <T>(iterable: Iterable<T>) => ({
    concat: makeConcat(iterable),
    every: makeEvery(iterable),
    filter: makeFilter(iterable),
    find: makeFind(iterable),
    // flat: makeFlat(iterable),
    map: makeMap(iterable),
    reduce: makeReduce(iterable),
    some: makeSome(iterable),
});

export const withAsyncIterable = <T>(iterable: AnyIterable<T>) => ({
    concat: makeAsyncConcat(iterable),
    every: makeAsyncEvery(iterable),
    filter: makeAsyncFilter(iterable),
    find: makeAsyncFind(iterable),
    // flat: makeAsyncFlat(iterable),
    map: makeAsyncMap(iterable),
    reduce: makeAsyncReduce(iterable),
    some: makeAsyncSome(iterable),
});
