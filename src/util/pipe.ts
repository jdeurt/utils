import type { Compose } from "../types/compose";
import type { Last } from "../types/last";

export function pipe<F1 extends (x: never) => unknown>(
    ...operations: [F1]
): (x: Parameters<F1>[0]) => ReturnType<F1>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown
>(...operations: [F1, F2]): (x: Parameters<F1>[0]) => Compose<F2, F1>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown
>(
    ...operations: [F1, F2, F3]
): (x: Parameters<F1>[0]) => Compose<F3, Compose<F2, F1>>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown
>(
    ...operations: [F1, F2, F3, F4]
): (x: Parameters<F1>[0]) => Compose<F4, Compose<F3, Compose<F2, F1>>>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5]
): (
    x: Parameters<F1>[0]
) => Compose<F5, Compose<F4, Compose<F3, Compose<F2, F1>>>>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5, F6]
): (
    x: Parameters<F1>[0]
) => Compose<F6, Compose<F5, Compose<F4, Compose<F3, Compose<F2, F1>>>>>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5, F6, F7]
): (
    x: Parameters<F1>[0]
) => Compose<
    F7,
    Compose<F6, Compose<F5, Compose<F4, Compose<F3, Compose<F2, F1>>>>>
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5, F6, F7, F8]
): (
    x: Parameters<F1>[0]
) => Compose<
    F8,
    Compose<
        F7,
        Compose<F6, Compose<F5, Compose<F4, Compose<F3, Compose<F2, F1>>>>>
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5, F6, F7, F8, F9]
): (
    x: Parameters<F1>[0]
) => Compose<
    F9,
    Compose<
        F8,
        Compose<
            F7,
            Compose<F6, Compose<F5, Compose<F4, Compose<F3, Compose<F2, F1>>>>>
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10]
): (
    x: Parameters<F1>[0]
) => Compose<
    F10,
    Compose<
        F9,
        Compose<
            F8,
            Compose<
                F7,
                Compose<
                    F6,
                    Compose<F5, Compose<F4, Compose<F3, Compose<F2, F1>>>>
                >
            >
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown,
    F11 extends (x: ReturnType<F10>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11]
): (
    x: Parameters<F1>[0]
) => Compose<
    F11,
    Compose<
        F10,
        Compose<
            F9,
            Compose<
                F8,
                Compose<
                    F7,
                    Compose<
                        F6,
                        Compose<F5, Compose<F4, Compose<F3, Compose<F2, F1>>>>
                    >
                >
            >
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown,
    F11 extends (x: ReturnType<F10>) => unknown,
    F12 extends (x: ReturnType<F11>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12]
): (
    x: Parameters<F1>[0]
) => Compose<
    F12,
    Compose<
        F11,
        Compose<
            F10,
            Compose<
                F9,
                Compose<
                    F8,
                    Compose<
                        F7,
                        Compose<
                            F6,
                            Compose<
                                F5,
                                Compose<F4, Compose<F3, Compose<F2, F1>>>
                            >
                        >
                    >
                >
            >
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown,
    F11 extends (x: ReturnType<F10>) => unknown,
    F12 extends (x: ReturnType<F11>) => unknown,
    F13 extends (x: ReturnType<F12>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13]
): (
    x: Parameters<F1>[0]
) => Compose<
    F13,
    Compose<
        F12,
        Compose<
            F11,
            Compose<
                F10,
                Compose<
                    F9,
                    Compose<
                        F8,
                        Compose<
                            F7,
                            Compose<
                                F6,
                                Compose<
                                    F5,
                                    Compose<F4, Compose<F3, Compose<F2, F1>>>
                                >
                            >
                        >
                    >
                >
            >
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown,
    F11 extends (x: ReturnType<F10>) => unknown,
    F12 extends (x: ReturnType<F11>) => unknown,
    F13 extends (x: ReturnType<F12>) => unknown,
    F14 extends (x: ReturnType<F13>) => unknown
>(
    ...operations: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, F14]
): (
    x: Parameters<F1>[0]
) => Compose<
    F14,
    Compose<
        F13,
        Compose<
            F12,
            Compose<
                F11,
                Compose<
                    F10,
                    Compose<
                        F9,
                        Compose<
                            F8,
                            Compose<
                                F7,
                                Compose<
                                    F6,
                                    Compose<
                                        F5,
                                        Compose<
                                            F4,
                                            Compose<F3, Compose<F2, F1>>
                                        >
                                    >
                                >
                            >
                        >
                    >
                >
            >
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown,
    F11 extends (x: ReturnType<F10>) => unknown,
    F12 extends (x: ReturnType<F11>) => unknown,
    F13 extends (x: ReturnType<F12>) => unknown,
    F14 extends (x: ReturnType<F13>) => unknown,
    F15 extends (x: ReturnType<F14>) => unknown
>(
    ...operations: [
        F1,
        F2,
        F3,
        F4,
        F5,
        F6,
        F7,
        F8,
        F9,
        F10,
        F11,
        F12,
        F13,
        F14,
        F15
    ]
): (
    x: Parameters<F1>[0]
) => Compose<
    F15,
    Compose<
        F14,
        Compose<
            F13,
            Compose<
                F12,
                Compose<
                    F11,
                    Compose<
                        F10,
                        Compose<
                            F9,
                            Compose<
                                F8,
                                Compose<
                                    F7,
                                    Compose<
                                        F6,
                                        Compose<
                                            F5,
                                            Compose<
                                                F4,
                                                Compose<F3, Compose<F2, F1>>
                                            >
                                        >
                                    >
                                >
                            >
                        >
                    >
                >
            >
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown,
    F11 extends (x: ReturnType<F10>) => unknown,
    F12 extends (x: ReturnType<F11>) => unknown,
    F13 extends (x: ReturnType<F12>) => unknown,
    F14 extends (x: ReturnType<F13>) => unknown,
    F15 extends (x: ReturnType<F14>) => unknown,
    F16 extends (x: ReturnType<F15>) => unknown
>(
    ...operations: [
        F1,
        F2,
        F3,
        F4,
        F5,
        F6,
        F7,
        F8,
        F9,
        F10,
        F11,
        F12,
        F13,
        F14,
        F15,
        F16
    ]
): (
    x: Parameters<F1>[0]
) => Compose<
    F16,
    Compose<
        F15,
        Compose<
            F14,
            Compose<
                F13,
                Compose<
                    F12,
                    Compose<
                        F11,
                        Compose<
                            F10,
                            Compose<
                                F9,
                                Compose<
                                    F8,
                                    Compose<
                                        F7,
                                        Compose<
                                            F6,
                                            Compose<
                                                F5,
                                                Compose<
                                                    F4,
                                                    Compose<F3, Compose<F2, F1>>
                                                >
                                            >
                                        >
                                    >
                                >
                            >
                        >
                    >
                >
            >
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown,
    F11 extends (x: ReturnType<F10>) => unknown,
    F12 extends (x: ReturnType<F11>) => unknown,
    F13 extends (x: ReturnType<F12>) => unknown,
    F14 extends (x: ReturnType<F13>) => unknown,
    F15 extends (x: ReturnType<F14>) => unknown,
    F16 extends (x: ReturnType<F15>) => unknown,
    F17 extends (x: ReturnType<F16>) => unknown
>(
    ...operations: [
        F1,
        F2,
        F3,
        F4,
        F5,
        F6,
        F7,
        F8,
        F9,
        F10,
        F11,
        F12,
        F13,
        F14,
        F15,
        F16,
        F17
    ]
): (
    x: Parameters<F1>[0]
) => Compose<
    F17,
    Compose<
        F16,
        Compose<
            F15,
            Compose<
                F14,
                Compose<
                    F13,
                    Compose<
                        F12,
                        Compose<
                            F11,
                            Compose<
                                F10,
                                Compose<
                                    F9,
                                    Compose<
                                        F8,
                                        Compose<
                                            F7,
                                            Compose<
                                                F6,
                                                Compose<
                                                    F5,
                                                    Compose<
                                                        F4,
                                                        Compose<
                                                            F3,
                                                            Compose<F2, F1>
                                                        >
                                                    >
                                                >
                                            >
                                        >
                                    >
                                >
                            >
                        >
                    >
                >
            >
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown,
    F11 extends (x: ReturnType<F10>) => unknown,
    F12 extends (x: ReturnType<F11>) => unknown,
    F13 extends (x: ReturnType<F12>) => unknown,
    F14 extends (x: ReturnType<F13>) => unknown,
    F15 extends (x: ReturnType<F14>) => unknown,
    F16 extends (x: ReturnType<F15>) => unknown,
    F17 extends (x: ReturnType<F16>) => unknown,
    F18 extends (x: ReturnType<F17>) => unknown
>(
    ...operations: [
        F1,
        F2,
        F3,
        F4,
        F5,
        F6,
        F7,
        F8,
        F9,
        F10,
        F11,
        F12,
        F13,
        F14,
        F15,
        F16,
        F17,
        F18
    ]
): (
    x: Parameters<F1>[0]
) => Compose<
    F18,
    Compose<
        F17,
        Compose<
            F16,
            Compose<
                F15,
                Compose<
                    F14,
                    Compose<
                        F13,
                        Compose<
                            F12,
                            Compose<
                                F11,
                                Compose<
                                    F10,
                                    Compose<
                                        F9,
                                        Compose<
                                            F8,
                                            Compose<
                                                F7,
                                                Compose<
                                                    F6,
                                                    Compose<
                                                        F5,
                                                        Compose<
                                                            F4,
                                                            Compose<
                                                                F3,
                                                                Compose<F2, F1>
                                                            >
                                                        >
                                                    >
                                                >
                                            >
                                        >
                                    >
                                >
                            >
                        >
                    >
                >
            >
        >
    >
>;
export function pipe<
    F1 extends (x: never) => unknown,
    F2 extends (x: ReturnType<F1>) => unknown,
    F3 extends (x: ReturnType<F2>) => unknown,
    F4 extends (x: ReturnType<F3>) => unknown,
    F5 extends (x: ReturnType<F4>) => unknown,
    F6 extends (x: ReturnType<F5>) => unknown,
    F7 extends (x: ReturnType<F6>) => unknown,
    F8 extends (x: ReturnType<F7>) => unknown,
    F9 extends (x: ReturnType<F8>) => unknown,
    F10 extends (x: ReturnType<F9>) => unknown,
    F11 extends (x: ReturnType<F10>) => unknown,
    F12 extends (x: ReturnType<F11>) => unknown,
    F13 extends (x: ReturnType<F12>) => unknown,
    F14 extends (x: ReturnType<F13>) => unknown,
    F15 extends (x: ReturnType<F14>) => unknown,
    F16 extends (x: ReturnType<F15>) => unknown,
    F17 extends (x: ReturnType<F16>) => unknown,
    F18 extends (x: ReturnType<F17>) => unknown,
    F19 extends (x: ReturnType<F18>) => unknown
>(
    ...operations: [
        F1,
        F2,
        F3,
        F4,
        F5,
        F6,
        F7,
        F8,
        F9,
        F10,
        F11,
        F12,
        F13,
        F14,
        F15,
        F16,
        F17,
        F18,
        F19
    ]
): (
    x: Parameters<F1>[0]
) => Compose<
    F19,
    Compose<
        F18,
        Compose<
            F17,
            Compose<
                F16,
                Compose<
                    F15,
                    Compose<
                        F14,
                        Compose<
                            F13,
                            Compose<
                                F12,
                                Compose<
                                    F11,
                                    Compose<
                                        F10,
                                        Compose<
                                            F9,
                                            Compose<
                                                F8,
                                                Compose<
                                                    F7,
                                                    Compose<
                                                        F6,
                                                        Compose<
                                                            F5,
                                                            Compose<
                                                                F4,
                                                                Compose<
                                                                    F3,
                                                                    Compose<
                                                                        F2,
                                                                        F1
                                                                    >
                                                                >
                                                            >
                                                        >
                                                    >
                                                >
                                            >
                                        >
                                    >
                                >
                            >
                        >
                    >
                >
            >
        >
    >
>;
export function pipe<F extends ((x: never) => unknown)[]>(
    ...operations: F
): Last<F>;
export function pipe(...operations: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (x: any) =>
        operations.reduce(
            (v, f: (x: unknown) => unknown) => f(v),
            x
        ) as unknown;
}
