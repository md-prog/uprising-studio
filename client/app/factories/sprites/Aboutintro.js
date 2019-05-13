const _ = require("underscore")

module.exports = ["DisplayObject", "Text", "Math2", function (e, t, n) {
    function i() {
        e.call(this), this.labels = {
            head: "Uprising™",
            whitep1: "We are a ",
            greenp1: "digital creative design & production studio",
            whitep2: "We create digital projects to top communication agencies"
        }
    }

    i.prototype.constructor = i;
    i.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var n = this.colors;
            this.$head = new t(this.labels.head.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 9,
                fill: n.white,
                letterSpacing: 0
            });
            this.$whitep1 = new t(this.labels.whitep1.toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 28,
                fill: n.white,
                letterSpacing: 0
            });
            this.$greenp1 = this.getMaskText(this.labels.greenp1.toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 28,
                fill: n.green,
                letterSpacing: 0
            });
            this.$whitep2 = new t(this.labels.whitep2.toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 28,
                fill: n.white,
                letterSpacing: 0
            });
            this.$botLine = new PIXI.Graphics;
            this.$whitep1.$el.y = this.$head.height + 8;
            this.$greenp1.x = this.$whitep1.width;
            this.$greenp1.y = this.$head.height + 8;
            this.$whitep2.$el.y = this.$head.height + this.$whitep1.height + 10;
            _.each(this.$head.$el.children, function (e) {
                e.alpha = 0
            });
            _.each(this.$whitep1.$el.children, function (e) {
                e.alpha = 0
            });
            _.each(this.$whitep2.$el.children, function (e) {
                e.alpha = 0
            });
            var i, r, s = 0;
            _.each(this.$greenp1.children, function (e, t) {
                r = e.getChildAt(0);
                i = e.getChildAt(1);
                s = t % 2 == 0 ? i.height + i.y + e.scope.getPadding() / 2 : i.y - e.scope.height - e.scope.getPadding() / 2;
                TweenMax.set(r, {
                    y: s
                })
            }, this);
            this.$botLine.scale.x = 0;
            this.$el.addChild(this.$head.$el);
            this.$el.addChild(this.$whitep1.$el);
            this.$el.addChild(this.$whitep2.$el);
            this.$el.addChild(this.$greenp1);
            this.$el.addChild(this.$botLine);
            return this
        },
        tweenIn: function () {
            var e, t, n = [],
                i = 0;
            _.each(this.$greenp1.children, function (r, s) {
                t = r.getChildAt(0);
                e = r.getChildAt(1);
                i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2;
                n.push(TweenMax.to(t, .75, {
                    y: 0,
                    ease: Expo.easeInOut
                }))
            }, this);
            return new TimelineMax({
                tweens: [
                    TweenMax.allTo(this.$head.$el.children, 1, {
                        alpha: 1,
                        ease: Expo.easeOut
                    }, .025),
                    TweenMax.allTo(this.$whitep1.$el.children, 1, {
                        alpha: 1,
                        ease: Expo.easeOut
                    }, .025),
                    TweenMax.allTo(this.$whitep2.$el.children, 1, {
                        alpha: 1,
                        ease: Expo.easeOut
                    }, .025),
                    TweenMax.to(this.$botLine.scale, 1, {
                        x: 1,
                        ease: Expo.easeInOut
                    }),
                    new TimelineMax({
                        tweens: n,
                        stagger: .025
                    })
                ],
                delay: .45
            })
        },
        tweenOut: function () {
            var e, t, n = [],
                i = 0;
            _.each(this.$greenp1.children, function (r, s) {
                t = r.getChildAt(0);
                e = r.getChildAt(1);
                i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2;
                n.push(TweenMax.to(t, .75, {
                    y: i,
                    ease: Expo.easeOut
                }))
            }, this);
            return new TimelineMax({
                tweens: [
                    TweenMax.allTo(this.$head.$el.children, .75, {
                        alpha: 0,
                        ease: Expo.easeOut
                    }, .015),
                    TweenMax.allTo(this.$whitep1.$el.children, .75, {
                        alpha: 0,
                        ease: Expo.easeOut
                    }, .015),
                    TweenMax.allTo(this.$whitep2.$el.children, .75, {
                        alpha: 0,
                        ease: Expo.easeOut
                    }, .015),
                    TweenMax.to(this.$botLine.scale, 1, {
                        x: 0,
                        ease: Expo.easeInOut
                    }),
                    new TimelineMax({
                        tweens: n,
                        stagger: .025
                    })
                ]
            })
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
                s = n.randFloat(20, 50);
                a = s + n.randFloat(25, 100);
                d.x = -2;
                d.y = -s;
                d.w = o.width + 4;
                d.h = o.height + a;
                l.beginFill(this.colors.black, .5);
                l.drawRect(d.x, 0, d.w, d.h);
                l.y = d.y;
                u.beginFill(this.colors.white, 0);
                u.drawRect(d.x, 0, d.w, d.h);
                u.y = d.y;
                c += o.width + o.spacing;
                o.$el.addChild(u);
                o.$el.addChild(l);
                p.addChild(o.$el);
                o.$el.mask = l;
            }
            this.width = c - o.spacing;
            this.height = o.height;
            return p
        },
        resize: function (e) {
            var t = this.colors,
                n = 660,
                i = -60;
            this.$el.x = .5 * -n;
            this.$el.y = i;
            var r = {
                y: this.$whitep2.$el.y + this.$whitep2.height + 28,
                w: e.x + .5 * n
            };
            this.$botLine.clear();
            this.$botLine.beginFill(t.white);
            this.$botLine.drawRect(0, r.y, -r.w, 2);
            this.$botLine.x = r.w
        },
        destroy: function () {
            _.each(this.$greenp1.children, function (e) {
                this.$greenp1.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0),
                    this.$greenp1.removeChildAt(0)
            }, this);
            this.$head.destroy();
            this.$whitep1.destroy();
            this.$whitep2.destroy();
            this.$botLine.destroy();
            this.$head = null;
            this.$whitep1 = null;
            this.$greenp1 = null;
            this.$whitep2 = null;
            this.$botLine = null;
            e.prototype.destroy.call(this)
        }
    });

    return i
}]