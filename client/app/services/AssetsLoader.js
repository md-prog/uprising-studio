function e(e, t, n) {
    function i(e, n, i) {
        return o = t.defer(), l ? s(e, n, i) : r(e, n, i), o.promise
    }

    function r(e, t, n) {
        var i = new createjs.LoadQueue(!1);
        i.on("progress", function (e) {
            u = .5 * e.progress, n.call(null, u)
        }), i.on("complete", function (i) {
            s(e, t, n)
        }), i.loadManifest(a())
    }

    function s(e, t, i) {
        n.load(e, t, function (e) {
            u = l ? e : .5 + .5 * e, i.call(null, u)
        }).then(function (e) {
            o.resolve(e)
        })
    }

    function a() {
        return [{
            src: "img/envmap/px.jpg"
        }, {
            src: "img/envmap/nx.jpg"
        }, {
            src: "img/envmap/py.jpg"
        }, {
            src: "img/envmap/ny.jpg"
        }, {
            src: "img/envmap/pz.jpg"
        }, {
            src: "img/envmap/nz.jpg"
        }, {
            src: "img/mouse-icon.png"
        }, {
            src: "img/share-icon.png"
        }, {
            src: "img/uprsg-logo.png"
        }, {
            src: "img/texture/payoff.png"
        }, {
            src: "img/texture/main-label.png"
        }, {
            src: "img/texture/work-label.png"
        }, {
            src: "img/texture/about-label.png"
        }, {
            src: "img/texture/contacts-label.png"
        }]
    }
    var o, l = !1,
        u = 0;
    return {
        load: i
    }
}

module.exports = ["$http", "$q", "Textures", e]