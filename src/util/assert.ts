/**
 * Forcefully asserts `value` to be of type `T`.
 * @noop
 */
export function _assert<T>(value: unknown): asserts value is T {
    return;
}
