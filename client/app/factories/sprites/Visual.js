const _ = require("underscore")

module.exports = ["DisplayObject", "Utils", function (e, t) {
    function n(n, i, r) {
        e.call(this);
        this.$texture = i;
        this.width = t.isMobile() ? 960 : 1280;
        this.height = t.isMobile() ? 540 : 720;
        this.numrows = (t.getDpr() > 1, 5);
        this.halfrows = Math.floor(this.numrows / 2);
        this.ratio = this.width / this.height;
        this.timeline = null;
        this.model = n;
        this.sort = r
    }

    n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            return e.prototype.render.call(this), this.$poster = this.getPoster(this.$texture), this.$poster.filters = [new PIXI.filters.GrayFilter], this.$poster.filters[0].resolution = t.getDpr(), this.$poster.filters[0].padding = 0, this.$poster.anchor.x = .5, this.$poster.anchor.y = .5, this.$el.addChild(this.$poster), this
        },
        update: function () {
            this.$texture && this.$texture.update()
        },
        tweenInWithRows: function (e) {
            var t = this.$poster.getChildAt(0),
                n = this.$poster.getChildAt(1),
                i = this.$poster.getChildAt(2);
            this.$poster.getChildAt(3);
            0 == i.children.length && this.addRows();
            var r, s = this.stagesize.x * this.sort * e,
                a = Math.floor(i.children.length / 2),
                o = [],
                l = [],
                u = [],
                c = [],
                h = Expo.easeInOut,
                d = .1,
                p = 1;
            for (r = a - 1; r >= 0; --r) o.push(new TimelineMax({
                tweens: [
                    TweenMax.from(i.children[r], p, {
                        x: s,
                        ease: h
                    }),
                    TweenMax.from(i.children[r].getChildAt(3), p, {
                        alpha: .75,
                        ease: h
                    })
                ]
            }));
            for (r = a + 1; r < i.children.length; ++r) l.push(new TimelineMax({
                tweens: [
                    TweenMax.from(i.children[r], p, {
                        x: s,
                        ease: h
                    }),
                    TweenMax.from(i.children[r].getChildAt(3), p, {
                        alpha: .75,
                        ease: h
                    })
                ]
            }));
            u.push(new TimelineMax({
                tweens: [
                    TweenMax.from(i.children[a], p, {
                        x: s,
                        ease: h
                    }),
                    TweenMax.from(i.children[a].getChildAt(3), p, {
                        alpha: .75,
                        ease: h
                    })
                ]
            }));
            if (1 == e)
                c.push(new TimelineMax({
                    tweens: [
                        new TimelineMax({
                            tweens: u
                        }),
                        new TimelineMax({
                            tweens: [
                                new TimelineMax({
                                    tweens: o,
                                    stagger: d
                                }),
                                new TimelineMax({
                                    tweens: l,
                                    stagger: d
                                })
                            ]
                        })
                    ],
                    stagger: d
                }))
            else if (-1 == e)
                c.push(new TimelineMax({
                    tweens: [
                        new TimelineMax({
                            tweens: [
                                new TimelineMax({
                                    tweens: o.reverse(),
                                    stagger: d
                                }),
                                new TimelineMax({
                                    tweens: l.reverse(),
                                    stagger: d
                                })
                            ]
                        }),
                        new TimelineMax({
                            tweens: u
                        })
                    ],
                    stagger: d * this.halfrows
                }));
            this.timeline = new TimelineMax({
                tweens: c,
                onComplete: _.bind(function () {
                    t && (t.alpha = 1);
                    t.alpha = 1;
                    n.alpha = 1;
                    this.removeRows()
                }, this)
            });
            t.alpha = 0;
            n.alpha = 0;
            return this.timeline
        },
        tweenOutWithRows: function (e) {
            var t = this.$poster.getChildAt(0),
                n = this.$poster.getChildAt(1),
                i = this.$poster.getChildAt(2),
                r = this.$poster.getChildAt(3);
            this.timeline && this.timeline.kill();
            0 == i.children.length && this.addRows();
            var s, a = this.stagesize.x * -this.sort * e,
                o = Math.floor(i.children.length / 2),
                l = [],
                u = [],
                c = [],
                h = [],
                d = Expo.easeInOut,
                p = .1,
                f = 1;
            for (s = o - 1; s >= 0; --s)
                l.push(TweenMax.to(i.children[s], f, {
                    x: a,
                    ease: d
                }));
            for (s = o + 1; s < i.children.length; ++s)
                u.push(TweenMax.to(i.children[s], f, {
                    x: a,
                    ease: d
                }));
            c.push(TweenMax.to(i.children[o], f, {
                x: a,
                ease: d
            }));
            if (1 == e)
                h.push(new TimelineMax({
                    tweens: [
                        new TimelineMax({
                            tweens: c
                        }),
                        new TimelineMax({
                            tweens: [
                                new TimelineMax({
                                    tweens: l,
                                    stagger: p
                                }),
                                new TimelineMax({
                                    tweens: u,
                                    stagger: p
                                })
                            ]
                        })
                    ],
                    stagger: p
                }))
            else if (-1 == e)
                h.push(new TimelineMax({
                    tweens: [
                        new TimelineMax({
                            tweens: [
                                new TimelineMax({
                                    tweens: l.reverse(),
                                    stagger: p
                                }),
                                new TimelineMax({
                                    tweens: u.reverse(),
                                    stagger: p
                                })
                            ]
                        }),
                        new TimelineMax({
                            tweens: c
                        })
                    ],
                    stagger: p * this.halfrows
                }));

            this.timeline = new TimelineMax({
                tweens: h
            });
            r.alpha = 0;
            t.alpha = 0;
            n.alpha = 0;
            return this.timeline
        },
        tweenInWithSlide: function (e) {
            return this.stagesize || (this.stagesize = this.getStageSize()), this.timeline = new TimelineMax({
                tweens: [TweenMax.from(this.$el, 1.4, {
                    x: this.stagesize.w * e,
                    ease: Expo.easeInOut
                }), TweenMax.from(this.$el.scale, 1.4, {
                    x: 1.5,
                    y: 1.5,
                    ease: Expo.easeInOut
                })]
            }), this.timeline
        },
        tweenOutWithSlide: function (e) {
            return this.timeline = new TimelineMax({
                tweens: [TweenMax.to(this.$el, 1.4, {
                    x: -this.stagesize.w * e,
                    ease: Expo.easeInOut
                }), TweenMax.to(this.$el.scale, 1.4, {
                    x: 1.5,
                    y: 1.5,
                    ease: Expo.easeInOut
                })]
            }), this.timeline
        },
        addRows: function () {
            this.stagesize || (this.stagesize = this.getStageSize());
            var e = this.colors,
                t = Math.round(this.stagesize.h / this.numrows),
                n = this.$poster.getChildAt(2),
                i = this.$poster.getChildAt(0),
                r = this.stagesize.x;
            i.alpha = 0;
            for (var s = 0; s < this.numrows; ++s) {
                var a = new PIXI.Sprite(i.texture),
                    o = new PIXI.Graphics,
                    l = new PIXI.Graphics,
                    u = new PIXI.Graphics,
                    c = new PIXI.Sprite;
                o.beginFill(e.black);
                o.drawRect(-r / 2, 0, r, t);
                o.endFill();
                l.beginFill(e.grey, .6);
                l.drawRect(-r / 2, 0, r, t);
                l.endFill();
                u.beginFill(e.white, .6);
                u.drawRect(-r / 2, 0, r, t);
                u.endFill();
                u.blendMode = PIXI.BLEND_MODES.ADD;
                u.alpha = 0;
                a.anchor.x = .5;
                a.anchor.y = .5;
                a.scale.x = this.stagesize.s;
                a.scale.y = this.stagesize.s;
                a.y = -t * s + this.stagesize.y;
                c.y = t * s - this.stagesize.y;
                c.addChild(a);
                c.addChild(l);
                c.addChild(o);
                c.addChild(u);
                c.mask = o;
                n.addChild(c)
            }
        },
        removeRows: function () {
            var e, t = this.$poster.getChildAt(2);
            _.each(t.children, function () {
                e = t.getChildAt(0), t.removeChildAt(0), e.destroy()
            })
        },
        getPoster: function (e) {
            var t = new PIXI.Sprite,
                n = new PIXI.Sprite(e),
                i = new PIXI.Graphics,
                r = new PIXI.Sprite,
                s = new PIXI.extras.TilingSprite(new PIXI.Texture.fromCanvas(this.getTile()));
            return n.anchor.x = .5, n.anchor.y = .5, s.tileScale.x = .5, s.tileScale.y = .5, s.alpha = .15, t.addChild(n), t.addChild(i), t.addChild(r), t.addChild(s), t
        },
        getTile: function () {
            var e = 2,
                t = Math.floor(1 * e),
                n = $("<canvas />")[0],
                i = n.getContext("2d");
            return n.width = 9 * e, n.height = 9 * e, i.fillStyle = "#000", i.fillRect(3 * e, 4 * e, 3 * t, t), i.fillRect(4 * e, 3 * e, t, 3 * t), i.fillRect(1 * e, 1 * e, t, t), i.fillRect(4 * e, 1 * e, t, t), i.fillRect(7 * e, 1 * e, t, t), i.fillRect(1 * e, 7 * e, t, t), i.fillRect(4 * e, 7 * e, t, t), i.fillRect(7 * e, 7 * e, t, t), i.fillRect(1 * e, 4 * e, t, t), i.fillRect(7 * e, 4 * e, t, t), n
        },
        getStageSize: function () {
            var e = window.innerWidth,
                t = window.innerHeight,
                n = 1;
            return n = e / t > this.ratio ? e / this.width : t / this.height, {
                w: e,
                h: t,
                x: e / 2,
                y: t / 2,
                s: n
            }
        },
        resize: function (e) {
            var t = 1,
                n = this.colors,
                i = (this.sort > 0 ? 0 : 1, this.$poster.getChildAt(0)),
                r = this.$poster.getChildAt(1),
                s = this.$poster.getChildAt(3),
                a = e.w,
                o = e.h,
                l = e.x,
                u = e.y;
            this.stagesize = this.getStageSize(), t = e.w / e.h > this.ratio ? e.w / this.width : e.h / this.height, i.scale.x = t, i.scale.y = t, r.clear(), r.beginFill(n.grey, .6), r.drawRect(-l, -u, a, o), s.x = -l, s.y = -u, s.width = a, s.height = o
        },
        destroy: function () {
            var t = this.$poster.getChildAt(0);
            t.destroy(!0);
            var n = this.$poster.getChildAt(2);
            n.destroy(!0), this.$poster.destroy(!0), this.$poster = null, this.$texture = null, this.model = null, this.sort = null, e.prototype.destroy.call(this)
        }
    });
    return n
}]