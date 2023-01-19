export type Last<T extends unknown[]> = T extends [...unknown[], infer U]
    ? U
    : never;
