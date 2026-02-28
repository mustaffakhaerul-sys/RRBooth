var Sv = Object.defineProperty;
var Zc = e => {
    throw TypeError(e)
}
;
var Cv = (e, t, n) => t in e ? Sv(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Qa = (e, t, n) => Cv(e, typeof t != "symbol" ? t + "" : t, n)
  , Ya = (e, t, n) => t.has(e) || Zc("Cannot " + n);
var j = (e, t, n) => (Ya(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Te = (e, t, n) => t.has(e) ? Zc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , ve = (e, t, n, r) => (Ya(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , at = (e, t, n) => (Ya(e, t, "access private method"),
n);
var qi = (e, t, n, r) => ({
    set _(o) {
        ve(e, t, o, n)
    },
    get _() {
        return j(e, t, r)
    }
});
function Ev(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Du(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ip = {
    exports: {}
}
  , ga = {}
  , sp = {
    exports: {}
}
  , Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $i = Symbol.for("react.element")
  , bv = Symbol.for("react.portal")
  , kv = Symbol.for("react.fragment")
  , Pv = Symbol.for("react.strict_mode")
  , Tv = Symbol.for("react.profiler")
  , Rv = Symbol.for("react.provider")
  , Nv = Symbol.for("react.context")
  , Iv = Symbol.for("react.forward_ref")
  , Mv = Symbol.for("react.suspense")
  , Av = Symbol.for("react.memo")
  , Ov = Symbol.for("react.lazy")
  , ed = Symbol.iterator;
function _v(e) {
    return e === null || typeof e != "object" ? null : (e = ed && e[ed] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ap = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , lp = Object.assign
  , up = {};
function Bo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = up,
    this.updater = n || ap
}
Bo.prototype.isReactComponent = {};
Bo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Bo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function cp() {}
cp.prototype = Bo.prototype;
function Uu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = up,
    this.updater = n || ap
}
var Bu = Uu.prototype = new cp;
Bu.constructor = Uu;
lp(Bu, Bo.prototype);
Bu.isPureReactComponent = !0;
var td = Array.isArray
  , dp = Object.prototype.hasOwnProperty
  , $u = {
    current: null
}
  , fp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function pp(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            dp.call(t, r) && !fp.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: $i,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: $u.current
    }
}
function Fv(e, t) {
    return {
        $$typeof: $i,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Wu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === $i
}
function jv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var nd = /\/+/g;
function Ka(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? jv("" + e.key) : t.toString(36)
}
function xs(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case $i:
            case bv:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + Ka(s, 0) : r,
        td(o) ? (n = "",
        e != null && (n = e.replace(nd, "$&/") + "/"),
        xs(o, t, n, "", function(u) {
            return u
        })) : o != null && (Wu(o) && (o = Fv(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(nd, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    td(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + Ka(i, l);
            s += xs(i, t, n, a, o)
        }
    else if (a = _v(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + Ka(i, l++),
            s += xs(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ji(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return xs(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function Lv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var vt = {
    current: null
}
  , Ss = {
    transition: null
}
  , zv = {
    ReactCurrentDispatcher: vt,
    ReactCurrentBatchConfig: Ss,
    ReactCurrentOwner: $u
};
function hp() {
    throw Error("act(...) is not supported in production builds of React.")
}
Ee.Children = {
    map: Ji,
    forEach: function(e, t, n) {
        Ji(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ji(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ji(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Wu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Ee.Component = Bo;
Ee.Fragment = kv;
Ee.Profiler = Tv;
Ee.PureComponent = Uu;
Ee.StrictMode = Pv;
Ee.Suspense = Mv;
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zv;
Ee.act = hp;
Ee.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = lp({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = $u.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            dp.call(t, a) && !fp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: $i,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
Ee.createContext = function(e) {
    return e = {
        $$typeof: Nv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Rv,
        _context: e
    },
    e.Consumer = e
}
;
Ee.createElement = pp;
Ee.createFactory = function(e) {
    var t = pp.bind(null, e);
    return t.type = e,
    t
}
;
Ee.createRef = function() {
    return {
        current: null
    }
}
;
Ee.forwardRef = function(e) {
    return {
        $$typeof: Iv,
        render: e
    }
}
;
Ee.isValidElement = Wu;
Ee.lazy = function(e) {
    return {
        $$typeof: Ov,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Lv
    }
}
;
Ee.memo = function(e, t) {
    return {
        $$typeof: Av,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Ee.startTransition = function(e) {
    var t = Ss.transition;
    Ss.transition = {};
    try {
        e()
    } finally {
        Ss.transition = t
    }
}
;
Ee.unstable_act = hp;
Ee.useCallback = function(e, t) {
    return vt.current.useCallback(e, t)
}
;
Ee.useContext = function(e) {
    return vt.current.useContext(e)
}
;
Ee.useDebugValue = function() {}
;
Ee.useDeferredValue = function(e) {
    return vt.current.useDeferredValue(e)
}
;
Ee.useEffect = function(e, t) {
    return vt.current.useEffect(e, t)
}
;
Ee.useId = function() {
    return vt.current.useId()
}
;
Ee.useImperativeHandle = function(e, t, n) {
    return vt.current.useImperativeHandle(e, t, n)
}
;
Ee.useInsertionEffect = function(e, t) {
    return vt.current.useInsertionEffect(e, t)
}
;
Ee.useLayoutEffect = function(e, t) {
    return vt.current.useLayoutEffect(e, t)
}
;
Ee.useMemo = function(e, t) {
    return vt.current.useMemo(e, t)
}
;
Ee.useReducer = function(e, t, n) {
    return vt.current.useReducer(e, t, n)
}
;
Ee.useRef = function(e) {
    return vt.current.useRef(e)
}
;
Ee.useState = function(e) {
    return vt.current.useState(e)
}
;
Ee.useSyncExternalStore = function(e, t, n) {
    return vt.current.useSyncExternalStore(e, t, n)
}
;
Ee.useTransition = function() {
    return vt.current.useTransition()
}
;
Ee.version = "18.3.1";
sp.exports = Ee;
var E = sp.exports;
const B = Du(E)
  , mp = Ev({
    __proto__: null,
    default: B
}, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dv = E
  , Uv = Symbol.for("react.element")
  , Bv = Symbol.for("react.fragment")
  , $v = Object.prototype.hasOwnProperty
  , Wv = Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Vv = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function gp(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        $v.call(t, r) && !Vv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Uv,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Wv.current
    }
}
ga.Fragment = Bv;
ga.jsx = gp;
ga.jsxs = gp;
ip.exports = ga;
var P = ip.exports
  , vp = {
    exports: {}
}
  , jt = {}
  , yp = {
    exports: {}
}
  , wp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(g, h) {
        var C = g.length;
        g.push(h);
        e: for (; 0 < C; ) {
            var k = C - 1 >>> 1
              , b = g[k];
            if (0 < o(b, h))
                g[k] = h,
                g[C] = b,
                C = k;
            else
                break e
        }
    }
    function n(g) {
        return g.length === 0 ? null : g[0]
    }
    function r(g) {
        if (g.length === 0)
            return null;
        var h = g[0]
          , C = g.pop();
        if (C !== h) {
            g[0] = C;
            e: for (var k = 0, b = g.length, I = b >>> 1; k < I; ) {
                var A = 2 * (k + 1) - 1
                  , O = g[A]
                  , $ = A + 1
                  , W = g[$];
                if (0 > o(O, C))
                    $ < b && 0 > o(W, O) ? (g[k] = W,
                    g[$] = C,
                    k = $) : (g[k] = O,
                    g[A] = C,
                    k = A);
                else if ($ < b && 0 > o(W, C))
                    g[k] = W,
                    g[$] = C,
                    k = $;
                else
                    break e
            }
        }
        return h
    }
    function o(g, h) {
        var C = g.sortIndex - h.sortIndex;
        return C !== 0 ? C : g.id - h.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , p = !1
      , w = !1
      , x = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(g) {
        for (var h = n(u); h !== null; ) {
            if (h.callback === null)
                r(u);
            else if (h.startTime <= g)
                r(u),
                h.sortIndex = h.expirationTime,
                t(a, h);
            else
                break;
            h = n(u)
        }
    }
    function T(g) {
        if (x = !1,
        v(g),
        !w)
            if (n(a) !== null)
                w = !0,
                Y(R);
            else {
                var h = n(u);
                h !== null && Z(T, h.startTime - g)
            }
    }
    function R(g, h) {
        w = !1,
        x && (x = !1,
        y(_),
        _ = -1),
        p = !0;
        var C = f;
        try {
            for (v(h),
            d = n(a); d !== null && (!(d.expirationTime > h) || g && !ae()); ) {
                var k = d.callback;
                if (typeof k == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var b = k(d.expirationTime <= h);
                    h = e.unstable_now(),
                    typeof b == "function" ? d.callback = b : d === n(a) && r(a),
                    v(h)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var I = !0;
            else {
                var A = n(u);
                A !== null && Z(T, A.startTime - h),
                I = !1
            }
            return I
        } finally {
            d = null,
            f = C,
            p = !1
        }
    }
    var N = !1
      , M = null
      , _ = -1
      , V = 5
      , z = -1;
    function ae() {
        return !(e.unstable_now() - z < V)
    }
    function re() {
        if (M !== null) {
            var g = e.unstable_now();
            z = g;
            var h = !0;
            try {
                h = M(!0, g)
            } finally {
                h ? J() : (N = !1,
                M = null)
            }
        } else
            N = !1
    }
    var J;
    if (typeof m == "function")
        J = function() {
            m(re)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var F = new MessageChannel
          , H = F.port2;
        F.port1.onmessage = re,
        J = function() {
            H.postMessage(null)
        }
    } else
        J = function() {
            S(re, 0)
        }
        ;
    function Y(g) {
        M = g,
        N || (N = !0,
        J())
    }
    function Z(g, h) {
        _ = S(function() {
            g(e.unstable_now())
        }, h)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(g) {
        g.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || p || (w = !0,
        Y(R))
    }
    ,
    e.unstable_forceFrameRate = function(g) {
        0 > g || 125 < g ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < g ? Math.floor(1e3 / g) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(g) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var h = 3;
            break;
        default:
            h = f
        }
        var C = f;
        f = h;
        try {
            return g()
        } finally {
            f = C
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(g, h) {
        switch (g) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            g = 3
        }
        var C = f;
        f = g;
        try {
            return h()
        } finally {
            f = C
        }
    }
    ,
    e.unstable_scheduleCallback = function(g, h, C) {
        var k = e.unstable_now();
        switch (typeof C == "object" && C !== null ? (C = C.delay,
        C = typeof C == "number" && 0 < C ? k + C : k) : C = k,
        g) {
        case 1:
            var b = -1;
            break;
        case 2:
            b = 250;
            break;
        case 5:
            b = 1073741823;
            break;
        case 4:
            b = 1e4;
            break;
        default:
            b = 5e3
        }
        return b = C + b,
        g = {
            id: c++,
            callback: h,
            priorityLevel: g,
            startTime: C,
            expirationTime: b,
            sortIndex: -1
        },
        C > k ? (g.sortIndex = C,
        t(u, g),
        n(a) === null && g === n(u) && (x ? (y(_),
        _ = -1) : x = !0,
        Z(T, C - k))) : (g.sortIndex = b,
        t(a, g),
        w || p || (w = !0,
        Y(R))),
        g
    }
    ,
    e.unstable_shouldYield = ae,
    e.unstable_wrapCallback = function(g) {
        var h = f;
        return function() {
            var C = f;
            f = h;
            try {
                return g.apply(this, arguments)
            } finally {
                f = C
            }
        }
    }
}
)(wp);
yp.exports = wp;
var Hv = yp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gv = E
  , Ft = Hv;
function Q(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var xp = new Set
  , wi = {};
function Xr(e, t) {
    Ao(e, t),
    Ao(e + "Capture", t)
}
function Ao(e, t) {
    for (wi[e] = t,
    e = 0; e < t.length; e++)
        xp.add(t[e])
}
var _n = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Il = Object.prototype.hasOwnProperty
  , Qv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , rd = {}
  , od = {};
function Yv(e) {
    return Il.call(od, e) ? !0 : Il.call(rd, e) ? !1 : Qv.test(e) ? od[e] = !0 : (rd[e] = !0,
    !1)
}
function Kv(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Xv(e, t, n, r) {
    if (t === null || typeof t > "u" || Kv(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function yt(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var st = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    st[e] = new yt(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    st[t] = new yt(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    st[e] = new yt(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    st[e] = new yt(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    st[e] = new yt(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    st[e] = new yt(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    st[e] = new yt(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    st[e] = new yt(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    st[e] = new yt(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Vu = /[\-:]([a-z])/g;
function Hu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Vu, Hu);
    st[t] = new yt(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Vu, Hu);
    st[t] = new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Vu, Hu);
    st[t] = new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    st[e] = new yt(e,1,!1,e.toLowerCase(),null,!1,!1)
});
st.xlinkHref = new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    st[e] = new yt(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Gu(e, t, n, r) {
    var o = st.hasOwnProperty(t) ? st[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Xv(t, n, o, r) && (n = null),
    r || o === null ? Yv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Un = Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Zi = Symbol.for("react.element")
  , to = Symbol.for("react.portal")
  , no = Symbol.for("react.fragment")
  , Qu = Symbol.for("react.strict_mode")
  , Ml = Symbol.for("react.profiler")
  , Sp = Symbol.for("react.provider")
  , Cp = Symbol.for("react.context")
  , Yu = Symbol.for("react.forward_ref")
  , Al = Symbol.for("react.suspense")
  , Ol = Symbol.for("react.suspense_list")
  , Ku = Symbol.for("react.memo")
  , Xn = Symbol.for("react.lazy")
  , Ep = Symbol.for("react.offscreen")
  , id = Symbol.iterator;
function Yo(e) {
    return e === null || typeof e != "object" ? null : (e = id && e[id] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ue = Object.assign, Xa;
function oi(e) {
    if (Xa === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Xa = t && t[1] || ""
        }
    return `
` + Xa + e
}
var qa = !1;
function Ja(e, t) {
    if (!e || qa)
        return "";
    qa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        qa = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? oi(e) : ""
}
function qv(e) {
    switch (e.tag) {
    case 5:
        return oi(e.type);
    case 16:
        return oi("Lazy");
    case 13:
        return oi("Suspense");
    case 19:
        return oi("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ja(e.type, !1),
        e;
    case 11:
        return e = Ja(e.type.render, !1),
        e;
    case 1:
        return e = Ja(e.type, !0),
        e;
    default:
        return ""
    }
}
function _l(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case no:
        return "Fragment";
    case to:
        return "Portal";
    case Ml:
        return "Profiler";
    case Qu:
        return "StrictMode";
    case Al:
        return "Suspense";
    case Ol:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Cp:
            return (e.displayName || "Context") + ".Consumer";
        case Sp:
            return (e._context.displayName || "Context") + ".Provider";
        case Yu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Ku:
            return t = e.displayName || null,
            t !== null ? t : _l(e.type) || "Memo";
        case Xn:
            t = e._payload,
            e = e._init;
            try {
                return _l(e(t))
            } catch {}
        }
    return null
}
function Jv(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return _l(t);
    case 8:
        return t === Qu ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function vr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function bp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Zv(e) {
    var t = bp(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function es(e) {
    e._valueTracker || (e._valueTracker = Zv(e))
}
function kp(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = bp(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function js(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Fl(e, t) {
    var n = t.checked;
    return Ue({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function sd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = vr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Pp(e, t) {
    t = t.checked,
    t != null && Gu(e, "checked", t, !1)
}
function jl(e, t) {
    Pp(e, t);
    var n = vr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ll(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ll(e, t.type, vr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ad(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ll(e, t, n) {
    (t !== "number" || js(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ii = Array.isArray;
function mo(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + vr(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function zl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(Q(91));
    return Ue({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ld(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(Q(92));
            if (ii(n)) {
                if (1 < n.length)
                    throw Error(Q(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: vr(n)
    }
}
function Tp(e, t) {
    var n = vr(t.value)
      , r = vr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function ud(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Rp(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Dl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Rp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ts, Np = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ts = ts || document.createElement("div"),
        ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ts.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function xi(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ui = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , e0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ui).forEach(function(e) {
    e0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ui[t] = ui[e]
    })
});
function Ip(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ui.hasOwnProperty(e) && ui[e] ? ("" + t).trim() : t + "px"
}
function Mp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Ip(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var t0 = Ue({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ul(e, t) {
    if (t) {
        if (t0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(Q(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(Q(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(Q(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(Q(62))
    }
}
function Bl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var $l = null;
function Xu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Wl = null
  , go = null
  , vo = null;
function cd(e) {
    if (e = Hi(e)) {
        if (typeof Wl != "function")
            throw Error(Q(280));
        var t = e.stateNode;
        t && (t = Sa(t),
        Wl(e.stateNode, e.type, t))
    }
}
function Ap(e) {
    go ? vo ? vo.push(e) : vo = [e] : go = e
}
function Op() {
    if (go) {
        var e = go
          , t = vo;
        if (vo = go = null,
        cd(e),
        t)
            for (e = 0; e < t.length; e++)
                cd(t[e])
    }
}
function _p(e, t) {
    return e(t)
}
function Fp() {}
var Za = !1;
function jp(e, t, n) {
    if (Za)
        return e(t, n);
    Za = !0;
    try {
        return _p(e, t, n)
    } finally {
        Za = !1,
        (go !== null || vo !== null) && (Fp(),
        Op())
    }
}
function Si(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Sa(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(Q(231, t, typeof n));
    return n
}
var Vl = !1;
if (_n)
    try {
        var Ko = {};
        Object.defineProperty(Ko, "passive", {
            get: function() {
                Vl = !0
            }
        }),
        window.addEventListener("test", Ko, Ko),
        window.removeEventListener("test", Ko, Ko)
    } catch {
        Vl = !1
    }
function n0(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var ci = !1
  , Ls = null
  , zs = !1
  , Hl = null
  , r0 = {
    onError: function(e) {
        ci = !0,
        Ls = e
    }
};
function o0(e, t, n, r, o, i, s, l, a) {
    ci = !1,
    Ls = null,
    n0.apply(r0, arguments)
}
function i0(e, t, n, r, o, i, s, l, a) {
    if (o0.apply(this, arguments),
    ci) {
        if (ci) {
            var u = Ls;
            ci = !1,
            Ls = null
        } else
            throw Error(Q(198));
        zs || (zs = !0,
        Hl = u)
    }
}
function qr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Lp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function dd(e) {
    if (qr(e) !== e)
        throw Error(Q(188))
}
function s0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = qr(e),
        t === null)
            throw Error(Q(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return dd(o),
                    e;
                if (i === r)
                    return dd(o),
                    t;
                i = i.sibling
            }
            throw Error(Q(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(Q(189))
            }
        }
        if (n.alternate !== r)
            throw Error(Q(190))
    }
    if (n.tag !== 3)
        throw Error(Q(188));
    return n.stateNode.current === n ? e : t
}
function zp(e) {
    return e = s0(e),
    e !== null ? Dp(e) : null
}
function Dp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Dp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Up = Ft.unstable_scheduleCallback
  , fd = Ft.unstable_cancelCallback
  , a0 = Ft.unstable_shouldYield
  , l0 = Ft.unstable_requestPaint
  , Ye = Ft.unstable_now
  , u0 = Ft.unstable_getCurrentPriorityLevel
  , qu = Ft.unstable_ImmediatePriority
  , Bp = Ft.unstable_UserBlockingPriority
  , Ds = Ft.unstable_NormalPriority
  , c0 = Ft.unstable_LowPriority
  , $p = Ft.unstable_IdlePriority
  , va = null
  , xn = null;
function d0(e) {
    if (xn && typeof xn.onCommitFiberRoot == "function")
        try {
            xn.onCommitFiberRoot(va, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var rn = Math.clz32 ? Math.clz32 : h0
  , f0 = Math.log
  , p0 = Math.LN2;
function h0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (f0(e) / p0 | 0) | 0
}
var ns = 64
  , rs = 4194304;
function si(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Us(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = si(l) : (i &= s,
        i !== 0 && (r = si(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = si(s) : i !== 0 && (r = si(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - rn(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function m0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function g0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - rn(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = m0(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function Gl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Wp() {
    var e = ns;
    return ns <<= 1,
    !(ns & 4194240) && (ns = 64),
    e
}
function el(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Wi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - rn(t),
    e[t] = n
}
function v0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - rn(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Ju(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - rn(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var Ie = 0;
function Vp(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Hp, Zu, Gp, Qp, Yp, Ql = !1, os = [], ur = null, cr = null, dr = null, Ci = new Map, Ei = new Map, Jn = [], y0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function pd(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        ur = null;
        break;
    case "dragenter":
    case "dragleave":
        cr = null;
        break;
    case "mouseover":
    case "mouseout":
        dr = null;
        break;
    case "pointerover":
    case "pointerout":
        Ci.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ei.delete(t.pointerId)
    }
}
function Xo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = Hi(t),
    t !== null && Zu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function w0(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return ur = Xo(ur, e, t, n, r, o),
        !0;
    case "dragenter":
        return cr = Xo(cr, e, t, n, r, o),
        !0;
    case "mouseover":
        return dr = Xo(dr, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Ci.set(i, Xo(Ci.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Ei.set(i, Xo(Ei.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Kp(e) {
    var t = Mr(e.target);
    if (t !== null) {
        var n = qr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Lp(n),
                t !== null) {
                    e.blockedOn = t,
                    Yp(e.priority, function() {
                        Gp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Cs(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Yl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            $l = r,
            n.target.dispatchEvent(r),
            $l = null
        } else
            return t = Hi(n),
            t !== null && Zu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function hd(e, t, n) {
    Cs(e) && n.delete(t)
}
function x0() {
    Ql = !1,
    ur !== null && Cs(ur) && (ur = null),
    cr !== null && Cs(cr) && (cr = null),
    dr !== null && Cs(dr) && (dr = null),
    Ci.forEach(hd),
    Ei.forEach(hd)
}
function qo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ql || (Ql = !0,
    Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority, x0)))
}
function bi(e) {
    function t(o) {
        return qo(o, e)
    }
    if (0 < os.length) {
        qo(os[0], e);
        for (var n = 1; n < os.length; n++) {
            var r = os[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ur !== null && qo(ur, e),
    cr !== null && qo(cr, e),
    dr !== null && qo(dr, e),
    Ci.forEach(t),
    Ei.forEach(t),
    n = 0; n < Jn.length; n++)
        r = Jn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Jn.length && (n = Jn[0],
    n.blockedOn === null); )
        Kp(n),
        n.blockedOn === null && Jn.shift()
}
var yo = Un.ReactCurrentBatchConfig
  , Bs = !0;
function S0(e, t, n, r) {
    var o = Ie
      , i = yo.transition;
    yo.transition = null;
    try {
        Ie = 1,
        ec(e, t, n, r)
    } finally {
        Ie = o,
        yo.transition = i
    }
}
function C0(e, t, n, r) {
    var o = Ie
      , i = yo.transition;
    yo.transition = null;
    try {
        Ie = 4,
        ec(e, t, n, r)
    } finally {
        Ie = o,
        yo.transition = i
    }
}
function ec(e, t, n, r) {
    if (Bs) {
        var o = Yl(e, t, n, r);
        if (o === null)
            cl(e, t, r, $s, n),
            pd(e, r);
        else if (w0(o, e, t, n, r))
            r.stopPropagation();
        else if (pd(e, r),
        t & 4 && -1 < y0.indexOf(e)) {
            for (; o !== null; ) {
                var i = Hi(o);
                if (i !== null && Hp(i),
                i = Yl(e, t, n, r),
                i === null && cl(e, t, r, $s, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            cl(e, t, r, null, n)
    }
}
var $s = null;
function Yl(e, t, n, r) {
    if ($s = null,
    e = Xu(r),
    e = Mr(e),
    e !== null)
        if (t = qr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Lp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return $s = e,
    null
}
function Xp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (u0()) {
        case qu:
            return 1;
        case Bp:
            return 4;
        case Ds:
        case c0:
            return 16;
        case $p:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var ir = null
  , tc = null
  , Es = null;
function qp() {
    if (Es)
        return Es;
    var e, t = tc, n = t.length, r, o = "value"in ir ? ir.value : ir.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Es = o.slice(e, 1 < r ? 1 - r : void 0)
}
function bs(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function is() {
    return !0
}
function md() {
    return !1
}
function Lt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? is : md,
        this.isPropagationStopped = md,
        this
    }
    return Ue(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = is)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = is)
        },
        persist: function() {},
        isPersistent: is
    }),
    t
}
var $o = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, nc = Lt($o), Vi = Ue({}, $o, {
    view: 0,
    detail: 0
}), E0 = Lt(Vi), tl, nl, Jo, ya = Ue({}, Vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Jo && (Jo && e.type === "mousemove" ? (tl = e.screenX - Jo.screenX,
        nl = e.screenY - Jo.screenY) : nl = tl = 0,
        Jo = e),
        tl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : nl
    }
}), gd = Lt(ya), b0 = Ue({}, ya, {
    dataTransfer: 0
}), k0 = Lt(b0), P0 = Ue({}, Vi, {
    relatedTarget: 0
}), rl = Lt(P0), T0 = Ue({}, $o, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), R0 = Lt(T0), N0 = Ue({}, $o, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), I0 = Lt(N0), M0 = Ue({}, $o, {
    data: 0
}), vd = Lt(M0), A0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, O0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, _0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function F0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _0[e]) ? !!t[e] : !1
}
function rc() {
    return F0
}
var j0 = Ue({}, Vi, {
    key: function(e) {
        if (e.key) {
            var t = A0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = bs(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? O0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rc,
    charCode: function(e) {
        return e.type === "keypress" ? bs(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? bs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , L0 = Lt(j0)
  , z0 = Ue({}, ya, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , yd = Lt(z0)
  , D0 = Ue({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rc
})
  , U0 = Lt(D0)
  , B0 = Ue({}, $o, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , $0 = Lt(B0)
  , W0 = Ue({}, ya, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , V0 = Lt(W0)
  , H0 = [9, 13, 27, 32]
  , oc = _n && "CompositionEvent"in window
  , di = null;
_n && "documentMode"in document && (di = document.documentMode);
var G0 = _n && "TextEvent"in window && !di
  , Jp = _n && (!oc || di && 8 < di && 11 >= di)
  , wd = " "
  , xd = !1;
function Zp(e, t) {
    switch (e) {
    case "keyup":
        return H0.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function eh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ro = !1;
function Q0(e, t) {
    switch (e) {
    case "compositionend":
        return eh(t);
    case "keypress":
        return t.which !== 32 ? null : (xd = !0,
        wd);
    case "textInput":
        return e = t.data,
        e === wd && xd ? null : e;
    default:
        return null
    }
}
function Y0(e, t) {
    if (ro)
        return e === "compositionend" || !oc && Zp(e, t) ? (e = qp(),
        Es = tc = ir = null,
        ro = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Jp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var K0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Sd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!K0[e.type] : t === "textarea"
}
function th(e, t, n, r) {
    Ap(r),
    t = Ws(t, "onChange"),
    0 < t.length && (n = new nc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var fi = null
  , ki = null;
function X0(e) {
    fh(e, 0)
}
function wa(e) {
    var t = so(e);
    if (kp(t))
        return e
}
function q0(e, t) {
    if (e === "change")
        return t
}
var nh = !1;
if (_n) {
    var ol;
    if (_n) {
        var il = "oninput"in document;
        if (!il) {
            var Cd = document.createElement("div");
            Cd.setAttribute("oninput", "return;"),
            il = typeof Cd.oninput == "function"
        }
        ol = il
    } else
        ol = !1;
    nh = ol && (!document.documentMode || 9 < document.documentMode)
}
function Ed() {
    fi && (fi.detachEvent("onpropertychange", rh),
    ki = fi = null)
}
function rh(e) {
    if (e.propertyName === "value" && wa(ki)) {
        var t = [];
        th(t, ki, e, Xu(e)),
        jp(X0, t)
    }
}
function J0(e, t, n) {
    e === "focusin" ? (Ed(),
    fi = t,
    ki = n,
    fi.attachEvent("onpropertychange", rh)) : e === "focusout" && Ed()
}
function Z0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return wa(ki)
}
function ey(e, t) {
    if (e === "click")
        return wa(t)
}
function ty(e, t) {
    if (e === "input" || e === "change")
        return wa(t)
}
function ny(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var sn = typeof Object.is == "function" ? Object.is : ny;
function Pi(e, t) {
    if (sn(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Il.call(t, o) || !sn(e[o], t[o]))
            return !1
    }
    return !0
}
function bd(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function kd(e, t) {
    var n = bd(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = bd(n)
    }
}
function oh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? oh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function ih() {
    for (var e = window, t = js(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = js(e.document)
    }
    return t
}
function ic(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function ry(e) {
    var t = ih()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && oh(n.ownerDocument.documentElement, n)) {
        if (r !== null && ic(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = kd(n, i);
                var s = kd(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var oy = _n && "documentMode"in document && 11 >= document.documentMode
  , oo = null
  , Kl = null
  , pi = null
  , Xl = !1;
function Pd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xl || oo == null || oo !== js(r) || (r = oo,
    "selectionStart"in r && ic(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    pi && Pi(pi, r) || (pi = r,
    r = Ws(Kl, "onSelect"),
    0 < r.length && (t = new nc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = oo)))
}
function ss(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var io = {
    animationend: ss("Animation", "AnimationEnd"),
    animationiteration: ss("Animation", "AnimationIteration"),
    animationstart: ss("Animation", "AnimationStart"),
    transitionend: ss("Transition", "TransitionEnd")
}
  , sl = {}
  , sh = {};
_n && (sh = document.createElement("div").style,
"AnimationEvent"in window || (delete io.animationend.animation,
delete io.animationiteration.animation,
delete io.animationstart.animation),
"TransitionEvent"in window || delete io.transitionend.transition);
function xa(e) {
    if (sl[e])
        return sl[e];
    if (!io[e])
        return e;
    var t = io[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in sh)
            return sl[e] = t[n];
    return e
}
var ah = xa("animationend")
  , lh = xa("animationiteration")
  , uh = xa("animationstart")
  , ch = xa("transitionend")
  , dh = new Map
  , Td = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Er(e, t) {
    dh.set(e, t),
    Xr(t, [e])
}
for (var al = 0; al < Td.length; al++) {
    var ll = Td[al]
      , iy = ll.toLowerCase()
      , sy = ll[0].toUpperCase() + ll.slice(1);
    Er(iy, "on" + sy)
}
Er(ah, "onAnimationEnd");
Er(lh, "onAnimationIteration");
Er(uh, "onAnimationStart");
Er("dblclick", "onDoubleClick");
Er("focusin", "onFocus");
Er("focusout", "onBlur");
Er(ch, "onTransitionEnd");
Ao("onMouseEnter", ["mouseout", "mouseover"]);
Ao("onMouseLeave", ["mouseout", "mouseover"]);
Ao("onPointerEnter", ["pointerout", "pointerover"]);
Ao("onPointerLeave", ["pointerout", "pointerover"]);
Xr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));
function Rd(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    i0(r, t, void 0, e),
    e.currentTarget = null
}
function fh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Rd(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Rd(o, l, u),
                    i = a
                }
        }
    }
    if (zs)
        throw e = Hl,
        zs = !1,
        Hl = null,
        e
}
function Oe(e, t) {
    var n = t[tu];
    n === void 0 && (n = t[tu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ph(t, e, 2, !1),
    n.add(r))
}
function ul(e, t, n) {
    var r = 0;
    t && (r |= 4),
    ph(n, e, r, t)
}
var as = "_reactListening" + Math.random().toString(36).slice(2);
function Ti(e) {
    if (!e[as]) {
        e[as] = !0,
        xp.forEach(function(n) {
            n !== "selectionchange" && (ay.has(n) || ul(n, !1, e),
            ul(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[as] || (t[as] = !0,
        ul("selectionchange", !1, t))
    }
}
function ph(e, t, n, r) {
    switch (Xp(t)) {
    case 1:
        var o = S0;
        break;
    case 4:
        o = C0;
        break;
    default:
        o = ec
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Vl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function cl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Mr(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    jp(function() {
        var u = i
          , c = Xu(n)
          , d = [];
        e: {
            var f = dh.get(e);
            if (f !== void 0) {
                var p = nc
                  , w = e;
                switch (e) {
                case "keypress":
                    if (bs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = L0;
                    break;
                case "focusin":
                    w = "focus",
                    p = rl;
                    break;
                case "focusout":
                    w = "blur",
                    p = rl;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = rl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = gd;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = k0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = U0;
                    break;
                case ah:
                case lh:
                case uh:
                    p = R0;
                    break;
                case ch:
                    p = $0;
                    break;
                case "scroll":
                    p = E0;
                    break;
                case "wheel":
                    p = V0;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = I0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = yd
                }
                var x = (t & 4) !== 0
                  , S = !x && e === "scroll"
                  , y = x ? f !== null ? f + "Capture" : null : f;
                x = [];
                for (var m = u, v; m !== null; ) {
                    v = m;
                    var T = v.stateNode;
                    if (v.tag === 5 && T !== null && (v = T,
                    y !== null && (T = Si(m, y),
                    T != null && x.push(Ri(m, T, v)))),
                    S)
                        break;
                    m = m.return
                }
                0 < x.length && (f = new p(f,w,null,n,c),
                d.push({
                    event: f,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                f && n !== $l && (w = n.relatedTarget || n.fromElement) && (Mr(w) || w[Fn]))
                    break e;
                if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                p ? (w = n.relatedTarget || n.toElement,
                p = u,
                w = w ? Mr(w) : null,
                w !== null && (S = qr(w),
                w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (p = null,
                w = u),
                p !== w)) {
                    if (x = gd,
                    T = "onMouseLeave",
                    y = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = yd,
                    T = "onPointerLeave",
                    y = "onPointerEnter",
                    m = "pointer"),
                    S = p == null ? f : so(p),
                    v = w == null ? f : so(w),
                    f = new x(T,m + "leave",p,n,c),
                    f.target = S,
                    f.relatedTarget = v,
                    T = null,
                    Mr(c) === u && (x = new x(y,m + "enter",w,n,c),
                    x.target = v,
                    x.relatedTarget = S,
                    T = x),
                    S = T,
                    p && w)
                        t: {
                            for (x = p,
                            y = w,
                            m = 0,
                            v = x; v; v = Zr(v))
                                m++;
                            for (v = 0,
                            T = y; T; T = Zr(T))
                                v++;
                            for (; 0 < m - v; )
                                x = Zr(x),
                                m--;
                            for (; 0 < v - m; )
                                y = Zr(y),
                                v--;
                            for (; m--; ) {
                                if (x === y || y !== null && x === y.alternate)
                                    break t;
                                x = Zr(x),
                                y = Zr(y)
                            }
                            x = null
                        }
                    else
                        x = null;
                    p !== null && Nd(d, f, p, x, !1),
                    w !== null && S !== null && Nd(d, S, w, x, !0)
                }
            }
            e: {
                if (f = u ? so(u) : window,
                p = f.nodeName && f.nodeName.toLowerCase(),
                p === "select" || p === "input" && f.type === "file")
                    var R = q0;
                else if (Sd(f))
                    if (nh)
                        R = ty;
                    else {
                        R = Z0;
                        var N = J0
                    }
                else
                    (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (R = ey);
                if (R && (R = R(e, u))) {
                    th(d, R, n, c);
                    break e
                }
                N && N(e, f, u),
                e === "focusout" && (N = f._wrapperState) && N.controlled && f.type === "number" && Ll(f, "number", f.value)
            }
            switch (N = u ? so(u) : window,
            e) {
            case "focusin":
                (Sd(N) || N.contentEditable === "true") && (oo = N,
                Kl = u,
                pi = null);
                break;
            case "focusout":
                pi = Kl = oo = null;
                break;
            case "mousedown":
                Xl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Xl = !1,
                Pd(d, n, c);
                break;
            case "selectionchange":
                if (oy)
                    break;
            case "keydown":
            case "keyup":
                Pd(d, n, c)
            }
            var M;
            if (oc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                    }
                    _ = void 0
                }
            else
                ro ? Zp(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
            _ && (Jp && n.locale !== "ko" && (ro || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && ro && (M = qp()) : (ir = c,
            tc = "value"in ir ? ir.value : ir.textContent,
            ro = !0)),
            N = Ws(u, _),
            0 < N.length && (_ = new vd(_,e,null,n,c),
            d.push({
                event: _,
                listeners: N
            }),
            M ? _.data = M : (M = eh(n),
            M !== null && (_.data = M)))),
            (M = G0 ? Q0(e, n) : Y0(e, n)) && (u = Ws(u, "onBeforeInput"),
            0 < u.length && (c = new vd("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = M))
        }
        fh(d, t)
    })
}
function Ri(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ws(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Si(e, n),
        i != null && r.unshift(Ri(e, i, o)),
        i = Si(e, t),
        i != null && r.push(Ri(e, i, o))),
        e = e.return
    }
    return r
}
function Zr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Nd(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = Si(n, i),
        a != null && s.unshift(Ri(n, a, l))) : o || (a = Si(n, i),
        a != null && s.push(Ri(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var ly = /\r\n?/g
  , uy = /\u0000|\uFFFD/g;
function Id(e) {
    return (typeof e == "string" ? e : "" + e).replace(ly, `
`).replace(uy, "")
}
function ls(e, t, n) {
    if (t = Id(t),
    Id(e) !== t && n)
        throw Error(Q(425))
}
function Vs() {}
var ql = null
  , Jl = null;
function Zl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var eu = typeof setTimeout == "function" ? setTimeout : void 0
  , cy = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Md = typeof Promise == "function" ? Promise : void 0
  , dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Md < "u" ? function(e) {
    return Md.resolve(null).then(e).catch(fy)
}
: eu;
function fy(e) {
    setTimeout(function() {
        throw e
    })
}
function dl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    bi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    bi(t)
}
function fr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Ad(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Wo = Math.random().toString(36).slice(2)
  , vn = "__reactFiber$" + Wo
  , Ni = "__reactProps$" + Wo
  , Fn = "__reactContainer$" + Wo
  , tu = "__reactEvents$" + Wo
  , py = "__reactListeners$" + Wo
  , hy = "__reactHandles$" + Wo;
function Mr(e) {
    var t = e[vn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Fn] || n[vn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Ad(e); e !== null; ) {
                    if (n = e[vn])
                        return n;
                    e = Ad(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Hi(e) {
    return e = e[vn] || e[Fn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function so(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(Q(33))
}
function Sa(e) {
    return e[Ni] || null
}
var nu = []
  , ao = -1;
function br(e) {
    return {
        current: e
    }
}
function _e(e) {
    0 > ao || (e.current = nu[ao],
    nu[ao] = null,
    ao--)
}
function Me(e, t) {
    ao++,
    nu[ao] = e.current,
    e.current = t
}
var yr = {}
  , ft = br(yr)
  , bt = br(!1)
  , Wr = yr;
function Oo(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return yr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function kt(e) {
    return e = e.childContextTypes,
    e != null
}
function Hs() {
    _e(bt),
    _e(ft)
}
function Od(e, t, n) {
    if (ft.current !== yr)
        throw Error(Q(168));
    Me(ft, t),
    Me(bt, n)
}
function hh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(Q(108, Jv(e) || "Unknown", o));
    return Ue({}, n, r)
}
function Gs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yr,
    Wr = ft.current,
    Me(ft, e),
    Me(bt, bt.current),
    !0
}
function _d(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(Q(169));
    n ? (e = hh(e, t, Wr),
    r.__reactInternalMemoizedMergedChildContext = e,
    _e(bt),
    _e(ft),
    Me(ft, e)) : _e(bt),
    Me(bt, n)
}
var Rn = null
  , Ca = !1
  , fl = !1;
function mh(e) {
    Rn === null ? Rn = [e] : Rn.push(e)
}
function my(e) {
    Ca = !0,
    mh(e)
}
function kr() {
    if (!fl && Rn !== null) {
        fl = !0;
        var e = 0
          , t = Ie;
        try {
            var n = Rn;
            for (Ie = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Rn = null,
            Ca = !1
        } catch (o) {
            throw Rn !== null && (Rn = Rn.slice(e + 1)),
            Up(qu, kr),
            o
        } finally {
            Ie = t,
            fl = !1
        }
    }
    return null
}
var lo = []
  , uo = 0
  , Qs = null
  , Ys = 0
  , $t = []
  , Wt = 0
  , Vr = null
  , In = 1
  , Mn = "";
function Nr(e, t) {
    lo[uo++] = Ys,
    lo[uo++] = Qs,
    Qs = e,
    Ys = t
}
function gh(e, t, n) {
    $t[Wt++] = In,
    $t[Wt++] = Mn,
    $t[Wt++] = Vr,
    Vr = e;
    var r = In;
    e = Mn;
    var o = 32 - rn(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - rn(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        In = 1 << 32 - rn(t) + o | n << o | r,
        Mn = i + e
    } else
        In = 1 << i | n << o | r,
        Mn = e
}
function sc(e) {
    e.return !== null && (Nr(e, 1),
    gh(e, 1, 0))
}
function ac(e) {
    for (; e === Qs; )
        Qs = lo[--uo],
        lo[uo] = null,
        Ys = lo[--uo],
        lo[uo] = null;
    for (; e === Vr; )
        Vr = $t[--Wt],
        $t[Wt] = null,
        Mn = $t[--Wt],
        $t[Wt] = null,
        In = $t[--Wt],
        $t[Wt] = null
}
var Ot = null
  , At = null
  , Fe = !1
  , nn = null;
function vh(e, t) {
    var n = Vt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Fd(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ot = e,
        At = fr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ot = e,
        At = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Vr !== null ? {
            id: In,
            overflow: Mn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Vt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ot = e,
        At = null,
        !0) : !1;
    default:
        return !1
    }
}
function ru(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ou(e) {
    if (Fe) {
        var t = At;
        if (t) {
            var n = t;
            if (!Fd(e, t)) {
                if (ru(e))
                    throw Error(Q(418));
                t = fr(n.nextSibling);
                var r = Ot;
                t && Fd(e, t) ? vh(r, n) : (e.flags = e.flags & -4097 | 2,
                Fe = !1,
                Ot = e)
            }
        } else {
            if (ru(e))
                throw Error(Q(418));
            e.flags = e.flags & -4097 | 2,
            Fe = !1,
            Ot = e
        }
    }
}
function jd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ot = e
}
function us(e) {
    if (e !== Ot)
        return !1;
    if (!Fe)
        return jd(e),
        Fe = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps)),
    t && (t = At)) {
        if (ru(e))
            throw yh(),
            Error(Q(418));
        for (; t; )
            vh(e, t),
            t = fr(t.nextSibling)
    }
    if (jd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(Q(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            At = fr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            At = null
        }
    } else
        At = Ot ? fr(e.stateNode.nextSibling) : null;
    return !0
}
function yh() {
    for (var e = At; e; )
        e = fr(e.nextSibling)
}
function _o() {
    At = Ot = null,
    Fe = !1
}
function lc(e) {
    nn === null ? nn = [e] : nn.push(e)
}
var gy = Un.ReactCurrentBatchConfig;
function Zo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(Q(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(Q(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(Q(284));
        if (!n._owner)
            throw Error(Q(290, e))
    }
    return e
}
function cs(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(Q(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ld(e) {
    var t = e._init;
    return t(e._payload)
}
function wh(e) {
    function t(y, m) {
        if (e) {
            var v = y.deletions;
            v === null ? (y.deletions = [m],
            y.flags |= 16) : v.push(m)
        }
    }
    function n(y, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(y, m),
            m = m.sibling;
        return null
    }
    function r(y, m) {
        for (y = new Map; m !== null; )
            m.key !== null ? y.set(m.key, m) : y.set(m.index, m),
            m = m.sibling;
        return y
    }
    function o(y, m) {
        return y = gr(y, m),
        y.index = 0,
        y.sibling = null,
        y
    }
    function i(y, m, v) {
        return y.index = v,
        e ? (v = y.alternate,
        v !== null ? (v = v.index,
        v < m ? (y.flags |= 2,
        m) : v) : (y.flags |= 2,
        m)) : (y.flags |= 1048576,
        m)
    }
    function s(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function l(y, m, v, T) {
        return m === null || m.tag !== 6 ? (m = wl(v, y.mode, T),
        m.return = y,
        m) : (m = o(m, v),
        m.return = y,
        m)
    }
    function a(y, m, v, T) {
        var R = v.type;
        return R === no ? c(y, m, v.props.children, T, v.key) : m !== null && (m.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Xn && Ld(R) === m.type) ? (T = o(m, v.props),
        T.ref = Zo(y, m, v),
        T.return = y,
        T) : (T = Ms(v.type, v.key, v.props, null, y.mode, T),
        T.ref = Zo(y, m, v),
        T.return = y,
        T)
    }
    function u(y, m, v, T) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = xl(v, y.mode, T),
        m.return = y,
        m) : (m = o(m, v.children || []),
        m.return = y,
        m)
    }
    function c(y, m, v, T, R) {
        return m === null || m.tag !== 7 ? (m = Br(v, y.mode, T, R),
        m.return = y,
        m) : (m = o(m, v),
        m.return = y,
        m)
    }
    function d(y, m, v) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = wl("" + m, y.mode, v),
            m.return = y,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Zi:
                return v = Ms(m.type, m.key, m.props, null, y.mode, v),
                v.ref = Zo(y, null, m),
                v.return = y,
                v;
            case to:
                return m = xl(m, y.mode, v),
                m.return = y,
                m;
            case Xn:
                var T = m._init;
                return d(y, T(m._payload), v)
            }
            if (ii(m) || Yo(m))
                return m = Br(m, y.mode, v, null),
                m.return = y,
                m;
            cs(y, m)
        }
        return null
    }
    function f(y, m, v, T) {
        var R = m !== null ? m.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return R !== null ? null : l(y, m, "" + v, T);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Zi:
                return v.key === R ? a(y, m, v, T) : null;
            case to:
                return v.key === R ? u(y, m, v, T) : null;
            case Xn:
                return R = v._init,
                f(y, m, R(v._payload), T)
            }
            if (ii(v) || Yo(v))
                return R !== null ? null : c(y, m, v, T, null);
            cs(y, v)
        }
        return null
    }
    function p(y, m, v, T, R) {
        if (typeof T == "string" && T !== "" || typeof T == "number")
            return y = y.get(v) || null,
            l(m, y, "" + T, R);
        if (typeof T == "object" && T !== null) {
            switch (T.$$typeof) {
            case Zi:
                return y = y.get(T.key === null ? v : T.key) || null,
                a(m, y, T, R);
            case to:
                return y = y.get(T.key === null ? v : T.key) || null,
                u(m, y, T, R);
            case Xn:
                var N = T._init;
                return p(y, m, v, N(T._payload), R)
            }
            if (ii(T) || Yo(T))
                return y = y.get(v) || null,
                c(m, y, T, R, null);
            cs(m, T)
        }
        return null
    }
    function w(y, m, v, T) {
        for (var R = null, N = null, M = m, _ = m = 0, V = null; M !== null && _ < v.length; _++) {
            M.index > _ ? (V = M,
            M = null) : V = M.sibling;
            var z = f(y, M, v[_], T);
            if (z === null) {
                M === null && (M = V);
                break
            }
            e && M && z.alternate === null && t(y, M),
            m = i(z, m, _),
            N === null ? R = z : N.sibling = z,
            N = z,
            M = V
        }
        if (_ === v.length)
            return n(y, M),
            Fe && Nr(y, _),
            R;
        if (M === null) {
            for (; _ < v.length; _++)
                M = d(y, v[_], T),
                M !== null && (m = i(M, m, _),
                N === null ? R = M : N.sibling = M,
                N = M);
            return Fe && Nr(y, _),
            R
        }
        for (M = r(y, M); _ < v.length; _++)
            V = p(M, y, _, v[_], T),
            V !== null && (e && V.alternate !== null && M.delete(V.key === null ? _ : V.key),
            m = i(V, m, _),
            N === null ? R = V : N.sibling = V,
            N = V);
        return e && M.forEach(function(ae) {
            return t(y, ae)
        }),
        Fe && Nr(y, _),
        R
    }
    function x(y, m, v, T) {
        var R = Yo(v);
        if (typeof R != "function")
            throw Error(Q(150));
        if (v = R.call(v),
        v == null)
            throw Error(Q(151));
        for (var N = R = null, M = m, _ = m = 0, V = null, z = v.next(); M !== null && !z.done; _++,
        z = v.next()) {
            M.index > _ ? (V = M,
            M = null) : V = M.sibling;
            var ae = f(y, M, z.value, T);
            if (ae === null) {
                M === null && (M = V);
                break
            }
            e && M && ae.alternate === null && t(y, M),
            m = i(ae, m, _),
            N === null ? R = ae : N.sibling = ae,
            N = ae,
            M = V
        }
        if (z.done)
            return n(y, M),
            Fe && Nr(y, _),
            R;
        if (M === null) {
            for (; !z.done; _++,
            z = v.next())
                z = d(y, z.value, T),
                z !== null && (m = i(z, m, _),
                N === null ? R = z : N.sibling = z,
                N = z);
            return Fe && Nr(y, _),
            R
        }
        for (M = r(y, M); !z.done; _++,
        z = v.next())
            z = p(M, y, _, z.value, T),
            z !== null && (e && z.alternate !== null && M.delete(z.key === null ? _ : z.key),
            m = i(z, m, _),
            N === null ? R = z : N.sibling = z,
            N = z);
        return e && M.forEach(function(re) {
            return t(y, re)
        }),
        Fe && Nr(y, _),
        R
    }
    function S(y, m, v, T) {
        if (typeof v == "object" && v !== null && v.type === no && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Zi:
                e: {
                    for (var R = v.key, N = m; N !== null; ) {
                        if (N.key === R) {
                            if (R = v.type,
                            R === no) {
                                if (N.tag === 7) {
                                    n(y, N.sibling),
                                    m = o(N, v.props.children),
                                    m.return = y,
                                    y = m;
                                    break e
                                }
                            } else if (N.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Xn && Ld(R) === N.type) {
                                n(y, N.sibling),
                                m = o(N, v.props),
                                m.ref = Zo(y, N, v),
                                m.return = y,
                                y = m;
                                break e
                            }
                            n(y, N);
                            break
                        } else
                            t(y, N);
                        N = N.sibling
                    }
                    v.type === no ? (m = Br(v.props.children, y.mode, T, v.key),
                    m.return = y,
                    y = m) : (T = Ms(v.type, v.key, v.props, null, y.mode, T),
                    T.ref = Zo(y, m, v),
                    T.return = y,
                    y = T)
                }
                return s(y);
            case to:
                e: {
                    for (N = v.key; m !== null; ) {
                        if (m.key === N)
                            if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                                n(y, m.sibling),
                                m = o(m, v.children || []),
                                m.return = y,
                                y = m;
                                break e
                            } else {
                                n(y, m);
                                break
                            }
                        else
                            t(y, m);
                        m = m.sibling
                    }
                    m = xl(v, y.mode, T),
                    m.return = y,
                    y = m
                }
                return s(y);
            case Xn:
                return N = v._init,
                S(y, m, N(v._payload), T)
            }
            if (ii(v))
                return w(y, m, v, T);
            if (Yo(v))
                return x(y, m, v, T);
            cs(y, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        m !== null && m.tag === 6 ? (n(y, m.sibling),
        m = o(m, v),
        m.return = y,
        y = m) : (n(y, m),
        m = wl(v, y.mode, T),
        m.return = y,
        y = m),
        s(y)) : n(y, m)
    }
    return S
}
var Fo = wh(!0)
  , xh = wh(!1)
  , Ks = br(null)
  , Xs = null
  , co = null
  , uc = null;
function cc() {
    uc = co = Xs = null
}
function dc(e) {
    var t = Ks.current;
    _e(Ks),
    e._currentValue = t
}
function iu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function wo(e, t) {
    Xs = e,
    uc = co = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Et = !0),
    e.firstContext = null)
}
function Gt(e) {
    var t = e._currentValue;
    if (uc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        co === null) {
            if (Xs === null)
                throw Error(Q(308));
            co = e,
            Xs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            co = co.next = e;
    return t
}
var Ar = null;
function fc(e) {
    Ar === null ? Ar = [e] : Ar.push(e)
}
function Sh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    fc(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    jn(e, r)
}
function jn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var qn = !1;
function pc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ch(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function An(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function pr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    ke & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        jn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    fc(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    jn(e, n)
}
function ks(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ju(e, n)
    }
}
function zd(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function qs(e, t, n, r) {
    var o = e.updateQueue;
    qn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0,
        c = u = a = null,
        l = i;
        do {
            var f = l.lane
              , p = l.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: p,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var w = e
                      , x = l;
                    switch (f = t,
                    p = n,
                    x.tag) {
                    case 1:
                        if (w = x.payload,
                        typeof w == "function") {
                            d = w.call(p, d, f);
                            break e
                        }
                        d = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = x.payload,
                        f = typeof w == "function" ? w.call(p, d, f) : w,
                        f == null)
                            break e;
                        d = Ue({}, d, f);
                        break e;
                    case 2:
                        qn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                f = o.effects,
                f === null ? o.effects = [l] : f.push(l))
            } else
                p = {
                    eventTime: p,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = p,
                a = d) : c = c.next = p,
                s |= f;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                f = l,
                l = f.next,
                f.next = null,
                o.lastBaseUpdate = f,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Gr |= s,
        e.lanes = s,
        e.memoizedState = d
    }
}
function Dd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(Q(191, o));
                o.call(r)
            }
        }
}
var Gi = {}
  , Sn = br(Gi)
  , Ii = br(Gi)
  , Mi = br(Gi);
function Or(e) {
    if (e === Gi)
        throw Error(Q(174));
    return e
}
function hc(e, t) {
    switch (Me(Mi, t),
    Me(Ii, e),
    Me(Sn, Gi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Dl(t, e)
    }
    _e(Sn),
    Me(Sn, t)
}
function jo() {
    _e(Sn),
    _e(Ii),
    _e(Mi)
}
function Eh(e) {
    Or(Mi.current);
    var t = Or(Sn.current)
      , n = Dl(t, e.type);
    t !== n && (Me(Ii, e),
    Me(Sn, n))
}
function mc(e) {
    Ii.current === e && (_e(Sn),
    _e(Ii))
}
var ze = br(0);
function Js(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var pl = [];
function gc() {
    for (var e = 0; e < pl.length; e++)
        pl[e]._workInProgressVersionPrimary = null;
    pl.length = 0
}
var Ps = Un.ReactCurrentDispatcher
  , hl = Un.ReactCurrentBatchConfig
  , Hr = 0
  , De = null
  , Xe = null
  , et = null
  , Zs = !1
  , hi = !1
  , Ai = 0
  , vy = 0;
function lt() {
    throw Error(Q(321))
}
function vc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!sn(e[n], t[n]))
            return !1;
    return !0
}
function yc(e, t, n, r, o, i) {
    if (Hr = i,
    De = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ps.current = e === null || e.memoizedState === null ? Sy : Cy,
    e = n(r, o),
    hi) {
        i = 0;
        do {
            if (hi = !1,
            Ai = 0,
            25 <= i)
                throw Error(Q(301));
            i += 1,
            et = Xe = null,
            t.updateQueue = null,
            Ps.current = Ey,
            e = n(r, o)
        } while (hi)
    }
    if (Ps.current = ea,
    t = Xe !== null && Xe.next !== null,
    Hr = 0,
    et = Xe = De = null,
    Zs = !1,
    t)
        throw Error(Q(300));
    return e
}
function wc() {
    var e = Ai !== 0;
    return Ai = 0,
    e
}
function pn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return et === null ? De.memoizedState = et = e : et = et.next = e,
    et
}
function Qt() {
    if (Xe === null) {
        var e = De.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Xe.next;
    var t = et === null ? De.memoizedState : et.next;
    if (t !== null)
        et = t,
        Xe = e;
    else {
        if (e === null)
            throw Error(Q(310));
        Xe = e,
        e = {
            memoizedState: Xe.memoizedState,
            baseState: Xe.baseState,
            baseQueue: Xe.baseQueue,
            queue: Xe.queue,
            next: null
        },
        et === null ? De.memoizedState = et = e : et = et.next = e
    }
    return et
}
function Oi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ml(e) {
    var t = Qt()
      , n = t.queue;
    if (n === null)
        throw Error(Q(311));
    n.lastRenderedReducer = e;
    var r = Xe
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var c = u.lane;
            if ((Hr & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                s = r) : a = a.next = d,
                De.lanes |= c,
                Gr |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        sn(r, t.memoizedState) || (Et = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            De.lanes |= i,
            Gr |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function gl(e) {
    var t = Qt()
      , n = t.queue;
    if (n === null)
        throw Error(Q(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        sn(i, t.memoizedState) || (Et = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function bh() {}
function kh(e, t) {
    var n = De
      , r = Qt()
      , o = t()
      , i = !sn(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Et = !0),
    r = r.queue,
    xc(Rh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || et !== null && et.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        _i(9, Th.bind(null, n, r, o, t), void 0, null),
        tt === null)
            throw Error(Q(349));
        Hr & 30 || Ph(n, t, o)
    }
    return o
}
function Ph(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = De.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    De.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Th(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Nh(t) && Ih(e)
}
function Rh(e, t, n) {
    return n(function() {
        Nh(t) && Ih(e)
    })
}
function Nh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !sn(e, n)
    } catch {
        return !0
    }
}
function Ih(e) {
    var t = jn(e, 1);
    t !== null && on(t, e, 1, -1)
}
function Ud(e) {
    var t = pn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Oi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = xy.bind(null, De, e),
    [t.memoizedState, e]
}
function _i(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = De.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    De.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Mh() {
    return Qt().memoizedState
}
function Ts(e, t, n, r) {
    var o = pn();
    De.flags |= e,
    o.memoizedState = _i(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ea(e, t, n, r) {
    var o = Qt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Xe !== null) {
        var s = Xe.memoizedState;
        if (i = s.destroy,
        r !== null && vc(r, s.deps)) {
            o.memoizedState = _i(t, n, i, r);
            return
        }
    }
    De.flags |= e,
    o.memoizedState = _i(1 | t, n, i, r)
}
function Bd(e, t) {
    return Ts(8390656, 8, e, t)
}
function xc(e, t) {
    return Ea(2048, 8, e, t)
}
function Ah(e, t) {
    return Ea(4, 2, e, t)
}
function Oh(e, t) {
    return Ea(4, 4, e, t)
}
function _h(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Fh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ea(4, 4, _h.bind(null, t, e), n)
}
function Sc() {}
function jh(e, t) {
    var n = Qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Lh(e, t) {
    var n = Qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vc(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function zh(e, t, n) {
    return Hr & 21 ? (sn(n, t) || (n = Wp(),
    De.lanes |= n,
    Gr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Et = !0),
    e.memoizedState = n)
}
function yy(e, t) {
    var n = Ie;
    Ie = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = hl.transition;
    hl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Ie = n,
        hl.transition = r
    }
}
function Dh() {
    return Qt().memoizedState
}
function wy(e, t, n) {
    var r = mr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Uh(e))
        Bh(t, n);
    else if (n = Sh(e, t, n, r),
    n !== null) {
        var o = gt();
        on(n, e, r, o),
        $h(n, t, r)
    }
}
function xy(e, t, n) {
    var r = mr(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Uh(e))
        Bh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                sn(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    fc(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Sh(e, t, o, r),
        n !== null && (o = gt(),
        on(n, e, r, o),
        $h(n, t, r))
    }
}
function Uh(e) {
    var t = e.alternate;
    return e === De || t !== null && t === De
}
function Bh(e, t) {
    hi = Zs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function $h(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Ju(e, n)
    }
}
var ea = {
    readContext: Gt,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1
}
  , Sy = {
    readContext: Gt,
    useCallback: function(e, t) {
        return pn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Gt,
    useEffect: Bd,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ts(4194308, 4, _h.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ts(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ts(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = pn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = pn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = wy.bind(null, De, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = pn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Ud,
    useDebugValue: Sc,
    useDeferredValue: function(e) {
        return pn().memoizedState = e
    },
    useTransition: function() {
        var e = Ud(!1)
          , t = e[0];
        return e = yy.bind(null, e[1]),
        pn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = De
          , o = pn();
        if (Fe) {
            if (n === void 0)
                throw Error(Q(407));
            n = n()
        } else {
            if (n = t(),
            tt === null)
                throw Error(Q(349));
            Hr & 30 || Ph(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        Bd(Rh.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        _i(9, Th.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = pn()
          , t = tt.identifierPrefix;
        if (Fe) {
            var n = Mn
              , r = In;
            n = (r & ~(1 << 32 - rn(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Ai++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = vy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Cy = {
    readContext: Gt,
    useCallback: jh,
    useContext: Gt,
    useEffect: xc,
    useImperativeHandle: Fh,
    useInsertionEffect: Ah,
    useLayoutEffect: Oh,
    useMemo: Lh,
    useReducer: ml,
    useRef: Mh,
    useState: function() {
        return ml(Oi)
    },
    useDebugValue: Sc,
    useDeferredValue: function(e) {
        var t = Qt();
        return zh(t, Xe.memoizedState, e)
    },
    useTransition: function() {
        var e = ml(Oi)[0]
          , t = Qt().memoizedState;
        return [e, t]
    },
    useMutableSource: bh,
    useSyncExternalStore: kh,
    useId: Dh,
    unstable_isNewReconciler: !1
}
  , Ey = {
    readContext: Gt,
    useCallback: jh,
    useContext: Gt,
    useEffect: xc,
    useImperativeHandle: Fh,
    useInsertionEffect: Ah,
    useLayoutEffect: Oh,
    useMemo: Lh,
    useReducer: gl,
    useRef: Mh,
    useState: function() {
        return gl(Oi)
    },
    useDebugValue: Sc,
    useDeferredValue: function(e) {
        var t = Qt();
        return Xe === null ? t.memoizedState = e : zh(t, Xe.memoizedState, e)
    },
    useTransition: function() {
        var e = gl(Oi)[0]
          , t = Qt().memoizedState;
        return [e, t]
    },
    useMutableSource: bh,
    useSyncExternalStore: kh,
    useId: Dh,
    unstable_isNewReconciler: !1
};
function qt(e, t) {
    if (e && e.defaultProps) {
        t = Ue({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function su(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Ue({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ba = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? qr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = gt()
          , o = mr(e)
          , i = An(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = pr(e, i, o),
        t !== null && (on(t, e, o, r),
        ks(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = gt()
          , o = mr(e)
          , i = An(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = pr(e, i, o),
        t !== null && (on(t, e, o, r),
        ks(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = gt()
          , r = mr(e)
          , o = An(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = pr(e, o, r),
        t !== null && (on(t, e, r, n),
        ks(t, e, r))
    }
};
function $d(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Pi(n, r) || !Pi(o, i) : !0
}
function Wh(e, t, n) {
    var r = !1
      , o = yr
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = Gt(i) : (o = kt(t) ? Wr : ft.current,
    r = t.contextTypes,
    i = (r = r != null) ? Oo(e, o) : yr),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ba,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Wd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ba.enqueueReplaceState(t, t.state, null)
}
function au(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    pc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Gt(i) : (i = kt(t) ? Wr : ft.current,
    o.context = Oo(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (su(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && ba.enqueueReplaceState(o, o.state, null),
    qs(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Lo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += qv(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function vl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function lu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var by = typeof WeakMap == "function" ? WeakMap : Map;
function Vh(e, t, n) {
    n = An(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        na || (na = !0,
        yu = r),
        lu(e, t)
    }
    ,
    n
}
function Hh(e, t, n) {
    n = An(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            lu(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        lu(e, t),
        typeof r != "function" && (hr === null ? hr = new Set([this]) : hr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Vd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new by;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = zy.bind(null, e, t, n),
    t.then(e, e))
}
function Hd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Gd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = An(-1, 1),
    t.tag = 2,
    pr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var ky = Un.ReactCurrentOwner
  , Et = !1;
function ht(e, t, n, r) {
    t.child = e === null ? xh(t, null, n, r) : Fo(t, e.child, n, r)
}
function Qd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return wo(t, o),
    r = yc(e, t, n, r, i, o),
    n = wc(),
    e !== null && !Et ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ln(e, t, o)) : (Fe && n && sc(t),
    t.flags |= 1,
    ht(e, t, r, o),
    t.child)
}
function Yd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Nc(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        Gh(e, t, i, r, o)) : (e = Ms(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Pi,
        n(s, r) && e.ref === t.ref)
            return Ln(e, t, o)
    }
    return t.flags |= 1,
    e = gr(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Gh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Pi(i, r) && e.ref === t.ref)
            if (Et = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Et = !0);
            else
                return t.lanes = e.lanes,
                Ln(e, t, o)
    }
    return uu(e, t, n, r, o)
}
function Qh(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Me(po, It),
            It |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Me(po, It),
                It |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            Me(po, It),
            It |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        Me(po, It),
        It |= r;
    return ht(e, t, o, n),
    t.child
}
function Yh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function uu(e, t, n, r, o) {
    var i = kt(n) ? Wr : ft.current;
    return i = Oo(t, i),
    wo(t, o),
    n = yc(e, t, n, r, i, o),
    r = wc(),
    e !== null && !Et ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ln(e, t, o)) : (Fe && r && sc(t),
    t.flags |= 1,
    ht(e, t, n, o),
    t.child)
}
function Kd(e, t, n, r, o) {
    if (kt(n)) {
        var i = !0;
        Gs(t)
    } else
        i = !1;
    if (wo(t, o),
    t.stateNode === null)
        Rs(e, t),
        Wh(t, n, r),
        au(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Gt(u) : (u = kt(n) ? Wr : ft.current,
        u = Oo(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Wd(t, s, r, u),
        qn = !1;
        var f = t.memoizedState;
        s.state = f,
        qs(t, r, s, o),
        a = t.memoizedState,
        l !== r || f !== a || bt.current || qn ? (typeof c == "function" && (su(t, n, c, r),
        a = t.memoizedState),
        (l = qn || $d(t, n, l, r, f, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Ch(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : qt(t.type, l),
        s.props = u,
        d = t.pendingProps,
        f = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Gt(a) : (a = kt(n) ? Wr : ft.current,
        a = Oo(t, a));
        var p = n.getDerivedStateFromProps;
        (c = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || f !== a) && Wd(t, s, r, a),
        qn = !1,
        f = t.memoizedState,
        s.state = f,
        qs(t, r, s, o);
        var w = t.memoizedState;
        l !== d || f !== w || bt.current || qn ? (typeof p == "function" && (su(t, n, p, r),
        w = t.memoizedState),
        (u = qn || $d(t, n, u, r, f, w, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        s.props = r,
        s.state = w,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return cu(e, t, n, r, i, o)
}
function cu(e, t, n, r, o, i) {
    Yh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && _d(t, n, !1),
        Ln(e, t, i);
    r = t.stateNode,
    ky.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Fo(t, e.child, null, i),
    t.child = Fo(t, null, l, i)) : ht(e, t, l, i),
    t.memoizedState = r.state,
    o && _d(t, n, !0),
    t.child
}
function Kh(e) {
    var t = e.stateNode;
    t.pendingContext ? Od(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Od(e, t.context, !1),
    hc(e, t.containerInfo)
}
function Xd(e, t, n, r, o) {
    return _o(),
    lc(o),
    t.flags |= 256,
    ht(e, t, n, r),
    t.child
}
var du = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function fu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Xh(e, t, n) {
    var r = t.pendingProps, o = ze.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    Me(ze, o & 1),
    e === null)
        return ou(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Ta(s, r, 0, null),
        e = Br(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = fu(n),
        t.memoizedState = du,
        e) : Cc(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Py(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = gr(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = gr(l, i) : (i = Br(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? fu(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = du,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = gr(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Cc(e, t) {
    return t = Ta({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ds(e, t, n, r) {
    return r !== null && lc(r),
    Fo(t, e.child, null, n),
    e = Cc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Py(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = vl(Error(Q(422))),
        ds(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Ta({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Br(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Fo(t, e.child, null, s),
        t.child.memoizedState = fu(s),
        t.memoizedState = du,
        i);
    if (!(t.mode & 1))
        return ds(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(Q(419)),
        r = vl(i, r, void 0),
        ds(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Et || l) {
        if (r = tt,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            jn(e, o),
            on(r, e, o, -1))
        }
        return Rc(),
        r = vl(Error(Q(421))),
        ds(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Dy.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    At = fr(o.nextSibling),
    Ot = t,
    Fe = !0,
    nn = null,
    e !== null && ($t[Wt++] = In,
    $t[Wt++] = Mn,
    $t[Wt++] = Vr,
    In = e.id,
    Mn = e.overflow,
    Vr = t),
    t = Cc(t, r.children),
    t.flags |= 4096,
    t)
}
function qd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    iu(e.return, t, n)
}
function yl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function qh(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (ht(e, t, r.children, n),
    r = ze.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && qd(e, n, t);
                else if (e.tag === 19)
                    qd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Me(ze, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Js(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            yl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Js(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            yl(t, !0, n, null, i);
            break;
        case "together":
            yl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Rs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ln(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Gr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(Q(153));
    if (t.child !== null) {
        for (e = t.child,
        n = gr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = gr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Ty(e, t, n) {
    switch (t.tag) {
    case 3:
        Kh(t),
        _o();
        break;
    case 5:
        Eh(t);
        break;
    case 1:
        kt(t.type) && Gs(t);
        break;
    case 4:
        hc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        Me(Ks, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Me(ze, ze.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Xh(e, t, n) : (Me(ze, ze.current & 1),
            e = Ln(e, t, n),
            e !== null ? e.sibling : null);
        Me(ze, ze.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return qh(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        Me(ze, ze.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Qh(e, t, n)
    }
    return Ln(e, t, n)
}
var Jh, pu, Zh, em;
Jh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
pu = function() {}
;
Zh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Or(Sn.current);
        var i = null;
        switch (n) {
        case "input":
            o = Fl(e, o),
            r = Fl(e, r),
            i = [];
            break;
        case "select":
            o = Ue({}, o, {
                value: void 0
            }),
            r = Ue({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = zl(e, o),
            r = zl(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vs)
        }
        Ul(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (wi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (wi.hasOwnProperty(u) ? (a != null && u === "onScroll" && Oe("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
em = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function ei(e, t) {
    if (!Fe)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ut(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Ry(e, t, n) {
    var r = t.pendingProps;
    switch (ac(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ut(t),
        null;
    case 1:
        return kt(t.type) && Hs(),
        ut(t),
        null;
    case 3:
        return r = t.stateNode,
        jo(),
        _e(bt),
        _e(ft),
        gc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (us(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        nn !== null && (Su(nn),
        nn = null))),
        pu(e, t),
        ut(t),
        null;
    case 5:
        mc(t);
        var o = Or(Mi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Zh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(Q(166));
                return ut(t),
                null
            }
            if (e = Or(Sn.current),
            us(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[vn] = t,
                r[Ni] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    Oe("cancel", r),
                    Oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < ai.length; o++)
                        Oe(ai[o], r);
                    break;
                case "source":
                    Oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    Oe("error", r),
                    Oe("load", r);
                    break;
                case "details":
                    Oe("toggle", r);
                    break;
                case "input":
                    sd(r, i),
                    Oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    Oe("invalid", r);
                    break;
                case "textarea":
                    ld(r, i),
                    Oe("invalid", r)
                }
                Ul(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && ls(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && ls(r.textContent, l, e),
                        o = ["children", "" + l]) : wi.hasOwnProperty(s) && l != null && s === "onScroll" && Oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    es(r),
                    ad(r, i, !0);
                    break;
                case "textarea":
                    es(r),
                    ud(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Vs)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Rp(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[vn] = t,
                e[Ni] = r,
                Jh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Bl(n, r),
                    n) {
                    case "dialog":
                        Oe("cancel", e),
                        Oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < ai.length; o++)
                            Oe(ai[o], e);
                        o = r;
                        break;
                    case "source":
                        Oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Oe("error", e),
                        Oe("load", e),
                        o = r;
                        break;
                    case "details":
                        Oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        sd(e, r),
                        o = Fl(e, r),
                        Oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Ue({}, r, {
                            value: void 0
                        }),
                        Oe("invalid", e);
                        break;
                    case "textarea":
                        ld(e, r),
                        o = zl(e, r),
                        Oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Ul(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? Mp(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Np(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && xi(e, a) : typeof a == "number" && xi(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (wi.hasOwnProperty(i) ? a != null && i === "onScroll" && Oe("scroll", e) : a != null && Gu(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        es(e),
                        ad(e, r, !1);
                        break;
                    case "textarea":
                        es(e),
                        ud(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + vr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? mo(e, !!r.multiple, i, !1) : r.defaultValue != null && mo(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Vs)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ut(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            em(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(Q(166));
            if (n = Or(Mi.current),
            Or(Sn.current),
            us(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[vn] = t,
                (i = r.nodeValue !== n) && (e = Ot,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ls(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ls(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[vn] = t,
                t.stateNode = r
        }
        return ut(t),
        null;
    case 13:
        if (_e(ze),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Fe && At !== null && t.mode & 1 && !(t.flags & 128))
                yh(),
                _o(),
                t.flags |= 98560,
                i = !1;
            else if (i = us(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(Q(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(Q(317));
                    i[vn] = t
                } else
                    _o(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ut(t),
                i = !1
            } else
                nn !== null && (Su(nn),
                nn = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ze.current & 1 ? Je === 0 && (Je = 3) : Rc())),
        t.updateQueue !== null && (t.flags |= 4),
        ut(t),
        null);
    case 4:
        return jo(),
        pu(e, t),
        e === null && Ti(t.stateNode.containerInfo),
        ut(t),
        null;
    case 10:
        return dc(t.type._context),
        ut(t),
        null;
    case 17:
        return kt(t.type) && Hs(),
        ut(t),
        null;
    case 19:
        if (_e(ze),
        i = t.memoizedState,
        i === null)
            return ut(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                ei(i, !1);
            else {
                if (Je !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Js(e),
                        s !== null) {
                            for (t.flags |= 128,
                            ei(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Me(ze, ze.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Ye() > zo && (t.flags |= 128,
                r = !0,
                ei(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Js(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    ei(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !Fe)
                        return ut(t),
                        null
                } else
                    2 * Ye() - i.renderingStartTime > zo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    ei(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Ye(),
        t.sibling = null,
        n = ze.current,
        Me(ze, r ? n & 1 | 2 : n & 1),
        t) : (ut(t),
        null);
    case 22:
    case 23:
        return Tc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? It & 1073741824 && (ut(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(Q(156, t.tag))
}
function Ny(e, t) {
    switch (ac(t),
    t.tag) {
    case 1:
        return kt(t.type) && Hs(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return jo(),
        _e(bt),
        _e(ft),
        gc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return mc(t),
        null;
    case 13:
        if (_e(ze),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(Q(340));
            _o()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return _e(ze),
        null;
    case 4:
        return jo(),
        null;
    case 10:
        return dc(t.type._context),
        null;
    case 22:
    case 23:
        return Tc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var fs = !1
  , dt = !1
  , Iy = typeof WeakSet == "function" ? WeakSet : Set
  , le = null;
function fo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                He(e, t, r)
            }
        else
            n.current = null
}
function hu(e, t, n) {
    try {
        n()
    } catch (r) {
        He(e, t, r)
    }
}
var Jd = !1;
function My(e, t) {
    if (ql = Bs,
    e = ih(),
    ic(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var p; d !== n || o !== 0 && d.nodeType !== 3 || (l = s + o),
                        d !== i || r !== 0 && d.nodeType !== 3 || (a = s + r),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (p = d.firstChild) !== null; )
                            f = d,
                            d = p;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === o && (l = s),
                            f === i && ++c === r && (a = s),
                            (p = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = p
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Jl = {
        focusedElem: e,
        selectionRange: n
    },
    Bs = !1,
    le = t; le !== null; )
        if (t = le,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            le = e;
        else
            for (; le !== null; ) {
                t = le;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var x = w.memoizedProps
                                  , S = w.memoizedState
                                  , y = t.stateNode
                                  , m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? x : qt(t.type, x), S);
                                y.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(Q(163))
                        }
                } catch (T) {
                    He(t, t.return, T)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    le = e;
                    break
                }
                le = t.return
            }
    return w = Jd,
    Jd = !1,
    w
}
function mi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && hu(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function ka(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function mu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function tm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    tm(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[vn],
    delete t[Ni],
    delete t[tu],
    delete t[py],
    delete t[hy])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function nm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Zd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || nm(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function gu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Vs));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (gu(e, t, n),
        e = e.sibling; e !== null; )
            gu(e, t, n),
            e = e.sibling
}
function vu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (vu(e, t, n),
        e = e.sibling; e !== null; )
            vu(e, t, n),
            e = e.sibling
}
var ot = null
  , tn = !1;
function Gn(e, t, n) {
    for (n = n.child; n !== null; )
        rm(e, t, n),
        n = n.sibling
}
function rm(e, t, n) {
    if (xn && typeof xn.onCommitFiberUnmount == "function")
        try {
            xn.onCommitFiberUnmount(va, n)
        } catch {}
    switch (n.tag) {
    case 5:
        dt || fo(n, t);
    case 6:
        var r = ot
          , o = tn;
        ot = null,
        Gn(e, t, n),
        ot = r,
        tn = o,
        ot !== null && (tn ? (e = ot,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ot.removeChild(n.stateNode));
        break;
    case 18:
        ot !== null && (tn ? (e = ot,
        n = n.stateNode,
        e.nodeType === 8 ? dl(e.parentNode, n) : e.nodeType === 1 && dl(e, n),
        bi(e)) : dl(ot, n.stateNode));
        break;
    case 4:
        r = ot,
        o = tn,
        ot = n.stateNode.containerInfo,
        tn = !0,
        Gn(e, t, n),
        ot = r,
        tn = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!dt && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && hu(n, t, s),
                o = o.next
            } while (o !== r)
        }
        Gn(e, t, n);
        break;
    case 1:
        if (!dt && (fo(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                He(n, t, l)
            }
        Gn(e, t, n);
        break;
    case 21:
        Gn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (dt = (r = dt) || n.memoizedState !== null,
        Gn(e, t, n),
        dt = r) : Gn(e, t, n);
        break;
    default:
        Gn(e, t, n)
    }
}
function ef(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Iy),
        t.forEach(function(r) {
            var o = Uy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function Kt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ot = l.stateNode,
                        tn = !1;
                        break e;
                    case 3:
                        ot = l.stateNode.containerInfo,
                        tn = !0;
                        break e;
                    case 4:
                        ot = l.stateNode.containerInfo,
                        tn = !0;
                        break e
                    }
                    l = l.return
                }
                if (ot === null)
                    throw Error(Q(160));
                rm(i, s, o),
                ot = null,
                tn = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                He(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            om(t, e),
            t = t.sibling
}
function om(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Kt(t, e),
        cn(e),
        r & 4) {
            try {
                mi(3, e, e.return),
                ka(3, e)
            } catch (x) {
                He(e, e.return, x)
            }
            try {
                mi(5, e, e.return)
            } catch (x) {
                He(e, e.return, x)
            }
        }
        break;
    case 1:
        Kt(t, e),
        cn(e),
        r & 512 && n !== null && fo(n, n.return);
        break;
    case 5:
        if (Kt(t, e),
        cn(e),
        r & 512 && n !== null && fo(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                xi(o, "")
            } catch (x) {
                He(e, e.return, x)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Pp(o, i),
                    Bl(l, s);
                    var u = Bl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , d = a[s + 1];
                        c === "style" ? Mp(o, d) : c === "dangerouslySetInnerHTML" ? Np(o, d) : c === "children" ? xi(o, d) : Gu(o, c, d, u)
                    }
                    switch (l) {
                    case "input":
                        jl(o, i);
                        break;
                    case "textarea":
                        Tp(o, i);
                        break;
                    case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        p != null ? mo(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? mo(o, !!i.multiple, i.defaultValue, !0) : mo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Ni] = i
                } catch (x) {
                    He(e, e.return, x)
                }
        }
        break;
    case 6:
        if (Kt(t, e),
        cn(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(Q(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (x) {
                He(e, e.return, x)
            }
        }
        break;
    case 3:
        if (Kt(t, e),
        cn(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                bi(t.containerInfo)
            } catch (x) {
                He(e, e.return, x)
            }
        break;
    case 4:
        Kt(t, e),
        cn(e);
        break;
    case 13:
        Kt(t, e),
        cn(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (kc = Ye())),
        r & 4 && ef(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (dt = (u = dt) || c,
        Kt(t, e),
        dt = u) : Kt(t, e),
        cn(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (le = e,
                c = e.child; c !== null; ) {
                    for (d = le = c; le !== null; ) {
                        switch (f = le,
                        p = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            mi(4, f, f.return);
                            break;
                        case 1:
                            fo(f, f.return);
                            var w = f.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (x) {
                                    He(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            fo(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                nf(d);
                                continue
                            }
                        }
                        p !== null ? (p.return = f,
                        le = p) : nf(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = d.stateNode,
                            a = d.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Ip("display", s))
                        } catch (x) {
                            He(e, e.return, x)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (x) {
                            He(e, e.return, x)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Kt(t, e),
        cn(e),
        r & 4 && ef(e);
        break;
    case 21:
        break;
    default:
        Kt(t, e),
        cn(e)
    }
}
function cn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (nm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(Q(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (xi(o, ""),
                r.flags &= -33);
                var i = Zd(e);
                vu(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = Zd(e);
                gu(e, l, s);
                break;
            default:
                throw Error(Q(161))
            }
        } catch (a) {
            He(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Ay(e, t, n) {
    le = e,
    im(e)
}
function im(e, t, n) {
    for (var r = (e.mode & 1) !== 0; le !== null; ) {
        var o = le
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || fs;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || dt;
                l = fs;
                var u = dt;
                if (fs = s,
                (dt = a) && !u)
                    for (le = o; le !== null; )
                        s = le,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? rf(o) : a !== null ? (a.return = s,
                        le = a) : rf(o);
                for (; i !== null; )
                    le = i,
                    im(i),
                    i = i.sibling;
                le = o,
                fs = l,
                dt = u
            }
            tf(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            le = i) : tf(e)
    }
}
function tf(e) {
    for (; le !== null; ) {
        var t = le;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        dt || ka(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !dt)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : qt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Dd(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Dd(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && bi(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(Q(163))
                    }
                dt || t.flags & 512 && mu(t)
            } catch (f) {
                He(t, t.return, f)
            }
        }
        if (t === e) {
            le = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            le = n;
            break
        }
        le = t.return
    }
}
function nf(e) {
    for (; le !== null; ) {
        var t = le;
        if (t === e) {
            le = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            le = n;
            break
        }
        le = t.return
    }
}
function rf(e) {
    for (; le !== null; ) {
        var t = le;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ka(4, t)
                } catch (a) {
                    He(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        He(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    mu(t)
                } catch (a) {
                    He(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    mu(t)
                } catch (a) {
                    He(t, s, a)
                }
            }
        } catch (a) {
            He(t, t.return, a)
        }
        if (t === e) {
            le = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            le = l;
            break
        }
        le = t.return
    }
}
var Oy = Math.ceil
  , ta = Un.ReactCurrentDispatcher
  , Ec = Un.ReactCurrentOwner
  , Ht = Un.ReactCurrentBatchConfig
  , ke = 0
  , tt = null
  , Ke = null
  , it = 0
  , It = 0
  , po = br(0)
  , Je = 0
  , Fi = null
  , Gr = 0
  , Pa = 0
  , bc = 0
  , gi = null
  , Ct = null
  , kc = 0
  , zo = 1 / 0
  , Tn = null
  , na = !1
  , yu = null
  , hr = null
  , ps = !1
  , sr = null
  , ra = 0
  , vi = 0
  , wu = null
  , Ns = -1
  , Is = 0;
function gt() {
    return ke & 6 ? Ye() : Ns !== -1 ? Ns : Ns = Ye()
}
function mr(e) {
    return e.mode & 1 ? ke & 2 && it !== 0 ? it & -it : gy.transition !== null ? (Is === 0 && (Is = Wp()),
    Is) : (e = Ie,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Xp(e.type)),
    e) : 1
}
function on(e, t, n, r) {
    if (50 < vi)
        throw vi = 0,
        wu = null,
        Error(Q(185));
    Wi(e, n, r),
    (!(ke & 2) || e !== tt) && (e === tt && (!(ke & 2) && (Pa |= n),
    Je === 4 && Zn(e, it)),
    Pt(e, r),
    n === 1 && ke === 0 && !(t.mode & 1) && (zo = Ye() + 500,
    Ca && kr()))
}
function Pt(e, t) {
    var n = e.callbackNode;
    g0(e, t);
    var r = Us(e, e === tt ? it : 0);
    if (r === 0)
        n !== null && fd(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && fd(n),
        t === 1)
            e.tag === 0 ? my(of.bind(null, e)) : mh(of.bind(null, e)),
            dy(function() {
                !(ke & 6) && kr()
            }),
            n = null;
        else {
            switch (Vp(r)) {
            case 1:
                n = qu;
                break;
            case 4:
                n = Bp;
                break;
            case 16:
                n = Ds;
                break;
            case 536870912:
                n = $p;
                break;
            default:
                n = Ds
            }
            n = pm(n, sm.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function sm(e, t) {
    if (Ns = -1,
    Is = 0,
    ke & 6)
        throw Error(Q(327));
    var n = e.callbackNode;
    if (xo() && e.callbackNode !== n)
        return null;
    var r = Us(e, e === tt ? it : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = oa(e, r);
    else {
        t = r;
        var o = ke;
        ke |= 2;
        var i = lm();
        (tt !== e || it !== t) && (Tn = null,
        zo = Ye() + 500,
        Ur(e, t));
        do
            try {
                jy();
                break
            } catch (l) {
                am(e, l)
            }
        while (!0);
        cc(),
        ta.current = i,
        ke = o,
        Ke !== null ? t = 0 : (tt = null,
        it = 0,
        t = Je)
    }
    if (t !== 0) {
        if (t === 2 && (o = Gl(e),
        o !== 0 && (r = o,
        t = xu(e, o))),
        t === 1)
            throw n = Fi,
            Ur(e, 0),
            Zn(e, r),
            Pt(e, Ye()),
            n;
        if (t === 6)
            Zn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !_y(o) && (t = oa(e, r),
            t === 2 && (i = Gl(e),
            i !== 0 && (r = i,
            t = xu(e, i))),
            t === 1))
                throw n = Fi,
                Ur(e, 0),
                Zn(e, r),
                Pt(e, Ye()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(Q(345));
            case 2:
                Ir(e, Ct, Tn);
                break;
            case 3:
                if (Zn(e, r),
                (r & 130023424) === r && (t = kc + 500 - Ye(),
                10 < t)) {
                    if (Us(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        gt(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = eu(Ir.bind(null, e, Ct, Tn), t);
                    break
                }
                Ir(e, Ct, Tn);
                break;
            case 4:
                if (Zn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - rn(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = Ye() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Oy(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = eu(Ir.bind(null, e, Ct, Tn), r);
                    break
                }
                Ir(e, Ct, Tn);
                break;
            case 5:
                Ir(e, Ct, Tn);
                break;
            default:
                throw Error(Q(329))
            }
        }
    }
    return Pt(e, Ye()),
    e.callbackNode === n ? sm.bind(null, e) : null
}
function xu(e, t) {
    var n = gi;
    return e.current.memoizedState.isDehydrated && (Ur(e, t).flags |= 256),
    e = oa(e, t),
    e !== 2 && (t = Ct,
    Ct = n,
    t !== null && Su(t)),
    e
}
function Su(e) {
    Ct === null ? Ct = e : Ct.push.apply(Ct, e)
}
function _y(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!sn(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Zn(e, t) {
    for (t &= ~bc,
    t &= ~Pa,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - rn(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function of(e) {
    if (ke & 6)
        throw Error(Q(327));
    xo();
    var t = Us(e, 0);
    if (!(t & 1))
        return Pt(e, Ye()),
        null;
    var n = oa(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Gl(e);
        r !== 0 && (t = r,
        n = xu(e, r))
    }
    if (n === 1)
        throw n = Fi,
        Ur(e, 0),
        Zn(e, t),
        Pt(e, Ye()),
        n;
    if (n === 6)
        throw Error(Q(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ir(e, Ct, Tn),
    Pt(e, Ye()),
    null
}
function Pc(e, t) {
    var n = ke;
    ke |= 1;
    try {
        return e(t)
    } finally {
        ke = n,
        ke === 0 && (zo = Ye() + 500,
        Ca && kr())
    }
}
function Qr(e) {
    sr !== null && sr.tag === 0 && !(ke & 6) && xo();
    var t = ke;
    ke |= 1;
    var n = Ht.transition
      , r = Ie;
    try {
        if (Ht.transition = null,
        Ie = 1,
        e)
            return e()
    } finally {
        Ie = r,
        Ht.transition = n,
        ke = t,
        !(ke & 6) && kr()
    }
}
function Tc() {
    It = po.current,
    _e(po)
}
function Ur(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    cy(n)),
    Ke !== null)
        for (n = Ke.return; n !== null; ) {
            var r = n;
            switch (ac(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Hs();
                break;
            case 3:
                jo(),
                _e(bt),
                _e(ft),
                gc();
                break;
            case 5:
                mc(r);
                break;
            case 4:
                jo();
                break;
            case 13:
                _e(ze);
                break;
            case 19:
                _e(ze);
                break;
            case 10:
                dc(r.type._context);
                break;
            case 22:
            case 23:
                Tc()
            }
            n = n.return
        }
    if (tt = e,
    Ke = e = gr(e.current, null),
    it = It = t,
    Je = 0,
    Fi = null,
    bc = Pa = Gr = 0,
    Ct = gi = null,
    Ar !== null) {
        for (t = 0; t < Ar.length; t++)
            if (n = Ar[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Ar = null
    }
    return e
}
function am(e, t) {
    do {
        var n = Ke;
        try {
            if (cc(),
            Ps.current = ea,
            Zs) {
                for (var r = De.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Zs = !1
            }
            if (Hr = 0,
            et = Xe = De = null,
            hi = !1,
            Ai = 0,
            Ec.current = null,
            n === null || n.return === null) {
                Je = 1,
                Fi = t,
                Ke = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = it,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var p = Hd(s);
                    if (p !== null) {
                        p.flags &= -257,
                        Gd(p, s, l, i, t),
                        p.mode & 1 && Vd(i, u, t),
                        t = p,
                        a = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var x = new Set;
                            x.add(a),
                            t.updateQueue = x
                        } else
                            w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Vd(i, u, t),
                            Rc();
                            break e
                        }
                        a = Error(Q(426))
                    }
                } else if (Fe && l.mode & 1) {
                    var S = Hd(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        Gd(S, s, l, i, t),
                        lc(Lo(a, l));
                        break e
                    }
                }
                i = a = Lo(a, l),
                Je !== 4 && (Je = 2),
                gi === null ? gi = [i] : gi.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var y = Vh(i, a, t);
                        zd(i, y);
                        break e;
                    case 1:
                        l = a;
                        var m = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (hr === null || !hr.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var T = Hh(i, l, t);
                            zd(i, T);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            cm(n)
        } catch (R) {
            t = R,
            Ke === n && n !== null && (Ke = n = n.return);
            continue
        }
        break
    } while (!0)
}
function lm() {
    var e = ta.current;
    return ta.current = ea,
    e === null ? ea : e
}
function Rc() {
    (Je === 0 || Je === 3 || Je === 2) && (Je = 4),
    tt === null || !(Gr & 268435455) && !(Pa & 268435455) || Zn(tt, it)
}
function oa(e, t) {
    var n = ke;
    ke |= 2;
    var r = lm();
    (tt !== e || it !== t) && (Tn = null,
    Ur(e, t));
    do
        try {
            Fy();
            break
        } catch (o) {
            am(e, o)
        }
    while (!0);
    if (cc(),
    ke = n,
    ta.current = r,
    Ke !== null)
        throw Error(Q(261));
    return tt = null,
    it = 0,
    Je
}
function Fy() {
    for (; Ke !== null; )
        um(Ke)
}
function jy() {
    for (; Ke !== null && !a0(); )
        um(Ke)
}
function um(e) {
    var t = fm(e.alternate, e, It);
    e.memoizedProps = e.pendingProps,
    t === null ? cm(e) : Ke = t,
    Ec.current = null
}
function cm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Ny(n, t),
            n !== null) {
                n.flags &= 32767,
                Ke = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Je = 6,
                Ke = null;
                return
            }
        } else if (n = Ry(n, t, It),
        n !== null) {
            Ke = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Ke = t;
            return
        }
        Ke = t = e
    } while (t !== null);
    Je === 0 && (Je = 5)
}
function Ir(e, t, n) {
    var r = Ie
      , o = Ht.transition;
    try {
        Ht.transition = null,
        Ie = 1,
        Ly(e, t, n, r)
    } finally {
        Ht.transition = o,
        Ie = r
    }
    return null
}
function Ly(e, t, n, r) {
    do
        xo();
    while (sr !== null);
    if (ke & 6)
        throw Error(Q(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(Q(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (v0(e, i),
    e === tt && (Ke = tt = null,
    it = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ps || (ps = !0,
    pm(Ds, function() {
        return xo(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Ht.transition,
        Ht.transition = null;
        var s = Ie;
        Ie = 1;
        var l = ke;
        ke |= 4,
        Ec.current = null,
        My(e, n),
        om(n, e),
        ry(Jl),
        Bs = !!ql,
        Jl = ql = null,
        e.current = n,
        Ay(n),
        l0(),
        ke = l,
        Ie = s,
        Ht.transition = i
    } else
        e.current = n;
    if (ps && (ps = !1,
    sr = e,
    ra = o),
    i = e.pendingLanes,
    i === 0 && (hr = null),
    d0(n.stateNode),
    Pt(e, Ye()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (na)
        throw na = !1,
        e = yu,
        yu = null,
        e;
    return ra & 1 && e.tag !== 0 && xo(),
    i = e.pendingLanes,
    i & 1 ? e === wu ? vi++ : (vi = 0,
    wu = e) : vi = 0,
    kr(),
    null
}
function xo() {
    if (sr !== null) {
        var e = Vp(ra)
          , t = Ht.transition
          , n = Ie;
        try {
            if (Ht.transition = null,
            Ie = 16 > e ? 16 : e,
            sr === null)
                var r = !1;
            else {
                if (e = sr,
                sr = null,
                ra = 0,
                ke & 6)
                    throw Error(Q(331));
                var o = ke;
                for (ke |= 4,
                le = e.current; le !== null; ) {
                    var i = le
                      , s = i.child;
                    if (le.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (le = u; le !== null; ) {
                                    var c = le;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        mi(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        le = d;
                                    else
                                        for (; le !== null; ) {
                                            c = le;
                                            var f = c.sibling
                                              , p = c.return;
                                            if (tm(c),
                                            c === u) {
                                                le = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = p,
                                                le = f;
                                                break
                                            }
                                            le = p
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var x = w.child;
                                if (x !== null) {
                                    w.child = null;
                                    do {
                                        var S = x.sibling;
                                        x.sibling = null,
                                        x = S
                                    } while (x !== null)
                                }
                            }
                            le = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        le = s;
                    else
                        e: for (; le !== null; ) {
                            if (i = le,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    mi(9, i, i.return)
                                }
                            var y = i.sibling;
                            if (y !== null) {
                                y.return = i.return,
                                le = y;
                                break e
                            }
                            le = i.return
                        }
                }
                var m = e.current;
                for (le = m; le !== null; ) {
                    s = le;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        le = v;
                    else
                        e: for (s = m; le !== null; ) {
                            if (l = le,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ka(9, l)
                                    }
                                } catch (R) {
                                    He(l, l.return, R)
                                }
                            if (l === s) {
                                le = null;
                                break e
                            }
                            var T = l.sibling;
                            if (T !== null) {
                                T.return = l.return,
                                le = T;
                                break e
                            }
                            le = l.return
                        }
                }
                if (ke = o,
                kr(),
                xn && typeof xn.onPostCommitFiberRoot == "function")
                    try {
                        xn.onPostCommitFiberRoot(va, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Ie = n,
            Ht.transition = t
        }
    }
    return !1
}
function sf(e, t, n) {
    t = Lo(n, t),
    t = Vh(e, t, 1),
    e = pr(e, t, 1),
    t = gt(),
    e !== null && (Wi(e, 1, t),
    Pt(e, t))
}
function He(e, t, n) {
    if (e.tag === 3)
        sf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                sf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (hr === null || !hr.has(r))) {
                    e = Lo(n, e),
                    e = Hh(t, e, 1),
                    t = pr(t, e, 1),
                    e = gt(),
                    t !== null && (Wi(t, 1, e),
                    Pt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function zy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = gt(),
    e.pingedLanes |= e.suspendedLanes & n,
    tt === e && (it & n) === n && (Je === 4 || Je === 3 && (it & 130023424) === it && 500 > Ye() - kc ? Ur(e, 0) : bc |= n),
    Pt(e, t)
}
function dm(e, t) {
    t === 0 && (e.mode & 1 ? (t = rs,
    rs <<= 1,
    !(rs & 130023424) && (rs = 4194304)) : t = 1);
    var n = gt();
    e = jn(e, t),
    e !== null && (Wi(e, t, n),
    Pt(e, n))
}
function Dy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    dm(e, n)
}
function Uy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(Q(314))
    }
    r !== null && r.delete(t),
    dm(e, n)
}
var fm;
fm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || bt.current)
            Et = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Et = !1,
                Ty(e, t, n);
            Et = !!(e.flags & 131072)
        }
    else
        Et = !1,
        Fe && t.flags & 1048576 && gh(t, Ys, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Rs(e, t),
        e = t.pendingProps;
        var o = Oo(t, ft.current);
        wo(t, n),
        o = yc(null, t, r, e, o, n);
        var i = wc();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        kt(r) ? (i = !0,
        Gs(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        pc(t),
        o.updater = ba,
        t.stateNode = o,
        o._reactInternals = t,
        au(t, r, e, n),
        t = cu(null, t, r, !0, i, n)) : (t.tag = 0,
        Fe && i && sc(t),
        ht(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Rs(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = $y(r),
            e = qt(r, e),
            o) {
            case 0:
                t = uu(null, t, r, e, n);
                break e;
            case 1:
                t = Kd(null, t, r, e, n);
                break e;
            case 11:
                t = Qd(null, t, r, e, n);
                break e;
            case 14:
                t = Yd(null, t, r, qt(r.type, e), n);
                break e
            }
            throw Error(Q(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : qt(r, o),
        uu(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : qt(r, o),
        Kd(e, t, r, o, n);
    case 3:
        e: {
            if (Kh(t),
            e === null)
                throw Error(Q(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Ch(e, t),
            qs(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Lo(Error(Q(423)), t),
                    t = Xd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Lo(Error(Q(424)), t),
                    t = Xd(e, t, r, n, o);
                    break e
                } else
                    for (At = fr(t.stateNode.containerInfo.firstChild),
                    Ot = t,
                    Fe = !0,
                    nn = null,
                    n = xh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (_o(),
                r === o) {
                    t = Ln(e, t, n);
                    break e
                }
                ht(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Eh(t),
        e === null && ou(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        Zl(r, o) ? s = null : i !== null && Zl(r, i) && (t.flags |= 32),
        Yh(e, t),
        ht(e, t, s, n),
        t.child;
    case 6:
        return e === null && ou(t),
        null;
    case 13:
        return Xh(e, t, n);
    case 4:
        return hc(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Fo(t, null, r, n) : ht(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : qt(r, o),
        Qd(e, t, r, o, n);
    case 7:
        return ht(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ht(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ht(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            Me(Ks, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (sn(i.value, s)) {
                    if (i.children === o.children && !bt.current) {
                        t = Ln(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = An(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    iu(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(Q(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            iu(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            ht(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        wo(t, n),
        o = Gt(o),
        r = r(o),
        t.flags |= 1,
        ht(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = qt(r, t.pendingProps),
        o = qt(r.type, o),
        Yd(e, t, r, o, n);
    case 15:
        return Gh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : qt(r, o),
        Rs(e, t),
        t.tag = 1,
        kt(r) ? (e = !0,
        Gs(t)) : e = !1,
        wo(t, n),
        Wh(t, r, o),
        au(t, r, o, n),
        cu(null, t, r, !0, e, n);
    case 19:
        return qh(e, t, n);
    case 22:
        return Qh(e, t, n)
    }
    throw Error(Q(156, t.tag))
}
;
function pm(e, t) {
    return Up(e, t)
}
function By(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Vt(e, t, n, r) {
    return new By(e,t,n,r)
}
function Nc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function $y(e) {
    if (typeof e == "function")
        return Nc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Yu)
            return 11;
        if (e === Ku)
            return 14
    }
    return 2
}
function gr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Vt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ms(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Nc(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case no:
            return Br(n.children, o, i, t);
        case Qu:
            s = 8,
            o |= 8;
            break;
        case Ml:
            return e = Vt(12, n, t, o | 2),
            e.elementType = Ml,
            e.lanes = i,
            e;
        case Al:
            return e = Vt(13, n, t, o),
            e.elementType = Al,
            e.lanes = i,
            e;
        case Ol:
            return e = Vt(19, n, t, o),
            e.elementType = Ol,
            e.lanes = i,
            e;
        case Ep:
            return Ta(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Sp:
                    s = 10;
                    break e;
                case Cp:
                    s = 9;
                    break e;
                case Yu:
                    s = 11;
                    break e;
                case Ku:
                    s = 14;
                    break e;
                case Xn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(Q(130, e == null ? e : typeof e, ""))
        }
    return t = Vt(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Br(e, t, n, r) {
    return e = Vt(7, e, r, t),
    e.lanes = n,
    e
}
function Ta(e, t, n, r) {
    return e = Vt(22, e, r, t),
    e.elementType = Ep,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function wl(e, t, n) {
    return e = Vt(6, e, null, t),
    e.lanes = n,
    e
}
function xl(e, t, n) {
    return t = Vt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Wy(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = el(0),
    this.expirationTimes = el(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = el(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Ic(e, t, n, r, o, i, s, l, a) {
    return e = new Wy(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = Vt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    pc(i),
    e
}
function Vy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: to,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function hm(e) {
    if (!e)
        return yr;
    e = e._reactInternals;
    e: {
        if (qr(e) !== e || e.tag !== 1)
            throw Error(Q(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (kt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(Q(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (kt(n))
            return hh(e, n, t)
    }
    return t
}
function mm(e, t, n, r, o, i, s, l, a) {
    return e = Ic(n, r, !0, e, o, i, s, l, a),
    e.context = hm(null),
    n = e.current,
    r = gt(),
    o = mr(n),
    i = An(r, o),
    i.callback = t ?? null,
    pr(n, i, o),
    e.current.lanes = o,
    Wi(e, o, r),
    Pt(e, r),
    e
}
function Ra(e, t, n, r) {
    var o = t.current
      , i = gt()
      , s = mr(o);
    return n = hm(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = An(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = pr(o, t, s),
    e !== null && (on(e, o, s, i),
    ks(e, o, s)),
    s
}
function ia(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function af(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Mc(e, t) {
    af(e, t),
    (e = e.alternate) && af(e, t)
}
function Hy() {
    return null
}
var gm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ac(e) {
    this._internalRoot = e
}
Na.prototype.render = Ac.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(Q(409));
    Ra(e, t, null, null)
}
;
Na.prototype.unmount = Ac.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Qr(function() {
            Ra(null, e, null, null)
        }),
        t[Fn] = null
    }
}
;
function Na(e) {
    this._internalRoot = e
}
Na.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Qp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++)
            ;
        Jn.splice(n, 0, e),
        n === 0 && Kp(e)
    }
}
;
function Oc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ia(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function lf() {}
function Gy(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = ia(s);
                i.call(u)
            }
        }
        var s = mm(t, r, e, 0, null, !1, !1, "", lf);
        return e._reactRootContainer = s,
        e[Fn] = s.current,
        Ti(e.nodeType === 8 ? e.parentNode : e),
        Qr(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = ia(a);
            l.call(u)
        }
    }
    var a = Ic(e, 0, !1, null, null, !1, !1, "", lf);
    return e._reactRootContainer = a,
    e[Fn] = a.current,
    Ti(e.nodeType === 8 ? e.parentNode : e),
    Qr(function() {
        Ra(t, a, n, r)
    }),
    a
}
function Ma(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = ia(s);
                l.call(a)
            }
        }
        Ra(t, s, e, o)
    } else
        s = Gy(n, t, e, o, r);
    return ia(s)
}
Hp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = si(t.pendingLanes);
            n !== 0 && (Ju(t, n | 1),
            Pt(t, Ye()),
            !(ke & 6) && (zo = Ye() + 500,
            kr()))
        }
        break;
    case 13:
        Qr(function() {
            var r = jn(e, 1);
            if (r !== null) {
                var o = gt();
                on(r, e, 1, o)
            }
        }),
        Mc(e, 1)
    }
}
;
Zu = function(e) {
    if (e.tag === 13) {
        var t = jn(e, 134217728);
        if (t !== null) {
            var n = gt();
            on(t, e, 134217728, n)
        }
        Mc(e, 134217728)
    }
}
;
Gp = function(e) {
    if (e.tag === 13) {
        var t = mr(e)
          , n = jn(e, t);
        if (n !== null) {
            var r = gt();
            on(n, e, t, r)
        }
        Mc(e, t)
    }
}
;
Qp = function() {
    return Ie
}
;
Yp = function(e, t) {
    var n = Ie;
    try {
        return Ie = e,
        t()
    } finally {
        Ie = n
    }
}
;
Wl = function(e, t, n) {
    switch (t) {
    case "input":
        if (jl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Sa(r);
                    if (!o)
                        throw Error(Q(90));
                    kp(r),
                    jl(r, o)
                }
            }
        }
        break;
    case "textarea":
        Tp(e, n);
        break;
    case "select":
        t = n.value,
        t != null && mo(e, !!n.multiple, t, !1)
    }
}
;
_p = Pc;
Fp = Qr;
var Qy = {
    usingClientEntryPoint: !1,
    Events: [Hi, so, Sa, Ap, Op, Pc]
}
  , ti = {
    findFiberByHostInstance: Mr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Yy = {
    bundleType: ti.bundleType,
    version: ti.version,
    rendererPackageName: ti.rendererPackageName,
    rendererConfig: ti.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = zp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ti.findFiberByHostInstance || Hy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hs.isDisabled && hs.supportsFiber)
        try {
            va = hs.inject(Yy),
            xn = hs
        } catch {}
}
jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qy;
jt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oc(t))
        throw Error(Q(200));
    return Vy(e, t, null, n)
}
;
jt.createRoot = function(e, t) {
    if (!Oc(e))
        throw Error(Q(299));
    var n = !1
      , r = ""
      , o = gm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Ic(e, 1, !1, null, null, n, !1, r, o),
    e[Fn] = t.current,
    Ti(e.nodeType === 8 ? e.parentNode : e),
    new Ac(t)
}
;
jt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(Q(188)) : (e = Object.keys(e).join(","),
        Error(Q(268, e)));
    return e = zp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
jt.flushSync = function(e) {
    return Qr(e)
}
;
jt.hydrate = function(e, t, n) {
    if (!Ia(t))
        throw Error(Q(200));
    return Ma(null, e, t, !0, n)
}
;
jt.hydrateRoot = function(e, t, n) {
    if (!Oc(e))
        throw Error(Q(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = gm;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = mm(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Fn] = t.current,
    Ti(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Na(t)
}
;
jt.render = function(e, t, n) {
    if (!Ia(t))
        throw Error(Q(200));
    return Ma(null, e, t, !1, n)
}
;
jt.unmountComponentAtNode = function(e) {
    if (!Ia(e))
        throw Error(Q(40));
    return e._reactRootContainer ? (Qr(function() {
        Ma(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Fn] = null
        })
    }),
    !0) : !1
}
;
jt.unstable_batchedUpdates = Pc;
jt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ia(n))
        throw Error(Q(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(Q(38));
    return Ma(e, t, n, !1, r)
}
;
jt.version = "18.3.1-next-f1338f8080-20240426";
function vm() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vm)
        } catch (e) {
            console.error(e)
        }
}
vm(),
vp.exports = jt;
var Qi = vp.exports;
const ym = Du(Qi);
var wm, uf = Qi;
wm = uf.createRoot,
uf.hydrateRoot;
const Ky = 1
  , Xy = 1e6;
let Sl = 0;
function qy() {
    return Sl = (Sl + 1) % Number.MAX_SAFE_INTEGER,
    Sl.toString()
}
const Cl = new Map
  , cf = e => {
    if (Cl.has(e))
        return;
    const t = setTimeout( () => {
        Cl.delete(e),
        yi({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Xy);
    Cl.set(e, t)
}
  , Jy = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Ky)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? cf(n) : e.toasts.forEach(r => {
                cf(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , As = [];
let Os = {
    toasts: []
};
function yi(e) {
    Os = Jy(Os, e),
    As.forEach(t => {
        t(Os)
    }
    )
}
function Zy({...e}) {
    const t = qy()
      , n = o => yi({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => yi({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return yi({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function ew() {
    const [e,t] = E.useState(Os);
    return E.useEffect( () => (As.push(t),
    () => {
        const n = As.indexOf(t);
        n > -1 && As.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: Zy,
        dismiss: n => yi({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function qe(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function df(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function xm(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = df(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : df(e[o], null)
                }
            }
    }
}
function an(...e) {
    return E.useCallback(xm(...e), e)
}
function Aa(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = E.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = d => {
            var y;
            const {scope: f, children: p, ...w} = d
              , x = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[a]) || l
              , S = E.useMemo( () => w, Object.values(w));
            return P.jsx(x.Provider, {
                value: S,
                children: p
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(d, f) {
            var x;
            const p = ((x = f == null ? void 0 : f[e]) == null ? void 0 : x[a]) || l
              , w = E.useContext(p);
            if (w)
                return w;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => E.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return E.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, tw(o, ...t)]
}
function tw(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const d = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...d
                }
            }
            , {});
            return E.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function sa(e) {
    const t = rw(e)
      , n = E.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , l = E.Children.toArray(i)
          , a = l.find(iw);
        if (a) {
            const u = a.props.children
              , c = l.map(d => d === a ? E.Children.count(u) > 1 ? E.Children.only(null) : E.isValidElement(u) ? u.props.children : null : d);
            return P.jsx(t, {
                ...s,
                ref: o,
                children: E.isValidElement(u) ? E.cloneElement(u, void 0, c) : null
            })
        }
        return P.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var nw = sa("Slot");
function rw(e) {
    const t = E.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (E.isValidElement(o)) {
            const s = aw(o)
              , l = sw(i, o.props);
            return o.type !== E.Fragment && (l.ref = r ? xm(r, s) : s),
            E.cloneElement(o, l)
        }
        return E.Children.count(o) > 1 ? E.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Sm = Symbol("radix.slottable");
function ow(e) {
    const t = ({children: n}) => P.jsx(P.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Sm,
    t
}
function iw(e) {
    return E.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Sm
}
function sw(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            const a = i(...l);
            return o(...l),
            a
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function aw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function lw(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Aa(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = x => {
        const {scope: S, children: y} = x
          , m = B.useRef(null)
          , v = B.useRef(new Map).current;
        return P.jsx(o, {
            scope: S,
            itemMap: v,
            collectionRef: m,
            children: y
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = sa(l)
      , u = B.forwardRef( (x, S) => {
        const {scope: y, children: m} = x
          , v = i(l, y)
          , T = an(S, v.collectionRef);
        return P.jsx(a, {
            ref: T,
            children: m
        })
    }
    );
    u.displayName = l;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = sa(c)
      , p = B.forwardRef( (x, S) => {
        const {scope: y, children: m, ...v} = x
          , T = B.useRef(null)
          , R = an(S, T)
          , N = i(c, y);
        return B.useEffect( () => (N.itemMap.set(T, {
            ref: T,
            ...v
        }),
        () => void N.itemMap.delete(T))),
        P.jsx(f, {
            [d]: "",
            ref: R,
            children: m
        })
    }
    );
    p.displayName = c;
    function w(x) {
        const S = i(e + "CollectionConsumer", x);
        return B.useCallback( () => {
            const m = S.collectionRef.current;
            if (!m)
                return [];
            const v = Array.from(m.querySelectorAll(`[${d}]`));
            return Array.from(S.itemMap.values()).sort( (N, M) => v.indexOf(N.ref.current) - v.indexOf(M.ref.current))
        }
        , [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: p
    }, w, r]
}
var uw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Rt = uw.reduce( (e, t) => {
    const n = sa(`Primitive.${t}`)
      , r = E.forwardRef( (o, i) => {
        const {asChild: s, ...l} = o
          , a = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        P.jsx(a, {
            ...l,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Cm(e, t) {
    e && Qi.flushSync( () => e.dispatchEvent(t))
}
function wr(e) {
    const t = E.useRef(e);
    return E.useEffect( () => {
        t.current = e
    }
    ),
    E.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function cw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = wr(e);
    E.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var dw = "DismissableLayer", Cu = "dismissableLayer.update", fw = "dismissableLayer.pointerDownOutside", pw = "dismissableLayer.focusOutside", ff, Em = E.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), _c = E.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = E.useContext(Em)
      , [c,d] = E.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = E.useState({})
      , w = an(t, M => d(M))
      , x = Array.from(u.layers)
      , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = x.indexOf(S)
      , m = c ? x.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , T = m >= y
      , R = mw(M => {
        const _ = M.target
          , V = [...u.branches].some(z => z.contains(_));
        !T || V || (o == null || o(M),
        s == null || s(M),
        M.defaultPrevented || l == null || l())
    }
    , f)
      , N = gw(M => {
        const _ = M.target;
        [...u.branches].some(z => z.contains(_)) || (i == null || i(M),
        s == null || s(M),
        M.defaultPrevented || l == null || l())
    }
    , f);
    return cw(M => {
        m === u.layers.size - 1 && (r == null || r(M),
        !M.defaultPrevented && l && (M.preventDefault(),
        l()))
    }
    , f),
    E.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ff = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            pf(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = ff)
            }
    }
    , [c, f, n, u]),
    E.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        pf())
    }
    , [c, u]),
    E.useEffect( () => {
        const M = () => p({});
        return document.addEventListener(Cu, M),
        () => document.removeEventListener(Cu, M)
    }
    , []),
    P.jsx(Rt.div, {
        ...a,
        ref: w,
        style: {
            pointerEvents: v ? T ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: qe(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: qe(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: qe(e.onPointerDownCapture, R.onPointerDownCapture)
    })
}
);
_c.displayName = dw;
var hw = "DismissableLayerBranch"
  , bm = E.forwardRef( (e, t) => {
    const n = E.useContext(Em)
      , r = E.useRef(null)
      , o = an(t, r);
    return E.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    P.jsx(Rt.div, {
        ...e,
        ref: o
    })
}
);
bm.displayName = hw;
function mw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = wr(e)
      , r = E.useRef(!1)
      , o = E.useRef( () => {}
    );
    return E.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    km(fw, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function gw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = wr(e)
      , r = E.useRef(!1);
    return E.useEffect( () => {
        const o = i => {
            i.target && !r.current && km(pw, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function pf() {
    const e = new CustomEvent(Cu);
    document.dispatchEvent(e)
}
function km(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Cm(o, i) : o.dispatchEvent(i)
}
var vw = _c
  , yw = bm
  , xr = globalThis != null && globalThis.document ? E.useLayoutEffect : () => {}
  , ww = "Portal"
  , Pm = E.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = E.useState(!1);
    xr( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? ym.createPortal(P.jsx(Rt.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Pm.displayName = ww;
function xw(e, t) {
    return E.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Fc = e => {
    const {present: t, children: n} = e
      , r = Sw(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : E.Children.only(n)
      , i = an(r.ref, Cw(o));
    return typeof n == "function" || r.isPresent ? E.cloneElement(o, {
        ref: i
    }) : null
}
;
Fc.displayName = "Presence";
function Sw(e) {
    const [t,n] = E.useState()
      , r = E.useRef(null)
      , o = E.useRef(e)
      , i = E.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = xw(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return E.useEffect( () => {
        const u = ms(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    xr( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const f = i.current
              , p = ms(u);
            e ? a("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && f !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    xr( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = p => {
                const x = ms(r.current).includes(p.animationName);
                if (p.target === t && x && (a("ANIMATION_END"),
                !o.current)) {
                    const S = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                    }
                    )
                }
            }
              , f = p => {
                p.target === t && (i.current = ms(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: E.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function ms(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Cw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Ew = mp[" useInsertionEffect ".trim().toString()] || xr;
function bw({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = kw({
        defaultProp: t,
        onChange: n
    })
      , l = e !== void 0
      , a = l ? e : o;
    {
        const c = E.useRef(e !== void 0);
        E.useEffect( () => {
            const d = c.current;
            d !== l && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = l
        }
        , [l, r])
    }
    const u = E.useCallback(c => {
        var d;
        if (l) {
            const f = Pw(c) ? c(e) : c;
            f !== e && ((d = s.current) == null || d.call(s, f))
        } else
            i(c)
    }
    , [l, e, i, s]);
    return [a, u]
}
function kw({defaultProp: e, onChange: t}) {
    const [n,r] = E.useState(e)
      , o = E.useRef(n)
      , i = E.useRef(t);
    return Ew( () => {
        i.current = t
    }
    , [t]),
    E.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function Pw(e) {
    return typeof e == "function"
}
var Tw = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , Rw = "VisuallyHidden"
  , Oa = E.forwardRef( (e, t) => P.jsx(Rt.span, {
    ...e,
    ref: t,
    style: {
        ...Tw,
        ...e.style
    }
}));
Oa.displayName = Rw;
var Nw = Oa
  , jc = "ToastProvider"
  , [Lc,Iw,Mw] = lw("Toast")
  , [Tm,l2] = Aa("Toast", [Mw])
  , [Aw,_a] = Tm(jc)
  , Rm = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = E.useState(null)
      , [u,c] = E.useState(0)
      , d = E.useRef(!1)
      , f = E.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${jc}\`. Expected non-empty \`string\`.`),
    P.jsx(Lc.Provider, {
        scope: t,
        children: P.jsx(Aw, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: E.useCallback( () => c(p => p + 1), []),
            onToastRemove: E.useCallback( () => c(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: s
        })
    })
}
;
Rm.displayName = jc;
var Nm = "ToastViewport"
  , Ow = ["F8"]
  , Eu = "toast.viewportPause"
  , bu = "toast.viewportResume"
  , Im = E.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Ow, label: o="Notifications ({hotkey})", ...i} = e
      , s = _a(Nm, n)
      , l = Iw(n)
      , a = E.useRef(null)
      , u = E.useRef(null)
      , c = E.useRef(null)
      , d = E.useRef(null)
      , f = an(t, d, s.onViewportChange)
      , p = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , w = s.toastCount > 0;
    E.useEffect( () => {
        const S = y => {
            var v;
            r.length !== 0 && r.every(T => y[T] || y.code === T) && ((v = d.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
    }
    , [r]),
    E.useEffect( () => {
        const S = a.current
          , y = d.current;
        if (w && S && y) {
            const m = () => {
                if (!s.isClosePausedRef.current) {
                    const N = new CustomEvent(Eu);
                    y.dispatchEvent(N),
                    s.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (s.isClosePausedRef.current) {
                    const N = new CustomEvent(bu);
                    y.dispatchEvent(N),
                    s.isClosePausedRef.current = !1
                }
            }
              , T = N => {
                !S.contains(N.relatedTarget) && v()
            }
              , R = () => {
                S.contains(document.activeElement) || v()
            }
            ;
            return S.addEventListener("focusin", m),
            S.addEventListener("focusout", T),
            S.addEventListener("pointermove", m),
            S.addEventListener("pointerleave", R),
            window.addEventListener("blur", m),
            window.addEventListener("focus", v),
            () => {
                S.removeEventListener("focusin", m),
                S.removeEventListener("focusout", T),
                S.removeEventListener("pointermove", m),
                S.removeEventListener("pointerleave", R),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [w, s.isClosePausedRef]);
    const x = E.useCallback( ({tabbingDirection: S}) => {
        const m = l().map(v => {
            const T = v.ref.current
              , R = [T, ...Gw(T)];
            return S === "forwards" ? R : R.reverse()
        }
        );
        return (S === "forwards" ? m.reverse() : m).flat()
    }
    , [l]);
    return E.useEffect( () => {
        const S = d.current;
        if (S) {
            const y = m => {
                var R, N, M;
                const v = m.altKey || m.ctrlKey || m.metaKey;
                if (m.key === "Tab" && !v) {
                    const _ = document.activeElement
                      , V = m.shiftKey;
                    if (m.target === S && V) {
                        (R = u.current) == null || R.focus();
                        return
                    }
                    const re = x({
                        tabbingDirection: V ? "backwards" : "forwards"
                    })
                      , J = re.findIndex(F => F === _);
                    El(re.slice(J + 1)) ? m.preventDefault() : V ? (N = u.current) == null || N.focus() : (M = c.current) == null || M.focus()
                }
            }
            ;
            return S.addEventListener("keydown", y),
            () => S.removeEventListener("keydown", y)
        }
    }
    , [l, x]),
    P.jsxs(yw, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: w ? void 0 : "none"
        },
        children: [w && P.jsx(ku, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const S = x({
                    tabbingDirection: "forwards"
                });
                El(S)
            }
        }), P.jsx(Lc.Slot, {
            scope: n,
            children: P.jsx(Rt.ol, {
                tabIndex: -1,
                ...i,
                ref: f
            })
        }), w && P.jsx(ku, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const S = x({
                    tabbingDirection: "backwards"
                });
                El(S)
            }
        })]
    })
}
);
Im.displayName = Nm;
var Mm = "ToastFocusProxy"
  , ku = E.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = _a(Mm, n);
    return P.jsx(Oa, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
ku.displayName = Mm;
var Yi = "Toast"
  , _w = "toast.swipeStart"
  , Fw = "toast.swipeMove"
  , jw = "toast.swipeCancel"
  , Lw = "toast.swipeEnd"
  , Am = E.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l,a] = bw({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: Yi
    });
    return P.jsx(Fc, {
        present: n || l,
        children: P.jsx(Uw, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: wr(e.onPause),
            onResume: wr(e.onResume),
            onSwipeStart: qe(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: qe(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: qe(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: qe(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                a(!1)
            }
            )
        })
    })
}
);
Am.displayName = Yi;
var [zw,Dw] = Tm(Yi, {
    onClose() {}
})
  , Uw = E.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: p, ...w} = e
      , x = _a(Yi, n)
      , [S,y] = E.useState(null)
      , m = an(t, F => y(F))
      , v = E.useRef(null)
      , T = E.useRef(null)
      , R = o || x.duration
      , N = E.useRef(0)
      , M = E.useRef(R)
      , _ = E.useRef(0)
      , {onToastAdd: V, onToastRemove: z} = x
      , ae = wr( () => {
        var H;
        (S == null ? void 0 : S.contains(document.activeElement)) && ((H = x.viewport) == null || H.focus()),
        s()
    }
    )
      , re = E.useCallback(F => {
        !F || F === 1 / 0 || (window.clearTimeout(_.current),
        N.current = new Date().getTime(),
        _.current = window.setTimeout(ae, F))
    }
    , [ae]);
    E.useEffect( () => {
        const F = x.viewport;
        if (F) {
            const H = () => {
                re(M.current),
                u == null || u()
            }
              , Y = () => {
                const Z = new Date().getTime() - N.current;
                M.current = M.current - Z,
                window.clearTimeout(_.current),
                a == null || a()
            }
            ;
            return F.addEventListener(Eu, Y),
            F.addEventListener(bu, H),
            () => {
                F.removeEventListener(Eu, Y),
                F.removeEventListener(bu, H)
            }
        }
    }
    , [x.viewport, R, a, u, re]),
    E.useEffect( () => {
        i && !x.isClosePausedRef.current && re(R)
    }
    , [i, R, x.isClosePausedRef, re]),
    E.useEffect( () => (V(),
    () => z()), [V, z]);
    const J = E.useMemo( () => S ? Dm(S) : null, [S]);
    return x.viewport ? P.jsxs(P.Fragment, {
        children: [J && P.jsx(Bw, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: J
        }), P.jsx(zw, {
            scope: n,
            onClose: ae,
            children: Qi.createPortal(P.jsx(Lc.ItemSlot, {
                scope: n,
                children: P.jsx(vw, {
                    asChild: !0,
                    onEscapeKeyDown: qe(l, () => {
                        x.isFocusedToastEscapeKeyDownRef.current || ae(),
                        x.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: P.jsx(Rt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": x.swipeDirection,
                        ...w,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: qe(e.onKeyDown, F => {
                            F.key === "Escape" && (l == null || l(F.nativeEvent),
                            F.nativeEvent.defaultPrevented || (x.isFocusedToastEscapeKeyDownRef.current = !0,
                            ae()))
                        }
                        ),
                        onPointerDown: qe(e.onPointerDown, F => {
                            F.button === 0 && (v.current = {
                                x: F.clientX,
                                y: F.clientY
                            })
                        }
                        ),
                        onPointerMove: qe(e.onPointerMove, F => {
                            if (!v.current)
                                return;
                            const H = F.clientX - v.current.x
                              , Y = F.clientY - v.current.y
                              , Z = !!T.current
                              , g = ["left", "right"].includes(x.swipeDirection)
                              , h = ["left", "up"].includes(x.swipeDirection) ? Math.min : Math.max
                              , C = g ? h(0, H) : 0
                              , k = g ? 0 : h(0, Y)
                              , b = F.pointerType === "touch" ? 10 : 2
                              , I = {
                                x: C,
                                y: k
                            }
                              , A = {
                                originalEvent: F,
                                delta: I
                            };
                            Z ? (T.current = I,
                            gs(Fw, d, A, {
                                discrete: !1
                            })) : hf(I, x.swipeDirection, b) ? (T.current = I,
                            gs(_w, c, A, {
                                discrete: !1
                            }),
                            F.target.setPointerCapture(F.pointerId)) : (Math.abs(H) > b || Math.abs(Y) > b) && (v.current = null)
                        }
                        ),
                        onPointerUp: qe(e.onPointerUp, F => {
                            const H = T.current
                              , Y = F.target;
                            if (Y.hasPointerCapture(F.pointerId) && Y.releasePointerCapture(F.pointerId),
                            T.current = null,
                            v.current = null,
                            H) {
                                const Z = F.currentTarget
                                  , g = {
                                    originalEvent: F,
                                    delta: H
                                };
                                hf(H, x.swipeDirection, x.swipeThreshold) ? gs(Lw, p, g, {
                                    discrete: !0
                                }) : gs(jw, f, g, {
                                    discrete: !0
                                }),
                                Z.addEventListener("click", h => h.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), x.viewport)
        })]
    }) : null
}
)
  , Bw = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = _a(Yi, t)
      , [i,s] = E.useState(!1)
      , [l,a] = E.useState(!1);
    return Vw( () => s(!0)),
    E.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : P.jsx(Pm, {
        asChild: !0,
        children: P.jsx(Oa, {
            ...r,
            children: i && P.jsxs(P.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , $w = "ToastTitle"
  , Om = E.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return P.jsx(Rt.div, {
        ...r,
        ref: t
    })
}
);
Om.displayName = $w;
var Ww = "ToastDescription"
  , _m = E.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return P.jsx(Rt.div, {
        ...r,
        ref: t
    })
}
);
_m.displayName = Ww;
var Fm = "ToastAction"
  , jm = E.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? P.jsx(zm, {
        altText: n,
        asChild: !0,
        children: P.jsx(zc, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Fm}\`. Expected non-empty \`string\`.`),
    null)
}
);
jm.displayName = Fm;
var Lm = "ToastClose"
  , zc = E.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = Dw(Lm, n);
    return P.jsx(zm, {
        asChild: !0,
        children: P.jsx(Rt.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: qe(e.onClick, o.onClose)
        })
    })
}
);
zc.displayName = Lm;
var zm = E.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return P.jsx(Rt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Dm(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Hw(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Dm(r))
        }
    }
    ),
    t
}
function gs(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Cm(o, i) : o.dispatchEvent(i)
}
var hf = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function Vw(e= () => {}
) {
    const t = wr(e);
    xr( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function Hw(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Gw(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function El(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Qw = Rm
  , Um = Im
  , Bm = Am
  , $m = Om
  , Wm = _m
  , Vm = jm
  , Hm = zc;
function Gm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Gm(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Qm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Gm(e)) && (r && (r += " "),
        r += t);
    return r
}
const mf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , gf = Qm
  , Ym = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return gf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const f = mf(c) || mf(d);
        return o[u][f]
    }
    )
      , l = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...p} = c;
        return Object.entries(p).every(w => {
            let[x,S] = w;
            return Array.isArray(S) ? S.includes({
                ...i,
                ...l
            }[x]) : {
                ...i,
                ...l
            }[x] === S
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return gf(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Km = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Kw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xw = E.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, a) => E.createElement("svg", {
    ref: a,
    ...Kw,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Km("lucide", o),
    ...l
}, [...s.map( ([u,c]) => E.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = (e, t) => {
    const n = E.forwardRef( ({className: r, ...o}, i) => E.createElement(Xw, {
        ref: i,
        iconNode: t,
        className: Km(`lucide-${Yw(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = Nt("Camera", [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
    key: "1tc9qg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qw = Nt("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vf = Nt("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yf = Nt("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jw = Nt("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zw = Nt("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e1 = Nt("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xm = Nt("Film", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M7 3v18",
    key: "bbkbws"
}], ["path", {
    d: "M3 7.5h4",
    key: "zfgn84"
}], ["path", {
    d: "M3 12h18",
    key: "1i2n21"
}], ["path", {
    d: "M3 16.5h4",
    key: "1230mu"
}], ["path", {
    d: "M17 3v18",
    key: "in4fa5"
}], ["path", {
    d: "M17 7.5h4",
    key: "myr1c1"
}], ["path", {
    d: "M17 16.5h4",
    key: "go4c1d"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = Nt("FlipHorizontal", [["path", {
    d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",
    key: "1i73f7"
}], ["path", {
    d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",
    key: "saxlbk"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "M12 14v2",
    key: "8jcxud"
}], ["path", {
    d: "M12 8v2",
    key: "1woqiv"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n1 = Nt("Image", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    ry: "2",
    key: "1m3agn"
}], ["circle", {
    cx: "9",
    cy: "9",
    r: "2",
    key: "af1f0g"
}], ["path", {
    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
    key: "1xmnt7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = Nt("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = Nt("QrCode", [["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "3",
    rx: "1",
    key: "1tu5fj"
}], ["rect", {
    width: "5",
    height: "5",
    x: "16",
    y: "3",
    rx: "1",
    key: "1v8r4q"
}], ["rect", {
    width: "5",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "1x03jg"
}], ["path", {
    d: "M21 16h-3a2 2 0 0 0-2 2v3",
    key: "177gqh"
}], ["path", {
    d: "M21 21v.01",
    key: "ents32"
}], ["path", {
    d: "M12 7v3a2 2 0 0 1-2 2H7",
    key: "8crl2c"
}], ["path", {
    d: "M3 12h.01",
    key: "nlz23k"
}], ["path", {
    d: "M12 3h.01",
    key: "n36tog"
}], ["path", {
    d: "M12 16v.01",
    key: "133mhm"
}], ["path", {
    d: "M16 12h1",
    key: "1slzba"
}], ["path", {
    d: "M21 12v.01",
    key: "1lwtk9"
}], ["path", {
    d: "M12 21v-1",
    key: "1880an"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = Nt("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = Nt("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Dc = "-"
  , i1 = e => {
    const t = a1(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(Dc);
            return l[0] === "" && l.length !== 1 && l.shift(),
            Jm(l, t) || s1(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}
  , Jm = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Jm(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Dc);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , wf = /^\[(.+)\]$/
  , s1 = e => {
    if (wf.test(e)) {
        const t = wf.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , a1 = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return u1(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        Pu(s, r, i, t)
    }
    ),
    r
}
  , Pu = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : xf(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (l1(o)) {
                Pu(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            Pu(s, xf(t, i), n, r)
        }
        )
    }
    )
}
  , xf = (e, t) => {
    let n = e;
    return t.split(Dc).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , l1 = e => e.isThemeGetter
  , u1 = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , c1 = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , Zm = "!"
  , d1 = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const a = [];
        let u = 0, c = 0, d;
        for (let S = 0; S < l.length; S++) {
            let y = l[S];
            if (u === 0) {
                if (y === o && (r || l.slice(S, S + i) === t)) {
                    a.push(l.slice(c, S)),
                    c = S + i;
                    continue
                }
                if (y === "/") {
                    d = S;
                    continue
                }
            }
            y === "[" ? u++ : y === "]" && u--
        }
        const f = a.length === 0 ? l : l.substring(c)
          , p = f.startsWith(Zm)
          , w = p ? f.substring(1) : f
          , x = d && d > c ? d - c : void 0;
        return {
            modifiers: a,
            hasImportantModifier: p,
            baseClassName: w,
            maybePostfixModifierPosition: x
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , f1 = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , p1 = e => ({
    cache: c1(e.cacheSize),
    parseClassName: d1(e),
    ...i1(e)
})
  , h1 = /\s+/
  , m1 = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(h1);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p} = n(u);
        let w = !!p
          , x = r(w ? f.substring(0, p) : f);
        if (!x) {
            if (!w) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (x = r(f),
            !x) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            w = !1
        }
        const S = f1(c).join(":")
          , y = d ? S + Zm : S
          , m = y + x;
        if (i.includes(m))
            continue;
        i.push(m);
        const v = o(x, w);
        for (let T = 0; T < v.length; ++T) {
            const R = v[T];
            i.push(y + R)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function g1() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = eg(t)) && (r && (r += " "),
        r += n);
    return r
}
const eg = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = eg(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function v1(e, ...t) {
    let n, r, o, i = s;
    function s(a) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = p1(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const c = m1(a, n);
        return o(a, c),
        c
    }
    return function() {
        return i(g1.apply(null, arguments))
    }
}
const Ae = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , tg = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , y1 = /^\d+\/\d+$/
  , w1 = new Set(["px", "full", "screen"])
  , x1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , S1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , C1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , E1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , b1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , kn = e => So(e) || w1.has(e) || y1.test(e)
  , Qn = e => Vo(e, "length", A1)
  , So = e => !!e && !Number.isNaN(Number(e))
  , kl = e => Vo(e, "number", So)
  , ni = e => !!e && Number.isInteger(Number(e))
  , k1 = e => e.endsWith("%") && So(e.slice(0, -1))
  , we = e => tg.test(e)
  , Yn = e => x1.test(e)
  , P1 = new Set(["length", "size", "percentage"])
  , T1 = e => Vo(e, P1, ng)
  , R1 = e => Vo(e, "position", ng)
  , N1 = new Set(["image", "url"])
  , I1 = e => Vo(e, N1, _1)
  , M1 = e => Vo(e, "", O1)
  , ri = () => !0
  , Vo = (e, t, n) => {
    const r = tg.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , A1 = e => S1.test(e) && !C1.test(e)
  , ng = () => !1
  , O1 = e => E1.test(e)
  , _1 = e => b1.test(e)
  , F1 = () => {
    const e = Ae("colors")
      , t = Ae("spacing")
      , n = Ae("blur")
      , r = Ae("brightness")
      , o = Ae("borderColor")
      , i = Ae("borderRadius")
      , s = Ae("borderSpacing")
      , l = Ae("borderWidth")
      , a = Ae("contrast")
      , u = Ae("grayscale")
      , c = Ae("hueRotate")
      , d = Ae("invert")
      , f = Ae("gap")
      , p = Ae("gradientColorStops")
      , w = Ae("gradientColorStopPositions")
      , x = Ae("inset")
      , S = Ae("margin")
      , y = Ae("opacity")
      , m = Ae("padding")
      , v = Ae("saturate")
      , T = Ae("scale")
      , R = Ae("sepia")
      , N = Ae("skew")
      , M = Ae("space")
      , _ = Ae("translate")
      , V = () => ["auto", "contain", "none"]
      , z = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , ae = () => ["auto", we, t]
      , re = () => [we, t]
      , J = () => ["", kn, Qn]
      , F = () => ["auto", So, we]
      , H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , Y = () => ["solid", "dashed", "dotted", "double", "none"]
      , Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , g = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , h = () => ["", "0", we]
      , C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , k = () => [So, we];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [ri],
            spacing: [kn, Qn],
            blur: ["none", "", Yn, we],
            brightness: k(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Yn, we],
            borderSpacing: re(),
            borderWidth: J(),
            contrast: k(),
            grayscale: h(),
            hueRotate: k(),
            invert: h(),
            gap: re(),
            gradientColorStops: [e],
            gradientColorStopPositions: [k1, Qn],
            inset: ae(),
            margin: ae(),
            opacity: k(),
            padding: re(),
            saturate: k(),
            scale: k(),
            sepia: h(),
            skew: k(),
            space: re(),
            translate: re()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", we]
            }],
            container: ["container"],
            columns: [{
                columns: [Yn]
            }],
            "break-after": [{
                "break-after": C()
            }],
            "break-before": [{
                "break-before": C()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...H(), we]
            }],
            overflow: [{
                overflow: z()
            }],
            "overflow-x": [{
                "overflow-x": z()
            }],
            "overflow-y": [{
                "overflow-y": z()
            }],
            overscroll: [{
                overscroll: V()
            }],
            "overscroll-x": [{
                "overscroll-x": V()
            }],
            "overscroll-y": [{
                "overscroll-y": V()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [x]
            }],
            "inset-x": [{
                "inset-x": [x]
            }],
            "inset-y": [{
                "inset-y": [x]
            }],
            start: [{
                start: [x]
            }],
            end: [{
                end: [x]
            }],
            top: [{
                top: [x]
            }],
            right: [{
                right: [x]
            }],
            bottom: [{
                bottom: [x]
            }],
            left: [{
                left: [x]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", ni, we]
            }],
            basis: [{
                basis: ae()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", we]
            }],
            grow: [{
                grow: h()
            }],
            shrink: [{
                shrink: h()
            }],
            order: [{
                order: ["first", "last", "none", ni, we]
            }],
            "grid-cols": [{
                "grid-cols": [ri]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", ni, we]
                }, we]
            }],
            "col-start": [{
                "col-start": F()
            }],
            "col-end": [{
                "col-end": F()
            }],
            "grid-rows": [{
                "grid-rows": [ri]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ni, we]
                }, we]
            }],
            "row-start": [{
                "row-start": F()
            }],
            "row-end": [{
                "row-end": F()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", we]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", we]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...g()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...g(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...g(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [m]
            }],
            px: [{
                px: [m]
            }],
            py: [{
                py: [m]
            }],
            ps: [{
                ps: [m]
            }],
            pe: [{
                pe: [m]
            }],
            pt: [{
                pt: [m]
            }],
            pr: [{
                pr: [m]
            }],
            pb: [{
                pb: [m]
            }],
            pl: [{
                pl: [m]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [M]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [M]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", we, t]
            }],
            "min-w": [{
                "min-w": [we, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [we, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Yn]
                }, Yn]
            }],
            h: [{
                h: [we, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [we, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [we, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [we, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Yn, Qn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", kl]
            }],
            "font-family": [{
                font: [ri]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", we]
            }],
            "line-clamp": [{
                "line-clamp": ["none", So, kl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", kn, we]
            }],
            "list-image": [{
                "list-image": ["none", we]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", we]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...Y(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", kn, Qn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", kn, we]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: re()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", we]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", we]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...H(), R1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", T1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, I1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [...Y(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: Y()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...Y()]
            }],
            "outline-offset": [{
                "outline-offset": [kn, we]
            }],
            "outline-w": [{
                outline: [kn, Qn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: J()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [kn, Qn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Yn, M1]
            }],
            "shadow-color": [{
                shadow: [ri]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": [...Z(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Z()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Yn, we]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [R]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [R]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", we]
            }],
            duration: [{
                duration: k()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", we]
            }],
            delay: [{
                delay: k()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", we]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [T]
            }],
            "scale-x": [{
                "scale-x": [T]
            }],
            "scale-y": [{
                "scale-y": [T]
            }],
            rotate: [{
                rotate: [ni, we]
            }],
            "translate-x": [{
                "translate-x": [_]
            }],
            "translate-y": [{
                "translate-y": [_]
            }],
            "skew-x": [{
                "skew-x": [N]
            }],
            "skew-y": [{
                "skew-y": [N]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", we]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", we]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": re()
            }],
            "scroll-mx": [{
                "scroll-mx": re()
            }],
            "scroll-my": [{
                "scroll-my": re()
            }],
            "scroll-ms": [{
                "scroll-ms": re()
            }],
            "scroll-me": [{
                "scroll-me": re()
            }],
            "scroll-mt": [{
                "scroll-mt": re()
            }],
            "scroll-mr": [{
                "scroll-mr": re()
            }],
            "scroll-mb": [{
                "scroll-mb": re()
            }],
            "scroll-ml": [{
                "scroll-ml": re()
            }],
            "scroll-p": [{
                "scroll-p": re()
            }],
            "scroll-px": [{
                "scroll-px": re()
            }],
            "scroll-py": [{
                "scroll-py": re()
            }],
            "scroll-ps": [{
                "scroll-ps": re()
            }],
            "scroll-pe": [{
                "scroll-pe": re()
            }],
            "scroll-pt": [{
                "scroll-pt": re()
            }],
            "scroll-pr": [{
                "scroll-pr": re()
            }],
            "scroll-pb": [{
                "scroll-pb": re()
            }],
            "scroll-pl": [{
                "scroll-pl": re()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", we]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [kn, Qn, kl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , j1 = v1(F1);
function Bn(...e) {
    return j1(Qm(e))
}
const L1 = Qw
  , rg = E.forwardRef( ({className: e, ...t}, n) => P.jsx(Um, {
    ref: n,
    className: Bn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
rg.displayName = Um.displayName;
const z1 = Ym("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , og = E.forwardRef( ({className: e, variant: t, ...n}, r) => P.jsx(Bm, {
    ref: r,
    className: Bn(z1({
        variant: t
    }), e),
    ...n
}));
og.displayName = Bm.displayName;
const D1 = E.forwardRef( ({className: e, ...t}, n) => P.jsx(Vm, {
    ref: n,
    className: Bn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
D1.displayName = Vm.displayName;
const ig = E.forwardRef( ({className: e, ...t}, n) => P.jsx(Hm, {
    ref: n,
    className: Bn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: P.jsx(o1, {
        className: "h-4 w-4"
    })
}));
ig.displayName = Hm.displayName;
const sg = E.forwardRef( ({className: e, ...t}, n) => P.jsx($m, {
    ref: n,
    className: Bn("text-sm font-semibold", e),
    ...t
}));
sg.displayName = $m.displayName;
const ag = E.forwardRef( ({className: e, ...t}, n) => P.jsx(Wm, {
    ref: n,
    className: Bn("text-sm opacity-90", e),
    ...t
}));
ag.displayName = Wm.displayName;
function U1() {
    const {toasts: e} = ew();
    return P.jsxs(L1, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return P.jsxs(og, {
                ...i,
                children: [P.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && P.jsx(sg, {
                        children: n
                    }), r && P.jsx(ag, {
                        children: r
                    })]
                }), o, P.jsx(ig, {})]
            }, t)
        }), P.jsx(rg, {})]
    })
}
var Sf = ["light", "dark"]
  , B1 = "(prefers-color-scheme: dark)"
  , $1 = E.createContext(void 0)
  , W1 = {
    setTheme: e => {}
    ,
    themes: []
}
  , V1 = () => {
    var e;
    return (e = E.useContext($1)) != null ? e : W1
}
;
E.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a}) => {
    let u = i === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w => `'${w}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = o ? Sf.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (w, x=!1, S=!0) => {
        let y = s ? s[w] : w
          , m = x ? w + "|| ''" : `'${y}'`
          , v = "";
        return o && S && !x && Sf.includes(w) && (v += `d.style.colorScheme = '${w}';`),
        n === "class" ? x || y ? v += `c.add(${m})` : v += "null" : y && (v += `d[s](n,${m})`),
        v
    }
      , p = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${B1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${f(s ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${d}}catch(t){}}();`;
    return E.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var H1 = e => {
    switch (e) {
    case "success":
        return Y1;
    case "info":
        return X1;
    case "warning":
        return K1;
    case "error":
        return q1;
    default:
        return null
    }
}
  , G1 = Array(12).fill(0)
  , Q1 = ({visible: e, className: t}) => B.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, B.createElement("div", {
    className: "sonner-spinner"
}, G1.map( (n, r) => B.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , Y1 = B.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, B.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , K1 = B.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, B.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , X1 = B.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, B.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , q1 = B.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, B.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , J1 = B.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, B.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), B.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , Z1 = () => {
    let[e,t] = B.useState(document.hidden);
    return B.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Tu = 1
  , ex = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Tu++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async a => {
                if (i = ["resolve", a],
                B.isValidElement(a))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: a
                    });
                else if (nx(a) && !a.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(a) : t.success
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async a => {
                if (i = ["reject", a],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(a) : t.error
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var a;
                o && (this.dismiss(n),
                n = void 0),
                (a = t.finally) == null || a.call(t)
            }
            ), l = () => new Promise( (a, u) => s.then( () => i[0] === "reject" ? u(i[1]) : a(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: l
            } : Object.assign(n, {
                unwrap: l
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Tu++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , St = new ex
  , tx = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Tu++;
    return St.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , nx = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , rx = tx
  , ox = () => St.toasts
  , ix = () => St.getActiveToasts();
Object.assign(rx, {
    success: St.success,
    info: St.info,
    warning: St.warning,
    error: St.error,
    custom: St.custom,
    message: St.message,
    promise: St.promise,
    dismiss: St.dismiss,
    loading: St.loading
}, {
    getHistory: ox,
    getToasts: ix
});
function sx(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
sx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function vs(e) {
    return e.label !== void 0
}
var ax = 3
  , lx = "32px"
  , ux = "16px"
  , Cf = 4e3
  , cx = 356
  , dx = 14
  , fx = 20
  , px = 200;
function Xt(...e) {
    return e.filter(Boolean).join(" ")
}
function hx(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var mx = e => {
    var t, n, r, o, i, s, l, a, u, c, d;
    let {invert: f, toast: p, unstyled: w, interacting: x, setHeights: S, visibleToasts: y, heights: m, index: v, toasts: T, expanded: R, removeToast: N, defaultRichColors: M, closeButton: _, style: V, cancelButtonStyle: z, actionButtonStyle: ae, className: re="", descriptionClassName: J="", duration: F, position: H, gap: Y, loadingIcon: Z, expandByDefault: g, classNames: h, icons: C, closeButtonAriaLabel: k="Close toast", pauseWhenPageIsHidden: b} = e
      , [I,A] = B.useState(null)
      , [O,$] = B.useState(null)
      , [W,U] = B.useState(!1)
      , [K,D] = B.useState(!1)
      , [L,ee] = B.useState(!1)
      , [te,X] = B.useState(!1)
      , [q,pe] = B.useState(!1)
      , [me,de] = B.useState(0)
      , [ce,ie] = B.useState(0)
      , ge = B.useRef(p.duration || F || Cf)
      , Ge = B.useRef(null)
      , Pe = B.useRef(null)
      , Re = v === 0
      , Be = v + 1 <= y
      , Se = p.type
      , je = p.dismissible !== !1
      , be = p.className || ""
      , $e = p.descriptionClassName || ""
      , wt = B.useMemo( () => m.findIndex(G => G.toastId === p.id) || 0, [m, p.id])
      , zt = B.useMemo( () => {
        var G;
        return (G = p.closeButton) != null ? G : _
    }
    , [p.closeButton, _])
      , $n = B.useMemo( () => p.duration || F || Cf, [p.duration, F])
      , Pr = B.useRef(0)
      , Dt = B.useRef(0)
      , Wn = B.useRef(0)
      , Ut = B.useRef(null)
      , [Tr,Qo] = H.split("-")
      , Vn = B.useMemo( () => m.reduce( (G, fe, oe) => oe >= wt ? G : G + fe.height, 0), [m, wt])
      , Rr = Z1()
      , Jr = p.invert || f
      , Hn = Se === "loading";
    Dt.current = B.useMemo( () => wt * Y + Vn, [wt, Vn]),
    B.useEffect( () => {
        ge.current = $n
    }
    , [$n]),
    B.useEffect( () => {
        U(!0)
    }
    , []),
    B.useEffect( () => {
        let G = Pe.current;
        if (G) {
            let fe = G.getBoundingClientRect().height;
            return ie(fe),
            S(oe => [{
                toastId: p.id,
                height: fe,
                position: p.position
            }, ...oe]),
            () => S(oe => oe.filter(ue => ue.toastId !== p.id))
        }
    }
    , [S, p.id]),
    B.useLayoutEffect( () => {
        if (!W)
            return;
        let G = Pe.current
          , fe = G.style.height;
        G.style.height = "auto";
        let oe = G.getBoundingClientRect().height;
        G.style.height = fe,
        ie(oe),
        S(ue => ue.find(ne => ne.toastId === p.id) ? ue.map(ne => ne.toastId === p.id ? {
            ...ne,
            height: oe
        } : ne) : [{
            toastId: p.id,
            height: oe,
            position: p.position
        }, ...ue])
    }
    , [W, p.title, p.description, S, p.id]);
    let Ze = B.useCallback( () => {
        D(!0),
        de(Dt.current),
        S(G => G.filter(fe => fe.toastId !== p.id)),
        setTimeout( () => {
            N(p)
        }
        , px)
    }
    , [p, N, S, Dt]);
    B.useEffect( () => {
        if (p.promise && Se === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let G;
        return R || x || b && Rr ? ( () => {
            if (Wn.current < Pr.current) {
                let fe = new Date().getTime() - Pr.current;
                ge.current = ge.current - fe
            }
            Wn.current = new Date().getTime()
        }
        )() : ge.current !== 1 / 0 && (Pr.current = new Date().getTime(),
        G = setTimeout( () => {
            var fe;
            (fe = p.onAutoClose) == null || fe.call(p, p),
            Ze()
        }
        , ge.current)),
        () => clearTimeout(G)
    }
    , [R, x, p, Se, b, Rr, Ze]),
    B.useEffect( () => {
        p.delete && Ze()
    }
    , [Ze, p.delete]);
    function he() {
        var G, fe, oe;
        return C != null && C.loading ? B.createElement("div", {
            className: Xt(h == null ? void 0 : h.loader, (G = p == null ? void 0 : p.classNames) == null ? void 0 : G.loader, "sonner-loader"),
            "data-visible": Se === "loading"
        }, C.loading) : Z ? B.createElement("div", {
            className: Xt(h == null ? void 0 : h.loader, (fe = p == null ? void 0 : p.classNames) == null ? void 0 : fe.loader, "sonner-loader"),
            "data-visible": Se === "loading"
        }, Z) : B.createElement(Q1, {
            className: Xt(h == null ? void 0 : h.loader, (oe = p == null ? void 0 : p.classNames) == null ? void 0 : oe.loader),
            visible: Se === "loading"
        })
    }
    return B.createElement("li", {
        tabIndex: 0,
        ref: Pe,
        className: Xt(re, be, h == null ? void 0 : h.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, h == null ? void 0 : h.default, h == null ? void 0 : h[Se], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[Se]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : M,
        "data-styled": !(p.jsx || p.unstyled || w),
        "data-mounted": W,
        "data-promise": !!p.promise,
        "data-swiped": q,
        "data-removed": K,
        "data-visible": Be,
        "data-y-position": Tr,
        "data-x-position": Qo,
        "data-index": v,
        "data-front": Re,
        "data-swiping": L,
        "data-dismissible": je,
        "data-type": Se,
        "data-invert": Jr,
        "data-swipe-out": te,
        "data-swipe-direction": O,
        "data-expanded": !!(R || g && W),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": T.length - v,
            "--offset": `${K ? me : Dt.current}px`,
            "--initial-height": g ? "auto" : `${ce}px`,
            ...V,
            ...p.style
        },
        onDragEnd: () => {
            ee(!1),
            A(null),
            Ut.current = null
        }
        ,
        onPointerDown: G => {
            Hn || !je || (Ge.current = new Date,
            de(Dt.current),
            G.target.setPointerCapture(G.pointerId),
            G.target.tagName !== "BUTTON" && (ee(!0),
            Ut.current = {
                x: G.clientX,
                y: G.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var G, fe, oe, ue;
            if (te || !je)
                return;
            Ut.current = null;
            let ne = Number(((G = Pe.current) == null ? void 0 : G.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , se = Number(((fe = Pe.current) == null ? void 0 : fe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , xe = new Date().getTime() - ((oe = Ge.current) == null ? void 0 : oe.getTime())
              , ye = I === "x" ? ne : se
              , Ne = Math.abs(ye) / xe;
            if (Math.abs(ye) >= fx || Ne > .11) {
                de(Dt.current),
                (ue = p.onDismiss) == null || ue.call(p, p),
                $(I === "x" ? ne > 0 ? "right" : "left" : se > 0 ? "down" : "up"),
                Ze(),
                X(!0),
                pe(!1);
                return
            }
            ee(!1),
            A(null)
        }
        ,
        onPointerMove: G => {
            var fe, oe, ue, ne;
            if (!Ut.current || !je || ((fe = window.getSelection()) == null ? void 0 : fe.toString().length) > 0)
                return;
            let se = G.clientY - Ut.current.y
              , xe = G.clientX - Ut.current.x
              , ye = (oe = e.swipeDirections) != null ? oe : hx(H);
            !I && (Math.abs(xe) > 1 || Math.abs(se) > 1) && A(Math.abs(xe) > Math.abs(se) ? "x" : "y");
            let Ne = {
                x: 0,
                y: 0
            };
            I === "y" ? (ye.includes("top") || ye.includes("bottom")) && (ye.includes("top") && se < 0 || ye.includes("bottom") && se > 0) && (Ne.y = se) : I === "x" && (ye.includes("left") || ye.includes("right")) && (ye.includes("left") && xe < 0 || ye.includes("right") && xe > 0) && (Ne.x = xe),
            (Math.abs(Ne.x) > 0 || Math.abs(Ne.y) > 0) && pe(!0),
            (ue = Pe.current) == null || ue.style.setProperty("--swipe-amount-x", `${Ne.x}px`),
            (ne = Pe.current) == null || ne.style.setProperty("--swipe-amount-y", `${Ne.y}px`)
        }
    }, zt && !p.jsx ? B.createElement("button", {
        "aria-label": k,
        "data-disabled": Hn,
        "data-close-button": !0,
        onClick: Hn || !je ? () => {}
        : () => {
            var G;
            Ze(),
            (G = p.onDismiss) == null || G.call(p, p)
        }
        ,
        className: Xt(h == null ? void 0 : h.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (i = C == null ? void 0 : C.close) != null ? i : J1) : null, p.jsx || E.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : B.createElement(B.Fragment, null, Se || p.icon || p.promise ? B.createElement("div", {
        "data-icon": "",
        className: Xt(h == null ? void 0 : h.icon, (s = p == null ? void 0 : p.classNames) == null ? void 0 : s.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || he() : null, p.type !== "loading" ? p.icon || (C == null ? void 0 : C[Se]) || H1(Se) : null) : null, B.createElement("div", {
        "data-content": "",
        className: Xt(h == null ? void 0 : h.content, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.content)
    }, B.createElement("div", {
        "data-title": "",
        className: Xt(h == null ? void 0 : h.title, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? B.createElement("div", {
        "data-description": "",
        className: Xt(J, $e, h == null ? void 0 : h.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), E.isValidElement(p.cancel) ? p.cancel : p.cancel && vs(p.cancel) ? B.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || z,
        onClick: G => {
            var fe, oe;
            vs(p.cancel) && je && ((oe = (fe = p.cancel).onClick) == null || oe.call(fe, G),
            Ze())
        }
        ,
        className: Xt(h == null ? void 0 : h.cancelButton, (c = p == null ? void 0 : p.classNames) == null ? void 0 : c.cancelButton)
    }, p.cancel.label) : null, E.isValidElement(p.action) ? p.action : p.action && vs(p.action) ? B.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || ae,
        onClick: G => {
            var fe, oe;
            vs(p.action) && ((oe = (fe = p.action).onClick) == null || oe.call(fe, G),
            !G.defaultPrevented && Ze())
        }
        ,
        className: Xt(h == null ? void 0 : h.actionButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.actionButton)
    }, p.action.label) : null))
}
;
function Ef() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function gx(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , s = i ? "--mobile-offset" : "--offset"
          , l = i ? ux : lx;
        function a(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = l : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : a(l)
    }
    ),
    n
}
var vx = E.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: s, className: l, offset: a, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: p, visibleToasts: w=ax, toastOptions: x, dir: S=Ef(), gap: y=dx, loadingIcon: m, icons: v, containerAriaLabel: T="Notifications", pauseWhenPageIsHidden: R} = e
      , [N,M] = B.useState([])
      , _ = B.useMemo( () => Array.from(new Set([r].concat(N.filter(b => b.position).map(b => b.position)))), [N, r])
      , [V,z] = B.useState([])
      , [ae,re] = B.useState(!1)
      , [J,F] = B.useState(!1)
      , [H,Y] = B.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , Z = B.useRef(null)
      , g = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , h = B.useRef(null)
      , C = B.useRef(!1)
      , k = B.useCallback(b => {
        M(I => {
            var A;
            return (A = I.find(O => O.id === b.id)) != null && A.delete || St.dismiss(b.id),
            I.filter( ({id: O}) => O !== b.id)
        }
        )
    }
    , []);
    return B.useEffect( () => St.subscribe(b => {
        if (b.dismiss) {
            M(I => I.map(A => A.id === b.id ? {
                ...A,
                delete: !0
            } : A));
            return
        }
        setTimeout( () => {
            ym.flushSync( () => {
                M(I => {
                    let A = I.findIndex(O => O.id === b.id);
                    return A !== -1 ? [...I.slice(0, A), {
                        ...I[A],
                        ...b
                    }, ...I.slice(A + 1)] : [b, ...I]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    B.useEffect( () => {
        if (c !== "system") {
            Y(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Y("dark") : Y("light")),
        typeof window > "u")
            return;
        let b = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            b.addEventListener("change", ({matches: I}) => {
                Y(I ? "dark" : "light")
            }
            )
        } catch {
            b.addListener( ({matches: A}) => {
                try {
                    Y(A ? "dark" : "light")
                } catch (O) {
                    console.error(O)
                }
            }
            )
        }
    }
    , [c]),
    B.useEffect( () => {
        N.length <= 1 && re(!1)
    }
    , [N]),
    B.useEffect( () => {
        let b = I => {
            var A, O;
            o.every($ => I[$] || I.code === $) && (re(!0),
            (A = Z.current) == null || A.focus()),
            I.code === "Escape" && (document.activeElement === Z.current || (O = Z.current) != null && O.contains(document.activeElement)) && re(!1)
        }
        ;
        return document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
    }
    , [o]),
    B.useEffect( () => {
        if (Z.current)
            return () => {
                h.current && (h.current.focus({
                    preventScroll: !0
                }),
                h.current = null,
                C.current = !1)
            }
    }
    , [Z.current]),
    B.createElement("section", {
        ref: t,
        "aria-label": `${T} ${g}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, _.map( (b, I) => {
        var A;
        let[O,$] = b.split("-");
        return N.length ? B.createElement("ol", {
            key: b,
            dir: S === "auto" ? Ef() : S,
            tabIndex: -1,
            ref: Z,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": H,
            "data-y-position": O,
            "data-lifted": ae && N.length > 1 && !i,
            "data-x-position": $,
            style: {
                "--front-toast-height": `${((A = V[0]) == null ? void 0 : A.height) || 0}px`,
                "--width": `${cx}px`,
                "--gap": `${y}px`,
                ...p,
                ...gx(a, u)
            },
            onBlur: W => {
                C.current && !W.currentTarget.contains(W.relatedTarget) && (C.current = !1,
                h.current && (h.current.focus({
                    preventScroll: !0
                }),
                h.current = null))
            }
            ,
            onFocus: W => {
                W.target instanceof HTMLElement && W.target.dataset.dismissible === "false" || C.current || (C.current = !0,
                h.current = W.relatedTarget)
            }
            ,
            onMouseEnter: () => re(!0),
            onMouseMove: () => re(!0),
            onMouseLeave: () => {
                J || re(!1)
            }
            ,
            onDragEnd: () => re(!1),
            onPointerDown: W => {
                W.target instanceof HTMLElement && W.target.dataset.dismissible === "false" || F(!0)
            }
            ,
            onPointerUp: () => F(!1)
        }, N.filter(W => !W.position && I === 0 || W.position === b).map( (W, U) => {
            var K, D;
            return B.createElement(mx, {
                key: W.id,
                icons: v,
                index: U,
                toast: W,
                defaultRichColors: d,
                duration: (K = x == null ? void 0 : x.duration) != null ? K : f,
                className: x == null ? void 0 : x.className,
                descriptionClassName: x == null ? void 0 : x.descriptionClassName,
                invert: n,
                visibleToasts: w,
                closeButton: (D = x == null ? void 0 : x.closeButton) != null ? D : s,
                interacting: J,
                position: b,
                style: x == null ? void 0 : x.style,
                unstyled: x == null ? void 0 : x.unstyled,
                classNames: x == null ? void 0 : x.classNames,
                cancelButtonStyle: x == null ? void 0 : x.cancelButtonStyle,
                actionButtonStyle: x == null ? void 0 : x.actionButtonStyle,
                removeToast: k,
                toasts: N.filter(L => L.position == W.position),
                heights: V.filter(L => L.position == W.position),
                setHeights: z,
                expandByDefault: i,
                gap: y,
                loadingIcon: m,
                expanded: ae,
                pauseWhenPageIsHidden: R,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const yx = ({...e}) => {
    const {theme: t="system"} = V1();
    return P.jsx(vx, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , wx = ["top", "right", "bottom", "left"]
  , Sr = Math.min
  , Mt = Math.max
  , aa = Math.round
  , ys = Math.floor
  , Cn = e => ({
    x: e,
    y: e
})
  , xx = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Sx = {
    start: "end",
    end: "start"
};
function Ru(e, t, n) {
    return Mt(e, Sr(t, n))
}
function zn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Dn(e) {
    return e.split("-")[0]
}
function Ho(e) {
    return e.split("-")[1]
}
function Uc(e) {
    return e === "x" ? "y" : "x"
}
function Bc(e) {
    return e === "y" ? "height" : "width"
}
const Cx = new Set(["top", "bottom"]);
function wn(e) {
    return Cx.has(Dn(e)) ? "y" : "x"
}
function $c(e) {
    return Uc(wn(e))
}
function Ex(e, t, n) {
    n === void 0 && (n = !1);
    const r = Ho(e)
      , o = $c(e)
      , i = Bc(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = la(s)),
    [s, la(s)]
}
function bx(e) {
    const t = la(e);
    return [Nu(e), t, Nu(t)]
}
function Nu(e) {
    return e.replace(/start|end/g, t => Sx[t])
}
const bf = ["left", "right"]
  , kf = ["right", "left"]
  , kx = ["top", "bottom"]
  , Px = ["bottom", "top"];
function Tx(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? kf : bf : t ? bf : kf;
    case "left":
    case "right":
        return t ? kx : Px;
    default:
        return []
    }
}
function Rx(e, t, n, r) {
    const o = Ho(e);
    let i = Tx(Dn(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(Nu)))),
    i
}
function la(e) {
    return e.replace(/left|right|bottom|top/g, t => xx[t])
}
function Nx(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function lg(e) {
    return typeof e != "number" ? Nx(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ua(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Pf(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = wn(t)
      , s = $c(t)
      , l = Bc(s)
      , a = Dn(t)
      , u = i === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , f = r[l] / 2 - o[l] / 2;
    let p;
    switch (a) {
    case "top":
        p = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        p = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (Ho(t)) {
    case "start":
        p[s] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        p[s] += f * (n && u ? -1 : 1);
        break
    }
    return p
}
const Ix = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: d} = Pf(u, r, a)
      , f = r
      , p = {}
      , w = 0;
    for (let x = 0; x < l.length; x++) {
        const {name: S, fn: y} = l[x]
          , {x: m, y: v, data: T, reset: R} = await y({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = m ?? c,
        d = v ?? d,
        p = {
            ...p,
            [S]: {
                ...p[S],
                ...T
            }
        },
        R && w <= 50 && (w++,
        typeof R == "object" && (R.placement && (f = R.placement),
        R.rects && (u = R.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : R.rects),
        {x: c, y: d} = Pf(u, f, a)),
        x = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: o,
        middlewareData: p
    }
}
;
async function ji(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: p=0} = zn(t, e)
      , w = lg(p)
      , S = l[f ? d === "floating" ? "reference" : "floating" : d]
      , y = ua(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null || n ? S : S.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: a
    }))
      , m = d === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , T = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , R = ua(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: m,
        offsetParent: v,
        strategy: a
    }) : m);
    return {
        top: (y.top - R.top + w.top) / T.y,
        bottom: (R.bottom - y.bottom + w.bottom) / T.y,
        left: (y.left - R.left + w.left) / T.x,
        right: (R.right - y.right + w.right) / T.x
    }
}
const Mx = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t
          , {element: u, padding: c=0} = zn(e, t) || {};
        if (u == null)
            return {};
        const d = lg(c)
          , f = {
            x: n,
            y: r
        }
          , p = $c(o)
          , w = Bc(p)
          , x = await s.getDimensions(u)
          , S = p === "y"
          , y = S ? "top" : "left"
          , m = S ? "bottom" : "right"
          , v = S ? "clientHeight" : "clientWidth"
          , T = i.reference[w] + i.reference[p] - f[p] - i.floating[w]
          , R = f[p] - i.reference[p]
          , N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let M = N ? N[v] : 0;
        (!M || !await (s.isElement == null ? void 0 : s.isElement(N))) && (M = l.floating[v] || i.floating[w]);
        const _ = T / 2 - R / 2
          , V = M / 2 - x[w] / 2 - 1
          , z = Sr(d[y], V)
          , ae = Sr(d[m], V)
          , re = z
          , J = M - x[w] - ae
          , F = M / 2 - x[w] / 2 + _
          , H = Ru(re, F, J)
          , Y = !a.arrow && Ho(o) != null && F !== H && i.reference[w] / 2 - (F < re ? z : ae) - x[w] / 2 < 0
          , Z = Y ? F < re ? F - re : F - J : 0;
        return {
            [p]: f[p] + Z,
            data: {
                [p]: H,
                centerOffset: F - H - Z,
                ...Y && {
                    alignmentOffset: Z
                }
            },
            reset: Y
        }
    }
})
  , Ax = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: x=!0, ...S} = zn(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const y = Dn(o)
              , m = wn(l)
              , v = Dn(l) === l
              , T = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , R = f || (v || !x ? [la(l)] : bx(l))
              , N = w !== "none";
            !f && N && R.push(...Rx(l, x, w, T));
            const M = [l, ...R]
              , _ = await ji(t, S)
              , V = [];
            let z = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (c && V.push(_[y]),
            d) {
                const F = Ex(o, s, T);
                V.push(_[F[0]], _[F[1]])
            }
            if (z = [...z, {
                placement: o,
                overflows: V
            }],
            !V.every(F => F <= 0)) {
                var ae, re;
                const F = (((ae = i.flip) == null ? void 0 : ae.index) || 0) + 1
                  , H = M[F];
                if (H && (!(d === "alignment" ? m !== wn(H) : !1) || z.every(g => g.overflows[0] > 0 && wn(g.placement) === m)))
                    return {
                        data: {
                            index: F,
                            overflows: z
                        },
                        reset: {
                            placement: H
                        }
                    };
                let Y = (re = z.filter(Z => Z.overflows[0] <= 0).sort( (Z, g) => Z.overflows[1] - g.overflows[1])[0]) == null ? void 0 : re.placement;
                if (!Y)
                    switch (p) {
                    case "bestFit":
                        {
                            var J;
                            const Z = (J = z.filter(g => {
                                if (N) {
                                    const h = wn(g.placement);
                                    return h === m || h === "y"
                                }
                                return !0
                            }
                            ).map(g => [g.placement, g.overflows.filter(h => h > 0).reduce( (h, C) => h + C, 0)]).sort( (g, h) => g[1] - h[1])[0]) == null ? void 0 : J[0];
                            Z && (Y = Z);
                            break
                        }
                    case "initialPlacement":
                        Y = l;
                        break
                    }
                if (o !== Y)
                    return {
                        reset: {
                            placement: Y
                        }
                    }
            }
            return {}
        }
    }
};
function Tf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Rf(e) {
    return wx.some(t => e[t] >= 0)
}
const Ox = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = zn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await ji(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Tf(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Rf(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await ji(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Tf(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Rf(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , ug = new Set(["left", "top"]);
async function _x(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = Dn(n)
      , l = Ho(n)
      , a = wn(n) === "y"
      , u = ug.has(s) ? -1 : 1
      , c = i && a ? -1 : 1
      , d = zn(t, e);
    let {mainAxis: f, crossAxis: p, alignmentAxis: w} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return l && typeof w == "number" && (p = l === "end" ? w * -1 : w),
    a ? {
        x: p * c,
        y: f * u
    } : {
        x: f * u,
        y: p * c
    }
}
const Fx = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , a = await _x(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {
                    ...a,
                    placement: s
                }
            }
        }
    }
}
  , jx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: S => {
                    let {x: y, y: m} = S;
                    return {
                        x: y,
                        y: m
                    }
                }
            }, ...a} = zn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await ji(t, a)
              , d = wn(Dn(o))
              , f = Uc(d);
            let p = u[f]
              , w = u[d];
            if (i) {
                const S = f === "y" ? "top" : "left"
                  , y = f === "y" ? "bottom" : "right"
                  , m = p + c[S]
                  , v = p - c[y];
                p = Ru(m, p, v)
            }
            if (s) {
                const S = d === "y" ? "top" : "left"
                  , y = d === "y" ? "bottom" : "right"
                  , m = w + c[S]
                  , v = w - c[y];
                w = Ru(m, w, v)
            }
            const x = l.fn({
                ...t,
                [f]: p,
                [d]: w
            });
            return {
                ...x,
                data: {
                    x: x.x - n,
                    y: x.y - r,
                    enabled: {
                        [f]: i,
                        [d]: s
                    }
                }
            }
        }
    }
}
  , Lx = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: u=!0} = zn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = wn(o)
              , f = Uc(d);
            let p = c[f]
              , w = c[d];
            const x = zn(l, t)
              , S = typeof x == "number" ? {
                mainAxis: x,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...x
            };
            if (a) {
                const v = f === "y" ? "height" : "width"
                  , T = i.reference[f] - i.floating[v] + S.mainAxis
                  , R = i.reference[f] + i.reference[v] - S.mainAxis;
                p < T ? p = T : p > R && (p = R)
            }
            if (u) {
                var y, m;
                const v = f === "y" ? "width" : "height"
                  , T = ug.has(Dn(o))
                  , R = i.reference[d] - i.floating[v] + (T && ((y = s.offset) == null ? void 0 : y[d]) || 0) + (T ? 0 : S.crossAxis)
                  , N = i.reference[d] + i.reference[v] + (T ? 0 : ((m = s.offset) == null ? void 0 : m[d]) || 0) - (T ? S.crossAxis : 0);
                w < R ? w = R : w > N && (w = N)
            }
            return {
                [f]: p,
                [d]: w
            }
        }
    }
}
  , zx = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: a= () => {}
            , ...u} = zn(e, t)
              , c = await ji(t, u)
              , d = Dn(o)
              , f = Ho(o)
              , p = wn(o) === "y"
              , {width: w, height: x} = i.floating;
            let S, y;
            d === "top" || d === "bottom" ? (S = d,
            y = f === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = d,
            S = f === "end" ? "top" : "bottom");
            const m = x - c.top - c.bottom
              , v = w - c.left - c.right
              , T = Sr(x - c[S], m)
              , R = Sr(w - c[y], v)
              , N = !t.middlewareData.shift;
            let M = T
              , _ = R;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (_ = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (M = m),
            N && !f) {
                const z = Mt(c.left, 0)
                  , ae = Mt(c.right, 0)
                  , re = Mt(c.top, 0)
                  , J = Mt(c.bottom, 0);
                p ? _ = w - 2 * (z !== 0 || ae !== 0 ? z + ae : Mt(c.left, c.right)) : M = x - 2 * (re !== 0 || J !== 0 ? re + J : Mt(c.top, c.bottom))
            }
            await a({
                ...t,
                availableWidth: _,
                availableHeight: M
            });
            const V = await s.getDimensions(l.floating);
            return w !== V.width || x !== V.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Fa() {
    return typeof window < "u"
}
function Go(e) {
    return cg(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function _t(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function bn(e) {
    var t;
    return (t = (cg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function cg(e) {
    return Fa() ? e instanceof Node || e instanceof _t(e).Node : !1
}
function ln(e) {
    return Fa() ? e instanceof Element || e instanceof _t(e).Element : !1
}
function En(e) {
    return Fa() ? e instanceof HTMLElement || e instanceof _t(e).HTMLElement : !1
}
function Nf(e) {
    return !Fa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof _t(e).ShadowRoot
}
const Dx = new Set(["inline", "contents"]);
function Ki(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = un(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Dx.has(o)
}
const Ux = new Set(["table", "td", "th"]);
function Bx(e) {
    return Ux.has(Go(e))
}
const $x = [":popover-open", ":modal"];
function ja(e) {
    return $x.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const Wx = ["transform", "translate", "scale", "rotate", "perspective"]
  , Vx = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , Hx = ["paint", "layout", "strict", "content"];
function Wc(e) {
    const t = Vc()
      , n = ln(e) ? un(e) : e;
    return Wx.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Vx.some(r => (n.willChange || "").includes(r)) || Hx.some(r => (n.contain || "").includes(r))
}
function Gx(e) {
    let t = Cr(e);
    for (; En(t) && !Do(t); ) {
        if (Wc(t))
            return t;
        if (ja(t))
            return null;
        t = Cr(t)
    }
    return null
}
function Vc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const Qx = new Set(["html", "body", "#document"]);
function Do(e) {
    return Qx.has(Go(e))
}
function un(e) {
    return _t(e).getComputedStyle(e)
}
function La(e) {
    return ln(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Cr(e) {
    if (Go(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Nf(e) && e.host || bn(e);
    return Nf(t) ? t.host : t
}
function dg(e) {
    const t = Cr(e);
    return Do(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : En(t) && Ki(t) ? t : dg(t)
}
function Li(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = dg(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = _t(o);
    if (i) {
        const l = Iu(s);
        return t.concat(s, s.visualViewport || [], Ki(o) ? o : [], l && n ? Li(l) : [])
    }
    return t.concat(o, Li(o, [], n))
}
function Iu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function fg(e) {
    const t = un(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = En(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = aa(n) !== i || aa(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function Hc(e) {
    return ln(e) ? e : e.contextElement
}
function Co(e) {
    const t = Hc(e);
    if (!En(t))
        return Cn(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = fg(t);
    let s = (i ? aa(n.width) : n.width) / r
      , l = (i ? aa(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const Yx = Cn(0);
function pg(e) {
    const t = _t(e);
    return !Vc() || !t.visualViewport ? Yx : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Kx(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== _t(e) ? !1 : t
}
function Yr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = Hc(e);
    let s = Cn(1);
    t && (r ? ln(r) && (s = Co(r)) : s = Co(e));
    const l = Kx(i, n, r) ? pg(i) : Cn(0);
    let a = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , c = o.width / s.x
      , d = o.height / s.y;
    if (i) {
        const f = _t(i)
          , p = r && ln(r) ? _t(r) : r;
        let w = f
          , x = Iu(w);
        for (; x && r && p !== w; ) {
            const S = Co(x)
              , y = x.getBoundingClientRect()
              , m = un(x)
              , v = y.left + (x.clientLeft + parseFloat(m.paddingLeft)) * S.x
              , T = y.top + (x.clientTop + parseFloat(m.paddingTop)) * S.y;
            a *= S.x,
            u *= S.y,
            c *= S.x,
            d *= S.y,
            a += v,
            u += T,
            w = _t(x),
            x = Iu(w)
        }
    }
    return ua({
        width: c,
        height: d,
        x: a,
        y: u
    })
}
function Gc(e, t) {
    const n = La(e).scrollLeft;
    return t ? t.left + n : Yr(bn(e)).left + n
}
function hg(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : Gc(e, r))
      , i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}
function Xx(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = bn(r)
      , l = t ? ja(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Cn(1);
    const c = Cn(0)
      , d = En(r);
    if ((d || !d && !i) && ((Go(r) !== "body" || Ki(s)) && (a = La(r)),
    En(r))) {
        const p = Yr(r);
        u = Co(r),
        c.x = p.x + r.clientLeft,
        c.y = p.y + r.clientTop
    }
    const f = s && !d && !i ? hg(s, a, !0) : Cn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - a.scrollTop * u.y + c.y + f.y
    }
}
function qx(e) {
    return Array.from(e.getClientRects())
}
function Jx(e) {
    const t = bn(e)
      , n = La(e)
      , r = e.ownerDocument.body
      , o = Mt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Mt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Gc(e);
    const l = -n.scrollTop;
    return un(r).direction === "rtl" && (s += Mt(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function Zx(e, t) {
    const n = _t(e)
      , r = bn(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = Vc();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}
const eS = new Set(["absolute", "fixed"]);
function tS(e, t) {
    const n = Yr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = En(e) ? Co(e) : Cn(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , a = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}
function If(e, t, n) {
    let r;
    if (t === "viewport")
        r = Zx(e, n);
    else if (t === "document")
        r = Jx(bn(e));
    else if (ln(t))
        r = tS(t, n);
    else {
        const o = pg(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return ua(r)
}
function mg(e, t) {
    const n = Cr(e);
    return n === t || !ln(n) || Do(n) ? !1 : un(n).position === "fixed" || mg(n, t)
}
function nS(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Li(e, [], !1).filter(l => ln(l) && Go(l) !== "body")
      , o = null;
    const i = un(e).position === "fixed";
    let s = i ? Cr(e) : e;
    for (; ln(s) && !Do(s); ) {
        const l = un(s)
          , a = Wc(s);
        !a && l.position === "fixed" && (o = null),
        (i ? !a && !o : !a && l.position === "static" && !!o && eS.has(o.position) || Ki(s) && !a && mg(e, s)) ? r = r.filter(c => c !== s) : o = l,
        s = Cr(s)
    }
    return t.set(e, r),
    r
}
function rS(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? ja(t) ? [] : nS(t, this._c) : [].concat(n), r]
      , l = s[0]
      , a = s.reduce( (u, c) => {
        const d = If(t, c, o);
        return u.top = Mt(d.top, u.top),
        u.right = Sr(d.right, u.right),
        u.bottom = Sr(d.bottom, u.bottom),
        u.left = Mt(d.left, u.left),
        u
    }
    , If(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function oS(e) {
    const {width: t, height: n} = fg(e);
    return {
        width: t,
        height: n
    }
}
function iS(e, t, n) {
    const r = En(t)
      , o = bn(t)
      , i = n === "fixed"
      , s = Yr(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = Cn(0);
    function u() {
        a.x = Gc(o)
    }
    if (r || !r && !i)
        if ((Go(t) !== "body" || Ki(o)) && (l = La(t)),
        r) {
            const p = Yr(t, !0, i, t);
            a.x = p.x + t.clientLeft,
            a.y = p.y + t.clientTop
        } else
            o && u();
    i && !r && o && u();
    const c = o && !r && !i ? hg(o, l) : Cn(0)
      , d = s.left + l.scrollLeft - a.x - c.x
      , f = s.top + l.scrollTop - a.y - c.y;
    return {
        x: d,
        y: f,
        width: s.width,
        height: s.height
    }
}
function Pl(e) {
    return un(e).position === "static"
}
function Mf(e, t) {
    if (!En(e) || un(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return bn(e) === n && (n = n.ownerDocument.body),
    n
}
function gg(e, t) {
    const n = _t(e);
    if (ja(e))
        return n;
    if (!En(e)) {
        let o = Cr(e);
        for (; o && !Do(o); ) {
            if (ln(o) && !Pl(o))
                return o;
            o = Cr(o)
        }
        return n
    }
    let r = Mf(e, t);
    for (; r && Bx(r) && Pl(r); )
        r = Mf(r, t);
    return r && Do(r) && Pl(r) && !Wc(r) ? n : r || Gx(e) || n
}
const sS = async function(e) {
    const t = this.getOffsetParent || gg
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: iS(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function aS(e) {
    return un(e).direction === "rtl"
}
const lS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Xx,
    getDocumentElement: bn,
    getClippingRect: rS,
    getOffsetParent: gg,
    getElementRects: sS,
    getClientRects: qx,
    getDimensions: oS,
    getScale: Co,
    isElement: ln,
    isRTL: aS
};
function vg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function uS(e, t) {
    let n = null, r;
    const o = bn(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: c, top: d, width: f, height: p} = u;
        if (l || t(),
        !f || !p)
            return;
        const w = ys(d)
          , x = ys(o.clientWidth - (c + f))
          , S = ys(o.clientHeight - (d + p))
          , y = ys(c)
          , v = {
            rootMargin: -w + "px " + -x + "px " + -S + "px " + -y + "px",
            threshold: Mt(0, Sr(1, a)) || 1
        };
        let T = !0;
        function R(N) {
            const M = N[0].intersectionRatio;
            if (M !== a) {
                if (!T)
                    return s();
                M ? s(!1, M) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            M === 1 && !vg(u, e.getBoundingClientRect()) && s(),
            T = !1
        }
        try {
            n = new IntersectionObserver(R,{
                ...v,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(R,v)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function cS(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , u = Hc(e)
      , c = o || i ? [...u ? Li(u) : [], ...Li(t)] : [];
    c.forEach(y => {
        o && y.addEventListener("scroll", n, {
            passive: !0
        }),
        i && y.addEventListener("resize", n)
    }
    );
    const d = u && l ? uS(u, n) : null;
    let f = -1
      , p = null;
    s && (p = new ResizeObserver(y => {
        let[m] = y;
        m && m.target === u && p && (p.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var v;
            (v = p) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && p.observe(u),
    p.observe(t));
    let w, x = a ? Yr(e) : null;
    a && S();
    function S() {
        const y = Yr(e);
        x && !vg(x, y) && n(),
        x = y,
        w = requestAnimationFrame(S)
    }
    return n(),
    () => {
        var y;
        c.forEach(m => {
            o && m.removeEventListener("scroll", n),
            i && m.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (y = p) == null || y.disconnect(),
        p = null,
        a && cancelAnimationFrame(w)
    }
}
const dS = Fx
  , fS = jx
  , pS = Ax
  , hS = zx
  , mS = Ox
  , Af = Mx
  , gS = Lx
  , vS = (e, t, n) => {
    const r = new Map
      , o = {
        platform: lS,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return Ix(e, t, {
        ...o,
        platform: i
    })
}
;
var yS = typeof document < "u"
  , wS = function() {}
  , _s = yS ? E.useLayoutEffect : wS;
function ca(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!ca(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !ca(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function yg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Of(e, t) {
    const n = yg(e);
    return Math.round(t * n) / n
}
function Tl(e) {
    const t = E.useRef(e);
    return _s( () => {
        t.current = e
    }
    ),
    t
}
function xS(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: a, open: u} = e
      , [c,d] = E.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,p] = E.useState(r);
    ca(f, r) || p(r);
    const [w,x] = E.useState(null)
      , [S,y] = E.useState(null)
      , m = E.useCallback(g => {
        g !== N.current && (N.current = g,
        x(g))
    }
    , [])
      , v = E.useCallback(g => {
        g !== M.current && (M.current = g,
        y(g))
    }
    , [])
      , T = i || w
      , R = s || S
      , N = E.useRef(null)
      , M = E.useRef(null)
      , _ = E.useRef(c)
      , V = a != null
      , z = Tl(a)
      , ae = Tl(o)
      , re = Tl(u)
      , J = E.useCallback( () => {
        if (!N.current || !M.current)
            return;
        const g = {
            placement: t,
            strategy: n,
            middleware: f
        };
        ae.current && (g.platform = ae.current),
        vS(N.current, M.current, g).then(h => {
            const C = {
                ...h,
                isPositioned: re.current !== !1
            };
            F.current && !ca(_.current, C) && (_.current = C,
            Qi.flushSync( () => {
                d(C)
            }
            ))
        }
        )
    }
    , [f, t, n, ae, re]);
    _s( () => {
        u === !1 && _.current.isPositioned && (_.current.isPositioned = !1,
        d(g => ({
            ...g,
            isPositioned: !1
        })))
    }
    , [u]);
    const F = E.useRef(!1);
    _s( () => (F.current = !0,
    () => {
        F.current = !1
    }
    ), []),
    _s( () => {
        if (T && (N.current = T),
        R && (M.current = R),
        T && R) {
            if (z.current)
                return z.current(T, R, J);
            J()
        }
    }
    , [T, R, J, z, V]);
    const H = E.useMemo( () => ({
        reference: N,
        floating: M,
        setReference: m,
        setFloating: v
    }), [m, v])
      , Y = E.useMemo( () => ({
        reference: T,
        floating: R
    }), [T, R])
      , Z = E.useMemo( () => {
        const g = {
            position: n,
            left: 0,
            top: 0
        };
        if (!Y.floating)
            return g;
        const h = Of(Y.floating, c.x)
          , C = Of(Y.floating, c.y);
        return l ? {
            ...g,
            transform: "translate(" + h + "px, " + C + "px)",
            ...yg(Y.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: h,
            top: C
        }
    }
    , [n, l, Y.floating, c.x, c.y]);
    return E.useMemo( () => ({
        ...c,
        update: J,
        refs: H,
        elements: Y,
        floatingStyles: Z
    }), [c, J, H, Y, Z])
}
const SS = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Af({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Af({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , CS = (e, t) => ({
    ...dS(e),
    options: [e, t]
})
  , ES = (e, t) => ({
    ...fS(e),
    options: [e, t]
})
  , bS = (e, t) => ({
    ...gS(e),
    options: [e, t]
})
  , kS = (e, t) => ({
    ...pS(e),
    options: [e, t]
})
  , PS = (e, t) => ({
    ...hS(e),
    options: [e, t]
})
  , TS = (e, t) => ({
    ...mS(e),
    options: [e, t]
})
  , RS = (e, t) => ({
    ...SS(e),
    options: [e, t]
});
var NS = "Arrow"
  , wg = E.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return P.jsx(Rt.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : P.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
wg.displayName = NS;
var IS = wg;
function MS(e) {
    const [t,n] = E.useState(void 0);
    return xr( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize"in i) {
                    const a = i.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var xg = "Popper"
  , [Sg,Cg] = Aa(xg)
  , [u2,Eg] = Sg(xg)
  , bg = "PopperAnchor"
  , kg = E.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Eg(bg, n)
      , s = E.useRef(null)
      , l = an(t, s);
    return E.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : P.jsx(Rt.div, {
        ...o,
        ref: l
    })
}
);
kg.displayName = bg;
var Qc = "PopperContent"
  , [AS,OS] = Sg(Qc)
  , Pg = E.forwardRef( (e, t) => {
    var W, U, K, D, L, ee;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: p="optimized", onPlaced: w, ...x} = e
      , S = Eg(Qc, n)
      , [y,m] = E.useState(null)
      , v = an(t, te => m(te))
      , [T,R] = E.useState(null)
      , N = MS(T)
      , M = (N == null ? void 0 : N.width) ?? 0
      , _ = (N == null ? void 0 : N.height) ?? 0
      , V = r + (i !== "center" ? "-" + i : "")
      , z = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , ae = Array.isArray(u) ? u : [u]
      , re = ae.length > 0
      , J = {
        padding: z,
        boundary: ae.filter(FS),
        altBoundary: re
    }
      , {refs: F, floatingStyles: H, placement: Y, isPositioned: Z, middlewareData: g} = xS({
        strategy: "fixed",
        placement: V,
        whileElementsMounted: (...te) => cS(...te, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: S.anchor
        },
        middleware: [CS({
            mainAxis: o + _,
            alignmentAxis: s
        }), a && ES({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? bS() : void 0,
            ...J
        }), a && kS({
            ...J
        }), PS({
            ...J,
            apply: ({elements: te, rects: X, availableWidth: q, availableHeight: pe}) => {
                const {width: me, height: de} = X.reference
                  , ce = te.floating.style;
                ce.setProperty("--radix-popper-available-width", `${q}px`),
                ce.setProperty("--radix-popper-available-height", `${pe}px`),
                ce.setProperty("--radix-popper-anchor-width", `${me}px`),
                ce.setProperty("--radix-popper-anchor-height", `${de}px`)
            }
        }), T && RS({
            element: T,
            padding: l
        }), jS({
            arrowWidth: M,
            arrowHeight: _
        }), f && TS({
            strategy: "referenceHidden",
            ...J
        })]
    })
      , [h,C] = Ng(Y)
      , k = wr(w);
    xr( () => {
        Z && (k == null || k())
    }
    , [Z, k]);
    const b = (W = g.arrow) == null ? void 0 : W.x
      , I = (U = g.arrow) == null ? void 0 : U.y
      , A = ((K = g.arrow) == null ? void 0 : K.centerOffset) !== 0
      , [O,$] = E.useState();
    return xr( () => {
        y && $(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    P.jsx("div", {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...H,
            transform: Z ? H.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: O,
            "--radix-popper-transform-origin": [(D = g.transformOrigin) == null ? void 0 : D.x, (L = g.transformOrigin) == null ? void 0 : L.y].join(" "),
            ...((ee = g.hide) == null ? void 0 : ee.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: P.jsx(AS, {
            scope: n,
            placedSide: h,
            onArrowChange: R,
            arrowX: b,
            arrowY: I,
            shouldHideArrow: A,
            children: P.jsx(Rt.div, {
                "data-side": h,
                "data-align": C,
                ...x,
                ref: v,
                style: {
                    ...x.style,
                    animation: Z ? void 0 : "none"
                }
            })
        })
    })
}
);
Pg.displayName = Qc;
var Tg = "PopperArrow"
  , _S = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Rg = E.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = OS(Tg, r)
      , s = _S[i.placedSide];
    return P.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: P.jsx(IS, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Rg.displayName = Tg;
function FS(e) {
    return e !== null
}
var jS = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var S, y, m;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , a = s ? 0 : e.arrowHeight
          , [u,c] = Ng(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + l / 2
          , p = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + a / 2;
        let w = ""
          , x = "";
        return u === "bottom" ? (w = s ? d : `${f}px`,
        x = `${-a}px`) : u === "top" ? (w = s ? d : `${f}px`,
        x = `${r.floating.height + a}px`) : u === "right" ? (w = `${-a}px`,
        x = s ? d : `${p}px`) : u === "left" && (w = `${r.floating.width + a}px`,
        x = s ? d : `${p}px`),
        {
            data: {
                x: w,
                y: x
            }
        }
    }
});
function Ng(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var LS = kg
  , zS = Pg
  , DS = Rg
  , [za,c2] = Aa("Tooltip", [Cg])
  , Yc = Cg()
  , Ig = "TooltipProvider"
  , US = 700
  , _f = "tooltip.open"
  , [BS,Mg] = za(Ig)
  , Ag = e => {
    const {__scopeTooltip: t, delayDuration: n=US, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , s = E.useRef(!0)
      , l = E.useRef(!1)
      , a = E.useRef(0);
    return E.useEffect( () => {
        const u = a.current;
        return () => window.clearTimeout(u)
    }
    , []),
    P.jsx(BS, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: E.useCallback( () => {
            window.clearTimeout(a.current),
            s.current = !1
        }
        , []),
        onClose: E.useCallback( () => {
            window.clearTimeout(a.current),
            a.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: E.useCallback(u => {
            l.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
Ag.displayName = Ig;
var Og = "Tooltip"
  , [d2,Da] = za(Og)
  , Mu = "TooltipTrigger"
  , $S = E.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Da(Mu, n)
      , i = Mg(Mu, n)
      , s = Yc(n)
      , l = E.useRef(null)
      , a = an(t, l, o.onTriggerChange)
      , u = E.useRef(!1)
      , c = E.useRef(!1)
      , d = E.useCallback( () => u.current = !1, []);
    return E.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    P.jsx(LS, {
        asChild: !0,
        ...s,
        children: P.jsx(Rt.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: qe(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: qe(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: qe(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: qe(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: qe(e.onBlur, o.onClose),
            onClick: qe(e.onClick, o.onClose)
        })
    })
}
);
$S.displayName = Mu;
var WS = "TooltipPortal"
  , [f2,VS] = za(WS, {
    forceMount: void 0
})
  , Uo = "TooltipContent"
  , _g = E.forwardRef( (e, t) => {
    const n = VS(Uo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = Da(Uo, e.__scopeTooltip);
    return P.jsx(Fc, {
        present: r || s.open,
        children: s.disableHoverableContent ? P.jsx(Fg, {
            side: o,
            ...i,
            ref: t
        }) : P.jsx(HS, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , HS = E.forwardRef( (e, t) => {
    const n = Da(Uo, e.__scopeTooltip)
      , r = Mg(Uo, e.__scopeTooltip)
      , o = E.useRef(null)
      , i = an(t, o)
      , [s,l] = E.useState(null)
      , {trigger: a, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: d} = r
      , f = E.useCallback( () => {
        l(null),
        d(!1)
    }
    , [d])
      , p = E.useCallback( (w, x) => {
        const S = w.currentTarget
          , y = {
            x: w.clientX,
            y: w.clientY
        }
          , m = XS(y, S.getBoundingClientRect())
          , v = qS(y, m)
          , T = JS(x.getBoundingClientRect())
          , R = eC([...v, ...T]);
        l(R),
        d(!0)
    }
    , [d]);
    return E.useEffect( () => () => f(), [f]),
    E.useEffect( () => {
        if (a && c) {
            const w = S => p(S, c)
              , x = S => p(S, a);
            return a.addEventListener("pointerleave", w),
            c.addEventListener("pointerleave", x),
            () => {
                a.removeEventListener("pointerleave", w),
                c.removeEventListener("pointerleave", x)
            }
        }
    }
    , [a, c, p, f]),
    E.useEffect( () => {
        if (s) {
            const w = x => {
                const S = x.target
                  , y = {
                    x: x.clientX,
                    y: x.clientY
                }
                  , m = (a == null ? void 0 : a.contains(S)) || (c == null ? void 0 : c.contains(S))
                  , v = !ZS(y, s);
                m ? f() : v && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", w),
            () => document.removeEventListener("pointermove", w)
        }
    }
    , [a, c, s, u, f]),
    P.jsx(Fg, {
        ...e,
        ref: i
    })
}
)
  , [GS,QS] = za(Og, {
    isInside: !1
})
  , YS = ow("TooltipContent")
  , Fg = E.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , a = Da(Uo, n)
      , u = Yc(n)
      , {onClose: c} = a;
    return E.useEffect( () => (document.addEventListener(_f, c),
    () => document.removeEventListener(_f, c)), [c]),
    E.useEffect( () => {
        if (a.trigger) {
            const d = f => {
                const p = f.target;
                p != null && p.contains(a.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [a.trigger, c]),
    P.jsx(_c, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: P.jsxs(zS, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [P.jsx(YS, {
                children: r
            }), P.jsx(GS, {
                scope: n,
                isInside: !0,
                children: P.jsx(Nw, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
_g.displayName = Uo;
var jg = "TooltipArrow"
  , KS = E.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Yc(n);
    return QS(jg, n).isInside ? null : P.jsx(DS, {
        ...o,
        ...r,
        ref: t
    })
}
);
KS.displayName = jg;
function XS(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function qS(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function JS(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function ZS(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i]
          , a = t[s]
          , u = l.x
          , c = l.y
          , d = a.x
          , f = a.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (o = !o)
    }
    return o
}
function eC(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    tC(t)
}
function tC(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var nC = Ag
  , Lg = _g;
const rC = nC
  , oC = E.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => P.jsx(Lg, {
    ref: r,
    sideOffset: t,
    className: Bn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
oC.displayName = Lg.displayName;
var Ua = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Ba = typeof window > "u" || "Deno"in globalThis;
function Jt() {}
function iC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function sC(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function aC(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Au(e, t) {
    return typeof e == "function" ? e(t) : e
}
function lC(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Ff(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Kc(s, t.options))
                return !1
        } else if (!Di(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function jf(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (zi(t.options.mutationKey) !== zi(i))
                return !1
        } else if (!Di(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Kc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || zi)(e)
}
function zi(e) {
    return JSON.stringify(e, (t, n) => Ou(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function Di(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Di(e[n], t[n])) : !1
}
function zg(e, t) {
    if (e === t)
        return e;
    const n = Lf(e) && Lf(t);
    if (n || Ou(e) && Ou(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {}
          , a = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const d = n ? c : i[c];
            (!n && a.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0,
            u++) : (l[d] = zg(e[d], t[d]),
            l[d] === e[d] && e[d] !== void 0 && u++)
        }
        return o === s && u === o ? e : l
    }
    return t
}
function Lf(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Ou(e) {
    if (!zf(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!zf(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function zf(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function uC(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function cC(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? zg(e, t) : t
}
function dC(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function fC(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Xc = Symbol();
function Dg(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Xc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var _r, er, bo, qf, pC = (qf = class extends Ua {
    constructor() {
        super();
        Te(this, _r);
        Te(this, er);
        Te(this, bo);
        ve(this, bo, t => {
            if (!Ba && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        j(this, er) || this.setEventListener(j(this, bo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = j(this, er)) == null || t.call(this),
        ve(this, er, void 0))
    }
    setEventListener(t) {
        var n;
        ve(this, bo, t),
        (n = j(this, er)) == null || n.call(this),
        ve(this, er, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        j(this, _r) !== t && (ve(this, _r, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof j(this, _r) == "boolean" ? j(this, _r) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
_r = new WeakMap,
er = new WeakMap,
bo = new WeakMap,
qf), Ug = new pC, ko, tr, Po, Jf, hC = (Jf = class extends Ua {
    constructor() {
        super();
        Te(this, ko, !0);
        Te(this, tr);
        Te(this, Po);
        ve(this, Po, t => {
            if (!Ba && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        j(this, tr) || this.setEventListener(j(this, Po))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = j(this, tr)) == null || t.call(this),
        ve(this, tr, void 0))
    }
    setEventListener(t) {
        var n;
        ve(this, Po, t),
        (n = j(this, tr)) == null || n.call(this),
        ve(this, tr, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        j(this, ko) !== t && (ve(this, ko, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return j(this, ko)
    }
}
,
ko = new WeakMap,
tr = new WeakMap,
Po = new WeakMap,
Jf), da = new hC;
function mC() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function gC(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Bg(e) {
    return (e ?? "online") === "online" ? da.isOnline() : !0
}
var $g = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Rl(e) {
    return e instanceof $g
}
function Wg(e) {
    let t = !1, n = 0, r = !1, o;
    const i = mC()
      , s = x => {
        var S;
        r || (f(new $g(x)),
        (S = e.abort) == null || S.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => Ug.isFocused() && (e.networkMode === "always" || da.isOnline()) && e.canRun()
      , c = () => Bg(e.networkMode) && e.canRun()
      , d = x => {
        var S;
        r || (r = !0,
        (S = e.onSuccess) == null || S.call(e, x),
        o == null || o(),
        i.resolve(x))
    }
      , f = x => {
        var S;
        r || (r = !0,
        (S = e.onError) == null || S.call(e, x),
        o == null || o(),
        i.reject(x))
    }
      , p = () => new Promise(x => {
        var S;
        o = y => {
            (r || u()) && x(y)
        }
        ,
        (S = e.onPause) == null || S.call(e)
    }
    ).then( () => {
        var x;
        o = void 0,
        r || (x = e.onContinue) == null || x.call(e)
    }
    )
      , w = () => {
        if (r)
            return;
        let x;
        const S = n === 0 ? e.initialPromise : void 0;
        try {
            x = S ?? e.fn()
        } catch (y) {
            x = Promise.reject(y)
        }
        Promise.resolve(x).then(d).catch(y => {
            var N;
            if (r)
                return;
            const m = e.retry ?? (Ba ? 0 : 3)
              , v = e.retryDelay ?? gC
              , T = typeof v == "function" ? v(n, y) : v
              , R = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, y);
            if (t || !R) {
                f(y);
                return
            }
            n++,
            (N = e.onFail) == null || N.call(e, n, y),
            uC(T).then( () => u() ? void 0 : p()).then( () => {
                t ? f(y) : w()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: a,
        canStart: c,
        start: () => (c() ? w() : p().then(w),
        i)
    }
}
var vC = e => setTimeout(e, 0);
function yC() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = vC;
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || s()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            i( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var mt = yC(), Fr, Zf, Vg = (Zf = class {
    constructor() {
        Te(this, Fr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        sC(this.gcTime) && ve(this, Fr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Ba ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        j(this, Fr) && (clearTimeout(j(this, Fr)),
        ve(this, Fr, void 0))
    }
}
,
Fr = new WeakMap,
Zf), To, jr, Bt, Lr, ct, Ui, zr, Zt, Pn, ep, wC = (ep = class extends Vg {
    constructor(t) {
        super();
        Te(this, Zt);
        Te(this, To);
        Te(this, jr);
        Te(this, Bt);
        Te(this, Lr);
        Te(this, ct);
        Te(this, Ui);
        Te(this, zr);
        ve(this, zr, !1),
        ve(this, Ui, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        ve(this, Lr, t.client),
        ve(this, Bt, j(this, Lr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        ve(this, To, SC(this.options)),
        this.state = t.state ?? j(this, To),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = j(this, ct)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...j(this, Ui),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && j(this, Bt).remove(this)
    }
    setData(t, n) {
        const r = cC(this.state.data, t, this.options);
        return at(this, Zt, Pn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        at(this, Zt, Pn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = j(this, ct)) == null ? void 0 : r.promise;
        return (o = j(this, ct)) == null || o.cancel(t),
        n ? n.then(Jt).catch(Jt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(j(this, To))
    }
    isActive() {
        return this.observers.some(t => lC(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Xc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Au(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !aC(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = j(this, ct)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = j(this, ct)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        j(this, Bt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (j(this, ct) && (j(this, zr) ? j(this, ct).cancel({
            revert: !0
        }) : j(this, ct).cancelRetry()),
        this.scheduleGc()),
        j(this, Bt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || at(this, Zt, Pn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (j(this, ct))
                return j(this, ct).continueRetry(),
                j(this, ct).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(p => p.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (ve(this, zr, !0),
                r.signal)
            })
        }
          , i = () => {
            const f = Dg(this.options, n)
              , w = ( () => {
                const x = {
                    client: j(this, Lr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(x),
                x
            }
            )();
            return ve(this, zr, !1),
            this.options.persister ? this.options.persister(f, w, this) : f(w)
        }
          , l = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: j(this, Lr),
                state: this.state,
                fetchFn: i
            };
            return o(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(l, this),
        ve(this, jr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = l.fetchOptions) == null ? void 0 : c.meta)) && at(this, Zt, Pn).call(this, {
            type: "fetch",
            meta: (d = l.fetchOptions) == null ? void 0 : d.meta
        });
        const a = f => {
            var p, w, x, S;
            Rl(f) && f.silent || at(this, Zt, Pn).call(this, {
                type: "error",
                error: f
            }),
            Rl(f) || ((w = (p = j(this, Bt).config).onError) == null || w.call(p, f, this),
            (S = (x = j(this, Bt).config).onSettled) == null || S.call(x, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return ve(this, ct, Wg({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var p, w, x, S;
                if (f === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (y) {
                    a(y);
                    return
                }
                (w = (p = j(this, Bt).config).onSuccess) == null || w.call(p, f, this),
                (S = (x = j(this, Bt).config).onSettled) == null || S.call(x, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (f, p) => {
                at(this, Zt, Pn).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: p
                })
            }
            ,
            onPause: () => {
                at(this, Zt, Pn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                at(this, Zt, Pn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        })),
        j(this, ct).start()
    }
}
,
To = new WeakMap,
jr = new WeakMap,
Bt = new WeakMap,
Lr = new WeakMap,
ct = new WeakMap,
Ui = new WeakMap,
zr = new WeakMap,
Zt = new WeakSet,
Pn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...xC(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return ve(this, jr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Rl(o) && o.revert && j(this, jr) ? {
                ...j(this, jr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    mt.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        j(this, Bt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
ep);
function xC(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Bg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function SC(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var hn, tp, CC = (tp = class extends Ua {
    constructor(t={}) {
        super();
        Te(this, hn);
        this.config = t,
        ve(this, hn, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? Kc(o, n);
        let s = this.get(i);
        return s || (s = new wC({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        j(this, hn).has(t.queryHash) || (j(this, hn).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = j(this, hn).get(t.queryHash);
        n && (t.destroy(),
        n === t && j(this, hn).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        mt.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return j(this, hn).get(t)
    }
    getAll() {
        return [...j(this, hn).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ff(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Ff(t, r)) : n
    }
    notify(t) {
        mt.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        mt.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        mt.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
hn = new WeakMap,
tp), mn, pt, Dr, gn, Kn, np, EC = (np = class extends Vg {
    constructor(t) {
        super();
        Te(this, gn);
        Te(this, mn);
        Te(this, pt);
        Te(this, Dr);
        this.mutationId = t.mutationId,
        ve(this, pt, t.mutationCache),
        ve(this, mn, []),
        this.state = t.state || bC(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        j(this, mn).includes(t) || (j(this, mn).push(t),
        this.clearGcTimeout(),
        j(this, pt).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        ve(this, mn, j(this, mn).filter(n => n !== t)),
        this.scheduleGc(),
        j(this, pt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        j(this, mn).length || (this.state.status === "pending" ? this.scheduleGc() : j(this, pt).remove(this))
    }
    continue() {
        var t;
        return ((t = j(this, Dr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, s, l, a, u, c, d, f, p, w, x, S, y, m, v, T, R, N, M, _;
        const n = () => {
            at(this, gn, Kn).call(this, {
                type: "continue"
            })
        }
        ;
        ve(this, Dr, Wg({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (V, z) => {
                at(this, gn, Kn).call(this, {
                    type: "failed",
                    failureCount: V,
                    error: z
                })
            }
            ,
            onPause: () => {
                at(this, gn, Kn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => j(this, pt).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !j(this, Dr).canStart();
        try {
            if (r)
                n();
            else {
                at(this, gn, Kn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((s = (i = j(this, pt).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const z = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
                z !== this.state.context && at(this, gn, Kn).call(this, {
                    type: "pending",
                    context: z,
                    variables: t,
                    isPaused: o
                })
            }
            const V = await j(this, Dr).start();
            return await ((c = (u = j(this, pt).config).onSuccess) == null ? void 0 : c.call(u, V, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, V, t, this.state.context)),
            await ((w = (p = j(this, pt).config).onSettled) == null ? void 0 : w.call(p, V, null, this.state.variables, this.state.context, this)),
            await ((S = (x = this.options).onSettled) == null ? void 0 : S.call(x, V, null, t, this.state.context)),
            at(this, gn, Kn).call(this, {
                type: "success",
                data: V
            }),
            V
        } catch (V) {
            try {
                throw await ((m = (y = j(this, pt).config).onError) == null ? void 0 : m.call(y, V, t, this.state.context, this)),
                await ((T = (v = this.options).onError) == null ? void 0 : T.call(v, V, t, this.state.context)),
                await ((N = (R = j(this, pt).config).onSettled) == null ? void 0 : N.call(R, void 0, V, this.state.variables, this.state.context, this)),
                await ((_ = (M = this.options).onSettled) == null ? void 0 : _.call(M, void 0, V, t, this.state.context)),
                V
            } finally {
                at(this, gn, Kn).call(this, {
                    type: "error",
                    error: V
                })
            }
        } finally {
            j(this, pt).runNext(this)
        }
    }
}
,
mn = new WeakMap,
pt = new WeakMap,
Dr = new WeakMap,
gn = new WeakSet,
Kn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    mt.batch( () => {
        j(this, mn).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        j(this, pt).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
np);
function bC() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Nn, en, Bi, rp, kC = (rp = class extends Ua {
    constructor(t={}) {
        super();
        Te(this, Nn);
        Te(this, en);
        Te(this, Bi);
        this.config = t,
        ve(this, Nn, new Set),
        ve(this, en, new Map),
        ve(this, Bi, 0)
    }
    build(t, n, r) {
        const o = new EC({
            mutationCache: this,
            mutationId: ++qi(this, Bi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        j(this, Nn).add(t);
        const n = ws(t);
        if (typeof n == "string") {
            const r = j(this, en).get(n);
            r ? r.push(t) : j(this, en).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (j(this, Nn).delete(t)) {
            const n = ws(t);
            if (typeof n == "string") {
                const r = j(this, en).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && j(this, en).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ws(t);
        if (typeof n == "string") {
            const r = j(this, en).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ws(t);
        if (typeof n == "string") {
            const o = (r = j(this, en).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        mt.batch( () => {
            j(this, Nn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            j(this, Nn).clear(),
            j(this, en).clear()
        }
        )
    }
    getAll() {
        return Array.from(j(this, Nn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => jf(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => jf(t, n))
    }
    notify(t) {
        mt.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return mt.batch( () => Promise.all(t.map(n => n.continue().catch(Jt))))
    }
}
,
Nn = new WeakMap,
en = new WeakMap,
Bi = new WeakMap,
rp);
function ws(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Df(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, p, w;
            const r = t.options
              , o = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , i = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , s = ((w = t.state.data) == null ? void 0 : w.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let x = !1;
                const S = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? x = !0 : t.signal.addEventListener("abort", () => {
                            x = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , y = Dg(t.options, t.fetchOptions)
                  , m = async (v, T, R) => {
                    if (x)
                        return Promise.reject();
                    if (T == null && v.pages.length)
                        return Promise.resolve(v);
                    const M = ( () => {
                        const ae = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: T,
                            direction: R ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return S(ae),
                        ae
                    }
                    )()
                      , _ = await y(M)
                      , {maxPages: V} = t.options
                      , z = R ? fC : dC;
                    return {
                        pages: z(v.pages, _, V),
                        pageParams: z(v.pageParams, T, V)
                    }
                }
                ;
                if (o && i.length) {
                    const v = o === "backward"
                      , T = v ? PC : Uf
                      , R = {
                        pages: i,
                        pageParams: s
                    }
                      , N = T(r, R);
                    l = await m(R, N, v)
                } else {
                    const v = e ?? i.length;
                    do {
                        const T = a === 0 ? s[0] ?? r.initialPageParam : Uf(r, l);
                        if (a > 0 && T == null)
                            break;
                        l = await m(l, T),
                        a++
                    } while (a < v)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var x, S;
                return (S = (x = t.options).persister) == null ? void 0 : S.call(x, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Uf(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function PC(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Ve, nr, rr, Ro, No, or, Io, Mo, op, TC = (op = class {
    constructor(e={}) {
        Te(this, Ve);
        Te(this, nr);
        Te(this, rr);
        Te(this, Ro);
        Te(this, No);
        Te(this, or);
        Te(this, Io);
        Te(this, Mo);
        ve(this, Ve, e.queryCache || new CC),
        ve(this, nr, e.mutationCache || new kC),
        ve(this, rr, e.defaultOptions || {}),
        ve(this, Ro, new Map),
        ve(this, No, new Map),
        ve(this, or, 0)
    }
    mount() {
        qi(this, or)._++,
        j(this, or) === 1 && (ve(this, Io, Ug.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            j(this, Ve).onFocus())
        }
        )),
        ve(this, Mo, da.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            j(this, Ve).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        qi(this, or)._--,
        j(this, or) === 0 && ((e = j(this, Io)) == null || e.call(this),
        ve(this, Io, void 0),
        (t = j(this, Mo)) == null || t.call(this),
        ve(this, Mo, void 0))
    }
    isFetching(e) {
        return j(this, Ve).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return j(this, nr).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = j(this, Ve).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = j(this, Ve).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Au(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return j(this, Ve).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = j(this, Ve).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = iC(t, i);
        if (s !== void 0)
            return j(this, Ve).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return mt.batch( () => j(this, Ve).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = j(this, Ve).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = j(this, Ve);
        mt.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = j(this, Ve);
        return mt.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = mt.batch( () => j(this, Ve).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(Jt).catch(Jt)
    }
    invalidateQueries(e, t={}) {
        return mt.batch( () => (j(this, Ve).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = mt.batch( () => j(this, Ve).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(Jt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(Jt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = j(this, Ve).build(this, t);
        return n.isStaleByTime(Au(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Jt).catch(Jt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Df(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Jt).catch(Jt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Df(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return da.isOnline() ? j(this, nr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return j(this, Ve)
    }
    getMutationCache() {
        return j(this, nr)
    }
    getDefaultOptions() {
        return j(this, rr)
    }
    setDefaultOptions(e) {
        ve(this, rr, e)
    }
    setQueryDefaults(e, t) {
        j(this, Ro).set(zi(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...j(this, Ro).values()]
          , n = {};
        return t.forEach(r => {
            Di(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        j(this, No).set(zi(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...j(this, No).values()]
          , n = {};
        return t.forEach(r => {
            Di(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...j(this, rr).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Kc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Xc && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...j(this, rr).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        j(this, Ve).clear(),
        j(this, nr).clear()
    }
}
,
Ve = new WeakMap,
nr = new WeakMap,
rr = new WeakMap,
Ro = new WeakMap,
No = new WeakMap,
or = new WeakMap,
Io = new WeakMap,
Mo = new WeakMap,
op), RC = E.createContext(void 0), NC = ({client: e, children: t}) => (E.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
P.jsx(RC.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fa() {
    return fa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    fa.apply(this, arguments)
}
var ar;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(ar || (ar = {}));
const Bf = "popstate";
function IC(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return _u("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Gg(o)
    }
    return AC(t, n, null, e)
}
function Tt(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Hg(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function MC() {
    return Math.random().toString(36).substr(2, 8)
}
function $f(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function _u(e, t, n, r) {
    return n === void 0 && (n = null),
    fa({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? $a(t) : t, {
        state: n,
        key: t && t.key || r || MC()
    })
}
function Gg(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function $a(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function AC(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = ar.Pop
      , a = null
      , u = c();
    u == null && (u = 0,
    s.replaceState(fa({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function d() {
        l = ar.Pop;
        let S = c()
          , y = S == null ? null : S - u;
        u = S,
        a && a({
            action: l,
            location: x.location,
            delta: y
        })
    }
    function f(S, y) {
        l = ar.Push;
        let m = _u(x.location, S, y);
        u = c() + 1;
        let v = $f(m, u)
          , T = x.createHref(m);
        try {
            s.pushState(v, "", T)
        } catch (R) {
            if (R instanceof DOMException && R.name === "DataCloneError")
                throw R;
            o.location.assign(T)
        }
        i && a && a({
            action: l,
            location: x.location,
            delta: 1
        })
    }
    function p(S, y) {
        l = ar.Replace;
        let m = _u(x.location, S, y);
        u = c();
        let v = $f(m, u)
          , T = x.createHref(m);
        s.replaceState(v, "", T),
        i && a && a({
            action: l,
            location: x.location,
            delta: 0
        })
    }
    function w(S) {
        let y = o.location.origin !== "null" ? o.location.origin : o.location.href
          , m = typeof S == "string" ? S : Gg(S);
        return m = m.replace(/ $/, "%20"),
        Tt(y, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,y)
    }
    let x = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(S) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Bf, d),
            a = S,
            () => {
                o.removeEventListener(Bf, d),
                a = null
            }
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: w,
        encodeLocation(S) {
            let y = w(S);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: f,
        replace: p,
        go(S) {
            return s.go(S)
        }
    };
    return x
}
var Wf;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Wf || (Wf = {}));
function OC(e, t, n) {
    return n === void 0 && (n = "/"),
    _C(e, t, n, !1)
}
function _C(e, t, n, r) {
    let o = typeof t == "string" ? $a(t) : t
      , i = Kg(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = Qg(e);
    FC(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = GC(i);
        l = VC(s[a], u, r)
    }
    return l
}
function Qg(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (Tt(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Eo([r, a.relativePath])
          , c = n.concat(a);
        i.children && i.children.length > 0 && (Tt(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Qg(i.children, t, c, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: $C(u, i.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of Yg(i.path))
                o(i, s, a)
    }
    ),
    t
}
function Yg(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = Yg(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function FC(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : WC(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const jC = /^:[\w-]+$/
  , LC = 3
  , zC = 2
  , DC = 1
  , UC = 10
  , BC = -2
  , Vf = e => e === "*";
function $C(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Vf) && (r += BC),
    t && (r += zC),
    n.filter(o => !Vf(o)).reduce( (o, i) => o + (jC.test(i) ? LC : i === "" ? DC : UC), r)
}
function WC(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function VC(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , d = Hf({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, c)
          , f = a.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Hf({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(o, d.params),
        s.push({
            params: o,
            pathname: Eo([i, d.pathname]),
            pathnameBase: QC(Eo([i, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (i = Eo([i, d.pathnameBase]))
    }
    return s
}
function Hf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = HC(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: p} = c;
            if (f === "*") {
                let x = l[d] || "";
                s = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1")
            }
            const w = l[d];
            return p && !w ? u[f] = void 0 : u[f] = (w || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function HC(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Hg(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function GC(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Hg(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Kg(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Eo = e => e.join("/").replace(/\/\/+/g, "/")
  , QC = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function YC(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Xg = ["post", "put", "patch", "delete"];
new Set(Xg);
const KC = ["get", ...Xg];
new Set(KC);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pa() {
    return pa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    pa.apply(this, arguments)
}
const XC = E.createContext(null)
  , qC = E.createContext(null)
  , qg = E.createContext(null)
  , Wa = E.createContext(null)
  , Xi = E.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Jg = E.createContext(null);
function qc() {
    return E.useContext(Wa) != null
}
function Zg() {
    return qc() || Tt(!1),
    E.useContext(Wa).location
}
function JC() {
    let {matches: e} = E.useContext(Xi)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function ZC(e, t) {
    return eE(e, t)
}
function eE(e, t, n, r) {
    qc() || Tt(!1);
    let {navigator: o} = E.useContext(qg)
      , {matches: i} = E.useContext(Xi)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Zg(), c;
    if (t) {
        var d;
        let S = typeof t == "string" ? $a(t) : t;
        a === "/" || (d = S.pathname) != null && d.startsWith(a) || Tt(!1),
        c = S
    } else
        c = u;
    let f = c.pathname || "/"
      , p = f;
    if (a !== "/") {
        let S = a.replace(/^\//, "").split("/");
        p = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let w = OC(e, {
        pathname: p
    })
      , x = iE(w && w.map(S => Object.assign({}, S, {
        params: Object.assign({}, l, S.params),
        pathname: Eo([a, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? a : Eo([a, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), i, n, r);
    return t && x ? E.createElement(Wa.Provider, {
        value: {
            location: pa({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: ar.Pop
        }
    }, x) : x
}
function tE() {
    let e = uE()
      , t = YC(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? E.createElement("pre", {
        style: o
    }, n) : null, null)
}
const nE = E.createElement(tE, null);
class rE extends E.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? E.createElement(Xi.Provider, {
            value: this.props.routeContext
        }, E.createElement(Jg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function oE(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = E.useContext(XC);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Xi.Provider, {
        value: t
    }, r)
}
function iE(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let c = s.findIndex(d => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0);
        c >= 0 || Tt(!1),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: p} = n
                  , w = d.route.loader && f[d.route.id] === void 0 && (!p || p[d.route.id] === void 0);
                if (d.route.lazy || w) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, d, f) => {
        let p, w = !1, x = null, S = null;
        n && (p = l && d.route.id ? l[d.route.id] : void 0,
        x = d.route.errorElement || nE,
        a && (u < 0 && f === 0 ? (w = !0,
        S = null) : u === f && (w = !0,
        S = d.route.hydrateFallbackElement || null)));
        let y = t.concat(s.slice(0, f + 1))
          , m = () => {
            let v;
            return p ? v = x : w ? v = S : d.route.Component ? v = E.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c,
            E.createElement(oE, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: y,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? E.createElement(rE, {
            location: n.location,
            revalidation: n.revalidation,
            component: x,
            error: p,
            children: m(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var Fu = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Fu || {});
function sE(e) {
    let t = E.useContext(qC);
    return t || Tt(!1),
    t
}
function aE(e) {
    let t = E.useContext(Xi);
    return t || Tt(!1),
    t
}
function lE(e) {
    let t = aE()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Tt(!1),
    n.route.id
}
function uE() {
    var e;
    let t = E.useContext(Jg)
      , n = sE(Fu.UseRouteError)
      , r = lE(Fu.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function cE(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Fs(e) {
    Tt(!1)
}
function dE(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=ar.Pop, navigator: i, static: s=!1, future: l} = e;
    qc() && Tt(!1);
    let a = t.replace(/^\/*/, "/")
      , u = E.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: pa({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = $a(r));
    let {pathname: c="/", search: d="", hash: f="", state: p=null, key: w="default"} = r
      , x = E.useMemo( () => {
        let S = Kg(c, a);
        return S == null ? null : {
            location: {
                pathname: S,
                search: d,
                hash: f,
                state: p,
                key: w
            },
            navigationType: o
        }
    }
    , [a, c, d, f, p, w, o]);
    return x == null ? null : E.createElement(qg.Provider, {
        value: u
    }, E.createElement(Wa.Provider, {
        children: n,
        value: x
    }))
}
function fE(e) {
    let {children: t, location: n} = e;
    return ZC(ju(t), n)
}
new Promise( () => {}
);
function ju(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return E.Children.forEach(e, (r, o) => {
        if (!E.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === E.Fragment) {
            n.push.apply(n, ju(r.props.children, i));
            return
        }
        r.type !== Fs && Tt(!1),
        !r.props.index || !r.props.children || Tt(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = ju(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const pE = "6";
try {
    window.__reactRouterVersion = pE
} catch {}
const hE = "startTransition"
  , Gf = mp[hE];
function mE(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = E.useRef();
    i.current == null && (i.current = IC({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = E.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , c = E.useCallback(d => {
        u && Gf ? Gf( () => a(d)) : a(d)
    }
    , [a, u]);
    return E.useLayoutEffect( () => s.listen(c), [s, c]),
    E.useEffect( () => cE(r), [r]),
    E.createElement(dE, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var Qf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Qf || (Qf = {}));
var Yf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Yf || (Yf = {}));
var ev = {
    exports: {}
};
(function(e, t) {
    (function(n, r, o, i) {
        var s = {
            URL: n.URL || n.webkitURL || n.mozURL || n.msURL,
            getUserMedia: function() {
                var g = o.getUserMedia || o.webkitGetUserMedia || o.mozGetUserMedia || o.msGetUserMedia;
                return g && g.bind(o)
            }(),
            requestAnimFrame: n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame,
            requestTimeout: function(h, C) {
                if (h = h || s.noop,
                C = C || 0,
                !s.requestAnimFrame)
                    return setTimeout(h, C);
                var k = new Date().getTime()
                  , b = new Object
                  , I = s.requestAnimFrame
                  , A = function O() {
                    var $ = new Date().getTime()
                      , W = $ - k;
                    W >= C ? h.call() : b.value = I(O)
                };
                return b.value = I(A),
                b
            },
            Blob: n.Blob || n.BlobBuilder || n.WebKitBlobBuilder || n.MozBlobBuilder || n.MSBlobBuilder,
            btoa: function() {
                var g = n.btoa || function(h) {
                    for (var C = "", k = 0, b = h.length, I = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", A = void 0, O = void 0, $ = void 0, W = void 0, U = void 0, K = void 0, D = void 0; k < b; )
                        A = h.charCodeAt(k++),
                        O = h.charCodeAt(k++),
                        $ = h.charCodeAt(k++),
                        W = A >> 2,
                        U = (A & 3) << 4 | O >> 4,
                        K = (O & 15) << 2 | $ >> 6,
                        D = $ & 63,
                        isNaN(O) ? K = D = 64 : isNaN($) && (D = 64),
                        C = C + I.charAt(W) + I.charAt(U) + I.charAt(K) + I.charAt(D);
                    return C
                }
                ;
                return g ? g.bind(n) : s.noop
            }(),
            isObject: function(h) {
                return h && Object.prototype.toString.call(h) === "[object Object]"
            },
            isEmptyObject: function(h) {
                return s.isObject(h) && !Object.keys(h).length
            },
            isArray: function(h) {
                return h && Array.isArray(h)
            },
            isFunction: function(h) {
                return h && typeof h == "function"
            },
            isElement: function(h) {
                return h && h.nodeType === 1
            },
            isString: function(h) {
                return typeof h == "string" || Object.prototype.toString.call(h) === "[object String]"
            },
            isSupported: {
                canvas: function() {
                    var h = r.createElement("canvas");
                    return h && h.getContext && h.getContext("2d")
                },
                webworkers: function() {
                    return n.Worker
                },
                blob: function() {
                    return s.Blob
                },
                Uint8Array: function() {
                    return n.Uint8Array
                },
                Uint32Array: function() {
                    return n.Uint32Array
                },
                videoCodecs: function() {
                    var g = r.createElement("video")
                      , h = {
                        mp4: !1,
                        h264: !1,
                        ogv: !1,
                        ogg: !1,
                        webm: !1
                    };
                    try {
                        g && g.canPlayType && (h.mp4 = g.canPlayType('video/mp4; codecs="mp4v.20.8"') !== "",
                        h.h264 = (g.canPlayType('video/mp4; codecs="avc1.42E01E"') || g.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) !== "",
                        h.ogv = g.canPlayType('video/ogg; codecs="theora"') !== "",
                        h.ogg = g.canPlayType('video/ogg; codecs="theora"') !== "",
                        h.webm = g.canPlayType('video/webm; codecs="vp8, vorbis"') !== -1)
                    } catch {}
                    return h
                }()
            },
            noop: function() {},
            each: function(h, C) {
                var k = void 0
                  , b = void 0;
                if (s.isArray(h))
                    for (k = -1,
                    b = h.length; ++k < b && C(k, h[k]) !== !1; )
                        ;
                else if (s.isObject(h)) {
                    for (k in h)
                        if (h.hasOwnProperty(k) && C(k, h[k]) === !1)
                            break
                }
            },
            mergeOptions: function(h, C) {
                if (!(!s.isObject(h) || !s.isObject(C) || !Object.keys)) {
                    var k = {};
                    return s.each(h, function(b, I) {
                        k[b] = h[b]
                    }),
                    s.each(C, function(b, I) {
                        var A = C[b];
                        s.isObject(A) && h[b] ? k[b] = s.mergeOptions(h[b], A) : k[b] = A
                    }),
                    k
                }
            },
            setCSSAttr: function(h, C, k) {
                s.isElement(h) && (s.isString(C) && s.isString(k) ? h.style[C] = k : s.isObject(C) && s.each(C, function(b, I) {
                    h.style[b] = I
                }))
            },
            removeElement: function(h) {
                s.isElement(h) && h.parentNode && h.parentNode.removeChild(h)
            },
            createWebWorker: function(h) {
                if (!s.isString(h))
                    return {};
                try {
                    var C = new s.Blob([h],{
                        type: "text/javascript"
                    })
                      , k = s.URL.createObjectURL(C)
                      , b = new Worker(k);
                    return {
                        objectUrl: k,
                        worker: b
                    }
                } catch (I) {
                    return "" + I
                }
            },
            getExtension: function(h) {
                return h.substr(h.lastIndexOf(".") + 1, h.length)
            },
            getFontSize: function() {
                var h = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {};
                if (!r.body || h.resizeFont === !1)
                    return h.fontSize;
                var C = h.text
                  , k = h.gifWidth
                  , b = parseInt(h.fontSize, 10)
                  , I = parseInt(h.minFontSize, 10)
                  , A = r.createElement("div")
                  , O = r.createElement("span");
                for (A.setAttribute("width", k),
                A.appendChild(O),
                O.innerHTML = C,
                O.style.fontSize = b + "px",
                O.style.textIndent = "-9999px",
                O.style.visibility = "hidden",
                r.body.appendChild(O); O.offsetWidth > k && b >= I; )
                    O.style.fontSize = --b + "px";
                return r.body.removeChild(O),
                b + "px"
            },
            webWorkerError: !1
        }
          , l = Object.freeze({
            default: s
        })
          , a = {
            validate: function(h) {
                h = s.isObject(h) ? h : {};
                var C = {};
                return s.each(a.validators, function(k, b) {
                    var I = b.errorCode;
                    if (!h[I] && !b.condition)
                        return C = b,
                        C.error = !0,
                        !1
                }),
                delete C.condition,
                C
            },
            isValid: function(h) {
                var C = a.validate(h)
                  , k = C.error !== !0;
                return k
            },
            validators: [{
                condition: s.isFunction(s.getUserMedia),
                errorCode: "getUserMedia",
                errorMsg: "The getUserMedia API is not supported in your browser"
            }, {
                condition: s.isSupported.canvas(),
                errorCode: "canvas",
                errorMsg: "Canvas elements are not supported in your browser"
            }, {
                condition: s.isSupported.webworkers(),
                errorCode: "webworkers",
                errorMsg: "The Web Workers API is not supported in your browser"
            }, {
                condition: s.isFunction(s.URL),
                errorCode: "window.URL",
                errorMsg: "The window.URL API is not supported in your browser"
            }, {
                condition: s.isSupported.blob(),
                errorCode: "window.Blob",
                errorMsg: "The window.Blob File API is not supported in your browser"
            }, {
                condition: s.isSupported.Uint8Array(),
                errorCode: "window.Uint8Array",
                errorMsg: "The window.Uint8Array function constructor is not supported in your browser"
            }, {
                condition: s.isSupported.Uint32Array(),
                errorCode: "window.Uint32Array",
                errorMsg: "The window.Uint32Array function constructor is not supported in your browser"
            }],
            messages: {
                videoCodecs: {
                    errorCode: "videocodec",
                    errorMsg: "The video codec you are trying to use is not supported in your browser"
                }
            }
        }
          , u = Object.freeze({
            default: a
        })
          , c = function() {}
          , d = {
            sampleInterval: 10,
            numWorkers: 2,
            filter: "",
            gifWidth: 200,
            gifHeight: 200,
            interval: .1,
            numFrames: 10,
            frameDuration: 1,
            keepCameraOn: !1,
            images: [],
            video: null,
            webcamVideoElement: null,
            cameraStream: null,
            text: "",
            fontWeight: "normal",
            fontSize: "16px",
            minFontSize: "10px",
            resizeFont: !1,
            fontFamily: "sans-serif",
            fontColor: "#ffffff",
            textAlign: "center",
            textBaseline: "bottom",
            textXCoordinate: null,
            textYCoordinate: null,
            progressCallback: c,
            completeCallback: c,
            saveRenderingContexts: !1,
            savedRenderingContexts: [],
            crossOrigin: "Anonymous"
        }
          , f = Object.freeze({
            default: d
        });
        function p() {
            return a.isValid()
        }
        function w() {
            return a.isValid()
        }
        function x() {
            var g = {
                getUserMedia: !0
            };
            return a.isValid(g)
        }
        function S(g) {
            var h = !1;
            if (s.isArray(g) && g.length) {
                if (s.each(g, function(C, k) {
                    s.isSupported.videoCodecs[k] && (h = !0)
                }),
                !h)
                    return !1
            } else if (s.isString(g) && g.length && !s.isSupported.videoCodecs[g])
                return !1;
            return a.isValid({
                getUserMedia: !0
            })
        }
        function y() {
            var g = 256, h = 499, C = 491, k = 487, b = 503, I = 3 * b, A = g - 1, O = 4, $ = 100, W = 16, U = 1 << W, K = 10, D = 10, L = U >> D, ee = U << K - D, te = g >> 3, X = 6, q = 1 << X, pe = te * q, me = 30, de = 10, ce = 1 << de, ie, ge = 8, Ge = 1 << ge, Pe = de + ge, Re = 1 << Pe, Be, Se, je, be, $e = [], wt = [], zt = [], $n = [];
            function Pr(he, G, fe) {
                var oe, ue;
                for (Be = he,
                Se = G,
                je = fe,
                be = new Array(g),
                oe = 0; oe < g; oe++)
                    be[oe] = new Array(4),
                    ue = be[oe],
                    ue[0] = ue[1] = ue[2] = (oe << O + 8) / g | 0,
                    zt[oe] = U / g | 0,
                    wt[oe] = 0
            }
            function Dt() {
                for (var he = [], G = new Array(g), fe = 0; fe < g; fe++)
                    G[be[fe][3]] = fe;
                for (var oe = 0, ue = 0; ue < g; ue++) {
                    var ne = G[ue];
                    he[oe++] = be[ne][0],
                    he[oe++] = be[ne][1],
                    he[oe++] = be[ne][2]
                }
                return he
            }
            function Wn() {
                var he, G, fe, oe, ue, ne, se, xe;
                for (se = 0,
                xe = 0,
                he = 0; he < g; he++) {
                    for (ue = be[he],
                    fe = he,
                    oe = ue[1],
                    G = he + 1; G < g; G++)
                        ne = be[G],
                        ne[1] < oe && (fe = G,
                        oe = ne[1]);
                    if (ne = be[fe],
                    he != fe && (G = ne[0],
                    ne[0] = ue[0],
                    ue[0] = G,
                    G = ne[1],
                    ne[1] = ue[1],
                    ue[1] = G,
                    G = ne[2],
                    ne[2] = ue[2],
                    ue[2] = G,
                    G = ne[3],
                    ne[3] = ue[3],
                    ue[3] = G),
                    oe != se) {
                        for ($e[se] = xe + he >> 1,
                        G = se + 1; G < oe; G++)
                            $e[G] = he;
                        se = oe,
                        xe = he
                    }
                }
                for ($e[se] = xe + A >> 1,
                G = se + 1; G < 256; G++)
                    $e[G] = A
            }
            function Ut() {
                var he, G, fe, oe, ue, ne, se, xe, ye, Ne, Yt, Le, xt, Jc;
                for (Se < I && (je = 1),
                ie = 30 + (je - 1) / 3,
                Le = Be,
                xt = 0,
                Jc = Se,
                Yt = Se / (3 * je),
                Ne = Yt / $ | 0,
                xe = ce,
                ne = pe,
                se = ne >> X,
                se <= 1 && (se = 0),
                he = 0; he < se; he++)
                    $n[he] = xe * ((se * se - he * he) * Ge / (se * se));
                for (Se < I ? ye = 3 : Se % h !== 0 ? ye = 3 * h : Se % C !== 0 ? ye = 3 * C : Se % k !== 0 ? ye = 3 * k : ye = 3 * b,
                he = 0; he < Yt; )
                    if (fe = (Le[xt + 0] & 255) << O,
                    oe = (Le[xt + 1] & 255) << O,
                    ue = (Le[xt + 2] & 255) << O,
                    G = Hn(fe, oe, ue),
                    Jr(xe, G, fe, oe, ue),
                    se !== 0 && Rr(se, G, fe, oe, ue),
                    xt += ye,
                    xt >= Jc && (xt -= Se),
                    he++,
                    Ne === 0 && (Ne = 1),
                    he % Ne === 0)
                        for (xe -= xe / ie,
                        ne -= ne / me,
                        se = ne >> X,
                        se <= 1 && (se = 0),
                        G = 0; G < se; G++)
                            $n[G] = xe * ((se * se - G * G) * Ge / (se * se))
            }
            function Tr(he, G, fe) {
                var oe, ue, ne, se, xe, ye, Ne;
                for (xe = 1e3,
                Ne = -1,
                oe = $e[G],
                ue = oe - 1; oe < g || ue >= 0; )
                    oe < g && (ye = be[oe],
                    ne = ye[1] - G,
                    ne >= xe ? oe = g : (oe++,
                    ne < 0 && (ne = -ne),
                    se = ye[0] - he,
                    se < 0 && (se = -se),
                    ne += se,
                    ne < xe && (se = ye[2] - fe,
                    se < 0 && (se = -se),
                    ne += se,
                    ne < xe && (xe = ne,
                    Ne = ye[3])))),
                    ue >= 0 && (ye = be[ue],
                    ne = G - ye[1],
                    ne >= xe ? ue = -1 : (ue--,
                    ne < 0 && (ne = -ne),
                    se = ye[0] - he,
                    se < 0 && (se = -se),
                    ne += se,
                    ne < xe && (se = ye[2] - fe,
                    se < 0 && (se = -se),
                    ne += se,
                    ne < xe && (xe = ne,
                    Ne = ye[3]))));
                return Ne
            }
            function Qo() {
                return Ut(),
                Vn(),
                Wn(),
                Dt()
            }
            function Vn() {
                var he;
                for (he = 0; he < g; he++)
                    be[he][0] >>= O,
                    be[he][1] >>= O,
                    be[he][2] >>= O,
                    be[he][3] = he
            }
            function Rr(he, G, fe, oe, ue) {
                var ne, se, xe, ye, Ne, Yt, Le;
                for (xe = G - he,
                xe < -1 && (xe = -1),
                ye = G + he,
                ye > g && (ye = g),
                ne = G + 1,
                se = G - 1,
                Yt = 1; ne < ye || se > xe; ) {
                    if (Ne = $n[Yt++],
                    ne < ye) {
                        Le = be[ne++];
                        try {
                            Le[0] -= Ne * (Le[0] - fe) / Re | 0,
                            Le[1] -= Ne * (Le[1] - oe) / Re | 0,
                            Le[2] -= Ne * (Le[2] - ue) / Re | 0
                        } catch {}
                    }
                    if (se > xe) {
                        Le = be[se--];
                        try {
                            Le[0] -= Ne * (Le[0] - fe) / Re | 0,
                            Le[1] -= Ne * (Le[1] - oe) / Re | 0,
                            Le[2] -= Ne * (Le[2] - ue) / Re | 0
                        } catch {}
                    }
                }
            }
            function Jr(he, G, fe, oe, ue) {
                var ne = be[G]
                  , se = he / ce;
                ne[0] -= se * (ne[0] - fe) | 0,
                ne[1] -= se * (ne[1] - oe) | 0,
                ne[2] -= se * (ne[2] - ue) | 0
            }
            function Hn(he, G, fe) {
                var oe, ue, ne, se, xe, ye, Ne, Yt, Le, xt;
                for (Yt = ~(1 << 31),
                Le = Yt,
                ye = -1,
                Ne = ye,
                oe = 0; oe < g; oe++)
                    xt = be[oe],
                    ue = xt[0] - he,
                    ue < 0 && (ue = -ue),
                    ne = xt[1] - G,
                    ne < 0 && (ne = -ne),
                    ue += ne,
                    ne = xt[2] - fe,
                    ne < 0 && (ne = -ne),
                    ue += ne,
                    ue < Yt && (Yt = ue,
                    ye = oe),
                    se = ue - (wt[oe] >> W - O),
                    se < Le && (Le = se,
                    Ne = oe),
                    xe = zt[oe] >> D,
                    zt[oe] -= xe,
                    wt[oe] += xe << K;
                return zt[ye] += L,
                wt[ye] -= ee,
                Ne
            }
            Pr.apply(this, arguments);
            var Ze = {};
            return Ze.map = Tr,
            Ze.process = Qo,
            Ze
        }
        function m() {
            var g = this;
            try {
                g.onmessage = function(C) {
                    var k = C.data || {}, b;
                    k.gifshot && (b = h.run(k),
                    postMessage(b))
                }
            } catch {}
            var h = {
                dataToRGB: function(k, b, I) {
                    for (var A = b * I * 4, O = 0, $ = []; O < A; )
                        $.push(k[O++]),
                        $.push(k[O++]),
                        $.push(k[O++]),
                        O++;
                    return $
                },
                componentizedPaletteToArray: function(k) {
                    k = k || [];
                    for (var b = [], I = 0; I < k.length; I += 3) {
                        var A = k[I]
                          , O = k[I + 1]
                          , $ = k[I + 2];
                        b.push(A << 16 | O << 8 | $)
                    }
                    return b
                },
                processFrameWithQuantizer: function(k, b, I, A) {
                    for (var O = this.dataToRGB(k, b, I), $ = new y(O,O.length,A), W = $.process(), U = new Uint32Array(this.componentizedPaletteToArray(W)), K = b * I, D = new Uint8Array(K), L = 0, ee = 0; ee < K; ee++) {
                        var te = O[L++]
                          , X = O[L++]
                          , q = O[L++];
                        D[ee] = $.map(te, X, q)
                    }
                    return {
                        pixels: D,
                        palette: U
                    }
                },
                run: function(k) {
                    k = k || {};
                    var b = k
                      , I = b.height;
                    b.palette;
                    var A = b.sampleInterval
                      , O = b.width
                      , $ = k.data;
                    return this.processFrameWithQuantizer($, O, I, A)
                }
            };
            return h
        }
        function v(g, h, C, k) {
            var b = 0;
            k = k === i ? {} : k;
            var I = k.loop === i ? null : k.loop
              , A = k.palette === i ? null : k.palette;
            if (h <= 0 || C <= 0 || h > 65535 || C > 65535)
                throw "Width/Height invalid.";
            function O(D) {
                var L = D.length;
                if (L < 2 || L > 256 || L & L - 1)
                    throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
                return L
            }
            g[b++] = 71,
            g[b++] = 73,
            g[b++] = 70,
            g[b++] = 56,
            g[b++] = 57,
            g[b++] = 97;
            var $ = 0
              , W = 0;
            if (g[b++] = h & 255,
            g[b++] = h >> 8 & 255,
            g[b++] = C & 255,
            g[b++] = C >> 8 & 255,
            g[b++] = (A !== null ? 128 : 0) | $,
            g[b++] = W,
            g[b++] = 0,
            I !== null) {
                if (I < 0 || I > 65535)
                    throw "Loop count invalid.";
                g[b++] = 33,
                g[b++] = 255,
                g[b++] = 11,
                g[b++] = 78,
                g[b++] = 69,
                g[b++] = 84,
                g[b++] = 83,
                g[b++] = 67,
                g[b++] = 65,
                g[b++] = 80,
                g[b++] = 69,
                g[b++] = 50,
                g[b++] = 46,
                g[b++] = 48,
                g[b++] = 3,
                g[b++] = 1,
                g[b++] = I & 255,
                g[b++] = I >> 8 & 255,
                g[b++] = 0
            }
            var U = !1;
            this.addFrame = function(D, L, ee, te, X, q) {
                if (U === !0 && (--b,
                U = !1),
                q = q === i ? {} : q,
                D < 0 || L < 0 || D > 65535 || L > 65535)
                    throw "x/y invalid.";
                if (ee <= 0 || te <= 0 || ee > 65535 || te > 65535)
                    throw "Width/Height invalid.";
                if (X.length < ee * te)
                    throw "Not enough pixels for the frame size.";
                var pe = !0
                  , me = q.palette;
                if ((me === i || me === null) && (pe = !1,
                me = A),
                me === i || me === null)
                    throw "Must supply either a local or global palette.";
                for (var de = O(me), ce = 0; de >>= 1; )
                    ++ce;
                de = 1 << ce;
                var ie = q.delay === i ? 0 : q.delay
                  , ge = q.disposal === i ? 0 : q.disposal;
                if (ge < 0 || ge > 3)
                    throw "Disposal out of range.";
                var Ge = !1
                  , Pe = 0;
                if (q.transparent !== i && q.transparent !== null && (Ge = !0,
                Pe = q.transparent,
                Pe < 0 || Pe >= de))
                    throw "Transparent color index.";
                if ((ge !== 0 || Ge || ie !== 0) && (g[b++] = 33,
                g[b++] = 249,
                g[b++] = 4,
                g[b++] = ge << 2 | (Ge === !0 ? 1 : 0),
                g[b++] = ie & 255,
                g[b++] = ie >> 8 & 255,
                g[b++] = Pe,
                g[b++] = 0),
                g[b++] = 44,
                g[b++] = D & 255,
                g[b++] = D >> 8 & 255,
                g[b++] = L & 255,
                g[b++] = L >> 8 & 255,
                g[b++] = ee & 255,
                g[b++] = ee >> 8 & 255,
                g[b++] = te & 255,
                g[b++] = te >> 8 & 255,
                g[b++] = pe === !0 ? 128 | ce - 1 : 0,
                pe === !0)
                    for (var Re = 0, Be = me.length; Re < Be; ++Re) {
                        var Se = me[Re];
                        g[b++] = Se >> 16 & 255,
                        g[b++] = Se >> 8 & 255,
                        g[b++] = Se & 255
                    }
                b = K(g, b, ce < 2 ? 2 : ce, X)
            }
            ,
            this.end = function() {
                return U === !1 && (g[b++] = 59,
                U = !0),
                b
            }
            ;
            function K(D, L, ee, te) {
                D[L++] = ee;
                var X = L++
                  , q = 1 << ee
                  , pe = q - 1
                  , me = q + 1
                  , de = me + 1
                  , ce = ee + 1
                  , ie = 0
                  , ge = 0;
                function Ge(zt) {
                    for (; ie >= zt; )
                        D[L++] = ge & 255,
                        ge >>= 8,
                        ie -= 8,
                        L === X + 256 && (D[X] = 255,
                        X = L++)
                }
                function Pe(zt) {
                    ge |= zt << ie,
                    ie += ce,
                    Ge(8)
                }
                var Re = te[0] & pe
                  , Be = {};
                Pe(q);
                for (var Se = 1, je = te.length; Se < je; ++Se) {
                    var be = te[Se] & pe
                      , $e = Re << 8 | be
                      , wt = Be[$e];
                    if (wt === i) {
                        for (ge |= Re << ie,
                        ie += ce; ie >= 8; )
                            D[L++] = ge & 255,
                            ge >>= 8,
                            ie -= 8,
                            L === X + 256 && (D[X] = 255,
                            X = L++);
                        de === 4096 ? (Pe(q),
                        de = me + 1,
                        ce = ee + 1,
                        Be = {}) : (de >= 1 << ce && ++ce,
                        Be[$e] = de++),
                        Re = be
                    } else
                        Re = wt
                }
                return Pe(Re),
                Pe(me),
                Ge(1),
                X + 1 === L ? D[X] = 0 : (D[X] = L - X - 1,
                D[L++] = 0),
                L
            }
        }
        var T = function() {}
          , R = function(h) {
            this.canvas = null,
            this.ctx = null,
            this.repeat = 0,
            this.frames = [],
            this.numRenderedFrames = 0,
            this.onRenderCompleteCallback = T,
            this.onRenderProgressCallback = T,
            this.workers = [],
            this.availableWorkers = [],
            this.generatingGIF = !1,
            this.options = h,
            this.initializeWebWorkers(h)
        };
        R.prototype = {
            workerMethods: m(),
            initializeWebWorkers: function(h) {
                var C = this
                  , k = y.toString() + "(" + m.toString() + "());"
                  , b = void 0
                  , I = void 0
                  , A = void 0
                  , O = void 0
                  , $ = -1
                  , W = "";
                for (O = h.numWorkers; ++$ < O; )
                    b = s.createWebWorker(k),
                    s.isObject(b) ? (I = b.objectUrl,
                    A = b.worker,
                    C.workers.push({
                        worker: A,
                        objectUrl: I
                    }),
                    C.availableWorkers.push(A)) : (W = b,
                    s.webWorkerError = !!b);
                this.workerError = W,
                this.canvas = r.createElement("canvas"),
                this.canvas.width = h.gifWidth,
                this.canvas.height = h.gifHeight,
                this.ctx = this.canvas.getContext("2d"),
                this.frames = []
            },
            getWorker: function() {
                return this.availableWorkers.pop()
            },
            freeWorker: function(h) {
                this.availableWorkers.push(h)
            },
            byteMap: function() {
                for (var g = [], h = 0; h < 256; h++)
                    g[h] = String.fromCharCode(h);
                return g
            }(),
            bufferToString: function(h) {
                for (var C = h.length, k = "", b = -1; ++b < C; )
                    k += this.byteMap[h[b]];
                return k
            },
            onFrameFinished: function(h) {
                var C = this
                  , k = C.frames
                  , b = C.options
                  , I = !!(b.images || []).length
                  , A = k.every(function(O) {
                    return !O.beingProcessed && O.done
                });
                C.numRenderedFrames++,
                I && h(C.numRenderedFrames / k.length),
                C.onRenderProgressCallback(C.numRenderedFrames * .75 / k.length),
                A ? C.generatingGIF || C.generateGIF(k, C.onRenderCompleteCallback) : s.requestTimeout(function() {
                    C.processNextFrame()
                }, 1)
            },
            processFrame: function(h) {
                var C = this;
                this.options;
                var k = this.options
                  , b = k.progressCallback
                  , I = k.sampleInterval
                  , A = this.frames
                  , O = void 0
                  , $ = void 0
                  , W = function() {
                    var K = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}
                      , D = K.data;
                    delete O.data,
                    O.pixels = Array.prototype.slice.call(D.pixels),
                    O.palette = Array.prototype.slice.call(D.palette),
                    O.done = !0,
                    O.beingProcessed = !1,
                    C.freeWorker($),
                    C.onFrameFinished(b)
                };
                if (O = A[h],
                O.beingProcessed || O.done) {
                    this.onFrameFinished();
                    return
                }
                O.sampleInterval = I,
                O.beingProcessed = !0,
                O.gifshot = !0,
                $ = this.getWorker(),
                $ ? ($.onmessage = W,
                $.postMessage(O)) : W({
                    data: C.workerMethods.run(O)
                })
            },
            startRendering: function(h) {
                this.onRenderCompleteCallback = h;
                for (var C = 0; C < this.options.numWorkers && C < this.frames.length; C++)
                    this.processFrame(C)
            },
            processNextFrame: function() {
                for (var h = -1, C = 0; C < this.frames.length; C++) {
                    var k = this.frames[C];
                    if (!k.done && !k.beingProcessed) {
                        h = C;
                        break
                    }
                }
                h >= 0 && this.processFrame(h)
            },
            generateGIF: function(h, C) {
                var k = []
                  , b = {
                    loop: this.repeat
                }
                  , I = this.options
                  , A = I.interval
                  , O = I.frameDuration
                  , $ = I.images
                  , W = !!$.length
                  , U = I.gifHeight
                  , K = I.gifWidth
                  , D = new v(k,K,U,b)
                  , L = this.onRenderProgressCallback
                  , ee = W ? A * 100 : 0
                  , te = void 0
                  , X = void 0;
                this.generatingGIF = !0,
                s.each(h, function(q, pe) {
                    var me = pe.palette;
                    L(.75 + .25 * pe.position * 1 / h.length);
                    for (var de = 0; de < O; de++)
                        D.addFrame(0, 0, K, U, pe.pixels, {
                            palette: me,
                            delay: ee
                        })
                }),
                D.end(),
                L(1),
                this.frames = [],
                this.generatingGIF = !1,
                s.isFunction(C) && (te = this.bufferToString(k),
                X = "data:image/gif;base64," + s.btoa(te),
                C(X))
            },
            setRepeat: function(h) {
                this.repeat = h
            },
            addFrame: function(h, C) {
                C = s.isObject(C) ? C : {};
                var k = this
                  , b = k.ctx
                  , I = k.options
                  , A = I.gifWidth
                  , O = I.gifHeight
                  , $ = s.getFontSize(C)
                  , W = C
                  , U = W.filter
                  , K = W.fontColor
                  , D = W.fontFamily
                  , L = W.fontWeight;
                W.gifHeight,
                W.gifWidth;
                var ee = W.text
                  , te = W.textAlign
                  , X = W.textBaseline
                  , q = C.textXCoordinate ? C.textXCoordinate : te === "left" ? 1 : te === "right" ? A : A / 2
                  , pe = C.textYCoordinate ? C.textYCoordinate : X === "top" ? 1 : X === "center" ? O / 2 : O
                  , me = L + " " + $ + " " + D
                  , de = void 0;
                try {
                    b.filter = U,
                    b.drawImage(h, 0, 0, A, O),
                    ee && (b.font = me,
                    b.fillStyle = K,
                    b.textAlign = te,
                    b.textBaseline = X,
                    b.fillText(ee, q, pe)),
                    de = b.getImageData(0, 0, A, O),
                    k.addFrameImageData(de)
                } catch (ce) {
                    return "" + ce
                }
            },
            addFrameImageData: function() {
                var h = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}
                  , C = this.frames
                  , k = h.data;
                this.frames.push({
                    data: k,
                    width: h.width,
                    height: h.height,
                    palette: null,
                    dithering: null,
                    done: !1,
                    beingProcessed: !1,
                    position: C.length
                })
            },
            onRenderProgress: function(h) {
                this.onRenderProgressCallback = h
            },
            isRendering: function() {
                return this.generatingGIF
            },
            getBase64GIF: function(h) {
                var C = this
                  , k = function(I) {
                    C.destroyWorkers(),
                    s.requestTimeout(function() {
                        h(I)
                    }, 0)
                };
                C.startRendering(k)
            },
            destroyWorkers: function() {
                if (!this.workerError) {
                    var h = this.workers;
                    s.each(h, function(C, k) {
                        var b = k.worker
                          , I = k.objectUrl;
                        b.terminate(),
                        s.URL.revokeObjectURL(I)
                    })
                }
            }
        };
        function N(g, h) {
            g.getBase64GIF(function(C) {
                h({
                    error: !1,
                    errorCode: "",
                    errorMsg: "",
                    image: C
                })
            })
        }
        function M() {
            var g = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}
              , h = g.callback
              , C = g.images
              , k = g.options
              , b = g.imagesLength
              , I = {
                getUserMedia: !0,
                "window.URL": !0
            }
              , A = a.validate(I)
              , O = []
              , $ = 0
              , W = void 0
              , U = void 0;
            if (A.error)
                return h(A);
            U = new R(k),
            s.each(C, function(D, L) {
                var ee = L;
                L.src && (ee = ee.src),
                s.isElement(ee) ? (k.crossOrigin && (ee.crossOrigin = k.crossOrigin),
                O[D] = ee,
                $ += 1,
                $ === b && K()) : s.isString(ee) && (W = new Image,
                k.crossOrigin && (W.crossOrigin = k.crossOrigin),
                function(te) {
                    L.text && (te.text = L.text),
                    te.onerror = function(X) {
                        var q = void 0;
                        if (--b,
                        b === 0)
                            return q = {},
                            q.error = "None of the requested images was capable of being retrieved",
                            h(q)
                    }
                    ,
                    te.onload = function(X) {
                        L.text ? O[D] = {
                            img: te,
                            text: te.text
                        } : O[D] = te,
                        $ += 1,
                        $ === b && K(),
                        s.removeElement(te)
                    }
                    ,
                    te.src = ee
                }(W),
                s.setCSSAttr(W, {
                    position: "fixed",
                    opacity: "0"
                }),
                r.body.appendChild(W))
            });
            function K() {
                s.each(O, function(D, L) {
                    L && (L.text ? U.addFrame(L.img, k, L.text) : U.addFrame(L, k))
                }),
                N(U, h)
            }
        }
        var _ = function() {}
          , V = {
            getGIF: function() {
                var h = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}
                  , C = arguments[1];
                C = s.isFunction(C) ? C : _;
                var k = r.createElement("canvas")
                  , b = void 0
                  , I = h.images
                  , A = !!I.length
                  , O = h.cameraStream
                  , $ = h.crop
                  , W = h.filter
                  , U = h.fontColor
                  , K = h.fontFamily
                  , D = h.fontWeight
                  , L = h.keepCameraOn;
                h.numWorkers;
                var ee = h.progressCallback
                  , te = h.saveRenderingContexts
                  , X = h.savedRenderingContexts
                  , q = h.text
                  , pe = h.textAlign
                  , me = h.textBaseline
                  , de = h.videoElement
                  , ce = h.videoHeight
                  , ie = h.videoWidth
                  , ge = h.webcamVideoElement
                  , Ge = Number(h.gifWidth)
                  , Pe = Number(h.gifHeight)
                  , Re = Number(h.interval);
                Number(h.sampleInterval);
                var Be = A ? 0 : Re * 1e3
                  , Se = []
                  , je = X.length ? X.length : h.numFrames
                  , be = je
                  , $e = new R(h)
                  , wt = s.getFontSize(h)
                  , zt = h.textXCoordinate ? h.textXCoordinate : pe === "left" ? 1 : pe === "right" ? Ge : Ge / 2
                  , $n = h.textYCoordinate ? h.textYCoordinate : me === "top" ? 1 : me === "center" ? Pe / 2 : Pe
                  , Pr = D + " " + wt + " " + K
                  , Dt = $ ? Math.floor($.scaledWidth / 2) : 0
                  , Wn = $ ? ie - $.scaledWidth : 0
                  , Ut = $ ? Math.floor($.scaledHeight / 2) : 0
                  , Tr = $ ? ce - $.scaledHeight : 0
                  , Qo = function Vn() {
                    var Rr = be - 1;
                    X.length ? (b.putImageData(X[je - be], 0, 0),
                    Hn()) : Jr();
                    function Jr() {
                        try {
                            Wn > ie && (Wn = ie),
                            Tr > ce && (Tr = ce),
                            Dt < 0 && (Dt = 0),
                            Ut < 0 && (Ut = 0),
                            b.filter = W,
                            b.drawImage(de, Dt, Ut, Wn, Tr, 0, 0, Ge, Pe),
                            Hn()
                        } catch (Ze) {
                            if (Ze.name === "NS_ERROR_NOT_AVAILABLE")
                                s.requestTimeout(Jr, 100);
                            else
                                throw Ze
                        }
                    }
                    function Hn() {
                        var Ze = void 0;
                        te && Se.push(b.getImageData(0, 0, Ge, Pe)),
                        q && (b.font = Pr,
                        b.fillStyle = U,
                        b.textAlign = pe,
                        b.textBaseline = me,
                        b.fillText(q, zt, $n)),
                        Ze = b.getImageData(0, 0, Ge, Pe),
                        $e.addFrameImageData(Ze),
                        be = Rr,
                        ee((je - be) / je),
                        Rr > 0 && s.requestTimeout(Vn, Be),
                        be || $e.getBase64GIF(function(he) {
                            C({
                                error: !1,
                                errorCode: "",
                                errorMsg: "",
                                image: he,
                                cameraStream: O,
                                videoElement: de,
                                webcamVideoElement: ge,
                                savedRenderingContexts: Se,
                                keepCameraOn: L
                            })
                        })
                    }
                };
                je = je !== i ? je : 10,
                Re = Re !== i ? Re : .1,
                k.width = Ge,
                k.height = Pe,
                b = k.getContext("2d"),
                function Vn() {
                    if (!X.length && de.currentTime === 0) {
                        s.requestTimeout(Vn, 100);
                        return
                    }
                    Qo()
                }()
            },
            getCropDimensions: function() {
                var h = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}
                  , C = h.videoWidth
                  , k = h.videoHeight
                  , b = h.gifWidth
                  , I = h.gifHeight
                  , A = {
                    width: 0,
                    height: 0,
                    scaledWidth: 0,
                    scaledHeight: 0
                };
                return C > k ? (A.width = Math.round(C * (I / k)) - b,
                A.scaledWidth = Math.round(A.width * (k / I))) : (A.height = Math.round(k * (b / C)) - I,
                A.scaledHeight = Math.round(A.height * (C / b))),
                A
            }
        }
          , z = {
            loadedData: !1,
            defaultVideoDimensions: {
                width: 640,
                height: 480
            },
            findVideoSize: function g(h) {
                g.attempts = g.attempts || 0;
                var C = h.cameraStream
                  , k = h.completedCallback
                  , b = h.videoElement;
                b && (b.videoWidth > 0 && b.videoHeight > 0 ? (b.removeEventListener("loadeddata", z.findVideoSize),
                k({
                    videoElement: b,
                    cameraStream: C,
                    videoWidth: b.videoWidth,
                    videoHeight: b.videoHeight
                })) : g.attempts < 10 ? (g.attempts += 1,
                s.requestTimeout(function() {
                    z.findVideoSize(h)
                }, 400)) : k({
                    videoElement: b,
                    cameraStream: C,
                    videoWidth: z.defaultVideoDimensions.width,
                    videoHeight: z.defaultVideoDimensions.height
                }))
            },
            onStreamingTimeout: function(h) {
                s.isFunction(h) && h({
                    error: !0,
                    errorCode: "getUserMedia",
                    errorMsg: "There was an issue with the getUserMedia API - Timed out while trying to start streaming",
                    image: null,
                    cameraStream: {}
                })
            },
            stream: function(h) {
                var C = s.isArray(h.existingVideo) ? h.existingVideo[0] : h.existingVideo
                  , k = h.cameraStream
                  , b = h.completedCallback
                  , I = h.streamedCallback
                  , A = h.videoElement;
                if (s.isFunction(I) && I(),
                C) {
                    if (s.isString(C))
                        A.src = C,
                        A.innerHTML = '<source src="' + C + '" type="video/' + s.getExtension(C) + '" />';
                    else if (C instanceof Blob) {
                        try {
                            A.src = s.URL.createObjectURL(C)
                        } catch {}
                        A.innerHTML = '<source src="' + C + '" type="' + C.type + '" />'
                    }
                } else if (A.mozSrcObject)
                    A.mozSrcObject = k;
                else if (s.URL)
                    try {
                        A.srcObject = k,
                        A.src = s.URL.createObjectURL(k)
                    } catch {
                        A.srcObject = k
                    }
                A.play(),
                s.requestTimeout(function O() {
                    O.count = O.count || 0,
                    z.loadedData === !0 ? (z.findVideoSize({
                        videoElement: A,
                        cameraStream: k,
                        completedCallback: b
                    }),
                    z.loadedData = !1) : (O.count += 1,
                    O.count > 10 ? z.findVideoSize({
                        videoElement: A,
                        cameraStream: k,
                        completedCallback: b
                    }) : O())
                }, 0)
            },
            startStreaming: function(h) {
                var C = s.isFunction(h.error) ? h.error : s.noop
                  , k = s.isFunction(h.streamed) ? h.streamed : s.noop
                  , b = s.isFunction(h.completed) ? h.completed : s.noop
                  , I = h.crossOrigin
                  , A = h.existingVideo
                  , O = h.lastCameraStream
                  , $ = h.options
                  , W = h.webcamVideoElement
                  , U = s.isElement(A) ? A : W || r.createElement("video");
                I && (U.crossOrigin = $.crossOrigin),
                U.autoplay = !0,
                U.loop = !0,
                U.muted = !0,
                U.addEventListener("loadeddata", function(K) {
                    z.loadedData = !0,
                    $.offset && (U.currentTime = $.offset)
                }),
                A ? z.stream({
                    videoElement: U,
                    existingVideo: A,
                    completedCallback: b
                }) : O ? z.stream({
                    videoElement: U,
                    cameraStream: O,
                    streamedCallback: k,
                    completedCallback: b
                }) : s.getUserMedia({
                    video: !0
                }, function(K) {
                    z.stream({
                        videoElement: U,
                        cameraStream: K,
                        streamedCallback: k,
                        completedCallback: b
                    })
                }, C)
            },
            startVideoStreaming: function(h) {
                var C = arguments.length > 1 && arguments[1] !== i ? arguments[1] : {}
                  , k = C.timeout !== i ? C.timeout : 0
                  , b = C.callback
                  , I = C.webcamVideoElement
                  , A = void 0;
                k > 0 && (A = s.requestTimeout(function() {
                    z.onStreamingTimeout(b)
                }, 1e4)),
                z.startStreaming({
                    error: function() {
                        b({
                            error: !0,
                            errorCode: "getUserMedia",
                            errorMsg: "There was an issue with the getUserMedia API - the user probably denied permission",
                            image: null,
                            cameraStream: {}
                        })
                    },
                    streamed: function() {
                        clearTimeout(A)
                    },
                    completed: function() {
                        var $ = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}
                          , W = $.cameraStream
                          , U = $.videoElement
                          , K = $.videoHeight
                          , D = $.videoWidth;
                        h({
                            cameraStream: W,
                            videoElement: U,
                            videoHeight: K,
                            videoWidth: D
                        })
                    },
                    lastCameraStream: C.lastCameraStream,
                    webcamVideoElement: I,
                    crossOrigin: C.crossOrigin,
                    options: C
                })
            },
            stopVideoStreaming: function(h) {
                h = s.isObject(h) ? h : {};
                var C = h
                  , k = C.keepCameraOn
                  , b = C.videoElement
                  , I = C.webcamVideoElement
                  , A = h.cameraStream || {}
                  , O = A.getTracks ? A.getTracks() || [] : []
                  , $ = !!O.length
                  , W = O[0];
                !k && $ && s.isFunction(W.stop) && W.stop(),
                s.isElement(b) && !I && (b.pause(),
                s.isFunction(s.URL.revokeObjectURL) && !s.webWorkerError && b.src && s.URL.revokeObjectURL(b.src),
                s.removeElement(b))
            }
        };
        function ae(g) {
            g = s.isObject(g) ? g : {},
            z.stopVideoStreaming(g)
        }
        function re(g, h) {
            var C = g.options || {}
              , k = C.images
              , b = C.video
              , I = Number(C.gifWidth)
              , A = Number(C.gifHeight);
            Number(C.numFrames);
            var O = g.cameraStream
              , $ = g.videoElement
              , W = g.videoWidth
              , U = g.videoHeight
              , K = V.getCropDimensions({
                videoWidth: W,
                videoHeight: U,
                gifHeight: A,
                gifWidth: I
            })
              , D = h;
            C.crop = K,
            C.videoElement = $,
            C.videoWidth = W,
            C.videoHeight = U,
            C.cameraStream = O,
            s.isElement($) && ($.width = I + K.width,
            $.height = A + K.height,
            C.webcamVideoElement || (s.setCSSAttr($, {
                position: "fixed",
                opacity: "0"
            }),
            r.body.appendChild($)),
            $.play(),
            V.getGIF(C, function(L) {
                (!k || !k.length) && (!b || !b.length) && ae(L),
                D(L)
            }))
        }
        function J() {
            var g = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}
              , h = g.callback
              , C = g.existingVideo
              , k = g.options
              , b = {
                getUserMedia: !0,
                "window.URL": !0
            }
              , I = a.validate(b)
              , A = void 0
              , O = void 0;
            if (I.error)
                return h(I);
            if (s.isElement(C) && C.src) {
                if (O = C.src,
                A = s.getExtension(O),
                !s.isSupported.videoCodecs[A])
                    return h(a.messages.videoCodecs)
            } else
                s.isArray(C) && s.each(C, function($, W) {
                    if (W instanceof Blob ? A = W.type.substr(W.type.lastIndexOf("/") + 1, W.length) : A = W.substr(W.lastIndexOf(".") + 1, W.length),
                    s.isSupported.videoCodecs[A])
                        return C = W,
                        !1
                });
            z.startStreaming({
                completed: function(W) {
                    W.options = k || {},
                    re(W, h)
                },
                existingVideo: C,
                crossOrigin: k.crossOrigin,
                options: k
            })
        }
        function F() {
            var g = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}
              , h = g.callback
              , C = g.lastCameraStream
              , k = g.options
              , b = g.webcamVideoElement;
            if (!w())
                return h(a.validate());
            if (k.savedRenderingContexts.length) {
                V.getGIF(k, function(I) {
                    h(I)
                });
                return
            }
            z.startVideoStreaming(function() {
                var I = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {};
                I.options = k || {},
                re(I, h)
            }, {
                lastCameraStream: C,
                callback: h,
                webcamVideoElement: b,
                crossOrigin: k.crossOrigin
            })
        }
        function H(g, h) {
            if (h = s.isFunction(g) ? g : h,
            g = s.isObject(g) ? g : {},
            !!s.isFunction(h)) {
                var C = s.mergeOptions(d, g) || {}
                  , k = g.cameraStream
                  , b = C.images
                  , I = b ? b.length : 0
                  , A = C.video
                  , O = C.webcamVideoElement;
                C = s.mergeOptions(C, {
                    gifWidth: Math.floor(C.gifWidth),
                    gifHeight: Math.floor(C.gifHeight)
                }),
                I ? M({
                    images: b,
                    imagesLength: I,
                    callback: h,
                    options: C
                }) : A ? J({
                    existingVideo: A,
                    callback: h,
                    options: C
                }) : F({
                    lastCameraStream: k,
                    callback: h,
                    webcamVideoElement: O,
                    options: C
                })
            }
        }
        function Y(g, h) {
            if (h = s.isFunction(g) ? g : h,
            g = s.isObject(g) ? g : {},
            !!s.isFunction(h)) {
                var C = s.mergeOptions(d, g)
                  , k = s.mergeOptions(C, {
                    interval: .1,
                    numFrames: 1,
                    gifWidth: Math.floor(C.gifWidth),
                    gifHeight: Math.floor(C.gifHeight)
                });
                H(k, h)
            }
        }
        var Z = {
            utils: l,
            error: u,
            defaultOptions: f,
            createGIF: H,
            takeSnapShot: Y,
            stopVideoStreaming: ae,
            isSupported: p,
            isWebCamGIFSupported: w,
            isExistingVideoGIFSupported: S,
            isExistingImagesGIFSupported: x,
            VERSION: "0.4.5"
        };
        e.exports = Z
    }
    )(typeof window < "u" ? window : {}, typeof document < "u" ? document : {
        createElement: function() {}
    }, typeof window < "u" ? window.navigator : {})
}
)(ev);
var gE = ev.exports;
const ha = Du(gE)
  , vE = Ym("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-glow hover:scale-105",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            hero: "gradient-primary text-primary-foreground shadow-glow hover:shadow-soft hover:scale-105 hover:brightness-110",
            capture: "bg-primary text-primary-foreground rounded-full shadow-glow hover:scale-110 active:scale-95 transition-transform",
            filter: "bg-card text-foreground border-2 border-border hover:border-primary hover:bg-primary/5 shadow-card",
            filterActive: "bg-primary text-primary-foreground border-2 border-primary shadow-glow"
        },
        size: {
            default: "h-11 px-6 py-2",
            sm: "h-9 rounded-lg px-4",
            lg: "h-12 rounded-xl px-8 text-base",
            xl: "h-14 rounded-2xl px-10 text-lg",
            icon: "h-10 w-10",
            capture: "h-16 w-16 rounded-full",
            captureXl: "h-20 w-20 rounded-full"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , yn = E.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? nw : "button";
    return P.jsx(s, {
        className: Bn(vE({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
yn.displayName = "Button";
const yE = [{
    id: "none",
    name: "Original",
    emoji: "🎨"
}, {
    id: "grayscale",
    name: "B&W",
    emoji: "⬛"
}, {
    id: "sepia",
    name: "Sepia",
    emoji: "🟤"
}, {
    id: "vintage",
    name: "Vintage",
    emoji: "📷"
}, {
    id: "soft",
    name: "Soft",
    emoji: "☁️"
}, {
    id: "noir",
    name: "Noir",
    emoji: "🌙"
}, {
    id: "vivid",
    name: "Vivid",
    emoji: "✨"
}]
  , tv = ({selectedFilter: e, onSelectFilter: t}) => P.jsxs("div", {
    className: "w-full",
    children: [P.jsx("p", {
        className: "text-sm text-muted-foreground mb-3 font-medium text-center",
        children: "✨ Filters"
    }), P.jsx("div", {
        className: "flex flex-wrap justify-center gap-2",
        children: yE.map(n => P.jsxs("button", {
            onClick: () => t(n.id),
            className: Bn("px-3 sm:px-4 py-2 rounded-xl border-2 font-body font-medium transition-all duration-200 text-sm flex items-center gap-1.5", e === n.id ? "border-primary bg-primary text-primary-foreground shadow-soft" : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"),
            children: [P.jsx("span", {
                className: "text-xs sm:text-sm",
                children: n.emoji
            }), P.jsx("span", {
                className: "hidden sm:inline",
                children: n.name
            })]
        }, n.id))
    })]
});
var wE = Object.defineProperty
  , ma = Object.getOwnPropertySymbols
  , nv = Object.prototype.hasOwnProperty
  , rv = Object.prototype.propertyIsEnumerable
  , Kf = (e, t, n) => t in e ? wE(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Lu = (e, t) => {
    for (var n in t || (t = {}))
        nv.call(t, n) && Kf(e, n, t[n]);
    if (ma)
        for (var n of ma(t))
            rv.call(t, n) && Kf(e, n, t[n]);
    return e
}
  , zu = (e, t) => {
    var n = {};
    for (var r in e)
        nv.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && ma)
        for (var r of ma(e))
            t.indexOf(r) < 0 && rv.call(e, r) && (n[r] = e[r]);
    return n
}
;
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var Kr;
(e => {
    const t = class Ce {
        constructor(a, u, c, d) {
            if (this.version = a,
            this.errorCorrectionLevel = u,
            this.modules = [],
            this.isFunction = [],
            a < Ce.MIN_VERSION || a > Ce.MAX_VERSION)
                throw new RangeError("Version value out of range");
            if (d < -1 || d > 7)
                throw new RangeError("Mask value out of range");
            this.size = a * 4 + 17;
            let f = [];
            for (let w = 0; w < this.size; w++)
                f.push(!1);
            for (let w = 0; w < this.size; w++)
                this.modules.push(f.slice()),
                this.isFunction.push(f.slice());
            this.drawFunctionPatterns();
            const p = this.addEccAndInterleave(c);
            if (this.drawCodewords(p),
            d == -1) {
                let w = 1e9;
                for (let x = 0; x < 8; x++) {
                    this.applyMask(x),
                    this.drawFormatBits(x);
                    const S = this.getPenaltyScore();
                    S < w && (d = x,
                    w = S),
                    this.applyMask(x)
                }
            }
            o(0 <= d && d <= 7),
            this.mask = d,
            this.applyMask(d),
            this.drawFormatBits(d),
            this.isFunction = []
        }
        static encodeText(a, u) {
            const c = e.QrSegment.makeSegments(a);
            return Ce.encodeSegments(c, u)
        }
        static encodeBinary(a, u) {
            const c = e.QrSegment.makeBytes(a);
            return Ce.encodeSegments([c], u)
        }
        static encodeSegments(a, u, c=1, d=40, f=-1, p=!0) {
            if (!(Ce.MIN_VERSION <= c && c <= d && d <= Ce.MAX_VERSION) || f < -1 || f > 7)
                throw new RangeError("Invalid value");
            let w, x;
            for (w = c; ; w++) {
                const v = Ce.getNumDataCodewords(w, u) * 8
                  , T = s.getTotalBits(a, w);
                if (T <= v) {
                    x = T;
                    break
                }
                if (w >= d)
                    throw new RangeError("Data too long")
            }
            for (const v of [Ce.Ecc.MEDIUM, Ce.Ecc.QUARTILE, Ce.Ecc.HIGH])
                p && x <= Ce.getNumDataCodewords(w, v) * 8 && (u = v);
            let S = [];
            for (const v of a) {
                n(v.mode.modeBits, 4, S),
                n(v.numChars, v.mode.numCharCountBits(w), S);
                for (const T of v.getData())
                    S.push(T)
            }
            o(S.length == x);
            const y = Ce.getNumDataCodewords(w, u) * 8;
            o(S.length <= y),
            n(0, Math.min(4, y - S.length), S),
            n(0, (8 - S.length % 8) % 8, S),
            o(S.length % 8 == 0);
            for (let v = 236; S.length < y; v ^= 253)
                n(v, 8, S);
            let m = [];
            for (; m.length * 8 < S.length; )
                m.push(0);
            return S.forEach( (v, T) => m[T >>> 3] |= v << 7 - (T & 7)),
            new Ce(w,u,m,f)
        }
        getModule(a, u) {
            return 0 <= a && a < this.size && 0 <= u && u < this.size && this.modules[u][a]
        }
        getModules() {
            return this.modules
        }
        drawFunctionPatterns() {
            for (let c = 0; c < this.size; c++)
                this.setFunctionModule(6, c, c % 2 == 0),
                this.setFunctionModule(c, 6, c % 2 == 0);
            this.drawFinderPattern(3, 3),
            this.drawFinderPattern(this.size - 4, 3),
            this.drawFinderPattern(3, this.size - 4);
            const a = this.getAlignmentPatternPositions()
              , u = a.length;
            for (let c = 0; c < u; c++)
                for (let d = 0; d < u; d++)
                    c == 0 && d == 0 || c == 0 && d == u - 1 || c == u - 1 && d == 0 || this.drawAlignmentPattern(a[c], a[d]);
            this.drawFormatBits(0),
            this.drawVersion()
        }
        drawFormatBits(a) {
            const u = this.errorCorrectionLevel.formatBits << 3 | a;
            let c = u;
            for (let f = 0; f < 10; f++)
                c = c << 1 ^ (c >>> 9) * 1335;
            const d = (u << 10 | c) ^ 21522;
            o(d >>> 15 == 0);
            for (let f = 0; f <= 5; f++)
                this.setFunctionModule(8, f, r(d, f));
            this.setFunctionModule(8, 7, r(d, 6)),
            this.setFunctionModule(8, 8, r(d, 7)),
            this.setFunctionModule(7, 8, r(d, 8));
            for (let f = 9; f < 15; f++)
                this.setFunctionModule(14 - f, 8, r(d, f));
            for (let f = 0; f < 8; f++)
                this.setFunctionModule(this.size - 1 - f, 8, r(d, f));
            for (let f = 8; f < 15; f++)
                this.setFunctionModule(8, this.size - 15 + f, r(d, f));
            this.setFunctionModule(8, this.size - 8, !0)
        }
        drawVersion() {
            if (this.version < 7)
                return;
            let a = this.version;
            for (let c = 0; c < 12; c++)
                a = a << 1 ^ (a >>> 11) * 7973;
            const u = this.version << 12 | a;
            o(u >>> 18 == 0);
            for (let c = 0; c < 18; c++) {
                const d = r(u, c)
                  , f = this.size - 11 + c % 3
                  , p = Math.floor(c / 3);
                this.setFunctionModule(f, p, d),
                this.setFunctionModule(p, f, d)
            }
        }
        drawFinderPattern(a, u) {
            for (let c = -4; c <= 4; c++)
                for (let d = -4; d <= 4; d++) {
                    const f = Math.max(Math.abs(d), Math.abs(c))
                      , p = a + d
                      , w = u + c;
                    0 <= p && p < this.size && 0 <= w && w < this.size && this.setFunctionModule(p, w, f != 2 && f != 4)
                }
        }
        drawAlignmentPattern(a, u) {
            for (let c = -2; c <= 2; c++)
                for (let d = -2; d <= 2; d++)
                    this.setFunctionModule(a + d, u + c, Math.max(Math.abs(d), Math.abs(c)) != 1)
        }
        setFunctionModule(a, u, c) {
            this.modules[u][a] = c,
            this.isFunction[u][a] = !0
        }
        addEccAndInterleave(a) {
            const u = this.version
              , c = this.errorCorrectionLevel;
            if (a.length != Ce.getNumDataCodewords(u, c))
                throw new RangeError("Invalid argument");
            const d = Ce.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][u]
              , f = Ce.ECC_CODEWORDS_PER_BLOCK[c.ordinal][u]
              , p = Math.floor(Ce.getNumRawDataModules(u) / 8)
              , w = d - p % d
              , x = Math.floor(p / d);
            let S = [];
            const y = Ce.reedSolomonComputeDivisor(f);
            for (let v = 0, T = 0; v < d; v++) {
                let R = a.slice(T, T + x - f + (v < w ? 0 : 1));
                T += R.length;
                const N = Ce.reedSolomonComputeRemainder(R, y);
                v < w && R.push(0),
                S.push(R.concat(N))
            }
            let m = [];
            for (let v = 0; v < S[0].length; v++)
                S.forEach( (T, R) => {
                    (v != x - f || R >= w) && m.push(T[v])
                }
                );
            return o(m.length == p),
            m
        }
        drawCodewords(a) {
            if (a.length != Math.floor(Ce.getNumRawDataModules(this.version) / 8))
                throw new RangeError("Invalid argument");
            let u = 0;
            for (let c = this.size - 1; c >= 1; c -= 2) {
                c == 6 && (c = 5);
                for (let d = 0; d < this.size; d++)
                    for (let f = 0; f < 2; f++) {
                        const p = c - f
                          , x = (c + 1 & 2) == 0 ? this.size - 1 - d : d;
                        !this.isFunction[x][p] && u < a.length * 8 && (this.modules[x][p] = r(a[u >>> 3], 7 - (u & 7)),
                        u++)
                    }
            }
            o(u == a.length * 8)
        }
        applyMask(a) {
            if (a < 0 || a > 7)
                throw new RangeError("Mask value out of range");
            for (let u = 0; u < this.size; u++)
                for (let c = 0; c < this.size; c++) {
                    let d;
                    switch (a) {
                    case 0:
                        d = (c + u) % 2 == 0;
                        break;
                    case 1:
                        d = u % 2 == 0;
                        break;
                    case 2:
                        d = c % 3 == 0;
                        break;
                    case 3:
                        d = (c + u) % 3 == 0;
                        break;
                    case 4:
                        d = (Math.floor(c / 3) + Math.floor(u / 2)) % 2 == 0;
                        break;
                    case 5:
                        d = c * u % 2 + c * u % 3 == 0;
                        break;
                    case 6:
                        d = (c * u % 2 + c * u % 3) % 2 == 0;
                        break;
                    case 7:
                        d = ((c + u) % 2 + c * u % 3) % 2 == 0;
                        break;
                    default:
                        throw new Error("Unreachable")
                    }
                    !this.isFunction[u][c] && d && (this.modules[u][c] = !this.modules[u][c])
                }
        }
        getPenaltyScore() {
            let a = 0;
            for (let f = 0; f < this.size; f++) {
                let p = !1
                  , w = 0
                  , x = [0, 0, 0, 0, 0, 0, 0];
                for (let S = 0; S < this.size; S++)
                    this.modules[f][S] == p ? (w++,
                    w == 5 ? a += Ce.PENALTY_N1 : w > 5 && a++) : (this.finderPenaltyAddHistory(w, x),
                    p || (a += this.finderPenaltyCountPatterns(x) * Ce.PENALTY_N3),
                    p = this.modules[f][S],
                    w = 1);
                a += this.finderPenaltyTerminateAndCount(p, w, x) * Ce.PENALTY_N3
            }
            for (let f = 0; f < this.size; f++) {
                let p = !1
                  , w = 0
                  , x = [0, 0, 0, 0, 0, 0, 0];
                for (let S = 0; S < this.size; S++)
                    this.modules[S][f] == p ? (w++,
                    w == 5 ? a += Ce.PENALTY_N1 : w > 5 && a++) : (this.finderPenaltyAddHistory(w, x),
                    p || (a += this.finderPenaltyCountPatterns(x) * Ce.PENALTY_N3),
                    p = this.modules[S][f],
                    w = 1);
                a += this.finderPenaltyTerminateAndCount(p, w, x) * Ce.PENALTY_N3
            }
            for (let f = 0; f < this.size - 1; f++)
                for (let p = 0; p < this.size - 1; p++) {
                    const w = this.modules[f][p];
                    w == this.modules[f][p + 1] && w == this.modules[f + 1][p] && w == this.modules[f + 1][p + 1] && (a += Ce.PENALTY_N2)
                }
            let u = 0;
            for (const f of this.modules)
                u = f.reduce( (p, w) => p + (w ? 1 : 0), u);
            const c = this.size * this.size
              , d = Math.ceil(Math.abs(u * 20 - c * 10) / c) - 1;
            return o(0 <= d && d <= 9),
            a += d * Ce.PENALTY_N4,
            o(0 <= a && a <= 2568888),
            a
        }
        getAlignmentPatternPositions() {
            if (this.version == 1)
                return [];
            {
                const a = Math.floor(this.version / 7) + 2
                  , u = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (a * 2 - 2)) * 2;
                let c = [6];
                for (let d = this.size - 7; c.length < a; d -= u)
                    c.splice(1, 0, d);
                return c
            }
        }
        static getNumRawDataModules(a) {
            if (a < Ce.MIN_VERSION || a > Ce.MAX_VERSION)
                throw new RangeError("Version number out of range");
            let u = (16 * a + 128) * a + 64;
            if (a >= 2) {
                const c = Math.floor(a / 7) + 2;
                u -= (25 * c - 10) * c - 55,
                a >= 7 && (u -= 36)
            }
            return o(208 <= u && u <= 29648),
            u
        }
        static getNumDataCodewords(a, u) {
            return Math.floor(Ce.getNumRawDataModules(a) / 8) - Ce.ECC_CODEWORDS_PER_BLOCK[u.ordinal][a] * Ce.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][a]
        }
        static reedSolomonComputeDivisor(a) {
            if (a < 1 || a > 255)
                throw new RangeError("Degree out of range");
            let u = [];
            for (let d = 0; d < a - 1; d++)
                u.push(0);
            u.push(1);
            let c = 1;
            for (let d = 0; d < a; d++) {
                for (let f = 0; f < u.length; f++)
                    u[f] = Ce.reedSolomonMultiply(u[f], c),
                    f + 1 < u.length && (u[f] ^= u[f + 1]);
                c = Ce.reedSolomonMultiply(c, 2)
            }
            return u
        }
        static reedSolomonComputeRemainder(a, u) {
            let c = u.map(d => 0);
            for (const d of a) {
                const f = d ^ c.shift();
                c.push(0),
                u.forEach( (p, w) => c[w] ^= Ce.reedSolomonMultiply(p, f))
            }
            return c
        }
        static reedSolomonMultiply(a, u) {
            if (a >>> 8 || u >>> 8)
                throw new RangeError("Byte out of range");
            let c = 0;
            for (let d = 7; d >= 0; d--)
                c = c << 1 ^ (c >>> 7) * 285,
                c ^= (u >>> d & 1) * a;
            return o(c >>> 8 == 0),
            c
        }
        finderPenaltyCountPatterns(a) {
            const u = a[1];
            o(u <= this.size * 3);
            const c = u > 0 && a[2] == u && a[3] == u * 3 && a[4] == u && a[5] == u;
            return (c && a[0] >= u * 4 && a[6] >= u ? 1 : 0) + (c && a[6] >= u * 4 && a[0] >= u ? 1 : 0)
        }
        finderPenaltyTerminateAndCount(a, u, c) {
            return a && (this.finderPenaltyAddHistory(u, c),
            u = 0),
            u += this.size,
            this.finderPenaltyAddHistory(u, c),
            this.finderPenaltyCountPatterns(c)
        }
        finderPenaltyAddHistory(a, u) {
            u[0] == 0 && (a += this.size),
            u.pop(),
            u.unshift(a)
        }
    }
    ;
    t.MIN_VERSION = 1,
    t.MAX_VERSION = 40,
    t.PENALTY_N1 = 3,
    t.PENALTY_N2 = 3,
    t.PENALTY_N3 = 40,
    t.PENALTY_N4 = 10,
    t.ECC_CODEWORDS_PER_BLOCK = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]],
    t.NUM_ERROR_CORRECTION_BLOCKS = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]],
    e.QrCode = t;
    function n(l, a, u) {
        if (a < 0 || a > 31 || l >>> a)
            throw new RangeError("Value out of range");
        for (let c = a - 1; c >= 0; c--)
            u.push(l >>> c & 1)
    }
    function r(l, a) {
        return (l >>> a & 1) != 0
    }
    function o(l) {
        if (!l)
            throw new Error("Assertion error")
    }
    const i = class We {
        constructor(a, u, c) {
            if (this.mode = a,
            this.numChars = u,
            this.bitData = c,
            u < 0)
                throw new RangeError("Invalid argument");
            this.bitData = c.slice()
        }
        static makeBytes(a) {
            let u = [];
            for (const c of a)
                n(c, 8, u);
            return new We(We.Mode.BYTE,a.length,u)
        }
        static makeNumeric(a) {
            if (!We.isNumeric(a))
                throw new RangeError("String contains non-numeric characters");
            let u = [];
            for (let c = 0; c < a.length; ) {
                const d = Math.min(a.length - c, 3);
                n(parseInt(a.substring(c, c + d), 10), d * 3 + 1, u),
                c += d
            }
            return new We(We.Mode.NUMERIC,a.length,u)
        }
        static makeAlphanumeric(a) {
            if (!We.isAlphanumeric(a))
                throw new RangeError("String contains unencodable characters in alphanumeric mode");
            let u = [], c;
            for (c = 0; c + 2 <= a.length; c += 2) {
                let d = We.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c)) * 45;
                d += We.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c + 1)),
                n(d, 11, u)
            }
            return c < a.length && n(We.ALPHANUMERIC_CHARSET.indexOf(a.charAt(c)), 6, u),
            new We(We.Mode.ALPHANUMERIC,a.length,u)
        }
        static makeSegments(a) {
            return a == "" ? [] : We.isNumeric(a) ? [We.makeNumeric(a)] : We.isAlphanumeric(a) ? [We.makeAlphanumeric(a)] : [We.makeBytes(We.toUtf8ByteArray(a))]
        }
        static makeEci(a) {
            let u = [];
            if (a < 0)
                throw new RangeError("ECI assignment value out of range");
            if (a < 128)
                n(a, 8, u);
            else if (a < 16384)
                n(2, 2, u),
                n(a, 14, u);
            else if (a < 1e6)
                n(6, 3, u),
                n(a, 21, u);
            else
                throw new RangeError("ECI assignment value out of range");
            return new We(We.Mode.ECI,0,u)
        }
        static isNumeric(a) {
            return We.NUMERIC_REGEX.test(a)
        }
        static isAlphanumeric(a) {
            return We.ALPHANUMERIC_REGEX.test(a)
        }
        getData() {
            return this.bitData.slice()
        }
        static getTotalBits(a, u) {
            let c = 0;
            for (const d of a) {
                const f = d.mode.numCharCountBits(u);
                if (d.numChars >= 1 << f)
                    return 1 / 0;
                c += 4 + f + d.bitData.length
            }
            return c
        }
        static toUtf8ByteArray(a) {
            a = encodeURI(a);
            let u = [];
            for (let c = 0; c < a.length; c++)
                a.charAt(c) != "%" ? u.push(a.charCodeAt(c)) : (u.push(parseInt(a.substring(c + 1, c + 3), 16)),
                c += 2);
            return u
        }
    }
    ;
    i.NUMERIC_REGEX = /^[0-9]*$/,
    i.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/,
    i.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    let s = i;
    e.QrSegment = i
}
)(Kr || (Kr = {}));
(e => {
    (t => {
        const n = class {
            constructor(o, i) {
                this.ordinal = o,
                this.formatBits = i
            }
        }
        ;
        n.LOW = new n(0,1),
        n.MEDIUM = new n(1,0),
        n.QUARTILE = new n(2,3),
        n.HIGH = new n(3,2),
        t.Ecc = n
    }
    )(e.QrCode || (e.QrCode = {}))
}
)(Kr || (Kr = {}));
(e => {
    (t => {
        const n = class {
            constructor(o, i) {
                this.modeBits = o,
                this.numBitsCharCount = i
            }
            numCharCountBits(o) {
                return this.numBitsCharCount[Math.floor((o + 7) / 17)]
            }
        }
        ;
        n.NUMERIC = new n(1,[10, 12, 14]),
        n.ALPHANUMERIC = new n(2,[9, 11, 13]),
        n.BYTE = new n(4,[8, 16, 16]),
        n.KANJI = new n(8,[8, 10, 12]),
        n.ECI = new n(7,[0, 0, 0]),
        t.Mode = n
    }
    )(e.QrSegment || (e.QrSegment = {}))
}
)(Kr || (Kr = {}));
var ho = Kr;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var xE = {
    L: ho.QrCode.Ecc.LOW,
    M: ho.QrCode.Ecc.MEDIUM,
    Q: ho.QrCode.Ecc.QUARTILE,
    H: ho.QrCode.Ecc.HIGH
}
  , ov = 128
  , iv = "L"
  , sv = "#FFFFFF"
  , av = "#000000"
  , lv = !1
  , uv = 1
  , SE = 4
  , CE = 0
  , EE = .1;
function cv(e, t=0) {
    const n = [];
    return e.forEach(function(r, o) {
        let i = null;
        r.forEach(function(s, l) {
            if (!s && i !== null) {
                n.push(`M${i + t} ${o + t}h${l - i}v1H${i + t}z`),
                i = null;
                return
            }
            if (l === r.length - 1) {
                if (!s)
                    return;
                i === null ? n.push(`M${l + t},${o + t} h1v1H${l + t}z`) : n.push(`M${i + t},${o + t} h${l + 1 - i}v1H${i + t}z`);
                return
            }
            s && i === null && (i = l)
        })
    }),
    n.join("")
}
function dv(e, t) {
    return e.slice().map( (n, r) => r < t.y || r >= t.y + t.h ? n : n.map( (o, i) => i < t.x || i >= t.x + t.w ? o : !1))
}
function bE(e, t, n, r) {
    if (r == null)
        return null;
    const o = e.length + n * 2
      , i = Math.floor(t * EE)
      , s = o / t
      , l = (r.width || i) * s
      , a = (r.height || i) * s
      , u = r.x == null ? e.length / 2 - l / 2 : r.x * s
      , c = r.y == null ? e.length / 2 - a / 2 : r.y * s
      , d = r.opacity == null ? 1 : r.opacity;
    let f = null;
    if (r.excavate) {
        let w = Math.floor(u)
          , x = Math.floor(c)
          , S = Math.ceil(l + u - w)
          , y = Math.ceil(a + c - x);
        f = {
            x: w,
            y: x,
            w: S,
            h: y
        }
    }
    const p = r.crossOrigin;
    return {
        x: u,
        y: c,
        h: a,
        w: l,
        excavation: f,
        opacity: d,
        crossOrigin: p
    }
}
function kE(e, t) {
    return t != null ? Math.max(Math.floor(t), 0) : e ? SE : CE
}
function fv({value: e, level: t, minVersion: n, includeMargin: r, marginSize: o, imageSettings: i, size: s, boostLevel: l}) {
    let a = B.useMemo( () => {
        const w = (Array.isArray(e) ? e : [e]).reduce( (x, S) => (x.push(...ho.QrSegment.makeSegments(S)),
        x), []);
        return ho.QrCode.encodeSegments(w, xE[t], n, void 0, void 0, l)
    }
    , [e, t, n, l]);
    const {cells: u, margin: c, numCells: d, calculatedImageSettings: f} = B.useMemo( () => {
        let p = a.getModules();
        const w = kE(r, o)
          , x = p.length + w * 2
          , S = bE(p, s, w, i);
        return {
            cells: p,
            margin: w,
            numCells: x,
            calculatedImageSettings: S
        }
    }
    , [a, s, i, r, o]);
    return {
        qrcode: a,
        margin: c,
        cells: u,
        numCells: d,
        calculatedImageSettings: f
    }
}
var PE = function() {
    try {
        new Path2D().addPath(new Path2D)
    } catch {
        return !1
    }
    return !0
}()
  , TE = B.forwardRef(function(t, n) {
    const r = t
      , {value: o, size: i=ov, level: s=iv, bgColor: l=sv, fgColor: a=av, includeMargin: u=lv, minVersion: c=uv, boostLevel: d, marginSize: f, imageSettings: p} = r
      , x = zu(r, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "boostLevel", "marginSize", "imageSettings"])
      , {style: S} = x
      , y = zu(x, ["style"])
      , m = p == null ? void 0 : p.src
      , v = B.useRef(null)
      , T = B.useRef(null)
      , R = B.useCallback(F => {
        v.current = F,
        typeof n == "function" ? n(F) : n && (n.current = F)
    }
    , [n])
      , [N,M] = B.useState(!1)
      , {margin: _, cells: V, numCells: z, calculatedImageSettings: ae} = fv({
        value: o,
        level: s,
        minVersion: c,
        boostLevel: d,
        includeMargin: u,
        marginSize: f,
        imageSettings: p,
        size: i
    });
    B.useEffect( () => {
        if (v.current != null) {
            const F = v.current
              , H = F.getContext("2d");
            if (!H)
                return;
            let Y = V;
            const Z = T.current
              , g = ae != null && Z !== null && Z.complete && Z.naturalHeight !== 0 && Z.naturalWidth !== 0;
            g && ae.excavation != null && (Y = dv(V, ae.excavation));
            const h = window.devicePixelRatio || 1;
            F.height = F.width = i * h;
            const C = i / z * h;
            H.scale(C, C),
            H.fillStyle = l,
            H.fillRect(0, 0, z, z),
            H.fillStyle = a,
            PE ? H.fill(new Path2D(cv(Y, _))) : V.forEach(function(k, b) {
                k.forEach(function(I, A) {
                    I && H.fillRect(A + _, b + _, 1, 1)
                })
            }),
            ae && (H.globalAlpha = ae.opacity),
            g && H.drawImage(Z, ae.x + _, ae.y + _, ae.w, ae.h)
        }
    }
    ),
    B.useEffect( () => {
        M(!1)
    }
    , [m]);
    const re = Lu({
        height: i,
        width: i
    }, S);
    let J = null;
    return m != null && (J = B.createElement("img", {
        src: m,
        key: m,
        style: {
            display: "none"
        },
        onLoad: () => {
            M(!0)
        }
        ,
        ref: T,
        crossOrigin: ae == null ? void 0 : ae.crossOrigin
    })),
    B.createElement(B.Fragment, null, B.createElement("canvas", Lu({
        style: re,
        height: i,
        width: i,
        ref: R,
        role: "img"
    }, y)), J)
});
TE.displayName = "QRCodeCanvas";
var pv = B.forwardRef(function(t, n) {
    const r = t
      , {value: o, size: i=ov, level: s=iv, bgColor: l=sv, fgColor: a=av, includeMargin: u=lv, minVersion: c=uv, boostLevel: d, title: f, marginSize: p, imageSettings: w} = r
      , x = zu(r, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "minVersion", "boostLevel", "title", "marginSize", "imageSettings"])
      , {margin: S, cells: y, numCells: m, calculatedImageSettings: v} = fv({
        value: o,
        level: s,
        minVersion: c,
        boostLevel: d,
        includeMargin: u,
        marginSize: p,
        imageSettings: w,
        size: i
    });
    let T = y
      , R = null;
    w != null && v != null && (v.excavation != null && (T = dv(y, v.excavation)),
    R = B.createElement("image", {
        href: w.src,
        height: v.h,
        width: v.w,
        x: v.x + S,
        y: v.y + S,
        preserveAspectRatio: "none",
        opacity: v.opacity,
        crossOrigin: v.crossOrigin
    }));
    const N = cv(T, S);
    return B.createElement("svg", Lu({
        height: i,
        width: i,
        viewBox: `0 0 ${m} ${m}`,
        ref: n,
        role: "img"
    }, x), !!f && B.createElement("title", null, f), B.createElement("path", {
        fill: l,
        d: `M0,0 h${m}v${m}H0z`,
        shapeRendering: "crispEdges"
    }), B.createElement("path", {
        fill: a,
        d: N,
        shapeRendering: "crispEdges"
    }), R)
});
pv.displayName = "QRCodeSVG";
const RE = ({token: e, expiresAt: t}) => {
    const [n,r] = E.useState(!1)
      , o = `${window.location.origin}/d/${e}`
      , i = async () => {
        try {
            await navigator.clipboard.writeText(o),
            r(!0),
            setTimeout( () => r(!1), 2e3)
        } catch (l) {
            console.error("Failed to copy:", l);
            const a = document.createElement("textarea");
            a.value = o,
            document.body.appendChild(a),
            a.select(),
            document.execCommand("copy"),
            document.body.removeChild(a),
            r(!0),
            setTimeout( () => r(!1), 2e3)
        }
    }
      , s = l => new Date(l).toLocaleString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
    return P.jsxs("div", {
        className: "glass-panel rounded-2xl p-5 shadow-card",
        children: [P.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [P.jsx(r1, {
                className: "w-5 h-5 text-primary"
            }), P.jsx("h3", {
                className: "font-display font-semibold text-foreground",
                children: "Scan untuk Download"
            })]
        }), P.jsx("div", {
            className: "bg-white p-4 rounded-xl flex items-center justify-center mb-4",
            children: P.jsx(pv, {
                value: o,
                size: 180,
                level: "H",
                includeMargin: !1,
                bgColor: "#ffffff",
                fgColor: "#000000"
            })
        }), P.jsx("p", {
            className: "text-sm text-muted-foreground font-body text-center mb-4",
            children: "📷 Scan QR pakai Google Lens atau kamera HP"
        }), P.jsxs("div", {
            className: "text-xs text-muted-foreground font-body text-center mb-4 bg-muted/50 rounded-lg px-3 py-2",
            children: ["⏰ Berlaku sampai: ", s(t)]
        }), P.jsx(yn, {
            variant: "outline",
            size: "sm",
            onClick: i,
            className: "w-full rounded-full font-body",
            children: n ? P.jsxs(P.Fragment, {
                children: [P.jsx(qw, {
                    className: "w-4 h-4 mr-2"
                }), "Link Disalin!"]
            }) : P.jsxs(P.Fragment, {
                children: [P.jsx(Jw, {
                    className: "w-4 h-4 mr-2"
                }), "Salin Link"]
            })
        }), P.jsxs(yn, {
            variant: "ghost",
            size: "sm",
            onClick: () => window.open(o, "_blank"),
            className: "w-full mt-2 rounded-full font-body text-muted-foreground hover:text-foreground",
            children: [P.jsx(e1, {
                className: "w-4 h-4 mr-2"
            }), "Buka di Browser"]
        })]
    })
}
  , lr = "/assets/photobooth-frame-overlay-DJAz_fqe.png"
  , nt = 1080
  , rt = 1920
  , hv = [{
    x: 69,
    y: 127,
    width: 935.7,
    height: 482.1
}, {
    x: 72,
    y: 680,
    width: 935.7,
    height: 482.1
}, {
    x: 72.1,
    y: 1232.7,
    width: 935.7,
    height: 482.1
}]
  , NE = 3
  , Nl = () => hv
  , IE = e => {
    switch (e) {
    case "grayscale":
        return "grayscale(100%)";
    case "sepia":
        return "sepia(100%)";
    case "vintage":
        return "sepia(40%) contrast(90%) brightness(95%)";
    case "noir":
        return "grayscale(100%) contrast(120%)";
    case "vivid":
        return "saturate(150%)";
    case "soft":
        return "brightness(105%) contrast(95%)";
    default:
        return "none"
    }
}
  , mv = E.forwardRef( ({photos: e, filter: t, getFilterStyle: n}, r) => {
    const i = nt * .25
      , s = rt * .25;
    return P.jsxs("div", {
        ref: r,
        className: "relative inline-block overflow-hidden",
        style: {
            width: i,
            height: s
        },
        children: [hv.map( (l, a) => e[a] ? P.jsx("div", {
            className: "absolute overflow-hidden",
            style: {
                left: l.x * .25,
                top: l.y * .25,
                width: l.width * .25,
                height: l.height * .25
            },
            children: P.jsx("img", {
                src: e[a],
                alt: `Photo ${a + 1}`,
                className: "w-full h-full object-cover",
                style: {
                    filter: IE(t),
                    opacity: t === "soft" ? .95 : 1
                }
            })
        }, a) : null), P.jsx("img", {
            src: lr,
            alt: "Photobooth frame",
            className: "absolute inset-0 w-full h-full pointer-events-none",
            style: {
                objectFit: "contain",
                zIndex: 10
            }
        })]
    })
}
);
mv.displayName = "TemplatePhotoStrip";
const ME = () => {
    const e = E.useRef(null)
      , t = E.useRef(null)
      , n = E.useRef(null)
      , r = E.useRef(null)
      , [o,i] = E.useState(null)
      , [s,l] = E.useState("camera")
      , [a,u] = E.useState([])
      , [c,d] = E.useState("none")
      , [f,p] = E.useState(3)
      , [w,x] = E.useState(!1)
      , [S,y] = E.useState(null)
      , [m,v] = E.useState(0)
      , [T,R] = E.useState(!0)
      , [N,M] = E.useState(!1)
      , [_,V] = E.useState(null)
      , [z,ae] = E.useState(!1)
      , [re,J] = E.useState(null)
      , F = NE
      , H = E.useCallback( () => {
        const U = n.current;
        U && U.getTracks().forEach(K => K.stop()),
        n.current = null,
        i(null),
        e.current && (e.current.srcObject = null)
    }
    , [])
      , Y = U => {
        if (U && typeof U == "object" && "name"in U) {
            const K = String(U.name);
            if (K === "NotAllowedError")
                return "Izin kamera ditolak. Aktifkan permission kamera di browser lalu coba lagi.";
            if (K === "NotFoundError")
                return "Kamera tidak ditemukan di device ini.";
            if (K === "NotReadableError" || K === "AbortError")
                return "Kamera gagal dibuka (biasanya sedang dipakai aplikasi lain). Tutup aplikasi lain/refresh lalu coba lagi.";
            if (K === "SecurityError")
                return "Kamera hanya bisa diakses lewat koneksi aman (HTTPS).";
            const D = "message"in U ? String(U.message ?? "") : "";
            return D ? `${K}: ${D}` : K
        }
        return "Gagal membuka kamera."
    }
      , Z = E.useCallback(async () => {
        var D;
        if (M(!0),
        V(null),
        !((D = navigator.mediaDevices) != null && D.getUserMedia)) {
            V("Browser tidak mendukung akses kamera."),
            M(!1);
            return
        }
        H();
        const U = [{
            video: {
                facingMode: "user",
                width: {
                    ideal: 3264
                },
                height: {
                    ideal: 2448
                }
            },
            audio: !1
        }, {
            video: {
                facingMode: "user",
                width: {
                    ideal: 1920
                },
                height: {
                    ideal: 1440
                }
            },
            audio: !1
        }, {
            video: {
                facingMode: "user"
            },
            audio: !1
        }, {
            video: !0,
            audio: !1
        }];
        let K = null;
        for (const L of U)
            try {
                console.log("[camera] requesting getUserMedia", L);
                const ee = await navigator.mediaDevices.getUserMedia(L)
                  , te = e.current;
                if (!te)
                    throw ee.getTracks().forEach(q => q.stop()),
                    new Error("Video element not ready");
                n.current = ee,
                i(ee),
                te.srcObject = ee;
                const X = new Promise( (q, pe) => {
                    let me = 0;
                    const de = () => {
                        window.clearTimeout(me),
                        te.removeEventListener("canplay", ce),
                        te.removeEventListener("error", ie)
                    }
                      , ce = () => {
                        de(),
                        q()
                    }
                      , ie = () => {
                        de(),
                        pe(new Error("Video element error"))
                    }
                    ;
                    me = window.setTimeout( () => {
                        de(),
                        pe(new Error("Video canplay timeout"))
                    }
                    , 3500),
                    te.addEventListener("canplay", ce, {
                        once: !0
                    }),
                    te.addEventListener("error", ie, {
                        once: !0
                    })
                }
                );
                await te.play().catch(q => {
                    console.log("[camera] video.play() rejected", q)
                }
                ),
                await X,
                console.log("[camera] started OK"),
                M(!1);
                return
            } catch (ee) {
                console.log("[camera] attempt failed", ee),
                K = ee,
                H()
            }
        V(Y(K)),
        M(!1)
    }
    , [H]);
    E.useEffect( () => {
        if (s === "camera")
            return Z(),
            () => H();
        H()
    }
    , [s, Z, H]);
    const g = E.useCallback( (U=800, K=150) => {
        try {
            const D = new (window.AudioContext || window.webkitAudioContext)
              , L = D.createOscillator()
              , ee = D.createGain();
            L.connect(ee),
            ee.connect(D.destination),
            L.frequency.value = U,
            L.type = "sine",
            ee.gain.value = .3,
            L.start(),
            L.stop(D.currentTime + K / 1e3)
        } catch {
            console.log("Audio not supported")
        }
    }
    , [])
      , h = E.useCallback( () => {
        try {
            const U = new (window.AudioContext || window.webkitAudioContext)
              , K = U.sampleRate * .15
              , D = U.createBuffer(1, K, U.sampleRate)
              , L = D.getChannelData(0);
            for (let X = 0; X < K; X++)
                L[X] = (Math.random() * 2 - 1) * Math.exp(-X / (K * .1));
            const ee = U.createBufferSource()
              , te = U.createGain();
            ee.buffer = D,
            ee.connect(te),
            te.connect(U.destination),
            te.gain.value = .4,
            ee.start()
        } catch {
            console.log("Audio not supported")
        }
    }
    , [])
      , C = E.useCallback( (U, K, D, L, ee, te) => {
        const X = U.videoWidth
          , q = U.videoHeight
          , pe = ee / te
          , me = X / q;
        let de, ce, ie, ge;
        me > pe ? (ge = q,
        ie = q * pe,
        de = (X - ie) / 2,
        ce = 0) : (ie = X,
        ge = X / pe,
        de = 0,
        ce = (q - ge) / 2),
        K.drawImage(U, de, ce, ie, ge, D, L, ee, te)
    }
    , [])
      , k = E.useCallback( () => {
        x(!0),
        u([]),
        v(0);
        const U = (K, D) => {
            y(f),
            v(K);
            let L = f;
            g(600, 100);
            const ee = setInterval( () => {
                if (L -= 1,
                y(L),
                L > 0 && g(600 + (f - L) * 100, 100),
                L === 0 && (clearInterval(ee),
                h(),
                e.current && t.current)) {
                    const te = e.current
                      , X = t.current
                      , q = X.getContext("2d");
                    if (q) {
                        X.width = 935.7,
                        X.height = 482.1,
                        q.save(),
                        T && (q.translate(X.width, 0),
                        q.scale(-1, 1)),
                        C(te, q, 0, 0, 935.7, 482.1),
                        q.restore();
                        const de = X.toDataURL("image/png")
                          , ce = [...D, de];
                        u(ce),
                        ce.length < F ? setTimeout( () => U(K + 1, ce), 500) : (x(!1),
                        y(null),
                        l("result"))
                    }
                }
            }
            , 1e3)
        }
        ;
        U(0, [])
    }
    , [f, T, F, g, h, C])
      , b = E.useCallback( () => {
        u([]),
        v(0),
        d("none"),
        J(null),
        l("camera")
    }
    , [])
      , I = E.useCallback(async (U, K, D) => {
        ae(!0);
        try {
            const L = new FormData;
            L.append("image", U, "photo.png"),
            D.length > 0 && L.append("raw_photos", JSON.stringify(D));
            const ee = await fetch("https://jzrcxddhzqftbvaaoajl.supabase.co/functions/v1/photobooth-upload", {
                method: "POST",
                headers: {
                    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6cmN4ZGRoenFmdGJ2YWFvYWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTc0MzAsImV4cCI6MjA4MzkzMzQzMH0.IsfdUOdO2g1M6LIh-HJlEx5gSneY3xgY7OaRbv4zf_I"
                },
                body: L
            });
            if (!ee.ok)
                throw new Error("Image upload failed");
            const te = await ee.json();
            J({
                token: te.token,
                expires_at: te.expires_at
            }),
            ae(!1),
            K.then(async X => {
                try {
                    const q = new FormData;
                    q.append("gif", X, "animation.gif"),
                    q.append("token", te.token),
                    await fetch("https://jzrcxddhzqftbvaaoajl.supabase.co/functions/v1/photobooth-upload", {
                        method: "POST",
                        headers: {
                            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6cmN4ZGRoenFmdGJ2YWFvYWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTc0MzAsImV4cCI6MjA4MzkzMzQzMH0.IsfdUOdO2g1M6LIh-HJlEx5gSneY3xgY7OaRbv4zf_I"
                        },
                        body: q
                    }),
                    console.log("GIF uploaded successfully in background")
                } catch (q) {
                    console.error("Background GIF upload error:", q)
                }
            }
            )
        } catch (L) {
            console.error("Upload error:", L),
            ae(!1)
        }
    }
    , [])
      , A = (U, K, D, L, ee, te) => {
        const X = U.naturalWidth
          , q = U.naturalHeight
          , pe = ee / te
          , me = X / q;
        let de, ce, ie, ge;
        me > pe ? (ge = q,
        ie = q * pe,
        de = (X - ie) / 2,
        ce = 0) : (ie = X,
        ge = X / pe,
        de = 0,
        ce = (q - ge) / 2),
        K.drawImage(U, de, ce, ie, ge, D, L, ee, te)
    }
      , O = E.useCallback(async () => {
        if (a.length === 0)
            return;
        const U = L => new Promise( (ee, te) => {
            const X = new Image;
            X.crossOrigin = "anonymous",
            X.onload = () => ee(X),
            X.onerror = te,
            X.src = L
        }
        )
          , K = L => {
            switch (L) {
            case "grayscale":
                return "grayscale(100%)";
            case "sepia":
                return "sepia(80%)";
            case "vintage":
                return "sepia(30%) contrast(110%) brightness(90%)";
            case "soft":
                return "brightness(105%) contrast(95%) saturate(90%)";
            case "noir":
                return "grayscale(100%) contrast(120%) brightness(90%)";
            case "vivid":
                return "saturate(150%) contrast(110%)";
            default:
                return "none"
            }
        }
          , D = Nl();
        try {
            const L = await Promise.all(a.map(U))
              , ee = await U(lr)
              , te = [];
            for (let X = 0; X < L.length; X++) {
                const q = document.createElement("canvas");
                q.width = nt,
                q.height = rt;
                const pe = q.getContext("2d");
                if (pe) {
                    pe.clearRect(0, 0, nt, rt);
                    for (let me = 0; me < F; me++) {
                        const de = (X + me) % L.length
                          , ce = L[de]
                          , ie = D[me];
                        pe.save(),
                        pe.beginPath(),
                        pe.rect(ie.x, ie.y, ie.width, ie.height),
                        pe.clip(),
                        pe.filter = K(c),
                        A(ce, pe, ie.x, ie.y, ie.width, ie.height),
                        pe.restore()
                    }
                    pe.filter = "none",
                    pe.drawImage(ee, 0, 0, nt, rt),
                    te.push(q.toDataURL("image/png"))
                }
            }
            ha.createGIF({
                images: te,
                gifWidth: nt,
                gifHeight: rt,
                interval: .5,
                numFrames: te.length,
                frameDuration: 1,
                sampleInterval: 10
            }, X => {
                if (!X.error) {
                    const q = document.createElement("a");
                    q.download = `server-by-symust.my.id-${Date.now()}.gif`,
                    q.href = X.image,
                    q.click()
                }
            }
            )
        } catch (L) {
            console.error("Error creating GIF:", L)
        }
    }
    , [a, c, F])
      , $ = E.useCallback(async () => {
        if (a.length === 0)
            return;
        const U = window.devicePixelRatio || 1
          , K = document.createElement("canvas");
        K.width = nt * U,
        K.height = rt * U;
        const D = K.getContext("2d");
        if (!D)
            return;
        D.scale(U, U);
        const L = de => new Promise( (ce, ie) => {
            const ge = new Image;
            ge.onload = () => ce(ge),
            ge.onerror = ie,
            ge.src = de
        }
        )
          , ee = Nl()
          , te = await Promise.all(a.map(L))
          , X = await L(lr);
        D.clearRect(0, 0, nt, rt),
        te.forEach( (de, ce) => {
            const ie = ee[ce];
            ie && (D.save(),
            D.beginPath(),
            D.rect(ie.x, ie.y, ie.width, ie.height),
            D.clip(),
            c === "grayscale" ? D.filter = "grayscale(100%)" : c === "sepia" ? D.filter = "sepia(80%)" : c === "vintage" ? D.filter = "sepia(30%) contrast(110%) brightness(90%)" : c === "soft" ? D.filter = "brightness(105%) contrast(95%) saturate(90%)" : c === "noir" ? D.filter = "grayscale(100%) contrast(120%) brightness(90%)" : c === "vivid" && (D.filter = "saturate(150%) contrast(110%)"),
            A(de, D, ie.x, ie.y, ie.width, ie.height),
            D.restore())
        }
        ),
        D.filter = "none",
        D.drawImage(X, 0, 0, nt, rt);
        const q = document.createElement("canvas");
        q.width = nt,
        q.height = rt;
        const pe = q.getContext("2d");
        pe && pe.drawImage(K, 0, 0, K.width, K.height, 0, 0, nt, rt);
        const me = document.createElement("a");
        me.download = `server-by-symust.my.id-${Date.now()}.png`,
        me.href = q.toDataURL("image/png"),
        me.click()
    }
    , [a, c])
      , W = U => {
        switch (U) {
        case "grayscale":
            return {
                filter: "grayscale(100%)"
            };
        case "sepia":
            return {
                filter: "sepia(80%)"
            };
        case "vintage":
            return {
                filter: "sepia(30%) contrast(110%) brightness(90%)"
            };
        case "soft":
            return {
                filter: "brightness(105%) contrast(95%) saturate(90%)"
            };
        case "noir":
            return {
                filter: "grayscale(100%) contrast(120%) brightness(90%)"
            };
        case "vivid":
            return {
                filter: "saturate(150%) contrast(110%)"
            };
        default:
            return {}
        }
    }
    ;
    return E.useEffect( () => {
        if (s !== "result" || a.length === 0 || re)
            return;
        (async () => {
            try {
                const D = document.createElement("canvas");
                D.width = nt * 1,
                D.height = rt * 1;
                const L = D.getContext("2d");
                if (!L)
                    return;
                const ee = de => new Promise( (ce, ie) => {
                    const ge = new Image;
                    ge.crossOrigin = "anonymous",
                    ge.onload = () => ce(ge),
                    ge.onerror = ie,
                    ge.src = de
                }
                )
                  , te = Nl()
                  , X = await Promise.all(a.map(ee))
                  , q = await ee(lr);
                L.clearRect(0, 0, nt, rt),
                X.forEach( (de, ce) => {
                    const ie = te[ce];
                    ie && (L.save(),
                    L.beginPath(),
                    L.rect(ie.x, ie.y, ie.width, ie.height),
                    L.clip(),
                    A(de, L, ie.x, ie.y, ie.width, ie.height),
                    L.restore())
                }
                ),
                L.drawImage(q, 0, 0, nt, rt);
                const pe = await new Promise(de => D.toBlob(ce => de(ce), "image/png"))
                  , me = new Promise(async de => {
                    const ce = [];
                    for (let Pe = 0; Pe < X.length; Pe++) {
                        const Re = document.createElement("canvas");
                        Re.width = nt,
                        Re.height = rt;
                        const Be = Re.getContext("2d");
                        if (Be) {
                            Be.clearRect(0, 0, nt, rt);
                            for (let Se = 0; Se < F; Se++) {
                                const je = (Pe + Se) % X.length
                                  , be = X[je]
                                  , $e = te[Se];
                                Be.save(),
                                Be.beginPath(),
                                Be.rect($e.x, $e.y, $e.width, $e.height),
                                Be.clip(),
                                A(be, Be, $e.x, $e.y, $e.width, $e.height),
                                Be.restore()
                            }
                            Be.drawImage(q, 0, 0, nt, rt),
                            ce.push(Re.toDataURL("image/png"))
                        }
                    }
                    const ie = await new Promise(Pe => {
                        ha.createGIF({
                            images: ce,
                            gifWidth: nt,
                            gifHeight: rt,
                            interval: .5
                        }, Re => Pe(Re.image))
                    }
                    )
                      , Ge = await (await fetch(ie)).blob();
                    de(Ge)
                }
                );
                await I(pe, me, a)
            } catch (K) {
                console.error("Auto-upload error:", K)
            }
        }
        )()
    }
    , [s, a, re, I, F]),
    s === "result" ? P.jsxs("div", {
        className: "min-h-screen gradient-hero relative overflow-hidden",
        children: [P.jsx("div", {
            className: "decorative-blob decorative-blob-1"
        }), P.jsx("div", {
            className: "decorative-blob decorative-blob-2"
        }), P.jsxs("div", {
            className: "container mx-auto px-4 py-6 sm:py-8 relative z-10",
            children: [P.jsx("header", {
                className: "flex items-center justify-center mb-6 sm:mb-8",
                children: P.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [P.jsx(qm, {
                        className: "w-5 h-5 text-primary"
                    }), P.jsx("h1", {
                        className: "text-xl sm:text-2xl font-display font-bold text-foreground",
                        children: "SYMUST.MY.ID"
                    })]
                })
            }), P.jsx("div", {
                className: "max-w-6xl mx-auto",
                children: P.jsxs("div", {
                    className: "flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start",
                    children: [P.jsxs("div", {
                        className: "flex flex-col items-center gap-4 animate-fade-up",
                        children: [P.jsxs("div", {
                            className: "flex items-center gap-2 bg-card rounded-xl px-4 py-2.5 border border-border shadow-soft",
                            children: [P.jsx("span", {
                                className: "text-sm",
                                children: "📷"
                            }), P.jsxs("span", {
                                className: "text-sm font-semibold font-body",
                                children: [F, " Photos"]
                            })]
                        }), P.jsx("div", {
                            className: "shadow-float rounded-2xl overflow-hidden",
                            children: P.jsx(mv, {
                                ref: r,
                                photos: a,
                                filter: c,
                                getFilterStyle: W
                            })
                        })]
                    }), P.jsxs("div", {
                        className: "w-full lg:flex-1 space-y-5 glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-card animate-fade-up",
                        style: {
                            animationDelay: "100ms"
                        },
                        children: [P.jsx(tv, {
                            selectedFilter: c,
                            onSelectFilter: d
                        }), P.jsx("div", {
                            className: "h-px bg-border/50"
                        }), z && P.jsxs("div", {
                            className: "flex items-center justify-center py-8",
                            children: [P.jsx(li, {
                                className: "w-8 h-8 text-primary animate-spin"
                            }), P.jsx("span", {
                                className: "ml-3 text-muted-foreground font-body",
                                children: "Membuat QR Code..."
                            })]
                        }), re && !z && P.jsx(RE, {
                            token: re.token,
                            expiresAt: re.expires_at
                        }), P.jsx("div", {
                            className: "h-px bg-border/50"
                        }), P.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-3 pt-2",
                            children: [P.jsxs(yn, {
                                size: "lg",
                                onClick: $,
                                className: "flex-1 rounded-full font-display gradient-primary text-white border-0 shadow-glow hover:shadow-float transition-all duration-300 hover:scale-[1.02]",
                                children: [P.jsx(Zw, {
                                    className: "w-5 h-5 mr-2"
                                }), "Download"]
                            }), P.jsxs(yn, {
                                size: "lg",
                                onClick: O,
                                className: "flex-1 rounded-full font-display bg-secondary text-secondary-foreground border-0 shadow-soft hover:shadow-float transition-all duration-300 hover:scale-[1.02]",
                                children: [P.jsx(Xm, {
                                    className: "w-5 h-5 mr-2"
                                }), "Download GIF"]
                            }), P.jsxs(yn, {
                                variant: "outline",
                                size: "lg",
                                onClick: b,
                                className: "flex-1 rounded-full font-display border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300",
                                children: [P.jsx(bl, {
                                    className: "w-5 h-5 mr-2"
                                }), "Retake"]
                            })]
                        })]
                    })]
                })
            })]
        })]
    }) : P.jsxs("div", {
        className: "min-h-screen bg-black relative overflow-hidden flex flex-col",
        children: [P.jsxs("div", {
            className: "flex-1 relative",
            children: [P.jsx("video", {
                ref: e,
                autoPlay: !0,
                playsInline: !0,
                muted: !0,
                className: "absolute inset-0 w-full h-full object-cover",
                style: {
                    transform: T ? "scaleX(-1)" : "none"
                }
            }), P.jsx("canvas", {
                ref: t,
                className: "hidden"
            }), (N || _) && P.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm",
                children: P.jsxs("div", {
                    className: "text-center px-6",
                    children: [N && P.jsx("p", {
                        className: "font-body font-semibold text-foreground",
                        children: "Membuka kamera…"
                    }), _ && P.jsxs(P.Fragment, {
                        children: [P.jsx("p", {
                            className: "font-body font-semibold text-foreground mb-2",
                            children: "Kamera tidak muncul"
                        }), P.jsx("p", {
                            className: "text-sm text-muted-foreground mb-4",
                            children: _
                        }), P.jsx(yn, {
                            onClick: Z,
                            className: "rounded-full",
                            children: "Coba lagi"
                        })]
                    })]
                })
            }), S !== null && P.jsxs("div", {
                className: "absolute inset-0 bg-foreground/60 backdrop-blur-sm flex flex-col items-center justify-center",
                children: [P.jsx("span", {
                    className: "text-7xl sm:text-8xl md:text-9xl font-display font-bold text-white animate-pulse-soft drop-shadow-lg",
                    children: S
                }), P.jsxs("span", {
                    className: "text-lg sm:text-xl text-white/90 font-body mt-4",
                    children: ["Photo ", m + 1, " of ", F]
                })]
            }), P.jsx(yn, {
                variant: "ghost",
                size: "icon",
                onClick: () => R(!T),
                className: "absolute top-4 right-4 bg-card/90 backdrop-blur-sm hover:bg-card shadow-soft",
                children: P.jsx(t1, {
                    className: "w-5 h-5"
                })
            }), P.jsxs("div", {
                className: "absolute top-4 left-4 flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-xl px-4 py-2",
                children: [P.jsx(bl, {
                    className: "w-5 h-5 text-primary"
                }), P.jsx("h1", {
                    className: "text-lg font-display font-bold text-foreground",
                    children: "SYMUST.MY.ID"
                })]
            })]
        }), P.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent",
            children: P.jsxs("div", {
                className: "flex items-center justify-center gap-6",
                children: [P.jsxs("div", {
                    className: "flex items-center gap-2 font-body bg-card/90 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-border shadow-soft",
                    children: [P.jsx("span", {
                        className: "text-sm text-muted-foreground",
                        children: "Timer:"
                    }), P.jsxs("select", {
                        value: f,
                        onChange: U => p(Number(U.target.value)),
                        className: "px-2 py-1 rounded-lg border border-border bg-background text-foreground font-semibold text-sm cursor-pointer",
                        disabled: w,
                        children: [P.jsx("option", {
                            value: 1,
                            children: "1s"
                        }), P.jsx("option", {
                            value: 3,
                            children: "3s"
                        }), P.jsx("option", {
                            value: 5,
                            children: "5s"
                        })]
                    })]
                }), P.jsxs("button", {
                    onClick: k,
                    disabled: w || !o,
                    className: "group px-10 py-4 gradient-primary text-white font-display font-semibold rounded-full shadow-glow hover:shadow-float transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 flex items-center gap-3 text-lg",
                    children: [P.jsx(bl, {
                        className: "w-6 h-6 transition-transform group-hover:scale-110"
                    }), P.jsxs("span", {
                        children: ["Capture ", F, " Photos"]
                    })]
                })]
            })
        })]
    })
}
  , AE = () => P.jsx(ME, {});
var $r = {}
  , gv = {}
  , On = {};
Object.defineProperty(On, "__esModule", {
    value: !0
});
On.loop = On.conditional = On.parse = void 0;
var OE = function e(t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : r;
    if (Array.isArray(n))
        n.forEach(function(s) {
            return e(t, s, r, o)
        });
    else if (typeof n == "function")
        n(t, r, o, e);
    else {
        var i = Object.keys(n)[0];
        Array.isArray(n[i]) ? (o[i] = {},
        e(t, n[i], r, o[i])) : o[i] = n[i](t, r, o, e)
    }
    return r
};
On.parse = OE;
var _E = function(t, n) {
    return function(r, o, i, s) {
        n(r, o, i) && s(r, t, o, i)
    }
};
On.conditional = _E;
var FE = function(t, n) {
    return function(r, o, i, s) {
        for (var l = [], a = r.pos; n(r, o, i); ) {
            var u = {};
            if (s(r, t, o, u),
            r.pos === a)
                break;
            a = r.pos,
            l.push(u)
        }
        return l
    }
};
On.loop = FE;
var Qe = {};
Object.defineProperty(Qe, "__esModule", {
    value: !0
});
Qe.readBits = Qe.readArray = Qe.readUnsigned = Qe.readString = Qe.peekBytes = Qe.readBytes = Qe.peekByte = Qe.readByte = Qe.buildStream = void 0;
var jE = function(t) {
    return {
        data: t,
        pos: 0
    }
};
Qe.buildStream = jE;
var vv = function() {
    return function(t) {
        return t.data[t.pos++]
    }
};
Qe.readByte = vv;
var LE = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return function(n) {
        return n.data[n.pos + t]
    }
};
Qe.peekByte = LE;
var Va = function(t) {
    return function(n) {
        return n.data.subarray(n.pos, n.pos += t)
    }
};
Qe.readBytes = Va;
var zE = function(t) {
    return function(n) {
        return n.data.subarray(n.pos, n.pos + t)
    }
};
Qe.peekBytes = zE;
var DE = function(t) {
    return function(n) {
        return Array.from(Va(t)(n)).map(function(r) {
            return String.fromCharCode(r)
        }).join("")
    }
};
Qe.readString = DE;
var UE = function(t) {
    return function(n) {
        var r = Va(2)(n);
        return t ? (r[1] << 8) + r[0] : (r[0] << 8) + r[1]
    }
};
Qe.readUnsigned = UE;
var BE = function(t, n) {
    return function(r, o, i) {
        for (var s = typeof n == "function" ? n(r, o, i) : n, l = Va(t), a = new Array(s), u = 0; u < s; u++)
            a[u] = l(r);
        return a
    }
};
Qe.readArray = BE;
var $E = function(t, n, r) {
    for (var o = 0, i = 0; i < r; i++)
        o += t[n + i] && Math.pow(2, r - i - 1);
    return o
}
  , WE = function(t) {
    return function(n) {
        for (var r = vv()(n), o = new Array(8), i = 0; i < 8; i++)
            o[7 - i] = !!(r & 1 << i);
        return Object.keys(t).reduce(function(s, l) {
            var a = t[l];
            return a.length ? s[l] = $E(o, a.index, a.length) : s[l] = o[a.index],
            s
        }, {})
    }
};
Qe.readBits = WE;
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = On
      , n = Qe
      , r = {
        blocks: function(f) {
            for (var p = 0, w = [], x = f.data.length, S = 0, y = (0,
            n.readByte)()(f); y !== p && y; y = (0,
            n.readByte)()(f)) {
                if (f.pos + y >= x) {
                    var m = x - f.pos;
                    w.push((0,
                    n.readBytes)(m)(f)),
                    S += m;
                    break
                }
                w.push((0,
                n.readBytes)(y)(f)),
                S += y
            }
            for (var v = new Uint8Array(S), T = 0, R = 0; R < w.length; R++)
                v.set(w[R], T),
                T += w[R].length;
            return v
        }
    }
      , o = (0,
    t.conditional)({
        gce: [{
            codes: (0,
            n.readBytes)(2)
        }, {
            byteSize: (0,
            n.readByte)()
        }, {
            extras: (0,
            n.readBits)({
                future: {
                    index: 0,
                    length: 3
                },
                disposal: {
                    index: 3,
                    length: 3
                },
                userInput: {
                    index: 6
                },
                transparentColorGiven: {
                    index: 7
                }
            })
        }, {
            delay: (0,
            n.readUnsigned)(!0)
        }, {
            transparentColorIndex: (0,
            n.readByte)()
        }, {
            terminator: (0,
            n.readByte)()
        }]
    }, function(d) {
        var f = (0,
        n.peekBytes)(2)(d);
        return f[0] === 33 && f[1] === 249
    })
      , i = (0,
    t.conditional)({
        image: [{
            code: (0,
            n.readByte)()
        }, {
            descriptor: [{
                left: (0,
                n.readUnsigned)(!0)
            }, {
                top: (0,
                n.readUnsigned)(!0)
            }, {
                width: (0,
                n.readUnsigned)(!0)
            }, {
                height: (0,
                n.readUnsigned)(!0)
            }, {
                lct: (0,
                n.readBits)({
                    exists: {
                        index: 0
                    },
                    interlaced: {
                        index: 1
                    },
                    sort: {
                        index: 2
                    },
                    future: {
                        index: 3,
                        length: 2
                    },
                    size: {
                        index: 5,
                        length: 3
                    }
                })
            }]
        }, (0,
        t.conditional)({
            lct: (0,
            n.readArray)(3, function(d, f, p) {
                return Math.pow(2, p.descriptor.lct.size + 1)
            })
        }, function(d, f, p) {
            return p.descriptor.lct.exists
        }), {
            data: [{
                minCodeSize: (0,
                n.readByte)()
            }, r]
        }]
    }, function(d) {
        return (0,
        n.peekByte)()(d) === 44
    })
      , s = (0,
    t.conditional)({
        text: [{
            codes: (0,
            n.readBytes)(2)
        }, {
            blockSize: (0,
            n.readByte)()
        }, {
            preData: function(f, p, w) {
                return (0,
                n.readBytes)(w.text.blockSize)(f)
            }
        }, r]
    }, function(d) {
        var f = (0,
        n.peekBytes)(2)(d);
        return f[0] === 33 && f[1] === 1
    })
      , l = (0,
    t.conditional)({
        application: [{
            codes: (0,
            n.readBytes)(2)
        }, {
            blockSize: (0,
            n.readByte)()
        }, {
            id: function(f, p, w) {
                return (0,
                n.readString)(w.blockSize)(f)
            }
        }, r]
    }, function(d) {
        var f = (0,
        n.peekBytes)(2)(d);
        return f[0] === 33 && f[1] === 255
    })
      , a = (0,
    t.conditional)({
        comment: [{
            codes: (0,
            n.readBytes)(2)
        }, r]
    }, function(d) {
        var f = (0,
        n.peekBytes)(2)(d);
        return f[0] === 33 && f[1] === 254
    })
      , u = [{
        header: [{
            signature: (0,
            n.readString)(3)
        }, {
            version: (0,
            n.readString)(3)
        }]
    }, {
        lsd: [{
            width: (0,
            n.readUnsigned)(!0)
        }, {
            height: (0,
            n.readUnsigned)(!0)
        }, {
            gct: (0,
            n.readBits)({
                exists: {
                    index: 0
                },
                resolution: {
                    index: 1,
                    length: 3
                },
                sort: {
                    index: 4
                },
                size: {
                    index: 5,
                    length: 3
                }
            })
        }, {
            backgroundColorIndex: (0,
            n.readByte)()
        }, {
            pixelAspectRatio: (0,
            n.readByte)()
        }]
    }, (0,
    t.conditional)({
        gct: (0,
        n.readArray)(3, function(d, f) {
            return Math.pow(2, f.lsd.gct.size + 1)
        })
    }, function(d, f) {
        return f.lsd.gct.exists
    }), {
        frames: (0,
        t.loop)([o, l, a, i, s], function(d) {
            var f = (0,
            n.peekByte)()(d);
            return f === 33 || f === 44
        })
    }]
      , c = u;
    e.default = c
}
)(gv);
var Ha = {};
Object.defineProperty(Ha, "__esModule", {
    value: !0
});
Ha.deinterlace = void 0;
var VE = function(t, n) {
    for (var r = new Array(t.length), o = t.length / n, i = function(f, p) {
        var w = t.slice(p * n, (p + 1) * n);
        r.splice.apply(r, [f * n, n].concat(w))
    }, s = [0, 4, 2, 1], l = [8, 8, 4, 2], a = 0, u = 0; u < 4; u++)
        for (var c = s[u]; c < o; c += l[u])
            i(c, a),
            a++;
    return r
};
Ha.deinterlace = VE;
var Ga = {};
Object.defineProperty(Ga, "__esModule", {
    value: !0
});
Ga.lzw = void 0;
var HE = function(t, n, r) {
    var o = 4096, i = -1, s = r, l, a, u, c, d, f, p, N, w, x, R, S, M, _, z, V, y = new Array(r), m = new Array(o), v = new Array(o), T = new Array(o + 1);
    for (S = t,
    a = 1 << S,
    d = a + 1,
    l = a + 2,
    p = i,
    c = S + 1,
    u = (1 << c) - 1,
    w = 0; w < a; w++)
        m[w] = 0,
        v[w] = w;
    var R, N, M, _, V, z;
    for (R = N = M = _ = V = z = 0,
    x = 0; x < s; ) {
        if (_ === 0) {
            if (N < c) {
                R += n[z] << N,
                N += 8,
                z++;
                continue
            }
            if (w = R & u,
            R >>= c,
            N -= c,
            w > l || w == d)
                break;
            if (w == a) {
                c = S + 1,
                u = (1 << c) - 1,
                l = a + 2,
                p = i;
                continue
            }
            if (p == i) {
                T[_++] = v[w],
                p = w,
                M = w;
                continue
            }
            for (f = w,
            w == l && (T[_++] = M,
            w = p); w > a; )
                T[_++] = v[w],
                w = m[w];
            M = v[w] & 255,
            T[_++] = M,
            l < o && (m[l] = p,
            v[l] = M,
            l++,
            !(l & u) && l < o && (c++,
            u += l)),
            p = f
        }
        _--,
        y[V++] = T[_],
        x++
    }
    for (x = V; x < s; x++)
        y[x] = 0;
    return y
};
Ga.lzw = HE;
Object.defineProperty($r, "__esModule", {
    value: !0
});
var yv = $r.decompressFrames = $r.decompressFrame = wv = $r.parseGIF = void 0
  , GE = qE(gv)
  , QE = On
  , YE = Qe
  , KE = Ha
  , XE = Ga;
function qE(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var JE = function(t) {
    var n = new Uint8Array(t);
    return (0,
    QE.parse)((0,
    YE.buildStream)(n), GE.default)
}
  , wv = $r.parseGIF = JE
  , ZE = function(t) {
    for (var n = t.pixels.length, r = new Uint8ClampedArray(n * 4), o = 0; o < n; o++) {
        var i = o * 4
          , s = t.pixels[o]
          , l = t.colorTable[s] || [0, 0, 0];
        r[i] = l[0],
        r[i + 1] = l[1],
        r[i + 2] = l[2],
        r[i + 3] = s !== t.transparentIndex ? 255 : 0
    }
    return r
}
  , xv = function(t, n, r) {
    if (!t.image) {
        console.warn("gif frame does not have associated image.");
        return
    }
    var o = t.image
      , i = o.descriptor.width * o.descriptor.height
      , s = (0,
    XE.lzw)(o.data.minCodeSize, o.data.blocks, i);
    o.descriptor.lct.interlaced && (s = (0,
    KE.deinterlace)(s, o.descriptor.width));
    var l = {
        pixels: s,
        dims: {
            top: t.image.descriptor.top,
            left: t.image.descriptor.left,
            width: t.image.descriptor.width,
            height: t.image.descriptor.height
        }
    };
    return o.descriptor.lct && o.descriptor.lct.exists ? l.colorTable = o.lct : l.colorTable = n,
    t.gce && (l.delay = (t.gce.delay || 10) * 10,
    l.disposalType = t.gce.extras.disposal,
    t.gce.extras.transparentColorGiven && (l.transparentIndex = t.gce.transparentColorIndex)),
    r && (l.patch = ZE(l)),
    l
};
$r.decompressFrame = xv;
var e2 = function(t, n) {
    return t.frames.filter(function(r) {
        return r.image
    }).map(function(r) {
        return xv(r, t.gct, n)
    })
};
yv = $r.decompressFrames = e2;
class t2 {
    constructor() {
        Qa(this, "cache", new Map);
        Qa(this, "maxSize", 50)
    }
    async loadImage(t) {
        const n = this.cache.get(t);
        if (n)
            return n;
        const r = await this.fetchImage(t);
        if (this.cache.size >= this.maxSize) {
            const o = this.cache.keys().next().value;
            o && this.cache.delete(o)
        }
        return this.cache.set(t, r),
        r
    }
    fetchImage(t) {
        return new Promise( (n, r) => {
            const o = new Image;
            o.crossOrigin = "anonymous",
            o.onload = () => n(o),
            o.onerror = () => r(new Error(`Failed to load image: ${t}`)),
            o.src = t
        }
        )
    }
    async preloadImages(t) {
        return Promise.all(t.map(n => this.loadImage(n)))
    }
    clear() {
        this.cache.clear()
    }
    get size() {
        return this.cache.size
    }
}
const Xf = new t2;
function n2(e, t=300) {
    const [n,r] = E.useState(e);
    return E.useEffect( () => {
        const o = setTimeout( () => {
            r(e)
        }
        , t);
        return () => {
            clearTimeout(o)
        }
    }
    , [e, t]),
    n
}
const eo = [{
    x: 69,
    y: 127,
    width: 935.7,
    height: 482.1
}, {
    x: 72,
    y: 680,
    width: 935.7,
    height: 482.1
}, {
    x: 72.1,
    y: 1232.7,
    width: 935.7,
    height: 482.1
}]
  , dn = 1080
  , fn = 1920
  , r2 = () => {
    const {token: e} = JC()
      , [t,n] = E.useState("loading")
      , [r,o] = E.useState(null)
      , [i,s] = E.useState(!1)
      , [l,a] = E.useState(!1)
      , [u,c] = E.useState("")
      , [d,f] = E.useState("none")
      , [p,w] = E.useState(null)
      , [x,S] = E.useState(!1)
      , y = J => {
        switch (J) {
        case "grayscale":
            return {
                filter: "grayscale(100%)"
            };
        case "sepia":
            return {
                filter: "sepia(80%)"
            };
        case "vintage":
            return {
                filter: "sepia(40%) contrast(90%) brightness(90%)"
            };
        case "soft":
            return {
                filter: "brightness(105%) contrast(95%) saturate(90%)"
            };
        case "noir":
            return {
                filter: "grayscale(100%) contrast(120%) brightness(90%)"
            };
        case "vivid":
            return {
                filter: "saturate(140%) contrast(110%)"
            };
        default:
            return {}
        }
    }
      , m = J => {
        switch (J) {
        case "grayscale":
            return "grayscale(100%)";
        case "sepia":
            return "sepia(80%)";
        case "vintage":
            return "sepia(40%) contrast(90%) brightness(90%)";
        case "soft":
            return "brightness(105%) contrast(95%) saturate(90%)";
        case "noir":
            return "grayscale(100%) contrast(120%) brightness(90%)";
        case "vivid":
            return "saturate(140%) contrast(110%)";
        default:
            return "none"
        }
    }
      , v = E.useCallback(J => Xf.loadImage(J), [])
      , T = n2(d, 150)
      , R = (J, F, H, Y, Z, g) => {
        const h = J.naturalWidth
          , C = J.naturalHeight
          , k = Z / g
          , b = h / C;
        let I, A, O, $;
        b > k ? ($ = C,
        O = C * k,
        I = (h - O) / 2,
        A = 0) : (O = h,
        $ = h / k,
        I = 0,
        A = (C - $) / 2),
        F.drawImage(J, I, A, O, $, H, Y, Z, g)
    }
      , N = async (J, F) => {
        const H = document.createElement("canvas");
        H.width = dn,
        H.height = fn;
        const Y = H.getContext("2d");
        if (!Y)
            throw new Error("Could not get canvas context");
        const Z = await Promise.all(J.map(v))
          , g = await v(lr);
        Y.clearRect(0, 0, dn, fn);
        for (let h = 0; h < Z.length && h < eo.length; h++) {
            const C = Z[h]
              , k = eo[h];
            Y.save(),
            Y.beginPath(),
            Y.rect(k.x, k.y, k.width, k.height),
            Y.clip(),
            Y.filter = m(F),
            R(C, Y, k.x, k.y, k.width, k.height),
            Y.restore()
        }
        return Y.filter = "none",
        Y.drawImage(g, 0, 0, dn, fn),
        new Promise( (h, C) => {
            H.toBlob(k => {
                k ? h(k) : C(new Error("Could not create blob"))
            }
            , "image/png")
        }
        )
    }
      , M = E.useCallback(async (J, F) => {
        const H = document.createElement("canvas");
        H.width = dn,
        H.height = fn;
        const Y = H.getContext("2d");
        if (!Y)
            throw new Error("Could not get canvas context");
        const Z = await Promise.all(J.map(v))
          , g = await v(lr);
        Y.clearRect(0, 0, dn, fn);
        for (let h = 0; h < Z.length && h < eo.length; h++) {
            const C = Z[h]
              , k = eo[h];
            Y.save(),
            Y.beginPath(),
            Y.rect(k.x, k.y, k.width, k.height),
            Y.clip(),
            Y.filter = m(F),
            R(C, Y, k.x, k.y, k.width, k.height),
            Y.restore()
        }
        return Y.filter = "none",
        Y.drawImage(g, 0, 0, dn, fn),
        H.toDataURL("image/png")
    }
    , [])
      , _ = async (J, F) => {
        const H = await Promise.all(J.map(v))
          , Y = await v(lr)
          , Z = m(F)
          , g = [];
        for (let h = 0; h < H.length; h++) {
            const C = document.createElement("canvas");
            C.width = dn,
            C.height = fn;
            const k = C.getContext("2d");
            if (k) {
                k.clearRect(0, 0, dn, fn);
                for (let b = 0; b < eo.length; b++) {
                    const I = (h + b) % H.length
                      , A = H[I]
                      , O = eo[b];
                    k.save(),
                    k.beginPath(),
                    k.rect(O.x, O.y, O.width, O.height),
                    k.clip(),
                    k.filter = Z,
                    R(A, k, O.x, O.y, O.width, O.height),
                    k.restore()
                }
                k.filter = "none",
                k.drawImage(Y, 0, 0, dn, fn),
                g.push(C.toDataURL("image/png"))
            }
        }
        return new Promise( (h, C) => {
            ha.createGIF({
                images: g,
                gifWidth: dn,
                gifHeight: fn,
                interval: .5,
                numFrames: g.length,
                frameDuration: 1,
                sampleInterval: 10
            }, k => {
                if (k.error) {
                    C(new Error(k.errorMsg || "Failed to create GIF"));
                    return
                }
                const b = k.image.split(",")[1]
                  , I = atob(b)
                  , A = new Array(I.length);
                for (let $ = 0; $ < I.length; $++)
                    A[$] = I.charCodeAt($);
                const O = new Uint8Array(A);
                h(new Blob([O],{
                    type: "image/gif"
                }))
            }
            )
        }
        )
    }
      , V = async (J, F) => new Promise( (H, Y) => {
        const Z = new window.Image;
        Z.crossOrigin = "anonymous",
        Z.onload = () => {
            const g = document.createElement("canvas");
            g.width = Z.width,
            g.height = Z.height;
            const h = g.getContext("2d");
            if (!h) {
                Y(new Error("Could not get canvas context"));
                return
            }
            const C = y(F);
            C.filter && (h.filter = C.filter),
            h.drawImage(Z, 0, 0),
            g.toBlob(k => {
                k ? H(k) : Y(new Error("Could not create blob"))
            }
            , "image/png")
        }
        ,
        Z.onerror = () => Y(new Error("Failed to load image")),
        Z.src = J
    }
    )
      , z = async (J, F) => {
        const H = await fetch(J);
        if (!H.ok)
            throw new Error("Failed to fetch GIF");
        const Y = await H.arrayBuffer()
          , Z = wv(Y)
          , g = yv(Z, !0);
        if (g.length === 0)
            throw new Error("No frames found in GIF");
        const {width: h, height: C} = g[0].dims
          , k = document.createElement("canvas");
        k.width = h,
        k.height = C;
        const b = k.getContext("2d");
        if (!b)
            throw new Error("Could not get canvas context");
        const I = document.createElement("canvas");
        I.width = h,
        I.height = C;
        const A = I.getContext("2d");
        if (!A)
            throw new Error("Could not get temp canvas context");
        const O = []
          , $ = m(F);
        for (const U of g) {
            const K = new ImageData(new Uint8ClampedArray(U.patch),U.dims.width,U.dims.height);
            A.putImageData(K, 0, 0),
            b.clearRect(0, 0, h, C),
            b.filter = $,
            b.drawImage(I, U.dims.left, U.dims.top),
            O.push(k.toDataURL("image/png"))
        }
        const W = g.reduce( (U, K) => U + (K.delay || 100), 0) / g.length / 1e3;
        return new Promise( (U, K) => {
            ha.createGIF({
                images: O,
                gifWidth: h,
                gifHeight: C,
                interval: W,
                numFrames: O.length,
                frameDuration: 1,
                sampleInterval: 10
            }, D => {
                if (D.error) {
                    K(new Error(D.errorMsg || "Failed to create filtered GIF"));
                    return
                }
                const L = D.image.split(",")[1]
                  , ee = atob(L)
                  , te = new Array(ee.length);
                for (let q = 0; q < ee.length; q++)
                    te[q] = ee.charCodeAt(q);
                const X = new Uint8Array(te);
                U(new Blob([X],{
                    type: "image/gif"
                }))
            }
            )
        }
        )
    }
    ;
    E.useEffect( () => {
        (async () => {
            if (!e) {
                n("not_found");
                return
            }
            try {
                const F = await fetch(`https://jzrcxddhzqftbvaaoajl.supabase.co/functions/v1/photobooth-info?token=${encodeURIComponent(e)}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6cmN4ZGRoenFmdGJ2YWFvYWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTc0MzAsImV4cCI6MjA4MzkzMzQzMH0.IsfdUOdO2g1M6LIh-HJlEx5gSneY3xgY7OaRbv4zf_I"
                    }
                })
                  , H = await F.json();
                if (F.status === 404) {
                    n("not_found");
                    return
                }
                if (F.status === 410) {
                    n("expired");
                    return
                }
                if (!F.ok)
                    throw new Error(H.error || "Failed to fetch asset info");
                o(H),
                n("valid")
            } catch (F) {
                console.error("Error fetching asset info:", F),
                n("error"),
                c(F instanceof Error ? F.message : "Gagal memuat informasi")
            }
        }
        )()
    }
    , [e]),
    E.useEffect( () => {
        if (r != null && r.raw_photo_urls && r.raw_photo_urls.length > 0) {
            const J = [...r.raw_photo_urls, lr];
            Xf.preloadImages(J).catch(console.error)
        }
    }
    , [r == null ? void 0 : r.raw_photo_urls]),
    E.useEffect( () => {
        (async () => {
            if (!r)
                return;
            const F = r.raw_photo_urls && r.raw_photo_urls.length > 0;
            if (T === "none")
                w(r.image_preview_url);
            else if (F) {
                S(!0);
                try {
                    const H = await M(r.raw_photo_urls, T);
                    w(H)
                } catch (H) {
                    console.error("Error generating preview:", H),
                    w(r.image_preview_url)
                } finally {
                    S(!1)
                }
            } else
                w(r.image_preview_url)
        }
        )()
    }
    , [r, T, M]);
    const ae = E.useCallback(async J => {
        if (!e || !r)
            return;
        const F = J === "image" ? s : a;
        F(!0);
        try {
            let H;
            const Y = r.raw_photo_urls && r.raw_photo_urls.length > 0;
            if (d !== "none" && Y)
                J === "image" ? H = await N(r.raw_photo_urls, d) : H = await _(r.raw_photo_urls, d);
            else if (d !== "none") {
                const h = await fetch(`https://jzrcxddhzqftbvaaoajl.supabase.co/functions/v1/photobooth-download?token=${encodeURIComponent(e)}&type=${J}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6cmN4ZGRoenFmdGJ2YWFvYWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTc0MzAsImV4cCI6MjA4MzkzMzQzMH0.IsfdUOdO2g1M6LIh-HJlEx5gSneY3xgY7OaRbv4zf_I"
                    }
                });
                if (h.status === 410) {
                    n("expired");
                    return
                }
                if (h.status === 202 && (await h.json()).processing) {
                    alert("GIF masih dalam proses pembuatan. Silakan tunggu beberapa detik dan coba lagi.");
                    return
                }
                if (!h.ok) {
                    const k = await h.json();
                    throw new Error(k.error || "Download failed")
                }
                const C = await h.json();
                J === "image" ? H = await V(C.url, d) : H = await z(C.url, d)
            } else {
                const h = await fetch(`https://jzrcxddhzqftbvaaoajl.supabase.co/functions/v1/photobooth-download?token=${encodeURIComponent(e)}&type=${J}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6cmN4ZGRoenFmdGJ2YWFvYWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNTc0MzAsImV4cCI6MjA4MzkzMzQzMH0.IsfdUOdO2g1M6LIh-HJlEx5gSneY3xgY7OaRbv4zf_I"
                    }
                });
                if (h.status === 410) {
                    n("expired");
                    return
                }
                if (h.status === 202 && (await h.json()).processing) {
                    alert("GIF masih dalam proses pembuatan. Silakan tunggu beberapa detik dan coba lagi.");
                    return
                }
                if (!h.ok) {
                    const b = await h.json();
                    throw new Error(b.error || "Download failed")
                }
                const C = await h.json()
                  , k = await fetch(C.url);
                if (!k.ok)
                    throw new Error("Failed to fetch file");
                H = await k.blob()
            }
            const Z = URL.createObjectURL(H)
              , g = document.createElement("a");
            g.href = Z,
            g.download = J === "image" ? `SYMUST-photobooth-${e.slice(0, 8)}.png` : `SYMUST-photobooth-${e.slice(0, 8)}.gif`,
            g.style.display = "none",
            document.body.appendChild(g),
            g.click(),
            document.body.removeChild(g),
            URL.revokeObjectURL(Z)
        } catch (H) {
            console.error(`Error downloading ${J}:`, H),
            alert(`Gagal mengunduh ${J === "image" ? "foto" : "GIF"}. Silakan coba lagi.`)
        } finally {
            F(!1)
        }
    }
    , [e, r, d])
      , re = J => new Date(J).toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
    return t === "loading" ? P.jsx("div", {
        className: "min-h-screen gradient-hero flex items-center justify-center",
        children: P.jsxs("div", {
            className: "text-center",
            children: [P.jsx(li, {
                className: "w-12 h-12 text-primary animate-spin mx-auto mb-4"
            }), P.jsx("p", {
                className: "text-muted-foreground font-body",
                children: "Memuat..."
            })]
        })
    }) : t === "not_found" ? P.jsx("div", {
        className: "min-h-screen gradient-hero flex items-center justify-center p-4",
        children: P.jsxs("div", {
            className: "glass-panel rounded-2xl p-8 max-w-md text-center shadow-card",
            children: [P.jsx(vf, {
                className: "w-16 h-16 text-destructive mx-auto mb-4"
            }), P.jsx("h1", {
                className: "text-2xl font-display font-bold text-foreground mb-2",
                children: "Link Tidak Ditemukan"
            }), P.jsx("p", {
                className: "text-muted-foreground font-body",
                children: "Link download yang Anda cari tidak ada atau sudah dihapus."
            })]
        })
    }) : t === "expired" ? P.jsx("div", {
        className: "min-h-screen gradient-hero flex items-center justify-center p-4",
        children: P.jsxs("div", {
            className: "glass-panel rounded-2xl p-8 max-w-md text-center shadow-card",
            children: [P.jsx(yf, {
                className: "w-16 h-16 text-amber-500 mx-auto mb-4"
            }), P.jsx("h1", {
                className: "text-2xl font-display font-bold text-foreground mb-2",
                children: "Link Sudah Kedaluwarsa"
            }), P.jsx("p", {
                className: "text-muted-foreground font-body",
                children: "Link download ini sudah tidak berlaku. File hanya tersedia selama 24 jam setelah dibuat."
            })]
        })
    }) : t === "error" ? P.jsx("div", {
        className: "min-h-screen gradient-hero flex items-center justify-center p-4",
        children: P.jsxs("div", {
            className: "glass-panel rounded-2xl p-8 max-w-md text-center shadow-card",
            children: [P.jsx(vf, {
                className: "w-16 h-16 text-destructive mx-auto mb-4"
            }), P.jsx("h1", {
                className: "text-2xl font-display font-bold text-foreground mb-2",
                children: "Terjadi Kesalahan"
            }), P.jsx("p", {
                className: "text-muted-foreground font-body",
                children: u
            })]
        })
    }) : P.jsxs("div", {
        className: "min-h-screen gradient-hero relative overflow-hidden",
        children: [P.jsx("div", {
            className: "decorative-blob decorative-blob-1"
        }), P.jsx("div", {
            className: "decorative-blob decorative-blob-2"
        }), P.jsxs("div", {
            className: "container mx-auto px-4 py-8 relative z-10",
            children: [P.jsx("header", {
                className: "flex items-center justify-center mb-8",
                children: P.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [P.jsx(qm, {
                        className: "w-5 h-5 text-primary"
                    }), P.jsx("h1", {
                        className: "text-xl sm:text-2xl font-display font-bold text-foreground",
                        children: "SYMUST.MY.ID"
                    })]
                })
            }), P.jsx("div", {
                className: "max-w-lg mx-auto",
                children: P.jsxs("div", {
                    className: "glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card animate-fade-up",
                    children: [P.jsxs("div", {
                        className: "text-center mb-6",
                        children: [P.jsx("h2", {
                            className: "text-2xl sm:text-3xl font-display font-bold text-foreground mb-2",
                            children: "Download Hasil Photobooth"
                        }), P.jsxs("p", {
                            className: "text-muted-foreground font-body flex items-center justify-center gap-2",
                            children: [P.jsx(yf, {
                                className: "w-4 h-4"
                            }), "Berlaku sampai: ", r && re(r.expires_at)]
                        })]
                    }), p && P.jsxs("div", {
                        className: "mb-6 rounded-xl overflow-hidden shadow-soft relative",
                        children: [P.jsx("img", {
                            src: p,
                            alt: "Photobooth preview",
                            className: `w-full h-auto transition-opacity duration-200 ${x ? "opacity-50" : "opacity-100"}`,
                            loading: "lazy"
                        }), x && P.jsx("div", {
                            className: "absolute inset-0 flex items-center justify-center",
                            children: P.jsx(li, {
                                className: "w-8 h-8 text-primary animate-spin"
                            })
                        })]
                    }), P.jsx("div", {
                        className: "mb-6",
                        children: P.jsx(tv, {
                            selectedFilter: d,
                            onSelectFilter: f
                        })
                    }), P.jsxs("div", {
                        className: "space-y-3",
                        children: [P.jsxs(yn, {
                            size: "lg",
                            onClick: () => ae("image"),
                            disabled: i,
                            className: "w-full rounded-full font-display gradient-primary text-white border-0 shadow-glow hover:shadow-float transition-all duration-300 hover:scale-[1.02]",
                            children: [i ? P.jsx(li, {
                                className: "w-5 h-5 mr-2 animate-spin"
                            }) : P.jsx(n1, {
                                className: "w-5 h-5 mr-2"
                            }), "Download Foto (PNG)"]
                        }), P.jsxs(yn, {
                            size: "lg",
                            onClick: () => ae("gif"),
                            disabled: l,
                            className: "w-full rounded-full font-display bg-secondary text-secondary-foreground border-0 shadow-soft hover:shadow-float transition-all duration-300 hover:scale-[1.02]",
                            children: [l ? P.jsx(li, {
                                className: "w-5 h-5 mr-2 animate-spin"
                            }) : P.jsx(Xm, {
                                className: "w-5 h-5 mr-2"
                            }), "Download Animasi (GIF)"]
                        })]
                    }), P.jsx("div", {
                        className: "mt-6 pt-6 border-t border-border",
                        children: P.jsx("p", {
                            className: "text-sm text-center text-muted-foreground font-body",
                            children: "📱 Simpan hasil photobooth ke galeri HP Anda"
                        })
                    })]
                })
            })]
        })]
    })
}
  , o2 = () => {
    const e = Zg();
    return E.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    P.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: P.jsxs("div", {
            className: "text-center",
            children: [P.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), P.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), P.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , i2 = new TC
  , s2 = () => P.jsx(NC, {
    client: i2,
    children: P.jsxs(rC, {
        children: [P.jsx(U1, {}), P.jsx(yx, {}), P.jsx(mE, {
            children: P.jsxs(fE, {
                children: [P.jsx(Fs, {
                    path: "/",
                    element: P.jsx(AE, {})
                }), P.jsx(Fs, {
                    path: "/d/:token",
                    element: P.jsx(r2, {})
                }), P.jsx(Fs, {
                    path: "*",
                    element: P.jsx(o2, {})
                })]
            })
        })]
    })
});
wm(document.getElementById("root")).render(P.jsx(s2, {}));
