const _ = require("underscore")

module.exports = ["DisplayObject", function (e) {
    function t(t) {
        e.call(this);
        this.label = t;
        this.isHold = !1
    }

    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var t = this.colors;
            this.$base = new PIXI.Graphics;
            this.$base.beginFill(t.white, .15);
            this.$base.drawRect(-80, 0, 160, 2);
            this.$base.scale.x = .5;
            this.$base.y = 30;
            this.$line = new PIXI.Graphics;
            this.$line.beginFill(t.red, 1);
            this.$line.drawRect(-80, 0, 160, 2);
            this.$line.scale.x = 0;
            this.$line.x = -40;
            this.$line.y = 30;
            this.$tutorial = new PIXI.Text(this.label.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 9,
                fill: t.white,
                letterSpacing: 2
            });
            this.$tutorial.x = -this.$tutorial.width / 2;
            var n = this.$tutorial.width + 10,
                i = this.$base.y + 10;
            this.$mask = new PIXI.Graphics;
            this.$mask.beginFill(t.white, 1);
            this.$mask.drawRect(-n / 2, -5, n, i);
            this.$mask.scale.x = 0;
            this.$el.addChild(this.$tutorial);
            this.$el.addChild(this.$base);
            this.$el.addChild(this.$line);
            this.$el.addChild(this.$mask);
            this.$el.mask = this.$mask;
            this.loopTimeline = new TimelineMax({
                tweens: [
                    TweenMax.to(this.$line.scale, 1.75, {
                        bezier: {
                            curviness: 0,
                            values: [{
                                x: 0
                            }, {
                                x: .5
                            }, {
                                x: 0
                            }]
                        },
                        ease: Expo.easeInOut
                    }),
                    TweenMax.to(this.$line, 1.75, {
                        bezier: {
                            curviness: 0,
                            values: [{
                                x: -40
                            }, {
                                x: 0
                            }, {
                                x: 40
                            }]
                        },
                        ease: Expo.easeInOut
                    })
                ],
                repeat: -1
            });
            return this
        },
        expand: function () {
            this.kill();
            this.isHold = !0;
            this.timeline = new TimelineMax({
                tweens: [
                    TweenMax.to(this.$base.scale, 1.5, {
                        x: 1,
                        ease: Expo.easeOut
                    }),
                    TweenMax.to(this.$line.scale, 1.5, {
                        x: 1,
                        ease: Expo.easeOut
                    }),
                    TweenMax.to(this.$line, 1.5, {
                        x: 0,
                        ease: Expo.easeOut
                    })
                ]
            })
        },
        collapse: function () {
            this.kill();
            this.isHold = !1;
            this.timeline = new TimelineMax({
                tweens: [
                    TweenMax.to(this.$base.scale, 1.5, {
                        x: .5,
                        ease: Expo.easeOut
                    }),
                    TweenMax.to(this.$line.scale, 1.5, {
                        x: 0,
                        ease: Expo.easeOut
                    }),
                    TweenMax.to(this.$line, 1.5, {
                        x: -40,
                        ease: Expo.easeOut
                    })
                ],
                onComplete: _.bind(function () {
                    !this.isHold && this.loopTimeline && this.loopTimeline.play()
                }, this)
            })
        },
        kill: function () {
            this.timeline && this.timeline.kill();
            this.loopTimeline && this.loopTimeline.kill()
        },
        destroy: function () {
            this.kill();
            this.$tutorial.destroy(!0);
            this.$base.destroy(!0);
            this.$line.destroy(!0);
            this.$mask.destroy(!0);
            this.$tutorial = null;
            this.$base = null;
            this.$line = null;
            this.$mask = null;
            this.loopTimeline = null;
            this.timeline = null;
            this.isHold = !1;
            e.prototype.destroy.call(this)
        }
    });
    return t
}]