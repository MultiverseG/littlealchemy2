(function(t) {
    function e(e) {
        for (var i, n, o = e[0], c = e[1], l = e[2], h = 0, d = []; h < o.length; h++)
            n = o[h],
            Object.prototype.hasOwnProperty.call(a, n) && a[n] && d.push(a[n][0]),
            a[n] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        u && u(e);
        while (d.length)
            d.shift()();
        return r.push.apply(r, l || []),
        s()
    }
    function s() {
        for (var t, e = 0; e < r.length; e++) {
            for (var s = r[e], i = !0, n = 1; n < s.length; n++) {
                var o = s[n];
                0 !== a[o] && (i = !1)
            }
            i && (r.splice(e--, 1),
            t = c(c.s = s[0]))
        }
        return t
    }
    var i = {}
      , n = {
        app: 0
    }
      , a = {
        app: 0
    }
      , r = [];
    function o(t) {
        return c.p + "js/" + ({
            animations: "animations",
            descriptions: "descriptions",
            "firebase-app-firebase-auth-firebase-database-firebase-messaging": "firebase-app-firebase-auth-firebase-database-firebase-messaging",
            "firebase-app": "firebase-app",
            "firebase-auth": "firebase-auth",
            "firebase-database": "firebase-database",
            "firebase-messaging": "firebase-messaging",
            "firebase-database-handler": "firebase-database-handler",
            iscroll: "iscroll",
            popups: "popups",
            tags: "tags",
            tutorials: "tutorials",
            "completion-animation": "completion-animation",
            "end-animation": "end-animation",
            login: "login"
        }[t] || t) + "." + {
            animations: "abdd8716",
            descriptions: "fa967da2",
            "firebase-app-firebase-auth-firebase-database-firebase-messaging": "469a5e9f",
            "firebase-app": "747c86bd",
            "firebase-auth": "ecf3f748",
            "firebase-database": "9405483c",
            "firebase-messaging": "cc420f37",
            "firebase-database-handler": "8e6f5eec",
            iscroll: "395ab9b8",
            popups: "c486b38e",
            tags: "2b188878",
            tutorials: "b81cab1a",
            "completion-animation": "d62adb7e",
            "end-animation": "baa89351",
            login: "fbffc1f9"
        }[t] + ".js"
    }
    function c(e) {
        if (i[e])
            return i[e].exports;
        var s = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, c),
        s.l = !0,
        s.exports
    }
    c.e = function(t) {
        var e = []
          , s = {
            "completion-animation": 1,
            "end-animation": 1
        };
        n[t] ? e.push(n[t]) : 0 !== n[t] && s[t] && e.push(n[t] = new Promise((function(e, s) {
            for (var i = "css/" + ({
                animations: "animations",
                descriptions: "descriptions",
                "firebase-app-firebase-auth-firebase-database-firebase-messaging": "firebase-app-firebase-auth-firebase-database-firebase-messaging",
                "firebase-app": "firebase-app",
                "firebase-auth": "firebase-auth",
                "firebase-database": "firebase-database",
                "firebase-messaging": "firebase-messaging",
                "firebase-database-handler": "firebase-database-handler",
                iscroll: "iscroll",
                popups: "popups",
                tags: "tags",
                tutorials: "tutorials",
                "completion-animation": "completion-animation",
                "end-animation": "end-animation",
                login: "login"
            }[t] || t) + "." + {
                animations: "31d6cfe0",
                descriptions: "31d6cfe0",
                "firebase-app-firebase-auth-firebase-database-firebase-messaging": "31d6cfe0",
                "firebase-app": "31d6cfe0",
                "firebase-auth": "31d6cfe0",
                "firebase-database": "31d6cfe0",
                "firebase-messaging": "31d6cfe0",
                "firebase-database-handler": "31d6cfe0",
                iscroll: "31d6cfe0",
                popups: "31d6cfe0",
                tags: "31d6cfe0",
                tutorials: "31d6cfe0",
                "completion-animation": "c4e2327d",
                "end-animation": "70433b4d",
                login: "31d6cfe0"
            }[t] + ".css", a = c.p + i, r = document.getElementsByTagName("link"), o = 0; o < r.length; o++) {
                var l = r[o]
                  , h = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (h === i || h === a))
                    return e()
            }
            var d = document.getElementsByTagName("style");
            for (o = 0; o < d.length; o++) {
                l = d[o],
                h = l.getAttribute("data-href");
                if (h === i || h === a)
                    return e()
            }
            var u = document.createElement("link");
            u.rel = "stylesheet",
            u.type = "text/css",
            u.onload = e,
            u.onerror = function(e) {
                var i = e && e.target && e.target.src || a
                  , r = new Error("Loading CSS chunk " + t + " failed.\n(" + i + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED",
                r.request = i,
                delete n[t],
                u.parentNode.removeChild(u),
                s(r)
            }
            ,
            u.href = a;
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(u)
        }
        )).then((function() {
            n[t] = 0
        }
        )));
        var i = a[t];
        if (0 !== i)
            if (i)
                e.push(i[2]);
            else {
                var r = new Promise((function(e, s) {
                    i = a[t] = [e, s]
                }
                ));
                e.push(i[2] = r);
                var l, h = document.createElement("script");
                h.charset = "utf-8",
                h.timeout = 120,
                c.nc && h.setAttribute("nonce", c.nc),
                h.src = o(t);
                var d = new Error;
                l = function(e) {
                    h.onerror = h.onload = null,
                    clearTimeout(u);
                    var s = a[t];
                    if (0 !== s) {
                        if (s) {
                            var i = e && ("load" === e.type ? "missing" : e.type)
                              , n = e && e.target && e.target.src;
                            d.message = "Loading chunk " + t + " failed.\n(" + i + ": " + n + ")",
                            d.name = "ChunkLoadError",
                            d.type = i,
                            d.request = n,
                            s[1](d)
                        }
                        a[t] = void 0
                    }
                }
                ;
                var u = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: h
                    })
                }
                ), 12e4);
                h.onerror = h.onload = l,
                document.head.appendChild(h)
            }
        return Promise.all(e)
    }
    ,
    c.m = t,
    c.c = i,
    c.d = function(t, e, s) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }
    ,
    c.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(t, e) {
        if (1 & e && (t = c(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var s = Object.create(null);
        if (c.r(s),
        Object.defineProperty(s, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                c.d(s, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return s
    }
    ,
    c.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return c.d(e, "a", e),
        e
    }
    ,
    c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    c.p = "",
    c.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , h = l.push.bind(l);
    l.push = e,
    l = l.slice();
    for (var d = 0; d < l.length; d++)
        e(l[d]);
    var u = h;
    r.push(["cd49", "chunk-vendors"]),
    s()
}
)({
    "03b6": function(t, e) {},
    "06c5": function(t, e, s) {
        "use strict";
        s.d(e, "d", (function() {
            return i
        }
        )),
        s.d(e, "e", (function() {
            return n
        }
        )),
        s.d(e, "c", (function() {
            return a
        }
        )),
        s.d(e, "b", (function() {
            return r
        }
        )),
        s.d(e, "a", (function() {
            return o
        }
        )),
        s.d(e, "f", (function() {
            return c
        }
        ));
        const i = 27
          , n = 32
          , a = 13
          , r = 8
          , o = 65
          , c = 90
    },
    "0745": function(t, e) {},
    "152b": function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return a
        }
        )),
        s.d(e, "a", (function() {
            return r
        }
        )),
        s.d(e, "c", (function() {
            return c
        }
        ));
        var i = s("06c5");
        const n = ["EMAIL", "TEXT", "PASSWORD", "FILE"]
          , a = t=>{
            if (t.keyCode !== i["b"])
                return;
            const e = t.srcElement || t.target;
            if (!e || !e.tagName)
                return;
            const s = e.tagName.toUpperCase()
              , a = (e.type || "").toUpperCase();
            let r = !0;
            ("INPUT" === s && n.includes(a) || "TEXTAREA" === s) && (r = e.readOnly || e.disabled),
            r && t.preventDefault()
        }
          , r = t=>{
            const e = document.createEvent("Event");
            e.initEvent(t, !0, !0),
            document.dispatchEvent(e)
        }
          , o = (t=document.body,e,s=!0)=>{
            const i = document.createEvent("MouseEvents");
            i.initMouseEvent(e, !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
            i.simulated = s,
            t.dispatchEvent(i)
        }
          , c = (t=document.body,e=!0)=>o(t, "mouseup", e)
    },
    1663: function(t, e, s) {
        "use strict";
        s("e260"),
        s("ddb0"),
        s("e6cf");
        var i = s("2b0e")
          , n = s("b047")
          , a = s.n(n)
          , r = s("152b")
          , o = s("571d")
          , c = s("80b0")
          , l = s.n(c)
          , h = s("06c5");
        const d = [{
            event: "orientationchange",
            handler: t=>window.setTimeout(()=>t("RESIZE"), 350)
        }, {
            event: "beforeunload",
            handler: "UNLOAD"
        }, {
            event: "pagehide",
            handler: "UNLOAD"
        }, {
            event: "blur",
            handler: t=>l()(()=>{
                document.activeElement && "IFRAME" === document.activeElement.tagName || t("BLUR")
            }
            )
        }, {
            event: "focus",
            handler: "FOCUS"
        }, {
            event: "online",
            handler: "ONLINE"
        }, {
            event: "offline",
            handler: "OFFLINE"
        }, {
            event: "popstate",
            handler: "BACK_BUTTON"
        }, {
            parent: "document",
            event: "visibilitychange",
            handler: t=>{
                let e = "VISIBILITY_HIDDEN";
                "visible" === document.visibilityState && (e = "VISIBILITY_VISIBLE"),
                t(e)
            }
        }, {
            parent: "document",
            event: "keydown",
            handler: (t,e)=>{
                const s = e;
                Object(r["b"])(s);
                const {keyCode: i} = s;
                t("KEY_DOWN", s),
                i !== h["c"] ? i !== h["d"] ? i === h["e"] && t("KEY_SPACE", s) : t("KEY_ESC", s) : t("KEY_ENTER", s)
            }
        }]
          , u = [...d]
          , m = new i["a"]({});
        class p {
            constructor(t) {
                this.initEventHandlers(t),
                this._ready = new Promise(t=>this.once(o["a"], t))
            }
            init(t) {
                this.initInitialEvents(t),
                this.initCustomEvents()
            }
            initInitialEvents(t) {
                this.once("LIBRARY_RENDERED", ()=>window.setTimeout(()=>this.emit(o["a"]), 150)),
                this.once("LIBRARY_EMPTY", ()=>window.setTimeout(()=>this.emit(o["a"]), 150)),
                this.once("LOGGED_IN", ()=>this.emit(o["a"])),
                this.once("NOT_LOGGED_IN", ()=>window.setTimeout(()=>this.emit(o["a"]), 250)),
                this.once(o["a"], ()=>{
                    Object(r["a"])(o["a"]),
                    t.commit("GAME_READY")
                }
                ),
                document.addEventListener(o["b"], ()=>this.emit(o["b"]))
            }
            initCustomEvents() {
                const t = a()(()=>this.emit("RESIZE"), 250);
                window.addEventListener("resize", t, !1)
            }
            initEventHandlers(t) {
                t.forEach(({parent: t="window", event: e, handler: s})=>{
                    const i = "window" === t ? window : document;
                    let n;
                    n = "string" === typeof s ? ()=>this.emit(s) : t=>s(this.emit, t),
                    i.addEventListener(e, n, !1)
                }
                )
            }
            on(t, e) {
                m.$on(t, e)
            }
            once(t, e) {
                m.$once(t, e)
            }
            off(t, e) {
                m.$off(t, e)
            }
            emit(t, e) {
                m.$emit(t, e)
            }
            then(t) {
                return new Promise(e=>m.$once(t, e))
            }
            onResize(t) {
                this.on("RESIZE", t)
            }
            onReady() {
                return this._ready
            }
        }
        e["a"] = new p(u)
    },
    "16b7": function(t, e, s) {
        "use strict";
        var i;
        s.d(e, "a", (function() {
            return i
        }
        )),
        function(t) {
            t["WORKSPACE"] = "workspace",
            t["WORKSPACE_INACTIVE"] = "final-exhausted",
            t["PROGRESS"] = "history",
            t["STATS"] = "stats",
            t["ENCYCLOPEDIA"] = "encyclopedia",
            t["SETTINGS"] = "settings",
            t["RESET_TIMESTAMP"] = "timestamp",
            t["TUTORIALS"] = "tutorials"
        }(i || (i = {}))
    },
    "199d": function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return n
        }
        ));
        s("25f0");
        const i = ()=>(Math.random() + 1).toString(36).substring(4)
          , n = t=>`${t}_${i()}`
    },
    "1ae4": function(t, e, s) {
        t.exports = s.p + "img/logo.2b0c661a.svg"
    },
    2138: function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return i
        }
        )),
        s.d(e, "c", (function() {
            return n
        }
        )),
        s.d(e, "d", (function() {
            return a
        }
        )),
        s.d(e, "a", (function() {
            return r
        }
        )),
        s.d(e, "f", (function() {
            return o
        }
        )),
        s.d(e, "e", (function() {
            return c
        }
        )),
        s.d(e, "g", (function() {
            return l
        }
        ));
        const i = 2
          , n = "library"
          , a = "workspace"
          , r = 12
          , o = .65
          , c = "library"
          , l = "workspace"
    },
    2149: function(t, e, s) {
        "use strict";
        var i;
        s.d(e, "a", (function() {
            return i
        }
        )),
        function(t) {
            t["FINAL"] = "final",
            t["EXHAUSTED"] = "exhausted",
            t["BASE"] = "base",
            t["HINTS"] = "hints",
            t["DLC"] = "dlc",
            t["ENCYCLOPEDIA_INTRO"] = "encyclopediaIntro",
            t["GAME_END"] = "gameEnd",
            t["GAME_COMPLETION"] = "gameCompletion"
        }(i || (i = {}))
    },
    2260: function(t, e, s) {
        t.exports = s.p + "img/popup-close.d2a03f3b.svg"
    },
    "22a7": function(t, e, s) {
        "use strict";
        s("2532"),
        s("e260"),
        s("ddb0");
        var i = s("c2e2")
          , n = s("ded8");
        s("13d5");
        const a = t=>t.reduce((t,e)=>(t[e] = !0,
        t), {});
        class r {
            analyze(t, e) {
                const {totalProgress: s, timestamps: i} = this.analyzeHistory(t, e)
                  , {base: n, final: r} = this.analyzeProgress(t, s)
                  , {primes: o} = this.analyzeBase(t)
                  , c = a(r)
                  , l = s.filter(t=>!c.hasOwnProperty(t) && !n.includes(t) && !o.includes(t));
                return {
                    progress: a(l),
                    base: n,
                    final: c,
                    primes: o,
                    timestamps: i
                }
            }
            analyzeHistory(t, e) {
                const s = {}
                  , a = [];
                return e.forEach(({mother: e, father: r, timestamp: o})=>{
                    const c = Object(n["c"])([e, r])
                      , l = Object(i["b"])(t, c);
                    l.forEach(t=>{
                        s.hasOwnProperty(t) || (s[t] = !0,
                        a.push({
                            id: t,
                            timestamp: o
                        }))
                    }
                    )
                }
                ),
                {
                    totalProgress: Object.keys(s),
                    timestamps: a
                }
            }
            analyzeProgress(t, e) {
                const s = []
                  , i = [];
                return e.forEach(e=>{
                    const n = t[e];
                    n.base && s.push(e),
                    n.final && i.push(e)
                }
                ),
                {
                    base: s,
                    final: i
                }
            }
            analyzeBase(t) {
                const e = [];
                return Object.entries(t).forEach(([t,s])=>{
                    s.prime && e.push(t)
                }
                ),
                {
                    primes: e
                }
            }
        }
        e["a"] = new r
    },
    2321: function(t, e) {},
    2540: function(t, e, s) {
        "use strict";
        s("e6cf");
        var i = s("b2eb")
          , n = s("d257");
        const a = ()=>{
            const t = window.history.state;
            t && t.popup || window.history.pushState({
                popup: !0
            }, "")
        }
          , r = ()=>{
            const t = window.history.state;
            t && t.popup && window.history.back()
        }
        ;
        var o = s("1663")
          , c = s("c97d");
        const l = Object(n["k"])();
        class h {
            constructor() {
                this.handleKeyboard = ()=>{
                    this.$store.getters.isPopupClosable && this.hide()
                }
            }
            init(t) {
                this.$store = t,
                this.initHideListeners()
            }
            initHideListeners() {
                o["a"].on("KEY_ESC", this.handleKeyboard),
                o["a"].on("BACK_BUTTON", this.handleKeyboard)
            }
            hide() {
                this.$store.getters.isPopupActive && this.$store.dispatch("popupHide", void 0)
            }
            onShow(t) {
                a(),
                o["a"].emit("POPUP_SHOW", t),
                c["a"].handler && c["a"].handler.disable()
            }
            onHide(t) {
                l || r(),
                o["a"].emit("POPUP_HIDE", t),
                c["a"].handler && c["a"].handler.enable(),
                t === i["ENCYCLOPEDIA"] && o["a"].emit("ENCYCLOPEDIA_POPUP_HIDE")
            }
            onHidePromise() {
                return this.$store.getters.isPopupOverlayActive ? new Promise(t=>{
                    const e = this.$store.watch((t,e)=>e.isPopupOverlayActive, s=>{
                        s || (e(),
                        t())
                    }
                    )
                }
                ) : Promise.resolve()
            }
        }
        e["a"] = new h
    },
    2929: function(t, e, s) {
        "use strict";
        window.addEventListener("unhandledrejection", t=>{
            if (!t.reason)
                return;
            const e = /Loading chunk .+ failed/
              , s = "#retry" === window.location.hash;
            e.test(t.reason) && !s && (window.location.hash = "retry",
            window.location.reload(!0))
        }
        )
    },
    "2ae7": function(t, e, s) {
        "use strict";
        function i() {
            const t = document.createElement("fakeelement")
              , e = {
                animation: "a",
                WebkitAnimation: "webkitA"
            }
              , s = Object.keys(e).find(e=>void 0 !== t.style[e]) || "animation";
            return e[s]
        }
        s.d(e, "b", (function() {
            return n
        }
        )),
        s.d(e, "a", (function() {
            return a
        }
        ));
        const n = "transitionend"
          , a = `${i()}nimationend`;
        i()
    },
    "2de2": function(t, e, s) {
        "use strict";
        s.d(e, "g", (function() {
            return i
        }
        )),
        s.d(e, "e", (function() {
            return n
        }
        )),
        s.d(e, "a", (function() {
            return a
        }
        )),
        s.d(e, "f", (function() {
            return r
        }
        )),
        s.d(e, "i", (function() {
            return o
        }
        )),
        s.d(e, "d", (function() {
            return c
        }
        )),
        s.d(e, "j", (function() {
            return l
        }
        )),
        s.d(e, "h", (function() {
            return h
        }
        )),
        s.d(e, "c", (function() {
            return d
        }
        )),
        s.d(e, "b", (function() {
            return u
        }
        ));
        const i = "la2"
          , n = {
            apiKey: "AIzaSyAIeudM0cX1dqiXe7S57TFcNlStHdnC56c",
            authDomain: "little-alchemy-2.firebaseapp.com",
            databaseURL: "https://little-alchemy-2.firebaseio.com",
            storageBucket: "little-alchemy-2.appspot.com",
            messagingSenderId: "970099188369"
        }
          , a = 2e3
          , r = "https://hints.littlealchemy2.com"
          , o = 1496268e3
          , c = "https://help.littlealchemy2.com"
          , l = "1.2.1"
          , h = !1
          , d = !1
          , u = !1
    },
    "33ff": function(t, e) {},
    "3b56": function(t, e, s) {
        "use strict";
        s("e260"),
        s("ddb0");
        var i = s("16b7")
          , n = s("7897")
          , a = s("1663")
          , r = s("2138");
        const o = {
            key: i["a"].PROGRESS,
            parse: t=>{
                const e = t.map(([t,e,s])=>({
                    father: t,
                    mother: e,
                    timestamp: s
                }));
                return e
            }
            ,
            prepare: t=>{
                const e = t.getters.history;
                return e.map(({father: t, mother: e, timestamp: s})=>[t, e, s])
            }
            ,
            watch: []
        }
          , c = {
            key: i["a"].WORKSPACE,
            parse: t=>t,
            prepare: t=>{
                if (!t.getters.hasProgress)
                    return [];
                const e = document.querySelectorAll(`#${r["g"]} [data-id][data-normal]`)
                  , s = [];
                return Array.from(e).forEach(({dataset: {id: e}})=>{
                    e !== t.getters.draggableHelperId && s.push(t.getters.droppableById(e))
                }
                ),
                s
            }
            ,
            watch: []
        }
          , l = {
            key: i["a"].WORKSPACE_INACTIVE,
            parse: t=>t,
            prepare: t=>({
                workspaceFinal: t.getters.workspaceFinal,
                workspaceExhausted: t.getters.workspaceExhausted,
                exhausted: t.getters.exhaustedVisible
            }),
            watch: []
        }
          , h = {
            key: i["a"].RESET_TIMESTAMP,
            parse: t=>t,
            prepare: t=>t.getters.resetTimestamp,
            watch: []
        }
          , d = {
            key: i["a"].SETTINGS,
            parse: t=>t,
            prepare: t=>t.state.settings,
            watch: []
        }
          , u = {
            key: i["a"].ENCYCLOPEDIA,
            parse: t=>t,
            prepare: t=>t.state.encyclopedia,
            watch: []
        }
          , m = {
            key: i["a"].STATS,
            parse: t=>t,
            prepare: t=>({
                firstLaunch: t.getters.firstLaunch,
                sessionsCount: t.getters.sessionsCount
            }),
            watch: []
        }
          , p = {
            key: i["a"].TUTORIALS,
            parse: t=>t,
            prepare: t=>({
                shownText: t.getters.tutorialTextShown
            }),
            watch: []
        };
        var g = {
            [i["a"].PROGRESS]: o,
            [i["a"].WORKSPACE]: c,
            [i["a"].WORKSPACE_INACTIVE]: l,
            [i["a"].RESET_TIMESTAMP]: h,
            [i["a"].SETTINGS]: d,
            [i["a"].ENCYCLOPEDIA]: u,
            [i["a"].STATS]: m,
            [i["a"].TUTORIALS]: p
        };
        s.d(e, "a", (function() {
            return i["a"]
        }
        ));
        const E = ["UNLOAD", "VISIBILITY_HIDDEN"];
        class f {
            constructor(t) {
                this.save = ()=>{
                    Object.values(this.entries).forEach(t=>{
                        const e = t.prepare(this.$store);
                        this.saveSingle(t.key, e)
                    }
                    )
                }
                ,
                this.entries = t
            }
            init(t) {
                this.$store = t,
                this.initSaveTriggers()
            }
            initSaveTriggers() {
                E.forEach(t=>a["a"].on(t, this.save)),
                Object.values(this.entries).forEach(({watch: t})=>t.forEach(t=>this.$store.watch((e,s)=>s[t], this.save)))
            }
            saveSingle(t, e) {
                Object(n["b"])(t, e)
            }
            load(t) {
                const e = Object(n["a"])(t);
                if (!e)
                    return e;
                const s = this.getEntryByKey(t);
                return s ? s.parse(e) : e
            }
            disable() {
                E.forEach(t=>a["a"].off(t, this.save))
            }
            clear() {
                this.disable(),
                localStorage.clear()
            }
            getEntryByKey(t) {
                return this.entries[t] || null
            }
        }
        const b = new f(g);
        e["b"] = b
    },
    "437c": function(t, e, s) {},
    4819: function(t, e) {},
    "4a5e": function(t, e) {},
    5221: function(t, e) {},
    "53b2": function(t, e, s) {
        "use strict";
        s.d(e, "c", (function() {
            return i
        }
        )),
        s.d(e, "b", (function() {
            return n
        }
        )),
        s.d(e, "f", (function() {
            return a
        }
        )),
        s.d(e, "a", (function() {
            return r
        }
        )),
        s.d(e, "g", (function() {
            return o
        }
        )),
        s.d(e, "e", (function() {
            return c
        }
        )),
        s.d(e, "d", (function() {
            return l
        }
        ));
        const i = "FUSION"
          , n = "FINAL"
          , a = "NEW"
          , r = "CLEAR"
          , o = "REVERT"
          , c = "GAME_END"
          , l = "GAME_COMPLETION"
    },
    "54cb": function(t, e, s) {
        "use strict";
        s("13d5");
        class i {
            constructor() {
                this.count = 0
            }
            init(t) {
                this.$store = t
            }
            getInitiallyUnlocked() {
                return this.getRecentlyUnlockedIds()
            }
            getRecentlyUnlockedIds() {
                this.count = 0;
                const t = this.getDiscovered();
                return 0 !== this.count ? this.getDiscovered() : t
            }
            getDiscovered() {
                return this.lockedIds.filter(t=>{
                    const e = this.$store.getters.elementById(t);
                    if (!e)
                        return !1;
                    const s = this.checkConditions(e);
                    return this.count += s ? 1 : 0,
                    s
                }
                )
            }
            checkConditions(t) {
                if (!t.hasOwnProperty("condition") || !t.condition)
                    return !1;
                const e = t.condition;
                return "elements" === e.type ? this.checkElements(e.elements, e.min) : "progress" !== e.type || this.checkProgress(e.total)
            }
            checkElements(t, e=0) {
                const s = t.reduce((t,e)=>this.$store.getters.hasInProgress(e) ? t + 1 : t, 0);
                return s >= e
            }
            checkProgress(t) {
                return this.$store.getters.totalProgress + this.count >= t
            }
            get lockedIds() {
                const t = this.$store.getters.baseElementsIds;
                return t.filter(t=>{
                    const e = this.$store.getters.elementById(t);
                    return !!e && (e.parents.length ? !this.$store.getters.hasInProgress(t) : !this.$store.getters.hasUnlockedBase(t))
                }
                )
            }
        }
        e["a"] = new i
    },
    "571d": function(t, e, s) {
        "use strict";
        s.d(e, "d", (function() {
            return i
        }
        )),
        s.d(e, "e", (function() {
            return n
        }
        )),
        s.d(e, "a", (function() {
            return a
        }
        )),
        s.d(e, "b", (function() {
            return r
        }
        )),
        s.d(e, "c", (function() {
            return o
        }
        ));
        const i = window.PointerEvent ? ["pointerdown"] : ["mousedown", "touchstart"]
          , n = (window.PointerEvent,
        window.PointerEvent ? ["pointerup"] : ["mouseup", "touchend"])
          , a = "GAME_READY"
          , r = "PLAY"
          , o = "PLAY_NOT_READY"
    },
    "5c57": function(t, e, s) {
        "use strict";
        var i = s("2b0e")
          , n = s("2f62")
          , a = (s("2532"),
        s("e6cf"),
        s("d257"));
        const r = "js-frozen"
          , o = ()=>document.body.classList.add(r)
          , c = ()=>document.body.classList.remove(r);
        var l = s("53b2")
          , h = s("1663")
          , d = s("b7ba");
        const u = {
            active: null,
            activeFinal: [],
            middleFinal: [],
            activeExhausted: []
        }
          , m = {
            state: u,
            getters: {
                animation: t=>t.active,
                isAnimationActive: t=>e=>t.active === e,
                animationFinalElements: t=>t.activeFinal,
                animationFinalFinished: t=>t.middleFinal,
                animationExhaustedElement: t=>t.activeExhausted,
                isFinalForIdActive: t=>e=>t.activeFinal.includes(e),
                isExhaustedForIdActive: t=>e=>t.activeExhausted.includes(e)
            },
            actions: {
                animationChange({commit: t, dispatch: e}, s) {
                    t("ANIMATION_CHANGE", s),
                    s === l["f"] && window.setTimeout(()=>e("animationNewStart"), 250)
                },
                animationReset({dispatch: t, commit: e}) {
                    e("ANIMATION_CHANGE", null),
                    c(),
                    t("mixReset")
                },
                animationFinalStart({commit: t, getters: e}, s) {
                    e.animationFinalElements.includes(s) || t("ANIMATION_FINAL_START", s)
                },
                animationFinalMiddle({commit: t}, e) {
                    t("ANIMATION_FINAL_MIDDLE", e)
                },
                animationFinalFinished({commit: t}, e) {
                    t("ANIMATION_FINAL_FINISH", e)
                },
                animationExhaustedStart({commit: t, getters: e}, s) {
                    e.isExhaustedForIdActive(s) || t("ANIMATION_EXHAUSTED_START", s)
                },
                animationExhaustedFinished({dispatch: t, commit: e}, s) {
                    e("ANIMATION_EXHAUSTED_FINISH", s),
                    t("libraryReload"),
                    window.setTimeout(()=>t("animationCompletionCheck"), 30)
                },
                async mixOccured({dispatch: t, getters: e}) {
                    await Object(a["c"])(10),
                    e.mixStatus !== d["a"] && (e.mixStatus !== d["b"] ? e.mixStatus === d["c"] && (o(),
                    t("animationChange", l["c"])) : h["a"].emit("ANIMATION_MIXED_START"))
                },
                async animationFusionMiddle({dispatch: t, getters: e}) {
                    t("animationNewCheck"),
                    e.mixHasNewChildren || (t("workspaceHandleMixResult", {
                        removeParents: !0
                    }),
                    await Object(a["c"])(250),
                    t("workspaceExhaustedCheck"))
                },
                animationNewCheck({dispatch: t, getters: e}) {
                    e.mixHasNewChildren && (t("animationChange", l["f"]),
                    h["a"].emit("ANIMATION_NEW_POP"))
                },
                animationNewStart({dispatch: t}) {
                    t("workspaceRemoveMixParents")
                },
                async animationNewEnding({dispatch: t}, {removeParents: e=!0}={}) {
                    t("workspaceHandleMixResult", {
                        removeParents: e
                    }),
                    Object(a["c"])(250),
                    t("workspaceExhaustedCheck")
                },
                animationNewEnd({dispatch: t}) {
                    t("animationEndCheck")
                },
                animationEndCheck({dispatch: t, getters: e}) {
                    e.hasAllElements && (t("animationChange", l["e"]),
                    h["a"].emit("GAME_ENDED"))
                },
                async workspaceClear({dispatch: t}) {
                    await Object(a["c"])(1e3),
                    t("animationCompletionCheck")
                },
                workspaceFinalRemove({dispatch: t}) {
                    t("animationCompletionCheck")
                },
                async workspaceExhaustedRemove({dispatch: t}) {
                    await Object(a["c"])(10),
                    t("animationCompletionCheck")
                },
                animationCompletionCheck({getters: t, dispatch: e}) {
                    t.hasAllCleared && t.needsGameCompletionAnimation && (e("animationChange", l["d"]),
                    h["a"].emit("GAME_COMPLETED"))
                },
                animationCompletionEnding({commit: t, dispatch: e}) {
                    t("WORKSPACE_INACTIVE_RESET"),
                    e("libraryReload")
                }
            },
            mutations: {
                ANIMATION_CHANGE(t, e) {
                    t.active = e
                },
                ANIMATION_FINAL_START(t, e) {
                    t.activeFinal.push(e)
                },
                ANIMATION_FINAL_MIDDLE(t, e) {
                    t.middleFinal.push(e)
                },
                ANIMATION_FINAL_FINISH(t, e) {
                    t.activeFinal = t.activeFinal.filter(t=>t !== e),
                    t.middleFinal = t.middleFinal.filter(t=>t !== e)
                },
                ANIMATION_EXHAUSTED_START(t, e) {
                    t.activeExhausted.push(e)
                },
                ANIMATION_EXHAUSTED_FINISH(t, e) {
                    t.activeExhausted = t.activeExhausted.filter(t=>t !== e)
                }
            }
        };
        var p = m
          , g = (s("13d5"),
        s("6e2e"));
        const E = {
            elementsUpdated: -1
        }
          , f = {
            state: E,
            getters: {
                elements: t=>-1 === t.elementsUpdated ? {} : g["a"].elements,
                elementsIds: (t,e)=>Object.keys(e.elements),
                elementsList: (t,e)=>Object.values(e.elements),
                elementById: (t,e)=>t=>{
                    const s = `${t}`;
                    return e.elements.hasOwnProperty(s) ? e.elements[s] : null
                }
                ,
                descriptionById: ()=>t=>g["a"].getDescriptionById(t),
                hasElement: (t,e)=>t=>{
                    const s = `${t}`;
                    return e.elements.hasOwnProperty(s)
                }
                ,
                baseElementsIds: (t,e)=>e.elementsList.filter(({base: t})=>t).map(({id: t})=>t),
                elementsCount: (t,e)=>e.elementsIds.length,
                connectionsCount: (t,e)=>e.elementsList.reduce((t,e)=>t + e.parents.length, 0)
            },
            actions: {
                init({dispatch: t}) {
                    t("baseLoad")
                },
                async baseLoad({dispatch: t}) {
                    const e = await g["a"].loadBase();
                    t("baseLoaded", e),
                    await h["a"].onReady(),
                    await g["a"].loadDescriptions(),
                    h["a"].emit("ENCYCLOPEDIA_DESCRIPTIONS"),
                    await g["a"].loadTags(),
                    h["a"].emit("ENCYCLOPEDIA_TAGS")
                },
                baseLoaded({commit: t, dispatch: e}) {
                    t("ELEMENTS_SET"),
                    h["a"].emit("ENCYCLOPEDIA_ELEMENTS"),
                    e("progressCalculate")
                },
                baseElementsAdd({commit: t, getters: e}, s) {
                    s.forEach(t=>{
                        e.elements.hasOwnProperty(t.id) || g["a"].elementAdd(t.id, t)
                    }
                    ),
                    t("ELEMENTS_ADD"),
                    h["a"].emit("ENCYCLOPEDIA_ELEMENTS")
                },
                baseElementAdd({commit: t, getters: e}, s) {
                    e.elements.hasOwnProperty(s.id) || (g["a"].elementAdd(s.id, s),
                    t("ELEMENTS_ADD"))
                },
                baseElementsRemove({commit: t, getters: e}, s) {
                    s.forEach(t=>{
                        e.elements.hasOwnProperty(t) && g["a"].elementRemove(t)
                    }
                    ),
                    t("ELEMENTS_REMOVE"),
                    h["a"].emit("ENCYCLOPEDIA_ELEMENTS")
                },
                baseElementRemove({commit: t, getters: e}, s) {
                    e.elements.hasOwnProperty(s) && (g["a"].elementRemove(s),
                    t("ELEMENTS_REMOVE"))
                }
            },
            mutations: {
                ELEMENTS_SET(t) {
                    t.elementsUpdated = Date.now()
                },
                ELEMENTS_ADD(t) {
                    t.elementsUpdated = Date.now()
                },
                ELEMENTS_REMOVE(t) {
                    t.elementsUpdated = Date.now()
                }
            }
        };
        var b = f;
        const y = {
            workspaceBox: {
                width: -1,
                height: -1
            },
            libraryBox: {
                width: -1,
                height: -1,
                margin: -1
            }
        }
          , v = {
            state: y,
            getters: {
                workspaceBoxDimensions: t=>t.workspaceBox,
                libraryBoxDimensions: t=>t.libraryBox,
                libraryBoxMargin: t=>t.libraryBox.margin
            },
            actions: {
                dimensionsLibraryBox({commit: t}, e) {
                    t("DIMENSIONS_LIBRARY_BOX", e)
                },
                dimensionsWorkspaceBox({commit: t}, e) {
                    t("DIMENSIONS_WORKSPACE_BOX", e)
                }
            },
            mutations: {
                DIMENSIONS_LIBRARY_BOX(t, {width: e, height: s, margin: i}) {
                    t.libraryBox.width = e,
                    t.libraryBox.height = s,
                    t.libraryBox.margin = i
                },
                DIMENSIONS_WORKSPACE_BOX(t, {width: e, height: s}) {
                    t.workspaceBox.width = e,
                    t.workspaceBox.height = s
                }
            }
        };
        var w = v
          , I = s("3b56");
        const A = I["b"].load(I["a"].ENCYCLOPEDIA) || {
            encyclopediaShown: -1
        }
          , T = {
            state: A,
            getters: {
                encyclopediaTimestamp: t=>t.encyclopediaShown
            },
            actions: {
                encyclopediaShow({commit: t}) {
                    t("ENCYCLOPEDIA_SHOW")
                }
            },
            mutations: {
                ENCYCLOPEDIA_SHOW(t) {
                    t.encyclopediaShown = Date.now()
                }
            }
        };
        var S = T;
        s("e260"),
        s("ddb0"),
        s("ac1f"),
        s("1276");
        const _ = "#"
          , O = ([t,e])=>`${t}${_}${e}`
          , x = t=>t.reduce((t,e)=>{
            const s = O([e.father, e.mother]);
            return t[s] = e.timestamp,
            t
        }
        , {})
          , P = (t,e)=>{
            const s = O(e);
            return t.hasOwnProperty(s)
        }
          , C = (t,e,s)=>{
            const i = t[s].children
              , n = i.some(i=>{
                const n = t[i];
                for (const t of n.parents)
                    if (s === t[0] || s === t[1]) {
                        const s = P(e, t);
                        if (!s)
                            return !0
                    }
                return !1
            }
            );
            return n
        }
          , L = (t,e,s)=>{
            const i = `${s}`;
            return !C(t, e, i)
        }
          , R = (t,e,s)=>s.map(s=>({
            id: s,
            exhausted: L(t, e, s)
        }))
          , D = I["b"].load(I["a"].WORKSPACE_INACTIVE)
          , N = {
            exhausted: {},
            visible: null !== D ? D.exhausted : []
        }
          , k = {
            state: N,
            getters: {
                elementIsExhausted: t=>e=>t.exhausted.hasOwnProperty(e) ? t.exhausted[e] : null,
                exhaustedVisible: t=>t.visible,
                isExhaustedVisible: (t,e)=>t=>e.exhaustedVisible.includes(t),
                hasExhaustedVisible: (t,e)=>!!e.exhaustedVisible.length
            },
            actions: {
                exhaustedCheckIds({commit: t, getters: e}, s) {
                    const i = R(e.elements, e.historyMap, s);
                    t("ELEMENTS_SET_EXHAUSTED", i)
                },
                async mixNew({commit: t, getters: e}, {parents: s}) {
                    await Object(a["c"])(30),
                    s.forEach(s=>{
                        const i = L(e.elements, e.historyMap, s);
                        i && (t("ELEMENT_SET_EXHAUSTED", {
                            id: s,
                            exhausted: i
                        }),
                        t("EXHAUSTED_VISIBLE_ADD", s))
                    }
                    )
                },
                resetProgress({commit: t, getters: e}) {
                    const s = e.elementsIds.filter(t=>e.elementIsExhausted(t)).map(t=>({
                        id: t,
                        exhausted: !1
                    }));
                    t("ELEMENTS_SET_EXHAUSTED", s),
                    t("EXHAUSTED_VISIBLE_CLEAR")
                }
            },
            mutations: {
                ELEMENT_SET_EXHAUSTED(t, {id: e, exhausted: s}) {
                    i["a"].set(t.exhausted, e, s)
                },
                ELEMENTS_SET_EXHAUSTED(t, e) {
                    e.forEach(({id: e, exhausted: s})=>i["a"].set(t.exhausted, e, s))
                },
                EXHAUSTED_VISIBLE_ADD(t, e) {
                    t.visible.includes(e) || t.visible.push(e)
                },
                EXHAUSTED_VISIBLE_CLEAR(t) {
                    t.visible = []
                },
                ANIMATION_EXHAUSTED_FINISH(t, e) {
                    t.visible = t.visible.filter(t=>t !== e)
                }
            }
        };
        var M = k
          , j = s("5530")
          , $ = s("80b0")
          , H = s.n($)
          , B = s("199d")
          , F = s("2138")
          , G = s("623d")
          , U = s("d0c4")
          , W = s("cd57");
        class Y {
            onDragStart() {
                this.animationNew && (this.animationNew.style.display = "none")
            }
            onDragEnd() {
                this.animationNew && (this.animationNew.style.display = "initial")
            }
            get animationNew() {
                return document.getElementById(W["a"])
            }
        }
        var K = new Y;
        const z = {
            dragging: null,
            over: null,
            listening: [],
            static: {
                [F["e"]]: {
                    id: F["e"],
                    dimensions: {
                        width: 0,
                        height: 0
                    },
                    position: {
                        x: 0,
                        y: 0
                    }
                }
            },
            draggableHelper: null
        }
          , V = {
            state: z,
            getters: {
                draggedId: t=>t.dragging,
                draggedElement: (t,e)=>t.dragging && e.droppables.find(e=>e.id === t.dragging) || null,
                isDragging: t=>null !== t.dragging,
                draggingOverId: t=>t.over,
                draggingOverElement: (t,e)=>{
                    const s = t.over;
                    return s ? e.droppableById(s) : null
                }
                ,
                isOver: t=>null !== t.over,
                isOverStatic: (t,e)=>{
                    const s = e.draggingOverElement;
                    return !!s && s.hasOwnProperty("dimensions")
                }
                ,
                draggableHelperId: t=>t.draggableHelper,
                draggableHelperElement: (t,e)=>t.draggableHelper ? e.droppableById(t.draggableHelper) : null,
                droppables: (t,e)=>e.workspaceElements,
                droppablesActive: (t,e)=>e.droppables.filter(e=>e.id !== t.draggableHelper),
                droppablesListening: (t,e)=>e.droppables.filter(e=>t.listening.includes(e.id)),
                droppablesStatic: t=>t.static,
                droppableStaticById: t=>e=>t.static[e],
                droppablesToListen: (t,e)=>t=>e.droppables.filter(({id: s})=>s !== t && s !== e.draggableHelperId).map(({id: t})=>t),
                droppableById: (t,e)=>s=>{
                    const i = e.droppables.find(t=>t.id === s);
                    return i || (t.static.hasOwnProperty(s) ? t.static[s] : null)
                }
            },
            actions: {
                dragStart({commit: t, dispatch: e, getters: s}, i) {
                    const n = s.droppablesToListen(i);
                    t("DRAG_START", {
                        id: i,
                        listening: n
                    }),
                    h["a"].emit("DRAG_START"),
                    U["a"].onDragStart(),
                    e("mixReset"),
                    H()(()=>{
                        e("searchHide"),
                        K.onDragStart()
                    }
                    )
                },
                dragOver({commit: t}, e) {
                    t("DRAG_OVER", e)
                },
                dragOut({commit: t}) {
                    t("DRAG_OUT")
                },
                dragEnd({commit: t, dispatch: e, getters: s}, {position: i, simulated: n}) {
                    t("DRAG_POSITION", Object(j["a"])({
                        dragged: s.draggedElement
                    }, i)),
                    U["a"].onDragEnd(n),
                    t("DRAG_END"),
                    H()(()=>{
                        e("draggableHelperAdd", !0),
                        K.onDragEnd()
                    }
                    )
                },
                staticDroppableAdd({commit: t}, e) {
                    t("STATIC_DROPPABLE_ADD", e)
                },
                baseLoaded({dispatch: t}) {
                    t("draggableHelperAdd", !0)
                },
                draggableHelperAdd({commit: t, state: e}, s=!1) {
                    if (null !== e.draggableHelper)
                        return;
                    const i = s ? Object(B["a"])(G["a"]) : null;
                    t("DRAGGABLE_HELPER_SET", i)
                }
            },
            mutations: {
                DRAG_START(t, {id: e, listening: s}) {
                    t.dragging = e,
                    t.listening = s
                },
                DRAG_OVER(t, e) {
                    t.over = e
                },
                DRAG_OUT(t) {
                    t.over = null
                },
                DRAG_POSITION(t, {dragged: e, x: s, y: i}) {
                    e && (e.position.x = s,
                    e.position.y = i)
                },
                DRAG_END(t) {
                    t.dragging = null,
                    t.over = null,
                    t.listening.length && (t.listening = [])
                },
                DROPPABLE_DROP(t) {
                    t.over = null
                },
                DRAGGABLE_HELPER_SET(t, e) {
                    t.draggableHelper = e || null
                },
                DRAGGABLE_HELPER_RESET(t) {
                    t.draggableHelper = null
                },
                STATIC_DROPPABLE_ADD(t, e) {
                    t.static[e.id] = e
                },
                STATIC_DROPPABLE_UPDATE(t, {id: e, width: s, height: i, x: n, y: a}) {
                    const r = t.static[e];
                    r.dimensions.width = s,
                    r.dimensions.height = i,
                    r.position.x = n,
                    r.position.y = a
                },
                WORKSPACE_ELEMENT_REMOVE(t, e) {
                    t.dragging === e && (t.dragging = null)
                }
            }
        };
        var X = V;
        const q = {
            isReady: !1,
            playing: !1,
            online: !0,
            user: null,
            userProgressSynced: !1,
            visible: !0
        }
          , Q = {
            state: q,
            getters: {
                isGameReady: t=>t.isReady,
                online: t=>t.online,
                user: t=>t.user,
                isLoggedIn: t=>null !== t.user,
                canLogout: (t,e)=>e.isLoggedIn && t.userProgressSynced,
                isGameActive: t=>t.visible,
                isPlaying: t=>t.playing
            },
            actions: {
                online({commit: t}) {
                    t("ONLINE")
                },
                offline({commit: t}) {
                    t("OFFLINE")
                },
                loggedIn({commit: t}, e) {
                    t("LOGGED_IN", e),
                    h["a"].emit("LOGGED_IN")
                },
                userSynced({commit: t}) {
                    t("USER_SYNCED")
                },
                notLoggedIn() {
                    h["a"].emit("NOT_LOGGED_IN")
                },
                loggedOut({commit: t}) {
                    t("LOGGED_OUT"),
                    h["a"].emit("LOGGED_OUT")
                },
                startedPlaying({commit: t}) {
                    t("PLAY")
                }
            },
            mutations: {
                GAME_READY(t) {
                    t.isReady = !0
                },
                ONLINE(t) {
                    t.online = !0
                },
                OFFLINE(t) {
                    t.online = !1
                },
                LOGGED_IN(t, e) {
                    t.user = e
                },
                LOGGED_OUT(t) {
                    t.user = null,
                    t.userProgressSynced = !1
                },
                USER_SYNCED(t) {
                    t.userProgressSynced = !0
                },
                VISIBILITY(t, e) {
                    t.visible !== e && (t.visible = e)
                },
                PLAY(t) {
                    t.playing = !0
                }
            }
        };
        var J = Q
          , Z = s("c97d");
        class tt {
            constructor() {
                this._history = [],
                this._historyMap = {};
                const t = I["b"].load(I["a"].PROGRESS) || [];
                this._history = t,
                this._historyMap = x(t)
            }
            set(t) {
                this._history = t,
                this._historyMap = x(t)
            }
            addNewParents([t,e]) {
                this.addEntry({
                    father: t,
                    mother: e,
                    timestamp: Date.now()
                })
            }
            addEntry(t) {
                this._history.push(t);
                const e = O([t.father, t.mother]);
                this._historyMap[e] = t.timestamp
            }
            reset() {
                this._history = [],
                this._historyMap = {}
            }
            removeBeforeTimestamp(t) {
                const e = this._history.filter(({timestamp: e})=>e >= t);
                e.length !== this._history.length && (this._historyMap = x(e)),
                this._history = e
            }
            get history() {
                return this._history
            }
            get historyMap() {
                return this._historyMap
            }
        }
        const et = new tt;
        var st = et
          , it = s("cf19");
        const nt = {
            historyTimestamp: 0,
            resetTimestamp: I["b"].load(I["a"].RESET_TIMESTAMP) || -1
        }
          , at = {
            state: nt,
            getters: {
                history: t=>t.historyTimestamp < 0 ? [] : st.history,
                historyMap: t=>t.historyTimestamp < 0 ? {} : st.historyMap,
                hasMixed: (t,e)=>t=>{
                    const s = O(t);
                    return e.historyMap.hasOwnProperty(s)
                }
                ,
                historyBefore: (t,e)=>t=>e.history.filter(({timestamp: e})=>e < t),
                historyLastTimestamp: (t,e)=>e.history.length ? e.history[e.history.length - 1].timestamp : 0,
                resetTimestamp: t=>t.resetTimestamp
            },
            actions: {
                historyReload({dispatch: t}) {
                    t("progressCalculate"),
                    Z["a"].scrollTop(),
                    h["a"].emit("SYNC_PROGRESS_CHANGED")
                },
                historySet({commit: t}, e) {
                    t("HISTORY_SET", e)
                },
                historyIntegrity({getters: t, dispatch: e}) {
                    const s = e=>t.hasElement(e) && t.hasInProgress(e) || Object(it["a"])(e)
                      , i = t.history.filter(({mother: t, father: e})=>s(t) && s(e))
                      , n = i.length !== t.history.length;
                    n && (e("historySet", i),
                    e("historyReload"))
                },
                historyRemoveBeforeTimestamp({commit: t}, e) {
                    t("HISTORY_REMOVE_BEFORE", e)
                },
                mixNew({commit: t, getters: e}, {parents: s}) {
                    e.hasMixed(s) || (t("HISTORY_NEW_PARENTS", s),
                    h["a"].emit("HISTORY_UPDATE"))
                },
                resetProgress({commit: t, dispatch: e}) {
                    t("RESET_PROGRESS"),
                    e("libraryReload"),
                    h["a"].emit("PROGRESS_RESET")
                }
            },
            mutations: {
                HISTORY_SET(t, e) {
                    st.set(e),
                    t.historyTimestamp = Date.now()
                },
                HISTORY_ADD(t, e) {
                    st.addEntry(e),
                    t.historyTimestamp = Date.now()
                },
                HISTORY_NEW_PARENTS(t, e) {
                    st.addNewParents(e),
                    t.historyTimestamp = Date.now()
                },
                HISTORY_REMOVE_BEFORE(t, e) {
                    st.removeBeforeTimestamp(e),
                    t.historyTimestamp = Date.now()
                },
                RESET_PROGRESS(t) {
                    st.reset(),
                    t.historyTimestamp = Date.now(),
                    t.resetTimestamp = Date.now()
                },
                RESET_TIMESTAMP(t, e) {
                    t.resetTimestamp = e
                }
            }
        };
        var rt = at
          , ot = s("15fd")
          , ct = s("a799");
        const lt = ["status"]
          , ht = {
            status: null,
            father: null,
            mother: null,
            children: [],
            baseChildren: []
        }
          , dt = {
            state: ht,
            getters: {
                mixStatus: t=>t.status,
                mixFather: t=>t.father,
                mixMother: t=>t.mother,
                mixChildren: t=>t.children,
                mixBaseChildren: t=>t.baseChildren,
                mixHasBase: (t,e)=>!!e.mixBaseChildren.length,
                mixHasNewChildren: (t,e)=>e.mixChildren.some(({id: t})=>e.elementIsNewlyDiscovered(t) && !e.hasUnlockedBase(t)),
                isMixingDisabled: (t,e)=>e.isArtModeEnabled
            },
            actions: {
                droppableDrop({dispatch: t}) {
                    const e = ct["a"].getDropMixResult();
                    if (!e)
                        return;
                    const {status: s} = e
                      , i = Object(ot["a"])(e, lt);
                    t(s, i);
                    const n = ct["a"].getBaseElementsMixResult(i.children);
                    n && t("mixBase", n)
                },
                mixFail({dispatch: t}) {
                    t("mixOccured", {
                        status: d["a"]
                    }),
                    h["a"].emit("MIX_FAIL")
                },
                mixMixed({dispatch: t}, {children: e}) {
                    t("mixOccured", {
                        status: d["b"],
                        children: e.map(t=>({
                            id: t
                        }))
                    }),
                    h["a"].emit("MIX_MIXED")
                },
                mixNew({dispatch: t}, {children: e, positions: s}) {
                    o();
                    const i = e.map((t,e)=>({
                        id: t,
                        position: s[e]
                    }));
                    t("mixOccured", {
                        status: d["c"],
                        children: i
                    }),
                    h["a"].emit("MIX_NEW")
                },
                mixBase({commit: t, dispatch: e, getters: s}, {children: i, positions: n}) {
                    const a = i.map((t,e)=>({
                        id: t,
                        position: n[e]
                    }))
                      , r = i.filter(t=>s.elementById(t).base);
                    t("MIX_SET_CHILDREN", a),
                    t("MIX_SET_BASE_CHILDREN", r),
                    e("progressNewBase", r)
                },
                mixOccured({commit: t, getters: e}, {status: s, children: i=[]}) {
                    if (!e.draggedElement || !e.draggingOverElement)
                        return;
                    const n = Object(j["a"])({}, e.draggedElement)
                      , a = Object(j["a"])({}, e.draggingOverElement);
                    t("MIX_OCCURED", {
                        status: s,
                        father: n,
                        mother: a,
                        children: i
                    })
                },
                mixReset({commit: t, state: e}) {
                    e.status && t("MIX_RESET")
                }
            },
            mutations: {
                MIX_OCCURED(t, e) {
                    t.status = e.status,
                    t.father = e.father,
                    t.mother = e.mother,
                    t.children = e.children
                },
                MIX_SET_CHILDREN(t, e) {
                    t.children = e
                },
                MIX_SET_BASE_CHILDREN(t, e) {
                    t.baseChildren = e
                },
                MIX_RESET(t) {
                    t.status = null,
                    t.father = null,
                    t.mother = null,
                    t.children.length && (t.children = []),
                    t.baseChildren.length && (t.baseChildren = [])
                }
            }
        };
        var ut = dt;
        const mt = {
            enabled: !0,
            current: null,
            playing: !1
        }
          , pt = {
            state: mt,
            getters: {
                isAudioEnabled: t=>t.enabled,
                isMusicPlaying: t=>t.playing,
                currentMusic: t=>t.current
            },
            actions: {
                musicSet({commit: t}, e) {
                    t("MUSIC_SET", e)
                },
                musicPlay({commit: t}, e) {
                    t("MUSIC_PLAY", e)
                },
                musicPause({commit: t}) {
                    t("MUSIC_PAUSE", void 0)
                },
                musicStop({commit: t}) {
                    t("MUSIC_STOP", void 0)
                }
            },
            mutations: {
                AUDIO_DISABLED(t) {
                    t.enabled = !1
                },
                MUSIC_SET(t, e) {
                    t.current = e
                },
                MUSIC_PLAY(t, e) {
                    t.current = e,
                    t.playing = !0
                },
                MUSIC_PAUSE(t) {
                    t.playing = !1
                },
                MUSIC_STOP(t) {
                    t.current = null,
                    t.playing = !1
                }
            }
        };
        var gt = pt
          , Et = s("ded8");
        const ft = {
            library: [],
            rendered: !1,
            sortBy: "alphabet"
        }
          , bt = {
            state: ft,
            getters: {
                library: t=>t.library,
                hasLibrary: t=>!!t.library.length,
                hasInLibrary: t=>e=>t.library.includes(`${e}`),
                librarySortBy: t=>t.sortBy,
                isLibraryRendered: t=>t.rendered
            },
            actions: {
                libraryReload({commit: t, getters: e}) {
                    let s, i = [...e.prime, ...e.progress, ...e.base];
                    i = e.isArtModeEnabled ? i.concat(e.final) : i.filter(t=>{
                        const s = e.mixStatus && (e.mixFather.elementId === t || e.mixMother.elementId === t);
                        return !!s || !(e.elementIsExhausted(t) && !e.isExhaustedVisible(t))
                    }
                    ),
                    s = "timestamp" === e.librarySortBy ? Object(Et["b"])(e.total, i) : Object(Et["a"])(e.elements, i),
                    t("LIBRARY_RELOAD", s)
                },
                libraryRendered({commit: t}) {
                    t("LIBRARY_RENDERED")
                },
                libraryChangeSorting({dispatch: t, commit: e}, s) {
                    e("LIBRARY_SORTING", s),
                    t("libraryReload")
                }
            },
            mutations: {
                LIBRARY_RELOAD(t, e) {
                    t.library = e
                },
                LIBRARY_RENDERED(t) {
                    t.rendered = !0
                },
                LIBRARY_SORTING(t, e) {
                    t.sortBy !== e && (t.sortBy = e)
                }
            }
        };
        var yt = bt
          , vt = s("54cb")
          , wt = s("22a7");
        const It = {
            progress: {},
            final: {},
            prime: [],
            base: [],
            total: []
        }
          , At = {
            state: It,
            getters: {
                progressObject: t=>t.progress,
                progress: t=>Object.keys(t.progress),
                prime: t=>t.prime,
                finalObject: t=>t.final,
                final: t=>Object.keys(t.final),
                base: t=>t.base,
                total: t=>t.total,
                hasProgress: (t,e)=>!!e.progress.length,
                hasInProgress: t=>e=>{
                    const s = `${e}`;
                    return t.progress.hasOwnProperty(s) || t.final.hasOwnProperty(s) || t.base.includes(s) || t.prime.includes(s)
                }
                ,
                hasUnlockedBase: t=>e=>t.base.includes(e),
                totalProgress: (t,e)=>e.totalProgressWithoutFinal + e.final.length,
                totalProgressWithoutFinal: (t,e)=>{
                    let s = e.progress.length;
                    return s += e.prime.length,
                    s += e.base.length,
                    s
                }
                ,
                totalProgressElements: (t,e)=>[...e.progress, ...e.prime, ...e.base, ...e.final],
                progressSince: t=>e=>t.total.filter(({timestamp: t})=>t > e).map(({id: t})=>t),
                elementTimestamp: t=>e=>{
                    for (let s = t.total.length - 1; s >= 0; s--)
                        if (t.total[s].id === e)
                            return t.total[s].timestamp;
                    return 0
                }
                ,
                elementIsNewlyDiscovered: (t,e)=>t=>{
                    const s = e.elementTimestamp(t)
                      , i = e.historyLastTimestamp;
                    return s >= i
                }
                ,
                hasAllElements: (t,e)=>e.elementsCount > 0 && e.totalProgress >= e.elementsCount,
                hasAllExhausted: (t,e)=>e.elementsCount > 0 && e.elementsIds.every(t=>{
                    const s = e.elements[t];
                    return !!s.final || !!e.elementIsExhausted(t)
                }
                ),
                hasEmptyLibrary: (t,e)=>!e.hasExhaustedVisible && e.hasAllExhausted,
                hasAllCleared: (t,e)=>e.hasEmptyLibrary && !e.workspaceHasInactive,
                isArtModeEnabled: (t,e)=>e.hasAllCleared && !e.needsGameCompletionAnimation
            },
            actions: {
                progressCalculate({commit: t, dispatch: e, getters: s}) {
                    const i = wt["a"].analyze(s.elements, [...s.history]);
                    t("PROGRESS_ANALYZED", i);
                    const n = vt["a"].getInitiallyUnlocked();
                    n.length && e("progressNewBase", n),
                    e("exhaustedCheckIds", s.totalProgressElements),
                    e("libraryReload"),
                    H()(()=>{
                        h["a"].emit("ENCYCLOPEDIA_PROGRESS_ANALYZED")
                    }
                    )
                },
                mixNew({commit: t, getters: e}, {parents: s, children: i}) {
                    i.forEach(s=>{
                        if (e.hasInLibrary(s))
                            return;
                        const i = e.elementById(s);
                        i && (i.final ? t("PROGRESS_FINAL", s) : e.hasInProgress(s) || t("PROGRESS_NEW", s))
                    }
                    ),
                    window.setTimeout(()=>h["a"].emit("ENCYCLOPEDIA_MIX_NEW", {
                        parents: s,
                        children: i,
                        timestamp: Date.now()
                    }), 60)
                },
                progressNewBase({commit: t, getters: e}, s) {
                    const i = s.filter(t=>!e.base.includes(t));
                    i.forEach(e=>t("PROGRESS_BASE", {
                        id: e,
                        timestamp: Date.now()
                    })),
                    h["a"].emit("ENCYCLOPEDIA_MIX_BASE", i)
                }
            },
            mutations: {
                PROGRESS_ANALYZED(t, {progress: e, base: s, final: i, primes: n, timestamps: r}) {
                    t.progress = e,
                    t.base = s,
                    t.prime = n,
                    t.final = i,
                    t.total = r,
                    Object(a["A"])("progress", "analyzed", t)
                },
                PROGRESS_NEW(t, e) {
                    i["a"].set(t.progress, e, !0),
                    t.total.push({
                        id: e,
                        timestamp: Date.now()
                    })
                },
                PROGRESS_FINAL(t, e) {
                    t.final.hasOwnProperty(e) || (i["a"].set(t.final, e, !0),
                    t.total.push({
                        id: e,
                        timestamp: Date.now()
                    }))
                },
                PROGRESS_BASE(t, {id: e, timestamp: s}) {
                    t.base.push(e),
                    t.total.push({
                        id: e,
                        timestamp: s
                    })
                },
                PROGRESS_PRIMES(t, e) {
                    t.prime = e
                },
                RESET_PROGRESS(t) {
                    t.progress = {},
                    t.final = {},
                    t.base = [],
                    t.total = []
                }
            }
        };
        var Tt = At;
        const St = {
            query: null
        }
          , _t = {
            state: St,
            getters: {
                searchQuery: t=>t.query,
                isSearchActive: t=>null !== t.query
            },
            actions: {
                search({commit: t}, e) {
                    t("SEARCH", e)
                },
                searchShow({commit: t}) {
                    t("SEARCH", "")
                },
                searchHide({commit: t, state: e}) {
                    null !== e.query && t("SEARCH", null)
                }
            },
            mutations: {
                SEARCH(t, e) {
                    t.query = e
                }
            }
        };
        var Ot = _t;
        const xt = Object(j["a"])({
            music: !0,
            sfx: !0
        }, I["b"].load(I["a"].SETTINGS) || {})
          , Pt = {
            state: xt,
            getters: {
                playSfx: t=>t.sfx,
                playMusic: t=>t.music
            },
            actions: {
                settingsMusic({commit: t}, e) {
                    t("SETTINGS_MUSIC", e)
                },
                settingsSfx({commit: t}, e) {
                    t("SETTINGS_SFX", e)
                }
            },
            mutations: {
                SETTINGS_MUSIC(t, e) {
                    t.music = e
                },
                SETTINGS_SFX(t, e) {
                    t.sfx = e
                }
            }
        };
        var Ct = Pt;
        const Lt = {
            firstLaunch: Date.now(),
            sessionsCount: 1,
            session: {
                initialProgress: 0,
                start: Date.now(),
                streak: 0,
                fails: 0,
                failsStreak: 0
            }
        }
          , Rt = Object(j["a"])(Object(j["a"])({}, Lt), I["b"].load(I["a"].STATS) || {})
          , Dt = {
            state: Rt,
            getters: {
                firstLaunch: t=>t.firstLaunch,
                sessionsCount: t=>t.sessionsCount,
                sessionStats: t=>t.session,
                sessionFailStreak: t=>t.session.failsStreak,
                sessionFails: t=>t.session.fails,
                sessionStreak: t=>t.session.streak
            },
            actions: {
                statsSessionsCount({commit: t}) {
                    t("STATS_SESSIONS")
                },
                statsInitialProgress({commit: t, getters: e}) {
                    t("STATS_INITIAL_PROGRESS", e.totalProgress)
                },
                mixOccured({commit: t}, {status: e}) {
                    e === d["c"] ? t("STATS_MIX_NEW") : e === d["a"] && t("STATS_MIX_FAIL")
                },
                resetProgress({dispatch: t}) {
                    t("statsInitialProgress")
                }
            },
            mutations: {
                STATS_SESSIONS(t) {
                    t.sessionsCount++
                },
                STATS_INITIAL_PROGRESS(t, e) {
                    t.session.initialProgress = e
                },
                STATS_MIX_NEW(t) {
                    t.session.streak++,
                    t.session.failsStreak = 0
                },
                STATS_MIX_FAIL(t) {
                    t.session.streak = 0,
                    t.session.failsStreak++,
                    t.session.fails++
                }
            }
        };
        var Nt = Dt
          , kt = s("6953");
        const Mt = Object(j["a"])({
            tutorial: null,
            tutorialsFinished: !1,
            currentText: null,
            currentTextPosition: null,
            shownText: []
        }, I["b"].load(I["a"].TUTORIALS))
          , jt = {
            state: Mt,
            getters: {
                tutorial: t=>t.tutorial,
                areTutorialsFinished: t=>t.tutorialsFinished,
                isTutorialActive: t=>e=>t.tutorial === e,
                tutorialTextCurrentId: t=>t.currentText,
                tutorialTextCurrent: (t,e)=>kt["a"].getById(e.tutorialTextCurrentId),
                tutorialTextPosition: t=>t.currentTextPosition,
                tutorialTextShown: t=>t.shownText,
                wasTutorialTextShown: (t,e)=>t=>e.tutorialTextShown.includes(t)
            },
            actions: {
                tutorialShow({commit: t}, e) {
                    t("TUTORIAL_SHOW", e)
                },
                tutorialHide({commit: t}) {
                    t("TUTORIAL_HIDE")
                },
                tutorialsFinished({commit: t}) {
                    t("TUTORIALS_FINISHED"),
                    h["a"].emit("TUTORIALS_FINISHED")
                },
                tutorialTextShow({commit: t}, e) {
                    t("TUTORIAL_TEXT_SHOW", e)
                },
                tutorialTextHide({commit: t}) {
                    t("TUTORIAL_TEXT_HIDE")
                },
                resetProgress({commit: t}) {
                    t("TUTORIALS_TEXT_CLEAR"),
                    kt["a"].onReset()
                }
            },
            mutations: {
                TUTORIAL_SHOW(t, e) {
                    t.tutorial = e,
                    t.tutorialsFinished = !1
                },
                TUTORIAL_HIDE(t) {
                    t.tutorial = null
                },
                TUTORIALS_FINISHED(t) {
                    t.tutorialsFinished = !0
                },
                TUTORIAL_TEXT_SHOW(t, {id: e, position: s}) {
                    t.currentText = e,
                    t.currentTextPosition = s,
                    t.shownText.includes(e) || t.shownText.push(e)
                },
                TUTORIAL_TEXT_HIDE(t) {
                    t.currentText = null,
                    t.currentTextPosition = null
                },
                TUTORIALS_TEXT_CLEAR(t) {
                    t.currentText = null,
                    t.currentTextPosition = null,
                    t.shownText = []
                }
            }
        };
        var $t = jt
          , Ht = s("b2eb")
          , Bt = s("2540");
        const Ft = {
            popupName: null,
            popupData: null,
            isOverlayActive: !1
        }
          , Gt = {
            state: Ft,
            getters: {
                popup: t=>t.popupName,
                isPopupActive: (t,e)=>null !== e.popup,
                isPopupOverlayActive: t=>t.isOverlayActive,
                isPopupWithNameActive: (t,e)=>t=>e.popup === t,
                popupData: t=>t.popupData,
                isPopupClosable: (t,e)=>null === e.popupData || !e.popupData.hasOwnProperty("closable") || e.popupData.closable
            },
            actions: {
                popupToggle({dispatch: t, getters: e}, s) {
                    e.popup !== s ? (null !== e.popup && t("popupHide", void 0),
                    H()(()=>t("popupShow", s))) : t("popupHide", void 0)
                },
                popupShow({commit: t, dispatch: e}, s) {
                    s === Ht["ENCYCLOPEDIA"] && e("encyclopediaShow"),
                    t("UI_POPUP_SHOW", s),
                    Bt["a"].onShow(s)
                },
                popupShowWithData({commit: t, dispatch: e}, {name: s, data: i}) {
                    e("popupShow", s),
                    t("UI_POPUP_DATA", i)
                },
                async popupShowNext({dispatch: t}, {name: e, data: s=null}) {
                    t("popupHide", {
                        hideOverlay: !1
                    }),
                    await Object(a["c"])(Ht["DELAY"]),
                    s ? t("popupShowWithData", {
                        name: e,
                        data: s
                    }) : t("popupShow", e)
                },
                popupHide({commit: t, getters: e}, {hideOverlay: s=!0}={}) {
                    null !== e.popup && (Bt["a"].onHide(e.popup),
                    t("UI_POPUP_HIDE", s))
                }
            },
            mutations: {
                UI_POPUP_SHOW(t, e) {
                    t.popupName = e,
                    t.isOverlayActive = !0
                },
                UI_POPUP_DATA(t, e) {
                    t.popupData = e
                },
                UI_POPUP_HIDE(t, e) {
                    t.popupName = null,
                    e && (t.isOverlayActive = !1,
                    t.popupData = null)
                }
            }
        };
        var Ut = Gt
          , Wt = s("c561")
          , Yt = s("b10a");
        const Kt = {
            elements: I["b"].load(I["a"].WORKSPACE) || [],
            elementsPrevious: []
        }
          , zt = {
            state: Kt,
            getters: {
                workspaceElements: t=>t.elements,
                workspacePrevious: t=>t.elementsPrevious,
                workspaceRevertable: (t,e)=>!!t.elementsPrevious.length || !!e.workspaceInactivePrevious.length,
                workspaceElementsExhausted: (t,e)=>e.workspaceElements.filter(({elementId: t})=>e.elementIsExhausted(t))
            },
            actions: {
                workspaceClearRevertStart({dispatch: t, getters: e}) {
                    e.workspaceRevertable ? t("workspaceRevertStart") : t("workspaceClearStart")
                },
                workspaceClearStart({dispatch: t, getters: e}) {
                    (e.workspaceElements.length || e.workspaceExhausted.length) && (t("animationChange", l["a"]),
                    h["a"].emit("WORKSPACE_CLEAR_START"),
                    o(),
                    h["a"].once("ANIMATION_WORKSPACE_MIDDLE", ()=>t("workspaceClear")))
                },
                workspaceRevertStart({dispatch: t, getters: e}) {
                    (e.workspacePrevious.length || e.workspaceInactivePrevious.length) && (t("animationChange", l["g"]),
                    o(),
                    h["a"].once("ANIMATION_WORKSPACE_MIDDLE", ()=>t("workspaceRevert")))
                },
                workspaceClear({commit: t, getters: e}) {
                    e.droppablesActive.length && (t("WORKSPACE_CLEAR", e.draggableHelperElement),
                    h["a"].emit("WORKSPACE_CLEAR"))
                },
                workspaceRevert({commit: t, getters: e}) {
                    e.workspacePrevious.length && (t("WORKSPACE_REVERT"),
                    h["a"].emit("WORKSPACE_REVERT"))
                },
                workspaceRemoveUnderLibrary({commit: t, getters: e}) {
                    const {position: {x: s}} = e.droppableStaticById(F["e"])
                      , i = e.workspaceBoxDimensions.width / 2
                      , n = s - i;
                    e.workspaceElements.forEach(s=>{
                        const i = s.id === e.draggedId
                          , a = s.position.x <= n;
                        i || a || t("WORKSPACE_ELEMENT_REMOVE", s.id)
                    }
                    )
                },
                workspaceRemoveExhausted({commit: t, getters: e}) {
                    e.workspaceElementsExhausted.forEach(({id: e})=>t("WORKSPACE_ELEMENT_REMOVE", e))
                },
                workspaceElementClone({dispatch: t, commit: e, getters: s}, i) {
                    const n = s.droppableById(i);
                    if (!n)
                        return;
                    const a = Object(j["a"])({}, n)
                      , r = Yt["a"].getCloneDirections(n.position, s.workspaceBoxDimensions);
                    e("DRAGGABLE_HELPER_PREPARE", {
                        helper: s.draggableHelperElement,
                        elementId: a.elementId,
                        position: {
                            x: n.position.x + r.x * F["a"] * 2,
                            y: n.position.y + r.y * F["a"]
                        }
                    }),
                    h["a"].emit("ELEMENT_CLONE", s.draggableHelperId),
                    e("DRAGGABLE_HELPER_RESET"),
                    window.setTimeout(()=>t("draggableHelperAdd", !0), 50)
                },
                workspaceElementsAdd({commit: t}, e) {
                    t("WORKSPACE_ELEMENT_ADD", e)
                },
                workspaceElementRemove({commit: t}, e) {
                    t("WORKSPACE_ELEMENT_REMOVE", e)
                },
                workspaceRemoveMixParents({getters: t, dispatch: e}) {
                    if (!t.mixFather || !t.mixMother)
                        return;
                    const s = [t.mixFather.id, t.mixMother.id];
                    s.forEach(t=>e("workspaceElementRemove", t))
                },
                workspaceHandleMixResult({dispatch: t, getters: e}, {removeParents: s=!0}={}) {
                    s && t("workspaceRemoveMixParents");
                    const i = e.mixChildren
                      , n = i.map(t=>Object(j["a"])(Object(j["a"])({}, Wt["a"]), {}, {
                        id: Object(B["a"])(t.id),
                        elementId: t.id,
                        position: t.position
                    }))
                      , a = []
                      , r = []
                      , o = [];
                    n.forEach(t=>{
                        const s = t.elementId
                          , i = e.elementById(s);
                        i && (i.final ? a.push(t) : e.elementIsExhausted(s) ? r.push(t) : o.push(t))
                    }
                    ),
                    o.length && t("workspaceElementsAdd", o),
                    a.length && t("workspaceFinalAdd", a),
                    r.length && t("workspaceExhaustedAdd", r),
                    H()(()=>t("libraryReload"))
                },
                historyIntegrity({commit: t, getters: e}) {
                    e.workspaceElements.forEach(({id: s, elementId: i})=>{
                        e.draggableHelperId !== s && (e.hasInProgress(i) || t("WORKSPACE_ELEMENT_REMOVE", s))
                    }
                    )
                },
                resetProgress({commit: t, getters: e}) {
                    t("WORKSPACE_RESET", e.draggableHelperElement)
                }
            },
            mutations: {
                WORKSPACE_CLEAR(t, e) {
                    const s = []
                      , i = [];
                    t.elements.forEach(t=>(t && t.id === e.id ? i : s).push(t)),
                    t.elementsPrevious = s,
                    t.elements = i
                },
                WORKSPACE_REVERT(t) {
                    t.elements.push(...t.elementsPrevious),
                    t.elementsPrevious.length && (t.elementsPrevious = [])
                },
                WORKSPACE_ELEMENT_ADD(t, e) {
                    t.elements.length >= 1 && t.elementsPrevious.length && (t.elementsPrevious = []);
                    const s = [...e];
                    t.elements.push(...s)
                },
                WORKSPACE_ELEMENT_REMOVE(t, e) {
                    t.elements = t.elements.filter(t=>t.id !== e)
                },
                WORKSPACE_RESET(t, e) {
                    let s = [];
                    e && (s = [e]),
                    t.elements = s,
                    t.elementsPrevious = []
                },
                LOGGED_IN(t) {
                    t.elementsPrevious = []
                },
                DRAG_START(t) {
                    t.elementsPrevious.length && (t.elementsPrevious = [])
                },
                DRAGGABLE_HELPER_SET(t, e) {
                    e && t.elements.push(Object(j["a"])(Object(j["a"])({}, Wt["a"]), {}, {
                        id: e,
                        elementId: G["a"],
                        position: {
                            x: -500,
                            y: -500
                        }
                    }))
                },
                DRAGGABLE_HELPER_PREPARE(t, {helper: e, elementId: s, position: i}) {
                    e && (e.elementId = s,
                    e.position = i)
                }
            }
        };
        var Vt = zt;
        const Xt = Object(j["a"])({
            workspaceFinal: [],
            workspaceFinalPrevious: [],
            workspaceExhausted: [],
            workspaceExhaustedPrevious: [],
            needsGameCompletionAnimation: !1
        }, I["b"].load(I["a"].WORKSPACE_INACTIVE) || {});
        Xt.hasOwnProperty("exhausted") && delete Xt.exhausted;
        const qt = Xt
          , Qt = {
            state: qt,
            getters: {
                workspaceFinal: t=>t.workspaceFinal,
                workspaceFinalPrevious: t=>t.workspaceFinalPrevious,
                workspaceExhausted: t=>t.workspaceExhausted,
                workspaceExhaustedPrevious: t=>t.workspaceExhaustedPrevious,
                workspaceInactivePrevious: t=>t.workspaceExhaustedPrevious.concat(t.workspaceFinalPrevious),
                workspaceHasInactive: (t,e)=>!!e.workspaceFinal.length || !!e.workspaceExhausted.length,
                needsGameCompletionAnimation: t=>t.needsGameCompletionAnimation
            },
            actions: {
                async workspaceClear({commit: t}) {
                    t("WORKSPACE_FINAL_CLEAR")
                },
                workspaceRevert({commit: t}) {
                    t("WORKSPACE_FINAL_REVERT")
                },
                workspaceFinalAdd({commit: t}, e) {
                    e.length && t("WORKSPACE_FINAL_ADD", e)
                },
                workspaceFinalRemove({commit: t}, e) {
                    t("WORKSPACE_FINAL_REMOVE", e)
                },
                workspaceExhaustedAdd({commit: t}, e) {
                    e.length && t("WORKSPACE_EXHAUSTED_ADD", e)
                },
                async workspaceExhaustedRemove({commit: t}, e) {
                    t("WORKSPACE_EXHAUSTED_REMOVE", e)
                },
                historyIntegrity({dispatch: t}) {
                    t("workspaceExhaustedCheck")
                },
                workspaceExhaustedCheck({dispatch: t, getters: e}) {
                    const s = e.workspaceElementsExhausted;
                    t("workspaceExhaustedAdd", s),
                    t("workspaceRemoveExhausted")
                }
            },
            mutations: {
                WORKSPACE_FINAL_CLEAR(t) {
                    (t.workspaceFinal.length || t.workspaceExhausted.length) && (t.needsGameCompletionAnimation = !0),
                    t.workspaceExhaustedPrevious = t.workspaceExhausted,
                    t.workspaceExhausted = [],
                    t.workspaceFinalPrevious = t.workspaceFinal,
                    t.workspaceFinal = []
                },
                WORKSPACE_FINAL_REVERT(t) {
                    t.workspaceExhausted = t.workspaceExhaustedPrevious,
                    t.workspaceExhaustedPrevious = [],
                    t.workspaceFinal = t.workspaceFinalPrevious,
                    t.workspaceFinalPrevious = []
                },
                DRAG_START(t) {
                    t.workspaceExhaustedPrevious.length && (t.workspaceExhaustedPrevious = []),
                    t.workspaceFinalPrevious.length && (t.workspaceFinalPrevious = [])
                },
                WORKSPACE_FINAL_ADD(t, e) {
                    t.workspaceFinal = t.workspaceFinal.concat(e)
                },
                WORKSPACE_FINAL_REMOVE(t, e) {
                    t.workspaceFinal = t.workspaceFinal.filter(({elementId: t})=>e !== t),
                    t.needsGameCompletionAnimation = !0
                },
                WORKSPACE_EXHAUSTED_ADD(t, e) {
                    t.workspaceExhausted = t.workspaceExhausted.concat(e)
                },
                WORKSPACE_EXHAUSTED_REMOVE(t, e) {
                    t.workspaceExhausted = t.workspaceExhausted.filter(({elementId: t})=>e !== t),
                    t.needsGameCompletionAnimation = !0
                },
                ANIMATION_EXHAUSTED_FINISH(t) {
                    t.needsGameCompletionAnimation = !0
                },
                WORKSPACE_INACTIVE_RESET(t) {
                    t.needsGameCompletionAnimation = !1,
                    t.workspaceFinalPrevious = [],
                    t.workspaceExhaustedPrevious = []
                },
                RESET_PROGRESS(t) {
                    t.workspaceFinal = [],
                    t.workspaceFinalPrevious = [],
                    t.workspaceExhausted = [],
                    t.workspaceExhaustedPrevious = []
                },
                LOGGED_IN(t) {
                    t.workspaceFinalPrevious = [],
                    t.workspaceExhaustedPrevious = []
                }
            }
        };
        var Jt = Qt;
        s.d(e, "b", (function() {
            return ee
        }
        )),
        i["a"].use(n["b"]);
        const Zt = {
            animations: p,
            base: b,
            dimensions: w,
            encyclopedia: S,
            exhausted: M,
            drag: X,
            global: J,
            history: rt,
            mix: ut,
            music: gt,
            library: yt,
            progress: Tt,
            search: Ot,
            settings: Ct,
            stats: Nt,
            tutorials: $t,
            ui: Ut,
            workspace: Vt,
            workspaceInactive: Jt
        }
          , te = new n["b"].Store({
            modules: Zt,
            strict: !1
        })
          , ee = (Object(n["a"])(),
        n["d"]);
        n["c"];
        e["a"] = te
    },
    "5d96": function(t, e, s) {
        "use strict";
        let i = !1;
        try {
            const t = Object.defineProperty({}, "passive", {
                get() {
                    return i = !0,
                    null
                }
            });
            window.addEventListener("test", ()=>{}
            , t)
        } catch (a) {}
        const n = !!i && {
            passive: !0
        };
        e["a"] = n
    },
    "623d": function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return i
        }
        )),
        s.d(e, "a", (function() {
            return n
        }
        ));
        const i = "outer-library"
          , n = "0"
    },
    6294: function(t, e, s) {
        "use strict";
        s("437c")
    },
    6953: function(t, e, s) {
        "use strict";
        s("e6cf");
        var i = s("d257")
          , n = s("ebe2")
          , a = s("1663")
          , r = s("7543")
          , o = s("93e8");
        const c = {
            horizontal: 1,
            vertical: 1
        }
          , l = [{
            id: n["TextTutorialId"].FINAL,
            text: "You discovered your first <strong>final item</strong>!<br />Since final items don't mix with anything they will hide into the encyclopedia when you tap them.",
            watcher: t=>{
                const e = "new" === t.mixStatus;
                if (!e)
                    return !1;
                const s = t.mixChildren.some(({id: e})=>t.elementById(e).final);
                return s
            }
            ,
            after: ()=>a["a"].then("ANIMATION_NEW_END"),
            delay: 500,
            getPosition: t=>{
                if (!t.getters.workspaceFinal.length)
                    return c;
                const e = Object(r["b"])(t.getters.workspaceFinal[0].position, t.getters.workspaceBoxDimensions);
                return Object(o["a"])(e)
            }
        }, {
            id: n["TextTutorialId"].BASE,
            text: "You discovered a new <strong>basic item</strong>!<br />Unlike the items you discover by mixing two things together, basic items can be unlocked by satisfying hidden goals!",
            watcher: t=>{
                const e = "new" === t.mixStatus;
                return !!e && t.mixHasBase
            }
            ,
            after: ()=>a["a"].then("ANIMATION_NEW_END"),
            delay: 500,
            getPosition: t=>{
                const e = t.getters.workspaceElements.find(({elementId: e})=>{
                    const s = t.getters.elementById(e);
                    return !!s && s.base
                }
                ) || null;
                if (!e)
                    return c;
                const s = Object(r["b"])(e.position, t.getters.workspaceBoxDimensions);
                return Object(o["a"])(s)
            }
        }, {
            id: n["TextTutorialId"].EXHAUSTED,
            text: t=>{
                const e = t.exhaustedVisible[t.exhaustedVisible.length - 1]
                  , s = t.elementById(e);
                let n;
                if (s) {
                    const t = Object(i["a"])(s.name);
                    n = `${t} is now a <strong>depleted item</strong>!<br />`
                } else
                    n = "You produced your first <strong>depleted item</strong>! ";
                return `${n} It means you discovered all uses of this item. Now when you tap it you'll send it straight to the encyclopedia!`
            }
            ,
            watcher: t=>{
                const e = "new" === t.mixStatus;
                if (!e)
                    return !1;
                if (!t.mixFather || !t.mixMother)
                    return !1;
                const s = [t.mixFather.elementId, t.mixMother.elementId]
                  , i = s.some(e=>!0 === t.elementIsExhausted(e));
                return i
            }
            ,
            after: t=>t.mixHasNewChildren ? a["a"].then("ANIMATION_NEW_END") : Promise.resolve(),
            delay: 1e3,
            getPosition: t=>{
                if (!t.getters.workspaceExhausted.length)
                    return c;
                const e = Object(r["b"])(t.getters.workspaceExhausted[0].position, t.getters.workspaceBoxDimensions);
                return Object(o["a"])(e)
            }
        }, {
            id: n["TextTutorialId"].GAME_END,
            text: "<strong>Nice!</strong><br />You discovered all available items!<br />If you feel adventureous you can look for the remaining combinations!",
            watcher: t=>t.hasAllElements,
            after: ()=>a["a"].then("GAME_END_ANIMATION_END"),
            delay: 500,
            getPosition: ()=>c
        }, {
            id: n["TextTutorialId"].GAME_COMPLETION,
            text: "<strong>Impressive!</strong><br />You discovered all available combinations!<br />Enjoy the art mode!",
            watcher: t=>t.hasAllCleared,
            after: ()=>a["a"].then("GAME_COMPLETION_ANIMATION_END"),
            delay: 500,
            getPosition: ()=>c
        }];
        class h {
            constructor(t) {
                this.unwatchList = [],
                this.tutorials = t
            }
            init(t) {
                this.$store = t,
                this.initWatchers()
            }
            initWatchers() {
                this.tutorials.forEach(t=>{
                    const {id: e} = t;
                    if (this.$store.getters.wasTutorialTextShown(e))
                        return;
                    const s = this.$store.watch((e,s)=>t.watcher(s), e=>{
                        e && (this.waitToShow(t),
                        s())
                    }
                    );
                    this.unwatchList.push(s)
                }
                )
            }
            async waitToShow(t) {
                "function" === typeof t.after && await t.after(this.$store.getters),
                "number" === typeof t.delay && await Object(i["c"])(t.delay),
                await this.canShow(),
                this.show(t)
            }
            canShow() {
                return null === this.$store.getters.tutorialTextCurrentId ? Promise.resolve() : new Promise(t=>{
                    const e = this.$store.watch((t,e)=>null === e.tutorialTextCurrentId, s=>{
                        s && (t(),
                        e())
                    }
                    )
                }
                )
            }
            show({id: t, getPosition: e}) {
                const s = e(this.$store);
                this.$store.dispatch("tutorialTextShow", {
                    id: t,
                    position: s
                })
            }
            onReset() {
                this.unwatchAll(),
                this.initWatchers()
            }
            unwatchAll() {
                this.unwatchList.forEach(t=>t()),
                this.unwatchList = []
            }
            getById(t) {
                return this.tutorials.find(({id: e})=>t === e) || null
            }
        }
        const d = new h(l);
        e["a"] = d
    },
    "6e2e": function(t, e, s) {
        "use strict";
        var i = s("2de2")
          , n = (s("e6cf"),
        s("e01a"),
        s("d257"));
        class a {
            constructor() {
                this.elements = {},
                this.descriptions = {},
                this.tags = []
            }
            init(t) {
                this.loader = t
            }
            async loadBase() {
                const t = await this.loader.loadBase();
                return this.elements = t,
                Object(n["A"])("base", "elements loaded", {
                    elements: t
                }),
                this.elements
            }
            async loadDescriptions() {
                const t = await this.loader.loadDescriptions();
                return this.descriptions = t,
                Object(n["A"])("base", "descriptions loaded", {
                    descriptions: t
                }),
                this.descriptions
            }
            async loadTags() {
                const t = await this.loader.loadTags();
                return this.tags = t,
                Object(n["A"])("base", "tags loaded", {
                    tags: t
                }),
                this.tags
            }
            elementAdd(t, e) {
                return this.elements[t] = e,
                this.elements
            }
            elementRemove(t) {
                return delete this.elements[t],
                this.elements
            }
            getElementById(t) {
                const e = `${t}`;
                return this.elements.hasOwnProperty(e) ? this.elements[e] : null
            }
            getDescriptionById(t) {
                const e = `${t}`;
                if (!this.descriptions.hasOwnProperty(e)) {
                    const t = this.getElementById(e);
                    return t && t.description.length ? t.description : ""
                }
                return this.descriptions[e]
            }
        }
        s("e260"),
        s("ddb0");
        class r extends a {
            constructor() {
                super(...arguments),
                this.textElements = {}
            }
            init(t) {
                this.loader = t
            }
            async loadTextElements() {
                const t = await this.loader.loadTextElements();
                return this.textElements = t,
                Object(n["A"])("base", "text elements loaded", {
                    elements: t
                }),
                this.textElements
            }
        }
        const o = i["b"] ? new r : new a;
        e["a"] = o
    },
    "6e95": function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return n
        }
        ));
        var i = s("2b0e");
        new i["a"];
        const n = i["a"]
    },
    "6eebf": function(t, e, s) {
        "use strict";
        s("e6cf"),
        s("e260"),
        s("ddb0");
        var i = s("2de2");
        class n {
            async init() {
                const t = await this.load();
                return this.firebase = t,
                this.initApp()
            }
            async load() {
                const t = await Promise.all([s.e("firebase-app-firebase-auth-firebase-database-firebase-messaging"), s.e("firebase-app")]).then(s.t.bind(null, "59ca", 7));
                return t.default
            }
            initApp() {
                return this.firebase.initializeApp(i["e"])
            }
            async reinitialize() {
                return await this.firebase.app().delete(),
                this.initApp()
            }
        }
        var a = n
          , r = s("d257")
          , o = s("7897")
          , c = s("1663");
        const l = "__fcm"
          , h = 1500
          , d = 3;
        class u {
            constructor() {
                this.onMessage = t=>{
                    c["a"].emit("NOTIFICATION_RECEIVED", t),
                    this.log("message received", t)
                }
            }
            init(t, e, s) {
                this.firebase = t,
                this._saveToken = s,
                this.initEvents(),
                c["a"].once("PLAY", async()=>{
                    await Object(r["c"])(h),
                    this.shouldLoad(e) && (await this.load(),
                    this.onLoaded(),
                    this.shouldRequestPermission(e) && this.request())
                }
                )
            }
            initEvents() {
                c["a"].on("NOTIFICATIONS_REQUEST", async()=>{
                    await this.load(),
                    this.onLoaded(),
                    this.request()
                }
                )
            }
            load() {
                return Promise.all([s.e("firebase-app-firebase-auth-firebase-database-firebase-messaging"), s.e("firebase-messaging")]).then(s.bind(null, "741f"))
            }
            onLoaded() {
                this.handleTokenRefresh(),
                this.messaging.onMessage(this.onMessage)
            }
            handleTokenRefresh() {
                this.messaging.onTokenRefresh(async()=>{
                    const t = await this.getToken();
                    this.sendToken(t)
                }
                )
            }
            async request() {
                if (this.hasSavedToken || this.hasDenied)
                    return;
                await this.requestPermission();
                const t = await this.getToken();
                this.sendToken(t),
                this.notifySuccess()
            }
            requestPermission() {
                return this.messaging.requestPermission()
            }
            async getToken() {
                const t = await this.messaging.getToken();
                if (!t)
                    throw new Error;
                return t
            }
            async sendToken(t) {
                "function" === typeof this._saveToken && (await this._saveToken(t),
                Object(o["b"])(l, JSON.stringify(1)))
            }
            notifySuccess() {
                c["a"].emit("NOTIFICATIONS_APPROVED")
            }
            shouldLoad(t) {
                return this.shouldRequestPermission(t) || window.Notification && "granted" === Notification.permission
            }
            shouldRequestPermission(t) {
                return t.getters.sessionsCount >= d && !this.hasDenied
            }
            get messaging() {
                return this.firebase.messaging()
            }
            get hasSavedToken() {
                return !!Object(o["a"])(l)
            }
            get canRequest() {
                return !this.hasSavedToken && !this.hasDenied
            }
            get hasDenied() {
                return !window.Notification || "denied" === Notification.permission
            }
            log(...t) {
                Object(r["q"])("firebase", "[NOTIFICATIONS]", ...t)
            }
        }
        var m = u
          , p = s("b047")
          , g = s.n(p);
        const E = {
            "auth/invalid-email": "Invalid email",
            "auth/user-disabled": "User account is disabled",
            "auth/user-not-found": "User not found",
            "auth/wrong-password": "Password doesn't match the email",
            "auth/email-already-in-use": "This email is already in use",
            "auth/operation-not-allowed": "Unknown error occured",
            "auth/weak-password": "Your password is too weak"
        };
        class f {
            constructor(t, e) {
                this.handleError = t=>{
                    const {code: e} = t
                      , s = this.getErrorText(e);
                    throw new Error(s)
                }
                ,
                this.firebase = t,
                this._onLoggedIn = e
            }
            async login({mail: t, password: e}) {
                try {
                    const {user: s, additionalUserInfo: i} = await this.firebase.auth().signInWithEmailAndPassword(t, e);
                    this.notify(s, i)
                } catch (s) {
                    this.handleError(s)
                }
            }
            async signup({mail: t, password: e}) {
                try {
                    const {user: s, additionalUserInfo: i} = await this.firebase.auth().createUserWithEmailAndPassword(t, e);
                    this.notify(s, i)
                } catch (s) {
                    this.handleError(s)
                }
            }
            async sendResetEmail(t) {
                return this.firebase.auth().sendPasswordResetEmail(t).catch(this.handleError)
            }
            async checkProviders(t) {
                try {
                    const e = await this.firebase.auth().fetchSignInMethodsForEmail(t);
                    if (!e.length)
                        return "signup";
                    const [s] = e;
                    return s
                } catch (e) {
                    this.handleError(e)
                }
            }
            getErrorText(t) {
                return E.hasOwnProperty(t) ? E[t] : "Unknown error occured!"
            }
            notify(t, e) {
                "function" === typeof this._onLoggedIn && this._onLoggedIn(t, e)
            }
        }
        var b = f;
        class y {
            constructor() {
                this.unsubscribe = null,
                this.onAuthStateChanged = (t,e)=>{
                    if (this.log("onAuthStateChanged", t),
                    !t)
                        return void this.onNotLoggedIn();
                    const s = {
                        isAnonymous: t.isAnonymous,
                        uid: t.uid,
                        name: t.displayName,
                        email: t.email,
                        emailVerified: t.emailVerified,
                        avatar: t.photoURL,
                        providerId: e ? e.providerId : "",
                        isNewUser: !!e && e.isNewUser
                    };
                    this.onLoggedIn(s)
                }
                ,
                this.onAuthStateChanged = g()(this.onAuthStateChanged, 250, {
                    leading: !0,
                    trailing: !1
                })
            }
            async init(t, e, s) {
                return this.firebase = t,
                this.$store = e,
                this.listeners = s,
                await this.load(),
                this.mail = new b(t,this.onAuthStateChanged),
                this.initAuth()
            }
            async load() {
                await Promise.all([s.e("firebase-app-firebase-auth-firebase-database-firebase-messaging"), s.e("firebase-auth")]).then(s.bind(null, "ea7b"))
            }
            initAuth() {
                null !== this.unsubscribe && this.unsubscribe(),
                this.unsubscribe = this.auth.onAuthStateChanged(this.onAuthStateChanged, t=>this.log(t))
            }
            login(t) {
                return "google" === t ? this.loginGoogle() : "facebook" === t ? this.loginFacebook() : Promise.reject()
            }
            loginGoogle() {
                const t = new this.firebase.auth.GoogleAuthProvider;
                return this.loginWithProvider(t)
            }
            loginFacebook() {
                const t = new this.firebase.auth.FacebookAuthProvider;
                return t.setCustomParameters({
                    display: "popup"
                }),
                this.loginWithProvider(t)
            }
            async loginWithProvider(t) {
                try {
                    const e = await this.auth.signInWithPopup(t);
                    return this.log(t.providerId, "login success", e),
                    this.onAuthStateChanged(e.user, e.additionalUserInfo),
                    e
                } catch (e) {
                    throw this.log(t.providerId, "login error", e),
                    new Error(e.message)
                }
            }
            async logout() {
                try {
                    await this.auth.signOut(),
                    this.onLoggedOut()
                } catch (t) {
                    throw this.log("logout error", t),
                    new Error(t.message)
                }
            }
            onLoggedIn(t) {
                this.$store.dispatch("loggedIn", t),
                this.listeners.onLogin()
            }
            onNotLoggedIn() {
                this.$store.dispatch("notLoggedIn")
            }
            onLoggedOut() {
                this.$store.dispatch("loggedOut"),
                this.initAuth(),
                this.listeners.onLogout()
            }
            get auth() {
                return this.firebase.auth()
            }
            log(...t) {
                Object(r["q"])("firebase", "[AUTH]", ...t)
            }
        }
        var v = y;
        class w {
            async init(t, e, s) {
                const i = await this.load();
                await s(),
                this.handler = new i(t,e)
            }
            async load() {
                const [,t] = await Promise.all([this.loadDatabase(), this.loadHandler()]);
                return t
            }
            loadDatabase() {
                return Promise.all([s.e("firebase-app-firebase-auth-firebase-database-firebase-messaging"), s.e("firebase-database")]).then(s.bind(null, "66ce"))
            }
            async loadHandler() {
                const t = await s.e("firebase-database-handler").then(s.bind(null, "65f2"));
                return t.default
            }
            destroy() {
                this.handler && this.handler.destroy(),
                this.handler = null
            }
        }
        var I = w;
        class A {
            constructor() {
                this.database = null,
                this.onLogin = ()=>{
                    this.initDatabase()
                }
                ,
                this.onLogout = ()=>{
                    this.database && (this.database.destroy(),
                    this.database = null)
                }
                ,
                this.reinitialize = ()=>this.app.reinitialize()
            }
            async init(t) {
                this.$store = t,
                this.app = new a,
                await this.app.init(),
                this.auth = new v,
                this.auth.init(this.firebase, this.$store, {
                    onLogin: this.onLogin,
                    onLogout: this.onLogout
                }),
                this.notifications = new m,
                this.notifications.init(this.firebase, this.$store, async t=>{
                    if (await this.initDatabase(),
                    !this.database)
                        throw new Error("database not initialized");
                    return this.database.handler.sendNotificationsToken(t)
                }
                )
            }
            async initDatabase() {
                this.database = new I,
                await this.database.init(this.firebase, this.$store, this.reinitialize)
            }
            get firebase() {
                return this.app.firebase
            }
        }
        e["a"] = new A
    },
    "6f84": function(t, e) {},
    7543: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return i
        }
        )),
        s.d(e, "b", (function() {
            return n
        }
        )),
        s.d(e, "c", (function() {
            return a
        }
        ));
        const i = (t,e)=>Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y))
          , n = (t,e)=>({
            x: t.x + e.width / 2,
            y: t.y + e.height / 2
        })
          , a = (t,e,s,i,n="half")=>{
            const a = t.x
              , r = t.y
              , o = a + e.width
              , c = r + e.height
              , l = i.width
              , h = i.height
              , d = s.x
              , u = d + l
              , m = s.y
              , p = m + h;
            return "touch" === n ? (m >= r && m <= c || p >= r && p <= c || m < r && p > c) && (d >= a && d <= o || u >= a && u <= o || d < a && u > o) : a < d + l / 2 && u - l / 2 < o && r < m + h / 2 && p - h / 2 < c
        }
    },
    7897: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return i
        }
        )),
        s.d(e, "b", (function() {
            return n
        }
        ));
        const i = t=>{
            if (!t)
                return null;
            try {
                const e = localStorage.getItem(t);
                if (!e)
                    return null;
                const s = JSON.parse(e);
                return s
            } catch (e) {
                return null
            }
        }
          , n = (t,e)=>{
            if (t)
                try {
                    localStorage.setItem(t, JSON.stringify(e))
                } catch (s) {
                    console.error(s)
                }
        }
    },
    "7d61": function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return n
        }
        ));
        var i = s("53b2");
        const n = {
            [i["c"]]: {
                middle: "fusion-core-come-back",
                end: "fusion-core-out"
            },
            [i["f"]]: {
                start: "background-in",
                end: "background-out",
                hideContent: "hide-popup-content",
                showContent: "hide-popup-content-timer",
                baseShow: "item-unlocked-show",
                baseHide: "item-unlocked-hide"
            },
            [i["b"]]: {
                delete: "dematerialize-core-in",
                end: "dematerialize-timer",
                encyclopedia: "materialize-core-out",
                encyclopediaId: "animation-final-encyclopedia"
            },
            [i["a"]]: {
                transitionMiddle: "transform",
                revertMiddle: "opacity"
            },
            [i["e"]]: {
                end: "ending-hide"
            },
            [i["d"]]: {
                middle: "cover-show",
                end: "completion-hide"
            }
        }
    },
    "84df": function(t, e, s) {
        "use strict"
    },
    "85eb": function(t, e, s) {
        "use strict";
        var i;
        s.d(e, "a", (function() {
            return i
        }
        )),
        function(t) {
            t["Intro"] = "INTRO",
            t["Mix"] = "MIX",
            t["Guide"] = "GUIDE"
        }(i || (i = {}))
    },
    "93e8": function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return n
        }
        )),
        s.d(e, "b", (function() {
            return a
        }
        ));
        const i = t=>{
            const e = 3
              , s = window.innerWidth / e
              , i = window.innerHeight / e
              , n = Math.floor(t.x / s)
              , a = Math.floor(t.y / i);
            return {
                horizontal: n,
                vertical: a
            }
        }
          , n = t=>{
            const e = i(t)
              , s = e.horizontal
              , n = e.vertical;
            return {
                horizontal: s,
                vertical: n
            }
        }
          , a = t=>"string" === typeof t
    },
    a097: function(t, e) {},
    a799: function(t, e, s) {
        "use strict";
        var i = s("5530")
          , n = s("c2e2")
          , a = s("ded8")
          , r = s("54cb")
          , o = s("623d");
        class c {
            init(t) {
                this.$store = t
            }
            getDropMixResult() {
                if (!this.canMix)
                    return null;
                const t = this.parents
                  , e = Object(n["b"])(this.elements, t)
                  , s = !e.length
                  , a = {
                    parents: t,
                    children: e,
                    positions: []
                };
                if (s)
                    return Object(i["a"])(Object(i["a"])({}, a), {}, {
                        status: "mixFail"
                    });
                const r = this.$store.getters.hasMixed(t);
                if (r)
                    return Object(i["a"])(Object(i["a"])({}, a), {}, {
                        status: "mixMixed"
                    });
                const o = this.getChildrenPositions(e.length);
                return Object(i["a"])(Object(i["a"])({}, a), {}, {
                    status: "mixNew",
                    positions: o
                })
            }
            getBaseElementsMixResult(t) {
                const e = r["a"].getRecentlyUnlockedIds();
                if (!e.length)
                    return null;
                const s = t.concat(e)
                  , i = this.getChildrenPositions(s.length);
                return {
                    base: e,
                    children: s,
                    positions: i
                }
            }
            getChildrenPositions(t) {
                if (!this.father || !this.mother)
                    return [];
                const e = [this.father.position, this.mother.position]
                  , s = this.$store.getters.workspaceBoxDimensions.width;
                return Object(n["a"])(e, s, t)
            }
            get elements() {
                return this.$store.getters.elements
            }
            get parents() {
                return this.father && this.mother ? Object(a["c"])([this.father.elementId, this.mother.elementId]) : [o["a"], o["a"]]
            }
            get father() {
                return this.$store.getters.draggedElement
            }
            get mother() {
                return this.$store.getters.draggingOverElement
            }
            get canMix() {
                return !this.$store.getters.isMixingDisabled && this.$store.getters.isOver && this.$store.getters.isDragging && !this.$store.getters.isOverStatic
            }
        }
        e["a"] = new c
    },
    ab1f: function(t, e) {},
    b10a: function(t, e, s) {
        "use strict";
        var i = s("5530")
          , n = s("d257")
          , a = s("7543")
          , r = s("199d")
          , o = s("c561")
          , c = s("2138")
          , l = s("1663");
        const h = 20
          , d = 10;
        class u {
            init(t) {
                this.$store = t,
                l["a"].on("ELEMENT_CLONE", t=>this.onCloned(t))
            }
            onCloned(t) {
                const e = this.getWorkspaceBoxById(t);
                if (!e)
                    return;
                Object(n["x"])(e);
                const s = e.__vue__;
                s.onClone()
            }
            getCloneDirections(t, e) {
                let s = 1
                  , i = -1;
                return t.x + e.width + d >= this.workspacePositionRight && (s *= -1),
                t.y <= d && (i *= -1),
                {
                    x: s,
                    y: i
                }
            }
            addToWorkspace(t) {
                this.$store.dispatch("workspaceElementsAdd", [Object(i["a"])(Object(i["a"])({}, o["a"]), {}, {
                    id: Object(r["a"])(t),
                    elementId: t,
                    position: this.calculateNewElementPosition()
                })])
            }
            calculateNewElementPosition() {
                const t = this.workspaceBoxDimensions.width + h
                  , e = this.workspaceBoxDimensions.height + h
                  , s = this.workspacePositionRight - t
                  , i = this.height / 2 - e / 2;
                let n = 0
                  , a = i;
                while (a > 0 && a < this.height) {
                    for (let e = s; e > 0; e -= t)
                        if (this.isEmptyPosition({
                            x: e,
                            y: a
                        }))
                            return {
                                x: e,
                                y: a
                            };
                    n *= -1,
                    n >= 0 && (n += e),
                    a = i + n
                }
                return {
                    x: s,
                    y: i
                }
            }
            isEmptyPosition(t) {
                const e = this.$store.getters.droppables;
                return !e.some(e=>Object(a["c"])(e.position, this.workspaceBoxDimensions, t, this.workspaceBoxDimensions))
            }
            getWorkspaceBoxById(t) {
                const e = document.querySelector(`#${c["g"]} [data-id="${t}"]`);
                return e || null
            }
            get workspacePositionRight() {
                const t = this.$store.getters.droppableStaticById(c["e"]);
                return t.position.x
            }
            get height() {
                return window.innerHeight
            }
            get workspaceBoxDimensions() {
                return this.$store.getters.workspaceBoxDimensions
            }
        }
        e["a"] = new u
    },
    b2eb: function(t, e, s) {
        "use strict";
        s.r(e),
        s.d(e, "DELAY", (function() {
            return i
        }
        )),
        s.d(e, "HIDE_DURATION", (function() {
            return n
        }
        )),
        s.d(e, "SETTINGS", (function() {
            return a
        }
        )),
        s.d(e, "PROGRESS_RESET", (function() {
            return r
        }
        )),
        s.d(e, "LOGIN", (function() {
            return o
        }
        )),
        s.d(e, "ENCYCLOPEDIA", (function() {
            return c
        }
        )),
        s.d(e, "STORE", (function() {
            return l
        }
        )),
        s.d(e, "HINTS", (function() {
            return h
        }
        )),
        s.d(e, "SYNC", (function() {
            return d
        }
        )),
        s.d(e, "NEWS", (function() {
            return u
        }
        )),
        s.d(e, "RATING_MAIN", (function() {
            return m
        }
        )),
        s.d(e, "RATING_REVIEW", (function() {
            return p
        }
        )),
        s.d(e, "RATING_FEEDBACK", (function() {
            return g
        }
        )),
        s.d(e, "ALL", (function() {
            return E
        }
        ));
        const i = 150
          , n = 400
          , a = "SETTINGS"
          , r = "PROGRESS_RESET"
          , o = "LOGIN"
          , c = "ENCYCLOPEDIA"
          , l = "STORE"
          , h = "HINTS"
          , d = "SYNC"
          , u = "NEWS"
          , m = "RATING_MAIN"
          , p = "RATING_REVIEW"
          , g = "RATING_FEEDBACK"
          , E = {
            [a]: a,
            [r]: r,
            [o]: o,
            [c]: c,
            [l]: l,
            [h]: h,
            [m]: m,
            [p]: p,
            [g]: g,
            [d]: d,
            [u]: u
        }
    },
    b7ba: function(t, e, s) {
        "use strict";
        s.d(e, "c", (function() {
            return i
        }
        )),
        s.d(e, "a", (function() {
            return n
        }
        )),
        s.d(e, "b", (function() {
            return a
        }
        ));
        const i = "new"
          , n = "fail"
          , a = "mixed"
    },
    c2e2: function(t, e, s) {
        "use strict";
        s.d(e, "b", (function() {
            return r
        }
        )),
        s.d(e, "a", (function() {
            return c
        }
        ));
        s("e260"),
        s("ddb0"),
        s("2532");
        var i = s("da98");
        const n = (t,[e,s],n)=>{
            const a = t[n];
            if (!Object(i["a"])(t, n) || !Object(i["b"])(a))
                return [];
            const r = a.parents.filter(([t,i])=>e === t && s === i).length;
            return 0 === r ? [] : 1 === r ? [n] : Array(r).fill(n)
        }
          , a = (t,[e,s])=>{
            if (!Object(i["a"])(t, e) || !Object(i["a"])(t, s))
                return [];
            const n = t[e]
              , a = t[s];
            if (e === s)
                return n.children;
            const r = [];
            return n.children.forEach(t=>{
                a.children.includes(t) && (r.includes(t) || r.push(t))
            }
            ),
            r
        }
          , r = (t,e)=>{
            let s = [];
            const i = a(t, e)
              , r = i.length;
            for (let a = 0; a < r; ++a) {
                const r = n(t, e, i[a]);
                r.length && (s = s.concat(r))
            }
            return s
        }
          , o = .35
          , c = ([t,e],s,i)=>{
            const n = i=>{
                const n = (t.y - e.y) / (t.x - e.x)
                  , a = s * o
                  , r = {
                    x: (t.x + e.x) / 2,
                    y: (t.y + e.y) / 2
                }
                  , c = r.x + Math.cos(Math.atan(-1 / n)) * i * a
                  , l = r.y + Math.sin(Math.atan(-1 / n)) * i * a;
                return {
                    x: Math.round(c),
                    y: Math.round(l)
                }
            }
              , a = []
              , r = Math.floor(i / 2);
            for (let o = -r; o <= r; o++)
                (0 !== o || i % 2) && a.push(n(o));
            return a
        }
    },
    c55c: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return i
        }
        )),
        s.d(e, "b", (function() {
            return n
        }
        ));
        const i = "encyclopediaFrame"
          , n = "https://littlealchemy2.com"
    },
    c561: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return i
        }
        ));
        const i = {
            id: "",
            elementId: "",
            position: {
                x: 0,
                y: -500
            }
        }
    },
    c97d: function(t, e, s) {
        "use strict";
        s("e6cf");
        var i = s("623d")
          , n = s("1663")
          , a = s("5d96")
          , r = s("d257");
        class o {
            constructor() {
                this._callback = null
            }
            init(t) {
                return this.element = t,
                this.element.style.WebkitOverflowScrolling = "touch",
                this.element.style.overflowY = "scroll",
                this.element.style.overflowX = "hidden",
                this.element.style.transform = "translateZ(0)",
                Promise.resolve()
            }
            reinitialize() {
                return Promise.resolve()
            }
            enable() {
                this.element.style.overflow = "scroll"
            }
            disable() {
                this.element.style.overflow = "hidden"
            }
            onScroll(t) {
                this._callback = ()=>t({
                    y: this.element.scrollTop
                }),
                this.element.addEventListener("scroll", this._callback, a["a"])
            }
            offScroll() {
                this._callback && (this.element.removeEventListener("scroll", this._callback),
                this._callback = null)
            }
            scrollTo(t, e=350) {
                Object(r["z"])(this.element, t, e)
            }
            get type() {
                return "native"
            }
            get y() {
                return this.element.scrollTop
            }
            onResize() {
                "function" === typeof this._callback && this._callback()
            }
            refresh() {}
        }
        var c = o
          , l = (s("e260"),
        s("ddb0"),
        s("0f32"))
          , h = s.n(l)
          , d = s("152b");
        const u = 10;
        class m {
            constructor() {
                this._callback = null
            }
            async init(t) {
                await this.initInstance(t),
                this.initMouseOutHandling()
            }
            async initInstance(t) {
                const e = await this.load();
                return this.iscroll = new e(`#${t.id}`,{
                    bindToWrapper: !1,
                    mouseWheel: !0,
                    deceleration: .0011,
                    resizePolling: 2e3,
                    disablePointer: !0,
                    disableMouse: !1,
                    disableTouch: !1,
                    bounceTime: 300,
                    probeType: 3
                }),
                this.iscroll
            }
            async load() {
                const t = await s.e("iscroll").then(s.bind(null, "a59a"));
                return t.default
            }
            initMouseOutHandling() {
                document.addEventListener("mouseout", t=>{
                    const e = t.relatedTarget || t.toElement;
                    e && "HTML" !== e.nodeName || Object(d["c"])(this.iscroll.wrapper)
                }
                , !1)
            }
            async reinitialize() {
                if (!this.iscroll)
                    return Promise.reject();
                const t = this.iscroll.wrapper;
                return this.iscroll.destroy(),
                this.initInstance(t)
            }
            enable() {
                this.iscroll && (this.iscroll.initiated = !1,
                this.iscroll.enable())
            }
            disable() {
                this.iscroll && this.iscroll.disable && this.iscroll.disable()
            }
            onScroll(t) {
                this._callback = h()(()=>{
                    const e = -1 * Math.round(this.iscroll.y);
                    e + this.iscroll.wrapperHeight > this.iscroll.scrollerHeight || t({
                        y: e
                    })
                }
                , u),
                this.iscroll.on("scroll", this._callback)
            }
            offScroll() {
                this.iscroll && this.iscroll.off("scroll", this._callback)
            }
            scrollTo(t, e=350) {
                this.iscroll && this.iscroll.scrollTo(0, -t, e)
            }
            get type() {
                return "iscroll"
            }
            get y() {
                return this.iscroll ? -this.iscroll.y : 0
            }
            refresh(t) {
                this.iscroll && this.iscroll.refresh(!0, t)
            }
            onResize() {
                "function" === typeof this._callback && this._callback()
            }
        }
        var p = m;
        class g {
            constructor() {
                this.initiated = !1,
                this.position = 0,
                this.init = async()=>{
                    this.hasNativeSupport() ? this._handler = new c : this._handler = new p,
                    await this.handler.init(this.scrollerElement),
                    this.notify(),
                    this.setScrollClass(),
                    n["a"].on("RESIZE", ()=>this.handler.onResize())
                }
                ,
                n["a"].once("LIBRARY_RENDERED", this.init)
            }
            onInit() {
                return this.initiated ? Promise.resolve() : new Promise(t=>n["a"].once("SCROLL_INITIATED", t))
            }
            hasNativeSupport() {
                const t = "WebkitOverflowScrolling"in document.documentElement.style
                  , e = r["o"] || t;
                return e
            }
            notify() {
                this.initiated = !0,
                n["a"].emit("SCROLL_INITIATED")
            }
            setScrollClass() {
                const t = this.isNative ? "native" : "iscroll";
                this.scrollerElement.classList.add(t)
            }
            scrollTop(t=150) {
                this.handler.scrollTo(0, t)
            }
            savePosition() {
                this.position = this.handler.y
            }
            applyPosition() {
                this.handler.scrollTo(this.position, 0),
                this.handler.onResize()
            }
            get scrollerElement() {
                return document.querySelector(`#${i["b"]}`)
            }
            get handler() {
                return this._handler
            }
            get isNative() {
                return "native" === this.handler.type
            }
            get isIScroll() {
                return "iscroll" === this.handler.type
            }
        }
        const E = new g;
        e["a"] = E
    },
    cd49: function(t, e, s) {
        "use strict";
        s.r(e);
        s("37e1");
        var i = s("16b7");
        function n() {
            window.LA_FIRST_TIME_USER = !1;
            try {
                const t = localStorage.getItem(i["a"].PROGRESS) || null;
                window.LA_FIRST_TIME_USER = null === t
            } catch (t) {
                window.LA_FIRST_TIME_USER = !1
            }
        }
        n();
        s("84df"),
        s("2929");
        var a = s("2b0e")
          , r = s("5c57")
          , o = s("d257")
          , c = s("6e2e")
          , l = (s("e6cf"),
        s("e260"),
        s("ddb0"),
        s("da98"))
          , h = s("2e77")
          , d = s.n(h);
        class u {
            async loadBase() {
                const t = await this.fetchBase()
                  , e = {};
                return Object.entries(t).forEach(([t,s])=>{
                    e[t] = Object(l["c"])(s, t)
                }
                ),
                e
            }
            fetchBase() {
                return Promise.resolve(d.a)
            }
            async loadDescriptions() {
                const t = await this.fetchDescriptions();
                return t
            }
            async fetchDescriptions() {
                const t = await s.e("descriptions").then(s.t.bind(null, "afd0", 7));
                return t.default
            }
            async loadTags() {
                const t = await this.fetchTags();
                return t
            }
            async fetchTags() {
                const t = await s.e("tags").then(s.t.bind(null, "b9f0", 7));
                return t.default
            }
        }
        var m = u
          , p = s("54cb")
          , g = s("1663")
          , E = s("5530")
          , f = (s("2532"),
        s("ac1f"),
        s("1276"),
        s("80b0"))
          , b = s.n(f)
          , y = s("7897")
          , v = s("b2eb")
          , w = s("2de2");
        const I = {
            id: "",
            offline: !1,
            immediate: !1,
            title: "",
            img: "",
            text: "",
            conditions: [],
            action: null,
            timestamp: Date.now()
        }
          , A = 1
          , T = 1e3 * A
          , S = 60 * T
          , _ = 60 * S
          , O = 24 * _
          , x = "public/news/v1/w"
          , P = "news"
          , C = 1
          , L = 3 * O
          , R = 300;
        class D {
            constructor() {
                this._promise = null,
                this.initContent = async()=>{
                    if (this.fetch().then(this.fillCache),
                    this.$store.getters.sessionsCount <= C)
                        return;
                    const t = await this.load()
                      , e = this.getNewsToShow(this.prepare(t));
                    e && this.show(e)
                }
                ,
                this.fillCache = (t=[])=>{
                    let e = !1;
                    const s = this.cached.map(({id: t})=>t);
                    t.forEach(t=>{
                        s.includes(t.id) || this.shown.includes(t.id) || ("boolean" === typeof t.clear && t.clear && (e = !0),
                        this.cached.push(t))
                    }
                    ),
                    this.cached = e ? [] : this.cached.filter(({id: t})=>!this.shown.includes(t)),
                    this.save()
                }
                ,
                this.shown = this.storage.shown || [],
                this.cached = this.storage.cached || [],
                this.lastShownTimestamp = this.storage.timestamp || -1
            }
            init(t) {
                this.$store = t,
                g["a"].once("LIBRARY_RENDERED", this.initContent)
            }
            load() {
                const t = async()=>(await Object(o["c"])(R),
                this.cached);
                return Promise.race([this.fetch(), t()])
            }
            prepare(t) {
                return t ? t.map(t=>Object(E["a"])(Object(E["a"])({}, I), t)).filter(({id: t, offline: e, conditions: s})=>{
                    const i = this.shown.includes(t);
                    if (i)
                        return !1;
                    const n = this.isOffline && e || !this.isOffline
                      , a = this.checkConditions(s);
                    return a && n
                }
                ) : []
            }
            getNewsToShow(t) {
                if (!t || !t.length)
                    return null;
                const e = t.find(({immediate: t})=>t);
                if (e)
                    return e;
                const s = Date.now() - this.lastShownTimestamp;
                if (s < L)
                    return null;
                const i = t[0];
                return i.clear ? null : i
            }
            show(t) {
                b()(()=>this.$store.dispatch("popupShowWithData", {
                    name: v["NEWS"],
                    data: t
                })),
                g["a"].once("PLAY", ()=>{
                    this.shown.push(t.id),
                    this.lastShownTimestamp = Date.now(),
                    this.save()
                }
                )
            }
            checkConditions(t) {
                const e = {
                    versionEq: t=>t === w["j"],
                    versionGt: t=>{
                        const e = w["j"].split(".")
                          , s = t.split(".");
                        return s.some((t,s)=>+t < +e[s])
                    }
                    ,
                    versionLt: t=>{
                        const e = w["j"].split(".")
                          , s = t.split(".");
                        return s.some((t,s)=>+t > +e[s])
                    }
                    ,
                    expired: t=>Date.now() <= t,
                    after: t=>this.shown.includes(t)
                };
                return t.every(({type: t, value: s})=>!e.hasOwnProperty(t) || e[t](s))
            }
            save() {
                Object(y["b"])(P, {
                    shown: this.shown,
                    cached: this.cached,
                    timestamp: this.lastShownTimestamp
                })
            }
            fetch() {
                return null !== this._promise ? this._promise : (this._promise = Object(o["d"])(x),
                this._promise)
            }
            get storage() {
                return Object(y["a"])(P) || {}
            }
            get isOffline() {
                return !this.$store.getters.online
            }
        }
        var N = new D
          , k = s("c55c");
        const M = t=>null !== t && void 0 !== t
          , j = t=>"function" === typeof t;
        var $ = s("b10a");
        const H = {
            addToWorkspace: ({id: t})=>$["a"].addToWorkspace(t)
        };
        var B = H
          , F = s("152b");
        const G = (t,e,s)=>Object(E["a"])({
            trigger: t,
            command: e
        }, s)
          , U = [G("ENCYCLOPEDIA_ELEMENTS", "elements", {
            prepare: ()=>({
                elements: c["a"].elements
            })
        }), G("ENCYCLOPEDIA_TAGS", "tags", {
            prepare: ()=>({
                tags: c["a"].tags
            })
        }), G("ENCYCLOPEDIA_DESCRIPTIONS", "descriptions", {
            prepare: ()=>({
                descriptions: c["a"].descriptions
            })
        }), G("ENCYCLOPEDIA_SHOW_ITEM", "showItem", {
            prepare: (t,e)=>({
                id: e
            }),
            callback: async t=>{
                Object(F["c"])(document.body, "longpress"),
                await Object(o["c"])(60),
                t.dispatch("popupShow", v["ENCYCLOPEDIA"])
            }
        }), G("ENCYCLOPEDIA_SHOW_HELP", "showHelp", {
            prepare: (t,e)=>({
                id: e
            }),
            callback: async t=>{
                await Object(o["c"])(60),
                t.dispatch("popupShow", v["ENCYCLOPEDIA"])
            }
        }), G("ENCYCLOPEDIA_POPUP_HIDE", "hiding", {
            callback: ()=>{
                document.activeElement && "function" === typeof document.activeElement.blur && document.activeElement.blur()
            }
        }), G("PROGRESS_RESET", "reset", {}), G("ENCYCLOPEDIA_MIX_BASE", "mixBase", {
            prepare: (t,e)=>({
                elements: e
            })
        }), G("ENCYCLOPEDIA_MIX_NEW", "mixNew", {
            prepare: (t,e)=>{
                const s = e.parents.filter(e=>t.getters.elementIsExhausted(e));
                return Object(E["a"])(Object(E["a"])({}, e), {}, {
                    exhausted: s
                })
            }
        }), G("ENCYCLOPEDIA_PROGRESS_ANALYZED", "progress", {
            prepare: t=>{
                const e = t.getters.totalProgressElements.filter(e=>t.getters.elementIsExhausted(e));
                return {
                    history: t.getters.history,
                    progress: t.getters.progress,
                    timestamps: t.getters.total,
                    prime: t.getters.prime,
                    base: t.getters.base,
                    final: t.getters.final,
                    exhausted: e
                }
            }
        })];
        var W = U;
        class Y {
            constructor() {
                this.saved = [],
                this.loaded = !1,
                this.onMessageReceived = t=>{
                    if (!t.data || !t.data.length)
                        return;
                    if (t.origin !== k["b"])
                        return;
                    const e = this.parseJSON(t.data);
                    e && this.onMessage(e)
                }
            }
            init(t) {
                this.$store = t,
                window.addEventListener("message", this.onMessageReceived, !1),
                this.initCommands()
            }
            initCommands() {
                W.forEach(t=>{
                    g["a"].on(t.trigger, e=>{
                        let s = {};
                        j(t.prepare) && (s = t.prepare(this.$store, e)),
                        this.post(t.command, s),
                        j(t.callback) && t.callback(this.$store)
                    }
                    )
                }
                )
            }
            onMessage({command: t, data: e}) {
                this.log("onMessage", t, e),
                "ready" !== t ? B.hasOwnProperty(t) && B[t](e) : this.onReady()
            }
            onReady() {
                this.log("ready"),
                this.loaded = !0,
                this.saved.forEach(t=>this.post(...t)),
                this.saved = [],
                this.post("version", {
                    version: w["j"]
                });
                let t = "";
                Object(o["j"])() && (t = "Chrome"),
                Object(o["p"])() && (t = "Safari"),
                Object(o["l"])() && (t = "Edge"),
                this.post("userAgent", {
                    browser: t
                })
            }
            post(t, e={}) {
                if (!this.loaded)
                    return this.log("post save", t, e),
                    void this.saved.push([t, e]);
                if (!this.iframe)
                    return;
                const s = {
                    command: t,
                    data: e
                };
                this.log("post", t, e),
                this.iframe.postMessage(JSON.stringify(s), "*")
            }
            parseJSON(t) {
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return null
                }
            }
            get iframe() {
                const t = document.getElementById(k["a"]);
                return t ? t.contentWindow : null
            }
            log(...t) {
                Object(o["q"])("encyclopedia", ...t)
            }
        }
        var K = new Y;
        const z = ()=>{
            if (!Object(o["n"])()) {
                const t = "proper-hover";
                document.body.classList.add(t)
            }
            if (Object(o["n"])() && Object(o["p"])()) {
                document.addEventListener("gestureend", t=>{
                    t.scale && 1 !== t.scale && t.preventDefault()
                }
                , !1),
                document.addEventListener("touchmove", t=>{
                    t.scale && 1 !== t.scale && t.preventDefault()
                }
                , !1);
                let t = 0;
                document.addEventListener("touchend", e=>{
                    const s = Date.now();
                    s - t <= 300 && e.preventDefault(),
                    t = s
                }
                , !1)
            }
        }
          , V = [z];
        class X {
            init() {
                this.applyChanges(),
                this.disableContextMenu(),
                this.addCommitHelpers()
            }
            applyChanges() {
                V.forEach(t=>t())
            }
            disableContextMenu() {
                document.oncontextmenu = ()=>!1
            }
            addCommitHelpers() {
                window.__COMMIT_HASH = ()=>"c4f0e01"
            }
        }
        var q = new X
          , Q = s("3b56")
          , J = s("85eb");
        const Z = .6
          , tt = ()=>r["a"].getters.droppablesActive
          , et = [{
            name: J["a"].Intro,
            check: ()=>!r["a"].getters.hasProgress,
            next: J["a"].Mix,
            hide: ()=>g["a"].then("ELEMENT_DROP")
        }, {
            name: J["a"].Mix,
            check: ()=>!r["a"].getters.hasProgress && 1 === r["a"].getters.droppablesActive.length,
            next: J["a"].Guide,
            hide() {
                return new Promise(t=>{
                    const e = ()=>{
                        tt().length < 2 || (g["a"].off("ELEMENT_DROP", e),
                        g["a"].off("MIX_NEW", e),
                        t())
                    }
                    ;
                    g["a"].on("ELEMENT_DROP", e),
                    g["a"].once("MIX_NEW", e)
                }
                )
            }
        }, {
            name: J["a"].Guide,
            check: ()=>!r["a"].getters.hasProgress && 2 === tt().length,
            hide() {
                return new Promise(t=>{
                    let e;
                    const s = ()=>{
                        g["a"].off("ELEMENT_DESTROY", e),
                        g["a"].off("MIX_NEW", s),
                        t()
                    }
                    ;
                    e = ()=>{
                        tt().length >= 1 || s()
                    }
                    ,
                    g["a"].on("ELEMENT_DESTROY", e),
                    g["a"].once("MIX_NEW", s)
                }
                )
            }
        }];
        class st {
            constructor() {
                this.check = ()=>{
                    if (r["a"].getters.isLoggedIn)
                        return void g["a"].emit("TUTORIALS_FINISHED");
                    const t = et.find(t=>t.check()) || null;
                    t ? this.show(t) : g["a"].emit("TUTORIALS_FINISHED")
                }
                ,
                this.notifyIfFinished = ()=>{
                    const t = r["a"].getters.isLoggedIn
                      , e = et.some(t=>t.check());
                    !t && e || r["a"].commit("TUTORIALS_FINISHED")
                }
                ,
                this.reset = ()=>{
                    this.hide(),
                    r["a"].dispatch("tutorialsFinished"),
                    g["a"].off("PLAY", this.check),
                    g["a"].off("WORKSPACE_CLEAR", this.reset),
                    g["a"].off("LOGGED_IN", this.reset)
                }
            }
            init() {
                g["a"].once("PLAY", this.check),
                g["a"].once("WORKSPACE_CLEAR", this.reset),
                g["a"].once("LOGGED_IN", this.reset),
                g["a"].onReady().then(this.notifyIfFinished)
            }
            show(t) {
                r["a"].dispatch("tutorialShow", t.name),
                g["a"].emit("TUTORIALS_PROGRESS", {
                    type: "start",
                    name: t.name
                }),
                t.hide().then(()=>{
                    const e = this.getNext();
                    this.hide(),
                    g["a"].emit("TUTORIALS_PROGRESS", {
                        type: "end",
                        name: t.name
                    }),
                    e ? this.showNext(e) : window.setTimeout(()=>r["a"].dispatch("tutorialsFinished"), 1e3 * Z)
                }
                )
            }
            getNext(t=this.current) {
                if (!t || !t.hasOwnProperty("next"))
                    return null;
                const e = this.getByName(t.next);
                return e && e.check() ? e : null
            }
            showNext(t) {
                t && window.setTimeout(()=>{
                    if (t.check())
                        this.show(t);
                    else {
                        const e = this.getNext(t);
                        e ? this.showNext(e) : this.reset()
                    }
                }
                , 1e3 * Z)
            }
            hide() {
                r["a"].dispatch("tutorialHide")
            }
            get current() {
                const t = r["a"].getters.tutorial;
                return t ? this.getByName(t) : null
            }
            getByName(t) {
                return et.find(e=>e.name === t)
            }
        }
        var it = new st
          , nt = s("6953")
          , at = s("2540")
          , rt = s("5d96")
          , ot = s("571d");
        const ct = 0;
        var lt = s("7543");
        const ht = t=>t.target && t.target.parentElement && t.target.parentElement.classList && t.target.parentElement.classList.contains("element")
          , dt = 2
          , ut = 600
          , mt = 30;
        let pt = 0
          , gt = null
          , Et = null
          , ft = null
          , bt = null
          , yt = null;
        const vt = ()=>{
            if (!Et)
                return;
            const t = document.createEvent("Event");
            t.initEvent("doubletap", !0, !0),
            Et.dispatchEvent(t)
        }
          , wt = ()=>{
            clearTimeout(gt),
            gt = null,
            pt = 0,
            Et = null,
            yt = null,
            ft = null,
            bt = null
        }
          , It = t=>{
            t.simulated || "mousedown" === t.type && t.button !== ct || null !== bt && bt !== t.type || null !== Et && Et !== t.target || ht(t) && (Et = t.target,
            bt = t.type,
            clearTimeout(gt),
            gt = window.setTimeout(wt, ut),
            0 !== pt || yt || (yt = {
                x: t.pageX,
                y: t.pageY
            }))
        }
          , At = t=>{
            if (t.simulated)
                return;
            if ("mouseup" === t.type && t.button !== ct)
                return;
            if (null !== ft && ft !== t.type)
                return;
            if (null !== Et && Et !== t.target)
                return;
            if (!ht(t))
                return;
            if (!yt)
                return void wt();
            const e = Object(lt["a"])(yt, {
                x: t.pageX,
                y: t.pageY
            });
            e > mt ? wt() : (ft = t.type,
            clearTimeout(gt),
            gt = window.setTimeout(wt, ut),
            pt++,
            pt === dt && (vt(),
            wt()))
        }
        ;
        s("5319");
        const Tt = 1e3
          , St = 2;
        let _t, Ot = null, xt = null, Pt = null, Ct = null, Lt = null;
        const Rt = ()=>{
            document.removeEventListener(`${Lt}move`, _t, !1),
            clearTimeout(xt),
            xt = null,
            Ot = null,
            Lt = null
        }
          , Dt = ()=>{
            if (!Ot)
                return void Rt();
            const t = document.createEvent("Event");
            t.initEvent("longpress", !0, !0),
            Ot.dispatchEvent(t),
            Rt()
        }
          , Nt = ()=>{
            if (!Ct || !Pt)
                return 0;
            const t = Object(lt["a"])(Ct, Pt);
            return t <= St
        }
          , kt = t=>{
            t.simulated || (null === Lt || t.type.includes(Lt)) && ("mousedown" !== t.type && "pointerdown" !== t.type || t.button === ct) && ht(t) && (Ot = t.target,
            Lt = t.type.replace("down", "").replace("start", ""),
            Pt = {
                x: t.pageX,
                y: t.pageY
            },
            Ct = Pt,
            xt = window.setTimeout(()=>{
                Nt() ? Dt() : Rt()
            }
            , Tt),
            _t = t=>{
                xt && (Ct = {
                    x: t.pageX,
                    y: t.pageY
                })
            }
            ,
            document.addEventListener(`${Lt}move`, _t, !1))
        }
          , Mt = t=>{
            (null === Lt || t.type.includes(Lt)) && Rt()
        }
        ;
        class jt {
            constructor() {
                this.onDown = this.onDown.bind(this),
                this.onUp = this.onUp.bind(this)
            }
            init() {
                ot["d"].forEach(t=>{
                    document.addEventListener(t, this.onDown, rt["a"])
                }
                ),
                ot["e"].forEach(t=>{
                    document.addEventListener(t, this.onUp, rt["a"])
                }
                )
            }
            onDown(t) {
                It(t),
                kt(t)
            }
            onUp(t) {
                At(t),
                Mt(t)
            }
        }
        var $t = new jt
          , Ht = s("c97d");
        class Bt {
            init(t) {
                this.$store = t
            }
            onDragStart(t) {
                null !== t && (Ht["a"].handler.disable(),
                this.$store.dispatch("dragStart", t))
            }
            onDragEnd(t, e=!1) {
                Ht["a"].handler.enable(),
                this.$store.dispatch("dragEnd", {
                    position: t,
                    simulated: e
                })
            }
            async onLibraryDistanceDragged(t, e, s, i, n) {
                Ht["a"].handler.disable();
                const a = this.calculatePosition(e, s, i);
                let r = this.$store.getters.draggableHelperId
                  , c = this.$store.getters.draggableHelperElement;
                c && this.getWorkspaceBoxElement(r) || (this.$store.commit("DRAGGABLE_HELPER_RESET"),
                this.$store.dispatch("draggableHelperAdd", !0),
                r = this.$store.getters.draggableHelperId,
                c = this.$store.getters.draggableHelperElement,
                await Object(o["r"])()),
                this.$store.commit("DRAGGABLE_HELPER_PREPARE", {
                    helper: c,
                    elementId: t,
                    position: a
                }),
                this.$store.commit("DRAGGABLE_HELPER_RESET"),
                this.simulateStartDrag({
                    id: r,
                    dragPoint: s,
                    startEventType: n
                })
            }
            calculatePosition(t, e, s) {
                const i = this.$store.getters.workspaceBoxDimensions
                  , n = this.$store.getters.libraryBoxDimensions
                  , a = Object(E["a"])({}, s)
                  , r = this.$store.getters.libraryBoxMargin
                  , o = i.width !== n.width
                  , c = i.height !== n.height;
                if (o || c) {
                    const o = i.width / n.width
                      , c = i.height / n.height
                      , l = o * (t.x - s.x)
                      , h = c * (t.y - s.y)
                      , d = e.x - t.x
                      , u = e.y - t.y;
                    a.x = t.x - l + o * r + d,
                    a.y = t.y - h + u
                }
                return a
            }
            simulateStartDrag({id: t, dragPoint: {x: e, y: s}, startEventType: i}) {
                const n = {
                    cancelable: !1,
                    simulated: !0,
                    pageX: e,
                    pageY: s,
                    clientX: e,
                    clientY: s,
                    startEventType: i
                }
                  , a = this.getWorkspaceBoxElement(t);
                if (!a)
                    throw new Error("DragManager.simulateStartDrag - empty helper");
                const r = a.__vue__;
                r && (r.updateDraggablePosition(),
                r.draggable.dragStart(n, n))
            }
            getWorkspaceBoxElement(t) {
                return document.querySelector(`#workspace [data-id="${t}"]`)
            }
            get isDragging() {
                return this.$store.getters.isDragging
            }
        }
        var Ft = new Bt
          , Gt = s("d0c4");
        class Ut {
            init(t) {
                this.$store = t,
                g["a"].once("PLAY", ()=>this.setInitial())
            }
            setInitial() {
                this.$store.dispatch("statsSessionsCount"),
                this.$store.dispatch("statsInitialProgress")
            }
        }
        var Wt = new Ut;
        const Yt = "https://littlealchemy2.com/static/online";
        class Kt {
            init(t) {
                this.$store = t,
                this.initEvents(),
                this.isOnline()
            }
            initEvents() {
                window.addEventListener("online", ()=>this.notify(!0)),
                window.addEventListener("offline", ()=>this.notify(!1))
            }
            isOnline() {
                const t = navigator.onLine;
                return t ? this.testConnection().then(t=>this.notify(t)) : (this.notify(!1),
                Promise.reject())
            }
            notify(t) {
                const e = t ? "ONLINE" : "OFFLINE";
                g["a"].emit(e);
                const s = t ? "online" : "offline";
                return this.$store.dispatch(s),
                t
            }
            testConnection() {
                return new Promise(t=>{
                    const e = new XMLHttpRequest;
                    e.open("HEAD", Yt),
                    e.send(),
                    e.onprogress = ()=>t(!0),
                    e.onload = ()=>t(!0),
                    e.onerror = ()=>t(!1)
                }
                )
            }
        }
        var zt = new Kt
          , Vt = s("a799");
        const Xt = 1050;
        class qt {
            init(t) {
                this.$store = t
            }
            startExhausted(t) {
                this.$store.dispatch("animationExhaustedStart", t),
                window.setTimeout(()=>{
                    this.$store.dispatch("animationExhaustedFinished", t),
                    this.$store.dispatch("animationReset")
                }
                , Xt),
                this.startFinal(t)
            }
            startFinal(t) {
                this.$store.dispatch("animationFinalStart", t)
            }
        }
        var Qt = new qt;
        class Jt {
            constructor() {
                this.onShow = ()=>{
                    this.$store.commit("VISIBILITY", !0)
                }
                ,
                this.onHide = ()=>{
                    this.$store.commit("VISIBILITY", !1)
                }
            }
            init(t) {
                this.$store = t,
                g["a"].on("BLUR", this.onHide),
                g["a"].on("FOCUS", this.onShow),
                g["a"].on("VISIBILITY_HIDDEN", this.onHide),
                g["a"].on("VISIBILITY_VISIBLE", this.onShow)
            }
        }
        var Zt = new Jt;
        const te = "sfx"
          , ee = "music"
          , se = "connector"
          , ie = "silence"
          , ne = 1
          , ae = 2
          , re = "static/audio/sfx/"
          , oe = "static/audio/music/"
          , ce = 3
          , le = "audio-extension"
          , he = "GenericClick"
          , de = 0
          , ue = .6
          , me = .08
          , pe = .01;
        class ge {
            constructor(t, e) {
                this.$store = e,
                this.context = t,
                this.sfx = this.context.createGain(),
                this.setVolume(this.sfx.gain, ue),
                this.music = this.context.createGain(),
                this.setVolume(this.music.gain, pe),
                this.gain = this.context.createGain(),
                this.sfx.connect(this.gain),
                this.music.connect(this.gain),
                this.gain.connect(this.context.destination),
                this.initWatchers()
            }
            initWatchers() {
                this.$store.watch((t,e)=>e.playMusic, t=>this[t ? "unmute" : "mute"](ee)),
                this.$store.watch((t,e)=>e.playSfx, t=>this[t ? "unmute" : "mute"](te))
            }
            mute(t) {
                const e = t === ee ? pe : de;
                this.setVolumeSmooth(this[t].gain, e)
            }
            unmute(t, e=me) {
                const s = t === ee ? this.getMusicMax(e) : ue;
                this.setVolumeSmooth(this[t].gain, s)
            }
            async fadeInMusic(t=ce, e=me) {
                if (this.canPlay(ee)) {
                    const s = this.getMusicMax(e);
                    this.music.gain.value !== s && this.setVolume(this.music.gain, pe),
                    this.music.gain.exponentialRampToValueAtTime(s, this.context.currentTime + t)
                }
                await Object(o["c"])(1e3 * t)
            }
            async fadeOutMusic(t=ce) {
                this.music.gain.exponentialRampToValueAtTime(pe, this.context.currentTime + t),
                await Object(o["c"])(1e3 * t)
            }
            canPlay(t) {
                return t === ee ? this.$store.getters.playMusic : this.$store.getters.playSfx
            }
            setVolume(t, e) {
                t.setValueAtTime(e, this.context.currentTime)
            }
            setVolumeSmooth(t, e) {
                const s = .25;
                t.setTargetAtTime(e, this.context.currentTime, s)
            }
            getMusicMax(t) {
                return 100 === t ? me : t / 100 * me
            }
        }
        var Ee = ge;
        const fe = {
            name: "",
            type: null,
            url: null,
            buffer: null
        }
          , be = Object(E["a"])(Object(E["a"])({}, fe), {}, {
            lazy: !0,
            loop: !1,
            mood: -1,
            duration: 0,
            fadeIn: 0,
            fadeOut: 0,
            volume: 100,
            silenceAfter: 0,
            prevents: []
        })
          , ye = t=>t.hasOwnProperty("lazy");
        class ve {
            constructor(t) {
                this.sounds = {},
                this.decode = t=>new Promise((e,s)=>this.context.decodeAudioData(t, e, s)),
                this.context = t
            }
            add(t, e) {
                const s = this.extension
                  , i = t === te ? re : oe
                  , n = t === te ? fe : be;
                Object.entries(e).forEach(([e,a])=>{
                    const r = Object(E["a"])(Object(E["a"])({}, n), a);
                    r.name = e,
                    r.type = r.type || t,
                    r.url && (r.url = `${i}${r.url}.${s}`),
                    this.sounds[e] = r
                }
                )
            }
            get(t) {
                return this.sounds.hasOwnProperty(t) ? this.sounds[t] : null
            }
            loadAll() {
                const t = [];
                return Object.values(this.sounds).forEach(e=>{
                    ye(e) && e.lazy || t.push(this.load(e))
                }
                ),
                Promise.all(t)
            }
            load(t) {
                const {name: e, url: s=null} = t;
                return this.sounds.hasOwnProperty(e) && s ? t.hasOwnProperty("promise") ? t.promise : (t.promise = this.fetch(s).then(this.decode).then(e=>(t.buffer = e,
                !0)).catch(t=>{
                    throw console.error("Error while loading and decoding sound", t),
                    new Error(t.message)
                }
                ),
                t.promise) : Promise.resolve(null)
            }
            fetch(t) {
                const e = new XMLHttpRequest;
                return e.open("GET", t, !0),
                e.responseType = "arraybuffer",
                new Promise((t,s)=>{
                    e.onload = ()=>t(e.response),
                    e.onerror = s,
                    e.send()
                }
                )
            }
            get extension() {
                const t = document.getElementById(le);
                if (!t || !t.currentSrc)
                    return "ogg";
                const e = t.currentSrc;
                return e.includes(".m4a") ? "m4a" : "ogg"
            }
        }
        var we = ve;
        const Ie = {
            click: {
                url: he,
                volume: 100
            },
            pickup: {
                url: "PickUpItem",
                volume: 100
            },
            drop: {
                url: "DropItem",
                volume: 100
            },
            alreadymixed: {
                url: "AlreadyMixed",
                volume: 400
            },
            clone: {
                url: "CloneItem",
                volume: 150
            },
            failed: {
                url: "FailedToMix",
                volume: 80
            },
            remove: {
                url: "RemoveItem",
                volume: 80
            },
            charge: {
                url: "ChargeUp",
                volume: 10
            },
            pop: {
                url: "PopUp",
                volume: 30
            }
        }
          , Ae = {
            DRAG_START: "pickup",
            ELEMENT_DROP: "drop",
            ELEMENT_CLONE: "clone",
            ELEMENT_DESTROY: "remove",
            MIX_MIXED: "alreadymixed",
            MIX_FAIL: "failed",
            MIX_NEW: "charge",
            ANIMATION_NEW_POP: "pop",
            BUTTON_CLICK: "click"
        };
        class Te {
            constructor(t) {
                this.play = t,
                this.initTriggersListeners()
            }
            initTriggersListeners() {
                Object.entries(Ae).forEach(([t,e])=>g["a"].on(t, ()=>this.play(e)))
            }
            get sounds() {
                return Ie
            }
        }
        var Se = Te;
        const _e = {
            LA_001: {
                type: ee,
                url: "LA_001",
                mood: ae,
                silenceAfter: 10,
                prevents: ["LA_001_loop"]
            },
            LA_002: {
                type: ee,
                url: "LA_002",
                mood: ae,
                silenceAfter: 10,
                prevents: ["LA_002_loop"]
            },
            LA_003: {
                type: ee,
                url: "LA_003",
                mood: ae,
                silenceAfter: 15,
                prevents: ["LA_003_loop"]
            },
            LA_FS_3_4: {
                type: ee,
                url: "LA_FS_3_4",
                mood: ae,
                silenceAfter: 10,
                prevents: ["LA_FS_3_4_loop"]
            },
            LA_004: {
                type: ee,
                url: "LA_004_Loop",
                loop: !0,
                mood: ne,
                duration: 320,
                volume: 70,
                silenceAfter: 6,
                fadeIn: 4,
                fadeOut: 4
            },
            LA_005: {
                type: ee,
                url: "LA_005_Loop",
                loop: !0,
                mood: ne,
                duration: 246,
                volume: 70,
                silenceAfter: 20,
                fadeIn: 4,
                fadeOut: 4
            },
            LA_006: {
                type: ee,
                url: "LA_006_Loop",
                loop: !0,
                mood: ae,
                duration: 180,
                silenceAfter: 6,
                fadeIn: 2,
                fadeOut: 2
            },
            LA_FS_001: {
                type: ee,
                url: "LA_FS_001_Loop",
                loop: !0,
                mood: ne,
                duration: 200,
                volume: 70,
                silenceAfter: 10,
                fadeIn: 4,
                fadeOut: 4
            },
            LA_FS_0032: {
                type: ee,
                url: "LA_FS_0032_Loop",
                loop: !0,
                mood: ne,
                duration: 60
            },
            LA_001_loop: {
                type: se,
                url: "LA_001_Loop",
                loop: !0,
                mood: ne,
                duration: 50,
                volume: 50,
                silenceAfter: 6,
                fadeIn: 6,
                fadeOut: 6,
                prevents: ["LA_001"]
            },
            LA_002_loop: {
                type: se,
                url: "LA_002_Loop",
                loop: !0,
                mood: ne,
                duration: 100,
                volume: 50,
                silenceAfter: 15,
                fadeIn: 3,
                fadeOut: 6,
                prevents: ["LA_002"]
            },
            LA_003_loop: {
                type: se,
                url: "LA_003_Loop",
                loop: !0,
                mood: ne,
                duration: 90,
                volume: 50,
                silenceAfter: 10,
                fadeIn: 2,
                fadeOut: 5,
                prevents: ["LA_003"]
            },
            LA_FS_3_4_loop: {
                type: se,
                url: "LA_FS_3_4_Loop",
                loop: !0,
                mood: ne,
                duration: 64,
                volume: 50,
                silenceAfter: 10,
                fadeIn: 3,
                fadeOut: 6,
                prevents: ["LS_FS_3_4"]
            },
            [ie]: {
                type: se,
                buffer: [],
                duration: 20
            }
        };
        var Oe = _e;
        const xe = 6e4
          , Pe = 15e4
          , Ce = 3e5
          , Le = 1
          , Re = ()=>{
            let t = 0
              , e = 0
              , s = 0;
            const i = Date.now();
            return r["a"].getters.history.forEach(({timestamp: n})=>{
                const a = i - n;
                a < xe ? t++ : a < Pe ? e++ : a < Ce && s++
            }
            ),
            {
                short: t,
                long: e,
                finish: s
            }
        }
          , De = ()=>{
            const {short: t, long: e, finish: s} = Re()
              , i = 3 * t + 2 * e + s;
            return i > Le ? ae : ne
        }
        ;
        var Ne = De;
        const ke = 5
          , Me = "LA_006";
        class je {
            constructor(t, e) {
                this.history = [],
                this.playNext = ()=>{
                    const t = this.getNext();
                    Object(o["q"])("music", "next track", t),
                    this.play(t),
                    this.addToHistory(t)
                }
                ,
                this.base = t,
                this.play = e,
                Oe[Me].lazy = !1,
                g["a"].once("PLAY", ()=>{
                    this.play(Me),
                    this.addToHistory(Me)
                }
                )
            }
            onTrackFinished() {
                Object(o["q"])("music", "trackFinished", this.current),
                this.current && this.current.silenceAfter ? window.setTimeout(this.playNext, 1e3 * this.current.silenceAfter) : this.playNext()
            }
            getNext() {
                let t = this.calculateRandomNext();
                return this.history.includes(t) && (t = this.calculateRandomNext()),
                t
            }
            calculateRandomNext() {
                const t = this.calculateMood();
                if (!this.current)
                    return ie;
                if (this.current.type === ee && this.current.mood === ae)
                    return this.randomConnector();
                if (this.current.mood === ne) {
                    const t = [this.randomConnector(), this.randomTrack(ne)];
                    return this.random(t)
                }
                return this.current.type === se ? this.randomTrack(t) : this.randomConnector()
            }
            calculateMood() {
                return Ne()
            }
            randomConnector() {
                const t = this.names.filter(t=>this.getSound(t).type === se && !this.prevents.includes(t) && t !== this.latest);
                return this.random(t)
            }
            randomTrack(t) {
                const e = this.names.filter(e=>{
                    const s = this.getSound(e);
                    return !!s && (s.type === ee && s.mood === t && e !== this.latest && !this.prevents.includes(e))
                }
                );
                return this.random(e)
            }
            random(t) {
                const e = Math.floor(Math.random() * t.length);
                return t[e]
            }
            addToHistory(t) {
                this.history.unshift(t),
                this.history.length > ke && this.history.pop()
            }
            getSound(t) {
                return this.base.sounds.get(t)
            }
            get current() {
                return this.getSound(this.latest)
            }
            get prevents() {
                return this.current ? this.current.prevents : []
            }
            get sounds() {
                return Oe
            }
            get names() {
                return Object.keys(this.sounds)
            }
            get latest() {
                return this.history.length ? this.history[0] : ""
            }
        }
        var $e = je;
        const He = .4;
        class Be {
            constructor(t, e, s) {
                this.timer = null,
                this.source = null,
                this.startedAt = -1,
                this.pausedAt = 0,
                this.onEnded = ()=>{
                    this.base.onTrackFinished()
                }
                ,
                this.durationReached = ()=>{
                    const t = .5
                      , e = this.context.currentTime - this.startedAt + t;
                    e < this.currentDuration || (this.currentSound && this.currentSound.fadeOut ? this.volume.fadeOutMusic(this.currentSound.fadeOut).then(()=>this.stop(!0)) : this.stop(!0))
                }
                ,
                this.base = t,
                this.context = e,
                this.$store = s,
                this.initVisibilityListener(),
                this.initMuteListener()
            }
            initVisibilityListener() {
                this.$store.watch((t,e)=>e.isGameActive, t=>t ? this.onShow() : this.onHide())
            }
            initMuteListener() {
                this.$store.watch((t,e)=>e.playMusic, t=>{
                    Object(o["q"])("music", "mute music", !t),
                    !this.isPlaying || t ? !this.isPlaying && t && this.current && this.play(this.current) : this.pause()
                }
                )
            }
            play(t) {
                const e = this.base.sounds.get(t);
                this.isValid(e) && (this.$store.dispatch("musicPlay", t),
                Object(o["q"])("music", "play track", e),
                this.current !== ie ? (this.playSource(e),
                0 !== this.currentDuration && (this.clearTimer(),
                this.timer = window.setTimeout(this.durationReached, 1e3 * (this.currentDuration - this.pausedAt))),
                e.fadeIn ? this.volume.fadeInMusic(e.fadeIn, e.volume) : this.volume.unmute(ee, e.volume)) : window.setTimeout(()=>{
                    this.$store.dispatch("musicStop"),
                    this.onEnded()
                }
                , 1e3 * this.currentDuration))
            }
            isValid(t) {
                return !!t && (!this.isPlaying && !this.isHidden && (this.volume.canPlay(ee) && this.$store.getters.isGameActive ? !!t.buffer || (this.base.sounds.load(t).then(()=>this.play(t.name)).catch(()=>null),
                !1) : (this.$store.dispatch("musicSet", t.name),
                !1)))
            }
            playSource(t) {
                if (!t.buffer)
                    return;
                const e = this.context.createBufferSource();
                e.buffer = t.buffer,
                e.loop = t.loop,
                e.connect(this.volume.music);
                const s = this.pausedAt;
                e.start(0, s),
                e.onended = this.onEnded,
                this.source = e,
                this.startedAt = this.context.currentTime - this.pausedAt,
                this.pausedAt = 0
            }
            pause() {
                const t = this.context.currentTime - this.startedAt;
                this.pausedAt = t,
                this.stop(),
                this.$store.dispatch("musicPause")
            }
            stop(t=!1) {
                null !== this.current && null !== this.source && (this.source.stop || (this.source.stop = this.source.noteOff),
                this.clearTimer(),
                t ? this.$store.dispatch("musicStop") : this.source.onended = null,
                Object(o["q"])("music", "stop track", this.current),
                this.source.stop(0),
                this.source = null,
                this.startedAt = -1)
            }
            async onShow() {
                this.currentSound && !this.isPlaying && (await this.context.resume(),
                Object(o["q"])("music", "start on show", this.current),
                this.play(this.current),
                this.currentSound && !this.currentSound.fadeIn && this.volume.fadeInMusic(He, this.currentSound.volume))
            }
            async onHide() {
                this.isPlaying && (Object(o["q"])("music", "stop on hide", this.current),
                await this.volume.fadeOutMusic(He),
                await this.pause(),
                this.context.suspend(),
                this.clearTimer())
            }
            clearTimer() {
                this.timer && window.clearTimeout(this.timer),
                this.timer = null
            }
            get volume() {
                return this.base.volume
            }
            get isPlaying() {
                return this.$store.getters.isMusicPlaying
            }
            get current() {
                return this.$store.getters.currentMusic
            }
            get currentSound() {
                return this.current ? this.base.sounds.get(this.current) : null
            }
            get currentDuration() {
                if (!this.current || !this.currentSound)
                    return 0;
                const t = this.currentSound
                  , e = t.duration
                  , s = t.fadeOut ? t.fadeOut : 0;
                return e - s
            }
            get isHidden() {
                return "hidden" === document.visibilityState || document.hidden
            }
        }
        var Fe = Be;
        class Ge {
            constructor() {
                this.playMusic = t=>{
                    this.player.play(t)
                }
                ,
                this.playSFX = t=>{
                    const e = this.sounds.get(t);
                    if (!e)
                        return;
                    if (!e.buffer)
                        return;
                    if (!this.volume.canPlay(te))
                        return;
                    if (!this.context)
                        return;
                    const s = this.context.createBufferSource();
                    s.buffer = e.buffer;
                    let i = this.volume.sfx;
                    "number" === typeof e.volume && (i = this.context.createGain(),
                    i.gain.setValueAtTime(e.volume / 100, this.context.currentTime),
                    i.connect(this.volume.sfx),
                    s.onended = ()=>i.disconnect()),
                    s.connect(i),
                    s.start(0, 0)
                }
            }
            init(t) {
                if ("AudioContext"in window)
                    this.context = new window.AudioContext;
                else {
                    if (!("webkitAudioContext"in window))
                        return void t.commit("AUDIO_DISABLED");
                    this.context = new window.webkitAudioContext
                }
                this.player = new Fe(this,this.context,t),
                this.sounds = new we(this.context),
                this.volume = new Ee(this.context,t),
                this.sfx = new Se(this.playSFX),
                this.music = new $e(this,this.playMusic),
                g["a"].once("AUDIO_EXTENSION", ()=>{
                    this.sounds.add(te, this.sfx.sounds),
                    this.sounds.add(ee, this.music.sounds),
                    window.setTimeout(()=>this.sounds.loadAll(), 0)
                }
                ),
                this.initInteraction()
            }
            initInteraction() {
                if (!this.context)
                    return;
                const t = ()=>{
                    this.context.resume(),
                    document.removeEventListener("mousedown", t, !1),
                    document.removeEventListener("touchstart", t, !1)
                }
                ;
                document.addEventListener("mousedown", t, !1),
                document.addEventListener("touchstart", t, !1)
            }
            onTrackFinished() {
                this.music.onTrackFinished()
            }
        }
        var Ue = new Ge
          , We = s("6eebf");
        const Ye = {
            logged_in: "dimension1",
            music_active: "dimension2",
            sfx_active: "dimension3",
            engagement: "dimension4",
            progress: "dimension5"
        }
          , Ke = {
            game_ready_timing: "metric1",
            session_progress: "metric2",
            total_progress: "metric3",
            fails_on_hints_click: "metric4"
        }
          , ze = ["4", "5", "6", "10", "20", "30", "50", "75", "100", "150", "200", "250", "300", "400", "500"]
          , Ve = t=>{
            const e = ze.findIndex(e=>!(+e <= t)) || -1;
            return -1 === e ? null : ze[e - 1]
        }
          , Xe = (t,e)=>({
            trigger: t,
            handle: e
        })
          , qe = (t,e)=>({
            watcher: t,
            handle: e
        })
          , Qe = [Xe("ANALYTICS_INIT", ({send: t})=>t("metrics", "game_ready", null, null, null, !0)), Xe("PLAY", ({send: t})=>t("metrics", "play_clicked")), Xe("MIX_NEW", async({send: t, $store: e})=>{
            await Object(o["c"])(500);
            const s = e.getters.totalProgress
              , i = Ve(s);
            i && t("metrics", "total_progress", i, +i)
        }
        ), Xe("TUTORIALS_FINISHED", ({send: t})=>t("metrics", "tutorials_finished")), Xe("HINTS_CLICKED", ({send: t, $store: e})=>{
            t("metrics", "hints_clicked"),
            t("user", "opens hints - fails streak", e.getters.sessionFailStreak)
        }
        ), Xe("UNLOAD", ({send: t, $store: e})=>t("user", "leaves - fails streak", e.getters.sessionFailStreak))];
        var Je = Qe;
        const Ze = [Xe("ANALYTICS_INIT", ({set: t, $store: e})=>{
            t("game_ready_timing", Math.round(window.performance.now())),
            t("music_active", e.state.settings.music),
            t("sfx_active", e.state.settings.sfx),
            e.getters.totalProgress === e.getters.prime.length && t("engagement", "game_ready")
        }
        ), Xe("PLAY", ({set: t, $store: e})=>{
            const s = e.getters.totalProgress
              , i = e.getters.prime.length;
            s === i ? t("engagement", "play_clicked") : s === i + 1 ? t("engagement", "tutorials_finished") : s >= i + 2 && t("engagement", "own_element");
            const n = Ve(s);
            n && t("progress", n)
        }
        ), Xe("MIX_NEW", async({set: t, $store: e})=>{
            await Object(o["c"])(500);
            const s = e.getters.sessionStats.initialProgress
              , i = e.getters.totalProgress
              , n = i - s;
            t("session_progress", n),
            i === e.getters.prime.length + 2 && t("engagement", "own_element");
            const a = Ve(i);
            a && t("progress", a)
        }
        ), Xe("LOGGED_IN", ({set: t})=>t("logged_in", !0)), Xe("NOT_LOGGED_IN", ({set: t})=>t("logged_in", !1)), Xe("TUTORIALS_FINISHED", ({set: t})=>t("engagement", "tutorials_finished")), Xe("TUTORIALS_PROGRESS", ({set: t},{type: e, name: s})=>t("engagement", `tutorial_${e}_${s}`)), Xe("ANIMATION_NEW_POP", ({set: t, $store: e})=>{
            e.getters.totalProgress > 5 || t("engagement", "first_new_animation_pop")
        }
        ), Xe("ANIMATION_NEW_END", ({set: t, $store: e})=>{
            e.getters.totalProgress > 5 || t("engagement", "first_new_animation_end")
        }
        ), Xe("HINTS_CLICKED", ({set: t})=>t("engagement", "hints_clicked")), Xe("GAME_ENDED", ({set: t})=>t("engagement", "game_ended")), Xe("GAME_COMPLETED", ({set: t})=>t("engagement", "game_completed"))]
          , ts = [qe(t=>t.playMusic, ({set: t},e)=>t("music_active", e)), qe(t=>t.playSfx, ({set: t},e)=>t("sfx_active", e))]
          , es = [...Ze, ...ts];
        var ss = es;
        const is = [Xe("GAME_READY", ({timing: t})=>t("ready", Math.round(window.performance.now())))];
        var ns = is;
        const as = [...Je, ...ss, ...ns];
        var rs = as;
        const os = t=>t.hasOwnProperty("trigger")
          , cs = Object(E["a"])(Object(E["a"])({}, Ye), Ke);
        class ls {
            constructor() {
                this.setup = ()=>{
                    this.setupTracker(),
                    this.initHandlers()
                }
                ,
                this.send = (t,e,s=null,i=null,n=null,a=!1)=>{
                    if (!window.ga)
                        return;
                    const r = {};
                    a && (r.nonInteraction = !0),
                    null === n ? window.ga("send", "event", t, e, s, i, r) : window.ga("send", "event", t, e, n, r),
                    this.logger("[EVENT]", t, e, s, i, n, r)
                }
                ,
                this.set = (t,e)=>{
                    window.ga && (window.ga("set", cs[t], e),
                    this.logger("[SET]", t, e))
                }
                ,
                this.sendTiming = (t,e)=>{
                    window.ga && (window.ga("send", "timing", "Game", t, e),
                    this.logger("[TIMING]", t, e))
                }
            }
            async init(t) {
                this.$store = t,
                document.addEventListener(ot["c"], ()=>this.send("metrics", "not_ready_play_click", "timing", window.performance.now(), null, !0)),
                await g["a"].onReady(),
                this.setup()
            }
            setupTracker() {
                window.ga && window.ga("set", "transport", "beacon")
            }
            initHandlers() {
                const t = {
                    send: this.send,
                    set: this.set,
                    timing: this.sendTiming,
                    $store: this.$store
                };
                rs.forEach(e=>{
                    const s = s=>e.handle(t, s);
                    os(e) ? g["a"].on(e.trigger, s) : this.$store.watch((t,s)=>e.watcher(s), s)
                }
                )
            }
            handleErrors(t) {
                window.ga && window.ga("send", "exception", {
                    exDescription: t.message || t,
                    exFatal: !1
                })
            }
            logger(...t) {
                Object(o["q"])("analytics", ...t)
            }
        }
        var hs = new ls
          , ds = s("2ae7");
        const us = {
            bind(t, e, s) {
                const i = e.expression
                  , n = s.context[i];
                t.addEventListener(ds["a"], n, !1)
            },
            unbind(t, e, s) {
                const i = e.expression
                  , n = s.context[i];
                t.removeEventListener(ds["a"], n)
            }
        };
        var ms = us;
        a["a"].directive("animation-end", ms);
        var ps = s("baf5");
        g["a"].on("PLAY", ()=>ps["install"]({
            onUpdateReady: ()=>ps["applyUpdate"]()
        }));
        var gs = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                attrs: {
                    id: "app"
                }
            }, [t.isGameReady ? s("Popups") : t._e(), s("Game"), s("AudioExtension")], 1)
        }
          , Es = []
          , fs = s("6e95")
          , bs = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "game",
                attrs: {
                    id: "js-game"
                }
            }, [i("Workspace"), i("Animations"), i("Library"), i("div", {
                staticClass: "ui"
            }, [i("Search"), i("Menu"), i("img", {
                staticClass: "logo",
                attrs: {
                    alt: "Little Alchemy 2",
                    src: s("1ae4")
                }
            })], 1), t.areTutorialsVisible ? i("Tutorials") : t._e(), i("TextTutorials")], 1)
        }
          , ys = []
          , vs = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "workspace",
                class: t.classes,
                attrs: {
                    id: t.WORKSPACE_ID
                },
                on: {
                    longpress: t.onLongpress
                }
            }, [s("div", {
                ref: "element",
                staticClass: "workspace-cleanup"
            }), s("BoxSizing"), t._l(t.workspaceFinalWithoutAnimated, (function(t) {
                return s("FinalBox", {
                    key: t.id,
                    attrs: {
                        data: t,
                        type: "final"
                    }
                })
            }
            )), t._l(t.workspaceExhaustedWithoutAnimated, (function(t) {
                return s("FinalBox", {
                    key: t.id,
                    attrs: {
                        data: t,
                        type: "exhausted"
                    }
                })
            }
            )), t._l(t.workspaceElements, (function(t) {
                return s("WorkspaceBox", {
                    key: t.id,
                    attrs: {
                        data: t,
                        "data-normal": ""
                    }
                })
            }
            ))], 2)
        }
          , ws = []
          , Is = s("2138")
          , As = s("53b2")
          , Ts = s("7d61")
          , Ss = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("Box", {
                class: t.classes,
                attrs: {
                    data: t.data,
                    "data-final": t.isFinal,
                    "data-exhausted": t.isExhausted
                },
                on: {
                    click: t.onClick,
                    touchstart: t.onClick
                }
            })
        }
          , _s = []
          , Os = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", t._g({
                staticClass: "element droppable",
                style: t.style
            }, t.$listeners), [s("img", {
                attrs: {
                    src: t.iconUrl,
                    alt: t.id
                }
            })])
        }
          , xs = []
          , Ps = s("fd41")
          , Cs = fs["a"].extend({
            name: "base-box",
            props: {
                data: Object
            },
            computed: {
                id() {
                    return this.data.id
                },
                iconUrl() {
                    return Object(Ps["a"])(this.data.elementId)
                },
                style() {
                    const {x: t, y: e} = this.data.position;
                    return {
                        position: "absolute",
                        top: `${e}px`,
                        left: `${t}px`
                    }
                }
            }
        })
          , Ls = Cs
          , Rs = s("2877")
          , Ds = Object(Rs["a"])(Ls, Os, xs, !1, null, null, null)
          , Ns = Ds.exports
          , ks = fs["a"].extend({
            name: "final-box",
            props: {
                data: Object,
                type: String
            },
            components: {
                Box: Ns
            },
            computed: {
                id() {
                    return this.data.elementId
                },
                isFinal() {
                    return "final" === this.type
                },
                isExhausted() {
                    return "exhausted" === this.type
                },
                isFinalAnimationActive() {
                    return this.$store.getters.isFinalForIdActive(this.id)
                },
                isExhaustedAnimationActive() {
                    return this.$store.getters.isExhaustedForIdActive(this.id)
                },
                classes() {
                    return {
                        "js-final": !this.isFinalAnimationActive && !this.isExhaustedAnimationActive,
                        "js-exhausted": this.isExhausted
                    }
                }
            },
            methods: {
                onClick() {
                    this.isFinal ? this.onFinalClick() : this.onExhaustedClick()
                },
                onFinalClick() {
                    Qt.startFinal(this.id)
                },
                onExhaustedClick() {
                    Qt.startExhausted(this.id)
                }
            }
        })
          , Ms = ks
          , js = Object(Rs["a"])(Ms, Ss, _s, !1, null, null, null)
          , $s = js.exports
          , Hs = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                ref: "element",
                staticClass: "element droppable",
                class: t.classes,
                style: t.style,
                attrs: {
                    "data-id": t.id
                },
                on: {
                    mouseenter: function(e) {
                        return e.stopPropagation(),
                        t.onMouseEnter(e)
                    },
                    mouseleave: function(e) {
                        return e.stopPropagation(),
                        t.onMouseLeave(e)
                    }
                }
            }, [s("img", {
                ref: "icon",
                attrs: {
                    src: t.iconUrl,
                    alt: t.name,
                    draggable: "false"
                },
                on: {
                    doubletap: t.onDoubleTap
                }
            })])
        }
          , Bs = []
          , Fs = s("b7ba");
        s("e25e");
        const Gs = Object(o["h"])("transform")
          , Us = {
            id: null,
            dragDistance: null,
            position: null,
            handle: null,
            type: Is["d"]
        }
          , Ws = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel", "mouseup"],
            pointerdown: ["pointermove", "pointerup", "pointercancel", "mouseup"]
        };
        class Ys {
            constructor(t, e={}) {
                this.handles = [],
                this.throttle = !1,
                this.startEventType = "",
                this.pointerIdentifier = null,
                this.startPosition = {
                    x: 0,
                    y: 0
                },
                this.isDragging = !1,
                this.boundEvents = [],
                this.element = t,
                this.position = {
                    x: -1,
                    y: -1
                },
                this.startPoint = {
                    x: 0,
                    y: 0
                },
                this.dragPoint = {
                    x: 0,
                    y: 0
                },
                this.options = Object(E["a"])(Object(E["a"])({}, Us), e),
                this._create(this.options)
            }
            _create(t) {
                this.isWorkspace && (this.position = t.position ? t.position : this._getPosition()),
                this.startPosition = Object(E["a"])({}, this.position),
                this.setHandles()
            }
            get isWorkspace() {
                return this.options.type === Is["d"]
            }
            get id() {
                return this.options.id
            }
            setHandles() {
                this.options.handle ? this.handles = this.options.handle : this.handles = [this.element],
                this.addListenersToHandles()
            }
            addListenersToHandles() {
                this.handles.forEach(t=>{
                    t.addEventListener("mousedown", this, !1),
                    t.addEventListener("touchstart", this, !1),
                    window.navigator.pointerEnabled && (t.addEventListener("pointerdown", this, !1),
                    t.style.touchAction = "none")
                }
                )
            }
            removeHandlerListeners() {
                this.handles.forEach(t=>{
                    t.removeEventListener("mousedown", this, !1),
                    t.removeEventListener("touchstart", this, !1),
                    t.removeEventListener("pointerdown", this, !1)
                }
                )
            }
            setPosition(t) {
                this.position = t
            }
            _getPosition() {
                const t = Object(o["g"])(this.element)
                  , e = t=>"0px" === t || "auto" === t;
                if ("absolute" !== t.position || e(t.left) && e(t.top)) {
                    const t = this.element.getBoundingClientRect();
                    return this.position = {
                        x: t.left,
                        y: t.top
                    },
                    this.position
                }
                return this.position = {
                    x: parseInt(t.left, 10),
                    y: parseInt(t.top, 10)
                },
                this.position
            }
            handleEvent(t) {
                const e = `on${t.type}`;
                this[e] && this[e](t)
            }
            onmousedown(t) {
                const e = t.button;
                e && 0 !== e && 1 !== e || this.dragStart(t, t)
            }
            ontouchstart(t) {
                this.isDragging || this.dragStart(t, t.changedTouches[0])
            }
            onMSPointerDown(t) {
                this.onpointerdown(t)
            }
            onpointerdown(t) {
                this.isDragging || this.dragStart(t, t)
            }
            setPointerPoint(t, e) {
                t.x = void 0 !== e.pageX ? e.pageX : e.clientX,
                t.y = void 0 !== e.pageY ? e.pageY : e.clientY
            }
            dragStart(t, e) {
                Ft.isDragging || (t.cancelable && t.preventDefault(),
                this.throttle = !1,
                this.helper = null,
                this.isDragging = !0,
                this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier,
                this.setPointerPoint(this.startPoint, e),
                t.simulated && this.position || this._getPosition(),
                this.startPosition.x = this.position.x,
                this.startPosition.y = this.position.y,
                this.dragPoint.x = 0,
                this.dragPoint.y = 0,
                this.startEventType = t.startEventType ? t.startEventType : t.type,
                this._bindEvents(Ws[this.startEventType]),
                this.isWorkspace ? this.startAnimatedDrag() : this.hasOwnProperty("onLibraryDragStart") && "function" === typeof this.onLibraryDragStart && this.onLibraryDragStart())
            }
            startAnimatedDrag() {
                this.helper = this.element,
                this.setLeftTop(),
                this.hasOwnProperty("onDragStart") && "function" === typeof this.onDragStart && this.onDragStart(this),
                Ft.onDragStart(this.id),
                this.animate()
            }
            _bindEvents(t) {
                t.forEach(t=>{
                    window.addEventListener(t, this, !1)
                }
                ),
                this.boundEvents = t
            }
            _unbindEvents() {
                const t = this.boundEvents;
                t && (t.forEach(t=>{
                    window.removeEventListener(t, this, !1)
                }
                ),
                this.boundEvents = null)
            }
            _getTouch(t) {
                if (!this.pointerIdentifier) {
                    const e = t.changedTouches[0];
                    return this.pointerIdentifier = e.identifier,
                    e
                }
                for (let e = 0, s = t.changedTouches.length; e < s; e++)
                    if (this.pointerIdentifier === t.changedTouches[e].identifier)
                        return t.changedTouches[e];
                return null
            }
            onmousemove(t) {
                this.dragMove(t, t)
            }
            ontouchmove(t) {
                const e = this._getTouch(t);
                e && this.dragMove(t, e)
            }
            onpointermove(t) {
                this.pointerIdentifier || (this.pointerIdentifier = t.pointerId),
                t.preventDefault(),
                this.pointerIdentifier === t.pointerId && this.dragMove(t, t)
            }
            dragMove(t, e) {
                if (this.isWorkspace && this.throttle)
                    return;
                if (this.throttle = !0,
                !this.isDragging)
                    return;
                this.setPointerPoint(this.dragPoint, e);
                const s = this.dragPoint.x - this.startPoint.x
                  , i = this.dragPoint.y - this.startPoint.y;
                if (this.isWorkspace || !this.options.dragDistance)
                    this.position.x = this.startPosition.x + s,
                    this.position.y = this.startPosition.y + i,
                    this.dragPoint.x = s,
                    this.dragPoint.y = i,
                    Gt["a"].onDragMove(this.position);
                else {
                    const t = Math.sqrt(s * s + i * i);
                    t > this.options.dragDistance && (this.dragEnd(),
                    this.hasOwnProperty("onDistanceDragged") && "function" === typeof this.onDistanceDragged && this.onDistanceDragged(this.startPoint, this.dragPoint, this.startPosition, this.startEventType))
                }
            }
            onmouseup(t) {
                this.dragEnd(t)
            }
            ontouchend(t) {
                const e = this._getTouch(t);
                e && this.dragEnd(t)
            }
            onpointerup(t) {
                this.pointerIdentifier === t.pointerId && this.dragEnd(t)
            }
            onpointercancel(t) {
                t.pointerId === this.pointerIdentifier && this.dragEnd(t)
            }
            ontouchcancel(t) {
                const e = this._getTouch(t);
                e && this.dragEnd(t)
            }
            dragEnd(t) {
                this.isDragging = !1,
                this.pointerIdentifier = null,
                this._unbindEvents(),
                this.isWorkspace && (this.helper && "none" !== this.helper.style.display && Gs && (this.helper.style[Gs] = "",
                this.setLeftTop()),
                this.hasOwnProperty("onDragEnd") && "function" === typeof this.onDragEnd && this.onDragEnd(this),
                Ft.onDragEnd(this.position, t.simulated || !1))
            }
            animate() {
                if (this.throttle = !1,
                !this.isDragging)
                    return;
                this.transform();
                const t = this;
                window.requestAnimationFrame((function() {
                    t.animate()
                }
                ))
            }
            transform() {
                this.helper.style[Gs] = `translate(${this.dragPoint.x}px,${this.dragPoint.y}px)`
            }
            setLeftTop() {
                this.helper.style.left = `${this.position.x}px`,
                this.helper.style.top = `${this.position.y}px`
            }
            destroy() {
                this.onDragStart = null,
                this.onDragEnd = null,
                this.onDistanceDragged = null,
                this.onLibraryDragStart = null,
                this._unbindEvents(),
                this.removeHandlerListeners()
            }
        }
        var Ks = Ys
          , zs = fs["a"].extend({
            name: "workspace-box",
            props: {
                data: Object
            },
            data: ()=>({
                isDragging: !1,
                hover: !1,
                isClone: !1,
                cloned: !1
            }),
            computed: Object(E["a"])(Object(E["a"])({}, Object(r["b"])(["elementById", "isArtModeEnabled", "draggingOverId", "mixFather", "mixStatus", "elementIsExhausted"])), {}, {
                id() {
                    return this.data.id
                },
                elementId() {
                    return this.data.elementId
                },
                position() {
                    return this.data.position
                },
                element() {
                    return this.elementById(this.elementId)
                },
                name() {
                    return this.element ? this.element.name : ""
                },
                isBelow() {
                    return this.draggingOverId === this.id && !this.isDragging
                },
                hasFailed() {
                    const t = this.mixFather;
                    return this.mixStatus === Fs["a"] && !!t && t.id === this.id
                },
                hasAlreadyMixed() {
                    const t = this.mixFather;
                    return this.mixStatus === Fs["b"] && !!t && t.id === this.id
                },
                iconUrl() {
                    return Object(Ps["a"])(this.elementId)
                },
                style() {
                    const {x: t=-500, y: e=-500} = this.position;
                    return {
                        position: "absolute",
                        top: `${e}px`,
                        left: `${t}px`
                    }
                },
                isExhausted() {
                    return !!this.elementIsExhausted(this.elementId)
                },
                classes() {
                    return {
                        "is-dragging": this.isDragging,
                        "js-hover": this.hover,
                        "js-pulse": this.isBelow,
                        "js-mix-fail": !this.isDragging && this.hasFailed,
                        "js-mix-mixed": !this.isDragging && this.hasAlreadyMixed,
                        "js-cloned": !this.isDragging && this.cloned,
                        "js-clone": this.isClone,
                        "js-to-remove": !!this.element && this.isExhausted && !this.isArtModeEnabled
                    }
                }
            }),
            mounted() {
                this.initDraggable()
            },
            beforeDestroy() {
                this.draggable && (this.draggable.destroy(),
                this.draggable = null)
            },
            methods: {
                initDraggable() {
                    this.draggable = new Ks(this.$refs.element,{
                        id: this.id,
                        handle: [this.$refs.icon],
                        type: Is["d"],
                        position: Object(E["a"])({}, this.position)
                    }),
                    this.draggable.onDragStart = ()=>this.onDragStart(),
                    this.draggable.onDragEnd = ()=>this.onDragEnd()
                },
                onDragStart() {
                    this.isDragging = !0,
                    this.isClone = !1,
                    Object(o["x"])(this.$refs.element),
                    window.setTimeout(()=>{
                        this.hover = !1
                    }
                    , 150)
                },
                onDragEnd() {
                    this.isDragging = !1
                },
                onMouseEnter() {
                    this.isDragging || this.isClone || (this.hover = !0)
                },
                onMouseLeave() {
                    this.isDragging || (this.hover = !1,
                    this.isClone = !1)
                },
                onDoubleTap() {
                    this.$store.dispatch("workspaceElementClone", this.id),
                    this.$nextTick(async()=>{
                        this.cloned = !0,
                        this.$refs.element ? await Object(o["t"])(this.$refs.element) : await Object(o["c"])(50),
                        this.cloned = !1
                    }
                    )
                },
                onClone() {
                    this.$nextTick(()=>{
                        this.isClone = !0
                    }
                    )
                },
                updateDraggablePosition() {
                    this.draggable && this.draggable.setPosition(Object(E["a"])({}, this.position))
                }
            }
        })
          , Vs = zs
          , Xs = Object(Rs["a"])(Vs, Hs, Bs, !1, null, null, null)
          , qs = Xs.exports
          , Qs = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.obtainSize ? s("Box", {
                ref: "box",
                attrs: {
                    data: t.boxData
                }
            }) : t._e()
        }
          , Js = []
          , Zs = fs["a"].extend({
            name: "workspace-box-sizing",
            components: {
                Box: Ns
            },
            data: ()=>({
                obtainSize: !0
            }),
            computed: {
                boxData() {
                    return {
                        id: "0",
                        elementId: "0",
                        position: {
                            x: -200,
                            y: -200
                        }
                    }
                }
            },
            mounted() {
                this.updateSize(),
                g["a"].onResize(()=>{
                    this.obtainSize = !0,
                    this.$nextTick(()=>this.updateSize())
                }
                )
            },
            methods: {
                updateSize(t=!1) {
                    if (!this.$refs.box || !this.$refs.box.$el)
                        return void this.retry(t);
                    const {width: e, height: s} = this.getSize();
                    e && s ? (this.obtainSize = !1,
                    this.notify(e, s)) : this.retry(t)
                },
                retry(t) {
                    t ? this.notify(0, 0) : window.setTimeout(()=>this.updateSize(!0), 100)
                },
                getSize() {
                    const t = Object(o["g"])(this.$refs.box.$el)
                      , e = parseInt(t.width, 10) || 0
                      , s = parseInt(t.height, 10) || 0;
                    return {
                        width: e,
                        height: s
                    }
                },
                notify(t, e) {
                    this.$store.dispatch("dimensionsWorkspaceBox", {
                        width: t,
                        height: e
                    })
                }
            }
        })
          , ti = Zs
          , ei = Object(Rs["a"])(ti, Qs, Js, !1, null, null, null)
          , si = ei.exports;
        const ii = Ts["a"][As["a"]];
        var ni = fs["a"].extend({
            name: "workspace",
            components: {
                WorkspaceBox: qs,
                FinalBox: $s,
                BoxSizing: si
            },
            data: ()=>({
                listenerAdded: !1
            }),
            computed: Object(E["a"])(Object(E["a"])({}, Object(r["b"])(["workspaceElements", "workspaceRevertable", "workspaceFinal", "workspaceExhausted", "isAnimationActive", "animationFinalFinished", "droppableById"])), {}, {
                WORKSPACE_ID() {
                    return Is["g"]
                },
                ifAnimateClear() {
                    return this.isAnimationActive(As["a"]) || this.workspaceRevertable
                },
                ifAnimateRevert() {
                    return this.isAnimationActive(As["g"])
                },
                workspaceFinalWithoutAnimated() {
                    return this.workspaceFinal.filter(({elementId: t})=>!this.animationFinalFinished.includes(t))
                },
                workspaceExhaustedWithoutAnimated() {
                    return this.workspaceExhausted.filter(({elementId: t})=>!this.animationFinalFinished.includes(t))
                },
                classes() {
                    return {
                        "js-cleanup": this.ifAnimateClear || this.ifAnimateRevert,
                        "js-revert": this.ifAnimateRevert
                    }
                }
            }),
            mounted() {
                this.onTransitionEnd = this.onTransitionEnd.bind(this)
            },
            watch: {
                ifAnimateClear: "addTransitionListener",
                ifAnimateRevert: "addTransitionListener"
            },
            methods: {
                onLongpress({target: t}) {
                    if (!t)
                        return;
                    const e = t.parentNode.dataset.id
                      , s = this.droppableById(e);
                    s && g["a"].emit("ENCYCLOPEDIA_SHOW_ITEM", s.elementId)
                },
                addTransitionListener(t) {
                    t && !this.listenerAdded && (this.$refs.element.addEventListener(ds["b"], this.onTransitionEnd, !1),
                    this.listenerAdded = !0)
                },
                onTransitionEnd({target: t, propertyName: e}) {
                    if (t !== this.$refs.element)
                        return;
                    const s = e.includes(ii.revertMiddle) && this.ifAnimateRevert
                      , i = e.includes(ii.transitionMiddle) && this.ifAnimateClear;
                    s || i ? this.onWorkspaceAnimationMiddle() : this.onWorkspaceAnimationEnd()
                },
                onWorkspaceAnimationMiddle() {
                    g["a"].emit("ANIMATION_WORKSPACE_MIDDLE")
                },
                onWorkspaceAnimationEnd() {
                    this.$store.dispatch("animationReset"),
                    this.$refs.element.removeEventListener(ds["b"], this.onTransitionEnd),
                    this.listenerAdded = !1
                }
            }
        })
          , ai = ni
          , ri = Object(Rs["a"])(ai, vs, ws, !1, null, null, null)
          , oi = ri.exports
          , ci = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                ref: "element",
                staticClass: "side",
                attrs: {
                    id: "side"
                }
            }, [t.isSortingEnabled ? s("div", [s("button", {
                class: {
                    "js-active": "alphabet" === t.sorting
                },
                on: {
                    click: function(e) {
                        return t.changeSorting("alphabet")
                    }
                }
            }, [t._v(" A to Z ")]), s("button", {
                class: {
                    "js-active": "timestamp" === t.sorting
                },
                on: {
                    click: function(e) {
                        return t.changeSorting("timestamp")
                    }
                }
            }, [t._v(" Newest to oldest ")])]) : t._e(), s("div", {
                staticClass: "outer-library",
                attrs: {
                    id: t.OUTER_LIBRARY_ID
                },
                on: {
                    longpress: t.onLongpress
                }
            }, [s("LibraryScroller", {
                ref: "scroller",
                attrs: {
                    elements: t.libraryCurrentElements
                }
            })], 1)])
        }
          , li = []
          , hi = (s("498a"),
        s("4d63"),
        s("25f0"),
        s("b047"))
          , di = s.n(hi)
          , ui = s("623d");
        const mi = t=>{
            const e = 200
              , s = t.getBoundingClientRect()
              , i = Object(o["g"])(t)
              , n = parseInt(i.width, 10) + e
              , a = parseInt(i.height, 10) + 2 * e;
            return {
                width: n,
                height: a,
                x: s.left,
                y: s.top - e
            }
        }
          , pi = t=>{
            const e = Object(o["g"])(t)
              , s = parseInt(e.width, 10) || 0
              , i = parseInt(e.height, 10) || 0
              , n = parseInt(e.paddingLeft, 10) || 0;
            return {
                width: s,
                height: i,
                margin: n
            }
        }
        ;
        var gi = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return t.hasElements ? s("div", {
                staticClass: "library",
                style: t.styles,
                attrs: {
                    id: "library"
                }
            }, [t.shouldUseLiteBox ? t._l(t.elementsList, (function(e, i) {
                return s("LibraryBoxLite", {
                    key: i,
                    style: t.getStyle(i),
                    attrs: {
                        element: e
                    }
                })
            }
            )) : t._l(t.elementsList, (function(e, i) {
                return s("LibraryBox", {
                    key: i,
                    style: t.getStyle(i),
                    attrs: {
                        element: e
                    }
                })
            }
            ))], 2) : t._e()
        }
          , Ei = []
          , fi = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                ref: "element",
                staticClass: "element",
                class: t.classes,
                on: {
                    click: t.onClick,
                    touchstart: t.onClick
                }
            }, [s("img", {
                ref: "icon",
                attrs: {
                    src: t.iconUrl,
                    alt: t.name,
                    draggable: "false",
                    decoding: "async"
                }
            }), s("div", {
                staticClass: "elementName"
            }, [t._v(" " + t._s(t.name) + " ")])])
        }
          , bi = []
          , yi = fs["a"].extend({
            name: "library-box",
            props: {
                element: Object
            },
            data: ()=>({
                animated: !1
            }),
            computed: Object(E["a"])(Object(E["a"])({}, Object(r["b"])(["elementIsExhausted", "isExhaustedForIdActive"])), {}, {
                iconUrl() {
                    return Object(Ps["a"])(this.element.id)
                },
                name() {
                    return this.element.name
                },
                isExhausted() {
                    return !!this.elementIsExhausted(this.element.id)
                },
                ifAnimateExhausted() {
                    return this.isExhausted && this.isExhaustedForIdActive(this.element.id)
                },
                classes() {
                    return {
                        "js-exhausted": this.isExhausted,
                        "js-animate": this.ifAnimateExhausted
                    }
                }
            }),
            mounted() {
                this.initDraggable()
            },
            beforeDestroy() {
                this.draggable && (this.draggable.destroy(),
                this.draggable = null)
            },
            methods: {
                initDraggable() {
                    this.draggable = new Ks(this.$refs.element,{
                        handle: [this.$refs.icon],
                        type: Is["c"],
                        dragDistance: Is["b"]
                    }),
                    this.startedDragId = null,
                    this.draggable.onDistanceDragged = (...t)=>{
                        this.isExhausted || Ft.onLibraryDistanceDragged(this.startedDragId, ...t)
                    }
                    ,
                    this.draggable.onLibraryDragStart = ()=>{
                        this.startedDragId = this.element.id
                    }
                },
                onClick() {
                    this.isExhausted && Qt.startExhausted(this.element.id)
                }
            }
        })
          , vi = yi
          , wi = Object(Rs["a"])(vi, fi, bi, !1, null, null, null)
          , Ii = wi.exports
          , Ai = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                ref: "element",
                staticClass: "element"
            }, [s("img", {
                ref: "icon",
                attrs: {
                    src: t.iconUrl,
                    alt: t.name,
                    draggable: "false",
                    decoding: "async"
                }
            }), s("div", {
                staticClass: "elementName"
            }, [t._v(" " + t._s(t.name) + " ")])])
        }
          , Ti = []
          , Si = fs["a"].extend({
            name: "library-box-lite",
            props: {
                element: Object
            },
            computed: {
                iconUrl() {
                    return Object(Ps["a"])(this.element.id)
                },
                name() {
                    return this.element.name
                }
            },
            mounted() {
                this.initDraggable()
            },
            beforeDestroy() {
                this.draggable && (this.draggable.destroy(),
                this.draggable = null)
            },
            methods: {
                initDraggable() {
                    this.draggable = new Ks(this.$refs.element,{
                        handle: [this.$refs.icon],
                        type: Is["c"],
                        dragDistance: Is["b"]
                    }),
                    this.draggable && (this.startedDragId = null,
                    this.draggable.onDistanceDragged = (...t)=>{
                        Ft.onLibraryDistanceDragged(this.startedDragId, ...t)
                    }
                    ,
                    this.draggable.onLibraryDragStart = ()=>{
                        this.startedDragId = this.element.id
                    }
                    )
                }
            }
        })
          , _i = Si
          , Oi = Object(Rs["a"])(_i, Ai, Ti, !1, null, null, null)
          , xi = Oi.exports;
        const Pi = 5
          , Ci = 15
          , Li = 10;
        var Ri = fs["a"].extend({
            name: "library-scroller",
            props: {
                elements: Array
            },
            components: {
                LibraryBox: Ii,
                LibraryBoxLite: xi
            },
            data: ()=>({
                starting: 0,
                reloading: !1
            }),
            computed: Object(E["a"])(Object(E["a"])({}, Object(r["b"])({
                libraryElementsIds: "library",
                hasElements: "hasLibrary",
                isSearchActive: "isSearchActive",
                searchQuery: "searchQuery",
                inArtMode: "isArtModeEnabled",
                boxDimensions: "libraryBoxDimensions"
            })), {}, {
                shouldUseLiteBox() {
                    return this.inArtMode
                },
                elementsCount() {
                    return this.elements.length
                },
                elementsList() {
                    if (this.elementsCount < this.KEEP)
                        return this.elements;
                    const t = this.startIndex
                      , e = (this.KEEP - this.startIndex) % this.KEEP
                      , s = this.elements.slice(t, t + this.KEEP)
                      , i = s.slice(e, s.length);
                    return s.splice(e, s.length),
                    s.unshift(...i),
                    s
                },
                elementHeight() {
                    return this.boxDimensions.height
                },
                elementOuterHeight() {
                    return this.elementHeight + this.boxDimensions.margin
                },
                totalHeight() {
                    const t = Object(o["n"])() ? 5 : 0
                      , e = this.elementsCount * this.elementOuterHeight;
                    return t + Li + e
                },
                styles() {
                    return {
                        opacity: this.reloading ? 0 : 1,
                        height: `${this.totalHeight}px`,
                        contain: "layout"
                    }
                },
                scrollerHeight() {
                    const t = this.$store.getters.droppableStaticById(Is["e"]);
                    return t.dimensions.height
                },
                startIndex() {
                    let t = this.starting - Pi;
                    return t + this.KEEP > this.elementsCount && (t = this.elementsCount - this.KEEP),
                    Math.max(t, 0)
                },
                KEEP() {
                    const t = Math.ceil(this.scrollerHeight / this.elementHeight) + 6;
                    return Math.max(Ci, t)
                }
            }),
            mounted() {
                this.initScroll(),
                this.lastY = 0,
                this._startIndex = 0,
                this._KEEP = this.KEEP,
                this._elementOuterHeight = this.elementOuterHeight
            },
            watch: {
                searchQuery(t, e) {
                    t !== e && null !== t && t.length && this.$nextTick(()=>{
                        this.setStarting(0),
                        this.$nextTick(()=>Ht["a"].scrollTop(0))
                    }
                    )
                },
                isSearchActive(t) {
                    t || (this.reloading = !0,
                    this.$nextTick(()=>window.setTimeout(()=>{
                        this.reloading = !1
                    }
                    , 50)))
                },
                async inArtMode(t) {
                    t && (await Ht["a"].onInit(),
                    Ht["a"].handler && Ht["a"].handler.refresh())
                },
                startIndex(t) {
                    this._startIndex = t
                },
                KEEP(t) {
                    this._KEEP = t
                },
                elementOuterHeight(t) {
                    this._elementOuterHeight = t
                }
            },
            methods: {
                async initScroll() {
                    await Ht["a"].onInit(),
                    await Ht["a"].handler.reinitialize(),
                    this.handleScroll = this.handleScroll.bind(this),
                    Ht["a"].handler.onScroll(t=>{
                        this.lastY = t.y,
                        window.requestAnimationFrame(()=>this.handleScroll())
                    }
                    )
                },
                handleScroll(t=this.lastY) {
                    const e = Math.max(0, Math.floor(t / this.elementOuterHeight));
                    this.starting !== e && this.setStarting(e)
                },
                setStarting(t) {
                    this.starting = t
                },
                getKey(t) {
                    const e = this._startIndex % this._KEEP;
                    return Math.abs(e - t - this._KEEP) % this._KEEP
                },
                getStyle(t) {
                    const e = this.getKey(t)
                      , s = Li + (this._startIndex + e) * this._elementOuterHeight;
                    return {
                        transform: `translate3d(0, ${s}px, 0)`
                    }
                }
            }
        })
          , Di = Ri
          , Ni = Object(Rs["a"])(Di, gi, Ei, !1, null, null, null)
          , ki = Ni.exports;
        const Mi = /[|\\{}()[\]^$+*?.]/g;
        var ji = fs["a"].extend({
            name: "library",
            components: {
                LibraryScroller: ki
            },
            data: ()=>({
                OUTER_LIBRARY_ID: ui["b"],
                outerHeight: 0,
                elementOuterHeight: 0
            }),
            computed: Object(E["a"])(Object(E["a"])({}, Object(r["b"])({
                libraryElementsIds: "library",
                hasElements: "hasLibrary",
                elementById: "elementById",
                isSearchActive: "isSearchActive",
                searchQuery: "searchQuery",
                hasEmptyLibrary: "hasEmptyLibrary",
                sorting: "librarySortBy"
            })), {}, {
                elements() {
                    return this.libraryElementsIds.map(t=>this.elementById(t)).filter(M)
                },
                filteredByQuery() {
                    if (!this.searchQuery)
                        return [];
                    let t = this.searchQuery.toLowerCase().trim();
                    t = t.replace(Mi, "");
                    const e = new RegExp(t);
                    return this.elements.filter(({name: t})=>e.test(t.toLowerCase()))
                },
                libraryCurrentElements() {
                    return this.isSearchActive && this.searchQuery && this.searchQuery.length ? this.filteredByQuery : this.elements
                },
                elementsCount() {
                    return this.libraryCurrentElements.length
                },
                elementHeight() {
                    const t = this.$store.getters.libraryBoxDimensions;
                    return t.height + t.margin
                },
                isSortingEnabled() {
                    return w["c"]
                }
            }),
            mounted() {
                this.checkUnderLibrary = di()(this.checkUnderLibrary.bind(this), w["a"]),
                this.updateDroppableData(),
                g["a"].onResize(async()=>{
                    await Object(o["c"])(100),
                    this.onResize()
                }
                ),
                this.libraryRendered().then(()=>this.onRendered()),
                this.onEmptyLibrary().then(()=>this.onEmpty()),
                this.initScrollRefresher()
            },
            watch: {
                searchQuery(t, e) {
                    t === e || t && !t.length || this.refreshScroll()
                }
            },
            methods: {
                onRendered() {
                    this.updateLibraryBoxDimensions(),
                    g["a"].emit("LIBRARY_RENDERED"),
                    this.$store.dispatch("libraryRendered")
                },
                onEmpty() {
                    g["a"].emit("LIBRARY_EMPTY"),
                    this.$store.dispatch("libraryRendered")
                },
                onLongpress({target: t}) {
                    if (!t.parentNode)
                        return;
                    const e = t.parentNode.__vue__;
                    if (!e || !e.element)
                        return;
                    const s = e.element.id;
                    g["a"].emit("ENCYCLOPEDIA_SHOW_ITEM", s)
                },
                onResize() {
                    this.updateDroppableData(),
                    this.updateLibraryBoxDimensions();
                    const t = this.updateHeights();
                    t && this.refreshScroll(),
                    this.checkUnderLibrary()
                },
                updateDroppableData() {
                    const t = mi(this.$refs.element);
                    this.$store.commit("STATIC_DROPPABLE_UPDATE", Object(E["a"])({
                        id: Is["e"]
                    }, t))
                },
                updateLibraryBoxDimensions() {
                    const t = this.$refs.scroller.$children;
                    if (!t.length)
                        return;
                    const e = t[0].$el.querySelector("img");
                    e && this.$store.dispatch("dimensionsLibraryBox", pi(e))
                },
                updateHeights() {
                    const t = this.$refs.scroller.$children;
                    if (Ht["a"].isNative || !this.$refs.element.firstChild)
                        return !1;
                    if (t.length < 2)
                        return !1;
                    const e = t[1].$el
                      , s = e.offsetHeight
                      , i = (Object(o["e"])(e) - s) / 2;
                    return this.elementOuterHeight = s + i,
                    this.outerHeight = this.$refs.element.firstChild.offsetHeight,
                    !0
                },
                checkUnderLibrary() {
                    this.$store.dispatch("workspaceRemoveUnderLibrary")
                },
                changeSorting(t) {
                    this.$store.dispatch("libraryChangeSorting", t)
                },
                async initScrollRefresher() {
                    await Ht["a"].onInit(),
                    Ht["a"].isNative || (this.updateHeights(),
                    this.$watch(()=>this.libraryCurrentElements, ()=>this.refreshScroll()))
                },
                refreshScroll() {
                    const t = this.elementsCount;
                    let e = this.outerHeight;
                    e < t * this.elementHeight && (e = t * this.elementHeight + 20),
                    Ht["a"].handler && Ht["a"].handler.refresh && Ht["a"].handler.refresh(e)
                },
                libraryRendered() {
                    return new Promise(t=>{
                        const e = this.$watch(()=>this.hasElements, s=>{
                            s && (this.$nextTick(()=>window.setTimeout(t, 30)),
                            e())
                        }
                        )
                    }
                    )
                },
                onEmptyLibrary() {
                    return new Promise(t=>{
                        const e = this.$watch(()=>this.hasEmptyLibrary, s=>{
                            s && (t(),
                            e())
                        }
                        )
                    }
                    )
                }
            }
        })
          , $i = ji
          , Hi = Object(Rs["a"])($i, ci, li, !1, null, null, null)
          , Bi = Hi.exports
          , Fi = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("label", {
                ref: "container",
                attrs: {
                    for: "search-input",
                    id: t.SEARCH_BAR_ID
                }
            }, [s("input", {
                ref: "input",
                staticClass: "search-bar",
                class: t.classes,
                attrs: {
                    type: "text",
                    id: "search-input",
                    maxlength: "20",
                    tabindex: t.tabIndex
                },
                on: {
                    blur: t.hide,
                    keyup: t.onKeyUp
                }
            }), s("div", {
                staticClass: "search icon",
                class: t.iconClasses,
                on: {
                    click: t.toggle
                }
            }, [t.isActive ? s("IconClose", {
                staticClass: "close-search-icon"
            }) : s("IconSearch")], 1)])
        }
          , Gi = []
          , Ui = s("06c5")
          , Wi = s("cd57")
          , Yi = s("15fd");
        s("cca6");
        const Ki = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var zi = {
            functional: !0,
            render(t, e) {
                const {_c: s, _v: i, data: n, children: a=[]} = e
                  , {class: r, staticClass: o, style: c, staticStyle: l, attrs: h={}} = n
                  , d = Object(Yi["a"])(n, Ki);
                return s("svg", Object(E["a"])({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        id: "icon-search",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, h)
                }, d), a.concat([s("path", {
                    attrs: {
                        d: "M26.3 10.08a16.2 16.2 0 11-11.47 4.75 16.1 16.1 0 0111.46-4.75m0-3a19.2 19.2 0 1013.54 5.62A19.15 19.15 0 0026.3 7.08z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M26.3 3a23.3 23.3 0 0116.45 39.75A23.3 23.3 0 019.82 9.82 23.13 23.13 0 0126.3 3m0-3a26.3 26.3 0 1018.57 7.7A26.2 26.2 0 0026.3 0zm25.85 48.53l8.14 8.14a2.5 2.5 0 010 3.54l-.1.1a2.5 2.5 0 01-3.57 0l-8.13-8.1 3.63-3.62m0-3.84a1 1 0 00-.68.3L45 51.47a1 1 0 000 1.35l9.6 9.6a5.5 5.5 0 007.77 0l.1-.1a5.5 5.5 0 000-7.78L52.82 45a1 1 0 00-.68-.28z"
                    }
                }), s("path", {
                    staticClass: "svg-n svg-m",
                    attrs: {
                        d: "M48.93 48.93l-4.3-4.3"
                    }
                })]))
            }
        };
        const Vi = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var Xi = {
            functional: !0,
            render(t, e) {
                const {_c: s, _v: i, data: n, children: a=[]} = e
                  , {class: r, staticClass: o, style: c, staticStyle: l, attrs: h={}} = n
                  , d = Object(Yi["a"])(n, Vi);
                return s("svg", Object(E["a"])({
                    class: ["close-icon", r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, h)
                }, d), a.concat([s("path", {
                    staticClass: "cls-1",
                    attrs: {
                        d: "M5 59L59 5"
                    }
                }), s("path", {
                    staticClass: "cls-1",
                    attrs: {
                        d: "M5 5l54 54"
                    }
                })]))
            }
        }
          , qi = fs["a"].extend({
            name: "search-bar",
            components: {
                IconSearch: zi,
                IconClose: Xi
            },
            computed: Object(E["a"])(Object(E["a"])({}, Object(r["b"])({
                isActive: "isSearchActive",
                query: "searchQuery",
                isPopupActive: "isPopupActive",
                isTutorialFinished: "areTutorialsFinished",
                isAnimationActive: "isAnimationActive",
                isArtModeEnabled: "isArtModeEnabled"
            })), {}, {
                tabIndex() {
                    return this.isPopupActive ? -1 : 0
                },
                classes() {
                    return {
                        "js-hidden": !this.isActive,
                        "js-visible": this.isActive
                    }
                },
                iconClasses() {
                    return {
                        "js-hidden": !this.isTutorialFinished
                    }
                },
                isCompletionAnimationActive() {
                    return this.isAnimationActive(As["d"])
                },
                SEARCH_BAR_ID() {
                    return Wi["b"]
                }
            }),
            mounted() {
                this.blurHackForIOS = this.blurHackForIOS.bind(this),
                this.initListener()
            },
            watch: {
                isCompletionAnimationActive(t) {
                    t && this.hide()
                },
                isActive(t) {
                    t || this.onHide()
                }
            },
            methods: {
                initListener() {
                    g["a"].on("KEY_DOWN", t=>{
                        if (this.isActive || this.isPopupActive)
                            return;
                        const e = document.activeElement;
                        e && e !== document.body && "INPUT" !== e.tagName || t.keyCode < Ui["a"] || t.keyCode > Ui["f"] || t.ctrlKey || t.metaKey || this.show()
                    }
                    )
                },
                getValue() {
                    return this.$refs.input.value
                },
                onKeyUp(t) {
                    const e = this.getValue();
                    if (this.isActive && t.keyCode === Ui["d"])
                        return t.preventDefault(),
                        void this.hide();
                    this.query !== e && this.$store.dispatch("search", e)
                },
                toggle() {
                    this.isActive ? this.hide() : this.show(!0)
                },
                show(t=!1) {
                    const e = this.isTutorialFinished && !this.isCompletionAnimationActive;
                    e && (this.$store.dispatch("searchShow"),
                    this.$refs.input.focus(),
                    Ht["a"].savePosition(),
                    t && this.emitSound(),
                    Object(o["p"])() && Object(o["n"])() && document.addEventListener("touchstart", this.blurHackForIOS))
                },
                emitSound() {
                    g["a"].emit("BUTTON_CLICK")
                },
                hide() {
                    window.setTimeout(()=>this.$store.dispatch("searchHide"), 50)
                },
                onHide() {
                    this.$refs.input.blur(),
                    this.$refs.input.value = "",
                    Ht["a"].applyPosition(),
                    Object(o["p"])() && Object(o["n"])() && document.removeEventListener("touchstart", this.blurHackForIOS)
                },
                blurHackForIOS(t) {
                    t.target && (Object(o["m"])(this.$refs.container, t.target) || (this.isArtModeEnabled ? window.setTimeout(()=>this.$refs.input.blur(), 100) : this.$refs.input.blur()))
                }
            }
        })
          , Qi = qi
          , Ji = Object(Rs["a"])(Qi, Fi, Gi, !1, null, null, null)
          , Zi = Ji.exports
          , tn = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "icons"
            }, [s("MenuButton", {
                staticClass: "no-highlight",
                attrs: {
                    active: !t.workspaceRevertable,
                    alwaysShow: !0,
                    alwaysAnimate: !0,
                    primaryText: "clean up",
                    secondaryText: "revert"
                },
                on: {
                    click: t.onClearRevert
                }
            }, [s("IconClear", {
                staticClass: "menu-button-icon primary",
                attrs: {
                    slot: "primary"
                },
                slot: "primary"
            }), s("IconRevert", {
                staticClass: "menu-button-icon secondary",
                attrs: {
                    slot: "secondary"
                },
                slot: "secondary"
            })], 1), s("MenuButton", {
                attrs: {
                    active: !t.isSettingsActive,
                    primaryText: "settings",
                    secondaryText: "close"
                },
                on: {
                    click: t.toggleSettings
                }
            }, [s("IconSettings", {
                staticClass: "menu-button-icon primary",
                attrs: {
                    slot: "primary"
                },
                slot: "primary"
            }), s("IconClose", {
                staticClass: "menu-button-icon secondary",
                attrs: {
                    slot: "secondary"
                },
                slot: "secondary"
            })], 1), s("MenuButton", {
                staticClass: "tight",
                attrs: {
                    active: !t.isEncyclopediaActive,
                    primaryText: "encyclopedia",
                    secondaryText: "close"
                },
                on: {
                    click: t.toggleEncyclopedia
                }
            }, [s("div", {
                attrs: {
                    slot: "additional"
                },
                slot: "additional"
            }, [s("div", {
                staticClass: "badge-container"
            }, [s("span", {
                staticClass: "badge",
                class: {
                    "js-hide": 0 === t.newInEncyclopediaCount
                }
            }, [t._v(" " + t._s(t.newInEncyclopediaCount || "") + " ")])]), s("AnimationFinalEncyclopedia")], 1), s("IconEncyclopedia", {
                staticClass: "menu-button-icon primary",
                attrs: {
                    slot: "primary"
                },
                slot: "primary"
            }), s("IconClose", {
                staticClass: "menu-button-icon secondary",
                attrs: {
                    slot: "secondary"
                },
                slot: "secondary"
            })], 1), s("a", {
                staticClass: "menu-button primary js-in",
                attrs: {
                    href: t.HINTS_URL,
                    target: "_blank",
                    title: "Little Alchemy 2 Official Cheats",
                    rel: "noopener"
                },
                on: {
                    click: t.onHintsClick
                }
            }, [s("div", {
                staticClass: "menu-button-icon-container"
            }, [s("IconHints", {
                staticClass: "menu-button-icon primary"
            })], 1), t._m(0)])], 1)
        }
          , en = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "menu-button-label-container"
            }, [s("div", {
                staticClass: "menu-button-label primary"
            }, [t._v("hints")])])
        }
        ]
          , sn = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "materialize-container"
            }, [s("div", {
                directives: [{
                    name: "animation-end",
                    rawName: "v-animation-end",
                    value: t.onAnimation,
                    expression: "onAnimation"
                }],
                staticClass: "materialize",
                class: t.classes,
                attrs: {
                    id: t.id
                }
            }, [s("div", {
                staticClass: "core"
            }), s("div", {
                staticClass: "core2"
            })])])
        }
          , nn = [];
        const an = Ts["a"][As["b"]];
        var rn = fs["a"].extend({
            name: "animation-final-encyclopedia",
            data: ()=>({
                isActive: !1
            }),
            computed: {
                id() {
                    return an.encyclopediaId
                },
                classes() {
                    return {
                        "js-active": this.isActive
                    }
                }
            },
            mounted() {
                g["a"].on("ANIMATION_FINAL_SINGLE_END", ()=>this.onElementAnimationEnd())
            },
            methods: {
                onElementAnimationEnd() {
                    this.isActive = !0
                },
                onAnimation({animationName: t}) {
                    t === an.encyclopedia && (this.isActive = !1)
                }
            }
        })
          , on = rn
          , cn = Object(Rs["a"])(on, sn, nn, !1, null, null, null)
          , ln = cn.exports;
        const hn = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var dn = {
            functional: !0,
            render(t, e) {
                const {_c: s, _v: i, data: n, children: a=[]} = e
                  , {class: r, staticClass: o, style: c, staticStyle: l, attrs: h={}} = n
                  , d = Object(Yi["a"])(n, hn);
                return s("svg", Object(E["a"])({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        id: "icon-clear",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, h)
                }, d), a.concat([s("g", [s("path", {
                    attrs: {
                        d: "M23.13 18.13a3.55 3.55 0 012.5 1L44.53 38a3.53 3.53 0 01.53 4.27L29 58.3 5.3 34.6l16-16a3.53 3.53 0 011.8-.46m0-3a6.44 6.44 0 00-3.7 1.12L1.07 34.62 29 62.52l18.37-18.35a6.5 6.5 0 00-.72-8.3L27.75 17a6.56 6.56 0 00-4.62-1.85z"
                    }
                }), s("path", {
                    staticClass: "svg-n svg-m",
                    attrs: {
                        d: "M46.36 44.6L19 17.3M8.76 41.2l17.1-17.08M20.38 52.8l7.52-7.5"
                    }
                }), s("path", {
                    attrs: {
                        d: "M58.86 3.74a1.1 1.1 0 01.76.28 1.08 1.08 0 010 1.52L38 27.12l-1.5-1.52L58.1 4a1.1 1.1 0 01.77-.28m0-3A4.08 4.08 0 0056 1.9L32.25 25.6 38 31.36l23.75-23.7a4 4 0 00-2.9-6.92z"
                    }
                })]), s("circle", {
                    staticClass: "svg-n svg-m",
                    attrs: {
                        cx: "50",
                        cy: "56",
                        r: "2.83"
                    }
                })]))
            }
        };
        const un = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var mn = {
            functional: !0,
            render(t, e) {
                const {_c: s, _v: i, data: n, children: a=[]} = e
                  , {class: r, staticClass: o, style: c, staticStyle: l, attrs: h={}} = n
                  , d = Object(Yi["a"])(n, un);
                return s("svg", Object(E["a"])({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        id: "icon-encyclopedia",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, h)
                }, d), a.concat([s("path", {
                    attrs: {
                        d: "M55.86 7.12a3 3 0 002.54 1.4H61v38.7h-9.77l-11.83-.1h-2.8a3 3 0 00-2.68 1.66 2.13 2.13 0 01-1 1h-.08a2.12 2.12 0 01-1 .25 2.55 2.55 0 01-2.22-1.33A3 3 0 0027 47.12H3V8.92h2.1a3 3 0 002.75-1.8h16.4a5.73 5.73 0 014.83 3 3 3 0 002.62 1.54A3 3 0 0034.34 10a5.35 5.35 0 014.76-2.88h16.76m1.54-3H39.1a8.36 8.36 0 00-7.4 4.5 8.76 8.76 0 00-7.4-4.5H6.1a.94.94 0 00-1 1v.8H1a.94.94 0 00-1 1v42.2a.94.94 0 001 1h26A5.56 5.56 0 0031.86 53a5.4 5.4 0 004.74-2.9h2.8l11.8.1H63a.94.94 0 001-1V6.5a1 1 0 00-1-1h-4.6v-.4a.94.94 0 00-1-1z"
                    }
                }), s("path", {
                    staticClass: "svg-b svg-m bookmark",
                    attrs: {
                        d: "M54.1 33.62v25.2a.87.87 0 01-.9 1 1.85 1.85 0 01-.7-.2l-5.2-4.5-5.3 4.5a1 1 0 01-1.4-.1.9.9 0 01-.3-.7v-25.2z"
                    }
                }), s("path", {
                    staticClass: "svg-b",
                    attrs: {
                        d: "M31.7 45.56A8 8 0 0025.9 43H6.5V5.62h17.8a7.2 7.2 0 016.1 3.73l1.32 2.4L33 9.33a6.83 6.83 0 016.1-3.7h17.8V43H37.5a8 8 0 00-5.8 2.56z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M55.4 7.12v34.4H37.5a9.5 9.5 0 00-5.8 2 9.5 9.5 0 00-5.8-2H8V7.12h16.25a5.73 5.73 0 014.83 3l2.67 4.8 2.6-4.92a5.35 5.35 0 014.75-2.88h16.3m2-3H39.1a8.36 8.36 0 00-7.4 4.5 8.76 8.76 0 00-7.4-4.5H6a.94.94 0 00-1 1v38.4a.94.94 0 001 1h19.9a6.5 6.5 0 015 2.4.55.55 0 00.5.3h.6a.85.85 0 00.5-.3 6.5 6.5 0 015-2.4h19.9a.94.94 0 001-1V5.12a.94.94 0 00-1-1z"
                    }
                }), s("path", {
                    staticClass: "svg-n svg-j",
                    attrs: {
                        d: "M31.7 9.5v36"
                    }
                }), s("g", {
                    staticClass: "lines"
                }, [s("path", {
                    attrs: {
                        d: "M25.91 14H10.33a1 1 0 010-2h15.58a1 1 0 010 2z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M25.91 21.54H10.33a1 1 0 010-2h15.58a1 1 0 010 2z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M25.91 29.11H10.33a1 1 0 010-2h15.58a1 1 0 010 2z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M25.91 36.69H10.33a1 1 0 010-2h15.58a1 1 0 010 2z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M52.92 14H37.34a1 1 0 010-2h15.58a1 1 0 010 2z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M52.92 21.54H37.34a1 1 0 010-2h15.58a1 1 0 010 2z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M52.92 29.11H37.34a1 1 0 010-2h15.58a1 1 0 010 2z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M52.92 36.69H37.34a1 1 0 010-2h15.58a1 1 0 010 2z"
                    }
                })])]))
            }
        };
        const pn = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var gn = {
            functional: !0,
            render(t, e) {
                const {_c: s, _v: i, data: n, children: a=[]} = e
                  , {class: r, staticClass: o, style: c, staticStyle: l, attrs: h={}} = n
                  , d = Object(Yi["a"])(n, pn);
                return s("svg", Object(E["a"])({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        id: "icon-hints",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, h)
                }, d), a.concat([s("g", {
                    staticClass: "lines"
                }, [s("path", {
                    staticClass: "line-r",
                    attrs: {
                        d: "M61.64 31.9h-4.08a1.33 1.33 0 110-2.67h4.09a1.33 1.33 0 110 2.67z"
                    }
                }), s("path", {
                    staticClass: "line-l",
                    attrs: {
                        d: "M6.44 31.9H2.36a1.33 1.33 0 010-2.67h4.08a1.33 1.33 0 010 2.67z"
                    }
                }), s("path", {
                    staticClass: "line-rt",
                    attrs: {
                        d: "M50.06 14.1a1.33 1.33 0 01-.94-2.28L52 9a1.33 1.33 0 111.87 1.9L51 13.72a1.33 1.33 0 01-.94.38z"
                    }
                }), s("path", {
                    staticClass: "line-lb",
                    attrs: {
                        d: "M11 52.56a1.33 1.33 0 01-.94-2.28L13 47.41a1.33 1.33 0 011.87 1.9L12 52.18a1.33 1.33 0 01-1 .38z"
                    }
                }), s("path", {
                    staticClass: "line-t",
                    attrs: {
                        d: "M32 6.74a1.33 1.33 0 01-1.33-1.33V1.33a1.33 1.33 0 112.67 0v4.08A1.33 1.33 0 0132 6.74z"
                    }
                }), s("path", {
                    staticClass: "line-lt",
                    attrs: {
                        d: "M13.94 14.1a1.33 1.33 0 01-.94-.38l-2.9-2.87A1.33 1.33 0 1112 9l2.91 2.86a1.33 1.33 0 01-.94 2.28z"
                    }
                }), s("path", {
                    staticClass: "line-rb",
                    attrs: {
                        d: "M53 52.56a1.33 1.33 0 01-.94-.38l-2.91-2.86A1.33 1.33 0 1151 47.41l2.91 2.86a1.33 1.33 0 01-.91 2.29z"
                    }
                })]), s("path", {
                    attrs: {
                        d: "M32 50.81a20.12 20.12 0 01-20.25-19.94 20.25 20.25 0 0140.5 0A20.12 20.12 0 0132 50.81z"
                    }
                }), s("path", {
                    staticClass: "svg-b",
                    attrs: {
                        d: "M32 13.59a17.45 17.45 0 00-17.58 17.28 17.58 17.58 0 0035.16 0A17.45 17.45 0 0032 13.59z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M38.59 57H25.41a1.33 1.33 0 110-2.67h13.18a1.33 1.33 0 110 2.67z"
                    }
                }), s("path", {
                    attrs: {
                        d: "M35.43 64h-6.86a1.33 1.33 0 010-2.67h6.87a1.33 1.33 0 010 2.67z"
                    }
                })]))
            }
        };
        const En = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var fn = {
            functional: !0,
            render(t, e) {
                const {_c: s, _v: i, data: n, children: a=[]} = e
                  , {class: r, staticClass: o, style: c, staticStyle: l, attrs: h={}} = n
                  , d = Object(Yi["a"])(n, En);
                return s("svg", Object(E["a"])({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        id: "icon-revert",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, h)
                }, d), a.concat([s("path", {
                    staticClass: "svg-n svg-c svg-j",
                    attrs: {
                        d: "M36.4 53.5h9.9a15.6 15.6 0 100-31.22h-44"
                    }
                }), s("path", {
                    staticClass: "svg-n svg-c svg-j",
                    attrs: {
                        d: "M2.3 22.3l11.8-11.8"
                    }
                }), s("path", {
                    staticClass: "svg-n svg-c svg-j",
                    attrs: {
                        d: "M2.1 22.3l11.8 11.8"
                    }
                })]))
            }
        };
        const bn = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var yn = {
            functional: !0,
            render(t, e) {
                const {_c: s, _v: i, data: n, children: a=[]} = e
                  , {class: r, staticClass: o, style: c, staticStyle: l, attrs: h={}} = n
                  , d = Object(Yi["a"])(n, bn);
                return s("svg", Object(E["a"])({
                    class: [r, o],
                    style: [c, l],
                    attrs: Object.assign({
                        id: "icon-settings",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, h)
                }, d), a.concat([s("path", {
                    staticClass: "svg-n svg-m svg-c",
                    attrs: {
                        d: "M63 15H1m62 17H1m62 17H1"
                    }
                }), s("ellipse", {
                    staticClass: "svg-b svg-c",
                    attrs: {
                        cx: "14",
                        cy: "15",
                        rx: "6",
                        ry: "6.06"
                    }
                }), s("ellipse", {
                    staticClass: "svg-b svg-c",
                    attrs: {
                        cx: "32",
                        cy: "32",
                        rx: "6",
                        ry: "6.06"
                    }
                }), s("ellipse", {
                    staticClass: "svg-b svg-c",
                    attrs: {
                        cx: "50",
                        cy: "49",
                        rx: "6",
                        ry: "6.06"
                    }
                })]))
            }
        }
          , vn = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "menu-button",
                class: t.classes,
                on: {
                    click: t.onClick
                }
            }, [t._t("additional"), s("div", {
                staticClass: "menu-button-icon-container"
            }, [t._t("primary"), t._t("secondary")], 2), s("div", {
                staticClass: "menu-button-label-container"
            }, [s("div", {
                staticClass: "menu-button-label primary"
            }, [t._v(t._s(t.primaryText))]), s("div", {
                staticClass: "menu-button-label secondary"
            }, [t._v(t._s(t.secondaryText))])])], 2)
        }
          , wn = [];
        const In = 500;
        var An = fs["a"].extend({
            name: "menu-button",
            props: {
                active: {
                    type: Boolean,
                    required: !1,
                    default: !0
                },
                primaryText: {
                    type: String,
                    required: !0
                },
                secondaryText: {
                    type: String,
                    required: !1,
                    default: ""
                },
                alwaysShow: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                alwaysAnimate: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            data: ()=>({
                animating: !1
            }),
            computed: {
                classes() {
                    const t = this.alwaysAnimate ? this.animating : this.isPrimary;
                    return {
                        primary: this.isPrimary || this.alwaysAnimate && this.animating,
                        secondary: !this.active && this.hasSecondary && (!this.alwaysAnimate || !this.animating),
                        back: !this.alwaysShow && this.hasSecondary,
                        "js-in": t
                    }
                },
                isPrimary() {
                    return this.active || !this.hasSecondary
                },
                hasSecondary() {
                    return !!this.secondaryText.length
                }
            },
            methods: {
                onClick() {
                    this.click(),
                    this.handleAnimation()
                },
                click() {
                    this.$emit("click"),
                    this.emitSound()
                },
                async handleAnimation() {
                    this.alwaysAnimate && (this.animating = !0,
                    await Object(o["c"])(In),
                    this.onAnimationEnd())
                },
                onAnimationEnd() {
                    this.animating = !1
                },
                emitSound() {
                    g["a"].emit("BUTTON_CLICK")
                }
            }
        })
          , Tn = An
          , Sn = Object(Rs["a"])(Tn, vn, wn, !1, null, null, null)
          , _n = Sn.exports
          , On = fs["a"].extend({
            name: "menu-custom",
            components: {
                AnimationFinalEncyclopedia: ln,
                MenuButton: _n,
                IconClear: dn,
                IconClose: Xi,
                IconEncyclopedia: mn,
                IconHints: gn,
                IconRevert: fn,
                IconSettings: yn
            },
            computed: Object(E["a"])(Object(E["a"])({}, Object(r["b"])(["isPopupWithNameActive", "encyclopediaTimestamp", "workspaceRevertable", "progressSince"])), {}, {
                HINTS_URL() {
                    return w["f"]
                },
                newInEncyclopediaCount() {
                    return this.progressSince(this.encyclopediaTimestamp).length
                },
                isSettingsActive() {
                    return this.isPopupWithNameActive(v["SETTINGS"])
                },
                isEncyclopediaActive() {
                    return this.isPopupWithNameActive(v["ENCYCLOPEDIA"])
                }
            }),
            methods: {
                onClearRevert() {
                    this.$store.dispatch("workspaceClearRevertStart")
                },
                toggleSettings() {
                    this.isPopupWithNameActive(v["SETTINGS"]) ? g["a"].emit("SETTINGS_HIDE") : g["a"].emit("SETTINGS_SHOW"),
                    this.toggle(v["SETTINGS"])
                },
                toggleEncyclopedia() {
                    this.toggle(v["ENCYCLOPEDIA"])
                },
                toggleStore() {
                    this.toggle(v["STORE"])
                },
                toggleHints() {
                    this.isPopupWithNameActive(v["SYNC"]) || (window.open(w["f"], "_blank"),
                    this.onHintsClick())
                },
                onHintsClick() {
                    g["a"].emit("HINTS_CLICKED")
                },
                toggle(t) {
                    this.isPopupWithNameActive(v["SYNC"]) || this.$store.dispatch("popupToggle", t)
                }
            }
        })
          , xn = On
          , Pn = Object(Rs["a"])(xn, tn, en, !1, null, null, null)
          , Cn = Pn.exports
          , Ln = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "text-tutorials-container",
                class: t.containerClasses
            }, [i("div", {
                staticClass: "text-tutorials",
                class: t.classes
            }, [i("div", {
                staticClass: "close",
                on: {
                    click: t.hide
                }
            }, [i("img", {
                staticClass: "label",
                attrs: {
                    src: s("2260"),
                    alt: "close"
                }
            })]), i("div", {
                staticClass: "content",
                domProps: {
                    innerHTML: t._s(t.text)
                }
            })])])
        }
          , Rn = []
          , Dn = s("93e8");
        const Nn = ["left", "center", "right"]
          , kn = ["top", "center", "bottom"]
          , Mn = (t,e)=>e > t.length - 1 ? "center" : t[e];
        var jn = fs["a"].extend({
            name: "text-tutorials",
            data: ()=>({
                textCopy: "",
                containerClassesCopy: []
            }),
            computed: Object(E["a"])(Object(E["a"])({}, Object(r["b"])(["tutorialTextCurrent", "tutorialTextPosition"])), {}, {
                classes() {
                    return {
                        "js-active": null !== this.tutorialTextCurrent
                    }
                },
                containerClasses() {
                    const t = this.tutorialTextPosition;
                    if (!t)
                        return this.containerClassesCopy;
                    const e = [`horizontal-${Mn(Nn, t.horizontal)}`, `vertical-${Mn(kn, t.vertical)}`];
                    return this.containerClassesCopy = e,
                    e
                },
                text() {
                    return this.textCopy
                }
            }),
            watch: {
                tutorialTextCurrent(t) {
                    if (!t)
                        return;
                    let e;
                    e = Object(Dn["b"])(t.text) ? t.text : t.text(this.$store.getters),
                    this.textCopy = e
                }
            },
            methods: {
                hide() {
                    this.$store.dispatch("tutorialTextHide")
                }
            }
        })
          , $n = jn
          , Hn = Object(Rs["a"])($n, Ln, Rn, !1, null, null, null)
          , Bn = Hn.exports
          , Fn = fs["a"].extend({
            name: "game",
            components: {
                Workspace: oi,
                Library: Bi,
                Search: Zi,
                Menu: Cn,
                Tutorials: ()=>s.e("tutorials").then(s.bind(null, "735f")),
                TextTutorials: Bn,
                Animations: ()=>s.e("animations").then(s.bind(null, "407f"))
            },
            computed: {
                areTutorialsVisible() {
                    return !this.$store.getters.areTutorialsFinished
                }
            },
            mounted() {
                g["a"].once("PLAY", ()=>this.$store.dispatch("startedPlaying"))
            }
        })
          , Gn = Fn
          , Un = Object(Rs["a"])(Gn, bs, ys, !1, null, null, null)
          , Wn = Un.exports
          , Yn = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , Kn = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("audio", {
                attrs: {
                    id: t.id,
                    preload: "metadata"
                },
                on: {
                    loadedmetadata: t.onMetaData
                }
            }, [s("source", {
                attrs: {
                    src: t.srcOGG,
                    type: "audio/ogg"
                }
            }), s("source", {
                attrs: {
                    src: t.srcM4A,
                    type: "audio/mpeg"
                }
            })])
        }
        ]
          , zn = fs["a"].extend({
            name: "audio-extension",
            computed: {
                id() {
                    return le
                },
                srcOGG() {
                    return `${re}${he}.ogg`
                },
                srcM4A() {
                    return `${re}${he}.m4a`
                }
            },
            methods: {
                onMetaData() {
                    g["a"].emit("AUDIO_EXTENSION")
                }
            }
        })
          , Vn = zn
          , Xn = Object(Rs["a"])(Vn, Yn, Kn, !1, null, null, null)
          , qn = Xn.exports
          , Qn = fs["a"].extend({
            name: "app",
            components: {
                Game: Wn,
                Popups: ()=>s.e("popups").then(s.bind(null, "59a1")),
                AudioExtension: qn
            },
            computed: {
                isGameReady() {
                    return this.$store.getters.isGameReady
                }
            }
        })
          , Jn = Qn
          , Zn = (s("6294"),
        Object(Rs["a"])(Jn, gs, Es, !1, null, null, null))
          , ta = Zn.exports;
        a["a"].config.productionTip = !1,
        a["a"].config.devtools = !1,
        a["a"].config.debug = !1,
        a["a"].config.silent = !0,
        a["a"].config.performance = !1,
        new a["a"]({
            store: r["a"],
            el: "#app",
            render: t=>t(ta)
        }),
        c["a"].init(new m),
        p["a"].init(r["a"]),
        g["a"].init(r["a"]),
        N.init(r["a"]),
        K.init(r["a"]),
        q.init(),
        Q["b"].init(r["a"]),
        it.init(),
        r["a"].dispatch("init"),
        Object(o["b"])(()=>{
            at["a"].init(r["a"]),
            $t.init(),
            Ft.init(r["a"]),
            Gt["a"].init(r["a"]),
            Wt.init(r["a"]),
            We["a"].init(r["a"]),
            Object(o["b"])(()=>{
                nt["a"].init(r["a"]),
                zt.init(r["a"]),
                Vt["a"].init(r["a"]),
                Qt.init(r["a"]),
                $["a"].init(r["a"]),
                Zt.init(r["a"]),
                Ue.init(r["a"]),
                hs.init(r["a"])
            }
            )
        }
        )
    },
    cd57: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return i
        }
        )),
        s.d(e, "b", (function() {
            return n
        }
        ));
        const i = "js-animation-new"
          , n = "js-search-bar"
    },
    cf19: function(t, e, s) {
        "use strict";
        s.d(e, "a", (function() {
            return a
        }
        )),
        s.d(e, "b", (function() {
            return r
        }
        ));
        s("2532");
        var i = s("2de2");
        const n = "_"
          , a = t=>t.includes(n)
          , r = (t,e)=>e === i["g"] ? !a(t) : a(t) && t.includes(e)
    },
    cfb6: function(t, e) {},
    d0c4: function(t, e, s) {
        "use strict";
        s("26e9");
        var i = s("2138")
          , n = s("1663")
          , a = s("7543");
        const r = t=>t.hasOwnProperty("dimensions");
        class o {
            constructor() {
                this.currentPosition = null,
                this.listening = []
            }
            init(t) {
                this.$store = t
            }
            onDragStart() {
                this.isMixingEnabled && (this.listening = this.getSortedListening())
            }
            onDragMove(t) {
                if (this.currentPosition = t,
                this.checkStatic())
                    return;
                if (this.checkAlreadyOver())
                    return;
                if (!this.isMixingEnabled)
                    return;
                const e = this.checkListening();
                null !== e && (this.isOver || this.triggerOver(e))
            }
            onDragEnd(t=!1) {
                if (this.currentPosition = null,
                !this.isOver)
                    return this.isOutsideWorkspace() ? void this.destroyDragged() : void (this.wasCloned || "longpress" === t || n["a"].emit("ELEMENT_DROP"));
                this.shouldDestroyAfterDrop ? this.destroyDragged() : t || this.$store.dispatch("droppableDrop")
            }
            destroyDragged() {
                const t = this.$store.getters.draggedId;
                null !== t && this.$store.dispatch("workspaceElementRemove", t),
                n["a"].emit("ELEMENT_DESTROY")
            }
            triggerOver({id: t}) {
                this.$store.dispatch("dragOver", t)
            }
            triggerOut() {
                this.$store.dispatch("dragOut")
            }
            checkAlreadyOver() {
                if (!this.isOver)
                    return !1;
                const t = this.checkIntersection(this.over);
                return !!t || (this.triggerOut(),
                !1)
            }
            checkStatic() {
                const t = this.static.find(t=>this.checkIntersection(t));
                return !!t && (this.over && this.over.id === t.id || this.triggerOver(t),
                !0)
            }
            checkListening() {
                return this.listening.find(t=>this.checkIntersection(t)) || null
            }
            checkIntersection(t) {
                if (null === t)
                    return !1;
                const e = r(t) ? t.dimensions : this.workspaceBoxDimensions;
                return Object(a["c"])(t.position, e, this.currentPosition, this.workspaceBoxDimensions)
            }
            isOutsideWorkspace() {
                const t = this.$store.getters.draggedElement
                  , e = t ? t.position : null;
                if (!e)
                    return !1;
                const {x: s, y: n} = e
                  , {width: a, height: r} = this.workspaceBoxDimensions;
                return s < -a * i["f"] || (n < -r * i["f"] || n > window.innerHeight - r * (1 - i["f"]))
            }
            getSortedListening() {
                const t = []
                  , e = this.$store.getters.droppablesListening
                  , s = document.querySelectorAll(`#${i["g"]} [data-id]`);
                return Array.from(s).forEach(({dataset: {id: s}})=>{
                    const i = e.find(t=>t.id === s);
                    i && t.push(i)
                }
                ),
                t.reverse()
            }
            get isMixingEnabled() {
                return !this.$store.getters.isMixingDisabled
            }
            get static() {
                return Object.values(this.$store.getters.droppablesStatic)
            }
            get over() {
                return this.$store.getters.draggingOverElement
            }
            get isOver() {
                return this.$store.getters.isOver
            }
            get isDragging() {
                return this.$store.getters.isDragging
            }
            get shouldDestroyAfterDrop() {
                return this.over && this.over.id === i["e"]
            }
            get workspaceBoxDimensions() {
                return this.$store.getters.workspaceBoxDimensions
            }
            get wasCloned() {
                const t = this.$store.getters.draggedElement;
                if (!t)
                    return !1;
                const e = document.querySelector(`[data-id="${t.id}"]`);
                return !(!e || !e.__vue__) && e.__vue__.cloned
            }
        }
        e["a"] = new o
    },
    d1f6: function(t, e) {},
    d257: function(t, e, s) {
        "use strict";
        s("e6cf");
        var i = s("2ae7");
        const n = (t,e="animationend")=>new Promise(s=>{
            const i = ()=>{
                t.removeEventListener(e, i),
                s()
            }
            ;
            t.addEventListener(e, i)
        }
        )
          , a = t=>{
            const {className: e} = t;
            t.className = "",
            t.offsetWidth,
            t.className = e
        }
          , r = (t,e)=>(t.addEventListener(i["a"], e, !1),
        ()=>t.removeEventListener(i["a"], e))
          , o = (t,e)=>r(t, ({animationName: t})=>e(t))
          , c = (t,e)=>(t.addEventListener(i["b"], e, !1),
        ()=>t.removeEventListener(i["b"], e))
          , l = t=>new Promise(e=>window.setTimeout(e, t))
          , h = t=>window.setTimeout(t, 0)
          , d = window.requestAnimationFrame ? ()=>new Promise(t=>requestAnimationFrame(()=>t())) : ()=>l(0);
        s("e25e");
        const u = ["Webkit", "Moz", "ms", "Ms", "O"]
          , m = document.documentElement.style
          , p = window.getComputedStyle ? t=>getComputedStyle(t, null) : t=>t.currentStyle
          , g = t=>{
            if ("string" === typeof m[t])
                return t;
            const e = `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
            let s;
            for (let i = 0, n = u.length; i < n; i++)
                if (s = u[i] + e,
                "string" === typeof m[s])
                    return s;
            return t
        }
          , E = t=>{
            const e = getComputedStyle(t);
            return t.offsetHeight + parseInt(e.marginTop || "0", 10) + parseInt(e.marginBottom || "0", 10)
        }
        ;
        s("2532");
        var f = s("0347");
        const b = Object(f["a"])()
          , y = b.any
          , v = navigator.userAgent
          , w = ()=>/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
          , I = ()=>/Edge/.test(navigator.userAgent)
          , A = ()=>(v.includes("Chrome") || v.includes("Chromium")) && !I()
          , T = ()=>v.includes("Safari") && !A() && !I()
          , S = ()=>w() && A()
          , _ = (t,e)=>{
            let s = e.parentNode;
            while (null !== s) {
                if (s === t)
                    return !0;
                s = s.parentNode
            }
            return !1
        }
          , O = t=>{
            t.parentNode && t.parentNode.appendChild(t)
        }
          , x = t=>new Promise((e,s)=>{
            const i = new XMLHttpRequest;
            i.open("get", t, !0),
            i.responseType = "json",
            i.onload = ()=>{
                200 === i.status ? e(i.response) : s(i.status)
            }
            ,
            i.send()
        }
        );
        s("e260"),
        s("ddb0");
        const P = (t,...e)=>{}
          , C = (t,e,s)=>{}
          , L = (t,e)=>{
            t.scrollTop = e
        }
          , R = t=>t.scrollY || t.scrollTop
          , D = t=>"getComputedStyle"in window && "smooth" === window.getComputedStyle(t)["scroll-behavior"]
          , N = (t,e,s=250)=>{
            if (0 === s || D(t))
                return void L(t, e);
            const i = R(t)
              , n = Math.max(0, e) - i
              , a = (new Date).getTime()
              , r = s || Math.min(Math.abs(n), s);
            (function e() {
                setTimeout(()=>{
                    const s = Math.min(1, ((new Date).getTime() - a) / r)
                      , o = s < .5 ? 2 * s * s : s * (4 - 2 * s) - 1
                      , c = Math.max(0, Math.floor(i + n * o));
                    L(t, c),
                    s < 1 && e()
                }
                , 9)
            }
            )()
        }
          , k = t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`
          , M = 60
          , j = 60 * M
          , $ = 24 * j
          , H = t=>{
            const e = Date.now()
              , s = Math.round((e - t) / 1e3)
              , i = Math.floor(s / $)
              , n = Math.floor((s - i * $) / j)
              , a = Math.floor((s - i * $ - n * j) / M);
            return {
                days: i,
                hours: n,
                minutes: a
            }
        }
          , B = t=>{
            const {days: e, hours: s, minutes: i} = H(t);
            return 0 === e && 0 === s && i < 2 ? "just now" : 0 === e && 0 === s ? `${i} minutes ago` : 0 === e && 1 === s ? `${s} hour ${i} minutes ago` : 0 === e && s < 3 ? `${s} hours ${i} minutes ago` : 0 === e ? `${s} hours ago` : 1 === e ? `${e} day ago` : `${e} days ago`
        }
          , F = (t,e)=>{
            const s = new XMLHttpRequest;
            return s.open("POST", t, !0),
            s.setRequestHeader("Content-type", "application/json"),
            s.send(JSON.stringify(e)),
            new Promise((t,e)=>{
                s.onload = ()=>t(s.response),
                s.onerror = e
            }
            )
        }
          , G = t=>{
            const e = new XMLHttpRequest;
            return e.open("GET", t, !0),
            e.send(),
            new Promise((t,s)=>{
                e.onload = ()=>t(e.response),
                e.onerror = s
            }
            )
        }
        ;
        s.d(e, "t", (function() {
            return n
        }
        )),
        s.d(e, "y", (function() {
            return a
        }
        )),
        s.d(e, "s", (function() {
            return r
        }
        )),
        s.d(e, "u", (function() {
            return o
        }
        )),
        s.d(e, "v", (function() {
            return c
        }
        )),
        s.d(e, "c", (function() {
            return l
        }
        )),
        s.d(e, "b", (function() {
            return h
        }
        )),
        s.d(e, "r", (function() {
            return d
        }
        )),
        s.d(e, "g", (function() {
            return p
        }
        )),
        s.d(e, "h", (function() {
            return g
        }
        )),
        s.d(e, "e", (function() {
            return E
        }
        )),
        s.d(e, "o", (function() {
            return y
        }
        )),
        s.d(e, "n", (function() {
            return w
        }
        )),
        s.d(e, "l", (function() {
            return I
        }
        )),
        s.d(e, "j", (function() {
            return A
        }
        )),
        s.d(e, "p", (function() {
            return T
        }
        )),
        s.d(e, "k", (function() {
            return S
        }
        )),
        s.d(e, "m", (function() {
            return _
        }
        )),
        s.d(e, "x", (function() {
            return O
        }
        )),
        s.d(e, "d", (function() {
            return x
        }
        )),
        s.d(e, "q", (function() {
            return P
        }
        )),
        s.d(e, "A", (function() {
            return C
        }
        )),
        s.d(e, "z", (function() {
            return N
        }
        )),
        s.d(e, "a", (function() {
            return k
        }
        )),
        s.d(e, "i", (function() {
            return B
        }
        )),
        s.d(e, "w", (function() {
            return F
        }
        )),
        s.d(e, "f", (function() {
            return G
        }
        ))
    },
    d74b: function(t, e) {},
    da98: function(t, e, s) {
        "use strict";
        var i = s("5530");
        const n = {
            id: "",
            name: "",
            description: "",
            parents: [],
            children: [],
            tags: [],
            prime: !1,
            base: !1,
            final: !1,
            exhausted: null,
            condition: null
        };
        var a = n;
        s.d(e, "a", (function() {
            return r
        }
        )),
        s.d(e, "b", (function() {
            return o
        }
        )),
        s.d(e, "c", (function() {
            return c
        }
        ));
        const r = (t,e)=>t.hasOwnProperty(e)
          , o = t=>t.hasOwnProperty("parents") && !!t.parents && !!t.parents.length
          , c = (t,e)=>{
            const s = t.name || t.n || ""
              , n = t.parents || t.p || []
              , r = t.children || t.c || [];
            return delete t.n,
            delete t.c,
            delete t.p,
            Object(i["a"])(Object(i["a"])(Object(i["a"])({}, a), t), {}, {
                id: e,
                name: s,
                children: r,
                parents: n,
                final: !r.length
            })
        }
    },
    ded8: function(t, e, s) {
        "use strict";
        s.d(e, "c", (function() {
            return r
        }
        )),
        s.d(e, "a", (function() {
            return o
        }
        )),
        s.d(e, "b", (function() {
            return l
        }
        ));
        s("ac1f"),
        s("5319"),
        s("e260"),
        s("ddb0"),
        s("4e82"),
        s("26e9"),
        s("13d5");
        const i = /[0-9]{1,2}_/
          , n = (t,e)=>{
            if (i.test(t) && i.test(e)) {
                const s = t.replace(i, "")
                  , n = e.replace(i, "");
                return +n < +s ? [e, t] : [t, e]
            }
            return i.test(t) ? [e, t] : [t, e]
        }
          , a = (t,e)=>[`${Math.min(+t, +e)}`, `${Math.max(+t, +e)}`]
          , r = ([t,e])=>i.test(t) || i.test(e) ? n(t, e) : a(t, e)
          , o = (t,e,s=!1)=>{
            const i = []
              , n = {};
            e.forEach(e=>{
                if (!t.hasOwnProperty(e))
                    return;
                const s = `${t[e].name.toLowerCase()}_${e}`;
                n[s] = e,
                i.push(s)
            }
            );
            const a = i.sort()
              , r = a.map(t=>n[t]);
            return s ? r.reverse() : r
        }
          , c = (t,e,s=!1)=>{
            const i = e.sort((e,s)=>{
                const i = t[e] || -1
                  , n = t[s] || -1;
                return i > n ? -1 : i < n ? 1 : 0
            }
            );
            return s ? i.reverse() : i
        }
          , l = (t,e,s=!1)=>{
            const i = t.reduce((t,{id: e, timestamp: s})=>(t[e] = s,
            t), {});
            return c(i, e, s)
        }
    },
    e5fe: function(t, e) {},
    ebe2: function(t, e, s) {
        "use strict";
        var i = s("cfb6");
        s.o(i, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return i["TextTutorialId"]
        }
        ));
        var n = s("0745");
        s.o(n, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return n["TextTutorialId"]
        }
        ));
        var a = s("4a5e");
        s.o(a, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return a["TextTutorialId"]
        }
        ));
        var r = s("03b6");
        s.o(r, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return r["TextTutorialId"]
        }
        ));
        var o = s("ab1f");
        s.o(o, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return o["TextTutorialId"]
        }
        ));
        var c = s("2321");
        s.o(c, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return c["TextTutorialId"]
        }
        ));
        var l = s("6f84");
        s.o(l, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return l["TextTutorialId"]
        }
        ));
        var h = s("4819");
        s.o(h, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return h["TextTutorialId"]
        }
        ));
        var d = s("d1f6");
        s.o(d, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return d["TextTutorialId"]
        }
        ));
        var u = s("a097");
        s.o(u, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return u["TextTutorialId"]
        }
        ));
        var m = s("5221");
        s.o(m, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return m["TextTutorialId"]
        }
        ));
        var p = s("33ff");
        s.o(p, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return p["TextTutorialId"]
        }
        ));
        var g = s("ff0e");
        s.o(g, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return g["TextTutorialId"]
        }
        ));
        var E = s("d74b");
        s.o(E, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return E["TextTutorialId"]
        }
        ));
        var f = s("f339");
        s.o(f, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return f["TextTutorialId"]
        }
        ));
        var b = s("fe31");
        s.o(b, "TextTutorialId") && s.d(e, "TextTutorialId", (function() {
            return b["TextTutorialId"]
        }
        ));
        var y = s("2149");
        s.d(e, "TextTutorialId", (function() {
            return y["a"]
        }
        ));
        s("e5fe")
    },
    f339: function(t, e) {},
    fd41: function(t, e, s) {
        "use strict";
        var i = s("623d");
        const n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          , a = t=>`static/icons/${t}.svg`
          , r = t=>t === i["a"] ? n : a(t);
        e["a"] = r
    },
    fe31: function(t, e) {},
    ff0e: function(t, e) {}
});
//# sourceMappingURL=app.f0d5bce2.js.map
