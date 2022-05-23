function exec(p, ...args) {
    return p.then(({ default: fn }) => fn(...args))
}

export const builder = (ctx) => ({
  moduleA: () => exec(import(/* webpackChunkName: "moduleA" */'~/modules/a/controller'), ctx),
  moduleB: () => exec(import(/* webpackChunkName: "moduleB" */'~/modules/b/controller'), ctx),
})

export default (ctx, inject) => inject('moduleLoader', builder(ctx))