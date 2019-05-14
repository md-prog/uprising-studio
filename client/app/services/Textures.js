const _ = require('underscore')

function e(e, t, n, i) {
    function r(e, n, i) {
        v = 0;
        h = t.defer();
        g = n.length < 4 ? n.length : 4;
        d = i;
        c = n;
        m = e;
        $[e] = {};
        p ? l(e, c, i) : s()
        return h.promise
    }

    function s() {
        _.each(c, function (e) {
            var t = document.createElement("video");
            t.appendChild(o(e.video));
            t.preload = "auto";
            t.id = e.name;
            t.autoplay = !0;
            t.playsinline = !0;
            t.muted = 'muted';
            $[m][t.id] = t;
            if (f)
                n(function () {
                    a(t)
                }, 600)
            else
                t.addEventListener("canplay", a)
        })
    }

    function a(e) {
        var t = e.currentTarget || e;
        t.width = t.videoWidth || 1280;
        t.height = t.videoHeight || 720;
        t.pause();
        t.removeEventListener("canplay", a);
        ++v;
        g >= v && d.call(null, v / g);
        v == g && u()
    }

    function o(e, t) {
        t || (t = "video/" + e.substr(e.lastIndexOf(".") + 1));
        var n = document.createElement("source");
        n.src = e + "?v=" + Date.now();
        n.type = t
        return n
    }

    function l(e, t, n) {
        var i = new createjs.LoadQueue(!1),
            r = [];
        i.on("progress", function (e) {
            d.call(null, e.progress)
        });
        i.on("fileload", function (e) {
            $[m][e.item.id] = e.result
        });
        i.on("complete", function (e) {
            u()
        });
        _.each(t, function (e) {
            r.push({
                id: e.name,
                src: e.poster
            })
        });
        i.loadManifest(r)
    }

    function u() {
        n(function () {
            h.resolve($)
        }, 2e3)
    }

    var c, h, d,
        p = i.isMobile(),
        f = i.isValidIE() || i.isSafari(),
        $ = {},
        m = "",
        g = 0,
        v = 0;
        
    return {
        load: r
    }
}

module.exports = ["$http", "$q", "$timeout", "Utils", e]