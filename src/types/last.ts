// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Last<T extends unknown[]> = T extends [...infer _, infer V]
    ? V
    : never;
