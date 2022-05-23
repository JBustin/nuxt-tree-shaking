# nuxt-tree-shaking

## How to test

```js
git clone https://github.com/JBustin/nuxt-tree-shaking.git
npm ci
npm run build
```

Search chunks containings `modules/a` and `modules/b`.
Open the chunk files: `.nuxt/dist/client/moduleA.xxxx.js` and/or `.nuxt/dist/client/moduleB.xxxx.js`.

There is this code:

```js
    243: function (n, o, c) {
      'use strict';
      function t() {
        console.log('shared:foo');
      }
      function e() {
        console.log('shared:bar');
      }
      c.d(o, 'b', function () {
        return t;
      }),
        c.d(o, 'a', function () {
          return e;
        });
    },
```

Module A uses foo, and module B uses bar. So I expect that module A includes only foo function, and module B includes only bar function.

But the two chunks include the two functions :-1:
