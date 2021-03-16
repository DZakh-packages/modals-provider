'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var t = require('events'),
  e = require('react');
function r(t) {
  if (t && t.__esModule) return t;
  var e = Object.create(null);
  return (
    t &&
      Object.keys(t).forEach(function (r) {
        if ('default' !== r) {
          var n = Object.getOwnPropertyDescriptor(t, r);
          Object.defineProperty(
            e,
            r,
            n.get
              ? n
              : {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  },
                }
          );
        }
      }),
    (e.default = t),
    Object.freeze(e)
  );
}
var n = 'open',
  o = 'close',
  a = 'closeAll',
  u = new (r(t))();
function i(t, e) {
  return ''.concat(t, '.').concat(e);
}
function c(t, e) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, e) {
      if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var r = [],
        n = !0,
        o = !1,
        a = void 0;
      try {
        for (
          var u, i = t[Symbol.iterator]();
          !(n = (u = i.next()).done) && (r.push(u.value), !e || r.length !== e);
          n = !0
        );
      } catch (t) {
        (o = !0), (a = t);
      } finally {
        try {
          n || null == i.return || i.return();
        } finally {
          if (o) throw a;
        }
      }
      return r;
    })(t, e) ||
    l(t, e) ||
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
      if (Array.isArray(t)) return s(t);
    })(t) ||
    (function (t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    })(t) ||
    l(t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function l(t, e) {
  if (t) {
    if ('string' == typeof t) return s(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === r && t.constructor && (r = t.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(t)
        : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? s(t, e)
        : void 0
    );
  }
}
function s(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
  return n;
}
var p =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
var v,
  y =
    ((function (t, e) {
      var r = '__lodash_hash_undefined__',
        n = 1 / 0,
        o = 9007199254740991,
        a = 17976931348623157e292,
        u = NaN,
        i = '[object Arguments]',
        c = '[object Array]',
        f = '[object Boolean]',
        l = '[object Date]',
        s = '[object Error]',
        v = '[object Function]',
        y = '[object Map]',
        d = '[object Number]',
        h = '[object Object]',
        _ = '[object Promise]',
        b = '[object RegExp]',
        g = '[object Set]',
        m = '[object String]',
        j = '[object Symbol]',
        w = '[object WeakMap]',
        A = '[object ArrayBuffer]',
        O = '[object DataView]',
        E = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        M = /^\w*$/,
        S = /^\./,
        I = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        x = /^\s+|\s+$/g,
        P = /\\(\\)?/g,
        $ = /^[-+]0x[0-9a-f]+$/i,
        K = /^0b[01]+$/i,
        R = /^\[object .+?Constructor\]$/,
        k = /^0o[0-7]+$/i,
        T = /^(?:0|[1-9]\d*)$/,
        D = {};
      (D['[object Float32Array]'] = D['[object Float64Array]'] = D['[object Int8Array]'] = D[
        '[object Int16Array]'
      ] = D['[object Int32Array]'] = D['[object Uint8Array]'] = D['[object Uint8ClampedArray]'] = D[
        '[object Uint16Array]'
      ] = D['[object Uint32Array]'] = !0),
        (D[i] = D[c] = D[A] = D[f] = D[O] = D[l] = D[s] = D[v] = D[y] = D[d] = D[h] = D[b] = D[
          g
        ] = D[m] = D[w] = !1);
      var C = parseInt,
        L = 'object' == typeof p && p && p.Object === Object && p,
        N = 'object' == typeof self && self && self.Object === Object && self,
        F = L || N || Function('return this')(),
        U = e && !e.nodeType && e,
        V = U && t && !t.nodeType && t,
        z = V && V.exports === U && L.process,
        Y = (function () {
          try {
            return z && z.binding('util');
          } catch (t) {}
        })(),
        B = Y && Y.isTypedArray;
      function q(t, e) {
        for (var r = -1, n = t ? t.length : 0; ++r < n; ) if (e(t[r], r, t)) return !0;
        return !1;
      }
      function W(t) {
        var e = !1;
        if (null != t && 'function' != typeof t.toString)
          try {
            e = !!(t + '');
          } catch (t) {}
        return e;
      }
      function G(t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t, n) {
            r[++e] = [n, t];
          }),
          r
        );
      }
      function H(t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t) {
            r[++e] = t;
          }),
          r
        );
      }
      var J,
        Q,
        X,
        Z = Array.prototype,
        tt = Function.prototype,
        et = Object.prototype,
        rt = F['__core-js_shared__'],
        nt = (J = /[^.]+$/.exec((rt && rt.keys && rt.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + J
          : '',
        ot = tt.toString,
        at = et.hasOwnProperty,
        ut = et.toString,
        it = RegExp(
          '^' +
            ot
              .call(at)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$'
        ),
        ct = F.Symbol,
        ft = F.Uint8Array,
        lt = et.propertyIsEnumerable,
        st = Z.splice,
        pt =
          ((Q = Object.keys),
          (X = Object),
          function (t) {
            return Q(X(t));
          }),
        vt = Math.max,
        yt = Math.min,
        dt = Bt(F, 'DataView'),
        ht = Bt(F, 'Map'),
        _t = Bt(F, 'Promise'),
        bt = Bt(F, 'Set'),
        gt = Bt(F, 'WeakMap'),
        mt = Bt(Object, 'create'),
        jt = Zt(dt),
        wt = Zt(ht),
        At = Zt(_t),
        Ot = Zt(bt),
        Et = Zt(gt),
        Mt = ct ? ct.prototype : void 0,
        St = Mt ? Mt.valueOf : void 0,
        It = Mt ? Mt.toString : void 0;
      function xt(t) {
        var e = -1,
          r = t ? t.length : 0;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      function Pt(t) {
        var e = -1,
          r = t ? t.length : 0;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      function $t(t) {
        var e = -1,
          r = t ? t.length : 0;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      function Kt(t) {
        var e = -1,
          r = t ? t.length : 0;
        for (this.__data__ = new $t(); ++e < r; ) this.add(t[e]);
      }
      function Rt(t) {
        this.__data__ = new Pt(t);
      }
      function kt(t, e) {
        var r =
            ne(t) || re(t)
              ? (function (t, e) {
                  for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
                  return n;
                })(t.length, String)
              : [],
          n = r.length,
          o = !!n;
        for (var a in t) (!e && !at.call(t, a)) || (o && ('length' == a || Wt(a, n))) || r.push(a);
        return r;
      }
      function Tt(t, e) {
        for (var r = t.length; r--; ) if (ee(t[r][0], e)) return r;
        return -1;
      }
      function Dt(t, e) {
        for (var r = 0, n = (e = Gt(e, t) ? [e] : Vt(e)).length; null != t && r < n; )
          t = t[Xt(e[r++])];
        return r && r == n ? t : void 0;
      }
      function Ct(t, e) {
        return null != t && e in Object(t);
      }
      function Lt(t, e, r, n, o) {
        return (
          t === e ||
          (null == t || null == e || (!ie(t) && !ce(e))
            ? t != t && e != e
            : (function (t, e, r, n, o, a) {
                var u = ne(t),
                  p = ne(e),
                  v = c,
                  _ = c;
                u || (v = (v = qt(t)) == i ? h : v), p || (_ = (_ = qt(e)) == i ? h : _);
                var w = v == h && !W(t),
                  E = _ == h && !W(e),
                  M = v == _;
                if (M && !w)
                  return (
                    a || (a = new Rt()),
                    u || le(t)
                      ? zt(t, e, r, n, o, a)
                      : (function (t, e, r, n, o, a, u) {
                          switch (r) {
                            case O:
                              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                                return !1;
                              (t = t.buffer), (e = e.buffer);
                            case A:
                              return !(t.byteLength != e.byteLength || !n(new ft(t), new ft(e)));
                            case f:
                            case l:
                            case d:
                              return ee(+t, +e);
                            case s:
                              return t.name == e.name && t.message == e.message;
                            case b:
                            case m:
                              return t == e + '';
                            case y:
                              var i = G;
                            case g:
                              var c = 2 & a;
                              if ((i || (i = H), t.size != e.size && !c)) return !1;
                              var p = u.get(t);
                              if (p) return p == e;
                              (a |= 1), u.set(t, e);
                              var v = zt(i(t), i(e), n, o, a, u);
                              return u.delete(t), v;
                            case j:
                              if (St) return St.call(t) == St.call(e);
                          }
                          return !1;
                        })(t, e, v, r, n, o, a)
                  );
                if (!(2 & o)) {
                  var S = w && at.call(t, '__wrapped__'),
                    I = E && at.call(e, '__wrapped__');
                  if (S || I) {
                    var x = S ? t.value() : t,
                      P = I ? e.value() : e;
                    return a || (a = new Rt()), r(x, P, n, o, a);
                  }
                }
                return (
                  !!M &&
                  (a || (a = new Rt()),
                  (function (t, e, r, n, o, a) {
                    var u = 2 & o,
                      i = se(t),
                      c = i.length,
                      f = se(e).length;
                    if (c != f && !u) return !1;
                    for (var l = c; l--; ) {
                      var s = i[l];
                      if (!(u ? s in e : at.call(e, s))) return !1;
                    }
                    var p = a.get(t);
                    if (p && a.get(e)) return p == e;
                    var v = !0;
                    a.set(t, e), a.set(e, t);
                    for (var y = u; ++l < c; ) {
                      var d = t[(s = i[l])],
                        h = e[s];
                      if (n) var _ = u ? n(h, d, s, e, t, a) : n(d, h, s, t, e, a);
                      if (!(void 0 === _ ? d === h || r(d, h, n, o, a) : _)) {
                        v = !1;
                        break;
                      }
                      y || (y = 'constructor' == s);
                    }
                    if (v && !y) {
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
                    return a.delete(t), a.delete(e), v;
                  })(t, e, r, n, o, a))
                );
              })(t, e, Lt, r, n, o))
        );
      }
      function Nt(t) {
        return (
          !(
            !ie(t) ||
            (function (t) {
              return !!nt && nt in t;
            })(t)
          ) && (ae(t) || W(t) ? it : R).test(Zt(t))
        );
      }
      function Ft(t) {
        return 'function' == typeof t
          ? t
          : null == t
          ? pe
          : 'object' == typeof t
          ? ne(t)
            ? (function (t, e) {
                return Gt(t) && Ht(e)
                  ? Jt(Xt(t), e)
                  : function (r) {
                      var n = (function (t, e, r) {
                        var n = null == t ? void 0 : Dt(t, e);
                        return void 0 === n ? r : n;
                      })(r, t);
                      return void 0 === n && n === e
                        ? (function (t, e) {
                            return (
                              null != t &&
                              (function (t, e, r) {
                                e = Gt(e, t) ? [e] : Vt(e);
                                for (var n, o = -1, a = e.length; ++o < a; ) {
                                  var u = Xt(e[o]);
                                  if (!(n = null != t && r(t, u))) break;
                                  t = t[u];
                                }
                                return (
                                  n ||
                                  (!!(a = t ? t.length : 0) &&
                                    ue(a) &&
                                    Wt(u, a) &&
                                    (ne(t) || re(t)))
                                );
                              })(t, e, Ct)
                            );
                          })(r, t)
                        : Lt(e, n, void 0, 3);
                    };
              })(t[0], t[1])
            : 1 ==
                (r = (function (t) {
                  for (var e = se(t), r = e.length; r--; ) {
                    var n = e[r],
                      o = t[n];
                    e[r] = [n, o, Ht(o)];
                  }
                  return e;
                })((e = t))).length && r[0][2]
            ? Jt(r[0][0], r[0][1])
            : function (t) {
                return (
                  t === e ||
                  (function (t, e, r, n) {
                    var o = r.length,
                      a = o,
                      u = !n;
                    if (null == t) return !a;
                    for (t = Object(t); o--; ) {
                      var i = r[o];
                      if (u && i[2] ? i[1] !== t[i[0]] : !(i[0] in t)) return !1;
                    }
                    for (; ++o < a; ) {
                      var c = (i = r[o])[0],
                        f = t[c],
                        l = i[1];
                      if (u && i[2]) {
                        if (void 0 === f && !(c in t)) return !1;
                      } else {
                        var s = new Rt();
                        if (n) var p = n(f, l, c, t, e, s);
                        if (!(void 0 === p ? Lt(l, f, n, 3, s) : p)) return !1;
                      }
                    }
                    return !0;
                  })(t, e, r)
                );
              }
          : Gt((n = t))
          ? ((o = Xt(n)),
            function (t) {
              return null == t ? void 0 : t[o];
            })
          : (function (t) {
              return function (e) {
                return Dt(e, t);
              };
            })(n);
        var e, r, n, o;
      }
      function Ut(t) {
        if (
          ((r = (e = t) && e.constructor),
          (n = ('function' == typeof r && r.prototype) || et),
          e !== n)
        )
          return pt(t);
        var e,
          r,
          n,
          o = [];
        for (var a in Object(t)) at.call(t, a) && 'constructor' != a && o.push(a);
        return o;
      }
      function Vt(t) {
        return ne(t) ? t : Qt(t);
      }
      function zt(t, e, r, n, o, a) {
        var u = 2 & o,
          i = t.length,
          c = e.length;
        if (i != c && !(u && c > i)) return !1;
        var f = a.get(t);
        if (f && a.get(e)) return f == e;
        var l = -1,
          s = !0,
          p = 1 & o ? new Kt() : void 0;
        for (a.set(t, e), a.set(e, t); ++l < i; ) {
          var v = t[l],
            y = e[l];
          if (n) var d = u ? n(y, v, l, e, t, a) : n(v, y, l, t, e, a);
          if (void 0 !== d) {
            if (d) continue;
            s = !1;
            break;
          }
          if (p) {
            if (
              !q(e, function (t, e) {
                if (!p.has(e) && (v === t || r(v, t, n, o, a))) return p.add(e);
              })
            ) {
              s = !1;
              break;
            }
          } else if (v !== y && !r(v, y, n, o, a)) {
            s = !1;
            break;
          }
        }
        return a.delete(t), a.delete(e), s;
      }
      function Yt(t, e) {
        var r,
          n,
          o = t.__data__;
        return (
          'string' == (n = typeof (r = e)) || 'number' == n || 'symbol' == n || 'boolean' == n
            ? '__proto__' !== r
            : null === r
        )
          ? o['string' == typeof e ? 'string' : 'hash']
          : o.map;
      }
      function Bt(t, e) {
        var r = (function (t, e) {
          return null == t ? void 0 : t[e];
        })(t, e);
        return Nt(r) ? r : void 0;
      }
      (xt.prototype.clear = function () {
        this.__data__ = mt ? mt(null) : {};
      }),
        (xt.prototype.delete = function (t) {
          return this.has(t) && delete this.__data__[t];
        }),
        (xt.prototype.get = function (t) {
          var e = this.__data__;
          if (mt) {
            var n = e[t];
            return n === r ? void 0 : n;
          }
          return at.call(e, t) ? e[t] : void 0;
        }),
        (xt.prototype.has = function (t) {
          var e = this.__data__;
          return mt ? void 0 !== e[t] : at.call(e, t);
        }),
        (xt.prototype.set = function (t, e) {
          return (this.__data__[t] = mt && void 0 === e ? r : e), this;
        }),
        (Pt.prototype.clear = function () {
          this.__data__ = [];
        }),
        (Pt.prototype.delete = function (t) {
          var e = this.__data__,
            r = Tt(e, t);
          return !(r < 0 || (r == e.length - 1 ? e.pop() : st.call(e, r, 1), 0));
        }),
        (Pt.prototype.get = function (t) {
          var e = this.__data__,
            r = Tt(e, t);
          return r < 0 ? void 0 : e[r][1];
        }),
        (Pt.prototype.has = function (t) {
          return Tt(this.__data__, t) > -1;
        }),
        (Pt.prototype.set = function (t, e) {
          var r = this.__data__,
            n = Tt(r, t);
          return n < 0 ? r.push([t, e]) : (r[n][1] = e), this;
        }),
        ($t.prototype.clear = function () {
          this.__data__ = { hash: new xt(), map: new (ht || Pt)(), string: new xt() };
        }),
        ($t.prototype.delete = function (t) {
          return Yt(this, t).delete(t);
        }),
        ($t.prototype.get = function (t) {
          return Yt(this, t).get(t);
        }),
        ($t.prototype.has = function (t) {
          return Yt(this, t).has(t);
        }),
        ($t.prototype.set = function (t, e) {
          return Yt(this, t).set(t, e), this;
        }),
        (Kt.prototype.add = Kt.prototype.push = function (t) {
          return this.__data__.set(t, r), this;
        }),
        (Kt.prototype.has = function (t) {
          return this.__data__.has(t);
        }),
        (Rt.prototype.clear = function () {
          this.__data__ = new Pt();
        }),
        (Rt.prototype.delete = function (t) {
          return this.__data__.delete(t);
        }),
        (Rt.prototype.get = function (t) {
          return this.__data__.get(t);
        }),
        (Rt.prototype.has = function (t) {
          return this.__data__.has(t);
        }),
        (Rt.prototype.set = function (t, e) {
          var r = this.__data__;
          if (r instanceof Pt) {
            var n = r.__data__;
            if (!ht || n.length < 199) return n.push([t, e]), this;
            r = this.__data__ = new $t(n);
          }
          return r.set(t, e), this;
        });
      var qt = function (t) {
        return ut.call(t);
      };
      function Wt(t, e) {
        return (
          !!(e = null == e ? o : e) &&
          ('number' == typeof t || T.test(t)) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      }
      function Gt(t, e) {
        if (ne(t)) return !1;
        var r = typeof t;
        return (
          !('number' != r && 'symbol' != r && 'boolean' != r && null != t && !fe(t)) ||
          M.test(t) ||
          !E.test(t) ||
          (null != e && t in Object(e))
        );
      }
      function Ht(t) {
        return t == t && !ie(t);
      }
      function Jt(t, e) {
        return function (r) {
          return null != r && r[t] === e && (void 0 !== e || t in Object(r));
        };
      }
      ((dt && qt(new dt(new ArrayBuffer(1))) != O) ||
        (ht && qt(new ht()) != y) ||
        (_t && qt(_t.resolve()) != _) ||
        (bt && qt(new bt()) != g) ||
        (gt && qt(new gt()) != w)) &&
        (qt = function (t) {
          var e = ut.call(t),
            r = e == h ? t.constructor : void 0,
            n = r ? Zt(r) : void 0;
          if (n)
            switch (n) {
              case jt:
                return O;
              case wt:
                return y;
              case At:
                return _;
              case Ot:
                return g;
              case Et:
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
                if (fe(t)) return It ? It.call(t) : '';
                var e = t + '';
                return '0' == e && 1 / t == -1 / 0 ? '-0' : e;
              })(e);
        var r = [];
        return (
          S.test(t) && r.push(''),
          t.replace(I, function (t, e, n, o) {
            r.push(n ? o.replace(P, '$1') : e || t);
          }),
          r
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
        var r = function () {
          var n = arguments,
            o = e ? e.apply(this, n) : n[0],
            a = r.cache;
          if (a.has(o)) return a.get(o);
          var u = t.apply(this, n);
          return (r.cache = a.set(o, u)), u;
        };
        return (r.cache = new (te.Cache || $t)()), r;
      }
      function ee(t, e) {
        return t === e || (t != t && e != e);
      }
      function re(t) {
        return (
          (function (t) {
            return ce(t) && oe(t);
          })(t) &&
          at.call(t, 'callee') &&
          (!lt.call(t, 'callee') || ut.call(t) == i)
        );
      }
      te.Cache = $t;
      var ne = Array.isArray;
      function oe(t) {
        return null != t && ue(t.length) && !ae(t);
      }
      function ae(t) {
        var e = ie(t) ? ut.call(t) : '';
        return e == v || '[object GeneratorFunction]' == e;
      }
      function ue(t) {
        return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= o;
      }
      function ie(t) {
        var e = typeof t;
        return !!t && ('object' == e || 'function' == e);
      }
      function ce(t) {
        return !!t && 'object' == typeof t;
      }
      function fe(t) {
        return 'symbol' == typeof t || (ce(t) && ut.call(t) == j);
      }
      var le = B
        ? (function (t) {
            return function (e) {
              return t(e);
            };
          })(B)
        : function (t) {
            return ce(t) && ue(t.length) && !!D[ut.call(t)];
          };
      function se(t) {
        return oe(t) ? kt(t) : Ut(t);
      }
      function pe(t) {
        return t;
      }
      t.exports = function (t, e, r) {
        var o = t ? t.length : 0;
        if (!o) return -1;
        var i,
          c,
          f = o - 1;
        return (
          void 0 !== r &&
            ((i = (function (t) {
              return t
                ? (t = (function (t) {
                    if ('number' == typeof t) return t;
                    if (fe(t)) return u;
                    if (ie(t)) {
                      var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
                      t = ie(e) ? e + '' : e;
                    }
                    if ('string' != typeof t) return 0 === t ? t : +t;
                    t = t.replace(x, '');
                    var r = K.test(t);
                    return r || k.test(t) ? C(t.slice(2), r ? 2 : 8) : $.test(t) ? u : +t;
                  })(t)) === n || t === -1 / 0
                  ? (t < 0 ? -1 : 1) * a
                  : t == t
                  ? t
                  : 0
                : 0 === t
                ? t
                : 0;
            })(r)),
            (c = i % 1),
            (f = i == i ? (c ? i - c : i) : 0),
            (f = r < 0 ? vt(o + f, 0) : yt(f, o - 1))),
          (function (t, e, r, n) {
            for (var o = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; )
              if (e(t[a], a, t)) return a;
            return -1;
          })(t, Ft(e), f, !0)
        );
      };
    })((v = { exports: {} }), v.exports),
    v.exports),
  d = e.memo(function (t) {
    var e = t.ModalComponent,
      r = t.modalParams;
    return React.createElement(e, r.props);
  });
(exports.ModalsProvider = function (t) {
  var r = t.providerKey,
    l = void 0 === r ? 'MAIN_PROVIDER_KEY' : r,
    s = t.modals,
    p = void 0 === s ? {} : s,
    v = c(e.useState([]), 2),
    h = v[0],
    _ = v[1],
    b = e.useMemo(
      function () {
        return {
          openModalEventKey: i(l, n),
          closeModalEventKey: i(l, o),
          closeAllModalsEventKey: i(l, a),
        };
      },
      [l]
    ),
    g = b.openModalEventKey,
    m = b.closeModalEventKey,
    j = b.closeAllModalsEventKey;
  return (
    e.useEffect(
      function () {
        function t(t) {
          _(function (e) {
            return e.concat(t);
          });
        }
        return (
          u.on(g, t),
          function () {
            u.removeListener(g, t);
          }
        );
      },
      [g]
    ),
    e.useEffect(
      function () {
        function t(t) {
          _(function (e) {
            var r = y(e, { name: t.name });
            return -1 === r ? e : [].concat(f(e.slice(0, r)), f(e.slice(r + 1, e.length)));
          });
        }
        return (
          u.on(m, t),
          function () {
            u.removeListener(m, t);
          }
        );
      },
      [m]
    ),
    e.useEffect(
      function () {
        function t() {
          _([]);
        }
        return (
          u.on(j, t),
          function () {
            u.removeListener(j, t);
          }
        );
      },
      [j]
    ),
    h.map(function (t, e) {
      var r = t.name,
        n = p[r];
      return React.createElement(d, {
        key: ''.concat(r, '.').concat(e),
        ModalComponent: n,
        modalParams: t,
      });
    })
  );
}),
  (exports.closeAllModals = function (t) {
    var e = t.providerKey,
      r = i(void 0 === e ? 'MAIN_PROVIDER_KEY' : e, o);
    u.emit(r);
  }),
  (exports.closeModal = function (t) {
    var e = t.name,
      r = t.providerKey,
      n = i(void 0 === r ? 'MAIN_PROVIDER_KEY' : r, o);
    u.emit(n, { name: e });
  }),
  (exports.openModal = function (t) {
    var e = t.name,
      r = t.providerKey,
      o = void 0 === r ? 'MAIN_PROVIDER_KEY' : r,
      a = t.props,
      c = void 0 === a ? {} : a,
      f = i(o, n);
    u.emit(f, { name: e, props: c });
  });
