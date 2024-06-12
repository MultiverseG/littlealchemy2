(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-auth"], {
    b7aa: function(t, e, n) {
        "use strict";
        (function(t) {
            var e = n("c23d")
              , i = n.n(e);
            (function() {
                var e, n = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                    t != Array.prototype && t != Object.prototype && (t[e] = n.value)
                }
                , r = "undefined" != typeof window && window === this ? this : "undefined" != typeof t && null != t ? t : this;
                function o(t, e) {
                    if (e) {
                        var i = r;
                        t = t.split(".");
                        for (var o = 0; o < t.length - 1; o++) {
                            var a = t[o];
                            a in i || (i[a] = {}),
                            i = i[a]
                        }
                        t = t[t.length - 1],
                        o = i[t],
                        e = e(o),
                        e != o && null != e && n(i, t, {
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                }
                function a(t) {
                    var e = 0;
                    return function() {
                        return e < t.length ? {
                            done: !1,
                            value: t[e++]
                        } : {
                            done: !0
                        }
                    }
                }
                function s(t) {
                    var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
                    return e ? e.call(t) : {
                        next: a(t)
                    }
                }
                o("Promise", (function(t) {
                    function e(t) {
                        this.b = 0,
                        this.c = void 0,
                        this.a = [];
                        var e = this.f();
                        try {
                            t(e.resolve, e.reject)
                        } catch (n) {
                            e.reject(n)
                        }
                    }
                    function n() {
                        this.a = null
                    }
                    function i(t) {
                        return t instanceof e ? t : new e((function(e) {
                            e(t)
                        }
                        ))
                    }
                    if (t)
                        return t;
                    n.prototype.b = function(t) {
                        if (null == this.a) {
                            this.a = [];
                            var e = this;
                            this.c((function() {
                                e.g()
                            }
                            ))
                        }
                        this.a.push(t)
                    }
                    ;
                    var o = r.setTimeout;
                    n.prototype.c = function(t) {
                        o(t, 0)
                    }
                    ,
                    n.prototype.g = function() {
                        for (; this.a && this.a.length; ) {
                            var t = this.a;
                            this.a = [];
                            for (var e = 0; e < t.length; ++e) {
                                var n = t[e];
                                t[e] = null;
                                try {
                                    n()
                                } catch (i) {
                                    this.f(i)
                                }
                            }
                        }
                        this.a = null
                    }
                    ,
                    n.prototype.f = function(t) {
                        this.c((function() {
                            throw t
                        }
                        ))
                    }
                    ,
                    e.prototype.f = function() {
                        function t(t) {
                            return function(i) {
                                n || (n = !0,
                                t.call(e, i))
                            }
                        }
                        var e = this
                          , n = !1;
                        return {
                            resolve: t(this.m),
                            reject: t(this.g)
                        }
                    }
                    ,
                    e.prototype.m = function(t) {
                        if (t === this)
                            this.g(new TypeError("A Promise cannot resolve to itself"));
                        else if (t instanceof e)
                            this.o(t);
                        else {
                            t: switch (typeof t) {
                            case "object":
                                var n = null != t;
                                break t;
                            case "function":
                                n = !0;
                                break t;
                            default:
                                n = !1
                            }
                            n ? this.u(t) : this.h(t)
                        }
                    }
                    ,
                    e.prototype.u = function(t) {
                        var e = void 0;
                        try {
                            e = t.then
                        } catch (n) {
                            return void this.g(n)
                        }
                        "function" == typeof e ? this.v(e, t) : this.h(t)
                    }
                    ,
                    e.prototype.g = function(t) {
                        this.i(2, t)
                    }
                    ,
                    e.prototype.h = function(t) {
                        this.i(1, t)
                    }
                    ,
                    e.prototype.i = function(t, e) {
                        if (0 != this.b)
                            throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
                        this.b = t,
                        this.c = e,
                        this.l()
                    }
                    ,
                    e.prototype.l = function() {
                        if (null != this.a) {
                            for (var t = 0; t < this.a.length; ++t)
                                a.b(this.a[t]);
                            this.a = null
                        }
                    }
                    ;
                    var a = new n;
                    return e.prototype.o = function(t) {
                        var e = this.f();
                        t.Ja(e.resolve, e.reject)
                    }
                    ,
                    e.prototype.v = function(t, e) {
                        var n = this.f();
                        try {
                            t.call(e, n.resolve, n.reject)
                        } catch (i) {
                            n.reject(i)
                        }
                    }
                    ,
                    e.prototype.then = function(t, n) {
                        function i(t, e) {
                            return "function" == typeof t ? function(e) {
                                try {
                                    r(t(e))
                                } catch (n) {
                                    o(n)
                                }
                            }
                            : e
                        }
                        var r, o, a = new e((function(t, e) {
                            r = t,
                            o = e
                        }
                        ));
                        return this.Ja(i(t, r), i(n, o)),
                        a
                    }
                    ,
                    e.prototype.catch = function(t) {
                        return this.then(void 0, t)
                    }
                    ,
                    e.prototype.Ja = function(t, e) {
                        function n() {
                            switch (i.b) {
                            case 1:
                                t(i.c);
                                break;
                            case 2:
                                e(i.c);
                                break;
                            default:
                                throw Error("Unexpected state: " + i.b)
                            }
                        }
                        var i = this;
                        null == this.a ? a.b(n) : this.a.push(n)
                    }
                    ,
                    e.resolve = i,
                    e.reject = function(t) {
                        return new e((function(e, n) {
                            n(t)
                        }
                        ))
                    }
                    ,
                    e.race = function(t) {
                        return new e((function(e, n) {
                            for (var r = s(t), o = r.next(); !o.done; o = r.next())
                                i(o.value).Ja(e, n)
                        }
                        ))
                    }
                    ,
                    e.all = function(t) {
                        var n = s(t)
                          , r = n.next();
                        return r.done ? i([]) : new e((function(t, e) {
                            function o(e) {
                                return function(n) {
                                    a[e] = n,
                                    s--,
                                    0 == s && t(a)
                                }
                            }
                            var a = []
                              , s = 0;
                            do {
                                a.push(void 0),
                                s++,
                                i(r.value).Ja(o(a.length - 1), e),
                                r = n.next()
                            } while (!r.done)
                        }
                        ))
                    }
                    ,
                    e
                }
                ));
                var u = u || {}
                  , c = this || self;
                function h(t) {
                    return "string" == typeof t
                }
                function f(t) {
                    return "boolean" == typeof t
                }
                var l = /^[\w+/_-]+[=]{0,2}$/
                  , d = null;
                function p() {}
                function v(t) {
                    var e = typeof t;
                    if ("object" == e) {
                        if (!t)
                            return "null";
                        if (t instanceof Array)
                            return "array";
                        if (t instanceof Object)
                            return e;
                        var n = Object.prototype.toString.call(t);
                        if ("[object Window]" == n)
                            return "object";
                        if ("[object Array]" == n || "number" == typeof t.length && "undefined" != typeof t.splice && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("splice"))
                            return "array";
                        if ("[object Function]" == n || "undefined" != typeof t.call && "undefined" != typeof t.propertyIsEnumerable && !t.propertyIsEnumerable("call"))
                            return "function"
                    } else if ("function" == e && "undefined" == typeof t.call)
                        return "object";
                    return e
                }
                function m(t) {
                    return null === t
                }
                function g(t) {
                    return "array" == v(t)
                }
                function b(t) {
                    var e = v(t);
                    return "array" == e || "object" == e && "number" == typeof t.length
                }
                function y(t) {
                    return "function" == v(t)
                }
                function w(t) {
                    var e = typeof t;
                    return "object" == e && null != t || "function" == e
                }
                var I = "closure_uid_" + (1e9 * Math.random() >>> 0)
                  , T = 0;
                function k(t, e, n) {
                    return t.call.apply(t.bind, arguments)
                }
                function E(t, e, n) {
                    if (!t)
                        throw Error();
                    if (2 < arguments.length) {
                        var i = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var n = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(n, i),
                            t.apply(e, n)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function S(t, e, n) {
                    return S = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? k : E,
                    S.apply(null, arguments)
                }
                function A(t, e) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var e = n.slice();
                        return e.push.apply(e, arguments),
                        t.apply(this, e)
                    }
                }
                var N = Date.now || function() {
                    return +new Date
                }
                ;
                function _(t, e) {
                    function n() {}
                    n.prototype = e.prototype,
                    t.qb = e.prototype,
                    t.prototype = new n,
                    t.prototype.constructor = t,
                    t.fd = function(t, n, i) {
                        for (var r = Array(arguments.length - 2), o = 2; o < arguments.length; o++)
                            r[o - 2] = arguments[o];
                        return e.prototype[n].apply(t, r)
                    }
                }
                function O(t) {
                    if (!t)
                        return !1;
                    try {
                        return !!t.$goog_Thenable
                    } catch (e) {
                        return !1
                    }
                }
                function R(t) {
                    if (Error.captureStackTrace)
                        Error.captureStackTrace(this, R);
                    else {
                        var e = Error().stack;
                        e && (this.stack = e)
                    }
                    t && (this.message = String(t))
                }
                function P(t, e) {
                    t = t.split("%s");
                    for (var n = "", i = t.length - 1, r = 0; r < i; r++)
                        n += t[r] + (r < e.length ? e[r] : "%s");
                    R.call(this, n + t[i])
                }
                function D(t, e) {
                    throw new P("Failure" + (t ? ": " + t : ""),Array.prototype.slice.call(arguments, 1))
                }
                function C(t, e) {
                    this.c = t,
                    this.f = e,
                    this.b = 0,
                    this.a = null
                }
                function L(t, e) {
                    t.f(e),
                    100 > t.b && (t.b++,
                    e.next = t.a,
                    t.a = e)
                }
                function x() {
                    this.b = this.a = null
                }
                _(R, Error),
                R.prototype.name = "CustomError",
                _(P, R),
                P.prototype.name = "AssertionError",
                C.prototype.get = function() {
                    if (0 < this.b) {
                        this.b--;
                        var t = this.a;
                        this.a = t.next,
                        t.next = null
                    } else
                        t = this.c();
                    return t
                }
                ;
                var M = new C((function() {
                    return new U
                }
                ),(function(t) {
                    t.reset()
                }
                ));
                function j() {
                    var t = zt
                      , e = null;
                    return t.a && (e = t.a,
                    t.a = t.a.next,
                    t.a || (t.b = null),
                    e.next = null),
                    e
                }
                function U() {
                    this.next = this.b = this.a = null
                }
                function V(t, e) {
                    t: {
                        try {
                            var n = t && t.ownerDocument
                              , i = n && (n.defaultView || n.parentWindow);
                            if (i = i || c,
                            i.Element && i.Location) {
                                var r = i;
                                break t
                            }
                        } catch (a) {}
                        r = null
                    }
                    if (r && "undefined" != typeof r[e] && (!t || !(t instanceof r[e]) && (t instanceof r.Location || t instanceof r.Element))) {
                        if (w(t))
                            try {
                                var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t)
                            } catch (a) {
                                o = "<object could not be stringified>"
                            }
                        else
                            o = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                        D("Argument is not a %s (or a non-Element, non-Location mock); got: %s", e, o)
                    }
                }
                x.prototype.add = function(t, e) {
                    var n = M.get();
                    n.set(t, e),
                    this.b ? this.b.next = n : this.a = n,
                    this.b = n
                }
                ,
                U.prototype.set = function(t, e) {
                    this.a = t,
                    this.b = e,
                    this.next = null
                }
                ,
                U.prototype.reset = function() {
                    this.next = this.b = this.a = null
                }
                ;
                var F = Array.prototype.indexOf ? function(t, e) {
                    return Array.prototype.indexOf.call(t, e, void 0)
                }
                : function(t, e) {
                    if (h(t))
                        return h(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                    for (var n = 0; n < t.length; n++)
                        if (n in t && t[n] === e)
                            return n;
                    return -1
                }
                  , K = Array.prototype.forEach ? function(t, e, n) {
                    Array.prototype.forEach.call(t, e, n)
                }
                : function(t, e, n) {
                    for (var i = t.length, r = h(t) ? t.split("") : t, o = 0; o < i; o++)
                        o in r && e.call(n, r[o], o, t)
                }
                ;
                function q(t, e) {
                    for (var n = h(t) ? t.split("") : t, i = t.length - 1; 0 <= i; --i)
                        i in n && e.call(void 0, n[i], i, t)
                }
                var H = Array.prototype.map ? function(t, e) {
                    return Array.prototype.map.call(t, e, void 0)
                }
                : function(t, e) {
                    for (var n = t.length, i = Array(n), r = h(t) ? t.split("") : t, o = 0; o < n; o++)
                        o in r && (i[o] = e.call(void 0, r[o], o, t));
                    return i
                }
                  , B = Array.prototype.some ? function(t, e) {
                    return Array.prototype.some.call(t, e, void 0)
                }
                : function(t, e) {
                    for (var n = t.length, i = h(t) ? t.split("") : t, r = 0; r < n; r++)
                        if (r in i && e.call(void 0, i[r], r, t))
                            return !0;
                    return !1
                }
                ;
                function G(t) {
                    t: {
                        for (var e = Fa, n = t.length, i = h(t) ? t.split("") : t, r = 0; r < n; r++)
                            if (r in i && e.call(void 0, i[r], r, t)) {
                                e = r;
                                break t
                            }
                        e = -1
                    }
                    return 0 > e ? null : h(t) ? t.charAt(e) : t[e]
                }
                function W(t, e) {
                    return 0 <= F(t, e)
                }
                function X(t, e) {
                    var n;
                    return e = F(t, e),
                    (n = 0 <= e) && Array.prototype.splice.call(t, e, 1),
                    n
                }
                function J(t, e) {
                    q(t, (function(n, i) {
                        e.call(void 0, n, i, t) && 1 == Array.prototype.splice.call(t, i, 1).length && 0
                    }
                    ))
                }
                function Y(t) {
                    return Array.prototype.concat.apply([], arguments)
                }
                function z(t) {
                    var e = t.length;
                    if (0 < e) {
                        for (var n = Array(e), i = 0; i < e; i++)
                            n[i] = t[i];
                        return n
                    }
                    return []
                }
                function $(t, e) {
                    for (var n in t)
                        e.call(void 0, t[n], n, t)
                }
                function Z(t) {
                    for (var e in t)
                        return !1;
                    return !0
                }
                function Q(t) {
                    var e, n = {};
                    for (e in t)
                        n[e] = t[e];
                    return n
                }
                var tt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
                function et(t, e) {
                    for (var n, i, r = 1; r < arguments.length; r++) {
                        for (n in i = arguments[r],
                        i)
                            t[n] = i[n];
                        for (var o = 0; o < tt.length; o++)
                            n = tt[o],
                            Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                }
                function nt(t, e) {
                    this.a = t === ot && e || "",
                    this.b = rt
                }
                function it(t) {
                    return t instanceof nt && t.constructor === nt && t.b === rt ? t.a : (D("expected object of type Const, got '" + t + "'"),
                    "type_error:Const")
                }
                nt.prototype.qa = !0,
                nt.prototype.pa = function() {
                    return this.a
                }
                ,
                nt.prototype.toString = function() {
                    return "Const{" + this.a + "}"
                }
                ;
                var rt = {}
                  , ot = {}
                  , at = new nt(ot,"");
                function st() {
                    this.a = "",
                    this.b = lt
                }
                function ut(t) {
                    return t instanceof st && t.constructor === st && t.b === lt ? t.a : (D("expected object of type TrustedResourceUrl, got '" + t + "' of type " + v(t)),
                    "type_error:TrustedResourceUrl")
                }
                function ct(t, e) {
                    var n = it(t);
                    if (!ft.test(n))
                        throw Error("Invalid TrustedResourceUrl format: " + n);
                    return t = n.replace(ht, (function(t, i) {
                        if (!Object.prototype.hasOwnProperty.call(e, i))
                            throw Error('Found marker, "' + i + '", in format string, "' + n + '", but no valid label mapping found in args: ' + JSON.stringify(e));
                        return t = e[i],
                        t instanceof nt ? it(t) : encodeURIComponent(String(t))
                    }
                    )),
                    dt(t)
                }
                st.prototype.qa = !0,
                st.prototype.pa = function() {
                    return this.a.toString()
                }
                ,
                st.prototype.toString = function() {
                    return "TrustedResourceUrl{" + this.a + "}"
                }
                ;
                var ht = /%{(\w+)}/g
                  , ft = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
                  , lt = {};
                function dt(t) {
                    var e = new st;
                    return e.a = t,
                    e
                }
                var pt = String.prototype.trim ? function(t) {
                    return t.trim()
                }
                : function(t) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
                }
                  , vt = /&/g
                  , mt = /</g
                  , gt = />/g
                  , bt = /"/g
                  , yt = /'/g
                  , wt = /\x00/g
                  , It = /[\x00&<>"']/;
                function Tt(t, e) {
                    return -1 != t.indexOf(e)
                }
                function kt(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                }
                function Et() {
                    this.a = "",
                    this.b = Ot
                }
                function St(t) {
                    return t instanceof Et && t.constructor === Et && t.b === Ot ? t.a : (D("expected object of type SafeUrl, got '" + t + "' of type " + v(t)),
                    "type_error:SafeUrl")
                }
                Et.prototype.qa = !0,
                Et.prototype.pa = function() {
                    return this.a.toString()
                }
                ,
                Et.prototype.toString = function() {
                    return "SafeUrl{" + this.a + "}"
                }
                ;
                var At = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
                function Nt(t) {
                    return t instanceof Et ? t : (t = "object" == typeof t && t.qa ? t.pa() : String(t),
                    At.test(t) || (t = "about:invalid#zClosurez"),
                    Rt(t))
                }
                var _t, Ot = {};
                function Rt(t) {
                    var e = new Et;
                    return e.a = t,
                    e
                }
                Rt("about:blank");
                t: {
                    var Pt = c.navigator;
                    if (Pt) {
                        var Dt = Pt.userAgent;
                        if (Dt) {
                            _t = Dt;
                            break t
                        }
                    }
                    _t = ""
                }
                function Ct(t) {
                    return Tt(_t, t)
                }
                function Lt() {
                    this.a = "",
                    this.b = Mt
                }
                function xt(t) {
                    return t instanceof Lt && t.constructor === Lt && t.b === Mt ? t.a : (D("expected object of type SafeHtml, got '" + t + "' of type " + v(t)),
                    "type_error:SafeHtml")
                }
                Lt.prototype.qa = !0,
                Lt.prototype.pa = function() {
                    return this.a.toString()
                }
                ,
                Lt.prototype.toString = function() {
                    return "SafeHtml{" + this.a + "}"
                }
                ;
                var Mt = {};
                function jt(t) {
                    var e = new Lt;
                    return e.a = t,
                    e
                }
                jt("<!DOCTYPE html>");
                var Ut, Vt, Ft = jt("");
                function Kt(t) {
                    var e = dt(it(at));
                    V(t, "HTMLIFrameElement"),
                    t.src = ut(e).toString()
                }
                function qt(t, e) {
                    V(t, "HTMLScriptElement"),
                    t.src = ut(e),
                    null === d && (e = c.document,
                    d = (e = e.querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && l.test(e) ? e : ""),
                    e = d,
                    e && t.setAttribute("nonce", e)
                }
                function Ht(t, e) {
                    for (var n = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length; )
                        i += n.shift() + r.shift();
                    return i + n.join("%s")
                }
                function Bt(t) {
                    return It.test(t) && (-1 != t.indexOf("&") && (t = t.replace(vt, "&amp;")),
                    -1 != t.indexOf("<") && (t = t.replace(mt, "&lt;")),
                    -1 != t.indexOf(">") && (t = t.replace(gt, "&gt;")),
                    -1 != t.indexOf('"') && (t = t.replace(bt, "&quot;")),
                    -1 != t.indexOf("'") && (t = t.replace(yt, "&#39;")),
                    -1 != t.indexOf("\0") && (t = t.replace(wt, "&#0;"))),
                    t
                }
                function Gt(t) {
                    c.setTimeout((function() {
                        throw t
                    }
                    ), 0)
                }
                function Wt() {
                    var t = c.MessageChannel;
                    if ("undefined" === typeof t && "undefined" !== typeof window && window.postMessage && window.addEventListener && !Ct("Presto") && (t = function() {
                        var t = document.createElement("IFRAME");
                        t.style.display = "none",
                        Kt(t),
                        document.documentElement.appendChild(t);
                        var e = t.contentWindow;
                        t = e.document,
                        t.open(),
                        t.write(xt(Ft)),
                        t.close();
                        var n = "callImmediate" + Math.random()
                          , i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                        t = S((function(t) {
                            "*" != i && t.origin != i || t.data != n || this.port1.onmessage()
                        }
                        ), this),
                        e.addEventListener("message", t, !1),
                        this.port1 = {},
                        this.port2 = {
                            postMessage: function() {
                                e.postMessage(n, i)
                            }
                        }
                    }
                    ),
                    "undefined" !== typeof t && !Ct("Trident") && !Ct("MSIE")) {
                        var e = new t
                          , n = {}
                          , i = n;
                        return e.port1.onmessage = function() {
                            if (void 0 !== n.next) {
                                n = n.next;
                                var t = n.yb;
                                n.yb = null,
                                t()
                            }
                        }
                        ,
                        function(t) {
                            i.next = {
                                yb: t
                            },
                            i = i.next,
                            e.port2.postMessage(0)
                        }
                    }
                    return "undefined" !== typeof document && "onreadystatechange"in document.createElement("SCRIPT") ? function(t) {
                        var e = document.createElement("SCRIPT");
                        e.onreadystatechange = function() {
                            e.onreadystatechange = null,
                            e.parentNode.removeChild(e),
                            e = null,
                            t(),
                            t = null
                        }
                        ,
                        document.documentElement.appendChild(e)
                    }
                    : function(t) {
                        c.setTimeout(t, 0)
                    }
                }
                function Xt(t, e) {
                    Vt || Jt(),
                    Yt || (Vt(),
                    Yt = !0),
                    zt.add(t, e)
                }
                function Jt() {
                    if (c.Promise && c.Promise.resolve) {
                        var t = c.Promise.resolve(void 0);
                        Vt = function() {
                            t.then($t)
                        }
                    } else
                        Vt = function() {
                            var t = $t;
                            !y(c.setImmediate) || c.Window && c.Window.prototype && !Ct("Edge") && c.Window.prototype.setImmediate == c.setImmediate ? (Ut || (Ut = Wt()),
                            Ut(t)) : c.setImmediate(t)
                        }
                }
                jt("<br>");
                var Yt = !1
                  , zt = new x;
                function $t() {
                    for (var t; t = j(); ) {
                        try {
                            t.a.call(t.b)
                        } catch (e) {
                            Gt(e)
                        }
                        L(M, t)
                    }
                    Yt = !1
                }
                function Zt(t, e) {
                    if (this.a = Qt,
                    this.i = void 0,
                    this.f = this.b = this.c = null,
                    this.g = this.h = !1,
                    t != p)
                        try {
                            var n = this;
                            t.call(e, (function(t) {
                                de(n, te, t)
                            }
                            ), (function(t) {
                                if (!(t instanceof Te))
                                    try {
                                        if (t instanceof Error)
                                            throw t;
                                        throw Error("Promise rejected.")
                                    } catch (e) {}
                                de(n, ee, t)
                            }
                            ))
                        } catch (i) {
                            de(this, ee, i)
                        }
                }
                var Qt = 0
                  , te = 2
                  , ee = 3;
                function ne() {
                    this.next = this.f = this.b = this.g = this.a = null,
                    this.c = !1
                }
                ne.prototype.reset = function() {
                    this.f = this.b = this.g = this.a = null,
                    this.c = !1
                }
                ;
                var ie = new C((function() {
                    return new ne
                }
                ),(function(t) {
                    t.reset()
                }
                ));
                function re(t, e, n) {
                    var i = ie.get();
                    return i.g = t,
                    i.b = e,
                    i.f = n,
                    i
                }
                function oe(t) {
                    if (t instanceof Zt)
                        return t;
                    var e = new Zt(p);
                    return de(e, te, t),
                    e
                }
                function ae(t) {
                    return new Zt((function(e, n) {
                        n(t)
                    }
                    ))
                }
                function se(t, e, n) {
                    pe(t, e, n, null) || Xt(A(e, t))
                }
                function ue(t) {
                    return new Zt((function(e, n) {
                        var i = t.length
                          , r = [];
                        if (i)
                            for (var o, a = function(t, n) {
                                i--,
                                r[t] = n,
                                0 == i && e(r)
                            }, s = function(t) {
                                n(t)
                            }, u = 0; u < t.length; u++)
                                o = t[u],
                                se(o, A(a, u), s);
                        else
                            e(r)
                    }
                    ))
                }
                function ce(t) {
                    return new Zt((function(e) {
                        var n = t.length
                          , i = [];
                        if (n)
                            for (var r, o = function(t, r, o) {
                                n--,
                                i[t] = r ? {
                                    Gb: !0,
                                    value: o
                                } : {
                                    Gb: !1,
                                    reason: o
                                },
                                0 == n && e(i)
                            }, a = 0; a < t.length; a++)
                                r = t[a],
                                se(r, A(o, a, !0), A(o, a, !1));
                        else
                            e(i)
                    }
                    ))
                }
                function he(t, e) {
                    if (t.a == Qt)
                        if (t.c) {
                            var n = t.c;
                            if (n.b) {
                                for (var i = 0, r = null, o = null, a = n.b; a && (a.c || (i++,
                                a.a == t && (r = a),
                                !(r && 1 < i))); a = a.next)
                                    r || (o = a);
                                r && (n.a == Qt && 1 == i ? he(n, e) : (o ? (i = o,
                                i.next == n.f && (n.f = i),
                                i.next = i.next.next) : ge(n),
                                be(n, r, ee, e)))
                            }
                            t.c = null
                        } else
                            de(t, ee, e)
                }
                function fe(t, e) {
                    t.b || t.a != te && t.a != ee || me(t),
                    t.f ? t.f.next = e : t.b = e,
                    t.f = e
                }
                function le(t, e, n, i) {
                    var r = re(null, null, null);
                    return r.a = new Zt((function(t, o) {
                        r.g = e ? function(n) {
                            try {
                                var r = e.call(i, n);
                                t(r)
                            } catch (a) {
                                o(a)
                            }
                        }
                        : t,
                        r.b = n ? function(e) {
                            try {
                                var r = n.call(i, e);
                                void 0 === r && e instanceof Te ? o(e) : t(r)
                            } catch (a) {
                                o(a)
                            }
                        }
                        : o
                    }
                    )),
                    r.a.c = t,
                    fe(t, r),
                    r.a
                }
                function de(t, e, n) {
                    t.a == Qt && (t === n && (e = ee,
                    n = new TypeError("Promise cannot resolve to itself")),
                    t.a = 1,
                    pe(n, t.Oc, t.Pc, t) || (t.i = n,
                    t.a = e,
                    t.c = null,
                    me(t),
                    e != ee || n instanceof Te || we(t, n)))
                }
                function pe(t, e, n, i) {
                    if (t instanceof Zt)
                        return fe(t, re(e || p, n || null, i)),
                        !0;
                    if (O(t))
                        return t.then(e, n, i),
                        !0;
                    if (w(t))
                        try {
                            var r = t.then;
                            if (y(r))
                                return ve(t, r, e, n, i),
                                !0
                        } catch (o) {
                            return n.call(i, o),
                            !0
                        }
                    return !1
                }
                function ve(t, e, n, i, r) {
                    function o(t) {
                        s || (s = !0,
                        i.call(r, t))
                    }
                    function a(t) {
                        s || (s = !0,
                        n.call(r, t))
                    }
                    var s = !1;
                    try {
                        e.call(t, a, o)
                    } catch (u) {
                        o(u)
                    }
                }
                function me(t) {
                    t.h || (t.h = !0,
                    Xt(t.Zb, t))
                }
                function ge(t) {
                    var e = null;
                    return t.b && (e = t.b,
                    t.b = e.next,
                    e.next = null),
                    t.b || (t.f = null),
                    e
                }
                function be(t, e, n, i) {
                    if (n == ee && e.b && !e.c)
                        for (; t && t.g; t = t.c)
                            t.g = !1;
                    if (e.a)
                        e.a.c = null,
                        ye(e, n, i);
                    else
                        try {
                            e.c ? e.g.call(e.f) : ye(e, n, i)
                        } catch (r) {
                            Ie.call(null, r)
                        }
                    L(ie, e)
                }
                function ye(t, e, n) {
                    e == te ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n)
                }
                function we(t, e) {
                    t.g = !0,
                    Xt((function() {
                        t.g && Ie.call(null, e)
                    }
                    ))
                }
                Zt.prototype.then = function(t, e, n) {
                    return le(this, y(t) ? t : null, y(e) ? e : null, n)
                }
                ,
                Zt.prototype.$goog_Thenable = !0,
                e = Zt.prototype,
                e.ka = function(t, e) {
                    return t = re(t, t, e),
                    t.c = !0,
                    fe(this, t),
                    this
                }
                ,
                e.s = function(t, e) {
                    return le(this, null, t, e)
                }
                ,
                e.cancel = function(t) {
                    this.a == Qt && Xt((function() {
                        var e = new Te(t);
                        he(this, e)
                    }
                    ), this)
                }
                ,
                e.Oc = function(t) {
                    this.a = Qt,
                    de(this, te, t)
                }
                ,
                e.Pc = function(t) {
                    this.a = Qt,
                    de(this, ee, t)
                }
                ,
                e.Zb = function() {
                    for (var t; t = ge(this); )
                        be(this, t, this.a, this.i);
                    this.h = !1
                }
                ;
                var Ie = Gt;
                function Te(t) {
                    R.call(this, t)
                }
                function ke() {
                    0 != Ee && (Se[this[I] || (this[I] = ++T)] = this),
                    this.ta = this.ta,
                    this.la = this.la
                }
                _(Te, R),
                Te.prototype.name = "cancel";
                var Ee = 0
                  , Se = {};
                function Ae(t) {
                    if (!t.ta && (t.ta = !0,
                    t.xa(),
                    0 != Ee)) {
                        var e = t[I] || (t[I] = ++T);
                        if (0 != Ee && t.la && 0 < t.la.length)
                            throw Error(t + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
                        delete Se[e]
                    }
                }
                function Ne(t) {
                    return Ne[" "](t),
                    t
                }
                function _e(t, e) {
                    var n = Ke;
                    return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
                }
                ke.prototype.ta = !1,
                ke.prototype.xa = function() {
                    if (this.la)
                        for (; this.la.length; )
                            this.la.shift()()
                }
                ,
                Ne[" "] = p;
                var Oe, Re = Ct("Opera"), Pe = Ct("Trident") || Ct("MSIE"), De = Ct("Edge"), Ce = De || Pe, Le = Ct("Gecko") && !(Tt(_t.toLowerCase(), "webkit") && !Ct("Edge")) && !(Ct("Trident") || Ct("MSIE")) && !Ct("Edge"), xe = Tt(_t.toLowerCase(), "webkit") && !Ct("Edge");
                function Me() {
                    var t = c.document;
                    return t ? t.documentMode : void 0
                }
                t: {
                    var je = ""
                      , Ue = function() {
                        var t = _t;
                        return Le ? /rv:([^\);]+)(\)|;)/.exec(t) : De ? /Edge\/([\d\.]+)/.exec(t) : Pe ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : xe ? /WebKit\/(\S+)/.exec(t) : Re ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0
                    }();
                    if (Ue && (je = Ue ? Ue[1] : ""),
                    Pe) {
                        var Ve = Me();
                        if (null != Ve && Ve > parseFloat(je)) {
                            Oe = String(Ve);
                            break t
                        }
                    }
                    Oe = je
                }
                var Fe, Ke = {};
                function qe(t) {
                    return _e(t, (function() {
                        for (var e = 0, n = pt(String(Oe)).split("."), i = pt(String(t)).split("."), r = Math.max(n.length, i.length), o = 0; 0 == e && o < r; o++) {
                            var a = n[o] || ""
                              , s = i[o] || "";
                            do {
                                if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""],
                                s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""],
                                0 == a[0].length && 0 == s[0].length)
                                    break;
                                e = kt(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || kt(0 == a[2].length, 0 == s[2].length) || kt(a[2], s[2]),
                                a = a[3],
                                s = s[3]
                            } while (0 == e)
                        }
                        return 0 <= e
                    }
                    ))
                }
                Fe = c.document && Pe ? Me() : void 0;
                var He = Object.freeze || function(t) {
                    return t
                }
                  , Be = !Pe || 9 <= Number(Fe)
                  , Ge = Pe && !qe("9")
                  , We = function() {
                    if (!c.addEventListener || !Object.defineProperty)
                        return !1;
                    var t = !1
                      , e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    try {
                        c.addEventListener("test", p, e),
                        c.removeEventListener("test", p, e)
                    } catch (n) {}
                    return t
                }();
                function Xe(t, e) {
                    this.type = t,
                    this.b = this.target = e,
                    this.Mb = !0
                }
                function Je(t, e) {
                    if (Xe.call(this, t ? t.type : ""),
                    this.relatedTarget = this.b = this.target = null,
                    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0,
                    this.key = "",
                    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1,
                    this.pointerId = 0,
                    this.pointerType = "",
                    this.a = null,
                    t) {
                        var n = this.type = t.type
                          , i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                        if (this.target = t.target || t.srcElement,
                        this.b = e,
                        e = t.relatedTarget) {
                            if (Le) {
                                t: {
                                    try {
                                        Ne(e.nodeName);
                                        var r = !0;
                                        break t
                                    } catch (o) {}
                                    r = !1
                                }
                                r || (e = null)
                            }
                        } else
                            "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                        this.relatedTarget = e,
                        i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX,
                        this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY,
                        this.screenX = i.screenX || 0,
                        this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX,
                        this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY,
                        this.screenX = t.screenX || 0,
                        this.screenY = t.screenY || 0),
                        this.button = t.button,
                        this.key = t.key || "",
                        this.ctrlKey = t.ctrlKey,
                        this.altKey = t.altKey,
                        this.shiftKey = t.shiftKey,
                        this.metaKey = t.metaKey,
                        this.pointerId = t.pointerId || 0,
                        this.pointerType = h(t.pointerType) ? t.pointerType : Ye[t.pointerType] || "",
                        this.a = t,
                        t.defaultPrevented && this.preventDefault()
                    }
                }
                Xe.prototype.preventDefault = function() {
                    this.Mb = !1
                }
                ,
                _(Je, Xe);
                var Ye = He({
                    2: "touch",
                    3: "pen",
                    4: "mouse"
                });
                Je.prototype.preventDefault = function() {
                    Je.qb.preventDefault.call(this);
                    var t = this.a;
                    if (t.preventDefault)
                        t.preventDefault();
                    else if (t.returnValue = !1,
                    Ge)
                        try {
                            (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
                        } catch (e) {}
                }
                ,
                Je.prototype.f = function() {
                    return this.a
                }
                ;
                var ze = "closure_listenable_" + (1e6 * Math.random() | 0)
                  , $e = 0;
                function Ze(t, e, n, i, r) {
                    this.listener = t,
                    this.proxy = null,
                    this.src = e,
                    this.type = n,
                    this.capture = !!i,
                    this.Na = r,
                    this.key = ++$e,
                    this.ra = this.Ia = !1
                }
                function Qe(t) {
                    t.ra = !0,
                    t.listener = null,
                    t.proxy = null,
                    t.src = null,
                    t.Na = null
                }
                function tn(t) {
                    this.src = t,
                    this.a = {},
                    this.b = 0
                }
                function en(t, e) {
                    var n = e.type;
                    n in t.a && X(t.a[n], e) && (Qe(e),
                    0 == t.a[n].length && (delete t.a[n],
                    t.b--))
                }
                function nn(t, e, n, i) {
                    for (var r = 0; r < t.length; ++r) {
                        var o = t[r];
                        if (!o.ra && o.listener == e && o.capture == !!n && o.Na == i)
                            return r
                    }
                    return -1
                }
                tn.prototype.add = function(t, e, n, i, r) {
                    var o = t.toString();
                    t = this.a[o],
                    t || (t = this.a[o] = [],
                    this.b++);
                    var a = nn(t, e, i, r);
                    return -1 < a ? (e = t[a],
                    n || (e.Ia = !1)) : (e = new Ze(e,this.src,o,!!i,r),
                    e.Ia = n,
                    t.push(e)),
                    e
                }
                ;
                var rn = "closure_lm_" + (1e6 * Math.random() | 0)
                  , on = {};
                function an(t, e, n, i, r) {
                    if (i && i.once)
                        cn(t, e, n, i, r);
                    else if (g(e))
                        for (var o = 0; o < e.length; o++)
                            an(t, e[o], n, i, r);
                    else
                        n = bn(n),
                        t && t[ze] ? wn(t, e, n, w(i) ? !!i.capture : !!i, r) : sn(t, e, n, !1, i, r)
                }
                function sn(t, e, n, i, r, o) {
                    if (!e)
                        throw Error("Invalid event type");
                    var a = w(r) ? !!r.capture : !!r
                      , s = mn(t);
                    if (s || (t[rn] = s = new tn(t)),
                    n = s.add(e, n, i, a, o),
                    !n.proxy) {
                        if (i = un(),
                        n.proxy = i,
                        i.src = t,
                        i.listener = n,
                        t.addEventListener)
                            We || (r = a),
                            void 0 === r && (r = !1),
                            t.addEventListener(e.toString(), i, r);
                        else if (t.attachEvent)
                            t.attachEvent(ln(e.toString()), i);
                        else {
                            if (!t.addListener || !t.removeListener)
                                throw Error("addEventListener and attachEvent are unavailable.");
                            t.addListener(i)
                        }
                        0
                    }
                }
                function un() {
                    var t = vn
                      , e = Be ? function(n) {
                        return t.call(e.src, e.listener, n)
                    }
                    : function(n) {
                        if (n = t.call(e.src, e.listener, n),
                        !n)
                            return n
                    }
                    ;
                    return e
                }
                function cn(t, e, n, i, r) {
                    if (g(e))
                        for (var o = 0; o < e.length; o++)
                            cn(t, e[o], n, i, r);
                    else
                        n = bn(n),
                        t && t[ze] ? In(t, e, n, w(i) ? !!i.capture : !!i, r) : sn(t, e, n, !0, i, r)
                }
                function hn(t, e, n, i, r) {
                    if (g(e))
                        for (var o = 0; o < e.length; o++)
                            hn(t, e[o], n, i, r);
                    else
                        i = w(i) ? !!i.capture : !!i,
                        n = bn(n),
                        t && t[ze] ? (t = t.u,
                        e = String(e).toString(),
                        e in t.a && (o = t.a[e],
                        n = nn(o, n, i, r),
                        -1 < n && (Qe(o[n]),
                        Array.prototype.splice.call(o, n, 1),
                        0 == o.length && (delete t.a[e],
                        t.b--)))) : t && (t = mn(t)) && (e = t.a[e.toString()],
                        t = -1,
                        e && (t = nn(e, n, i, r)),
                        (n = -1 < t ? e[t] : null) && fn(n))
                }
                function fn(t) {
                    if ("number" != typeof t && t && !t.ra) {
                        var e = t.src;
                        if (e && e[ze])
                            en(e.u, t);
                        else {
                            var n = t.type
                              , i = t.proxy;
                            e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(ln(n), i) : e.addListener && e.removeListener && e.removeListener(i),
                            (n = mn(e)) ? (en(n, t),
                            0 == n.b && (n.src = null,
                            e[rn] = null)) : Qe(t)
                        }
                    }
                }
                function ln(t) {
                    return t in on ? on[t] : on[t] = "on" + t
                }
                function dn(t, e, n, i) {
                    var r = !0;
                    if ((t = mn(t)) && (e = t.a[e.toString()]))
                        for (e = e.concat(),
                        t = 0; t < e.length; t++) {
                            var o = e[t];
                            o && o.capture == n && !o.ra && (o = pn(o, i),
                            r = r && !1 !== o)
                        }
                    return r
                }
                function pn(t, e) {
                    var n = t.listener
                      , i = t.Na || t.src;
                    return t.Ia && fn(t),
                    n.call(i, e)
                }
                function vn(t, e) {
                    if (t.ra)
                        return !0;
                    if (!Be) {
                        if (!e)
                            t: {
                                e = ["window", "event"];
                                for (var n = c, i = 0; i < e.length; i++)
                                    if (n = n[e[i]],
                                    null == n) {
                                        e = null;
                                        break t
                                    }
                                e = n
                            }
                        if (i = e,
                        e = new Je(i,this),
                        n = !0,
                        !(0 > i.keyCode || void 0 != i.returnValue)) {
                            t: {
                                var r = !1;
                                if (0 == i.keyCode)
                                    try {
                                        i.keyCode = -1;
                                        break t
                                    } catch (a) {
                                        r = !0
                                    }
                                (r || void 0 == i.returnValue) && (i.returnValue = !0)
                            }
                            for (i = [],
                            r = e.b; r; r = r.parentNode)
                                i.push(r);
                            for (t = t.type,
                            r = i.length - 1; 0 <= r; r--) {
                                e.b = i[r];
                                var o = dn(i[r], t, !0, e);
                                n = n && o
                            }
                            for (r = 0; r < i.length; r++)
                                e.b = i[r],
                                o = dn(i[r], t, !1, e),
                                n = n && o
                        }
                        return n
                    }
                    return pn(t, new Je(e,this))
                }
                function mn(t) {
                    return t = t[rn],
                    t instanceof tn ? t : null
                }
                var gn = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
                function bn(t) {
                    return y(t) ? t : (t[gn] || (t[gn] = function(e) {
                        return t.handleEvent(e)
                    }
                    ),
                    t[gn])
                }
                function yn() {
                    ke.call(this),
                    this.u = new tn(this),
                    this.Sb = this,
                    this.Wa = null
                }
                function wn(t, e, n, i, r) {
                    t.u.add(String(e), n, !1, i, r)
                }
                function In(t, e, n, i, r) {
                    t.u.add(String(e), n, !0, i, r)
                }
                function Tn(t, e, n, i) {
                    if (e = t.u.a[String(e)],
                    !e)
                        return !0;
                    e = e.concat();
                    for (var r = !0, o = 0; o < e.length; ++o) {
                        var a = e[o];
                        if (a && !a.ra && a.capture == n) {
                            var s = a.listener
                              , u = a.Na || a.src;
                            a.Ia && en(t.u, a),
                            r = !1 !== s.call(u, i) && r
                        }
                    }
                    return r && 0 != i.Mb
                }
                function kn(t, e, n) {
                    if (y(t))
                        n && (t = S(t, n));
                    else {
                        if (!t || "function" != typeof t.handleEvent)
                            throw Error("Invalid listener argument");
                        t = S(t.handleEvent, t)
                    }
                    return 2147483647 < Number(e) ? -1 : c.setTimeout(t, e || 0)
                }
                function En(t) {
                    var e = null;
                    return new Zt((function(n, i) {
                        e = kn((function() {
                            n(void 0)
                        }
                        ), t),
                        -1 == e && i(Error("Failed to schedule timer."))
                    }
                    )).s((function(t) {
                        throw c.clearTimeout(e),
                        t
                    }
                    ))
                }
                function Sn(t) {
                    if (t.U && "function" == typeof t.U)
                        return t.U();
                    if (h(t))
                        return t.split("");
                    if (b(t)) {
                        for (var e = [], n = t.length, i = 0; i < n; i++)
                            e.push(t[i]);
                        return e
                    }
                    for (i in e = [],
                    n = 0,
                    t)
                        e[n++] = t[i];
                    return e
                }
                function An(t) {
                    if (t.X && "function" == typeof t.X)
                        return t.X();
                    if (!t.U || "function" != typeof t.U) {
                        if (b(t) || h(t)) {
                            var e = [];
                            t = t.length;
                            for (var n = 0; n < t; n++)
                                e.push(n);
                            return e
                        }
                        for (var i in e = [],
                        n = 0,
                        t)
                            e[n++] = i;
                        return e
                    }
                }
                function Nn(t, e) {
                    if (t.forEach && "function" == typeof t.forEach)
                        t.forEach(e, void 0);
                    else if (b(t) || h(t))
                        K(t, e, void 0);
                    else
                        for (var n = An(t), i = Sn(t), r = i.length, o = 0; o < r; o++)
                            e.call(void 0, i[o], n && n[o], t)
                }
                function _n(t, e) {
                    this.b = {},
                    this.a = [],
                    this.c = 0;
                    var n = arguments.length;
                    if (1 < n) {
                        if (n % 2)
                            throw Error("Uneven number of arguments");
                        for (var i = 0; i < n; i += 2)
                            this.set(arguments[i], arguments[i + 1])
                    } else if (t)
                        if (t instanceof _n)
                            for (n = t.X(),
                            i = 0; i < n.length; i++)
                                this.set(n[i], t.get(n[i]));
                        else
                            for (i in t)
                                this.set(i, t[i])
                }
                function On(t) {
                    if (t.c != t.a.length) {
                        for (var e = 0, n = 0; e < t.a.length; ) {
                            var i = t.a[e];
                            Rn(t.b, i) && (t.a[n++] = i),
                            e++
                        }
                        t.a.length = n
                    }
                    if (t.c != t.a.length) {
                        var r = {};
                        for (n = e = 0; e < t.a.length; )
                            i = t.a[e],
                            Rn(r, i) || (t.a[n++] = i,
                            r[i] = 1),
                            e++;
                        t.a.length = n
                    }
                }
                function Rn(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                _(yn, ke),
                yn.prototype[ze] = !0,
                yn.prototype.addEventListener = function(t, e, n, i) {
                    an(this, t, e, n, i)
                }
                ,
                yn.prototype.removeEventListener = function(t, e, n, i) {
                    hn(this, t, e, n, i)
                }
                ,
                yn.prototype.dispatchEvent = function(t) {
                    var e, n = this.Wa;
                    if (n)
                        for (e = []; n; n = n.Wa)
                            e.push(n);
                    n = this.Sb;
                    var i = t.type || t;
                    if (h(t))
                        t = new Xe(t,n);
                    else if (t instanceof Xe)
                        t.target = t.target || n;
                    else {
                        var r = t;
                        t = new Xe(i,n),
                        et(t, r)
                    }
                    if (r = !0,
                    e)
                        for (var o = e.length - 1; 0 <= o; o--) {
                            var a = t.b = e[o];
                            r = Tn(a, i, !0, t) && r
                        }
                    if (a = t.b = n,
                    r = Tn(a, i, !0, t) && r,
                    r = Tn(a, i, !1, t) && r,
                    e)
                        for (o = 0; o < e.length; o++)
                            a = t.b = e[o],
                            r = Tn(a, i, !1, t) && r;
                    return r
                }
                ,
                yn.prototype.xa = function() {
                    if (yn.qb.xa.call(this),
                    this.u) {
                        var t, e = this.u;
                        for (t in e.a) {
                            for (var n = e.a[t], i = 0; i < n.length; i++)
                                Qe(n[i]);
                            delete e.a[t],
                            e.b--
                        }
                    }
                    this.Wa = null
                }
                ,
                e = _n.prototype,
                e.U = function() {
                    On(this);
                    for (var t = [], e = 0; e < this.a.length; e++)
                        t.push(this.b[this.a[e]]);
                    return t
                }
                ,
                e.X = function() {
                    return On(this),
                    this.a.concat()
                }
                ,
                e.clear = function() {
                    this.b = {},
                    this.c = this.a.length = 0
                }
                ,
                e.get = function(t, e) {
                    return Rn(this.b, t) ? this.b[t] : e
                }
                ,
                e.set = function(t, e) {
                    Rn(this.b, t) || (this.c++,
                    this.a.push(t)),
                    this.b[t] = e
                }
                ,
                e.forEach = function(t, e) {
                    for (var n = this.X(), i = 0; i < n.length; i++) {
                        var r = n[i]
                          , o = this.get(r);
                        t.call(e, o, r, this)
                    }
                }
                ;
                var Pn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
                function Dn(t, e) {
                    if (t) {
                        t = t.split("&");
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n].indexOf("=")
                              , r = null;
                            if (0 <= i) {
                                var o = t[n].substring(0, i);
                                r = t[n].substring(i + 1)
                            } else
                                o = t[n];
                            e(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
                        }
                    }
                }
                function Cn(t, e) {
                    var n;
                    this.b = this.i = this.f = "",
                    this.l = null,
                    this.g = this.c = "",
                    this.h = !1,
                    t instanceof Cn ? (this.h = void 0 !== e ? e : t.h,
                    Ln(this, t.f),
                    this.i = t.i,
                    this.b = t.b,
                    xn(this, t.l),
                    this.c = t.c,
                    Mn(this, ei(t.a)),
                    this.g = t.g) : t && (n = String(t).match(Pn)) ? (this.h = !!e,
                    Ln(this, n[1] || "", !0),
                    this.i = Kn(n[2] || ""),
                    this.b = Kn(n[3] || "", !0),
                    xn(this, n[4]),
                    this.c = Kn(n[5] || "", !0),
                    Mn(this, n[6] || "", !0),
                    this.g = Kn(n[7] || "")) : (this.h = !!e,
                    this.a = new Yn(null,this.h))
                }
                function Ln(t, e, n) {
                    t.f = n ? Kn(e, !0) : e,
                    t.f && (t.f = t.f.replace(/:$/, ""))
                }
                function xn(t, e) {
                    if (e) {
                        if (e = Number(e),
                        isNaN(e) || 0 > e)
                            throw Error("Bad port number " + e);
                        t.l = e
                    } else
                        t.l = null
                }
                function Mn(t, e, n) {
                    e instanceof Yn ? (t.a = e,
                    ii(t.a, t.h)) : (n || (e = qn(e, Xn)),
                    t.a = new Yn(e,t.h))
                }
                function jn(t, e, n) {
                    t.a.set(e, n)
                }
                function Un(t, e) {
                    return t.a.get(e)
                }
                function Vn(t) {
                    return t instanceof Cn ? new Cn(t) : new Cn(t,void 0)
                }
                function Fn(t, e) {
                    var n = new Cn(null,void 0);
                    return Ln(n, "https"),
                    t && (n.b = t),
                    e && (n.c = e),
                    n
                }
                function Kn(t, e) {
                    return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
                }
                function qn(t, e, n) {
                    return h(t) ? (t = encodeURI(t).replace(e, Hn),
                    n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                    t) : null
                }
                function Hn(t) {
                    return t = t.charCodeAt(0),
                    "%" + (t >> 4 & 15).toString(16) + (15 & t).toString(16)
                }
                Cn.prototype.toString = function() {
                    var t = []
                      , e = this.f;
                    e && t.push(qn(e, Bn, !0), ":");
                    var n = this.b;
                    return (n || "file" == e) && (t.push("//"),
                    (e = this.i) && t.push(qn(e, Bn, !0), "@"),
                    t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                    n = this.l,
                    null != n && t.push(":", String(n))),
                    (n = this.c) && (this.b && "/" != n.charAt(0) && t.push("/"),
                    t.push(qn(n, "/" == n.charAt(0) ? Wn : Gn, !0))),
                    (n = this.a.toString()) && t.push("?", n),
                    (n = this.g) && t.push("#", qn(n, Jn)),
                    t.join("")
                }
                ,
                Cn.prototype.resolve = function(t) {
                    var e = new Cn(this)
                      , n = !!t.f;
                    n ? Ln(e, t.f) : n = !!t.i,
                    n ? e.i = t.i : n = !!t.b,
                    n ? e.b = t.b : n = null != t.l;
                    var i = t.c;
                    if (n)
                        xn(e, t.l);
                    else if (n = !!t.c) {
                        if ("/" != i.charAt(0))
                            if (this.b && !this.c)
                                i = "/" + i;
                            else {
                                var r = e.c.lastIndexOf("/");
                                -1 != r && (i = e.c.substr(0, r + 1) + i)
                            }
                        if (r = i,
                        ".." == r || "." == r)
                            i = "";
                        else if (Tt(r, "./") || Tt(r, "/.")) {
                            i = 0 == r.lastIndexOf("/", 0),
                            r = r.split("/");
                            for (var o = [], a = 0; a < r.length; ) {
                                var s = r[a++];
                                "." == s ? i && a == r.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(),
                                i && a == r.length && o.push("")) : (o.push(s),
                                i = !0)
                            }
                            i = o.join("/")
                        } else
                            i = r
                    }
                    return n ? e.c = i : n = "" !== t.a.toString(),
                    n ? Mn(e, ei(t.a)) : n = !!t.g,
                    n && (e.g = t.g),
                    e
                }
                ;
                var Bn = /[#\/\?@]/g
                  , Gn = /[#\?:]/g
                  , Wn = /[#\?]/g
                  , Xn = /[#\?@]/g
                  , Jn = /#/g;
                function Yn(t, e) {
                    this.b = this.a = null,
                    this.c = t || null,
                    this.f = !!e
                }
                function zn(t) {
                    t.a || (t.a = new _n,
                    t.b = 0,
                    t.c && Dn(t.c, (function(e, n) {
                        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
                    }
                    )))
                }
                function $n(t) {
                    var e = An(t);
                    if ("undefined" == typeof e)
                        throw Error("Keys are undefined");
                    var n = new Yn(null,void 0);
                    t = Sn(t);
                    for (var i = 0; i < e.length; i++) {
                        var r = e[i]
                          , o = t[i];
                        g(o) ? ti(n, r, o) : n.add(r, o)
                    }
                    return n
                }
                function Zn(t, e) {
                    zn(t),
                    e = ni(t, e),
                    Rn(t.a.b, e) && (t.c = null,
                    t.b -= t.a.get(e).length,
                    t = t.a,
                    Rn(t.b, e) && (delete t.b[e],
                    t.c--,
                    t.a.length > 2 * t.c && On(t)))
                }
                function Qn(t, e) {
                    return zn(t),
                    e = ni(t, e),
                    Rn(t.a.b, e)
                }
                function ti(t, e, n) {
                    Zn(t, e),
                    0 < n.length && (t.c = null,
                    t.a.set(ni(t, e), z(n)),
                    t.b += n.length)
                }
                function ei(t) {
                    var e = new Yn;
                    return e.c = t.c,
                    t.a && (e.a = new _n(t.a),
                    e.b = t.b),
                    e
                }
                function ni(t, e) {
                    return e = String(e),
                    t.f && (e = e.toLowerCase()),
                    e
                }
                function ii(t, e) {
                    e && !t.f && (zn(t),
                    t.c = null,
                    t.a.forEach((function(t, e) {
                        var n = e.toLowerCase();
                        e != n && (Zn(this, e),
                        ti(this, n, t))
                    }
                    ), t)),
                    t.f = e
                }
                e = Yn.prototype,
                e.add = function(t, e) {
                    zn(this),
                    this.c = null,
                    t = ni(this, t);
                    var n = this.a.get(t);
                    return n || this.a.set(t, n = []),
                    n.push(e),
                    this.b += 1,
                    this
                }
                ,
                e.clear = function() {
                    this.a = this.c = null,
                    this.b = 0
                }
                ,
                e.forEach = function(t, e) {
                    zn(this),
                    this.a.forEach((function(n, i) {
                        K(n, (function(n) {
                            t.call(e, n, i, this)
                        }
                        ), this)
                    }
                    ), this)
                }
                ,
                e.X = function() {
                    zn(this);
                    for (var t = this.a.U(), e = this.a.X(), n = [], i = 0; i < e.length; i++)
                        for (var r = t[i], o = 0; o < r.length; o++)
                            n.push(e[i]);
                    return n
                }
                ,
                e.U = function(t) {
                    zn(this);
                    var e = [];
                    if (h(t))
                        Qn(this, t) && (e = Y(e, this.a.get(ni(this, t))));
                    else {
                        t = this.a.U();
                        for (var n = 0; n < t.length; n++)
                            e = Y(e, t[n])
                    }
                    return e
                }
                ,
                e.set = function(t, e) {
                    return zn(this),
                    this.c = null,
                    t = ni(this, t),
                    Qn(this, t) && (this.b -= this.a.get(t).length),
                    this.a.set(t, [e]),
                    this.b += 1,
                    this
                }
                ,
                e.get = function(t, e) {
                    return t ? (t = this.U(t),
                    0 < t.length ? String(t[0]) : e) : e
                }
                ,
                e.toString = function() {
                    if (this.c)
                        return this.c;
                    if (!this.a)
                        return "";
                    for (var t = [], e = this.a.X(), n = 0; n < e.length; n++) {
                        var i = e[n]
                          , r = encodeURIComponent(String(i));
                        i = this.U(i);
                        for (var o = 0; o < i.length; o++) {
                            var a = r;
                            "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))),
                            t.push(a)
                        }
                    }
                    return this.c = t.join("&")
                }
                ;
                var ri = !Pe || 9 <= Number(Fe);
                function oi(t) {
                    var e = document;
                    return h(t) ? e.getElementById(t) : t
                }
                function ai(t, e) {
                    $(e, (function(e, n) {
                        e && "object" == typeof e && e.qa && (e = e.pa()),
                        "style" == n ? t.style.cssText = e : "class" == n ? t.className = e : "for" == n ? t.htmlFor = e : si.hasOwnProperty(n) ? t.setAttribute(si[n], e) : 0 == n.lastIndexOf("aria-", 0) || 0 == n.lastIndexOf("data-", 0) ? t.setAttribute(n, e) : t[n] = e
                    }
                    ))
                }
                var si = {
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    colspan: "colSpan",
                    frameborder: "frameBorder",
                    height: "height",
                    maxlength: "maxLength",
                    nonce: "nonce",
                    role: "role",
                    rowspan: "rowSpan",
                    type: "type",
                    usemap: "useMap",
                    valign: "vAlign",
                    width: "width"
                };
                function ui(t, e, n) {
                    var i = arguments
                      , r = document
                      , o = String(i[0])
                      , a = i[1];
                    if (!ri && a && (a.name || a.type)) {
                        if (o = ["<", o],
                        a.name && o.push(' name="', Bt(a.name), '"'),
                        a.type) {
                            o.push(' type="', Bt(a.type), '"');
                            var s = {};
                            et(s, a),
                            delete s.type,
                            a = s
                        }
                        o.push(">"),
                        o = o.join("")
                    }
                    return o = r.createElement(o),
                    a && (h(a) ? o.className = a : g(a) ? o.className = a.join(" ") : ai(o, a)),
                    2 < i.length && ci(r, o, i),
                    o
                }
                function ci(t, e, n) {
                    function i(n) {
                        n && e.appendChild(h(n) ? t.createTextNode(n) : n)
                    }
                    for (var r = 2; r < n.length; r++) {
                        var o = n[r];
                        !b(o) || w(o) && 0 < o.nodeType ? i(o) : K(hi(o) ? z(o) : o, i)
                    }
                }
                function hi(t) {
                    if (t && "number" == typeof t.length) {
                        if (w(t))
                            return "function" == typeof t.item || "string" == typeof t.item;
                        if (y(t))
                            return "function" == typeof t.item
                    }
                    return !1
                }
                function fi(t) {
                    var e = [];
                    return di(new li, t, e),
                    e.join("")
                }
                function li() {}
                function di(t, e, n) {
                    if (null == e)
                        n.push("null");
                    else {
                        if ("object" == typeof e) {
                            if (g(e)) {
                                var i = e;
                                e = i.length,
                                n.push("[");
                                for (var r = "", o = 0; o < e; o++)
                                    n.push(r),
                                    di(t, i[o], n),
                                    r = ",";
                                return void n.push("]")
                            }
                            if (!(e instanceof String || e instanceof Number || e instanceof Boolean)) {
                                for (i in n.push("{"),
                                r = "",
                                e)
                                    Object.prototype.hasOwnProperty.call(e, i) && (o = e[i],
                                    "function" != typeof o && (n.push(r),
                                    mi(i, n),
                                    n.push(":"),
                                    di(t, o, n),
                                    r = ","));
                                return void n.push("}")
                            }
                            e = e.valueOf()
                        }
                        switch (typeof e) {
                        case "string":
                            mi(e, n);
                            break;
                        case "number":
                            n.push(isFinite(e) && !isNaN(e) ? String(e) : "null");
                            break;
                        case "boolean":
                            n.push(String(e));
                            break;
                        case "function":
                            n.push("null");
                            break;
                        default:
                            throw Error("Unknown type: " + typeof e)
                        }
                    }
                }
                var pi = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "/": "\\/",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t",
                    "\v": "\\u000b"
                }
                  , vi = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
                function mi(t, e) {
                    e.push('"', t.replace(vi, (function(t) {
                        var e = pi[t];
                        return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1),
                        pi[t] = e),
                        e
                    }
                    )), '"')
                }
                function gi() {
                    var t = Ki();
                    return Pe && !!Fe && 11 == Fe || /Edge\/\d+/.test(t)
                }
                function bi() {
                    return c.window && c.window.location.href || self && self.location && self.location.href || ""
                }
                function yi(t, e) {
                    e = e || c.window;
                    var n = "about:blank";
                    t && (n = St(Nt(t)).toString()),
                    e.location.href = n
                }
                function wi(t, e) {
                    var n, i = [];
                    for (n in t)
                        n in e ? typeof t[n] != typeof e[n] ? i.push(n) : "object" == typeof t[n] && null != t[n] && null != e[n] ? 0 < wi(t[n], e[n]).length && i.push(n) : t[n] !== e[n] && i.push(n) : i.push(n);
                    for (n in e)
                        n in t || i.push(n);
                    return i
                }
                function Ii() {
                    var t = Ki();
                    return t = Ui(t) != ji ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null,
                    !(t && 30 > t) && (!Pe || !Fe || 9 < Fe)
                }
                function Ti(t) {
                    return t = (t || Ki()).toLowerCase(),
                    !!(t.match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/))
                }
                function ki(t) {
                    t = t || c.window;
                    try {
                        t.close()
                    } catch (e) {}
                }
                function Ei(t, e, n) {
                    var i = Math.floor(1e9 * Math.random()).toString();
                    e = e || 500,
                    n = n || 600;
                    var r = (window.screen.availHeight - n) / 2
                      , o = (window.screen.availWidth - e) / 2;
                    for (a in e = {
                        width: e,
                        height: n,
                        top: 0 < r ? r : 0,
                        left: 0 < o ? o : 0,
                        location: !0,
                        resizable: !0,
                        statusbar: !0,
                        toolbar: !1
                    },
                    n = Ki().toLowerCase(),
                    i && (e.target = i,
                    Tt(n, "crios/") && (e.target = "_blank")),
                    Ui(Ki()) == Mi && (t = t || "http://localhost",
                    e.scrollbars = !0),
                    n = t || "",
                    (t = e) || (t = {}),
                    i = window,
                    e = n instanceof Et ? n : Nt("undefined" != typeof n.href ? n.href : String(n)),
                    n = t.target || n.target,
                    r = [],
                    t)
                        switch (a) {
                        case "width":
                        case "height":
                        case "top":
                        case "left":
                            r.push(a + "=" + t[a]);
                            break;
                        case "target":
                        case "noopener":
                        case "noreferrer":
                            break;
                        default:
                            r.push(a + "=" + (t[a] ? 1 : 0))
                        }
                    var a = r.join(",");
                    if ((Ct("iPhone") && !Ct("iPod") && !Ct("iPad") || Ct("iPad") || Ct("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (a = i.document.createElement("A"),
                    V(a, "HTMLAnchorElement"),
                    e instanceof Et || e instanceof Et || (e = "object" == typeof e && e.qa ? e.pa() : String(e),
                    At.test(e) || (e = "about:invalid#zClosurez"),
                    e = Rt(e)),
                    a.href = St(e),
                    a.setAttribute("target", n),
                    t.noreferrer && a.setAttribute("rel", "noreferrer"),
                    t = document.createEvent("MouseEvent"),
                    t.initMouseEvent("click", !0, !0, i, 1),
                    a.dispatchEvent(t),
                    a = {}) : t.noreferrer ? (a = i.open("", n, a),
                    t = St(e).toString(),
                    a && (Ce && Tt(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"),
                    a.opener = null,
                    t = jt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Bt(t) + '">'),
                    a.document.write(xt(t)),
                    a.document.close())) : (a = i.open(St(e).toString(), n, a)) && t.noopener && (a.opener = null),
                    a)
                        try {
                            a.focus()
                        } catch (s) {}
                    return a
                }
                function Si(t) {
                    return new Zt((function(e) {
                        function n() {
                            En(2e3).then((function() {
                                if (t && !t.closed)
                                    return n();
                                e()
                            }
                            ))
                        }
                        return n()
                    }
                    ))
                }
                var Ai = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
                  , Ni = /^[^@]+@[^@]+$/;
                function _i() {
                    var t = null;
                    return new Zt((function(e) {
                        "complete" == c.document.readyState ? e() : (t = function() {
                            e()
                        }
                        ,
                        cn(window, "load", t))
                    }
                    )).s((function(e) {
                        throw hn(window, "load", t),
                        e
                    }
                    ))
                }
                function Oi() {
                    return Ri(void 0) ? _i().then((function() {
                        return new Zt((function(t, e) {
                            var n = c.document
                              , i = setTimeout((function() {
                                e(Error("Cordova framework is not ready."))
                            }
                            ), 1e3);
                            n.addEventListener("deviceready", (function() {
                                clearTimeout(i),
                                t()
                            }
                            ), !1)
                        }
                        ))
                    }
                    )) : ae(Error("Cordova must run in an Android or iOS file scheme."))
                }
                function Ri(t) {
                    return t = t || Ki(),
                    !("file:" !== Wi() || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
                }
                function Pi() {
                    var t = c.window;
                    try {
                        return !(!t || t == t.top)
                    } catch (e) {
                        return !1
                    }
                }
                function Di() {
                    return "undefined" !== typeof c.WorkerGlobalScope && "function" === typeof c.importScripts
                }
                function Ci() {
                    return i.a.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : i.a.INTERNAL.hasOwnProperty("node") ? "Node" : Di() ? "Worker" : "Browser"
                }
                function Li() {
                    var t = Ci();
                    return "ReactNative" === t || "Node" === t
                }
                function xi() {
                    for (var t = 50, e = []; 0 < t; )
                        e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                        t--;
                    return e.join("")
                }
                var Mi = "Firefox"
                  , ji = "Chrome";
                function Ui(t) {
                    var e = t.toLowerCase();
                    return Tt(e, "opera/") || Tt(e, "opr/") || Tt(e, "opios/") ? "Opera" : Tt(e, "iemobile") ? "IEMobile" : Tt(e, "msie") || Tt(e, "trident/") ? "IE" : Tt(e, "edge/") ? "Edge" : Tt(e, "firefox/") ? Mi : Tt(e, "silk/") ? "Silk" : Tt(e, "blackberry") ? "Blackberry" : Tt(e, "webos") ? "Webos" : !Tt(e, "safari/") || Tt(e, "chrome/") || Tt(e, "crios/") || Tt(e, "android") ? !Tt(e, "chrome/") && !Tt(e, "crios/") || Tt(e, "edge/") ? Tt(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : ji : "Safari"
                }
                var Vi = {
                    Vc: "FirebaseCore-web",
                    Xc: "FirebaseUI-web"
                };
                function Fi(t, e) {
                    e = e || [];
                    var n, i = [], r = {};
                    for (n in Vi)
                        r[Vi[n]] = !0;
                    for (n = 0; n < e.length; n++)
                        "undefined" !== typeof r[e[n]] && (delete r[e[n]],
                        i.push(e[n]));
                    return i.sort(),
                    e = i,
                    e.length || (e = ["FirebaseCore-web"]),
                    i = Ci(),
                    "Browser" === i ? (r = Ki(),
                    i = Ui(r)) : "Worker" === i && (r = Ki(),
                    i = Ui(r) + "-" + i),
                    i + "/JsCore/" + t + "/" + e.join(",")
                }
                function Ki() {
                    return c.navigator && c.navigator.userAgent || ""
                }
                function qi(t, e) {
                    t = t.split("."),
                    e = e || c;
                    for (var n = 0; n < t.length && "object" == typeof e && null != e; n++)
                        e = e[t[n]];
                    return n != t.length && (e = void 0),
                    e
                }
                function Hi() {
                    try {
                        var t = c.localStorage
                          , e = $i();
                        if (t)
                            return t.setItem(e, "1"),
                            t.removeItem(e),
                            !gi() || !!c.indexedDB
                    } catch (n) {
                        return Di() && !!c.indexedDB
                    }
                    return !1
                }
                function Bi() {
                    return (Gi() || "chrome-extension:" === Wi() || Ri()) && !Li() && Hi() && !Di()
                }
                function Gi() {
                    return "http:" === Wi() || "https:" === Wi()
                }
                function Wi() {
                    return c.location && c.location.protocol || null
                }
                function Xi(t) {
                    return t = t || Ki(),
                    !Ti(t) && Ui(t) != Mi
                }
                function Ji(t) {
                    return "undefined" === typeof t ? null : fi(t)
                }
                function Yi(t) {
                    var e, n = {};
                    for (e in t)
                        t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
                    return n
                }
                function zi(t) {
                    if (null !== t)
                        return JSON.parse(t)
                }
                function $i(t) {
                    return t || Math.floor(1e9 * Math.random()).toString()
                }
                function Zi(t) {
                    return t = t || Ki(),
                    "Safari" != Ui(t) && !t.toLowerCase().match(/iphone|ipad|ipod/)
                }
                function Qi() {
                    var t = c.___jsl;
                    if (t && t.H)
                        for (var e in t.H)
                            if (t.H[e].r = t.H[e].r || [],
                            t.H[e].L = t.H[e].L || [],
                            t.H[e].r = t.H[e].L.concat(),
                            t.CP)
                                for (var n = 0; n < t.CP.length; n++)
                                    t.CP[n] = null
                }
                function tr(t, e) {
                    if (t > e)
                        throw Error("Short delay should be less than long delay!");
                    this.a = t,
                    this.c = e,
                    t = Ki(),
                    e = Ci(),
                    this.b = Ti(t) || "ReactNative" === e
                }
                function er() {
                    var t = c.document;
                    return !t || "undefined" === typeof t.visibilityState || "visible" == t.visibilityState
                }
                function nr() {
                    var t = c.document
                      , e = null;
                    return er() || !t ? oe() : new Zt((function(n) {
                        e = function() {
                            er() && (t.removeEventListener("visibilitychange", e, !1),
                            n())
                        }
                        ,
                        t.addEventListener("visibilitychange", e, !1)
                    }
                    )).s((function(n) {
                        throw t.removeEventListener("visibilitychange", e, !1),
                        n
                    }
                    ))
                }
                function ir(t) {
                    try {
                        var e = new Date(parseInt(t, 10));
                        if (!isNaN(e.getTime()) && !/[^0-9]/.test(t))
                            return e.toUTCString()
                    } catch (n) {}
                    return null
                }
                function rr() {
                    return !(!qi("fireauth.oauthhelper", c) && !qi("fireauth.iframe", c))
                }
                function or() {
                    var t = c.navigator;
                    return t && t.serviceWorker && t.serviceWorker.controller || null
                }
                function ar() {
                    var t = c.navigator;
                    return t && t.serviceWorker ? oe().then((function() {
                        return t.serviceWorker.ready
                    }
                    )).then((function(t) {
                        return t.active || null
                    }
                    )).s((function() {
                        return null
                    }
                    )) : oe(null)
                }
                tr.prototype.get = function() {
                    var t = c.navigator;
                    return !t || "boolean" !== typeof t.onLine || !Gi() && "chrome-extension:" !== Wi() && "undefined" === typeof t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a)
                }
                ;
                var sr, ur = {};
                function cr(t) {
                    ur[t] || (ur[t] = !0,
                    "undefined" !== typeof console && "function" === typeof console.warn && console.warn(t))
                }
                try {
                    var hr = {};
                    Object.defineProperty(hr, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 1
                    }),
                    Object.defineProperty(hr, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 2
                    }),
                    sr = 2 == hr.abcd
                } catch (ed) {
                    sr = !1
                }
                function fr(t, e, n) {
                    sr ? Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    }) : t[e] = n
                }
                function lr(t, e) {
                    if (e)
                        for (var n in e)
                            e.hasOwnProperty(n) && fr(t, n, e[n])
                }
                function dr(t) {
                    var e = {};
                    return lr(e, t),
                    e
                }
                function pr(t) {
                    var e, n = {};
                    for (e in t)
                        t.hasOwnProperty(e) && (n[e] = t[e]);
                    return n
                }
                function vr(t, e) {
                    if (!e || !e.length)
                        return !0;
                    if (!t)
                        return !1;
                    for (var n = 0; n < e.length; n++) {
                        var i = t[e[n]];
                        if (void 0 === i || null === i || "" === i)
                            return !1
                    }
                    return !0
                }
                function mr(t) {
                    var e = t;
                    if ("object" == typeof t && null != t)
                        for (var n in e = "length"in t ? [] : {},
                        t)
                            fr(e, n, mr(t[n]));
                    return e
                }
                function gr(t) {
                    var e = {}
                      , n = t[yr]
                      , i = t[wr];
                    if (t = t[Ir],
                    !t || t != br && !n)
                        throw Error("Invalid provider user info!");
                    e[kr] = i || null,
                    e[Tr] = n || null,
                    fr(this, Sr, t),
                    fr(this, Er, mr(e))
                }
                var br = "EMAIL_SIGNIN"
                  , yr = "email"
                  , wr = "newEmail"
                  , Ir = "requestType"
                  , Tr = "email"
                  , kr = "fromEmail"
                  , Er = "data"
                  , Sr = "operation";
                function Ar(t, e) {
                    this.code = _r + t,
                    this.message = e || Or[t] || ""
                }
                function Nr(t) {
                    var e = t && t.code;
                    return e ? new Ar(e.substring(_r.length),t.message) : null
                }
                _(Ar, Error),
                Ar.prototype.A = function() {
                    return {
                        code: this.code,
                        message: this.message
                    }
                }
                ,
                Ar.prototype.toJSON = function() {
                    return this.A()
                }
                ;
                var _r = "auth/"
                  , Or = {
                    "admin-restricted-operation": "This operation is restricted to administrators only.",
                    "argument-error": "",
                    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                    "cordova-not-ready": "Cordova framework is not ready.",
                    "cors-unsupported": "This browser is not supported.",
                    "credential-already-in-use": "This credential is already associated with a different user account.",
                    "custom-token-mismatch": "The custom token corresponds to a different audience.",
                    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                    "email-already-in-use": "The email address is already in use by another account.",
                    "expired-action-code": "The action code has expired. ",
                    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                    "internal-error": "An internal error has occurred.",
                    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                    "invalid-auth-event": "An internal error has occurred.",
                    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
                    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                    "invalid-email": "The email address is badly formatted.",
                    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                    "invalid-credential": "The supplied auth credential is malformed or has expired.",
                    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                    "wrong-password": "The password is invalid or the user does not have a password.",
                    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                    "invalid-provider-id": "The specified provider ID is invalid.",
                    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                    "missing-continue-uri": "A continue URL must be provided in the request.",
                    "missing-iframe-start": "An internal error has occurred.",
                    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                    "missing-or-invalid-nonce": "The OIDC ID token requires a valid unhashed nonce.",
                    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                    "app-deleted": "This instance of FirebaseApp has been deleted.",
                    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                    "no-auth-event": "An internal error has occurred.",
                    "no-such-provider": "User was not linked to an account with the given provider.",
                    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                    "provider-already-linked": "User can only be linked to one identity for the given provider.",
                    "quota-exceeded": "The project's quota for this operation has been exceeded.",
                    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                    "rejected-credential": "The request contains malformed or mismatching credentials.",
                    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                    timeout: "The operation has timed out.",
                    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                    "user-cancelled": "User did not grant your application the permissions it requested.",
                    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                    "user-disabled": "The user account has been disabled by an administrator.",
                    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                    "user-signed-out": "",
                    "weak-password": "The password must be 6 characters long or more.",
                    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
                };
                function Rr(t) {
                    t = Vn(t);
                    var e = Un(t, Pr) || null
                      , n = Un(t, Dr) || null
                      , i = Un(t, xr) || null;
                    if (i = i && jr[i] || null,
                    !e || !n || !i)
                        throw new Ar("argument-error",Pr + ", " + Dr + "and " + xr + " are required in a valid action code URL.");
                    lr(this, {
                        apiKey: e,
                        operation: i,
                        code: n,
                        continueUrl: Un(t, Cr) || null,
                        languageCode: Un(t, Lr) || null,
                        tenantId: Un(t, Mr) || null
                    })
                }
                var Pr = "apiKey"
                  , Dr = "oobCode"
                  , Cr = "continueUrl"
                  , Lr = "languageCode"
                  , xr = "mode"
                  , Mr = "tenantId"
                  , jr = {
                    recoverEmail: "RECOVER_EMAIL",
                    resetPassword: "PASSWORD_RESET",
                    signIn: br,
                    verifyEmail: "VERIFY_EMAIL"
                };
                function Ur(t) {
                    try {
                        return new Rr(t)
                    } catch (e) {
                        return null
                    }
                }
                function Vr(t) {
                    var e = t[Br];
                    if ("undefined" === typeof e)
                        throw new Ar("missing-continue-uri");
                    if ("string" !== typeof e || "string" === typeof e && !e.length)
                        throw new Ar("invalid-continue-uri");
                    this.h = e,
                    this.b = this.a = null,
                    this.g = !1;
                    var n = t[Fr];
                    if (n && "object" === typeof n) {
                        e = n[Xr];
                        var i = n[Gr];
                        if (n = n[Wr],
                        "string" === typeof e && e.length) {
                            if (this.a = e,
                            "undefined" !== typeof i && "boolean" !== typeof i)
                                throw new Ar("argument-error",Gr + " property must be a boolean when specified.");
                            if (this.g = !!i,
                            "undefined" !== typeof n && ("string" !== typeof n || "string" === typeof n && !n.length))
                                throw new Ar("argument-error",Wr + " property must be a non empty string when specified.");
                            this.b = n || null
                        } else {
                            if ("undefined" !== typeof e)
                                throw new Ar("argument-error",Xr + " property must be a non empty string when specified.");
                            if ("undefined" !== typeof i || "undefined" !== typeof n)
                                throw new Ar("missing-android-pkg-name")
                        }
                    } else if ("undefined" !== typeof n)
                        throw new Ar("argument-error",Fr + " property must be a non null object when specified.");
                    if (this.f = null,
                    (e = t[Hr]) && "object" === typeof e) {
                        if (e = e[Jr],
                        "string" === typeof e && e.length)
                            this.f = e;
                        else if ("undefined" !== typeof e)
                            throw new Ar("argument-error",Jr + " property must be a non empty string when specified.")
                    } else if ("undefined" !== typeof e)
                        throw new Ar("argument-error",Hr + " property must be a non null object when specified.");
                    if (e = t[qr],
                    "undefined" !== typeof e && "boolean" !== typeof e)
                        throw new Ar("argument-error",qr + " property must be a boolean when specified.");
                    if (this.c = !!e,
                    t = t[Kr],
                    "undefined" !== typeof t && ("string" !== typeof t || "string" === typeof t && !t.length))
                        throw new Ar("argument-error",Kr + " property must be a non empty string when specified.");
                    this.i = t || null
                }
                var Fr = "android"
                  , Kr = "dynamicLinkDomain"
                  , qr = "handleCodeInApp"
                  , Hr = "iOS"
                  , Br = "url"
                  , Gr = "installApp"
                  , Wr = "minimumVersion"
                  , Xr = "packageName"
                  , Jr = "bundleId";
                function Yr(t) {
                    var e = {};
                    for (var n in e.continueUrl = t.h,
                    e.canHandleCodeInApp = t.c,
                    (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.b,
                    e.androidInstallApp = t.g),
                    e.iOSBundleId = t.f,
                    e.dynamicLinkDomain = t.i,
                    e)
                        null === e[n] && delete e[n];
                    return e
                }
                function zr(t) {
                    return H(t, (function(t) {
                        return t = t.toString(16),
                        1 < t.length ? t : "0" + t
                    }
                    )).join("")
                }
                var $r = null
                  , Zr = null;
                function Qr(t) {
                    var e = "";
                    return to(t, (function(t) {
                        e += String.fromCharCode(t)
                    }
                    )),
                    e
                }
                function to(t, e) {
                    function n(e) {
                        for (; i < t.length; ) {
                            var n = t.charAt(i++)
                              , r = Zr[n];
                            if (null != r)
                                return r;
                            if (!/^[\s\xa0]*$/.test(n))
                                throw Error("Unknown base64 encoding at char: " + n)
                        }
                        return e
                    }
                    eo();
                    for (var i = 0; ; ) {
                        var r = n(-1)
                          , o = n(0)
                          , a = n(64)
                          , s = n(64);
                        if (64 === s && -1 === r)
                            break;
                        e(r << 2 | o >> 4),
                        64 != a && (e(o << 4 & 240 | a >> 2),
                        64 != s && e(a << 6 & 192 | s))
                    }
                }
                function eo() {
                    if (!$r) {
                        $r = {},
                        Zr = {};
                        for (var t = 0; 65 > t; t++)
                            $r[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t),
                            Zr[$r[t]] = t,
                            62 <= t && (Zr["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)] = t)
                    }
                }
                function no(t) {
                    this.f = t.sub,
                    N(),
                    this.a = t.provider_id || t.firebase && t.firebase.sign_in_provider || null,
                    this.c = t.firebase && t.firebase.tenant || null,
                    this.b = !!t.is_anonymous || "anonymous" == this.a
                }
                function io(t) {
                    return (t = ro(t)) && t.sub && t.iss && t.aud && t.exp ? new no(t) : null
                }
                function ro(t) {
                    if (!t)
                        return null;
                    if (t = t.split("."),
                    3 != t.length)
                        return null;
                    t = t[1];
                    for (var e = (4 - t.length % 4) % 4, n = 0; n < e; n++)
                        t += ".";
                    try {
                        return JSON.parse(Qr(t))
                    } catch (i) {}
                    return null
                }
                no.prototype.R = function() {
                    return this.c
                }
                ,
                no.prototype.g = function() {
                    return this.b
                }
                ;
                var oo, ao = {
                    ad: {
                        bb: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                        ib: "https://securetoken.googleapis.com/v1/token",
                        id: "p"
                    },
                    cd: {
                        bb: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                        ib: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                        id: "s"
                    },
                    dd: {
                        bb: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                        ib: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                        id: "t"
                    }
                };
                function so(t) {
                    for (var e in ao)
                        if (ao[e].id === t)
                            return t = ao[e],
                            {
                                firebaseEndpoint: t.bb,
                                secureTokenEndpoint: t.ib
                            };
                    return null
                }
                oo = so("__EID__") ? "__EID__" : void 0;
                var uo = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
                  , co = ["client_id", "response_type", "scope", "redirect_uri", "state"]
                  , ho = {
                    Wc: {
                        Oa: "locale",
                        Da: 500,
                        Ca: 600,
                        Pa: "facebook.com",
                        hb: co
                    },
                    Yc: {
                        Oa: null,
                        Da: 500,
                        Ca: 620,
                        Pa: "github.com",
                        hb: co
                    },
                    Zc: {
                        Oa: "hl",
                        Da: 515,
                        Ca: 680,
                        Pa: "google.com",
                        hb: co
                    },
                    ed: {
                        Oa: "lang",
                        Da: 485,
                        Ca: 705,
                        Pa: "twitter.com",
                        hb: uo
                    }
                };
                function fo(t) {
                    for (var e in ho)
                        if (ho[e].Pa == t)
                            return ho[e];
                    return null
                }
                function lo(t) {
                    var e = {};
                    e["facebook.com"] = bo,
                    e["google.com"] = wo,
                    e["github.com"] = yo,
                    e["twitter.com"] = Io;
                    var n = t && t[vo];
                    try {
                        if (n)
                            return e[n] ? new e[n](t) : new go(t);
                        if ("undefined" !== typeof t[po])
                            return new mo(t)
                    } catch (i) {}
                    return null
                }
                var po = "idToken"
                  , vo = "providerId";
                function mo(t) {
                    var e = t[vo];
                    if (!e && t[po]) {
                        var n = io(t[po]);
                        n && n.a && (e = n.a)
                    }
                    if (!e)
                        throw Error("Invalid additional user info!");
                    "anonymous" != e && "custom" != e || (e = null),
                    n = !1,
                    "undefined" !== typeof t.isNewUser ? n = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (n = !0),
                    fr(this, "providerId", e),
                    fr(this, "isNewUser", n)
                }
                function go(t) {
                    mo.call(this, t),
                    t = zi(t.rawUserInfo || "{}"),
                    fr(this, "profile", mr(t || {}))
                }
                function bo(t) {
                    if (go.call(this, t),
                    "facebook.com" != this.providerId)
                        throw Error("Invalid provider ID!")
                }
                function yo(t) {
                    if (go.call(this, t),
                    "github.com" != this.providerId)
                        throw Error("Invalid provider ID!");
                    fr(this, "username", this.profile && this.profile.login || null)
                }
                function wo(t) {
                    if (go.call(this, t),
                    "google.com" != this.providerId)
                        throw Error("Invalid provider ID!")
                }
                function Io(t) {
                    if (go.call(this, t),
                    "twitter.com" != this.providerId)
                        throw Error("Invalid provider ID!");
                    fr(this, "username", t.screenName || null)
                }
                function To(t) {
                    var e = Vn(t)
                      , n = Un(e, "link")
                      , i = Un(Vn(n), "link");
                    return e = Un(e, "deep_link_id"),
                    Un(Vn(e), "link") || e || i || n || t
                }
                function ko() {}
                function Eo(t, e) {
                    return t.then((function(t) {
                        if (t[gs]) {
                            var n = io(t[gs]);
                            if (!n || e != n.f)
                                throw new Ar("user-mismatch");
                            return t
                        }
                        throw new Ar("user-mismatch")
                    }
                    )).s((function(t) {
                        throw t && t.code && t.code == _r + "user-not-found" ? new Ar("user-mismatch") : t
                    }
                    ))
                }
                function So(t, e) {
                    if (!e)
                        throw new Ar("internal-error","failed to construct a credential");
                    this.a = e,
                    fr(this, "providerId", t),
                    fr(this, "signInMethod", t)
                }
                function Ao(t) {
                    return {
                        pendingToken: t.a,
                        requestUri: "http://localhost"
                    }
                }
                function No(t) {
                    if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken)
                        try {
                            return new So(t.providerId,t.pendingToken)
                        } catch (e) {}
                    return null
                }
                function _o(t, e, n) {
                    if (this.a = null,
                    e.idToken || e.accessToken)
                        e.idToken && fr(this, "idToken", e.idToken),
                        e.accessToken && fr(this, "accessToken", e.accessToken),
                        e.nonce && !e.pendingToken && fr(this, "nonce", e.nonce),
                        e.pendingToken && (this.a = e.pendingToken);
                    else {
                        if (!e.oauthToken || !e.oauthTokenSecret)
                            throw new Ar("internal-error","failed to construct a credential");
                        fr(this, "accessToken", e.oauthToken),
                        fr(this, "secret", e.oauthTokenSecret)
                    }
                    fr(this, "providerId", t),
                    fr(this, "signInMethod", n)
                }
                function Oo(t) {
                    var e = {};
                    return t.idToken && (e.id_token = t.idToken),
                    t.accessToken && (e.access_token = t.accessToken),
                    t.secret && (e.oauth_token_secret = t.secret),
                    e.providerId = t.providerId,
                    t.nonce && !t.a && (e.nonce = t.nonce),
                    e = {
                        postBody: $n(e).toString(),
                        requestUri: "http://localhost"
                    },
                    t.a && (delete e.postBody,
                    e.pendingToken = t.a),
                    e
                }
                function Ro(t) {
                    if (t && t.providerId && t.signInMethod) {
                        var e = {
                            idToken: t.oauthIdToken,
                            accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                            oauthTokenSecret: t.oauthTokenSecret,
                            oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                            nonce: t.nonce,
                            pendingToken: t.pendingToken
                        };
                        try {
                            return new _o(t.providerId,e,t.signInMethod)
                        } catch (n) {}
                    }
                    return null
                }
                function Po(t, e) {
                    this.Fc = e || [],
                    lr(this, {
                        providerId: t,
                        isOAuthProvider: !0
                    }),
                    this.zb = {},
                    this.cb = (fo(t) || {}).Oa || null,
                    this.ab = null
                }
                function Do(t) {
                    if ("string" !== typeof t || 0 != t.indexOf("saml."))
                        throw new Ar("argument-error",'SAML provider IDs must be prefixed with "saml."');
                    Po.call(this, t, [])
                }
                function Co(t) {
                    Po.call(this, t, co),
                    this.a = []
                }
                function Lo() {
                    Co.call(this, "facebook.com")
                }
                function xo(t) {
                    if (!t)
                        throw new Ar("argument-error","credential failed: expected 1 argument (the OAuth access token).");
                    var e = t;
                    return w(t) && (e = t.accessToken),
                    (new Lo).credential({
                        accessToken: e
                    })
                }
                function Mo() {
                    Co.call(this, "github.com")
                }
                function jo(t) {
                    if (!t)
                        throw new Ar("argument-error","credential failed: expected 1 argument (the OAuth access token).");
                    var e = t;
                    return w(t) && (e = t.accessToken),
                    (new Mo).credential({
                        accessToken: e
                    })
                }
                function Uo() {
                    Co.call(this, "google.com"),
                    this.wa("profile")
                }
                function Vo(t, e) {
                    var n = t;
                    return w(t) && (n = t.idToken,
                    e = t.accessToken),
                    (new Uo).credential({
                        idToken: n,
                        accessToken: e
                    })
                }
                function Fo() {
                    Po.call(this, "twitter.com", uo)
                }
                function Ko(t, e) {
                    var n = t;
                    if (w(n) || (n = {
                        oauthToken: t,
                        oauthTokenSecret: e
                    }),
                    !n.oauthToken || !n.oauthTokenSecret)
                        throw new Ar("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");
                    return new _o("twitter.com",n,"twitter.com")
                }
                function qo(t, e, n) {
                    this.a = t,
                    this.c = e,
                    fr(this, "providerId", "password"),
                    fr(this, "signInMethod", n === Bo.EMAIL_LINK_SIGN_IN_METHOD ? Bo.EMAIL_LINK_SIGN_IN_METHOD : Bo.EMAIL_PASSWORD_SIGN_IN_METHOD)
                }
                function Ho(t) {
                    return t && t.email && t.password ? new qo(t.email,t.password,t.signInMethod) : null
                }
                function Bo() {
                    lr(this, {
                        providerId: "password",
                        isOAuthProvider: !1
                    })
                }
                function Go(t, e) {
                    if (e = Wo(e),
                    !e)
                        throw new Ar("argument-error","Invalid email link!");
                    return new qo(t,e.code,Bo.EMAIL_LINK_SIGN_IN_METHOD)
                }
                function Wo(t) {
                    return t = To(t),
                    (t = Ur(t)) && t.operation === br ? t : null
                }
                function Xo(t) {
                    if (!(t.Ua && t.Ta || t.Fa && t.ba))
                        throw new Ar("internal-error");
                    this.a = t,
                    fr(this, "providerId", "phone"),
                    fr(this, "signInMethod", "phone")
                }
                function Jo(t) {
                    if (t && "phone" === t.providerId && (t.verificationId && t.verificationCode || t.temporaryProof && t.phoneNumber)) {
                        var e = {};
                        return K(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], (function(n) {
                            t[n] && (e[n] = t[n])
                        }
                        )),
                        new Xo(e)
                    }
                    return null
                }
                function Yo(t) {
                    return t.a.Fa && t.a.ba ? {
                        temporaryProof: t.a.Fa,
                        phoneNumber: t.a.ba
                    } : {
                        sessionInfo: t.a.Ua,
                        code: t.a.Ta
                    }
                }
                function zo(t) {
                    try {
                        this.a = t || i.a.auth()
                    } catch (e) {
                        throw new Ar("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
                    }
                    lr(this, {
                        providerId: "phone",
                        isOAuthProvider: !1
                    })
                }
                function $o(t, e) {
                    if (!t)
                        throw new Ar("missing-verification-id");
                    if (!e)
                        throw new Ar("missing-verification-code");
                    return new Xo({
                        Ua: t,
                        Ta: e
                    })
                }
                function Zo(t) {
                    if (t.temporaryProof && t.phoneNumber)
                        return new Xo({
                            Fa: t.temporaryProof,
                            ba: t.phoneNumber
                        });
                    var e = t && t.providerId;
                    if (!e || "password" === e)
                        return null;
                    var n = t && t.oauthAccessToken
                      , i = t && t.oauthTokenSecret
                      , r = t && t.nonce
                      , o = t && t.oauthIdToken
                      , a = t && t.pendingToken;
                    try {
                        switch (e) {
                        case "google.com":
                            return Vo(o, n);
                        case "facebook.com":
                            return xo(n);
                        case "github.com":
                            return jo(n);
                        case "twitter.com":
                            return Ko(n, i);
                        default:
                            return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new So(e,a) : new _o(e,{
                                pendingToken: a,
                                idToken: t.oauthIdToken,
                                accessToken: t.oauthAccessToken
                            },e) : new Co(e).credential({
                                idToken: o,
                                accessToken: n,
                                rawNonce: r
                            }) : null
                        }
                    } catch (s) {
                        return null
                    }
                }
                function Qo(t) {
                    if (!t.isOAuthProvider)
                        throw new Ar("invalid-oauth-provider")
                }
                function ta(t, e, n, i, r, o, a) {
                    if (this.c = t,
                    this.b = e || null,
                    this.g = n || null,
                    this.f = i || null,
                    this.i = o || null,
                    this.h = a || null,
                    this.a = r || null,
                    !this.g && !this.a)
                        throw new Ar("invalid-auth-event");
                    if (this.g && this.a)
                        throw new Ar("invalid-auth-event");
                    if (this.g && !this.f)
                        throw new Ar("invalid-auth-event")
                }
                function ea(t) {
                    return t = t || {},
                    t.type ? new ta(t.type,t.eventId,t.urlResponse,t.sessionId,t.error && Nr(t.error),t.postBody,t.tenantId) : null
                }
                function na() {
                    this.b = null,
                    this.a = []
                }
                _(go, mo),
                _(bo, go),
                _(yo, go),
                _(wo, go),
                _(Io, go),
                So.prototype.na = function(t) {
                    return qs(t, Ao(this))
                }
                ,
                So.prototype.b = function(t, e) {
                    var n = Ao(this);
                    return n.idToken = e,
                    Hs(t, n)
                }
                ,
                So.prototype.f = function(t, e) {
                    return Eo(Bs(t, Ao(this)), e)
                }
                ,
                So.prototype.A = function() {
                    return {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod,
                        pendingToken: this.a
                    }
                }
                ,
                _o.prototype.na = function(t) {
                    return qs(t, Oo(this))
                }
                ,
                _o.prototype.b = function(t, e) {
                    var n = Oo(this);
                    return n.idToken = e,
                    Hs(t, n)
                }
                ,
                _o.prototype.f = function(t, e) {
                    var n = Oo(this);
                    return Eo(Bs(t, n), e)
                }
                ,
                _o.prototype.A = function() {
                    var t = {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod
                    };
                    return this.idToken && (t.oauthIdToken = this.idToken),
                    this.accessToken && (t.oauthAccessToken = this.accessToken),
                    this.secret && (t.oauthTokenSecret = this.secret),
                    this.nonce && (t.nonce = this.nonce),
                    this.a && (t.pendingToken = this.a),
                    t
                }
                ,
                Po.prototype.Ea = function(t) {
                    return this.zb = Q(t),
                    this
                }
                ,
                _(Do, Po),
                _(Co, Po),
                Co.prototype.wa = function(t) {
                    return W(this.a, t) || this.a.push(t),
                    this
                }
                ,
                Co.prototype.Hb = function() {
                    return z(this.a)
                }
                ,
                Co.prototype.credential = function(t, e) {
                    var n;
                    if (n = w(t) ? {
                        idToken: t.idToken || null,
                        accessToken: t.accessToken || null,
                        nonce: t.rawNonce || null
                    } : {
                        idToken: t || null,
                        accessToken: e || null
                    },
                    !n.idToken && !n.accessToken)
                        throw new Ar("argument-error","credential failed: must provide the ID token and/or the access token.");
                    return new _o(this.providerId,n,this.providerId)
                }
                ,
                _(Lo, Co),
                fr(Lo, "PROVIDER_ID", "facebook.com"),
                fr(Lo, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"),
                _(Mo, Co),
                fr(Mo, "PROVIDER_ID", "github.com"),
                fr(Mo, "GITHUB_SIGN_IN_METHOD", "github.com"),
                _(Uo, Co),
                fr(Uo, "PROVIDER_ID", "google.com"),
                fr(Uo, "GOOGLE_SIGN_IN_METHOD", "google.com"),
                _(Fo, Po),
                fr(Fo, "PROVIDER_ID", "twitter.com"),
                fr(Fo, "TWITTER_SIGN_IN_METHOD", "twitter.com"),
                qo.prototype.na = function(t) {
                    return this.signInMethod == Bo.EMAIL_LINK_SIGN_IN_METHOD ? yu(t, Zs, {
                        email: this.a,
                        oobCode: this.c
                    }) : yu(t, vu, {
                        email: this.a,
                        password: this.c
                    })
                }
                ,
                qo.prototype.b = function(t, e) {
                    return this.signInMethod == Bo.EMAIL_LINK_SIGN_IN_METHOD ? yu(t, Qs, {
                        idToken: e,
                        email: this.a,
                        oobCode: this.c
                    }) : yu(t, cu, {
                        idToken: e,
                        email: this.a,
                        password: this.c
                    })
                }
                ,
                qo.prototype.f = function(t, e) {
                    return Eo(this.na(t), e)
                }
                ,
                qo.prototype.A = function() {
                    return {
                        email: this.a,
                        password: this.c,
                        signInMethod: this.signInMethod
                    }
                }
                ,
                lr(Bo, {
                    PROVIDER_ID: "password"
                }),
                lr(Bo, {
                    EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
                }),
                lr(Bo, {
                    EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
                }),
                Xo.prototype.na = function(t) {
                    return t.Va(Yo(this))
                }
                ,
                Xo.prototype.b = function(t, e) {
                    var n = Yo(this);
                    return n.idToken = e,
                    yu(t, gu, n)
                }
                ,
                Xo.prototype.f = function(t, e) {
                    var n = Yo(this);
                    return n.operation = "REAUTH",
                    t = yu(t, bu, n),
                    Eo(t, e)
                }
                ,
                Xo.prototype.A = function() {
                    var t = {
                        providerId: "phone"
                    };
                    return this.a.Ua && (t.verificationId = this.a.Ua),
                    this.a.Ta && (t.verificationCode = this.a.Ta),
                    this.a.Fa && (t.temporaryProof = this.a.Fa),
                    this.a.ba && (t.phoneNumber = this.a.ba),
                    t
                }
                ,
                zo.prototype.Va = function(t, e) {
                    var n = this.a.b;
                    return oe(e.verify()).then((function(i) {
                        if (!h(i))
                            throw new Ar("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                        switch (e.type) {
                        case "recaptcha":
                            return js(n, {
                                phoneNumber: t,
                                recaptchaToken: i
                            }).then((function(t) {
                                return "function" === typeof e.reset && e.reset(),
                                t
                            }
                            ), (function(t) {
                                throw "function" === typeof e.reset && e.reset(),
                                t
                            }
                            ));
                        default:
                            throw new Ar("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                        }
                    }
                    ))
                }
                ,
                lr(zo, {
                    PROVIDER_ID: "phone"
                }),
                lr(zo, {
                    PHONE_SIGN_IN_METHOD: "phone"
                }),
                ta.prototype.getUid = function() {
                    var t = [];
                    return t.push(this.c),
                    this.b && t.push(this.b),
                    this.f && t.push(this.f),
                    this.h && t.push(this.h),
                    t.join("-")
                }
                ,
                ta.prototype.R = function() {
                    return this.h
                }
                ,
                ta.prototype.A = function() {
                    return {
                        type: this.c,
                        eventId: this.b,
                        urlResponse: this.g,
                        sessionId: this.f,
                        postBody: this.i,
                        tenantId: this.h,
                        error: this.a && this.a.A()
                    }
                }
                ;
                var ia, ra = null;
                function oa(t) {
                    var e = ra;
                    e.a.push(t),
                    e.b || (e.b = function(t) {
                        for (var n = 0; n < e.a.length; n++)
                            e.a[n](t)
                    }
                    ,
                    t = qi("universalLinks.subscribe", c),
                    "function" === typeof t && t(null, e.b))
                }
                function aa(t) {
                    var e = "unauthorized-domain"
                      , n = void 0
                      , i = Vn(t);
                    t = i.b,
                    i = i.f,
                    "chrome-extension" == i ? n = Ht("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = Ht("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment",
                    Ar.call(this, e, n)
                }
                function sa(t, e, n) {
                    Ar.call(this, t, n),
                    t = e || {},
                    t.Ab && fr(this, "email", t.Ab),
                    t.ba && fr(this, "phoneNumber", t.ba),
                    t.credential && fr(this, "credential", t.credential),
                    t.Qb && fr(this, "tenantId", t.Qb)
                }
                function ua(t) {
                    if (t.code) {
                        var e = t.code || "";
                        0 == e.indexOf(_r) && (e = e.substring(_r.length));
                        var n = {
                            credential: Zo(t),
                            Qb: t.tenantId
                        };
                        if (t.email)
                            n.Ab = t.email;
                        else if (t.phoneNumber)
                            n.ba = t.phoneNumber;
                        else if (!n.credential)
                            return new Ar(e,t.message || void 0);
                        return new sa(e,n,t.message)
                    }
                    return null
                }
                function ca() {}
                function ha(t) {
                    return t.c || (t.c = t.b())
                }
                function fa() {}
                function la(t) {
                    if (!t.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                        for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) {
                            var i = e[n];
                            try {
                                return new ActiveXObject(i),
                                t.f = i
                            } catch (r) {}
                        }
                        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                    }
                    return t.f
                }
                function da() {}
                function pa() {
                    this.a = new XDomainRequest,
                    this.readyState = 0,
                    this.onreadystatechange = null,
                    this.responseType = this.responseText = this.response = "",
                    this.status = -1,
                    this.statusText = "",
                    this.a.onload = S(this.fc, this),
                    this.a.onerror = S(this.Ib, this),
                    this.a.onprogress = S(this.gc, this),
                    this.a.ontimeout = S(this.kc, this)
                }
                function va(t, e) {
                    t.readyState = e,
                    t.onreadystatechange && t.onreadystatechange()
                }
                function ma(t, e, n) {
                    this.reset(t, e, n, void 0, void 0)
                }
                _(aa, Ar),
                _(sa, Ar),
                sa.prototype.A = function() {
                    var t = {
                        code: this.code,
                        message: this.message
                    };
                    this.email && (t.email = this.email),
                    this.phoneNumber && (t.phoneNumber = this.phoneNumber),
                    this.tenantId && (t.tenantId = this.tenantId);
                    var e = this.credential && this.credential.A();
                    return e && et(t, e),
                    t
                }
                ,
                sa.prototype.toJSON = function() {
                    return this.A()
                }
                ,
                ca.prototype.c = null,
                _(fa, ca),
                fa.prototype.a = function() {
                    var t = la(this);
                    return t ? new ActiveXObject(t) : new XMLHttpRequest
                }
                ,
                fa.prototype.b = function() {
                    var t = {};
                    return la(this) && (t[0] = !0,
                    t[1] = !0),
                    t
                }
                ,
                ia = new fa,
                _(da, ca),
                da.prototype.a = function() {
                    var t = new XMLHttpRequest;
                    if ("withCredentials"in t)
                        return t;
                    if ("undefined" != typeof XDomainRequest)
                        return new pa;
                    throw Error("Unsupported browser")
                }
                ,
                da.prototype.b = function() {
                    return {}
                }
                ,
                e = pa.prototype,
                e.open = function(t, e, n) {
                    if (null != n && !n)
                        throw Error("Only async requests are supported.");
                    this.a.open(t, e)
                }
                ,
                e.send = function(t) {
                    if (t) {
                        if ("string" != typeof t)
                            throw Error("Only string data is supported");
                        this.a.send(t)
                    } else
                        this.a.send()
                }
                ,
                e.abort = function() {
                    this.a.abort()
                }
                ,
                e.setRequestHeader = function() {}
                ,
                e.getResponseHeader = function(t) {
                    return "content-type" == t.toLowerCase() ? this.a.contentType : ""
                }
                ,
                e.fc = function() {
                    this.status = 200,
                    this.response = this.responseText = this.a.responseText,
                    va(this, 4)
                }
                ,
                e.Ib = function() {
                    this.status = 500,
                    this.response = this.responseText = "",
                    va(this, 4)
                }
                ,
                e.kc = function() {
                    this.Ib()
                }
                ,
                e.gc = function() {
                    this.status = 200,
                    va(this, 1)
                }
                ,
                e.getAllResponseHeaders = function() {
                    return "content-type: " + this.a.contentType
                }
                ,
                ma.prototype.a = null;
                function ga(t) {
                    this.f = t,
                    this.b = this.c = this.a = null
                }
                function ba(t, e) {
                    this.name = t,
                    this.value = e
                }
                ma.prototype.reset = function(t, e, n, i, r) {
                    "number" == typeof r || 0,
                    i || N(),
                    delete this.a
                }
                ,
                ba.prototype.toString = function() {
                    return this.name
                }
                ;
                var ya = new ba("SEVERE",1e3)
                  , wa = new ba("WARNING",900)
                  , Ia = new ba("CONFIG",700)
                  , Ta = new ba("FINE",500);
                function ka(t) {
                    return t.c ? t.c : t.a ? ka(t.a) : (D("Root logger has no level set."),
                    null)
                }
                ga.prototype.log = function(t, e, n) {
                    if (t.value >= ka(this).value)
                        for (y(e) && (e = e()),
                        t = new ma(t,String(e),this.f),
                        n && (t.a = n),
                        n = this; n; )
                            n = n.a
                }
                ;
                var Ea = {}
                  , Sa = null;
                function Aa(t) {
                    var e;
                    if (Sa || (Sa = new ga(""),
                    Ea[""] = Sa,
                    Sa.c = Ia),
                    !(e = Ea[t])) {
                        e = new ga(t);
                        var n = t.lastIndexOf(".")
                          , i = t.substr(n + 1);
                        n = Aa(t.substr(0, n)),
                        n.b || (n.b = {}),
                        n.b[i] = e,
                        e.a = n,
                        Ea[t] = e
                    }
                    return e
                }
                function Na(t, e) {
                    t && t.log(Ta, e, void 0)
                }
                function _a(t) {
                    this.f = t
                }
                function Oa(t) {
                    yn.call(this),
                    this.o = t,
                    this.readyState = Ra,
                    this.status = 0,
                    this.responseType = this.responseText = this.response = this.statusText = "",
                    this.onreadystatechange = null,
                    this.i = new Headers,
                    this.b = null,
                    this.m = "GET",
                    this.g = "",
                    this.a = !1,
                    this.h = Aa("goog.net.FetchXmlHttp"),
                    this.l = this.c = this.f = null
                }
                _(_a, ca),
                _a.prototype.a = function() {
                    return new Oa(this.f)
                }
                ,
                _a.prototype.b = function(t) {
                    return function() {
                        return t
                    }
                }({}),
                _(Oa, yn);
                var Ra = 0;
                function Pa(t) {
                    t.c.read().then(t.ec.bind(t)).catch(t.Ma.bind(t))
                }
                function Da(t, e) {
                    e && t.f && (t.status = t.f.status,
                    t.statusText = t.f.statusText),
                    t.readyState = 4,
                    t.f = null,
                    t.c = null,
                    t.l = null,
                    Ca(t)
                }
                function Ca(t) {
                    t.onreadystatechange && t.onreadystatechange.call(t)
                }
                function La(t) {
                    yn.call(this),
                    this.headers = new _n,
                    this.B = t || null,
                    this.c = !1,
                    this.w = this.a = null,
                    this.h = this.O = this.l = "",
                    this.f = this.J = this.i = this.I = !1,
                    this.g = 0,
                    this.o = null,
                    this.m = xa,
                    this.v = this.P = !1
                }
                e = Oa.prototype,
                e.open = function(t, e) {
                    if (this.readyState != Ra)
                        throw this.abort(),
                        Error("Error reopening a connection");
                    this.m = t,
                    this.g = e,
                    this.readyState = 1,
                    Ca(this)
                }
                ,
                e.send = function(t) {
                    if (1 != this.readyState)
                        throw this.abort(),
                        Error("need to call open() first. ");
                    this.a = !0;
                    var e = {
                        headers: this.i,
                        method: this.m,
                        credentials: void 0,
                        cache: void 0
                    };
                    t && (e.body = t),
                    this.o.fetch(new Request(this.g,e)).then(this.jc.bind(this), this.Ma.bind(this))
                }
                ,
                e.abort = function() {
                    this.response = this.responseText = "",
                    this.i = new Headers,
                    this.status = 0,
                    this.c && this.c.cancel("Request was aborted."),
                    1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1,
                    Da(this, !1)),
                    this.readyState = Ra
                }
                ,
                e.jc = function(t) {
                    this.a && (this.f = t,
                    this.b || (this.b = t.headers,
                    this.readyState = 2,
                    Ca(this)),
                    this.a && (this.readyState = 3,
                    Ca(this),
                    this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.hc.bind(this), this.Ma.bind(this)) : "undefined" !== typeof c.ReadableStream && "body"in t ? (this.response = this.responseText = "",
                    this.c = t.body.getReader(),
                    this.l = new TextDecoder,
                    Pa(this)) : t.text().then(this.ic.bind(this), this.Ma.bind(this)))))
                }
                ,
                e.ec = function(t) {
                    if (this.a) {
                        var e = this.l.decode(t.value ? t.value : new Uint8Array(0), {
                            stream: !t.done
                        });
                        e && (this.response = this.responseText += e),
                        t.done ? Da(this, !0) : Ca(this),
                        3 == this.readyState && Pa(this)
                    }
                }
                ,
                e.ic = function(t) {
                    this.a && (this.response = this.responseText = t,
                    Da(this, !0))
                }
                ,
                e.hc = function(t) {
                    this.a && (this.response = t,
                    Da(this, !0))
                }
                ,
                e.Ma = function(t) {
                    var e = this.h;
                    e && e.log(wa, "Failed to fetch url " + this.g, t instanceof Error ? t : Error(t)),
                    this.a && Da(this, !0)
                }
                ,
                e.setRequestHeader = function(t, e) {
                    this.i.append(t, e)
                }
                ,
                e.getResponseHeader = function(t) {
                    return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.h) && t.log(wa, "Attempting to get response header but no headers have been received for url: " + this.g, void 0),
                    "")
                }
                ,
                e.getAllResponseHeaders = function() {
                    if (!this.b) {
                        var t = this.h;
                        return t && t.log(wa, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0),
                        ""
                    }
                    t = [];
                    for (var e = this.b.entries(), n = e.next(); !n.done; )
                        n = n.value,
                        t.push(n[0] + ": " + n[1]),
                        n = e.next();
                    return t.join("\r\n")
                }
                ,
                _(La, yn);
                var xa = "";
                La.prototype.b = Aa("goog.net.XhrIo");
                var Ma = /^https?$/i
                  , ja = ["POST", "PUT"];
                function Ua(t, e, n, i, r) {
                    if (t.a)
                        throw Error("[goog.net.XhrIo] Object is active with another request=" + t.l + "; newUri=" + e);
                    n = n ? n.toUpperCase() : "GET",
                    t.l = e,
                    t.h = "",
                    t.O = n,
                    t.I = !1,
                    t.c = !0,
                    t.a = t.B ? t.B.a() : ia.a(),
                    t.w = t.B ? ha(t.B) : ha(ia),
                    t.a.onreadystatechange = S(t.Lb, t);
                    try {
                        Na(t.b, Ya(t, "Opening Xhr")),
                        t.J = !0,
                        t.a.open(n, String(e), !0),
                        t.J = !1
                    } catch (a) {
                        return Na(t.b, Ya(t, "Error opening Xhr: " + a.message)),
                        void Ka(t, a)
                    }
                    e = i || "";
                    var o = new _n(t.headers);
                    r && Nn(r, (function(t, e) {
                        o.set(e, t)
                    }
                    )),
                    r = G(o.X()),
                    i = c.FormData && e instanceof c.FormData,
                    !W(ja, n) || r || i || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"),
                    o.forEach((function(t, e) {
                        this.a.setRequestHeader(e, t)
                    }
                    ), t),
                    t.m && (t.a.responseType = t.m),
                    "withCredentials"in t.a && t.a.withCredentials !== t.P && (t.a.withCredentials = t.P);
                    try {
                        Ga(t),
                        0 < t.g && (t.v = Va(t.a),
                        Na(t.b, Ya(t, "Will abort after " + t.g + "ms if incomplete, xhr2 " + t.v)),
                        t.v ? (t.a.timeout = t.g,
                        t.a.ontimeout = S(t.Ga, t)) : t.o = kn(t.Ga, t.g, t)),
                        Na(t.b, Ya(t, "Sending request")),
                        t.i = !0,
                        t.a.send(e),
                        t.i = !1
                    } catch (a) {
                        Na(t.b, Ya(t, "Send error: " + a.message)),
                        Ka(t, a)
                    }
                }
                function Va(t) {
                    return Pe && qe(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout
                }
                function Fa(t) {
                    return "content-type" == t.toLowerCase()
                }
                function Ka(t, e) {
                    t.c = !1,
                    t.a && (t.f = !0,
                    t.a.abort(),
                    t.f = !1),
                    t.h = e,
                    qa(t),
                    Ba(t)
                }
                function qa(t) {
                    t.I || (t.I = !0,
                    t.dispatchEvent("complete"),
                    t.dispatchEvent("error"))
                }
                function Ha(t) {
                    if (t.c && "undefined" != typeof u)
                        if (t.w[1] && 4 == Wa(t) && 2 == Xa(t))
                            Na(t.b, Ya(t, "Local request error detected and ignored"));
                        else if (t.i && 4 == Wa(t))
                            kn(t.Lb, 0, t);
                        else if (t.dispatchEvent("readystatechange"),
                        4 == Wa(t)) {
                            Na(t.b, Ya(t, "Request complete")),
                            t.c = !1;
                            try {
                                var e, n = Xa(t);
                                t: switch (n) {
                                case 200:
                                case 201:
                                case 202:
                                case 204:
                                case 206:
                                case 304:
                                case 1223:
                                    var i = !0;
                                    break t;
                                default:
                                    i = !1
                                }
                                if (!(e = i)) {
                                    var r;
                                    if (r = 0 === n) {
                                        var o = String(t.l).match(Pn)[1] || null;
                                        if (!o && c.self && c.self.location) {
                                            var a = c.self.location.protocol;
                                            o = a.substr(0, a.length - 1)
                                        }
                                        r = !Ma.test(o ? o.toLowerCase() : "")
                                    }
                                    e = r
                                }
                                if (e)
                                    t.dispatchEvent("complete"),
                                    t.dispatchEvent("success");
                                else {
                                    try {
                                        var s = 2 < Wa(t) ? t.a.statusText : ""
                                    } catch (h) {
                                        Na(t.b, "Can not get status: " + h.message),
                                        s = ""
                                    }
                                    t.h = s + " [" + Xa(t) + "]",
                                    qa(t)
                                }
                            } finally {
                                Ba(t)
                            }
                        }
                }
                function Ba(t, e) {
                    if (t.a) {
                        Ga(t);
                        var n = t.a
                          , i = t.w[0] ? p : null;
                        t.a = null,
                        t.w = null,
                        e || t.dispatchEvent("ready");
                        try {
                            n.onreadystatechange = i
                        } catch (r) {
                            (t = t.b) && t.log(ya, "Problem encountered resetting onreadystatechange: " + r.message, void 0)
                        }
                    }
                }
                function Ga(t) {
                    t.a && t.v && (t.a.ontimeout = null),
                    t.o && (c.clearTimeout(t.o),
                    t.o = null)
                }
                function Wa(t) {
                    return t.a ? t.a.readyState : 0
                }
                function Xa(t) {
                    try {
                        return 2 < Wa(t) ? t.a.status : -1
                    } catch (e) {
                        return -1
                    }
                }
                function Ja(t) {
                    try {
                        return t.a ? t.a.responseText : ""
                    } catch (e) {
                        return Na(t.b, "Can not get responseText: " + e.message),
                        ""
                    }
                }
                function Ya(t, e) {
                    return e + " [" + t.O + " " + t.l + " " + Xa(t) + "]"
                }
                function za(t) {
                    var e = cs;
                    this.g = [],
                    this.v = e,
                    this.o = t || null,
                    this.f = this.a = !1,
                    this.c = void 0,
                    this.u = this.w = this.i = !1,
                    this.h = 0,
                    this.b = null,
                    this.l = 0
                }
                function $a(t, e, n) {
                    t.a = !0,
                    t.c = n,
                    t.f = !e,
                    ns(t)
                }
                function Za(t) {
                    if (t.a) {
                        if (!t.u)
                            throw new is(t);
                        t.u = !1
                    }
                }
                function Qa(t, e) {
                    ts(t, null, e, void 0)
                }
                function ts(t, e, n, i) {
                    t.g.push([e, n, i]),
                    t.a && ns(t)
                }
                function es(t) {
                    return B(t.g, (function(t) {
                        return y(t[1])
                    }
                    ))
                }
                function ns(t) {
                    if (t.h && t.a && es(t)) {
                        var e = t.h
                          , n = as[e];
                        n && (c.clearTimeout(n.a),
                        delete as[e]),
                        t.h = 0
                    }
                    t.b && (t.b.l--,
                    delete t.b),
                    e = t.c;
                    for (var i = n = !1; t.g.length && !t.i; ) {
                        var r = t.g.shift()
                          , o = r[0]
                          , a = r[1];
                        if (r = r[2],
                        o = t.f ? a : o)
                            try {
                                var s = o.call(r || t.o, e);
                                void 0 !== s && (t.f = t.f && (s == e || s instanceof Error),
                                t.c = e = s),
                                (O(e) || "function" === typeof c.Promise && e instanceof c.Promise) && (i = !0,
                                t.i = !0)
                            } catch (u) {
                                e = u,
                                t.f = !0,
                                es(t) || (n = !0)
                            }
                    }
                    t.c = e,
                    i && (s = S(t.m, t, !0),
                    i = S(t.m, t, !1),
                    e instanceof za ? (ts(e, s, i),
                    e.w = !0) : e.then(s, i)),
                    n && (e = new os(e),
                    as[e.a] = e,
                    t.h = e.a)
                }
                function is() {
                    R.call(this)
                }
                function rs() {
                    R.call(this)
                }
                function os(t) {
                    this.a = c.setTimeout(S(this.c, this), 0),
                    this.b = t
                }
                e = La.prototype,
                e.Ga = function() {
                    "undefined" != typeof u && this.a && (this.h = "Timed out after " + this.g + "ms, aborting",
                    Na(this.b, Ya(this, this.h)),
                    this.dispatchEvent("timeout"),
                    this.abort(8))
                }
                ,
                e.abort = function() {
                    this.a && this.c && (Na(this.b, Ya(this, "Aborting")),
                    this.c = !1,
                    this.f = !0,
                    this.a.abort(),
                    this.f = !1,
                    this.dispatchEvent("complete"),
                    this.dispatchEvent("abort"),
                    Ba(this))
                }
                ,
                e.xa = function() {
                    this.a && (this.c && (this.c = !1,
                    this.f = !0,
                    this.a.abort(),
                    this.f = !1),
                    Ba(this, !0)),
                    La.qb.xa.call(this)
                }
                ,
                e.Lb = function() {
                    this.ta || (this.J || this.i || this.f ? Ha(this) : this.yc())
                }
                ,
                e.yc = function() {
                    Ha(this)
                }
                ,
                e.getResponse = function() {
                    try {
                        if (!this.a)
                            return null;
                        if ("response"in this.a)
                            return this.a.response;
                        switch (this.m) {
                        case xa:
                        case "text":
                            return this.a.responseText;
                        case "arraybuffer":
                            if ("mozResponseArrayBuffer"in this.a)
                                return this.a.mozResponseArrayBuffer
                        }
                        var t = this.b;
                        return t && t.log(ya, "Response type " + this.m + " is not supported on this browser", void 0),
                        null
                    } catch (e) {
                        return Na(this.b, "Can not get response: " + e.message),
                        null
                    }
                }
                ,
                za.prototype.cancel = function(t) {
                    if (this.a)
                        this.c instanceof za && this.c.cancel();
                    else {
                        if (this.b) {
                            var e = this.b;
                            delete this.b,
                            t ? e.cancel(t) : (e.l--,
                            0 >= e.l && e.cancel())
                        }
                        this.v ? this.v.call(this.o, this) : this.u = !0,
                        this.a || (t = new rs(this),
                        Za(this),
                        $a(this, !1, t))
                    }
                }
                ,
                za.prototype.m = function(t, e) {
                    this.i = !1,
                    $a(this, t, e)
                }
                ,
                za.prototype.then = function(t, e, n) {
                    var i, r, o = new Zt((function(t, e) {
                        i = t,
                        r = e
                    }
                    ));
                    return ts(this, i, (function(t) {
                        t instanceof rs ? o.cancel() : r(t)
                    }
                    )),
                    o.then(t, e, n)
                }
                ,
                za.prototype.$goog_Thenable = !0,
                _(is, R),
                is.prototype.message = "Deferred has already fired",
                is.prototype.name = "AlreadyCalledError",
                _(rs, R),
                rs.prototype.message = "Deferred was canceled",
                rs.prototype.name = "CanceledError",
                os.prototype.c = function() {
                    throw delete as[this.a],
                    this.b
                }
                ;
                var as = {};
                function ss(t) {
                    var e = {}
                      , n = e.document || document
                      , i = ut(t).toString()
                      , r = document.createElement("SCRIPT")
                      , o = {
                        Nb: r,
                        Ga: void 0
                    }
                      , a = new za(o)
                      , s = null
                      , u = null != e.timeout ? e.timeout : 5e3;
                    return 0 < u && (s = window.setTimeout((function() {
                        hs(r, !0);
                        var t = new ds(ls,"Timeout reached for loading script " + i);
                        Za(a),
                        $a(a, !1, t)
                    }
                    ), u),
                    o.Ga = s),
                    r.onload = r.onreadystatechange = function() {
                        r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (hs(r, e.gd || !1, s),
                        Za(a),
                        $a(a, !0, null))
                    }
                    ,
                    r.onerror = function() {
                        hs(r, !0, s);
                        var t = new ds(fs,"Error while loading script " + i);
                        Za(a),
                        $a(a, !1, t)
                    }
                    ,
                    o = e.attributes || {},
                    et(o, {
                        type: "text/javascript",
                        charset: "UTF-8"
                    }),
                    ai(r, o),
                    qt(r, t),
                    us(n).appendChild(r),
                    a
                }
                function us(t) {
                    var e;
                    return (e = (t || document).getElementsByTagName("HEAD")) && 0 != e.length ? e[0] : t.documentElement
                }
                function cs() {
                    if (this && this.Nb) {
                        var t = this.Nb;
                        t && "SCRIPT" == t.tagName && hs(t, !0, this.Ga)
                    }
                }
                function hs(t, e, n) {
                    null != n && c.clearTimeout(n),
                    t.onload = p,
                    t.onerror = p,
                    t.onreadystatechange = p,
                    e && window.setTimeout((function() {
                        t && t.parentNode && t.parentNode.removeChild(t)
                    }
                    ), 0)
                }
                var fs = 0
                  , ls = 1;
                function ds(t, e) {
                    var n = "Jsloader error (code #" + t + ")";
                    e && (n += ": " + e),
                    R.call(this, n),
                    this.code = t
                }
                function ps(t) {
                    this.f = t
                }
                function vs(t, e, n) {
                    if (this.c = t,
                    t = e || {},
                    this.l = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token",
                    this.u = t.secureTokenTimeout || bs,
                    this.g = Q(t.secureTokenHeaders || ys),
                    this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                    this.i = t.firebaseTimeout || ws,
                    this.a = Q(t.firebaseHeaders || Is),
                    n && (this.a["X-Client-Version"] = n,
                    this.g["X-Client-Version"] = n),
                    n = "Node" == Ci(),
                    n = c.XMLHttpRequest || n && i.a.INTERNAL.node && i.a.INTERNAL.node.XMLHttpRequest,
                    !n && !Di())
                        throw new Ar("internal-error","The XMLHttpRequest compatibility library was not found.");
                    this.f = void 0,
                    Di() ? this.f = new _a(self) : Li() ? this.f = new ps(n) : this.f = new da,
                    this.b = null
                }
                _(ds, R),
                _(ps, ca),
                ps.prototype.a = function() {
                    return new this.f
                }
                ,
                ps.prototype.b = function() {
                    return {}
                }
                ;
                var ms, gs = "idToken", bs = new tr(3e4,6e4), ys = {
                    "Content-Type": "application/x-www-form-urlencoded"
                }, ws = new tr(3e4,6e4), Is = {
                    "Content-Type": "application/json"
                };
                function Ts(t, e) {
                    e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"]
                }
                function ks(t, e) {
                    e ? (t.a["X-Client-Version"] = e,
                    t.g["X-Client-Version"] = e) : (delete t.a["X-Client-Version"],
                    delete t.g["X-Client-Version"])
                }
                function Es(t, e, n, i, r, o, a) {
                    Ii() || Di() ? t = S(t.o, t) : (ms || (ms = new Zt((function(t, e) {
                        Ns(t, e)
                    }
                    ))),
                    t = S(t.m, t)),
                    t(e, n, i, r, o, a)
                }
                vs.prototype.R = function() {
                    return this.b
                }
                ,
                vs.prototype.o = function(t, e, n, i, r, o) {
                    if (Di() && ("undefined" === typeof c.fetch || "undefined" === typeof c.Headers || "undefined" === typeof c.Request))
                        throw new Ar("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
                    var a = new La(this.f);
                    if (o) {
                        a.g = Math.max(0, o);
                        var s = setTimeout((function() {
                            a.dispatchEvent("timeout")
                        }
                        ), o)
                    }
                    wn(a, "complete", (function() {
                        s && clearTimeout(s);
                        var t = null;
                        try {
                            t = JSON.parse(Ja(this)) || null
                        } catch (n) {
                            t = null
                        }
                        e && e(t)
                    }
                    )),
                    In(a, "ready", (function() {
                        s && clearTimeout(s),
                        Ae(this)
                    }
                    )),
                    In(a, "timeout", (function() {
                        s && clearTimeout(s),
                        Ae(this),
                        e && e(null)
                    }
                    )),
                    Ua(a, t, n, i, r)
                }
                ;
                var Ss = new nt(ot,"https://apis.google.com/js/client.js?onload=%{onload}")
                  , As = "__fcb" + Math.floor(1e6 * Math.random()).toString();
                function Ns(t, e) {
                    if (((window.gapi || {}).client || {}).request)
                        t();
                    else {
                        c[As] = function() {
                            ((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED"))
                        }
                        ;
                        var n = ct(Ss, {
                            onload: As
                        });
                        Qa(ss(n), (function() {
                            e(Error("CORS_UNSUPPORTED"))
                        }
                        ))
                    }
                }
                function _s(t, e) {
                    return new Zt((function(n, i) {
                        "refresh_token" == e.grant_type && e.refresh_token || "authorization_code" == e.grant_type && e.code ? Es(t, t.l + "?key=" + encodeURIComponent(t.c), (function(t) {
                            t ? t.error ? i(Iu(t)) : t.access_token && t.refresh_token ? n(t) : i(new Ar("internal-error")) : i(new Ar("network-request-failed"))
                        }
                        ), "POST", $n(e).toString(), t.g, t.u.get()) : i(new Ar("internal-error"))
                    }
                    ))
                }
                function Os(t, e, n, i, r, o) {
                    var a = Vn(t.h + e);
                    jn(a, "key", t.c),
                    o && jn(a, "cb", N().toString());
                    var s = "GET" == n;
                    if (s)
                        for (var u in i)
                            i.hasOwnProperty(u) && jn(a, u, i[u]);
                    return new Zt((function(e, o) {
                        Es(t, a.toString(), (function(t) {
                            t ? t.error ? o(Iu(t, r || {})) : e(t) : o(new Ar("network-request-failed"))
                        }
                        ), n, s ? void 0 : fi(Yi(i)), t.a, t.i.get())
                    }
                    ))
                }
                function Rs(t) {
                    if (t = t.email,
                    !h(t) || !Ni.test(t))
                        throw new Ar("invalid-email")
                }
                function Ps(t) {
                    "email"in t && Rs(t)
                }
                function Ds(t, e) {
                    return yu(t, Ys, {
                        identifier: e,
                        continueUri: Gi() ? bi() : "http://localhost"
                    }).then((function(t) {
                        return t.signinMethods || []
                    }
                    ))
                }
                function Cs(t) {
                    return yu(t, ru, {}).then((function(t) {
                        return t.authorizedDomains || []
                    }
                    ))
                }
                function Ls(t) {
                    if (!t[gs])
                        throw new Ar("internal-error")
                }
                function xs(t) {
                    if (t.phoneNumber || t.temporaryProof) {
                        if (!t.phoneNumber || !t.temporaryProof)
                            throw new Ar("internal-error")
                    } else {
                        if (!t.sessionInfo)
                            throw new Ar("missing-verification-id");
                        if (!t.code)
                            throw new Ar("missing-verification-code")
                    }
                }
                vs.prototype.m = function(t, e, n, i, r) {
                    var o = this;
                    ms.then((function() {
                        window.gapi.client.setApiKey(o.c);
                        var a = window.gapi.auth.getToken();
                        window.gapi.auth.setToken(null),
                        window.gapi.client.request({
                            path: t,
                            method: n,
                            body: i,
                            headers: r,
                            authType: "none",
                            callback: function(t) {
                                window.gapi.auth.setToken(a),
                                e && e(t)
                            }
                        })
                    }
                    )).s((function(t) {
                        e && e({
                            error: {
                                message: t && t.message || "CORS_UNSUPPORTED"
                            }
                        })
                    }
                    ))
                }
                ,
                vs.prototype.ob = function() {
                    return yu(this, hu, {})
                }
                ,
                vs.prototype.rb = function(t, e) {
                    return yu(this, uu, {
                        idToken: t,
                        email: e
                    })
                }
                ,
                vs.prototype.sb = function(t, e) {
                    return yu(this, cu, {
                        idToken: t,
                        password: e
                    })
                }
                ;
                var Ms = {
                    displayName: "DISPLAY_NAME",
                    photoUrl: "PHOTO_URL"
                };
                function js(t, e) {
                    return yu(t, su, e)
                }
                function Us(t, e, n) {
                    return yu(t, $s, {
                        idToken: e,
                        deleteProvider: n
                    })
                }
                function Vs(t) {
                    if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken)
                        throw new Ar("internal-error")
                }
                function Fs(t, e) {
                    return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (t = new Yn(t.postBody),
                    Qn(t, "nonce") && (e.nonce = t.get("nonce")))),
                    e
                }
                function Ks(t) {
                    var e = null;
                    if (t.needConfirmation ? (t.code = "account-exists-with-different-credential",
                    e = ua(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use",
                    e = ua(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use",
                    e = ua(t)) : t.errorMessage && (e = wu(t.errorMessage)),
                    e)
                        throw e;
                    if (!t[gs])
                        throw new Ar("internal-error")
                }
                function qs(t, e) {
                    return e.returnIdpCredential = !0,
                    yu(t, fu, e)
                }
                function Hs(t, e) {
                    return e.returnIdpCredential = !0,
                    yu(t, du, e)
                }
                function Bs(t, e) {
                    return e.returnIdpCredential = !0,
                    e.autoCreate = !1,
                    yu(t, lu, e)
                }
                function Gs(t) {
                    if (!t.oobCode)
                        throw new Ar("invalid-action-code")
                }
                e = vs.prototype,
                e.tb = function(t, e) {
                    var n = {
                        idToken: t
                    }
                      , i = [];
                    return $(Ms, (function(t, r) {
                        var o = e[r];
                        null === o ? i.push(t) : r in e && (n[r] = o)
                    }
                    )),
                    i.length && (n.deleteAttribute = i),
                    yu(this, uu, n)
                }
                ,
                e.kb = function(t, e) {
                    return t = {
                        requestType: "PASSWORD_RESET",
                        email: t
                    },
                    et(t, e),
                    yu(this, iu, t)
                }
                ,
                e.lb = function(t, e) {
                    return t = {
                        requestType: "EMAIL_SIGNIN",
                        email: t
                    },
                    et(t, e),
                    yu(this, eu, t)
                }
                ,
                e.jb = function(t, e) {
                    return t = {
                        requestType: "VERIFY_EMAIL",
                        idToken: t
                    },
                    et(t, e),
                    yu(this, nu, t)
                }
                ,
                e.Va = function(t) {
                    return yu(this, mu, t)
                }
                ,
                e.$a = function(t, e) {
                    return yu(this, au, {
                        oobCode: t,
                        newPassword: e
                    })
                }
                ,
                e.Ka = function(t) {
                    return yu(this, Xs, {
                        oobCode: t
                    })
                }
                ,
                e.Xa = function(t) {
                    return yu(this, Ws, {
                        oobCode: t
                    })
                }
                ;
                var Ws = {
                    endpoint: "setAccountInfo",
                    D: Gs,
                    fa: "email",
                    F: !0
                }
                  , Xs = {
                    endpoint: "resetPassword",
                    D: Gs,
                    K: function(t) {
                        var e = t.requestType;
                        if (!e || !t.email && "EMAIL_SIGNIN" != e)
                            throw new Ar("internal-error")
                    },
                    F: !0
                }
                  , Js = {
                    endpoint: "signupNewUser",
                    D: function(t) {
                        if (Rs(t),
                        !t.password)
                            throw new Ar("weak-password")
                    },
                    K: Ls,
                    T: !0,
                    F: !0
                }
                  , Ys = {
                    endpoint: "createAuthUri",
                    F: !0
                }
                  , zs = {
                    endpoint: "deleteAccount",
                    V: ["idToken"]
                }
                  , $s = {
                    endpoint: "setAccountInfo",
                    V: ["idToken", "deleteProvider"],
                    D: function(t) {
                        if (!g(t.deleteProvider))
                            throw new Ar("internal-error")
                    }
                }
                  , Zs = {
                    endpoint: "emailLinkSignin",
                    V: ["email", "oobCode"],
                    D: Rs,
                    K: Ls,
                    T: !0,
                    F: !0
                }
                  , Qs = {
                    endpoint: "emailLinkSignin",
                    V: ["idToken", "email", "oobCode"],
                    D: Rs,
                    K: Ls,
                    T: !0
                }
                  , tu = {
                    endpoint: "getAccountInfo"
                }
                  , eu = {
                    endpoint: "getOobConfirmationCode",
                    V: ["requestType"],
                    D: function(t) {
                        if ("EMAIL_SIGNIN" != t.requestType)
                            throw new Ar("internal-error");
                        Rs(t)
                    },
                    fa: "email",
                    F: !0
                }
                  , nu = {
                    endpoint: "getOobConfirmationCode",
                    V: ["idToken", "requestType"],
                    D: function(t) {
                        if ("VERIFY_EMAIL" != t.requestType)
                            throw new Ar("internal-error")
                    },
                    fa: "email",
                    F: !0
                }
                  , iu = {
                    endpoint: "getOobConfirmationCode",
                    V: ["requestType"],
                    D: function(t) {
                        if ("PASSWORD_RESET" != t.requestType)
                            throw new Ar("internal-error");
                        Rs(t)
                    },
                    fa: "email",
                    F: !0
                }
                  , ru = {
                    wb: !0,
                    endpoint: "getProjectConfig",
                    Kb: "GET"
                }
                  , ou = {
                    wb: !0,
                    endpoint: "getRecaptchaParam",
                    Kb: "GET",
                    K: function(t) {
                        if (!t.recaptchaSiteKey)
                            throw new Ar("internal-error")
                    }
                }
                  , au = {
                    endpoint: "resetPassword",
                    D: Gs,
                    fa: "email",
                    F: !0
                }
                  , su = {
                    endpoint: "sendVerificationCode",
                    V: ["phoneNumber", "recaptchaToken"],
                    fa: "sessionInfo",
                    F: !0
                }
                  , uu = {
                    endpoint: "setAccountInfo",
                    V: ["idToken"],
                    D: Ps,
                    T: !0
                }
                  , cu = {
                    endpoint: "setAccountInfo",
                    V: ["idToken"],
                    D: function(t) {
                        if (Ps(t),
                        !t.password)
                            throw new Ar("weak-password")
                    },
                    K: Ls,
                    T: !0
                }
                  , hu = {
                    endpoint: "signupNewUser",
                    K: Ls,
                    T: !0,
                    F: !0
                }
                  , fu = {
                    endpoint: "verifyAssertion",
                    D: Vs,
                    Qa: Fs,
                    K: Ks,
                    T: !0,
                    F: !0
                }
                  , lu = {
                    endpoint: "verifyAssertion",
                    D: Vs,
                    Qa: Fs,
                    K: function(t) {
                        if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage)
                            throw new Ar("user-not-found");
                        if (t.errorMessage)
                            throw wu(t.errorMessage);
                        if (!t[gs])
                            throw new Ar("internal-error")
                    },
                    T: !0,
                    F: !0
                }
                  , du = {
                    endpoint: "verifyAssertion",
                    D: function(t) {
                        if (Vs(t),
                        !t.idToken)
                            throw new Ar("internal-error")
                    },
                    Qa: Fs,
                    K: Ks,
                    T: !0
                }
                  , pu = {
                    endpoint: "verifyCustomToken",
                    D: function(t) {
                        if (!t.token)
                            throw new Ar("invalid-custom-token")
                    },
                    K: Ls,
                    T: !0,
                    F: !0
                }
                  , vu = {
                    endpoint: "verifyPassword",
                    D: function(t) {
                        if (Rs(t),
                        !t.password)
                            throw new Ar("wrong-password")
                    },
                    K: Ls,
                    T: !0,
                    F: !0
                }
                  , mu = {
                    endpoint: "verifyPhoneNumber",
                    D: xs,
                    K: Ls,
                    F: !0
                }
                  , gu = {
                    endpoint: "verifyPhoneNumber",
                    D: function(t) {
                        if (!t.idToken)
                            throw new Ar("internal-error");
                        xs(t)
                    },
                    K: function(t) {
                        if (t.temporaryProof)
                            throw t.code = "credential-already-in-use",
                            ua(t);
                        Ls(t)
                    }
                }
                  , bu = {
                    Yb: {
                        USER_NOT_FOUND: "user-not-found"
                    },
                    endpoint: "verifyPhoneNumber",
                    D: xs,
                    K: Ls,
                    F: !0
                };
                function yu(t, e, n) {
                    if (!vr(n, e.V))
                        return ae(new Ar("internal-error"));
                    var i, r = e.Kb || "POST";
                    return oe(n).then(e.D).then((function() {
                        return e.T && (n.returnSecureToken = !0),
                        e.F && t.b && "undefined" === typeof n.tenantId && (n.tenantId = t.b),
                        Os(t, e.endpoint, r, n, e.Yb, e.wb || !1)
                    }
                    )).then((function(t) {
                        return i = t,
                        e.Qa ? e.Qa(n, i) : i
                    }
                    )).then(e.K).then((function() {
                        if (!e.fa)
                            return i;
                        if (!(e.fa in i))
                            throw new Ar("internal-error");
                        return i[e.fa]
                    }
                    ))
                }
                function wu(t) {
                    return Iu({
                        error: {
                            errors: [{
                                message: t
                            }],
                            code: 400,
                            message: t
                        }
                    })
                }
                function Iu(t, e) {
                    var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || ""
                      , i = {
                        keyInvalid: "invalid-api-key",
                        ipRefererBlocked: "app-not-authorized"
                    };
                    if (n = i[n] ? new Ar(i[n]) : null)
                        return n;
                    for (var r in n = t.error && t.error.message || "",
                    i = {
                        INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                        CREDENTIAL_MISMATCH: "custom-token-mismatch",
                        MISSING_CUSTOM_TOKEN: "internal-error",
                        INVALID_IDENTIFIER: "invalid-email",
                        MISSING_CONTINUE_URI: "internal-error",
                        INVALID_EMAIL: "invalid-email",
                        INVALID_PASSWORD: "wrong-password",
                        USER_DISABLED: "user-disabled",
                        MISSING_PASSWORD: "internal-error",
                        EMAIL_EXISTS: "email-already-in-use",
                        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                        INVALID_IDP_RESPONSE: "invalid-credential",
                        INVALID_PENDING_TOKEN: "invalid-credential",
                        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                        MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                        INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                        INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                        INVALID_SENDER: "invalid-sender",
                        EMAIL_NOT_FOUND: "user-not-found",
                        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                        EXPIRED_OOB_CODE: "expired-action-code",
                        INVALID_OOB_CODE: "invalid-action-code",
                        MISSING_OOB_CODE: "internal-error",
                        INVALID_PROVIDER_ID: "invalid-provider-id",
                        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                        INVALID_ID_TOKEN: "invalid-user-token",
                        TOKEN_EXPIRED: "user-token-expired",
                        USER_NOT_FOUND: "user-token-expired",
                        CORS_UNSUPPORTED: "cors-unsupported",
                        DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                        INVALID_APP_ID: "invalid-app-id",
                        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                        WEAK_PASSWORD: "weak-password",
                        OPERATION_NOT_ALLOWED: "operation-not-allowed",
                        USER_CANCELLED: "user-cancelled",
                        CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                        INVALID_APP_CREDENTIAL: "invalid-app-credential",
                        INVALID_CODE: "invalid-verification-code",
                        INVALID_PHONE_NUMBER: "invalid-phone-number",
                        INVALID_SESSION_INFO: "invalid-verification-id",
                        INVALID_TEMPORARY_PROOF: "invalid-credential",
                        MISSING_APP_CREDENTIAL: "missing-app-credential",
                        MISSING_CODE: "missing-verification-code",
                        MISSING_PHONE_NUMBER: "missing-phone-number",
                        MISSING_SESSION_INFO: "missing-verification-id",
                        QUOTA_EXCEEDED: "quota-exceeded",
                        SESSION_EXPIRED: "code-expired",
                        REJECTED_CREDENTIAL: "rejected-credential",
                        INVALID_CONTINUE_URI: "invalid-continue-uri",
                        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                        MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                        INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                        INVALID_CERT_HASH: "invalid-cert-hash",
                        UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                        INVALID_TENANT_ID: "invalid-tenant-id",
                        ADMIN_ONLY_OPERATION: "admin-restricted-operation"
                    },
                    et(i, e || {}),
                    e = (e = n.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < e.length ? e[1] : void 0,
                    i)
                        if (0 === n.indexOf(r))
                            return new Ar(i[r],e);
                    return !e && t && (e = Ji(t)),
                    new Ar("internal-error",e)
                }
                function Tu(t) {
                    this.b = t,
                    this.a = null,
                    this.fb = ku(this)
                }
                function ku(t) {
                    return Ru().then((function() {
                        return new Zt((function(e, n) {
                            qi("gapi.iframes.getContext")().open({
                                where: document.body,
                                url: t.b,
                                messageHandlersFilter: qi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                                attributes: {
                                    style: {
                                        position: "absolute",
                                        top: "-100px",
                                        width: "1px",
                                        height: "1px"
                                    }
                                },
                                dontclear: !0
                            }, (function(i) {
                                function r() {
                                    clearTimeout(o),
                                    e()
                                }
                                t.a = i,
                                t.a.restyle({
                                    setHideOnLeave: !1
                                });
                                var o = setTimeout((function() {
                                    n(Error("Network Error"))
                                }
                                ), _u.get());
                                i.ping(r).then(r, (function() {
                                    n(Error("Network Error"))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                function Eu(t, e) {
                    return t.fb.then((function() {
                        return new Zt((function(n) {
                            t.a.send(e.type, e, n, qi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                        }
                        ))
                    }
                    ))
                }
                function Su(t, e) {
                    t.fb.then((function() {
                        t.a.register("authEvent", e, qi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                    }
                    ))
                }
                var Au = new nt(ot,"https://apis.google.com/js/api.js?onload=%{onload}")
                  , Nu = new tr(3e4,6e4)
                  , _u = new tr(5e3,15e3)
                  , Ou = null;
                function Ru() {
                    return Ou || (Ou = new Zt((function(t, e) {
                        function n() {
                            Qi(),
                            qi("gapi.load")("gapi.iframes", {
                                callback: t,
                                ontimeout: function() {
                                    Qi(),
                                    e(Error("Network Error"))
                                },
                                timeout: Nu.get()
                            })
                        }
                        if (qi("gapi.iframes.Iframe"))
                            t();
                        else if (qi("gapi.load"))
                            n();
                        else {
                            var i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                            c[i] = function() {
                                qi("gapi.load") ? n() : e(Error("Network Error"))
                            }
                            ,
                            i = ct(Au, {
                                onload: i
                            }),
                            oe(ss(i)).s((function() {
                                e(Error("Network Error"))
                            }
                            ))
                        }
                    }
                    )).s((function(t) {
                        throw Ou = null,
                        t
                    }
                    )))
                }
                function Pu(t, e, n) {
                    this.i = t,
                    this.g = e,
                    this.h = n,
                    this.f = null,
                    this.a = Fn(this.i, "/__/auth/iframe"),
                    jn(this.a, "apiKey", this.g),
                    jn(this.a, "appName", this.h),
                    this.b = null,
                    this.c = []
                }
                function Du(t, e, n, i, r) {
                    this.o = t,
                    this.m = e,
                    this.c = n,
                    this.u = i,
                    this.i = this.g = this.l = null,
                    this.a = r,
                    this.h = this.f = null
                }
                function Cu(t) {
                    try {
                        return i.a.app(t).auth().Aa()
                    } catch (e) {
                        return []
                    }
                }
                function Lu(t, e, n, i, r) {
                    this.u = t,
                    this.f = e,
                    this.b = n,
                    this.c = i || null,
                    this.h = r || null,
                    this.m = this.o = this.v = null,
                    this.g = [],
                    this.l = this.a = null
                }
                function xu(t) {
                    var e = bi();
                    return Cs(t).then((function(t) {
                        t: {
                            var n = Vn(e)
                              , i = n.f;
                            n = n.b;
                            for (var r = 0; r < t.length; r++) {
                                var o = t[r]
                                  , a = n
                                  , s = i;
                                if (0 == o.indexOf("chrome-extension://") ? a = Vn(o).b == a && "chrome-extension" == s : "http" != s && "https" != s ? a = !1 : Ai.test(o) ? a = a == o : (o = o.split(".").join("\\."),
                                a = new RegExp("^(.+\\." + o + "|" + o + ")$","i").test(a)),
                                a) {
                                    t = !0;
                                    break t
                                }
                            }
                            t = !1
                        }
                        if (!t)
                            throw new aa(bi())
                    }
                    ))
                }
                function Mu(t) {
                    return t.l ? t.l : (t.l = _i().then((function() {
                        if (!t.o) {
                            var e = t.c
                              , n = t.h
                              , i = Cu(t.b)
                              , r = new Pu(t.u,t.f,t.b);
                            r.f = e,
                            r.b = n,
                            r.c = z(i || []),
                            t.o = r.toString()
                        }
                        t.i = new Tu(t.o),
                        Vu(t)
                    }
                    )),
                    t.l)
                }
                function ju(t) {
                    return t.m || (t.v = t.c ? Fi(t.c, Cu(t.b)) : null,
                    t.m = new vs(t.f,so(t.h),t.v)),
                    t.m
                }
                function Uu(t, e, n, i, r, o, a, s, u, c, h) {
                    return t = new Du(t,e,n,i,r),
                    t.l = o,
                    t.g = a,
                    t.i = s,
                    t.b = Q(u || null),
                    t.f = c,
                    t.nb(h).toString()
                }
                function Vu(t) {
                    if (!t.i)
                        throw Error("IfcHandler must be initialized!");
                    Su(t.i, (function(e) {
                        var n = {};
                        if (e && e.authEvent) {
                            var i = !1;
                            for (e = ea(e.authEvent),
                            n = 0; n < t.g.length; n++)
                                i = t.g[n](e) || i;
                            return n = {},
                            n.status = i ? "ACK" : "ERROR",
                            oe(n)
                        }
                        return n.status = "ERROR",
                        oe(n)
                    }
                    ))
                }
                function Fu(t) {
                    var e = {
                        type: "webStorageSupport"
                    };
                    return Mu(t).then((function() {
                        return Eu(t.i, e)
                    }
                    )).then((function(t) {
                        if (t && t.length && "undefined" !== typeof t[0].webStorageSupport)
                            return t[0].webStorageSupport;
                        throw Error()
                    }
                    ))
                }
                function Ku(t) {
                    if (this.a = t || i.a.INTERNAL.reactNative && i.a.INTERNAL.reactNative.AsyncStorage,
                    !this.a)
                        throw new Ar("internal-error","The React Native compatibility library was not found.");
                    this.type = "asyncStorage"
                }
                function qu(t) {
                    this.b = t,
                    this.a = {},
                    this.f = S(this.c, this)
                }
                Pu.prototype.toString = function() {
                    return this.f ? jn(this.a, "v", this.f) : Zn(this.a.a, "v"),
                    this.b ? jn(this.a, "eid", this.b) : Zn(this.a.a, "eid"),
                    this.c.length ? jn(this.a, "fw", this.c.join(",")) : Zn(this.a.a, "fw"),
                    this.a.toString()
                }
                ,
                Du.prototype.nb = function(t) {
                    return this.h = t,
                    this
                }
                ,
                Du.prototype.toString = function() {
                    var t = Fn(this.o, "/__/auth/handler");
                    if (jn(t, "apiKey", this.m),
                    jn(t, "appName", this.c),
                    jn(t, "authType", this.u),
                    this.a.isOAuthProvider) {
                        var e = this.a;
                        try {
                            var n = i.a.app(this.c).auth().ha()
                        } catch (u) {
                            n = null
                        }
                        for (var r in e.ab = n,
                        jn(t, "providerId", this.a.providerId),
                        e = this.a,
                        n = Yi(e.zb),
                        n)
                            n[r] = n[r].toString();
                        r = e.Fc,
                        n = Q(n);
                        for (var o = 0; o < r.length; o++) {
                            var a = r[o];
                            a in n && delete n[a]
                        }
                        e.cb && e.ab && !n[e.cb] && (n[e.cb] = e.ab),
                        Z(n) || jn(t, "customParameters", Ji(n))
                    }
                    if ("function" === typeof this.a.Hb && (e = this.a.Hb(),
                    e.length && jn(t, "scopes", e.join(","))),
                    this.l ? jn(t, "redirectUrl", this.l) : Zn(t.a, "redirectUrl"),
                    this.g ? jn(t, "eventId", this.g) : Zn(t.a, "eventId"),
                    this.i ? jn(t, "v", this.i) : Zn(t.a, "v"),
                    this.b)
                        for (var s in this.b)
                            this.b.hasOwnProperty(s) && !Un(t, s) && jn(t, s, this.b[s]);
                    return this.h ? jn(t, "tid", this.h) : Zn(t.a, "tid"),
                    this.f ? jn(t, "eid", this.f) : Zn(t.a, "eid"),
                    s = Cu(this.c),
                    s.length && jn(t, "fw", s.join(",")),
                    t.toString()
                }
                ,
                e = Lu.prototype,
                e.Fb = function(t, e, n) {
                    var i = new Ar("popup-closed-by-user")
                      , r = new Ar("web-storage-unsupported")
                      , o = this
                      , a = !1;
                    return this.ia().then((function() {
                        Fu(o).then((function(n) {
                            n || (t && ki(t),
                            e(r),
                            a = !0)
                        }
                        ))
                    }
                    )).s((function() {}
                    )).then((function() {
                        if (!a)
                            return Si(t)
                    }
                    )).then((function() {
                        if (!a)
                            return En(n).then((function() {
                                e(i)
                            }
                            ))
                    }
                    ))
                }
                ,
                e.Ob = function() {
                    var t = Ki();
                    return !Xi(t) && !Zi(t)
                }
                ,
                e.Jb = function() {
                    return !1
                }
                ,
                e.Db = function(t, e, n, i, r, o, a, s) {
                    if (!t)
                        return ae(new Ar("popup-blocked"));
                    if (a && !Xi())
                        return this.ia().s((function(e) {
                            ki(t),
                            r(e)
                        }
                        )),
                        i(),
                        oe();
                    this.a || (this.a = xu(ju(this)));
                    var u = this;
                    return this.a.then((function() {
                        var e = u.ia().s((function(e) {
                            throw ki(t),
                            r(e),
                            e
                        }
                        ));
                        return i(),
                        e
                    }
                    )).then((function() {
                        if (Qo(n),
                        !a) {
                            var i = Uu(u.u, u.f, u.b, e, n, null, o, u.c, void 0, u.h, s);
                            yi(i, t)
                        }
                    }
                    )).s((function(t) {
                        throw "auth/network-request-failed" == t.code && (u.a = null),
                        t
                    }
                    ))
                }
                ,
                e.Eb = function(t, e, n, i) {
                    this.a || (this.a = xu(ju(this)));
                    var r = this;
                    return this.a.then((function() {
                        Qo(e);
                        var o = Uu(r.u, r.f, r.b, t, e, bi(), n, r.c, void 0, r.h, i);
                        yi(o)
                    }
                    )).s((function(t) {
                        throw "auth/network-request-failed" == t.code && (r.a = null),
                        t
                    }
                    ))
                }
                ,
                e.ia = function() {
                    var t = this;
                    return Mu(this).then((function() {
                        return t.i.fb
                    }
                    )).s((function() {
                        throw t.a = null,
                        new Ar("network-request-failed")
                    }
                    ))
                }
                ,
                e.Rb = function() {
                    return !0
                }
                ,
                e.ya = function(t) {
                    this.g.push(t)
                }
                ,
                e.La = function(t) {
                    J(this.g, (function(e) {
                        return e == t
                    }
                    ))
                }
                ,
                e = Ku.prototype,
                e.get = function(t) {
                    return oe(this.a.getItem(t)).then((function(t) {
                        return t && zi(t)
                    }
                    ))
                }
                ,
                e.set = function(t, e) {
                    return oe(this.a.setItem(t, Ji(e)))
                }
                ,
                e.S = function(t) {
                    return oe(this.a.removeItem(t))
                }
                ,
                e.$ = function() {}
                ,
                e.ea = function() {}
                ;
                var Hu, Bu = [];
                function Gu() {
                    var t = Di() ? self : null;
                    if (K(Bu, (function(n) {
                        n.b == t && (e = n)
                    }
                    )),
                    !e) {
                        var e = new qu(t);
                        Bu.push(e)
                    }
                    return e
                }
                function Wu(t, e, n) {
                    Z(t.a) && t.b.addEventListener("message", t.f),
                    "undefined" === typeof t.a[e] && (t.a[e] = []),
                    t.a[e].push(n)
                }
                function Xu(t) {
                    this.a = t
                }
                function Ju(t) {
                    this.c = t,
                    this.b = !1,
                    this.a = []
                }
                function Yu(t, e, n, i) {
                    var r, o, a, s, u = n || {}, c = null;
                    if (t.b)
                        return ae(Error("connection_unavailable"));
                    var h = i ? 800 : 50
                      , f = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
                    return new Zt((function(n, i) {
                        f ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(),
                        f.port1.start(),
                        a = setTimeout((function() {
                            i(Error("unsupported_event"))
                        }
                        ), h),
                        o = function(t) {
                            t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a),
                            s = setTimeout((function() {
                                i(Error("timeout"))
                            }
                            ), 3e3)) : "done" === t.data.status ? (clearTimeout(s),
                            "undefined" !== typeof t.data.response ? n(t.data.response) : i(Error("unknown_error"))) : (clearTimeout(a),
                            clearTimeout(s),
                            i(Error("invalid_response"))))
                        }
                        ,
                        c = {
                            messageChannel: f,
                            onMessage: o
                        },
                        t.a.push(c),
                        f.port1.addEventListener("message", o),
                        t.c.postMessage({
                            eventType: e,
                            eventId: r,
                            data: u
                        }, [f.port2])) : i(Error("connection_unavailable"))
                    }
                    )).then((function(e) {
                        return zu(t, c),
                        e
                    }
                    )).s((function(e) {
                        throw zu(t, c),
                        e
                    }
                    ))
                }
                function zu(t, e) {
                    if (e) {
                        var n = e.messageChannel
                          , i = e.onMessage;
                        n && (n.port1.removeEventListener("message", i),
                        n.port1.close()),
                        J(t.a, (function(t) {
                            return t == e
                        }
                        ))
                    }
                }
                function $u() {
                    if (!ec())
                        throw new Ar("web-storage-unsupported");
                    this.c = {},
                    this.a = [],
                    this.b = 0,
                    this.u = c.indexedDB,
                    this.type = "indexedDB",
                    this.g = this.l = this.f = this.i = null,
                    this.o = !1,
                    this.h = null;
                    var t = this;
                    Di() && self ? (this.l = Gu(),
                    Wu(this.l, "keyChanged", (function(e, n) {
                        return ac(t).then((function(e) {
                            return 0 < e.length && K(t.a, (function(t) {
                                t(e)
                            }
                            )),
                            {
                                keyProcessed: W(e, n.key)
                            }
                        }
                        ))
                    }
                    )),
                    Wu(this.l, "ping", (function() {
                        return oe(["keyChanged"])
                    }
                    ))) : ar().then((function(e) {
                        (t.h = e) && (t.g = new Ju(new Xu(e)),
                        Yu(t.g, "ping", null, !0).then((function(e) {
                            e[0].fulfilled && W(e[0].value, "keyChanged") && (t.o = !0)
                        }
                        )).s((function() {}
                        )))
                    }
                    ))
                }
                function Zu(t) {
                    return new Zt((function(e, n) {
                        var i = t.u.deleteDatabase("firebaseLocalStorageDb");
                        i.onsuccess = function() {
                            e()
                        }
                        ,
                        i.onerror = function(t) {
                            n(Error(t.target.error))
                        }
                    }
                    ))
                }
                function Qu(t) {
                    return new Zt((function(e, n) {
                        var i = t.u.open("firebaseLocalStorageDb", 1);
                        i.onerror = function(t) {
                            try {
                                t.preventDefault()
                            } catch (e) {}
                            n(Error(t.target.error))
                        }
                        ,
                        i.onupgradeneeded = function(t) {
                            t = t.target.result;
                            try {
                                t.createObjectStore("firebaseLocalStorage", {
                                    keyPath: "fbase_key"
                                })
                            } catch (e) {
                                n(e)
                            }
                        }
                        ,
                        i.onsuccess = function(i) {
                            i = i.target.result,
                            i.objectStoreNames.contains("firebaseLocalStorage") ? e(i) : Zu(t).then((function() {
                                return Qu(t)
                            }
                            )).then((function(t) {
                                e(t)
                            }
                            )).s((function(t) {
                                n(t)
                            }
                            ))
                        }
                    }
                    ))
                }
                function tc(t) {
                    return t.m || (t.m = Qu(t)),
                    t.m
                }
                function ec() {
                    try {
                        return !!c.indexedDB
                    } catch (ed) {
                        return !1
                    }
                }
                function nc(t) {
                    return t.objectStore("firebaseLocalStorage")
                }
                function ic(t, e) {
                    return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly")
                }
                function rc(t) {
                    return new Zt((function(e, n) {
                        t.onsuccess = function(t) {
                            t && t.target ? e(t.target.result) : e()
                        }
                        ,
                        t.onerror = function(t) {
                            n(t.target.error)
                        }
                    }
                    ))
                }
                function oc(t, e) {
                    return t.g && t.h && or() === t.h ? Yu(t.g, "keyChanged", {
                        key: e
                    }, t.o).then((function() {}
                    )).s((function() {}
                    )) : oe()
                }
                function ac(t) {
                    return tc(t).then((function(t) {
                        var e = nc(ic(t, !1));
                        return e.getAll ? rc(e.getAll()) : new Zt((function(t, n) {
                            var i = []
                              , r = e.openCursor();
                            r.onsuccess = function(e) {
                                (e = e.target.result) ? (i.push(e.value),
                                e["continue"]()) : t(i)
                            }
                            ,
                            r.onerror = function(t) {
                                n(t.target.error)
                            }
                        }
                        ))
                    }
                    )).then((function(e) {
                        var n = {}
                          , i = [];
                        if (0 == t.b) {
                            for (i = 0; i < e.length; i++)
                                n[e[i].fbase_key] = e[i].value;
                            i = wi(t.c, n),
                            t.c = n
                        }
                        return i
                    }
                    ))
                }
                function sc(t) {
                    function e() {
                        t.f = setTimeout((function() {
                            t.i = ac(t).then((function(e) {
                                0 < e.length && K(t.a, (function(t) {
                                    t(e)
                                }
                                ))
                            }
                            )).then((function() {
                                e()
                            }
                            )).s((function(t) {
                                "STOP_EVENT" != t.message && e()
                            }
                            ))
                        }
                        ), 800)
                    }
                    uc(t),
                    e()
                }
                function uc(t) {
                    t.i && t.i.cancel("STOP_EVENT"),
                    t.f && (clearTimeout(t.f),
                    t.f = null)
                }
                function cc(t) {
                    var e = this
                      , n = null;
                    this.a = [],
                    this.type = "indexedDB",
                    this.c = t,
                    this.b = oe().then((function() {
                        if (ec()) {
                            var t = $i()
                              , i = "__sak" + t;
                            return Hu || (Hu = new $u),
                            n = Hu,
                            n.set(i, t).then((function() {
                                return n.get(i)
                            }
                            )).then((function(e) {
                                if (e !== t)
                                    throw Error("indexedDB not supported!");
                                return n.S(i)
                            }
                            )).then((function() {
                                return n
                            }
                            )).s((function() {
                                return e.c
                            }
                            ))
                        }
                        return e.c
                    }
                    )).then((function(t) {
                        return e.type = t.type,
                        t.$((function(t) {
                            K(e.a, (function(e) {
                                e(t)
                            }
                            ))
                        }
                        )),
                        t
                    }
                    ))
                }
                function hc() {
                    this.a = {},
                    this.type = "inMemory"
                }
                function fc() {
                    if (!dc()) {
                        if ("Node" == Ci())
                            throw new Ar("internal-error","The LocalStorage compatibility library was not found.");
                        throw new Ar("web-storage-unsupported")
                    }
                    this.a = lc() || i.a.INTERNAL.node.localStorage,
                    this.type = "localStorage"
                }
                function lc() {
                    try {
                        var t = c.localStorage
                          , e = $i();
                        return t && (t.setItem(e, "1"),
                        t.removeItem(e)),
                        t
                    } catch (n) {
                        return null
                    }
                }
                function dc() {
                    var t = "Node" == Ci();
                    if (t = lc() || t && i.a.INTERNAL.node && i.a.INTERNAL.node.localStorage,
                    !t)
                        return !1;
                    try {
                        return t.setItem("__sak", "1"),
                        t.removeItem("__sak"),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                function pc() {
                    this.type = "nullStorage"
                }
                function vc() {
                    if (!gc()) {
                        if ("Node" == Ci())
                            throw new Ar("internal-error","The SessionStorage compatibility library was not found.");
                        throw new Ar("web-storage-unsupported")
                    }
                    this.a = mc() || i.a.INTERNAL.node.sessionStorage,
                    this.type = "sessionStorage"
                }
                function mc() {
                    try {
                        var t = c.sessionStorage
                          , e = $i();
                        return t && (t.setItem(e, "1"),
                        t.removeItem(e)),
                        t
                    } catch (n) {
                        return null
                    }
                }
                function gc() {
                    var t = "Node" == Ci();
                    if (t = mc() || t && i.a.INTERNAL.node && i.a.INTERNAL.node.sessionStorage,
                    !t)
                        return !1;
                    try {
                        return t.setItem("__sak", "1"),
                        t.removeItem("__sak"),
                        !0
                    } catch (e) {
                        return !1
                    }
                }
                function bc() {
                    var t = {};
                    t.Browser = Ic,
                    t.Node = Tc,
                    t.ReactNative = kc,
                    t.Worker = Ec,
                    this.a = t[Ci()]
                }
                qu.prototype.c = function(t) {
                    var e = t.data.eventType
                      , n = t.data.eventId
                      , i = this.a[e];
                    if (i && 0 < i.length) {
                        t.ports[0].postMessage({
                            status: "ack",
                            eventId: n,
                            eventType: e,
                            response: null
                        });
                        var r = [];
                        K(i, (function(e) {
                            r.push(oe().then((function() {
                                return e(t.origin, t.data.data)
                            }
                            )))
                        }
                        )),
                        ce(r).then((function(i) {
                            var r = [];
                            K(i, (function(t) {
                                r.push({
                                    fulfilled: t.Gb,
                                    value: t.value,
                                    reason: t.reason ? t.reason.message : void 0
                                })
                            }
                            )),
                            K(r, (function(t) {
                                for (var e in t)
                                    "undefined" === typeof t[e] && delete t[e]
                            }
                            )),
                            t.ports[0].postMessage({
                                status: "done",
                                eventId: n,
                                eventType: e,
                                response: r
                            })
                        }
                        ))
                    }
                }
                ,
                Xu.prototype.postMessage = function(t, e) {
                    this.a.postMessage(t, e)
                }
                ,
                Ju.prototype.close = function() {
                    for (; 0 < this.a.length; )
                        zu(this, this.a[0]);
                    this.b = !0
                }
                ,
                e = $u.prototype,
                e.set = function(t, e) {
                    var n, i = !1, r = this;
                    return tc(this).then((function(e) {
                        return n = e,
                        e = nc(ic(n, !0)),
                        rc(e.get(t))
                    }
                    )).then((function(o) {
                        var a = nc(ic(n, !0));
                        return o ? (o.value = e,
                        rc(a.put(o))) : (r.b++,
                        i = !0,
                        o = {},
                        o.fbase_key = t,
                        o.value = e,
                        rc(a.add(o)))
                    }
                    )).then((function() {
                        return r.c[t] = e,
                        oc(r, t)
                    }
                    )).ka((function() {
                        i && r.b--
                    }
                    ))
                }
                ,
                e.get = function(t) {
                    return tc(this).then((function(e) {
                        return rc(nc(ic(e, !1)).get(t))
                    }
                    )).then((function(t) {
                        return t && t.value
                    }
                    ))
                }
                ,
                e.S = function(t) {
                    var e = !1
                      , n = this;
                    return tc(this).then((function(i) {
                        return e = !0,
                        n.b++,
                        rc(nc(ic(i, !0))["delete"](t))
                    }
                    )).then((function() {
                        return delete n.c[t],
                        oc(n, t)
                    }
                    )).ka((function() {
                        e && n.b--
                    }
                    ))
                }
                ,
                e.$ = function(t) {
                    0 == this.a.length && sc(this),
                    this.a.push(t)
                }
                ,
                e.ea = function(t) {
                    J(this.a, (function(e) {
                        return e == t
                    }
                    )),
                    0 == this.a.length && uc(this)
                }
                ,
                e = cc.prototype,
                e.get = function(t) {
                    return this.b.then((function(e) {
                        return e.get(t)
                    }
                    ))
                }
                ,
                e.set = function(t, e) {
                    return this.b.then((function(n) {
                        return n.set(t, e)
                    }
                    ))
                }
                ,
                e.S = function(t) {
                    return this.b.then((function(e) {
                        return e.S(t)
                    }
                    ))
                }
                ,
                e.$ = function(t) {
                    this.a.push(t)
                }
                ,
                e.ea = function(t) {
                    J(this.a, (function(e) {
                        return e == t
                    }
                    ))
                }
                ,
                e = hc.prototype,
                e.get = function(t) {
                    return oe(this.a[t])
                }
                ,
                e.set = function(t, e) {
                    return this.a[t] = e,
                    oe()
                }
                ,
                e.S = function(t) {
                    return delete this.a[t],
                    oe()
                }
                ,
                e.$ = function() {}
                ,
                e.ea = function() {}
                ,
                e = fc.prototype,
                e.get = function(t) {
                    var e = this;
                    return oe().then((function() {
                        var n = e.a.getItem(t);
                        return zi(n)
                    }
                    ))
                }
                ,
                e.set = function(t, e) {
                    var n = this;
                    return oe().then((function() {
                        var i = Ji(e);
                        null === i ? n.S(t) : n.a.setItem(t, i)
                    }
                    ))
                }
                ,
                e.S = function(t) {
                    var e = this;
                    return oe().then((function() {
                        e.a.removeItem(t)
                    }
                    ))
                }
                ,
                e.$ = function(t) {
                    c.window && an(c.window, "storage", t)
                }
                ,
                e.ea = function(t) {
                    c.window && hn(c.window, "storage", t)
                }
                ,
                e = pc.prototype,
                e.get = function() {
                    return oe(null)
                }
                ,
                e.set = function() {
                    return oe()
                }
                ,
                e.S = function() {
                    return oe()
                }
                ,
                e.$ = function() {}
                ,
                e.ea = function() {}
                ,
                e = vc.prototype,
                e.get = function(t) {
                    var e = this;
                    return oe().then((function() {
                        var n = e.a.getItem(t);
                        return zi(n)
                    }
                    ))
                }
                ,
                e.set = function(t, e) {
                    var n = this;
                    return oe().then((function() {
                        var i = Ji(e);
                        null === i ? n.S(t) : n.a.setItem(t, i)
                    }
                    ))
                }
                ,
                e.S = function(t) {
                    var e = this;
                    return oe().then((function() {
                        e.a.removeItem(t)
                    }
                    ))
                }
                ,
                e.$ = function() {}
                ,
                e.ea = function() {}
                ;
                var yc, wc, Ic = {
                    C: fc,
                    Sa: vc
                }, Tc = {
                    C: fc,
                    Sa: vc
                }, kc = {
                    C: Ku,
                    Sa: pc
                }, Ec = {
                    C: fc,
                    Sa: pc
                }, Sc = {
                    $c: "local",
                    NONE: "none",
                    bd: "session"
                };
                function Ac(t) {
                    var e = new Ar("invalid-persistence-type")
                      , n = new Ar("unsupported-persistence-type");
                    t: {
                        for (i in Sc)
                            if (Sc[i] == t) {
                                var i = !0;
                                break t
                            }
                        i = !1
                    }
                    if (!i || "string" !== typeof t)
                        throw e;
                    switch (Ci()) {
                    case "ReactNative":
                        if ("session" === t)
                            throw n;
                        break;
                    case "Node":
                        if ("none" !== t)
                            throw n;
                        break;
                    default:
                        if (!Hi() && "none" !== t)
                            throw n
                    }
                }
                function Nc() {
                    var t = !(Zi(Ki()) || !Pi())
                      , e = Xi()
                      , n = Hi();
                    this.m = t,
                    this.h = e,
                    this.l = n,
                    this.a = {},
                    yc || (yc = new bc),
                    t = yc;
                    try {
                        this.g = !gi() && rr() || !c.indexedDB ? new t.a.C : new cc(Di() ? new hc : new t.a.C)
                    } catch (i) {
                        this.g = new hc,
                        this.h = !0
                    }
                    try {
                        this.i = new t.a.Sa
                    } catch (i) {
                        this.i = new hc
                    }
                    this.u = new hc,
                    this.f = S(this.Pb, this),
                    this.b = {}
                }
                function _c() {
                    return wc || (wc = new Nc),
                    wc
                }
                function Oc(t, e) {
                    switch (e) {
                    case "session":
                        return t.i;
                    case "none":
                        return t.u;
                    default:
                        return t.g
                    }
                }
                function Rc(t, e) {
                    return "firebase:" + t.name + (e ? ":" + e : "")
                }
                function Pc(t, e, n) {
                    var i = Rc(e, n)
                      , r = Oc(t, e.C);
                    return t.get(e, n).then((function(o) {
                        var a = null;
                        try {
                            a = zi(c.localStorage.getItem(i))
                        } catch (s) {}
                        if (a && !o)
                            return c.localStorage.removeItem(i),
                            t.set(e, a, n);
                        a && o && "localStorage" != r.type && c.localStorage.removeItem(i)
                    }
                    ))
                }
                function Dc(t, e, n) {
                    return n = Rc(e, n),
                    "local" == e.C && (t.b[n] = null),
                    Oc(t, e.C).S(n)
                }
                function Cc(t) {
                    Lc(t),
                    t.c = setInterval((function() {
                        for (var e in t.a) {
                            var n = c.localStorage.getItem(e)
                              , i = t.b[e];
                            n != i && (t.b[e] = n,
                            n = new Je({
                                type: "storage",
                                key: e,
                                target: window,
                                oldValue: i,
                                newValue: n,
                                a: !0
                            }),
                            t.Pb(n))
                        }
                    }
                    ), 1e3)
                }
                function Lc(t) {
                    t.c && (clearInterval(t.c),
                    t.c = null)
                }
                function xc(t) {
                    this.a = t,
                    this.b = _c()
                }
                e = Nc.prototype,
                e.get = function(t, e) {
                    return Oc(this, t.C).get(Rc(t, e))
                }
                ,
                e.set = function(t, e, n) {
                    var i = Rc(t, n)
                      , r = this
                      , o = Oc(this, t.C);
                    return o.set(i, e).then((function() {
                        return o.get(i)
                    }
                    )).then((function(e) {
                        "local" == t.C && (r.b[i] = e)
                    }
                    ))
                }
                ,
                e.addListener = function(t, e, n) {
                    t = Rc(t, e),
                    this.l && (this.b[t] = c.localStorage.getItem(t)),
                    Z(this.a) && (Oc(this, "local").$(this.f),
                    this.h || (gi() || !rr()) && c.indexedDB || !this.l || Cc(this)),
                    this.a[t] || (this.a[t] = []),
                    this.a[t].push(n)
                }
                ,
                e.removeListener = function(t, e, n) {
                    t = Rc(t, e),
                    this.a[t] && (J(this.a[t], (function(t) {
                        return t == n
                    }
                    )),
                    0 == this.a[t].length && delete this.a[t]),
                    Z(this.a) && (Oc(this, "local").ea(this.f),
                    Lc(this))
                }
                ,
                e.Pb = function(t) {
                    if (t && t.f) {
                        var e = t.a.key;
                        if (null == e)
                            for (var n in this.a) {
                                var i = this.b[n];
                                "undefined" === typeof i && (i = null);
                                var r = c.localStorage.getItem(n);
                                r !== i && (this.b[n] = r,
                                this.Za(n))
                            }
                        else if (0 == e.indexOf("firebase:") && this.a[e]) {
                            if ("undefined" !== typeof t.a.a ? Oc(this, "local").ea(this.f) : Lc(this),
                            this.m)
                                if (n = c.localStorage.getItem(e),
                                i = t.a.newValue,
                                i !== n)
                                    null !== i ? c.localStorage.setItem(e, i) : c.localStorage.removeItem(e);
                                else if (this.b[e] === i && "undefined" === typeof t.a.a)
                                    return;
                            var o = this;
                            n = function() {
                                "undefined" === typeof t.a.a && o.b[e] === c.localStorage.getItem(e) || (o.b[e] = c.localStorage.getItem(e),
                                o.Za(e))
                            }
                            ,
                            Pe && Fe && 10 == Fe && c.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n()
                        }
                    } else
                        K(t, S(this.Za, this))
                }
                ,
                e.Za = function(t) {
                    this.a[t] && K(this.a[t], (function(t) {
                        t()
                    }
                    ))
                }
                ;
                var Mc, jc = {
                    name: "authEvent",
                    C: "local"
                };
                function Uc(t) {
                    return t.b.get(jc, t.a).then((function(t) {
                        return ea(t)
                    }
                    ))
                }
                function Vc() {
                    this.a = _c()
                }
                function Fc() {
                    this.b = -1
                }
                function Kc(t, e) {
                    this.b = qc,
                    this.f = c.Uint8Array ? new Uint8Array(this.b) : Array(this.b),
                    this.g = this.c = 0,
                    this.a = [],
                    this.i = t,
                    this.h = e,
                    this.l = c.Int32Array ? new Int32Array(64) : Array(64),
                    void 0 !== Mc || (Mc = c.Int32Array ? new Int32Array(Yc) : Yc),
                    this.reset()
                }
                _(Kc, Fc);
                for (var qc = 64, Hc = qc - 1, Bc = [], Gc = 0; Gc < Hc; Gc++)
                    Bc[Gc] = 0;
                var Wc = Y(128, Bc);
                function Xc(t) {
                    for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length; )
                        n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3],
                        r = 4 * i;
                    for (e = 16; 64 > e; e++) {
                        r = 0 | n[e - 15],
                        i = 0 | n[e - 2];
                        var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0
                          , a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                        n[e] = o + a | 0
                    }
                    i = 0 | t.a[0],
                    r = 0 | t.a[1];
                    var s = 0 | t.a[2]
                      , u = 0 | t.a[3]
                      , c = 0 | t.a[4]
                      , h = 0 | t.a[5]
                      , f = 0 | t.a[6];
                    for (o = 0 | t.a[7],
                    e = 0; 64 > e; e++) {
                        var l = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                        a = c & h ^ ~c & f,
                        o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0,
                        a = a + (0 | Mc[e]) | 0,
                        a = o + (a + (0 | n[e]) | 0) | 0,
                        o = f,
                        f = h,
                        h = c,
                        c = u + a | 0,
                        u = s,
                        s = r,
                        r = i,
                        i = a + l | 0
                    }
                    t.a[0] = t.a[0] + i | 0,
                    t.a[1] = t.a[1] + r | 0,
                    t.a[2] = t.a[2] + s | 0,
                    t.a[3] = t.a[3] + u | 0,
                    t.a[4] = t.a[4] + c | 0,
                    t.a[5] = t.a[5] + h | 0,
                    t.a[6] = t.a[6] + f | 0,
                    t.a[7] = t.a[7] + o | 0
                }
                function Jc(t, e, n) {
                    void 0 === n && (n = e.length);
                    var i = 0
                      , r = t.c;
                    if (h(e))
                        for (; i < n; )
                            t.f[r++] = e.charCodeAt(i++),
                            r == t.b && (Xc(t),
                            r = 0);
                    else {
                        if (!b(e))
                            throw Error("message must be string or array");
                        for (; i < n; ) {
                            var o = e[i++];
                            if (!("number" == typeof o && 0 <= o && 255 >= o && o == (0 | o)))
                                throw Error("message must be a byte array");
                            t.f[r++] = o,
                            r == t.b && (Xc(t),
                            r = 0)
                        }
                    }
                    t.c = r,
                    t.g += n
                }
                Kc.prototype.reset = function() {
                    this.g = this.c = 0,
                    this.a = c.Int32Array ? new Int32Array(this.h) : z(this.h)
                }
                ;
                var Yc = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
                function zc() {
                    Kc.call(this, 8, $c)
                }
                _(zc, Kc);
                var $c = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
                function Zc(t, e, n, i, r) {
                    this.u = t,
                    this.i = e,
                    this.l = n,
                    this.m = i || null,
                    this.o = r || null,
                    this.h = e + ":" + n,
                    this.v = new Vc,
                    this.g = new xc(this.h),
                    this.f = null,
                    this.b = [],
                    this.a = this.c = null
                }
                function Qc(t) {
                    return new Ar("invalid-cordova-configuration",t)
                }
                function th() {
                    for (var t = 20, e = []; 0 < t; )
                        e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                        t--;
                    return e.join("")
                }
                function eh(t) {
                    var e = new zc;
                    Jc(e, t),
                    t = [];
                    var n = 8 * e.g;
                    56 > e.c ? Jc(e, Wc, 56 - e.c) : Jc(e, Wc, e.b - (e.c - 56));
                    for (var i = 63; 56 <= i; i--)
                        e.f[i] = 255 & n,
                        n /= 256;
                    for (Xc(e),
                    i = n = 0; i < e.i; i++)
                        for (var r = 24; 0 <= r; r -= 8)
                            t[n++] = e.a[i] >> r & 255;
                    return zr(t)
                }
                function nh(t, e, n, i, r) {
                    var o = th()
                      , a = new ta(e,i,null,o,new Ar("no-auth-event"),null,r)
                      , s = qi("BuildInfo.packageName", c);
                    if ("string" !== typeof s)
                        throw new Ar("invalid-cordova-configuration");
                    var u = qi("BuildInfo.displayName", c)
                      , h = {};
                    if (Ki().toLowerCase().match(/iphone|ipad|ipod/))
                        h.ibi = s;
                    else {
                        if (!Ki().toLowerCase().match(/android/))
                            return ae(new Ar("operation-not-supported-in-this-environment"));
                        h.apn = s
                    }
                    u && (h.appDisplayName = u),
                    o = eh(o),
                    h.sessionId = o;
                    var f = Uu(t.u, t.i, t.l, e, n, null, i, t.m, h, t.o, r);
                    return t.ia().then((function() {
                        var e = t.h;
                        return t.v.a.set(jc, a.A(), e)
                    }
                    )).then((function() {
                        var e = qi("cordova.plugins.browsertab.isAvailable", c);
                        if ("function" !== typeof e)
                            throw new Ar("invalid-cordova-configuration");
                        var n = null;
                        e((function(e) {
                            if (e) {
                                if (n = qi("cordova.plugins.browsertab.openUrl", c),
                                "function" !== typeof n)
                                    throw new Ar("invalid-cordova-configuration");
                                n(f)
                            } else {
                                if (n = qi("cordova.InAppBrowser.open", c),
                                "function" !== typeof n)
                                    throw new Ar("invalid-cordova-configuration");
                                e = Ki(),
                                t.a = n(f, e.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || e.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes")
                            }
                        }
                        ))
                    }
                    ))
                }
                function ih(t, e) {
                    for (var n = 0; n < t.b.length; n++)
                        try {
                            t.b[n](e)
                        } catch (i) {}
                }
                function rh(t) {
                    return t.f || (t.f = t.ia().then((function() {
                        return new Zt((function(e) {
                            function n(i) {
                                return e(i),
                                t.La(n),
                                !1
                            }
                            t.ya(n),
                            ah(t)
                        }
                        ))
                    }
                    ))),
                    t.f
                }
                function oh(t) {
                    var e = null;
                    return Uc(t.g).then((function(n) {
                        return e = n,
                        n = t.g,
                        Dc(n.b, jc, n.a)
                    }
                    )).then((function() {
                        return e
                    }
                    ))
                }
                function ah(t) {
                    function e(e) {
                        i = !0,
                        r && r.cancel(),
                        oh(t).then((function(i) {
                            var r = n;
                            if (i && e && e.url) {
                                var o = null;
                                r = To(e.url),
                                -1 != r.indexOf("/__/auth/callback") && (o = Vn(r),
                                o = zi(Un(o, "firebaseError") || null),
                                o = (o = "object" === typeof o ? Nr(o) : null) ? new ta(i.c,i.b,null,null,o,null,i.R()) : new ta(i.c,i.b,r,i.f,null,null,i.R())),
                                r = o || n
                            }
                            ih(t, r)
                        }
                        ))
                    }
                    var n = new ta("unknown",null,null,null,new Ar("no-auth-event"))
                      , i = !1
                      , r = En(500).then((function() {
                        return oh(t).then((function() {
                            i || ih(t, n)
                        }
                        ))
                    }
                    ))
                      , o = c.handleOpenURL;
                    c.handleOpenURL = function(t) {
                        if (0 == t.toLowerCase().indexOf(qi("BuildInfo.packageName", c).toLowerCase() + "://") && e({
                            url: t
                        }),
                        "function" === typeof o)
                            try {
                                o(t)
                            } catch (n) {
                                console.error(n)
                            }
                    }
                    ,
                    ra || (ra = new na),
                    oa(e)
                }
                function sh(t) {
                    this.a = t,
                    this.b = _c()
                }
                e = Zc.prototype,
                e.ia = function() {
                    return this.Ba ? this.Ba : this.Ba = Oi().then((function() {
                        if ("function" !== typeof qi("universalLinks.subscribe", c))
                            throw Qc("cordova-universal-links-plugin-fix is not installed");
                        if ("undefined" === typeof qi("BuildInfo.packageName", c))
                            throw Qc("cordova-plugin-buildinfo is not installed");
                        if ("function" !== typeof qi("cordova.plugins.browsertab.openUrl", c))
                            throw Qc("cordova-plugin-browsertab is not installed");
                        if ("function" !== typeof qi("cordova.InAppBrowser.open", c))
                            throw Qc("cordova-plugin-inappbrowser is not installed")
                    }
                    ), (function() {
                        throw new Ar("cordova-not-ready")
                    }
                    ))
                }
                ,
                e.Fb = function(t, e) {
                    return e(new Ar("operation-not-supported-in-this-environment")),
                    oe()
                }
                ,
                e.Db = function() {
                    return ae(new Ar("operation-not-supported-in-this-environment"))
                }
                ,
                e.Rb = function() {
                    return !1
                }
                ,
                e.Ob = function() {
                    return !0
                }
                ,
                e.Jb = function() {
                    return !0
                }
                ,
                e.Eb = function(t, e, n, i) {
                    if (this.c)
                        return ae(new Ar("redirect-operation-pending"));
                    var r = this
                      , o = c.document
                      , a = null
                      , s = null
                      , u = null
                      , h = null;
                    return this.c = oe().then((function() {
                        return Qo(e),
                        rh(r)
                    }
                    )).then((function() {
                        return nh(r, t, e, n, i)
                    }
                    )).then((function() {
                        return new Zt((function(t, e) {
                            s = function() {
                                var e = qi("cordova.plugins.browsertab.close", c);
                                return t(),
                                "function" === typeof e && e(),
                                r.a && "function" === typeof r.a.close && (r.a.close(),
                                r.a = null),
                                !1
                            }
                            ,
                            r.ya(s),
                            u = function() {
                                a || (a = En(2e3).then((function() {
                                    e(new Ar("redirect-cancelled-by-user"))
                                }
                                )))
                            }
                            ,
                            h = function() {
                                er() && u()
                            }
                            ,
                            o.addEventListener("resume", u, !1),
                            Ki().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", h, !1)
                        }
                        )).s((function(t) {
                            return oh(r).then((function() {
                                throw t
                            }
                            ))
                        }
                        ))
                    }
                    )).ka((function() {
                        u && o.removeEventListener("resume", u, !1),
                        h && o.removeEventListener("visibilitychange", h, !1),
                        a && a.cancel(),
                        s && r.La(s),
                        r.c = null
                    }
                    ))
                }
                ,
                e.ya = function(t) {
                    this.b.push(t),
                    rh(this).s((function(e) {
                        "auth/invalid-cordova-configuration" === e.code && (e = new ta("unknown",null,null,null,new Ar("no-auth-event")),
                        t(e))
                    }
                    ))
                }
                ,
                e.La = function(t) {
                    J(this.b, (function(e) {
                        return e == t
                    }
                    ))
                }
                ;
                var uh = {
                    name: "pendingRedirect",
                    C: "session"
                };
                function ch(t) {
                    return t.b.set(uh, "pending", t.a)
                }
                function hh(t) {
                    return Dc(t.b, uh, t.a)
                }
                function fh(t) {
                    return t.b.get(uh, t.a).then((function(t) {
                        return "pending" == t
                    }
                    ))
                }
                function lh(t, e, n) {
                    this.i = {},
                    this.v = 0,
                    this.B = t,
                    this.u = e,
                    this.m = n,
                    this.h = [],
                    this.f = !1,
                    this.l = S(this.o, this),
                    this.b = new Ah,
                    this.w = new Lh,
                    this.g = new sh(this.u + ":" + this.m),
                    this.c = {},
                    this.c.unknown = this.b,
                    this.c.signInViaRedirect = this.b,
                    this.c.linkViaRedirect = this.b,
                    this.c.reauthViaRedirect = this.b,
                    this.c.signInViaPopup = this.w,
                    this.c.linkViaPopup = this.w,
                    this.c.reauthViaPopup = this.w,
                    this.a = dh(this.B, this.u, this.m, oo)
                }
                function dh(t, e, n, r) {
                    var o = i.a.SDK_VERSION || null;
                    return Ri() ? new Zc(t,e,n,o,r) : new Lu(t,e,n,o,r)
                }
                function ph(t) {
                    t.f || (t.f = !0,
                    t.a.ya(t.l));
                    var e = t.a;
                    return t.a.ia().s((function(n) {
                        throw t.a == e && t.reset(),
                        n
                    }
                    ))
                }
                function vh(t) {
                    t.a.Ob() && ph(t).s((function(e) {
                        var n = new ta("unknown",null,null,null,new Ar("operation-not-supported-in-this-environment"));
                        Ih(e) && t.o(n)
                    }
                    )),
                    t.a.Jb() || Nh(t.b)
                }
                function mh(t, e) {
                    W(t.h, e) || t.h.push(e),
                    t.f || fh(t.g).then((function(e) {
                        e ? hh(t.g).then((function() {
                            ph(t).s((function(e) {
                                var n = new ta("unknown",null,null,null,new Ar("operation-not-supported-in-this-environment"));
                                Ih(e) && t.o(n)
                            }
                            ))
                        }
                        )) : vh(t)
                    }
                    )).s((function() {
                        vh(t)
                    }
                    ))
                }
                function gh(t, e) {
                    J(t.h, (function(t) {
                        return t == e
                    }
                    ))
                }
                lh.prototype.reset = function() {
                    this.f = !1,
                    this.a.La(this.l),
                    this.a = dh(this.B, this.u, this.m),
                    this.i = {}
                }
                ,
                lh.prototype.o = function(t) {
                    if (!t)
                        throw new Ar("invalid-auth-event");
                    if (6e5 <= N() - this.v && (this.i = {},
                    this.v = 0),
                    t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
                        return !1;
                    for (var e = !1, n = 0; n < this.h.length; n++) {
                        var i = this.h[n];
                        if (i.xb(t.c, t.b)) {
                            (e = this.c[t.c]) && (e.h(t, i),
                            t && (t.f || t.b) && (this.i[t.getUid()] = !0,
                            this.v = N())),
                            e = !0;
                            break
                        }
                    }
                    return Nh(this.b),
                    e
                }
                ;
                var bh = new tr(2e3,1e4)
                  , yh = new tr(3e4,6e4);
                function wh(t, e, n, i, r, o, a) {
                    return t.a.Db(e, n, i, (function() {
                        t.f || (t.f = !0,
                        t.a.ya(t.l))
                    }
                    ), (function() {
                        t.reset()
                    }
                    ), r, o, a)
                }
                function Ih(t) {
                    return !(!t || "auth/cordova-not-ready" != t.code)
                }
                function Th(t, e, n, i, r) {
                    var o;
                    return ch(t.g).then((function() {
                        return t.a.Eb(e, n, i, r).s((function(e) {
                            if (Ih(e))
                                throw new Ar("operation-not-supported-in-this-environment");
                            return o = e,
                            hh(t.g).then((function() {
                                throw o
                            }
                            ))
                        }
                        )).then((function() {
                            return t.a.Rb() ? new Zt((function() {}
                            )) : hh(t.g).then((function() {
                                return t.oa()
                            }
                            )).then((function() {}
                            )).s((function() {}
                            ))
                        }
                        ))
                    }
                    ))
                }
                function kh(t, e, n, i, r) {
                    return t.a.Fb(i, (function(t) {
                        e.ja(n, null, t, r)
                    }
                    ), bh.get())
                }
                lh.prototype.oa = function() {
                    return this.b.oa()
                }
                ;
                var Eh = {};
                function Sh(t, e, n) {
                    var i = e + ":" + n;
                    return Eh[i] || (Eh[i] = new lh(t,e,n)),
                    Eh[i]
                }
                function Ah() {
                    this.b = null,
                    this.f = [],
                    this.c = [],
                    this.a = null,
                    this.i = this.g = !1
                }
                function Nh(t) {
                    t.g || (t.g = !0,
                    Dh(t, !1, null, null))
                }
                function _h(t) {
                    t.g && !t.i && Dh(t, !1, null, null)
                }
                function Oh(t, e, n) {
                    n = n.za(e.c, e.b);
                    var i = e.g
                      , r = e.f
                      , o = e.i
                      , a = e.R()
                      , s = !!e.c.match(/Redirect$/);
                    n(i, r, a, o).then((function(e) {
                        Dh(t, s, e, null)
                    }
                    )).s((function(e) {
                        Dh(t, s, null, e)
                    }
                    ))
                }
                function Rh(t, e) {
                    if (t.b = function() {
                        return ae(e)
                    }
                    ,
                    t.c.length)
                        for (var n = 0; n < t.c.length; n++)
                            t.c[n](e)
                }
                function Ph(t, e) {
                    if (t.b = function() {
                        return oe(e)
                    }
                    ,
                    t.f.length)
                        for (var n = 0; n < t.f.length; n++)
                            t.f[n](e)
                }
                function Dh(t, e, n, i) {
                    e ? i ? Rh(t, i) : Ph(t, n) : Ph(t, {
                        user: null
                    }),
                    t.f = [],
                    t.c = []
                }
                function Ch(t) {
                    var e = new Ar("timeout");
                    t.a && t.a.cancel(),
                    t.a = En(yh.get()).then((function() {
                        t.b || (t.g = !0,
                        Dh(t, !0, null, e))
                    }
                    ))
                }
                function Lh() {}
                function xh(t, e) {
                    var n = t.b
                      , i = t.c;
                    e.za(i, n)(t.g, t.f, t.R(), t.i).then((function(t) {
                        e.ja(i, t, null, n)
                    }
                    )).s((function(t) {
                        e.ja(i, null, t, n)
                    }
                    ))
                }
                function Mh() {
                    this.vb = !1,
                    Object.defineProperty(this, "appVerificationDisabled", {
                        get: function() {
                            return this.vb
                        },
                        set: function(t) {
                            this.vb = t
                        },
                        enumerable: !1
                    })
                }
                function jh(t, e) {
                    this.a = e,
                    fr(this, "verificationId", t)
                }
                function Uh(t, e, n, i) {
                    return new zo(t).Va(e, n).then((function(t) {
                        return new jh(t,i)
                    }
                    ))
                }
                function Vh(t) {
                    var e = ro(t);
                    if (!(e && e.exp && e.auth_time && e.iat))
                        throw new Ar("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                    lr(this, {
                        token: t,
                        expirationTime: ir(1e3 * e.exp),
                        authTime: ir(1e3 * e.auth_time),
                        issuedAtTime: ir(1e3 * e.iat),
                        signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
                        claims: e
                    })
                }
                function Fh(t, e, n) {
                    if (this.h = t,
                    this.i = e,
                    this.g = n,
                    this.c = 3e4,
                    this.f = 96e4,
                    this.b = null,
                    this.a = this.c,
                    this.f < this.c)
                        throw Error("Proactive refresh lower bound greater than upper bound!")
                }
                function Kh(t, e) {
                    return e ? (t.a = t.c,
                    t.g()) : (e = t.a,
                    t.a *= 2,
                    t.a > t.f && (t.a = t.f),
                    e)
                }
                function qh(t, e) {
                    t.stop(),
                    t.b = En(Kh(t, e)).then((function() {
                        return nr()
                    }
                    )).then((function() {
                        return t.h()
                    }
                    )).then((function() {
                        qh(t, !0)
                    }
                    )).s((function(e) {
                        t.i(e) && qh(t, !1)
                    }
                    ))
                }
                function Hh(t) {
                    this.f = t,
                    this.b = this.a = null,
                    this.c = 0
                }
                function Bh(t, e) {
                    var n = e[gs]
                      , i = e.refreshToken;
                    e = Wh(e.expiresIn),
                    t.b = n,
                    t.c = e,
                    t.a = i
                }
                function Gh(t, e) {
                    t.b = e.b,
                    t.a = e.a,
                    t.c = e.c
                }
                function Wh(t) {
                    return N() + 1e3 * parseInt(t, 10)
                }
                function Xh(t, e) {
                    return _s(t.f, e).then((function(e) {
                        return t.b = e.access_token,
                        t.c = Wh(e.expires_in),
                        t.a = e.refresh_token,
                        {
                            accessToken: t.b,
                            expirationTime: t.c,
                            refreshToken: t.a
                        }
                    }
                    )).s((function(e) {
                        throw "auth/user-token-expired" == e.code && (t.a = null),
                        e
                    }
                    ))
                }
                function Jh(t, e) {
                    this.a = t || null,
                    this.b = e || null,
                    lr(this, {
                        lastSignInTime: ir(e || null),
                        creationTime: ir(t || null)
                    })
                }
                function Yh(t) {
                    return new Jh(t.a,t.b)
                }
                function zh(t, e, n, i, r, o) {
                    lr(this, {
                        uid: t,
                        displayName: i || null,
                        photoURL: r || null,
                        email: n || null,
                        phoneNumber: o || null,
                        providerId: e
                    })
                }
                function $h(t, e) {
                    for (var n in Xe.call(this, t),
                    e)
                        this[n] = e[n]
                }
                function Zh(t, e, n) {
                    this.I = [],
                    this.l = t.apiKey,
                    this.m = t.appName,
                    this.o = t.authDomain || null,
                    t = i.a.SDK_VERSION ? Fi(i.a.SDK_VERSION) : null,
                    this.a = new vs(this.l,so(oo),t),
                    this.b = new Hh(this.a),
                    sf(this, e[gs]),
                    Bh(this.b, e),
                    fr(this, "refreshToken", this.b.a),
                    ff(this, n || {}),
                    yn.call(this),
                    this.J = !1,
                    this.o && Bi() && (this.i = Sh(this.o, this.l, this.m)),
                    this.O = [],
                    this.h = null,
                    this.w = rf(this),
                    this.W = S(this.Ha, this);
                    var r = this;
                    this.ga = null,
                    this.va = function(t) {
                        r.sa(t.g)
                    }
                    ,
                    this.Z = null,
                    this.P = [],
                    this.ua = function(t) {
                        tf(r, t.c)
                    }
                    ,
                    this.Y = null
                }
                function Qh(t, e) {
                    t.Z && hn(t.Z, "languageCodeChanged", t.va),
                    (t.Z = e) && an(e, "languageCodeChanged", t.va)
                }
                function tf(t, e) {
                    t.P = e,
                    ks(t.a, i.a.SDK_VERSION ? Fi(i.a.SDK_VERSION, t.P) : null)
                }
                function ef(t, e) {
                    t.Y && hn(t.Y, "frameworkChanged", t.ua),
                    (t.Y = e) && an(e, "frameworkChanged", t.ua)
                }
                function nf(t) {
                    try {
                        return i.a.app(t.m).auth()
                    } catch (e) {
                        throw new Ar("internal-error","No firebase.auth.Auth instance is available for the Firebase App '" + t.m + "'!")
                    }
                }
                function rf(t) {
                    return new Fh((function() {
                        return t.G(!0)
                    }
                    ),(function(t) {
                        return !(!t || "auth/network-request-failed" != t.code)
                    }
                    ),(function() {
                        var e = t.b.c - N() - 3e5;
                        return 0 < e ? e : 0
                    }
                    ))
                }
                function of(t) {
                    t.B || t.w.b || (t.w.start(),
                    hn(t, "tokenChanged", t.W),
                    an(t, "tokenChanged", t.W))
                }
                function af(t) {
                    hn(t, "tokenChanged", t.W),
                    t.w.stop()
                }
                function sf(t, e) {
                    t.ma = e,
                    fr(t, "_lat", e)
                }
                function uf(t, e) {
                    J(t.O, (function(t) {
                        return t == e
                    }
                    ))
                }
                function cf(t) {
                    for (var e = [], n = 0; n < t.O.length; n++)
                        e.push(t.O[n](t));
                    return ce(e).then((function() {
                        return t
                    }
                    ))
                }
                function hf(t) {
                    t.i && !t.J && (t.J = !0,
                    mh(t.i, t))
                }
                function ff(t, e) {
                    lr(t, {
                        uid: e.uid,
                        displayName: e.displayName || null,
                        photoURL: e.photoURL || null,
                        email: e.email || null,
                        emailVerified: e.emailVerified || !1,
                        phoneNumber: e.phoneNumber || null,
                        isAnonymous: e.isAnonymous || !1,
                        tenantId: e.tenantId || null,
                        metadata: new Jh(e.createdAt,e.lastLoginAt),
                        providerData: []
                    }),
                    t.a.b = t.tenantId
                }
                function lf() {}
                function df(t) {
                    return oe().then((function() {
                        if (t.B)
                            throw new Ar("app-deleted")
                    }
                    ))
                }
                function pf(t) {
                    return H(t.providerData, (function(t) {
                        return t.providerId
                    }
                    ))
                }
                function vf(t, e) {
                    e && (mf(t, e.providerId),
                    t.providerData.push(e))
                }
                function mf(t, e) {
                    J(t.providerData, (function(t) {
                        return t.providerId == e
                    }
                    ))
                }
                function gf(t, e, n) {
                    ("uid" != e || n) && t.hasOwnProperty(e) && fr(t, e, n)
                }
                function bf(t, e) {
                    t != e && (lr(t, {
                        uid: e.uid,
                        displayName: e.displayName,
                        photoURL: e.photoURL,
                        email: e.email,
                        emailVerified: e.emailVerified,
                        phoneNumber: e.phoneNumber,
                        isAnonymous: e.isAnonymous,
                        tenantId: e.tenantId,
                        providerData: []
                    }),
                    e.metadata ? fr(t, "metadata", Yh(e.metadata)) : fr(t, "metadata", new Jh),
                    K(e.providerData, (function(e) {
                        vf(t, e)
                    }
                    )),
                    Gh(t.b, e.b),
                    fr(t, "refreshToken", t.b.a))
                }
                function yf(t) {
                    return t.G().then((function(e) {
                        var n = t.isAnonymous;
                        return If(t, e).then((function() {
                            return n || gf(t, "isAnonymous", !1),
                            e
                        }
                        ))
                    }
                    ))
                }
                function wf(t, e) {
                    e[gs] && t.ma != e[gs] && (Bh(t.b, e),
                    t.dispatchEvent(new $h("tokenChanged")),
                    sf(t, e[gs]),
                    gf(t, "refreshToken", t.b.a))
                }
                function If(t, e) {
                    return yu(t.a, tu, {
                        idToken: e
                    }).then(S(t.zc, t))
                }
                function Tf(t) {
                    return (t = t.providerUserInfo) && t.length ? H(t, (function(t) {
                        return new zh(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)
                    }
                    )) : []
                }
                function kf(t, e) {
                    return yf(t).then((function() {
                        if (W(pf(t), e))
                            return cf(t).then((function() {
                                throw new Ar("provider-already-linked")
                            }
                            ))
                    }
                    ))
                }
                function Ef(t, e, n) {
                    var i = Zo(e);
                    return e = lo(e),
                    dr({
                        user: t,
                        credential: i,
                        additionalUserInfo: e,
                        operationType: n
                    })
                }
                function Sf(t, e) {
                    return wf(t, e),
                    t.reload().then((function() {
                        return t
                    }
                    ))
                }
                function Af(t, e, n, r, o) {
                    if (!Bi())
                        return ae(new Ar("operation-not-supported-in-this-environment"));
                    if (t.h && !o)
                        return ae(t.h);
                    var a = fo(n.providerId)
                      , s = $i(t.uid + ":::")
                      , u = null;
                    (!Xi() || Pi()) && t.o && n.isOAuthProvider && (u = Uu(t.o, t.l, t.m, e, n, null, s, i.a.SDK_VERSION || null, null, null, t.tenantId));
                    var c = Ei(u, a && a.Da, a && a.Ca);
                    return r = r().then((function() {
                        if (_f(t),
                        !o)
                            return t.G().then((function() {}
                            ))
                    }
                    )).then((function() {
                        return wh(t.i, c, e, n, s, !!u, t.tenantId)
                    }
                    )).then((function() {
                        return new Zt((function(n, i) {
                            t.ja(e, null, new Ar("cancelled-popup-request"), t.g || null),
                            t.f = n,
                            t.v = i,
                            t.g = s,
                            t.c = kh(t.i, t, e, c, s)
                        }
                        ))
                    }
                    )).then((function(t) {
                        return c && ki(c),
                        t ? dr(t) : null
                    }
                    )).s((function(t) {
                        throw c && ki(c),
                        t
                    }
                    )),
                    Of(t, r, o)
                }
                function Nf(t, e, n, i, r) {
                    if (!Bi())
                        return ae(new Ar("operation-not-supported-in-this-environment"));
                    if (t.h && !r)
                        return ae(t.h);
                    var o = null
                      , a = $i(t.uid + ":::");
                    return i = i().then((function() {
                        if (_f(t),
                        !r)
                            return t.G().then((function() {}
                            ))
                    }
                    )).then((function() {
                        return t.ca = a,
                        cf(t)
                    }
                    )).then((function(e) {
                        return t.da && (e = t.da,
                        e = e.b.set(xf, t.A(), e.a)),
                        e
                    }
                    )).then((function() {
                        return Th(t.i, e, n, a, t.tenantId)
                    }
                    )).s((function(e) {
                        if (o = e,
                        t.da)
                            return Mf(t.da);
                        throw o
                    }
                    )).then((function() {
                        if (o)
                            throw o
                    }
                    )),
                    Of(t, i, r)
                }
                function _f(t) {
                    if (!t.i || !t.J) {
                        if (t.i && !t.J)
                            throw new Ar("internal-error");
                        throw new Ar("auth-domain-config-required")
                    }
                }
                function Of(t, e, n) {
                    var i = Rf(t, e, n);
                    return t.I.push(i),
                    i.ka((function() {
                        X(t.I, i)
                    }
                    )),
                    i
                }
                function Rf(t, e, n) {
                    return t.h && !n ? (e.cancel(),
                    ae(t.h)) : e.s((function(e) {
                        throw !e || "auth/user-disabled" != e.code && "auth/user-token-expired" != e.code || (t.h || t.dispatchEvent(new $h("userInvalidated")),
                        t.h = e),
                        e
                    }
                    ))
                }
                function Pf(t) {
                    if (!t.apiKey)
                        return null;
                    var e = {
                        apiKey: t.apiKey,
                        authDomain: t.authDomain,
                        appName: t.appName
                    }
                      , n = {};
                    if (!(t.stsTokenManager && t.stsTokenManager.accessToken && t.stsTokenManager.expirationTime))
                        return null;
                    n[gs] = t.stsTokenManager.accessToken,
                    n.refreshToken = t.stsTokenManager.refreshToken || null,
                    n.expiresIn = (t.stsTokenManager.expirationTime - N()) / 1e3;
                    var i = new Zh(e,n,t);
                    return t.providerData && K(t.providerData, (function(t) {
                        t && vf(i, dr(t))
                    }
                    )),
                    t.redirectEventId && (i.ca = t.redirectEventId),
                    i
                }
                function Df(t, e, n, i) {
                    var r = new Zh(t,e);
                    return n && (r.da = n),
                    i && tf(r, i),
                    r.reload().then((function() {
                        return r
                    }
                    ))
                }
                function Cf(t, e, n, i) {
                    e = e || {
                        apiKey: t.l,
                        authDomain: t.o,
                        appName: t.m
                    };
                    var r = t.b
                      , o = {};
                    return o[gs] = r.b,
                    o.refreshToken = r.a,
                    o.expiresIn = (r.c - N()) / 1e3,
                    e = new Zh(e,o),
                    n && (e.da = n),
                    i && tf(e, i),
                    bf(e, t),
                    e
                }
                function Lf(t) {
                    this.a = t,
                    this.b = _c()
                }
                Ah.prototype.reset = function() {
                    this.b = null,
                    this.a && (this.a.cancel(),
                    this.a = null)
                }
                ,
                Ah.prototype.h = function(t, e) {
                    if (t) {
                        this.reset(),
                        this.g = !0;
                        var n = t.c
                          , i = t.b
                          , r = t.a && "auth/web-storage-unsupported" == t.a.code
                          , o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
                        this.i = !(!r && !o),
                        "unknown" != n || r || o ? t.a ? (Dh(this, !0, null, t.a),
                        oe()) : e.za(n, i) ? Oh(this, t, e) : ae(new Ar("invalid-auth-event")) : (Dh(this, !1, null, null),
                        oe())
                    } else
                        ae(new Ar("invalid-auth-event"))
                }
                ,
                Ah.prototype.oa = function() {
                    var t = this;
                    return new Zt((function(e, n) {
                        t.b ? t.b().then(e, n) : (t.f.push(e),
                        t.c.push(n),
                        Ch(t))
                    }
                    ))
                }
                ,
                Lh.prototype.h = function(t, e) {
                    if (t) {
                        var n = t.c
                          , i = t.b;
                        t.a ? (e.ja(t.c, null, t.a, t.b),
                        oe()) : e.za(n, i) ? xh(t, e) : ae(new Ar("invalid-auth-event"))
                    } else
                        ae(new Ar("invalid-auth-event"))
                }
                ,
                jh.prototype.confirm = function(t) {
                    return t = $o(this.verificationId, t),
                    this.a(t)
                }
                ,
                Fh.prototype.start = function() {
                    this.a = this.c,
                    qh(this, !0)
                }
                ,
                Fh.prototype.stop = function() {
                    this.b && (this.b.cancel(),
                    this.b = null)
                }
                ,
                Hh.prototype.A = function() {
                    return {
                        apiKey: this.f.c,
                        refreshToken: this.a,
                        accessToken: this.b,
                        expirationTime: this.c
                    }
                }
                ,
                Hh.prototype.getToken = function(t) {
                    return t = !!t,
                    this.b && !this.a ? ae(new Ar("user-token-expired")) : t || !this.b || N() > this.c - 3e4 ? this.a ? Xh(this, {
                        grant_type: "refresh_token",
                        refresh_token: this.a
                    }) : oe(null) : oe({
                        accessToken: this.b,
                        expirationTime: this.c,
                        refreshToken: this.a
                    })
                }
                ,
                Jh.prototype.A = function() {
                    return {
                        lastLoginAt: this.b,
                        createdAt: this.a
                    }
                }
                ,
                _($h, Xe),
                _(Zh, yn),
                Zh.prototype.sa = function(t) {
                    this.ga = t,
                    Ts(this.a, t)
                }
                ,
                Zh.prototype.ha = function() {
                    return this.ga
                }
                ,
                Zh.prototype.Aa = function() {
                    return z(this.P)
                }
                ,
                Zh.prototype.Ha = function() {
                    this.w.b && (this.w.stop(),
                    this.w.start())
                }
                ,
                fr(Zh.prototype, "providerId", "firebase"),
                e = Zh.prototype,
                e.reload = function() {
                    var t = this;
                    return Of(this, df(this).then((function() {
                        return yf(t).then((function() {
                            return cf(t)
                        }
                        )).then(lf)
                    }
                    )))
                }
                ,
                e.dc = function(t) {
                    return this.G(t).then((function(t) {
                        return new Vh(t)
                    }
                    ))
                }
                ,
                e.G = function(t) {
                    var e = this;
                    return Of(this, df(this).then((function() {
                        return e.b.getToken(t)
                    }
                    )).then((function(t) {
                        if (!t)
                            throw new Ar("internal-error");
                        return t.accessToken != e.ma && (sf(e, t.accessToken),
                        e.dispatchEvent(new $h("tokenChanged"))),
                        gf(e, "refreshToken", t.refreshToken),
                        t.accessToken
                    }
                    )))
                }
                ,
                e.zc = function(t) {
                    if (t = t.users,
                    !t || !t.length)
                        throw new Ar("internal-error");
                    t = t[0],
                    ff(this, {
                        uid: t.localId,
                        displayName: t.displayName,
                        photoURL: t.photoUrl,
                        email: t.email,
                        emailVerified: !!t.emailVerified,
                        phoneNumber: t.phoneNumber,
                        lastLoginAt: t.lastLoginAt,
                        createdAt: t.createdAt,
                        tenantId: t.tenantId
                    });
                    for (var e = Tf(t), n = 0; n < e.length; n++)
                        vf(this, e[n]);
                    gf(this, "isAnonymous", !(this.email && t.passwordHash) && !(this.providerData && this.providerData.length))
                }
                ,
                e.Ac = function(t) {
                    return cr("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),
                    this.gb(t)
                }
                ,
                e.gb = function(t) {
                    var e = this
                      , n = null;
                    return Of(this, t.f(this.a, this.uid).then((function(t) {
                        return wf(e, t),
                        n = Ef(e, t, "reauthenticate"),
                        e.h = null,
                        e.reload()
                    }
                    )).then((function() {
                        return n
                    }
                    )), !0)
                }
                ,
                e.rc = function(t) {
                    return cr("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),
                    this.eb(t)
                }
                ,
                e.eb = function(t) {
                    var e = this
                      , n = null;
                    return Of(this, kf(this, t.providerId).then((function() {
                        return e.G()
                    }
                    )).then((function(n) {
                        return t.b(e.a, n)
                    }
                    )).then((function(t) {
                        return n = Ef(e, t, "link"),
                        Sf(e, t)
                    }
                    )).then((function() {
                        return n
                    }
                    )))
                }
                ,
                e.sc = function(t, e) {
                    var n = this;
                    return Of(this, kf(this, "phone").then((function() {
                        return Uh(nf(n), t, e, S(n.eb, n))
                    }
                    )))
                }
                ,
                e.Bc = function(t, e) {
                    var n = this;
                    return Of(this, oe().then((function() {
                        return Uh(nf(n), t, e, S(n.gb, n))
                    }
                    )), !0)
                }
                ,
                e.rb = function(t) {
                    var e = this;
                    return Of(this, this.G().then((function(n) {
                        return e.a.rb(n, t)
                    }
                    )).then((function(t) {
                        return wf(e, t),
                        e.reload()
                    }
                    )))
                }
                ,
                e.Sc = function(t) {
                    var e = this;
                    return Of(this, this.G().then((function(n) {
                        return t.b(e.a, n)
                    }
                    )).then((function(t) {
                        return wf(e, t),
                        e.reload()
                    }
                    )))
                }
                ,
                e.sb = function(t) {
                    var e = this;
                    return Of(this, this.G().then((function(n) {
                        return e.a.sb(n, t)
                    }
                    )).then((function(t) {
                        return wf(e, t),
                        e.reload()
                    }
                    )))
                }
                ,
                e.tb = function(t) {
                    if (void 0 === t.displayName && void 0 === t.photoURL)
                        return df(this);
                    var e = this;
                    return Of(this, this.G().then((function(n) {
                        return e.a.tb(n, {
                            displayName: t.displayName,
                            photoUrl: t.photoURL
                        })
                    }
                    )).then((function(t) {
                        return wf(e, t),
                        gf(e, "displayName", t.displayName || null),
                        gf(e, "photoURL", t.photoUrl || null),
                        K(e.providerData, (function(t) {
                            "password" === t.providerId && (fr(t, "displayName", e.displayName),
                            fr(t, "photoURL", e.photoURL))
                        }
                        )),
                        cf(e)
                    }
                    )).then(lf))
                }
                ,
                e.Qc = function(t) {
                    var e = this;
                    return Of(this, yf(this).then((function(n) {
                        return W(pf(e), t) ? Us(e.a, n, [t]).then((function(t) {
                            var n = {};
                            return K(t.providerUserInfo || [], (function(t) {
                                n[t.providerId] = !0
                            }
                            )),
                            K(pf(e), (function(t) {
                                n[t] || mf(e, t)
                            }
                            )),
                            n[zo.PROVIDER_ID] || fr(e, "phoneNumber", null),
                            cf(e)
                        }
                        )) : cf(e).then((function() {
                            throw new Ar("no-such-provider")
                        }
                        ))
                    }
                    )))
                }
                ,
                e.delete = function() {
                    var t = this;
                    return Of(this, this.G().then((function(e) {
                        return yu(t.a, zs, {
                            idToken: e
                        })
                    }
                    )).then((function() {
                        t.dispatchEvent(new $h("userDeleted"))
                    }
                    ))).then((function() {
                        for (var e = 0; e < t.I.length; e++)
                            t.I[e].cancel("app-deleted");
                        Qh(t, null),
                        ef(t, null),
                        t.I = [],
                        t.B = !0,
                        af(t),
                        fr(t, "refreshToken", null),
                        t.i && gh(t.i, t)
                    }
                    ))
                }
                ,
                e.xb = function(t, e) {
                    return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.ca || null) == e || "reauthViaRedirect" == t && (this.ca || null) == e)
                }
                ,
                e.ja = function(t, e, n, i) {
                    "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
                    this.c && (this.c.cancel(),
                    this.c = null),
                    delete this.f,
                    delete this.v)
                }
                ,
                e.za = function(t, e) {
                    return "linkViaPopup" == t && e == (this.g || null) ? S(this.Bb, this) : "reauthViaPopup" == t && e == (this.g || null) ? S(this.Cb, this) : "linkViaRedirect" == t && (this.ca || null) == e ? S(this.Bb, this) : "reauthViaRedirect" == t && (this.ca || null) == e ? S(this.Cb, this) : null
                }
                ,
                e.tc = function(t) {
                    var e = this;
                    return Af(this, "linkViaPopup", t, (function() {
                        return kf(e, t.providerId).then((function() {
                            return cf(e)
                        }
                        ))
                    }
                    ), !1)
                }
                ,
                e.Cc = function(t) {
                    return Af(this, "reauthViaPopup", t, (function() {
                        return oe()
                    }
                    ), !0)
                }
                ,
                e.uc = function(t) {
                    var e = this;
                    return Nf(this, "linkViaRedirect", t, (function() {
                        return kf(e, t.providerId)
                    }
                    ), !1)
                }
                ,
                e.Dc = function(t) {
                    return Nf(this, "reauthViaRedirect", t, (function() {
                        return oe()
                    }
                    ), !0)
                }
                ,
                e.Bb = function(t, e, n, i) {
                    var r = this;
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null;
                    return n = this.G().then((function(n) {
                        return Hs(r.a, {
                            requestUri: t,
                            postBody: i,
                            sessionId: e,
                            idToken: n
                        })
                    }
                    )).then((function(t) {
                        return o = Ef(r, t, "link"),
                        Sf(r, t)
                    }
                    )).then((function() {
                        return o
                    }
                    )),
                    Of(this, n)
                }
                ,
                e.Cb = function(t, e, n, i) {
                    var r = this;
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null
                      , a = oe().then((function() {
                        return Eo(Bs(r.a, {
                            requestUri: t,
                            sessionId: e,
                            postBody: i,
                            tenantId: n
                        }), r.uid)
                    }
                    )).then((function(t) {
                        return o = Ef(r, t, "reauthenticate"),
                        wf(r, t),
                        r.h = null,
                        r.reload()
                    }
                    )).then((function() {
                        return o
                    }
                    ));
                    return Of(this, a, !0)
                }
                ,
                e.jb = function(t) {
                    var e = this
                      , n = null;
                    return Of(this, this.G().then((function(e) {
                        return n = e,
                        "undefined" === typeof t || Z(t) ? {} : Yr(new Vr(t))
                    }
                    )).then((function(t) {
                        return e.a.jb(n, t)
                    }
                    )).then((function(t) {
                        if (e.email != t)
                            return e.reload()
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.toJSON = function() {
                    return this.A()
                }
                ,
                e.A = function() {
                    var t = {
                        uid: this.uid,
                        displayName: this.displayName,
                        photoURL: this.photoURL,
                        email: this.email,
                        emailVerified: this.emailVerified,
                        phoneNumber: this.phoneNumber,
                        isAnonymous: this.isAnonymous,
                        tenantId: this.tenantId,
                        providerData: [],
                        apiKey: this.l,
                        appName: this.m,
                        authDomain: this.o,
                        stsTokenManager: this.b.A(),
                        redirectEventId: this.ca || null
                    };
                    return this.metadata && et(t, this.metadata.A()),
                    K(this.providerData, (function(e) {
                        t.providerData.push(pr(e))
                    }
                    )),
                    t
                }
                ;
                var xf = {
                    name: "redirectUser",
                    C: "session"
                };
                function Mf(t) {
                    return Dc(t.b, xf, t.a)
                }
                function jf(t, e) {
                    return t.b.get(xf, t.a).then((function(t) {
                        return t && e && (t.authDomain = e),
                        Pf(t || {})
                    }
                    ))
                }
                function Uf(t) {
                    this.a = t,
                    this.b = _c(),
                    this.c = null,
                    this.f = Ff(this),
                    this.b.addListener(qf("local"), this.a, S(this.g, this))
                }
                function Vf(t, e) {
                    var n, i = [];
                    for (n in Sc)
                        Sc[n] !== e && i.push(Dc(t.b, qf(Sc[n]), t.a));
                    return i.push(Dc(t.b, Kf, t.a)),
                    ue(i)
                }
                function Ff(t) {
                    var e = qf("local")
                      , n = qf("session")
                      , i = qf("none");
                    return Pc(t.b, e, t.a).then((function() {
                        return t.b.get(n, t.a)
                    }
                    )).then((function(r) {
                        return r ? n : t.b.get(i, t.a).then((function(n) {
                            return n ? i : t.b.get(e, t.a).then((function(n) {
                                return n ? e : t.b.get(Kf, t.a).then((function(t) {
                                    return t ? qf(t) : e
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    )).then((function(e) {
                        return t.c = e,
                        Vf(t, e.C)
                    }
                    )).s((function() {
                        t.c || (t.c = e)
                    }
                    ))
                }
                Uf.prototype.g = function() {
                    var t = this
                      , e = qf("local");
                    Xf(this, (function() {
                        return oe().then((function() {
                            return t.c && "local" != t.c.C ? t.b.get(e, t.a) : null
                        }
                        )).then((function(n) {
                            if (n)
                                return Vf(t, "local").then((function() {
                                    t.c = e
                                }
                                ))
                        }
                        ))
                    }
                    ))
                }
                ;
                var Kf = {
                    name: "persistence",
                    C: "session"
                };
                function qf(t) {
                    return {
                        name: "authUser",
                        C: t
                    }
                }
                function Hf(t) {
                    return Xf(t, (function() {
                        return t.b.set(Kf, t.c.C, t.a)
                    }
                    ))
                }
                function Bf(t, e) {
                    return Xf(t, (function() {
                        return t.b.set(t.c, e.A(), t.a)
                    }
                    ))
                }
                function Gf(t) {
                    return Xf(t, (function() {
                        return Dc(t.b, t.c, t.a)
                    }
                    ))
                }
                function Wf(t, e) {
                    return Xf(t, (function() {
                        return t.b.get(t.c, t.a).then((function(t) {
                            return t && e && (t.authDomain = e),
                            Pf(t || {})
                        }
                        ))
                    }
                    ))
                }
                function Xf(t, e) {
                    return t.f = t.f.then(e, e),
                    t.f
                }
                function Jf(t) {
                    if (this.l = !1,
                    fr(this, "settings", new Mh),
                    fr(this, "app", t),
                    !sl(this).options || !sl(this).options.apiKey)
                        throw new Ar("invalid-api-key");
                    t = i.a.SDK_VERSION ? Fi(i.a.SDK_VERSION) : null,
                    this.b = new vs(sl(this).options && sl(this).options.apiKey,so(oo),t),
                    this.O = [],
                    this.m = [],
                    this.J = [],
                    this.Ub = i.a.INTERNAL.createSubscribe(S(this.oc, this)),
                    this.W = void 0,
                    this.Vb = i.a.INTERNAL.createSubscribe(S(this.pc, this)),
                    nl(this, null),
                    this.h = new Uf(sl(this).options.apiKey + ":" + sl(this).name),
                    this.w = new Lf(sl(this).options.apiKey + ":" + sl(this).name),
                    this.Y = ll(this, rl(this)),
                    this.i = ll(this, ol(this)),
                    this.ga = !1,
                    this.ma = S(this.Nc, this),
                    this.ub = S(this.aa, this),
                    this.ua = S(this.bc, this),
                    this.va = S(this.mc, this),
                    this.Ha = S(this.nc, this),
                    this.a = null,
                    Qf(this),
                    this.INTERNAL = {},
                    this.INTERNAL["delete"] = S(this.delete, this),
                    this.INTERNAL.logFramework = S(this.vc, this),
                    this.o = 0,
                    yn.call(this),
                    $f(this),
                    this.I = []
                }
                function Yf(t) {
                    Xe.call(this, "languageCodeChanged"),
                    this.g = t
                }
                function zf(t) {
                    Xe.call(this, "frameworkChanged"),
                    this.c = t
                }
                function $f(t) {
                    Object.defineProperty(t, "lc", {
                        get: function() {
                            return this.ha()
                        },
                        set: function(t) {
                            this.sa(t)
                        },
                        enumerable: !1
                    }),
                    t.Z = null,
                    Object.defineProperty(t, "ti", {
                        get: function() {
                            return this.R()
                        },
                        set: function(t) {
                            this.nb(t)
                        },
                        enumerable: !1
                    }),
                    t.P = null
                }
                function Zf(t) {
                    return t.Tb || ae(new Ar("auth-domain-config-required"))
                }
                function Qf(t) {
                    var e = sl(t).options.authDomain
                      , n = sl(t).options.apiKey;
                    e && Bi() && (t.Tb = t.Y.then((function() {
                        if (!t.l) {
                            if (t.a = Sh(e, n, sl(t).name),
                            mh(t.a, t),
                            ul(t) && hf(ul(t)),
                            t.B) {
                                hf(t.B);
                                var i = t.B;
                                i.sa(t.ha()),
                                Qh(i, t),
                                i = t.B,
                                tf(i, t.I),
                                ef(i, t),
                                t.B = null
                            }
                            return t.a
                        }
                    }
                    )))
                }
                function tl(t) {
                    if (!Bi())
                        return ae(new Ar("operation-not-supported-in-this-environment"));
                    var e = Zf(t).then((function() {
                        return t.a.oa()
                    }
                    )).then((function(t) {
                        return t ? dr(t) : null
                    }
                    ));
                    return ll(t, e)
                }
                function el(t, e) {
                    var n = {};
                    return n.apiKey = sl(t).options.apiKey,
                    n.authDomain = sl(t).options.authDomain,
                    n.appName = sl(t).name,
                    t.Y.then((function() {
                        return Df(n, e, t.w, t.Aa())
                    }
                    )).then((function(e) {
                        return ul(t) && e.uid == ul(t).uid ? (bf(ul(t), e),
                        t.aa(e)) : (nl(t, e),
                        hf(e),
                        t.aa(e))
                    }
                    )).then((function() {
                        hl(t)
                    }
                    ))
                }
                function nl(t, e) {
                    ul(t) && (uf(ul(t), t.ub),
                    hn(ul(t), "tokenChanged", t.ua),
                    hn(ul(t), "userDeleted", t.va),
                    hn(ul(t), "userInvalidated", t.Ha),
                    af(ul(t))),
                    e && (e.O.push(t.ub),
                    an(e, "tokenChanged", t.ua),
                    an(e, "userDeleted", t.va),
                    an(e, "userInvalidated", t.Ha),
                    0 < t.o && of(e)),
                    fr(t, "currentUser", e),
                    e && (e.sa(t.ha()),
                    Qh(e, t),
                    tf(e, t.I),
                    ef(e, t))
                }
                function il(t) {
                    var e = jf(t.w, sl(t).options.authDomain).then((function(e) {
                        return (t.B = e) && (e.da = t.w),
                        Mf(t.w)
                    }
                    ));
                    return ll(t, e)
                }
                function rl(t) {
                    var e = sl(t).options.authDomain
                      , n = il(t).then((function() {
                        return Wf(t.h, e)
                    }
                    )).then((function(e) {
                        return e ? (e.da = t.w,
                        t.B && (t.B.ca || null) == (e.ca || null) ? e : e.reload().then((function() {
                            return Bf(t.h, e).then((function() {
                                return e
                            }
                            ))
                        }
                        )).s((function(n) {
                            return "auth/network-request-failed" == n.code ? e : Gf(t.h)
                        }
                        ))) : null
                    }
                    )).then((function(e) {
                        nl(t, e || null)
                    }
                    ));
                    return ll(t, n)
                }
                function ol(t) {
                    return t.Y.then((function() {
                        return tl(t)
                    }
                    )).s((function() {}
                    )).then((function() {
                        if (!t.l)
                            return t.ma()
                    }
                    )).s((function() {}
                    )).then((function() {
                        if (!t.l) {
                            t.ga = !0;
                            var e = t.h;
                            e.b.addListener(qf("local"), e.a, t.ma)
                        }
                    }
                    ))
                }
                function al(t, e) {
                    var n = null
                      , i = null;
                    return ll(t, e.then((function(e) {
                        return n = Zo(e),
                        i = lo(e),
                        el(t, e)
                    }
                    )).then((function() {
                        return dr({
                            user: ul(t),
                            credential: n,
                            additionalUserInfo: i,
                            operationType: "signIn"
                        })
                    }
                    )))
                }
                function sl(t) {
                    return t.app
                }
                function ul(t) {
                    return t.currentUser
                }
                function cl(t) {
                    return ul(t) && ul(t)._lat || null
                }
                function hl(t) {
                    if (t.ga) {
                        for (var e = 0; e < t.m.length; e++)
                            t.m[e] && t.m[e](cl(t));
                        if (t.W !== t.getUid() && t.J.length)
                            for (t.W = t.getUid(),
                            e = 0; e < t.J.length; e++)
                                t.J[e] && t.J[e](cl(t))
                    }
                }
                function fl(t, e) {
                    t.J.push(e),
                    ll(t, t.i.then((function() {
                        !t.l && W(t.J, e) && t.W !== t.getUid() && (t.W = t.getUid(),
                        e(cl(t)))
                    }
                    )))
                }
                function ll(t, e) {
                    return t.O.push(e),
                    e.ka((function() {
                        X(t.O, e)
                    }
                    )),
                    e
                }
                function dl() {}
                function pl() {
                    this.a = {},
                    this.b = 1e12
                }
                Uf.prototype.mb = function(t) {
                    var e = null
                      , n = this;
                    return Ac(t),
                    Xf(this, (function() {
                        return t != n.c.C ? n.b.get(n.c, n.a).then((function(i) {
                            return e = i,
                            Vf(n, t)
                        }
                        )).then((function() {
                            if (n.c = qf(t),
                            e)
                                return n.b.set(n.c, e, n.a)
                        }
                        )) : oe()
                    }
                    ))
                }
                ,
                _(Jf, yn),
                _(Yf, Xe),
                _(zf, Xe),
                e = Jf.prototype,
                e.mb = function(t) {
                    return t = this.h.mb(t),
                    ll(this, t)
                }
                ,
                e.sa = function(t) {
                    this.Z === t || this.l || (this.Z = t,
                    Ts(this.b, this.Z),
                    this.dispatchEvent(new Yf(this.ha())))
                }
                ,
                e.ha = function() {
                    return this.Z
                }
                ,
                e.Tc = function() {
                    var t = c.navigator;
                    this.sa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null)
                }
                ,
                e.vc = function(t) {
                    this.I.push(t),
                    ks(this.b, i.a.SDK_VERSION ? Fi(i.a.SDK_VERSION, this.I) : null),
                    this.dispatchEvent(new zf(this.I))
                }
                ,
                e.Aa = function() {
                    return z(this.I)
                }
                ,
                e.nb = function(t) {
                    this.P === t || this.l || (this.P = t,
                    this.b.b = this.P)
                }
                ,
                e.R = function() {
                    return this.P
                }
                ,
                e.toJSON = function() {
                    return {
                        apiKey: sl(this).options.apiKey,
                        authDomain: sl(this).options.authDomain,
                        appName: sl(this).name,
                        currentUser: ul(this) && ul(this).A()
                    }
                }
                ,
                e.xb = function(t, e) {
                    switch (t) {
                    case "unknown":
                    case "signInViaRedirect":
                        return !0;
                    case "signInViaPopup":
                        return this.g == e && !!this.f;
                    default:
                        return !1
                    }
                }
                ,
                e.ja = function(t, e, n, i) {
                    "signInViaPopup" == t && this.g == i && (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
                    this.c && (this.c.cancel(),
                    this.c = null),
                    delete this.f,
                    delete this.v)
                }
                ,
                e.za = function(t, e) {
                    return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? S(this.ac, this) : null
                }
                ,
                e.ac = function(t, e, n, i) {
                    var r = this;
                    t = {
                        requestUri: t,
                        postBody: i,
                        sessionId: e,
                        tenantId: n
                    },
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null
                      , a = null
                      , s = qs(r.b, t).then((function(t) {
                        return o = Zo(t),
                        a = lo(t),
                        t
                    }
                    ));
                    return t = r.Y.then((function() {
                        return s
                    }
                    )).then((function(t) {
                        return el(r, t)
                    }
                    )).then((function() {
                        return dr({
                            user: ul(r),
                            credential: o,
                            additionalUserInfo: a,
                            operationType: "signIn"
                        })
                    }
                    )),
                    ll(this, t)
                }
                ,
                e.Lc = function(t) {
                    if (!Bi())
                        return ae(new Ar("operation-not-supported-in-this-environment"));
                    var e = this
                      , n = fo(t.providerId)
                      , r = $i()
                      , o = null;
                    (!Xi() || Pi()) && sl(this).options.authDomain && t.isOAuthProvider && (o = Uu(sl(this).options.authDomain, sl(this).options.apiKey, sl(this).name, "signInViaPopup", t, null, r, i.a.SDK_VERSION || null, null, null, this.R()));
                    var a = Ei(o, n && n.Da, n && n.Ca);
                    return n = Zf(this).then((function(n) {
                        return wh(n, a, "signInViaPopup", t, r, !!o, e.R())
                    }
                    )).then((function() {
                        return new Zt((function(t, n) {
                            e.ja("signInViaPopup", null, new Ar("cancelled-popup-request"), e.g),
                            e.f = t,
                            e.v = n,
                            e.g = r,
                            e.c = kh(e.a, e, "signInViaPopup", a, r)
                        }
                        ))
                    }
                    )).then((function(t) {
                        return a && ki(a),
                        t ? dr(t) : null
                    }
                    )).s((function(t) {
                        throw a && ki(a),
                        t
                    }
                    )),
                    ll(this, n)
                }
                ,
                e.Mc = function(t) {
                    if (!Bi())
                        return ae(new Ar("operation-not-supported-in-this-environment"));
                    var e = this
                      , n = Zf(this).then((function() {
                        return Hf(e.h)
                    }
                    )).then((function() {
                        return Th(e.a, "signInViaRedirect", t, void 0, e.R())
                    }
                    ));
                    return ll(this, n)
                }
                ,
                e.oa = function() {
                    var t = this;
                    return tl(this).then((function(e) {
                        return t.a && _h(t.a.b),
                        e
                    }
                    )).s((function(e) {
                        throw t.a && _h(t.a.b),
                        e
                    }
                    ))
                }
                ,
                e.Rc = function(t) {
                    if (!t)
                        return ae(new Ar("null-user"));
                    if (this.P != t.tenantId)
                        return ae(new Ar("tenant-id-mismatch"));
                    var e = this
                      , n = {};
                    n.apiKey = sl(this).options.apiKey,
                    n.authDomain = sl(this).options.authDomain,
                    n.appName = sl(this).name;
                    var i = Cf(t, n, e.w, e.Aa());
                    return ll(this, this.i.then((function() {
                        if (sl(e).options.apiKey != t.l)
                            return i.reload()
                    }
                    )).then((function() {
                        return ul(e) && t.uid == ul(e).uid ? (bf(ul(e), t),
                        e.aa(t)) : (nl(e, i),
                        hf(i),
                        e.aa(i))
                    }
                    )).then((function() {
                        hl(e)
                    }
                    )))
                }
                ,
                e.pb = function() {
                    var t = this
                      , e = this.i.then((function() {
                        return t.a && _h(t.a.b),
                        ul(t) ? (nl(t, null),
                        Gf(t.h).then((function() {
                            hl(t)
                        }
                        ))) : oe()
                    }
                    ));
                    return ll(this, e)
                }
                ,
                e.Nc = function() {
                    var t = this;
                    return Wf(this.h, sl(this).options.authDomain).then((function(e) {
                        if (!t.l) {
                            var n;
                            if (n = ul(t) && e) {
                                n = ul(t).uid;
                                var i = e.uid;
                                n = void 0 !== n && null !== n && "" !== n && void 0 !== i && null !== i && "" !== i && n == i
                            }
                            if (n)
                                return bf(ul(t), e),
                                ul(t).G();
                            (ul(t) || e) && (nl(t, e),
                            e && (hf(e),
                            e.da = t.w),
                            t.a && mh(t.a, t),
                            hl(t))
                        }
                    }
                    ))
                }
                ,
                e.aa = function(t) {
                    return Bf(this.h, t)
                }
                ,
                e.bc = function() {
                    hl(this),
                    this.aa(ul(this))
                }
                ,
                e.mc = function() {
                    this.pb()
                }
                ,
                e.nc = function() {
                    this.pb()
                }
                ,
                e.oc = function(t) {
                    var e = this;
                    this.addAuthTokenListener((function() {
                        t.next(ul(e))
                    }
                    ))
                }
                ,
                e.pc = function(t) {
                    var e = this;
                    fl(this, (function() {
                        t.next(ul(e))
                    }
                    ))
                }
                ,
                e.xc = function(t, e, n) {
                    var i = this;
                    return this.ga && Promise.resolve().then((function() {
                        y(t) ? t(ul(i)) : y(t.next) && t.next(ul(i))
                    }
                    )),
                    this.Ub(t, e, n)
                }
                ,
                e.wc = function(t, e, n) {
                    var i = this;
                    return this.ga && Promise.resolve().then((function() {
                        i.W = i.getUid(),
                        y(t) ? t(ul(i)) : y(t.next) && t.next(ul(i))
                    }
                    )),
                    this.Vb(t, e, n)
                }
                ,
                e.cc = function(t) {
                    var e = this
                      , n = this.i.then((function() {
                        return ul(e) ? ul(e).G(t).then((function(t) {
                            return {
                                accessToken: t
                            }
                        }
                        )) : null
                    }
                    ));
                    return ll(this, n)
                }
                ,
                e.Hc = function(t) {
                    var e = this;
                    return this.i.then((function() {
                        return al(e, yu(e.b, pu, {
                            token: t
                        }))
                    }
                    )).then((function(t) {
                        var n = t.user;
                        return gf(n, "isAnonymous", !1),
                        e.aa(n),
                        t
                    }
                    ))
                }
                ,
                e.Ic = function(t, e) {
                    var n = this;
                    return this.i.then((function() {
                        return al(n, yu(n.b, vu, {
                            email: t,
                            password: e
                        }))
                    }
                    ))
                }
                ,
                e.Xb = function(t, e) {
                    var n = this;
                    return this.i.then((function() {
                        return al(n, yu(n.b, Js, {
                            email: t,
                            password: e
                        }))
                    }
                    ))
                }
                ,
                e.Ra = function(t) {
                    var e = this;
                    return this.i.then((function() {
                        return al(e, t.na(e.b))
                    }
                    ))
                }
                ,
                e.Gc = function(t) {
                    return cr("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),
                    this.Ra(t)
                }
                ,
                e.ob = function() {
                    var t = this;
                    return this.i.then((function() {
                        var e = ul(t);
                        if (e && e.isAnonymous) {
                            var n = dr({
                                providerId: null,
                                isNewUser: !1
                            });
                            return dr({
                                user: e,
                                credential: null,
                                additionalUserInfo: n,
                                operationType: "signIn"
                            })
                        }
                        return al(t, t.b.ob()).then((function(e) {
                            var n = e.user;
                            return gf(n, "isAnonymous", !0),
                            t.aa(n),
                            e
                        }
                        ))
                    }
                    ))
                }
                ,
                e.getUid = function() {
                    return ul(this) && ul(this).uid || null
                }
                ,
                e.Wb = function(t) {
                    this.addAuthTokenListener(t),
                    this.o++,
                    0 < this.o && ul(this) && of(ul(this))
                }
                ,
                e.Ec = function(t) {
                    var e = this;
                    K(this.m, (function(n) {
                        n == t && e.o--
                    }
                    )),
                    0 > this.o && (this.o = 0),
                    0 == this.o && ul(this) && af(ul(this)),
                    this.removeAuthTokenListener(t)
                }
                ,
                e.addAuthTokenListener = function(t) {
                    var e = this;
                    this.m.push(t),
                    ll(this, this.i.then((function() {
                        e.l || W(e.m, t) && t(cl(e))
                    }
                    )))
                }
                ,
                e.removeAuthTokenListener = function(t) {
                    J(this.m, (function(e) {
                        return e == t
                    }
                    ))
                }
                ,
                e.delete = function() {
                    this.l = !0;
                    for (var t = 0; t < this.O.length; t++)
                        this.O[t].cancel("app-deleted");
                    return this.O = [],
                    this.h && (t = this.h,
                    t.b.removeListener(qf("local"), t.a, this.ma)),
                    this.a && (gh(this.a, this),
                    _h(this.a.b)),
                    Promise.resolve()
                }
                ,
                e.$b = function(t) {
                    return ll(this, Ds(this.b, t))
                }
                ,
                e.qc = function(t) {
                    return !!Wo(t)
                }
                ,
                e.lb = function(t, e) {
                    var n = this;
                    return ll(this, oe().then((function() {
                        var t = new Vr(e);
                        if (!t.c)
                            throw new Ar("argument-error",qr + " must be true when sending sign in link to email");
                        return Yr(t)
                    }
                    )).then((function(e) {
                        return n.b.lb(t, e)
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.Uc = function(t) {
                    return this.Ka(t).then((function(t) {
                        return t.data.email
                    }
                    ))
                }
                ,
                e.$a = function(t, e) {
                    return ll(this, this.b.$a(t, e).then((function() {}
                    )))
                }
                ,
                e.Ka = function(t) {
                    return ll(this, this.b.Ka(t).then((function(t) {
                        return new gr(t)
                    }
                    )))
                }
                ,
                e.Xa = function(t) {
                    return ll(this, this.b.Xa(t).then((function() {}
                    )))
                }
                ,
                e.kb = function(t, e) {
                    var n = this;
                    return ll(this, oe().then((function() {
                        return "undefined" === typeof e || Z(e) ? {} : Yr(new Vr(e))
                    }
                    )).then((function(e) {
                        return n.b.kb(t, e)
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.Kc = function(t, e) {
                    return ll(this, Uh(this, t, e, S(this.Ra, this)))
                }
                ,
                e.Jc = function(t, e) {
                    var n = this;
                    return ll(this, oe().then((function() {
                        var i = e || bi()
                          , r = Go(t, i);
                        if (i = Wo(i),
                        !i)
                            throw new Ar("argument-error","Invalid email link!");
                        if (i.tenantId !== n.R())
                            throw new Ar("tenant-id-mismatch");
                        return n.Ra(r)
                    }
                    )))
                }
                ,
                dl.prototype.render = function() {}
                ,
                dl.prototype.reset = function() {}
                ,
                dl.prototype.getResponse = function() {}
                ,
                dl.prototype.execute = function() {}
                ;
                var vl = null;
                function ml(t, e) {
                    return (e = gl(e)) && t.a[e] || null
                }
                function gl(t) {
                    return (t = "undefined" === typeof t ? 1e12 : t) ? t.toString() : null
                }
                function bl(t, e) {
                    this.g = !1,
                    this.c = e,
                    this.a = this.b = null,
                    this.h = "invisible" !== this.c.size,
                    this.f = oi(t);
                    var n = this;
                    this.i = function() {
                        n.execute()
                    }
                    ,
                    this.h ? this.execute() : an(this.f, "click", this.i)
                }
                function yl(t) {
                    if (t.g)
                        throw Error("reCAPTCHA mock was already deleted!")
                }
                function wl() {}
                pl.prototype.render = function(t, e) {
                    return this.a[this.b.toString()] = new bl(t,e),
                    this.b++
                }
                ,
                pl.prototype.reset = function(t) {
                    var e = ml(this, t);
                    t = gl(t),
                    e && t && (e.delete(),
                    delete this.a[t])
                }
                ,
                pl.prototype.getResponse = function(t) {
                    return (t = ml(this, t)) ? t.getResponse() : null
                }
                ,
                pl.prototype.execute = function(t) {
                    (t = ml(this, t)) && t.execute()
                }
                ,
                bl.prototype.getResponse = function() {
                    return yl(this),
                    this.b
                }
                ,
                bl.prototype.execute = function() {
                    yl(this);
                    var t = this;
                    this.a || (this.a = setTimeout((function() {
                        t.b = xi();
                        var e = t.c.callback
                          , n = t.c["expired-callback"];
                        if (e)
                            try {
                                e(t.b)
                            } catch (i) {}
                        t.a = setTimeout((function() {
                            if (t.a = null,
                            t.b = null,
                            n)
                                try {
                                    n()
                                } catch (i) {}
                            t.h && t.execute()
                        }
                        ), 6e4)
                    }
                    ), 500))
                }
                ,
                bl.prototype.delete = function() {
                    yl(this),
                    this.g = !0,
                    clearTimeout(this.a),
                    this.a = null,
                    hn(this.f, "click", this.i)
                }
                ,
                wl.prototype.g = function() {
                    return vl || (vl = new pl),
                    oe(vl)
                }
                ,
                wl.prototype.c = function() {}
                ;
                var Il = null;
                function Tl() {
                    this.b = c.grecaptcha ? 1 / 0 : 0,
                    this.f = null,
                    this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
                }
                var kl = new nt(ot,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}")
                  , El = new tr(3e4,6e4);
                Tl.prototype.g = function(t) {
                    var e = this;
                    return new Zt((function(n, i) {
                        var r = setTimeout((function() {
                            i(new Ar("network-request-failed"))
                        }
                        ), El.get());
                        if (!c.grecaptcha || t !== e.f && !e.b) {
                            c[e.a] = function() {
                                if (c.grecaptcha) {
                                    e.f = t;
                                    var o = c.grecaptcha.render;
                                    c.grecaptcha.render = function(t, n) {
                                        return t = o(t, n),
                                        e.b++,
                                        t
                                    }
                                    ,
                                    clearTimeout(r),
                                    n(c.grecaptcha)
                                } else
                                    clearTimeout(r),
                                    i(new Ar("internal-error"));
                                delete c[e.a]
                            }
                            ;
                            var o = ct(kl, {
                                onload: e.a,
                                hl: t || ""
                            });
                            oe(ss(o)).s((function() {
                                clearTimeout(r),
                                i(new Ar("internal-error","Unable to load external reCAPTCHA dependencies!"))
                            }
                            ))
                        } else
                            clearTimeout(r),
                            n(c.grecaptcha)
                    }
                    ))
                }
                ,
                Tl.prototype.c = function() {
                    this.b--
                }
                ;
                var Sl = null;
                function Al(t, e, n, i, r, o, a) {
                    if (fr(this, "type", "recaptcha"),
                    this.c = this.f = null,
                    this.B = !1,
                    this.u = e,
                    this.g = null,
                    a ? (Il || (Il = new wl),
                    a = Il) : (Sl || (Sl = new Tl),
                    a = Sl),
                    this.m = a,
                    this.a = n || {
                        theme: "light",
                        type: "image"
                    },
                    this.h = [],
                    this.a[Ol])
                        throw new Ar("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                    if (this.i = "invisible" === this.a[Rl],
                    !c.document)
                        throw new Ar("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
                    if (!oi(e) || !this.i && oi(e).hasChildNodes())
                        throw new Ar("argument-error","reCAPTCHA container is either not found or already contains inner elements!");
                    this.o = new vs(t,o || null,r || null),
                    this.v = i || function() {
                        return null
                    }
                    ;
                    var s = this;
                    this.l = [];
                    var u = this.a[Nl];
                    this.a[Nl] = function(t) {
                        if (Pl(s, t),
                        "function" === typeof u)
                            u(t);
                        else if ("string" === typeof u) {
                            var e = qi(u, c);
                            "function" === typeof e && e(t)
                        }
                    }
                    ;
                    var h = this.a[_l];
                    this.a[_l] = function() {
                        if (Pl(s, null),
                        "function" === typeof h)
                            h();
                        else if ("string" === typeof h) {
                            var t = qi(h, c);
                            "function" === typeof t && t()
                        }
                    }
                }
                var Nl = "callback"
                  , _l = "expired-callback"
                  , Ol = "sitekey"
                  , Rl = "size";
                function Pl(t, e) {
                    for (var n = 0; n < t.l.length; n++)
                        try {
                            t.l[n](e)
                        } catch (i) {}
                }
                function Dl(t, e) {
                    J(t.l, (function(t) {
                        return t == e
                    }
                    ))
                }
                function Cl(t, e) {
                    return t.h.push(e),
                    e.ka((function() {
                        X(t.h, e)
                    }
                    )),
                    e
                }
                function Ll(t) {
                    if (t.B)
                        throw new Ar("internal-error","RecaptchaVerifier instance has been destroyed.")
                }
                function xl(t, e, n) {
                    var r = !1;
                    try {
                        this.b = n || i.a.app()
                    } catch (s) {
                        throw new Ar("argument-error","No firebase.app.App instance is currently initialized.")
                    }
                    if (!this.b.options || !this.b.options.apiKey)
                        throw new Ar("invalid-api-key");
                    n = this.b.options.apiKey;
                    var o = this
                      , a = null;
                    try {
                        a = this.b.auth().Aa()
                    } catch (s) {}
                    try {
                        r = this.b.auth().settings.appVerificationDisabledForTesting
                    } catch (s) {}
                    a = i.a.SDK_VERSION ? Fi(i.a.SDK_VERSION, a) : null,
                    Al.call(this, n, t, e, (function() {
                        try {
                            var t = o.b.auth().ha()
                        } catch (e) {
                            t = null
                        }
                        return t
                    }
                    ), a, so(oo), r)
                }
                function Ml(t, e, n, i) {
                    t: {
                        n = Array.prototype.slice.call(n);
                        for (var r = 0, o = !1, a = 0; a < e.length; a++)
                            if (e[a].optional)
                                o = !0;
                            else {
                                if (o)
                                    throw new Ar("internal-error","Argument validator encountered a required argument after an optional argument.");
                                r++
                            }
                        if (o = e.length,
                        n.length < r || o < n.length)
                            i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";
                        else {
                            for (r = 0; r < n.length; r++)
                                if (o = e[r].optional && void 0 === n[r],
                                !e[r].N(n[r]) && !o) {
                                    if (e = e[r],
                                    0 > r || r >= jl.length)
                                        throw new Ar("internal-error","Argument validator received an unsupported number of arguments.");
                                    n = jl[r],
                                    i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.M + ".";
                                    break t
                                }
                            i = null
                        }
                    }
                    if (i)
                        throw new Ar("argument-error",t + " failed: " + i)
                }
                e = Al.prototype,
                e.Ba = function() {
                    var t = this;
                    return this.f ? this.f : this.f = Cl(this, oe().then((function() {
                        if (Gi() && !Di())
                            return _i();
                        throw new Ar("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
                    }
                    )).then((function() {
                        return t.m.g(t.v())
                    }
                    )).then((function(e) {
                        return t.g = e,
                        yu(t.o, ou, {})
                    }
                    )).then((function(e) {
                        t.a[Ol] = e.recaptchaSiteKey
                    }
                    )).s((function(e) {
                        throw t.f = null,
                        e
                    }
                    )))
                }
                ,
                e.render = function() {
                    Ll(this);
                    var t = this;
                    return Cl(this, this.Ba().then((function() {
                        if (null === t.c) {
                            var e = t.u;
                            if (!t.i) {
                                var n = oi(e);
                                e = ui("DIV"),
                                n.appendChild(e)
                            }
                            t.c = t.g.render(e, t.a)
                        }
                        return t.c
                    }
                    )))
                }
                ,
                e.verify = function() {
                    Ll(this);
                    var t = this;
                    return Cl(this, this.render().then((function(e) {
                        return new Zt((function(n) {
                            var i = t.g.getResponse(e);
                            if (i)
                                n(i);
                            else {
                                var r = function(e) {
                                    e && (Dl(t, r),
                                    n(e))
                                };
                                t.l.push(r),
                                t.i && t.g.execute(t.c)
                            }
                        }
                        ))
                    }
                    )))
                }
                ,
                e.reset = function() {
                    Ll(this),
                    null !== this.c && this.g.reset(this.c)
                }
                ,
                e.clear = function() {
                    Ll(this),
                    this.B = !0,
                    this.m.c();
                    for (var t = 0; t < this.h.length; t++)
                        this.h[t].cancel("RecaptchaVerifier instance has been destroyed.");
                    if (!this.i) {
                        t = oi(this.u);
                        for (var e; e = t.firstChild; )
                            t.removeChild(e)
                    }
                }
                ,
                _(xl, Al);
                var jl = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");
                function Ul(t, e) {
                    return {
                        name: t || "",
                        M: "a valid string",
                        optional: !!e,
                        N: h
                    }
                }
                function Vl(t, e) {
                    return {
                        name: t || "",
                        M: "a boolean",
                        optional: !!e,
                        N: f
                    }
                }
                function Fl(t, e) {
                    return {
                        name: t || "",
                        M: "a valid object",
                        optional: !!e,
                        N: w
                    }
                }
                function Kl(t, e) {
                    return {
                        name: t || "",
                        M: "a function",
                        optional: !!e,
                        N: y
                    }
                }
                function ql(t, e) {
                    return {
                        name: t || "",
                        M: "null",
                        optional: !!e,
                        N: m
                    }
                }
                function Hl() {
                    return {
                        name: "",
                        M: "an HTML element",
                        optional: !1,
                        N: function(t) {
                            return !!(t && t instanceof Element)
                        }
                    }
                }
                function Bl() {
                    return {
                        name: "auth",
                        M: "an instance of Firebase Auth",
                        optional: !0,
                        N: function(t) {
                            return !!(t && t instanceof Jf)
                        }
                    }
                }
                function Gl() {
                    return {
                        name: "app",
                        M: "an instance of Firebase App",
                        optional: !0,
                        N: function(t) {
                            return !!(t && t instanceof i.a.app.App)
                        }
                    }
                }
                function Wl(t) {
                    return {
                        name: t ? t + "Credential" : "credential",
                        M: t ? "a valid " + t + " credential" : "a valid credential",
                        optional: !1,
                        N: function(e) {
                            if (!e)
                                return !1;
                            var n = !t || e.providerId === t;
                            return !(!e.na || !n)
                        }
                    }
                }
                function Xl() {
                    return {
                        name: "authProvider",
                        M: "a valid Auth provider",
                        optional: !1,
                        N: function(t) {
                            return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
                        }
                    }
                }
                function Jl() {
                    return {
                        name: "applicationVerifier",
                        M: "an implementation of firebase.auth.ApplicationVerifier",
                        optional: !1,
                        N: function(t) {
                            return !!(t && h(t.type) && y(t.verify))
                        }
                    }
                }
                function Yl(t, e, n, i) {
                    return {
                        name: n || "",
                        M: t.M + " or " + e.M,
                        optional: !!i,
                        N: function(n) {
                            return t.N(n) || e.N(n)
                        }
                    }
                }
                function zl(t, e) {
                    for (var n in e) {
                        var i = e[n].name;
                        t[i] = Ql(i, t[n], e[n].j)
                    }
                }
                function $l(t, e) {
                    for (var n in e) {
                        var i = e[n].name;
                        i !== n && Object.defineProperty(t, i, {
                            get: A((function(t) {
                                return this[t]
                            }
                            ), n),
                            set: A((function(t, e, n, i) {
                                Ml(t, [n], [i], !0),
                                this[e] = i
                            }
                            ), i, n, e[n].Ya),
                            enumerable: !0
                        })
                    }
                }
                function Zl(t, e, n, i) {
                    t[e] = Ql(e, n, i)
                }
                function Ql(t, e, n) {
                    function i() {
                        var t = Array.prototype.slice.call(arguments);
                        return Ml(o, n, t),
                        e.apply(this, t)
                    }
                    if (!n)
                        return e;
                    var r, o = td(t);
                    for (r in e)
                        i[r] = e[r];
                    for (r in e.prototype)
                        i.prototype[r] = e.prototype[r];
                    return i
                }
                function td(t) {
                    return t = t.split("."),
                    t[t.length - 1]
                }
                zl(Jf.prototype, {
                    Xa: {
                        name: "applyActionCode",
                        j: [Ul("code")]
                    },
                    Ka: {
                        name: "checkActionCode",
                        j: [Ul("code")]
                    },
                    $a: {
                        name: "confirmPasswordReset",
                        j: [Ul("code"), Ul("newPassword")]
                    },
                    Xb: {
                        name: "createUserWithEmailAndPassword",
                        j: [Ul("email"), Ul("password")]
                    },
                    $b: {
                        name: "fetchSignInMethodsForEmail",
                        j: [Ul("email")]
                    },
                    oa: {
                        name: "getRedirectResult",
                        j: []
                    },
                    qc: {
                        name: "isSignInWithEmailLink",
                        j: [Ul("emailLink")]
                    },
                    wc: {
                        name: "onAuthStateChanged",
                        j: [Yl(Fl(), Kl(), "nextOrObserver"), Kl("opt_error", !0), Kl("opt_completed", !0)]
                    },
                    xc: {
                        name: "onIdTokenChanged",
                        j: [Yl(Fl(), Kl(), "nextOrObserver"), Kl("opt_error", !0), Kl("opt_completed", !0)]
                    },
                    kb: {
                        name: "sendPasswordResetEmail",
                        j: [Ul("email"), Yl(Fl("opt_actionCodeSettings", !0), ql(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    lb: {
                        name: "sendSignInLinkToEmail",
                        j: [Ul("email"), Fl("actionCodeSettings")]
                    },
                    mb: {
                        name: "setPersistence",
                        j: [Ul("persistence")]
                    },
                    Gc: {
                        name: "signInAndRetrieveDataWithCredential",
                        j: [Wl()]
                    },
                    ob: {
                        name: "signInAnonymously",
                        j: []
                    },
                    Ra: {
                        name: "signInWithCredential",
                        j: [Wl()]
                    },
                    Hc: {
                        name: "signInWithCustomToken",
                        j: [Ul("token")]
                    },
                    Ic: {
                        name: "signInWithEmailAndPassword",
                        j: [Ul("email"), Ul("password")]
                    },
                    Jc: {
                        name: "signInWithEmailLink",
                        j: [Ul("email"), Ul("emailLink", !0)]
                    },
                    Kc: {
                        name: "signInWithPhoneNumber",
                        j: [Ul("phoneNumber"), Jl()]
                    },
                    Lc: {
                        name: "signInWithPopup",
                        j: [Xl()]
                    },
                    Mc: {
                        name: "signInWithRedirect",
                        j: [Xl()]
                    },
                    Rc: {
                        name: "updateCurrentUser",
                        j: [Yl(function(t) {
                            return {
                                name: "user",
                                M: "an instance of Firebase User",
                                optional: !!t,
                                N: function(t) {
                                    return !!(t && t instanceof Zh)
                                }
                            }
                        }(), ql(), "user")]
                    },
                    pb: {
                        name: "signOut",
                        j: []
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [Ul(null, !0)]
                    },
                    Tc: {
                        name: "useDeviceLanguage",
                        j: []
                    },
                    Uc: {
                        name: "verifyPasswordResetCode",
                        j: [Ul("code")]
                    }
                }),
                $l(Jf.prototype, {
                    lc: {
                        name: "languageCode",
                        Ya: Yl(Ul(), ql(), "languageCode")
                    },
                    ti: {
                        name: "tenantId",
                        Ya: Yl(Ul(), ql(), "tenantId")
                    }
                }),
                Jf.Persistence = Sc,
                Jf.Persistence.LOCAL = "local",
                Jf.Persistence.SESSION = "session",
                Jf.Persistence.NONE = "none",
                zl(Zh.prototype, {
                    delete: {
                        name: "delete",
                        j: []
                    },
                    dc: {
                        name: "getIdTokenResult",
                        j: [Vl("opt_forceRefresh", !0)]
                    },
                    G: {
                        name: "getIdToken",
                        j: [Vl("opt_forceRefresh", !0)]
                    },
                    rc: {
                        name: "linkAndRetrieveDataWithCredential",
                        j: [Wl()]
                    },
                    eb: {
                        name: "linkWithCredential",
                        j: [Wl()]
                    },
                    sc: {
                        name: "linkWithPhoneNumber",
                        j: [Ul("phoneNumber"), Jl()]
                    },
                    tc: {
                        name: "linkWithPopup",
                        j: [Xl()]
                    },
                    uc: {
                        name: "linkWithRedirect",
                        j: [Xl()]
                    },
                    Ac: {
                        name: "reauthenticateAndRetrieveDataWithCredential",
                        j: [Wl()]
                    },
                    gb: {
                        name: "reauthenticateWithCredential",
                        j: [Wl()]
                    },
                    Bc: {
                        name: "reauthenticateWithPhoneNumber",
                        j: [Ul("phoneNumber"), Jl()]
                    },
                    Cc: {
                        name: "reauthenticateWithPopup",
                        j: [Xl()]
                    },
                    Dc: {
                        name: "reauthenticateWithRedirect",
                        j: [Xl()]
                    },
                    reload: {
                        name: "reload",
                        j: []
                    },
                    jb: {
                        name: "sendEmailVerification",
                        j: [Yl(Fl("opt_actionCodeSettings", !0), ql(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [Ul(null, !0)]
                    },
                    Qc: {
                        name: "unlink",
                        j: [Ul("provider")]
                    },
                    rb: {
                        name: "updateEmail",
                        j: [Ul("email")]
                    },
                    sb: {
                        name: "updatePassword",
                        j: [Ul("password")]
                    },
                    Sc: {
                        name: "updatePhoneNumber",
                        j: [Wl("phone")]
                    },
                    tb: {
                        name: "updateProfile",
                        j: [Fl("profile")]
                    }
                }),
                zl(pl.prototype, {
                    execute: {
                        name: "execute"
                    },
                    render: {
                        name: "render"
                    },
                    reset: {
                        name: "reset"
                    },
                    getResponse: {
                        name: "getResponse"
                    }
                }),
                zl(dl.prototype, {
                    execute: {
                        name: "execute"
                    },
                    render: {
                        name: "render"
                    },
                    reset: {
                        name: "reset"
                    },
                    getResponse: {
                        name: "getResponse"
                    }
                }),
                zl(Zt.prototype, {
                    ka: {
                        name: "finally"
                    },
                    s: {
                        name: "catch"
                    },
                    then: {
                        name: "then"
                    }
                }),
                $l(Mh.prototype, {
                    appVerificationDisabled: {
                        name: "appVerificationDisabledForTesting",
                        Ya: Vl("appVerificationDisabledForTesting")
                    }
                }),
                zl(jh.prototype, {
                    confirm: {
                        name: "confirm",
                        j: [Ul("verificationCode")]
                    }
                }),
                Zl(ko, "fromJSON", (function(t) {
                    t = h(t) ? JSON.parse(t) : t;
                    for (var e, n = [Ro, Ho, Jo, No], i = 0; i < n.length; i++)
                        if (e = n[i](t))
                            return e;
                    return null
                }
                ), [Yl(Ul(), Fl(), "json")]),
                Zl(Bo, "credential", (function(t, e) {
                    return new qo(t,e)
                }
                ), [Ul("email"), Ul("password")]),
                zl(qo.prototype, {
                    A: {
                        name: "toJSON",
                        j: [Ul(null, !0)]
                    }
                }),
                zl(Lo.prototype, {
                    wa: {
                        name: "addScope",
                        j: [Ul("scope")]
                    },
                    Ea: {
                        name: "setCustomParameters",
                        j: [Fl("customOAuthParameters")]
                    }
                }),
                Zl(Lo, "credential", xo, [Yl(Ul(), Fl(), "token")]),
                Zl(Bo, "credentialWithLink", Go, [Ul("email"), Ul("emailLink")]),
                zl(Mo.prototype, {
                    wa: {
                        name: "addScope",
                        j: [Ul("scope")]
                    },
                    Ea: {
                        name: "setCustomParameters",
                        j: [Fl("customOAuthParameters")]
                    }
                }),
                Zl(Mo, "credential", jo, [Yl(Ul(), Fl(), "token")]),
                zl(Uo.prototype, {
                    wa: {
                        name: "addScope",
                        j: [Ul("scope")]
                    },
                    Ea: {
                        name: "setCustomParameters",
                        j: [Fl("customOAuthParameters")]
                    }
                }),
                Zl(Uo, "credential", Vo, [Yl(Ul(), Yl(Fl(), ql()), "idToken"), Yl(Ul(), ql(), "accessToken", !0)]),
                zl(Fo.prototype, {
                    Ea: {
                        name: "setCustomParameters",
                        j: [Fl("customOAuthParameters")]
                    }
                }),
                Zl(Fo, "credential", Ko, [Yl(Ul(), Fl(), "token"), Ul("secret", !0)]),
                zl(Co.prototype, {
                    wa: {
                        name: "addScope",
                        j: [Ul("scope")]
                    },
                    credential: {
                        name: "credential",
                        j: [Yl(Ul(), Yl(Fl(), ql()), "optionsOrIdToken"), Yl(Ul(), ql(), "accessToken", !0)]
                    },
                    Ea: {
                        name: "setCustomParameters",
                        j: [Fl("customOAuthParameters")]
                    }
                }),
                zl(_o.prototype, {
                    A: {
                        name: "toJSON",
                        j: [Ul(null, !0)]
                    }
                }),
                zl(So.prototype, {
                    A: {
                        name: "toJSON",
                        j: [Ul(null, !0)]
                    }
                }),
                Zl(zo, "credential", $o, [Ul("verificationId"), Ul("verificationCode")]),
                zl(zo.prototype, {
                    Va: {
                        name: "verifyPhoneNumber",
                        j: [Ul("phoneNumber"), Jl()]
                    }
                }),
                zl(Xo.prototype, {
                    A: {
                        name: "toJSON",
                        j: [Ul(null, !0)]
                    }
                }),
                zl(Ar.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Ul(null, !0)]
                    }
                }),
                zl(sa.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Ul(null, !0)]
                    }
                }),
                zl(aa.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Ul(null, !0)]
                    }
                }),
                zl(xl.prototype, {
                    clear: {
                        name: "clear",
                        j: []
                    },
                    render: {
                        name: "render",
                        j: []
                    },
                    verify: {
                        name: "verify",
                        j: []
                    }
                }),
                Zl(Rr, "parseLink", Ur, [Ul("link")]),
                function() {
                    if ("undefined" === typeof i.a || !i.a.INTERNAL || !i.a.INTERNAL.registerService)
                        throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                    var t = {
                        ActionCodeInfo: {
                            Operation: {
                                EMAIL_SIGNIN: br,
                                PASSWORD_RESET: "PASSWORD_RESET",
                                RECOVER_EMAIL: "RECOVER_EMAIL",
                                VERIFY_EMAIL: "VERIFY_EMAIL"
                            }
                        },
                        Auth: Jf,
                        AuthCredential: ko,
                        Error: Ar
                    };
                    Zl(t, "EmailAuthProvider", Bo, []),
                    Zl(t, "FacebookAuthProvider", Lo, []),
                    Zl(t, "GithubAuthProvider", Mo, []),
                    Zl(t, "GoogleAuthProvider", Uo, []),
                    Zl(t, "TwitterAuthProvider", Fo, []),
                    Zl(t, "OAuthProvider", Co, [Ul("providerId")]),
                    Zl(t, "SAMLAuthProvider", Do, [Ul("providerId")]),
                    Zl(t, "PhoneAuthProvider", zo, [Bl()]),
                    Zl(t, "RecaptchaVerifier", xl, [Yl(Ul(), Hl(), "recaptchaContainer"), Fl("recaptchaParameters", !0), Gl()]),
                    Zl(t, "ActionCodeURL", Rr, []),
                    i.a.INTERNAL.registerService("auth", (function(t, e) {
                        return t = new Jf(t),
                        e({
                            INTERNAL: {
                                getUid: S(t.getUid, t),
                                getToken: S(t.cc, t),
                                addAuthTokenListener: S(t.Wb, t),
                                removeAuthTokenListener: S(t.Ec, t)
                            }
                        }),
                        t
                    }
                    ), t, (function(t, e) {
                        if ("create" === t)
                            try {
                                e.auth()
                            } catch (n) {}
                    }
                    )),
                    i.a.INTERNAL.extendNamespace({
                        User: Zh
                    })
                }()
            }
            ).apply("undefined" !== typeof t ? t : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
        }
        ).call(this, n("c8ba"))
    },
    ea7b: function(t, e, n) {
        "use strict";
        n.r(e);
        n("b7aa")
    }
}]);
//# sourceMappingURL=firebase-auth.ecf3f748.js.map
