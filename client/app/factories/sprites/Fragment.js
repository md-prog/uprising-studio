const _ = require("underscore")

module.exports = ["DisplayObject", function (e) {
    function t(t, n, i, r, s) {
        e.call(this);
        this.texture = t;
        this.size = s;
        this.v0 = n;
        this.v1 = i;
        this.v2 = r
    }

    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.$wrap = new PIXI.Sprite;
            this.$mask = new PIXI.Graphics;
            this.$sprite = new PIXI.Sprite(this.texture);
            this.$solid = new PIXI.Graphics;
            this.$cdot = new PIXI.Graphics;
            this.bbox = this.computeBoundingBox();
            this.center = this.computeCenter();
            this.$sprite.x = -this.bbox.x + this.size.x - this.center.x;
            this.$sprite.y = -this.bbox.y + this.size.y - this.center.y;
            this.$sprite.scale.x = this.size.s;
            this.$sprite.scale.y = this.size.s;
            this.$sprite.anchor.x = .5;
            this.$sprite.anchor.y = .5;
            this.$solid.beginFill(this.colors.white, .5);
            this.$solid.lineStyle(1, this.colors.green, 0);
            this.$solid.moveTo(this.v0[0] - this.bbox.x - this.center.x, this.v0[1] - this.bbox.y - this.center.y);
            this.$solid.lineTo(this.v1[0] - this.bbox.x - this.center.x, this.v1[1] - this.bbox.y - this.center.y);
            this.$solid.lineTo(this.v2[0] - this.bbox.x - this.center.x, this.v2[1] - this.bbox.y - this.center.y);
            this.$solid.lineTo(this.v0[0] - this.bbox.x - this.center.x, this.v0[1] - this.bbox.y - this.center.y);
            this.$solid.blendMode = PIXI.BLEND_MODES.ADD;
            this.$cdot.beginFill(this.colors.green, 0);
            this.$cdot.drawCircle(0, 0, 3);
            this.$mask.beginFill(this.colors.black);
            this.$mask.moveTo(this.v0[0] - this.bbox.x - this.center.x, this.v0[1] - this.bbox.y - this.center.y);
            this.$mask.lineTo(this.v1[0] - this.bbox.x - this.center.x, this.v1[1] - this.bbox.y - this.center.y);
            this.$mask.lineTo(this.v2[0] - this.bbox.x - this.center.x, this.v2[1] - this.bbox.y - this.center.y);
            this.$mask.lineTo(this.v0[0] - this.bbox.x - this.center.x, this.v0[1] - this.bbox.y - this.center.y);
            this.$el.x = this.bbox.x + this.center.x;
            this.$el.y = this.bbox.y + this.center.y;
            this.$el.anchor.x = .5;
            this.$el.anchor.y = .5;
            this.$wrap.addChild(this.$sprite);
            this.$wrap.addChild(this.$solid);
            this.$wrap.addChild(this.$cdot);
            this.$el.addChild(this.$wrap);
            this.$el.addChild(this.$mask);
            this.$wrap.mask = this.$mask;
            return this
        },
        tweenIn: function () {
            var e = (this.$el.x - this.size.x) / this.size.x,
                t = (this.$el.y - this.size.y) / this.size.y,
                n = this.$el.x + this.size.w * e,
                i = this.$el.y + this.size.h * t,
                r = (this.bbox.w + .5 * this.$sprite.width) * e,
                s = (this.bbox.h + .5 * this.$sprite.height) * t,
                a = Math.random() * Math.PI;
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.from(this.$el, .5, {
                                x: n,
                                y: i,
                                rotation: a,
                                ease: Expo.easeOut
                            }),
                            TweenMax.from(this.$el.scale, .9, {
                                x: e,
                                y: t,
                                ease: Expo.easeOut
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.from(this.$sprite.scale, .9, {
                                x: 1.5,
                                y: 1.5,
                                ease: Circ.easeOut
                            }),
                            TweenMax.from(this.$sprite, .5, {
                                x: r,
                                y: s,
                                ease: Expo.easeOut
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.fromTo(this.$solid, .7, {
                                alpha: 1
                            }, {
                                alpha: 0,
                                ease: Cubic.easeInOut
                            })
                        ]
                    })
                ]
            })
        },
        tweenOut: function () {
            var e = (this.$el.x - this.size.x) / this.size.x,
                t = (this.$el.y - this.size.y) / this.size.y,
                n = this.$el.x + this.size.w * e / 2,
                i = this.$el.y + this.size.h * t / 2,
                r = (this.bbox.w + .5 * this.$sprite.width) * e,
                s = (this.bbox.h + .5 * this.$sprite.height) * t,
                a = Math.random() * Math.PI / 2;
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(this.$el, .8, {
                                x: n,
                                y: i,
                                rotation: a,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.to(this.$el.scale, 1, {
                                x: 0,
                                y: 0,
                                ease: Expo.easeInOut
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(this.$sprite.scale, .8, {
                                x: 1.25,
                                y: 1.25,
                                ease: Circ.easeInOut
                            }),
                            TweenMax.to(this.$sprite, 1, {
                                x: r,
                                y: s,
                                ease: Expo.easeInOut
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.fromTo(this.$solid, .7, {
                                alpha: 0
                            }, {
                                alpha: .1,
                                ease: Cubic.easeInOut
                            })
                        ]
                    })
                ]
            })
        },
        computeBoundingBox: function () {
            var e = Math.min(this.v0[0], this.v1[0], this.v2[0]),
                t = Math.max(this.v0[0], this.v1[0], this.v2[0]),
                n = Math.min(this.v0[1], this.v1[1], this.v2[1]),
                i = Math.max(this.v0[1], this.v1[1], this.v2[1]);
            return {
                x: Math.round(e),
                y: Math.round(n),
                w: Math.round(t - e),
                h: Math.round(i - n)
            }
        },
        computeCenter: function () {
            return {
                x: (this.v0[0] - this.bbox.x + (this.v1[0] - this.bbox.x) + (this.v2[0] - this.bbox.x)) / 3,
                y: (this.v0[1] - this.bbox.y + (this.v1[1] - this.bbox.y) + (this.v2[1] - this.bbox.y)) / 3
            }
        },
        destroy: function () {
            this.$sprite.destroy();
            this.$solid.destroy();
            this.$cdot.destroy();
            this.$wrap.destroy();
            this.$mask.destroy();
            this.$wrap = null;
            this.$mask = null;
            this.$sprite = null;
            this.$solid = null;
            this.$cdot = null;
            this.texture = null;
            this.size = null;
            this.v0 = null;
            this.v1 = null;
            this.v2 = null;
            e.prototype.destroy.call(this)
        }
    });
    return t
}]