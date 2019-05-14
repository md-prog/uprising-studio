const _ = require('underscore')

module.exports = ["$scope", "$state", "$timeout", "$location", "Utils",
"Events", "Menu", "Index", "Work", "About", "Contacts", "Wall",
"Leaf", "Infos", "CLeaf", "SiteUI", "Benchmark", "Preloader",
"AssetsLoader", "ThreeManager", "SoundManager", "PostProcessing",
"Sharer", "Performance", "Const", function CanvasController(e, t, n, i, r, s, a, o, l, u, c, h, d, p, f, $, m, g, v, w, y, x, b, T, Const) {
    var C, E, I, S, O, k, A, P, F, j = (r.getColors(), w),
        R = y,
        L = T,
        D = x,
        N = [],
        z = {
            menu: a,
            index: o,
            work: l,
            about: u,
            contacts: c,
            leaf: d,
            wall: h,
            infos: p,
            cleaf: f
        };
    e.setupCanvas = _.bind(function (t) {
        I = PIXI.autoDetectRenderer(1280, 720, {
            view: t,
            antialias: !0,
            transparent: !0,
            resolution: r.getDpr()
        });
        A = new PIXI.Container;
        F = new PIXI.Container;
        F.addChild(A);
        e.stage = A;
        console.log(e);
        this.startTick()
    }, this);
    this.startTick = function () {
        TweenLite.ticker.fps(60);
        TweenLite.ticker.addEventListener("tick", window.tick, !1)
    };
    window.tick = function () {
        I.render(F);
        j.update();
        L.update();
        D.update();
        S && S.update();
        O && O.update()
    };
    this.preload = function (t, n, i) {
        var r = t == Const.DataTypes.SECTIONS ? Const.LoaderTypes.POLY : Const.LoaderTypes.LINE;
        C = new g({
            type: r,
            scope: e
        });
        A.children.length > 0 && e.currstate.from.name == Const.PagesTypes.MENU ? A.addChildAt(C.render().$el, 1) : A.addChild(C.render().$el);
        e.isLoading = !0;
        e.resize();
        v.load(t, n, function (e) {
            C.progress(e)
        }).then(_.bind(function (t) {
            C.hide().then(_.bind(function () {
                C = null;
                e.isLoading = !1;
                i.call(this, t)
            }, this))
        }, this))
    };
    this.update = function (t, i) {
        if (t && !C) {
            if (-1 == L.get().index) {
                E = new m;
                A.addChild(E.render().$el);
                L.test(A);
                e.resize();
                return void n(_.bind(function () {
                    L.clear();
                    E.hide(_.bind(function () {
                        E.destroy();
                        E = null;
                        this.setupMenagers();
                        this.updateResolution(r.getDpr());
                        n(_.bind(function () {
                            this.update(t, i)
                        }, this), 600)
                    }, this))
                }, this), 3e3)
            }
            if (!e.data.sections.textures.loaded)
                return void this.preload(Const.DataTypes.SECTIONS, e.data.sections.collection, function (n) {
                    e.data.sections.textures = {
                        loaded: !0,
                        items: n.sections
                    };
                    this.buildStage();
                    this.update(t, i)
                });
            if (!e.data.projects.textures.loaded && (t.to.data.type == Const.PagesTypes.WALL || t.to.data.type == Const.PagesTypes.LEAF))
                return void this.preload(Const.DataTypes.PROJECTS, e.data.projects.collection, function (n) {
                    e.data.projects.textures = {
                        loaded: !0,
                        items: n.projects
                    };
                    this.update(t, i)
                });
            if (!e.data.contacts.textures.loaded && t.to.data.type == Const.PagesTypes.CLEAF)
                return void this.preload(Const.DataTypes.CONTACTS, e.data.contacts.collection, function (n) {
                    e.data.contacts.textures = {
                        loaded: !0,
                        items: n.contacts
                    };
                    this.update(t, i)
                });
            e.data.sections.controller.update();
            e.data.projects.controller.update();
            var s = this.needClear(S, t, i) ? 600 : 0;
            n(_.bind(function () {
                this.setState(t, i);
                e.resize()
            }, this), s)
        }
    };
    this.updateResolution = function (t) {
        I.resolution = t;
        I.rootRenderTarget.resolution = t;
        I.plugins.interaction.resolution = t;
        e.resize()
    };
    this.setupMenagers = function () {
        j.setup(e);
        R.setup(e)
    };
    this.buildStage = function () {
        k = new $(e);
        A.addChild(k.render().$el);
        F.filters = [D.addNoise()];
        A.filters = [D.addGlitch()];
        this.addEvents()
    };
    this.addEvents = function () {
        var n = "work",
            i = "about",
            a = "contacts",
            o = "work.wall",
            l = "about.scroll",
            u = "contacts.leaf";
        e.data.sections.controller.addEvents();
        e.data.projects.controller.addEvents();
        e.data.infos.controller.addEvents();
        e.$on(s.CHANGE_STATE, _.bind(function (e, n) {
            t.go(n.name)
        }, this));
        e.$on(s.OPEN_MENU, _.bind(function (e, n) {
            t.go(Const.PagesTypes.MENU)
        }, this));
        e.$on(s.CLICK_MENU, _.bind(function (e, r) {
            if (r.name == n)
                t.go(o, {
                    page: 1
                })
            else if (r.name == i)
                t.go(l, {
                    page: "intro"
                })
            else if (r.name == a)
                t.go(u, {
                    page: "letstalk"
                })
            else
                t.go(r.name);
            k.menuopen = !1
        }, this));
        e.$on(s.BACK, _.bind(function (n) {
            var i = e.currstate.to,
                s = e.currstate.from;
            if (i.data.back || i.data.mback)
                r.isPhone() ? t.go(i.data.mback) : t.go(i.data.back);
            else {
                var a = s.name || "index";
                t.go(a, e.currstate.params.from)
            }
        }, this));
        e.$on(s.HOLD_START, _.bind(function () {
            S.$holdrag && S.$holdrag.expand()
        }, this));
        e.$on(s.HOLD_END, _.bind(function () {
            S.$holdrag && S.$holdrag.collapse()
        }, this));
        e.$on(s.SHARE_SITE, _.bind(function (e, t) {
            b.shareOn(t)
        }, this));
        e.$on(s.TOGGLE_SOUNDS, _.bind(function (e, t) {
            y.toggle()
        }, this));
        e.$on(s.OPEN_COOKIE, _.bind(function (e, t) {
            window.open("cookie/", "_blank")
        }, this))
    };
    this.navigate = function (t) {
        if (0 != t.value) {
            var i = e.currstate.to.data.type;
            P && n.cancel(P);
            P = n(_.bind(function () {
                e.direction = {
                    value: 0,
                    type: Const.DirsTipes.VERT
                };
                e.$apply()
            }, this), 900);
            if (e.data.sections.textures.loaded && (i != Const.PagesTypes.WALL && i != Const.PagesTypes.LEAF || e.data.projects.textures.loaded))
                if (i == Const.PagesTypes.INDEX && t.type == Const.DirsTipes.VERT)
                    e.data.sections.controller.updatePage(t.value);
                else if (i == Const.PagesTypes.WALL && t.type == Const.DirsTipes.VERT)
                    e.data.projects.controller.updateWall(t.value);
            else if (i == Const.PagesTypes.LEAF)
                e.data.projects.controller.updateLeaf(t.value);
            else if (i == Const.PagesTypes.INFOS && t.type == Const.DirsTipes.VERT)
                e.data.infos.controller.updatePage(t.value);
            else if (i == Const.PagesTypes.CLEAF)
                return
        }
    };
    this.setState = function (t, n) {
        N = [];
        e.data.sections.controller.setState(t);
        e.data.projects.controller.setState(t);
        e.data.infos.controller.setState(t);
        R.setAmbientSound(t);
        if ("about.scroll" == t.from.name && t.from.name == t.to.name)
            return void k.setState(t)
        else if (_.isUndefined(this.currstate)) {
            this.currstate = t;
            return void this.addState(t, n)
        } else {
            if (t.to.name != this.currstate.to.name || parseInt(t.params.page) != parseInt(this.currstate.params.to.page) || t.params.leaf != this.currstate.params.to.leaf) {
                this.removeState(this.currstate);
                this.currstate = t
            }
            return void this.addState(t, n)
        }
    };
    this.addState = function (t, n) {
        var i = z[t.to.data.instance];
        O = S;
        S = new i(e, t.model);
        e.section = S;
        this.addOnTop(t, n) ? A.addChild(S.render().$el) : A.addChildAt(S.render().$el, 0);
        A.addChild(k.$el);
        k.setState(t);
        t.to.data.type != Const.PagesTypes.WALL && t.to.data.type != Const.PagesTypes.LEAF ? D.start() : D.stop();
        N.push(new TimelineMax({
            tweens: this.getTweensIn(t, n),
            stagger: .15
        }));
        this.tween()
    };
    this.removeState = function (e) {
        N.push(new TimelineMax({
            tweens: this.getTweensOut(e),
            data: {
                scope: S
            }
        }))
    };
    this.tween = function () {
        var t = S;
        new TimelineMax({
            tweens: N,
            onComplete: function () {
                t.ready();
                if (this.vars.tweens.length > 1) {
                    e.data.sections.controller.clearState();
                    e.data.projects.controller.clearState();
                    var n = this.vars.tweens[0].data.scope;
                    A.removeChild(n.$el);
                    n.destroy();
                    n = null;
                    O = null
                }
            }
        })
    };
    this.getTweensIn = function (e, t) {
        var n = S.tweenIn;
        if (t) {
            e.to.data.type == Const.PagesTypes.WALL && t.to.data.type == Const.PagesTypes.WALL && (n = S.tweenInWithRows);
            e.to.data.type == Const.PagesTypes.LEAF && t.to.data.type == Const.PagesTypes.LEAF && (n = S.tweenInWithSlide);
            e.to.data.type == Const.PagesTypes.WALL && t.to.data.type == Const.PagesTypes.LEAF && (n = S.tweenInFromLeaf);
            t.to.data.type == Const.PagesTypes.MENU && (n = S.tweenInFromMenu)
        }
        return [n.call(S), k.tweenIn()]
    };
    this.getTweensOut = function (t) {
        var n = S.tweenOut;
        t.to.data.type == Const.PagesTypes.INDEX && e.currstate.to.data.type != Const.PagesTypes.INDEX && (n = S.tweenOutToPage);
        t.to.data.type == Const.PagesTypes.WALL && e.currstate.to.data.type == Const.PagesTypes.WALL && (n = S.tweenOutWithRows);
        t.to.data.type == Const.PagesTypes.WALL && e.currstate.to.data.type == Const.PagesTypes.LEAF && (n = S.tweenOutToLeaf);
        t.to.data.type == Const.PagesTypes.LEAF && e.currstate.to.data.type == Const.PagesTypes.LEAF && (n = S.tweenOutWithSlide);
        e.currstate.to.data.type == Const.PagesTypes.MENU && (n = S.tweenOutToMenu)
        return [n.call(S)]
    };
    this.needClear = function (e, t, n) {
        var i = !1;
        t.to.data.type == Const.PagesTypes.WALL && e && e.isSideShow && (e.clearSides(), i = !0);
        return i
    };
    this.addOnTop = function (e, t) {
        var n = !0;
        if (t) {
            if (t.to.data.type != e.to.data.type)
                (e.from.data.type == Const.PagesTypes.MENU || e.to.data.type == Const.PagesTypes.LEAF || e.to.data.type == Const.PagesTypes.WALL || e.to.data.type == Const.PagesTypes.INFOS || e.to.data.type == Const.PagesTypes.CLEAF) && (n = !1)
            else
                e.to.data.type == Const.PagesTypes.LEAF && (n = !1)
        }
        return n
    };
    this.resize = function (e) {
        if (e && I) {
            I.resize(e.w, e.h);
            j.resize(e);
            S && S.resize(e);
            k && k.resize(e);
            C && C.resize(e);
            E && E.resize(e)
        }
    };
    e.$watch("direction", _.bind(this.navigate, this));
    e.$watch("currstate", _.bind(this.update, this));
    e.$watch("stagesize", _.bind(this.resize, this))
}]