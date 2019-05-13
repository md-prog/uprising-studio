const _ = require("underscore")

module.exports = ["DisplayObject", "Text", function (e, t) {
    function n(t) {
        e.call(this), this.model = t, this.labels = {
            agency: "Agency",
            viewvideo: "View Video",
            viewsite: "Launch Project",
            nolongerlive: "No Longer Online"
        }
    }

    n.prototype.constructor = n;
    n.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var n = this.colors,
                i = this.model.client + " _ " + this.model.name,
                r = "light" == this.model.theme ? 16777215 : 6710886,
                s = "light" == this.model.theme ? 13421772 : 10066329;

            this.$title = new PIXI.Text(i.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 9,
                fill: s,
                letterSpacing: 2
            });
            this.$description = new PIXI.Text(this.model.description.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 9,
                fill: r,
                letterSpacing: 2,
                lineHeight: 18
            });
            this.$label = new PIXI.Text(this.labels.agency.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 9,
                fill: s,
                letterSpacing: 2
            });
            this.$agency = new t(this.model.agency.toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 21,
                fill: r,
                letterSpacing: 1
            });
            this.$cta = this.getCta();
            this.$titleMask = new PIXI.Graphics;
            this.$descrMask = new PIXI.Graphics;
            this.$labelMask = new PIXI.Graphics;
            this.$cta.y = -this.$cta.$text.height;
            this.$label.x = this.$cta.$text.width + 50;
            this.$label.y = -this.$cta.$text.height / 2 - this.$label.height / 2;
            this.$agency.$el.x = this.$cta.$text.width + this.$label.width + 20 + 50;
            this.$agency.$el.y = -this.$agency.height;
            this.$description.y = -this.$cta.$text.height - this.$description.height - 40;
            this.$title.y = -this.$cta.$text.height - this.$description.height - this.$title.height - 40 - 20;
            this.$titleMask.beginFill(n.white, .5);
            this.$titleMask.drawRect(0, this.$title.y, this.$title.width, this.$title.height);
            this.$descrMask.beginFill(n.white, .5);
            this.$descrMask.drawRect(0, this.$description.y, this.$description.width, this.$description.height);
            this.$labelMask.beginFill(n.white, .5);
            this.$labelMask.drawRect(0, this.$label.y, this.$label.width, this.$label.height);
            this.$labelMask.x = this.$label.x;
            this.$el.addChild(this.$title);
            this.$el.addChild(this.$titleMask);
            this.$el.addChild(this.$description);
            this.$el.addChild(this.$descrMask);
            this.$el.addChild(this.$agency.$el);
            this.$el.addChild(this.$label);
            this.$el.addChild(this.$labelMask);
            this.$el.addChild(this.$cta);
            this.$title.mask = this.$titleMask;
            this.$description.mask = this.$descrMask;
            this.$label.mask = this.$labelMask;
            this.addEvents();
            return this
        },
        getCta: function () {
            var e = this.model.link ? this.labels.viewsite : this.labels.nolongerlive,
                n = new PIXI.Sprite,
                i = new PIXI.Graphics,
                r = new PIXI.Graphics,
                s = new t(e.toUpperCase(), {
                    fontFamily: "din-condensed-web",
                    fontSize: 21,
                    fill: this.colors.red,
                    letterSpacing: 1
                });
            i.beginFill(this.colors.white, 0);
            i.drawRect(-5, -5, s.width + 10, s.height + 10);
            r.beginFill(this.colors.white);
            r.drawRect(0, -1, -s.width - 10, 2);
            r.y = s.height / 2;
            r.x = -20;
            n.addChild(i);
            n.addChild(s.$el);
            n.addChild(r);
            n.$text = s;
            n.$line = r;
            n.interactive = !_.isUndefined(this.model.link);
            n.buttonMode = !_.isUndefined(this.model.link);
            if (this.model.link)
                n.timeline = new TimelineMax({
                    tweens: [
                        TweenMax.to(r, .6, {
                            x: s.width + 5,
                            ease: Expo.easeInOut
                        }),
                        TweenMax.to(r.scale, .75, {
                            bezier: {
                                curviness: 0,
                                values: [{
                                    x: 3
                                }, {
                                    x: 1
                                }]
                            },
                            ease: Expo.easeInOut
                        })
                    ],
                    paused: !0
                });
            else
                r.x = s.width + 5;
            return n
        },
        addEvents: function () {
            if (this.model.link) {
                this.$cta.mouseover = _.bind(function () {
                    this.$cta.timeline.play()
                }, this);
                this.$cta.mouseout = _.bind(function () {
                    this.$cta.timeline.reverse()
                }, this)
            }
        },
        tweenIn: function () {
            return new TimelineMax({
                tweens: [
                    TweenMax.fromTo(this.$el, 1, {
                        alpha: 0
                    }, {
                        alpha: 1,
                        ease: Expo.easeInOut
                    })
                ]
            })
        },
        tweenOut: function () {
            this.removeEvents();
            return new TimelineMax({
                tweens: [
                    TweenMax.fromTo(this.$el, 1, {
                        alpha: 1
                    }, {
                        alpha: 0,
                        ease: Expo.easeInOut
                    })
                ]
            })
        },
        tweenInWithSlide: function (e) {
            var t = [];
            t.push(TweenMax.from(this.$titleMask, .8, {
                x: this.$title.width * e,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.from(this.$descrMask, .8, {
                x: this.$description.width * e,
                ease: Expo.easeInOut
            }));
            1 == e && t.push(TweenMax.allFrom(this.$cta.$text.$el.children.slice(0).reverse(), .8, {
                alpha: 0,
                ease: Expo.easeInOut
            }, .025));
            - 1 == e && t.push(TweenMax.allFrom(this.$cta.$text.$el.children.slice(0), .8, {
                alpha: 0,
                ease: Expo.easeInOut
            }, .025));
            t.push(TweenMax.from(this.$labelMask, .8, {
                x: this.$label.x + this.$label.width * e,
                ease: Expo.easeInOut
            }));
            1 == e && t.push(TweenMax.allFrom(this.$agency.$el.children.slice(0).reverse(), .8, {
                alpha: 0,
                ease: Expo.easeInOut
            }, .025));
            - 1 == e && t.push(TweenMax.allFrom(this.$agency.$el.children.slice(0), .8, {
                alpha: 0,
                ease: Expo.easeInOut
            }, .025));
            t.push(new TimelineMax({
                tweens: [
                    TweenMax.from(this.$cta.$line, .8, {
                        x: this.$cta.$text.width * e,
                        ease: Expo.easeInOut
                    }),
                    TweenMax.from(this.$cta.$line.scale, .8, {
                        x: 0,
                        ease: Expo.easeInOut
                    })
                ]
            }));
            return new TimelineMax({
                tweens: t,
                stagger: .1
            })
        },
        tweenOutWithSlide: function (e) {
            var t = [];
            this.removeEvents(), t.push(TweenMax.to(this.$titleMask, .8, {
                x: -this.$title.width * e,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$descrMask, .8, {
                x: -this.$description.width * e,
                ease: Expo.easeInOut
            }));
            1 == e && t.push(TweenMax.allTo(this.$cta.$text.$el.children.slice(0).reverse(), .6, {
                alpha: 0,
                ease: Expo.easeInOut
            }, .025));
            - 1 == e && t.push(TweenMax.allTo(this.$cta.$text.$el.children.slice(0), .6, {
                alpha: 0,
                ease: Expo.easeInOut
            }, .025));
            t.push(TweenMax.to(this.$labelMask, .8, {
                x: this.$label.x - this.$label.width * e,
                ease: Expo.easeInOutOut
            }));
            1 == e && t.push(TweenMax.allTo(this.$agency.$el.children.slice(0).reverse(), .6, {
                alpha: 0,
                ease: Expo.easeInOut
            }, .025));
            - 1 == e && t.push(TweenMax.allTo(this.$agency.$el.children.slice(0), .6, {
                alpha: 0,
                ease: Expo.easeInOut
            }, .025));
            t.push(new TimelineMax({
                tweens: [
                    TweenMax.to(this.$cta.$line, .8, {
                        x: -this.$cta.$text.width * e,
                        ease: Expo.easeInOut
                    }),
                    TweenMax.to(this.$cta.$line.scale, .8, {
                        x: 0,
                        ease: Expo.easeInOut
                    })
                ]
            }));
            return new TimelineMax({
                tweens: t,
                stagger: 0
            })
        },
        removeEvents: function () {
            this.$cta.mouseover = this.$cta.mouseout = null
        },
        destroy: function () {
            this.removeEvents();
            this.$cta.$text.destroy();
            this.$title.destroy(!0);
            this.$description.destroy(!0);
            this.$label.destroy(!0);
            this.$agency.destroy();
            this.$cta.destroy();
            this.$title = null;
            this.$description = null;
            this.$label = null;
            this.$agency = null;
            this.$cta = null;
            this.model = null;
            e.prototype.destroy.call(this)
        }
    });
    return n
}]