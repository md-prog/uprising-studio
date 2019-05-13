const _ = require("underscore")

module.exports = ["DisplayObject", "Utils", function (e, t) {
    function n(n, i) {
        e.call(this);
        this.$texture = n;
        this.width = t.isMobile() ? 960 : 1280;
        this.height = t.isMobile() ? 540 : 720;
        this.ratio = this.width / this.height;
        this.timeline = null;
        this.fragstore = [];
        this.dpr = i
    }

    n.prototype.constructor = n;
    n.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.$poster = new PIXI.Sprite(this.$texture);
            this.$poster.anchor.x = .5;
            this.$poster.anchor.y = .5;
            this.$poster.alpha = 0;
            this.$holder = new PIXI.Sprite;
            this.$el.addChild(this.$poster);
            this.$el.addChild(this.$holder);
            return this
        },
        update: function () {
            this.$texture && this.$texture.update()
        },
        tweenIn: function () {
            this.timeline && this.timeline.kill();
            0 == this.fragstore.length && this.addFragments();
            var e = this.$holder.children[0],
                t = this.$holder.children[1],
                n = e.children[1],
                i = t.children[1];
            this.timeline = new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.from(n.scale, 1.5, {
                                y: 0,
                                ease: Expo.easeOut
                            }),
                            TweenMax.from(e.scale, 1.5, {
                                x: 1.45,
                                y: 1.45,
                                ease: Expo.easeOut
                            })
                        ],
                        stagger: .1
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.from(i.scale, 1.5, {
                                y: 0,
                                ease: Expo.easeOut
                            }),
                            TweenMax.from(t.scale, 1.5, {
                                x: 1.45,
                                y: 1.45,
                                ease: Expo.easeOut
                            })
                        ],
                        stagger: .1
                    })
                ],
                stagger: .1,
                onComplete: _.bind(function () {
                    this.$poster && (this.$poster.alpha = 1);
                    this.removeFragments()
                }, this)
            });
            return this.timeline
        },
        tweenOut: function () {
            this.$poster.alpha = 0;
            this.timeline && this.timeline.kill();
            0 == this.fragstore.length && this.addFragments();
            var e = this.$holder.children[0],
                t = this.$holder.children[1],
                n = e.children[1],
                i = t.children[1];
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(i.scale, 1.25, {
                                y: 0,
                                ease: Expo.easeOut
                            }),
                            TweenMax.to(t.scale, 1.25, {
                                x: 1.45,
                                y: 1.45,
                                ease: Expo.easeOut
                            })
                        ],
                        stagger: .1
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(n.scale, 1.25, {
                                y: 0,
                                ease: Expo.easeOut
                            }),
                            TweenMax.to(e.scale, 1.25, {
                                x: 1.45,
                                y: 1.45,
                                ease: Expo.easeOut
                            })
                        ],
                        stagger: .1
                    })
                ],
                stagger: .1,
                onComplete: _.bind(function () {
                    this.removeFragments()
                }, this)
            })
        },
        tweenOutToPage: function () {
            return this.tweenOut()
        },
        addFragments: function () {
            this.stagesize || (this.stagesize = this.getStageSize());
            var e = new PIXI.Sprite,
                t = new PIXI.Sprite,
                n = new PIXI.Sprite(this.$texture),
                i = new PIXI.Sprite(this.$texture),
                r = this.stagesize.s / this.dpr;
            n.anchor.x = .5;
            n.anchor.y = .5;
            n.scale.x = r;
            n.scale.y = r;
            i.anchor.x = .5;
            i.anchor.y = .5;
            i.scale.x = r;
            i.scale.y = r;
            var s = new PIXI.Graphics,
                a = new PIXI.Graphics;
            s.clear();
            s.beginFill(this.colors.red, .5);
            s.drawRect(-this.stagesize.x, 0, this.stagesize.x, this.stagesize.h);
            s.y = -this.stagesize.y;
            a.clear();
            a.beginFill(this.colors.red, .5);
            a.drawRect(0, 0, this.stagesize.x, -this.stagesize.h);
            a.y = this.stagesize.y;
            e.addChild(n);
            e.addChild(s);
            t.addChild(i);
            t.addChild(a);
            e.mask = s;
            t.mask = a;
            this.fragstore.push(e);
            this.fragstore.push(t);
            this.$holder.addChild(e);
            this.$holder.addChild(t)
        },
        removeFragments: function () {
            _.each(this.fragstore, function (e) {
                e.destroy()
            }, this);
            this.fragstore = []
        },
        getStageSize: function (e) {
            var t = window.innerWidth,
                n = window.innerHeight,
                i = 1;
            i = t / n > this.ratio ? t / this.width : n / this.height;
            return {
                w: t,
                h: n,
                x: t / 2,
                y: n / 2,
                s: i
            }
        },
        resize: function (e) {
            var t = 1;
            this.$el.x = e.x;
            this.$el.y = e.y;
            this.$holder.x = -e.x;
            this.$holder.y = -e.y;
            t = e.w / e.h > this.ratio ? e.w / this.width : e.h / this.height;
            this.$poster.x = -e.x;
            this.$poster.y = -e.y;
            this.$poster.scale.x = t / this.dpr;
            this.$poster.scale.y = t / this.dpr;
            this.stagesize = this.getStageSize()
        }
    });
    return n
}]