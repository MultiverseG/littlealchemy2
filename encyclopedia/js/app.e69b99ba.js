(function(t) {
    function e(e) {
        for (var s, a, o = e[0], c = e[1], u = e[2], d = 0, h = []; d < o.length; d++)
            a = o[d],
            Object.prototype.hasOwnProperty.call(i, a) && i[a] && h.push(i[a][0]),
            i[a] = 0;
        for (s in c)
            Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        l && l(e);
        while (h.length)
            h.shift()();
        return r.push.apply(r, u || []),
        n()
    }
    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], s = !0, o = 1; o < n.length; o++) {
                var c = n[o];
                0 !== i[c] && (s = !1)
            }
            s && (r.splice(e--, 1),
            t = a(a.s = n[0]))
        }
        return t
    }
    var s = {}
      , i = {
        app: 0
    }
      , r = [];
    function a(e) {
        if (s[e])
            return s[e].exports;
        var n = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, a),
        n.l = !0,
        n.exports
    }
    a.m = t,
    a.c = s,
    a.d = function(t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    a.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(t, e) {
        if (1 & e && (t = a(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (a.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var s in t)
                a.d(n, s, function(e) {
                    return t[e]
                }
                .bind(null, s));
        return n
    }
    ,
    a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return a.d(e, "a", e),
        e
    }
    ,
    a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    a.p = "";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var u = 0; u < o.length; u++)
        e(o[u]);
    var l = c;
    r.push(["cd49", "chunk-vendors"]),
    n()
}
)({
    "0308": function(t, e, n) {},
    "2a0f": function(t, e, n) {
        "use strict";
        n("e653")
    },
    "48af": function(t, e) {},
    "4a07": function(t, e) {},
    6294: function(t, e, n) {
        "use strict";
        n("0308")
    },
    "62ef": function(t, e, n) {
        "use strict";
        var s;
        n.d(e, "a", (function() {
            return s
        }
        )),
        function(t) {
            t["HOME"] = "home",
            t["LIST"] = "list",
            t["ELEMENT"] = "element",
            t["NEWS"] = "news",
            t["NEWS_ITEM"] = "news-item",
            t["HELP"] = "help",
            t["HELP_ITEM"] = "help-item",
            t["STATS"] = "stats"
        }(s || (s = {}))
    },
    "670d": function(t, e) {},
    7901: function(t, e) {},
    "7d6d": function(t, e, n) {},
    8021: function(t, e, n) {},
    "940d": function(t, e, n) {
        "use strict";
        n("8021")
    },
    "960b": function(t, e) {},
    a8ae: function(t, e) {},
    ab1f: function(t, e) {},
    b137: function(t, e, n) {
        t.exports = n.p + "img/encyclopedia-back.cc6c5e32.svg"
    },
    cd49: function(t, e, n) {
        "use strict";
        n.r(e);
        n("fce8"),
        n("bb0a"),
        n("2b8f"),
        n("14e4"),
        n("7f70");
        var s = n("e832")
          , i = function(t) {
            var e = {};
            return t.forEach((function(t) {
                var n = t.elements
                  , s = t.id;
                return n.forEach((function(t) {
                    e.hasOwnProperty(t) || (e[t] = []),
                    e[t].push(s)
                }
                ))
            }
            )),
            e
        }
          , r = function() {
            function t() {
                this._elements = {},
                this._descriptions = {},
                this._tags = []
            }
            return t.prototype.init = function(t) {
                this.$store = t
            }
            ,
            t.prototype.setElements = function(t) {
                this._elements = t,
                this.tags.length ? this.setTags(this.tags) : this.$store.dispatch("baseUpdated")
            }
            ,
            t.prototype.setTags = function(t) {
                this._tags = t;
                var e = i(t);
                Object.entries(this.elements).forEach((function(t) {
                    var n = t[0]
                      , s = t[1];
                    s.tags = e[n] || []
                }
                )),
                this.$store.dispatch("baseUpdated"),
                this.$store.dispatch("categoriesCheck", this.$store.getters.totalProgress)
            }
            ,
            t.prototype.setDescriptions = function(t) {
                this._descriptions = t
            }
            ,
            Object.defineProperty(t.prototype, "elements", {
                get: function() {
                    return this._elements
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "descriptions", {
                get: function() {
                    return this._descriptions
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "tags", {
                get: function() {
                    return this._tags
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.getDescriptionById = function(t) {
                return this.descriptions.hasOwnProperty(t) ? this.descriptions[t] : this.elements.hasOwnProperty(t) && this.elements[t].description || ""
            }
            ,
            t
        }()
          , a = new r
          , o = n("46a3")
          , c = n.n(o)
          , u = new s["a"]({})
          , l = function() {
            function t() {}
            return t.prototype.on = function(t, e) {
                u.$on(t, e)
            }
            ,
            t.prototype.once = function(t, e) {
                u.$once(t, e)
            }
            ,
            t.prototype.off = function(t, e) {
                u.$off(t, e)
            }
            ,
            t.prototype.emit = function(t, e) {
                u.$emit(t, e)
            }
            ,
            t
        }()
          , d = new l
          , h = n("ebe2")
          , m = "search-input"
          , f = {
            version: function(t) {
                var e = t.version;
                window.VERSION = e
            },
            userAgent: function(t) {
                var e = t.browser;
                window.BROWSER = e
            },
            elements: function(t) {
                var e = t.elements;
                return a.setElements(e)
            },
            tags: function(t) {
                var e = t.tags;
                return a.setTags(e)
            },
            descriptions: function(t) {
                var e = t.descriptions;
                return a.setDescriptions(e)
            },
            showItem: function(t, e, n) {
                var s = t.id
                  , i = e.getters.elementById(s);
                if (i) {
                    var r = i.name;
                    n.push({
                        name: h["RouteName"].ELEMENT,
                        params: {
                            name: r
                        }
                    })
                }
            },
            showHelp: function(t, e, n) {
                var s = t.id
                  , i = h["RouteName"].HELP_ITEM;
                s || (i = h["RouteName"].HELP),
                n.push({
                    name: i,
                    params: {
                        id: s
                    }
                })
            },
            progress: function(t, e) {
                e.dispatch("progressSet", t),
                t.history.length && e.dispatch("addToWorkspaceEnable", !0)
            },
            mixNew: function(t, e) {
                e.dispatch("progressMixNew", t),
                e.dispatch("addToWorkspaceEnable", !0)
            },
            mixBase: function(t, e) {
                return e.dispatch("progressMixBase", t)
            },
            reset: function(t, e, n) {
                e.dispatch("progressReset"),
                n.push({
                    name: h["RouteName"].HOME
                })
            },
            hiding: function(t, e, n) {
                var s = document.getElementById(m);
                s && s.blur(),
                window.setTimeout((function() {
                    return n.push({
                        name: "home"
                    })
                }
                ), 200)
            }
        }
          , p = n("6dbe")
          , g = function(t, e) {
            return Object(p["a"])({
                trigger: t
            }, e)
        }
          , v = [g("ADD_TO_WORKSPACE", {
            command: "addToWorkspace",
            prepare: function(t, e) {
                return {
                    id: e
                }
            }
        })];
        var y = "https://littlealchemy2.com"
          , b = y;
        var E = function() {
            function t() {
                var t = this;
                this.onMessageReceived = function(e) {
                    if (e.origin === b && e.data.length)
                        try {
                            var n = JSON.parse(e.data);
                            t.onMessage(n)
                        } catch (s) {
                            console.error(s)
                        }
                }
            }
            return t.prototype.init = function(t, e) {
                this.$store = t,
                this.$router = e,
                window.addEventListener("message", this.onMessageReceived, !1),
                this.initCommands(),
                this.post("ready")
            }
            ,
            t.prototype.initCommands = function() {
                var t = this;
                v.forEach((function(e) {
                    d.on(e.trigger, (function(n) {
                        var s = {};
                        c()(e.prepare) && (s = e.prepare(t.$store, n)),
                        t.post(e.command, s)
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.onMessage = function(t) {
                var e = t.command
                  , n = t.data;
                f.hasOwnProperty(e) && f[e](n, this.$store, this.$router)
            }
            ,
            t.prototype.post = function(t, e) {
                if (void 0 === e && (e = {}),
                window.parent) {
                    var n = {
                        command: t,
                        data: e
                    };
                    window.parent.postMessage(JSON.stringify(n), "*")
                }
            }
            ,
            t
        }()
          , C = new E
          , _ = function(t) {
            return new Promise((function(e, n) {
                var s = new XMLHttpRequest;
                s.open("get", t, !0),
                s.responseType = "json",
                s.onload = function() {
                    200 === s.status ? e(s.response) : n(s.status)
                }
                ,
                s.send()
            }
            ))
        }
          , w = "../public/news/encyclopedia/w"
          , S = w;
        var T = function() {
            function t() {
                this._data = []
            }
            return t.prototype.init = function(t) {
                return Object(p["b"])(this, void 0, void 0, (function() {
                    var e;
                    return Object(p["c"])(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return this._data = [],
                            [4, this.fetch()];
                        case 1:
                            return e = n.sent(),
                            t.dispatch("newsSet", e),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.fetch = function() {
                return Object(p["b"])(this, void 0, void 0, (function() {
                    var t;
                    return Object(p["c"])(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]),
                            [4, _(S)];
                        case 1:
                            return t = e.sent(),
                            this._data = this.parse(t),
                            [2, this.data];
                        case 2:
                            return e.sent(),
                            [2, []];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.parse = function(t) {
                var e = t.sort((function(t, e) {
                    return e.timestamp - t.timestamp
                }
                ));
                return this.filter(e)
            }
            ,
            t.prototype.filter = function(t) {
                var e = this;
                return t.filter((function(t) {
                    var n = t.conditions
                      , s = void 0 === n ? [] : n;
                    return e.checkConditions(s)
                }
                ))
            }
            ,
            t.prototype.checkConditions = function(t) {
                var e = this
                  , n = {
                    versionEq: function(t) {
                        return t === e.version
                    },
                    versionGt: function(t) {
                        var n = e.version.split(".")
                          , s = t.split(".");
                        return s.some((function(t, e) {
                            return +t < +n[e]
                        }
                        ))
                    },
                    versionLt: function(t) {
                        var n = e.version.split(".")
                          , s = t.split(".");
                        return s.some((function(t, e) {
                            return +t > +n[e]
                        }
                        ))
                    }
                };
                return t.every((function(t) {
                    var e = t.type
                      , s = t.value;
                    return !n.hasOwnProperty(e) || n[e](s)
                }
                ))
            }
            ,
            t.prototype.getNews = function(t) {
                return this.data.find((function(e) {
                    var n = e.id;
                    return t === n
                }
                )) || null
            }
            ,
            Object.defineProperty(t.prototype, "data", {
                get: function() {
                    return this._data
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "version", {
                get: function() {
                    return window.VERSION ? window.VERSION : window.location.hash.substr(1)
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }()
          , x = new T
          , O = n("94ea")
          , k = {
            updatedAt: -1
        }
          , I = {
            state: k,
            getters: {
                elements: function(t) {
                    return -1 === t.updatedAt ? {} : a.elements
                },
                elementsIds: function(t, e) {
                    return Object.keys(e.elements)
                },
                elementById: function(t, e) {
                    return function(t) {
                        var n = "" + t;
                        return e.elements.hasOwnProperty(n) ? e.elements[n] : null
                    }
                },
                elementByName: function(t, e) {
                    return function(t) {
                        return Object.values(e.elements).find((function(e) {
                            var n = e.name;
                            return n === t
                        }
                        )) || null
                    }
                },
                hasElement: function(t, e) {
                    return function(t) {
                        var n = "" + t;
                        return e.elements.hasOwnProperty(n)
                    }
                },
                elementsCount: function(t, e) {
                    return e.elementsIds.length
                },
                tags: function(t) {
                    return -1 === t.updatedAt ? [] : a.tags
                },
                tagById: function(t, e) {
                    return function(t) {
                        return e.tags.find((function(e) {
                            var n = e.id;
                            return t === n
                        }
                        )) || null
                    }
                },
                tagNameById: function(t, e) {
                    return function(t) {
                        var n = e.tagById(t);
                        return n ? n.name : ""
                    }
                }
            },
            actions: {
                baseUpdated: function(t) {
                    var e = t.commit;
                    e("BASE_SET")
                }
            },
            mutations: {
                BASE_SET: function(t) {
                    t.updatedAt = Date.now()
                }
            }
        }
          , A = I
          , P = [h["PseudoCategory"].BASIC, h["PseudoCategory"].FINAL, h["PseudoCategory"].EXHAUSTED]
          , R = Array.from(P)
          , N = {
            list: Array.from(P),
            elements: {}
        }
          , L = {
            state: N,
            getters: {
                categoriesList: function(t) {
                    return t.list
                },
                categoriesElements: function(t) {
                    return t.elements
                }
            },
            actions: {
                categoriesCheck: function(t, e) {
                    var n = t.dispatch;
                    e.forEach((function(t) {
                        return n("categoriesCheckElement", t)
                    }
                    ))
                },
                categoriesCheckElement: function(t, e) {
                    var n = t.getters
                      , s = t.commit
                      , i = n.elementById(e);
                    i && i.tags && i.tags.forEach((function(t) {
                        n.categoriesList.includes(t) || s("CATEGORIES_ADD_EMPTY", t),
                        s("CATEGORIES_ADD", {
                            tagId: t,
                            id: e
                        })
                    }
                    ))
                },
                progressReset: function(t) {
                    var e = t.commit;
                    e("CATEGORIES_RESET")
                }
            },
            mutations: {
                CATEGORIES_ADD_EMPTY: function(t, e) {
                    t.list.push(e),
                    s["a"].set(t.elements, e, [])
                },
                CATEGORIES_ADD: function(t, e) {
                    var n = e.tagId
                      , s = e.id;
                    t.elements[n].push(s)
                },
                CATEGORIES_RESET: function(t) {
                    t.list = Array.from(P),
                    t.elements = {}
                }
            }
        }
          , j = L
          , D = {
            list: []
        }
          , $ = {
            state: D,
            getters: {
                newsList: function(t) {
                    return t.list
                },
                hasNews: function(t) {
                    return !!t.list.length
                }
            },
            actions: {
                newsSet: function(t, e) {
                    var n = t.commit;
                    n("NEWS_SET", e)
                }
            },
            mutations: {
                NEWS_SET: function(t, e) {
                    t.list = e
                }
            }
        }
          , M = $
          , B = function(t, e, n) {
            void 0 === n && (n = !1);
            var s = []
              , i = {};
            e.forEach((function(e) {
                if (t.hasOwnProperty(e)) {
                    var n = t[e].name.toLowerCase() + "_" + e;
                    i[n] = e,
                    s.push(n)
                }
            }
            ));
            var r = s.sort()
              , a = r.map((function(t) {
                return i[t]
            }
            ));
            return n ? a.reverse() : a
        }
          , H = function(t, e, n) {
            void 0 === n && (n = !1);
            var s = e.sort((function(e, n) {
                var s = t[e] || -1
                  , i = t[n] || -1;
                return s > i ? -1 : s < i ? 1 : 0
            }
            ));
            return n ? s.reverse() : s
        }
          , F = function(t, e) {
            var n = t.toLowerCase()
              , s = e.toLowerCase();
            return n < s ? -1 : n > s ? 1 : 0
        }
          , W = function(t) {
            return t.hasOwnProperty("parents") && !!t.parents.length
        }
          , U = function(t) {
            return t.hasOwnProperty("prime") && t.prime
        }
          , G = function(t) {
            return t.final
        }
          , K = function(t) {
            return pt.getters.isExhausted(t.id) && !t.final
        }
          , X = function(t) {
            return t.hasOwnProperty("base") && t.base
        }
          , Y = function(t) {
            return (U(t) || !W(t)) && !X(t)
        }
          , q = function(t, e) {
            return !!t.tags && t.tags.some((function(t) {
                return e === t.toLowerCase()
            }
            ))
        }
          , Q = function(t) {
            return Array.from(new Set(t))
        }
          , V = 6
          , z = "content"
          , J = 5
          , Z = 5
          , tt = 5
          , et = 1.2
          , nt = !1
          , st = function(t) {
            void 0 === t && (t = 300);
            var e = document.getElementById(z);
            if (e) {
                var n, s = !1, i = function() {
                    s = !0,
                    n()
                };
                n = function() {
                    return e.removeEventListener("scroll", i)
                }
                ,
                e.addEventListener("scroll", i);
                var r, a = e.scrollTop, o = Math.PI / (t / 15), c = a / 2, u = 0;
                requestAnimationFrame(l)
            }
            function l() {
                setTimeout((function() {
                    e && (0 === e.scrollTop || s ? n() : (u++,
                    r = c - c * Math.cos(u * o),
                    e.scrollTop = Math.floor(a - r),
                    requestAnimationFrame(l)))
                }
                ), 15)
            }
        }
          , it = function() {
            function t() {
                this.history = {}
            }
            return t.prototype.set = function(t) {
                var e = this;
                return this.history = {},
                t.forEach((function(t) {
                    var n = e.generateKey(t);
                    e.history[n] = !0
                }
                )),
                this.history
            }
            ,
            t.prototype.add = function(t) {
                return this.history[this.generateKey(t)] = !0,
                this.history
            }
            ,
            t.prototype.reset = function() {
                this.history = {}
            }
            ,
            t.prototype.areMixed = function(t) {
                return this.history.hasOwnProperty(this.generateKey(t))
            }
            ,
            t.prototype.generateKey = function(t) {
                return Array.isArray(t) ? t.slice(0, 2).join("#") : t.father + "#" + t.mother
            }
            ,
            t
        }()
          , rt = new it
          , at = {
            progress: [],
            prime: [],
            base: [],
            final: [],
            exhausted: [],
            timestamps: {}
        }
          , ot = {
            state: at,
            getters: {
                progress: function(t) {
                    return t.progress
                },
                prime: function(t) {
                    return t.prime
                },
                base: function(t) {
                    return t.base
                },
                final: function(t) {
                    return t.final
                },
                exhausted: function(t) {
                    return t.exhausted
                },
                timestamps: function(t) {
                    return t.timestamps
                },
                totalProgress: function(t) {
                    return t.progress.concat(t.prime).concat(t.base).concat(t.final)
                },
                hasInProgress: function(t, e) {
                    return function(t) {
                        return e.progress.includes(t)
                    }
                },
                hasInBase: function(t, e) {
                    return function(t) {
                        return e.base.includes(t)
                    }
                },
                hasInFinal: function(t, e) {
                    return function(t) {
                        return e.final.includes(t)
                    }
                },
                hasInExhausted: function(t, e) {
                    return function(t) {
                        return e.exhausted.includes(t)
                    }
                },
                isExhausted: function(t, e) {
                    return function(t) {
                        return !G(e.elementById(t)) && e.hasInExhausted(t)
                    }
                },
                elementTimestamp: function(t, e) {
                    return function(t) {
                        return e.timestamps[t] || -1
                    }
                },
                order: function(t, e) {
                    var n = "desc" === e.elementsSortOrder;
                    return "timestamp" === e.elementsSortBy ? H(e.timestamps, e.totalProgress, n) : B(e.elements, e.totalProgress, n)
                },
                counts: function(t, e) {
                    var n, s = e.elementsCount, i = e.totalProgress.length;
                    return n = {},
                    n[h["PseudoCategory"].BASE] = e.base.length,
                    n[h["PseudoCategory"].BASIC] = e.prime.length,
                    n[h["PseudoCategory"].FINAL] = e.final.length,
                    n[h["PseudoCategory"].EXHAUSTED] = e.exhausted.length,
                    n.total = s,
                    n.discovered = i,
                    n.remaining = s - i,
                    n
                },
                areParentsMixed: function() {
                    return function(t) {
                        return rt.areMixed(t)
                    }
                },
                wasDiscoveredUsing: function(t, e) {
                    return function(t, n) {
                        var s = e.elementById(n);
                        return !!s && s.parents.some((function(n) {
                            return !!n.includes(t) && e.areParentsMixed(n)
                        }
                        ))
                    }
                }
            },
            actions: {
                progressSet: function(t, e) {
                    var n = t.dispatch
                      , s = t.commit
                      , i = t.getters;
                    rt.set(e.history),
                    s("PROGRESS_SET", e),
                    n("categoriesCheck", i.totalProgress)
                },
                progressMixNew: function(t, e) {
                    var n = t.dispatch
                      , s = t.getters
                      , i = t.commit
                      , r = e.parents
                      , a = e.children
                      , o = e.timestamp
                      , c = e.exhausted
                      , u = void 0 === c ? [] : c;
                    rt.add(r),
                    a.forEach((function(t) {
                        s.timestamps.hasOwnProperty(t) || i("PROGRESS_TIMESTAMP_SET", {
                            id: t,
                            timestamp: o
                        });
                        var e = s.elementById(t);
                        e && !e.prime && (s.hasInBase(t) || (G(e) ? s.hasInFinal(t) || i("PROGRESS_FINAL_ADD", t) : s.hasInProgress(t) || i("PROGRESS_ADD", t)))
                    }
                    )),
                    u.length && i("PROGRESS_EXHAUSTED_ADD", u),
                    n("categoriesCheck", a)
                },
                progressMixBase: function(t, e) {
                    var n = t.dispatch
                      , s = t.getters
                      , i = t.commit
                      , r = e.elements;
                    r.forEach((function(t) {
                        s.hasInBase(t) || s.hasInProgress(t) || i("PROGRESS_BASE_ADD", t)
                    }
                    )),
                    n("categoriesCheck", r)
                },
                progressReset: function(t) {
                    var e = t.dispatch
                      , n = t.commit
                      , s = t.getters;
                    rt.reset(),
                    n("PROGRESS_RESET"),
                    e("categoriesCheck", s.totalProgress)
                }
            },
            mutations: {
                PROGRESS_SET: function(t, e) {
                    var n = e.progress
                      , i = e.prime
                      , r = e.base
                      , a = e.final
                      , o = e.exhausted
                      , c = e.timestamps;
                    t.progress = n,
                    t.prime = i,
                    t.base = r,
                    t.final = a,
                    t.exhausted = Q(o),
                    c.forEach((function(e) {
                        var n = e.id
                          , i = e.timestamp;
                        s["a"].set(t.timestamps, n, i)
                    }
                    ))
                },
                PROGRESS_BASE_ADD: function(t, e) {
                    t.base.push(e)
                },
                PROGRESS_ADD: function(t, e) {
                    t.progress.push(e)
                },
                PROGRESS_FINAL_ADD: function(t, e) {
                    t.final.push(e)
                },
                PROGRESS_TIMESTAMP_SET: function(t, e) {
                    var n = e.id
                      , i = e.timestamp;
                    s["a"].set(t.timestamps, n, i)
                },
                PROGRESS_EXHAUSTED_ADD: function(t, e) {
                    t.exhausted = Q(t.exhausted.concat(e))
                },
                PROGRESS_RESET: function(t) {
                    t.progress = [],
                    t.base = [],
                    t.final = [],
                    t.exhausted = [],
                    t.timestamps = {}
                }
            }
        }
          , ct = ot
          , ut = function(t) {
            for (var e = t.toLowerCase().trim(), n = "[]{}'/\\()?<>+.*^$", s = 0, i = n; s < i.length; s++) {
                var r = i[s];
                e = e.split(r).join("")
            }
            return e
        }
          , lt = {
            query: null,
            filters: [],
            addToWorkspaceEnabled: !1,
            elementsSortBy: "alphabet",
            elementsSortOrder: "asc"
        }
          , dt = {
            state: lt,
            getters: {
                searchQuery: function(t) {
                    return t.query
                },
                searchOrder: function(t, e) {
                    if (!e.isSearchActive)
                        return [];
                    var n = ut(e.searchQuery)
                      , s = new RegExp(n);
                    return e.order.filter((function(t) {
                        var n = e.elementById(t);
                        return !!n && s.test(n.name.toLowerCase())
                    }
                    ))
                },
                isSearchActive: function(t) {
                    return null !== t.query && !!t.query.length
                },
                addToWorkspaceEnabled: function(t) {
                    return t.addToWorkspaceEnabled
                },
                filters: function(t) {
                    return t.filters
                },
                elementsSortBy: function(t) {
                    return t.elementsSortBy
                },
                elementsSortOrder: function(t) {
                    return t.elementsSortOrder
                }
            },
            actions: {
                search: function(t, e) {
                    var n = t.commit;
                    n("SEARCH", e)
                },
                searchShow: function(t) {
                    var e = t.commit;
                    e("SEARCH", "")
                },
                searchClear: function(t) {
                    var e = t.commit
                      , n = t.state;
                    null !== n.query && e("SEARCH", null)
                },
                addToWorkspaceEnable: function(t, e) {
                    var n = t.commit;
                    n("ADD_TO_WORKSPACE", e)
                },
                sortingChange: function(t, e) {
                    var n = t.commit;
                    n("SORTING_CHANGE", e)
                },
                filterSet: function(t, e) {
                    var n = t.commit;
                    n("FILTER_CLEAR"),
                    n("FILTER_ADD", e)
                },
                filterToggle: function(t, e) {
                    var n = t.dispatch
                      , s = t.getters;
                    s.filters.includes(e) ? n("filterRemove", e) : n("filterAdd", e)
                },
                filterAdd: function(t, e) {
                    var n = t.commit;
                    n("FILTER_ADD", e)
                },
                filterRemove: function(t, e) {
                    var n = t.commit;
                    n("FILTER_REMOVE", e)
                },
                filtersClear: function(t) {
                    var e = t.commit;
                    e("FILTER_CLEAR")
                },
                progressReset: function(t) {
                    var e = t.dispatch;
                    e("filtersClear")
                }
            },
            mutations: {
                SEARCH: function(t, e) {
                    t.query = e
                },
                ADD_TO_WORKSPACE: function(t, e) {
                    t.addToWorkspaceEnabled = e
                },
                FILTER_ADD: function(t, e) {
                    t.filters.includes(e) || t.filters.push(e)
                },
                FILTER_REMOVE: function(t, e) {
                    t.filters = t.filters.filter((function(t) {
                        return t !== e
                    }
                    ))
                },
                FILTER_CLEAR: function(t) {
                    t.filters = []
                },
                SORTING_CHANGE: function(t, e) {
                    t.elementsSortBy !== e ? (t.elementsSortBy = e,
                    t.elementsSortOrder = "asc") : t.elementsSortOrder = "asc" === t.elementsSortOrder ? "desc" : "asc"
                }
            }
        }
          , ht = dt;
        s["a"].use(O["b"]);
        var mt = new O["b"].Store({
            modules: {
                base: A,
                categories: j,
                news: M,
                progress: ct,
                ui: ht
            },
            strict: !1
        })
          , ft = (Object(O["a"])(),
        O["d"])
          , pt = (O["c"],
        mt)
          , gt = n("8c4f")
          , vt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [t.news ? [n("div", {
                staticClass: "card cursor-pointer",
                on: {
                    click: t.navigateToNews
                }
            }, [n("img", {
                staticClass: "news-banner",
                attrs: {
                    src: t.news.img,
                    alt: t.news.title
                }
            }), n("div", {
                staticClass: "bold center"
            }, [t._v(" " + t._s(t.news.title) + " ")])]), n("router-link", {
                staticClass: "card-more",
                attrs: {
                    tag: "div",
                    to: {
                        name: "news"
                    }
                }
            }, [t._v(" more news... ")])] : t._e(), n("router-link", {
                staticClass: "card cursor-pointer",
                attrs: {
                    tag: "div",
                    to: {
                        name: "stats"
                    }
                }
            }, [n("div", {
                staticClass: "center bold card-2x"
            }, [t._v(" " + t._s(t.counts.discovered) + "/" + t._s(t.counts.total) + " ")]), n("div", {
                staticClass: "center"
            }, [t._v(" discovered items ")])]), n("router-link", {
                staticClass: "card-more",
                attrs: {
                    tag: "div",
                    to: {
                        name: "stats"
                    }
                }
            }, [t._v(" more stats... ")]), n("div", {
                staticClass: "card cursor-pointer",
                on: {
                    click: t.navigateToHelpEntry
                }
            }, [n("div", {
                staticClass: "center bold"
            }, [t._v(" Did You Know? ")]), n("div", {
                staticClass: "center tip"
            }, [t._v(" " + t._s(t.randomTip.text) + " ")])]), n("router-link", {
                staticClass: "card-more",
                attrs: {
                    tag: "div",
                    to: {
                        name: "help"
                    }
                }
            }, [t._v(" more tips... ")]), t.hasElements ? n("Recent") : t._e()], 2)
        }
          , yt = []
          , bt = (new s["a"],
        s["a"])
          , Et = [{
            id: "1",
            title: "Login And Cloud Saves",
            text: "\n      <p>You can login using your Google or Facebook account or you can set up a new account using your email address. By doing that you can ensure that your progress is safely synchronized over the internet and it allows you to continue your playthrough on different devices.</p>\n      <p>To login open the settings menu and choose the login option. Then pick the type of the account you want to use and follow with the login details. That’s it! Next time you open the game you will be signed in automatically.</p>\n    ",
            position: 3
        }, {
            id: "2",
            title: "Item Types",
            text: "\n      <p>On your journey as a Little Alchemist you’ll encounter a few different types of items.</p>\n      <p><strong>Basic Items</strong> - they (usually) don’t come from specific combinations. These are the items you get from the beginning or the items you unlocked by satisfying certain conditions.</p>\n      <p><strong>Unlockable Items</strong> - as mentioned above, some items will become available only when you accomplish certain goals. They can be unlocked by reaching progress milestones or finding enough related items.</p>\n      <p><strong>Final Items</strong> - they don’t mix with any other items. To make things easier for you, when you can tap them they’re removed from the workspace. If you ever want to access them you can always find them in the encyclopedia.</p>\n      <p><strong>Depleted Items</strong> - they start as regular items but as you play and discover new combinations you may find all possible combinations for an item. If that happens it becomes depleted and when you tap it, it disappears from the workspace and from the library as it’s no longer useful to you. Of course you can always find it in the encyclopedia.</p>\n    ",
            position: 0
        }, {
            id: "3",
            title: "Duplicating Items",
            text: "\n      <p>You can duplicate any item on the workspace by double-tapping it. The copy will appear over the original item and you can go back to mixing items without the need of scrolling through the library!</p>\n    ",
            position: 1
        }, {
            id: "4",
            title: "Item Details",
            text: "\n      <p>If you want to see how you made an item or in which combinations you used it so far, you can go to encyclopedia and find it on the item list. Or you can press and hold the item on the workspace or in the library. It will automatically bring up the details page for you.</p>\n    ",
            position: 2
        }, {
            id: "5",
            title: "Using Hints",
            text: "\n      <p>If ever get stuck you can try using hints!</p>\n      <p>Click the hints button, follow to the Official Little Alchemy 2 Hints page and get random hints that will help you get unstuck!</p>\n    ",
            position: 4
        }, {
            id: "6",
            title: "Resetting Progress",
            text: "\n      <p>If you ever decide you want to start over by going to the settings menu and choosing the “reset progress” option. The game will ask you to confirm your decision.</p>\n      <p>Be careful as there’s no way to restore your progress when you decide to start over!</p>\n    ",
            position: 6
        }, {
            id: "7",
            title: "Save Synchronization Errors",
            text: "\n      <p>Sometimes, especially if you play on many different devices and you happened to reset your progress on one of them, you may encounter a save synchronization error.</p>\n      <p>Don’t worry! None of your progress will be lost! On the next load the game will ask you if you want to combine the local and cloud save or if you want to pick just one of them.</p>\n    ",
            position: 7
        }, {
            id: "8",
            title: "Using The Encyclopedia",
            text: "\n      <p>Encyclopedia is at the heart of any research! Here’s a few tips how to get the most out it if.</p>\n      <p>The items tab displays a list of all items you discovered in the game. You can find here all of the final and depleted that don’t show up in the library. You can toggle the categories to filter the content of the list. And if you found an item you want to use, you can tap the ‘add to workspace’ button on the right.</p>\n      <p>Tapping on any item icon in the encyclopedia will bring up the details page for this item. There you can find the item description, when was the first time you discovered this item, which categories it belongs to and how it relates to other items.</p>\n      <p>The stats tab will give you various statistics about your progress.</p>\n      <p>The news tab includes all important info about the game.</p>\n    ",
            position: 5
        }]
          , Ct = Et
          , _t = [{
            text: "You can duplicate any item on the workspace by double-tapping it.",
            ref: "3"
        }, {
            text: "You can bring up a details page for any item by long-pressing it.",
            ref: "4"
        }, {
            text: "Some items can be mixed with another copy of itself!",
            ref: "2"
        }, {
            text: "If you accidentally cleaned up your workspace, don’t worry! You can tap the “revert” button to undo your mistake.",
            ref: "2"
        }, {
            text: "If you ever get stuck try using a hint!",
            ref: "5"
        }, {
            text: "You can sign in using your Google and Facebook accounts or your email. It allows you to sync progress between different devices.",
            ref: "1"
        }, {
            text: "Some items can be unlocked by finding a few of the related items or by reaching a certain progress, so keep exploring!",
            ref: "2"
        }, {
            text: "Final items don’t mix with any other items. When you tap them they’re removed from the workspace but you can always find them in the encyclopedia.",
            ref: "2"
        }, {
            text: "If you use an item in all possible combinations it becomes depleted. When you tap a depleted item it’s removed from the library but you can always find it in the encyclopedia.",
            ref: "2"
        }]
          , wt = _t
          , St = function() {
            function t() {}
            return t.prototype.getEntry = function(t) {
                return this.data.find((function(e) {
                    var n = e.id;
                    return t === n
                }
                )) || null
            }
            ,
            t.prototype.getRandomEntry = function() {
                return this.randomEntry
            }
            ,
            t.prototype.getRandomTip = function() {
                var t = Math.floor(Math.random() * this.tips.length);
                return this.tips[t]
            }
            ,
            Object.defineProperty(t.prototype, "data", {
                get: function() {
                    return Ct.sort((function(t, e) {
                        return t.position - e.position
                    }
                    ))
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "tips", {
                get: function() {
                    return wt
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "randomEntry", {
                get: function() {
                    var t = Math.floor(Math.random() * this.data.length);
                    return this.data[t]
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        }()
          , Tt = new St
          , xt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.hasEnough ? n("div", {
                staticClass: "recent card"
            }, [n("div", {
                staticClass: "center bold"
            }, [t._v(" Recently Discovered ")]), n("div", {
                staticClass: "item-list flex-row"
            }, [t._l(t.recent, (function(e) {
                return [n("div", {
                    key: e.id,
                    staticClass: "item-image-name",
                    on: {
                        click: function(n) {
                            return t.showDetails(e)
                        }
                    }
                }, [n("img", {
                    staticClass: "icon",
                    attrs: {
                        src: t.getIcon(e)
                    }
                }), n("div", {
                    staticClass: "name"
                }, [t._v(t._s(e.name))])])]
            }
            ))], 2)]) : t._e()
        }
          , Ot = []
          , kt = ""
          , It = function(t) {
            return kt + "/static/icons/" + t + ".svg"
        }
          , At = function(t, e, n, s) {
            void 0 === s && (s = V);
            var i = e.concat([])
              , r = i.sort((function(t, e) {
                var s = n[t] || -1
                  , i = n[e] || -1;
                return s > i ? -1 : s < i ? 1 : 0
            }
            ))
              , a = r.slice(0, s)
              , o = a.map((function(e) {
                return t[e]
            }
            ));
            return o
        }
          , Pt = bt.extend({
            name: "recent",
            computed: Object(p["a"])(Object(p["a"])({}, ft(["elements", "order", "timestamps", "prime"])), {
                recent: function() {
                    return At(this.elements, this.order, this.timestamps)
                },
                hasEnough: function() {
                    var t = this.order.length - this.prime.length;
                    return t >= V
                }
            }),
            methods: {
                getIcon: function(t) {
                    var e = t.id;
                    return It(e)
                },
                showDetails: function(t) {
                    var e = t.name;
                    this.$router.push({
                        name: h["RouteName"].ELEMENT,
                        params: {
                            name: e
                        }
                    })
                }
            }
        })
          , Rt = Pt
          , Nt = (n("d486"),
        n("a6c2"))
          , Lt = Object(Nt["a"])(Rt, xt, Ot, !1, null, null, null)
          , jt = Lt.exports
          , Dt = bt.extend({
            name: "home",
            components: {
                Recent: jt
            },
            computed: Object(p["a"])(Object(p["a"])({}, ft(["elementsCount", "counts", "newsList"])), {
                hasElements: function() {
                    return this.elementsCount > 0
                },
                randomTip: function() {
                    return Tt.getRandomTip()
                },
                news: function() {
                    var t = this.newsList;
                    return t.length ? t[0] : null
                }
            }),
            methods: {
                navigateToHelp: function() {
                    this.$router.push({
                        name: h["RouteName"].HELP
                    })
                },
                navigateToHelpEntry: function() {
                    this.$router.push({
                        name: h["RouteName"].HELP_ITEM,
                        params: {
                            id: this.randomTip.ref
                        }
                    })
                },
                navigateToNews: function() {
                    this.news && this.$router.push({
                        name: h["RouteName"].NEWS_ITEM,
                        params: {
                            id: this.news.id
                        }
                    })
                }
            }
        })
          , $t = Dt
          , Mt = Object(Nt["a"])($t, vt, yt, !1, null, null, null)
          , Bt = Mt.exports
          , Ht = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "element",
                staticClass: "list container"
            }, [n("Search"), n("CategoriesPicker"), t.isSortingEnabled ? n("div", [n("button", {
                class: {
                    "js-active": "alphabet" === t.elementsSortBy
                },
                on: {
                    click: function(e) {
                        return t.changeSorting("alphabet")
                    }
                }
            }, [t._v(" " + t._s("asc" === t.elementsSortOrder ? "A to Z" : "Z to A") + " ")]), n("button", {
                class: {
                    "js-active": "timestamp" === t.elementsSortBy
                },
                on: {
                    click: function(e) {
                        return t.changeSorting("timestamp")
                    }
                }
            }, [t._v(" " + t._s("asc" === t.elementsSortOrder ? "Newest to oldest" : "Oldest to newest") + " ")])]) : t._e(), n("div", {
                ref: "listContainer",
                staticClass: "item-list"
            }, [n("ListScroller", {
                ref: "scroller",
                attrs: {
                    items: t.elementsOrder,
                    itemHeight: 72,
                    listHeight: t.listHeight
                }
            }), t.hasResults ? t._e() : n("div", {
                staticClass: "center"
            }, [t._v(" No items found! ")])], 1)], 1)
        }
          , Ft = []
          , Wt = !1;
        try {
            var Ut = Object.defineProperty({}, "passive", {
                get: function() {
                    return Wt = !0,
                    null
                }
            });
            window.addEventListener("test", (function() {}
            ), Ut)
        } catch (ds) {}
        var Gt = !!Wt && {
            passive: !0
        }
          , Kt = Gt
          , Xt = function(t) {
            return P.includes(t)
        }
          , Yt = function(t, e) {
            return t === h["PseudoCategory"].FINAL ? G(e) : t === h["PseudoCategory"].BASIC ? X(e) || Y(e) : t === h["PseudoCategory"].EXHAUSTED && K(e)
        }
          , qt = function(t, e) {
            return q(e, t)
        }
          , Qt = function(t, e) {
            void 0 === e && (e = []);
            var n = t;
            return e.length ? (e.forEach((function(t) {
                var e = Xt(t) ? Yt : qt;
                n = n.filter((function(n) {
                    return e(t, n)
                }
                ))
            }
            )),
            n) : n
        }
          , Vt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "flex-row input-horizontal"
            }, [n("input", {
                staticClass: "search",
                attrs: {
                    type: "text",
                    id: t.SEARCH_ID,
                    placeholder: "search..."
                },
                domProps: {
                    value: t.searchQuery
                },
                on: {
                    keyup: [t.setQuery, function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.clear(e)
                    }
                    ]
                }
            }), n("div", {
                staticClass: "input-clear input-button",
                on: {
                    click: t.clear
                }
            })])
        }
          , zt = []
          , Jt = n("e59c")
          , Zt = n.n(Jt)
          , te = bt.extend({
            name: "search",
            computed: Object(p["a"])(Object(p["a"])({}, ft(["searchQuery"])), {
                SEARCH_ID: function() {
                    return m
                }
            }),
            created: function() {
                this.setQuery = Zt()(this.setQuery, 150)
            },
            methods: {
                setQuery: function(t) {
                    this.$store.dispatch("search", t.target.value)
                },
                clear: function() {
                    this.$store.dispatch("searchClear")
                }
            }
        })
          , ee = te
          , ne = Object(Nt["a"])(ee, Vt, zt, !1, null, null, null)
          , se = ne.exports
          , ie = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("div", {
                staticClass: "categories-open",
                on: {
                    click: t.open
                }
            }, [t._v(" categories "), n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 14.51 9.68"
                }
            }, [n("path", {
                attrs: {
                    fill: "none",
                    stroke: "#d19945",
                    "stroke-miterlimit": "10",
                    "stroke-width": "3",
                    d: "M13.76.66l-6.5 7.49L.76.66"
                }
            })])]), n("div", {
                staticClass: "categories-selected-list flex-row flex-wrap"
            }, [t._l(t.filters, (function(e) {
                return n("div", {
                    key: e,
                    staticClass: "category-item",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.toggle(e)
                        }
                    }
                }, [t._v(" " + t._s(t.getTagName(e).toLowerCase()) + " ")])
            }
            )), n("div", {
                staticClass: "input-clear",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.clear(e)
                    }
                }
            })], 2), n("div", {
                staticClass: "categories-dropdown",
                class: t.classes
            }, [n("div", {
                staticClass: "close-dropdown",
                class: t.classes,
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.close(e)
                    }
                }
            }, [n("div", [t._v("close")])]), n("div", {
                staticClass: "categories-dropdown-list"
            }, [n("div", {
                staticClass: "category-item header"
            }, [t._v(" essentials ")]), t._l(t.pseudoCategories, (function(e) {
                return n("div", {
                    key: e,
                    staticClass: "category-item",
                    class: {
                        "js-active": t.isFilterActive(e)
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.toggle(e)
                        }
                    }
                }, [t._v(" " + t._s(e) + " ")])
            }
            )), n("div", {
                staticClass: "category-item header"
            }, [t._v(" categories ")]), t._l(t.categoriesWithNames, (function(e) {
                var s = e.id
                  , i = e.name;
                return n("div", {
                    key: s,
                    staticClass: "category-item",
                    class: {
                        "js-active": t.isFilterActive(s)
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.toggle(s)
                        }
                    }
                }, [t._v(" " + t._s(i) + " ")])
            }
            ))], 2)])])
        }
          , re = []
          , ae = bt.extend({
            name: "categories-picker",
            data: function() {
                return {
                    isActive: !1
                }
            },
            computed: Object(p["a"])(Object(p["a"])({}, ft(["counts", "categoriesList", "categoriesElements", "filters"])), {
                classes: function() {
                    return {
                        "js-active": this.isActive
                    }
                },
                categoriesCounts: function() {
                    var t, e = this.counts, n = (t = {},
                    t[h["PseudoCategory"].BASE] = e[h["PseudoCategory"].BASE],
                    t[h["PseudoCategory"].BASIC] = e[h["PseudoCategory"].BASIC],
                    t[h["PseudoCategory"].FINAL] = e[h["PseudoCategory"].FINAL],
                    t[h["PseudoCategory"].EXHAUSTED] = e[h["PseudoCategory"].EXHAUSTED],
                    t);
                    return Object.entries(this.categoriesElements).forEach((function(t) {
                        var e = t[0]
                          , s = t[1];
                        n[e] = s.length
                    }
                    )),
                    n
                },
                pseudoCategoriesNames: function() {
                    return R
                },
                pseudoCategories: function() {
                    var t = this;
                    return this.pseudoCategoriesNames.filter((function(e) {
                        return t.categoriesCounts[e] > 0
                    }
                    ))
                },
                categories: function() {
                    var t = this
                      , e = this.categoriesCounts
                      , n = Array.from(this.categoriesList).filter((function(e) {
                        return !t.pseudoCategoriesNames.includes(e)
                    }
                    ))
                      , s = n.filter((function(t) {
                        return e[t] > 0
                    }
                    ));
                    return s
                },
                categoriesWithNames: function() {
                    var t = this;
                    return this.categories.map((function(e) {
                        return {
                            id: e,
                            name: t.getTagName(e)
                        }
                    }
                    )).sort((function(t, e) {
                        return F(t.name, e.name)
                    }
                    ))
                }
            }),
            methods: {
                getElement: function(t) {
                    return this.$store.getters.elementById(t)
                },
                getTagName: function(t) {
                    return R.includes(t) ? t : this.$store.getters.tagNameById(t)
                },
                open: function() {
                    this.isActive = !0
                },
                close: function() {
                    this.isActive = !1
                },
                clear: function() {
                    this.$store.dispatch("filtersClear")
                },
                toggle: function(t) {
                    this.$store.dispatch("filterToggle", t)
                },
                isFilterActive: function(t) {
                    return this.filters.includes(t)
                }
            }
        })
          , oe = ae
          , ce = (n("940d"),
        Object(Nt["a"])(oe, ie, re, !1, null, "4b28aea2", null))
          , ue = ce.exports
          , le = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                ref: "scroller",
                staticClass: "list-scroller",
                style: t.styles
            }, t._l(t.itemsList, (function(e, s) {
                return n("ListElement", {
                    key: s,
                    style: t.getStyle(s),
                    attrs: {
                        data: e
                    }
                })
            }
            )), 1)
        }
          , de = []
          , he = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "list-item",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.showDetails(e)
                    }
                }
            }, [n("div", {
                staticClass: "item-image-name"
            }, [n("img", {
                attrs: {
                    src: t.imageUrl,
                    alt: t.element.name,
                    decoding: "async"
                }
            }), n("div", [t._v(t._s(t.element.name))])]), t.canAddToWorkspace ? n("div", {
                staticClass: "add-to-workspace-container",
                attrs: {
                    title: "add to workspace"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.addToWorkspace(e)
                    }
                }
            }, [n("IconAddToWorkspace", {
                staticClass: "add-to-workspace",
                class: t.classes
            })], 1) : t._e()])
        }
          , me = []
          , fe = function(t) {
            return new Promise((function(e) {
                return window.setTimeout(e, t)
            }
            ))
        }
          , pe = (window.requestAnimationFrame,
        function() {
            return "Edge" !== window.BROWSER
        }
        )
          , ge = n("2e1a")
          , ve = n("755f")
          , ye = (n("862d"),
        ["class", "staticClass", "style", "staticStyle", "attrs"])
          , be = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , s = (e._v,
                e.data)
                  , i = e.children
                  , r = void 0 === i ? [] : i
                  , a = s.class
                  , o = s.staticClass
                  , c = s.style
                  , u = s.staticStyle
                  , l = s.attrs
                  , d = void 0 === l ? {} : l
                  , h = Object(ve["a"])(s, ye);
                return n("svg", Object(ge["a"])({
                    class: [a, o],
                    style: [c, u],
                    attrs: Object.assign({
                        id: "add-to-workspace-icon",
                        "data-name": "Layer 1",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20"
                    }, d)
                }, h), r.concat([n("defs"), n("polyline", {
                    staticClass: "cls-1 frame",
                    attrs: {
                        points: "18.7 10 18.7 18.7 1.3 18.7 1.3 1.3 10 1.3"
                    }
                }), n("g", {
                    staticClass: "cross"
                }, [n("line", {
                    staticClass: "cls-1 cross-vertical",
                    attrs: {
                        x1: "14",
                        y1: "1",
                        x2: "14",
                        y2: "11"
                    }
                }), n("line", {
                    staticClass: "cls-1 cross-horizontal",
                    attrs: {
                        x1: "19",
                        y1: "6",
                        x2: "9",
                        y2: "6"
                    }
                })])]))
            }
        }
          , Ee = bt.extend({
            name: "list-element",
            components: {
                IconAddToWorkspace: be
            },
            props: {
                data: Object
            },
            data: function() {
                return {
                    addedToWorkspace: !1
                }
            },
            computed: {
                element: function() {
                    return this.data
                },
                imageUrl: function() {
                    return It(this.element.id)
                },
                canAddToWorkspace: function() {
                    return this.$store.getters.addToWorkspaceEnabled && !G(this.element) && !K(this.element)
                },
                classes: function() {
                    return {
                        "js-active": pe() && this.addedToWorkspace
                    }
                }
            },
            methods: {
                showDetails: function() {
                    this.$router.push({
                        name: h["RouteName"].ELEMENT,
                        params: {
                            name: this.element.name
                        }
                    })
                },
                addToWorkspace: function() {
                    return Object(p["b"])(this, void 0, void 0, (function() {
                        return Object(p["c"])(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return this.addedToWorkspace = !0,
                                d.emit("ADD_TO_WORKSPACE", this.element.id),
                                [4, fe(1e3 * et)];
                            case 1:
                                return t.sent(),
                                this.addedToWorkspace = !1,
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        })
          , Ce = Ee
          , _e = Object(Nt["a"])(Ce, he, me, !1, null, null, null)
          , we = _e.exports
          , Se = 5
          , Te = 15
          , xe = 0
          , Oe = bt.extend({
            name: "list-scroller",
            props: {
                items: Array,
                listHeight: Number,
                itemHeight: Number
            },
            components: {
                ListElement: we
            },
            data: function() {
                return {
                    starting: 0
                }
            },
            computed: {
                itemsCount: function() {
                    return this.items.length
                },
                itemsList: function() {
                    if (this.itemsCount < this.KEEP)
                        return this.items;
                    var t = this.startIndex
                      , e = (this.KEEP - this.startIndex) % this.KEEP
                      , n = this.items.slice(t, t + this.KEEP)
                      , s = n.slice(e, n.length);
                    return n.splice(e, n.length),
                    n.unshift(s.concat([])),
                    n
                },
                totalHeight: function() {
                    return xe + this.itemsCount * this.itemHeight
                },
                styles: function() {
                    return {
                        height: this.totalHeight + "px",
                        contain: "layout"
                    }
                },
                startIndex: function() {
                    var t = this.starting - Se;
                    return t + this.KEEP > this.itemsCount && (t = this.itemsCount - this.KEEP),
                    Math.max(t, 0)
                },
                KEEP: function() {
                    var t = Math.ceil(this.listHeight / this.itemHeight) + 6
                      , e = Math.max(Te, t);
                    return e % 2 === 0 ? e : e + 1
                }
            },
            created: function() {
                this.initScroll(),
                this.lastY = 0,
                this._startIndex = 0,
                this._KEEP = this.KEEP,
                this._itemHeight = this.itemHeight
            },
            watch: {
                startIndex: function(t) {
                    this._startIndex = t
                },
                KEEP: function(t) {
                    this._KEEP = t
                },
                itemHeight: function(t) {
                    this._itemHeight = t
                }
            },
            methods: {
                initScroll: function() {
                    this.handleScroll = this.handleScroll.bind(this)
                },
                handleScroll: function(t) {
                    var e = this;
                    this.lastY = t,
                    window.requestAnimationFrame((function() {
                        return e.handleScrollChange()
                    }
                    ))
                },
                handleScrollChange: function(t) {
                    if (void 0 === t && (t = this.lastY),
                    !Number.isNaN(t)) {
                        var e = Math.max(0, Math.floor(t / this.itemHeight));
                        this.starting === e || t > this.totalHeight || this.setStarting(e)
                    }
                },
                setStarting: function(t) {
                    this.starting = t
                },
                getKey: function(t) {
                    var e = this._startIndex % this._KEEP;
                    return Math.abs(e - t - this._KEEP) % this._KEEP
                },
                getStyle: function(t) {
                    var e = this.getKey(t)
                      , n = xe + (this._startIndex + e) * this._itemHeight;
                    return {
                        transform: "translate3d(0, " + n + "px, 0)"
                    }
                }
            }
        })
          , ke = Oe
          , Ie = Object(Nt["a"])(ke, le, de, !1, null, null, null)
          , Ae = Ie.exports
          , Pe = 160
          , Re = bt.extend({
            name: "list",
            components: {
                Search: se,
                CategoriesPicker: ue,
                ListScroller: Ae
            },
            data: function() {
                return {
                    listHeight: 0
                }
            },
            computed: Object(p["a"])(Object(p["a"])({}, ft(["elements", "filters", "order", "searchQuery", "searchOrder", "isSearchActive", "elementsSortBy", "elementsSortOrder"])), {
                hasResults: function() {
                    return !!this.elementsOrder.length
                },
                elementsOrder: function() {
                    var t = this.order;
                    return this.isSearching && (t = this.searchOrder),
                    this.getFiltered(t)
                },
                isSearching: function() {
                    return this.isSearchActive
                },
                isSortingEnabled: function() {
                    return nt
                }
            }),
            created: function() {
                this.handleScroll = this.handleScroll.bind(this)
            },
            mounted: function() {
                var t = this;
                this.$el.parentNode && (this.$el.parentNode.scrollTop = 0,
                this.$el.parentNode.addEventListener("scroll", this.handleScroll, Kt)),
                this.offsetTop = Pe,
                this.listHeight = window.innerHeight - Pe,
                this.handleScroll(),
                window.setTimeout((function() {
                    return t.init()
                }
                ), 600)
            },
            beforeDestroy: function() {
                this.$el.parentNode && this.$el.parentNode.removeEventListener("scroll", this.handleScroll),
                this.$store.dispatch("searchClear")
            },
            methods: {
                init: function() {
                    this.updateListHeight(),
                    this.handleScroll()
                },
                handleScroll: function() {
                    if (this.$el.parentNode) {
                        var t = this.$el.parentNode.scrollTop
                          , e = t + this.offsetTop;
                        this.$refs.scroller.handleScroll(e)
                    }
                },
                getElement: function(t) {
                    return this.elements[t]
                },
                getFiltered: function(t) {
                    var e = this
                      , n = t.map((function(t) {
                        return e.getElement(t)
                    }
                    ));
                    return Qt(n, this.filters)
                },
                updateListHeight: function() {
                    var t = this.$refs.listContainer.offsetTop
                      , e = window.innerHeight - t;
                    e && (this.offsetTop = t,
                    this.listHeight = e)
                },
                changeSorting: function(t) {
                    this.$store.dispatch("sortingChange", t)
                }
            }
        })
          , Ne = Re
          , Le = (n("2a0f"),
        Object(Nt["a"])(Ne, Ht, Ft, !1, null, null, null))
          , je = Le.exports
          , De = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container news"
            }, [n("ul", t._l(t.entries, (function(e) {
                return n("router-link", {
                    key: e.id,
                    staticClass: "card",
                    attrs: {
                        tag: "li",
                        to: {
                            name: "news-item",
                            params: {
                                id: e.id
                            }
                        }
                    }
                }, [n("div", {
                    staticClass: "news-entry-date"
                }, [t._v(t._s(e.date))]), n("img", {
                    staticClass: "news-entry-image",
                    attrs: {
                        src: e.img,
                        alt: e.title
                    }
                }), n("div", {
                    staticClass: "news-entry-title center bold"
                }, [t._v(t._s(e.title))])])
            }
            )), 1)])
        }
          , $e = []
          , Me = bt.extend({
            name: "news",
            computed: {
                entries: function() {
                    return this.$store.getters.newsList
                }
            },
            methods: {
                back: function() {
                    this.$router.go(-1)
                }
            }
        })
          , Be = Me
          , He = Object(Nt["a"])(Be, De, $e, !1, null, null, null)
          , Fe = He.exports
          , We = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container news-item"
            }, [n("div", {
                on: {
                    click: t.back
                }
            }, [t._m(0)]), n("div", {
                staticClass: "card"
            }, [t.image ? n("img", {
                staticClass: "news-entry-image",
                attrs: {
                    src: t.image,
                    alt: t.title
                }
            }) : t._e(), n("div", {
                staticClass: "news-entry-title"
            }, [t._v(t._s(t.title))]), n("div", {
                staticClass: "news-entry-date"
            }, [t._v(t._s(t.date))]), n("div", {
                staticClass: "news-entry-body",
                domProps: {
                    innerHTML: t._s(t.text)
                }
            }), t.action ? n("div", ["url" === t.action.type ? n("a", {
                attrs: {
                    href: t.actionData,
                    target: "_blank"
                }
            }, [t._v(" " + t._s(t.actionText) + " ")]) : n("button", {
                on: {
                    click: t.onActionClick
                }
            }, [t._v(" " + t._s(t.actionText) + " ")])]) : t._e()])])
        }
          , Ue = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "back-button"
            }, [s("img", {
                staticClass: "back-arrow",
                attrs: {
                    alt: "back",
                    src: n("b137")
                }
            }), t._v("BACK ")])
        }
        ]
          , Ge = bt.extend({
            name: "news-item",
            data: function() {
                return {
                    data: {}
                }
            },
            computed: {
                title: function() {
                    return this.data.title || ""
                },
                text: function() {
                    return this.data.text || ""
                },
                date: function() {
                    return this.data.date || ""
                },
                image: function() {
                    return this.data.img || null
                },
                action: function() {
                    return this.data.action || null
                },
                actionData: function() {
                    return this.action ? this.action.data : ""
                },
                actionText: function() {
                    return this.action ? this.action.text : ""
                }
            },
            created: function() {
                this.obtainData()
            },
            watch: {
                $route: "obtainData"
            },
            methods: {
                obtainData: function() {
                    if (this.$route.name === h["RouteName"].NEWS_ITEM) {
                        var t = this.$route.params.id
                          , e = x.getNews(t);
                        e ? (this.$set(this, "data", e),
                        st()) : this.$router.push("/")
                    }
                },
                onActionClick: function() {
                    if (this.action) {
                        var t = this.action.type;
                        "event" === t && d.emit.apply(d, this.actionData)
                    }
                },
                back: function() {
                    this.$router.go(-1)
                }
            }
        })
          , Ke = Ge
          , Xe = Object(Nt["a"])(Ke, We, Ue, !1, null, null, null)
          , Ye = Xe.exports
          , qe = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("div", {
                staticClass: "header center"
            }, [t._v("Help and FAQ")]), t._l(t.entries, (function(e) {
                return n("router-link", {
                    key: e.id,
                    staticClass: "card bold cursor-pointer",
                    attrs: {
                        tag: "div",
                        to: {
                            name: "help-item",
                            params: {
                                id: e.id
                            }
                        }
                    }
                }, [t._v(" " + t._s(e.title) + " ")])
            }
            ))], 2)
        }
          , Qe = []
          , Ve = bt.extend({
            name: "help",
            computed: {
                entries: function() {
                    return Tt.data
                }
            },
            methods: {
                back: function() {
                    this.$router.go(-1)
                }
            }
        })
          , ze = Ve
          , Je = Object(Nt["a"])(ze, qe, Qe, !1, null, null, null)
          , Ze = Je.exports
          , tn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("div", {
                on: {
                    click: t.back
                }
            }, [t._m(0)]), n("div", {
                staticClass: "card help-item"
            }, [n("div", {
                staticClass: "header"
            }, [t._v(t._s(t.title))]), n("div", {
                domProps: {
                    innerHTML: t._s(t.text)
                }
            })])])
        }
          , en = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "back-button"
            }, [s("img", {
                staticClass: "back-arrow",
                attrs: {
                    alt: "back",
                    src: n("b137")
                }
            }), t._v("BACK ")])
        }
        ]
          , nn = bt.extend({
            name: "help-item",
            data: function() {
                return {
                    data: {}
                }
            },
            computed: {
                title: function() {
                    return this.data.title || ""
                },
                text: function() {
                    return this.data.text || ""
                }
            },
            created: function() {
                this.obtainData()
            },
            watch: {
                $route: "obtainData"
            },
            methods: {
                obtainData: function() {
                    if (this.$route.name === h["RouteName"].HELP_ITEM) {
                        var t = this.$route.params.id
                          , e = Tt.getEntry(t);
                        e ? (this.$set(this, "data", e),
                        st()) : this.$router.push({
                            name: h["RouteName"].HELP
                        })
                    }
                },
                back: function() {
                    this.$router.push({
                        name: h["RouteName"].HELP
                    })
                }
            }
        })
          , sn = nn
          , rn = Object(Nt["a"])(sn, tn, en, !1, null, null, null)
          , an = rn.exports
          , on = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("div", {
                staticClass: "card cursor-pointer",
                on: {
                    click: t.showList
                }
            }, [n("div", {
                staticClass: "center bold card-2x"
            }, [t._v(t._s(Math.min(t.baseCounts.discovered, t.baseCounts.total)) + "/" + t._s(t.baseCounts.total))]), n("div", {
                staticClass: "center"
            }, [t._v("discovered items")])]), t.baseCounts[t.FINAL] > 0 ? n("div", {
                staticClass: "card cursor-pointer",
                on: {
                    click: function(e) {
                        return t.showFilter(t.FINAL)
                    }
                }
            }, [n("div", {
                staticClass: "center bold card-2x"
            }, [t._v(t._s(t.baseCounts[t.FINAL]))]), n("div", {
                staticClass: "center"
            }, [t._v("final items")])]) : t._e(), n("div", {
                staticClass: "card cursor-pointer",
                on: {
                    click: function(e) {
                        return t.showFilter(t.BASIC)
                    }
                }
            }, [n("div", {
                staticClass: "center bold card-2x"
            }, [t._v(t._s(t.basicCount))]), n("div", {
                staticClass: "center"
            }, [t._v("basic items")])]), t.baseCounts[t.EXHAUSTED] > 0 ? n("div", {
                staticClass: "card cursor-pointer",
                on: {
                    click: function(e) {
                        return t.showFilter(t.EXHAUSTED)
                    }
                }
            }, [n("div", {
                staticClass: "center bold card-2x"
            }, [t._v(t._s(t.baseCounts[t.EXHAUSTED]))]), n("div", {
                staticClass: "center"
            }, [t._v("depleted items")])]) : t._e()])
        }
          , cn = []
          , un = bt.extend({
            name: "stats",
            computed: {
                baseCounts: function() {
                    return this.$store.getters.counts
                },
                BASIC: function() {
                    return h["PseudoCategory"].BASIC
                },
                FINAL: function() {
                    return h["PseudoCategory"].FINAL
                },
                EXHAUSTED: function() {
                    return h["PseudoCategory"].EXHAUSTED
                },
                basicCount: function() {
                    return this.baseCounts.base + this.baseCounts.basic
                }
            },
            methods: {
                showFilter: function(t) {
                    this.$store.dispatch("filterSet", t),
                    this.showList()
                },
                showList: function() {
                    this.$router.push({
                        name: h["RouteName"].LIST
                    })
                }
            }
        })
          , ln = un
          , dn = Object(Nt["a"])(ln, on, cn, !1, null, null, null)
          , hn = dn.exports
          , mn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [t.element ? n("div", [n("div", {
                on: {
                    click: t.back
                }
            }, [t._m(0)]), n("div", {
                staticClass: "details-item-icon"
            }, [n("img", {
                attrs: {
                    src: t.getIconURL(t.element.id),
                    alt: t.element.name
                }
            })]), n("div", {
                staticClass: "details-item-name"
            }, [t._v(" " + t._s(t.element.name) + " ")]), n("div", {
                staticClass: "details-item-description"
            }, [t._v(" " + t._s(t.description) + " ")]), t.timestamp > 0 ? n("div", {
                staticClass: "details-item-properties"
            }, [t._v(" Discovered "), n("strong", [t._v(t._s(t.timeSinceCreated))])]) : t._e(), n("Categories", {
                attrs: {
                    element: t.element
                }
            }), t.hasParents ? n("Combinations", {
                attrs: {
                    element: t.element
                },
                on: {
                    details: t.showDetails
                }
            }) : t._e(), t.isFinal ? t._e() : n("Makes", {
                attrs: {
                    element: t.element
                },
                on: {
                    details: t.showDetails
                }
            }), t.canAddToWorkspace ? n("div", {
                staticClass: "center add-to-workspace-button",
                on: {
                    click: t.addToWorkspace
                }
            }, [t._v(" add to workspace "), n("IconAddToWorkspace", {
                staticClass: "add-to-workspace",
                class: t.iconClasses
            })], 1) : t._e()], 1) : t._e()])
        }
          , fn = [function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "back-button"
            }, [s("img", {
                staticClass: "back-arrow",
                attrs: {
                    alt: "back",
                    src: n("b137")
                }
            }), t._v(" BACK")])
        }
        ]
          , pn = 60
          , gn = 60 * pn
          , vn = 24 * gn
          , yn = function(t) {
            var e = Date.now()
              , n = Math.round((e - t) / 1e3)
              , s = Math.floor(n / vn)
              , i = Math.floor((n - s * vn) / gn)
              , r = Math.floor((n - s * vn - i * gn) / pn);
            return {
                days: s,
                hours: i,
                minutes: r
            }
        }
          , bn = function(t) {
            var e = yn(t)
              , n = e.days
              , s = e.hours
              , i = e.minutes;
            return 0 === n && 0 === s && i < 2 ? "just now" : 0 === n && 0 === s ? i + " minutes ago" : 0 === n && 1 === s ? s + " hour " + i + " minutes ago" : 0 === n && s < 3 ? s + " hours " + i + " minutes ago" : 0 === n ? s + " hours ago" : 1 === n ? n + " day ago" : n + " days ago"
        }
          , En = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.hasTags ? n("div", {
                staticClass: "details-item-categories"
            }, [n("h2", [t._v("categories")]), n("ul", {
                staticClass: "flex-row"
            }, [t.isBasic || t.isBase ? n("li", {
                on: {
                    click: function(e) {
                        return t.showFilter(t.PSEUDO_CATEGORIES.BASIC)
                    }
                }
            }, [t._v(" basic ")]) : t._e(), t.isFinal ? n("li", {
                on: {
                    click: function(e) {
                        return t.showFilter(t.PSEUDO_CATEGORIES.FINAL)
                    }
                }
            }, [t._v(" final ")]) : t._e(), t.isExhausted ? n("li", {
                on: {
                    click: function(e) {
                        return t.showFilter(t.PSEUDO_CATEGORIES.EXHAUSTED)
                    }
                }
            }, [t._v(" depleted ")]) : t._e(), t._l(t.element.tags, (function(e) {
                return n("li", {
                    key: e,
                    on: {
                        click: function(n) {
                            return t.showFilter(e)
                        }
                    }
                }, [t._v(" " + t._s(t.getTagName(e)) + " ")])
            }
            ))], 2)]) : t._e()
        }
          , Cn = []
          , _n = bt.extend({
            name: "details-categories",
            props: {
                element: Object
            },
            computed: {
                PSEUDO_CATEGORIES: function() {
                    return h["PseudoCategory"]
                },
                isFinal: function() {
                    return G(this.element)
                },
                isBasic: function() {
                    return Y(this.element)
                },
                isBase: function() {
                    return X(this.element)
                },
                isExhausted: function() {
                    return K(this.element)
                },
                hasTags: function() {
                    return this.isBasic || this.isFinal || this.isExhausted || !!this.element.tags.length
                }
            },
            methods: {
                getTagName: function(t) {
                    return this.$store.getters.tagNameById(t)
                },
                showFilter: function(t) {
                    this.$store.dispatch("filterSet", t.toLowerCase()),
                    this.$router.push({
                        name: h["RouteName"].LIST
                    })
                }
            }
        })
          , wn = _n
          , Sn = Object(Nt["a"])(wn, En, Cn, !1, null, null, null)
          , Tn = Sn.exports
          , xn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "details-item-combinations"
            }, [n("h2", [t._v("combinations")]), t._l(t.mixedParents, (function(e, s) {
                var i = e[0]
                  , r = e[1];
                return n("div", {
                    key: s,
                    staticClass: "item-pair flex-row"
                }, [n("div", {
                    staticClass: "item-image-name",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.showDetails(i)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: t.getIconURL(i)
                    }
                }), n("div", [t._v(t._s(t.getName(i)))])]), n("div", {
                    staticClass: "item-pair-plus"
                }, [t._v(" + ")]), n("div", {
                    staticClass: "item-image-name",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.showDetails(r)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: t.getIconURL(r)
                    }
                }), n("div", [t._v(t._s(t.getName(r)))])])])
            }
            )), t.connectionsLeft ? n("div", {
                staticClass: "center"
            }, [t._v(" " + t._s(t.hasAnyMixed ? "and" : "") + " " + t._s(t.connectionsLeftText) + " undiscovered combination" + t._s(1 !== t.connectionsLeft ? "s" : "") + "... ")]) : t._e()], 2)
        }
          , On = []
          , kn = bt.extend({
            name: "details-combinations",
            props: {
                element: Object
            },
            computed: Object(p["a"])(Object(p["a"])({}, ft(["areParentsMixed", "elementById"])), {
                mixedParents: function() {
                    return this.element.parents.filter(this.areParentsMixed)
                },
                hasAnyMixed: function() {
                    return !!this.mixedParents.length
                },
                connectionsLeft: function() {
                    var t = this.mixedParents.length;
                    return this.element.parents.length - t
                },
                connectionsLeftText: function() {
                    return this.connectionsLeft <= J ? "" + this.connectionsLeft : J + "+"
                }
            }),
            methods: {
                getName: function(t) {
                    var e = this.elementById(t);
                    return e ? e.name : ""
                },
                getIconURL: function(t) {
                    return It(t)
                },
                showDetails: function(t) {
                    this.$emit("details", t)
                }
            }
        })
          , In = kn
          , An = Object(Nt["a"])(In, xn, On, !1, null, null, null)
          , Pn = An.exports
          , Rn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "details-item-children"
            }, [n("h2", [t._v("makes")]), n("div", {
                staticClass: "item-list flex-row"
            }, t._l(t.mixedChildren, (function(e) {
                return n("div", {
                    key: e,
                    staticClass: "item-image-name",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.showDetails(e)
                        }
                    }
                }, [n("img", {
                    attrs: {
                        src: t.getIconURL(e)
                    }
                }), n("div", [t._v(t._s(t.getName(e)))])])
            }
            )), 0), !t.hasChildrenLeft && t.hasChildrenCombinationsLeft ? n("div", {
                staticClass: "center"
            }, [t._v(" all items discovered, " + t._s(t.childrenCombinationsLeftText) + " combination" + t._s(1 !== t.childrenCombinationsLeft ? "s" : "") + " remaining... ")]) : t.hasChildrenLeft ? n("div", {
                staticClass: "center"
            }, [t._v(" " + t._s(t.mixedChildren.length ? "and" : "") + " " + t._s(t.childrenLeftText) + " undiscovered item" + t._s(1 !== t.childrenLeft ? "s" : "") + "... ")]) : t._e()])
        }
          , Nn = []
          , Ln = bt.extend({
            name: "details-makes",
            props: {
                element: Object
            },
            computed: Object(p["a"])(Object(p["a"])({}, ft(["wasDiscoveredUsing", "elementById", "areParentsMixed"])), {
                mixedChildren: function() {
                    var t = this;
                    return this.element.children.filter((function(e) {
                        return t.wasDiscoveredUsing(t.element.id, e)
                    }
                    ))
                },
                childrenLeft: function() {
                    var t = this.mixedChildren.length;
                    return this.element.children.length - t
                },
                hasChildrenLeft: function() {
                    return !!this.childrenLeft
                },
                childrenLeftText: function() {
                    return this.childrenLeft <= Z ? "" + this.childrenLeft : Z + "+"
                },
                childrenCombinationsLeft: function() {
                    var t = this
                      , e = this.element.children.length - this.mixedChildren.length;
                    if (e > 0)
                        return 0;
                    var n = 0;
                    return this.element.children.forEach((function(e) {
                        var s = t.elementById(e);
                        s && s.parents && s.parents.forEach((function(e) {
                            if (e.includes(t.element.id)) {
                                var s = t.areParentsMixed(e);
                                s || (n += 1)
                            }
                        }
                        ))
                    }
                    )),
                    n
                },
                hasChildrenCombinationsLeft: function() {
                    return !!this.childrenCombinationsLeft
                },
                childrenCombinationsLeftText: function() {
                    var t = this.childrenCombinationsLeft;
                    return t <= tt ? "" + t : tt + "+"
                }
            }),
            methods: {
                getName: function(t) {
                    var e = this.elementById(t);
                    return e ? e.name : ""
                },
                getIconURL: function(t) {
                    return It(t)
                },
                showDetails: function(t) {
                    this.$emit("details", t)
                }
            }
        })
          , jn = Ln
          , Dn = Object(Nt["a"])(jn, Rn, Nn, !1, null, null, null)
          , $n = Dn.exports
          , Mn = bt.extend({
            name: "details-element",
            components: {
                Categories: Tn,
                Combinations: Pn,
                Makes: $n,
                IconAddToWorkspace: be
            },
            data: function() {
                return {
                    element: null,
                    addedToWorkspace: !1
                }
            },
            created: function() {
                this.obtainData()
            },
            watch: {
                $route: "obtainData"
            },
            computed: Object(p["a"])(Object(p["a"])({}, ft(["addToWorkspaceEnabled", "elementTimestamp", "elementByName", "elementById"])), {
                isFinal: function() {
                    return G(this.element)
                },
                isBasic: function() {
                    return Y(this.element)
                },
                isBase: function() {
                    return X(this.element)
                },
                isExhausted: function() {
                    return K(this.element)
                },
                hasParents: function() {
                    return W(this.element)
                },
                timestamp: function() {
                    return this.element ? this.elementTimestamp(this.element.id) : 0
                },
                timeSinceCreated: function() {
                    return bn(this.timestamp)
                },
                canAddToWorkspace: function() {
                    return this.addToWorkspaceEnabled && !this.isFinal && !this.isExhausted
                },
                description: function() {
                    return a.getDescriptionById(this.element.id)
                },
                iconClasses: function() {
                    return {
                        "js-active": pe() && this.addedToWorkspace
                    }
                }
            }),
            methods: {
                back: function() {
                    this.$router.go(-1)
                },
                obtainData: function() {
                    if (this.$route.name === h["RouteName"].ELEMENT) {
                        var t = this.$route.params.name
                          , e = this.elementByName(t);
                        e ? (this.$set(this, "element", e),
                        st()) : this.$router.push("/")
                    }
                },
                getName: function(t) {
                    var e = this.elementById(t);
                    return e ? e.name : ""
                },
                getIconURL: function(t) {
                    return It(t)
                },
                showDetails: function(t) {
                    var e = this.getName(t);
                    null !== e && this.$router.push({
                        name: h["RouteName"].ELEMENT,
                        params: {
                            name: e
                        }
                    })
                },
                addToWorkspace: function() {
                    return Object(p["b"])(this, void 0, void 0, (function() {
                        return Object(p["c"])(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return this.element ? (this.addedToWorkspace = !0,
                                d.emit("ADD_TO_WORKSPACE", this.element.id),
                                [4, fe(1e3 * et)]) : [2];
                            case 1:
                                return t.sent(),
                                this.addedToWorkspace = !1,
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        })
          , Bn = Mn
          , Hn = Object(Nt["a"])(Bn, mn, fn, !1, null, null, null)
          , Fn = Hn.exports;
        s["a"].use(gt["a"]);
        var Wn = [{
            path: "/",
            name: h["RouteName"].HOME,
            component: Bt
        }, {
            path: "/list",
            name: h["RouteName"].LIST,
            component: je
        }, {
            path: "/element/:name",
            name: h["RouteName"].ELEMENT,
            component: Fn
        }, {
            path: "/news",
            name: h["RouteName"].NEWS,
            component: Fe
        }, {
            path: "/news/:id",
            name: h["RouteName"].NEWS_ITEM,
            component: Ye
        }, {
            path: "/help",
            name: h["RouteName"].HELP,
            component: Ze
        }, {
            path: "/help/:id",
            name: h["RouteName"].HELP_ITEM,
            component: an
        }, {
            path: "/stats",
            name: h["RouteName"].STATS,
            component: hn
        }]
          , Un = new gt["a"]({
            routes: Wn,
            base: "/encyclopedia/",
            mode: "abstract"
        });
        Un.push("/"),
        Un.beforeEach((function(t, e, n) {
            n(),
            window.setTimeout((function() {
                return st(0)
            }
            ), 250)
        }
        ));
        var Gn = Un
          , Kn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "full",
                attrs: {
                    id: "app"
                }
            }, [n("EncyclopediaMenu"), n("div", {
                staticClass: "content",
                attrs: {
                    id: t.CONTENT_ID
                }
            }, [n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n("router-view")], 1)], 1)], 1)
        }
          , Xn = []
          , Yn = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "encyclopedia-menu"
            }, [n("router-link", {
                staticClass: "menu-button",
                attrs: {
                    tag: "div",
                    to: {
                        name: t.RouteName.HOME
                    },
                    "exact-active-class": "js-active js-animate"
                }
            }, [n("IconHome", {
                staticClass: "menu-button-image"
            }), n("div", {
                staticClass: "menu-button-label"
            }, [t._v("home")])], 1), n("router-link", {
                staticClass: "menu-button",
                attrs: {
                    tag: "div",
                    to: {
                        name: t.RouteName.LIST
                    },
                    "exact-active-class": "js-active js-animate"
                }
            }, [n("IconItems", {
                staticClass: "menu-button-image"
            }), n("div", {
                staticClass: "menu-button-label"
            }, [t._v("items")])], 1), n("router-link", {
                staticClass: "menu-button",
                attrs: {
                    tag: "div",
                    to: {
                        name: t.RouteName.STATS
                    },
                    "exact-active-class": "js-active js-animate"
                }
            }, [n("IconStats", {
                staticClass: "menu-button-image"
            }), n("div", {
                staticClass: "menu-button-label"
            }, [t._v("stats")])], 1), t.hasNews ? n("router-link", {
                staticClass: "menu-button",
                attrs: {
                    tag: "div",
                    to: {
                        name: t.RouteName.NEWS
                    },
                    "exact-active-class": "js-active js-animate"
                }
            }, [n("IconNews", {
                staticClass: "menu-button-image"
            }), n("div", {
                staticClass: "menu-button-label"
            }, [t._v("news")])], 1) : t._e()], 1)
        }
          , qn = []
          , Qn = ["class", "staticClass", "style", "staticStyle", "attrs"]
          , Vn = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , s = (e._v,
                e.data)
                  , i = e.children
                  , r = void 0 === i ? [] : i
                  , a = s.class
                  , o = s.staticClass
                  , c = s.style
                  , u = s.staticStyle
                  , l = s.attrs
                  , d = void 0 === l ? {} : l
                  , h = Object(ve["a"])(s, Qn);
                return n("svg", Object(ge["a"])({
                    class: [a, o],
                    style: [c, u],
                    attrs: Object.assign({
                        id: "icon-home",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, d)
                }, h), r.concat([n("path", {
                    attrs: {
                        d: "M45.7 38.4v6.1h-6.9v-6.1h6.9m3-3H35.8v12.1h12.9V35.4z"
                    }
                }), n("path", {
                    attrs: {
                        d: "M31.93 7.46L57.56 25.4H52.7v31.5H30.6v-19H16.4v19h-5.1V25.4H6.63l25.3-17.94M32 4.1a2.35 2.35 0 00-.8.2L.6 26a1.1 1.1 0 00-.6 1 1.34 1.34 0 001.3 1.4h7v31.5h11.1v-19h8.2v19h28.1V28.4h7a1.38 1.38 0 001.1-.6 1.42 1.42 0 00-.3-1.9L32.8 4.4a1.33 1.33 0 00-.8-.3z"
                    }
                })]))
            }
        }
          , zn = ["class", "staticClass", "style", "staticStyle", "attrs"]
          , Jn = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , s = (e._v,
                e.data)
                  , i = e.children
                  , r = void 0 === i ? [] : i
                  , a = s.class
                  , o = s.staticClass
                  , c = s.style
                  , u = s.staticStyle
                  , l = s.attrs
                  , d = void 0 === l ? {} : l
                  , h = Object(ve["a"])(s, zn);
                return n("svg", Object(ge["a"])({
                    class: [a, o],
                    style: [c, u],
                    attrs: Object.assign({
                        id: "icon-items",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, d)
                }, h), r.concat([n("path", {
                    attrs: {
                        d: "M58.58 31.65A.47.47 0 0159 32a29.2 29.2 0 01-2.82 16.3c-2.5 5-6.1 8.22-9.87 8.74a6.42 6.42 0 01-.85.06A7 7 0 0141.8 56l-2-1.52a6.7 6.7 0 01-2-3.86c-.53-3.78 1.55-8.1 5.7-11.87a29.2 29.2 0 0114.94-7.15h.07m0-3a3.48 3.48 0 00-.46 0c-11.7 1.62-24.65 12-23.2 22.4a9.75 9.75 0 003 5.7l2.25 1.76a10.1 10.1 0 005.34 1.6 9.38 9.38 0 001.3-.08C57.18 58.62 63.6 43.33 62 31.63a3.47 3.47 0 00-3.43-3z"
                    }
                }), n("path", {
                    staticClass: "svg-n svg-m svg-c",
                    attrs: {
                        d: "M53 39c-5 3-12.5 9.5-15 23"
                    }
                }), n("g", [n("path", {
                    staticClass: "svg-n svg-m",
                    attrs: {
                        d: "M31.93 62.44s-11.53.14-15.37 0c-4.15-.15-6.13-1.56-8.43-3.47-4.18-3.47-4.8-8.4-5-10.9-.28-4.5 3-16.17 9.48-22.62 2.4-2.37 6.56-6.33 15.4-6.16 10 .16 16 7.83 16.87 8.9"
                    }
                }), n("path", {
                    staticClass: "svg-n svg-m",
                    attrs: {
                        d: "M21.1 19.8L12.92 5.5a27.26 27.26 0 0128.9.32L34 20"
                    }
                }), n("path", {
                    staticClass: "svg-n svg-m svg-c",
                    attrs: {
                        d: "M23.94 20.1a71.62 71.62 0 01-3 10.85 71.57 71.57 0 01-3.47 7.94m13.53.34a65.14 65.14 0 01-3.9-9 81 81 0 01-2.66-10.07"
                    }
                })])]))
            }
        }
          , Zn = ["class", "staticClass", "style", "staticStyle", "attrs"]
          , ts = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , s = (e._v,
                e.data)
                  , i = e.children
                  , r = void 0 === i ? [] : i
                  , a = s.class
                  , o = s.staticClass
                  , c = s.style
                  , u = s.staticStyle
                  , l = s.attrs
                  , d = void 0 === l ? {} : l
                  , h = Object(ve["a"])(s, Zn);
                return n("svg", Object(ge["a"])({
                    class: [a, o],
                    style: [c, u],
                    attrs: Object.assign({
                        id: "icon-stats",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, d)
                }, h), r.concat([n("rect", {
                    staticClass: "svg-n",
                    attrs: {
                        x: "5.55",
                        width: "13.2",
                        height: "26.3"
                    }
                }), n("rect", {
                    staticClass: "svg-n",
                    attrs: {
                        x: "18.85",
                        width: "13.2",
                        height: "56.4"
                    }
                }), n("rect", {
                    staticClass: "svg-n",
                    attrs: {
                        x: "32.05",
                        width: "13.2",
                        height: "45.4"
                    }
                }), n("rect", {
                    staticClass: "svg-n",
                    attrs: {
                        x: "45.25",
                        width: "13.2",
                        height: "61.2"
                    }
                })]))
            }
        }
          , es = ["class", "staticClass", "style", "staticStyle", "attrs"]
          , ns = {
            functional: !0,
            render: function(t, e) {
                var n = e._c
                  , s = (e._v,
                e.data)
                  , i = e.children
                  , r = void 0 === i ? [] : i
                  , a = s.class
                  , o = s.staticClass
                  , c = s.style
                  , u = s.staticStyle
                  , l = s.attrs
                  , d = void 0 === l ? {} : l
                  , h = Object(ve["a"])(s, es);
                return n("svg", Object(ge["a"])({
                    class: [a, o],
                    style: [c, u],
                    attrs: Object.assign({
                        id: "icon-news",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, d)
                }, h), r.concat([n("g", [n("rect", {
                    staticClass: "svg-n svg-m",
                    attrs: {
                        width: "6.88",
                        height: "39",
                        x: "40.88",
                        y: "12.5",
                        rx: "2",
                        ry: "2"
                    }
                }), n("path", {
                    staticClass: "svg-n svg-m",
                    attrs: {
                        d: "M40.5 48.78c-3.75-2.7-9.72-4.94-14-6.28a100.15 100.15 0 00-16.8-3.28 1.6 1.6 0 01-1.48-1.6V26.4a1.6 1.6 0 011.47-1.6 100.15 100.15 0 0016.75-3.28c4.3-1.34 10.28-3.6 14-6.28"
                    }
                }), n("path", {
                    staticClass: "svg-n svg-j",
                    attrs: {
                        d: "M11.86 39.02L16 55.94h9.25L21.6 40.98M8.5 26.6H5.8a3.6 3.6 0 00-3.6 3.6v3.6a3.6 3.6 0 003.6 3.6h2.7"
                    }
                })]), n("path", {
                    staticClass: "svg-n svg-m svg-c",
                    attrs: {
                        d: "M62 31.38h-6.92m5.92-15l-6.92 3m6.92 27l-6.92-3"
                    }
                })]))
            }
        }
          , ss = bt.extend({
            name: "encyclopedia-menu",
            components: {
                IconHome: Vn,
                IconItems: Jn,
                IconStats: ts,
                IconNews: ns
            },
            computed: {
                RouteName: function() {
                    return h["RouteName"]
                },
                hasNews: function() {
                    return this.$store.getters.hasNews
                }
            }
        })
          , is = ss
          , rs = Object(Nt["a"])(is, Yn, qn, !1, null, null, null)
          , as = rs.exports
          , os = bt.extend({
            name: "app",
            components: {
                EncyclopediaMenu: as
            },
            computed: {
                CONTENT_ID: function() {
                    return z
                }
            }
        })
          , cs = os
          , us = (n("6294"),
        Object(Nt["a"])(cs, Kn, Xn, !1, null, null, null))
          , ls = us.exports;
        s["a"].config.productionTip = !1,
        s["a"].config.devtools = !1,
        s["a"].config.debug = !1,
        s["a"].config.silent = !0,
        new s["a"]({
            router: Gn,
            store: pt,
            el: "#app",
            render: function(t) {
                return t(ls)
            }
        }),
        a.init(pt),
        C.init(pt, Gn),
        x.init(pt)
    },
    d486: function(t, e, n) {
        "use strict";
        n("7d6d")
    },
    e653: function(t, e, n) {},
    ebe2: function(t, e, n) {
        "use strict";
        var s = n("f46d");
        n.d(e, "PseudoCategory", (function() {
            return s["a"]
        }
        ));
        var i = n("ab1f");
        n.o(i, "RouteName") && n.d(e, "RouteName", (function() {
            return i["RouteName"]
        }
        ));
        var r = n("a8ae");
        n.o(r, "RouteName") && n.d(e, "RouteName", (function() {
            return r["RouteName"]
        }
        ));
        var a = n("48af");
        n.o(a, "RouteName") && n.d(e, "RouteName", (function() {
            return a["RouteName"]
        }
        ));
        var o = n("62ef");
        n.d(e, "RouteName", (function() {
            return o["a"]
        }
        ));
        n("ff0e"),
        n("4a07"),
        n("7901"),
        n("960b"),
        n("f52f"),
        n("670d")
    },
    f46d: function(t, e, n) {
        "use strict";
        var s;
        n.d(e, "a", (function() {
            return s
        }
        )),
        function(t) {
            t["BASE"] = "base",
            t["BASIC"] = "basic",
            t["FINAL"] = "final",
            t["EXHAUSTED"] = "depleted"
        }(s || (s = {}))
    },
    f52f: function(t, e) {},
    ff0e: function(t, e) {}
});
//# sourceMappingURL=app.e69b99ba.js.map
