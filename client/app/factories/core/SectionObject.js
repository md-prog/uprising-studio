const _ = require('underscore')

module.exports = ["ContainerObject", "Text", "Poster", "Copy", "Maincta", "SoundManager", "Math2", "Events", "Utils", "$timeout", function (ContainerObject, Text, Poster, Copy, Maincta, SoundManager, Math2, Events, Utils, $timeout) {
    function c(t, n) {
        ContainerObject.call(this, t, n);
        this.tweener = {
            value: 0
        };
        this.repeatDelay = 3;
        this.timer = 0
    }

    c.prototype.constructor = c;
    c.prototype = _.extend(Object.create(ContainerObject.prototype), {
        render: function () {
            ContainerObject.prototype.render.call(this);
            var s = this.colors,
                a = "work" == this.model.name ? 250 : 200;

            this.texStore = this.scope.data.sections.textures;
            this.$texture = this.getTexture(this.model);
            this.$poster = new Poster(this.$texture);
            this.$wrapper = new PIXI.Sprite;
            this.$head = new Text(this.model.head.toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 18,
                fill: s.white,
                letterSpacing: .5
            });
            this.$copyline = new Copy(this.model.copylines, {
                fontFamily: "timmons",
                fontSize: a,
                fill: s.green,
                letterSpacing: 20
            });
            this.$subtitle = new Text(this.model.subtitle.toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 32,
                fill: s.white,
                letterSpacing: .5
            });
            this.$description = new Text(this.model.description.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 9,
                fill: s.white,
                letterSpacing: 0
            });
            this.$cta = new Maincta(this.model.cta.toUpperCase());
            this.$topLine = new PIXI.Graphics;
            this.$botLine = new PIXI.Graphics;
            this.$wrapper.addChild(this.$topLine);
            this.$wrapper.addChild(this.$botLine);
            this.$wrapper.addChild(this.$head.$el);
            this.$wrapper.addChild(this.$subtitle.$el);
            this.$wrapper.addChild(this.$description.$el);
            this.$wrapper.addChild(this.$copyline.render().$el);
            this.$wrapper.addChild(this.$cta.render().$el);
            this.$el.addChild(this.$poster.render().$el);
            this.$el.addChild(this.$wrapper);
            this.filter = new PIXI.filters.GlitchFilter;
            this.filter.resolution = Utils.getDpr();
            this.filter.padding = 0;
            this.filter.seed = 0;
            this.addEvents();

            return this;
        },
        addEvents: function () {
            this.$cta.$el.click = this.$cta.$el.tap = _.bind(function (e) {
                this.scope.$emit(Events.OPEN_PAGE)
            }, this)
        },
        update: function () {
            ContainerObject.prototype.update.call(this);
            this.$poster && this.$poster.update()
        },
        tweenIn: function () {
            this.timer = $timeout(_.bind(this.loop, this), 3e3);
            this.timeline = new TimelineMax({
                tweens: [
                    TweenMax.to(this.$el, .125, {
                        alpha: 1,
                        ease: Expo.easeOut
                    }),
                    new TimelineMax({
                        tweens: [
                            this.$poster.tweenIn(),
                            new TimelineMax({
                                tweens: [
                                    new TimelineMax({
                                        tweens: [
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
                                            this.$cta.tweenIn()
                                        ],
                                        stagger: .5
                                    }),
                                    new TimelineMax({
                                        tweens: [
                                            this.$copyline.tweenIn(),
                                            TweenMax.allFrom(this.$subtitle.$el.children, 1, {
                                                alpha: 0,
                                                ease: Expo.easeOut
                                            }, .025),
                                            TweenMax.allFrom(this.$description.$el.children, 1, {
                                                alpha: 0,
                                                ease: Expo.easeOut
                                            }, .015)
                                        ],
                                        stagger: .15
                                    }),
                                    TweenMax.from(this.$botLine.scale, .9, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })
                                ],
                                stagger: .15
                            })
                        ]
                    })
                ],
                stagger: .125
            });
            SoundManager.play("sections", "tweenIn", !0);
            return this.timeline
        },
        tweenOut: function () {
            this.removeEvents();
            this.timer && $timeout.cancel(this.timer);
            this.timeline = new TimelineMax({
                tweens: [
                    this.$cta.tweenOut(),
                    this.$poster.tweenOut(),
                    new TimelineMax({
                        tweens: [
                            TweenMax.to({
                                value: 0
                            }, .5, {
                                value: 1,
                                ease: Cubic.easeInOut
                            }),
                            TweenMax.to(this.$wrapper, .01, {
                                alpha: 0,
                                ease: Cubic.easeInOut
                            })
                        ],
                        stagger: .4
                    })
                ],
                onStart: _.bind(function () {
                    this.$wrapper.filters = [this.filter]
                }, this),
                onUpdate: _.bind(this.generateGlitch, this)
            });
            return this.timeline
        },
        tweenInFromMenu: function () {
            var e = this.scope.stagesize.x * -.5;
            this.scope.stagesize.y * -.5;
            return this.$poster.$video.alpha = 1, this.timer = $timeout(_.bind(this.loop, this), 3e3), new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [TweenMax.from(this.$poster.$el.scale, 1.5, {
                            x: 1.5,
                            y: 1.5,
                            ease: Expo.easeOut
                        })]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.from(this.$wrapper.scale, 1.5, {
                                x: 1.5,
                                y: 1.5,
                                ease: Expo.easeOut
                            }),
                            TweenMax.from(this.$wrapper, 1.5, {
                                alpha: 1,
                                x: e,
                                ease: Expo.easeOut
                            })
                        ]
                    })
                ],
                stagger: .15
            })
        },
        tweenOutToMenu: function () {
            this.removeEvents(), this.timer && $timeout.cancel(this.timer);
            var e = this.scope.stagesize.x * -.5,
                t = this.scope.stagesize.y * -.5;
            return new TimelineMax({
                tweens: [
                    TweenMax.to(this.$el.scale, .75, {
                        x: 1.5,
                        y: 1.5,
                        ease: Cubic.easeInOut
                    }),
                    TweenMax.to(this.$el, .75, {
                        alpha: 1,
                        x: e,
                        y: t,
                        ease: Cubic.easeInOut
                    })
                ]
            })
        },
        tweenOutToPage: function () {
            this.removeEvents();
            this.timer && $timeout.cancel(this.timer);
            this.timeline = new TimelineMax({
                tweens: [
                    this.$poster.tweenOutToPage(),
                    new TimelineMax({
                        tweens: [
                            TweenMax.fromTo(this.tweener, .5, {
                                value: 0
                            }, {
                                value: 1,
                                ease: Cubic.easeInOut
                            }),
                            TweenMax.to(this.$wrapper, .15, {
                                alpha: 0,
                                ease: Cubic.easeInOut
                            })
                        ],
                        stagger: .25
                    })
                ],
                onStart: _.bind(function () {
                    this.$wrapper.filters = [this.filter]
                }, this),
                onUpdate: _.bind(this.generateGlitch, this)
            });
            SoundManager.play("sections", "tweenOut", !0);
            return this.timeline
        },
        loop: function () {
            SoundManager.play("sections", "copyloop", !0);
            this.tweener.value = this.$copyline.width;
            this.loopTimeline = new TimelineMax({
                tweens: [
                    this.$cta.getLoop(),
                    this.$copyline.getLoop(),
                    TweenMax.to(this.tweener, .75, {
                        value: this.$copyline.width,
                        ease: Expo.easeInOut,
                        onUpdate: _.bind(function () {
                            if (this.$topLine) {
                                this.$topLine.clear();
                                this.$topLine.beginFill(this.colors.white);
                                this.$topLine.drawRect(50 + this.$head.width + 25, 0, this.tweener.value - this.$head.width - 33, 1)
                            }
                        }, this)
                    })
                ]
            });
            this.timer = $timeout(_.bind(this.loop, this), 1e3 * this.repeatDelay)
        },
        generateGlitch: function () {
            this.filter.byp = 0;
            this.filter.amount = Math.random() / 60;
            this.filter.angle = Math2.randFloat(-Math.PI, Math.PI);
            this.filter.distortionX = Math2.randFloat(0, 1);
            this.filter.distortionY = Math2.randFloat(0, 1);
            this.filter.seedX = Math2.randFloat(-.5, .5);
            this.filter.seedY = Math2.randFloat(-.5, .5)
        },
        resize: function (t) {
            ContainerObject.prototype.resize.call(this, t);
            this.deafultResize(t);
            t.w < 768 && this.phoneResize(t);
            this.$el.x = this.$el.y = 0
        },
        deafultResize: function (e) {
            var t = this.colors,
                n = 50,
                i = 20;
            this.$poster.resize(e);
            this.$head.$el.scale.x = 1;
            this.$head.$el.scale.y = 1;
            this.$head.$el.x = n;
            this.$head.$el.y = -9;
            this.$copyline.$el.scale.x = 1;
            this.$copyline.$el.scale.y = 1;
            this.$copyline.$el.x = n - 5;
            this.$copyline.$el.y = i + 5;
            this.$subtitle.$el.scale.x = 1;
            this.$subtitle.$el.scale.y = 1;
            this.$subtitle.$el.y = this.$copyline.$el.y + this.$copyline.height + i;
            this.$subtitle.$el.x = n;
            this.$description.$el.scale.x = 1;
            this.$description.$el.scale.y = 1;
            this.$description.$el.y = this.$subtitle.$el.y + this.$subtitle.height + i;
            this.$description.$el.x = n;
            this.height = Math.round(this.$description.$el.y + this.$description.height + 11);
            this.$cta.$el.x = Math.round(.75 * e.w);
            this.$cta.$el.y = 0;
            this.$wrapper.y = Math.round(e.y - .5 * (this.height + i));
            this.$wrapper.x = 0;
            this.$topLine.clear();
            this.$topLine.beginFill(t.white);
            this.$topLine.drawRect(n + this.$head.width + 25, 0, this.$copyline.width - this.$head.width - 33, 1);
            this.$botLine.clear();
            this.$botLine.beginFill(t.white);
            this.$botLine.drawRect(0, this.height + i, -e.w + n, 2);
            this.$botLine.x = e.w
        },
        phoneResize: function (e) {
            var t = this.colors,
                n = 25,
                i = 20;
            this.$head.$el.scale.x = .7;
            this.$head.$el.scale.y = .7;
            this.$copyline.$el.scale.x = .5;
            this.$copyline.$el.scale.y = .5;
            this.$copyline.$el.y = i + 5;
            this.$subtitle.$el.scale.x = .6;
            this.$subtitle.$el.scale.y = .6;
            this.$subtitle.$el.y = this.$copyline.$el.y + .5 * this.$copyline.height + i;
            this.$description.$el.scale.x = .8;
            this.$description.$el.scale.y = .8;
            this.$description.$el.y = this.$subtitle.$el.y + .6 * this.$subtitle.height + i;
            this.height = Math.round(this.$description.$el.y + .8 * this.$description.height);
            this.$wrapper.y = Math.round(e.y - .6 * (this.height + i));
            this.$wrapper.x = -n;
            this.$cta.$el.y = e.h - this.$wrapper.y - 110;
            this.$cta.$el.x = n + e.x;
            this.$botLine.clear();
            this.$botLine.beginFill(t.white);
            this.$botLine.drawRect(0, this.height + i, -e.w + n, 2);
            this.$botLine.x = e.w + n
        },
        removeEvents: function () {
            this.$cta.$el.click = this.$cta.$el.tap = null
        },
        destroy: function () {
            this.removeEvents();
            this.$head.destroy(!0);
            this.$description.destroy(!0);
            this.$copyline.destroy(!0);
            this.$subtitle.destroy(!0);
            this.$poster.destroy(!0);
            this.$cta.destroy(!0);
            this.$head = null;
            this.$poster = null;
            this.$copyline = null;
            this.$subtitle = null;
            this.$description = null;
            this.$topLine = null;
            this.$botLine = null;
            this.$wrapper = null;
            this.tweener = null;
            this.$cta = null;
            this.$texture = null;
            ContainerObject.prototype.destroy.call(this)
        }
    })
    return c
}]