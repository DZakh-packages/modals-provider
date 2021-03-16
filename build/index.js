'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var t = require('react'),
  e = 'open',
  n = 'close',
  r = 'closeAll',
  o =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
function i(t, e) {
  return t((e = { exports: {} }), e.exports), e.exports;
}
var a = i(function (t) {
  var e = Object.prototype.hasOwnProperty,
    n = '~';
  function r() {}
  function o(t, e, n) {
    (this.fn = t), (this.context = e), (this.once = n || !1);
  }
  function i(t, e, r, i, a) {
    if ('function' != typeof r) throw new TypeError('The listener must be a function');
    var u = new o(r, i || t, a),
      c = n ? n + e : e;
    return (
      t._events[c]
        ? t._events[c].fn
          ? (t._events[c] = [t._events[c], u])
          : t._events[c].push(u)
        : ((t._events[c] = u), t._eventsCount++),
      t
    );
  }
  function a(t, e) {
    0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
  }
  function u() {
    (this._events = new r()), (this._eventsCount = 0);
  }
  Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
    (u.prototype.eventNames = function () {
      var t,
        r,
        o = [];
      if (0 === this._eventsCount) return o;
      for (r in (t = this._events)) e.call(t, r) && o.push(n ? r.slice(1) : r);
      return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o;
    }),
    (u.prototype.listeners = function (t) {
      var e = n ? n + t : t,
        r = this._events[e];
      if (!r) return [];
      if (r.fn) return [r.fn];
      for (var o = 0, i = r.length, a = new Array(i); o < i; o++) a[o] = r[o].fn;
      return a;
    }),
    (u.prototype.listenerCount = function (t) {
      var e = n ? n + t : t,
        r = this._events[e];
      return r ? (r.fn ? 1 : r.length) : 0;
    }),
    (u.prototype.emit = function (t, e, r, o, i, a) {
      var u = n ? n + t : t;
      if (!this._events[u]) return !1;
      var c,
        f,
        s = this._events[u],
        l = arguments.length;
      if (s.fn) {
        switch ((s.once && this.removeListener(t, s.fn, void 0, !0), l)) {
          case 1:
            return s.fn.call(s.context), !0;
          case 2:
            return s.fn.call(s.context, e), !0;
          case 3:
            return s.fn.call(s.context, e, r), !0;
          case 4:
            return s.fn.call(s.context, e, r, o), !0;
          case 5:
            return s.fn.call(s.context, e, r, o, i), !0;
          case 6:
            return s.fn.call(s.context, e, r, o, i, a), !0;
        }
        for (f = 1, c = new Array(l - 1); f < l; f++) c[f - 1] = arguments[f];
        s.fn.apply(s.context, c);
      } else {
        var p,
          v = s.length;
        for (f = 0; f < v; f++)
          switch ((s[f].once && this.removeListener(t, s[f].fn, void 0, !0), l)) {
            case 1:
              s[f].fn.call(s[f].context);
              break;
            case 2:
              s[f].fn.call(s[f].context, e);
              break;
            case 3:
              s[f].fn.call(s[f].context, e, r);
              break;
            case 4:
              s[f].fn.call(s[f].context, e, r, o);
              break;
            default:
              if (!c) for (p = 1, c = new Array(l - 1); p < l; p++) c[p - 1] = arguments[p];
              s[f].fn.apply(s[f].context, c);
          }
      }
      return !0;
    }),
    (u.prototype.on = function (t, e, n) {
      return i(this, t, e, n, !1);
    }),
    (u.prototype.once = function (t, e, n) {
      return i(this, t, e, n, !0);
    }),
    (u.prototype.removeListener = function (t, e, r, o) {
      var i = n ? n + t : t;
      if (!this._events[i]) return this;
      if (!e) return a(this, i), this;
      var u = this._events[i];
      if (u.fn) u.fn !== e || (o && !u.once) || (r && u.context !== r) || a(this, i);
      else {
        for (var c = 0, f = [], s = u.length; c < s; c++)
          (u[c].fn !== e || (o && !u[c].once) || (r && u[c].context !== r)) && f.push(u[c]);
        f.length ? (this._events[i] = 1 === f.length ? f[0] : f) : a(this, i);
      }
      return this;
    }),
    (u.prototype.removeAllListeners = function (t) {
      var e;
      return (
        t
          ? ((e = n ? n + t : t), this._events[e] && a(this, e))
          : ((this._events = new r()), (this._eventsCount = 0)),
        this
      );
    }),
    (u.prototype.off = u.prototype.removeListener),
    (u.prototype.addListener = u.prototype.on),
    (u.prefixed = n),
    (u.EventEmitter = u),
    (t.exports = u);
})();
function u(t, e) {
  return ''.concat(t, '.').concat(e);
}
function c(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (
          var a, u = t[Symbol.iterator]();
          !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e);
          r = !0
        );
      } catch (t) {
        (o = !0), (i = t);
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (o) throw i;
        }
      }
      return n;
    })(t, e) ||
    s(t, e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function f(t) {
  return (
    (function (t) {
      if (Array.isArray(t)) return l(t);
    })(t) ||
    (function (t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    })(t) ||
    s(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function s(t, e) {
  if (t) {
    if ('string' == typeof t) return l(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === n && t.constructor && (n = t.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(t)
        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? l(t, e)
        : void 0
    );
  }
}
function l(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var p = i(function (t, e) {
    var n = '__lodash_hash_undefined__',
      r = 1 / 0,
      i = 9007199254740991,
      a = 17976931348623157e292,
      u = NaN,
      c = '[object Arguments]',
      f = '[object Array]',
      s = '[object Boolean]',
      l = '[object Date]',
      p = '[object Error]',
      v = '[object Function]',
      h = '[object Map]',
      y = '[object Number]',
      _ = '[object Object]',
      d = '[object Promise]',
      b = '[object RegExp]',
      g = '[object Set]',
      m = '[object String]',
      j = '[object Symbol]',
      w = '[object WeakMap]',
      A = '[object ArrayBuffer]',
      O = '[object DataView]',
      x = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      E = /^\w*$/,
      M = /^\./,
      S = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      I = /^\s+|\s+$/g,
      P = /\\(\\)?/g,
      k = /^[-+]0x[0-9a-f]+$/i,
      $ = /^0b[01]+$/i,
      K = /^\[object .+?Constructor\]$/,
      C = /^0o[0-7]+$/i,
      L = /^(?:0|[1-9]\d*)$/,
      R = {};
    (R['[object Float32Array]'] = R['[object Float64Array]'] = R['[object Int8Array]'] = R[
      '[object Int16Array]'
    ] = R['[object Int32Array]'] = R['[object Uint8Array]'] = R['[object Uint8ClampedArray]'] = R[
      '[object Uint16Array]'
    ] = R['[object Uint32Array]'] = !0),
      (R[c] = R[f] = R[A] = R[s] = R[O] = R[l] = R[p] = R[v] = R[h] = R[y] = R[_] = R[b] = R[g] = R[
        m
      ] = R[w] = !1);
    var T = parseInt,
      N = 'object' == typeof o && o && o.Object === Object && o,
      D = 'object' == typeof self && self && self.Object === Object && self,
      F = N || D || Function('return this')(),
      U = e && !e.nodeType && e,
      V = U && t && !t.nodeType && t,
      z = V && V.exports === U && N.process,
      Y = (function () {
        try {
          return z && z.binding('util');
        } catch (t) {}
      })(),
      B = Y && Y.isTypedArray;
    function W(t, e) {
      for (var n = -1, r = t ? t.length : 0; ++n < r; ) if (e(t[n], n, t)) return !0;
      return !1;
    }
    function q(t) {
      var e = !1;
      if (null != t && 'function' != typeof t.toString)
        try {
          e = !!(t + '');
        } catch (t) {}
      return e;
    }
    function G(t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t, r) {
          n[++e] = [r, t];
        }),
        n
      );
    }
    function H(t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t) {
          n[++e] = t;
        }),
        n
      );
    }
    var J,
      Q,
      X,
      Z = Array.prototype,
      tt = Function.prototype,
      et = Object.prototype,
      nt = F['__core-js_shared__'],
      rt = (J = /[^.]+$/.exec((nt && nt.keys && nt.keys.IE_PROTO) || ''))
        ? 'Symbol(src)_1.' + J
        : '',
      ot = tt.toString,
      it = et.hasOwnProperty,
      at = et.toString,
      ut = RegExp(
        '^' +
          ot
            .call(it)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$'
      ),
      ct = F.Symbol,
      ft = F.Uint8Array,
      st = et.propertyIsEnumerable,
      lt = Z.splice,
      pt =
        ((Q = Object.keys),
        (X = Object),
        function (t) {
          return Q(X(t));
        }),
      vt = Math.max,
      ht = Math.min,
      yt = Bt(F, 'DataView'),
      _t = Bt(F, 'Map'),
      dt = Bt(F, 'Promise'),
      bt = Bt(F, 'Set'),
      gt = Bt(F, 'WeakMap'),
      mt = Bt(Object, 'create'),
      jt = Zt(yt),
      wt = Zt(_t),
      At = Zt(dt),
      Ot = Zt(bt),
      xt = Zt(gt),
      Et = ct ? ct.prototype : void 0,
      Mt = Et ? Et.valueOf : void 0,
      St = Et ? Et.toString : void 0;
    function It(t) {
      var e = -1,
        n = t ? t.length : 0;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function Pt(t) {
      var e = -1,
        n = t ? t.length : 0;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function kt(t) {
      var e = -1,
        n = t ? t.length : 0;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function $t(t) {
      var e = -1,
        n = t ? t.length : 0;
      for (this.__data__ = new kt(); ++e < n; ) this.add(t[e]);
    }
    function Kt(t) {
      this.__data__ = new Pt(t);
    }
    function Ct(t, e) {
      var n =
          re(t) || ne(t)
            ? (function (t, e) {
                for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                return r;
              })(t.length, String)
            : [],
        r = n.length,
        o = !!r;
      for (var i in t) (!e && !it.call(t, i)) || (o && ('length' == i || qt(i, r))) || n.push(i);
      return n;
    }
    function Lt(t, e) {
      for (var n = t.length; n--; ) if (ee(t[n][0], e)) return n;
      return -1;
    }
    function Rt(t, e) {
      for (var n = 0, r = (e = Gt(e, t) ? [e] : Vt(e)).length; null != t && n < r; )
        t = t[Xt(e[n++])];
      return n && n == r ? t : void 0;
    }
    function Tt(t, e) {
      return null != t && e in Object(t);
    }
    function Nt(t, e, n, r, o) {
      return (
        t === e ||
        (null == t || null == e || (!ue(t) && !ce(e))
          ? t != t && e != e
          : (function (t, e, n, r, o, i) {
              var a = re(t),
                u = re(e),
                v = f,
                d = f;
              a || (v = (v = Wt(t)) == c ? _ : v);
              u || (d = (d = Wt(e)) == c ? _ : d);
              var w = v == _ && !q(t),
                x = d == _ && !q(e),
                E = v == d;
              if (E && !w)
                return (
                  i || (i = new Kt()),
                  a || se(t)
                    ? zt(t, e, n, r, o, i)
                    : (function (t, e, n, r, o, i, a) {
                        switch (n) {
                          case O:
                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                              return !1;
                            (t = t.buffer), (e = e.buffer);
                          case A:
                            return !(t.byteLength != e.byteLength || !r(new ft(t), new ft(e)));
                          case s:
                          case l:
                          case y:
                            return ee(+t, +e);
                          case p:
                            return t.name == e.name && t.message == e.message;
                          case b:
                          case m:
                            return t == e + '';
                          case h:
                            var u = G;
                          case g:
                            var c = 2 & i;
                            if ((u || (u = H), t.size != e.size && !c)) return !1;
                            var f = a.get(t);
                            if (f) return f == e;
                            (i |= 1), a.set(t, e);
                            var v = zt(u(t), u(e), r, o, i, a);
                            return a.delete(t), v;
                          case j:
                            if (Mt) return Mt.call(t) == Mt.call(e);
                        }
                        return !1;
                      })(t, e, v, n, r, o, i)
                );
              if (!(2 & o)) {
                var M = w && it.call(t, '__wrapped__'),
                  S = x && it.call(e, '__wrapped__');
                if (M || S) {
                  var I = M ? t.value() : t,
                    P = S ? e.value() : e;
                  return i || (i = new Kt()), n(I, P, r, o, i);
                }
              }
              if (!E) return !1;
              return (
                i || (i = new Kt()),
                (function (t, e, n, r, o, i) {
                  var a = 2 & o,
                    u = le(t),
                    c = u.length,
                    f = le(e).length;
                  if (c != f && !a) return !1;
                  var s = c;
                  for (; s--; ) {
                    var l = u[s];
                    if (!(a ? l in e : it.call(e, l))) return !1;
                  }
                  var p = i.get(t);
                  if (p && i.get(e)) return p == e;
                  var v = !0;
                  i.set(t, e), i.set(e, t);
                  var h = a;
                  for (; ++s < c; ) {
                    var y = t[(l = u[s])],
                      _ = e[l];
                    if (r) var d = a ? r(_, y, l, e, t, i) : r(y, _, l, t, e, i);
                    if (!(void 0 === d ? y === _ || n(y, _, r, o, i) : d)) {
                      v = !1;
                      break;
                    }
                    h || (h = 'constructor' == l);
                  }
                  if (v && !h) {
                    var b = t.constructor,
                      g = e.constructor;
                    b == g ||
                      !('constructor' in t) ||
                      !('constructor' in e) ||
                      ('function' == typeof b &&
                        b instanceof b &&
                        'function' == typeof g &&
                        g instanceof g) ||
                      (v = !1);
                  }
                  return i.delete(t), i.delete(e), v;
                })(t, e, n, r, o, i)
              );
            })(t, e, Nt, n, r, o))
      );
    }
    function Dt(t) {
      return (
        !(
          !ue(t) ||
          (function (t) {
            return !!rt && rt in t;
          })(t)
        ) && (ie(t) || q(t) ? ut : K).test(Zt(t))
      );
    }
    function Ft(t) {
      return 'function' == typeof t
        ? t
        : null == t
        ? pe
        : 'object' == typeof t
        ? re(t)
          ? (function (t, e) {
              if (Gt(t) && Ht(e)) return Jt(Xt(t), e);
              return function (n) {
                var r = (function (t, e, n) {
                  var r = null == t ? void 0 : Rt(t, e);
                  return void 0 === r ? n : r;
                })(n, t);
                return void 0 === r && r === e
                  ? (function (t, e) {
                      return (
                        null != t &&
                        (function (t, e, n) {
                          e = Gt(e, t) ? [e] : Vt(e);
                          var r,
                            o = -1,
                            i = e.length;
                          for (; ++o < i; ) {
                            var a = Xt(e[o]);
                            if (!(r = null != t && n(t, a))) break;
                            t = t[a];
                          }
                          if (r) return r;
                          return !!(i = t ? t.length : 0) && ae(i) && qt(a, i) && (re(t) || ne(t));
                        })(t, e, Tt)
                      );
                    })(n, t)
                  : Nt(e, r, void 0, 3);
              };
            })(t[0], t[1])
          : (function (t) {
              var e = (function (t) {
                var e = le(t),
                  n = e.length;
                for (; n--; ) {
                  var r = e[n],
                    o = t[r];
                  e[n] = [r, o, Ht(o)];
                }
                return e;
              })(t);
              if (1 == e.length && e[0][2]) return Jt(e[0][0], e[0][1]);
              return function (n) {
                return (
                  n === t ||
                  (function (t, e, n, r) {
                    var o = n.length,
                      i = o,
                      a = !r;
                    if (null == t) return !i;
                    for (t = Object(t); o--; ) {
                      var u = n[o];
                      if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
                    }
                    for (; ++o < i; ) {
                      var c = (u = n[o])[0],
                        f = t[c],
                        s = u[1];
                      if (a && u[2]) {
                        if (void 0 === f && !(c in t)) return !1;
                      } else {
                        var l = new Kt();
                        if (r) var p = r(f, s, c, t, e, l);
                        if (!(void 0 === p ? Nt(s, f, r, 3, l) : p)) return !1;
                      }
                    }
                    return !0;
                  })(n, t, e)
                );
              };
            })(t)
        : Gt((e = t))
        ? ((n = Xt(e)),
          function (t) {
            return null == t ? void 0 : t[n];
          })
        : (function (t) {
            return function (e) {
              return Rt(e, t);
            };
          })(e);
      var e, n;
    }
    function Ut(t) {
      if (
        ((n = (e = t) && e.constructor),
        (r = ('function' == typeof n && n.prototype) || et),
        e !== r)
      )
        return pt(t);
      var e,
        n,
        r,
        o = [];
      for (var i in Object(t)) it.call(t, i) && 'constructor' != i && o.push(i);
      return o;
    }
    function Vt(t) {
      return re(t) ? t : Qt(t);
    }
    function zt(t, e, n, r, o, i) {
      var a = 2 & o,
        u = t.length,
        c = e.length;
      if (u != c && !(a && c > u)) return !1;
      var f = i.get(t);
      if (f && i.get(e)) return f == e;
      var s = -1,
        l = !0,
        p = 1 & o ? new $t() : void 0;
      for (i.set(t, e), i.set(e, t); ++s < u; ) {
        var v = t[s],
          h = e[s];
        if (r) var y = a ? r(h, v, s, e, t, i) : r(v, h, s, t, e, i);
        if (void 0 !== y) {
          if (y) continue;
          l = !1;
          break;
        }
        if (p) {
          if (
            !W(e, function (t, e) {
              if (!p.has(e) && (v === t || n(v, t, r, o, i))) return p.add(e);
            })
          ) {
            l = !1;
            break;
          }
        } else if (v !== h && !n(v, h, r, o, i)) {
          l = !1;
          break;
        }
      }
      return i.delete(t), i.delete(e), l;
    }
    function Yt(t, e) {
      var n,
        r,
        o = t.__data__;
      return (
        'string' == (r = typeof (n = e)) || 'number' == r || 'symbol' == r || 'boolean' == r
          ? '__proto__' !== n
          : null === n
      )
        ? o['string' == typeof e ? 'string' : 'hash']
        : o.map;
    }
    function Bt(t, e) {
      var n = (function (t, e) {
        return null == t ? void 0 : t[e];
      })(t, e);
      return Dt(n) ? n : void 0;
    }
    (It.prototype.clear = function () {
      this.__data__ = mt ? mt(null) : {};
    }),
      (It.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }),
      (It.prototype.get = function (t) {
        var e = this.__data__;
        if (mt) {
          var r = e[t];
          return r === n ? void 0 : r;
        }
        return it.call(e, t) ? e[t] : void 0;
      }),
      (It.prototype.has = function (t) {
        var e = this.__data__;
        return mt ? void 0 !== e[t] : it.call(e, t);
      }),
      (It.prototype.set = function (t, e) {
        return (this.__data__[t] = mt && void 0 === e ? n : e), this;
      }),
      (Pt.prototype.clear = function () {
        this.__data__ = [];
      }),
      (Pt.prototype.delete = function (t) {
        var e = this.__data__,
          n = Lt(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : lt.call(e, n, 1), !0);
      }),
      (Pt.prototype.get = function (t) {
        var e = this.__data__,
          n = Lt(e, t);
        return n < 0 ? void 0 : e[n][1];
      }),
      (Pt.prototype.has = function (t) {
        return Lt(this.__data__, t) > -1;
      }),
      (Pt.prototype.set = function (t, e) {
        var n = this.__data__,
          r = Lt(n, t);
        return r < 0 ? n.push([t, e]) : (n[r][1] = e), this;
      }),
      (kt.prototype.clear = function () {
        this.__data__ = { hash: new It(), map: new (_t || Pt)(), string: new It() };
      }),
      (kt.prototype.delete = function (t) {
        return Yt(this, t).delete(t);
      }),
      (kt.prototype.get = function (t) {
        return Yt(this, t).get(t);
      }),
      (kt.prototype.has = function (t) {
        return Yt(this, t).has(t);
      }),
      (kt.prototype.set = function (t, e) {
        return Yt(this, t).set(t, e), this;
      }),
      ($t.prototype.add = $t.prototype.push = function (t) {
        return this.__data__.set(t, n), this;
      }),
      ($t.prototype.has = function (t) {
        return this.__data__.has(t);
      }),
      (Kt.prototype.clear = function () {
        this.__data__ = new Pt();
      }),
      (Kt.prototype.delete = function (t) {
        return this.__data__.delete(t);
      }),
      (Kt.prototype.get = function (t) {
        return this.__data__.get(t);
      }),
      (Kt.prototype.has = function (t) {
        return this.__data__.has(t);
      }),
      (Kt.prototype.set = function (t, e) {
        var n = this.__data__;
        if (n instanceof Pt) {
          var r = n.__data__;
          if (!_t || r.length < 199) return r.push([t, e]), this;
          n = this.__data__ = new kt(r);
        }
        return n.set(t, e), this;
      });
    var Wt = function (t) {
      return at.call(t);
    };
    function qt(t, e) {
      return (
        !!(e = null == e ? i : e) &&
        ('number' == typeof t || L.test(t)) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    }
    function Gt(t, e) {
      if (re(t)) return !1;
      var n = typeof t;
      return (
        !('number' != n && 'symbol' != n && 'boolean' != n && null != t && !fe(t)) ||
        E.test(t) ||
        !x.test(t) ||
        (null != e && t in Object(e))
      );
    }
    function Ht(t) {
      return t == t && !ue(t);
    }
    function Jt(t, e) {
      return function (n) {
        return null != n && n[t] === e && (void 0 !== e || t in Object(n));
      };
    }
    ((yt && Wt(new yt(new ArrayBuffer(1))) != O) ||
      (_t && Wt(new _t()) != h) ||
      (dt && Wt(dt.resolve()) != d) ||
      (bt && Wt(new bt()) != g) ||
      (gt && Wt(new gt()) != w)) &&
      (Wt = function (t) {
        var e = at.call(t),
          n = e == _ ? t.constructor : void 0,
          r = n ? Zt(n) : void 0;
        if (r)
          switch (r) {
            case jt:
              return O;
            case wt:
              return h;
            case At:
              return d;
            case Ot:
              return g;
            case xt:
              return w;
          }
        return e;
      });
    var Qt = te(function (t) {
      var e;
      t =
        null == (e = t)
          ? ''
          : (function (t) {
              if ('string' == typeof t) return t;
              if (fe(t)) return St ? St.call(t) : '';
              var e = t + '';
              return '0' == e && 1 / t == -1 / 0 ? '-0' : e;
            })(e);
      var n = [];
      return (
        M.test(t) && n.push(''),
        t.replace(S, function (t, e, r, o) {
          n.push(r ? o.replace(P, '$1') : e || t);
        }),
        n
      );
    });
    function Xt(t) {
      if ('string' == typeof t || fe(t)) return t;
      var e = t + '';
      return '0' == e && 1 / t == -1 / 0 ? '-0' : e;
    }
    function Zt(t) {
      if (null != t) {
        try {
          return ot.call(t);
        } catch (t) {}
        try {
          return t + '';
        } catch (t) {}
      }
      return '';
    }
    function te(t, e) {
      if ('function' != typeof t || (e && 'function' != typeof e))
        throw new TypeError('Expected a function');
      var n = function () {
        var r = arguments,
          o = e ? e.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(o)) return i.get(o);
        var a = t.apply(this, r);
        return (n.cache = i.set(o, a)), a;
      };
      return (n.cache = new (te.Cache || kt)()), n;
    }
    function ee(t, e) {
      return t === e || (t != t && e != e);
    }
    function ne(t) {
      return (
        (function (t) {
          return ce(t) && oe(t);
        })(t) &&
        it.call(t, 'callee') &&
        (!st.call(t, 'callee') || at.call(t) == c)
      );
    }
    te.Cache = kt;
    var re = Array.isArray;
    function oe(t) {
      return null != t && ae(t.length) && !ie(t);
    }
    function ie(t) {
      var e = ue(t) ? at.call(t) : '';
      return e == v || '[object GeneratorFunction]' == e;
    }
    function ae(t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= i;
    }
    function ue(t) {
      var e = typeof t;
      return !!t && ('object' == e || 'function' == e);
    }
    function ce(t) {
      return !!t && 'object' == typeof t;
    }
    function fe(t) {
      return 'symbol' == typeof t || (ce(t) && at.call(t) == j);
    }
    var se = B
      ? (function (t) {
          return function (e) {
            return t(e);
          };
        })(B)
      : function (t) {
          return ce(t) && ae(t.length) && !!R[at.call(t)];
        };
    function le(t) {
      return oe(t) ? Ct(t) : Ut(t);
    }
    function pe(t) {
      return t;
    }
    t.exports = function (t, e, n) {
      var o = t ? t.length : 0;
      if (!o) return -1;
      var i,
        c,
        f = o - 1;
      return (
        void 0 !== n &&
          ((i = (function (t) {
            return t
              ? (t = (function (t) {
                  if ('number' == typeof t) return t;
                  if (fe(t)) return u;
                  if (ue(t)) {
                    var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
                    t = ue(e) ? e + '' : e;
                  }
                  if ('string' != typeof t) return 0 === t ? t : +t;
                  t = t.replace(I, '');
                  var n = $.test(t);
                  return n || C.test(t) ? T(t.slice(2), n ? 2 : 8) : k.test(t) ? u : +t;
                })(t)) === r || t === -1 / 0
                ? (t < 0 ? -1 : 1) * a
                : t == t
                ? t
                : 0
              : 0 === t
              ? t
              : 0;
          })(n)),
          (c = i % 1),
          (f = i == i ? (c ? i - c : i) : 0),
          (f = n < 0 ? vt(o + f, 0) : ht(f, o - 1))),
        (function (t, e, n, r) {
          for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
            if (e(t[i], i, t)) return i;
          return -1;
        })(t, Ft(e), f, !0)
      );
    };
  }),
  v = t.memo(function (t) {
    var e = t.ModalComponent,
      n = t.modalParams;
    return React.createElement(e, n.props);
  });
(exports.ModalsProvider = function (o) {
  var i = o.providerKey,
    s = void 0 === i ? 'MAIN_PROVIDER_KEY' : i,
    l = o.modals,
    h = void 0 === l ? {} : l,
    y = c(t.useState([]), 2),
    _ = y[0],
    d = y[1],
    b = t.useMemo(
      function () {
        return {
          openModalEventKey: u(s, e),
          closeModalEventKey: u(s, n),
          closeAllModalsEventKey: u(s, r),
        };
      },
      [s]
    ),
    g = b.openModalEventKey,
    m = b.closeModalEventKey,
    j = b.closeAllModalsEventKey;
  return (
    t.useEffect(
      function () {
        function t(t) {
          d(function (e) {
            return e.concat(t);
          });
        }
        return (
          a.on(g, t),
          function () {
            a.removeListener(g, t);
          }
        );
      },
      [g]
    ),
    t.useEffect(
      function () {
        function t(t) {
          d(function (e) {
            var n = p(e, { name: t.name });
            return -1 === n ? e : [].concat(f(e.slice(0, n)), f(e.slice(n + 1, e.length)));
          });
        }
        return (
          a.on(m, t),
          function () {
            a.removeListener(m, t);
          }
        );
      },
      [m]
    ),
    t.useEffect(
      function () {
        function t() {
          d([]);
        }
        return (
          a.on(j, t),
          function () {
            a.removeListener(j, t);
          }
        );
      },
      [j]
    ),
    _.map(function (t, e) {
      var n = t.name,
        r = h[n];
      return React.createElement(v, {
        key: ''.concat(n, '.').concat(e),
        ModalComponent: r,
        modalParams: t,
      });
    })
  );
}),
  (exports.closeAllModals = function (t) {
    var e = t.providerKey,
      r = u(void 0 === e ? 'MAIN_PROVIDER_KEY' : e, n);
    a.emit(r);
  }),
  (exports.closeModal = function (t) {
    var e = t.name,
      r = t.providerKey,
      o = u(void 0 === r ? 'MAIN_PROVIDER_KEY' : r, n);
    a.emit(o, { name: e });
  }),
  (exports.openModal = function (t) {
    var n = t.name,
      r = t.providerKey,
      o = void 0 === r ? 'MAIN_PROVIDER_KEY' : r,
      i = t.props,
      c = void 0 === i ? {} : i,
      f = u(o, e);
    a.emit(f, { name: n, props: c });
  });
