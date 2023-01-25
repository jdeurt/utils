/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Created with the help of https://github.com/daniellwdb

type Fn<A = any, R = any> = (x: A) => R;

type PipeResult<A, T extends Fn[]> = T extends [Fn<any, infer R>, ...infer Rest]
    ? Rest extends [Fn, ...any]
        ? PipeResult<A, Rest>
        : Fn<A, R>
    : never;

type PipeArgs<A, T extends Fn[]> = T extends [Fn<any, infer R>, ...infer Rest]
    ? Rest extends [Fn, ...any]
        ? [Fn<A, R>, ...PipeArgs<R, Rest>]
        : [Fn<A, R>]
    : T;

type PipeFactory = <A, T extends Fn[]>(
    ...ops: PipeArgs<A, T>
) => PipeResult<A, T>;

export const pipe: PipeFactory = ((...fns: any[]) =>
    (x: unknown) =>
        fns.reduce((v, f) => f(v), x)) as any;
