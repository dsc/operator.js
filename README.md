# operator.js

Functional operators for JavaScript, both client- and server-friendly.


## Installation

- **Latest Version:** `0.1.1`  &mdash;  [operator.js][operator_js] / [operator.min.js][operator_min_js]

Client-side, you need only include the [latest version of the `operator.js` file][operator_js] in your page (download or link); this will add a single global `operator` to `window`.

You're also covered if you're using something like [require.js][require_js] or [browserify][browserify] to load your modules. Operator knows the module dance, and will check all of `exports`, `module`, and `define` so it can do the right thing.

For usage in [node.js][node], install it via [npm][npm]:

```sh
npm install operator
```

...And then require it:

```js
var op = require('operator');
```


## API

**Contents**

- [Value Operators](#value-operators)
- [Test Operators](#test-operators)
- [Arity Operators](#arity-operators)
- [Accessor Operators](#accessor-operators)
- [Inequality Operators](#inequality-operators)
- [Mathematical Operators](#mathematical-operators)
- [Logical Operators](#logical-operators)
- [Bitwise Operators](#bitwise-operators)


### A few Brief Notes

- Everything lives in one namespace. I typically require it as `op`; when no module systems are present, it lives in a global named `operator`.
- Throughout this API, I use "defined" to mean `x != null` (which is equivalent to `typeof x !== 'undefined' && x !== null`).
- *In progress! Use the source, Luke.*


### Value Operators

Operators which do nothing other than return a value.

#### I(x) -> x

Identity operator.

#### K(k) -> -> k

Constant operator: returns a function which returns `k`.

#### nop()
#### noop()

No-op operator (technically returns `undefined`).

#### kThis() -> this

Returns the current context of execution (`this`).

#### kObject() -> {}

Returns a new object.

#### kArray() -> []

Returns a new array.

#### val(def,o)

Returns `o` if defined, `def` otherwise.


### Test Operators

#### ok(o) -> Boolean

True if `o` is defined.

#### notOk(o) -> Boolean

True if `o` is not defined.

#### isK(k) -> (v) -> k === v

Returns a function which tests if its argument is equal to `k`.



### Arity Operators

Operators which deal with arguments to functions.

#### second(_,a) -> a

Returns the second argument.

#### nth(n)

Returns the `n`-th argument.

#### flip(fn) -> Function

Returns a function that applies `fn` with whatever arguments it gets, but swapping the first two:

```js
op.flip(fn)(a, b, c) === fn(b, a, c)
```


#### aritize(fn, [cxt], n)

Returns a function that applies `fn`, but limited to `n` arguments:

```js
op.aritize(fn, 1)(a, b, c) === fn(a)
```


#### it(fn, [cxt])

Returns a function that applies `fn`, but limited to one argument (the same as `op.aritize(fn, 1)`, but slightly faster):

```js
op.it(fn)(a, b, c) === fn(a)
```


### Accessor Operators

#### khas(k,o)
#### kget(k,o)
#### defkget(def,k,o)
#### thisget(k)
#### vkset(o,v,k)
#### has(o,k)
#### get(o,k)
#### getdef(o,k,def)
#### kvset(o,k,v)
#### thiskvset(k,v)
#### prop(k)
#### method(name, ...args)

#### parseBool(s)
#### toBool(s)
#### toInt(v)
#### toFloat(v)
#### toStr(v)
#### toRegExp(v)
#### toObject(v)
#### toDate(v)


### Inequality Operators

#### cmp(x,y) -> if x < y then -1 else (if x > y then 1 else 0)
#### eq(x,y) -> x == y
#### ne(x,y) -> x != y
#### gt(x,y) -> x  > y
#### ge(x,y) -> x >= y
#### lt(x,y) -> x  < y
#### le(x,y) -> x <= y

### Mathematical Operators

#### add(x,y) -> x + y
#### sub(x,y) -> x - y
#### mul(x,y) -> x * y
#### div(x,y) -> x / y
#### flrdiv(x,y) -> Math.floor(x / y)
#### mod(x,y) -> x % y
#### neg(x) -> -x

#### log2(n)

Log base-2.


### Logical Operators

#### is(x,y) -> x is y
#### isnt(x,y) -> x is not y
#### and(x,y) -> x and y
#### or(x,y) -> x or y
#### not(x) -> not x

### Bitwise Operators

#### bitnot(x) -> ~x
#### bitand(x,y) -> x  & y
#### bitor(x,y) -> x  | y
#### bitxor(x,y) -> x  ^ y
#### lshift(x,y) -> x << y
#### rshift(x,y) -> x >> y


#### bin(n)
#### binlen(n)
#### mask(n)
#### chr(s)
#### ord(s)
#### encode(s)
#### decode(s)
#### strip(s)


## Feedback

Find a bug or want to contribute? Open a ticket (or fork the source!) on [github][project].
You're also welcome to send me email at [dsc@less.ly][dsc_email].


## License

`operator.js` was written by [David Schoonover][dsc] (in [Coco][coco], a dialect of [CoffeeScript][coffeescript] that compiles down to JavaScript). It is open-source software and freely available under the [MIT License][mit_license].



[project]: https://github.com/dsc/operator.js "operator.js on GitHub"
[dsc]: https://github.com/dsc/ "David Schoonover"
[dsc_email]: mailto:dsc+emitters@less.ly?subject=operator.js "dsc@less.ly"
[mit_license]: http://dsc.mit-license.org/ "MIT License"

[operator_js]: https://raw.github.com/dsc/operator.js/latest/operator.js "operator.js"
[operator_min_js]: https://raw.github.com/dsc/operator.js/latest/operator.min.js "operator.min.js"

[node]: http://nodejs.org/ "node.js"
[npm]: http://npmjs.org/ "npm"
[coco]: https://github.com/satyr/coco "Coco: Unfancy CoffeeScript"
[coffeescript]: http://jashkenas.github.com/coffee-script/ "CoffeeScript: Unfancy JavaScript"
[require_js]: http://requirejs.org/ "require.js"
[browserify]: https://github.com/substack/node-browserify "browserify"
