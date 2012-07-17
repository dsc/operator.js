# operator.js

Functional operators for JavaScript, usable in both the browser and the server.


## Usage

On the server, install it:

```sh
npm install operator
```

And then just require it:

```js
var op = require('operator');
```

In the browser, you have a number of options. You can download this package and include `operator.js` somewhere, which will add a global `operator`. Alternatively, if you're using something like [require.js][require_js] to wrap your modules, operator will check for the `module` variable and properly set its exports.



## API

Note: Throughout this API, "defined" means `x != null`, which is equivalent to `typeof x !== 'undefined' && x !== null`.


### Value Operators

Operators which do nothing other than return a value.

#### I(x) -> x

Identity operator.

#### K(k) -> -> k

Constant operator: returns a function which returns `k`.

#### nop()

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


## License

MIT: http://dsc.mit-license.org/
