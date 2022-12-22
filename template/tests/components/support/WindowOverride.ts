export function windowOverride<V>(prop: keyof typeof window, value: V): void {
  Object.defineProperty(window, prop, {
    writable: true,
    configurable: true,
    value: value,
  })
}
