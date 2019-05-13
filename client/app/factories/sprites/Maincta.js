const _ = require("underscore")

module.exports = ["DisplayObject", "Text", function (e, t) {
    function n(t) {
        e.call(this);
        this.label = t.toUpperCase();
        this.timeline = null;
        this.repeatDelay = 2
    }

    n.prototype.constructor = n;
    n.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            if (e.prototype.render.call(this), this.label.length < 1) return this;
            var n, i, r = this.colors,
                s = 15;
            this.$text = new t(this.label, {
                fontFamily: "din-condensed-web",
                fontSize: 20,
                fill: r.red,
                letterSpacing: .5
            });
            this.$text.$el.x = .5 * -this.$text.width;
            this.$text.$el.y = s + 2;
            this.$blink = new t(this.label, {
                fontFamily: "din-condensed-web",
                fontSize: 20,
                fill: r.green,
                letterSpacing: .5
            });
            _.each(this.$blink.$el.children, function (e) {
                e.alpha = 0
            });
            this.$blink.$el.x = .5 * -this.$blink.width;
            this.$blink.$el.y = s + 2;
            this.$blink.$el.alpha = .9;
            n = this.$text.width;
            i = this.$text.height + 2 * s + 2;
            this.$linesWrap = new PIXI.Sprite;
            this.$topLine = new PIXI.Graphics;
            this.$topLine2 = new PIXI.Graphics;
            this.$botLine = new PIXI.Graphics;
            this.$botLine2 = new PIXI.Graphics;
            var a = this.$text.width + 40,
                o = this.$text.height + 30;
            this.$quadWrap = new PIXI.Sprite;
            this.$quad = new PIXI.Graphics;
            this.$quad.beginFill(this.colors.white);
            this.$quad.drawRect(.5 * -a, 0, a, o);
            this.$quad.x = -a;
            this.$quad2 = new PIXI.Graphics;
            this.$quad2.beginFill(this.colors.white);
            this.$quad2.drawRect(.5 * -a, 0, a, o);
            this.$quad2.x = -a;
            this.$quadMask = new PIXI.Graphics;
            this.$quadMask.beginFill(this.colors.green);
            this.$quadMask.drawRect(.5 * -a, 0, a, o);
            this.$topLine.beginFill(r.white);
            this.$topLine.drawRect(-48, -1, 96, 2);
            this.$topLine.x = Math.round(.5 * -(n - 96) - 20);
            this.$topLine.y = 1;
            this.$topLine2.beginFill(r.white);
            this.$topLine2.drawRect(-48, -1, 96, 2);
            this.$topLine2.x = Math.round(.5 * -(n - 96) - 20);
            this.$topLine2.y = 1;
            this.$botLine.beginFill(r.white);
            this.$botLine.drawRect(-23, -1, 46, 2);
            this.$botLine.x = Math.round(.5 * (n - 46) + 10);
            this.$botLine.y = Math.round(i + 1);
            this.$botLine2.beginFill(r.white);
            this.$botLine2.drawRect(-23, -1, 46, 2);
            this.$botLine2.x = Math.round(.5 * (n - 46) + 10);
            this.$botLine2.y = Math.round(i + 1);
            this.$base = new PIXI.Graphics;
            this.$base.beginFill(r.white, 0);
            this.$base.drawRect(.5 * -n, 0, n, i);
            this.$mask = new PIXI.Graphics;
            this.$mask.beginFill(r.white, .5);
            this.$mask.drawRect(0, 0, -n - 10, i);
            this.$mask.x = (n + 10) / 2;
            this.$hoverLine = new PIXI.Graphics;
            this.$hoverLine.beginFill(r.white);
            this.$hoverLine.drawRect(-this.$text.width / 2 - 5, this.$text.$el.y + this.$text.height / 2 - 2, this.$text.width + 10, 2);
            this.$hoverLine.scale.x = 0;
            this.$text.$el.mask = this.$mask;
            this.$el.anchor.x = .5;
            this.$el.anchor.y = .5;
            this.$linesWrap.addChild(this.$topLine);
            this.$linesWrap.addChild(this.$topLine2);
            this.$linesWrap.addChild(this.$botLine);
            this.$linesWrap.addChild(this.$botLine2);
            this.$quadWrap.addChild(this.$quad);
            this.$quadWrap.addChild(this.$quad2);
            this.$quadWrap.addChild(this.$quadMask);
            this.$quadWrap.mask = this.$quadMask;
            this.$el.addChild(this.$base);
            this.$el.addChild(this.$text.$el);
            this.$el.addChild(this.$blink.$el);
            this.$el.addChild(this.$mask);
            this.$el.addChild(this.$quadWrap);
            this.$el.addChild(this.$hoverLine);
            this.$quadWrap.visible = !1;
            this.$el.interactive = !0;
            this.$el.buttonMode = !0;
            this.addEvents();
            return this
        },
        addEvents: function () {
            this.$el.mouseover = _.bind(function () {
                TweenMax.to(this.$hoverLine.scale, 1, {
                    x: 1,
                    ease: Expo.easeOut
                })
            }, this), this.$el.mouseout = _.bind(function () {
                TweenMax.to(this.$hoverLine.scale, .8, {
                    x: 0,
                    ease: Expo.easeOut
                })
            }, this)
        },
        tweenIn: function () {
            this.timeline = this.label.length > 1 ? new TimelineMax({
                tweens: [
                    TweenMax.allFrom(this.$text.$el.children, .75, {
                        x: this.$text.width + 10,
                        ease: Expo.easeOut
                    }, .035),
                    new TimelineMax({
                        tweens: [
                            new TimelineMax({
                                tweens: [
                                    TweenMax.from(this.$topLine.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeOut
                                    }),
                                    TweenMax.from(this.$topLine, .45, {
                                        x: -200,
                                        ease: Expo.easeOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.from(this.$topLine2.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeOut
                                    }),
                                    TweenMax.from(this.$topLine2, .45, {
                                        x: -200,
                                        ease: Expo.easeOut
                                    })
                                ]
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            new TimelineMax({
                                tweens: [
                                    TweenMax.from(this.$botLine.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeOut
                                    }),
                                    TweenMax.from(this.$botLine, .45, {
                                        x: 400,
                                        ease: Expo.easeOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.from(this.$botLine2.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeOut
                                    }),
                                    TweenMax.from(this.$botLine2, .45, {
                                        x: 400,
                                        ease: Expo.easeOut
                                    })
                                ]
                            })
                        ]
                    })
                ],
                stagger: .075
            }) : new TimelineMax({
                tweens: []
            });
            return this.timeline
        },
        tweenOut: function () {
            this.timeline = this.label.length > 1 ? new TimelineMax({
                tweens: [
                    TweenMax.allTo(this.$text.$el.children, .75, {
                        x: -this.$text.width - 10,
                        ease: Expo.easeInOut
                    }, .035),
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(this.$topLine.scale, .45, {
                                x: 0,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.to(this.$topLine, .45, {
                                x: -200,
                                ease: Expo.easeInOut
                            })
                        ]
                    }), new TimelineMax({
                        tweens: [
                            TweenMax.to(this.$botLine.scale, .45, {
                                x: 0,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.to(this.$botLine, .45, {
                                x: 400,
                                ease: Expo.easeInOut
                            })
                        ]
                    })
                ],
                stagger: .075
            }) : new TimelineMax({
                tweens: []
            });
            return this.timeline
        },
        getLoop: function () {
            var e = 15,
                t = this.$text.width,
                e = (
                    this.$text.height + 2 * e + 2,
                    Math.round(.5 * -(t - 96) - 20),
                    Math.round(.5 * (t - 46) + 10),
                    Math.round(this.$text.width + 44)
                );
            this.$quadWrap.visible = !0;
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.fromTo(this.$quad, 1, {
                                x: -e
                            }, {
                                bezier: {
                                    curviness: 0,
                                    values: [{
                                        x: 0
                                    }, {
                                        x: e
                                    }]
                                },
                                ease: Expo.easeInOut
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.fromTo(this.$quad2, 1.5, {
                                x: -e
                            }, {
                                bezier: {
                                    curviness: 0,
                                    values: [{
                                        x: 0
                                    }, {
                                        x: e
                                    }]
                                },
                                ease: Expo.easeInOut
                            })
                        ]
                    })
                ],
                stagger: .2,
                delay: 0
            })
        },
        removeEvents: function () {
            this.$el.mouseover = this.$el.mouseout = null
        },
        destroy: function () {
            this.removeEvents();
            this.timeline && this.timeline.kill();
            this.$text && this.$text.destroy(!0);
            this.$blink && this.$blink.destroy(!0);
            this.timeline = null;
            this.$blink = null;
            this.$text = null;
            this.label = null;
            e.prototype.destroy.call(this)
        }
    });
    return n
}]