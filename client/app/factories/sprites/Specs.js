const _ = require("underscore")

module.exports = ["DisplayObject", "Text", function (e, t) {
    function n(t) {
        e.call(this);
        this.model = t
    }

    n.prototype.constructor = n;
    n.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var t = this.colors,
                n = this.model.client + " _ " + this.model.name;
            this.$line = new PIXI.Graphics;
            this.$agency = this.getAgency(this.model.agency, {
                fontFamily: "din-condensed-web",
                fontSize: 23,
                fill: t.white,
                letterSpacing: 1
            });
            this.$title = this.getTitle(n.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 9,
                fill: t.white,
                letterSpacing: 2
            });
            this.$title.x = this.width + 25;
            this.$title.y = 2;
            this.$line.beginFill(t.green);
            this.$line.drawRect(0, 0, 50, 2);
            this.$line.x = this.width + 30;
            this.$line.y = this.height - 6;
            this.$el.addChild(this.$agency);
            this.$el.addChild(this.$title);
            this.$el.addChild(this.$line);
            return this
        },
        tweenIn: function () {
            var e = [];
            return _.each(this.$agency.children, function (t, n) {
                e.push(TweenMax.from(t.getChildAt(0), .65, {
                    x: 2.5 * -t.scope.width,
                    ease: Expo.easeInOut
                }))
            }, this), new TimelineMax({
                tweens: [new TimelineMax({
                    tweens: e.reverse(),
                    stagger: .025
                }), new TimelineMax({
                    tweens: [TweenMax.from(this.$title.getChildAt(1).scale, .85, {
                        x: 0,
                        ease: Expo.easeInOut
                    }), TweenMax.from(this.$line.scale, .65, {
                        x: 0,
                        ease: Expo.easeOut
                    }), TweenMax.from(this.$line, .65, {
                        x: 0,
                        ease: Expo.easeOut
                    })],
                    stagger: .1
                })]
            })
        },
        tweenOut: function () {
            var e = [];
            _.each(this.$agency.children, function (t, n) {
                e.push(TweenMax.to(t.getChildAt(0), .65, {
                    x: 2.5 * t.scope.width,
                    ease: Expo.easeInOut
                }))
            }, this);
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$title.getChildAt(1), .85, {
                                        x: this.$title.getChildAt(0).width,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$title.getChildAt(1).scale, .85, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$line, .65, {
                                        x: this.$title.getChildAt(0).width,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$line.scale, .65, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })
                                ],
                                stagger: .065
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: e.reverse(),
                        stagger: .025
                    })
                ]
            })
        },
        getAgency: function (e, n) {
            e.length < 1 && (e = " ");
            for (var i, r, s, a, o = 0, l = 0, u = this.colors, c = new PIXI.Sprite, h = 0; h < e.length; ++h) {
                i = e.charAt(h).toUpperCase();
                r = new t(i, n);
                r.$el.x = o;
                r.$el.y = l;
                s = new PIXI.Graphics;
                a = new PIXI.Graphics;
                s.beginFill(u.black);
                s.drawRect(-2, -5, r.width + 4, r.height + 10);
                a.beginFill(u.white, 0);
                a.drawRect(-2, -5, r.width + 4, r.height + 10);
                o += r.width + r.spacing;
                r.$el.mask = s;
                r.$el.addChild(a);
                r.$el.addChild(s);
                c.addChild(r.$el);
            }
            this.width = o - r.spacing;
            this.height = r.height;
            return c
        },
        getTitle: function (e, t) {
            var n = new PIXI.Text(e, t),
                i = new PIXI.Graphics,
                r = new PIXI.Sprite;
            n.x = 5;
            i.beginFill(this.colors.black);
            i.drawRect(0, 0, n.width + 10, n.height);
            n.mask = i;
            r.addChild(n);
            r.addChild(i);
            return r
        },
        destroy: function () {
            _.each(this.$agency.children, function (e) {
                this.$agency.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0);
                this.$agency.removeChildAt(0)
            }, this);
            this.$title.getChildAt(0).destroy(!0);
            this.$agency.destroy(!0);
            this.$title.destroy(!0);
            this.model = null;
            e.prototype.destroy.call(this)
        }
    });
    return n
}]