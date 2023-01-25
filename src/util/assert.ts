/**
 * Forcefully asserts `value` to be of type `T`.
 * @noop
 */
export function _assert<T>(_: unknown): asserts _ is T {
    return;
}
