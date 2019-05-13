const _ = require("underscore")

module.exports = ["DisplayObject", "SoundManager", function (e, t) {
    function n(t) {
        e.call(this)
    }

    n.prototype.constructor = n;
    n.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.$base = new PIXI.Graphics;
            this.$topline = new PIXI.Graphics;
            this.$topline2 = new PIXI.Graphics;
            this.$botline = new PIXI.Graphics;
            this.$botline2 = new PIXI.Graphics;
            this.$mask = new PIXI.Graphics;
            this.$base.beginFill(this.colors.white, 0);
            this.$base.drawRect(50, 0, 66, 21);
            this.$mask.beginFill(this.colors.white, .5);
            this.$mask.drawRect(0, 0, 66, 21);
            this.$mask.x = 50;
            this.$topline.beginFill(this.colors.white);
            this.$topline.drawRect(0, -1, 66, 2);
            this.$topline.x = 50;
            this.$topline.y = 1;
            this.$topline2.beginFill(this.colors.white);
            this.$topline2.drawRect(0, -1, 66, 2);
            this.$topline2.x = -16;
            this.$topline2.y = 1;
            this.$botline.beginFill(this.colors.white);
            this.$botline.drawRect(0, -1, 46, 2);
            this.$botline.x = 50;
            this.$botline.y = 18;
            this.$botline2.beginFill(this.colors.white);
            this.$botline2.drawRect(0, -1, 46, 2);
            this.$botline2.x = 4;
            this.$botline2.y = 18;
            this.$el.addChild(this.$base);
            this.$el.addChild(this.$topline);
            this.$el.addChild(this.$topline2);
            this.$el.addChild(this.$botline);
            this.$el.addChild(this.$botline2);
            this.$el.addChild(this.$mask);
            this.$el.interactive = !0;
            this.$el.buttonMode = !0;
            this.timeline = this.getTimeline();
            this.$el.mask = this.$mask;
            this.addEvents();
            return this
        },
        addEvents: function () {
            this.$el.mouseover = _.bind(function () {
                t.play("sections", "hambbackhover", !0);
                this.timeline.play()
            }, this);
            this.$el.mouseout = _.bind(function () {
                this.timeline.reverse()
            }, this)
        },
        getTimeline: function () {
            var e = .6,
                t = .09,
                n = Expo.easeInOut;
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(this.$topline, e, {
                                x: 116,
                                ease: n
                            }),
                            TweenMax.to(this.$botline, e, {
                                x: 116,
                                ease: n
                            })
                        ],
                        stagger: t
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(this.$topline2, e, {
                                x: 50,
                                ease: n
                            }),
                            TweenMax.to(this.$botline2, e, {
                                x: 70,
                                ease: n
                            })
                        ],
                        stagger: t
                    })
                ],
                stagger: t,
                paused: !0
            })
        }
    });

    return n
}]