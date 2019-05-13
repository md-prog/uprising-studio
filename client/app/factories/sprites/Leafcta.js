const _ = require("underscore")

module.exports = ["DisplayObject", "Text", function (e, t) {
    function n(t, n) {
        e.call(this);
        this.label = t.toUpperCase();
        this.timeline = null;
        this.repeatDelay = 2;
        this.sort = n
    }

    n.prototype.constructor = n;
    n.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            if (e.prototype.render.call(this), this.label.length < 1)
                return this;

            var n, i, r = 15;
            this.$text = new t(this.label, {
                fontFamily: "din-condensed-web",
                fontSize: 16,
                fill: this.colors.white,
                letterSpacing: 2
            });
            this.$text.$el.x = .5 * -this.$text.width;
            this.$text.$el.y = .5 * -this.$text.height;
            n = this.$text.width;
            i = .5 * this.$text.height + r + 2;
            var s = this.$text.width + 40,
                a = this.$text.height + 30;
            this.$base = new PIXI.Graphics;
            this.$base.beginFill(this.colors.white, 0);
            this.$base.drawRect(.5 * -s, .5 * -a, s, a);
            this.$quad = new PIXI.Graphics;
            this.$quad.beginFill(this.colors.red);
            this.$quad.drawRect(.5 * -s, .5 * -a, s, a);
            this.$quad.x = -s;
            this.$quadMask = new PIXI.Graphics;
            this.$quadMask.beginFill(this.colors.green);
            this.$quadMask.drawRect(.5 * -s, .5 * -a, s, a);
            this.$quad.mask = this.$quadMask;
            this.$el.addChild(this.$base);
            this.$el.addChild(this.$text.$el);
            this.$el.addChild(this.$quad);
            this.$el.addChild(this.$quadMask);
            this.$el.interactive = !0;
            this.$el.buttonMode = !0;
            return this
        },
        toggleState: function (e) {
            var t = [];
            return new TimelineMax({
                tweens: t
            })
        },
        tweenIn: function () {},
        getLoop: function () {
            var e = this.$text.width + 42;
            return new TimelineMax({
                tweens: [
                    TweenMax.fromTo(this.$quad, 1.2, {
                        x: -e * this.sort
                    }, {
                        bezier: {
                            values: [{
                                x: 0
                            }, {
                                x: e * this.sort
                            }]
                        },
                        ease: Expo.easeInOut
                    })
                ]
            })
        },
        removeEvents: function () {
            this.$el.mouseover = this.$el.mouseout = null
        },
        destroy: function () {
            this.removeEvents();
            this.timeline && this.timeline.kill();
            this.$text && this.$text.destroy(!0);
            this.timeline = null;
            this.$text = null;
            this.label = null;
            e.prototype.destroy.call(this)
        }
    });
    return n
}]