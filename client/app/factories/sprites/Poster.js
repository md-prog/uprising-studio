const _ = require("underscore")

module.exports = ["DisplayObject", "Delaunay", "Fragment", "Performance", "Utils", function (e, t, n, i, r) {
    function s(t) {
        e.call(this);
        this.$texture = t;
        this.width = r.isMobile() ? 960 : 1280;
        this.height = r.isMobile() ? 540 : 720;
        this.ratio = this.width / this.height;
        this.timeline = null;
        this.fragstore = [];
        this.maxFrags = 17;
        this.frags = 2
    }

    s.prototype.constructor = s;
    s.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.$video = new PIXI.Sprite(this.$texture);
            this.$holder = new PIXI.Sprite;
            this.$video.anchor.x = .5;
            this.$video.anchor.y = .5;
            this.$video.alpha = 0;
            this.$el.addChild(this.$video);
            this.$el.addChild(this.$holder);
            this.frags = this.maxFrags;
            return this
        },
        update: function () {
            this.$texture && this.$texture.update()
        },
        tweenIn: function () {
            var e = [];
            this.timeline && this.timeline.kill();
            0 == this.fragstore.length && this.addFragments();
            _.each(this.fragstore, function (t) {
                e.push(t.tweenIn())
            }, this);
            this.timeline = new TimelineMax({
                tweens: [
                    TweenMax.from(this.$el, .15, {
                        alpha: 0,
                        ease: Cubic.easeInOut
                    }),
                    new TimelineMax({
                        tweens: e,
                        stagger: .0075
                    })
                ],
                onComplete: _.bind(function () {
                    this.$video && (this.$video.alpha = 1);
                    this.removeFragments()
                }, this)
            });
            return this.timeline
        },
        tweenOut: function () {
            this.timeline = new TimelineMax({
                tweens: [
                    TweenMax.to(this.$el, 1, {
                        alpha: 0,
                        rotation: -.45,
                        ease: Cubic.easeInOut
                    }),
                    TweenMax.to(this.$el.scale, 1, {
                        x: 1.125,
                        y: 1.125,
                        ease: Cubic.easeInOut
                    })
                ]
            });
            return this.timeline
        },
        tweenOutToPage: function () {
            var e = [];
            this.timeline && this.timeline.kill();
            0 == this.fragstore.length && this.addFragments();
            _.each(this.fragstore, function (t) {
                e.push(t.tweenOut())
            }, this);
            this.$video.alpha = 0;
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: e.reverse(),
                        stagger: .0075
                    })
                ],
                onComplete: _.bind(function () {
                    this.removeFragments()
                }, this)
            })
        },
        addFragments: function () {
            this.stagesize || (this.stagesize = this.getStageSize());
            var e, i, r, s, a = t.triangulate(this.stagesize.w, this.stagesize.h, this.frags),
                o = t.getIndices(a);
            this.fragstore = [];
            for (var l = 0; l < o.length; l += 3) {
                i = a[o[l + 0]];
                r = a[o[l + 1]];
                s = a[o[l + 2]];
                e = new n(this.$texture, i, r, s, this.stagesize);
                this.$holder.addChild(e.render().$el);
                this.fragstore.push(e);
            }
            t.sortTriangles(this.fragstore, this.stagesize.x, this.stagesize.y)
        },
        removeFragments: function () {
            _.each(this.fragstore, function (e) {
                e.destroy()
            }, this);
            this.fragstore = []
        },
        getStageSize: function () {
            var e = window.innerWidth,
                t = window.innerHeight,
                n = 1;
            n = e / t > this.ratio ? e / this.width : t / this.height;
            return {
                w: e,
                h: t,
                x: e / 2,
                y: t / 2,
                s: n
            }
        },
        resize: function (e) {
            var t = 1;
            this.$el.x = e.x;
            this.$el.y = e.y;
            this.$holder.x = -e.x;
            this.$holder.y = -e.y;
            t = e.w / e.h > this.ratio ? e.w / this.width : e.h / this.height;
            this.$video.scale.x = t;
            this.$video.scale.y = t;
            this.stagesize = this.getStageSize()
        },
        destroy: function () {
            this.fragstore.length > 0 && this.removeFragments();
            this.$video.destroy(!0);
            this.$holder.destroy(!0);
            this.$texture = null;
            this.$video = null;
            e.prototype.destroy.call(this)
        }
    });
    return s;
}]