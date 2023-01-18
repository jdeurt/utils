/* eslint-disable @typescript-eslint/no-loss-of-precision */
type StringKeys<T> = T extends T
    ?
          | `${keyof T & string}`
          | (`${keyof T & number}` &
                `${bigint}` &
                ([T] extends [readonly unknown[]]
                    ? 1e309 extends T["length"]
                        ? unknown
                        : keyof T
                    : unknown))
    : never;

type CandidateStringKeys<T, P extends string> = T extends T
    ?
          | `${P}${keyof T & string}`
          | (`${P}${keyof T & number}` &
                `${P}${bigint}` &
                ([T] extends [readonly unknown[]]
                    ? 1e309 extends T["length"]
                        ? unknown
                        : never
                    : unknown))
    : never;

export type PathOf<
    T,
    K extends string,
    P extends string = ""
> = K extends `${infer U}.${infer V}`
    ? U extends StringKeys<T>
        ? T extends T
            ? PathOf<T[U & keyof T], V, `${P}${U}.`>
            : never
        : CandidateStringKeys<T, P>
    : ("" extends K ? unknown : K) extends StringKeys<T>
    ? `${P}${K}`
    : CandidateStringKeys<T, P>;

type Descend<T, K extends string> = T extends { [P in K]?: infer X }
    ? X | (T extends { [P in K]: never } ? never : undefined)
    : T[K & keyof T] | undefined;

export type ResolvePath<T, K extends string> = K extends `${infer U}.${infer V}`
    ? T extends T
        ? ResolvePath<Descend<T, U>, V>
        : never
    : T extends T
    ? Descend<T, K>
    : never;
