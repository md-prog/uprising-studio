const _ = require("underscore")

module.exports = ["DisplayObject", "Text", "Math2", "SoundManager", function (e, t, n, i) {
    function r(e, t) {
        this.model = e;
        this.colors = t;
        this.$el = new PIXI.Sprite;
        this.$el.scope = this
    }

    function s(t) {
        e.call(this);
        this.length = t.length;
        this.collection = t;
        this.module = 4;
        this.slide = -1
    }

    r.prototype.constructor = r;
    r.prototype = {
        render: function () {
            var e = this.colors;
            this.$name = this.getMaskText(this.model.client.toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 28,
                fill: e.green,
                letterSpacing: 0
            });
            this.$name.x = 0;
            this.$name.x = 0;
            this.$place = new t(this.model.place.toUpperCase(), {
                fontFamily: "montser-bold",
                fontSize: 9,
                fill: e.white,
                letterSpacing: 1
            });
            this.$place.$el.y = this.$name.oheight + 10;
            this.$place.$el.x = 0;
            this.$el.addChild(this.$name);
            this.$el.addChild(this.$place.$el);
            this.width = this.$name.owidth;
            var n, i, r = 0;
            _.each(this.$place.$el.children, function (e) {
                e.alpha = 0
            });
            _.each(this.$name.children, function (e, t) {
                i = e.getChildAt(0);
                n = e.getChildAt(1);
                r = t % 2 == 0 ? n.height + n.y + e.scope.getPadding() / 2 : n.y - e.scope.height - e.scope.getPadding() / 2;
                TweenMax.set(i, {
                    y: r
                })
            }, this);
            return this
        },
        tweenIn: function () {
            var e, t, n = [],
                i = 0;
            this.timeline && this.timeline.kill();
            _.each(this.$name.children, function (r, s) {
                t = r.getChildAt(0);
                e = r.getChildAt(1);
                i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2;
                n.push(TweenMax.fromTo(t, .9, {
                    y: i
                }, {
                    y: 0,
                    ease: Expo.easeInOut
                }))
            }, this);
            this.timeline = new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: n,
                        stagger: .035
                    }),
                    TweenMax.allFromTo(this.$place.$el.children, 1, {
                        alpha: 0
                    }, {
                        alpha: 1,
                        ease: Expo.easeOut
                    }, .035)
                ],
                stagger: .35
            });
            return this.timeline
        },
        tweenOut: function () {
            var e, t, n = [],
                i = 0;
            this.timeline && this.timeline.kill();
            _.each(this.$name.children, function (r, s) {
                t = r.getChildAt(0);
                e = r.getChildAt(1);
                i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2;
                n.push(TweenMax.to(t, .75, {
                    y: i,
                    ease: Expo.easeInOut
                }))
            }, this);
            this.timeline = new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: n,
                        stagger: .035
                    }),
                    TweenMax.allTo(this.$place.$el.children, .9, {
                        alpha: 0,
                        ease: Expo.easeOut
                    }, .035)
                ],
                stagger: .35
            });
            return this.timeline
        },
        getMaskText: function (e, i) {
            for (var r, s, a, o, l, u, c = 0, h = 0, d = {}, p = new PIXI.Sprite, f = 0; f < e.length; ++f) {
                r = e.charAt(f).toUpperCase();
                o = new t(r, i);
                o.$el.casheAsBitmap = !0;
                o.$el.x = c;
                o.$el.y = h;
                l = new PIXI.Graphics;
                u = new PIXI.Graphics;
                s = n.randFloat(15, 40);
                a = s + n.randFloat(20, 80);
                d.x = -2;
                d.y = -s;
                d.w = o.width + 4;
                d.h = o.height + a;
                l.beginFill(this.colors.black, .5);
                l.drawRect(d.x, 0, d.w, d.h);
                l.y = d.y, u.beginFill(this.colors.white, 0);
                u.drawRect(d.x, 0, d.w, d.h);
                u.y = d.y, c += o.width + o.spacing;
                o.$el.addChild(u);
                o.$el.addChild(l);
                p.addChild(o.$el);
                o.$el.mask = l;
            }
            p.owidth = c - o.spacing;
            p.oheight = o.height;
            return p
        },
        destroy: function () {
            _.each(this.$name.children, function (e) {
                this.$name.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0);
                this.$name.removeChildAt(0)
            }, this);
            this.$name.destroy(!0);
            this.$place.destroy(!0);
            this.$name = null;
            this.$place = null;
            e.prototype.destroy.call(this)
        }
    };

    s.prototype.constructor = s;
    s.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var n = this.colors;
            this.gallery = [];
            this.$gallery = new PIXI.Sprite;
            this.$line = new PIXI.Graphics;
            this.$line.x = -(window.innerWidth - 642) / 2;
            this.$line.scale.x = 0;
            this.$navigation = new PIXI.Sprite;
            this.$navigation.x = -10;
            this.$navigation.y = 150;
            this.$head = new t("It’s been a pleasure working for:".toUpperCase(), {
                fontFamily: "montser-bold",
                fontSize: 9,
                fill: n.white,
                letterSpacing: 1
            });
            _.each(this.$head.$el.children, function (e) {
                e.alpha = 0
            });
            this.$gallery.y = this.$head.height + 30;
            _.each(this.collection, function (e, t) {
                var i = new r(e, n),
                    s = Math.floor(t / this.module);
                if (this.$gallery.addChild(i.render().$el), this.gallery.push(i), t % this.module == 0) {
                    var a = new PIXI.Sprite,
                        o = new PIXI.Graphics,
                        l = new PIXI.Graphics,
                        u = new PIXI.Graphics;
                    o.beginFill(this.colors.white, 0);
                    o.drawRect(0, 0, 20, 30);
                    l.beginFill(this.colors.white, .2);
                    l.drawRect(10, 0, 1, 30);
                    l.scale.y = .65;
                    u.beginFill(this.colors.red, 1);
                    u.drawRect(10, 0, 1, 30);
                    u.scale.y = s == this.slide ? 1 : 0;
                    a.addChild(o);
                    a.addChild(l);
                    a.addChild(u);
                    a.index = s;
                    a.x = 20 * a.index;
                    a.y = 20;
                    a.alpha = 0;
                    a.interactive = !0;
                    a.buttonMode = !0;
                    a.click = a.tap = _.bind(function (e) {
                        this.gotoSlide(e.target.index)
                    }, this);
                    this.$navigation.addChild(a)
                }
            }, this);
            this.$el.addChild(this.$line);
            this.$el.addChild(this.$head.$el);
            this.$el.addChild(this.$gallery);
            this.$el.addChild(this.$navigation);
            this.gotoSlide(0);
            return this
        },
        gotoSlide: function (e) {
            if (this.last = this.slide, this.slide = e, this.last == this.slide)
                return new TimelineMax({
                    tweens: []
                });
            var t, n, r = this.slide * this.module,
                s = r + this.module,
                a = [];
            s > this.length && (s = this.length);
            _.each(this.$navigation.children, function (t, n) {
                n == e ? new TimelineMax({
                    tweens: [
                        TweenMax.to(t.getChildAt(1).scale, .9, {
                            y: 1,
                            ease: Expo.easeInOut
                        }),
                        TweenMax.to(t.getChildAt(2).scale, .9, {
                            y: 1,
                            ease: Expo.easeInOut
                        })
                    ],
                    stagger: .1
                }) : new TimelineMax({
                    tweens: [
                        TweenMax.to(t.getChildAt(2).scale, .9, {
                            y: 0,
                            ease: Expo.easeInOut
                        }),
                        TweenMax.to(t.getChildAt(1).scale, .9, {
                            y: .65,
                            ease: Expo.easeInOut
                        })
                    ],
                    stagger: .1
                })
            });
            _.each(this.$gallery.children, function (e) {
                a.push(e.scope.tweenOut())
            }, this);
            for (var o = r, l = 0; s > o; ++o, ++l) {
                t = this.gallery[o];
                n = this.gallery[o - 1];
                t && (l - 1 >= 0 && (t.$el.x = n.width + n.$el.x + 30), a.push(t.tweenIn()));
            }
            if (t) {
                var u = this.$line,
                    c = this.colors,
                    h = (window.innerWidth - 642) / 2,
                    d = t ? h + t.$el.x + t.width - 2 : 0;
                a.push(TweenMax.to({
                    x: u.x,
                    w: u.width
                }, 1, {
                    x: -h,
                    w: d,
                    ease: Expo.easeInOut,
                    onUpdate: function () {
                        u.clear();
                        u.beginFill(c.white);
                        u.drawRect(0, 118, this.target.w, 2);
                        u.x = this.target.x
                    }
                }))
            }
            i.play("about", "introtween", !0);
            return new TimelineMax({
                tweens: a,
                stagger: .015
            })
        },
        tweenIn: function () {
            return new TimelineMax({
                tweens: [
                    this.gotoSlide(0),
                    TweenMax.allTo(this.$head.$el.children, .75, {
                        alpha: 1,
                        ease: Expo.easeOut
                    }, .015),
                    TweenMax.allTo(this.$navigation.children, .75, {
                        alpha: 1,
                        y: 0,
                        ease: Expo.easeInOut
                    }, .045),
                    TweenMax.to(this.$line.scale, 1, {
                        x: 1,
                        ease: Expo.easeInOut
                    })
                ],
                delay: .35
            })
        },
        tweenOut: function () {
            return new TimelineMax({
                tweens: [
                    this.gotoSlide(-1),
                    TweenMax.allTo(this.$head.$el.children, .75, {
                        alpha: 0,
                        ease: Expo.easeOut
                    }, .015),
                    TweenMax.allTo(this.$navigation.children, .75, {
                        alpha: 0,
                        y: 20,
                        ease: Expo.easeInOut
                    }, .045),
                    TweenMax.to(this.$line.scale, 1, {
                        x: 0,
                        ease: Expo.easeInOut
                    })
                ]
            })
        },
        resize: function (e) {
            var t = 684,
                n = 186;
            this.$el.x = .5 * -t;
            this.$el.y = .5 * -n;
            var i, r = this.slide * this.module,
                s = r + this.module;
            s > this.length && (s = this.length);
            for (var a = r, o = 0; s > a; ++a, ++o)
                i = this.gallery[a];
            if (i) {
                var l = (e.w - t) / 2,
                    u = i ? l + i.$el.x + i.width - 2 : 0;
                this.$line.clear();
                this.$line.beginFill(this.colors.white);
                this.$line.drawRect(0, 118, u, 2);
                this.$line.x = -l
            }
        },
        destroy: function () {
            _.each(this.gallery, function (e) {
                e.destroy()
            }, this);
            this.$navigation.destroy(!0);
            this.$gallery.destroy(!0);
            this.$head.destroy(!0);
            this.$navigation = null;
            this.$gallery = null;
            this.$head = null;
            e.prototype.destroy.call(this)
        }
    });
    return s
}]