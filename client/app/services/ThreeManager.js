const _ = require('underscore')

function e(e, t, n, i, r) {
    function s(i) {
        var r = new n;
        m = {
            menu: {
                scene: new e(i, r),
                active: !0
            },
            infos: {
                scene: new t(i, r),
                active: !0
            }
        };
        m.menu.scene.render();
        m.infos.scene.render();
        g = i, a();
        setTimeout(function () {
            m.menu.active = !1;
            m.infos.active = !1
        }, 1e3)
    }

    function a() {
        var e = $(document);
        e.on(i.MOUSE_DOWN, _.bind(function (e) {
            e.preventDefault();
            o({
                clientX: e.clientX,
                clientY: e.clientY
            })
        }, this)), e.on(i.MOUSE_MOVE, _.bind(function (e) {
            e.preventDefault();
            l({
                clientX: e.clientX,
                clientY: e.clientY
            })
        }, this)), e.on(i.MOUSE_UP, _.bind(function (e) {
            e.preventDefault(), u({
                clientX: e.clientX,
                clientY: e.clientY
            })
        }, this)), e.on(i.TOUCH_START, _.bind(function (e) {
            1 == e.touches.length && (e.preventDefault(), o({
                clientX: e.touches[0].pageX,
                clientY: e.touches[0].pageY
            }))
        }, this)), e.on(i.TOUCH_MOVE, _.bind(function (e) {
            1 == e.touches.length && (e.preventDefault(), l({
                clientX: e.touches[0].pageX,
                clientY: e.touches[0].pageY
            }))
        }, this)), e.on(i.TOUCH_END, _.bind(function (e) {
            e.preventDefault();
            u(e)
        }, this))
    }

    function o(e) {
        m.menu.active && m.menu.scene.onDown(e);
        m.infos.active && m.infos.scene.onDown(e)
    }

    function l(e) {
        m.menu.active && m.menu.scene.onMove(e);
        m.infos.active && m.infos.scene.onMove(e)
    }

    function u(e) {
        m.menu.active && m.menu.scene.onUp(e);
        m.infos.active && m.infos.scene.onUp(e)
    }

    function c() {
        return m
    }

    function h(e) {
        var t = m[e].scene.renderer.domElement;
        return t._pixiId && (delete PIXI.utils.BaseTextureCache[t._pixiId], delete t._pixiId), m[e].active = !0, new PIXI.Texture.fromCanvas(t)
    }

    function d() {
        m && (m.menu.active && m.menu.scene.udpate(), m.infos.active && m.infos.scene.udpate())
    }

    function p(e) {
        g.currstate.to.data.type != e && (m[e].active = !1, m[e].scene.clear())
    }

    function f() {}
    var m, g;
    return {
        setup: s,
        clear: p,
        update: d,
        resize: f,
        getStore: c,
        getTexture: h
    }
}

module.exports = ["MenuScene", "InfoScene", "ThreeFactory", "Events", "Const", e]