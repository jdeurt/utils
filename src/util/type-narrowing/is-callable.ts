export function isCallable<
    T extends (...args: any[]) => unknown = (...args: any[]) => unknown
>(value: unknown): value is T {
    return typeof value === "function";
}
