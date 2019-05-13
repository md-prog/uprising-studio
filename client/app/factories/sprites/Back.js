const _ = require("underscore")

module.exports = ["DisplayObject", "SoundManager", "Arrow", function (e, t, n) {
    function i(t) {
        e.call(this), this.type = t
    }

    i.prototype.constructor = i;
    i.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var t = this.colors;
            this.$basel = new PIXI.Graphics;
            this.$basel.beginFill(t.red);
            this.$basel.drawRect(0, 0, 28, 56);
            this.$baser = new PIXI.Graphics;
            this.$baser.beginFill(t.red);
            this.$baser.drawRect(28, 0, 28, 56);
            this.$arrow = this.getArrow();
            this.$icon = this.getIcon();
            this.$icon.x = 28;
            this.$icon.y = 28;
            this.$arrow.x = 28;
            this.$arrow.y = 29;
            this.$mask = new PIXI.Graphics;
            this.$mask.beginFill(t.white);
            this.$mask.drawRect(0, 0, 56, 56);
            this.$el.addChild(this.$basel);
            this.$el.addChild(this.$baser);
            this.$el.addChild(this.$icon);
            this.$el.addChild(this.$arrow);
            this.$el.addChild(this.$mask);
            this.$el.interactive = !0;
            this.$el.buttonMode = !0;
            this.$el.mask = this.$mask;
            this.$el.visible = !1;
            this.$icon.$line1.x = 28;
            this.$icon.$line1.y = 28;
            this.$icon.$line1.scale.x = 0;
            this.$icon.$line2.x = -28;
            this.$icon.$line2.y = 28;
            this.$icon.$line2.scale.x = 0;
            this.$arrow.$line.x = 24;
            this.$arrow.$line.scale.x = 0;
            this.$arrow.$top.y = -17;
            this.$arrow.$top.x = 5;
            this.$arrow.$top.scale.x = 0;
            this.$arrow.$top.scale.y = 0;
            this.$basel.y = -60;
            this.$baser.y = -60;
            this.addEvents();
            return this
        },
        getArrow: function () {
            var e = new PIXI.Sprite,
                t = new n(this.colors.white),
                i = new PIXI.Graphics;
            i.beginFill(this.colors.white);
            i.drawRect(-28, -28, 56, 56);
            e.addChild(t.render().$el);
            e.addChild(i);
            e.timeline = new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(t.$lineIn, .6, {
                                x: -24,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.to(t.$lineIn.scale, .6, {
                                x: 0,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(t.$lineOut, .6, {
                                x: 24,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(t.$lineOut.scale, .6, {
                                x: 0,
                                ease: Expo.easeInOut
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(t.$topIn, .6, {
                                y: 18,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.to(t.$topIn.scale, .6, {
                                y: 0,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(t.$topOut, .6, {
                                y: -24,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(t.$topOut.scale, .6, {
                                y: 0,
                                ease: Expo.easeInOut
                            })
                        ]
                    })
                ],
                stagger: 0,
                paused: !0
            });
            e.$line = t.$line;
            e.$top = t.$top;
            e.mask = i;
            return e
        },
        getIcon: function () {
            var e = new PIXI.Sprite,
                t = new PIXI.Sprite,
                n = new PIXI.Graphics,
                i = new PIXI.Graphics,
                r = new PIXI.Sprite,
                s = new PIXI.Graphics,
                a = new PIXI.Graphics;
            n.beginFill(this.colors.white);
            n.drawRect(-10, -1, 20, 2);
            i.beginFill(this.colors.white);
            i.drawRect(-10, -1, 20, 2);
            s.beginFill(this.colors.white);
            s.drawRect(-16, -1, 26, 2);
            a.beginFill(this.colors.white);
            a.drawRect(-16, -1, 26, 2);
            t.addChild(n);
            t.addChild(i);
            t.rotation = .7853;
            t.anchor.x = .5;
            t.anchor.y = .5;
            r.addChild(s);
            r.addChild(a);
            r.rotation = -.7853;
            r.anchor.x = .5;
            r.anchor.y = .5;
            e.addChild(t);
            e.addChild(r);
            e.$line1 = t;
            e.$line2 = r;
            e.timeline = new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(s, .6, {
                                x: 30,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.to(s.scale, .6, {
                                x: 0,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(a, .6, {
                                x: -30,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(a.scale, .6, {
                                x: 0,
                                ease: Expo.easeInOut
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(n, .6, {
                                x: -30,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.to(n.scale, .6, {
                                x: 0,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(i, .6, {
                                x: 30,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(i.scale, .6, {
                                x: 0,
                                ease: Expo.easeInOut
                            })
                        ]
                    })
                ],
                stagger: .05,
                paused: !0
            });
            return e
        },
        addEvents: function () {
            this.$el.mouseover = _.bind(function () {
                t.play("sections", "hambbackhover", !0);
                this.$arrow.timeline.play();
                this.$icon.timeline.play()
            }, this);
            this.$el.mouseout = _.bind(function () {
                this.$arrow.timeline.reverse();
                this.$icon.timeline.reverse()
            }, this)
        },
        setState: function (e) {
            var t = [];
            if (0 == e) {
                t.push(TweenMax.allTo([this.$baser, this.$basel], .8, {
                    y: -60,
                    ease: Expo.easeInOut
                }, .08));
                t.push(
                    new TimelineMax({
                        tweens: [
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$arrow.$line, .6, {
                                        x: 24,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$arrow.$line.scale, .6, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$arrow.$top, .6, {
                                        x: 5,
                                        y: -17,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$arrow.$top.scale, .6, {
                                        x: 0,
                                        y: 0,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$icon.$line1, .6, {
                                        x: 21,
                                        y: 21,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$icon.$line1.scale, .6, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$icon.$line2, .6, {
                                        x: -21,
                                        y: 21,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$icon.$line2.scale, .6, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            })
                        ],
                        stagger: .04
                    })
                )
            } else if (1 == e) {
                t.push(TweenMax.allTo([this.$basel, this.$baser], .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }, .08));
                t.push(
                    new TimelineMax({
                        tweens: [
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$icon.$line2, .6, {
                                        x: 0,
                                        y: 0,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$icon.$line2.scale, .6, {
                                        x: 1,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$icon.$line1, .6, {
                                        x: 0,
                                        y: 0,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$icon.$line1.scale, .6, {
                                        x: 1,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$arrow.$line, .6, {
                                        x: 24,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$arrow.$line.scale, .6, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$arrow.$top, .6, {
                                        x: 5,
                                        y: -17,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$arrow.$top.scale, .6, {
                                        x: 0,
                                        y: 0,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            })
                        ],
                        stagger: .04
                    })
                )
            } else if (2 == e) {
                t.push(TweenMax.allTo([this.$basel, this.$baser], .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }, .08));
                t.push(
                    new TimelineMax({
                        tweens: [
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$arrow.$line, .6, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$arrow.$line.scale, .6, {
                                        x: 1,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$arrow.$top, .6, {
                                        x: -12.5,
                                        y: 0,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$arrow.$top.scale, .6, {
                                        x: 1,
                                        y: 1,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$icon.$line1, .6, {
                                        x: -21,
                                        y: -21,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$icon.$line1.scale, .6, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$icon.$line2, .6, {
                                        x: -21,
                                        y: 21,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$icon.$line2.scale, .6, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            })
                        ],
                        stagger: .04
                    })
                )
            }

            return new TimelineMax({
                tweens: t,
                onStart: _.bind(function () {
                    this.$el.visible = !0
                }, this),
                onComplete: _.bind(function () {
                    this.$el.visible = 0 != e
                }, this)
            })
        }
    });
    return i
}]