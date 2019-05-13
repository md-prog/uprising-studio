const _ = require("underscore")

module.exports = ["DisplayObject", "Text", "$timeout", function (e, t, n) {
    function i() {
        e.call(this);
        this.timer;
        this.intro = !0;
        this.repeatDelay = 1;
        this.labels = {
            start: "Scroll to explore",
            scroll: "Scroll to continue"
        }
    }

    i.prototype.constructor = i;
    i.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.$dashline = new PIXI.Graphics;
            this.$dashMask = new PIXI.Graphics;
            this.$labelMask = new PIXI.Graphics;
            this.$wrap = new PIXI.Sprite;
            this.$mask = new PIXI.Graphics;
            this.$line = new PIXI.Graphics;
            this.$labels = new PIXI.Sprite;
            this.$label = new PIXI.Text(this.labels.scroll.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 8,
                fill: this.colors.white,
                letterSpacing: 2
            });
            this.$nums0 = new PIXI.Sprite;
            this.$nums1 = new PIXI.Sprite;
            this.$num0 = new t("0", {
                fontFamily: "din-condensed-web",
                fontSize: 36,
                fill: this.colors.white
            });
            this.$num1 = new t("1", {
                fontFamily: "din-condensed-web",
                fontSize: 36,
                fill: this.colors.white
            });
            this.$dashline.mask = this.$dashMask;
            this.$line.beginFill(this.colors.white);
            this.$line.drawRect(0, -25, 1, 50);
            this.$label.rotation = -1.5708;
            this.$label.y = this.$label.width;
            this.$labelMask.beginFill(this.colors.white);
            this.$labelMask.drawRect(0, 0, this.$label.height, this.$label.width + 10);
            this.$labels.addChild(this.$label);
            this.$labels.addChild(this.$labelMask);
            this.$label.mask = this.$labelMask;
            this.$nums0.addChild(this.$num0.$el);
            this.$nums1.addChild(this.$num1.$el);
            this.$wrap.mask = this.$mask;
            this.$wrap.addChild(this.$line);
            this.$wrap.addChild(this.$labels);
            this.$wrap.addChild(this.$nums0);
            this.$wrap.addChild(this.$nums1);
            this.$el.addChild(this.$dashline);
            this.$el.addChild(this.$dashMask);
            this.$el.addChild(this.$wrap);
            this.$el.addChild(this.$mask);
            this.$el.alpha = 0;
            return this
        },
        update: function (e) {
            var t = 0 == e ? this.labels.start : this.labels.scroll,
                n = "" + (e + 1);
            this.index = e;
            this.$num1.text(n.toUpperCase());
            this.$label.text = t.toUpperCase();
            TweenMax.to(this.$label, .6, {
                y: 3 > e ? this.$label.width : 0,
                ease: Expo.easeInOut
            })
        },
        tweenIn: function () {
            var e = 25;
            return new TimelineMax({
                tweens: [
                    TweenMax.from(this.$dashMask.scale, .75, {
                        y: 0,
                        ease: Expo.easeInOut
                    }),
                    new TimelineMax({
                        tweens: [
                            new TimelineMax({
                                tweens: [
                                    TweenMax.fromTo(this.$nums1, 1, {
                                        y: -85
                                    }, {
                                        y: -e - 3,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.fromTo(this.$nums0, 1, {
                                        y: -85
                                    }, {
                                        y: -e - 3,
                                        ease: Expo.easeInOut
                                    })
                                ],
                                stagger: .1
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.from(this.$line, .5, {
                                        alpha: 0,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.from(this.$line, .9, {
                                        y: 900,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.from(this.$labels, .5, {
                                        alpha: 0,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.fromTo(this.$labels, .9, {
                                        y: 900
                                    }, {
                                        y: -e,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            })
                        ],
                        stagger: .1,
                        onStart: _.bind(function () {
                            this.$el.alpha = 1
                        }, this),
                        onComplete: _.bind(function () {
                            this.timer = n(_.bind(this.startLoop, this), 1e3);
                            this.intro = !1
                        }, this)
                    })
                ]
            })
        },
        startLoop: function () {
            var e = 25,
                t = 225;
            this.loop = new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.fromTo(this.$labels, 1, {
                                y: -e
                            }, {
                                y: t - e,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.fromTo(this.$line, 1, {
                                y: 0
                            }, {
                                y: t,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.fromTo(this.$nums1, 1, {
                                y: -e - 3
                            }, {
                                y: -e - 3 + t,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.fromTo(this.$nums0, 1, {
                                y: -e - 3
                            }, {
                                y: -e - 3 + t,
                                ease: Expo.easeInOut
                            })
                        ],
                        stagger: .075
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.fromTo(this.$labels, .5, {
                                y: -this.$label.width - 3 * e
                            }, {
                                y: -e,
                                ease: Expo.easeOut
                            }),
                            TweenMax.fromTo(this.$line, .5, {
                                y: -this.$label.width - 2 * e
                            }, {
                                y: 0,
                                ease: Expo.easeOut
                            }),
                            TweenMax.fromTo(this.$nums1, .5, {
                                y: -this.$label.width - 3 * e
                            }, {
                                y: -e - 3,
                                ease: Expo.easeOut
                            }),
                            TweenMax.fromTo(this.$nums0, .5, {
                                y: -this.$label.width - 3 * e
                            }, {
                                y: -e - 3,
                                ease: Expo.easeOut
                            })
                        ],
                        stagger: .075
                    })
                ],
                stagger: 1.25,
                repeat: -1,
                repeatDelay: this.repeatDelay
            })
        },
        restartLoop: function () {
            this.timer && n.cancel(this.timer);
            this.loop && this.loop.kill();
            this.timer = n(_.bind(this.startLoop, this), 1e3)
        },
        resize: function (e) {
            var t = 25,
                n = 225;
            this.$dashline.clear();
            this.$dashline.beginFill(this.colors.white, .4);
            for (var i = 0; i < Math.round(e.h / 5); ++i) {
                this.$dashline.drawRect(0, Math.floor(5 * i), Math.floor(1), Math.floor(1));
            }
            this.$dashMask.clear();
            this.$dashMask.beginFill(this.colors.black);
            this.$dashMask.drawRect(-4, 0, 10, -e.h);
            this.$dashMask.y = e.h;
            this.$line.y = 0;
            this.$nums0.x = -this.$num0.width - 24;
            this.$nums0.y = -t - 3;
            this.$nums1.x = -this.$num1.width - 8;
            this.$nums1.y = -t - 3;
            this.$labels.x = 10;
            this.$labels.y = -t;
            this.$wrap.x = 0;
            this.$wrap.y = e.y;
            this.$mask.clear();
            this.$mask.beginFill(this.colors.white, .5);
            this.$mask.drawRect(-50, e.y - 2 * t, 100, n);
            this.$el.x = .75 * e.w;
            this.$el.y = 0;
            !this.intro && this.stagesize && this.stagesize.x - e.x != 0 && this.restartLoop();
            this.stagesize = e
        }
    });
    return i
}]