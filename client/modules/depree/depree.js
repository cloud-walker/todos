const realDeps = new WeakMap()
const fakeDeps = new WeakMap()

export const clear = () => {
  fakeDeps.clear()
}

export const defineDeps = (ref, deps) => {
  realDeps.set(ref, deps)
}

export const overrideDeps = (ref, deps) => {
  fakeDeps.set(ref, deps)
}

export const getDeps = ref => fakeDeps.get(ref) || realDeps.get(ref)
