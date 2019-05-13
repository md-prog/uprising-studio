const _ = require("underscore")

module.exports = ["DisplayObject", "Text", "Arrow", function (e, t, n) {
    function i() {
        e.call(this)
    }

    i.prototype.constructor = i;
    i.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var n = this.colors;
            this.$slider = this.getIndexSlider();
            this.$total = new t("5", {
                fontFamily: "din-condensed-web",
                fontSize: 30,
                fill: n.white,
                letterSpacing: 1
            });
            this.$line = new PIXI.Graphics;
            this.$prev = this.getArrow();
            this.$next = this.getArrow();
            this.$line.beginFill(n.white);
            this.$line.drawRect(-10, -.5, 20, 1);
            this.$line.rotation = -.7853;
            this.$line.y = 4;
            this.$slider.x = 0;
            this.$slider.y = -55;
            this.$total.$el.x = -this.$total.width / 2;
            this.$total.$el.y = 20;
            this.$prev.x = 0;
            this.$prev.y = this.$total.$el.y + this.$total.height + 13 + 20;
            this.$prev.rotation = 1.5708;
            this.$next.y = this.$prev.y + 26 + 20;
            this.$next.rotation = -1.5708;
            this.$prev.timeline = this.getArrowTimeline(this.$prev);
            this.$next.timeline = this.getArrowTimeline(this.$next);
            this.$el.addChild(this.$slider);
            this.$el.addChild(this.$line);
            this.$el.addChild(this.$total.$el);
            this.$el.addChild(this.$prev);
            this.$el.addChild(this.$next);
            this.addEvents();
            return this
        },
        getIndexSlider: function () {
            var e = this.colors,
                t = new PIXI.Sprite,
                n = new PIXI.Graphics,
                i = this.getIndex("1");
            n.beginFill(e.white, .5);
            n.drawRect(-13, -5, 26, 48);
            t.addChild(n);
            t.addChild(i.$el);
            t.current = i;
            t.mask = n;
            return t
        },
        getArrow: function () {
            var e = this.colors,
                t = new n(e.red),
                i = new n(e.red),
                r = new PIXI.Graphics,
                s = new PIXI.Sprite;
            r.beginFill(e.white);
            r.drawRect(-18, -15, 36, 30);
            s.addChild(r);
            s.addChild(i.render().$el);
            s.addChild(t.render().$el);
            s.$arrowIn = t.$el;
            s.$arrowOut = i.$el;
            s.interactive = !0;
            s.buttonMode = !0;
            s.mask = r;
            i.$el.x = 50;
            return s
        },
        addEvents: function () {
            this.$prev.mouseover = _.bind(function () {
                this.$prev.timeline.play()
            }, this);
            this.$prev.mouseout = _.bind(function () {
                this.$prev.timeline.reverse()
            }, this);
            this.$next.mouseover = _.bind(function () {
                this.$next.timeline.play()
            }, this);
            this.$next.mouseout = _.bind(function () {
                this.$next.timeline.reverse()
            }, this)
        },
        getArrowTimeline: function (e) {
            var t = .6,
                n = Expo.easeInOut;
            return new TimelineMax({
                tweens: [
                    TweenMax.to(e.$arrowIn, t, {
                        x: -50,
                        ease: n
                    }),
                    TweenMax.to(e.$arrowOut, t, {
                        x: 0,
                        ease: n
                    })
                ],
                stagger: .1,
                paused: !0
            })
        },
        renderIndex: function (e) {
            var t = this.getIndex(e);
            t.$el.x = -t.width / 2;
            this.$slider.addChild(t.$el);
            this.$slider.current = t
        },
        getIndex: function (e) {
            return new t(e, {
                fontFamily: "din-condensed-web",
                fontSize: 46,
                fill: this.colors.white,
                letterSpacing: 1
            })
        },
        update: function (e, t, n) {
            var i, r = [],
                s = [];
            i = this.$slider.current;
            s.push(TweenMax.to(i.$el, .7, {
                x: -i.width / 2 + -22 * n,
                ease: Expo.easeInOut
            }));
            this.renderIndex(e.toString());
            i = this.$slider.current;
            r.push(TweenMax.from(i.$el, .7, {
                x: -i.width / 2 + 22 * n,
                ease: Expo.easeInOut
            }));
            new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: s
                    }),
                    new TimelineMax({
                        tweens: r
                    })
                ],
                stagger: .07,
                onComplete: _.bind(function () {
                    var e = this.$slider.getChildAt(1);
                    e.scope.destroy()
                }, this)
            });
            this.$total.text(t.toString())
        }
    });
    return i
}]