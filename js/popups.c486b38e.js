(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popups"], {
    "437d": function(t, s, e) {
        "use strict";
        var a = function() {
            var t = this
              , s = t.$createElement
              , e = t._self._c || s;
            return e("div", {
                class: t.classes
            }, [t.shouldRender ? e("div", {
                staticClass: "popup"
            }, [t._t("default", null, {
                isVisible: t.isActive && t.isVisible
            })], 2) : t._e()])
        }
          , i = []
          , o = (e("e6cf"),
        e("6e95"))
          , n = e("d257");
        const c = 500;
        var l = o["a"].extend({
            name: "popup",
            props: {
                name: {
                    type: String,
                    required: !0
                },
                isDrawer: {
                    type: Boolean,
                    default: !1
                },
                isModal: {
                    type: Boolean,
                    default: !0
                },
                isModalSmall: {
                    type: Boolean,
                    default: !1
                },
                alwaysRender: {
                    type: Boolean,
                    default: !1
                }
            },
            data: ()=>({
                isVisible: !1
            }),
            computed: {
                isActive() {
                    return this.$store.getters.isPopupWithNameActive(this.name)
                },
                shouldRender() {
                    return !!this.alwaysRender || (this.isActive || this.isVisible)
                },
                classes() {
                    const t = {
                        drawer: this.isDrawer,
                        modal: this.isModal,
                        "modal-small": this.isModalSmall,
                        "js-show": this.isVisible && this.isActive,
                        "js-hide": !this.isVisible || !this.isActive
                    };
                    return t
                }
            },
            mounted() {
                this.isActive && this.onActive()
            },
            watch: {
                isActive(t, s) {
                    t !== s && (t ? this.onActive() : this.onInactive())
                }
            },
            methods: {
                async onActive() {
                    await Object(n["c"])(10),
                    this.$nextTick(()=>{
                        this.isVisible = !0
                    }
                    )
                },
                async onInactive() {
                    await Object(n["c"])(c),
                    this.isVisible = !1
                }
            }
        })
          , r = l
          , u = e("2877")
          , d = Object(u["a"])(r, a, i, !1, null, null, null);
        s["a"] = d.exports
    },
    "59a1": function(t, s, e) {
        "use strict";
        e.r(s);
        var a = function() {
            var t = this
              , s = t.$createElement
              , e = t._self._c || s;
            return e("div", {
                staticClass: "dialogs"
            }, [e("EncyclopediaPopup"), e("ResetProgressPopup"), e("BasePopup", {
                staticClass: "settings modal any",
                attrs: {
                    name: t.POPUPS.SETTINGS
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(t) {
                        var s = t.isVisible;
                        return [e("SettingsPopup", {
                            attrs: {
                                "is-visible": s
                            }
                        })]
                    }
                }])
            }), e("BasePopup", {
                staticClass: "modal small",
                attrs: {
                    name: t.POPUPS.LOGIN
                }
            }, [t.shouldRenderLogin ? e("LoginPopup") : t._e()], 1), e("BasePopup", {
                staticClass: "modal any",
                attrs: {
                    name: t.POPUPS.SYNC
                }
            }, [t.shouldRenderSync ? e("SyncPopup") : t._e()], 1), e("NewsPopup"), e("div", {
                staticClass: "overlay",
                class: t.overlayClasses,
                on: {
                    click: t.hide
                }
            })], 1)
        }
          , i = []
          , o = e("5530")
          , n = (e("e260"),
        e("e6cf"),
        e("ddb0"),
        e("6e95"))
          , c = e("5c57")
          , l = e("2de2")
          , r = e("b2eb")
          , u = e("437d")
          , d = function() {
            var t = this
              , s = t.$createElement
              , e = t._self._c || s;
            return e("BasePopup", {
                staticClass: "encyclopedia modal any",
                attrs: {
                    name: t.name,
                    alwaysRender: !0
                }
            }, [e("CloseButton"), e("div", {
                staticClass: "popup-header hide-in-drawer"
            }, [t._v("Encyclopedia")]), e("div", {
                staticClass: "encyclopedia-container"
            }, [e("iframe", {
                ref: "iframe",
                staticClass: "encyclopedia",
                attrs: {
                    id: t.ENCYCLOPEDIA_ID,
                    title: "Encyclopedia"
                }
            })])], 1)
        }
          , p = []
          , h = e("d257")
          , v = e("c55c")
          , m = e("e879")
          , g = n["a"].extend({
            name: "encyclopedia-popup",
            components: {
                BasePopup: u["a"],
                CloseButton: m["a"]
            },
            computed: {
                name() {
                    return r["ENCYCLOPEDIA"]
                },
                ENCYCLOPEDIA_ID() {
                    return v["a"]
                },
                isLibraryRendered() {
                    return this.$store.getters.isLibraryRendered
                }
            },
            mounted() {
                if (this.isLibraryRendered)
                    this.loadEncyclopedia();
                else {
                    const t = this.$watch(()=>this.isLibraryRendered, s=>{
                        s && (this.loadEncyclopedia(),
                        t())
                    }
                    )
                }
            },
            methods: {
                loadEncyclopedia() {
                    "requestIdleCallback"in window ? window.requestIdleCallback(this.setUrl, {
                        timeout: 300
                    }) : Object(h["b"])(this.setUrl)
                },
                setUrl() {
                    const t = "encyclopedia/";
                    this.$refs.iframe.src = `${t}#${l["j"]}`
                }
            }
        })
          , C = g
          , b = e("2877")
          , y = Object(b["a"])(C, d, p, !1, null, null, null)
          , f = y.exports
          , _ = function() {
            var t = this
              , s = t.$createElement
              , e = t._self._c || s;
            return e("BasePopup", {
                staticClass: "modal small",
                attrs: {
                    name: t.name
                }
            }, [e("CloseButton", {
                attrs: {
                    "is-back": !0
                },
                on: {
                    click: t.hide
                }
            }), e("div", {
                staticClass: "popup-header"
            }, [t._v("Reset Progress")]), e("div", {
                staticClass: "content"
            }, [e("div", {
                staticClass: "group text-center"
            }, [t._v(" Are you sure? ")]), e("div", {
                staticClass: "button-group"
            }, [e("div", {
                staticClass: "popup-button",
                on: {
                    click: t.reset
                }
            }, [e("div", {
                staticClass: "label"
            }, [t._v("Reset!")])]), e("div", {
                staticClass: "popup-button",
                on: {
                    click: t.hide
                }
            }, [e("div", {
                staticClass: "label"
            }, [t._v("Actually... no")])])])])], 1)
        }
          , w = []
          , P = n["a"].extend({
            name: "reset-progress-popup",
            components: {
                BasePopup: u["a"],
                CloseButton: m["a"]
            },
            computed: {
                name() {
                    return r["PROGRESS_RESET"]
                }
            },
            methods: {
                reset() {
                    this.$store.dispatch("resetProgress"),
                    this.$store.dispatch("popupHide", void 0)
                },
                hide() {
                    this.$store.dispatch("popupShowNext", {
                        name: r["SETTINGS"]
                    })
                }
            }
        })
          , O = P
          , S = Object(b["a"])(O, _, w, !1, null, null, null)
          , A = S.exports
          , x = function() {
            var t = this
              , s = t.$createElement
              , e = t._self._c || s;
            return e("div", [e("CloseButton"), e("div", {
                staticClass: "popup-header"
            }, [t._v(" Settings ")]), e("div", {
                staticClass: "content"
            }, [e("div", {
                staticClass: "group audio-controls-container"
            }, [e("div", {
                staticClass: "audio-controls-switch"
            }, [e("input", {
                staticClass: "menuCheckbox mute-music",
                attrs: {
                    id: "mute-music",
                    type: "checkbox"
                },
                domProps: {
                    checked: !t.playMusic
                },
                on: {
                    change: t.onMuteMusicChange
                }
            }), e("label", {
                attrs: {
                    for: "mute-music"
                }
            }, [e("div", {
                staticClass: "switch-button"
            }, [e("div", {
                staticClass: "label"
            }, [t.playMusic ? e("IconMusicOn", {
                staticClass: "icon"
            }) : e("IconMusicOff", {
                staticClass: "icon"
            })], 1)]), e("div", {
                staticClass: "switch-label"
            }, [t._v(" music ")])])]), e("div", {
                staticClass: "audio-controls-switch"
            }, [e("input", {
                staticClass: "menuCheckbox mute-sfx",
                attrs: {
                    id: "mute-sfx",
                    type: "checkbox"
                },
                domProps: {
                    checked: !t.playSfx
                },
                on: {
                    change: t.onMuteSfxChange
                }
            }), e("label", {
                attrs: {
                    for: "mute-sfx"
                }
            }, [e("div", {
                staticClass: "switch-button"
            }, [e("div", {
                staticClass: "label"
            }, [t.playSfx ? e("IconAudioOn", {
                staticClass: "icon"
            }) : e("IconAudioOff", {
                staticClass: "icon"
            })], 1)]), e("div", {
                staticClass: "switch-label"
            }, [t._v(" sounds ")])])])]), e("div", {
                staticClass: "group"
            }, [e("Button", {
                on: {
                    click: t.onClearRevert
                }
            }, [t.workspaceRevertable ? e("div", [t._v("revert")]) : e("div", [t._v("clean up")])]), t.isLoggedIn ? e("Button", {
                class: t.logoutClasses,
                on: {
                    click: t.logout
                }
            }, [t._v(" logout ")]) : e("Button", {
                class: t.disabledClasses,
                on: {
                    click: t.login
                }
            }, [t._v(" login ")])], 1), e("div", {
                staticClass: "group"
            }, [e("Button", {
                attrs: {
                    disabled: !t.areTutorialsFinished
                },
                on: {
                    click: t.showResetProgress
                }
            }, [t._v(" Reset"), e("span", {
                staticClass: "hide-small"
            }, [t._v(" progress")])]), e("Button", {
                on: {
                    click: t.contact
                }
            }, [t._v(" Contact"), e("span", {
                staticClass: "hide-small"
            }, [t._v(" us")])])], 1), e("div", {
                staticClass: "build-id"
            }, [t._v("build id: " + t._s(t.buildId))])])], 1)
        }
          , M = []
          , k = e("da33")
          , E = e("15fd");
        e("cca6");
        const B = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var j = {
            functional: !0,
            render(t, s) {
                const {_c: e, _v: a, data: i, children: n=[]} = s
                  , {class: c, staticClass: l, style: r, staticStyle: u, attrs: d={}} = i
                  , p = Object(E["a"])(i, B);
                return e("svg", Object(o["a"])({
                    class: [c, l],
                    style: [r, u],
                    attrs: Object.assign({
                        id: "icon-audio-on",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, d)
                }, p), n.concat([e("path", {
                    attrs: {
                        d: "M52 40.1a1.5 1.5 0 01-1.15-2.46A14.37 14.37 0 0052 32a14.13 14.13 0 00-1.18-5.67 1.48 1.48 0 01.2-2.1 1.52 1.52 0 012.13.21C54 25.49 55 28.94 55 32s-1 6.51-1.85 7.56a1.5 1.5 0 01-1.15.54z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M60 44.5a1.5 1.5 0 01-1.2-2.4C60 40.51 61 35.88 61 32s-1-8.51-2.2-10.1a1.5 1.5 0 012.4-1.8C63 22.52 64 28 64 32s-1 9.48-2.8 11.9a1.5 1.5 0 01-1.2.6z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M41.5 8.54a4.42 4.42 0 00-4.69.46L23.93 19l-7.22.66a5.15 5.15 0 00-4.71 5.2v14.28a5.15 5.15 0 004.71 5.16l7.22.66L36.81 55A4.45 4.45 0 0044 51.46V12.54a4.42 4.42 0 00-2.5-4zM15 39.14V24.86a2.17 2.17 0 012-2.17l6-.55v19.72l-6-.55a2.17 2.17 0 01-2-2.17zm26 12.32a1.45 1.45 0 01-2.34 1.15L26 42.77V21.23l12.66-9.84A1.45 1.45 0 0141 12.54z"
                    }
                })]))
            }
        };
        const R = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var L = {
            functional: !0,
            render(t, s) {
                const {_c: e, _v: a, data: i, children: n=[]} = s
                  , {class: c, staticClass: l, style: r, staticStyle: u, attrs: d={}} = i
                  , p = Object(E["a"])(i, R);
                return e("svg", Object(o["a"])({
                    class: [c, l],
                    style: [r, u],
                    attrs: Object.assign({
                        id: "icon-audio-off",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, d)
                }, p), n.concat([e("path", {
                    attrs: {
                        d: "M3 62.5a1.5 1.5 0 01-1.06-2.56l58-58a1.5 1.5 0 012.12 2.12l-58 58A1.5 1.5 0 013 62.5z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M41 29.36v22.1a1.45 1.45 0 01-2.34 1.15L26.9 43.47l-2.14 2.13L36.81 55A4.45 4.45 0 0044 51.46v-25.1z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M16.71 44.3l4.69.43 4.6-4.6v-18.9l12.66-9.84A1.45 1.45 0 0141 12.54v12.58l3-3v-9.58A4.45 4.45 0 0036.81 9L23.93 19l-7.22.66a5.15 5.15 0 00-4.71 5.2v14.28a5.15 5.15 0 004.71 5.16zM15 24.86a2.17 2.17 0 012-2.17l6-.55v19.72l-6-.55a2.17 2.17 0 01-2-2.17z"
                    }
                })]))
            }
        };
        const $ = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var I = {
            functional: !0,
            render(t, s) {
                const {_c: e, _v: a, data: i, children: n=[]} = s
                  , {class: c, staticClass: l, style: r, staticStyle: u, attrs: d={}} = i
                  , p = Object(E["a"])(i, $);
                return e("svg", Object(o["a"])({
                    class: [c, l],
                    style: [r, u],
                    attrs: Object.assign({
                        id: "icon-music-on",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, d)
                }, p), n.concat([e("path", {
                    attrs: {
                        d: "M8 35.5A1.5 1.5 0 016.5 34v-4a1.5 1.5 0 013 0v4A1.5 1.5 0 018 35.5z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M14 40a1.5 1.5 0 01-1.5-1.5v-13a1.5 1.5 0 013 0v13A1.5 1.5 0 0114 40z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M20 48.5a1.5 1.5 0 01-1.5-1.5V17a1.5 1.5 0 013 0v30a1.5 1.5 0 01-1.5 1.5z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M26 43a1.5 1.5 0 01-1.5-1.5v-19a1.5 1.5 0 013 0v19A1.5 1.5 0 0126 43z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M32 45.5a1.5 1.5 0 01-1.5-1.5V20a1.5 1.5 0 013 0v24a1.5 1.5 0 01-1.5 1.5z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M38 36.5a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 013 0v6a1.5 1.5 0 01-1.5 1.5z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M44 40.5a1.5 1.5 0 01-1.5-1.5V25a1.5 1.5 0 013 0v14a1.5 1.5 0 01-1.5 1.5z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M50 43a1.5 1.5 0 01-1.5-1.5v-19a1.5 1.5 0 013 0v19A1.5 1.5 0 0150 43z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M56 35a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 013 0v3A1.5 1.5 0 0156 35z"
                    }
                })]))
            }
        };
        const z = ["class", "staticClass", "style", "staticStyle", "attrs"];
        var D = {
            functional: !0,
            render(t, s) {
                const {_c: e, _v: a, data: i, children: n=[]} = s
                  , {class: c, staticClass: l, style: r, staticStyle: u, attrs: d={}} = i
                  , p = Object(E["a"])(i, z);
                return e("svg", Object(o["a"])({
                    class: [c, l],
                    style: [r, u],
                    attrs: Object.assign({
                        id: "icon-music-off",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 64 64"
                    }, d)
                }, p), n.concat([e("path", {
                    attrs: {
                        d: "M8 35a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 013 0v3A1.5 1.5 0 018 35z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M14 37.5a1.5 1.5 0 01-1.5-1.5v-8a1.5 1.5 0 013 0v8a1.5 1.5 0 01-1.5 1.5z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M20 40.5a1.5 1.5 0 01-1.5-1.5V25a1.5 1.5 0 013 0v14a1.5 1.5 0 01-1.5 1.5z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M26 38a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 013 0v9A1.5 1.5 0 0126 38z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M44 37a1.5 1.5 0 01-1.5-1.5v-7a1.5 1.5 0 013 0v7A1.5 1.5 0 0144 37z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M50 39a1.5 1.5 0 01-1.5-1.5v-11a1.5 1.5 0 013 0v11A1.5 1.5 0 0150 39z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M56 35a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 013 0v3A1.5 1.5 0 0156 35z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M3 62.5a1.5 1.5 0 01-1.06-2.56l58-58a1.5 1.5 0 012.12 2.12l-58 58A1.5 1.5 0 013 62.5z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M36.5 33.86V34a1.5 1.5 0 003 0v-3.14z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M30.88 39.49a1.49 1.49 0 002.62-1v-1.63z"
                    }
                }), e("path", {
                    attrs: {
                        d: "M33.5 32.62V25.5a1.5 1.5 0 00-3 0v10.12z"
                    }
                })]))
            }
        }
          , T = function() {
            var t = this
              , s = t.$createElement
              , e = t._self._c || s;
            return e("div", t._g({
                staticClass: "popup-button"
            }, t.$listeners), [e("div", {
                staticClass: "label"
            }, [t._t("default")], 2)])
        }
          , N = []
          , V = n["a"].extend({
            name: "popup-common-button"
        })
          , H = V
          , G = Object(b["a"])(H, T, N, !1, null, null, null)
          , U = G.exports
          , W = n["a"].extend({
            name: "settings-popup",
            components: {
                BasePopup: u["a"],
                CloseButton: m["a"],
                Button: U,
                IconAudioOn: j,
                IconAudioOff: L,
                IconMusicOn: I,
                IconMusicOff: D
            },
            props: {
                isVisible: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(c["b"])(["isAudioEnabled", "isLoggedIn", "playMusic", "playSfx", "online", "workspaceRevertable", "areTutorialsFinished", "canLogout"])), {}, {
                name() {
                    return r["SETTINGS"]
                },
                disabledClasses() {
                    return {
                        "js-disabled": !this.online
                    }
                },
                logoutClasses() {
                    return {
                        "js-disabled": !this.canLogout
                    }
                },
                buildId() {
                    return window.__COMMIT_HASH()
                }
            }),
            beforeDestroy() {
                this.handleGameClass(!1)
            },
            watch: {
                async isVisible(t, s) {
                    t !== s && this.handleGameClass(t)
                }
            },
            methods: {
                onMuteMusicChange({target: {checked: t}}) {
                    const s = !t;
                    this.$store.dispatch("settingsMusic", s)
                },
                onMuteSfxChange({target: {checked: t}}) {
                    const s = !t;
                    this.$store.dispatch("settingsSfx", s)
                },
                onClearRevert() {
                    this.$store.dispatch("workspaceClearRevertStart")
                },
                showResetProgress() {
                    this.areTutorialsFinished && this.$store.dispatch("popupShowNext", {
                        name: r["PROGRESS_RESET"]
                    })
                },
                login() {
                    this.online && this.$store.dispatch("popupShowNext", {
                        name: r["LOGIN"]
                    })
                },
                logout() {
                    this.canLogout && k["a"].logout()
                },
                contact() {
                    window.open(l["d"], "_blank")
                },
                hide() {
                    this.$store.dispatch("popupHide", void 0)
                },
                handleGameClass(t) {
                    const s = "js-settings-shown"
                      , e = t ? "add" : "remove"
                      , a = document.getElementById("js-game");
                    a && a.classList[e](s)
                }
            }
        })
          , Y = W
          , q = Object(b["a"])(Y, x, M, !1, null, null, null)
          , F = q.exports
          , K = function() {
            var t = this
              , s = t.$createElement
              , e = t._self._c || s;
            return e("div", [e("div", {
                staticClass: "popup-header"
            }, [t._v(" Progress Conflict ")]), e("div", {
                staticClass: "content"
            }, [t._m(0), e("div", {
                staticClass: "popup-2-buttons-sync"
            }, [e("div", {
                staticClass: "group"
            }, [e("div", {
                staticClass: "bold"
            }, [t._v("Keep the local save (" + t._s(t.isLocalNewer ? "newer" : "older") + ")")]), e("div", {
                staticClass: "collapse-to-inline"
            }, [t._v(t._s(t.localCount) + " items,")]), e("div", {
                staticClass: "collapse-to-inline"
            }, [t._v("saved " + t._s(t.formatSince(t.lastLocal)))]), e("Button", {
                on: {
                    click: t.local
                }
            }, [t._v(" local ")])], 1), e("div", {
                staticClass: "group"
            }, [e("div", {
                staticClass: "bold"
            }, [t._v("Keep the cloud save (" + t._s(t.isRemoteNewer ? "newer" : "older") + ")")]), e("div", {
                staticClass: "collapse-to-inline"
            }, [t._v(t._s(t.remoteCountTotal) + " items,")]), e("div", {
                staticClass: "collapse-to-inline"
            }, [t._v("saved " + t._s(t.formatSince(t.syncData.timestamp)))]), e("Button", {
                on: {
                    click: t.remote
                }
            }, [t._v(" cloud ")])], 1)]), e("div", {
                staticClass: "group"
            }, [e("div", {
                staticClass: "bold text-center"
            }, [t._v(" Keep all progress from both saves ")]), e("Button", {
                on: {
                    click: t.merge
                }
            }, [t._v(" merge ")])], 1)])])
        }
          , J = [function() {
            var t = this
              , s = t.$createElement
              , e = t._self._c || s;
            return e("div", {
                staticClass: "group text-center"
            }, [e("div", [t._v("Local and cloud progress contain conflicting information. Sometimes it can happen if you reset your game.")])])
        }
        ]
          , Q = e("f2ce")
          , X = n["a"].extend({
            name: "sync-popup",
            components: {
                BasePopup: u["a"],
                Button: U
            },
            data: ()=>({
                isHiding: !1
            }),
            computed: Object(o["a"])(Object(o["a"])({}, Object(c["b"])(["isPopupWithNameActive", "history", "historyLastTimestamp", "resetTimestamp", "popupData", "base", "prime", "totalProgress"])), {}, {
                name() {
                    return r["SYNC"]
                },
                isActive() {
                    return this.isPopupWithNameActive(this.name) || this.isHiding
                },
                lastLocal() {
                    return this.history.length ? this.historyLastTimestamp : this.resetTimestamp
                },
                localCount() {
                    return this.totalProgress - this.base.length
                },
                showCaution() {
                    return -1 !== this.resetTimestamp || this.syncData.reseted
                },
                isRemoteNewer() {
                    return this.syncData.timestamp > this.lastLocal
                },
                isLocalNewer() {
                    return !this.isRemoteNewer
                },
                syncData() {
                    const t = this.popupData;
                    return t || {
                        timestamp: Date.now(),
                        reseted: !1,
                        count: 0
                    }
                },
                remoteCountTotal() {
                    return this.syncData.count + this.prime.length
                }
            }),
            methods: {
                formatSince(t) {
                    return t <= 0 ? "" : Object(h["i"])(t)
                },
                local() {
                    this.syncData.onSuccess && this.syncData.onSuccess(Q["a"].LOCAL),
                    this.hide()
                },
                merge() {
                    this.syncData.onSuccess && this.syncData.onSuccess(Q["a"].MERGE),
                    this.hide()
                },
                remote() {
                    this.syncData.onSuccess && this.syncData.onSuccess(Q["a"].REMOTE),
                    this.hide()
                },
                hide() {
                    this.isHiding = !0,
                    this.$store.dispatch("popupHide", void 0),
                    window.setTimeout(()=>{
                        this.isHiding = !1
                    }
                    , r["HIDE_DURATION"])
                }
            }
        })
          , Z = X
          , tt = Object(b["a"])(Z, K, J, !1, null, null, null)
          , st = tt.exports
          , et = function() {
            var t = this
              , s = t.$createElement
              , e = t._self._c || s;
            return t.shouldShow ? e("BasePopup", {
                staticClass: "modal small",
                attrs: {
                    name: t.name
                }
            }, [e("CloseButton"), e("div", {
                staticClass: "popup-header"
            }, [t._v(t._s(t.title))]), e("div", {
                staticClass: "content"
            }, ["url" === t.action.type ? e("a", {
                attrs: {
                    href: t.actionData,
                    target: "_blank"
                },
                on: {
                    click: t.onActionClick
                }
            }, [e("div", {
                staticClass: "news-image"
            }, [e("img", {
                attrs: {
                    src: t.img
                }
            })])]) : e("div", {
                staticClass: "news-image"
            }, [e("img", {
                attrs: {
                    src: t.img
                },
                on: {
                    click: t.onActionClick
                }
            })]), e("div", {
                staticClass: "group text-center",
                domProps: {
                    innerHTML: t._s(t.text)
                }
            }), t.action ? e("div", [e("Button", {
                on: {
                    click: t.onActionClick
                }
            }, [t._v(" " + t._s(t.actionText) + " ")])], 1) : t._e()])], 1) : t._e()
        }
          , at = []
          , it = e("1663")
          , ot = n["a"].extend({
            name: "news-popup",
            components: {
                BasePopup: u["a"],
                CloseButton: m["a"],
                Button: U
            },
            computed: {
                name() {
                    return r["NEWS"]
                },
                news() {
                    return this.$store.getters.popupData || {}
                },
                isActive() {
                    return this.$store.getters.isPopupWithNameActive(this.name)
                },
                shouldShow() {
                    return !!this.title.length && !!this.text.length
                },
                title() {
                    return this.news.title || ""
                },
                text() {
                    return this.news.text || ""
                },
                img() {
                    return this.news.img || ""
                },
                action() {
                    return this.news.action || null
                },
                actionData() {
                    return this.action ? this.action.data : ""
                },
                actionText() {
                    return this.action ? this.action.text : ""
                }
            },
            methods: {
                onActionClick() {
                    if (!this.action)
                        return;
                    const {type: t} = this.action;
                    "url" === t && window.open(this.actionData, "_blank"),
                    "event" === t && it["a"].emit(this.actionData, this.action.data || {}),
                    this.hide()
                },
                hide() {
                    this.$store.dispatch("popupHide", void 0)
                }
            }
        })
          , nt = ot
          , ct = Object(b["a"])(nt, et, at, !1, null, null, null)
          , lt = ct.exports
          , rt = n["a"].extend({
            name: "popups",
            components: {
                BasePopup: u["a"],
                EncyclopediaPopup: f,
                ResetProgressPopup: A,
                SettingsPopup: F,
                SyncPopup: st,
                NewsPopup: lt,
                LoginPopup: ()=>e.e("login").then(e.bind(null, "a167"))
            },
            computed: Object(o["a"])(Object(o["a"])({}, Object(c["b"])(["isPopupClosable", "isPopupOverlayActive", "isPlaying", "isLoggedIn"])), {}, {
                overlayClasses() {
                    return {
                        "js-active": this.isPopupOverlayActive
                    }
                },
                shouldRenderLogin() {
                    return l["h"] || this.isPlaying && this.isPopupOverlayActive
                },
                shouldRenderSync() {
                    return l["h"] || this.isLoggedIn
                },
                POPUPS() {
                    return r
                }
            }),
            methods: {
                hide() {
                    this.isPopupClosable && this.$store.dispatch("popupHide", void 0)
                }
            }
        })
          , ut = rt
          , dt = Object(b["a"])(ut, a, i, !1, null, null, null);
        s["default"] = dt.exports
    },
    a11e: function(t, s, e) {
        t.exports = e.p + "img/back.3e60f39c.svg"
    },
    da33: function(t, s, e) {
        "use strict";
        e("e6cf");
        var a = e("6eebf");
        class i {
            login(t) {
                return a["a"].auth.login(t)
            }
            logout() {
                return a["a"].auth.logout()
            }
            mailLogin(t) {
                return a["a"].auth.mail.login(t)
            }
            mailSignup(t) {
                return a["a"].auth.mail.signup(t)
            }
            mailReset(t) {
                return a["a"].auth.mail.sendResetEmail(t)
            }
            async mailCheckProviders(t) {
                const s = await a["a"].auth.mail.checkProviders(t);
                return "google.com" === s ? (this.login("google"),
                null) : "facebook.com" === s ? (this.login("facebook"),
                null) : s
            }
        }
        s["a"] = new i
    },
    e879: function(t, s, e) {
        "use strict";
        var a = function() {
            var t = this
              , s = t.$createElement
              , a = t._self._c || s;
            return a("div", {
                staticClass: "close border",
                on: {
                    click: t.onClick
                }
            }, [t.isBack ? a("img", {
                staticClass: "label",
                attrs: {
                    src: e("a11e"),
                    alt: "back"
                }
            }) : a("img", {
                staticClass: "label",
                attrs: {
                    src: e("2260"),
                    alt: "close"
                }
            })])
        }
          , i = []
          , o = e("6e95")
          , n = o["a"].extend({
            name: "popup-close-button",
            props: {
                isBack: {
                    type: Boolean,
                    required: !1,
                    default: !1
                }
            },
            methods: {
                onClick() {
                    this.$emit("click"),
                    this.isBack || this.$store.dispatch("popupHide", void 0)
                }
            }
        })
          , c = n
          , l = e("2877")
          , r = Object(l["a"])(c, a, i, !1, null, null, null);
        s["a"] = r.exports
    },
    f2ce: function(t, s, e) {
        "use strict";
        var a;
        e.d(s, "a", (function() {
            return a
        }
        )),
        function(t) {
            t["MERGE"] = "merge",
            t["LOCAL"] = "local",
            t["REMOTE"] = "remote"
        }(a || (a = {}));
        a.MERGE
    }
}]);
//# sourceMappingURL=popups.c486b38e.js.map
