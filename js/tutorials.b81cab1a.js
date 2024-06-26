(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorials"], {
    "735f": function(t, s, i) {
        "use strict";
        i.r(s);
        var a = function() {
            var t = this
              , s = t.$createElement
              , i = t._self._c || s;
            return t.areTutorialsFinished ? t._e() : i("div", {
                staticClass: "tutorials",
                class: t.wrapperClasses
            }, [i("div", {
                directives: [{
                    name: "animation-end",
                    rawName: "v-animation-end",
                    value: t.restart,
                    expression: "restart"
                }],
                ref: "window",
                staticClass: "tutorial-window",
                class: t.classes
            }, [t._m(0), t._m(1), t._m(2), i("div", {
                staticClass: "cursor"
            }, [i("div", {
                staticClass: "y-offset"
            }, [i("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 600 600"
                }
            }, [i("polygon", {
                attrs: {
                    points: "594 7 191.82 424.92 430.04 412.82 592.99 587 594 7"
                }
            })])])]), i("div", {
                staticClass: "hand"
            }, [i("div", {
                staticClass: "y-offset"
            }, [i("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 600 600"
                }
            }, [i("path", {
                staticClass: "hand-background",
                attrs: {
                    d: "M553.13 0a46.88 46.88 0 0 0-46.88 46.88v318.75a46.88 46.88 0 1 0-93.75 0v18.75a46.88 46.88 0 1 0-93.75 0v37.5a46.88 46.88 0 1 0-93.75 0V525a75 75 0 0 0 75 75h225a75 75 0 0 0 75-75V46.88A46.88 46.88 0 0 0 553.13 0z"
                }
            }), i("rect", {
                attrs: {
                    x: "515.63",
                    y: "9.38",
                    width: "75",
                    height: "84.38",
                    rx: "35.16"
                }
            }), i("path", {
                staticClass: "hand-lines",
                attrs: {
                    d: "M591.88 226.56c0-13.47-15.75-24.38-35.16-24.38H552c-19.41 0-35.16 10.91-35.16 24.38M516.88 251.4c0 13.46 15.75 24.38 35.16 24.38h4.68c19.41 0 35.16-10.92 35.16-24.38"
                }
            }), i("path", {
                staticClass: "hand-lines",
                attrs: {
                    d: "M571.26 233.4c0-4.14-7.09-7.5-15.83-7.5h-2.12c-8.73 0-15.82 3.36-15.82 7.5M537.51 248c0 4.15 7.08 7.5 15.82 7.5h2.12c8.74 0 15.83-3.35 15.83-7.5"
                }
            })])])])])])
        }
          , e = [function() {
            var t = this
              , s = t.$createElement
              , i = t._self._c || s;
            return i("div", {
                staticClass: "icon-container"
            }, [i("div", {
                staticClass: "y-offset"
            }, [i("div", {
                staticClass: "icon"
            })])])
        }
        , function() {
            var t = this
              , s = t.$createElement
              , i = t._self._c || s;
            return i("div", {
                staticClass: "icon-container"
            }, [i("div", {
                staticClass: "y-offset"
            }, [i("div", {
                staticClass: "icon"
            })])])
        }
        , function() {
            var t = this
              , s = t.$createElement
              , i = t._self._c || s;
            return i("div", {
                staticClass: "click-container"
            }, [i("div", {
                staticClass: "y-offset"
            }, [i("div", {
                staticClass: "click"
            }, [i("div"), i("div"), i("div"), i("div"), i("div"), i("div")])])])
        }
        ]
          , c = i("5530")
          , r = (i("2532"),
        i("6e95"))
          , n = i("d257")
          , l = i("5c57")
          , o = i("85eb");
        const d = "timer";
        var u = r["a"].extend({
            name: "tutorials",
            data: ()=>({
                isTouch: !1,
                last: null
            }),
            computed: Object(c["a"])(Object(c["a"])({}, Object(l["b"])(["tutorial", "isTutorialActive", "areTutorialsFinished"])), {}, {
                isIntroActive() {
                    return this.isTutorialActive(o["a"].Intro)
                },
                isMixActive() {
                    return this.isTutorialActive(o["a"].Mix)
                },
                isGuideActive() {
                    return this.isTutorialActive(o["a"].Guide)
                },
                classes() {
                    return {
                        "js-touch": this.isTouch,
                        "step-intro": this.isIntroActive || this.last === o["a"].Intro,
                        "step-mix": this.isMixActive || this.last === o["a"].Mix,
                        "step-guide": this.isGuideActive || this.last === o["a"].Guide
                    }
                },
                wrapperClasses() {
                    return {
                        "js-active": null !== this.tutorial
                    }
                }
            }),
            created() {
                this.detectInputMethod()
            },
            watch: {
                tutorial: "reload"
            },
            methods: {
                detectInputMethod() {
                    const t = ()=>{
                        this.isTouch = !0,
                        document.removeEventListener("touchstart", t)
                    }
                    ;
                    document.addEventListener("touchstart", t)
                },
                reload(t, s) {
                    null !== s && (this.last = s),
                    Object(n["v"])(this.$el, ()=>{
                        this.last = null
                    }
                    )
                },
                restart(t=null) {
                    (null === t || t.animationName.includes(d)) && Object(n["y"])(this.$refs.window)
                }
            }
        })
          , v = u
          , h = i("2877")
          , w = Object(h["a"])(v, a, e, !1, null, null, null);
        s["default"] = w.exports
    }
}]);
//# sourceMappingURL=tutorials.b81cab1a.js.map
