var Xl = Object.defineProperty;
var Ql = (e, t, s) => t in e ? Xl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var re = (e, t, s) => Ql(e, typeof t != "symbol" ? t + "" : t, s);
/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function co(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const Pe = {}, Ss = [], It = () => {
}, Vr = () => !1, Zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ei = (e) => e.startsWith("onUpdate:"), Fe = Object.assign, uo = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Zl = Object.prototype.hasOwnProperty, we = (e, t) => Zl.call(e, t), ie = Array.isArray, Cs = (e) => hn(e) === "[object Map]", qr = (e) => hn(e) === "[object Set]", Ro = (e) => hn(e) === "[object Date]", de = (e) => typeof e == "function", Ie = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", xe = (e) => e !== null && typeof e == "object", Wr = (e) => (xe(e) || de(e)) && de(e.then) && de(e.catch), zr = Object.prototype.toString, hn = (e) => zr.call(e), ec = (e) => hn(e).slice(8, -1), Gr = (e) => hn(e) === "[object Object]", ti = (e) => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qs = /* @__PURE__ */ co(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), si = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, tc = /-\w/g, vt = si(
  (e) => e.replace(tc, (t) => t.slice(1).toUpperCase())
), sc = /\B([A-Z])/g, es = si(
  (e) => e.replace(sc, "-$1").toLowerCase()
), Kr = si((e) => e.charAt(0).toUpperCase() + e.slice(1)), mi = si(
  (e) => e ? `on${Kr(e)}` : ""
), Et = (e, t) => !Object.is(e, t), Mn = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Yr = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, fo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, nc = (e) => {
  const t = Ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let $o;
const ni = () => $o || ($o = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Xt(e) {
  if (ie(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], i = Ie(n) ? ac(n) : Xt(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ie(e) || xe(e))
    return e;
}
const ic = /;(?![^(]*\))/g, oc = /:([^]+)/, rc = /\/\*[^]*?\*\//g;
function ac(e) {
  const t = {};
  return e.replace(rc, "").split(ic).forEach((s) => {
    if (s) {
      const n = s.split(oc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ue(e) {
  let t = "";
  if (Ie(e))
    t = e;
  else if (ie(e))
    for (let s = 0; s < e.length; s++) {
      const n = ue(e[s]);
      n && (t += n + " ");
    }
  else if (xe(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const lc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", cc = /* @__PURE__ */ co(lc);
function Jr(e) {
  return !!e || e === "";
}
function uc(e, t) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let n = 0; s && n < e.length; n++)
    s = ho(e[n], t[n]);
  return s;
}
function ho(e, t) {
  if (e === t) return !0;
  let s = Ro(e), n = Ro(t);
  if (s || n)
    return s && n ? e.getTime() === t.getTime() : !1;
  if (s = ft(e), n = ft(t), s || n)
    return e === t;
  if (s = ie(e), n = ie(t), s || n)
    return s && n ? uc(e, t) : !1;
  if (s = xe(e), n = xe(t), s || n) {
    if (!s || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const r in e) {
      const a = e.hasOwnProperty(r), l = t.hasOwnProperty(r);
      if (a && !l || !a && l || !ho(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Xr = (e) => !!(e && e.__v_isRef === !0), M = (e) => Ie(e) ? e : e == null ? "" : ie(e) || xe(e) && (e.toString === zr || !de(e.toString)) ? Xr(e) ? M(e.value) : JSON.stringify(e, Qr, 2) : String(e), Qr = (e, t) => Xr(t) ? Qr(e, t.value) : Cs(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, i], o) => (s[yi(n, o) + " =>"] = i, s),
    {}
  )
} : qr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => yi(s))
} : ft(t) ? yi(t) : xe(t) && !ie(t) && !Gr(t) ? String(t) : t, yi = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ft(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ne;
class Zr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ne && (Ne.active ? (this.parent = Ne, this.index = (Ne.scopes || (Ne.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = Ne;
      try {
        return Ne = this, t();
      } finally {
        Ne = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ne, Ne = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ne === this)
        Ne = this.prevScope;
      else {
        let t = Ne;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ea(e) {
  return new Zr(e);
}
function ta() {
  return Ne;
}
function dc(e, t = !1) {
  Ne && Ne.cleanups.push(e);
}
let Me;
const vi = /* @__PURE__ */ new WeakSet();
class sa {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ne && (Ne.active ? Ne.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, vi.has(this) && (vi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ia(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Oo(this), oa(this);
    const t = Me, s = _t;
    Me = this, _t = !0;
    try {
      return this.fn();
    } finally {
      ra(this), Me = t, _t = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        mo(t);
      this.deps = this.depsTail = void 0, Oo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? vi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ni(this) && this.run();
  }
  get dirty() {
    return Ni(this);
  }
}
let na = 0, Ws, zs;
function ia(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = zs, zs = e;
    return;
  }
  e.next = Ws, Ws = e;
}
function po() {
  na++;
}
function go() {
  if (--na > 0)
    return;
  if (zs) {
    let t = zs;
    for (zs = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; Ws; ) {
    let t = Ws;
    for (Ws = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function oa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ra(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === s && (s = i), mo(n), fc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = s;
}
function Ni(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (aa(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function aa(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rn) || (e.globalVersion = rn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ni(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = Me, n = _t;
  Me = e, _t = !0;
  try {
    oa(e);
    const i = e.fn(e._value);
    (t.version === 0 || Et(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Me = s, _t = n, ra(e), e.flags &= -3;
  }
}
function mo(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep)
      mo(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function fc(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let _t = !0;
const la = [];
function Rt() {
  la.push(_t), _t = !1;
}
function $t() {
  const e = la.pop();
  _t = e === void 0 ? !0 : e;
}
function Oo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = Me;
    Me = void 0;
    try {
      t();
    } finally {
      Me = s;
    }
  }
}
let rn = 0;
class hc {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class yo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Me || !_t || Me === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Me)
      s = this.activeLink = new hc(Me, this), Me.deps ? (s.prevDep = Me.depsTail, Me.depsTail.nextDep = s, Me.depsTail = s) : Me.deps = Me.depsTail = s, ca(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Me.depsTail, s.nextDep = void 0, Me.depsTail.nextDep = s, Me.depsTail = s, Me.deps === s && (Me.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, rn++, this.notify(t);
  }
  notify(t) {
    po();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      go();
    }
  }
}
function ca(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        ca(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const On = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ Symbol(
  ""
), Di = /* @__PURE__ */ Symbol(
  ""
), an = /* @__PURE__ */ Symbol(
  ""
);
function Ye(e, t, s) {
  if (_t && Me) {
    let n = On.get(e);
    n || On.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(s);
    i || (n.set(s, i = new yo()), i.map = n, i.key = s), i.track();
  }
}
function Ut(e, t, s, n, i, o) {
  const r = On.get(e);
  if (!r) {
    rn++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (po(), t === "clear")
    r.forEach(a);
  else {
    const l = ie(e), c = l && ti(s);
    if (l && s === "length") {
      const d = Number(n);
      r.forEach((h, w) => {
        (w === "length" || w === an || !ft(w) && w >= d) && a(h);
      });
    } else
      switch ((s !== void 0 || r.has(void 0)) && a(r.get(s)), c && a(r.get(an)), t) {
        case "add":
          l ? c && a(r.get("length")) : (a(r.get(hs)), Cs(e) && a(r.get(Di)));
          break;
        case "delete":
          l || (a(r.get(hs)), Cs(e) && a(r.get(Di)));
          break;
        case "set":
          Cs(e) && a(r.get(hs));
          break;
      }
  }
  go();
}
function pc(e, t) {
  const s = On.get(e);
  return s && s.get(t);
}
function ms(e) {
  const t = /* @__PURE__ */ be(e);
  return t === e ? t : (Ye(t, "iterate", an), /* @__PURE__ */ at(e) ? t : t.map(bt));
}
function ii(e) {
  return Ye(e = /* @__PURE__ */ be(e), "iterate", an), e;
}
function Pt(e, t) {
  return /* @__PURE__ */ Vt(e) ? Is(/* @__PURE__ */ jt(e) ? bt(t) : t) : bt(t);
}
const gc = {
  __proto__: null,
  [Symbol.iterator]() {
    return _i(this, Symbol.iterator, (e) => Pt(this, e));
  },
  concat(...e) {
    return ms(this).concat(
      ...e.map((t) => ie(t) ? ms(t) : t)
    );
  },
  entries() {
    return _i(this, "entries", (e) => (e[1] = Pt(this, e[1]), e));
  },
  every(e, t) {
    return Ot(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ot(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => Pt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ot(
      this,
      "find",
      e,
      t,
      (s) => Pt(this, s),
      arguments
    );
  },
  findIndex(e, t) {
    return Ot(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ot(
      this,
      "findLast",
      e,
      t,
      (s) => Pt(this, s),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ot(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ot(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bi(this, "includes", e);
  },
  indexOf(...e) {
    return bi(this, "indexOf", e);
  },
  join(e) {
    return ms(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return bi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ot(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ls(this, "pop");
  },
  push(...e) {
    return Ls(this, "push", e);
  },
  reduce(e, ...t) {
    return Lo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Lo(this, "reduceRight", e, t);
  },
  shift() {
    return Ls(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ot(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ls(this, "splice", e);
  },
  toReversed() {
    return ms(this).toReversed();
  },
  toSorted(e) {
    return ms(this).toSorted(e);
  },
  toSpliced(...e) {
    return ms(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ls(this, "unshift", e);
  },
  values() {
    return _i(this, "values", (e) => Pt(this, e));
  }
};
function _i(e, t, s) {
  const n = ii(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ at(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = s(o.value)), o;
  }), i;
}
const mc = Array.prototype;
function Ot(e, t, s, n, i, o) {
  const r = ii(e), a = r !== e && !/* @__PURE__ */ at(e), l = r[t];
  if (l !== mc[t]) {
    const h = l.apply(e, o);
    return a ? bt(h) : h;
  }
  let c = s;
  r !== e && (a ? c = function(h, w) {
    return s.call(this, Pt(e, h), w, e);
  } : s.length > 2 && (c = function(h, w) {
    return s.call(this, h, w, e);
  }));
  const d = l.call(r, c, n);
  return a && i ? i(d) : d;
}
function Lo(e, t, s, n) {
  const i = ii(e), o = i !== e && !/* @__PURE__ */ at(e);
  let r = s, a = !1;
  i !== e && (o ? (a = n.length === 0, r = function(c, d, h) {
    return a && (a = !1, c = Pt(e, c)), s.call(this, c, Pt(e, d), h, e);
  }) : s.length > 3 && (r = function(c, d, h) {
    return s.call(this, c, d, h, e);
  }));
  const l = i[t](r, ...n);
  return a ? Pt(e, l) : l;
}
function bi(e, t, s) {
  const n = /* @__PURE__ */ be(e);
  Ye(n, "iterate", an);
  const i = n[t](...s);
  return (i === -1 || i === !1) && /* @__PURE__ */ ri(s[0]) ? (s[0] = /* @__PURE__ */ be(s[0]), n[t](...s)) : i;
}
function Ls(e, t, s = []) {
  Rt(), po();
  const n = (/* @__PURE__ */ be(e))[t].apply(e, s);
  return go(), $t(), n;
}
const yc = /* @__PURE__ */ co("__proto__,__v_isRef,__isVue"), ua = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function vc(e) {
  ft(e) || (e = String(e));
  const t = /* @__PURE__ */ be(this);
  return Ye(t, "has", e), t.hasOwnProperty(e);
}
class da {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (s === "__v_isReactive")
      return !i;
    if (s === "__v_isReadonly")
      return i;
    if (s === "__v_isShallow")
      return o;
    if (s === "__v_raw")
      return n === (i ? o ? Pc : ga : o ? pa : ha).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = ie(t);
    if (!i) {
      let l;
      if (r && (l = gc[s]))
        return l;
      if (s === "hasOwnProperty")
        return vc;
    }
    const a = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ $e(t) ? t : n
    );
    if ((ft(s) ? ua.has(s) : yc(s)) || (i || Ye(t, "get", s), o))
      return a;
    if (/* @__PURE__ */ $e(a)) {
      const l = r && ti(s) ? a : a.value;
      return i && xe(l) ? /* @__PURE__ */ Ui(l) : l;
    }
    return xe(a) ? i ? /* @__PURE__ */ Ui(a) : /* @__PURE__ */ oi(a) : a;
  }
}
class fa extends da {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, i) {
    let o = t[s];
    const r = ie(t) && ti(s);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Vt(o);
      if (!/* @__PURE__ */ at(n) && !/* @__PURE__ */ Vt(n) && (o = /* @__PURE__ */ be(o), n = /* @__PURE__ */ be(n)), !r && /* @__PURE__ */ $e(o) && !/* @__PURE__ */ $e(n))
        return c || (o.value = n), !0;
    }
    const a = r ? Number(s) < t.length : we(t, s), l = Reflect.set(
      t,
      s,
      n,
      /* @__PURE__ */ $e(t) ? t : i
    );
    return t === /* @__PURE__ */ be(i) && l && (a ? Et(n, o) && Ut(t, "set", s, n) : Ut(t, "add", s, n)), l;
  }
  deleteProperty(t, s) {
    const n = we(t, s);
    t[s];
    const i = Reflect.deleteProperty(t, s);
    return i && n && Ut(t, "delete", s, void 0), i;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!ft(s) || !ua.has(s)) && Ye(t, "has", s), n;
  }
  ownKeys(t) {
    return Ye(
      t,
      "iterate",
      ie(t) ? "length" : hs
    ), Reflect.ownKeys(t);
  }
}
class _c extends da {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const bc = /* @__PURE__ */ new fa(), wc = /* @__PURE__ */ new _c(), kc = /* @__PURE__ */ new fa(!0);
const Fi = (e) => e, yn = (e) => Reflect.getPrototypeOf(e);
function xc(e, t, s) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ be(i), r = Cs(o), a = e === "entries" || e === Symbol.iterator && r, l = e === "keys" && r, c = i[e](...n), d = s ? Fi : t ? Is : bt;
    return !t && Ye(
      o,
      "iterate",
      l ? Di : hs
    ), Fe(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: h, done: w } = c.next();
          return w ? { value: h, done: w } : {
            value: a ? [d(h[0]), d(h[1])] : d(h),
            done: w
          };
        }
      }
    );
  };
}
function vn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sc(e, t) {
  const s = {
    get(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ be(o), a = /* @__PURE__ */ be(i);
      e || (Et(i, a) && Ye(r, "get", i), Ye(r, "get", a));
      const { has: l } = yn(r), c = t ? Fi : e ? Is : bt;
      if (l.call(r, i))
        return c(o.get(i));
      if (l.call(r, a))
        return c(o.get(a));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ye(/* @__PURE__ */ be(i), "iterate", hs), i.size;
    },
    has(i) {
      const o = this.__v_raw, r = /* @__PURE__ */ be(o), a = /* @__PURE__ */ be(i);
      return e || (Et(i, a) && Ye(r, "has", i), Ye(r, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const r = this, a = r.__v_raw, l = /* @__PURE__ */ be(a), c = t ? Fi : e ? Is : bt;
      return !e && Ye(l, "iterate", hs), a.forEach((d, h) => i.call(o, c(d), c(h), r));
    }
  };
  return Fe(
    s,
    e ? {
      add: vn("add"),
      set: vn("set"),
      delete: vn("delete"),
      clear: vn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ be(this), r = yn(o), a = /* @__PURE__ */ be(i), l = !t && !/* @__PURE__ */ at(i) && !/* @__PURE__ */ Vt(i) ? a : i;
        return r.has.call(o, l) || Et(i, l) && r.has.call(o, i) || Et(a, l) && r.has.call(o, a) || (o.add(l), Ut(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ at(o) && !/* @__PURE__ */ Vt(o) && (o = /* @__PURE__ */ be(o));
        const r = /* @__PURE__ */ be(this), { has: a, get: l } = yn(r);
        let c = a.call(r, i);
        c || (i = /* @__PURE__ */ be(i), c = a.call(r, i));
        const d = l.call(r, i);
        return r.set(i, o), c ? Et(o, d) && Ut(r, "set", i, o) : Ut(r, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ be(this), { has: r, get: a } = yn(o);
        let l = r.call(o, i);
        l || (i = /* @__PURE__ */ be(i), l = r.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Ut(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ be(this), o = i.size !== 0, r = i.clear();
        return o && Ut(
          i,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    s[i] = xc(i, e, t);
  }), s;
}
function vo(e, t) {
  const s = Sc(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    we(s, i) && i in n ? s : n,
    i,
    o
  );
}
const Cc = {
  get: /* @__PURE__ */ vo(!1, !1)
}, Ac = {
  get: /* @__PURE__ */ vo(!1, !0)
}, Tc = {
  get: /* @__PURE__ */ vo(!0, !1)
};
const ha = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), Pc = /* @__PURE__ */ new WeakMap();
function Mc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function oi(e) {
  return /* @__PURE__ */ Vt(e) ? e : _o(
    e,
    !1,
    bc,
    Cc,
    ha
  );
}
// @__NO_SIDE_EFFECTS__
function Ec(e) {
  return _o(
    e,
    !1,
    kc,
    Ac,
    pa
  );
}
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  return _o(
    e,
    !0,
    wc,
    Tc,
    ga
  );
}
function _o(e, t, s, n, i) {
  if (!xe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = Mc(ec(e));
  if (r === 0)
    return e;
  const a = new Proxy(
    e,
    r === 2 ? n : s
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return /* @__PURE__ */ Vt(e) ? /* @__PURE__ */ jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ri(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ be(t) : e;
}
function bo(e) {
  return !we(e, "__v_skip") && Object.isExtensible(e) && Yr(e, "__v_skip", !0), e;
}
const bt = (e) => xe(e) ? /* @__PURE__ */ oi(e) : e, Is = (e) => xe(e) ? /* @__PURE__ */ Ui(e) : e;
// @__NO_SIDE_EFFECTS__
function $e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return Ic(e, !1);
}
function Ic(e, t) {
  return /* @__PURE__ */ $e(e) ? e : new Rc(e, t);
}
class Rc {
  constructor(t, s) {
    this.dep = new yo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : /* @__PURE__ */ be(t), this._value = s ? t : bt(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ at(t) || /* @__PURE__ */ Vt(t);
    t = n ? t : /* @__PURE__ */ be(t), Et(t, s) && (this._rawValue = t, this._value = n ? t : bt(t), this.dep.trigger());
  }
}
function p(e) {
  return /* @__PURE__ */ $e(e) ? e.value : e;
}
const $c = {
  get: (e, t, s) => t === "__v_raw" ? e : p(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t];
    return /* @__PURE__ */ $e(i) && !/* @__PURE__ */ $e(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function ma(e) {
  return /* @__PURE__ */ jt(e) ? e : new Proxy(e, $c);
}
// @__NO_SIDE_EFFECTS__
function Oc(e) {
  const t = ie(e) ? new Array(e.length) : {};
  for (const s in e)
    t[s] = Nc(e, s);
  return t;
}
class Lc {
  constructor(t, s, n) {
    this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = ft(s) ? s : String(s), this._raw = /* @__PURE__ */ be(t);
    let i = !0, o = t;
    if (!ie(t) || ft(this._key) || !ti(this._key))
      do
        i = !/* @__PURE__ */ ri(o) || /* @__PURE__ */ at(o);
      while (i && (o = o.__v_raw));
    this._shallow = i;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = p(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ $e(this._raw[this._key])) {
      const s = this._object[this._key];
      if (/* @__PURE__ */ $e(s)) {
        s.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return pc(this._raw, this._key);
  }
}
function Nc(e, t, s) {
  return new Lc(e, t, s);
}
class Dc {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new yo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Me !== this)
      return ia(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return aa(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Fc(e, t, s = !1) {
  let n, i;
  return de(e) ? n = e : (n = e.get, i = e.set), new Dc(n, i, s);
}
const _n = {}, Ln = /* @__PURE__ */ new WeakMap();
let ls;
function Uc(e, t = !1, s = ls) {
  if (s) {
    let n = Ln.get(s);
    n || Ln.set(s, n = []), n.push(e);
  }
}
function Bc(e, t, s = Pe) {
  const { immediate: n, deep: i, once: o, scheduler: r, augmentJob: a, call: l } = s, c = (_) => i ? _ : /* @__PURE__ */ at(_) || i === !1 || i === 0 ? Bt(_, 1) : Bt(_);
  let d, h, w, k, E = !1, T = !1;
  if (/* @__PURE__ */ $e(e) ? (h = () => e.value, E = /* @__PURE__ */ at(e)) : /* @__PURE__ */ jt(e) ? (h = () => c(e), E = !0) : ie(e) ? (T = !0, E = e.some((_) => /* @__PURE__ */ jt(_) || /* @__PURE__ */ at(_)), h = () => e.map((_) => {
    if (/* @__PURE__ */ $e(_))
      return _.value;
    if (/* @__PURE__ */ jt(_))
      return c(_);
    if (de(_))
      return l ? l(_, 2) : _();
  })) : de(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (w) {
      Rt();
      try {
        w();
      } finally {
        $t();
      }
    }
    const _ = ls;
    ls = d;
    try {
      return l ? l(e, 3, [k]) : e(k);
    } finally {
      ls = _;
    }
  } : h = It, t && i) {
    const _ = h, v = i === !0 ? 1 / 0 : i;
    h = () => Bt(_(), v);
  }
  const G = ta(), Y = () => {
    d.stop(), G && G.active && uo(G.effects, d);
  };
  if (o && t) {
    const _ = t;
    t = (...v) => {
      const S = _(...v);
      return Y(), S;
    };
  }
  let j = T ? new Array(e.length).fill(_n) : _n;
  const X = (_) => {
    if (!(!(d.flags & 1) || !d.dirty && !_))
      if (t) {
        const v = d.run();
        if (_ || i || E || (T ? v.some((S, y) => Et(S, j[y])) : Et(v, j))) {
          w && w();
          const S = ls;
          ls = d;
          try {
            const y = [
              v,
              // pass undefined as the old value when it's changed for the first time
              j === _n ? void 0 : T && j[0] === _n ? [] : j,
              k
            ];
            j = v, l ? l(t, 3, y) : (
              // @ts-expect-error
              t(...y)
            );
          } finally {
            ls = S;
          }
        }
      } else
        d.run();
  };
  return a && a(X), d = new sa(h), d.scheduler = r ? () => r(X, !1) : X, k = (_) => Uc(_, !1, d), w = d.onStop = () => {
    const _ = Ln.get(d);
    if (_) {
      if (l)
        l(_, 4);
      else
        for (const v of _) v();
      Ln.delete(d);
    }
  }, t ? n ? X(!0) : j = d.run() : r ? r(X.bind(null, !0), !0) : d.run(), Y.pause = d.pause.bind(d), Y.resume = d.resume.bind(d), Y.stop = Y, Y;
}
function Bt(e, t = 1 / 0, s) {
  if (t <= 0 || !xe(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, /* @__PURE__ */ $e(e))
    Bt(e.value, t, s);
  else if (ie(e))
    for (let n = 0; n < e.length; n++)
      Bt(e[n], t, s);
  else if (qr(e) || Cs(e))
    e.forEach((n) => {
      Bt(n, t, s);
    });
  else if (Gr(e)) {
    for (const n in e)
      Bt(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Bt(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pn(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    ai(i, t, s);
  }
}
function ht(e, t, s, n) {
  if (de(e)) {
    const i = pn(e, t, s, n);
    return i && Wr(i) && i.catch((o) => {
      ai(o, t, s);
    }), i;
  }
  if (ie(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(ht(e[o], t, s, n));
    return i;
  }
}
function ai(e, t, s, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Pe;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Rt(), pn(o, null, 10, [
        e,
        l,
        c
      ]), $t();
      return;
    }
  }
  Hc(e, s, i, n, r);
}
function Hc(e, t, s, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Qe = [];
let Tt = -1;
const As = [];
let Kt = null, ws = 0;
const ya = /* @__PURE__ */ Promise.resolve();
let Nn = null;
function Ke(e) {
  const t = Nn || ya;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function jc(e) {
  let t = Tt + 1, s = Qe.length;
  for (; t < s; ) {
    const n = t + s >>> 1, i = Qe[n], o = ln(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function wo(e) {
  if (!(e.flags & 1)) {
    const t = ln(e), s = Qe[Qe.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ln(s) ? Qe.push(e) : Qe.splice(jc(t), 0, e), e.flags |= 1, va();
  }
}
function va() {
  Nn || (Nn = ya.then(ba));
}
function Vc(e) {
  ie(e) ? As.push(...e) : Kt && e.id === -1 ? Kt.splice(ws + 1, 0, e) : e.flags & 1 || (As.push(e), e.flags |= 1), va();
}
function No(e, t, s = Tt + 1) {
  for (; s < Qe.length; s++) {
    const n = Qe[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Qe.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function _a(e) {
  if (As.length) {
    const t = [...new Set(As)].sort(
      (s, n) => ln(s) - ln(n)
    );
    if (As.length = 0, Kt) {
      Kt.push(...t);
      return;
    }
    for (Kt = t, ws = 0; ws < Kt.length; ws++) {
      const s = Kt[ws];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Kt = null, ws = 0;
  }
}
const ln = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ba(e) {
  try {
    for (Tt = 0; Tt < Qe.length; Tt++) {
      const t = Qe[Tt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Tt < Qe.length; Tt++) {
      const t = Qe[Tt];
      t && (t.flags &= -2);
    }
    Tt = -1, Qe.length = 0, _a(), Nn = null, (Qe.length || As.length) && ba();
  }
}
let ut = null, wa = null;
function Dn(e) {
  const t = ut;
  return ut = e, wa = e && e.type.__scopeId || null, t;
}
function Bi(e, t = ut, s) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Bn(-1);
    const o = Dn(t);
    let r;
    try {
      r = e(...i);
    } finally {
      Dn(o), n._d && Bn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function fs(e, t) {
  if (ut === null)
    return e;
  const s = fi(ut), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, r, a, l = Pe] = t[i];
    o && (de(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Bt(r), n.push({
      dir: o,
      instance: s,
      value: r,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function ns(e, t, s, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const a = i[r];
    o && (a.oldValue = o[r].value);
    let l = a.dir[n];
    l && (Rt(), ht(l, s, 8, [
      e.el,
      a,
      e,
      t
    ]), $t());
  }
}
function qc(e, t) {
  if (et) {
    let s = et.provides;
    const n = et.parent && et.parent.provides;
    n === s && (s = et.provides = Object.create(n)), s[e] = t;
  }
}
function Gs(e, t, s = !1) {
  const n = Co();
  if (n || ps) {
    let i = ps ? ps._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return s && de(t) ? t.call(n && n.proxy) : t;
  }
}
function Wc() {
  return !!(Co() || ps);
}
const zc = /* @__PURE__ */ Symbol.for("v-scx"), Gc = () => Gs(zc);
function De(e, t, s) {
  return ka(e, t, s);
}
function ka(e, t, s = Pe) {
  const { immediate: n, deep: i, flush: o, once: r } = s, a = Fe({}, s), l = t && n || !t && o !== "post";
  let c;
  if (dn) {
    if (o === "sync") {
      const k = Gc();
      c = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!l) {
      const k = () => {
      };
      return k.stop = It, k.resume = It, k.pause = It, k;
    }
  }
  const d = et;
  a.call = (k, E, T) => ht(k, d, E, T);
  let h = !1;
  o === "post" ? a.scheduler = (k) => {
    Xe(k, d && d.suspense);
  } : o !== "sync" && (h = !0, a.scheduler = (k, E) => {
    E ? k() : wo(k);
  }), a.augmentJob = (k) => {
    t && (k.flags |= 4), h && (k.flags |= 2, d && (k.id = d.uid, k.i = d));
  };
  const w = Bc(e, t, a);
  return dn && (c ? c.push(w) : l && w()), w;
}
function Kc(e, t, s) {
  const n = this.proxy, i = Ie(e) ? e.includes(".") ? xa(n, e) : () => n[e] : e.bind(n, n);
  let o;
  de(t) ? o = t : (o = t.handler, s = t);
  const r = mn(this), a = ka(i, o.bind(n), s);
  return r(), a;
}
function xa(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < s.length && n; i++)
      n = n[s[i]];
    return n;
  };
}
const zt = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ Symbol("_vte"), Ca = (e) => e.__isTeleport, cs = (e) => e && (e.disabled || e.disabled === ""), Yc = (e) => e && (e.defer || e.defer === ""), Do = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Fo = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Hi = (e, t) => {
  const s = e && e.to;
  return Ie(s) ? t ? t(s) : null : s;
}, Jc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, s, n, i, o, r, a, l, c) {
    const {
      mc: d,
      pc: h,
      pbc: w,
      o: { insert: k, querySelector: E, createText: T, createComment: G, parentNode: Y }
    } = c, j = cs(t.props);
    let { dynamicChildren: X } = t;
    const _ = (y, D, x) => {
      y.shapeFlag & 16 && d(
        y.children,
        D,
        x,
        i,
        o,
        r,
        a,
        l
      );
    }, v = (y = t) => {
      const D = cs(y.props), x = y.target = Hi(y.props, E), K = ji(x, y, T, k);
      x && (r !== "svg" && Do(x) ? r = "svg" : r !== "mathml" && Fo(x) && (r = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(x), D || (_(y, x, K), Bs(y, !1)));
    }, S = (y) => {
      const D = () => {
        if (zt.get(y) === D) {
          if (zt.delete(y), cs(y.props)) {
            const x = Y(y.el) || s;
            _(y, x, y.anchor), Bs(y, !0);
          }
          v(y);
        }
      };
      zt.set(y, D), Xe(D, o);
    };
    if (e == null) {
      const y = t.el = T(""), D = t.anchor = T("");
      if (k(y, s, n), k(D, s, n), Yc(t.props) || o && o.pendingBranch) {
        S(t);
        return;
      }
      j && (_(t, s, D), Bs(t, !0)), v();
    } else {
      t.el = e.el;
      const y = t.anchor = e.anchor, D = zt.get(e);
      if (D) {
        D.flags |= 8, zt.delete(e), S(t);
        return;
      }
      t.targetStart = e.targetStart;
      const x = t.target = e.target, K = t.targetAnchor = e.targetAnchor, ae = cs(e.props), R = ae ? s : x, ee = ae ? y : K;
      if (r === "svg" || Do(x) ? r = "svg" : (r === "mathml" || Fo(x)) && (r = "mathml"), X ? (w(
        e.dynamicChildren,
        X,
        R,
        i,
        o,
        r,
        a
      ), So(e, t, !0)) : l || h(
        e,
        t,
        R,
        ee,
        i,
        o,
        r,
        a,
        !1
      ), j)
        ae ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : bn(
          t,
          s,
          y,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = Hi(t.props, E);
        B && (t.target = B, bn(
          t,
          B,
          null,
          c,
          0
        ));
      } else ae && bn(
        t,
        x,
        K,
        c,
        1
      );
      Bs(t, j);
    }
  },
  remove(e, t, s, { um: n, o: { remove: i } }, o) {
    const {
      shapeFlag: r,
      children: a,
      anchor: l,
      targetStart: c,
      targetAnchor: d,
      target: h,
      props: w
    } = e, k = cs(w), E = o || !k, T = zt.get(e);
    if (T && (T.flags |= 8, zt.delete(e)), h && (i(c), i(d)), o && i(l), !T && (k || h) && r & 16)
      for (let G = 0; G < a.length; G++) {
        const Y = a[G];
        n(
          Y,
          t,
          s,
          E,
          !!Y.dynamicChildren
        );
      }
  },
  move: bn,
  hydrate: Xc
};
function bn(e, t, s, { o: { insert: n }, m: i }, o = 2) {
  o === 0 && n(e.targetAnchor, t, s);
  const { el: r, anchor: a, shapeFlag: l, children: c, props: d } = e, h = o === 2;
  if (h && n(r, t, s), !zt.has(e) && (!h || cs(d)) && l & 16)
    for (let w = 0; w < c.length; w++)
      i(
        c[w],
        t,
        s,
        2
      );
  h && n(a, t, s);
}
function Xc(e, t, s, n, i, o, {
  o: { nextSibling: r, parentNode: a, querySelector: l, insert: c, createText: d }
}, h) {
  function w(G, Y) {
    let j = Y;
    for (; j; ) {
      if (j && j.nodeType === 8) {
        if (j.data === "teleport start anchor")
          t.targetStart = j;
        else if (j.data === "teleport anchor") {
          t.targetAnchor = j, G._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      j = r(j);
    }
  }
  function k(G, Y) {
    Y.anchor = h(
      r(G),
      Y,
      a(G),
      s,
      n,
      i,
      o
    );
  }
  const E = t.target = Hi(
    t.props,
    l
  ), T = cs(t.props);
  if (E) {
    const G = E._lpa || E.firstChild;
    t.shapeFlag & 16 && (T ? (k(e, t), w(E, G), t.targetAnchor || ji(
      E,
      t,
      d,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      a(e) === E ? e : null
    )) : (t.anchor = r(e), w(E, G), t.targetAnchor || ji(E, t, d, c), h(
      G && r(G),
      t,
      E,
      s,
      n,
      i,
      o
    ))), Bs(t, T);
  } else T && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
}
const Aa = Jc;
function Bs(e, t) {
  const s = e.ctx;
  if (s && s.ut) {
    let n, i;
    for (t ? (n = e.el, i = e.anchor) : (n = e.targetStart, i = e.targetAnchor); n && n !== i; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", s.uid), n = n.nextSibling;
    s.ut();
  }
}
function ji(e, t, s, n, i = null) {
  const o = t.targetStart = s(""), r = t.targetAnchor = s("");
  return o[Sa] = r, e && (n(o, e, i), n(r, e, i)), r;
}
const ct = /* @__PURE__ */ Symbol("_leaveCb"), Ns = /* @__PURE__ */ Symbol("_enterCb");
function Qc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Rs(() => {
    e.isMounted = !0;
  }), gn(() => {
    e.isUnmounting = !0;
  }), e;
}
const lt = [Function, Array], Ta = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: lt,
  onEnter: lt,
  onAfterEnter: lt,
  onEnterCancelled: lt,
  // leave
  onBeforeLeave: lt,
  onLeave: lt,
  onAfterLeave: lt,
  onLeaveCancelled: lt,
  // appear
  onBeforeAppear: lt,
  onAppear: lt,
  onAfterAppear: lt,
  onAppearCancelled: lt
}, Pa = (e) => {
  const t = e.subTree;
  return t.component ? Pa(t.component) : t;
}, Zc = {
  name: "BaseTransition",
  props: Ta,
  setup(e, { slots: t }) {
    const s = Co(), n = Qc();
    return () => {
      const i = t.default && Ia(t.default(), !0), o = i && i.length ? Ma(i) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        s.subTree ? ve() : void 0
      );
      if (!o)
        return;
      const r = /* @__PURE__ */ be(e), { mode: a } = r;
      if (n.isLeaving)
        return wi(o);
      const l = Uo(o);
      if (!l)
        return wi(o);
      let c = Vi(
        l,
        r,
        n,
        s,
        // #11061, ensure enterHooks is fresh after clone
        (h) => c = h
      );
      l.type !== Ze && cn(l, c);
      let d = s.subTree && Uo(s.subTree);
      if (d && d.type !== Ze && !us(d, l) && Pa(s).type !== Ze) {
        let h = Vi(
          d,
          r,
          n,
          s
        );
        if (cn(d, h), a === "out-in" && l.type !== Ze)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, s.job.flags & 8 || s.update(), delete h.afterLeave, d = void 0;
          }, wi(o);
        a === "in-out" && l.type !== Ze ? h.delayLeave = (w, k, E) => {
          const T = Ea(
            n,
            d
          );
          T[String(d.key)] = d, w[ct] = () => {
            k(), w[ct] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            E(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return o;
    };
  }
};
function Ma(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const s of e)
      if (s.type !== Ze) {
        t = s;
        break;
      }
  }
  return t;
}
const eu = Zc;
function Ea(e, t) {
  const { leavingVNodes: s } = e;
  let n = s.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), s.set(t.type, n)), n;
}
function Vi(e, t, s, n, i) {
  const {
    appear: o,
    mode: r,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: h,
    onBeforeLeave: w,
    onLeave: k,
    onAfterLeave: E,
    onLeaveCancelled: T,
    onBeforeAppear: G,
    onAppear: Y,
    onAfterAppear: j,
    onAppearCancelled: X
  } = t, _ = String(e.key), v = Ea(s, e), S = (x, K) => {
    x && ht(
      x,
      n,
      9,
      K
    );
  }, y = (x, K) => {
    const ae = K[1];
    S(x, K), ie(x) ? x.every((R) => R.length <= 1) && ae() : x.length <= 1 && ae();
  }, D = {
    mode: r,
    persisted: a,
    beforeEnter(x) {
      let K = l;
      if (!s.isMounted)
        if (o)
          K = G || l;
        else
          return;
      x[ct] && x[ct](
        !0
        /* cancelled */
      );
      const ae = v[_];
      ae && us(e, ae) && ae.el[ct] && ae.el[ct](), S(K, [x]);
    },
    enter(x) {
      if (v[_] === e) return;
      let K = c, ae = d, R = h;
      if (!s.isMounted)
        if (o)
          K = Y || c, ae = j || d, R = X || h;
        else
          return;
      let ee = !1;
      x[Ns] = (I) => {
        ee || (ee = !0, I ? S(R, [x]) : S(ae, [x]), D.delayedLeave && D.delayedLeave(), x[Ns] = void 0);
      };
      const B = x[Ns].bind(null, !1);
      K ? y(K, [x, B]) : B();
    },
    leave(x, K) {
      const ae = String(e.key);
      if (x[Ns] && x[Ns](
        !0
        /* cancelled */
      ), s.isUnmounting)
        return K();
      S(w, [x]);
      let R = !1;
      x[ct] = (B) => {
        R || (R = !0, K(), B ? S(T, [x]) : S(E, [x]), x[ct] = void 0, v[ae] === e && delete v[ae]);
      };
      const ee = x[ct].bind(null, !1);
      v[ae] = e, k ? y(k, [x, ee]) : ee();
    },
    clone(x) {
      const K = Vi(
        x,
        t,
        s,
        n,
        i
      );
      return i && i(K), K;
    }
  };
  return D;
}
function wi(e) {
  if (li(e))
    return e = Qt(e), e.children = null, e;
}
function Uo(e) {
  if (!li(e))
    return Ca(e.type) && e.children ? Ma(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: s } = e;
  if (s) {
    if (t & 16)
      return s[0];
    if (t & 32 && de(s.default))
      return s.default();
  }
}
function cn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, cn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ia(e, t = !1, s) {
  let n = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const a = s == null ? r.key : String(s) + String(r.key != null ? r.key : o);
    r.type === ne ? (r.patchFlag & 128 && i++, n = n.concat(
      Ia(r.children, t, a)
    )) : (t || r.type !== Ze) && n.push(a != null ? Qt(r, { key: a }) : r);
  }
  if (i > 1)
    for (let o = 0; o < n.length; o++)
      n[o].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function pt(e, t) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ra(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Bo(e, t) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(e, t)) && !s.configurable);
}
const Fn = /* @__PURE__ */ new WeakMap();
function Ks(e, t, s, n, i = !1) {
  if (ie(e)) {
    e.forEach(
      (T, G) => Ks(
        T,
        t && (ie(t) ? t[G] : t),
        s,
        n,
        i
      )
    );
    return;
  }
  if (Ys(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ks(e, t, s, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? fi(n.component) : n.el, r = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Pe ? a.refs = {} : a.refs, h = a.setupState, w = /* @__PURE__ */ be(h), k = h === Pe ? Vr : (T) => Bo(d, T) ? !1 : we(w, T), E = (T, G) => !(G && Bo(d, G));
  if (c != null && c !== l) {
    if (Ho(t), Ie(c))
      d[c] = null, k(c) && (h[c] = null);
    else if (/* @__PURE__ */ $e(c)) {
      const T = t;
      E(c, T.k) && (c.value = null), T.k && (d[T.k] = null);
    }
  }
  if (de(l)) {
    Rt();
    try {
      pn(l, a, 12, [r, d]);
    } finally {
      $t();
    }
  } else {
    const T = Ie(l), G = /* @__PURE__ */ $e(l);
    if (T || G) {
      const Y = () => {
        if (e.f) {
          const j = T ? k(l) ? h[l] : d[l] : E() || !e.k ? l.value : d[e.k];
          if (i)
            ie(j) && uo(j, o);
          else if (ie(j))
            j.includes(o) || j.push(o);
          else if (T)
            d[l] = [o], k(l) && (h[l] = d[l]);
          else {
            const X = [o];
            E(l, e.k) && (l.value = X), e.k && (d[e.k] = X);
          }
        } else T ? (d[l] = r, k(l) && (h[l] = r)) : G && (E(l, e.k) && (l.value = r), e.k && (d[e.k] = r));
      };
      if (r) {
        const j = () => {
          Y(), Fn.delete(e);
        };
        j.id = -1, Fn.set(e, j), Xe(j, s);
      } else
        Ho(e), Y();
    }
  }
}
function Ho(e) {
  const t = Fn.get(e);
  t && (t.flags |= 8, Fn.delete(e));
}
ni().requestIdleCallback;
ni().cancelIdleCallback;
const Ys = (e) => !!e.type.__asyncLoader, li = (e) => e.type.__isKeepAlive;
function tu(e, t) {
  $a(e, "a", t);
}
function su(e, t) {
  $a(e, "da", t);
}
function $a(e, t, s = et) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = s;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ci(t, n, s), s) {
    let i = s.parent;
    for (; i && i.parent; )
      li(i.parent.vnode) && nu(n, t, s, i), i = i.parent;
  }
}
function nu(e, t, s, n) {
  const i = ci(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Oa(() => {
    uo(n[t], i);
  }, s);
}
function ci(e, t, s = et, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...r) => {
      Rt();
      const a = mn(s), l = ht(t, s, e, r);
      return a(), $t(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const qt = (e) => (t, s = et) => {
  (!dn || e === "sp") && ci(e, (...n) => t(...n), s);
}, iu = qt("bm"), Rs = qt("m"), ou = qt(
  "bu"
), ru = qt("u"), gn = qt(
  "bum"
), Oa = qt("um"), au = qt(
  "sp"
), lu = qt("rtg"), cu = qt("rtc");
function uu(e, t = et) {
  ci("ec", e, t);
}
const du = /* @__PURE__ */ Symbol.for("v-ndc");
function Ve(e, t, s, n) {
  let i;
  const o = s, r = ie(e);
  if (r || Ie(e)) {
    const a = r && /* @__PURE__ */ jt(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ at(e), c = /* @__PURE__ */ Vt(e), e = ii(e)), i = new Array(e.length);
    for (let d = 0, h = e.length; d < h; d++)
      i[d] = t(
        l ? c ? Is(bt(e[d])) : bt(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (xe(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const d = a[l];
        i[l] = t(e[d], d, l, o);
      }
    }
  else
    i = [];
  return i;
}
const qi = (e) => e ? Za(e) ? fi(e) : qi(e.parent) : null, Js = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => qi(e.parent),
    $root: (e) => qi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Na(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ke.bind(e.proxy)),
    $watch: (e) => Kc.bind(e)
  })
), ki = (e, t) => e !== Pe && !e.__isScriptSetup && we(e, t), fu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: i, props: o, accessCache: r, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const w = r[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return s[t];
          case 3:
            return o[t];
        }
      else {
        if (ki(n, t))
          return r[t] = 1, n[t];
        if (i !== Pe && we(i, t))
          return r[t] = 2, i[t];
        if (we(o, t))
          return r[t] = 3, o[t];
        if (s !== Pe && we(s, t))
          return r[t] = 4, s[t];
        Wi && (r[t] = 0);
      }
    }
    const c = Js[t];
    let d, h;
    if (c)
      return t === "$attrs" && Ye(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (s !== Pe && we(s, t))
      return r[t] = 4, s[t];
    if (
      // global properties
      h = l.config.globalProperties, we(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: i, ctx: o } = e;
    return ki(i, t) ? (i[t] = s, !0) : n !== Pe && we(n, t) ? (n[t] = s, !0) : we(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, props: o, type: r }
  }, a) {
    let l;
    return !!(s[a] || e !== Pe && a[0] !== "$" && we(e, a) || ki(t, a) || we(o, a) || we(n, a) || we(Js, a) || we(i.config.globalProperties, a) || (l = r.__cssModules) && l[a]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : we(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function jo(e) {
  return ie(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Wi = !0;
function hu(e) {
  const t = Na(e), s = e.proxy, n = e.ctx;
  Wi = !1, t.beforeCreate && Vo(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: h,
    mounted: w,
    beforeUpdate: k,
    updated: E,
    activated: T,
    deactivated: G,
    beforeDestroy: Y,
    beforeUnmount: j,
    destroyed: X,
    unmounted: _,
    render: v,
    renderTracked: S,
    renderTriggered: y,
    errorCaptured: D,
    serverPrefetch: x,
    // public API
    expose: K,
    inheritAttrs: ae,
    // assets
    components: R,
    directives: ee,
    filters: B
  } = t;
  if (c && pu(c, n, null), r)
    for (const U in r) {
      const W = r[U];
      de(W) && (n[U] = W.bind(s));
    }
  if (i) {
    const U = i.call(s, s);
    xe(U) && (e.data = /* @__PURE__ */ oi(U));
  }
  if (Wi = !0, o)
    for (const U in o) {
      const W = o[U], ce = de(W) ? W.bind(s, s) : de(W.get) ? W.get.bind(s, s) : It, te = !de(W) && de(W.set) ? W.set.bind(s) : It, he = me({
        get: ce,
        set: te
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: (fe) => he.value = fe
      });
    }
  if (a)
    for (const U in a)
      La(a[U], n, s, U);
  if (l) {
    const U = de(l) ? l.call(s) : l;
    Reflect.ownKeys(U).forEach((W) => {
      qc(W, U[W]);
    });
  }
  d && Vo(d, e, "c");
  function b(U, W) {
    ie(W) ? W.forEach((ce) => U(ce.bind(s))) : W && U(W.bind(s));
  }
  if (b(iu, h), b(Rs, w), b(ou, k), b(ru, E), b(tu, T), b(su, G), b(uu, D), b(cu, S), b(lu, y), b(gn, j), b(Oa, _), b(au, x), ie(K))
    if (K.length) {
      const U = e.exposed || (e.exposed = {});
      K.forEach((W) => {
        Object.defineProperty(U, W, {
          get: () => s[W],
          set: (ce) => s[W] = ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  v && e.render === It && (e.render = v), ae != null && (e.inheritAttrs = ae), R && (e.components = R), ee && (e.directives = ee), x && Ra(e);
}
function pu(e, t, s = It) {
  ie(e) && (e = zi(e));
  for (const n in e) {
    const i = e[n];
    let o;
    xe(i) ? "default" in i ? o = Gs(
      i.from || n,
      i.default,
      !0
    ) : o = Gs(i.from || n) : o = Gs(i), /* @__PURE__ */ $e(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[n] = o;
  }
}
function Vo(e, t, s) {
  ht(
    ie(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function La(e, t, s, n) {
  let i = n.includes(".") ? xa(s, n) : () => s[n];
  if (Ie(e)) {
    const o = t[e];
    de(o) && De(i, o);
  } else if (de(e))
    De(i, e.bind(s));
  else if (xe(e))
    if (ie(e))
      e.forEach((o) => La(o, t, s, n));
    else {
      const o = de(e.handler) ? e.handler.bind(s) : t[e.handler];
      de(o) && De(i, o, e);
    }
}
function Na(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !s && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Un(l, c, r, !0)
  ), Un(l, t, r)), xe(t) && o.set(t, l), l;
}
function Un(e, t, s, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Un(e, o, s, !0), i && i.forEach(
    (r) => Un(e, r, s, !0)
  );
  for (const r in t)
    if (!(n && r === "expose")) {
      const a = gu[r] || s && s[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const gu = {
  data: qo,
  props: Wo,
  emits: Wo,
  // objects
  methods: Hs,
  computed: Hs,
  // lifecycle
  beforeCreate: Je,
  created: Je,
  beforeMount: Je,
  mounted: Je,
  beforeUpdate: Je,
  updated: Je,
  beforeDestroy: Je,
  beforeUnmount: Je,
  destroyed: Je,
  unmounted: Je,
  activated: Je,
  deactivated: Je,
  errorCaptured: Je,
  serverPrefetch: Je,
  // assets
  components: Hs,
  directives: Hs,
  // watch
  watch: yu,
  // provide / inject
  provide: qo,
  inject: mu
};
function qo(e, t) {
  return t ? e ? function() {
    return Fe(
      de(e) ? e.call(this, this) : e,
      de(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function mu(e, t) {
  return Hs(zi(e), zi(t));
}
function zi(e) {
  if (ie(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Je(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Hs(e, t) {
  return e ? Fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Wo(e, t) {
  return e ? ie(e) && ie(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fe(
    /* @__PURE__ */ Object.create(null),
    jo(e),
    jo(t ?? {})
  ) : t;
}
function yu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = Fe(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Je(e[n], t[n]);
  return s;
}
function Da() {
  return {
    app: null,
    config: {
      isNativeTag: Vr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let vu = 0;
function _u(e, t) {
  return function(n, i = null) {
    de(n) || (n = Fe({}, n)), i != null && !xe(i) && (i = null);
    const o = Da(), r = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: vu++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Xu,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...h) {
        return r.has(d) || (d && de(d.install) ? (r.add(d), d.install(c, ...h)) : de(d) && (r.add(d), d(c, ...h))), c;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), c;
      },
      component(d, h) {
        return h ? (o.components[d] = h, c) : o.components[d];
      },
      directive(d, h) {
        return h ? (o.directives[d] = h, c) : o.directives[d];
      },
      mount(d, h, w) {
        if (!l) {
          const k = c._ceVNode || Z(n, i);
          return k.appContext = o, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(k, d, w), l = !0, c._container = d, d.__vue_app__ = c, fi(k.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (ht(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, h) {
        return o.provides[d] = h, c;
      },
      runWithContext(d) {
        const h = ps;
        ps = c;
        try {
          return d();
        } finally {
          ps = h;
        }
      }
    };
    return c;
  };
}
let ps = null;
const bu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${vt(t)}Modifiers`] || e[`${es(t)}Modifiers`];
function wu(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Pe;
  let i = s;
  const o = t.startsWith("update:"), r = o && bu(n, t.slice(7));
  r && (r.trim && (i = s.map((d) => Ie(d) ? d.trim() : d)), r.number && (i = s.map(fo)));
  let a, l = n[a = mi(t)] || // also try camelCase event handler (#2249)
  n[a = mi(vt(t))];
  !l && o && (l = n[a = mi(es(t))]), l && ht(
    l,
    e,
    6,
    i
  );
  const c = n[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, ht(
      c,
      e,
      6,
      i
    );
  }
}
const ku = /* @__PURE__ */ new WeakMap();
function Fa(e, t, s = !1) {
  const n = s ? ku : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, a = !1;
  if (!de(e)) {
    const l = (c) => {
      const d = Fa(c, t, !0);
      d && (a = !0, Fe(r, d));
    };
    !s && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (xe(e) && n.set(e, null), null) : (ie(o) ? o.forEach((l) => r[l] = null) : Fe(r, o), xe(e) && n.set(e, r), r);
}
function ui(e, t) {
  return !e || !Zn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), we(e, t[0].toLowerCase() + t.slice(1)) || we(e, es(t)) || we(e, t));
}
function zo(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: a,
    emit: l,
    render: c,
    renderCache: d,
    props: h,
    data: w,
    setupState: k,
    ctx: E,
    inheritAttrs: T
  } = e, G = Dn(e);
  let Y, j;
  try {
    if (s.shapeFlag & 4) {
      const _ = i || n, v = _;
      Y = Mt(
        c.call(
          v,
          _,
          d,
          h,
          k,
          w,
          E
        )
      ), j = a;
    } else {
      const _ = t;
      Y = Mt(
        _.length > 1 ? _(
          h,
          { attrs: a, slots: r, emit: l }
        ) : _(
          h,
          null
        )
      ), j = t.props ? a : xu(a);
    }
  } catch (_) {
    Xs.length = 0, ai(_, e, 1), Y = Z(Ze);
  }
  let X = Y;
  if (j && T !== !1) {
    const _ = Object.keys(j), { shapeFlag: v } = X;
    _.length && v & 7 && (o && _.some(ei) && (j = Su(
      j,
      o
    )), X = Qt(X, j, !1, !0));
  }
  return s.dirs && (X = Qt(X, null, !1, !0), X.dirs = X.dirs ? X.dirs.concat(s.dirs) : s.dirs), s.transition && cn(X, s.transition), Y = X, Dn(G), Y;
}
const xu = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Zn(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Su = (e, t) => {
  const s = {};
  for (const n in e)
    (!ei(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Cu(e, t, s) {
  const { props: n, children: i, component: o } = e, { props: r, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Go(n, r, c) : !!r;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        const w = d[h];
        if (Ua(r, n, w) && !ui(c, w))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === r ? !1 : n ? r ? Go(n, r, c) : !0 : !!r;
  return !1;
}
function Go(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Ua(t, e, o) && !ui(s, o))
      return !0;
  }
  return !1;
}
function Ua(e, t, s) {
  const n = e[s], i = t[s];
  return s === "style" && xe(n) && xe(i) ? !ho(n, i) : n !== i;
}
function Au({ vnode: e, parent: t, suspense: s }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  s && s.activeBranch === e && (s.vnode.el = n);
}
const Ba = {}, Ha = () => Object.create(Ba), ja = (e) => Object.getPrototypeOf(e) === Ba;
function Tu(e, t, s, n = !1) {
  const i = {}, o = Ha();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Va(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  s ? e.props = n ? i : /* @__PURE__ */ Ec(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Pu(e, t, s, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, a = /* @__PURE__ */ be(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let h = 0; h < d.length; h++) {
        let w = d[h];
        if (ui(e.emitsOptions, w))
          continue;
        const k = t[w];
        if (l)
          if (we(o, w))
            k !== o[w] && (o[w] = k, c = !0);
          else {
            const E = vt(w);
            i[E] = Gi(
              l,
              a,
              E,
              k,
              e,
              !1
            );
          }
        else
          k !== o[w] && (o[w] = k, c = !0);
      }
    }
  } else {
    Va(e, t, i, o) && (c = !0);
    let d;
    for (const h in a)
      (!t || // for camelCase
      !we(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = es(h)) === h || !we(t, d))) && (l ? s && // for camelCase
      (s[h] !== void 0 || // for kebab-case
      s[d] !== void 0) && (i[h] = Gi(
        l,
        a,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (o !== a)
      for (const h in o)
        (!t || !we(t, h)) && (delete o[h], c = !0);
  }
  c && Ut(e.attrs, "set", "");
}
function Va(e, t, s, n) {
  const [i, o] = e.propsOptions;
  let r = !1, a;
  if (t)
    for (let l in t) {
      if (qs(l))
        continue;
      const c = t[l];
      let d;
      i && we(i, d = vt(l)) ? !o || !o.includes(d) ? s[d] = c : (a || (a = {}))[d] = c : ui(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, r = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ be(s), c = a || Pe;
    for (let d = 0; d < o.length; d++) {
      const h = o[d];
      s[h] = Gi(
        i,
        l,
        h,
        c[h],
        e,
        !we(c, h)
      );
    }
  }
  return r;
}
function Gi(e, t, s, n, i, o) {
  const r = e[s];
  if (r != null) {
    const a = we(r, "default");
    if (a && n === void 0) {
      const l = r.default;
      if (r.type !== Function && !r.skipFactory && de(l)) {
        const { propsDefaults: c } = i;
        if (s in c)
          n = c[s];
        else {
          const d = mn(i);
          n = c[s] = l.call(
            null,
            t
          ), d();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(s, n);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !a ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === es(s)) && (n = !0));
  }
  return n;
}
const Mu = /* @__PURE__ */ new WeakMap();
function qa(e, t, s = !1) {
  const n = s ? Mu : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, a = [];
  let l = !1;
  if (!de(e)) {
    const d = (h) => {
      l = !0;
      const [w, k] = qa(h, t, !0);
      Fe(r, w), k && a.push(...k);
    };
    !s && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return xe(e) && n.set(e, Ss), Ss;
  if (ie(o))
    for (let d = 0; d < o.length; d++) {
      const h = vt(o[d]);
      Ko(h) && (r[h] = Pe);
    }
  else if (o)
    for (const d in o) {
      const h = vt(d);
      if (Ko(h)) {
        const w = o[d], k = r[h] = ie(w) || de(w) ? { type: w } : Fe({}, w), E = k.type;
        let T = !1, G = !0;
        if (ie(E))
          for (let Y = 0; Y < E.length; ++Y) {
            const j = E[Y], X = de(j) && j.name;
            if (X === "Boolean") {
              T = !0;
              break;
            } else X === "String" && (G = !1);
          }
        else
          T = de(E) && E.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = T, k[
          1
          /* shouldCastTrue */
        ] = G, (T || we(k, "default")) && a.push(h);
      }
    }
  const c = [r, a];
  return xe(e) && n.set(e, c), c;
}
function Ko(e) {
  return e[0] !== "$" && !qs(e);
}
const ko = (e) => e === "_" || e === "_ctx" || e === "$stable", xo = (e) => ie(e) ? e.map(Mt) : [Mt(e)], Eu = (e, t, s) => {
  if (t._n)
    return t;
  const n = Bi((...i) => xo(t(...i)), s);
  return n._c = !1, n;
}, Wa = (e, t, s) => {
  const n = e._ctx;
  for (const i in e) {
    if (ko(i)) continue;
    const o = e[i];
    if (de(o))
      t[i] = Eu(i, o, n);
    else if (o != null) {
      const r = xo(o);
      t[i] = () => r;
    }
  }
}, za = (e, t) => {
  const s = xo(t);
  e.slots.default = () => s;
}, Ga = (e, t, s) => {
  for (const n in t)
    (s || !ko(n)) && (e[n] = t[n]);
}, Iu = (e, t, s) => {
  const n = e.slots = Ha();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Ga(n, t, s), s && Yr(n, "_", i, !0)) : Wa(t, n);
  } else t && za(e, t);
}, Ru = (e, t, s) => {
  const { vnode: n, slots: i } = e;
  let o = !0, r = Pe;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? s && a === 1 ? o = !1 : Ga(i, t, s) : (o = !t.$stable, Wa(t, i)), r = t;
  } else t && (za(e, t), r = { default: 1 });
  if (o)
    for (const a in i)
      !ko(a) && r[a] == null && delete i[a];
}, Xe = Du;
function $u(e) {
  return Ou(e);
}
function Ou(e, t) {
  const s = ni();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: h,
    nextSibling: w,
    setScopeId: k = It,
    insertStaticContent: E
  } = e, T = (f, m, A, F = null, N = null, O = null, z = void 0, q = null, V = !!m.dynamicChildren) => {
    if (f === m)
      return;
    f && !us(f, m) && (F = Ue(f), fe(f, N, O, !0), f = null), m.patchFlag === -2 && (V = !1, m.dynamicChildren = null);
    const { type: L, ref: oe, shapeFlag: J } = m;
    switch (L) {
      case di:
        G(f, m, A, F);
        break;
      case Ze:
        Y(f, m, A, F);
        break;
      case En:
        f == null && j(m, A, F, z);
        break;
      case ne:
        R(
          f,
          m,
          A,
          F,
          N,
          O,
          z,
          q,
          V
        );
        break;
      default:
        J & 1 ? v(
          f,
          m,
          A,
          F,
          N,
          O,
          z,
          q,
          V
        ) : J & 6 ? ee(
          f,
          m,
          A,
          F,
          N,
          O,
          z,
          q,
          V
        ) : (J & 64 || J & 128) && L.process(
          f,
          m,
          A,
          F,
          N,
          O,
          z,
          q,
          V,
          ts
        );
    }
    oe != null && N ? Ks(oe, f && f.ref, O, m || f, !m) : oe == null && f && f.ref != null && Ks(f.ref, null, O, f, !0);
  }, G = (f, m, A, F) => {
    if (f == null)
      n(
        m.el = a(m.children),
        A,
        F
      );
    else {
      const N = m.el = f.el;
      m.children !== f.children && c(N, m.children);
    }
  }, Y = (f, m, A, F) => {
    f == null ? n(
      m.el = l(m.children || ""),
      A,
      F
    ) : m.el = f.el;
  }, j = (f, m, A, F) => {
    [f.el, f.anchor] = E(
      f.children,
      m,
      A,
      F,
      f.el,
      f.anchor
    );
  }, X = ({ el: f, anchor: m }, A, F) => {
    let N;
    for (; f && f !== m; )
      N = w(f), n(f, A, F), f = N;
    n(m, A, F);
  }, _ = ({ el: f, anchor: m }) => {
    let A;
    for (; f && f !== m; )
      A = w(f), i(f), f = A;
    i(m);
  }, v = (f, m, A, F, N, O, z, q, V) => {
    if (m.type === "svg" ? z = "svg" : m.type === "math" && (z = "mathml"), f == null)
      S(
        m,
        A,
        F,
        N,
        O,
        z,
        q,
        V
      );
    else {
      const L = f.el && f.el._isVueCE ? f.el : null;
      try {
        L && L._beginPatch(), x(
          f,
          m,
          N,
          O,
          z,
          q,
          V
        );
      } finally {
        L && L._endPatch();
      }
    }
  }, S = (f, m, A, F, N, O, z, q) => {
    let V, L;
    const { props: oe, shapeFlag: J, transition: se, dirs: le } = f;
    if (V = f.el = r(
      f.type,
      O,
      oe && oe.is,
      oe
    ), J & 8 ? d(V, f.children) : J & 16 && D(
      f.children,
      V,
      null,
      F,
      N,
      xi(f, O),
      z,
      q
    ), le && ns(f, null, F, "created"), y(V, f, f.scopeId, z, F), oe) {
      for (const Te in oe)
        Te !== "value" && !qs(Te) && o(V, Te, null, oe[Te], O, F);
      "value" in oe && o(V, "value", null, oe.value, O), (L = oe.onVnodeBeforeMount) && St(L, F, f);
    }
    le && ns(f, null, F, "beforeMount");
    const _e = Lu(N, se);
    _e && se.beforeEnter(V), n(V, m, A), ((L = oe && oe.onVnodeMounted) || _e || le) && Xe(() => {
      try {
        L && St(L, F, f), _e && se.enter(V), le && ns(f, null, F, "mounted");
      } finally {
      }
    }, N);
  }, y = (f, m, A, F, N) => {
    if (A && k(f, A), F)
      for (let O = 0; O < F.length; O++)
        k(f, F[O]);
    if (N) {
      let O = N.subTree;
      if (m === O || Ja(O.type) && (O.ssContent === m || O.ssFallback === m)) {
        const z = N.vnode;
        y(
          f,
          z,
          z.scopeId,
          z.slotScopeIds,
          N.parent
        );
      }
    }
  }, D = (f, m, A, F, N, O, z, q, V = 0) => {
    for (let L = V; L < f.length; L++) {
      const oe = f[L] = q ? Dt(f[L]) : Mt(f[L]);
      T(
        null,
        oe,
        m,
        A,
        F,
        N,
        O,
        z,
        q
      );
    }
  }, x = (f, m, A, F, N, O, z) => {
    const q = m.el = f.el;
    let { patchFlag: V, dynamicChildren: L, dirs: oe } = m;
    V |= f.patchFlag & 16;
    const J = f.props || Pe, se = m.props || Pe;
    let le;
    if (A && is(A, !1), (le = se.onVnodeBeforeUpdate) && St(le, A, m, f), oe && ns(m, f, A, "beforeUpdate"), A && is(A, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    L && (!f.dynamicChildren || f.dynamicChildren.length !== L.length) && (V = 0, z = !1, L = null), (J.innerHTML && se.innerHTML == null || J.textContent && se.textContent == null) && d(q, ""), L ? K(
      f.dynamicChildren,
      L,
      q,
      A,
      F,
      xi(m, N),
      O
    ) : z || W(
      f,
      m,
      q,
      null,
      A,
      F,
      xi(m, N),
      O,
      !1
    ), V > 0) {
      if (V & 16)
        ae(q, J, se, A, N);
      else if (V & 2 && J.class !== se.class && o(q, "class", null, se.class, N), V & 4 && o(q, "style", J.style, se.style, N), V & 8) {
        const _e = m.dynamicProps;
        for (let Te = 0; Te < _e.length; Te++) {
          const Ce = _e[Te], Le = J[Ce], He = se[Ce];
          (He !== Le || Ce === "value") && o(q, Ce, Le, He, N, A);
        }
      }
      V & 1 && f.children !== m.children && d(q, m.children);
    } else !z && L == null && ae(q, J, se, A, N);
    ((le = se.onVnodeUpdated) || oe) && Xe(() => {
      le && St(le, A, m, f), oe && ns(m, f, A, "updated");
    }, F);
  }, K = (f, m, A, F, N, O, z) => {
    for (let q = 0; q < m.length; q++) {
      const V = f[q], L = m[q], oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        V.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (V.type === ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !us(V, L) || // - In the case of a component, it could contain anything.
        V.shapeFlag & 198) ? h(V.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      T(
        V,
        L,
        oe,
        null,
        F,
        N,
        O,
        z,
        !0
      );
    }
  }, ae = (f, m, A, F, N) => {
    if (m !== A) {
      if (m !== Pe)
        for (const O in m)
          !qs(O) && !(O in A) && o(
            f,
            O,
            m[O],
            null,
            N,
            F
          );
      for (const O in A) {
        if (qs(O)) continue;
        const z = A[O], q = m[O];
        z !== q && O !== "value" && o(f, O, q, z, N, F);
      }
      "value" in A && o(f, "value", m.value, A.value, N);
    }
  }, R = (f, m, A, F, N, O, z, q, V) => {
    const L = m.el = f ? f.el : a(""), oe = m.anchor = f ? f.anchor : a("");
    let { patchFlag: J, dynamicChildren: se, slotScopeIds: le } = m;
    le && (q = q ? q.concat(le) : le), f == null ? (n(L, A, F), n(oe, A, F), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      A,
      oe,
      N,
      O,
      z,
      q,
      V
    )) : J > 0 && J & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === se.length ? (K(
      f.dynamicChildren,
      se,
      A,
      N,
      O,
      z,
      q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || N && m === N.subTree) && So(
      f,
      m,
      !0
      /* shallow */
    )) : W(
      f,
      m,
      A,
      oe,
      N,
      O,
      z,
      q,
      V
    );
  }, ee = (f, m, A, F, N, O, z, q, V) => {
    m.slotScopeIds = q, f == null ? m.shapeFlag & 512 ? N.ctx.activate(
      m,
      A,
      F,
      z,
      V
    ) : B(
      m,
      A,
      F,
      N,
      O,
      z,
      V
    ) : I(f, m, V);
  }, B = (f, m, A, F, N, O, z) => {
    const q = f.component = qu(
      f,
      F,
      N
    );
    if (li(f) && (q.ctx.renderer = ts), Wu(q, !1, z), q.asyncDep) {
      if (N && N.registerDep(q, b, z), !f.el) {
        const V = q.subTree = Z(Ze);
        Y(null, V, m, A), f.placeholder = V.el;
      }
    } else
      b(
        q,
        f,
        m,
        A,
        N,
        O,
        z
      );
  }, I = (f, m, A) => {
    const F = m.component = f.component;
    if (Cu(f, m, A))
      if (F.asyncDep && !F.asyncResolved) {
        U(F, m, A);
        return;
      } else
        F.next = m, F.update();
    else
      m.el = f.el, F.vnode = m;
  }, b = (f, m, A, F, N, O, z) => {
    const q = () => {
      if (f.isMounted) {
        let { next: J, bu: se, u: le, parent: _e, vnode: Te } = f;
        {
          const kt = Ka(f);
          if (kt) {
            J && (J.el = Te.el, U(f, J, z)), kt.asyncDep.then(() => {
              Xe(() => {
                f.isUnmounted || L();
              }, N);
            });
            return;
          }
        }
        let Ce = J, Le;
        is(f, !1), J ? (J.el = Te.el, U(f, J, z)) : J = Te, se && Mn(se), (Le = J.props && J.props.onVnodeBeforeUpdate) && St(Le, _e, J, Te), is(f, !0);
        const He = zo(f), wt = f.subTree;
        f.subTree = He, T(
          wt,
          He,
          // parent may have changed if it's in a teleport
          h(wt.el),
          // anchor may have changed if it's in a fragment
          Ue(wt),
          f,
          N,
          O
        ), J.el = He.el, Ce === null && Au(f, He.el), le && Xe(le, N), (Le = J.props && J.props.onVnodeUpdated) && Xe(
          () => St(Le, _e, J, Te),
          N
        );
      } else {
        let J;
        const { el: se, props: le } = m, { bm: _e, m: Te, parent: Ce, root: Le, type: He } = f, wt = Ys(m);
        is(f, !1), _e && Mn(_e), !wt && (J = le && le.onVnodeBeforeMount) && St(J, Ce, m), is(f, !0);
        {
          Le.ce && Le.ce._hasShadowRoot() && Le.ce._injectChildStyle(
            He,
            f.parent ? f.parent.type : void 0
          );
          const kt = f.subTree = zo(f);
          T(
            null,
            kt,
            A,
            F,
            f,
            N,
            O
          ), m.el = kt.el;
        }
        if (Te && Xe(Te, N), !wt && (J = le && le.onVnodeMounted)) {
          const kt = m;
          Xe(
            () => St(J, Ce, kt),
            N
          );
        }
        (m.shapeFlag & 256 || Ce && Ys(Ce.vnode) && Ce.vnode.shapeFlag & 256) && f.a && Xe(f.a, N), f.isMounted = !0, m = A = F = null;
      }
    };
    f.scope.on();
    const V = f.effect = new sa(q);
    f.scope.off();
    const L = f.update = V.run.bind(V), oe = f.job = V.runIfDirty.bind(V);
    oe.i = f, oe.id = f.uid, V.scheduler = () => wo(oe), is(f, !0), L();
  }, U = (f, m, A) => {
    m.component = f;
    const F = f.vnode.props;
    f.vnode = m, f.next = null, Pu(f, m.props, F, A), Ru(f, m.children, A), Rt(), No(f), $t();
  }, W = (f, m, A, F, N, O, z, q, V = !1) => {
    const L = f && f.children, oe = f ? f.shapeFlag : 0, J = m.children, { patchFlag: se, shapeFlag: le } = m;
    if (se > 0) {
      if (se & 128) {
        te(
          L,
          J,
          A,
          F,
          N,
          O,
          z,
          q,
          V
        );
        return;
      } else if (se & 256) {
        ce(
          L,
          J,
          A,
          F,
          N,
          O,
          z,
          q,
          V
        );
        return;
      }
    }
    le & 8 ? (oe & 16 && Se(L, N, O), J !== L && d(A, J)) : oe & 16 ? le & 16 ? te(
      L,
      J,
      A,
      F,
      N,
      O,
      z,
      q,
      V
    ) : Se(L, N, O, !0) : (oe & 8 && d(A, ""), le & 16 && D(
      J,
      A,
      F,
      N,
      O,
      z,
      q,
      V
    ));
  }, ce = (f, m, A, F, N, O, z, q, V) => {
    f = f || Ss, m = m || Ss;
    const L = f.length, oe = m.length, J = Math.min(L, oe);
    let se;
    for (se = 0; se < J; se++) {
      const le = m[se] = V ? Dt(m[se]) : Mt(m[se]);
      T(
        f[se],
        le,
        A,
        null,
        N,
        O,
        z,
        q,
        V
      );
    }
    L > oe ? Se(
      f,
      N,
      O,
      !0,
      !1,
      J
    ) : D(
      m,
      A,
      F,
      N,
      O,
      z,
      q,
      V,
      J
    );
  }, te = (f, m, A, F, N, O, z, q, V) => {
    let L = 0;
    const oe = m.length;
    let J = f.length - 1, se = oe - 1;
    for (; L <= J && L <= se; ) {
      const le = f[L], _e = m[L] = V ? Dt(m[L]) : Mt(m[L]);
      if (us(le, _e))
        T(
          le,
          _e,
          A,
          null,
          N,
          O,
          z,
          q,
          V
        );
      else
        break;
      L++;
    }
    for (; L <= J && L <= se; ) {
      const le = f[J], _e = m[se] = V ? Dt(m[se]) : Mt(m[se]);
      if (us(le, _e))
        T(
          le,
          _e,
          A,
          null,
          N,
          O,
          z,
          q,
          V
        );
      else
        break;
      J--, se--;
    }
    if (L > J) {
      if (L <= se) {
        const le = se + 1, _e = le < oe ? m[le].el : F;
        for (; L <= se; )
          T(
            null,
            m[L] = V ? Dt(m[L]) : Mt(m[L]),
            A,
            _e,
            N,
            O,
            z,
            q,
            V
          ), L++;
      }
    } else if (L > se)
      for (; L <= J; )
        fe(f[L], N, O, !0), L++;
    else {
      const le = L, _e = L, Te = /* @__PURE__ */ new Map();
      for (L = _e; L <= se; L++) {
        const ot = m[L] = V ? Dt(m[L]) : Mt(m[L]);
        ot.key != null && Te.set(ot.key, L);
      }
      let Ce, Le = 0;
      const He = se - _e + 1;
      let wt = !1, kt = 0;
      const Os = new Array(He);
      for (L = 0; L < He; L++) Os[L] = 0;
      for (L = le; L <= J; L++) {
        const ot = f[L];
        if (Le >= He) {
          fe(ot, N, O, !0);
          continue;
        }
        let xt;
        if (ot.key != null)
          xt = Te.get(ot.key);
        else
          for (Ce = _e; Ce <= se; Ce++)
            if (Os[Ce - _e] === 0 && us(ot, m[Ce])) {
              xt = Ce;
              break;
            }
        xt === void 0 ? fe(ot, N, O, !0) : (Os[xt - _e] = L + 1, xt >= kt ? kt = xt : wt = !0, T(
          ot,
          m[xt],
          A,
          null,
          N,
          O,
          z,
          q,
          V
        ), Le++);
      }
      const Mo = wt ? Nu(Os) : Ss;
      for (Ce = Mo.length - 1, L = He - 1; L >= 0; L--) {
        const ot = _e + L, xt = m[ot], Eo = m[ot + 1], Io = ot + 1 < oe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Eo.el || Ya(Eo)
        ) : F;
        Os[L] === 0 ? T(
          null,
          xt,
          A,
          Io,
          N,
          O,
          z,
          q,
          V
        ) : wt && (Ce < 0 || L !== Mo[Ce] ? he(xt, A, Io, 2) : Ce--);
      }
    }
  }, he = (f, m, A, F, N = null) => {
    const { el: O, type: z, transition: q, children: V, shapeFlag: L } = f;
    if (L & 6) {
      he(f.component.subTree, m, A, F);
      return;
    }
    if (L & 128) {
      f.suspense.move(m, A, F);
      return;
    }
    if (L & 64) {
      z.move(f, m, A, ts);
      return;
    }
    if (z === ne) {
      n(O, m, A);
      for (let J = 0; J < V.length; J++)
        he(V[J], m, A, F);
      n(f.anchor, m, A);
      return;
    }
    if (z === En) {
      X(f, m, A);
      return;
    }
    if (F !== 2 && L & 1 && q)
      if (F === 0)
        q.persisted && !O[ct] ? n(O, m, A) : (q.beforeEnter(O), n(O, m, A), Xe(() => q.enter(O), N));
      else {
        const { leave: J, delayLeave: se, afterLeave: le } = q, _e = () => {
          f.ctx.isUnmounted ? i(O) : n(O, m, A);
        }, Te = () => {
          const Ce = O._isLeaving || !!O[ct];
          O._isLeaving && O[ct](
            !0
            /* cancelled */
          ), q.persisted && !Ce ? _e() : J(O, () => {
            _e(), le && le();
          });
        };
        se ? se(O, _e, Te) : Te();
      }
    else
      n(O, m, A);
  }, fe = (f, m, A, F = !1, N = !1) => {
    const {
      type: O,
      props: z,
      ref: q,
      children: V,
      dynamicChildren: L,
      shapeFlag: oe,
      patchFlag: J,
      dirs: se,
      cacheIndex: le,
      memo: _e
    } = f;
    if (J === -2 && (N = !1), q != null && (Rt(), Ks(q, null, A, f, !0), $t()), le != null && (m.renderCache[le] = void 0), oe & 256) {
      m.ctx.deactivate(f);
      return;
    }
    const Te = oe & 1 && se, Ce = !Ys(f);
    let Le;
    if (Ce && (Le = z && z.onVnodeBeforeUnmount) && St(Le, m, f), oe & 6)
      pe(f.component, A, F);
    else {
      if (oe & 128) {
        f.suspense.unmount(A, F);
        return;
      }
      Te && ns(f, null, m, "beforeUnmount"), oe & 64 ? f.type.remove(
        f,
        m,
        A,
        ts,
        F
      ) : L && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !L.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (O !== ne || J > 0 && J & 64) ? Se(
        L,
        m,
        A,
        !1,
        !0
      ) : (O === ne && J & 384 || !N && oe & 16) && Se(V, m, A), F && Ae(f);
    }
    const He = _e != null && le == null;
    (Ce && (Le = z && z.onVnodeUnmounted) || Te || He) && Xe(() => {
      Le && St(Le, m, f), Te && ns(f, null, m, "unmounted"), He && (f.el = null);
    }, A);
  }, Ae = (f) => {
    const { type: m, el: A, anchor: F, transition: N } = f;
    if (m === ne) {
      it(A, F);
      return;
    }
    if (m === En) {
      _(f);
      return;
    }
    const O = () => {
      i(A), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (f.shapeFlag & 1 && N && !N.persisted) {
      const { leave: z, delayLeave: q } = N, V = () => z(A, O);
      q ? q(f.el, O, V) : V();
    } else
      O();
  }, it = (f, m) => {
    let A;
    for (; f !== m; )
      A = w(f), i(f), f = A;
    i(m);
  }, pe = (f, m, A) => {
    const { bum: F, scope: N, job: O, subTree: z, um: q, m: V, a: L } = f;
    Yo(V), Yo(L), F && Mn(F), N.stop(), O && (O.flags |= 8, fe(z, f, m, A)), q && Xe(q, m), Xe(() => {
      f.isUnmounted = !0;
    }, m);
  }, Se = (f, m, A, F = !1, N = !1, O = 0) => {
    for (let z = O; z < f.length; z++)
      fe(f[z], m, A, F, N);
  }, Ue = (f) => {
    if (f.shapeFlag & 6)
      return Ue(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const m = w(f.anchor || f.el), A = m && m[Sa];
    return A ? w(A) : m;
  };
  let Oe = !1;
  const Re = (f, m, A) => {
    let F;
    f == null ? m._vnode && (fe(m._vnode, null, null, !0), F = m._vnode.component) : T(
      m._vnode || null,
      f,
      m,
      null,
      null,
      null,
      A
    ), m._vnode = f, Oe || (Oe = !0, No(F), _a(), Oe = !1);
  }, ts = {
    p: T,
    um: fe,
    m: he,
    r: Ae,
    mt: B,
    mc: D,
    pc: W,
    pbc: K,
    n: Ue,
    o: e
  };
  return {
    render: Re,
    hydrate: void 0,
    createApp: _u(Re)
  };
}
function xi({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function is({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Lu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function So(e, t, s = !1) {
  const n = e.children, i = t.children;
  if (ie(n) && ie(i))
    for (let o = 0; o < n.length; o++) {
      const r = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Dt(i[o]), a.el = r.el), !s && a.patchFlag !== -2 && So(r, a)), a.type === di && (a.patchFlag === -1 && (a = i[o] = Dt(a)), a.el = r.el), a.type === Ze && !a.el && (a.el = r.el);
    }
}
function Nu(e) {
  const t = e.slice(), s = [0];
  let n, i, o, r, a;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = s[s.length - 1], e[i] < c) {
        t[n] = i, s.push(n);
        continue;
      }
      for (o = 0, r = s.length - 1; o < r; )
        a = o + r >> 1, e[s[a]] < c ? o = a + 1 : r = a;
      c < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, r = s[o - 1]; o-- > 0; )
    s[o] = r, r = t[r];
  return s;
}
function Ka(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ka(t);
}
function Yo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ya(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ya(t.subTree) : null;
}
const Ja = (e) => e.__isSuspense;
function Du(e, t) {
  t && t.pendingBranch ? ie(e) ? t.effects.push(...e) : t.effects.push(e) : Vc(e);
}
const ne = /* @__PURE__ */ Symbol.for("v-fgt"), di = /* @__PURE__ */ Symbol.for("v-txt"), Ze = /* @__PURE__ */ Symbol.for("v-cmt"), En = /* @__PURE__ */ Symbol.for("v-stc"), Xs = [];
let rt = null;
function C(e = !1) {
  Xs.push(rt = e ? null : []);
}
function Fu() {
  Xs.pop(), rt = Xs[Xs.length - 1] || null;
}
let un = 1;
function Bn(e, t = !1) {
  un += e, e < 0 && rt && t && (rt.hasOnce = !0);
}
function Xa(e) {
  return e.dynamicChildren = un > 0 ? rt || Ss : null, Fu(), un > 0 && rt && rt.push(e), e;
}
function P(e, t, s, n, i, o) {
  return Xa(
    u(
      e,
      t,
      s,
      n,
      i,
      o,
      !0
    )
  );
}
function dt(e, t, s, n, i) {
  return Xa(
    Z(
      e,
      t,
      s,
      n,
      i,
      !0
    )
  );
}
function Hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function us(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qa = ({ key: e }) => e ?? null, In = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || /* @__PURE__ */ $e(e) || de(e) ? { i: ut, r: e, k: t, f: !!s } : e : null);
function u(e, t = null, s = null, n = 0, i = null, o = e === ne ? 0 : 1, r = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qa(t),
    ref: t && In(t),
    scopeId: wa,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ut
  };
  return a ? (jn(l, s), o & 128 && e.normalize(l)) : s && (l.shapeFlag |= Ie(s) ? 8 : 16), un > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  rt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && rt.push(l), l;
}
const Z = Uu;
function Uu(e, t = null, s = null, n = 0, i = null, o = !1) {
  if ((!e || e === du) && (e = Ze), Hn(e)) {
    const a = Qt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && jn(a, s), un > 0 && !o && rt && (a.shapeFlag & 6 ? rt[rt.indexOf(e)] = a : rt.push(a)), a.patchFlag = -2, a;
  }
  if (Yu(e) && (e = e.__vccOpts), t) {
    t = Bu(t);
    let { class: a, style: l } = t;
    a && !Ie(a) && (t.class = ue(a)), xe(l) && (/* @__PURE__ */ ri(l) && !ie(l) && (l = Fe({}, l)), t.style = Xt(l));
  }
  const r = Ie(e) ? 1 : Ja(e) ? 128 : Ca(e) ? 64 : xe(e) ? 4 : de(e) ? 2 : 0;
  return u(
    e,
    t,
    s,
    n,
    i,
    r,
    o,
    !0
  );
}
function Bu(e) {
  return e ? /* @__PURE__ */ ri(e) || ja(e) ? Fe({}, e) : e : null;
}
function Qt(e, t, s = !1, n = !1) {
  const { props: i, ref: o, patchFlag: r, children: a, transition: l } = e, c = t ? Hu(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Qa(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? ie(o) ? o.concat(In(t)) : [o, In(t)] : In(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ne ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qt(e.ssContent),
    ssFallback: e.ssFallback && Qt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && cn(
    d,
    l.clone(d)
  ), d;
}
function Yt(e = " ", t = 0) {
  return Z(di, null, e, t);
}
function wn(e, t) {
  const s = Z(En, null, e);
  return s.staticCount = t, s;
}
function ve(e = "", t = !1) {
  return t ? (C(), dt(Ze, null, e)) : Z(Ze, null, e);
}
function Mt(e) {
  return e == null || typeof e == "boolean" ? Z(Ze) : ie(e) ? Z(
    ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hn(e) ? Dt(e) : Z(di, null, String(e));
}
function Dt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qt(e);
}
function jn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ie(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), jn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      s = 32;
      const i = t._;
      !i && !ja(t) ? t._ctx = ut : i === 3 && ut && (ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (de(t)) {
    if (n & 65) {
      jn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: ut }, s = 32;
  } else
    t = String(t), n & 64 ? (s = 16, t = [Yt(t)]) : s = 8;
  e.children = t, e.shapeFlag |= s;
}
function Hu(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ue([t.class, n.class]));
      else if (i === "style")
        t.style = Xt([t.style, n.style]);
      else if (Zn(i)) {
        const o = t[i], r = n[i];
        r && o !== r && !(ie(o) && o.includes(r)) ? t[i] = o ? [].concat(o, r) : r : r == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ei(i) && (t[i] = r);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function St(e, t, s, n = null) {
  ht(e, t, 7, [
    s,
    n
  ]);
}
const ju = Da();
let Vu = 0;
function qu(e, t, s) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || ju, o = {
    uid: Vu++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Zr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: qa(n, i),
    emitsOptions: Fa(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Pe,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Pe,
    data: Pe,
    props: Pe,
    attrs: Pe,
    slots: Pe,
    refs: Pe,
    setupState: Pe,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = wu.bind(null, o), e.ce && e.ce(o), o;
}
let et = null;
const Co = () => et || ut;
let Vn, Ki;
{
  const e = ni(), t = (s, n) => {
    let i;
    return (i = e[s]) || (i = e[s] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  Vn = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => et = s
  ), Ki = t(
    "__VUE_SSR_SETTERS__",
    (s) => dn = s
  );
}
const mn = (e) => {
  const t = et;
  return Vn(e), e.scope.on(), () => {
    e.scope.off(), Vn(t);
  };
}, Jo = () => {
  et && et.scope.off(), Vn(null);
};
function Za(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function Wu(e, t = !1, s = !1) {
  t && Ki(t);
  const { props: n, children: i } = e.vnode, o = Za(e);
  Tu(e, n, o, t), Iu(e, i, s || t);
  const r = o ? zu(e, t) : void 0;
  return t && Ki(!1), r;
}
function zu(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fu);
  const { setup: n } = s;
  if (n) {
    Rt();
    const i = e.setupContext = n.length > 1 ? Ku(e) : null, o = mn(e), r = pn(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Wr(r);
    if ($t(), o(), (a || e.sp) && !Ys(e) && Ra(e), a) {
      if (r.then(Jo, Jo), t)
        return r.then((l) => {
          Xo(e, l);
        }).catch((l) => {
          ai(l, e, 0);
        });
      e.asyncDep = r;
    } else
      Xo(e, r);
  } else
    el(e);
}
function Xo(e, t, s) {
  de(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xe(t) && (e.setupState = ma(t)), el(e);
}
function el(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || It);
  {
    const i = mn(e);
    Rt();
    try {
      hu(e);
    } finally {
      $t(), i();
    }
  }
}
const Gu = {
  get(e, t) {
    return Ye(e, "get", ""), e[t];
  }
};
function Ku(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Gu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function fi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ma(bo(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in Js)
        return Js[s](e);
    },
    has(t, s) {
      return s in t || s in Js;
    }
  })) : e.proxy;
}
function Yu(e) {
  return de(e) && "__vccOpts" in e;
}
const me = (e, t) => /* @__PURE__ */ Fc(e, t, dn);
function Ju(e, t, s) {
  try {
    Bn(-1);
    const n = arguments.length;
    return n === 2 ? xe(t) && !ie(t) ? Hn(t) ? Z(e, null, [t]) : Z(e, t) : Z(e, null, t) : (n > 3 ? s = Array.prototype.slice.call(arguments, 2) : n === 3 && Hn(s) && (s = [s]), Z(e, t, s));
  } finally {
    Bn(1);
  }
}
const Xu = "3.5.39";
/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Yi;
const Qo = typeof window < "u" && window.trustedTypes;
if (Qo)
  try {
    Yi = /* @__PURE__ */ Qo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const tl = Yi ? (e) => Yi.createHTML(e) : (e) => e, Qu = "http://www.w3.org/2000/svg", Zu = "http://www.w3.org/1998/Math/MathML", Nt = typeof document < "u" ? document : null, Zo = Nt && /* @__PURE__ */ Nt.createElement("template"), ed = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const i = t === "svg" ? Nt.createElementNS(Qu, e) : t === "mathml" ? Nt.createElementNS(Zu, e) : s ? Nt.createElement(e, { is: s }) : Nt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Nt.createTextNode(e),
  createComment: (e) => Nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Nt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, i, o) {
    const r = s ? s.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), s), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Zo.innerHTML = tl(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Zo.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, s);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Wt = "transition", Ds = "animation", fn = /* @__PURE__ */ Symbol("_vtc"), sl = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, td = /* @__PURE__ */ Fe(
  {},
  Ta,
  sl
), sd = (e) => (e.displayName = "Transition", e.props = td, e), er = /* @__PURE__ */ sd(
  (e, { slots: t }) => Ju(eu, nd(e), t)
), os = (e, t = []) => {
  ie(e) ? e.forEach((s) => s(...t)) : e && e(...t);
}, tr = (e) => e ? ie(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function nd(e) {
  const t = {};
  for (const R in e)
    R in sl || (t[R] = e[R]);
  if (e.css === !1)
    return t;
  const {
    name: s = "v",
    type: n,
    duration: i,
    enterFromClass: o = `${s}-enter-from`,
    enterActiveClass: r = `${s}-enter-active`,
    enterToClass: a = `${s}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: c = r,
    appearToClass: d = a,
    leaveFromClass: h = `${s}-leave-from`,
    leaveActiveClass: w = `${s}-leave-active`,
    leaveToClass: k = `${s}-leave-to`
  } = e, E = id(i), T = E && E[0], G = E && E[1], {
    onBeforeEnter: Y,
    onEnter: j,
    onEnterCancelled: X,
    onLeave: _,
    onLeaveCancelled: v,
    onBeforeAppear: S = Y,
    onAppear: y = j,
    onAppearCancelled: D = X
  } = t, x = (R, ee, B, I) => {
    R._enterCancelled = I, rs(R, ee ? d : a), rs(R, ee ? c : r), B && B();
  }, K = (R, ee) => {
    R._isLeaving = !1, rs(R, h), rs(R, k), rs(R, w), ee && ee();
  }, ae = (R) => (ee, B) => {
    const I = R ? y : j, b = () => x(ee, R, B);
    os(I, [ee, b]), sr(() => {
      rs(ee, R ? l : o), Lt(ee, R ? d : a), tr(I) || nr(ee, n, T, b);
    });
  };
  return Fe(t, {
    onBeforeEnter(R) {
      os(Y, [R]), Lt(R, o), Lt(R, r);
    },
    onBeforeAppear(R) {
      os(S, [R]), Lt(R, l), Lt(R, c);
    },
    onEnter: ae(!1),
    onAppear: ae(!0),
    onLeave(R, ee) {
      R._isLeaving = !0;
      const B = () => K(R, ee);
      Lt(R, h), R._enterCancelled ? (Lt(R, w), rr(R)) : (rr(R), Lt(R, w)), sr(() => {
        R._isLeaving && (rs(R, h), Lt(R, k), tr(_) || nr(R, n, G, B));
      }), os(_, [R, B]);
    },
    onEnterCancelled(R) {
      x(R, !1, void 0, !0), os(X, [R]);
    },
    onAppearCancelled(R) {
      x(R, !0, void 0, !0), os(D, [R]);
    },
    onLeaveCancelled(R) {
      K(R), os(v, [R]);
    }
  });
}
function id(e) {
  if (e == null)
    return null;
  if (xe(e))
    return [Si(e.enter), Si(e.leave)];
  {
    const t = Si(e);
    return [t, t];
  }
}
function Si(e) {
  return nc(e);
}
function Lt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.add(s)), (e[fn] || (e[fn] = /* @__PURE__ */ new Set())).add(t);
}
function rs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const s = e[fn];
  s && (s.delete(t), s.size || (e[fn] = void 0));
}
function sr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let od = 0;
function nr(e, t, s, n) {
  const i = e._endId = ++od, o = () => {
    i === e._endId && n();
  };
  if (s != null)
    return setTimeout(o, s);
  const { type: r, timeout: a, propCount: l } = rd(e, t);
  if (!r)
    return n();
  const c = r + "end";
  let d = 0;
  const h = () => {
    e.removeEventListener(c, w), o();
  }, w = (k) => {
    k.target === e && ++d >= l && h();
  };
  setTimeout(() => {
    d < l && h();
  }, a + 1), e.addEventListener(c, w);
}
function rd(e, t) {
  const s = window.getComputedStyle(e), n = (E) => (s[E] || "").split(", "), i = n(`${Wt}Delay`), o = n(`${Wt}Duration`), r = ir(i, o), a = n(`${Ds}Delay`), l = n(`${Ds}Duration`), c = ir(a, l);
  let d = null, h = 0, w = 0;
  t === Wt ? r > 0 && (d = Wt, h = r, w = o.length) : t === Ds ? c > 0 && (d = Ds, h = c, w = l.length) : (h = Math.max(r, c), d = h > 0 ? r > c ? Wt : Ds : null, w = d ? d === Wt ? o.length : l.length : 0);
  const k = d === Wt && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Wt}Property`).toString()
  );
  return {
    type: d,
    timeout: h,
    propCount: w,
    hasTransform: k
  };
}
function ir(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((s, n) => or(s) + or(e[n])));
}
function or(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function rr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ad(e, t, s) {
  const n = e[fn];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const qn = /* @__PURE__ */ Symbol("_vod"), nl = /* @__PURE__ */ Symbol("_vsh"), xs = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[qn] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Fs(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Fs(e, !0), n.enter(e)) : n.leave(e, () => {
      Fs(e, !1);
    }) : Fs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Fs(e, t);
  }
};
function Fs(e, t) {
  e.style.display = t ? e[qn] : "none", e[nl] = !t;
}
const ld = /* @__PURE__ */ Symbol(""), cd = /(?:^|;)\s*display\s*:/;
function ud(e, t, s) {
  const n = e.style, i = Ie(s);
  let o = !1;
  if (s && !i) {
    if (t)
      if (Ie(t))
        for (const r of t.split(";")) {
          const a = r.slice(0, r.indexOf(":")).trim();
          s[a] == null && js(n, a, "");
        }
      else
        for (const r in t)
          s[r] == null && js(n, r, "");
    for (const r in s) {
      r === "display" && (o = !0);
      const a = s[r];
      a != null ? fd(
        e,
        r,
        !Ie(t) && t ? t[r] : void 0,
        a
      ) || js(n, r, a) : js(n, r, "");
    }
  } else if (i) {
    if (t !== s) {
      const r = n[ld];
      r && (s += ";" + r), n.cssText = s, o = cd.test(s);
    }
  } else t && e.removeAttribute("style");
  qn in e && (e[qn] = o ? n.display : "", e[nl] && (n.display = "none"));
}
const ar = /\s*!important$/;
function js(e, t, s) {
  if (ie(s))
    s.forEach((n) => js(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = dd(e, t);
    ar.test(s) ? e.setProperty(
      es(n),
      s.replace(ar, ""),
      "important"
    ) : e[n] = s;
  }
}
const lr = ["Webkit", "Moz", "ms"], Ci = {};
function dd(e, t) {
  const s = Ci[t];
  if (s)
    return s;
  let n = vt(t);
  if (n !== "filter" && n in e)
    return Ci[t] = n;
  n = Kr(n);
  for (let i = 0; i < lr.length; i++) {
    const o = lr[i] + n;
    if (o in e)
      return Ci[t] = o;
  }
  return t;
}
function fd(e, t, s, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ie(n) && s === n;
}
const cr = "http://www.w3.org/1999/xlink";
function ur(e, t, s, n, i, o = cc(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(cr, t.slice(6, t.length)) : e.setAttributeNS(cr, t, s) : s == null || o && !Jr(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : ft(s) ? String(s) : s
  );
}
function dr(e, t, s, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? tl(s) : s);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (a !== l || !("_value" in e)) && (e.value = l), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let r = !1;
  if (s === "" || s == null) {
    const a = typeof e[t];
    a === "boolean" ? s = Jr(s) : s == null && a === "string" ? (s = "", r = !0) : a === "number" && (s = 0, r = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function ks(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function hd(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const fr = /* @__PURE__ */ Symbol("_vei");
function pd(e, t, s, n, i = null) {
  const o = e[fr] || (e[fr] = {}), r = o[t];
  if (n && r)
    r.value = n;
  else {
    const [a, l] = yd(t);
    if (n) {
      const c = o[t] = bd(
        n,
        i
      );
      ks(e, a, c, l);
    } else r && (hd(e, a, r, l), o[t] = void 0);
  }
}
const gd = /(Once|Passive|Capture)$/, md = /^on:?(?:Once|Passive|Capture)$/;
function yd(e) {
  let t, s;
  for (; (s = e.match(gd)) && !md.test(e); )
    t || (t = {}), e = e.slice(0, e.length - s[1].length), t[s[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : es(e.slice(2)), t];
}
let Ai = 0;
const vd = /* @__PURE__ */ Promise.resolve(), _d = () => Ai || (vd.then(() => Ai = 0), Ai = Date.now());
function bd(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const i = s.value;
    if (ie(i)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const r = i.slice(), a = [n];
      for (let l = 0; l < r.length && !n._stopped; l++) {
        const c = r[l];
        c && ht(
          c,
          t,
          5,
          a
        );
      }
    } else
      ht(
        i,
        t,
        5,
        [n]
      );
  };
  return s.value = e, s.attached = _d(), s;
}
const hr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wd = (e, t, s, n, i, o) => {
  const r = i === "svg";
  t === "class" ? ad(e, n, r) : t === "style" ? ud(e, s, n) : Zn(t) ? ei(t) || pd(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kd(e, t, n, r)) ? (dr(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ur(e, t, n, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (xd(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ie(n))) ? dr(e, vt(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ur(e, t, n, r));
};
function kd(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hr(t) && de(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return hr(t) && Ie(s) ? !1 : t in e;
}
function xd(e, t) {
  const s = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!s)
    return !1;
  const n = vt(t);
  return Array.isArray(s) ? s.some((i) => vt(i) === n) : Object.keys(s).some((i) => vt(i) === n);
}
const pr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ie(t) ? (s) => Mn(t, s) : t;
};
function Sd(e) {
  e.target.composing = !0;
}
function gr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ti = /* @__PURE__ */ Symbol("_assign");
function mr(e, t, s) {
  return t && (e = e.trim()), s && (e = fo(e)), e;
}
const Cd = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, i) {
    e[Ti] = pr(i);
    const o = n || i.props && i.props.type === "number";
    ks(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Ti](mr(e.value, s, o));
    }), (s || o) && ks(e, "change", () => {
      e.value = mr(e.value, s, o);
    }), t || (ks(e, "compositionstart", Sd), ks(e, "compositionend", gr), ks(e, "change", gr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: i, number: o } }, r) {
    if (e[Ti] = pr(r), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? fo(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === s || i && e.value.trim() === l) || (e.value = l);
  }
}, Ad = ["ctrl", "shift", "alt", "meta"], Td = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Ad.some((s) => e[`${s}Key`] && !t.includes(s))
}, nt = (e, t) => {
  if (!e) return e;
  const s = e._withMods || (e._withMods = {}), n = t.join(".");
  return s[n] || (s[n] = (i, ...o) => {
    for (let r = 0; r < t.length; r++) {
      const a = Td[t[r]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  });
}, Pd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Md = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = (i) => {
    if (!("key" in i))
      return;
    const o = es(i.key);
    if (t.some(
      (r) => r === o || Pd[r] === o
    ))
      return e(i);
  });
}, Ed = /* @__PURE__ */ Fe({ patchProp: wd }, ed);
let yr;
function Id() {
  return yr || (yr = $u(Ed));
}
const il = (...e) => {
  const t = Id().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const i = $d(n);
    if (!i) return;
    const o = t._component;
    !de(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = s(i, !1, Rd(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function Rd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function $d(e) {
  return Ie(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let ol;
const hi = (e) => ol = e, rl = (
  /* istanbul ignore next */
  Symbol()
);
function Ji(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Qs;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Qs || (Qs = {}));
function Od() {
  const e = ea(!0), t = e.run(() => /* @__PURE__ */ ye({}));
  let s = [], n = [];
  const i = bo({
    install(o) {
      hi(i), i._a = o, o.provide(rl, i), o.config.globalProperties.$pinia = i, n.forEach((r) => s.push(r)), n = [];
    },
    use(o) {
      return this._a ? s.push(o) : n.push(o), this;
    },
    _p: s,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return i;
}
const al = () => {
};
function vr(e, t, s, n = al) {
  e.push(t);
  const i = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), n());
  };
  return !s && ta() && dc(i), i;
}
function ys(e, ...t) {
  e.slice().forEach((s) => {
    s(...t);
  });
}
const Ld = (e) => e(), _r = Symbol(), Pi = Symbol();
function Xi(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((s, n) => e.set(n, s)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const s in t) {
    if (!t.hasOwnProperty(s))
      continue;
    const n = t[s], i = e[s];
    Ji(i) && Ji(n) && e.hasOwnProperty(s) && !/* @__PURE__ */ $e(n) && !/* @__PURE__ */ jt(n) ? e[s] = Xi(i, n) : e[s] = n;
  }
  return e;
}
const Nd = (
  /* istanbul ignore next */
  Symbol()
);
function Dd(e) {
  return !Ji(e) || !e.hasOwnProperty(Nd);
}
const { assign: Gt } = Object;
function Fd(e) {
  return !!(/* @__PURE__ */ $e(e) && e.effect);
}
function Ud(e, t, s, n) {
  const { state: i, actions: o, getters: r } = t, a = s.state.value[e];
  let l;
  function c() {
    a || (s.state.value[e] = i ? i() : {});
    const d = /* @__PURE__ */ Oc(s.state.value[e]);
    return Gt(d, o, Object.keys(r || {}).reduce((h, w) => (h[w] = bo(me(() => {
      hi(s);
      const k = s._s.get(e);
      return r[w].call(k, k);
    })), h), {}));
  }
  return l = ll(e, c, t, s, n, !0), l;
}
function ll(e, t, s = {}, n, i, o) {
  let r;
  const a = Gt({ actions: {} }, s), l = { deep: !0 };
  let c, d, h = [], w = [], k;
  const E = n.state.value[e];
  !o && !E && (n.state.value[e] = {});
  let T;
  function G(D) {
    let x;
    c = d = !1, typeof D == "function" ? (D(n.state.value[e]), x = {
      type: Qs.patchFunction,
      storeId: e,
      events: k
    }) : (Xi(n.state.value[e], D), x = {
      type: Qs.patchObject,
      payload: D,
      storeId: e,
      events: k
    });
    const K = T = Symbol();
    Ke().then(() => {
      T === K && (c = !0);
    }), d = !0, ys(h, x, n.state.value[e]);
  }
  const Y = o ? function() {
    const { state: x } = s, K = x ? x() : {};
    this.$patch((ae) => {
      Gt(ae, K);
    });
  } : (
    /* istanbul ignore next */
    al
  );
  function j() {
    r.stop(), h = [], w = [], n._s.delete(e);
  }
  const X = (D, x = "") => {
    if (_r in D)
      return D[Pi] = x, D;
    const K = function() {
      hi(n);
      const ae = Array.from(arguments), R = [], ee = [];
      function B(U) {
        R.push(U);
      }
      function I(U) {
        ee.push(U);
      }
      ys(w, {
        args: ae,
        name: K[Pi],
        store: v,
        after: B,
        onError: I
      });
      let b;
      try {
        b = D.apply(this && this.$id === e ? this : v, ae);
      } catch (U) {
        throw ys(ee, U), U;
      }
      return b instanceof Promise ? b.then((U) => (ys(R, U), U)).catch((U) => (ys(ee, U), Promise.reject(U))) : (ys(R, b), b);
    };
    return K[_r] = !0, K[Pi] = x, K;
  }, _ = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: vr.bind(null, w),
    $patch: G,
    $reset: Y,
    $subscribe(D, x = {}) {
      const K = vr(h, D, x.detached, () => ae()), ae = r.run(() => De(() => n.state.value[e], (R) => {
        (x.flush === "sync" ? d : c) && D({
          storeId: e,
          type: Qs.direct,
          events: k
        }, R);
      }, Gt({}, l, x)));
      return K;
    },
    $dispose: j
  }, v = /* @__PURE__ */ oi(_);
  n._s.set(e, v);
  const y = (n._a && n._a.runWithContext || Ld)(() => n._e.run(() => (r = ea()).run(() => t({ action: X }))));
  for (const D in y) {
    const x = y[D];
    if (/* @__PURE__ */ $e(x) && !Fd(x) || /* @__PURE__ */ jt(x))
      o || (E && Dd(x) && (/* @__PURE__ */ $e(x) ? x.value = E[D] : Xi(x, E[D])), n.state.value[e][D] = x);
    else if (typeof x == "function") {
      const K = X(x, D);
      y[D] = K, a.actions[D] = x;
    }
  }
  return Gt(v, y), Gt(/* @__PURE__ */ be(v), y), Object.defineProperty(v, "$state", {
    get: () => n.state.value[e],
    set: (D) => {
      G((x) => {
        Gt(x, D);
      });
    }
  }), n._p.forEach((D) => {
    Gt(v, r.run(() => D({
      store: v,
      app: n._a,
      pinia: n,
      options: a
    })));
  }), E && o && s.hydrate && s.hydrate(v.$state, E), c = !0, d = !0, v;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function pi(e, t, s) {
  let n, i;
  const o = typeof t == "function";
  typeof e == "string" ? (n = e, i = o ? s : t) : (i = e, n = e.id);
  function r(a, l) {
    const c = Wc();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (c ? Gs(rl, null) : null), a && hi(a), a = ol, a._s.has(n) || (o ? ll(n, t, i, a) : Ud(n, i, a)), a._s.get(n);
  }
  return r.$id = n, r;
}
let Wn = !1;
function br(e) {
  Wn = e;
}
function Bd() {
  return Wn;
}
function kn(e, t, s) {
  if (e === "debug" && !Wn || e === "info" && !Wn) return;
  const n = "[晓乐]";
  s.length > 0 ? console[e](`${n} ${t}`, ...s) : console[e](`${n} ${t}`);
}
const H = {
  debug(e, ...t) {
    kn("debug", e, t);
  },
  info(e, ...t) {
    kn("info", e, t);
  },
  warn(e, ...t) {
    kn("warn", e, t);
  },
  error(e, ...t) {
    kn("error", e, t);
  },
  get isDebug() {
    return Bd();
  }
};
function Hd() {
  return [
    { id: "netease", enabled: !0, priority: 0, config: {} },
    { id: "local", enabled: !1, priority: 1, config: {} }
  ];
}
function Mi() {
  return {
    volume: 65,
    playMode: "list",
    crossfade: !1,
    position: null,
    widgetMode: "dock",
    dockAlign: "bottom-left",
    showDragMiniText: !0,
    providers: Hd(),
    customOpacity: !1,
    opacity: 75,
    aiMode: "off",
    aiUseCustomApi: !1,
    aiContextMessages: 8,
    aiApiUrl: "",
    aiApiKey: "",
    aiModel: "",
    aiAutoTrigger: !0,
    aiTriggerOnGreeting: !1,
    aiCooldownMs: 3e3,
    togetherPromptRole: "system",
    togetherCustomPromptEnabled: !1,
    togetherCustomPrompt: "",
    debug: !1,
    neteaseMode: "worker",
    neteaseWorkerURL: "",
    neteaseCookie: "",
    neteaseCookieAt: 0,
    neteaseCookieValid: !1
  };
}
const ge = /* @__PURE__ */ pi("settings", {
  state: () => ({
    settings: Mi(),
    storage: null
  }),
  getters: {
    defaults: () => Mi(),
    neteaseStatus(e) {
      const t = e.settings.neteaseCookie, s = e.settings.neteaseCookieAt, n = e.settings.neteaseCookieValid;
      return !t || !s ? "no-cookie" : Date.now() - s >= 14 * 864e5 ? "expired" : n ? "ok" : "invalid";
    }
  },
  actions: {
    init(e) {
      this.storage = e;
      const t = e.getSettings(), s = Mi();
      if (t) {
        const n = typeof SillyTavern < "u" && SillyTavern.getContext()?.libs?.lodash ? SillyTavern.getContext().libs.lodash : null;
        n ? this.settings = n.merge(structuredClone(s), t) : this.settings = {
          ...s,
          ...t,
          providers: s.providers.map((i) => {
            const o = t.providers?.find((r) => r.id === i.id);
            return o ? { ...o, config: o.config ?? i.config ?? {} } : i;
          })
        };
      } else
        this.settings = s;
      br(this.settings.debug);
    },
    setVolume(e) {
      this.settings.volume = e, this.save();
    },
    setPlayMode(e) {
      this.settings.playMode = e, this.save();
    },
    setCrossfade(e) {
      this.settings.crossfade = e, this.save();
    },
    setPosition(e) {
      this.settings.position = e, this.save();
    },
    setWidgetMode(e) {
      this.settings.widgetMode = e, this.save();
    },
    setOpacity(e) {
      this.settings.opacity = e, this.save();
    },
    setCustomOpacity(e) {
      this.settings.customOpacity = e, this.save();
    },
    setDockAlign(e) {
      this.settings.dockAlign = e, this.save();
    },
    setShowDragMiniText(e) {
      this.settings.showDragMiniText = e, this.save();
    },
    setNeteaseMode(e) {
      this.settings.neteaseMode = e, this.save();
    },
    setAiMode(e) {
      this.settings.aiMode = e, this.save();
    },
    setAiUseCustomApi(e) {
      this.settings.aiUseCustomApi = e, this.save();
    },
    setAiContextMessages(e) {
      this.settings.aiContextMessages = e, this.save();
    },
    setAiAutoTrigger(e) {
      this.settings.aiAutoTrigger = e, this.save();
    },
    setAiTriggerOnGreeting(e) {
      this.settings.aiTriggerOnGreeting = e, this.save();
    },
    setAiApiUrl(e) {
      this.settings.aiApiUrl = e, this.save();
    },
    setAiApiKey(e) {
      this.settings.aiApiKey = e, this.save();
    },
    setAiModel(e) {
      this.settings.aiModel = e, this.save();
    },
    setTogetherPromptRole(e) {
      this.settings.togetherPromptRole = e, this.save();
    },
    setTogetherCustomPromptEnabled(e) {
      this.settings.togetherCustomPromptEnabled = e, this.save();
    },
    setTogetherCustomPrompt(e) {
      this.settings.togetherCustomPrompt = e, this.save();
    },
    setDebug(e) {
      this.settings.debug = e, br(e), this.save();
    },
    setNeteaseWorkerURL(e) {
      let t = e.trim();
      t && !t.startsWith("http://") && !t.startsWith("https://") && (t = "https://" + t), t.endsWith("/") && (t = t.slice(0, -1)), this.settings.neteaseWorkerURL = t, this.save();
    },
    setNeteaseCookie(e) {
      this.settings.neteaseCookie = e, this.settings.neteaseCookieAt = e ? Date.now() : 0, this.settings.neteaseCookieValid = !!e, this.save();
    },
    setNeteaseCookieInvalid() {
      this.settings.neteaseCookieValid = !1, this.save();
    },
    save() {
      this.storage && this.storage.setSettings(this.settings);
    }
  }
}), jd = 800, wr = 16;
class Vd {
  constructor() {
    this.listeners = /* @__PURE__ */ new Map(), this.targetVolume = 1, this.fadeTimer = 0, this.fadeAbort = null, this.preloadAudio = null, this.audio = new Audio(), this.audio.crossOrigin = "anonymous", this.audio.preload = "auto", this.audio.style.display = "none", document.body.appendChild(this.audio);
  }
  load(t) {
    this.cancelFade(), this.audio.src = t, this.audio.load();
  }
  async play(t = !1) {
    try {
      this.cancelFade(), t && !document.hidden ? (this.audio.volume = 0, await this.audio.play(), this.runFade(this.targetVolume)) : (this.audio.volume = this.targetVolume, await this.audio.play());
    } catch (s) {
      H.error("AudioEngine: play() failed:", s);
    }
  }
  pause(t = !1) {
    this.cancelFade(), t && !document.hidden && !this.audio.paused ? this.runFade(0, () => this.audio.pause()) : this.audio.pause();
  }
  seek(t) {
    this.audio.currentTime = t;
  }
  setVolume(t) {
    this.targetVolume = t, this.fadeTimer || (this.audio.volume = t);
  }
  get currentTime() {
    return this.audio.currentTime;
  }
  get duration() {
    return this.audio.duration;
  }
  get paused() {
    return this.audio.paused;
  }
  preloadNext(t) {
    this.preloadAudio || (this.preloadAudio = new Audio(), this.preloadAudio.crossOrigin = "anonymous", this.preloadAudio.preload = "auto", this.preloadAudio.style.display = "none", document.body.appendChild(this.preloadAudio)), this.preloadAudio.src = t, this.preloadAudio.load();
  }
  clearPreload() {
    this.preloadAudio && (this.preloadAudio.src = "");
  }
  on(t, s) {
    let n = this.listeners.get(t);
    n || (n = /* @__PURE__ */ new Set(), this.listeners.set(t, n));
    const i = s;
    return n.add(i), this.audio.addEventListener(t, i), () => {
      this.audio.removeEventListener(t, i), n.delete(i);
    };
  }
  runFade(t, s) {
    const n = this.audio.volume, i = t - n, o = performance.now();
    this.fadeAbort = (a) => {
      a && (this.audio.volume = t), this.fadeTimer = 0, this.fadeAbort = null, s?.();
    };
    const r = () => {
      if (!this.fadeAbort) return;
      const a = performance.now() - o, l = Math.min(a / jd, 1);
      this.audio.volume = Math.max(0, Math.min(1, n + i * l)), l >= 1 ? this.fadeAbort(!0) : this.fadeTimer = setTimeout(r, wr);
    };
    this.fadeTimer = setTimeout(r, wr);
  }
  cancelFade() {
    this.fadeAbort && this.fadeAbort(!0), this.fadeTimer && clearTimeout(this.fadeTimer), this.fadeTimer = 0, this.fadeAbort = null;
  }
  destroy() {
    this.cancelFade();
    for (const [t, s] of this.listeners) {
      for (const n of s)
        this.audio.removeEventListener(t, n);
      s.clear();
    }
    this.listeners.clear(), this.audio.src = "", this.audio.remove(), this.preloadAudio && (this.preloadAudio.src = "", this.preloadAudio.remove(), this.preloadAudio = null);
  }
}
const kr = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
function qd(e) {
  const t = e.split(/\r?\n/), s = [];
  for (const n of t) {
    const i = new RegExp(kr.source, "g"), o = [];
    let r;
    for (; (r = i.exec(n)) !== null; ) {
      const l = parseInt(r[1], 10), c = parseInt(r[2], 10), d = r[3] ?? "", h = d ? parseInt(d.padEnd(3, "0"), 10) : 0;
      o.push(l * 60 + c + h / 1e3);
    }
    if (o.length === 0) continue;
    const a = n.replace(new RegExp(kr.source, "g"), "").trim();
    if (a !== "")
      for (const l of o)
        s.push({ time: l, text: a });
  }
  s.sort((n, i) => n.time - i.time);
  for (let n = 0; n < s.length; n++)
    n < s.length - 1 && (s[n].next = s[n + 1]);
  return s;
}
function Wd(e, t) {
  if (e.length === 0) return null;
  let s = null;
  for (const n of e)
    if (n.time <= t)
      s = n;
    else
      break;
  return s;
}
class zd {
  constructor(t) {
    this.providers = t;
  }
  async searchAll(t) {
    const s = await Promise.allSettled(
      this.providers.map((o) => o.search(t))
    ), n = [], i = /* @__PURE__ */ new Map();
    return s.forEach((o, r) => {
      if (o.status !== "fulfilled") {
        H.warn("Provider search failed: " + this.providers[r]?.id, o.reason);
        return;
      }
      for (const a of o.value) {
        const l = `${a.name}__${a.artist}`;
        i.get(l) === void 0 && (i.set(l, n.length), n.push(a));
      }
    }), n;
  }
  async resolve(t, s, n) {
    const i = this.getProvider(s);
    return i ? new Promise((o) => {
      const r = setTimeout(() => o(null), 2e4);
      i.resolve(t, n).then((a) => {
        clearTimeout(r), o(a);
      }).catch((a) => {
        clearTimeout(r), H.warn("Resolve failed: " + s + "/" + t, a), o(null);
      });
    }) : null;
  }
  /**
   * Search + resolve + probe across all providers.
   * Tries each provider in priority order, iterating search results
   * until a playable track is found.
   */
  async searchAndResolve(t, s) {
    for (const n of this.providers)
      if (n.searchAndResolve)
        try {
          const i = await n.searchAndResolve(t, s);
          if (i) return i;
        } catch (i) {
          H.warn("Provider searchAndResolve failed: " + n.id, i);
        }
    return null;
  }
  getProvider(t) {
    return this.providers.find((s) => s.id === t);
  }
}
const xr = (typeof globalThis < "u" ? globalThis : void 0)?.crypto || (typeof global < "u" ? global : void 0)?.crypto || (typeof window < "u" ? window : void 0)?.crypto || (typeof self < "u" ? self : void 0)?.crypto || (typeof frames < "u" ? frames : void 0)?.[0]?.crypto;
let Qi;
xr ? Qi = (e) => {
  const t = [];
  for (let s = 0; s < e; s += 4) t.push(xr.getRandomValues(new Uint32Array(1))[0]);
  return new tt(t, e);
} : Qi = (e) => {
  const t = [], s = (i) => {
    let o = i, r = 987654321;
    const a = 4294967295;
    return () => {
      r = 36969 * (r & 65535) + (r >> 16) & a, o = 18e3 * (o & 65535) + (o >> 16) & a;
      let l = (r << 16) + o & a;
      return l /= 4294967296, l += 0.5, l * (Math.random() > 0.5 ? 1 : -1);
    };
  };
  let n;
  for (let i = 0; i < e; i += 4) {
    const o = s((n || Math.random()) * 4294967296);
    n = o() * 987654071, t.push(o() * 4294967296 | 0);
  }
  return new tt(t, e);
};
var gs = class {
  /**
  * Creates a new instance of this class with the provided arguments.
  * This is a factory method that provides an alternative to using 'new'.
  * 
  * @param args - Arguments to pass to the constructor
  * @returns A new instance of this class
  * @static
  * @example
  * ```javascript
  * const instance = MyType.create(arg1, arg2);
  * ```
  */
  static create(...e) {
    return new this(...e);
  }
  /**
  * Copies properties from the provided object into this instance.
  * Performs a shallow merge of properties.
  * 
  * @param properties - The properties to mix in
  * @returns This instance for method chaining
  * @example
  * ```javascript
  * instance.mixIn({ field: 'value', another: 123 });
  * ```
  */
  mixIn(e) {
    return Object.assign(this, e);
  }
  /**
  * Creates a deep copy of this object.
  * 
  * @returns A clone of this instance
  * @example
  * ```javascript
  * const clone = instance.clone();
  * ```
  */
  clone() {
    const e = new this.constructor();
    return Object.assign(e, this), e;
  }
}, Ri, tt = (Ri = class extends gs {
  /**
  * Initializes a newly created word array.
  * Can accept various input formats including regular arrays, typed arrays, and ArrayBuffers.
  * 
  * @param words - An array of 32-bit words, typed array, or ArrayBuffer
  * @param sigBytes - The number of significant bytes in the words (defaults to words.length * 4)
  * @example
  * ```javascript
  * const wordArray = new WordArray();
  * const wordArray = new WordArray([0x00010203, 0x04050607]);
  * const wordArray = new WordArray([0x00010203, 0x04050607], 6);
  * const wordArray = new WordArray(new Uint8Array([1, 2, 3, 4]));
  * ```
  */
  constructor(t = [], s) {
    super();
    /** The array of 32-bit words */
    re(this, "words");
    /** The number of significant bytes in this word array */
    re(this, "sigBytes");
    if (t instanceof ArrayBuffer) {
      const n = new Uint8Array(t);
      this._initFromUint8Array(n);
      return;
    }
    if (ArrayBuffer.isView(t)) {
      let n;
      t instanceof Uint8Array ? n = t : n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength), this._initFromUint8Array(n);
      return;
    }
    this.words = t, this.sigBytes = s !== void 0 ? s : this.words.length * 4;
  }
  /**
  * Initialize from Uint8Array
  * @private
  */
  _initFromUint8Array(t) {
    const s = t.byteLength, n = [];
    for (let i = 0; i < s; i += 1) n[i >>> 2] |= t[i] << 24 - i % 4 * 8;
    this.words = n, this.sigBytes = s;
  }
  /**
  * Converts this word array to a string using the specified encoding.
  * 
  * @param encoder - The encoding strategy to use (defaults to Hex)
  * @returns The stringified word array
  * @example
  * ```javascript
  * const hexString = wordArray.toString();
  * const base64String = wordArray.toString(Base64);
  * const utf8String = wordArray.toString(Utf8);
  * ```
  */
  toString(t = cl) {
    return t.stringify(this);
  }
  /**
  * Concatenates a word array to this word array.
  * Modifies this word array in place.
  * 
  * @param wordArray - The word array to append
  * @returns This word array for method chaining
  * @example
  * ```javascript
  * wordArray1.concat(wordArray2);
  * const combined = wordArray1.concat(wordArray2).concat(wordArray3);
  * ```
  */
  concat(t) {
    const s = this.words, n = t.words, i = this.sigBytes, o = t.sigBytes;
    if (this.clamp(), i % 4) for (let r = 0; r < o; r += 1) {
      const a = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
      s[i + r >>> 2] |= a << 24 - (i + r) % 4 * 8;
    }
    else for (let r = 0; r < o; r += 4) s[i + r >>> 2] = n[r >>> 2];
    return this.sigBytes += o, this;
  }
  /**
  * Removes insignificant bits from the end of the word array.
  * This ensures the word array only contains the exact number of significant bytes.
  * 
  * @example
  * ```javascript
  * wordArray.clamp();
  * ```
  */
  clamp() {
    const { words: t, sigBytes: s } = this;
    t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = Math.ceil(s / 4);
  }
  /**
  * Creates a copy of this word array.
  * 
  * @returns The cloned word array
  * @example
  * ```javascript
  * const clone = wordArray.clone();
  * ```
  */
  clone() {
    const t = super.clone();
    return t.words = this.words.slice(0), t;
  }
}, /**
* Creates a word array filled with cryptographically strong random bytes.
* Uses Web Crypto API if available, falls back to Math.random() if not.
* 
* @param nBytes - The number of random bytes to generate
* @returns The random word array
* @static
* @example
* ```javascript
* const randomBytes = WordArray.random(16); // Generate 16 random bytes
* ```
*/
re(Ri, "random", Qi), Ri);
const cl = {
  stringify(e) {
    const { words: t, sigBytes: s } = e, n = [];
    for (let i = 0; i < s; i += 1) {
      const o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      n.push((o >>> 4).toString(16)), n.push((o & 15).toString(16));
    }
    return n.join("");
  },
  parse(e) {
    const t = e.length, s = [];
    for (let n = 0; n < t; n += 2) s[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
    return new tt(s, t / 2);
  }
}, Sr = {
  stringify(e) {
    const { words: t, sigBytes: s } = e, n = [];
    for (let i = 0; i < s; i += 1) {
      const o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      n.push(String.fromCharCode(o));
    }
    return n.join("");
  },
  parse(e) {
    const t = e.length, s = [];
    for (let n = 0; n < t; n += 1) s[n >>> 2] |= (e.charCodeAt(n) & 255) << 24 - n % 4 * 8;
    return new tt(s, t);
  }
}, Ao = {
  stringify(e) {
    try {
      return decodeURIComponent(escape(Sr.stringify(e)));
    } catch {
      throw new Error("Malformed UTF-8 data");
    }
  },
  parse(e) {
    return Sr.parse(unescape(encodeURIComponent(e)));
  }
};
var ul = class extends gs {
  constructor() {
    super();
    /** The number of blocks that should be kept unprocessed in the buffer */
    re(this, "_minBufferSize", 0);
    /** The data buffer */
    re(this, "_data");
    /** The number of bytes in the data buffer */
    re(this, "_nDataBytes");
  }
  /**
  * Resets this block algorithm's data buffer to its initial state.
  * 
  * @example
  * ```javascript
  * bufferedBlockAlgorithm.reset();
  * ```
  */
  reset() {
    this._data = new tt(), this._nDataBytes = 0;
  }
  /**
  * Adds new data to this block algorithm's buffer.
  * 
  * @param data - The data to append (strings are converted to WordArray using UTF-8)
  * @example
  * ```javascript
  * bufferedBlockAlgorithm._append('data');
  * bufferedBlockAlgorithm._append(wordArray);
  * ```
  */
  _append(t) {
    let s;
    typeof t == "string" ? s = Ao.parse(t) : s = t, this._data.concat(s), this._nDataBytes += s.sigBytes;
  }
  /**
  * Processes available data blocks.
  * This method invokes _doProcessBlock(dataWords, offset), which must be implemented by a concrete subtype.
  * 
  * @param doFlush - Whether all blocks and partial blocks should be processed
  * @returns The processed data
  * @example
  * ```javascript
  * const processedData = bufferedBlockAlgorithm._process();
  * const processedData = bufferedBlockAlgorithm._process(true); // Flush
  * ```
  */
  _process(t) {
    let s;
    const n = this._data, i = n.words, o = n.sigBytes, r = this.blockSize * 4;
    let a = o / r;
    t ? a = Math.ceil(a) : a = Math.max((a | 0) - this._minBufferSize, 0);
    const l = a * this.blockSize, c = Math.min(l * 4, o);
    if (l) {
      for (let d = 0; d < l; d += this.blockSize) this._doProcessBlock(i, d);
      s = i.splice(0, l), n.sigBytes -= c;
    }
    return new tt(s || [], c);
  }
  /**
  * Creates a copy of this object.
  * 
  * @returns The clone
  * @example
  * ```javascript
  * const clone = bufferedBlockAlgorithm.clone();
  * ```
  */
  clone() {
    const t = super.clone();
    return t._data = this._data.clone(), t;
  }
}, dl = class extends ul {
  /**
  * Initializes a newly created hasher.
  * 
  * @param cfg - Configuration options
  */
  constructor(t) {
    super();
    /** The number of 32-bit words this hasher operates on */
    re(this, "blockSize", 512 / 32);
    /** Configuration options */
    re(this, "cfg");
    /** The hash result */
    re(this, "_hash");
    this.cfg = Object.assign({}, t), this.reset();
  }
  /**
  * Creates a shortcut function to a hasher's object interface.
  * 
  * @param SubHasher - The hasher class to create a helper for
  * @returns The shortcut function
  * @static
  * @example
  * ```javascript
  * const SHA256 = Hasher._createHelper(SHA256Algo);
  * ```
  */
  static _createHelper(t) {
    return (s, n) => new t(n).finalize(s);
  }
  /**
  * Creates a shortcut function to the HMAC's object interface.
  * 
  * @param SubHasher - The hasher class to use in this HMAC helper
  * @returns The shortcut function
  * @static
  * @example
  * ```javascript
  * const HmacSHA256 = Hasher._createHmacHelper(SHA256Algo);
  * ```
  */
  static _createHmacHelper(t) {
    return (s, n) => new Kd(t, n).finalize(s);
  }
  /**
  * Resets this hasher to its initial state.
  * 
  * @example
  * ```javascript
  * hasher.reset();
  * ```
  */
  reset() {
    super.reset(), this._doReset();
  }
  /**
  * Updates this hasher with a message.
  * 
  * @param messageUpdate - The message to append
  * @returns This hasher instance for method chaining
  * @example
  * ```javascript
  * hasher.update('message');
  * hasher.update(wordArray);
  * ```
  */
  update(t) {
    return this._append(t), this._process(), this;
  }
  /**
  * Finalizes the hash computation.
  * Note that the finalize operation is effectively a destructive, read-once operation.
  * 
  * @param messageUpdate - An optional final message update
  * @returns The computed hash
  * @example
  * ```javascript
  * const hash = hasher.finalize();
  * const hash = hasher.finalize('message');
  * const hash = hasher.finalize(wordArray);
  * ```
  */
  finalize(t) {
    return t && this._append(t), this._doFinalize();
  }
}, Gd = class extends dl {
}, Kd = class fl extends gs {
  /**
  * Initializes a newly created HMAC.
  * 
  * @param SubHasher - The hash algorithm class to use
  * @param key - The secret key
  * @example
  * ```javascript
  * const hmac = new HMAC(SHA256Algo, 'secret key');
  * ```
  */
  constructor(s, n) {
    super();
    /** The inner hasher instance */
    re(this, "_hasher");
    /** The outer key */
    re(this, "_oKey");
    /** The inner key */
    re(this, "_iKey");
    const i = new s();
    this._hasher = i;
    let o;
    typeof n == "string" ? o = Ao.parse(n) : o = n;
    const r = i.blockSize, a = r * 4;
    o.sigBytes > a && (o = i.finalize(o)), o.clamp();
    const l = o.clone();
    this._oKey = l;
    const c = o.clone();
    this._iKey = c;
    const d = l.words, h = c.words;
    for (let w = 0; w < r; w += 1)
      d[w] ^= 1549556828, h[w] ^= 909522486;
    l.sigBytes = a, c.sigBytes = a, this.reset();
  }
  static create(...s) {
    const [n, i] = s;
    return new fl(n, i);
  }
  /**
  * Resets this HMAC to its initial state.
  * 
  * @example
  * ```javascript
  * hmac.reset();
  * ```
  */
  reset() {
    const s = this._hasher;
    s.reset(), s.update(this._iKey);
  }
  /**
  * Updates this HMAC with a message.
  * 
  * @param messageUpdate - The message to append
  * @returns This HMAC instance for method chaining
  * @example
  * ```javascript
  * hmac.update('message');
  * hmac.update(wordArray);
  * ```
  */
  update(s) {
    return this._hasher.update(s), this;
  }
  /**
  * Finalizes the HMAC computation.
  * Note that the finalize operation is effectively a destructive, read-once operation.
  * 
  * @param messageUpdate - An optional final message update
  * @returns The computed HMAC
  * @example
  * ```javascript
  * const hmacValue = hmac.finalize();
  * const hmacValue = hmac.finalize('message');
  * const hmacValue = hmac.finalize(wordArray);
  * ```
  */
  finalize(s) {
    const n = this._hasher, i = n.finalize(s);
    return n.reset(), n.finalize(this._oKey.clone().concat(i));
  }
};
const Yd = (e, t, s) => {
  const n = [];
  let i = 0;
  for (let o = 0; o < t; o += 1) if (o % 4) {
    const r = s[e.charCodeAt(o - 1)] << o % 4 * 2, a = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2, l = r | a;
    n[i >>> 2] |= l << 24 - i % 4 * 8, i += 1;
  }
  return tt.create(n, i);
};
var Jd = class {
  constructor() {
    /** The Base64 character map */
    re(this, "_map", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
    /** The reverse character map for decoding */
    re(this, "_reverseMap");
  }
  /**
  * Converts a word array to a Base64 string.
  * 
  * @param wordArray - The word array to convert
  * @returns The Base64 string representation
  * @example
  * ```javascript
  * const base64String = Base64.stringify(wordArray);
  * ```
  */
  stringify(e) {
    const { words: t, sigBytes: s } = e, n = this._map;
    e.clamp();
    const i = [];
    for (let r = 0; r < s; r += 3) {
      const a = t[r >>> 2] >>> 24 - r % 4 * 8 & 255, l = t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255, c = t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, d = a << 16 | l << 8 | c;
      for (let h = 0; h < 4 && r + h * 0.75 < s; h += 1) i.push(n.charAt(d >>> 6 * (3 - h) & 63));
    }
    const o = n.charAt(64);
    if (o) for (; i.length % 4; ) i.push(o);
    return i.join("");
  }
  /**
  * Converts a Base64 string to a word array.
  * 
  * @param base64Str - The Base64 string to parse
  * @returns The word array representation
  * @example
  * ```javascript
  * const wordArray = Base64.parse(base64String);
  * ```
  */
  parse(e) {
    let t = e.length;
    const s = this._map;
    let n = this._reverseMap;
    if (!n) {
      this._reverseMap = [], n = this._reverseMap;
      for (let o = 0; o < s.length; o += 1) n[s.charCodeAt(o)] = o;
    }
    const i = s.charAt(64);
    if (i) {
      const o = e.indexOf(i);
      o !== -1 && (t = o);
    }
    return Yd(e, t, n);
  }
};
const Zi = new Jd(), Q = /* @__PURE__ */ (() => {
  const e = [];
  for (let t = 0; t < 64; t += 1) e[t] = Math.abs(Math.sin(t + 1)) * 4294967296 | 0;
  return e;
})(), qe = (e, t, s, n, i, o, r) => {
  const a = e + (t & s | ~t & n) + i + r;
  return (a << o | a >>> 32 - o) + t;
}, We = (e, t, s, n, i, o, r) => {
  const a = e + (t & n | s & ~n) + i + r;
  return (a << o | a >>> 32 - o) + t;
}, ze = (e, t, s, n, i, o, r) => {
  const a = e + (t ^ s ^ n) + i + r;
  return (a << o | a >>> 32 - o) + t;
}, Ge = (e, t, s, n, i, o, r) => {
  const a = e + (s ^ (t | ~n)) + i + r;
  return (a << o | a >>> 32 - o) + t;
};
var hl = class extends Gd {
  _doReset() {
    this._hash = new tt([
      1732584193,
      4023233417,
      2562383102,
      271733878
    ]);
  }
  _doProcessBlock(e, t) {
    const s = e;
    for (let D = 0; D < 16; D += 1) {
      const x = t + D, K = e[x];
      s[x] = (K << 8 | K >>> 24) & 16711935 | (K << 24 | K >>> 8) & 4278255360;
    }
    const n = this._hash.words, i = s[t + 0], o = s[t + 1], r = s[t + 2], a = s[t + 3], l = s[t + 4], c = s[t + 5], d = s[t + 6], h = s[t + 7], w = s[t + 8], k = s[t + 9], E = s[t + 10], T = s[t + 11], G = s[t + 12], Y = s[t + 13], j = s[t + 14], X = s[t + 15];
    let _ = n[0], v = n[1], S = n[2], y = n[3];
    _ = qe(_, v, S, y, i, 7, Q[0]), y = qe(y, _, v, S, o, 12, Q[1]), S = qe(S, y, _, v, r, 17, Q[2]), v = qe(v, S, y, _, a, 22, Q[3]), _ = qe(_, v, S, y, l, 7, Q[4]), y = qe(y, _, v, S, c, 12, Q[5]), S = qe(S, y, _, v, d, 17, Q[6]), v = qe(v, S, y, _, h, 22, Q[7]), _ = qe(_, v, S, y, w, 7, Q[8]), y = qe(y, _, v, S, k, 12, Q[9]), S = qe(S, y, _, v, E, 17, Q[10]), v = qe(v, S, y, _, T, 22, Q[11]), _ = qe(_, v, S, y, G, 7, Q[12]), y = qe(y, _, v, S, Y, 12, Q[13]), S = qe(S, y, _, v, j, 17, Q[14]), v = qe(v, S, y, _, X, 22, Q[15]), _ = We(_, v, S, y, o, 5, Q[16]), y = We(y, _, v, S, d, 9, Q[17]), S = We(S, y, _, v, T, 14, Q[18]), v = We(v, S, y, _, i, 20, Q[19]), _ = We(_, v, S, y, c, 5, Q[20]), y = We(y, _, v, S, E, 9, Q[21]), S = We(S, y, _, v, X, 14, Q[22]), v = We(v, S, y, _, l, 20, Q[23]), _ = We(_, v, S, y, k, 5, Q[24]), y = We(y, _, v, S, j, 9, Q[25]), S = We(S, y, _, v, a, 14, Q[26]), v = We(v, S, y, _, w, 20, Q[27]), _ = We(_, v, S, y, Y, 5, Q[28]), y = We(y, _, v, S, r, 9, Q[29]), S = We(S, y, _, v, h, 14, Q[30]), v = We(v, S, y, _, G, 20, Q[31]), _ = ze(_, v, S, y, c, 4, Q[32]), y = ze(y, _, v, S, w, 11, Q[33]), S = ze(S, y, _, v, T, 16, Q[34]), v = ze(v, S, y, _, j, 23, Q[35]), _ = ze(_, v, S, y, o, 4, Q[36]), y = ze(y, _, v, S, l, 11, Q[37]), S = ze(S, y, _, v, h, 16, Q[38]), v = ze(v, S, y, _, E, 23, Q[39]), _ = ze(_, v, S, y, Y, 4, Q[40]), y = ze(y, _, v, S, i, 11, Q[41]), S = ze(S, y, _, v, a, 16, Q[42]), v = ze(v, S, y, _, d, 23, Q[43]), _ = ze(_, v, S, y, k, 4, Q[44]), y = ze(y, _, v, S, G, 11, Q[45]), S = ze(S, y, _, v, X, 16, Q[46]), v = ze(v, S, y, _, r, 23, Q[47]), _ = Ge(_, v, S, y, i, 6, Q[48]), y = Ge(y, _, v, S, h, 10, Q[49]), S = Ge(S, y, _, v, j, 15, Q[50]), v = Ge(v, S, y, _, c, 21, Q[51]), _ = Ge(_, v, S, y, G, 6, Q[52]), y = Ge(y, _, v, S, a, 10, Q[53]), S = Ge(S, y, _, v, E, 15, Q[54]), v = Ge(v, S, y, _, o, 21, Q[55]), _ = Ge(_, v, S, y, w, 6, Q[56]), y = Ge(y, _, v, S, X, 10, Q[57]), S = Ge(S, y, _, v, d, 15, Q[58]), v = Ge(v, S, y, _, Y, 21, Q[59]), _ = Ge(_, v, S, y, l, 6, Q[60]), y = Ge(y, _, v, S, T, 10, Q[61]), S = Ge(S, y, _, v, r, 15, Q[62]), v = Ge(v, S, y, _, k, 21, Q[63]), n[0] = n[0] + _ | 0, n[1] = n[1] + v | 0, n[2] = n[2] + S | 0, n[3] = n[3] + y | 0;
  }
  _doFinalize() {
    const e = this._data, t = e.words, s = this._nDataBytes * 8, n = e.sigBytes * 8;
    t[n >>> 5] |= 128 << 24 - n % 32;
    const i = Math.floor(s / 4294967296), o = s;
    t[(n + 64 >>> 9 << 4) + 15] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360, t[(n + 64 >>> 9 << 4) + 14] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, e.sigBytes = (t.length + 1) * 4, this._process();
    const r = this._hash, a = r.words;
    for (let l = 0; l < 4; l += 1) {
      const c = a[l];
      a[l] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
    }
    return r;
  }
  clone() {
    const e = super.clone.call(this);
    return e._hash = this._hash.clone(), e;
  }
};
const pl = dl._createHelper(hl);
var Cr = class extends gs {
  /**
  * Initializes a newly created key derivation function.
  *
  * @param {Object} cfg (Optional) The configuration options to use for the derivation.
  *
  * @example
  *
  *     const kdf = new EvpKDFAlgo();
  *     const kdf = new EvpKDFAlgo({ keySize: 8 });
  *     const kdf = new EvpKDFAlgo({ keySize: 8, iterations: 1000 });
  */
  constructor(t) {
    super();
    re(this, "cfg");
    this.cfg = Object.assign({}, {
      keySize: 128 / 32,
      hasher: hl,
      iterations: 1
    }, t);
  }
  /**
  * Derives a key from a password.
  *
  * @param {WordArray|string} password The password.
  * @param {WordArray|string} salt A salt.
  *
  * @return {WordArray} The derived key.
  *
  * @example
  *
  *     const key = kdf.compute(password, salt);
  */
  compute(t, s) {
    let n;
    const { cfg: i } = this, o = new i.hasher(), r = tt.create(), a = r.words, { keySize: l, iterations: c } = i;
    for (; a.length < l; ) {
      n && o.update(n), n = o.update(t).finalize(s), o.reset();
      for (let d = 1; d < c; d += 1)
        n = o.finalize(n), o.reset();
      r.concat(n);
    }
    return r.sigBytes = l * 4, r;
  }
}, yt, Xd = (yt = class extends ul {
  /**
  * Initializes a newly created cipher.
  * 
  * @param xformMode - Either the encryption or decryption transformation mode constant
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @example
  * ```javascript
  * const cipher = new AESAlgo(
  *   Cipher._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray }
  * );
  * ```
  */
  constructor(s, n, i) {
    super();
    /** Configuration options */
    re(this, "cfg");
    /** Transform mode (encryption or decryption) */
    re(this, "_xformMode");
    /** The key */
    re(this, "_key");
    /** Block size in words */
    re(this, "blockSize", 128 / 32);
    this.cfg = Object.assign({}, i), this._xformMode = s, this._key = n;
  }
  /**
  * Creates this cipher in encryption mode.
  * 
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher instance
  * @static
  * @example
  * ```javascript
  * const cipher = AESAlgo.createEncryptor(keyWordArray, { iv: ivWordArray });
  * ```
  */
  static createEncryptor(s, n) {
    return this.create(yt._ENC_XFORM_MODE, s, n);
  }
  /**
  * Creates this cipher in decryption mode.
  * 
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher instance
  * @static
  * @example
  * ```javascript
  * const cipher = AESAlgo.createDecryptor(keyWordArray, { iv: ivWordArray });
  * ```
  */
  static createDecryptor(s, n) {
    return this.create(yt._DEC_XFORM_MODE, s, n);
  }
  static create(...s) {
    if (s.length >= 2 && typeof s[0] == "number") {
      const [n, i, o] = s, r = new this(n, i, o);
      return r.reset(), r;
    } else return new this(...s);
  }
  /**
  * Creates shortcut functions to a cipher's object interface.
  * 
  * @param SubCipher - The cipher to create a helper for
  * @returns An object with encrypt and decrypt shortcut functions
  * @static
  * @example
  * ```javascript
  * const AES = Cipher._createHelper(AESAlgo);
  * ```
  */
  static _createHelper(s) {
    const n = (i) => typeof i == "string" ? sf : Vs;
    return {
      encrypt(i, o, r) {
        return n(o).encrypt(s, i, o, r);
      },
      decrypt(i, o, r) {
        return n(o).decrypt(s, i, o, r);
      }
    };
  }
  /**
  * Resets this cipher to its initial state.
  * 
  * @example
  * ```javascript
  * cipher.reset();
  * ```
  */
  reset() {
    super.reset(), this._doReset();
  }
  /**
  * Adds data to be encrypted or decrypted.
  * 
  * @param dataUpdate - The data to encrypt or decrypt
  * @returns The data after processing
  * @example
  * ```javascript
  * const encrypted = cipher.process('data');
  * const encrypted = cipher.process(wordArray);
  * ```
  */
  process(s) {
    return this._append(s), this._process();
  }
  /**
  * Finalizes the encryption or decryption process.
  * Note that the finalize operation is effectively a destructive, read-once operation.
  * 
  * @param dataUpdate - The final data to encrypt or decrypt
  * @returns The data after final processing
  * @example
  * ```javascript
  * const encrypted = cipher.finalize();
  * const encrypted = cipher.finalize('data');
  * const encrypted = cipher.finalize(wordArray);
  * ```
  */
  finalize(s) {
    return s && this._append(s), this._doFinalize();
  }
}, /** Encryption mode constant */
re(yt, "_ENC_XFORM_MODE", 1), /** Decryption mode constant */
re(yt, "_DEC_XFORM_MODE", 2), /** Default key size in words (128 bits) */
re(yt, "keySize", 128 / 32), /** Default IV size in words (128 bits) */
re(yt, "ivSize", 128 / 32), yt), $s = class extends gs {
  /**
  * Initializes a newly created mode.
  * 
  * @param cipher - A block cipher instance
  * @param iv - The IV words
  * @example
  * ```javascript
  * const mode = new CBCMode(cipher, iv.words);
  * ```
  */
  constructor(t, s) {
    super();
    /** The cipher instance */
    re(this, "_cipher");
    /** The initialization vector */
    re(this, "_iv");
    /** The previous block (for chaining modes) */
    re(this, "_prevBlock");
    this._cipher = t, this._iv = s;
  }
  /**
  * Creates this mode for encryption.
  * 
  * @param cipher - A block cipher instance
  * @param iv - The IV words
  * @returns The mode instance
  * @static
  * @example
  * ```javascript
  * const mode = CBC.createEncryptor(cipher, iv.words);
  * ```
  */
  static createEncryptor(t, s) {
    return this.Encryptor.create(t, s);
  }
  /**
  * Creates this mode for decryption.
  * 
  * @param cipher - A block cipher instance
  * @param iv - The IV words
  * @returns The mode instance
  * @static
  * @example
  * ```javascript
  * const mode = CBC.createDecryptor(cipher, iv.words);
  * ```
  */
  static createDecryptor(t, s) {
    return this.Decryptor.create(t, s);
  }
  /**
  * Process a block of data
  * Must be implemented by concrete modes
  */
  processBlock(t, s) {
  }
};
function gl(e, t, s) {
  const n = e;
  let i;
  const o = this._iv;
  if (o ? (i = o, this._iv = void 0) : i = this._prevBlock, i) for (let r = 0; r < s; r += 1) n[t + r] ^= i[r];
}
var Qd = class extends $s {
  /**
  * Processes the data block at offset.
  * 
  * @param words - The data words to operate on
  * @param offset - The offset where the block starts
  * @example
  * ```javascript
  * mode.processBlock(data.words, offset);
  * ```
  */
  processBlock(e, t) {
    const s = this._cipher, n = s.blockSize;
    gl.call(this, e, t, n), s.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n);
  }
}, Zd = class extends $s {
  /**
  * Processes the data block at offset.
  * 
  * @param words - The data words to operate on
  * @param offset - The offset where the block starts
  * @example
  * ```javascript
  * mode.processBlock(data.words, offset);
  * ```
  */
  processBlock(e, t) {
    const s = this._cipher, n = s.blockSize, i = e.slice(t, t + n);
    s.decryptBlock(e, t), gl.call(this, e, t, n), this._prevBlock = i;
  }
}, Tn, ef = (Tn = class extends $s {
}, /** CBC Encryptor */
re(Tn, "Encryptor", Qd), /** CBC Decryptor */
re(Tn, "Decryptor", Zd), Tn);
const ml = {
  pad(e, t) {
    const s = t * 4, n = s - e.sigBytes % s, i = n << 24 | n << 16 | n << 8 | n, o = [];
    for (let a = 0; a < n; a += 4) o.push(i);
    const r = tt.create(o, n);
    e.concat(r);
  },
  unpad(e) {
    const t = e.words[e.sigBytes - 1 >>> 2] & 255;
    e.sigBytes -= t;
  }
};
var yl = class extends Xd {
  /**
  * Initializes a newly created block cipher.
  * 
  * @param xformMode - Transform mode
  * @param key - The key
  * @param cfg - Configuration options
  */
  constructor(t, s, n) {
    super(t, s, Object.assign({
      mode: ef,
      padding: ml
    }, n));
    /** Block mode instance */
    re(this, "_mode");
    this.blockSize = 128 / 32;
  }
  reset() {
    super.reset();
    const { cfg: t } = this, { iv: s, mode: n } = t;
    let i;
    this._xformMode === this.constructor._ENC_XFORM_MODE ? i = n?.createEncryptor : (i = n?.createDecryptor, this._minBufferSize = 1), i && n && (this._mode = i.call(n, this, s?.words), this._mode.__creator = i);
  }
  _doProcessBlock(t, s) {
    this._mode?.processBlock(t, s);
  }
  _doFinalize() {
    let t;
    const { padding: s } = this.cfg;
    return this._xformMode === this.constructor._ENC_XFORM_MODE ? (s && s.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), s && s.unpad(t)), t;
  }
}, Zs = class vl extends gs {
  /**
  * Initializes a newly created cipher params object.
  * 
  * @param cipherParams - An object with any of the possible cipher parameters
  * @example
  * ```javascript
  * const cipherParams = new CipherParams({
  *   ciphertext: ciphertextWordArray,
  *   key: keyWordArray,
  *   iv: ivWordArray,
  *   salt: saltWordArray,
  *   algorithm: AESAlgo,
  *   mode: CBC,
  *   padding: Pkcs7,
  *   blockSize: 4,
  *   formatter: OpenSSLFormatter
  * });
  * ```
  */
  constructor(s) {
    super();
    re(this, "ciphertext");
    re(this, "key");
    re(this, "iv");
    re(this, "salt");
    re(this, "algorithm");
    re(this, "mode");
    re(this, "padding");
    re(this, "blockSize");
    re(this, "formatter");
    s && this.mixIn(s), this.formatter || (this.formatter = eo);
  }
  static create(...s) {
    const [n] = s;
    return new vl(n);
  }
  /**
  * Converts this cipher params object to a string.
  * 
  * @param formatter - The formatting strategy to use
  * @returns The stringified cipher params
  * @throws Error if neither the formatter nor the default formatter is set
  * @example
  * ```javascript
  * const string = cipherParams.toString();
  * const string = cipherParams.toString(OpenSSLFormatter);
  * ```
  */
  toString(s) {
    const n = s || this.formatter;
    if (!n) throw new Error("cipher params formatter required");
    return n.stringify(this);
  }
};
const eo = {
  stringify(e) {
    let t;
    const { ciphertext: s, salt: n } = e;
    return n && s ? t = tt.create([1398893684, 1701076831]).concat(n).concat(s) : s ? t = s : t = new tt(), t.toString(Zi);
  },
  parse(e) {
    let t;
    const s = Zi.parse(e), n = s.words;
    return n[0] === 1398893684 && n[1] === 1701076831 && (t = tt.create(n.slice(2, 4)), n.splice(0, 4), s.sigBytes -= 16), Zs.create({
      ciphertext: s,
      salt: t
    });
  }
};
var $i, Vs = ($i = class extends gs {
  /**
  * Encrypts a message.
  * 
  * @param cipher - The cipher algorithm to use
  * @param message - The message to encrypt
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher params object
  * @static
  * @example
  * ```javascript
  * const ciphertextParams = SerializableCipher.encrypt(AESAlgo, message, key);
  * const ciphertextParams = SerializableCipher.encrypt(AESAlgo, message, key, { iv: iv });
  * ```
  */
  static encrypt(e, t, s, n) {
    const i = Object.assign({}, this.cfg, n), o = e.createEncryptor(s, i), r = o.finalize(t), a = o.cfg;
    return Zs.create({
      ciphertext: r,
      key: s,
      iv: a.iv,
      algorithm: e,
      mode: a.mode,
      padding: a.padding,
      blockSize: o.blockSize,
      formatter: i.format || eo
    });
  }
  /**
  * Decrypts serialized ciphertext.
  * 
  * @param cipher - The cipher algorithm to use
  * @param ciphertext - The ciphertext to decrypt
  * @param key - The key
  * @param cfg - Configuration options to use for this operation
  * @returns The plaintext
  * @static
  * @example
  * ```javascript
  * const plaintext = SerializableCipher.decrypt(AESAlgo, formattedCiphertext, key, { iv: iv });
  * const plaintext = SerializableCipher.decrypt(AESAlgo, ciphertextParams, key, { iv: iv });
  * ```
  */
  static decrypt(e, t, s, n) {
    const i = Object.assign({}, this.cfg, n), o = this._parse(t, i.format);
    return e.createDecryptor(s, i).finalize(o.ciphertext);
  }
  /**
  * Converts serialized ciphertext to CipherParams.
  * 
  * @param ciphertext - The ciphertext
  * @param format - The formatting strategy to use to parse serialized ciphertext
  * @returns The unserialized ciphertext
  * @static
  * @private
  */
  static _parse(e, t) {
    if (typeof e == "string") {
      if (!t) throw new Error("Format required to parse string");
      return t.parse(e, this);
    }
    return e instanceof Zs ? e : new Zs(e);
  }
}, /** Configuration options */
re($i, "cfg", { format: eo }), $i);
const tf = { execute(e, t, s, n, i) {
  let o;
  n ? typeof n == "string" ? o = cl.parse(n) : o = n : o = tt.random(64 / 8);
  let r;
  i ? r = Cr.create({
    keySize: t + s,
    hasher: i
  }).compute(e, o) : r = Cr.create({ keySize: t + s }).compute(e, o);
  const a = tt.create(r.words.slice(t), s * 4);
  return r.sigBytes = t * 4, Zs.create({
    key: r,
    iv: a,
    salt: o
  });
} };
var Oi, sf = (Oi = class extends Vs {
  /**
  * Encrypts a message using a password.
  * 
  * @param cipher - The cipher algorithm to use
  * @param message - The message to encrypt
  * @param password - The password
  * @param cfg - Configuration options to use for this operation
  * @returns A cipher params object
  * @static
  * @example
  * ```javascript
  * const ciphertextParams = PasswordBasedCipher.encrypt(AESAlgo, message, 'password');
  * ```
  */
  static encrypt(e, t, s, n) {
    const i = Object.assign({}, this.cfg, n);
    if (!i.kdf) throw new Error("KDF required for password-based encryption");
    const o = i.kdf.execute(s, e.keySize || e.keySize, e.ivSize || e.ivSize, i.salt, i.hasher);
    i.iv = o.iv;
    const r = Vs.encrypt.call(this, e, t, o.key, i);
    return r.salt = o.salt, r;
  }
  /**
  * Decrypts serialized ciphertext using a password.
  * 
  * @param cipher - The cipher algorithm to use
  * @param ciphertext - The ciphertext to decrypt
  * @param password - The password
  * @param cfg - Configuration options to use for this operation
  * @returns The plaintext
  * @static
  * @example
  * ```javascript
  * const plaintext = PasswordBasedCipher.decrypt(AESAlgo, formattedCiphertext, 'password');
  * ```
  */
  static decrypt(e, t, s, n) {
    const i = Object.assign({}, this.cfg, n), o = this._parse(t, i.format);
    if (!i.kdf) throw new Error("KDF required for password-based decryption");
    const r = i.kdf.execute(s, e.keySize || e.keySize, e.ivSize || e.ivSize, o.salt, i.hasher);
    return i.iv = r.iv, Vs.decrypt.call(this, e, o, r.key, i);
  }
}, /** Configuration options */
re(Oi, "cfg", Object.assign({}, Vs.cfg, { kdf: tf })), Oi);
const st = [], _l = [], bl = [], wl = [], kl = [], xl = [], to = [], so = [], no = [], io = [];
(() => {
  const e = [];
  for (let n = 0; n < 256; n += 1) n < 128 ? e[n] = n << 1 : e[n] = n << 1 ^ 283;
  let t = 0, s = 0;
  for (let n = 0; n < 256; n += 1) {
    let i = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
    i = i >>> 8 ^ i & 255 ^ 99, st[t] = i, _l[i] = t;
    const o = e[t], r = e[o], a = e[r];
    let l = e[i] * 257 ^ i * 16843008;
    bl[t] = l << 24 | l >>> 8, wl[t] = l << 16 | l >>> 16, kl[t] = l << 8 | l >>> 24, xl[t] = l, l = a * 16843009 ^ r * 65537 ^ o * 257 ^ t * 16843008, to[i] = l << 24 | l >>> 8, so[i] = l << 16 | l >>> 16, no[i] = l << 8 | l >>> 24, io[i] = l, t ? (t = o ^ e[e[e[a ^ o]]], s ^= e[e[s]]) : (s = 1, t = s);
  }
})();
const nf = [
  0,
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  27,
  54
];
var Li, of = (Li = class extends yl {
  constructor() {
    super(...arguments);
    /** Number of rounds for this key size */
    re(this, "_nRounds");
    /** Previous key for optimization */
    re(this, "_keyPriorReset");
    /** Key schedule for encryption */
    re(this, "_keySchedule");
    /** Inverse key schedule for decryption */
    re(this, "_invKeySchedule");
  }
  _doReset() {
    let t;
    if (this._nRounds && this._keyPriorReset === this._key) return;
    this._keyPriorReset = this._key;
    const s = this._keyPriorReset, n = s.words, i = s.sigBytes / 4;
    this._nRounds = i + 6;
    const r = (this._nRounds + 1) * 4;
    this._keySchedule = [];
    const a = this._keySchedule;
    for (let c = 0; c < r; c += 1) c < i ? a[c] = n[c] : (t = a[c - 1], c % i ? i > 6 && c % i === 4 && (t = st[t >>> 24] << 24 | st[t >>> 16 & 255] << 16 | st[t >>> 8 & 255] << 8 | st[t & 255]) : (t = t << 8 | t >>> 24, t = st[t >>> 24] << 24 | st[t >>> 16 & 255] << 16 | st[t >>> 8 & 255] << 8 | st[t & 255], t ^= nf[c / i | 0] << 24), a[c] = a[c - i] ^ t);
    this._invKeySchedule = [];
    const l = this._invKeySchedule;
    for (let c = 0; c < r; c += 1) {
      const d = r - c;
      c % 4 ? t = a[d] : t = a[d - 4], c < 4 || d <= 4 ? l[c] = t : l[c] = to[st[t >>> 24]] ^ so[st[t >>> 16 & 255]] ^ no[st[t >>> 8 & 255]] ^ io[st[t & 255]];
    }
  }
  encryptBlock(t, s) {
    this._doCryptBlock(t, s, this._keySchedule, bl, wl, kl, xl, st);
  }
  decryptBlock(t, s) {
    const n = t;
    let i = n[s + 1];
    n[s + 1] = n[s + 3], n[s + 3] = i, this._doCryptBlock(n, s, this._invKeySchedule, to, so, no, io, _l), i = n[s + 1], n[s + 1] = n[s + 3], n[s + 3] = i;
  }
  _doCryptBlock(t, s, n, i, o, r, a, l) {
    const c = t, d = this._nRounds;
    let h = c[s] ^ n[0], w = c[s + 1] ^ n[1], k = c[s + 2] ^ n[2], E = c[s + 3] ^ n[3], T = 4;
    for (let _ = 1; _ < d; _ += 1) {
      const v = i[h >>> 24] ^ o[w >>> 16 & 255] ^ r[k >>> 8 & 255] ^ a[E & 255] ^ n[T];
      T += 1;
      const S = i[w >>> 24] ^ o[k >>> 16 & 255] ^ r[E >>> 8 & 255] ^ a[h & 255] ^ n[T];
      T += 1;
      const y = i[k >>> 24] ^ o[E >>> 16 & 255] ^ r[h >>> 8 & 255] ^ a[w & 255] ^ n[T];
      T += 1;
      const D = i[E >>> 24] ^ o[h >>> 16 & 255] ^ r[w >>> 8 & 255] ^ a[k & 255] ^ n[T];
      T += 1, h = v, w = S, k = y, E = D;
    }
    const G = (l[h >>> 24] << 24 | l[w >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[E & 255]) ^ n[T];
    T += 1;
    const Y = (l[w >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[E >>> 8 & 255] << 8 | l[h & 255]) ^ n[T];
    T += 1;
    const j = (l[k >>> 24] << 24 | l[E >>> 16 & 255] << 16 | l[h >>> 8 & 255] << 8 | l[w & 255]) ^ n[T];
    T += 1;
    const X = (l[E >>> 24] << 24 | l[h >>> 16 & 255] << 16 | l[w >>> 8 & 255] << 8 | l[k & 255]) ^ n[T];
    T += 1, c[s] = G, c[s + 1] = Y, c[s + 2] = j, c[s + 3] = X;
  }
}, /** Key size in 32-bit words */
re(Li, "keySize", 256 / 32), Li);
const rf = yl._createHelper(of);
var af = class extends $s {
  processBlock(e, t) {
    this._cipher.encryptBlock(e, t);
  }
}, lf = class extends $s {
  processBlock(e, t) {
    this._cipher.decryptBlock(e, t);
  }
}, Pn, cf = (Pn = class extends $s {
}, re(Pn, "Encryptor", af), re(Pn, "Decryptor", lf), Pn);
const uf = "e82ckenh8dichen8", df = Ao.parse(uf), Ar = "3go8&$8*3*3h0k(2)2";
function Ei(e, t) {
  const s = JSON.stringify(t), n = pl("nobody" + e + "use" + s + "md5forencrypt").toString(), i = `${e}-36cd479b6b5-${s}-36cd479b6b5-${n}`, r = rf.encrypt(i, df, {
    mode: cf,
    padding: ml
  }).ciphertext;
  return r ? r.toString().toUpperCase() : (H.error("eapiEncrypt produced empty ciphertext", { urlPath: e }), "");
}
function ff(e) {
  const t = e.split("").map((i, o) => String.fromCharCode(i.charCodeAt(0) ^ Ar.charCodeAt(o % Ar.length))).join(""), s = pl(t);
  return Zi.stringify(s).replace(/\//g, "_").replace(/\+/g, "-");
}
function hf(e) {
  return e ? `https://p3.music.126.net/${ff(e)}/${e}.jpg?param=300y300` : (H.warn("buildCoverUrl called with empty picId"), "");
}
class en {
  constructor(t) {
    this.id = "netease", this.name = "网易云", this.workerURL = t?.workerURL?.trim() || "", this.cookie = t?.cookie?.trim() || "";
  }
  async fetchJson(t, s, n = 5e3, i = 2) {
    let o;
    for (let r = 0; r <= i; r++)
      try {
        const a = new AbortController(), l = setTimeout(() => a.abort(), n), c = await fetch(t, { ...s, signal: a.signal });
        if (clearTimeout(l), !c.ok) {
          if (H.warn(`NetEase: HTTP ${c.status} from ${t}`), c.status >= 500 && r < i) continue;
          return null;
        }
        const d = await c.json();
        return d && d.success === !1 ? (H.warn("NetEase: API error: " + (d.error ?? "unknown")), null) : d;
      } catch (a) {
        if (o = a, r < i) continue;
      }
    return H.warn("NetEase: fetchJson failed after " + (i + 1) + " attempts: " + t, o), null;
  }
  probeAudio(t, s = 3e3) {
    return new Promise((n) => {
      const i = new Audio();
      let o = !1;
      const r = () => {
        i.removeEventListener("loadedmetadata", a), i.removeEventListener("error", l), clearTimeout(c), i.src = "";
      }, a = () => {
        o || (o = !0, r(), n(!0));
      }, l = () => {
        o || (o = !0, r(), n(!1));
      }, c = setTimeout(() => {
        o || (o = !0, r(), n(!1));
      }, s);
      i.preload = "metadata", i.addEventListener("loadedmetadata", a), i.addEventListener("error", l), i.src = t;
    });
  }
  async search(t) {
    if (!this.workerURL)
      return H.warn("NetEase: worker URL not configured"), [];
    const n = (await this.fetchJson(
      `${this.workerURL}/search?keyword=${encodeURIComponent(t)}&limit=20`
    ))?.data;
    return Array.isArray(n) ? n.map((i) => ({
      id: String(i.id ?? ""),
      name: String(i.name ?? ""),
      artist: String(i.artist ?? ""),
      duration: i.duration ?? void 0,
      provider: this.id,
      picId: i.picId ? String(i.picId) : void 0
    })) : [];
  }
  async resolve(t, s) {
    if (!this.workerURL)
      return H.warn("NetEase: worker URL not configured"), null;
    if (!this.cookie)
      return H.warn("NetEase: cookie not set, cannot resolve URL"), null;
    const n = "/api/song/enhance/player/url/v1", i = {
      ids: [Number(t)],
      level: "exhigh",
      encodeType: "flac",
      header: JSON.stringify({
        os: "pc",
        appver: "",
        osver: "",
        deviceId: "pyncm!",
        requestId: String(
          Math.floor(Math.random() * 1e7) + 2e7
        )
      })
    }, r = {
      "X-Netease-Params": Ei(n, i),
      "X-Netease-Cookie": this.cookie
    }, [a, l, c] = await Promise.all([
      this.fetchJson(`${this.workerURL}/resolve?id=${encodeURIComponent(t)}`, { headers: r }),
      this.fetchJson(`${this.workerURL}/lyric?id=${encodeURIComponent(t)}`),
      this.fetchJson(`${this.workerURL}/detail?id=${encodeURIComponent(t)}`, { headers: r })
    ]), d = a?.data?.url;
    if (!d)
      return H.warn("NetEase: no URL returned for id=" + t), null;
    const h = c?.data, w = h?.cover || (s ? hf(s) : void 0);
    return {
      providerTrackId: t,
      url: String(d),
      lyric: l?.data?.lyric ? String(l.data.lyric) : void 0,
      cover: w || void 0,
      name: h?.name ? String(h.name) : "",
      artist: h?.artist ? String(h.artist) : "",
      source: this.id
    };
  }
  async searchAndResolve(t, s) {
    const n = s ? `${t} ${s}` : t, i = await this.search(n);
    if (i.length === 0) return null;
    for (const o of i) {
      const r = await this.resolve(o.id, o.picId);
      if (!r) continue;
      if (!await this.probeAudio(r.url)) {
        H.warn("NetEase: audio probe failed for id=" + o.id + ", trying next");
        continue;
      }
      return r.name = o.name, r.artist = o.artist, r;
    }
    return H.warn('NetEase: no playable result for "' + n + '"'), null;
  }
  /** Add the song to the authenticated account; never toggle an existing like off. */
  async likeSong(t) {
    if (!this.workerURL || !this.cookie) throw new Error("请先配置网易云 Cookie 和新版 Worker");
    if (!/^\d+$/.test(t)) throw new Error("当前歌曲没有有效的网易云 ID");
    const s = await fetch(`${this.workerURL}/like`, {
      method: "POST",
      headers: {
        "X-Netease-Cookie": this.cookie,
        "X-Netease-Params": Ei("/api/radio/like", {
          alg: "itembased",
          trackId: t,
          like: !0,
          time: "3"
        })
      },
      signal: AbortSignal.timeout(15e3),
      cache: "no-store"
    });
    if (s.status === 404) throw new Error("当前 Worker 不支持喜欢歌曲，请更新部署后重试");
    if (s.status === 401) throw new Error("网易云登录已失效，请更新 Cookie");
    if (!s.ok) throw new Error("添加喜欢未成功，请稍后重试");
    if ((await s.json()).success !== !0) throw new Error("网易云未确认添加喜欢，请稍后重试");
  }
  async fetchPersonalFM() {
    if (!this.workerURL || !this.cookie) throw new Error("请先配置网易云 Cookie 和新版 Worker");
    const t = await fetch(`${this.workerURL}/personal-fm`, {
      headers: {
        "X-Netease-Cookie": this.cookie,
        "X-Netease-Params": Ei("/api/v1/radio/get", {})
      },
      signal: AbortSignal.timeout(15e3),
      cache: "no-store"
    });
    if (t.status === 404) throw new Error("当前 Worker 不支持心动推荐，请部署本仓库新版 Worker 并选择自建模式");
    if (t.status === 401) throw new Error("网易云登录已失效，请更新 Cookie");
    if (!t.ok) throw new Error("心动推荐请求失败，请稍后重试");
    const s = await t.json();
    if (!s.success || !Array.isArray(s.data)) throw new Error("心动推荐响应无效");
    return s.data.filter((n) => n.id && n.name).map((n) => ({
      id: String(n.id),
      name: String(n.name),
      artist: String(n.artist ?? ""),
      duration: n.duration,
      picId: n.picId,
      provider: this.id
    }));
  }
  async fetchPlaylists() {
    if (!this.workerURL || !this.cookie)
      return H.warn("NetEase: worker URL or cookie not configured for fetchPlaylists"), null;
    const t = await this.fetchJson(
      `${this.workerURL}/playlists?limit=100`,
      { headers: { "X-Netease-Cookie": this.cookie } },
      15e3,
      1
    );
    return !t || t.success === !1 ? (H.warn("NetEase: fetchPlaylists failed", t?.error), null) : Array.isArray(t.data) ? t.data : [];
  }
  async fetchPlaylist(t) {
    if (!this.workerURL || !this.cookie)
      return H.warn("NetEase: worker URL or cookie not configured for fetchPlaylist"), null;
    const s = await this.fetchJson(
      `${this.workerURL}/playlist?id=${encodeURIComponent(t)}`,
      { headers: { "X-Netease-Cookie": this.cookie } },
      3e4,
      1
    );
    if (!s || s.success === !1)
      return H.warn("NetEase: fetchPlaylist failed", s?.error), null;
    const n = s.data;
    if (!n || !Array.isArray(n.songs)) return null;
    const i = n.songs.map((o) => ({
      id: String(o.id ?? ""),
      name: String(o.name ?? ""),
      artist: String(o.artist ?? ""),
      duration: o.duration ?? void 0,
      provider: this.id,
      picId: o.picId ? String(o.picId) : void 0
    }));
    return {
      name: String(n.name ?? ""),
      cover: String(n.cover ?? ""),
      songs: i
    };
  }
}
class pf {
  constructor(t) {
    this.id = "local", this.name = "本地文件", this.storage = t?.storage ?? null;
  }
  async search(t) {
    return [];
  }
  async resolve(t, s) {
    if (!this.storage) return null;
    const n = await this.storage.getItem("stmp:audio:" + t);
    return n ? {
      url: URL.createObjectURL(n),
      name: "",
      artist: "",
      source: this.id
    } : null;
  }
}
const Sl = "https://xiaoyue.erocraft.org";
function Ts(e) {
  return e.neteaseMode === "worker" ? Sl : e.neteaseWorkerURL;
}
function Zt(e) {
  const s = e.providers.filter((n) => n.enabled).sort((n, i) => n.priority - i.priority).map((n) => {
    const i = n.config ?? {};
    switch (n.id) {
      case "netease":
        return new en({
          workerURL: Ts(e),
          cookie: e.neteaseCookie
        });
      case "local":
        return new pf({
          storage: i.storage ? i.storage : void 0
        });
      default:
        return null;
    }
  }).filter((n) => n !== null);
  return new zd(s);
}
const gf = {
  "No Song": "当前无播放",
  Search: "搜索",
  "Search Song...": "搜索歌曲...",
  "Searching...": "搜索中...",
  "No results": "未找到匹配歌曲",
  "Type a song name to search": "输入歌名进行搜索",
  "No Songs": "暂无歌曲",
  Network: "网络",
  Upload: "上传",
  Chat: "聊天",
  "Upload audio file": "上传音频文件",
  Retry: "重试",
  Previous: "上一首",
  Next: "下一首",
  Play: "播放",
  Pause: "暂停",
  "Toggle play mode": "切换播放模式",
  "Mute / Unmute": "静音/取消静音",
  "Collapse panel": "收起面板",
  Playlist: "播放列表",
  Close: "关闭",
  Added: "已添加",
  "Add to list": "加入列表",
  "Cannot play": "无法播放",
  "Now playing": "正在播放",
  Paused: "已暂停",
  Delisted: "可能已下架",
  Uploaded: "已上传",
  "Upload failed": "上传失败",
  "Settings exported": "设置已导出",
  "Settings imported": "设置已导入",
  "Playlist exported": "播放列表已导出",
  "Playlist imported": "播放列表已导入",
  "Import failed": "导入失败",
  "Invalid JSON": "JSON 格式错误",
  "AI selected:": "AI 选曲",
  "AI recommendation failed": "AI 选曲失败",
  "AI analyzing": "AI 正在分析场景...",
  "AI not configured": "请先配置 API 地址和模型",
  "AI BGM off": "AI 选曲未开启",
  "Now playing track": "当前播放",
  "models found": "获取到",
  "No models returned": "该端点未返回模型",
  "Failed to fetch models": "获取模型列表失败",
  "Endpoint CORS blocked": "该端点不支持浏览器直连（CORS 被拦截），请改用支持 CORS 的端点或通过反代转发",
  "Endpoint unreachable": "无法连接到该端点（网络错误），请检查地址是否可达",
  "Endpoint HTTP error": "该端点返回错误：{detail}",
  "Endpoint request failed": "请求该端点失败，请检查地址与网络",
  "Endpoint CORS blocked (agent)": "AI 选曲端点被 CORS 拦截，浏览器无法直连该地址",
  Connect: "连接",
  "Please fill API URL": "请先填写 API 地址",
  "Enter song name": "请输入歌曲名",
  "Volume set to": "音量已设为",
  "Volume must be 0-100": "音量范围 0-100",
  "Added to playlist": "已添加到列表",
  "Play mode": "播放模式",
  "Source enabled": "已启用",
  "Source disabled": "已禁用",
  "Widget Mode": "播放器模式",
  Dock: "吸附",
  Drag: "拖动",
  Hidden: "隐藏",
  Inline: "集成",
  "Dock Alignment": "吸附对齐",
  "Top Left": "左上",
  "Top Right": "右上",
  "Bottom Left": "左下",
  "Bottom Right": "右下",
  "Choose how the player widget is displayed": "选择播放器小部件的显示方式",
  "Align the docked player to a corner of the screen": "将吸附的播放器对齐到屏幕角落",
  "Show track info in drag mini": "收起时显示曲名",
  "Show song title and lyrics in the compact drag widget": "收起时显示曲名和歌词",
  "Default Volume": "默认音量",
  "Default Play Mode": "默认播放模式",
  Crossfade: "淡入淡出",
  "Smoothly fade in when starting playback and fade out when pausing or switching tracks": "开始播放时淡入，暂停或切换歌曲时淡出",
  "Custom opacity": "自定义透明度",
  Opacity: "透明度",
  "Adjust the player background opacity": "调整播放器背景透明度",
  "Debug Mode": "调试模式",
  "Enable verbose console logging for troubleshooting": "启用详细控制台日志用于排查问题",
  "Export data": "导出设置",
  "Import data": "导入设置",
  "Save your settings to a JSON file": "将设置保存为 JSON 文件",
  "Load settings from a JSON file": "从 JSON 文件加载设置",
  "Export playlist": "导出播放列表",
  "Import playlist": "导入播放列表",
  "Save network playlist to a JSON file": "将网络播放列表保存为 JSON 文件",
  "Load network playlist from a JSON file": "从 JSON 文件加载网络播放列表",
  "List Loop": "列表循环",
  Random: "随机",
  "Single Loop": "单曲循环",
  "Upload and play songs from the server": "向服务端上传并播放歌曲",
  Confirm: "确认",
  Cancel: "取消",
  "Upload warning text": "上传的音频文件将存储在 SillyTavern 服务端，通过服务端网络传输播放。这可能造成播放卡顿、占用服务器磁盘空间。确认要开启吗？",
  "Use a separate API endpoint for BGM agent loop instead of main API function calling": "使用独立 API 端点运行 BGM agent",
  Playback: "播放",
  General: "通用",
  Appearance: "外观",
  AI: "AI",
  Version: "版本",
  "A scene-aware music player extension for SillyTavern": "SillyTavern 情景音乐播放器扩展",
  // AI BGM
  "AI BGM": "AI 选曲",
  "Enable AI-driven background music selection": "启用 AI 驱动的背景音乐选择",
  "AI Mode": "AI 模式",
  Together: "提示词注入",
  "Function Call": "Function Call",
  "Choose how AI selects background music": "选择 AI 选曲的方式",
  "Context Messages": "上下文消息数",
  "Number of recent chat messages to send to AI": "发送给 AI 的最近聊天消息数量",
  "Auto Trigger": "自动触发",
  "Automatically analyze new messages and select music": "自动分析新消息并选择音乐",
  "Trigger on Greeting": "Greeting 触发",
  "Analyze BGM when loading a character card (first message)": "加载角色卡（首条消息）时分析 BGM",
  "API URL": "API 地址",
  "OpenAI-compatible endpoint that supports tool calling": "需支持工具调用的 OpenAI 兼容端点",
  "API Key": "API 密钥",
  "Bearer token for the custom endpoint": "自定义端点的 Bearer 令牌",
  Model: "模型",
  "Model that supports tool calling": "需支持工具调用的模型",
  "Prompt Role": "注入角色",
  "Role used when injecting BGM instructions into the main AI": "向主 AI 注入 BGM 指令时使用的角色",
  System: "系统",
  User: "用户",
  "Custom Prompt": "自定义提示词",
  "Edit the BGM instruction prompt. Use macros like ": "编辑 BGM 指令提示词。可使用 ",
  " for dynamic values.": " 等变量插入动态值。",
  "Edit Prompt": "编辑提示词",
  "Click to edit the BGM instruction prompt": "点击编辑 BGM 指令提示词",
  "Available macros:": "可用变量：",
  "The prompt must contain the markers": "提示词必须包含标记",
  "for BGM control to work.": "才能生效。",
  Save: "保存",
  // NetEase
  "Official Worker": "晓乐",
  "Self-hosted": "自部署",
  "Worker URL": "Worker 地址",
  "Your Cloudflare Worker deployment URL": "你的 Cloudflare Worker 部署地址",
  "Paste MUSIC_U cookie value here": "在此粘贴 MUSIC_U cookie 值",
  "Cookie valid": "Cookie 有效",
  "Cookie invalid or expired": "Cookie 无效或已过期",
  "Cannot reach Worker": "无法连接 Worker",
  "Data Sources": "数据源",
  "NetEase Music": "网易云音乐",
  "Select official or self-hosted Worker": "选择官方服务或自部署 Worker",
  "MUSIC_U Cookie": "MUSIC_U Cookie",
  "Paste cookie from music.163.com": "从 music.163.com 获取的 Cookie",
  "Cookie privacy hint": "Cookie 仅保存在浏览器本地，不会上传到 SillyTavern 服务端。播放时会通过请求头发送至 Worker 用于鉴权，Worker 不会保存 Cookie。",
  "Playlist Management": "列表管理",
  "Playback Settings": "播放设置",
  "Cookie not configured": "Cookie 未配置",
  "Cookie expired": "Cookie 已失效",
  "Cookie invalid": "Cookie 无效",
  "Configure in settings": "请在设置中配置",
  // Playlist / Queue refactor
  "Now Playing": "播放列表",
  Playlists: "歌单",
  "My Playlists": "我的歌单",
  "NetEase Playlists": "网易云歌单",
  "Network Collection": "网络收藏",
  "AI Picks": "AI 选曲",
  songs: "首",
  "Not synced": "未同步",
  "Syncing...": "同步中...",
  "Playlist synced": "歌单已同步",
  "Sync failed": "同步失败"
};
let vs = null;
function mf() {
  if (vs) return vs;
  try {
    if (typeof SillyTavern < "u") {
      const e = SillyTavern.getContext();
      e?.getCurrentLocale && (vs = e.getCurrentLocale());
    }
  } catch {
  }
  return vs || (vs = (typeof navigator < "u" ? navigator.language || navigator.userLanguage : "en")?.toLowerCase() || "en"), vs;
}
function g(e) {
  return mf().startsWith("zh") ? gf[e] ?? e : e;
}
function Cl() {
  const e = { "Content-Type": "application/json" };
  if (typeof SillyTavern < "u" && SillyTavern.getContext) {
    const t = SillyTavern.getContext();
    if (t?.getRequestHeaders) {
      const s = t.getRequestHeaders();
      s && typeof s == "object" && Object.assign(e, s);
    }
  }
  return e;
}
function yf(e) {
  return new Promise((t, s) => {
    const n = new FileReader();
    n.onload = () => {
      const i = n.result, o = i.indexOf(",");
      t(o >= 0 ? i.slice(o + 1) : i);
    }, n.onerror = () => s(n.error), n.readAsDataURL(e);
  });
}
function vf(e) {
  const t = e.lastIndexOf("."), s = t > 0 ? e.slice(0, t) : e, n = t > 0 ? e.slice(t) : "";
  return `${s.replace(/[^a-zA-Z0-9_\-.]/g, "_")}${n}`;
}
async function _f(e) {
  const t = await yf(e), s = vf(e.name), n = await fetch("/api/files/upload", {
    method: "POST",
    headers: Cl(),
    body: JSON.stringify({ name: s, data: t })
  });
  if (!n.ok)
    throw new Error(`Upload failed: ${n.status} ${n.statusText}`);
  return (await n.json()).path;
}
async function Al(e) {
  const t = await fetch("/api/files/delete", {
    method: "POST",
    headers: Cl(),
    body: JSON.stringify({ path: e })
  });
  t.ok || H.warn("deleteFile failed: " + t.status);
}
function _s() {
  return `stmp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
const Ht = "__local__", Jt = "__upload__", tn = "__ai__";
function bf(e) {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return ("network" in t || "server" in t) && !("playlists" in t);
}
function wf(e) {
  const t = Date.now(), s = [], n = Array.isArray(e.network) ? e.network : [];
  n.length > 0 && s.push({
    id: Ht,
    name: g("Network Collection"),
    source: "local",
    songs: n,
    updatedAt: t
  });
  const i = Array.isArray(e.server) ? e.server : [];
  return i.length > 0 && s.push({
    id: Jt,
    name: g("Upload"),
    source: "upload",
    songs: i,
    updatedAt: t
  }), {
    playlists: s,
    queue: { items: [], currentIndex: -1 },
    version: 2
  };
}
function xn(e) {
  const t = [...e], s = Date.now(), n = {
    [Ht]: g("Network Collection"),
    [Jt]: g("Upload"),
    [tn]: g("AI Picks")
  };
  for (const a of t)
    a.id in n && (a.name = n[a.id]);
  const i = t.some((a) => a.id === Ht), o = t.some((a) => a.id === Jt), r = t.some((a) => a.id === tn);
  if (i || t.unshift({
    id: Ht,
    name: g("Network Collection"),
    source: "local",
    songs: [],
    updatedAt: s
  }), !o) {
    const a = t.findIndex((l) => l.id === Ht);
    t.splice(a + 1, 0, {
      id: Jt,
      name: g("Upload"),
      source: "upload",
      songs: [],
      updatedAt: s
    });
  }
  if (!r) {
    const a = t.findIndex((l) => l.id === Jt);
    t.splice(a + 1, 0, {
      id: tn,
      name: g("AI Picks"),
      source: "ai",
      songs: [],
      updatedAt: s
    });
  }
  return t;
}
const Be = /* @__PURE__ */ pi("playlist", {
  state: () => ({
    heartActive: !1,
    heartLoading: !1,
    heartError: "",
    heartGeneration: 0,
    heartNextBusy: !1,
    savedQueue: null,
    playRequest: 0,
    playlists: [],
    queue: { items: [], currentIndex: -1 },
    activeTab: "queue",
    selectedPlaylistId: null,
    neteasePlaylistsLoading: !1,
    syncingPlaylistIds: []
  }),
  getters: {
    current(e) {
      const t = e.queue.currentIndex;
      return t >= 0 && t < e.queue.items.length ? e.queue.items[t] ?? null : null;
    },
    isEmpty(e) {
      return e.queue.items.length === 0 && e.playlists.every((t) => t.songs.length === 0);
    },
    playMode() {
      return ge().settings.playMode;
    },
    selectedPlaylist(e) {
      return e.selectedPlaylistId ? e.playlists.find((t) => t.id === e.selectedPlaylistId) ?? null : null;
    },
    localPlaylists(e) {
      return e.playlists.filter((t) => t.source === "local" || t.source === "upload" || t.source === "ai");
    },
    neteasePlaylists(e) {
      const t = e.playlists.filter((s) => s.source === "netease");
      return t.sort((s, n) => s.neteaseSpecialType === 5 && n.neteaseSpecialType !== 5 ? -1 : s.neteaseSpecialType !== 5 && n.neteaseSpecialType === 5 ? 1 : 0), t;
    },
    queueSourceName(e) {
      const t = e.queue.sourcePlaylistId;
      return t ? e.playlists.find((n) => n.id === t)?.name ?? null : null;
    }
  },
  actions: {
    async toggleHeart() {
      if (this.heartActive || this.heartLoading) {
        this.stopHeart(!0);
        return;
      }
      this.savedQueue = { ...this.queue, items: this.queue.items.slice() }, this.heartActive = !0, this.heartError = "", this.queue = { items: [], currentIndex: -1 };
      const e = ++this.heartGeneration;
      ++this.playRequest;
      const t = await this.fillHeart();
      if (e === this.heartGeneration) {
        if (!t) {
          this.stopHeart(!1);
          return;
        }
        this.activeTab = "queue", await this.nextHeart();
      }
    },
    stopHeart(e = !1) {
      !this.heartActive && !this.heartLoading || (++this.heartGeneration, ++this.playRequest, this.heartActive = !1, this.heartLoading = !1, this.heartNextBusy = !1, this.savedQueue && (this.queue = this.savedQueue), this.savedQueue = null, e && (Ee().pause(), this.queue.currentIndex >= 0 && this.resolveAndPlay(this.queue.currentIndex)));
    },
    async fillHeart() {
      if (!this.heartActive || this.heartLoading) return !1;
      const e = this.heartGeneration;
      this.heartLoading = !0, this.heartError = "";
      try {
        const t = ge().settings, n = await new en({ workerURL: Ts(t), cookie: t.neteaseCookie }).fetchPersonalFM();
        if (e !== this.heartGeneration) return !1;
        const i = new Set(this.queue.items.map((r) => r.providerTrackId)), o = n.filter((r) => i.has(r.id) ? !1 : (i.add(r.id), !0));
        if (!o.length) throw new Error("暂时没有新的推荐，请点击下一首重试");
        if (this.queue.currentIndex > 100) {
          const r = this.queue.currentIndex - 100;
          this.queue.items.splice(0, r), this.queue.currentIndex -= r;
        }
        return this.queue.items.push(...o.map((r) => ({
          id: _s(),
          song: r.name,
          artist: r.artist,
          source: "network",
          providerId: "netease",
          providerTrackId: r.id,
          providerPicId: r.picId,
          addedAt: Date.now()
        }))), !0;
      } catch (t) {
        return e === this.heartGeneration && (this.heartError = t instanceof Error ? t.message : "推荐加载失败"), !1;
      } finally {
        e === this.heartGeneration && (this.heartLoading = !1);
      }
    },
    async nextHeart() {
      if (this.heartNextBusy || this.heartLoading) return;
      const e = this.heartGeneration;
      this.heartNextBusy = !0;
      try {
        for (let t = 0; t < 5 && this.heartActive; t++)
          if (this.queue.currentIndex + 1 >= this.queue.items.length && !await this.fillHeart() || e !== this.heartGeneration || (this.queue.currentIndex++, await this.resolveAndPlay(this.queue.currentIndex)) || e !== this.heartGeneration) return;
        this.heartError = "连续多首歌曲无法播放，请稍后重试";
      } finally {
        e === this.heartGeneration && (this.heartNextBusy = !1);
      }
    },
    init() {
      this.loadFromStorage();
    },
    loadFromStorage() {
      const t = ge().storage;
      if (!t) return;
      const s = t.getPlaylistData();
      if (s)
        if (bf(s)) {
          const n = wf(s);
          this.playlists = xn(n.playlists), this.queue = n.queue, this.savePlaylistData(), H.info("Playlist data migrated from legacy format");
        } else if (s.version === 2) {
          const n = s;
          this.playlists = xn(n.playlists ?? []), this.queue = n.queue ?? { items: [], currentIndex: -1 };
        } else
          this.playlists = xn([]), this.queue = { items: [], currentIndex: -1 };
      else
        this.playlists = xn([]), this.queue = { items: [], currentIndex: -1 };
    },
    savePlaylistData() {
      const t = ge().storage;
      if (!t) return;
      const s = {
        playlists: this.playlists,
        queue: this.savedQueue ?? this.queue,
        version: 2
      };
      t.setPlaylistData(s);
    },
    // ===== 歌单管理 =====
    getPlaylist(e) {
      return this.playlists.find((t) => t.id === e);
    },
    addToPlaylist(e, t) {
      const s = this.getPlaylist(e);
      return !s || s.songs.some(
        (i) => i.providerId === t.providerId && i.providerTrackId === t.providerTrackId
      ) ? !1 : (s.songs.push(t), s.updatedAt = Date.now(), this.savePlaylistData(), !0);
    },
    removeFromPlaylist(e, t) {
      const s = this.getPlaylist(e);
      s && (s.songs = s.songs.filter((n) => n.id !== t), s.updatedAt = Date.now(), this.savePlaylistData());
    },
    deletePlaylist(e) {
      const t = this.getPlaylist(e);
      if (t && !(e === Ht || e === Jt || e === tn)) {
        if (t.source === "upload") {
          const s = t.songs.map((n) => n.serverPath).filter((n) => !!n);
          Promise.all(s.map((n) => Al(n).catch(() => {
          })));
        }
        this.playlists = this.playlists.filter((s) => s.id !== e), this.queue.sourcePlaylistId === e && (this.queue.sourcePlaylistId = void 0), this.savePlaylistData();
      }
    },
    // ===== 队列管理 =====
    playPlaylist(e, t = 0) {
      const s = this.getPlaylist(e);
      !s || s.songs.length === 0 || (this.stopHeart(), this.queue = {
        items: s.songs.slice(),
        currentIndex: Math.max(0, Math.min(t, s.songs.length - 1)),
        sourcePlaylistId: e
      }, this.activeTab = "queue", this.savePlaylistData(), this.resolveAndPlay(this.queue.currentIndex));
    },
    playFromHere(e, t) {
      this.playPlaylist(e, t);
    },
    playQueueIndex(e) {
      this.heartNextBusy || e < 0 || e >= this.queue.items.length || (this.queue.currentIndex = e, this.savePlaylistData(), this.resolveAndPlay(e));
    },
    removeFromQueue(e) {
      this.heartNextBusy || (++this.playRequest, !(e < 0 || e >= this.queue.items.length) && (this.queue.items.splice(e, 1), this.queue.currentIndex === e ? this.queue.currentIndex = -1 : e < this.queue.currentIndex && this.queue.currentIndex--, this.savePlaylistData()));
    },
    clearQueue() {
      this.stopHeart(), ++this.playRequest, this.queue = { items: [], currentIndex: -1 }, this.savePlaylistData();
    },
    // ===== 播放控制 =====
    peekNextIndex() {
      const e = this.queue.items;
      if (e.length === 0) return -1;
      if (this.heartActive) return this.queue.currentIndex + 1 < e.length ? this.queue.currentIndex + 1 : -1;
      const t = this.playMode, s = this.queue.currentIndex;
      if (t === "single") return s;
      if (t === "random") {
        if (e.length === 1) return 0;
        for (let i = 0; i < 5; i++) {
          const o = Math.floor(Math.random() * e.length);
          if (o !== s) return o;
        }
        return (s + 1) % e.length;
      }
      let n = s + 1;
      return n >= e.length && (n = 0), n;
    },
    next() {
      if (this.heartActive) {
        this.nextHeart();
        return;
      }
      const e = this.queue.items;
      if (e.length === 0) return;
      const t = this.playMode;
      let s = this.queue.currentIndex;
      if (t === "single")
        s = this.queue.currentIndex;
      else if (t === "random")
        if (e.length === 1)
          s = 0;
        else {
          for (let n = 0; n < 5; n++) {
            const i = Math.floor(Math.random() * e.length);
            if (i !== this.queue.currentIndex) {
              s = i;
              break;
            }
          }
          s === this.queue.currentIndex && (s = (this.queue.currentIndex + 1) % e.length);
        }
      else
        s = this.queue.currentIndex + 1, s >= e.length && (s = 0);
      this.queue.currentIndex = s, this.savePlaylistData(), this.resolveAndPlay(s);
    },
    prev() {
      if (this.heartActive && (this.heartNextBusy || this.queue.currentIndex <= 0)) return;
      const e = this.queue.items;
      if (e.length === 0) return;
      let t = this.queue.currentIndex - 1;
      t < 0 && (t = e.length - 1), this.queue.currentIndex = t, this.savePlaylistData(), this.resolveAndPlay(t);
    },
    async resolveTrack(e) {
      const t = this.queue.items[e];
      if (!t) return null;
      if (t.source === "server" && t.serverPath)
        return { url: t.serverPath, name: t.song, artist: t.artist ?? "", source: "server" };
      if (t.providerId && t.providerTrackId) {
        const n = await Zt(ge().settings).resolve(t.providerTrackId, t.providerId, t.providerPicId);
        return n && (n.name = t.song, n.artist = t.artist ?? ""), n;
      }
      return null;
    },
    async resolveAndPlay(e) {
      const t = ++this.playRequest, s = this.queue.items[e];
      if (!s) return !1;
      let n = null;
      if (s.source === "server" && s.serverPath ? n = { url: s.serverPath, name: s.song, artist: s.artist ?? "", source: "server" } : s.providerId && s.providerTrackId && (n = await Zt(ge().settings).resolve(s.providerTrackId, s.providerId, s.providerPicId), n && (n.name = s.song, n.artist = s.artist ?? "")), t !== this.playRequest || this.queue.items[e] !== s) return !1;
      if (!n) {
        const r = ge().neteaseStatus;
        let a;
        return s.source === "server" ? a = `${g("Cannot play")}：${s.song}` : r === "no-cookie" ? a = g("Cookie not configured") : r === "expired" ? a = g("Cookie expired") : r === "invalid" ? a = g("Cookie invalid") : a = `${g("Cannot play")}：${s.song}（${g("Delisted")}）`, H.warn('Track unavailable: "' + s.song + '"'), typeof toastr < "u" && toastr.warning(a, "晓乐"), !1;
      }
      const i = Ee();
      try {
        return await i.loadAndPlay(n), !0;
      } catch {
        return !1;
      }
    },
    // ===== 搜索结果 =====
    addFromSearch(e, t = !0) {
      t && this.stopHeart();
      const s = {
        id: _s(),
        song: e.name,
        artist: e.artist,
        source: "network",
        providerId: e.provider,
        providerTrackId: e.id,
        providerPicId: e.picId,
        addedAt: Date.now()
      };
      this.addToPlaylist(Ht, s), t && (this.queue = {
        items: [s],
        currentIndex: 0,
        sourcePlaylistId: Ht
      }, this.activeTab = "queue", this.savePlaylistData(), this.resolveAndPlay(0));
    },
    // ===== AI 选曲 =====
    addFromAi(e, t = !0) {
      this.heartActive && (t = !1);
      const s = {
        id: _s(),
        song: e.name,
        artist: e.artist,
        source: "chat",
        providerId: e.provider,
        providerTrackId: e.id,
        providerPicId: e.picId,
        addedAt: Date.now()
      };
      if (this.addToPlaylist(tn, s), t) {
        const n = this.queue.currentIndex + 1;
        this.queue.items.splice(n, 0, s), this.queue.currentIndex = n, this.savePlaylistData(), this.resolveAndPlay(n);
      }
    },
    // ===== 上传 =====
    async addServerFile(e, t) {
      const s = await _f(t), n = {
        id: _s(),
        song: e,
        source: "server",
        serverPath: s,
        addedAt: Date.now()
      };
      this.stopHeart(), this.addToPlaylist(Jt, n), this.queue = {
        items: [n],
        currentIndex: 0,
        sourcePlaylistId: Jt
      }, this.savePlaylistData(), this.resolveAndPlay(0);
    },
    // ===== 网易云歌单同步 =====
    async syncNeteasePlaylists() {
      if (this.neteasePlaylistsLoading) return;
      const e = ge(), t = Ts(e.settings), s = e.settings.neteaseCookie;
      if (!t || !s) {
        H.warn("Cannot sync netease playlists: worker or cookie missing");
        return;
      }
      this.neteasePlaylistsLoading = !0;
      try {
        const i = await new en({ workerURL: t, cookie: s }).fetchPlaylists();
        if (!i) return;
        const o = Date.now(), r = new Map(this.playlists.filter((l) => l.source === "netease").map((l) => [l.neteaseId, l])), a = i.map((l) => {
          const c = r.get(l.id);
          return {
            id: c?.id ?? _s(),
            name: l.name,
            source: "netease",
            neteaseId: l.id,
            neteaseSpecialType: l.specialType,
            cover: l.cover,
            songs: c?.songs ?? [],
            updatedAt: c?.updatedAt ?? o,
            syncedAt: c?.syncedAt
          };
        });
        if (this.playlists = [
          ...this.playlists.filter((l) => l.source !== "netease"),
          ...a
        ], this.queue.sourcePlaylistId && !this.playlists.some((l) => l.id === this.queue.sourcePlaylistId) && (this.queue.sourcePlaylistId = void 0), this.savePlaylistData(), a.length > 0) {
          for (let c = 0; c < a.length; c += 3) {
            const d = a.slice(c, c + 3);
            await Promise.all(d.map((h) => this.syncNeteasePlaylist(h.id, !1).catch((w) => {
              H.warn("Auto-sync playlist failed: " + h.name, w);
            })));
          }
          this.savePlaylistData();
        }
      } catch (n) {
        H.error("syncNeteasePlaylists failed:", n);
      } finally {
        this.neteasePlaylistsLoading = !1;
      }
    },
    async syncNeteasePlaylist(e, t = !0) {
      const s = this.getPlaylist(e);
      if (!s || s.source !== "netease" || !s.neteaseId || this.syncingPlaylistIds.includes(e)) return !1;
      const n = ge(), i = Ts(n.settings), o = n.settings.neteaseCookie;
      if (!i || !o) return !1;
      this.syncingPlaylistIds.push(e);
      try {
        const a = await new en({ workerURL: i, cookie: o }).fetchPlaylist(s.neteaseId);
        if (!a) return !1;
        const l = this.getPlaylist(e);
        return !l || l.neteaseId !== s.neteaseId ? !1 : (l.songs = a.songs.map((c) => ({
          id: _s(),
          song: c.name,
          artist: c.artist,
          source: "network",
          providerId: "netease",
          providerTrackId: c.id,
          providerPicId: c.picId,
          addedAt: Date.now()
        })), l.cover = a.cover, l.syncedAt = Date.now(), l.updatedAt = Date.now(), t && this.savePlaylistData(), !0);
      } catch (r) {
        return H.error("syncNeteasePlaylist failed:", r), !1;
      } finally {
        this.syncingPlaylistIds = this.syncingPlaylistIds.filter((r) => r !== e);
      }
    },
    // ===== Tab / 选择 =====
    setActiveTab(e) {
      this.activeTab = e;
    },
    selectPlaylist(e) {
      this.selectedPlaylistId = e;
    }
  }
}), Ee = /* @__PURE__ */ pi("player", {
  state: () => ({
    audioEngine: null,
    isPlaying: !1,
    currentTime: 0,
    duration: 0,
    volume: 65,
    lyrics: [],
    currentLyricIndex: -1,
    currentTrack: null,
    preloadedUrl: "",
    preloadedIndex: -1
  }),
  actions: {
    init() {
      if (this.audioEngine) return;
      const e = new Vd();
      this.audioEngine = e;
      const t = Ee();
      e.on("timeupdate", () => {
        if (!e) return;
        t.currentTime = e.currentTime, t.duration = e.duration;
        const s = Wd(t.lyrics, e.currentTime), n = s ? t.lyrics.indexOf(s) : -1;
        if (t.currentLyricIndex = n, t.duration > 0) {
          const i = t.duration - t.currentTime;
          if (!Be().heartActive && i < 15 && i > 0 && t.preloadedIndex === -1) {
            const o = Be(), r = o.peekNextIndex();
            r >= 0 && r !== o.queue.currentIndex && (t.preloadedIndex = r, o.resolveTrack(r).then((a) => {
              a && (t.preloadedUrl = a.url, e.preloadNext(a.url));
            }));
          }
        }
      }), e.on("ended", () => {
        const s = Be();
        t.preloadedUrl = "", t.preloadedIndex = -1, s.next();
      }), e.on("play", () => {
        t.isPlaying = !0;
      }), e.on("pause", () => {
        t.isPlaying = !1;
      }), e.on("error", () => {
        H.warn("Audio error event");
      }), this.initMediaSession();
    },
    initMediaSession() {
      if (!("mediaSession" in navigator)) return;
      const e = Ee(), t = Be();
      navigator.mediaSession.setActionHandler("play", () => {
        e.play();
      }), navigator.mediaSession.setActionHandler("pause", () => {
        e.pause();
      }), navigator.mediaSession.setActionHandler("previoustrack", () => {
        t.prev();
      }), navigator.mediaSession.setActionHandler("nexttrack", () => {
        t.next();
      });
    },
    async loadAndPlay(e) {
      this.audioEngine || this.init();
      const t = this.audioEngine;
      this.preloadedUrl = "", this.preloadedIndex = -1;
      const s = ge().settings.crossfade;
      if (t.load(e.url), this.currentTrack = e, e.lyric ? this.updateLyrics(e.lyric) : (this.lyrics = [], this.currentLyricIndex = -1), await t.play(s), e.cover, "mediaSession" in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
        title: e.name,
        artist: e.artist,
        album: "",
        artwork: e.cover ? [{ src: e.cover, sizes: "512x512" }] : []
      }), "setPositionState" in navigator.mediaSession))
        try {
          navigator.mediaSession.setPositionState({
            duration: t.duration || 0,
            position: t.currentTime,
            playbackRate: 1
          });
        } catch {
        }
    },
    async play() {
      const e = ge().settings.crossfade;
      await this.audioEngine?.play(e);
    },
    pause() {
      const e = ge().settings.crossfade;
      this.audioEngine?.pause(e);
    },
    async togglePlay() {
      this.isPlaying ? this.pause() : await this.play();
    },
    seek(e) {
      this.audioEngine?.seek(e);
    },
    setVolume(e) {
      this.volume = e, this.audioEngine?.setVolume(e / 100);
    },
    updateLyrics(e) {
      this.lyrics = qd(e), this.currentLyricIndex = -1;
    },
    destroy() {
      this.audioEngine?.destroy(), this.audioEngine = null, this.isPlaying = !1, this.currentTime = 0, this.duration = 0, this.lyrics = [], this.currentLyricIndex = -1, this.currentTrack = null, this.preloadedUrl = "", this.preloadedIndex = -1;
    }
  }
}), kf = /* @__PURE__ */ pi("search", {
  state: () => ({
    keyword: "",
    results: [],
    isSearching: !1,
    error: null
  }),
  actions: {
    setKeyword(e) {
      this.keyword = e;
    },
    async search(e) {
      if (!this.keyword.trim()) {
        this.results = [];
        return;
      }
      this.isSearching = !0, this.error = null;
      try {
        this.results = await e.searchAll(this.keyword);
      } catch (t) {
        H.warn("Search failed:", t), this.error = t instanceof Error ? t.message : String(t), this.results = [];
      } finally {
        this.isSearching = !1;
      }
    },
    clear() {
      this.keyword = "", this.results = [], this.error = null;
    }
  }
});
function Tl() {
  const e = /* @__PURE__ */ ye(0), t = /* @__PURE__ */ ye([]), s = /* @__PURE__ */ ye(null);
  function n(r, a) {
    r && (t.value[a] = r);
  }
  async function i() {
    await Ke(), await new Promise((k) => requestAnimationFrame(() => k()));
    const a = Ee().currentLyricIndex, l = s.value;
    if (!l || a < 0) {
      e.value = 0;
      return;
    }
    const c = t.value[a];
    if (!c) return;
    const d = c.offsetTop, h = c.offsetHeight, w = l.clientHeight;
    !d && !h && !w || (e.value = d - w / 2 + h / 2);
  }
  const o = Ee();
  return De(() => o.currentLyricIndex, i), De(() => o.lyrics, () => {
    t.value = [], i();
  }), { scrollY: e, windowRef: s, setLineRef: n, updateScroll: i };
}
const xf = ["width", "height"], Sf = {
  key: 0,
  points: "6 3 20 12 6 21 6 3",
  fill: "currentColor",
  stroke: "none"
}, Cf = {
  key: 10,
  points: "6 9 12 15 18 9"
}, Af = {
  key: 11,
  points: "18 15 12 9 6 15"
}, Tf = {
  key: 15,
  points: "20 6 9 17 4 12"
}, Pf = {
  key: 18,
  points: "15 18 9 12 15 6"
}, Mf = {
  key: 19,
  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  fill: "none"
}, Ef = {
  key: 20,
  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  fill: "currentColor",
  stroke: "none"
}, If = {
  key: 23,
  d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
  fill: "currentColor",
  stroke: "none"
}, Rf = /* @__PURE__ */ pt({
  __name: "Icon",
  props: {
    name: {},
    size: {}
  },
  setup(e) {
    return (t, s) => (C(), P("svg", {
      width: e.size || 18,
      height: e.size || 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "stmp-icon"
    }, [
      e.name === "play" ? (C(), P("polygon", Sf)) : e.name === "pause" ? (C(), P(ne, { key: 1 }, [
        s[0] || (s[0] = u("rect", {
          x: "6",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[1] || (s[1] = u("rect", {
          x: "14",
          y: "4",
          width: "4",
          height: "16",
          rx: "1",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "prev" ? (C(), P(ne, { key: 2 }, [
        s[2] || (s[2] = u("polygon", {
          points: "19 20 9 12 19 4 19 20",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[3] || (s[3] = u("line", {
          x1: "5",
          y1: "19",
          x2: "5",
          y2: "5"
        }, null, -1))
      ], 64)) : e.name === "next" ? (C(), P(ne, { key: 3 }, [
        s[4] || (s[4] = u("polygon", {
          points: "5 4 15 12 5 20 5 4",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[5] || (s[5] = u("line", {
          x1: "19",
          y1: "5",
          x2: "19",
          y2: "19"
        }, null, -1))
      ], 64)) : e.name === "repeat" ? (C(), P(ne, { key: 4 }, [
        s[6] || (s[6] = u("polyline", { points: "17 1 21 5 17 9" }, null, -1)),
        s[7] || (s[7] = u("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1)),
        s[8] || (s[8] = u("polyline", { points: "7 23 3 19 7 15" }, null, -1)),
        s[9] || (s[9] = u("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1))
      ], 64)) : e.name === "repeat-one" ? (C(), P(ne, { key: 5 }, [
        s[10] || (s[10] = wn('<polyline points="17 1 21 5 17 9" data-v-8b2b8424></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14" data-v-8b2b8424></path><polyline points="7 23 3 19 7 15" data-v-8b2b8424></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3" data-v-8b2b8424></path><text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor" stroke="none" font-weight="bold" data-v-8b2b8424>1</text>', 5))
      ], 64)) : e.name === "shuffle" ? (C(), P(ne, { key: 6 }, [
        s[11] || (s[11] = wn('<polyline points="16 3 21 3 21 8" data-v-8b2b8424></polyline><line x1="4" y1="20" x2="21" y2="3" data-v-8b2b8424></line><polyline points="21 16 21 21 16 21" data-v-8b2b8424></polyline><line x1="15" y1="15" x2="21" y2="21" data-v-8b2b8424></line><line x1="4" y1="4" x2="9" y2="9" data-v-8b2b8424></line>', 5))
      ], 64)) : e.name === "search" ? (C(), P(ne, { key: 7 }, [
        s[12] || (s[12] = u("circle", {
          cx: "11",
          cy: "11",
          r: "8"
        }, null, -1)),
        s[13] || (s[13] = u("line", {
          x1: "21",
          y1: "21",
          x2: "16.65",
          y2: "16.65"
        }, null, -1))
      ], 64)) : e.name === "plus" ? (C(), P(ne, { key: 8 }, [
        s[14] || (s[14] = u("line", {
          x1: "12",
          y1: "5",
          x2: "12",
          y2: "19"
        }, null, -1)),
        s[15] || (s[15] = u("line", {
          x1: "5",
          y1: "12",
          x2: "19",
          y2: "12"
        }, null, -1))
      ], 64)) : e.name === "x" ? (C(), P(ne, { key: 9 }, [
        s[16] || (s[16] = u("line", {
          x1: "18",
          y1: "6",
          x2: "6",
          y2: "18"
        }, null, -1)),
        s[17] || (s[17] = u("line", {
          x1: "6",
          y1: "6",
          x2: "18",
          y2: "18"
        }, null, -1))
      ], 64)) : e.name === "chevron-down" ? (C(), P("polyline", Cf)) : e.name === "chevron-up" ? (C(), P("polyline", Af)) : e.name === "music" ? (C(), P(ne, { key: 12 }, [
        s[18] || (s[18] = u("path", { d: "M9 18V5l12-2v13" }, null, -1)),
        s[19] || (s[19] = u("circle", {
          cx: "6",
          cy: "18",
          r: "3"
        }, null, -1)),
        s[20] || (s[20] = u("circle", {
          cx: "18",
          cy: "16",
          r: "3"
        }, null, -1))
      ], 64)) : e.name === "volume" ? (C(), P(ne, { key: 13 }, [
        s[21] || (s[21] = u("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[22] || (s[22] = u("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)),
        s[23] || (s[23] = u("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }, null, -1))
      ], 64)) : e.name === "volume-mute" ? (C(), P(ne, { key: 14 }, [
        s[24] || (s[24] = u("polygon", {
          points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[25] || (s[25] = u("line", {
          x1: "23",
          y1: "9",
          x2: "17",
          y2: "15"
        }, null, -1)),
        s[26] || (s[26] = u("line", {
          x1: "17",
          y1: "9",
          x2: "23",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "check" ? (C(), P("polyline", Tf)) : e.name === "loader" ? (C(), P(ne, { key: 16 }, [
        s[27] || (s[27] = wn('<line x1="12" y1="2" x2="12" y2="6" data-v-8b2b8424></line><line x1="12" y1="18" x2="12" y2="22" data-v-8b2b8424></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" data-v-8b2b8424></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" data-v-8b2b8424></line><line x1="2" y1="12" x2="6" y2="12" data-v-8b2b8424></line><line x1="18" y1="12" x2="22" y2="12" data-v-8b2b8424></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" data-v-8b2b8424></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" data-v-8b2b8424></line>', 8))
      ], 64)) : e.name === "list" ? (C(), P(ne, { key: 17 }, [
        s[28] || (s[28] = wn('<line x1="8" y1="6" x2="21" y2="6" data-v-8b2b8424></line><line x1="8" y1="12" x2="21" y2="12" data-v-8b2b8424></line><line x1="8" y1="18" x2="21" y2="18" data-v-8b2b8424></line><circle cx="3.5" cy="6" r="1.5" fill="currentColor" stroke="none" data-v-8b2b8424></circle><circle cx="3.5" cy="12" r="1.5" fill="currentColor" stroke="none" data-v-8b2b8424></circle><circle cx="3.5" cy="18" r="1.5" fill="currentColor" stroke="none" data-v-8b2b8424></circle>', 6))
      ], 64)) : e.name === "chevron-left" ? (C(), P("polyline", Pf)) : e.name === "heart-outline" ? (C(), P("path", Mf)) : e.name === "heart" ? (C(), P("path", Ef)) : e.name === "sparkles" ? (C(), P(ne, { key: 21 }, [
        s[29] || (s[29] = u("path", {
          d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z",
          fill: "currentColor",
          stroke: "none"
        }, null, -1)),
        s[30] || (s[30] = u("path", {
          d: "M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9L19 14z",
          fill: "currentColor",
          stroke: "none"
        }, null, -1))
      ], 64)) : e.name === "upload" ? (C(), P(ne, { key: 22 }, [
        s[31] || (s[31] = u("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, null, -1)),
        s[32] || (s[32] = u("polyline", { points: "17 8 12 3 7 8" }, null, -1)),
        s[33] || (s[33] = u("line", {
          x1: "12",
          y1: "3",
          x2: "12",
          y2: "15"
        }, null, -1))
      ], 64)) : e.name === "bookmark" ? (C(), P("path", If)) : e.name === "refresh-cw" ? (C(), P(ne, { key: 24 }, [
        s[34] || (s[34] = u("polyline", { points: "23 4 23 10 17 10" }, null, -1)),
        s[35] || (s[35] = u("polyline", { points: "1 20 1 14 7 14" }, null, -1)),
        s[36] || (s[36] = u("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10" }, null, -1)),
        s[37] || (s[37] = u("path", { d: "M20.49 15a9 9 0 0 1-14.85 3.36L1 14" }, null, -1))
      ], 64)) : ve("", !0)
    ], 8, xf));
  }
}), gt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, i] of t)
    s[n] = i;
  return s;
}, ke = /* @__PURE__ */ gt(Rf, [["__scopeId", "data-v-8b2b8424"]]), $f = { class: "stmp-mini-side stmp-mini-side-left" }, Of = {
  key: 0,
  class: "stmp-mini-cover"
}, Lf = ["src"], Nf = {
  key: 1,
  class: "stmp-mini-cover stmp-mini-cover-placeholder"
}, Df = {
  key: 1,
  class: "stmp-mini-text stmp-mini-dock-fallback"
}, Ff = { class: "stmp-mini-side stmp-mini-side-right" }, Uf = { class: "stmp-mini-controls" }, Bf = ["disabled", "aria-label"], Hf = ["disabled", "aria-label"], jf = {
  key: 1,
  class: "stmp-mini stmp-mini-drag stmp-mini-drag-idle"
}, Vf = { class: "stmp-mini-cover stmp-mini-cover-square" }, qf = ["src"], Wf = {
  key: 2,
  class: "stmp-mini stmp-mini-drag"
}, zf = ["aria-label"], Gf = ["src"], Kf = { class: "stmp-mini-cover-overlay" }, Yf = { class: "stmp-mini-drag-right" }, Jf = { class: "stmp-mini-title-copy" }, Xf = {
  class: "stmp-mini-title-copy",
  "aria-hidden": "true"
}, Qf = {
  key: 0,
  class: "stmp-mini-lyric-segment"
}, Zf = /* @__PURE__ */ pt({
  __name: "CollapsedBar",
  props: {
    isDock: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = Ee(), s = Be(), n = ge(), i = e, o = /* @__PURE__ */ ye(!1), r = me(() => t.currentTrack?.cover || ""), a = me(() => !!t.currentTrack), l = me(() => !a.value || n.neteaseStatus !== "ok"), c = me(() => n.settings.showDragMiniText), d = me(() => {
      const R = t.currentTrack;
      if (!R) return "";
      const ee = R.name, B = R.artist || "";
      return B ? `${ee} - ${B}` : ee;
    }), { scrollY: h, windowRef: w, setLineRef: k, updateScroll: E } = Tl(), T = /* @__PURE__ */ ye(null), G = /* @__PURE__ */ ye(null), Y = /* @__PURE__ */ ye([]), j = /* @__PURE__ */ ye(0), X = /* @__PURE__ */ ye(0);
    function _(R, ee) {
      R && (Y.value[ee] = R);
    }
    function v() {
      const R = T.value, ee = t.currentLyricIndex;
      if (!R || ee < 0 || ee >= Y.value.length) {
        X.value = 0, j.value = 0;
        return;
      }
      const B = Y.value[ee];
      if (!B) return;
      const I = R.clientWidth, b = B.offsetLeft, U = B.offsetWidth, W = t.lyrics[ee], ce = W?.next ? Math.max(500, (W.next.time - W.time) * 1e3) : 5e3;
      if (U <= I)
        X.value = Math.min(400, ce), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            j.value = -b;
          });
        });
      else {
        const te = -(b + U - I), he = Math.min(600, ce * 0.2);
        X.value = he, requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            j.value = -b;
          });
        }), setTimeout(() => {
          X.value = ce - he, requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              j.value = te;
            });
          });
        }, he);
      }
    }
    De(() => t.currentLyricIndex, v), De(() => t.lyrics, () => {
      Y.value = [], X.value = 0, j.value = 0, requestAnimationFrame(() => v());
    }), De(() => n.settings.widgetMode, () => {
      requestAnimationFrame(() => {
        E(), v();
      });
    });
    const S = /* @__PURE__ */ ye(null), y = /* @__PURE__ */ ye(!1);
    function D() {
      const R = S.value;
      if (!R) {
        y.value = !1;
        return;
      }
      const ee = R.querySelector(".stmp-mini-title-copy");
      if (!ee) {
        y.value = !1;
        return;
      }
      const B = ee.offsetWidth - 30;
      y.value = B > R.clientWidth;
    }
    De(d, () => {
      Ke(() => D());
    });
    function x() {
      o.value = !0;
    }
    De(() => t.currentTrack?.url, () => {
      o.value = !1;
    });
    function K(R) {
      R.stopPropagation(), t.togglePlay();
    }
    function ae(R) {
      R.stopPropagation(), s.next();
    }
    return Rs(() => {
      requestAnimationFrame(() => {
        E(), v(), D();
      });
    }), gn(() => {
    }), (R, ee) => i.isDock ? (C(), P("div", {
      key: 0,
      class: ue(["stmp-mini", i.isMobile ? "stmp-mini-dock-mobile" : "stmp-mini-dock-desktop"])
    }, [
      u("div", $f, [
        r.value && !o.value ? (C(), P("div", Of, [
          u("img", {
            src: r.value,
            alt: "",
            onError: x
          }, null, 40, Lf)
        ])) : (C(), P("div", Nf, [
          Z(ke, {
            name: "music",
            size: 14
          })
        ]))
      ]),
      u("div", {
        ref_key: "dockWindowRef",
        ref: w,
        class: "stmp-mini-dock-text"
      }, [
        p(t).lyrics.length > 0 ? (C(), P("div", {
          key: 0,
          class: "stmp-mini-dock-scroll",
          style: Xt({ transform: `translateY(-${p(h)}px)` })
        }, [
          (C(!0), P(ne, null, Ve(p(t).lyrics, (B, I) => (C(), P("span", {
            key: I,
            ref_for: !0,
            ref: (b) => p(k)(b, I),
            class: ue(["stmp-mini-dock-line", { "stmp-mini-dock-line-active": I === p(t).currentLyricIndex }])
          }, M(B.text), 3))), 128))
        ], 4)) : (C(), P("span", Df, M(d.value), 1))
      ], 512),
      u("div", Ff, [
        u("div", Uf, [
          u("button", {
            class: "stmp-mini-btn",
            disabled: l.value,
            "aria-label": p(t).isPlaying ? p(g)("Pause") : p(g)("Play"),
            onClick: K
          }, [
            Z(ke, {
              name: p(t).isPlaying ? "pause" : "play",
              size: i.isMobile ? 16 : 14
            }, null, 8, ["name", "size"])
          ], 8, Bf),
          u("button", {
            class: "stmp-mini-btn",
            disabled: l.value,
            "aria-label": p(g)("Next"),
            onClick: ae
          }, [
            Z(ke, {
              name: "next",
              size: i.isMobile ? 16 : 14
            }, null, 8, ["size"])
          ], 8, Hf)
        ])
      ])
    ], 2)) : !a.value || !c.value ? (C(), P("div", jf, [
      u("div", Vf, [
        r.value && !o.value ? (C(), P("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: x
        }, null, 40, qf)) : (C(), dt(ke, {
          key: 1,
          name: "music",
          size: 20
        }))
      ])
    ])) : (C(), P("div", Wf, [
      u("button", {
        class: "stmp-mini-cover stmp-mini-cover-square",
        "aria-label": p(t).isPlaying ? p(g)("Pause") : p(g)("Play"),
        onClick: K
      }, [
        r.value && !o.value ? (C(), P("img", {
          key: 0,
          src: r.value,
          alt: "",
          onError: x
        }, null, 40, Gf)) : (C(), dt(ke, {
          key: 1,
          name: "music",
          size: 20
        })),
        u("div", Kf, [
          Z(ke, {
            name: p(t).isPlaying ? "pause" : "play",
            size: 18
          }, null, 8, ["name"])
        ])
      ], 8, zf),
      u("div", Yf, [
        u("div", {
          ref_key: "titleContainerRef",
          ref: S,
          class: ue(["stmp-mini-title-drag", { overflowing: y.value }])
        }, [
          (C(), P("div", {
            class: "stmp-mini-title-track",
            key: d.value
          }, [
            u("span", Jf, M(d.value), 1),
            u("span", Xf, M(d.value), 1)
          ]))
        ], 2),
        u("div", {
          ref_key: "lyricContainerRef",
          ref: T,
          class: "stmp-mini-lyric"
        }, [
          u("div", {
            ref_key: "lyricTrackRef",
            ref: G,
            class: "stmp-mini-lyric-track",
            style: Xt({
              transform: `translateX(${j.value}px)`,
              transition: X.value > 0 ? `transform ${X.value}ms linear` : "none"
            })
          }, [
            (C(!0), P(ne, null, Ve(p(t).lyrics, (B, I) => (C(), P("span", {
              key: I,
              ref_for: !0,
              ref: (b) => _(b, I),
              class: ue(["stmp-mini-lyric-segment", { active: I === p(t).currentLyricIndex }])
            }, M(B.text) + "  ", 3))), 128)),
            p(t).lyrics.length === 0 ? (C(), P("span", Qf, M(" "))) : ve("", !0)
          ], 4)
        ], 512)
      ])
    ]));
  }
}), Tr = /* @__PURE__ */ gt(Zf, [["__scopeId", "data-v-3585e948"]]), eh = ["aria-pressed", "title", "aria-label"], th = {
  key: 0,
  role: "status"
}, sh = /* @__PURE__ */ pt({
  __name: "HeartButton",
  props: {
    compact: { type: Boolean }
  },
  setup(e) {
    const t = Be(), s = me(() => t.heartLoading ? "加载中 · 点击取消" : t.heartActive ? "关闭心动推荐" : "开启心动推荐");
    return (n, i) => (C(), P("div", {
      class: ue(["stmp-heart", { compact: e.compact }])
    }, [
      u("button", {
        type: "button",
        "aria-pressed": p(t).heartActive,
        onClick: i[0] || (i[0] = nt((o) => p(t).toggleHeart(), ["stop"])),
        class: ue({ active: p(t).heartActive }),
        title: s.value,
        "aria-label": s.value
      }, [
        e.compact ? (C(), dt(ke, {
          key: 0,
          name: "heart",
          size: 18,
          class: ue({ loading: p(t).heartLoading })
        }, null, 8, ["class"])) : (C(), P(ne, { key: 1 }, [
          Yt("♥ " + M(s.value), 1)
        ], 64))
      ], 10, eh),
      !e.compact && p(t).heartError ? (C(), P("span", th, M(p(t).heartError), 1)) : ve("", !0)
    ], 2));
  }
}), Pl = /* @__PURE__ */ gt(sh, [["__scopeId", "data-v-c0930b4f"]]), nh = ["disabled", "title", "aria-label", "aria-busy"], ih = /* @__PURE__ */ pt({
  __name: "LikeButton",
  setup(e) {
    const t = Ee(), s = Be(), n = ge(), i = /* @__PURE__ */ ye([]), o = /* @__PURE__ */ ye("");
    let r = 0;
    const a = me(() => t.currentTrack?.source === "netease" ? t.currentTrack.providerTrackId ?? "" : ""), l = me(() => i.value.includes(a.value)), c = me(() => o.value === a.value && o.value ? "正在添加喜欢" : l.value ? "已添加到网易云喜欢列表" : "添加到网易云喜欢列表");
    De(() => [n.settings.neteaseCookie, Ts(n.settings)], () => {
      r++, i.value = [], o.value = "";
    });
    async function d() {
      if (!a.value || o.value || l.value) return;
      const h = a.value, w = r;
      o.value = h, s.heartError = "";
      try {
        await new en({ workerURL: Ts(n.settings), cookie: n.settings.neteaseCookie }).likeSong(h), r === w && i.value.push(h);
      } catch (k) {
        r === w && (s.heartError = k instanceof Error ? k.message : "添加喜欢失败");
      } finally {
        r === w && (o.value = "");
      }
    }
    return (h, w) => p(s).heartActive ? (C(), P("button", {
      key: 0,
      type: "button",
      class: ue(["stmp-like-btn", { liked: l.value }]),
      disabled: !a.value || !!o.value || l.value,
      title: c.value,
      "aria-label": c.value,
      "aria-busy": !!o.value,
      onClick: nt(d, ["stop"])
    }, [
      Z(ke, {
        name: l.value ? "heart" : "heart-outline",
        size: 18
      }, null, 8, ["name"])
    ], 10, nh)) : ve("", !0);
  }
}), oh = /* @__PURE__ */ gt(ih, [["__scopeId", "data-v-419ee111"]]), rh = { class: "stmp-playlist" }, ah = { class: "stmp-main-view" }, lh = { class: "stmp-tabs" }, ch = ["onClick"], uh = { class: "stmp-queue-view" }, dh = {
  key: 0,
  class: "stmp-upload-area"
}, fh = ["disabled"], hh = {
  key: 1,
  class: "stmp-empty"
}, ph = ["onClick"], gh = { class: "stmp-item-index" }, mh = { class: "stmp-item-info" }, yh = { class: "stmp-item-song" }, vh = {
  key: 0,
  class: "stmp-item-artist"
}, _h = ["onClick"], bh = { class: "stmp-playlists-view" }, wh = { class: "stmp-section-header" }, kh = { class: "stmp-section-title" }, xh = ["onClick"], Sh = { class: "stmp-pl-icon" }, Ch = { class: "stmp-pl-info" }, Ah = { class: "stmp-pl-name" }, Th = { class: "stmp-pl-count" }, Ph = { class: "stmp-section-header stmp-section-header-netease" }, Mh = { class: "stmp-section-title" }, Eh = ["disabled"], Ih = {
  key: 0,
  class: "stmp-empty stmp-empty-sm"
}, Rh = {
  key: 1,
  class: "stmp-empty stmp-empty-sm"
}, $h = ["onClick"], Oh = { class: "stmp-pl-icon" }, Lh = { class: "stmp-pl-info" }, Nh = { class: "stmp-pl-name" }, Dh = ["onClick"], Fh = {
  key: 1,
  class: "stmp-pl-sync stmp-spin"
}, Uh = {
  key: 2,
  class: "stmp-pl-count"
}, Bh = /* @__PURE__ */ pt({
  __name: "PlaylistView",
  setup(e) {
    const t = Be(), s = ge(), n = /* @__PURE__ */ ye(null), i = /* @__PURE__ */ ye(!1), o = () => {
      n.value?.click();
    }, r = async (y) => {
      const D = y.target;
      if (!D.files || !D.files[0]) return;
      const x = D.files[0];
      i.value = !0;
      try {
        await t.addServerFile(x.name, x), typeof toastr < "u" && toastr.success(`${g("Uploaded")}：${x.name}`, "晓乐");
      } catch (K) {
        H.error("Upload failed:", K), typeof toastr < "u" && toastr.error(`${g("Upload failed")}：${x.name}`, "晓乐");
      } finally {
        i.value = !1;
      }
      D.value = "";
    }, a = me(() => t.queue.items.map((y, D) => ({ index: D, item: y }))), l = me(() => t.queue.items.length === 0);
    function c(y) {
      t.playQueueIndex(y);
    }
    function d(y) {
      t.removeFromQueue(y);
    }
    const h = me(() => t.localPlaylists), w = me(() => t.neteasePlaylists), k = me(() => s.neteaseStatus === "ok"), E = me(() => [
      { value: "queue", label: g("Now Playing") },
      { value: "playlists", label: g("Playlists") }
    ]);
    De(E, (y) => {
      y.some((D) => D.value === t.activeTab) || t.setActiveTab("queue");
    });
    let T = !1;
    function G(y) {
      t.setActiveTab(y), y === "playlists" && k.value && !T && w.value.length === 0 && (T = !0, t.syncNeteasePlaylists());
    }
    async function Y() {
      await t.syncNeteasePlaylists();
    }
    function j(y) {
      return t.syncingPlaylistIds.includes(y);
    }
    async function X(y) {
      const D = await t.syncNeteasePlaylist(y);
      typeof toastr > "u" || (D ? toastr.success(g("Playlist synced"), "晓乐") : toastr.warning(g("Sync failed"), "晓乐"));
    }
    function _(y) {
      const D = t.getPlaylist(y);
      D && (D.source === "netease" && !D.syncedAt && X(y), t.selectPlaylist(y));
    }
    function v(y) {
      return j(y.id) ? g("Syncing...") : y.source === "netease" && !y.syncedAt ? g("Not synced") : `${y.songs.length} ${g("songs")}`;
    }
    function S(y) {
      return y.source === "netease" && !y.syncedAt;
    }
    return (y, D) => (C(), P("div", rh, [
      u("div", ah, [
        u("div", lh, [
          (C(!0), P(ne, null, Ve(E.value, (x) => (C(), P("div", {
            key: x.value,
            class: ue(["stmp-tab", { active: p(t).activeTab === x.value }]),
            onClick: (K) => G(x.value)
          }, M(x.label), 11, ch))), 128))
        ]),
        fs(u("div", uh, [
          p(s).settings.providers.find((x) => x.id === "local")?.enabled ? (C(), P("div", dh, [
            u("input", {
              type: "file",
              accept: "audio/*",
              ref_key: "fileInputRef",
              ref: n,
              onChange: r,
              style: { display: "none" }
            }, null, 544),
            u("button", {
              class: "stmp-upload-btn",
              disabled: i.value,
              onClick: o
            }, M(i.value ? "..." : "+ " + p(g)("Upload audio file")), 9, fh)
          ])) : ve("", !0),
          l.value ? (C(), P("div", hh, M(p(g)("No Songs")), 1)) : (C(!0), P(ne, { key: 2 }, Ve(a.value, (x) => (C(), P("div", {
            key: x.item.id,
            class: ue(["stmp-item", { active: x.index === p(t).queue.currentIndex }]),
            onClick: (K) => c(x.index)
          }, [
            u("span", gh, M(x.index + 1), 1),
            u("div", mh, [
              u("span", yh, M(x.item.song), 1),
              x.item.artist ? (C(), P("span", vh, M(x.item.artist), 1)) : ve("", !0)
            ]),
            u("button", {
              class: "stmp-item-del",
              onClick: nt((K) => d(x.index), ["stop"])
            }, [
              Z(ke, {
                name: "x",
                size: 14
              })
            ], 8, _h)
          ], 10, ph))), 128))
        ], 512), [
          [xs, p(t).activeTab === "queue"]
        ]),
        fs(u("div", bh, [
          u("div", wh, [
            u("span", kh, M(p(g)("My Playlists")), 1)
          ]),
          (C(!0), P(ne, null, Ve(h.value, (x) => (C(), P("div", {
            key: x.id,
            class: "stmp-pl-item",
            onClick: (K) => _(x.id)
          }, [
            u("div", Sh, [
              Z(ke, {
                name: x.source === "upload" ? "upload" : x.source === "ai" ? "sparkles" : "bookmark",
                size: 16
              }, null, 8, ["name"])
            ]),
            u("div", Ch, [
              u("span", Ah, M(x.name), 1)
            ]),
            u("span", Th, M(v(x)), 1)
          ], 8, xh))), 128)),
          Z(Pl),
          u("div", Ph, [
            u("span", Mh, M(p(g)("NetEase Playlists")), 1),
            k.value ? (C(), P("button", {
              key: 0,
              class: ue(["stmp-refresh-btn", { "stmp-spin": p(t).neteasePlaylistsLoading }]),
              disabled: p(t).neteasePlaylistsLoading,
              onClick: Y
            }, [
              Z(ke, {
                name: p(t).neteasePlaylistsLoading ? "loader" : "refresh-cw",
                size: 14
              }, null, 8, ["name"])
            ], 10, Eh)) : ve("", !0)
          ]),
          k.value ? w.value.length === 0 && !p(t).neteasePlaylistsLoading ? (C(), P("div", Rh, M(p(g)("No Songs")), 1)) : (C(!0), P(ne, { key: 2 }, Ve(w.value, (x) => (C(), P("div", {
            key: x.id,
            class: "stmp-pl-item",
            onClick: (K) => _(x.id)
          }, [
            u("div", Oh, [
              Z(ke, {
                name: x.neteaseSpecialType === 5 ? "heart" : "list",
                size: 16
              }, null, 8, ["name"])
            ]),
            u("div", Lh, [
              u("span", Nh, M(x.name), 1)
            ]),
            S(x) && !j(x.id) ? (C(), P("span", {
              key: 0,
              class: "stmp-pl-sync",
              onClick: nt((K) => X(x.id), ["stop"])
            }, [
              Z(ke, {
                name: "refresh-cw",
                size: 14
              })
            ], 8, Dh)) : j(x.id) ? (C(), P("span", Fh, [
              Z(ke, {
                name: "loader",
                size: 14
              })
            ])) : (C(), P("span", Uh, M(v(x)), 1))
          ], 8, $h))), 128)) : (C(), P("div", Ih, M(p(g)("Configure in settings")), 1))
        ], 512), [
          [xs, p(t).activeTab === "playlists"]
        ])
      ])
    ]));
  }
}), Hh = /* @__PURE__ */ gt(Bh, [["__scopeId", "data-v-c76b73bd"]]), jh = { class: "stmp-detail-list" }, Vh = {
  key: 0,
  class: "stmp-empty"
}, qh = {
  key: 1,
  class: "stmp-empty"
}, Wh = ["onClick"], zh = { class: "stmp-item-index" }, Gh = { class: "stmp-item-info" }, Kh = { class: "stmp-item-song" }, Yh = {
  key: 0,
  class: "stmp-item-artist"
}, Jh = ["onClick"], Xh = /* @__PURE__ */ pt({
  __name: "PlaylistDetail",
  setup(e) {
    const t = Be(), s = me(() => t.selectedPlaylist), n = me(() => s.value?.songs ?? []), i = me(() => s.value ? t.syncingPlaylistIds.includes(s.value.id) : !1);
    function o(a) {
      t.selectedPlaylistId && t.playFromHere(t.selectedPlaylistId, a);
    }
    function r(a) {
      t.selectedPlaylistId && t.removeFromPlaylist(t.selectedPlaylistId, a);
    }
    return (a, l) => (C(), P("div", jh, [
      i.value && n.value.length === 0 ? (C(), P("div", Vh, M(p(g)("Syncing...")), 1)) : n.value.length === 0 ? (C(), P("div", qh, M(p(g)("No Songs")), 1)) : (C(!0), P(ne, { key: 2 }, Ve(n.value, (c, d) => (C(), P("div", {
        key: c.id,
        class: ue(["stmp-item", { active: p(t).queue.sourcePlaylistId === s.value?.id && p(t).queue.currentIndex === d }]),
        onClick: (h) => o(d)
      }, [
        u("span", zh, M(d + 1), 1),
        u("div", Gh, [
          u("span", Kh, M(c.song), 1),
          c.artist ? (C(), P("span", Yh, M(c.artist), 1)) : ve("", !0)
        ]),
        s.value?.source !== "netease" ? (C(), P("button", {
          key: 0,
          class: "stmp-item-del",
          onClick: nt((h) => r(c.id), ["stop"])
        }, [
          Z(ke, {
            name: "x",
            size: 14
          })
        ], 8, Jh)) : ve("", !0)
      ], 10, Wh))), 128))
    ]));
  }
}), Qh = /* @__PURE__ */ gt(Xh, [["__scopeId", "data-v-91df8339"]]), Zh = { class: "stmp-search" }, ep = {
  key: 0,
  class: "stmp-search-hint"
}, tp = { class: "stmp-search-bar" }, sp = ["placeholder"], np = ["disabled"], ip = {
  key: 0,
  class: "stmp-search-error"
}, op = ["aria-label"], rp = {
  key: 1,
  class: "stmp-search-loading"
}, ap = {
  key: 2,
  class: "stmp-search-empty"
}, lp = {
  key: 3,
  class: "stmp-search-hint"
}, cp = {
  key: 4,
  class: "stmp-results"
}, up = ["onClick"], dp = { class: "stmp-result-name" }, fp = {
  key: 0,
  class: "stmp-result-artist"
}, hp = ["aria-label", "onClick"], pp = /* @__PURE__ */ pt({
  __name: "SearchView",
  setup(e) {
    const t = kf(), s = Be(), n = ge(), i = me(() => n.neteaseStatus === "ok"), o = /* @__PURE__ */ ye(t.keyword), r = /* @__PURE__ */ ye(null);
    async function a() {
      t.setKeyword(o.value);
      const k = Zt(n.settings);
      await t.search(k);
    }
    const l = () => {
      a();
    };
    function c(k) {
      const E = s.getPlaylist(Ht);
      return E ? E.songs.some(
        (T) => T.providerId === k.provider && T.providerTrackId === k.id
      ) : !1;
    }
    function d(k) {
      const E = k.provider + k.id;
      r.value !== E && (r.value = E, s.addFromSearch(k, !0), setTimeout(() => {
        r.value = null;
      }, 600));
    }
    function h(k) {
      c(k) || (s.addFromSearch(k, !1), typeof toastr < "u" && toastr.success(g("Added to playlist"), "晓乐"));
    }
    function w(k) {
      return r.value === k.provider + k.id;
    }
    return (k, E) => (C(), P("div", Zh, [
      i.value ? (C(), P(ne, { key: 1 }, [
        u("div", tp, [
          fs(u("input", {
            "onUpdate:modelValue": E[0] || (E[0] = (T) => o.value = T),
            class: "stmp-search-input",
            placeholder: p(g)("Search Song..."),
            onKeydown: Md(a, ["enter"])
          }, null, 40, sp), [
            [Cd, o.value]
          ]),
          u("button", {
            class: "stmp-icon-btn",
            disabled: p(t).isSearching,
            onClick: a
          }, [
            p(t).isSearching ? (C(), dt(ke, {
              key: 1,
              name: "loader",
              size: 16,
              class: "stmp-spin"
            })) : (C(), dt(ke, {
              key: 0,
              name: "search",
              size: 16
            }))
          ], 8, np)
        ]),
        p(t).error ? (C(), P("div", ip, [
          u("span", null, M(p(t).error), 1),
          u("button", {
            class: "stmp-retry-btn",
            "aria-label": p(g)("Retry"),
            onClick: l
          }, M(p(g)("Retry")), 9, op)
        ])) : ve("", !0),
        p(t).isSearching ? (C(), P("div", rp, M(p(g)("Searching...")), 1)) : o.value && !p(t).results.length ? (C(), P("div", ap, M(p(g)("No results")), 1)) : !o.value && !p(t).results.length ? (C(), P("div", lp, M(p(g)("Type a song name to search")), 1)) : ve("", !0),
        p(t).results.length ? (C(), P("div", cp, [
          (C(!0), P(ne, null, Ve(p(t).results, (T) => (C(), P("div", {
            key: T.provider + T.id,
            class: ue(["stmp-result", { "stmp-result-playing": w(T) }])
          }, [
            u("div", {
              class: "stmp-result-info",
              onClick: (G) => d(T)
            }, [
              u("span", dp, M(T.name), 1),
              T.artist ? (C(), P("span", fp, M(T.artist), 1)) : ve("", !0)
            ], 8, up),
            u("button", {
              class: ue(["stmp-icon-btn stmp-result-add", { added: c(T) }]),
              "aria-label": c(T) ? p(g)("Added") : p(g)("Add to list"),
              onClick: nt((G) => h(T), ["stop"])
            }, [
              Z(ke, {
                name: c(T) ? "check" : "plus",
                size: 16
              }, null, 8, ["name"])
            ], 10, hp)
          ], 2))), 128))
        ])) : ve("", !0)
      ], 64)) : (C(), P("div", ep, [
        Yt(M(p(n).neteaseStatus === "no-cookie" ? p(g)("Cookie not configured") : p(n).neteaseStatus === "invalid" ? p(g)("Cookie invalid") : p(g)("Cookie expired")) + " ", 1),
        E[1] || (E[1] = u("br", null, null, -1)),
        Yt(M(p(g)("Configure in settings")), 1)
      ]))
    ]));
  }
}), gp = /* @__PURE__ */ gt(pp, [["__scopeId", "data-v-563c4b59"]]), mp = { class: "stmp-panel" }, yp = { class: "stmp-topbar stmp-drag-handle" }, vp = ["aria-label"], _p = {
  key: 0,
  class: "stmp-heart-error",
  role: "status"
}, bp = { class: "stmp-cover-large" }, wp = ["src"], kp = {
  key: 1,
  class: "stmp-cover-placeholder"
}, xp = { class: "stmp-track-name" }, Sp = { class: "stmp-track-artist" }, Cp = { class: "stmp-lyric-header" }, Ap = { class: "stmp-track-name" }, Tp = { class: "stmp-track-artist" }, Pp = { class: "stmp-progress" }, Mp = ["value"], Ep = { class: "stmp-time" }, Ip = { class: "stmp-controls" }, Rp = { class: "stmp-ctrl-side stmp-search-side" }, $p = ["disabled", "aria-label"], Op = ["disabled", "aria-label"], Lp = ["disabled", "aria-label"], Np = ["disabled", "aria-label"], Dp = ["disabled", "aria-label"], Fp = ["aria-label"], Up = { class: "stmp-ctrl-side stmp-volume-side" }, Bp = ["aria-label"], Hp = ["value"], jp = {
  key: 0,
  class: "stmp-overlay"
}, Vp = { class: "stmp-overlay-header" }, qp = { class: "stmp-overlay-title" }, Wp = ["aria-label"], zp = { class: "stmp-overlay-body" }, Gp = {
  key: 0,
  class: "stmp-overlay stmp-overlay-detail"
}, Kp = { class: "stmp-overlay-header" }, Yp = { class: "stmp-overlay-title" }, Jp = { class: "stmp-overlay-body" }, Xp = /* @__PURE__ */ pt({
  __name: "PlayerPanel",
  emits: ["collapse"],
  setup(e) {
    const t = Ee(), s = Be(), n = ge(), i = me(
      () => n.settings.widgetMode === "dock" && n.settings.dockAlign.startsWith("top-")
    ), o = /* @__PURE__ */ ye("cover"), r = /* @__PURE__ */ ye(null), a = /* @__PURE__ */ ye(!1), l = /* @__PURE__ */ ye(!1);
    let c = null, d = 0;
    const h = me(() => t.currentTrack?.cover || ""), w = me(() => !!t.currentTrack), k = me(() => n.neteaseStatus), E = me(() => w.value ? "" : k.value === "no-cookie" ? g("Cookie not configured") : k.value === "expired" ? g("Cookie expired") : k.value === "invalid" ? g("Cookie invalid") : g("No Song")), T = me(() => !w.value || k.value !== "ok"), G = () => {
      a.value = !0;
    };
    De(
      () => t.currentTrack,
      () => {
        a.value = !1;
      }
    );
    const Y = me(
      () => t.duration > 0 ? t.currentTime / t.duration * 100 : 0
    ), { scrollY: j, windowRef: X, setLineRef: _, updateScroll: v } = Tl();
    Rs(() => {
      v();
    }), De(() => n.settings.widgetMode, () => {
      v();
    }), De(o, () => {
      v();
    });
    function S(ce) {
      const te = Math.floor(ce / 60), he = Math.floor(ce % 60);
      return te + ":" + he.toString().padStart(2, "0");
    }
    function y(ce) {
      const te = ce.target;
      t.seek(Number(te.value) / 100 * t.duration);
    }
    const D = ["list", "random", "single"], x = {
      list: "repeat",
      random: "shuffle",
      single: "repeat-one"
    }, K = {
      list: "List Loop",
      random: "Random",
      single: "Single Loop"
    };
    function ae() {
      const ce = n.settings.playMode, te = D.indexOf(ce), he = D[(te + 1) % D.length];
      n.setPlayMode(he), typeof toastr < "u" && toastr.info(`${g("Play mode")}：${g(K[he])}`, "晓乐");
    }
    function R(ce) {
      const te = ce.target;
      t.setVolume(Number(te.value));
    }
    function ee() {
      c && clearTimeout(c), l.value = !0;
    }
    function B() {
      c = setTimeout(() => {
        l.value = !1;
      }, 300);
    }
    function I() {
      t.volume > 0 ? (d = t.volume, t.setVolume(0)) : t.setVolume(d || n.settings.volume);
    }
    function b(ce) {
      r.value === ce ? r.value = null : r.value = ce;
    }
    function U() {
      if (s.selectedPlaylistId) {
        s.selectPlaylist(null);
        return;
      }
      r.value = null;
    }
    function W() {
      s.selectedPlaylistId && s.playPlaylist(s.selectedPlaylistId, 0);
    }
    return (ce, te) => (C(), P("div", mp, [
      u("div", yp, [
        te[8] || (te[8] = u("div", { class: "stmp-topbar-spacer" }, null, -1)),
        u("button", {
          class: "stmp-icon-btn",
          "aria-label": p(g)("Collapse panel"),
          onClick: te[0] || (te[0] = nt((he) => ce.$emit("collapse"), ["stop"]))
        }, [
          Z(ke, {
            name: i.value ? "chevron-up" : "chevron-down",
            size: 18
          }, null, 8, ["name"])
        ], 8, vp)
      ]),
      p(s).heartError ? (C(), P("div", _p, M(p(s).heartError), 1)) : ve("", !0),
      u("div", {
        class: "stmp-display",
        onClick: te[1] || (te[1] = (he) => o.value = o.value === "cover" ? "lyric" : "cover")
      }, [
        u("div", {
          class: ue(["stmp-cover-mode", { hidden: o.value !== "cover" }])
        }, [
          u("div", bp, [
            h.value && !a.value ? (C(), P("img", {
              key: 0,
              src: h.value,
              alt: "cover",
              onError: G
            }, null, 40, wp)) : (C(), P("div", kp, [
              Z(ke, {
                name: "music",
                size: 48
              })
            ]))
          ]),
          u("div", xp, M(p(t).currentTrack?.name || E.value), 1),
          u("div", Sp, M((p(t).currentTrack?.artist || "").trim() || " "), 1)
        ], 2),
        u("div", {
          class: ue(["stmp-lyric-mode", { hidden: o.value !== "lyric" }])
        }, [
          u("div", Cp, [
            u("div", Ap, M(p(t).currentTrack?.name || E.value), 1),
            u("div", Tp, M((p(t).currentTrack?.artist || "").trim() || " "), 1)
          ]),
          u("div", {
            ref_key: "lyricWindowRef",
            ref: X,
            class: "stmp-lyric-window"
          }, [
            p(t).lyrics.length > 0 ? (C(), P("div", {
              key: 0,
              class: "stmp-lyric-scroll",
              style: Xt({ transform: `translateY(-${p(j)}px)` })
            }, [
              (C(!0), P(ne, null, Ve(p(t).lyrics, (he, fe) => (C(), P("div", {
                key: fe,
                ref_for: !0,
                ref: (Ae) => p(_)(Ae, fe),
                class: ue(["stmp-lyric-line", { "stmp-lyric-active": fe === p(t).currentLyricIndex }])
              }, M(he.text), 3))), 128))
            ], 4)) : ve("", !0)
          ], 512)
        ], 2)
      ]),
      u("div", Pp, [
        u("input", {
          type: "range",
          min: "0",
          max: "100",
          step: "0.1",
          value: Y.value,
          class: "stmp-range",
          onInput: y
        }, null, 40, Mp),
        u("div", Ep, [
          u("span", null, M(S(p(t).currentTime)), 1),
          u("span", null, M(S(p(t).duration)), 1)
        ])
      ]),
      u("div", Ip, [
        u("div", Rp, [
          u("button", {
            class: ue(["stmp-ctrl-btn", { active: r.value === "search" }]),
            disabled: k.value !== "ok",
            "aria-label": p(g)("Search"),
            onClick: te[2] || (te[2] = nt((he) => b("search"), ["stop"]))
          }, [
            Z(ke, {
              name: "search",
              size: 18
            })
          ], 10, $p),
          Z(Pl, { compact: "" })
        ]),
        u("button", {
          class: "stmp-ctrl-btn",
          disabled: T.value || p(s).heartActive,
          "aria-label": p(g)("Toggle play mode"),
          onClick: ae
        }, [
          Z(ke, {
            name: x[p(n).settings.playMode],
            size: 16
          }, null, 8, ["name"])
        ], 8, Op),
        u("button", {
          class: "stmp-ctrl-btn",
          disabled: T.value,
          "aria-label": p(g)("Previous"),
          onClick: te[3] || (te[3] = (he) => p(s).prev())
        }, [
          Z(ke, {
            name: "prev",
            size: 18
          })
        ], 8, Lp),
        u("button", {
          class: "stmp-ctrl-btn stmp-play-btn",
          disabled: T.value,
          "aria-label": p(t).isPlaying ? p(g)("Pause") : p(g)("Play"),
          onClick: te[4] || (te[4] = (he) => p(t).togglePlay())
        }, [
          Z(ke, {
            name: p(t).isPlaying ? "pause" : "play",
            size: 24
          }, null, 8, ["name"])
        ], 8, Np),
        u("button", {
          class: "stmp-ctrl-btn",
          disabled: T.value,
          "aria-label": p(g)("Next"),
          onClick: te[5] || (te[5] = (he) => p(s).next())
        }, [
          Z(ke, {
            name: "next",
            size: 18
          })
        ], 8, Dp),
        u("button", {
          class: ue(["stmp-ctrl-btn", { active: r.value === "list" }]),
          "aria-label": p(g)("Playlist"),
          onClick: te[6] || (te[6] = nt((he) => b("list"), ["stop"]))
        }, [
          Z(ke, {
            name: "list",
            size: 16
          })
        ], 10, Fp),
        u("div", Up, [
          Z(oh),
          u("div", {
            class: "stmp-volume-container",
            onMouseenter: ee,
            onMouseleave: B
          }, [
            u("button", {
              class: "stmp-ctrl-btn",
              "aria-label": p(g)("Mute / Unmute"),
              onClick: I
            }, [
              Z(ke, {
                name: p(t).volume === 0 ? "volume-mute" : "volume",
                size: 18
              }, null, 8, ["name"])
            ], 8, Bp),
            u("div", {
              class: ue(["stmp-volume-popup", { show: l.value }])
            }, [
              u("input", {
                type: "range",
                min: "0",
                max: "100",
                value: p(t).volume,
                class: "stmp-volume-vertical",
                orient: "vertical",
                onInput: R
              }, null, 40, Hp)
            ], 2)
          ], 32)
        ])
      ]),
      Z(er, { name: "stmp-overlay" }, {
        default: Bi(() => [
          r.value ? (C(), P("div", jp, [
            u("div", Vp, [
              u("span", qp, M(r.value === "list" ? p(g)("Playlist") : p(g)("Search")), 1),
              u("button", {
                class: "stmp-overlay-close",
                "aria-label": p(g)("Close"),
                onClick: nt(U, ["stop"])
              }, [
                Z(ke, {
                  name: "x",
                  size: 16
                })
              ], 8, Wp)
            ]),
            u("div", zp, [
              r.value === "list" ? (C(), dt(Hh, { key: 0 })) : (C(), dt(gp, { key: 1 }))
            ])
          ])) : ve("", !0)
        ]),
        _: 1
      }),
      Z(er, { name: "stmp-overlay" }, {
        default: Bi(() => [
          r.value === "list" && p(s).selectedPlaylist ? (C(), P("div", Gp, [
            u("div", Kp, [
              u("button", {
                class: "stmp-overlay-back",
                onClick: te[7] || (te[7] = nt((he) => p(s).selectPlaylist(null), ["stop"]))
              }, [
                Z(ke, {
                  name: "chevron-left",
                  size: 16
                })
              ]),
              u("span", Yp, M(p(s).selectedPlaylist.name), 1),
              u("button", {
                class: "stmp-overlay-play-btn",
                onClick: nt(W, ["stop"])
              }, [
                Z(ke, {
                  name: "play",
                  size: 14
                })
              ])
            ]),
            u("div", Jp, [
              Z(Qh)
            ])
          ])) : ve("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Pr = /* @__PURE__ */ gt(Xp, [["__scopeId", "data-v-9dfb840c"]]), Qp = {
  key: 1,
  class: "stmp-inline-expanded"
}, Mr = 3, Zp = 500, eg = /* @__PURE__ */ pt({
  __name: "App",
  setup(e) {
    const t = ge(), s = Ee(), n = /* @__PURE__ */ ye(!1), i = /* @__PURE__ */ ye(null);
    let o = null;
    const r = me(() => t.settings.widgetMode === "dock"), a = me(() => t.settings.widgetMode === "inline"), l = me(() => t.settings.widgetMode === "hidden"), c = /* @__PURE__ */ ye(window.innerWidth <= 768), d = /* @__PURE__ */ ye(!1), h = me(() => t.settings.dockAlign.startsWith("top-")), w = me(() => t.settings.customOpacity ? t.settings.opacity : 75), k = (pe) => {
      pe.key === "Escape" && (n.value = !1), pe.key === " " && pe.target === document.body && (pe.preventDefault(), s.togglePlay());
    };
    let E = 0, T = 0, G = 0, Y = 0, j = !1, X = !1, _ = 0, v = !1, S = null, y = null, D = 0, x = 0, K = 0, ae = 0, R = 0, ee = 0, B = 0;
    function I(pe) {
      if (r.value) return;
      const Se = pe.target;
      if (Se.closest("input, .stmp-result, .stmp-item, .stmp-upload-btn, .stmp-search-input, .stmp-controls, .stmp-lyrics, .stmp-overlay, .stmp-display, .stmp-overlay-close") || n.value && (!Se.closest(".stmp-drag-handle") || Se.closest("button")) || !n.value && Se.closest("button"))
        return;
      const Ue = i.value?.getBoundingClientRect();
      if (!Ue) return;
      E = pe.clientX, T = pe.clientY, G = Ue.left, Y = Ue.top, j = !1, X = !0, _ = Date.now(), v = !1, i.value && (i.value.style.left = Ue.left + "px", i.value.style.top = Ue.top + "px", i.value.style.right = "auto", i.value.style.bottom = "auto"), S = b, y = U;
      const Oe = i.value;
      Oe && (D = Oe.offsetWidth || 60, x = Oe.offsetHeight || 40, K = window.innerWidth - D, ae = window.innerHeight - x, document.addEventListener("pointermove", S), document.addEventListener("pointerup", y), pe.preventDefault());
    }
    function b(pe) {
      if (!i.value || !X) return;
      const Se = pe.clientX - E, Ue = pe.clientY - T;
      (Math.abs(Se) > Mr || Math.abs(Ue) > Mr) && (j = !0);
      let Oe = G + Se, Re = Y + Ue;
      Oe = Math.max(0, Math.min(Oe, K)), Re = Math.max(0, Math.min(Re, ae)), ee = Oe, B = Re, R || (R = requestAnimationFrame(() => {
        R = 0, i.value && (i.value.style.left = ee + "px", i.value.style.top = B + "px");
      }));
    }
    function U() {
      X = !1, R && (cancelAnimationFrame(R), R = 0, i.value && (i.value.style.left = ee + "px", i.value.style.top = B + "px")), S && document.removeEventListener("pointermove", S), y && document.removeEventListener("pointerup", y), S = null, y = null;
      const pe = Date.now() - _;
      if (j) {
        if (v = !0, i.value) {
          const Se = i.value.getBoundingClientRect();
          t.setPosition({ x: Se.left, y: Se.top }), n.value && Ke(() => W());
        }
        return;
      }
      if (pe > Zp) {
        v = !0;
        return;
      }
    }
    function W() {
      if (!i.value) return;
      const pe = i.value.getBoundingClientRect(), Se = i.value.offsetWidth, Ue = i.value.offsetHeight;
      let Oe = pe.left, Re = pe.top;
      Oe + Se > window.innerWidth && (Oe = window.innerWidth - Se), Re + Ue > window.innerHeight && (Re = window.innerHeight - Ue), Oe < 0 && (Oe = 0), Re < 0 && (Re = 0), i.value.style.left = Oe + "px", i.value.style.top = Re + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", t.setPosition({ x: Oe, y: Re });
    }
    function ce() {
      if (!i.value || !r.value) return;
      const pe = t.settings.dockAlign, Se = pe.startsWith("top-"), Ue = pe.endsWith("-right"), Oe = Se ? document.querySelector("#top-settings-holder") : document.querySelector("#send_form");
      if (!Oe) return;
      const Re = Oe.getBoundingClientRect(), ts = i.value.offsetHeight || 38;
      if (Se) {
        const ss = Math.max(80, window.innerHeight - Re.bottom - 8);
        i.value.style.maxHeight = ss + "px", i.value.style.top = Re.bottom + "px";
      } else {
        const ss = Math.max(80, Re.top - 8);
        i.value.style.maxHeight = ss + "px";
        let f = Re.top - Math.min(ts, ss);
        f < 4 && (f = 4), i.value.style.top = f + "px";
      }
      if (window.innerWidth <= 768)
        i.value.style.left = Re.left + "px", i.value.style.width = Re.width + "px";
      else {
        const ss = i.value.offsetWidth;
        Ue ? i.value.style.left = Re.right - ss + "px" : i.value.style.left = Re.left + "px", i.value.style.width = "";
      }
      i.value.style.right = "auto", i.value.style.bottom = "auto";
    }
    function te() {
      if (!i.value || r.value) return;
      const pe = t.settings.position;
      pe ? (i.value.style.left = pe.x + "px", i.value.style.top = pe.y + "px", i.value.style.right = "auto", i.value.style.bottom = "auto", window.innerWidth <= 768 && Ke(() => W())) : (i.value.style.left = window.innerWidth - i.value.offsetWidth - 16 + "px", i.value.style.top = "16px", i.value.style.right = "auto", i.value.style.bottom = "auto");
    }
    function he(pe) {
      if (v) {
        v = !1;
        return;
      }
      if (r.value && !n.value) {
        if (pe.target.closest("button, input")) return;
        Ae();
        return;
      }
      if (!r.value && !n.value) {
        if (pe.target.closest("button, input")) return;
        Ae();
      }
    }
    function fe(pe) {
      n.value || pe.target.closest("button, input") || Ae();
    }
    function Ae() {
      n.value = !n.value, Ke(() => {
        r.value ? ce() : a.value || t.settings.position && W();
      });
    }
    De(() => t.settings.widgetMode, (pe) => {
      n.value = !1, i.value && (i.value.style.width = "", i.value.style.left = "", i.value.style.top = "", i.value.style.right = "", i.value.style.bottom = "", i.value.style.maxHeight = ""), pe === "inline" && (d.value = !!document.querySelector("#send_form")), Ke(() => {
        pe === "dock" ? ce() : pe === "drag" && te();
      });
    }), De(() => t.settings.dockAlign, () => {
      r.value && Ke(() => ce());
    }), Rs(() => {
      d.value = !!document.querySelector("#send_form"), Ke(() => {
        r.value ? ce() : a.value || te();
      }), i.value && typeof ResizeObserver < "u" && (o = new ResizeObserver(() => {
        r.value && ce();
      }), o.observe(i.value)), window.addEventListener("resize", it), window.addEventListener("keydown", k);
    });
    function it() {
      c.value = window.innerWidth <= 768, r.value ? Ke(() => ce()) : a.value || Ke(() => W());
    }
    return gn(() => {
      U(), o && (o.disconnect(), o = null), window.removeEventListener("resize", it), window.removeEventListener("keydown", k);
    }), (pe, Se) => a.value ? (C(), P(ne, { key: 0 }, [
      d.value ? (C(), dt(Aa, {
        key: 0,
        to: "#send_form"
      }, [
        n.value ? (C(), P("div", Qp, [
          Z(Pr, { onCollapse: Ae })
        ])) : (C(), P("div", {
          key: 0,
          class: "stmp-inline-bar",
          onClick: fe
        }, [
          Z(Tr, {
            "is-dock": !0,
            "is-mobile": !0
          })
        ]))
      ])) : ve("", !0)
    ], 64)) : l.value ? ve("", !0) : (C(), P("div", {
      key: 1,
      ref_key: "widgetRef",
      ref: i,
      class: ue(["stmp-widget", {
        "stmp-expanded": n.value,
        "stmp-collapsed": !n.value,
        "stmp-dock": r.value,
        "stmp-dock-top": r.value && h.value,
        "stmp-dock-bottom": r.value && !h.value
      }]),
      style: Xt({ "--stmp-opacity": w.value + "%" }),
      onPointerdown: I,
      onClick: he
    }, [
      n.value ? (C(), dt(Pr, {
        key: 1,
        onCollapse: Ae
      })) : (C(), dt(Tr, {
        key: 0,
        "is-dock": r.value,
        "is-mobile": c.value
      }, null, 8, ["is-dock", "is-mobile"]))
    ], 38));
  }
}), tg = /* @__PURE__ */ gt(eg, [["__scopeId", "data-v-cf56cb18"]]);
var bs = class extends Error {
  constructor(e, t) {
    super("".concat(e, " at position ").concat(t)), this.position = t;
  }
};
function sg(e) {
  return /^[0-9A-Fa-f]$/.test(e);
}
function as(e) {
  return e >= "0" && e <= "9";
}
function ng(e) {
  return e >= " ";
}
function Sn(e) {
  return `,:[]/{}()
+`.includes(e);
}
function Er(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$";
}
function Ir(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$" || e >= "0" && e <= "9";
}
var Rr = /^(http|https|ftp|mailto|file|data|irc):\/\/$/, $r = /^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;
function Or(e) {
  return `,[]/{}
+`.includes(e);
}
function Lr(e) {
  return Rn(e) || ig.test(e);
}
var ig = /^[[{\w-]$/;
function og(e) {
  return e === `
` || e === "\r" || e === "	" || e === "\b" || e === "\f";
}
function ds(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 10 || s === 9 || s === 13;
}
function rg(e, t) {
  let s = e.charCodeAt(t);
  return s === 32 || s === 9 || s === 13;
}
function ag(e, t) {
  let s = e.charCodeAt(t);
  return s === 160 || s >= 8192 && s <= 8202 || s === 8239 || s === 8287 || s === 12288;
}
function Rn(e) {
  return Ml(e) || oo(e);
}
function Ml(e) {
  return e === '"' || e === "“" || e === "”";
}
function Nr(e) {
  return e === '"';
}
function oo(e) {
  return e === "'" || e === "‘" || e === "’" || e === "`" || e === "´";
}
function Dr(e) {
  return e === "'";
}
function Us(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = e.lastIndexOf(t);
  return n !== -1 ? e.substring(0, n) + (s ? "" : e.substring(n + 1)) : e;
}
function mt(e, t) {
  let s = e.length;
  if (!ds(e, s - 1)) return e + t;
  for (; ds(e, s - 1); ) s--;
  return e.substring(0, s) + t + e.substring(s);
}
function lg(e, t, s) {
  return e.substring(0, t) + e.substring(t + s);
}
function cg(e) {
  return /[,\n][ \t\r]*$/.test(e);
}
var ug = { "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" }, dg = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
function Fr(e) {
  let t = 0, s = "";
  l(), i() || R(), l();
  let n = c(",");
  for (n && o(), Lr(e[t]) && cg(s) ? (n || (s = mt(s, ",")), T()) : n && (s = Us(s, ",")); e[t] === "}" || e[t] === "]"; ) t++, o();
  if (t >= e.length) return s;
  ae();
  function i() {
    o();
    let b = k() || E() || G() || j() || X() || v(!1) || S();
    return o(), b;
  }
  function o() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, U = t, W = r(b);
    do
      W = a(), W && (W = r(b));
    while (W);
    return t > U;
  }
  function r(b) {
    let U = b ? ds : rg, W = "";
    for (; ; ) if (U(e, t)) W += e[t], t++;
    else if (ag(e, t)) W += " ", t++;
    else break;
    return W.length > 0 ? (s += W, !0) : !1;
  }
  function a() {
    if (e[t] === "/" && e[t + 1] === "*") {
      for (; t < e.length && !fg(e, t); ) t++;
      return t += 2, !0;
    }
    if (e[t] === "/" && e[t + 1] === "/") {
      for (; t < e.length && e[t] !== `
`; ) t++;
      return !0;
    }
    return !1;
  }
  function l() {
    if (e.slice(t, t + 3) === "```") {
      if (t += 3, Er(e[t])) for (; t < e.length && Ir(e[t]); ) t++;
      return o(), !0;
    }
    return !1;
  }
  function c(b) {
    return e[t] === b ? (s += e[t], t++, !0) : !1;
  }
  function d(b) {
    return e[t] === b ? (t++, !0) : !1;
  }
  function h() {
    return d("\\");
  }
  function w() {
    return o(), e[t] === "." && e[t + 1] === "." && e[t + 2] === "." ? (t += 3, o(), d(","), !0) : !1;
  }
  function k() {
    if (e[t] === "{") {
      s += "{", t++, o(), d(",") && o();
      let b = !0;
      for (; t < e.length && e[t] !== "}"; ) {
        let U;
        if (b ? (U = !0, b = !1) : (U = c(","), U || (s = mt(s, ",")), o()), w(), !(G() || v(!0))) {
          e[t] === "}" || e[t] === "{" || e[t] === "]" || e[t] === "[" || e[t] === void 0 ? s = Us(s, ",") : ee();
          break;
        }
        o();
        let W = c(":"), ce = t >= e.length;
        W || (Lr(e[t]) || ce ? s = mt(s, ":") : B()), i() || (W || ce ? s += "null" : B());
      }
      return e[t] === "}" ? (s += "}", t++) : s = mt(s, "}"), !0;
    }
    return !1;
  }
  function E() {
    if (e[t] === "[") {
      s += "[", t++, o(), d(",") && o();
      let b = !0;
      for (; t < e.length && e[t] !== "]"; ) if (b ? b = !1 : c(",") || (s = mt(s, ",")), w(), !i()) {
        s = Us(s, ",");
        break;
      }
      return e[t] === "]" ? (s += "]", t++) : s = mt(s, "]"), !0;
    }
    return !1;
  }
  function T() {
    let b = !0, U = !0;
    for (; U; ) b ? b = !1 : c(",") || (s = mt(s, ",")), U = i();
    U || (s = Us(s, ",")), s = `[
`.concat(s, `
]`);
  }
  function G() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, W = e[t] === "\\";
    if (W && (t++, W = !0), Rn(e[t])) {
      let ce = Nr(e[t]) ? Nr : Dr(e[t]) ? Dr : oo(e[t]) ? oo : Ml, te = t, he = s.length, fe = '"';
      for (t++; ; ) {
        if (t >= e.length) {
          let Ae = y(t - 1);
          return !b && Sn(e.charAt(Ae)) ? (t = te, s = s.substring(0, he), G(!0)) : (fe = mt(fe, '"'), s += fe, !0);
        } else {
          if (t === U) return fe = mt(fe, '"'), s += fe, !0;
          if (ce(e[t])) {
            let Ae = t, it = fe.length;
            if (fe += '"', t++, s += fe, o(!1), b || t >= e.length || Sn(e[t]) || Rn(e[t]) || as(e[t])) return Y(), !0;
            let pe = y(Ae - 1), Se = e.charAt(pe);
            if (Se === ",") return t = te, s = s.substring(0, he), G(!1, pe);
            if (Sn(Se)) return t = te, s = s.substring(0, he), G(!0);
            s = s.substring(0, he), t = Ae + 1, fe = "".concat(fe.substring(0, it), "\\").concat(fe.substring(it));
          } else if (b && Or(e[t])) {
            if (e[t - 1] === ":" && Rr.test(e.substring(te + 1, t + 2))) for (; t < e.length && $r.test(e[t]); ) fe += e[t], t++;
            return fe = mt(fe, '"'), s += fe, Y(), !0;
          } else if (e[t] === "\\") {
            let Ae = e.charAt(t + 1);
            if (dg[Ae] !== void 0) fe += e.slice(t, t + 2), t += 2;
            else if (Ae === "u") {
              let it = 2;
              for (; it < 6 && sg(e[t + it]); ) it++;
              it === 6 ? (fe += e.slice(t, t + 6), t += 6) : t + it >= e.length ? t = e.length : I();
            } else fe += Ae, t += 2;
          } else {
            let Ae = e.charAt(t);
            Ae === '"' && e[t - 1] !== "\\" ? (fe += "\\".concat(Ae), t++) : og(Ae) ? (fe += ug[Ae], t++) : (ng(Ae) || K(Ae), fe += Ae, t++);
          }
        }
        W && h();
      }
    }
    return !1;
  }
  function Y() {
    let b = !1;
    for (o(); e[t] === "+"; ) {
      b = !0, t++, o(), s = Us(s, '"', !0);
      let U = s.length;
      G() ? s = lg(s, U, 1) : s = mt(s, '"');
    }
    return b;
  }
  function j() {
    let b = t;
    if (e[t] === "-") {
      if (t++, D()) return x(b), !0;
      if (!as(e[t])) return t = b, !1;
    }
    for (; as(e[t]); ) t++;
    if (e[t] === ".") {
      if (t++, D()) return x(b), !0;
      if (!as(e[t])) return t = b, !1;
      for (; as(e[t]); ) t++;
    }
    if (e[t] === "e" || e[t] === "E") {
      if (t++, (e[t] === "-" || e[t] === "+") && t++, D()) return x(b), !0;
      if (!as(e[t])) return t = b, !1;
      for (; as(e[t]); ) t++;
    }
    if (!D()) return t = b, !1;
    if (t > b) {
      let U = e.slice(b, t), W = /^0\d/.test(U);
      return s += W ? '"'.concat(U, '"') : U, !0;
    }
    return !1;
  }
  function X() {
    return _("true", "true") || _("false", "false") || _("null", "null") || _("True", "true") || _("False", "false") || _("None", "null");
  }
  function _(b, U) {
    return e.slice(t, t + b.length) === b ? (s += U, t += b.length, !0) : !1;
  }
  function v(b) {
    let U = t;
    if (Er(e[t])) {
      for (; t < e.length && Ir(e[t]); ) t++;
      let W = t;
      for (; ds(e, W); ) W++;
      if (e[W] === "(") return t = W + 1, i(), e[t] === ")" && (t++, e[t] === ";" && t++), !0;
    }
    for (; t < e.length && !Or(e[t]) && !Rn(e[t]) && (!b || e[t] !== ":"); ) t++;
    if (e[t - 1] === ":" && Rr.test(e.substring(U, t + 2))) for (; t < e.length && $r.test(e[t]); ) t++;
    if (t > U) {
      for (; ds(e, t - 1) && t > 0; ) t--;
      let W = e.slice(U, t);
      return s += W === "undefined" ? "null" : JSON.stringify(W), e[t] === '"' && t++, !0;
    }
  }
  function S() {
    if (e[t] === "/") {
      let b = t;
      for (t++; t < e.length && (e[t] !== "/" || e[t - 1] === "\\"); ) t++;
      return t++, s += '"'.concat(e.substring(b, t), '"'), !0;
    }
  }
  function y(b) {
    let U = b;
    for (; U > 0 && ds(e, U); ) U--;
    return U;
  }
  function D() {
    return t >= e.length || Sn(e[t]) || ds(e, t);
  }
  function x(b) {
    s += "".concat(e.slice(b, t), "0");
  }
  function K(b) {
    throw new bs("Invalid character ".concat(JSON.stringify(b)), t);
  }
  function ae() {
    throw new bs("Unexpected character ".concat(JSON.stringify(e[t])), t);
  }
  function R() {
    throw new bs("Unexpected end of json string", e.length);
  }
  function ee() {
    throw new bs("Object key expected", t);
  }
  function B() {
    throw new bs("Colon expected", t);
  }
  function I() {
    let b = e.slice(t, t + 6);
    throw new bs('Invalid unicode character "'.concat(b, '"'), t);
  }
}
function fg(e, t) {
  return e[t] === "*" && e[t + 1] === "/";
}
function hg(e) {
  if (!e) return null;
  let t = e.trim();
  t = t.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "");
  try {
    return JSON.parse(t);
  } catch {
  }
  try {
    const n = Fr(t);
    return JSON.parse(n);
  } catch {
  }
  const s = pg(t);
  if (s)
    try {
      return JSON.parse(s);
    } catch {
      try {
        return JSON.parse(Fr(s));
      } catch {
      }
    }
  return H.warn("Failed to parse JSON after all repair attempts:", e.slice(0, 200)), null;
}
function pg(e) {
  let t = 0, s = -1, n = !1, i = !1;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (i) {
      i = !1;
      continue;
    }
    if (r === "\\" && n) {
      i = !0;
      continue;
    }
    if (r === '"') {
      n = !n;
      continue;
    }
    if (!n) {
      if (r === "{")
        t === 0 && (s = o), t++;
      else if (r === "}" && (t--, t === 0 && s >= 0))
        return e.slice(s, o + 1);
    }
  }
  return null;
}
class gg {
  hasST() {
    return typeof SillyTavern < "u" && typeof SillyTavern.getContext == "function";
  }
  ctx() {
    return SillyTavern.getContext();
  }
  // ===== extensionSettings =====
  getSettings() {
    if (this.hasST())
      return this.ctx().extensionSettings[Ft] ?? null;
    const t = localStorage.getItem(this.settingsKey());
    if (t === null) return null;
    try {
      return JSON.parse(t);
    } catch {
      return H.warn("Failed to parse stored settings:", t), null;
    }
  }
  setSettings(t) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[Ft] = t, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.settingsKey(), JSON.stringify(t));
  }
  // ===== playlist data (separate key in extensionSettings) =====
  getPlaylistData() {
    if (this.hasST())
      return this.ctx().extensionSettings[`${Ft}-playlist`] ?? null;
    const t = localStorage.getItem(this.playlistKey());
    if (t === null) return null;
    try {
      return JSON.parse(t);
    } catch {
      return H.warn("Failed to parse stored playlist data:", t), null;
    }
  }
  setPlaylistData(t) {
    if (this.hasST()) {
      const s = this.ctx();
      s.extensionSettings[`${Ft}-playlist`] = t, s.saveSettingsDebounced();
      return;
    }
    localStorage.setItem(this.playlistKey(), JSON.stringify(t));
  }
  // ===== chatMetadata =====
  getMetadata(t) {
    return this.hasST() ? this.ctx().chatMetadata[t] ?? null : null;
  }
  setMetadata(t, s) {
    if (this.hasST()) {
      const n = this.ctx(), i = n.chatMetadata;
      i[t] = s, n.saveMetadata();
      return;
    }
  }
  // ----- key helpers -----
  settingsKey() {
    return `${Ft}__settings`;
  }
  playlistKey() {
    return `${Ft}__playlist`;
  }
}
function mg() {
  return new gg();
}
const Ft = "st-little-player", To = "stmp_bgm_history", Ur = 50;
function El() {
  const t = ge().storage;
  if (!t) return [];
  const s = t.getMetadata(To);
  return Array.isArray(s) ? s : [];
}
function Po(e, t, s) {
  const n = El();
  n.push({ song: e, artist: t, messageId: s, playedAt: Date.now() }), n.length > Ur && n.splice(0, n.length - Ur);
  const o = ge().storage;
  o && o.setMetadata(To, n);
}
function Il(e) {
  return El().slice(-5).reverse().map((s) => `${s.song}${s.artist ? " - " + s.artist : ""}`);
}
function Rl(e) {
  let t = e;
  try {
    const s = Ee(), n = s.currentTrack?.name ?? "", i = s.currentTrack?.artist ?? "", o = String(s.isPlaying), r = String(!!s.currentTrack), a = Il(5).join(", ");
    t = t.replace(/\{\{xiaoyueCurrentSong\}\}/gi, n).replace(/\{\{xiaoyueCurrentArtist\}\}/gi, i ? " - " + i : "").replace(/\{\{xiaoyueIsPlaying\}\}/gi, o).replace(/\{\{xiaoyueHasTrack\}\}/gi, r).replace(/\{\{xiaoyueRecentPlayed\}\}/gi, a);
  } catch {
  }
  return t;
}
const zn = "<!--XY_BGM_START-->", ro = "<!--XY_BGM_END-->", yg = `You need to manage background music for a roleplay chat session. You have access to tools for searching and playing music.

## Tools

- search_music: Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.
- play_music: Play a song by its search result ID. The ID must come from a prior search_music call result.
- stop_music: Stop the currently playing track. Use only when the scene calls for silence.
- get_current_track: Get the currently playing track info. Use if you need to verify playback state.

## Workflow

1. Analyze the scene's atmosphere, mood, location, time, and emotion from the conversation.
2. If the current track fits, do nothing — return without calling any tool.
3. If a change is needed, call search_music with a specific song name you have in mind.
4. Review the search results. Call play_music with the best match — do not overthink it.
5. If the first search yields no usable result, try ONE more search with a different song name.
6. After the second search, you MUST either call play_music or return without action. Do not search a third time.

## Search Rules

- ALWAYS search with a specific song name (e.g. "River Flows in You", "Darkest Dungeon Theme", "Lemon"). NEVER use vague genre descriptions like "dark dungeon ambient orchestral" or "epic villain theme".
- Prefer songs with vocals over instrumental tracks. If the scene fits a vocal song, choose one.
- If the scene is from a game or anime, search for the actual soundtrack name.
- Chinese song names work for Chinese songs. English song names work for international tracks.

## When to Act

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When NOT to Act

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not call tools on every message.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.
- When uncertain whether to change, keep the current track.`, vg = "## Conversation", _g = "Analyze the above conversation and manage background music using the available tools.", $l = `Background music control is needed for this roleplay session. After writing your narrative, append a BGM marker at the end of your response.

## Output Format (must follow strictly)

After your narrative, append exactly:
${zn}
{"song":"song name","artist":"artist name","action":"play"}
${ro}

For "keep" (no change needed), omit song and artist:
${zn}
{"action":"keep"}
${ro}

The marker will be automatically removed from the visible message. Users will not see it.

## When to Output "play"

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When to Output "keep"

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not output a marker on every response.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.

## Current State
- Now playing: {{xiaoyueCurrentSong}}{{xiaoyueCurrentArtist}}
- Is playing: {{xiaoyueIsPlaying}}
- Recently played: {{xiaoyueRecentPlayed}}`, bg = `Background music control is available for this roleplay session.

## Tools

- search_music: Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.
- play_music: Play a song by its search result ID. The ID must come from a prior search_music result.
- stop_music: Stop the currently playing music. Use only when the scene calls for silence.
- get_current_track: Get the currently playing track info.

## When to Act

- No music is currently playing and a scene is underway. Select an opening track that fits the setting.
- The scene transitions to a new location, time, or emotional state and the current track no longer fits.
- The narrative introduces a significant mood shift (tension, romance, combat, calm, etc.).

## When NOT to Act

- The current track still fits the scene. Unnecessary changes break immersion.
- The mood has not meaningfully changed. Do not call tools on every message.
- You are uncertain whether a change is warranted — keep the current track.

## Guidelines

- You MUST use real, existing song titles that can be found on music streaming platforms. Never invent or guess song names.
- Prefer songs with vocals (songs with singing/lyrics) over pure instrumentals. Vocal tracks create stronger emotional immersion.
- Instrumental tracks, game OSTs, and film scores are acceptable only when no fitting vocal song exists.
- Song and artist names must be exact — a misspelled title cannot be found and will not play.
- Prefer songs in the language of the user's current conversation.
- Avoid repeating recently played songs.

## Current State
- Now playing: {{xiaoyueCurrentSong}}{{xiaoyueCurrentArtist}}
- Is playing: {{xiaoyueIsPlaying}}
- Recently played: {{xiaoyueRecentPlayed}}`, Gn = "search_music", Ol = "Search a music platform for songs by keyword. Returns up to 5 matches with IDs, names, artists, and durations.", Ll = "Search keyword — song name, artist name, or both.", Kn = "play_music", Nl = "Play a song by its search result ID. The ID must come from a prior search_music result. Returns playback status.", Dl = "The ID from a search_music result entry.", Yn = "stop_music", Fl = "Stop the currently playing music. Use only when the scene explicitly calls for silence.", Jn = "get_current_track", Ul = "Get information about the currently playing track, including song name, artist, and playback status.", wg = "播放音乐", kg = "播放音乐: {song}{artist}", xg = "停止音乐", Sg = "停止音乐", Bl = (e) => e.length === 0 ? "No results found. Try different keywords." : JSON.stringify(e.map((t) => ({
  id: t.id,
  name: t.name,
  artist: t.artist,
  ...t.duration ? { duration: t.duration } : {}
}))), Hl = "Missing required parameter: keyword", jl = 'No results found for: "{keyword}". Try different keywords.', Vl = "Missing required parameter: result_id", ql = 'Invalid result_id: "{id}". This ID does not match any prior search result. Call search_music first.', Wl = "Now playing: {name}{artist}", zl = "Music stopped.", Gl = "No music is currently playing.", Kl = (e, t, s) => JSON.stringify({ song: e, artist: t, is_playing: s }), Yl = "No track is currently loaded.";
function Cg() {
  return yg;
}
function Ag(e) {
  const t = [];
  return t.push(vg), t.push(e), t.push(""), t.push(_g), t.join(`
`);
}
function Tg(e, t) {
  return Rl(e && t ? t : $l);
}
function Pg() {
  return Rl(bg);
}
const Mg = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
class Eg {
  constructor() {
    this.interceptor = null, this.onGenerationEndedBound = (t) => {
      this.onGenerationEnded(t);
    };
  }
  init() {
    this.interceptor = (s, n, i, o) => {
      const a = SillyTavern.getContext().extensionSettings["st-little-player"];
      if (!a || a.aiMode !== "together") return;
      const l = ge(), c = Tg(
        l.settings.togetherCustomPromptEnabled,
        l.settings.togetherCustomPrompt
      ), h = (a.togetherPromptRole || "system") === "system";
      s.splice(Math.max(0, s.length - 1), 0, {
        is_user: !h,
        is_system: h,
        name: "晓乐",
        mes: c,
        extra: { isSmallSys: h }
      });
    }, globalThis.xiaoyueInterceptor = this.interceptor;
    const t = SillyTavern.getContext();
    t.eventSource.on(t.event_types.GENERATION_ENDED, this.onGenerationEndedBound), H.info("Together mode initialized");
  }
  destroy() {
    H.info("Together mode destroyed");
    const t = SillyTavern.getContext();
    t.eventSource.removeListener(t.event_types.GENERATION_ENDED, this.onGenerationEndedBound), delete globalThis.xiaoyueInterceptor, this.interceptor = null;
  }
  async onGenerationEnded(t) {
    try {
      const s = SillyTavern.getContext(), n = t > 0 ? t - 1 : 0, i = s.chat[n];
      if (!i) {
        H.warn("Together: GENERATION_ENDED but message not found", { messageId: t, actualId: n, chatLen: s.chat.length });
        return;
      }
      const o = i.mes ?? "", r = o.indexOf(zn);
      if (r === -1) return;
      H.debug("Together: marker found in message " + n);
      const a = o.indexOf(ro, r);
      if (a === -1) {
        H.warn("Together: MARKER_END not found, marker may be truncated");
        return;
      }
      const l = o.slice(r + zn.length, a).trim();
      H.debug("Together: extracted marker content:", l);
      const c = hg(l);
      if (H.debug("Together: parsed recommendation:", c), !c) {
        this.cleanupMarker(n, i);
        return;
      }
      if (c.action === "keep") {
        H.debug("Together: action=keep, no change"), this.cleanupMarker(n, i);
        return;
      }
      if (c.action === "play" && c.song) {
        H.debug("Together: searching for: " + c.song, c.artist);
        const d = ge(), w = await Zt(d.settings).searchAll(c.artist ? `${c.song} ${c.artist}` : c.song);
        w.length > 0 ? (Be().addFromAi(w[0], !0), Po(c.song, c.artist, n), H.debug("Together: playing: " + w[0].name + " - " + w[0].artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${c.song}`, "晓乐")) : (H.warn("Together: track not found: " + c.song), typeof toastr < "u" && toastr.warning(`${g("Cannot play")}：${c.song}`, "晓乐"));
      }
      this.cleanupMarker(n, i);
    } catch (s) {
      H.error("Together: onGenerationEnded error:", s);
    }
  }
  cleanupMarker(t, s) {
    s.mes = (s.mes ?? "").replace(Mg, "").trim();
    const n = SillyTavern.getContext();
    if (typeof n.updateMessageBlock == "function")
      try {
        n.updateMessageBlock(t, s);
      } catch (i) {
        H.warn("Together: failed to update message block", i);
      }
  }
}
let Cn = null;
async function Ig() {
  if (Cn) return Cn;
  try {
    const e = await Function("return import")()(
      /* @vite-ignore */
      "/scripts/extensions/regex/engine.js"
    );
    if (e?.getRegexedString && e?.regex_placement)
      return Cn = e, Cn;
  } catch {
  }
  return null;
}
const Rg = /<!--XY_BGM_START-->[\s\S]*?<!--XY_BGM_END-->/g;
function $g(e) {
  return e.replace(Rg, "").trim();
}
async function Og(e) {
  try {
    const t = SillyTavern.getContext(), s = t.chat;
    if (!s || s.length === 0) return "";
    const n = await Ig(), i = s.slice(-e), o = [];
    for (const r of i) {
      const a = r.is_user ? t.name1 : r.name || t.name2 || "Character";
      let l = r.mes ?? "";
      if (n) {
        const c = r.is_user ? n.regex_placement.USER_INPUT : n.regex_placement.AI_OUTPUT;
        try {
          l = n.getRegexedString(l, c, { isPrompt: !0 });
        } catch {
        }
      }
      l = $g(l), l.trim() && o.push(`${a}: ${l}`);
    }
    return o.join(`

`);
  } catch {
    return "";
  }
}
const Br = 5, Lg = [
  {
    type: "function",
    function: {
      name: Gn,
      description: Ol,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: Ll }
        },
        required: ["keyword"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: Kn,
      description: Nl,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: Dl }
        },
        required: ["result_id"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: Yn,
      description: Fl,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  },
  {
    type: "function",
    function: {
      name: Jn,
      description: Ul,
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];
class gi extends Error {
  constructor(t, s, n) {
    super(s), this.name = "AiApiError", this.kind = t, this.status = n?.status, this.endpoint = n?.endpoint, n?.cause !== void 0 && (this.cause = n.cause);
  }
}
function Ps(e, t) {
  return e instanceof gi && (t === void 0 || e.kind === t);
}
function Ng(e, t) {
  if (!(e instanceof TypeError)) return "unknown";
  try {
    const s = new URL(t);
    return typeof window < "u" && s.origin === window.location.origin ? "network" : "cors";
  } catch {
    return "network";
  }
}
async function Jl(e, t) {
  try {
    return await fetch(e, t);
  } catch (s) {
    const n = Ng(s, e);
    throw new gi(n, Dg(n, e), {
      endpoint: e,
      cause: s
    });
  }
}
function Dg(e, t) {
  switch (e) {
    case "cors":
      return `Endpoint blocked by CORS (browser cannot read response): ${t}`;
    case "network":
      return `Cannot reach endpoint (network error): ${t}`;
    case "http":
      return `Endpoint returned an HTTP error: ${t}`;
    case "unknown":
      return `Request to endpoint failed: ${t}`;
  }
}
async function Fg() {
  const e = ge().settings, t = e.aiApiUrl.replace(/\/$/, "") + "/models", s = await Jl(t, {
    method: "GET",
    headers: {
      ...e.aiApiKey ? { Authorization: `Bearer ${e.aiApiKey}` } : {}
    }
  });
  if (!s.ok) {
    const o = await s.text().catch(() => "");
    throw new gi("http", `${s.status} ${s.statusText}`.trim() + (o ? `: ${o.slice(0, 200)}` : ""), {
      status: s.status,
      endpoint: t
    });
  }
  return ((await s.json())?.data ?? []).map((o) => o.id).filter(Boolean).sort();
}
async function Ug(e) {
  const t = ge().settings, s = t.aiApiUrl.replace(/\/$/, "") + "/chat/completions", n = {
    model: t.aiModel,
    messages: e,
    max_tokens: 4096,
    stream: !1,
    temperature: 0.7,
    tools: Lg,
    tool_choice: "auto",
    thinking: { type: "disabled" }
  };
  H.debug("BGM API request:", { model: t.aiModel, messageCount: e.length });
  const i = await Jl(s, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...t.aiApiKey ? { Authorization: `Bearer ${t.aiApiKey}` } : {}
    },
    body: JSON.stringify(n)
  });
  if (!i.ok) {
    const a = await i.text().catch(() => "");
    throw H.warn("BGM API error: " + i.status, a), new gi("http", `${i.status} ${i.statusText}`.trim() + (a ? `: ${a.slice(0, 200)}` : ""), {
      status: i.status,
      endpoint: s
    });
  }
  const r = (await i.json())?.choices?.[0]?.message;
  return {
    content: r?.content ?? null,
    tool_calls: r?.tool_calls
  };
}
async function Bg(e, t, s) {
  switch (e) {
    case Gn: {
      const n = t.keyword;
      if (!n) return Hl;
      const i = ge(), r = await Zt(i.settings).searchAll(n);
      if (r.length === 0)
        return jl.replace("{keyword}", n);
      const a = r.slice(0, 5);
      for (const c of a)
        s.set(c.id, c);
      const l = Bl(
        a.map((c) => ({
          id: c.id,
          name: c.name,
          artist: c.artist,
          duration: c.duration
        }))
      );
      return H.debug("search_music results: " + a.length + " items for: " + n), l;
    }
    case Kn: {
      const n = t.result_id;
      if (!n) return Vl;
      const i = s.get(n);
      return i ? (Be().addFromAi(i, !0), Po(i.name, i.artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${i.name}`, "晓乐"), H.debug("play_music success: " + i.name + " - " + i.artist), Wl.replace("{name}", i.name).replace("{artist}", i.artist ? " - " + i.artist : "")) : ql.replace("{id}", n);
    }
    case Yn: {
      const n = Ee();
      return n.currentTrack ? (n.pause(), H.debug("stop_music success"), zl) : Gl;
    }
    case Jn: {
      const n = Ee();
      if (!n.currentTrack) return Yl;
      const i = Kl(
        n.currentTrack.name,
        n.currentTrack.artist ?? null,
        n.isPlaying
      );
      return H.debug("get_current_track:", i), i;
    }
    default:
      return `Unknown tool: ${e}`;
  }
}
async function Hg(e, t) {
  const s = [
    { role: "system", content: e },
    { role: "user", content: t }
  ], n = /* @__PURE__ */ new Map();
  for (let i = 0; i < Br; i++) {
    H.debug("BGM agent loop iteration " + (i + 1) + "/" + Br);
    const o = await Ug(s), r = {
      role: "assistant",
      content: o.content,
      ...o.tool_calls ? { tool_calls: o.tool_calls } : {}
    };
    if (s.push(r), !o.tool_calls || o.tool_calls.length === 0) {
      H.debug("BGM agent loop ended — no tool calls"), o.content && H.debug("BGM agent final text:", o.content);
      return;
    }
    for (const a of o.tool_calls) {
      const l = a.function.name;
      let c = {};
      try {
        c = JSON.parse(a.function.arguments || "{}");
      } catch {
        H.warn("Failed to parse tool arguments:", a.function.arguments);
      }
      H.debug("Executing tool: " + l, c);
      const d = await Bg(l, c, n);
      H.debug("Tool result:", d), s.push({
        role: "tool",
        content: d,
        tool_call_id: a.id
      });
    }
  }
  H.warn("BGM agent loop reached max iterations");
}
const Hr = "xiaoyue_fc", An = /* @__PURE__ */ new Map();
class jr {
  constructor() {
    this.isAnalyzing = !1, this.lastTriggerTime = 0, this.destroyed = !1, this.onGenerationStarted = () => {
      An.clear();
    }, this.onCharacterMessageRendered = (t) => {
      const s = ge();
      if (!s.settings.aiAutoTrigger) return;
      const n = SillyTavern.getContext();
      (t <= 0 || n.chat.filter((o) => o.is_user).length === 0) && !s.settings.aiTriggerOnGreeting || this.triggerAgent(t);
    }, this.onMessageSwiped = (t) => {
      const s = ge();
      if (!s.settings.aiAutoTrigger) return;
      const n = Math.floor(s.settings.aiCooldownMs / 2);
      Date.now() - this.lastTriggerTime < n || this.triggerAgent(t, !0);
    };
  }
  init() {
    ge().settings.aiUseCustomApi ? this.initCustomApiPath() : this.initMainApiPath();
  }
  // ===== Main API path: register ST function tools =====
  initMainApiPath() {
    const t = SillyTavern.getContext();
    if (!t.isToolCallingSupported()) {
      H.warn("Function tool calling is not supported by the current API. Switch to custom API or use Together mode.");
      return;
    }
    t.eventSource.on(t.event_types.GENERATION_STARTED, this.onGenerationStarted);
    const s = () => {
      const i = ge();
      return i.settings.aiMode === "function_call" && !i.settings.aiUseCustomApi;
    };
    t.registerFunctionTool({
      name: Gn,
      displayName: "搜索音乐",
      description: Ol,
      parameters: {
        type: "object",
        properties: {
          keyword: { type: "string", description: Ll }
        },
        required: ["keyword"]
      },
      action: async ({ keyword: i }) => {
        if (!i) return Hl;
        const o = ge(), a = await Zt(o.settings).searchAll(i);
        if (a.length === 0)
          return jl.replace("{keyword}", i);
        const l = a.slice(0, 5);
        for (const d of l)
          An.set(d.id, d);
        const c = Bl(
          l.map((d) => ({
            id: d.id,
            name: d.name,
            artist: d.artist,
            duration: d.duration
          }))
        );
        return H.debug("search_music results: " + l.length + " items for: " + i), c;
      },
      formatMessage: ({ keyword: i }) => `搜索音乐: ${i ?? ""}`,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Kn,
      displayName: wg,
      description: Nl,
      parameters: {
        type: "object",
        properties: {
          result_id: { type: "string", description: Dl }
        },
        required: ["result_id"]
      },
      action: async ({ result_id: i }) => {
        if (!i) return Vl;
        const o = An.get(i);
        return o ? (Be().addFromAi(o, !0), Po(o.name, o.artist), typeof toastr < "u" && toastr.success(`${g("AI selected:")}：${o.name}`, "晓乐"), H.debug("play_music success: " + o.name + " - " + o.artist), Wl.replace("{name}", o.name).replace("{artist}", o.artist ? " - " + o.artist : "")) : ql.replace("{id}", i);
      },
      formatMessage: ({ result_id: i }) => kg.replace("{song}", i ?? "").replace("{artist}", ""),
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Yn,
      displayName: xg,
      description: Fl,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const i = Ee();
        return i.currentTrack ? (i.pause(), zl) : Gl;
      },
      formatMessage: () => Sg,
      shouldRegister: s,
      stealth: !0
    }), t.registerFunctionTool({
      name: Jn,
      displayName: "当前播放",
      description: Ul,
      parameters: {
        type: "object",
        properties: {}
      },
      action: async () => {
        const i = Ee();
        return i.currentTrack ? Kl(
          i.currentTrack.name,
          i.currentTrack.artist ?? null,
          i.isPlaying
        ) : Yl;
      },
      formatMessage: () => "获取当前播放",
      shouldRegister: s,
      stealth: !0
    });
    const n = Pg();
    t.setExtensionPrompt(Hr, n, 1, 0, !1, 0), H.info("Function Call (main API): 4 tools registered + aux prompt set");
  }
  // ===== Custom API path: event-driven agent loop =====
  initCustomApiPath() {
    const t = SillyTavern.getContext();
    t.eventSource.on(
      t.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), t.eventSource.on(
      t.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    ), H.info("Function Call (custom API): event listeners registered");
  }
  async manualTrigger() {
    if (this.destroyed || this.isAnalyzing) return;
    const s = SillyTavern.getContext().chat, n = s && s.length > 0 ? s.length - 1 : void 0;
    await this.triggerAgent(n, !0);
  }
  async triggerAgent(t, s = !1) {
    if (this.isAnalyzing) return;
    const n = ge();
    if (!(!s && Date.now() - this.lastTriggerTime < n.settings.aiCooldownMs || SillyTavern.getContext().generationInProgress)) {
      if (!n.settings.aiApiUrl || !n.settings.aiModel) {
        H.warn("Custom API path requires API URL + Model");
        return;
      }
      this.isAnalyzing = !0, this.lastTriggerTime = Date.now(), H.info("BGM agent loop started");
      try {
        const o = await Og(n.settings.aiContextMessages), r = Cg(), a = Ag(o);
        await Hg(r, a);
      } catch (o) {
        if (H.error("AI agent loop failed:", o), typeof toastr < "u")
          if (Ps(o, "cors"))
            toastr.error(g("Endpoint CORS blocked (agent)"), "晓乐");
          else if (Ps(o, "network"))
            toastr.error(g("Endpoint unreachable"), "晓乐");
          else if (Ps(o, "http")) {
            const r = `${o.status ?? ""} ${o.message}`.trim();
            toastr.error(g("Endpoint HTTP error").replace("{detail}", r), "晓乐");
          } else
            toastr.error(g("AI recommendation failed"), "晓乐");
      } finally {
        this.isAnalyzing = !1;
      }
    }
  }
  destroy() {
    const t = ge(), s = t.settings.aiUseCustomApi ? "custom API" : "main API";
    H.info("Function Call destroyed: " + s), this.destroyed = !0;
    const n = SillyTavern.getContext();
    t.settings.aiUseCustomApi ? (n.eventSource.removeListener(
      n.event_types.CHARACTER_MESSAGE_RENDERED,
      this.onCharacterMessageRendered
    ), n.eventSource.removeListener(
      n.event_types.MESSAGE_SWIPED,
      this.onMessageSwiped
    )) : (n.eventSource.removeListener(n.event_types.GENERATION_STARTED, this.onGenerationStarted), n.unregisterFunctionTool(Gn), n.unregisterFunctionTool(Kn), n.unregisterFunctionTool(Yn), n.unregisterFunctionTool(Jn), n.setExtensionPrompt(Hr, "", -1, 0), An.clear());
  }
}
let ao = null;
class jg {
  constructor() {
    this.together = null, this.functionCall = null, this.currentMode = "off";
  }
  init() {
    this.applyMode(ge().settings.aiMode), ao = this, H.info("BGM controller initialized, mode: " + this.currentMode);
  }
  setMode(t) {
    t !== this.currentMode && (H.info("BGM mode changing to: " + t), this.destroyCurrent(), this.applyMode(t));
  }
  resetFunctionCall() {
    this.functionCall && (this.functionCall.destroy(), this.functionCall = new jr(), this.functionCall.init());
  }
  applyMode(t) {
    this.currentMode = t;
    try {
      switch (t) {
        case "function_call":
          this.functionCall = new jr(), this.functionCall.init();
          break;
        case "together":
          this.together = new Eg(), this.together.init();
          break;
        case "off":
        default:
          break;
      }
    } catch (s) {
      H.error("BGM controller: failed to init mode " + t, s);
    }
  }
  destroyCurrent() {
    this.together && (this.together.destroy(), this.together = null), this.functionCall && (this.functionCall.destroy(), this.functionCall = null);
  }
  async manualTrigger() {
    this.functionCall && await this.functionCall.manualTrigger();
  }
  destroy() {
    H.info("BGM controller destroyed"), this.destroyCurrent(), this.currentMode = "off", ao = null;
  }
}
function $n() {
  return ao;
}
const Vg = {
  key: 0,
  class: "stmp-switch-label"
}, qg = { class: "stmp-switch" }, Wg = ["checked", "disabled"], zg = /* @__PURE__ */ pt({
  __name: "ToggleSwitch",
  props: {
    modelValue: { type: Boolean },
    label: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, i = /* @__PURE__ */ ye(null);
    function o() {
      const r = s.modelValue;
      n("update:modelValue", !r), Ke(() => {
        i.value && s.modelValue === r && i.value.checked !== r && (i.value.checked = r);
      });
    }
    return (r, a) => (C(), P("label", {
      class: ue(["stmp-switch-row", { "stmp-switch-disabled": e.disabled }])
    }, [
      e.label ? (C(), P("span", Vg, M(e.label), 1)) : ve("", !0),
      u("span", qg, [
        u("input", {
          ref_key: "inputRef",
          ref: i,
          type: "checkbox",
          checked: e.modelValue,
          disabled: e.disabled,
          onChange: o
        }, null, 40, Wg),
        a[0] || (a[0] = u("span", { class: "stmp-switch-track" }, [
          u("span", { class: "stmp-switch-thumb" })
        ], -1))
      ])
    ], 2));
  }
}), Ct = /* @__PURE__ */ gt(zg, [["__scopeId", "data-v-529649ca"]]), Gg = ["value", "placeholder", "readonly"], Kg = ["onMousedown", "onMouseenter"], Yg = /* @__PURE__ */ pt({
  __name: "ComboBox",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, i = /* @__PURE__ */ ye(null), o = /* @__PURE__ */ ye(null), r = /* @__PURE__ */ ye(!1), a = /* @__PURE__ */ ye(-1), l = /* @__PURE__ */ ye({}), c = me(() => s.options), d = me(() => s.options.length > 0);
    function h() {
      const v = o.value;
      if (!v) return;
      const S = v.getBoundingClientRect();
      l.value = {
        position: "fixed",
        left: `${S.left}px`,
        top: `${S.bottom + 2}px`,
        width: `${S.width}px`,
        zIndex: "10000"
      };
    }
    function w() {
      s.options.length !== 0 && (r.value = !0, a.value = -1, Ke(h));
    }
    function k() {
      r.value = !1, a.value = -1;
    }
    function E() {
      r.value ? k() : w();
    }
    function T(v) {
      n("update:modelValue", v), k();
    }
    function G(v) {
      n("update:modelValue", v.target.value), !r.value && s.options.length > 0 && (r.value = !0), a.value = -1, Ke(h);
    }
    function Y(v) {
      if (!r.value) return;
      const S = c.value;
      v.key === "ArrowDown" ? (v.preventDefault(), a.value = Math.min(a.value + 1, S.length - 1)) : v.key === "ArrowUp" ? (v.preventDefault(), a.value = Math.max(a.value - 1, 0)) : v.key === "Enter" ? a.value >= 0 && a.value < S.length ? (v.preventDefault(), T(S[a.value])) : k() : v.key === "Escape" && (v.preventDefault(), k());
    }
    function j(v) {
      const S = v.target;
      i.value?.contains(S) || document.getElementById("stmp-combobox-dropdown")?.contains(S) || k();
    }
    function X() {
      r.value && k();
    }
    function _() {
      r.value && Ke(h);
    }
    return Rs(() => {
      document.addEventListener("mousedown", j, !0), window.addEventListener("scroll", X, !0), window.addEventListener("resize", _);
    }), gn(() => {
      document.removeEventListener("mousedown", j, !0), window.removeEventListener("scroll", X, !0), window.removeEventListener("resize", _);
    }), De(() => s.modelValue, (v) => {
      o.value && o.value.value !== v && (o.value.value = v);
    }), (v, S) => (C(), P("div", {
      ref_key: "rootRef",
      ref: i,
      class: ue(["stmp-combobox", { "has-options": e.options.length > 0 }])
    }, [
      u("input", {
        ref_key: "inputRef",
        ref: o,
        class: "text_pole",
        type: "text",
        value: e.modelValue,
        placeholder: e.placeholder,
        readonly: d.value,
        autocomplete: "off",
        onFocus: w,
        onInput: G,
        onKeydown: Y
      }, null, 40, Gg),
      e.options.length > 0 ? (C(), P("i", {
        key: 0,
        class: ue(["fa-solid fa-chevron-down stmp-combobox-arrow", { rotated: r.value }]),
        onMousedown: nt(E, ["prevent"])
      }, null, 34)) : ve("", !0),
      (C(), dt(Aa, { to: "body" }, [
        r.value && c.value.length > 0 ? (C(), P("div", {
          key: 0,
          id: "stmp-combobox-dropdown",
          class: "stmp-combobox-dropdown",
          style: Xt(l.value)
        }, [
          (C(!0), P(ne, null, Ve(c.value, (y, D) => (C(), P("div", {
            key: y,
            class: ue(["stmp-combobox-option", { active: D === a.value }]),
            onMousedown: nt((x) => T(y), ["prevent"]),
            onMouseenter: (x) => a.value = D
          }, M(y), 43, Kg))), 128))
        ], 4)) : ve("", !0)
      ]))
    ], 2));
  }
}), Jg = /* @__PURE__ */ gt(Yg, [["__scopeId", "data-v-804fa027"]]), Xg = { class: "stmp-settings" }, Qg = { class: "stmp-tab-bar" }, Zg = ["onClick"], em = { class: "stmp-tab-content" }, tm = { class: "stmp-tab-panel" }, sm = { class: "stmp-row" }, nm = { class: "stmp-row-info" }, im = { class: "stmp-row-title" }, om = { class: "stmp-row-desc" }, rm = { class: "stmp-chips" }, am = ["onClick"], lm = {
  key: 0,
  class: "stmp-row"
}, cm = { class: "stmp-row-info" }, um = { class: "stmp-row-title" }, dm = { class: "stmp-row-desc" }, fm = { class: "stmp-chips" }, hm = ["onClick"], pm = {
  key: 1,
  class: "stmp-row"
}, gm = { class: "stmp-row-info" }, mm = { class: "stmp-row-title" }, ym = { class: "stmp-row-desc" }, vm = {
  key: 2,
  class: "stmp-row"
}, _m = { class: "stmp-row-info" }, bm = { class: "stmp-row-title" }, wm = { class: "stmp-row-desc" }, km = {
  key: 3,
  class: "stmp-row"
}, xm = { class: "stmp-row-info" }, Sm = { class: "stmp-row-title" }, Cm = { class: "stmp-slider-wrap" }, Am = ["value"], Tm = { class: "stmp-slider-val" }, Pm = { class: "stmp-tab-panel" }, Mm = { class: "stmp-section-header" }, Em = { class: "stmp-section-title" }, Im = { class: "stmp-row" }, Rm = { class: "stmp-row-info" }, $m = { class: "stmp-row-title" }, Om = { class: "stmp-slider-wrap" }, Lm = ["value"], Nm = { class: "stmp-slider-val" }, Dm = { class: "stmp-row" }, Fm = { class: "stmp-row-info" }, Um = { class: "stmp-row-title" }, Bm = { class: "stmp-chips" }, Hm = ["onClick"], jm = { class: "stmp-row" }, Vm = { class: "stmp-row-info" }, qm = { class: "stmp-row-title" }, Wm = { class: "stmp-row-desc" }, zm = { class: "stmp-section-header" }, Gm = { class: "stmp-section-title" }, Km = { class: "stmp-row" }, Ym = { class: "stmp-row-info" }, Jm = { class: "stmp-row-title" }, Xm = { class: "stmp-row-desc" }, Qm = { class: "stmp-chips" }, Zm = ["onClick"], ey = {
  key: 0,
  class: "stmp-row"
}, ty = { class: "stmp-row-info" }, sy = { class: "stmp-row-title" }, ny = { class: "stmp-row-desc" }, iy = ["value", "placeholder"], oy = { class: "stmp-row" }, ry = { class: "stmp-row-info" }, ay = { class: "stmp-row-title" }, ly = ["title"], cy = { class: "stmp-row-desc" }, uy = { class: "stmp-model-wrap" }, dy = ["value", "placeholder"], fy = { class: "stmp-row" }, hy = { class: "stmp-row-info" }, py = { class: "stmp-row-title" }, gy = { class: "stmp-row-desc" }, my = { class: "stmp-tab-panel" }, yy = { class: "stmp-row" }, vy = { class: "stmp-row-info" }, _y = { class: "stmp-row-title" }, by = { class: "stmp-row-desc" }, wy = { class: "stmp-row" }, ky = { class: "stmp-row-info" }, xy = { class: "stmp-row-title" }, Sy = { class: "stmp-row-desc" }, Cy = { class: "stmp-chips" }, Ay = ["onClick"], Ty = { class: "stmp-row" }, Py = { class: "stmp-row-info" }, My = { class: "stmp-row-title" }, Ey = { class: "stmp-row-desc" }, Iy = { class: "stmp-row" }, Ry = { class: "stmp-row-info" }, $y = { class: "stmp-row-title" }, Oy = { class: "stmp-row-desc" }, Ly = ["value"], Ny = { class: "stmp-row" }, Dy = { class: "stmp-row-info" }, Fy = { class: "stmp-row-title" }, Uy = { class: "stmp-row-desc" }, By = ["value"], Hy = { class: "stmp-row" }, jy = { class: "stmp-row-info" }, Vy = { class: "stmp-row-title" }, qy = { class: "stmp-row-desc" }, Wy = { class: "stmp-model-wrap" }, zy = ["title"], Gy = { class: "stmp-row" }, Ky = { class: "stmp-row-info" }, Yy = { class: "stmp-row-title" }, Jy = { class: "stmp-row-desc" }, Xy = { class: "stmp-slider-wrap" }, Qy = ["value"], Zy = { class: "stmp-slider-val" }, ev = { class: "stmp-row" }, tv = { class: "stmp-row-info" }, sv = { class: "stmp-row-title" }, nv = { class: "stmp-row-desc" }, iv = {
  key: 0,
  class: "stmp-row"
}, ov = { class: "stmp-row-info" }, rv = { class: "stmp-row-title" }, av = { class: "stmp-row-desc" }, lv = { class: "stmp-row" }, cv = { class: "stmp-row-info" }, uv = { class: "stmp-row-title" }, dv = { class: "stmp-row-desc" }, fv = { class: "stmp-chips" }, hv = ["onClick"], pv = { class: "stmp-row" }, gv = { class: "stmp-row-info" }, mv = { class: "stmp-row-title" }, yv = { class: "stmp-row-desc" }, vv = {
  key: 0,
  class: "stmp-row"
}, _v = { class: "stmp-row-info" }, bv = { class: "stmp-row-title" }, wv = { class: "stmp-row-desc" }, kv = ["title"], xv = { class: "stmp-tab-panel" }, Sv = { class: "stmp-row" }, Cv = { class: "stmp-row-info" }, Av = { class: "stmp-row-title" }, Tv = { class: "stmp-row-desc" }, Pv = { class: "stmp-row" }, Mv = { class: "stmp-row-info" }, Ev = { class: "stmp-row-title" }, Iv = { class: "stmp-row-desc" }, Rv = { class: "stmp-row" }, $v = { class: "stmp-row-info" }, Ov = { class: "stmp-row-title" }, Lv = { class: "stmp-row-desc" }, Nv = { class: "stmp-about" }, Dv = { class: "stmp-about-version" }, Fv = { class: "stmp-about-desc" }, Uv = "https://github.com/vvb7456/ST-little-player", Bv = /* @__PURE__ */ pt({
  __name: "SettingsView",
  setup(e) {
    const t = ge(), s = /* @__PURE__ */ ye("appearance"), n = [
      { id: "appearance", label: g("Appearance"), icon: "fa-solid fa-palette" },
      { id: "playback", label: g("Playback"), icon: "fa-solid fa-music" },
      { id: "ai", label: g("AI"), icon: "fa-solid fa-wand-magic-sparkles" },
      { id: "general", label: g("General"), icon: "fa-solid fa-sliders" }
    ], i = [
      { value: "dock", label: g("Dock"), icon: "fa-solid fa-grip-lines" },
      { value: "drag", label: g("Drag"), icon: "fa-solid fa-up-down-left-right" },
      { value: "inline", label: g("Inline"), icon: "fa-solid fa-puzzle-piece" },
      { value: "hidden", label: g("Hidden"), icon: "fa-solid fa-eye-slash" }
    ], o = [
      { value: "top-left", label: g("Top Left"), icon: "fa-solid fa-arrow-up-from-left" },
      { value: "top-right", label: g("Top Right"), icon: "fa-solid fa-arrow-up-from-right" },
      { value: "bottom-left", label: g("Bottom Left"), icon: "fa-solid fa-arrow-down-from-left" },
      { value: "bottom-right", label: g("Bottom Right"), icon: "fa-solid fa-arrow-down-from-right" }
    ], r = () => t.settings.widgetMode === "dock" || t.settings.widgetMode === "drag";
    function a(B) {
      const I = B.target;
      t.setOpacity(Number(I.value));
    }
    const l = [
      { value: "list", label: g("List Loop"), icon: "fa-solid fa-repeat" },
      { value: "random", label: g("Random"), icon: "fa-solid fa-shuffle" },
      { value: "single", label: g("Single Loop"), icon: "fa-solid fa-repeat" }
    ];
    function c(B) {
      const I = B.target;
      t.setVolume(Number(I.value));
    }
    const d = [
      { value: "worker", label: g("Official Worker") },
      { value: "self", label: g("Self-hosted") }
    ], h = [
      { value: "together", label: g("Together"), icon: "fa-solid fa-link" },
      { value: "function_call", label: g("Function Call"), icon: "fa-solid fa-screwdriver-wrench" }
    ];
    function w(B) {
      t.setAiMode(B), $n()?.setMode(B);
    }
    function k(B) {
      t.setAiUseCustomApi(B), $n()?.resetFunctionCall();
    }
    function E(B) {
      const I = B ? "function_call" : "off";
      t.setAiMode(I), $n()?.setMode(I);
    }
    function T(B) {
      const I = B.target;
      t.setAiContextMessages(Number(I.value));
    }
    const G = /* @__PURE__ */ ye([]), Y = /* @__PURE__ */ ye(!1);
    async function j() {
      if (Y.value) return;
      if (!t.settings.aiApiUrl) {
        typeof toastr < "u" && toastr.warning(g("Please fill API URL"), "晓乐");
        return;
      }
      Y.value = !0;
      try {
        const I = await Fg();
        G.value = I, I.length === 0 ? typeof toastr < "u" && toastr.info(g("No models returned"), "晓乐") : typeof toastr < "u" && toastr.success(`${g("models found")} ${I.length} 个模型`, "晓乐");
      } catch (I) {
        if (H.error("Failed to fetch models:", I), typeof toastr < "u")
          if (Ps(I, "cors"))
            toastr.error(g("Endpoint CORS blocked"), "晓乐");
          else if (Ps(I, "network"))
            toastr.error(g("Endpoint unreachable"), "晓乐");
          else if (Ps(I, "http")) {
            const b = `${I.status ?? ""} ${I.message}`.trim();
            toastr.error(g("Endpoint HTTP error").replace("{detail}", b), "晓乐");
          } else
            toastr.error(g("Failed to fetch models"), "晓乐");
      } finally {
        Y.value = !1;
      }
    }
    function X() {
      const B = t.settings.providers.find((I) => I.id === "local");
      if (B) {
        if (!B.enabled) {
          const I = SillyTavern.getContext();
          if (I?.callGenericPopup && I?.POPUP_TYPE) {
            I.callGenericPopup(
              g("Upload warning text"),
              I.POPUP_TYPE.CONFIRM,
              "",
              { okButton: g("Confirm"), cancelButton: g("Cancel") }
            ).then((b) => {
              b === 1 && (B.enabled = !0, t.save(), typeof toastr < "u" && toastr.info(g("Source enabled"), "晓乐"));
            });
            return;
          }
        }
        B.enabled = !B.enabled, t.save(), typeof toastr < "u" && toastr.info(B.enabled ? g("Source enabled") : g("Source disabled"), "晓乐");
      }
    }
    const _ = /* @__PURE__ */ ye(!1), v = me(() => {
      const B = t.neteaseStatus;
      return B === "no-cookie" ? { icon: "fa-solid fa-link", ok: !1, warn: !1 } : B === "expired" ? { icon: "fa-solid fa-triangle-exclamation", ok: !1, warn: !0 } : B === "invalid" ? { icon: "fa-solid fa-triangle-exclamation", ok: !1, warn: !0 } : { icon: "fa-solid fa-circle-check", ok: !0, warn: !1 };
    }), S = me(() => !!t.settings.neteaseCookie);
    async function y() {
      if (_.value) return;
      const B = t.settings.neteaseCookie.trim();
      if (!B) {
        typeof toastr < "u" && toastr.warning(g("Cookie invalid or expired"), "晓乐");
        return;
      }
      _.value = !0;
      try {
        const I = t.settings.neteaseMode === "worker" ? Sl : t.settings.neteaseWorkerURL;
        if (!I) {
          typeof toastr < "u" && toastr.warning(g("Worker URL"), "晓乐");
          return;
        }
        const U = await (await fetch(`${I}/auth`, {
          headers: { "X-Netease-Cookie": B }
        })).json();
        U?.success && U?.data?.valid ? (t.setNeteaseCookie(B), typeof toastr < "u" && toastr.success(g("Cookie valid"), "晓乐")) : (t.setNeteaseCookieInvalid(), typeof toastr < "u" && toastr.error(g("Cookie invalid or expired"), "晓乐"));
      } catch (I) {
        H.error("NetEase cookie verify failed:", I), typeof toastr < "u" && toastr.error(g("Cannot reach Worker"), "晓乐");
      } finally {
        _.value = !1;
      }
    }
    function D(B) {
      const I = B.target.value.trim();
      t.setNeteaseCookie(I);
    }
    const x = ["aiApiUrl", "aiApiKey", "aiModel", "neteaseCookie", "neteaseCookieAt", "neteaseCookieValid"], K = () => {
      const B = {};
      for (const [W, ce] of Object.entries(t.settings))
        x.includes(W) || (B[W] = ce);
      const I = new Blob([JSON.stringify(B, null, 2)], { type: "application/json" }), b = URL.createObjectURL(I), U = document.createElement("a");
      U.href = b, U.download = "st-little-player-settings.json", U.click(), URL.revokeObjectURL(b), typeof toastr < "u" && toastr.success(g("Settings exported"), "晓乐");
    }, ae = () => {
      const B = document.createElement("input");
      B.type = "file", B.accept = ".json", B.onchange = async (I) => {
        const b = I.target.files?.[0];
        if (!b) return;
        const U = await b.text();
        try {
          const W = JSON.parse(U);
          if (typeof W != "object" || W === null) throw new Error("Not an object");
          const ce = ["volume", "playMode", "crossfade", "position", "widgetMode", "dockAlign", "showDragMiniText", "providers", "customOpacity", "opacity", "aiMode", "aiUseCustomApi", "aiContextMessages", "aiAutoTrigger", "aiTriggerOnGreeting", "aiCooldownMs", "togetherPromptRole", "togetherCustomPromptEnabled", "togetherCustomPrompt", "debug", "neteaseMode", "neteaseWorkerURL"], te = {};
          for (const he of ce)
            he in W && (te[he] = W[he]);
          if (typeof te.volume != "number" || te.volume < 0 || te.volume > 100)
            throw new Error("Invalid volume");
          if (typeof te.playMode != "string" || !["list", "random", "single"].includes(te.playMode))
            throw new Error("Invalid playMode");
          if (te.providers && !Array.isArray(te.providers))
            throw new Error("Invalid providers");
          Object.assign(t.settings, te), t.save(), typeof toastr < "u" && toastr.success(g("Settings imported"), "晓乐");
        } catch (W) {
          H.error("Settings import failed:", W), typeof toastr < "u" && toastr.error(`${g("Import failed")}：${W instanceof Error ? W.message : g("Invalid JSON")}`, "晓乐");
        }
      }, B.click();
    }, R = "0.3.1-beta";
    async function ee() {
      const B = SillyTavern.getContext(), I = t.settings.togetherCustomPrompt || $l, b = ["{{xiaoyueCurrentSong}}", "{{xiaoyueCurrentArtist}}", "{{xiaoyueIsPlaying}}", "{{xiaoyueHasTrack}}", "{{xiaoyueRecentPlayed}}"], U = `<div style="margin-bottom:6px;font-size:0.85em;opacity:0.8">${g("The prompt must contain the markers")} <code class="stmp-macro-hint">&lt;!--XY_BGM_START--&gt;</code> / <code class="stmp-macro-hint">&lt;!--XY_BGM_END--&gt;</code> ${g("for BGM control to work.")}</div>`, W = b.map((fe) => `<code class="stmp-macro-hint">${fe}</code>`).join(" "), ce = `<div style="margin-bottom:8px;font-size:0.85em;opacity:0.7">${g("Available macros:")} ${W}</div>`, te = U + ce;
      $("#dialogue_popup_cancel").css("display", "flex"), $("#dialogue_popup_controls .menu_button").css("width", "unset");
      const he = await B.callPopup(te, "input", I, { wide: !0, rows: 20, okButton: g("Save") });
      he !== !1 && t.setTogetherCustomPrompt(String(he).trim());
    }
    return (B, I) => (C(), P("div", Xg, [
      u("div", Qg, [
        (C(), P(ne, null, Ve(n, (b) => u("div", {
          key: b.id,
          class: ue(["stmp-tab", { active: s.value === b.id }]),
          onClick: (U) => s.value = b.id
        }, [
          u("i", {
            class: ue(b.icon)
          }, null, 2),
          u("span", null, M(b.label), 1)
        ], 10, Zg)), 64))
      ]),
      u("div", em, [
        fs(u("div", tm, [
          u("div", sm, [
            u("div", nm, [
              u("div", im, M(p(g)("Widget Mode")), 1),
              u("div", om, M(p(g)("Choose how the player widget is displayed")), 1)
            ]),
            u("div", rm, [
              (C(), P(ne, null, Ve(i, (b) => u("div", {
                key: b.value,
                class: ue(["stmp-chip", { active: p(t).settings.widgetMode === b.value }]),
                onClick: (U) => p(t).setWidgetMode(b.value)
              }, [
                u("i", {
                  class: ue(b.icon)
                }, null, 2),
                u("span", null, M(b.label), 1)
              ], 10, am)), 64))
            ])
          ]),
          p(t).settings.widgetMode === "dock" ? (C(), P("div", lm, [
            u("div", cm, [
              u("div", um, M(p(g)("Dock Alignment")), 1),
              u("div", dm, M(p(g)("Align the docked player to a corner of the screen")), 1)
            ]),
            u("div", fm, [
              (C(), P(ne, null, Ve(o, (b) => u("div", {
                key: b.value,
                class: ue(["stmp-chip", { active: p(t).settings.dockAlign === b.value }]),
                onClick: (U) => p(t).setDockAlign(b.value)
              }, [
                u("i", {
                  class: ue(b.icon)
                }, null, 2),
                u("span", null, M(b.label), 1)
              ], 10, hm)), 64))
            ])
          ])) : ve("", !0),
          p(t).settings.widgetMode === "drag" ? (C(), P("div", pm, [
            u("div", gm, [
              u("div", mm, M(p(g)("Show track info in drag mini")), 1),
              u("div", ym, M(p(g)("Show song title and lyrics in the compact drag widget")), 1)
            ]),
            Z(Ct, {
              "model-value": p(t).settings.showDragMiniText,
              "onUpdate:modelValue": p(t).setShowDragMiniText
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : ve("", !0),
          r() ? (C(), P("div", vm, [
            u("div", _m, [
              u("div", bm, M(p(g)("Custom opacity")), 1),
              u("div", wm, M(p(g)("Adjust the player background opacity")), 1)
            ]),
            Z(Ct, {
              "model-value": p(t).settings.customOpacity,
              "onUpdate:modelValue": p(t).setCustomOpacity
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ])) : ve("", !0),
          p(t).settings.customOpacity ? (C(), P("div", km, [
            u("div", xm, [
              u("div", Sm, M(p(g)("Opacity")), 1)
            ]),
            u("div", Cm, [
              u("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: p(t).settings.opacity,
                onInput: a
              }, null, 40, Am),
              u("span", Tm, M(p(t).settings.opacity) + "%", 1)
            ])
          ])) : ve("", !0)
        ], 512), [
          [xs, s.value === "appearance"]
        ]),
        fs(u("div", Pm, [
          u("div", Mm, [
            u("div", Em, M(p(g)("Playback Settings")), 1)
          ]),
          u("div", Im, [
            u("div", Rm, [
              u("div", $m, M(p(g)("Default Volume")), 1)
            ]),
            u("div", Om, [
              u("input", {
                type: "range",
                class: "stmp-slider",
                min: "0",
                max: "100",
                value: p(t).settings.volume,
                onInput: c
              }, null, 40, Lm),
              u("span", Nm, M(p(t).settings.volume), 1)
            ])
          ]),
          u("div", Dm, [
            u("div", Fm, [
              u("div", Um, M(p(g)("Default Play Mode")), 1)
            ]),
            u("div", Bm, [
              (C(), P(ne, null, Ve(l, (b) => u("div", {
                key: b.value,
                class: ue(["stmp-chip", { active: p(t).settings.playMode === b.value }]),
                onClick: (U) => p(t).setPlayMode(b.value)
              }, [
                u("i", {
                  class: ue(b.icon)
                }, null, 2),
                u("span", null, M(b.label), 1)
              ], 10, Hm)), 64))
            ])
          ]),
          u("div", jm, [
            u("div", Vm, [
              u("div", qm, M(p(g)("Crossfade")), 1),
              u("div", Wm, M(p(g)("Smoothly fade in when starting playback and fade out when pausing or switching tracks")), 1)
            ]),
            Z(Ct, {
              "model-value": p(t).settings.crossfade,
              "onUpdate:modelValue": p(t).setCrossfade
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          u("div", zm, [
            u("div", Gm, M(p(g)("Data Sources")), 1)
          ]),
          u("div", Km, [
            u("div", Ym, [
              u("div", Jm, M(p(g)("NetEase Music")), 1),
              u("div", Xm, M(p(g)("Select official or self-hosted Worker")), 1)
            ]),
            u("div", Qm, [
              (C(), P(ne, null, Ve(d, (b) => u("div", {
                key: b.value,
                class: ue(["stmp-chip", { active: p(t).settings.neteaseMode === b.value }]),
                onClick: (U) => p(t).setNeteaseMode(b.value)
              }, [
                u("span", null, M(b.label), 1)
              ], 10, Zm)), 64))
            ])
          ]),
          p(t).settings.neteaseMode === "self" ? (C(), P("div", ey, [
            u("div", ty, [
              u("div", sy, M(p(g)("Worker URL")), 1),
              u("div", ny, M(p(g)("Your Cloudflare Worker deployment URL")), 1)
            ]),
            u("input", {
              class: "text_pole stmp-text-input",
              value: p(t).settings.neteaseWorkerURL,
              placeholder: p(g)("Worker URL"),
              onChange: I[0] || (I[0] = (b) => p(t).setNeteaseWorkerURL(b.target.value))
            }, null, 40, iy)
          ])) : ve("", !0),
          u("div", oy, [
            u("div", ry, [
              u("div", ay, [
                Yt(M(p(g)("MUSIC_U Cookie")) + " ", 1),
                u("i", {
                  class: "fa-solid fa-circle-info stmp-help-tip",
                  title: p(g)("Cookie privacy hint")
                }, null, 8, ly)
              ]),
              u("div", cy, M(p(g)("Paste cookie from music.163.com")), 1)
            ]),
            u("div", uy, [
              u("input", {
                type: "password",
                class: "text_pole",
                value: p(t).settings.neteaseCookie,
                placeholder: S.value ? "••••••••" : p(g)("Paste MUSIC_U cookie value here"),
                onChange: D
              }, null, 40, dy),
              u("div", {
                class: ue(["menu_button menu_button_icon stmp-action-btn", { "stmp-spin": _.value, "stmp-verify-ok": v.value.ok, "stmp-verify-warn": v.value.warn }]),
                onClick: y
              }, [
                u("i", {
                  class: ue(v.value.icon)
                }, null, 2)
              ], 2)
            ])
          ]),
          u("div", fy, [
            u("div", hy, [
              u("div", py, M(p(g)("Upload")), 1),
              u("div", gy, M(p(g)("Upload and play songs from the server")), 1)
            ]),
            Z(Ct, {
              "model-value": !!p(t).settings.providers.find((b) => b.id === "local")?.enabled,
              "onUpdate:modelValue": X
            }, null, 8, ["model-value"])
          ])
        ], 512), [
          [xs, s.value === "playback"]
        ]),
        fs(u("div", my, [
          u("div", yy, [
            u("div", vy, [
              u("div", _y, M(p(g)("AI BGM")), 1),
              u("div", by, M(p(g)("Enable AI-driven background music selection")), 1)
            ]),
            Z(Ct, {
              "model-value": p(t).settings.aiMode !== "off",
              "onUpdate:modelValue": I[1] || (I[1] = (b) => E(b))
            }, null, 8, ["model-value"])
          ]),
          p(t).settings.aiMode !== "off" ? (C(), P(ne, { key: 0 }, [
            u("div", wy, [
              u("div", ky, [
                u("div", xy, M(p(g)("AI Mode")), 1),
                u("div", Sy, M(p(g)("Choose how AI selects background music")), 1)
              ]),
              u("div", Cy, [
                (C(), P(ne, null, Ve(h, (b) => u("div", {
                  key: b.value,
                  class: ue(["stmp-chip", { active: p(t).settings.aiMode === b.value }]),
                  onClick: (U) => w(b.value)
                }, [
                  u("i", {
                    class: ue(b.icon)
                  }, null, 2),
                  u("span", null, M(b.label), 1)
                ], 10, Ay)), 64))
              ])
            ]),
            p(t).settings.aiMode === "function_call" ? (C(), P(ne, { key: 0 }, [
              u("div", Ty, [
                u("div", Py, [
                  u("div", My, M(p(g)("Custom API")), 1),
                  u("div", Ey, M(p(g)("Use a separate API endpoint for BGM agent loop instead of main API function calling")), 1)
                ]),
                Z(Ct, {
                  "model-value": p(t).settings.aiUseCustomApi,
                  "onUpdate:modelValue": k
                }, null, 8, ["model-value"])
              ]),
              p(t).settings.aiUseCustomApi ? (C(), P(ne, { key: 0 }, [
                u("div", Iy, [
                  u("div", Ry, [
                    u("div", $y, M(p(g)("API URL")), 1),
                    u("div", Oy, M(p(g)("OpenAI-compatible endpoint that supports tool calling")), 1)
                  ]),
                  u("input", {
                    class: "text_pole stmp-text-input",
                    value: p(t).settings.aiApiUrl,
                    placeholder: "",
                    onChange: I[2] || (I[2] = (b) => p(t).setAiApiUrl(b.target.value.trim()))
                  }, null, 40, Ly)
                ]),
                u("div", Ny, [
                  u("div", Dy, [
                    u("div", Fy, M(p(g)("API Key")), 1),
                    u("div", Uy, M(p(g)("Bearer token for the custom endpoint")), 1)
                  ]),
                  u("input", {
                    type: "password",
                    class: "text_pole stmp-text-input",
                    value: p(t).settings.aiApiKey,
                    placeholder: "",
                    onChange: I[3] || (I[3] = (b) => p(t).setAiApiKey(b.target.value.trim()))
                  }, null, 40, By)
                ]),
                u("div", Hy, [
                  u("div", jy, [
                    u("div", Vy, M(p(g)("Model")), 1),
                    u("div", qy, M(p(g)("Model that supports tool calling")), 1)
                  ]),
                  u("div", Wy, [
                    Z(Jg, {
                      "model-value": p(t).settings.aiModel,
                      options: G.value,
                      placeholder: "",
                      "onUpdate:modelValue": I[4] || (I[4] = (b) => p(t).setAiModel(b))
                    }, null, 8, ["model-value", "options"]),
                    u("div", {
                      class: ue(["menu_button menu_button_icon stmp-model-fetch", { "stmp-spin": Y.value }]),
                      title: p(g)("Connect"),
                      onClick: j
                    }, [...I[7] || (I[7] = [
                      u("i", { class: "fa-solid fa-plug" }, null, -1)
                    ])], 10, zy)
                  ])
                ]),
                u("div", Gy, [
                  u("div", Ky, [
                    u("div", Yy, M(p(g)("Context Messages")), 1),
                    u("div", Jy, M(p(g)("Number of recent chat messages to send to AI")), 1)
                  ]),
                  u("div", Xy, [
                    u("input", {
                      type: "range",
                      class: "stmp-slider",
                      min: "2",
                      max: "20",
                      value: p(t).settings.aiContextMessages,
                      onInput: T
                    }, null, 40, Qy),
                    u("span", Zy, M(p(t).settings.aiContextMessages), 1)
                  ])
                ]),
                u("div", ev, [
                  u("div", tv, [
                    u("div", sv, M(p(g)("Auto Trigger")), 1),
                    u("div", nv, M(p(g)("Automatically analyze new messages and select music")), 1)
                  ]),
                  Z(Ct, {
                    "model-value": p(t).settings.aiAutoTrigger,
                    "onUpdate:modelValue": I[5] || (I[5] = (b) => p(t).setAiAutoTrigger(b))
                  }, null, 8, ["model-value"])
                ]),
                p(t).settings.aiAutoTrigger ? (C(), P("div", iv, [
                  u("div", ov, [
                    u("div", rv, M(p(g)("Trigger on Greeting")), 1),
                    u("div", av, M(p(g)("Analyze BGM when loading a character card (first message)")), 1)
                  ]),
                  Z(Ct, {
                    "model-value": p(t).settings.aiTriggerOnGreeting,
                    "onUpdate:modelValue": I[6] || (I[6] = (b) => p(t).setAiTriggerOnGreeting(b))
                  }, null, 8, ["model-value"])
                ])) : ve("", !0)
              ], 64)) : ve("", !0)
            ], 64)) : ve("", !0),
            p(t).settings.aiMode === "together" ? (C(), P(ne, { key: 1 }, [
              u("div", lv, [
                u("div", cv, [
                  u("div", uv, M(p(g)("Prompt Role")), 1),
                  u("div", dv, M(p(g)("Role used when injecting BGM instructions into the main AI")), 1)
                ]),
                u("div", fv, [
                  (C(!0), P(ne, null, Ve([{ v: "system", l: p(g)("System") }, { v: "user", l: p(g)("User") }], (b) => (C(), P("div", {
                    key: b.v,
                    class: ue(["stmp-chip", { active: p(t).settings.togetherPromptRole === b.v }]),
                    onClick: (U) => p(t).setTogetherPromptRole(b.v)
                  }, [
                    u("span", null, M(b.l), 1)
                  ], 10, hv))), 128))
                ])
              ]),
              u("div", pv, [
                u("div", gv, [
                  u("div", mv, M(p(g)("Custom Prompt")), 1),
                  u("div", yv, [
                    Yt(M(p(g)("Edit the BGM instruction prompt. Use macros like ")) + " ", 1),
                    I[8] || (I[8] = u("code", null, "{{xiaoyueCurrentSong}}", -1)),
                    Yt(" " + M(p(g)(" for dynamic values.")), 1)
                  ])
                ]),
                Z(Ct, {
                  "model-value": p(t).settings.togetherCustomPromptEnabled,
                  "onUpdate:modelValue": p(t).setTogetherCustomPromptEnabled
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              p(t).settings.togetherCustomPromptEnabled ? (C(), P("div", vv, [
                u("div", _v, [
                  u("div", bv, M(p(g)("Edit Prompt")), 1),
                  u("div", wv, M(p(g)("Click to edit the BGM instruction prompt")), 1)
                ]),
                u("div", {
                  class: "menu_button menu_button_icon stmp-action-btn",
                  title: p(g)("Edit Prompt"),
                  onClick: ee
                }, [...I[9] || (I[9] = [
                  u("i", { class: "fa-solid fa-pen-to-square" }, null, -1)
                ])], 8, kv)
              ])) : ve("", !0)
            ], 64)) : ve("", !0)
          ], 64)) : ve("", !0)
        ], 512), [
          [xs, s.value === "ai"]
        ]),
        fs(u("div", xv, [
          u("div", Sv, [
            u("div", Cv, [
              u("div", Av, M(p(g)("Debug Mode")), 1),
              u("div", Tv, M(p(g)("Enable verbose console logging for troubleshooting")), 1)
            ]),
            Z(Ct, {
              "model-value": p(t).settings.debug,
              "onUpdate:modelValue": p(t).setDebug
            }, null, 8, ["model-value", "onUpdate:modelValue"])
          ]),
          I[16] || (I[16] = u("div", { class: "stmp-separator" }, null, -1)),
          u("div", Pv, [
            u("div", Mv, [
              u("div", Ev, M(p(g)("Export data")), 1),
              u("div", Iv, M(p(g)("Save your settings to a JSON file")), 1)
            ]),
            u("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: K
            }, [...I[10] || (I[10] = [
              u("i", { class: "fa-solid fa-file-export" }, null, -1)
            ])])
          ]),
          u("div", Rv, [
            u("div", $v, [
              u("div", Ov, M(p(g)("Import data")), 1),
              u("div", Lv, M(p(g)("Load settings from a JSON file")), 1)
            ]),
            u("div", {
              class: "menu_button menu_button_icon stmp-action-btn",
              onClick: ae
            }, [...I[11] || (I[11] = [
              u("i", { class: "fa-solid fa-file-import" }, null, -1)
            ])])
          ]),
          u("div", Nv, [
            I[13] || (I[13] = u("div", { class: "stmp-about-icon" }, [
              u("i", { class: "fa-solid fa-music" })
            ], -1)),
            I[14] || (I[14] = u("div", { class: "stmp-about-name" }, "晓乐", -1)),
            u("div", Dv, M(p(g)("Version")) + " " + M(p(R)), 1),
            u("div", Fv, M(p(g)("A scene-aware music player extension for SillyTavern")), 1),
            u("a", {
              href: Uv,
              target: "_blank",
              rel: "noopener",
              class: "stmp-about-link"
            }, [...I[12] || (I[12] = [
              u("i", { class: "fa-brands fa-github" }, null, -1),
              u("span", null, "GitHub", -1)
            ])]),
            I[15] || (I[15] = u("div", { class: "stmp-about-copyright" }, [
              u("a", {
                href: "https://www.erocraft.com",
                target: "_blank",
                rel: "noopener"
              }, "艾萝工坊"),
              Yt(" © 2015 - 2026")
            ], -1))
          ])
        ], 512), [
          [xs, s.value === "general"]
        ])
      ])
    ]));
  }
}), Hv = /* @__PURE__ */ gt(Bv, [["__scopeId", "data-v-905230f7"]]), lo = [
  {
    name: "xiaoyueCurrentSong",
    description: "Name of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return Ee().currentTrack?.name ?? "";
      } catch {
        return "";
      }
    }
  },
  {
    name: "xiaoyueCurrentArtist",
    description: "Artist of the currently loaded track. Empty if no track is loaded.",
    fn: () => {
      try {
        return Ee().currentTrack?.artist ?? "";
      } catch {
        return "";
      }
    }
  },
  {
    name: "xiaoyueIsPlaying",
    description: 'Whether audio is currently playing. Returns "true" or "false".',
    fn: () => {
      try {
        return String(Ee().isPlaying);
      } catch {
        return "false";
      }
    }
  },
  {
    name: "xiaoyueHasTrack",
    description: 'Whether a track is loaded. Returns "true" or "false".',
    fn: () => {
      try {
        return String(!!Ee().currentTrack);
      } catch {
        return "false";
      }
    }
  },
  {
    name: "xiaoyueRecentPlayed",
    description: "Comma-separated list of recently played songs (up to 5). Empty if no history.",
    fn: () => {
      try {
        return Il(5).join(", ");
      } catch {
        return "";
      }
    }
  }
];
function jv() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  if (!t?.register && !s?.registerMacro) {
    H.warn("Macros API not available, skipping registration");
    return;
  }
  for (const n of lo)
    t?.register ? t.register(n.name, {
      category: "misc",
      description: n.description,
      handler: n.fn
    }) : s?.registerMacro && s.registerMacro(n.name, n.fn, n.description);
  H.info("Macros registered:", lo.map((n) => n.name).join(", "));
}
function Vv() {
  const e = SillyTavern.getContext(), t = e.macros, s = e.MacrosParser;
  for (const n of lo)
    t?.registry?.unregisterMacro ? t.registry.unregisterMacro(n.name) : s?.unregisterMacro && s.unregisterMacro(n.name);
  H.info("Macros unregistered");
}
const At = "xy", je = "晓乐", sn = [];
function Ii(e) {
  return e == null ? "" : typeof e == "string" ? e : Array.isArray(e) ? e.map(String).join(" ").trim() : String(e);
}
function qv() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t, SlashCommand: s } = e, n = (i) => {
    const o = s.fromProps(i);
    if (t.addCommandObject(o), typeof i.name == "string" && sn.push(i.name), Array.isArray(i.aliases))
      for (const r of i.aliases) sn.push(String(r));
  };
  n({
    name: `${At}play`,
    aliases: [`${At}p`],
    helpString: "Toggle play/pause. With a song name argument, searches and plays it immediately.",
    callback: async (i, o) => {
      const r = Ii(o).trim(), a = Ee();
      if (!r)
        return await a.togglePlay(), typeof toastr < "u" && toastr.success(a.isPlaying ? g("Now playing") : g("Paused"), je), "";
      const l = ge(), c = l.neteaseStatus;
      if (c !== "ok") {
        if (typeof toastr < "u") {
          const w = g(c === "no-cookie" ? "Cookie not configured" : c === "expired" ? "Cookie expired" : "Cookie invalid");
          toastr.warning(w, je);
        }
        return "";
      }
      const h = await Zt(l.settings).searchAndResolve(r);
      return h ? (h.name = r, await a.loadAndPlay(h), typeof toastr < "u" && toastr.success(`${g("Now playing")}：${h.name}`, je)) : typeof toastr < "u" && toastr.warning(`${g("Cannot play")}：${r}`, je), "";
    }
  }), n({
    name: `${At}next`,
    aliases: [`${At}n`],
    helpString: "Skip to the next track.",
    callback: async () => {
      const i = Be();
      i.next();
      const o = i.current;
      return o && typeof toastr < "u" && toastr.success(`${g("Now playing")}：${o.song}`, je), "";
    }
  }), n({
    name: `${At}prev`,
    aliases: [`${At}pp`],
    helpString: "Go back to the previous track.",
    callback: async () => {
      const i = Be();
      i.prev();
      const o = i.current;
      return o && typeof toastr < "u" && toastr.success(`${g("Now playing")}：${o.song}`, je), "";
    }
  }), n({
    name: `${At}vol`,
    helpString: "Get or set the player volume (0-100). No argument shows the current volume.",
    callback: async (i, o) => {
      const r = Ii(o).trim(), a = Ee();
      if (!r)
        return String(a.volume);
      const l = parseInt(r, 10);
      return Number.isNaN(l) || l < 0 || l > 100 ? (typeof toastr < "u" && toastr.warning(g("Volume must be 0-100"), je), "") : (a.setVolume(l), ge().setVolume(l), typeof toastr < "u" && toastr.success(`${g("Volume set to")} ${l}`, je), "");
    }
  }), n({
    name: `${At}add`,
    helpString: "Search for a song and add it to the playlist.",
    callback: async (i, o) => {
      const r = Ii(o).trim();
      if (!r)
        return typeof toastr < "u" && toastr.warning(g("Enter song name"), je), "";
      const a = ge(), l = a.neteaseStatus;
      if (l !== "ok") {
        if (typeof toastr < "u") {
          const h = g(l === "no-cookie" ? "Cookie not configured" : l === "expired" ? "Cookie expired" : "Cookie invalid");
          toastr.warning(h, je);
        }
        return "";
      }
      const d = await Zt(a.settings).searchAll(r);
      return d.length === 0 ? (typeof toastr < "u" && toastr.info(g("No results"), je), "") : (Be().addFromSearch(d[0], !1), typeof toastr < "u" && toastr.success(`${g("Added to playlist")}：${d[0].name} - ${d[0].artist}`, je), "");
    }
  }), n({
    name: `${At}bgm`,
    helpString: "Manually trigger AI BGM analysis for the current conversation.",
    callback: async () => {
      const i = $n();
      if (!i)
        return typeof toastr < "u" && toastr.warning(g("AI BGM off"), je), "";
      const o = ge();
      return !o.settings.aiApiUrl || !o.settings.aiModel ? (typeof toastr < "u" && toastr.warning(g("AI not configured"), je), "") : (typeof toastr < "u" && toastr.info(g("AI analyzing"), je), await i.manualTrigger(), "");
    }
  }), n({
    name: `${At}now`,
    helpString: "Show information about the currently playing track.",
    callback: async () => {
      const o = Ee().currentTrack;
      if (!o)
        return typeof toastr < "u" && toastr.info(g("No Song"), je), "";
      const r = o.artist ? ` - ${o.artist}` : "";
      return typeof toastr < "u" && toastr.info(`${g("Now playing track")}：${o.name}${r}`, je), `${o.name}${r}`;
    }
  }), H.info("Slash commands registered: " + sn.join(", "));
}
function Wv() {
  const e = SillyTavern.getContext(), { SlashCommandParser: t } = e;
  if (t?.commands) {
    for (const s of sn)
      s in t.commands && delete t.commands[s];
    sn.length = 0, H.info("Slash commands unregistered");
  }
}
let Ms = null, nn = null, on = null, Es = null, Xn = null, Qn = null;
const zv = `
<div class="inline-drawer">
  <div class="inline-drawer-toggle inline-drawer-header">
    <b data-i18n="晓乐">晓乐</b>
    <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
  </div>
  <div class="inline-drawer-content stmp-ext-settings-content">
    <div id="stmp-settings-mount"></div>
  </div>
</div>
`;
function Gv() {
  const e = $("#extensions_settings2");
  if (!e || !e.length) {
    H.warn("Settings container #extensions_settings2 not found");
    return;
  }
  if (e.append(zv), on = e.children(".inline-drawer").last()[0] ?? null, !on) return;
  const t = on.querySelector("#stmp-settings-mount");
  t && Xn && (Es = il(Hv), Es.use(Xn), Es.mount(t));
}
function Kv() {
  Es && (Es.unmount(), Es = null), on?.remove(), on = null;
}
async function Xv() {
  try {
    const e = document.createElement("div");
    e.id = "st-little-player-root", document.body.appendChild(e);
    const t = Od();
    Xn = t, Ms = il(tg), Ms.use(t), Ms.mount(e);
    const s = ge(), n = mg();
    s.init(n);
    const i = Ee();
    i.init(), i.setVolume(s.settings.volume), Be().init(), Gv();
    const r = SillyTavern.getContext();
    nn = () => {
      jv(), qv(), Qn = new jg(), Qn.init();
    }, r.eventSource.on(r.event_types.APP_READY, nn), H.info("Player loaded");
  } catch (e) {
    H.error("Init failed:", e);
  }
}
function Yv() {
  if (H.info("Player destroyed"), nn) {
    try {
      const t = SillyTavern.getContext();
      t.eventSource.removeListener(t.event_types.APP_READY, nn);
    } catch {
    }
    nn = null;
  }
  if (Vv(), Wv(), Qn?.destroy(), Qn = null, Ms) {
    try {
      Ee().destroy();
    } catch {
    }
    Ms.unmount(), Ms = null;
  }
  const e = document.getElementById("st-little-player-root");
  e && e.remove(), Kv(), Xn = null;
}
function Qv() {
  Yv();
}
async function Zv() {
  try {
    const e = SillyTavern.getContext(), t = e.extensionSettings[`${Ft}-playlist`];
    if (t && typeof t == "object") {
      const n = t;
      if (Array.isArray(n.playlists)) {
        const i = [];
        for (const o of n.playlists)
          if (o?.source === "upload" && Array.isArray(o.songs))
            for (const r of o.songs)
              r?.serverPath && i.push(r.serverPath);
        await Promise.all(i.map((o) => Al(o).catch((r) => {
          H.warn("Clean: failed to delete file:", o, r);
        })));
      }
    }
    delete e.extensionSettings[Ft], delete e.extensionSettings[`${Ft}-playlist`], e.saveSettingsDebounced();
    const s = e.chatMetadata;
    s && typeof s == "object" && (delete s[To], delete s.stmp_cursor, await e.saveMetadata()), typeof toastr < "u" && toastr.success("Data cleaned", "晓乐");
  } catch (e) {
    H.error("Clean: failed to delete settings:", e);
  }
}
export {
  Zv as clean,
  Yv as destroy,
  Qv as disable,
  Xv as init
};
