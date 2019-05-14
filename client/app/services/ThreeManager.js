const _ = require('underscore')

function e(MenuScene, t, n, i, r) {
    function setup(i) {
        var r = new n;
        m = {
            menu: {
                scene: new MenuScene(i, r),
                active: !0
            },
            infos: {
                scene: new t(i, r),
                active: !0
            }
        };
        m.menu.scene.render();
        m.infos.scene.render();
        g = i;
        a();
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
        }, this));
        e.on(i.MOUSE_MOVE, _.bind(function (e) {
            e.preventDefault();
            l({
                clientX: e.clientX,
                clientY: e.clientY
            })
        }, this));
        e.on(i.MOUSE_UP, _.bind(function (e) {
            e.preventDefault();
            u({
                clientX: e.clientX,
                clientY: e.clientY
            })
        }, this));
        e.on(i.TOUCH_START, _.bind(function (e) {
            if (1 == e.touches.length) {
                e.preventDefault();
                o({
                    clientX: e.touches[0].pageX,
                    clientY: e.touches[0].pageY
                })
            }
        }, this));
        e.on(i.TOUCH_MOVE, _.bind(function (e) {
            if (1 == e.touches.length) {
                e.preventDefault();
                l({
                    clientX: e.touches[0].pageX,
                    clientY: e.touches[0].pageY
                })
            }
        }, this));
        e.on(i.TOUCH_END, _.bind(function (e) {
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

    function getStore() {
        return m
    }

    function getTexture(e) {
        var t = m[e].scene.renderer.domElement;
        if (t._pixiId) {
            delete PIXI.utils.BaseTextureCache[t._pixiId];
            delete t._pixiId;
        }
        m[e].active = !0;
        return new PIXI.Texture.fromCanvas(t)
    }

    function update() {
        if (m) {
            m.menu.active && m.menu.scene.update();
            m.infos.active && m.infos.scene.update()
        }
    }

    function clear(e) {
        if (g.currstate.to.data.type != e) {
            m[e].active = !1;
            m[e].scene.clear()
        }
    }

    function resize() {}

    var m, g;

    return {
        setup: setup,
        clear: clear,
        update: update,
        resize: resize,
        getStore: getStore,
        getTexture: getTexture
    }
}

module.exports = ["MenuScene", "InfoScene", "ThreeFactory", "Events", "Const", e]