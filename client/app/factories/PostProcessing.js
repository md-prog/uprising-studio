module.exports = ["SoundManager", "Math2", "Utils", function (e, t, n) {
    function i() {
        h = new PIXI.filters.GlitchFilter;
        h.resolution = n.getDpr();
        h.padding = 0;
        a();
        return h
    }

    function r() {
        c = new PIXI.filters.FilmFilter;
        c.resolution = n.getDpr();
        c.nIntensity = .15;
        c.sIntensity = 0;
        c.padding = 0;
        return c
    }

    function s() {
        c && (c.time += .01);
        p || (
            h && (
                h.seed = .25 * Math.random(),
                h.byp = 0,
                f % d == 0 ? (
                    f = 0,
                    a()
                ) : d / 20 > f % d ? (
                    h.amount = Math.random() / 60,
                    h.angle = t.randFloat(-Math.PI, Math.PI),
                    h.distortionX = t.randFloat(0, 1),
                    h.distortionY = -1,
                    h.seedX = t.randFloat(-.2, .2),
                    h.seedY = t.randFloat(-.2, .2),
                    e.play("post", "glitch", !1)
                ) : h.byp = 1
            ), ++f, ++$
        )
    }

    function a() {
        d = t.randInt(280, 540)
    }

    function o() {
        p && (p = !1)
    }

    function l() {
        p || (p = !0), u()
    }

    function u() {
        h.seed = 0;
        h.angle = 0;
        h.amount = 0;
        h.seedX = 0;
        h.seedY = 0;
        h.distortionX = -1;
        h.distortionY = -1;
        e.stop("post", "glitch")
    }
    var c, h, d, p = !0,
        f = 0,
        $ = 0;
    return {
        addGlitch: i,
        addNoise: r,
        update: s,
        start: o,
        stop: l
    }
}]