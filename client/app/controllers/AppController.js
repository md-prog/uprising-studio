const e = require('underscore')

module.exports = ["$scope", "$state", "$rootScope", "$controller", "$urlRouter", "$timeout", "DataLoader", "Events", "Utils", "Const", function (t, n, i, r, s, a, o, Events, Utils, Const) {
    var h = $(window),
        d = $(document),
        p = 0,
        f = 150,
        m = 0;
    t.data = {};
    t.stage = null;
    t.loaded = !1;
    t.currstate = null;
    t.stagesize = null;
    t.direction = {
        value: 0
    };
    this.ready = function (e) {
        t.loaded = !0;
        t.data = {
            menu: {
                geometry: {
                    shape: null
                },
                textures: {
                    loaded: !1,
                    materials: null
                }
            },
            sections: {
                collection: e.sections,
                textures: {
                    loaded: !1
                },
                controller: r("SectionsController", {
                    $scope: t
                })
            },
            projects: {
                collection: e.projects,
                textures: {
                    loaded: !1
                },
                controller: r("ProjectsController", {
                    $scope: t
                })
            },
            infos: {
                team: e.team,
                clients: e.clients,
                controller: r("InfosController", {
                    $scope: t
                })
            },
            contacts: {
                collection: [{
                    name: "contacts",
                    video: "video/_Reel_converted.mp4",
                    poster: "video/_Reel_converted.mp4"
                }],
                textures: {
                    loaded: !1
                }
            }
        }, s.sync()
    };
    this.onStateChange = function (e, n, i, r, s, a) {
        return Utils.getWebgl() ? !t.loaded || t.isLoading ? (e.preventDefault(), !1) : (t.currstate = {
            model: this.getModel(n.data.instance),
            to: n,
            from: r,
            params: {
                to: i,
                from: s
            }
        }, void t.resize()) : (window.redirect("nowebgl"), !1)
    };
    this.onWheel = function (e) {
        var t = 0,
            n = Const.DirsTipes.VERT;
        Utils.getTime() - p;
        p = Utils.getTime();
        e.deltaY > 0 && (t = -1);
        e.deltaY < 0 && (t = 1);
        0 != t && this.setDir(t, n)
    };
    this.onKey = function (e) {
        var t = 0,
            n = Const.DirsTipes.VERT,
            i = Utils.getTime() - m;
        m = Utils.getTime();
        40 == e.keyCode && (t = 1);
        38 == e.keyCode && (t = -1);
        (40 == e.keyCode || 38 == e.keyCode && i > f) && this.setDir(t, n)
    };
    this.onSwipe = function (e, t) {
        var n, i = 0;
        t.direction == Hammer.DIRECTION_UP && (i = 1, n = Const.DirsTipes.VERT), t.direction == Hammer.DIRECTION_DOWN && (i = -1, n = Const.DirsTipes.VERT), t.direction == Hammer.DIRECTION_LEFT && (i = 1, n = Const.DirsTipes.HORIZ), t.direction == Hammer.DIRECTION_RIGHT && (i = -1, n = Const.DirsTipes.HORIZ), this.setDir(i, n)
    };
    this.setDir = function (e, n) {
        e != t.direction.value && (t.direction = {
            value: e,
            type: n
        }, t.$apply())
    };
    this.getModel = function (n) {
        return e.where(t.data.sections.collection, {
            name: n
        })[0] || {}
    };
    this.resize = function () {
        t.stagesize = {
            w: innerWidth,
            h: innerHeight,
            x: innerWidth / 2,
            y: innerHeight / 2
        };
        a(function () {
            t.stagesize = {
                w: innerWidth,
                h: innerHeight,
                x: innerWidth / 2,
                y: innerHeight / 2
            }
        })
    };
    t.resize = function () {
        h.trigger(Events.RESIZE)
    };
    i.$on("$stateChangeStart", e.bind(this.onStateChange, this));
    h.on(Events.RESIZE, e.bind(this.resize, this)).trigger(Events.RESIZE);
    d.on(Events.TOUCH_MOVE, function (e) {
        e.preventDefault()
    }, !1);
    d.on(Events.MOUSE_WHEEL, e.bind(this.onWheel, this));
    d.on(Events.KEY_DOWN, e.bind(this.onKey, this));
    t.$on(Events.SWIPE, e.bind(this.onSwipe, this));
    o.load().then(e.bind(this.ready, this))
}]