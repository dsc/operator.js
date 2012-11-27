var DASH_PATTERN, STRIP_PAT, FALSEY, op, slice$ = [].slice;
DASH_PATTERN = /-/g;
STRIP_PAT = /(^\s*|\s*$)/g;
FALSEY = /^\s*(?:no|off|false)\s*$/i;
op = {};
if (typeof exports != 'undefined' && exports !== null) {
  op = exports;
} else if (typeof window != 'undefined' && window !== null) {
  window.operator = op;
}
if (typeof define === 'function' && define.amd) {
  define('operator', [], function(require, exports, module){
    return module.exports = op;
  });
}
op.I = function(x){
  return x;
};
op.K = function(k){
  return function(){
    return k;
  };
};
op.nop = function(){};
op.noop = op.noop;
op.kThis = function(){
  return this;
};
op.kObject = function(){
  return {};
};
op.kArray = function(){
  return [];
};
op.val = function(def, o){
  return o != null ? o : def;
};
op.ok = function(o){
  return o != null;
};
op.notOk = function(o){
  return o == null;
};
op.isK = function(k){
  return function(v){
    return v === k;
  };
};
op.second = function(_, a){
  return a;
};
op.nth = function(n){
  switch (n) {
  case 0:
    return op.first;
  case 1:
    return op.second;
  default:
    return function(){
      return arguments[n];
    };
  }
};
op.flip = function(fn){
  return function(a, b){
    arguments[0] = b;
    arguments[1] = a;
    return fn.apply(this, arguments);
  };
};
op.aritize = function(fn, cxt, n){
  var ref$;
  if (arguments.length < 3) {
    ref$ = [cxt, null], n = ref$[0], cxt = ref$[1];
  }
  return function(){
    return fn.apply(cxt != null ? cxt : this, [].slice.call(arguments, 0, n));
  };
};
op.it = function(fn, cxt){
  return function(it){
    return fn.call(cxt != null ? cxt : this, it);
  };
};
op.khas = function(k, o){
  return k in o;
};
op.kget = function(k, o){
  return o[k];
};
op.defkget = function(def, k, o){
  if (k in o) {
    return o[k];
  } else {
    return def;
  }
};
op.thisget = function(k){
  return this[k];
};
op.vkset = function(o, v, k){
  if (o && k != null) {
    o[k] = v;
  }
  return o;
};
op.has = function(o, k){
  return k in o;
};
op.get = function(o, k){
  return o[k];
};
op.getdef = function(o, k, def){
  if (k in o) {
    return o[k];
  } else {
    return def;
  }
};
op.kvset = function(o, k, v){
  if (o && k != null) {
    o[k] = v;
  }
  return o;
};
op.thiskvset = function(k, v){
  if (k != null) {
    this[k] = v;
  }
  return this;
};
op.prop = function(k){
  return function(o){
    return o[k];
  };
};
op.method = function(name){
  var args;
  args = slice$.call(arguments, 1);
  return function(obj){
    var _args;
    _args = slice$.call(arguments, 1);
    if (obj != null && obj[name]) {
      return obj[name].apply(obj, args.concat(_args));
    }
  };
};
op.parseBool = function(s){
  var i;
  i = parseInt(s || 0);
  return !!(isNaN(i) ? !FALSEY.test(s) : i);
};
op.toBool = op.parseBool;
op.toInt = function(v){
  return parseInt(v);
};
op.toFloat = function(v){
  return parseFloat(v);
};
op.toStr = function(v){
  return String(v);
};
op.toRegExp = function(v){
  return new RegExp(v);
};
op.toObject = function(v){
  if (typeof v === 'string' && op.strip(v)) {
    return JSON.parse(v);
  } else {
    return Object(v);
  }
};
op.toDate = function(v){
  if (v == null || v instanceof Date) {
    return v;
  }
  if (typeof v === 'number') {
    return new Date(v);
  }
  return new Date(String(v).replace(DASH_PATTERN, '/'));
};
op.cmp = function(x, y){
  if (x < y) {
    return -1;
  } else {
    if (x > y) {
      return 1;
    } else {
      return 0;
    }
  }
};
op.eq = function(x, y){
  return x == y;
};
op.ne = function(x, y){
  return x != y;
};
op.gt = function(x, y){
  return x > y;
};
op.ge = function(x, y){
  return x >= y;
};
op.lt = function(x, y){
  return x < y;
};
op.le = function(x, y){
  return x <= y;
};
op.add = function(x, y){
  return x + y;
};
op.sub = function(x, y){
  return x - y;
};
op.mul = function(x, y){
  return x * y;
};
op.div = function(x, y){
  return x / y;
};
op.flrdiv = function(x, y){
  return Math.floor(x / y);
};
op.mod = function(x, y){
  return x % y;
};
op.neg = function(x){
  return -x;
};
op.log2 = function(n){
  return Math.log(n / Math.LN2);
};
op.is = function(x, y){
  return x === y;
};
op.isnt = function(x, y){
  return x !== y;
};
op.and = function(x, y){
  return x && y;
};
op.or = function(x, y){
  return x || y;
};
op.not = function(x){
  return !x;
};
op.bitnot = function(x){
  return ~x;
};
op.bitand = function(x, y){
  return x & y;
};
op.bitor = function(x, y){
  return x | y;
};
op.bitxor = function(x, y){
  return x ^ y;
};
op.lshift = function(x, y){
  return x << y;
};
op.rshift = function(x, y){
  return x >> y;
};
op.bin = function(n){
  var s;
  do {
    s = (n % 2 ? '1' : '0') + (s || '');
    n >>= 1;
  } while (n);
  return s;
};
op.binlen = function(n){
  return op.bin(Math.abs(n)).length;
};
op.mask = function(n){
  return (1 << n) - 1;
};
op.chr = function(it){
  return String.fromCharCode(it);
};
op.ord = function(it){
  return String(it).charCodeAt(0);
};
op.encode = function(it){
  return it && $("<div>" + it + "</div>").html().replace(/"/g, '&quot;');
};
op.decode = function(it){
  return it && $("<div>" + it + "</div>").text();
};
op.strip = function(s){
  if (s) {
    return s.replace(STRIP_PAT, '');
  } else {
    return s;
  }
};
