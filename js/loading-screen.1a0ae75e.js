(function(e) {
    function t(t) {
        for (var o, a, s = t[0], u = t[1], c = t[2], l = 0, f = []; l < s.length; l++)
            a = s[l],
            Object.prototype.hasOwnProperty.call(r, a) && r[a] && f.push(r[a][0]),
            r[a] = 0;
        for (o in u)
            Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
        d && d(t);
        while (f.length)
            f.shift()();
        return i.push.apply(i, c || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, s = 1; s < n.length; s++) {
                var u = n[s];
                0 !== r[u] && (o = !1)
            }
            o && (i.splice(t--, 1),
            e = a(a.s = n[0]))
        }
        return e
    }
    var o = {}
      , r = {
        "loading-screen": 0
    }
      , i = [];
    function a(t) {
        if (o[t])
            return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a),
        n.l = !0,
        n.exports
    }
    a.m = e,
    a.c = o,
    a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    a.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(e, t) {
        if (1 & t && (e = a(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (a.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                a.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return a.d(t, "a", t),
        t
    }
    ,
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    a.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
      , u = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var c = 0; c < s.length; c++)
        t(s[c]);
    var d = u;
    i.push(["e69b", "chunk-vendors"]),
    n()
}
)({
    "06c5": function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return o
        }
        )),
        n.d(t, "e", (function() {
            return r
        }
        )),
        n.d(t, "c", (function() {
            return i
        }
        )),
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return s
        }
        )),
        n.d(t, "f", (function() {
            return u
        }
        ));
        const o = 27
          , r = 32
          , i = 13
          , a = 8
          , s = 65
          , u = 90
    },
    "152b": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        }
        )),
        n.d(t, "a", (function() {
            return a
        }
        )),
        n.d(t, "c", (function() {
            return u
        }
        ));
        var o = n("06c5");
        const r = ["EMAIL", "TEXT", "PASSWORD", "FILE"]
          , i = e=>{
            if (e.keyCode !== o["b"])
                return;
            const t = e.srcElement || e.target;
            if (!t || !t.tagName)
                return;
            const n = t.tagName.toUpperCase()
              , i = (t.type || "").toUpperCase();
            let a = !0;
            ("INPUT" === n && r.includes(i) || "TEXTAREA" === n) && (a = t.readOnly || t.disabled),
            a && e.preventDefault()
        }
          , a = e=>{
            const t = document.createEvent("Event");
            t.initEvent(e, !0, !0),
            document.dispatchEvent(t)
        }
          , s = (e=document.body,t,n=!0)=>{
            const o = document.createEvent("MouseEvents");
            o.initMouseEvent(t, !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
            o.simulated = n,
            e.dispatchEvent(o)
        }
          , u = (e=document.body,t=!0)=>s(e, "mouseup", t)
    },
    "2ae7": function(e, t, n) {
        "use strict";
        function o() {
            const e = document.createElement("fakeelement")
              , t = {
                animation: "a",
                WebkitAnimation: "webkitA"
            }
              , n = Object.keys(t).find(t=>void 0 !== e.style[t]) || "animation";
            return t[n]
        }
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        const r = "transitionend"
          , i = `${o()}nimationend`;
        o()
    },
    "571d": function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return o
        }
        )),
        n.d(t, "e", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        )),
        n.d(t, "b", (function() {
            return a
        }
        )),
        n.d(t, "c", (function() {
            return s
        }
        ));
        const o = window.PointerEvent ? ["pointerdown"] : ["mousedown", "touchstart"]
          , r = (window.PointerEvent,
        window.PointerEvent ? ["pointerup"] : ["mouseup", "touchend"])
          , i = "GAME_READY"
          , a = "PLAY"
          , s = "PLAY_NOT_READY"
    },
    "6e95": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        var o = n("2b0e");
        new o["a"];
        const r = o["a"]
    },
    7897: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "b", (function() {
            return r
        }
        ));
        const o = e=>{
            if (!e)
                return null;
            try {
                const t = localStorage.getItem(e);
                if (!t)
                    return null;
                const n = JSON.parse(t);
                return n
            } catch (t) {
                return null
            }
        }
          , r = (e,t)=>{
            if (e)
                try {
                    localStorage.setItem(e, JSON.stringify(t))
                } catch (n) {
                    console.error(n)
                }
        }
    },
    8233: function(e, t, n) {
        "use strict";
        n("8f17")
    },
    "8f17": function(e, t, n) {},
    d257: function(e, t, n) {
        "use strict";
        n("e6cf");
        var o = n("2ae7");
        const r = (e,t="animationend")=>new Promise(n=>{
            const o = ()=>{
                e.removeEventListener(t, o),
                n()
            }
            ;
            e.addEventListener(t, o)
        }
        )
          , i = e=>{
            const {className: t} = e;
            e.className = "",
            e.offsetWidth,
            e.className = t
        }
          , a = (e,t)=>(e.addEventListener(o["a"], t, !1),
        ()=>e.removeEventListener(o["a"], t))
          , s = (e,t)=>a(e, ({animationName: e})=>t(e))
          , u = (e,t)=>(e.addEventListener(o["b"], t, !1),
        ()=>e.removeEventListener(o["b"], t))
          , c = e=>new Promise(t=>window.setTimeout(t, e))
          , d = e=>window.setTimeout(e, 0)
          , l = window.requestAnimationFrame ? ()=>new Promise(e=>requestAnimationFrame(()=>e())) : ()=>c(0);
        n("e25e");
        const f = ["Webkit", "Moz", "ms", "Ms", "O"]
          , m = document.documentElement.style
          , p = window.getComputedStyle ? e=>getComputedStyle(e, null) : e=>e.currentStyle
          , h = e=>{
            if ("string" === typeof m[e])
                return e;
            const t = `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
            let n;
            for (let o = 0, r = f.length; o < r; o++)
                if (n = f[o] + t,
                "string" === typeof m[n])
                    return n;
            return e
        }
          , y = e=>{
            const t = getComputedStyle(e);
            return e.offsetHeight + parseInt(t.marginTop || "0", 10) + parseInt(t.marginBottom || "0", 10)
        }
        ;
        n("2532");
        var w = n("0347");
        const g = Object(w["a"])()
          , v = g.any
          , b = navigator.userAgent
          , E = ()=>/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
          , k = ()=>/Edge/.test(navigator.userAgent)
          , P = ()=>(b.includes("Chrome") || b.includes("Chromium")) && !k()
          , O = ()=>b.includes("Safari") && !P() && !k()
          , C = ()=>E() && P()
          , A = (e,t)=>{
            let n = t.parentNode;
            while (null !== n) {
                if (n === e)
                    return !0;
                n = n.parentNode
            }
            return !1
        }
          , S = e=>{
            e.parentNode && e.parentNode.appendChild(e)
        }
          , M = e=>new Promise((t,n)=>{
            const o = new XMLHttpRequest;
            o.open("get", e, !0),
            o.responseType = "json",
            o.onload = ()=>{
                200 === o.status ? t(o.response) : n(o.status)
            }
            ,
            o.send()
        }
        );
        n("e260"),
        n("ddb0");
        const j = (e,...t)=>{}
          , _ = (e,t,n)=>{}
          , T = (e,t)=>{
            e.scrollTop = t
        }
          , N = e=>e.scrollY || e.scrollTop
          , L = e=>"getComputedStyle"in window && "smooth" === window.getComputedStyle(e)["scroll-behavior"]
          , R = (e,t,n=250)=>{
            if (0 === n || L(e))
                return void T(e, t);
            const o = N(e)
              , r = Math.max(0, t) - o
              , i = (new Date).getTime()
              , a = n || Math.min(Math.abs(r), n);
            (function t() {
                setTimeout(()=>{
                    const n = Math.min(1, ((new Date).getTime() - i) / a)
                      , s = n < .5 ? 2 * n * n : n * (4 - 2 * n) - 1
                      , u = Math.max(0, Math.floor(o + r * s));
                    T(e, u),
                    n < 1 && t()
                }
                , 9)
            }
            )()
        }
          , $ = e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`
          , x = 60
          , q = 60 * x
          , D = 24 * q
          , I = e=>{
            const t = Date.now()
              , n = Math.round((t - e) / 1e3)
              , o = Math.floor(n / D)
              , r = Math.floor((n - o * D) / q)
              , i = Math.floor((n - o * D - r * q) / x);
            return {
                days: o,
                hours: r,
                minutes: i
            }
        }
          , G = e=>{
            const {days: t, hours: n, minutes: o} = I(e);
            return 0 === t && 0 === n && o < 2 ? "just now" : 0 === t && 0 === n ? `${o} minutes ago` : 0 === t && 1 === n ? `${n} hour ${o} minutes ago` : 0 === t && n < 3 ? `${n} hours ${o} minutes ago` : 0 === t ? `${n} hours ago` : 1 === t ? `${t} day ago` : `${t} days ago`
        }
          , H = (e,t)=>{
            const n = new XMLHttpRequest;
            return n.open("POST", e, !0),
            n.setRequestHeader("Content-type", "application/json"),
            n.send(JSON.stringify(t)),
            new Promise((e,t)=>{
                n.onload = ()=>e(n.response),
                n.onerror = t
            }
            )
        }
          , J = e=>{
            const t = new XMLHttpRequest;
            return t.open("GET", e, !0),
            t.send(),
            new Promise((e,n)=>{
                t.onload = ()=>e(t.response),
                t.onerror = n
            }
            )
        }
        ;
        n.d(t, "t", (function() {
            return r
        }
        )),
        n.d(t, "y", (function() {
            return i
        }
        )),
        n.d(t, "s", (function() {
            return a
        }
        )),
        n.d(t, "u", (function() {
            return s
        }
        )),
        n.d(t, "v", (function() {
            return u
        }
        )),
        n.d(t, "c", (function() {
            return c
        }
        )),
        n.d(t, "b", (function() {
            return d
        }
        )),
        n.d(t, "r", (function() {
            return l
        }
        )),
        n.d(t, "g", (function() {
            return p
        }
        )),
        n.d(t, "h", (function() {
            return h
        }
        )),
        n.d(t, "e", (function() {
            return y
        }
        )),
        n.d(t, "o", (function() {
            return v
        }
        )),
        n.d(t, "n", (function() {
            return E
        }
        )),
        n.d(t, "l", (function() {
            return k
        }
        )),
        n.d(t, "j", (function() {
            return P
        }
        )),
        n.d(t, "p", (function() {
            return O
        }
        )),
        n.d(t, "k", (function() {
            return C
        }
        )),
        n.d(t, "m", (function() {
            return A
        }
        )),
        n.d(t, "x", (function() {
            return S
        }
        )),
        n.d(t, "d", (function() {
            return M
        }
        )),
        n.d(t, "q", (function() {
            return j
        }
        )),
        n.d(t, "A", (function() {
            return _
        }
        )),
        n.d(t, "z", (function() {
            return R
        }
        )),
        n.d(t, "a", (function() {
            return $
        }
        )),
        n.d(t, "i", (function() {
            return G
        }
        )),
        n.d(t, "w", (function() {
            return H
        }
        )),
        n.d(t, "f", (function() {
            return J
        }
        ))
    },
    e69b: function(e, t, n) {
        "use strict";
        n.r(t);
        n("37e1");
        var o = n("2b0e")
          , r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return e.visible ? n("main", {
                staticClass: "loading-screen",
                attrs: {
                    id: "loading-screen"
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.onClick(t)
                    }
                }
            }, [n("div", {
                staticClass: "loading-screen-container"
            }, [n("div", {
                staticClass: "btn",
                class: e.classes,
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.onClick(t)
                    }
                }
            }, [n("span", {
                staticClass: "label"
            }, [e._v("play")]), e._m(0)]), n("img", {
                ref: "logo",
                attrs: {
                    alt: "logo"
                }
            })])]) : e._e()
        }
          , i = [function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "loading-screen-button-animation"
            }, [n("div"), n("div"), n("div"), n("div")])
        }
        ]
          , a = (n("e6cf"),
        n("6e95"))
          , s = n("571d")
          , u = n("152b");
        const c = (e,t)=>{
            if (!window.google_optimize)
                return "original";
            const n = window.google_optimize.get(e);
            return 0 !== n && t[n] ? t[n] : "original"
        }
        ;
        var d = n("d257")
          , l = n("7897");
        const f = 1100;
        var m = a["a"].extend({
            name: "loading-screen",
            data: ()=>({
                visible: !0,
                clicked: !1,
                ready: !1
            }),
            computed: {
                classes() {
                    return {
                        "js-ready": this.ready
                    }
                }
            },
            mounted() {
                this.$refs.logo.src = "static/img/logo.svg",
                this.onGameReady = this.onGameReady.bind(this),
                document.addEventListener(s["a"], this.onGameReady, !1);
                const e = document.querySelector("#loading-screen .btn");
                e && (e.removeEventListener("mousedown", window.playClickNotReady, !1),
                e.removeEventListener("touchstart", window.playClickNotReady, !1),
                window.playClickNotReady = null)
            },
            methods: {
                onClick() {
                    this.clicked = !0,
                    this.checkPlay()
                },
                async onGameReady() {
                    document.removeEventListener(s["a"], this.onGameReady, !1);
                    const e = this.getAutohideVariant();
                    "hide" === e ? (await Object(d["c"])(30),
                    this.play()) : "hideAfterDelay" === e ? (await Object(d["c"])(f),
                    this.play()) : (this.ready = !0,
                    this.checkPlay())
                },
                checkPlay() {
                    this.ready && this.clicked ? this.play() : this.ready || Object(u["a"])(s["c"])
                },
                play() {
                    Object(u["a"])(s["b"]),
                    this.visible = !1,
                    this.$nextTick(()=>this.$destroy())
                },
                getAutohideVariant() {
                    const e = "experiment-auto-hide";
                    let t = Object(l["a"])(e);
                    return null !== t ? t : (t = c("O_ZkAo4qS_yyPKq34rk6FA", {
                        1: "hide",
                        2: "hideAfterDelay"
                    }),
                    Object(l["b"])(e, t),
                    t)
                }
            }
        })
          , p = m
          , h = (n("8233"),
        n("2877"))
          , y = Object(h["a"])(p, r, i, !1, null, null, null)
          , w = y.exports;
        o["a"].config.productionTip = !1,
        o["a"].config.devtools = !1,
        o["a"].config.silent = !0,
        window.playClickNotReady = ()=>{
            if (!window.ga)
                return;
            const e = window.performance && window.performance.now ? window.performance.now() : (new Date).getTime();
            window.ga("send", "event", "metrics", "not_ready_play_click", "timing", e, {
                nonInteraction: !0
            })
        }
        ;
        const g = document.querySelector("#loading-screen .btn");
        g && (g.addEventListener("mousedown", window.playClickNotReady, !1),
        g.addEventListener("touchstart", window.playClickNotReady, !1));
        const v = o["a"].extend(w)
          , b = new v;
        b.$mount("#loading-screen", !0)
    }
});
//# sourceMappingURL=loading-screen.1a0ae75e.js.map
