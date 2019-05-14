function e() {
    function e(e) {
        var t = "video/performance_test.mp4";
        s = new PIXI.Container;
        a = new PIXI.Sprite(PIXI.Texture.fromVideoUrl(t));
        a.texture.baseTexture.source.loop = !0;
        s.addChild(a);
        e.addChild(s);
        s.alpha = 0
    }

    function t() {
        c && (o = i(), g = o - l, $ = Math.min($, g), m = Math.max(m, g), l = o, ++h, o > u + 1e3 && (f = Math.round(1e3 * h / (o - u)), d = Math.min(d, f), p = Math.max(p, f), u = o, h = 0))
    }

    function n() {
        var e = {
            fps: 0,
            index: -1,
            color: 0,
            label: "Test..."
        };
        return c || (f > 59 && (e = {
            fps: {
                last: f,
                min: d,
                max: p
            },
            index: 2,
            color: "#00ff90",
            label: "High"
        }), 59 >= f && (e = {
            fps: {
                last: f,
                min: d,
                max: p
            },
            index: 1,
            color: "orange",
            label: "Medium"
        }), 10 >= f && (e = {
            fps: {
                last: f,
                min: d,
                max: p
            },
            index: 0,
            color: "#ff0054",
            label: "Low"
        })), e
    }

    function i() {
        return Date.now() || (new Date).getTime()
    }

    function r() {
        c = !1;
        a.destroy(!0);
        s.destroy();
        s = null;
        a = null
    }
    var s, a, o = i(),
        l = o,
        u = o,
        c = !0,
        h = 0,
        d = 1e3,
        p = 0,
        f = 0,
        $ = 1e3,
        m = 0,
        g = 0;
    return {
        update: t,
        clear: r,
        test: e,
        get: n
    }
}

module.exports = [e]