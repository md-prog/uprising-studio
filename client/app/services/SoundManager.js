const _ = require('underscore')

function e(e) {
    function t() {
        var e;
        _.each(u, function (t) {
            _.each(t, function (t) {
                e = $('<audio preload="auto" />')[0];
                e.src = t.src + "?v=" + Date.now();
                e.volume = 0;
                t.player = e
            })
        })
    }

    function n(e) {
        i(e), r(e)
    }

    function i(t) {
        if (t.to.name == e.PagesTypes.MENU)
            TweenMax.to(u.menu.ambient.player, 1, {
                volume: l ? 0 : 1,
                ease: Linear.easeNone,
                onStart: function () {
                    u.menu.ambient.player.loop = !0;
                    u.menu.ambient.player.paused && u.menu.ambient.player.play()
                }
            })
        else
            TweenMax.to(u.menu.ambient.player, 1, {
                volume: 0,
                ease: Linear.easeNone,
                onComplete: function () {
                    u.menu.ambient.player.paused || u.menu.ambient.player.pause()
                }
            })
    }

    function r(t) {
        if (t.to.name != e.PagesTypes.MENU)
            TweenMax.to(u.sections.ambient.player, 1, {
                volume: l ? 0 : 1,
                ease: Linear.easeNone,
                onStart: function () {
                    u.sections.ambient.player.loop = !0;
                    u.sections.ambient.player.paused && u.sections.ambient.player.play()
                }
            })
        else
            TweenMax.to(u.sections.ambient.player, 1, {
                volume: 0,
                ease: Linear.easeNone,
                onComplete: function () {
                    u.sections.ambient.player.paused || u.sections.ambient.player.pause()
                }
            })
    }

    function s(e, t, n) {
        var i = u[e][t].player;
        if (i.paused || n) {
            i.currentTime = 0;
            i.volume = l ? 0 : 1;
            i.play()
        }
    }

    function a(e, t) {
        var n = u[e][t].player;
        n.paused || (n.pause(), n.volume = 0)
    }

    function o() {
        l = !l;
        _.each(u, function (e) {
            _.each(e, function (e) {
                e.player.paused || TweenMax.to(e.player, 1, {
                    volume: l ? 0 : 1,
                    ease: Linear.easeNone
                })
            })
        })
    }
    var l = !1,
        u = {
            menu: {
                ambient: {
                    src: "audio/menu-ambient.mp3"
                },
                iconshover: {
                    src: "audio/menu-icons-hover.mp3"
                },
                tweens: {
                    src: "audio/menu-tweens.mp3"
                },
                zoom: {
                    src: "audio/menu-zoom.mp3"
                }
            },
            sections: {
                ambient: {
                    src: "audio/sections-ambient.mp3"
                },
                copyloop: {
                    src: "audio/sections-copy-loop.mp3"
                },
                hambbackhover: {
                    src: "audio/sections-hamb-back-hover.mp3"
                },
                tweenIn: {
                    src: "audio/sections-tweenIn.mp3"
                },
                tweenOut: {
                    src: "audio/sections-tweenOut.mp3"
                }
            },
            projects: {
                wall: {
                    src: "audio/projects-wall.mp3"
                },
                leaf: {
                    src: "audio/projects-leaf.mp3"
                }
            },
            about: {
                introtween: {
                    src: "audio/about-intro-tween.mp3"
                },
                copytween: {
                    src: "audio/about-copy-tween.mp3"
                },
                scroll: {
                    src: "audio/about-scroll-tween.mp3"
                },
                zoom: {
                    src: "audio/about-zoom.mp3"
                }
            },
            post: {
                glitch: {
                    src: "audio/post-glitch.mp3"
                }
            }
        };
    return {
        setAmbientSound: n,
        toggle: o,
        setup: t,
        play: s,
        stop: a
    }
}

module.exports = ["Const", e]