const _ = require("underscore")

module.exports = ["DisplayObject", "Text", "Math2", "Utils", function (e, t, n, i) {
    function r(t) {
        e.call(this), this.person = t
    }

    r.prototype.constructor = r;
    r.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var n = this.colors;
            this.$wrapper = new PIXI.Sprite;
            this.$head = new t("I am".toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 18,
                fill: n.white,
                letterSpacing: .5
            });
            this.$name = this.getName(this.person.name, {
                fontFamily: "timmons",
                fontSize: 100,
                fill: n.green,
                letterSpacing: 10
            });
            this.$type = new t(this.person.type.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 9,
                fill: n.white,
                letterSpacing: 0
            });
            this.$role = new t(this.person.role.toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 30,
                fill: n.white,
                letterSpacing: 0
            });
            this.$topLine = new PIXI.Graphics;
            this.$botLine = new PIXI.Graphics;
            this.$wrapper.addChild(this.$topLine);
            this.$wrapper.addChild(this.$botLine);
            this.$wrapper.addChild(this.$head.$el);
            this.$wrapper.addChild(this.$type.$el);
            this.$wrapper.addChild(this.$role.$el);
            this.$el.addChild(this.$wrapper);
            this.$el.addChild(this.$name);
            this.filter = new PIXI.filters.GlitchFilter;
            this.filter.resolution = i.getDpr();
            this.filter.padding = 0;
            this.filter.seed = 0;
            this.resize({
                w: innerWidth,
                h: innerHeight,
                x: innerWidth / 2,
                y: innerHeight / 2
            });
            return this
        },
        tweenIn: function () {
            var e, t, n = [],
                i = 0;
            _.each(this.$name.children, function (r, s) {
                t = r.getChildAt(0);
                e = r.getChildAt(1);
                i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2;
                n.push(TweenMax.from(t, .9, {
                    y: i,
                    ease: Expo.easeInOut
                }))
            }, this);
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: n,
                        stagger: .045
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.allFrom(this.$head.$el.children.reverse(), .6, {
                                x: -75,
                                ease: Expo.easeInOut
                            }, .05),
                            TweenMax.from(this.$topLine.scale, .8, {
                                x: 0,
                                ease: Expo.easeInOut
                            })
                        ],
                        stagger: .08
                    }),
                    TweenMax.allFrom(this.$type.$el.children, 1, {
                        alpha: 0,
                        ease: Expo.easeOut
                    }, .025),
                    TweenMax.allFrom(this.$role.$el.children, 1, {
                        alpha: 0,
                        ease: Expo.easeOut
                    }, .015),
                    TweenMax.from(this.$botLine.scale, .9, {
                        x: 0,
                        ease: Expo.easeInOut
                    })
                ],
                stagger: .15
            })
        },
        tweenOut: function () {
            var e, t, n = [],
                i = 0;
            _.each(this.$name.children, function (r, s) {
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
                    new TimelineMax({
                        tweens: n,
                        stagger: .045
                    }),
                    TweenMax.to(this.$el, .15, {
                        alpha: 0,
                        ease: Cubic.easeInOut
                    })
                ],
                stagger: .5,
                onStart: _.bind(function () {
                    this.$wrapper.filters = [this.filter]
                }, this),
                onUpdate: _.bind(this.generateGlitch, this),
                onComplete: _.bind(function () {
                    this.destroy()
                }, this)
            })
        },
        generateGlitch: function () {
            this.filter.byp = 0;
            this.filter.amount = Math.random() / 60;
            this.filter.angle = n.randFloat(-Math.PI, Math.PI);
            this.filter.distortionX = n.randFloat(0, 1);
            this.filter.distortionY = n.randFloat(0, 1);
            this.filter.seedX = n.randFloat(-.5, .5);
            this.filter.seedY = n.randFloat(-.5, .5)
        },
        getName: function (e, i) {
            for (var r, s, a, o, l, u, c = 0, h = 0, d = {}, p = new PIXI.Sprite, f = 0; f < e.length; ++f) {
                r = e.charAt(f).toUpperCase();
                o = new t(r, i);
                o.$el.casheAsBitmap = !0;
                o.$el.x = c;
                o.$el.y = h;
                l = new PIXI.Graphics;
                u = new PIXI.Graphics;
                s = n.randFloat(25, 100);
                a = s + n.randFloat(50, 150);
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
            return this.width = c - o.spacing, this.height = o.height, p
        },
        resize: function (e) {
            var t = this.colors,
                n = 50;
            this.$head.$el.x = 50;
            this.$name.x = 48;
            this.$name.y = this.$head.height + 30;
            this.$type.$el.x = this.width + 25 + n;
            this.$type.$el.y = this.$name.y;
            this.$role.$el.x = this.width + 25 + n;
            this.$role.$el.y = this.$type.$el.y + this.$type.height + 10;
            var i = {
                    y: .5 * this.$head.height,
                    x: this.$head.width + n + 30,
                    w: this.$type.$el.x + this.$type.width - (this.$head.width + n + 30)
                },
                r = {
                    x: this.$role.$el.x,
                    y: this.$role.$el.y + this.$role.height + 28,
                    w: e.w - this.$role.$el.x
                };
            this.$topLine.clear();
            this.$topLine.beginFill(t.white);
            this.$topLine.drawRect(i.x, i.y, i.w, 1);
            this.$botLine.clear();
            this.$botLine.beginFill(t.white);
            this.$botLine.drawRect(0, r.y, -r.w, 2);
            this.$botLine.x = e.w;
            this.$el.y = .5 * -r.y
        },
        destroy: function () {
            _.each(this.$name.children, function (e) {
                this.$name.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0);
                this.$name.removeChildAt(0)
            }, this);
            this.$name.destroy(!0);
            this.$head.destroy(!0);
            this.$type.destroy(!0);
            this.$role.destroy(!0);
            this.$name = null;
            this.$head = null;
            this.$type = null;
            this.$role = null;
            e.prototype.destroy.call(this)
        }
    });
    return r
}]