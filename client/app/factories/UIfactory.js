const _ = require('underscore')

module.exports = ["Text", "Hamb", "Bread", "Scroller", "Numnav", "Back", "Mouse", "Utils", function (e, t, n, i, r, s, a, o) {
    function l(e) {
        var l = o.getColors();
        return {
            getHamb: function () {
                return new t
            },
            getBread: function () {
                return new n("", {
                    fontFamily: "din-condensed-web",
                    fontSize: 17,
                    fill: l.red,
                    letterSpacing: .25
                })
            },
            getLogo: function () {
                var e = new PIXI.Sprite,
                    t = new PIXI.Sprite.fromImage("img/uprsg-logo.png"),
                    n = new PIXI.Graphics;
                n.beginFill(l.black, .5);
                n.drawRect(-5, -10, 192, 50);
                t.mask = n;
                e.addChild(t);
                e.addChild(n);
                e.scale.x = .5;
                e.scale.y = .5;
                return e;
            },
            getShare: function () {
                var e = new PIXI.Sprite,
                    t = new PIXI.Graphics,
                    n = new PIXI.Sprite.fromImage("img/share-icon.png"),
                    i = new PIXI.Graphics,
                    r = new PIXI.Sprite,
                    s = new PIXI.Graphics,
                    a = new PIXI.Sprite,
                    o = new PIXI.Text("F", {
                        fontFamily: "montser-reg",
                        fontSize: 8,
                        fill: l.white
                    }),
                    u = new PIXI.Text("T", {
                        fontFamily: "montser-reg",
                        fontSize: 8,
                        fill: l.white
                    });
                t.beginFill(l.white);
                t.drawRect(0, 0, -50, 2);
                t.x = 50;
                n.scale.x = .5;
                n.scale.y = .5;
                n.y = -25;
                n.x = 0;
                i.beginFill(l.white, 0);
                i.drawRect(-6, -4, 18, 18);
                r.addChild(i);
                r.addChild(o);
                r.interactive = !0;
                r.buttonMode = !0;
                r.x = 25;
                r.y = -25;
                s.beginFill(l.white, 0);
                s.drawRect(-6, -4, 18, 18);
                a.addChild(s);
                a.addChild(u);
                a.interactive = !0;
                a.buttonMode = !0;
                a.x = 45;
                a.y = -25;
                e.addChild(t);
                e.addChild(n);
                e.addChild(r);
                e.addChild(a);
                r.mouseover = _.bind(function () {
                    TweenMax.to(r, 1, {
                        alpha: .2,
                        ease: Expo.easeOut
                    })
                }, this);
                r.mouseout = _.bind(function () {
                    TweenMax.to(r, 1, {
                        alpha: 1,
                        ease: Expo.easeOut
                    })
                }, this);
                a.mouseover = _.bind(function () {
                    TweenMax.to(a, 1, {
                        alpha: .2,
                        ease: Expo.easeOut
                    })
                }, this);
                a.mouseout = _.bind(function () {
                    TweenMax.to(a, 1, {
                        alpha: 1,
                        ease: Expo.easeOut
                    })
                }, this);
                return e
            },
            getAudio: function () {
                var e = !1,
                    t = new PIXI.Sprite,
                    n = new PIXI.Graphics,
                    i = new PIXI.Sprite.fromImage("img/audio-icon.png");
                i.scale.x = .5;
                i.scale.y = .5;
                n.beginFill(l.red, 1);
                n.drawRect(-10, -1, 20, 2);
                n.rotation = -Math.PI / 4;
                n.scale.x = 0;
                n.x = 10;
                n.y = 10;
                t.addChild(i);
                t.addChild(n);
                t.interactive = !0;
                t.buttonMode = !0;
                t.mouseover = _.bind(function () {
                    TweenMax.to(t, 1, {
                        alpha: .2,
                        ease: Expo.easeOut
                    })
                }, this);
                t.mouseout = _.bind(function () {
                    TweenMax.to(t, 1, {
                        alpha: 1,
                        ease: Expo.easeOut
                    })
                }, this);
                t.toggleMute = function () {
                    e = !e;
                    TweenMax.to(n.scale, .5, {
                        x: e ? 1 : 0,
                        ease: Expo.easeOut
                    })
                };
                return t
            },
            getFooter: function () {
                var e = new PIXI.Sprite,
                    t = new PIXI.Sprite,
                    n = "Cookie Policy",
                    i = " . VAT 02651970549",
                    r = new PIXI.Text(n.toUpperCase(), {
                        fontFamily: "montser-reg",
                        fontSize: 8,
                        fill: l.white,
                        letterSpacing: 1.25
                    }),
                    s = new PIXI.Text(i.toUpperCase(), {
                        fontFamily: "montser-reg",
                        fontSize: 8,
                        fill: 10066329,
                        letterSpacing: 1.25
                    }),
                    a = new PIXI.Graphics,
                    o = new PIXI.Graphics,
                    u = new PIXI.Graphics,
                    c = new PIXI.Graphics;
                s.x = r.width;
                o.beginFill(l.white);
                o.drawRect(-20, 4, -30, 1);
                u.beginFill(l.white);
                u.drawRect(-20, 5, -25, 1);
                var h = r.width + s.width;
                c.beginFill(l.white, .5);
                c.drawRect(0, 0, -h - 60, s.height);
                c.x = h + 5;
                a.beginFill(l.white, 0);
                a.drawRect(-5, -5, r.width + 10, r.height + 10);
                a.interactive = !0;
                a.buttonMode = !0;
                t.addChild(c);
                t.addChild(o);
                t.addChild(u);
                t.addChild(s);
                t.addChild(r);
                t.addChild(r);
                e.addChild(t);
                e.addChild(a);
                a.mouseover = _.bind(function () {
                    TweenMax.to(r, 1, {
                        alpha: .5,
                        ease: Expo.easeOut
                    })
                }, this);
                a.mouseout = _.bind(function () {
                    TweenMax.to(r, 1, {
                        alpha: 1,
                        ease: Expo.easeOut
                    })
                }, this);
                e.cookie = a;
                t.mask = c;
                return e
            },
            getQuadNav: function () {
                var t, n, i, r, s, a = new PIXI.Sprite,
                    o = new PIXI.Sprite;
                _.each(e.sections, function (e, a) {
                    t = new PIXI.Sprite;
                    t.interactive = !0;
                    t.buttonMode = !0;
                    n = new PIXI.Graphics;
                    i = new PIXI.Graphics;
                    r = new PIXI.Graphics;
                    s = new PIXI.Graphics;
                    n.beginFill(l.white, 0);
                    n.drawRect(-10, -10, 20, 20);
                    i.beginFill(l.white, 0);
                    i.lineStyle(2, l.white);
                    i.drawRect(-3, -3, 6, 6);
                    r.beginFill(l.green, 0);
                    r.lineStyle(2, l.green);
                    r.drawRect(-3, -3, 6, 6);
                    i.rotation = .785398;
                    r.rotation = .785398;
                    r.alpha = 0 == a ? 1 : 0;
                    t.x = Math.round(23 * a);
                    t.addChild(n);
                    t.addChild(i);
                    t.addChild(r);
                    o.addChild(t);
                }, this);
                a.addChild(o);
                a.$child = o;
                return a
            },
            getScroller: function () {
                var e = new PIXI.Sprite,
                    t = new i;
                e.addChild(t.render().$el);
                e.$child = t;
                e.alpha = 0;
                return e
            },
            getNumnav: function () {
                var e = new PIXI.Sprite,
                    t = new r;
                e.addChild(t.render().$el);
                e.$child = t;
                e.$child.$el.x = 80;
                return e
            },
            getBack: function () {
                var e = new PIXI.Sprite,
                    t = new s;
                e.addChild(t.render().$el);
                e.$child = t;
                return e
            },
            getMouse: function () {
                var e = new PIXI.Sprite,
                    t = new a;
                e.addChild(t.render().$el);
                e.$child = t;
                e.$child.$el.y = 60;
                return e
            }
        }
    }
    return l
}]