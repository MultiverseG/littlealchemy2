(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animations"], {
    "407f": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "animations"
            }, [i("AnimationFinal"), i("AnimationFusion"), i("AnimationMixed"), i("AnimationNew"), t.shouldRenderEndAnimation ? i("div", [i("AnimationEnd")], 1) : t._e(), t.shouldRenderCompletionAnimation ? i("div", [i("AnimationCompletion")], 1) : t._e()], 1)
        }
          , s = []
          , a = i("5530")
          , o = (i("e260"),
        i("e6cf"),
        i("ddb0"),
        i("6e95"))
          , r = i("5c57")
          , h = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "final-animation-container"
            }, t._l(t.elementsList, (function(e) {
                return i("FinalSingle", {
                    key: e[0].elementId,
                    attrs: {
                        elements: e
                    },
                    on: {
                        remove: t.onRemove,
                        finish: t.onSingleFinished
                    }
                })
            }
            )), 1)
        }
          , d = []
          , c = i("1663")
          , l = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", t._l(t.elements, (function(e) {
                return i("div", {
                    key: e.id,
                    ref: "element",
                    refInFor: !0,
                    staticClass: "dematerialize",
                    class: t.classes,
                    style: t.getStyles(e.position)
                }, [i("div", {
                    staticClass: "core"
                }), i("div", {
                    staticClass: "ring1"
                }), i("div", {
                    staticClass: "ring2"
                })])
            }
            )), 0)
        }
          , m = []
          , u = i("53b2")
          , p = i("7d61")
          , v = i("d257");
        const A = p["a"][u["b"]];
        var x = o["a"].extend({
            name: "animation-final-single",
            props: {
                elements: {
                    type: Array,
                    required: !0
                }
            },
            computed: {
                id() {
                    return this.elements[0].elementId
                },
                classes() {
                    return {
                        "js-active": !0
                    }
                }
            },
            mounted() {
                const t = Object(v["u"])(this.$refs.element[0], t=>{
                    t === A.delete && this.onRemoveElement(),
                    t === A.end && this.onAnimationEnd()
                }
                );
                this.$once("hook:beforeDestroy", t)
            },
            methods: {
                getStyles(t) {
                    return {
                        top: `${t.y}px`,
                        left: `${t.x}px`
                    }
                },
                onRemoveElement() {
                    this.$emit("remove", this.id)
                },
                onAnimationEnd() {
                    this.$emit("finish", this.id)
                }
            }
        })
          , f = x
          , E = i("2877")
          , w = Object(E["a"])(f, l, m, !1, null, null, null)
          , C = w.exports
          , N = o["a"].extend({
            name: "animation-final",
            components: {
                FinalSingle: C
            },
            computed: Object(a["a"])(Object(a["a"])({}, Object(r["b"])({
                elementsIds: "animationFinalElements",
                finalElements: "workspaceFinal",
                exhaustedElements: "workspaceExhausted"
            })), {}, {
                allElements() {
                    return this.finalElements.concat(this.exhaustedElements)
                },
                elementsList() {
                    return this.elementsIds.map(t=>this.allElements.filter(({elementId: e})=>e === t)).filter(t=>!!t.length)
                }
            }),
            methods: {
                onRemove(t) {
                    this.$store.dispatch("animationFinalMiddle", t)
                },
                onSingleFinished(t) {
                    this.$store.dispatch("workspaceFinalRemove", t),
                    this.$store.dispatch("workspaceExhaustedRemove", t),
                    this.$store.dispatch("animationFinalFinished", t),
                    c["a"].emit("ANIMATION_FINAL_SINGLE_END")
                }
            }
        })
          , _ = N
          , b = Object(E["a"])(_, h, d, !1, null, null, null)
          , y = b.exports
          , I = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "animation-end",
                    rawName: "v-animation-end",
                    value: t.onAnimation,
                    expression: "onAnimation"
                }],
                ref: "element",
                staticClass: "fusion",
                class: t.classes,
                style: t.styles,
                attrs: {
                    id: "fusion"
                }
            }, [i("div", {
                staticClass: "fusion-charge-ring"
            }), i("div", {
                staticClass: "fusion-core-dark"
            }), i("div", {
                staticClass: "fusion-core-light"
            }), i("div", {
                staticClass: "fusion-core-ring"
            })])
        }
          , g = [];
        i("e25e");
        const O = p["a"][u["c"]];
        var $ = o["a"].extend({
            name: "animation-fusion",
            data: ()=>({
                isRunning: !1,
                width: 0,
                height: 0
            }),
            computed: Object(a["a"])(Object(a["a"])({}, Object(r["b"])({
                dimensions: "workspaceBoxDimensions",
                mixHasNewChildren: "mixHasNewChildren",
                isAnimationActive: "isAnimationActive",
                mixFather: "mixFather",
                mixMother: "mixMother"
            })), {}, {
                isActive() {
                    return this.isAnimationActive(u["c"]) || this.isRunning
                },
                classes() {
                    return {
                        "js-active": this.isActive
                    }
                },
                position() {
                    if (!this.isActive || !this.mixFather || !this.mixMother)
                        return {
                            x: -500,
                            y: 0
                        };
                    const t = this.mixFather.position
                      , e = this.mixMother.position
                      , i = (t.x + e.x) / 2 + this.dimensions.width / 2
                      , n = (t.y + e.y) / 2 + this.dimensions.height / 2;
                    return {
                        x: i,
                        y: n
                    }
                },
                styles() {
                    const t = this.position
                      , e = t.y - this.height / 2
                      , i = t.x - this.width / 2;
                    return {
                        top: `${e}px`,
                        left: `${i}px`
                    }
                }
            }),
            mounted() {
                this.updateDimensions(),
                c["a"].onResize(()=>this.updateDimensions())
            },
            methods: {
                updateDimensions() {
                    const t = Object(v["g"])(this.$refs.element)
                      , e = parseInt(t.width, 10)
                      , i = parseInt(t.height, 10);
                    this.width = e,
                    this.height = i
                },
                onAnimation({animationName: t}) {
                    t === O.middle && this.onStartNext(),
                    t === O.end && this.onAnimationEnd()
                },
                onStartNext() {
                    this.isRunning = !0,
                    this.$store.dispatch("animationFusionMiddle")
                },
                onAnimationEnd() {
                    this.isRunning = !1,
                    this.mixHasNewChildren || this.$store.dispatch("animationReset")
                }
            }
        })
          , j = $
          , F = Object(E["a"])(j, I, g, !1, null, null, null)
          , S = F.exports
          , k = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", t._l(t.animations, (function(e) {
                return i("MixedItem", {
                    key: e.id,
                    attrs: {
                        children: e.children,
                        position: e.position
                    },
                    on: {
                        "animation-end": function(i) {
                            return t.onAnimationEnd(e.id)
                        }
                    }
                })
            }
            )), 1)
        }
          , R = []
          , B = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "already-made-container",
                class: t.classes,
                style: t.parentStyles
            }, t._l(t.children, (function(e, n) {
                return i("img", {
                    key: e,
                    ref: "icons",
                    refInFor: !0,
                    staticClass: "already-done",
                    class: t.childClasses(n),
                    attrs: {
                        alt: t.getName(e),
                        src: t.iconUrl(e)
                    }
                })
            }
            )), 0)
        }
          , D = []
          , M = i("fd41")
          , K = o["a"].extend({
            name: "animation-mixed-item",
            props: {
                position: Object,
                children: Array
            },
            data: ()=>({
                isActive: !1
            }),
            computed: {
                parentStyles() {
                    return {
                        top: `${this.position.y}px`,
                        left: `${this.position.x}px`
                    }
                },
                classes() {
                    return {
                        "js-active": this.isActive
                    }
                }
            },
            mounted() {
                this.$nextTick(()=>this.setup())
            },
            methods: {
                setup() {
                    Object(v["y"])(this.$el);
                    const t = this.$refs.icons;
                    if (!t || !t.length)
                        return;
                    const e = Object(v["s"])(t[0], ()=>{
                        this.$emit("animation-end"),
                        e()
                    }
                    );
                    window.setTimeout(()=>{
                        this.isActive = !0
                    }
                    , 15)
                },
                iconUrl(t) {
                    return Object(M["a"])(t)
                },
                getName(t) {
                    const e = this.$store.getters.elementById(t);
                    return e ? e.name : ""
                },
                childClasses(t) {
                    return this.isActive ? `already-made-${this.children.length}-${t + 1}` : ""
                }
            }
        })
          , T = K
          , H = Object(E["a"])(T, B, D, !1, null, null, null)
          , L = H.exports
          , Y = o["a"].extend({
            name: "animation-mixed",
            components: {
                MixedItem: L
            },
            data() {
                return {
                    animations: []
                }
            },
            computed: Object(a["a"])({}, Object(r["b"])(["mixFather", "mixChildren"])),
            mounted() {
                c["a"].on("ANIMATION_MIXED_START", ()=>this.addAnimation())
            },
            methods: {
                addAnimation() {
                    if (!this.mixFather)
                        return;
                    const t = this.mixChildren.map(t=>t.id)
                      , e = Object(a["a"])({}, this.mixFather.position);
                    this.animations.push({
                        id: Date.now(),
                        children: t,
                        position: e
                    })
                },
                onAnimationEnd(t) {
                    this.animations = this.animations.filter(({id: e})=>e !== t)
                }
            }
        })
          , P = Y
          , W = Object(E["a"])(P, k, R, !1, null, null, null)
          , U = W.exports
          , z = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "animation-end",
                    rawName: "v-animation-end",
                    value: t.onAnimation,
                    expression: "onAnimation"
                }],
                staticClass: "new-element",
                class: t.classes,
                attrs: {
                    id: t.ANIMATION_NEW_ID
                },
                on: {
                    click: t.checkNext
                }
            }, [i("div", {
                staticClass: "background"
            }), t._m(0), i("div", {
                staticClass: "new-element-image-container"
            }, [t.current ? i("img", {
                attrs: {
                    src: t.iconUrl,
                    alt: t.name
                }
            }) : t._e()]), i("div", {
                staticClass: "absolute-center outer-name"
            }, [t.isActive ? i("div", {
                staticClass: "name"
            }, [i("span", [t._v(t._s(t.name))])]) : t._e()]), i("div", {
                staticClass: "absolute-center"
            }, [i("div", {
                staticClass: "description"
            }, [t._v(t._s(t.description))])]), t.isNewBaseActive ? i("NewBaseAnimation", {
                attrs: {
                    active: t.isNewBaseActive
                },
                on: {
                    hidden: t.onNewBaseHidden
                }
            }) : t._e()], 1)
        }
          , J = [function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "new-element-rays-container"
            }, [i("div", {
                staticClass: "rays"
            })])
        }
        ]
          , q = i("b047")
          , G = i.n(q)
          , X = i("cd57")
          , Q = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                directives: [{
                    name: "animation-end",
                    rawName: "v-animation-end",
                    value: t.onAnimation,
                    expression: "onAnimation"
                }],
                staticClass: "new-base-element",
                class: t.classes,
                on: {
                    click: t.hide
                }
            }, [t._m(0)])
        }
          , V = [function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "new-item-unlocked"
            }, [t._v(" new item"), i("br"), t._v("revealed! ")])
        }
        ];
        const Z = p["a"][u["f"]]
          , tt = 250;
        var et = o["a"].extend({
            name: "animation-new-base",
            props: {
                active: Boolean
            },
            data() {
                return {
                    timestamp: 0,
                    hiding: !1
                }
            },
            computed: {
                classes() {
                    return {
                        "js-active": this.active && !this.hiding
                    }
                }
            },
            mounted() {
                this.initKeysListeners()
            },
            beforeDestroy() {
                this.destroyKeysListeners()
            },
            methods: {
                onAnimation({animationName: t}) {
                    t === Z.baseShow && this.onShown(),
                    t === Z.baseHide && this.onHidden()
                },
                initKeysListeners() {
                    this.hide = this.hide.bind(this),
                    c["a"].on("KEY_ESC", this.hide),
                    c["a"].on("KEY_SPACE", this.hide),
                    c["a"].on("KEY_ENTER", this.hide)
                },
                destroyKeysListeners() {
                    c["a"].off("KEY_ESC", this.hide),
                    c["a"].off("KEY_SPACE", this.hide),
                    c["a"].off("KEY_ENTER", this.hide)
                },
                hide() {
                    this.active && !this.hiding && (this.timestamp + tt > Date.now() || (this.hiding = !0))
                },
                onShown() {
                    this.timestamp = Date.now()
                },
                onHidden() {
                    this.active && (this.hiding = !1,
                    this.timestamp = 0,
                    this.$emit("hidden"))
                }
            }
        })
          , it = et
          , nt = Object(E["a"])(it, Q, V, !1, null, null, null)
          , st = nt.exports;
        const at = p["a"][u["f"]]
          , ot = 300;
        var rt = o["a"].extend({
            name: "animation-new",
            components: {
                NewBaseAnimation: st
            },
            data: ()=>({
                timestamp: 0,
                currentIndex: 0,
                hide: !1,
                hideContent: !1,
                isNewBaseActive: !1
            }),
            computed: Object(a["a"])(Object(a["a"])({}, Object(r["b"])(["isAnimationActive", "mixChildren", "elementIsNewlyDiscovered", "elementById", "descriptionById"])), {}, {
                isActive() {
                    return this.isAnimationActive(u["f"]) || this.hide
                },
                children() {
                    return this.mixChildren.filter(({id: t})=>this.elementIsNewlyDiscovered(t))
                },
                hasElements() {
                    return this.currentIndex + 1 < this.children.length
                },
                currentId() {
                    return this.children.length ? this.children[this.currentIndex].id : ""
                },
                current() {
                    return this.elementById(this.currentId)
                },
                name() {
                    return this.current ? this.current.name : ""
                },
                description() {
                    return this.current ? this.descriptionById(this.currentId) : ""
                },
                iconUrl() {
                    return Object(M["a"])(this.currentId)
                },
                isBase() {
                    return !!this.current && this.current.base
                },
                classes() {
                    return {
                        "js-active": this.isActive || this.hide,
                        "js-hide-content": this.hideContent,
                        "js-background-out": this.hide
                    }
                },
                ANIMATION_NEW_ID() {
                    return X["a"]
                }
            }),
            mounted() {
                this.onContentHidden = G()(this.onContentHidden.bind(this), 250, {
                    leading: !0,
                    trailing: !1
                }),
                this.initKeysListeners()
            },
            watch: {
                isActive(t) {
                    t && (this.timestamp = Date.now())
                }
            },
            methods: {
                initKeysListeners() {
                    c["a"].on("KEY_ESC", ()=>this.checkNext()),
                    c["a"].on("KEY_SPACE", ()=>this.checkNext()),
                    c["a"].on("KEY_ENTER", ()=>this.checkNext())
                },
                checkNext() {
                    !this.isActive || this.hide || this.isNewBaseActive || this.timestamp + ot > Date.now() || (this.hasElements ? this.hideContent = !0 : (this.hide = !0,
                    this.$store.dispatch("animationNewEnding", {
                        removeParents: !1
                    })))
                },
                onAnimation({animationName: t}) {
                    t === at.start && this.onAnimationStart(),
                    t === at.hideContent && this.onContentHidden(),
                    t === at.showContent && this.onContentShow(),
                    t === at.end && this.onAnimationEnd()
                },
                onAnimationStart() {
                    this.timestamp = Date.now()
                },
                onContentHidden() {
                    this.hideContent && this.hasElements && (this.currentIndex++,
                    this.isBase && (this.isNewBaseActive = !0))
                },
                onContentShow() {
                    this.hideContent && !this.isNewBaseActive && (this.showContent(),
                    c["a"].emit("ANIMATION_NEW_POP"))
                },
                onNewBaseHidden() {
                    this.isNewBaseActive = !1,
                    this.showContent(),
                    c["a"].emit("ANIMATION_NEW_POP")
                },
                showContent() {
                    this.hideContent = !1,
                    this.timestamp = Date.now()
                },
                onAnimationEnd() {
                    this.hide = !1,
                    this.$store.dispatch("animationReset"),
                    this.$store.dispatch("animationNewEnd"),
                    c["a"].emit("ANIMATION_NEW_END"),
                    this.currentIndex = 0,
                    this.timestamp = 0,
                    this.hideContent = !1
                }
            }
        })
          , ht = rt
          , dt = Object(E["a"])(ht, z, J, !1, null, null, null)
          , ct = dt.exports
          , lt = o["a"].extend({
            name: "animations",
            components: {
                AnimationFinal: y,
                AnimationFusion: S,
                AnimationMixed: U,
                AnimationNew: ct,
                AnimationEnd: ()=>i.e("end-animation").then(i.bind(null, "0e2c")),
                AnimationCompletion: ()=>i.e("completion-animation").then(i.bind(null, "ee39"))
            },
            computed: Object(a["a"])(Object(a["a"])({}, Object(r["b"])(["hasAllElements", "hasAllExhausted"])), {}, {
                shouldRenderEndAnimation() {
                    return this.hasAllElements
                },
                shouldRenderCompletionAnimation() {
                    return this.hasAllExhausted
                }
            })
        })
          , mt = lt
          , ut = Object(E["a"])(mt, n, s, !1, null, null, null);
        e["default"] = ut.exports
    }
}]);
//# sourceMappingURL=animations.abdd8716.js.map
