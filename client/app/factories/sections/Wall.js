const _ = require('underscore');

module.exports = ["ContainerObject", "SoundManager", "Visual", "Leafcta", "Specs", "Events", "$timeout", function (e, t, n, i, r, s, a) {
    function o(t) {
        e.call(this, t);
        this.isRowsTween = !1;
        this.isSideTween = !1;
        this.isSideShow = !1;
        this.repeatDelay = 3;
        this.timer = 0
    }

    o.prototype.constructor = o;
    o.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.collection = this.scope.data.projects.collection;
            this.texStore = this.scope.data.projects.textures;
            this.left = {};
            this.left.model = this.collection[this.getSides().left];
            this.left.$texture = this.getTexture(this.left.model);
            this.left.$visual = new n(this.left.model, this.left.$texture, 1);
            this.left.$cta = new i("view project".toUpperCase(), 1);
            this.left.$caption = new r(this.left.model);
            this.left.$mask = new PIXI.Graphics;
            this.left.$wrap = new PIXI.Sprite;
            this.left.$el = new PIXI.Sprite;
            this.right = {};
            this.right.model = this.collection[this.getSides().right];
            this.right.$texture = this.getTexture(this.right.model);
            this.right.$visual = new n(this.right.model, this.right.$texture, -1);
            this.right.$cta = new i("view project".toUpperCase(), -1);
            this.right.$caption = new r(this.right.model);
            this.right.$mask = new PIXI.Graphics;
            this.right.$wrap = new PIXI.Sprite;
            this.right.$el = new PIXI.Sprite;
            this.left.$texture.baseTexture.source.loop = !0;
            this.right.$texture.baseTexture.source.loop = !0;
            this.$dashline = new PIXI.Graphics;
            this.left.$wrap.addChild(this.left.$visual.render().$el);
            this.left.$wrap.addChild(this.left.$caption.render().$el);
            this.left.$wrap.addChild(this.left.$cta.render().$el);
            this.left.$el.addChild(this.left.$wrap);
            this.left.$el.addChild(this.left.$mask);
            this.right.$wrap.addChild(this.right.$visual.render().$el);
            this.right.$wrap.addChild(this.right.$caption.render().$el);
            this.right.$wrap.addChild(this.right.$cta.render().$el);
            this.right.$el.addChild(this.right.$wrap);
            this.right.$el.addChild(this.right.$mask);
            this.$el.addChild(this.left.$el);
            this.$el.addChild(this.right.$el);
            this.$el.addChild(this.$dashline);
            this.left.$wrap.mask = this.left.$mask;
            this.right.$wrap.mask = this.right.$mask;
            this.left.$caption.$el.rotation = -1.5708;
            this.right.$caption.$el.rotation = -1.5708;
            this.left.$mask.scale.x = .5;
            this.right.$mask.scale.x = .5;
            this.addEvents();
            return this
        },
        getSides: function () {
            var e = parseInt(this.scope.currstate.params.to.page) - 1,
                t = 2 * e,
                n = t + 1;
            if (n > this.collection.length - 1) {
                t = this.collection.length - 2;
                n = this.collection.length - 1
            }
            return {
                left: t,
                right: n
            }
        },
        addEvents: function () {
            this.left.$cta.$el.mouseover = _.bind(function () {
                this.isRowsTween || new TimelineMax({
                    tweens: [
                        TweenMax.to(this.$dashline, 1.1, {
                            x: this.scope.stagesize.x / 2,
                            ease: Expo.easeOut
                        }),
                        this.showSide(this.left, 1, 1.1),
                        this.hideSide(this.right, -1, 1.1),
                        this.left.$cta.toggleState(!0)
                    ]
                })
            }, this);
            this.left.$cta.$el.mouseout = _.bind(function () {
                new TimelineMax({
                    tweens: [
                        TweenMax.to(this.$dashline, 1.1, {
                            x: 0,
                            ease: Expo.easeOut
                        }),
                        this.restoreSide(this.left, 1, 1.1),
                        this.restoreSide(this.right, -1, 1.1),
                        this.left.$cta.toggleState(!1)
                    ]
                })
            }, this);
            this.left.$cta.$el.click = this.left.$cta.$el.tap = _.bind(function () {
                this.scope.$emit(s.OPEN_LEAF, this.left.model)
            }, this);
            this.right.$cta.$el.mouseover = _.bind(function () {
                this.isRowsTween || new TimelineMax({
                    tweens: [
                        TweenMax.to(this.$dashline, 1.1, {
                            x: -this.scope.stagesize.x / 2,
                            ease: Expo.easeOut
                        }),
                        this.showSide(this.right, -1, 1.1),
                        this.hideSide(this.left, 1, 1.1),
                        this.right.$cta.toggleState(!0)
                    ]
                })
            }, this);
            this.right.$cta.$el.mouseout = _.bind(function () {
                new TimelineMax({
                    tweens: [
                        TweenMax.to(this.$dashline, 1.1, {
                            x: 0,
                            ease: Expo.easeOut
                        }),
                        this.restoreSide(this.left, 1, 1.1),
                        this.restoreSide(this.right, -1, 1.1),
                        this.right.$cta.toggleState(!0)
                    ]
                })
            }, this);
            this.right.$cta.$el.click = this.right.$cta.$el.tap = _.bind(function () {
                this.scope.$emit(s.OPEN_LEAF, this.right.model)
            }, this)
        },
        update: function () {
            this.left.$visual && this.left.$visual.update();
            this.right.$visual && this.right.$visual.update()
        },
        tweenIn: function () {
            this.timer = a(_.bind(this.loop, this), 1e3);
            return e.prototype.tweenIn.call(this)
        },
        tweenOut: function () {
            this.timer && a.cancel(this.timer);
            return e.prototype.tweenOut.call(this)
        },
        tweenInWithRows: function () {
            this.isRowsTween = !0, t.play("projects", "wall", !0);
            var e = this.scope.currstate.params.to.dir || 1;
            this.timer = a(_.bind(this.loop, this), 1e3);

            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            this.left.$visual.tweenInWithRows(e),
                            TweenMax.from(this.left.$cta.$el, 1, {
                                x: 1 * (.5 * this.scope.stagesize.x + 180) * e,
                                ease: Expo.easeInOut
                            }),
                            this.left.$caption.tweenIn()
                        ],
                        stagger: .15
                    }),
                    new TimelineMax({
                        tweens: [
                            this.right.$visual.tweenInWithRows(e),
                            TweenMax.from(this.right.$cta.$el, 1, {
                                x: -1 * (.5 * this.scope.stagesize.x + 180) * e,
                                ease: Expo.easeInOut
                            }),
                            this.right.$caption.tweenIn()
                        ],
                        stagger: .15
                    }),
                    TweenMax.from(this.$dashline, 1.1, {
                        alpha: 0,
                        ease: Expo.easeOut
                    })
                ],
                onComplete: _.bind(function () {
                    this.isRowsTween = !1
                }, this)
            })
        },
        tweenOutWithRows: function () {
            this.removeEvents();
            this.timer && a.cancel(this.timer);
            var e = this.scope.currstate.params.to.dir || 1;
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(this.left.$cta.$el, 1, {
                                x: 1 * -(.5 * this.scope.stagesize.x + 180) * e,
                                ease: Expo.easeInOut
                            }),
                            this.left.$visual.tweenOutWithRows(e),
                            this.left.$caption.tweenOut()
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.to(this.right.$cta.$el, 1, {
                                x: -1 * -(.5 * this.scope.stagesize.x + 180) * e,
                                ease: Expo.easeInOut
                            }),
                            this.right.$visual.tweenOutWithRows(e),
                            this.right.$caption.tweenOut()
                        ]
                    })
                ]
            })
        },
        tweenOutToLeaf: function () {
            var e = [],
                t = 0;
            this.removeEvents();
            this.isSideTween = !0;
            this.timer && a.cancel(this.timer);
            this.scope.currstate.params.to.leaf == this.left.model.route && (
                e.push(this.openSide(this.left, 1)),
                e.push(this.closeSide(this.right, -1)), t = 1
            );
            this.scope.currstate.params.to.leaf == this.right.model.route && (
                e.push(this.openSide(this.right, -1)),
                e.push(this.closeSide(this.left, 1)), t = -1
            );
            e.push(
                TweenMax.to(this.$dashline, 1.1, {
                    x: this.scope.stagesize.x * t,
                    ease: Expo.easeInOut
                })
            );
            return new TimelineMax({
                tweens: e,
                onComplete: _.bind(function () {
                    this.isSideTween = !1
                }, this)
            })
        },
        tweenInFromLeaf: function () {
            var e = [],
                t = 0;
            this.isSideTween = !0;
            this.resize(this.scope.stagesize);
            this.timer = a(_.bind(this.loop, this), 1e3);
            this.scope.currstate.params.from.leaf == this.left.model.route && (
                e.push(this.reverseSideOpen(this.left, 1)),
                e.push(this.reverseSideClose(this.right, -1)), t = 1
            );
            this.scope.currstate.params.from.leaf == this.right.model.route && (
                e.push(this.reverseSideOpen(this.right, -1)),
                e.push(this.reverseSideClose(this.left, 1)), t = -1
            );
            e.push(
                TweenMax.from(this.$dashline, 1.1, {
                    x: this.scope.stagesize.x * t,
                    ease: Expo.easeInOut
                })
            )
            return new TimelineMax({
                tweens: e,
                onComplete: _.bind(function () {
                    this.isSideTween = !1
                }, this)
            })
        },
        clearSides: function () {
            this.removeEvents(), new TimelineMax({
                tweens: [TweenMax.to(this.$dashline, .75, {
                    x: 0,
                    ease: Expo.easeOut
                }), this.restoreSide(this.left, 1, .75), this.restoreSide(this.right, -1, .75)]
            })
        },
        showSide: function (e, t, n) {
            var i = [];
            return e.isShow = !0, this.isSideShow = !0, i.push(TweenMax.to(e.$visual.$poster.filters[0], n, {
                gray: 0,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$visual.$poster.getChildAt(1), n, {
                alpha: 0,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$visual.$poster, n, {
                x: .25 * this.scope.stagesize.x * t,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$mask, n, {
                x: .25 * this.scope.stagesize.x * t,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$mask.scale, n, {
                x: .75,
                ease: Expo.easeOut
            })), t > 0 && i.push(TweenMax.to(e.$caption.$el, n, {
                x: this.scope.stagesize.x - e.$caption.height - 50,
                ease: Expo.easeOut
            })), new TimelineMax({
                tweens: i
            })
        },
        hideSide: function (e, t, n) {
            var i = [];
            return e.isHide = !0, i.push(TweenMax.to(e.$visual.$poster.filters[0], n, {
                gray: 1,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$visual.$poster.getChildAt(1), n, {
                alpha: 1,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$visual.$poster, n, {
                x: .25 * -this.scope.stagesize.x * t,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$cta.$el, n, {
                x: .5 * -this.scope.stagesize.x * t,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$mask, n, {
                x: .25 * -this.scope.stagesize.x * t,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$mask.scale, n, {
                x: .25,
                ease: Expo.easeOut
            })), t > 0 && i.push(TweenMax.to(e.$caption.$el, n, {
                x: -e.$caption.height - 50,
                ease: Expo.easeOut
            })), new TimelineMax({
                tweens: i,
                stagger: 0
            })
        },
        openSide: function (e, t) {
            var n = [];
            return n.push(TweenMax.to(e.$visual.$poster.filters[0], 1.1, {
                gray: 0,
                ease: Expo.easeInOut
            })), n.push(TweenMax.to(e.$visual.$poster.getChildAt(1), 1.1, {
                alpha: 0,
                ease: Expo.easeInOut
            })), n.push(TweenMax.to(e.$visual.$poster, 1.1, {
                x: .5 * this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.to(e.$mask, 1.1, {
                x: .5 * this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.to(e.$mask.scale, 1.1, {
                x: 1,
                ease: Expo.easeInOut
            })), n.push(TweenMax.to(e.$cta.$el, 1.1, {
                alpha: 0,
                ease: Expo.easeInOut
            })), n.push(e.$caption.tweenOut()), new TimelineMax({
                tweens: n
            })
        },
        closeSide: function (e, t) {
            var n = [];
            return n.push(TweenMax.to(e.$visual.$poster, 1.1, {
                x: -this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.to(e.$mask, 1.1, {
                x: .5 * -this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.to(e.$cta.$el, 1.1, {
                x: -this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.to(e.$caption.$el, 1.1, {
                x: .5 * -this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.to(e.$mask.scale, 1.1, {
                x: 0,
                ease: Expo.easeInOut
            })), new TimelineMax({
                tweens: n
            })
        },
        reverseSideOpen: function (e, t) {
            var n = [];
            return n.push(TweenMax.fromTo(e.$visual.$poster.filters[0], 1.1, {
                gray: 0
            }, {
                gray: 1,
                ease: Expo.easeInOut
            })), n.push(TweenMax.fromTo(e.$visual.$poster.getChildAt(1), 1.1, {
                alpha: 0
            }, {
                alpha: 1,
                ease: Expo.easeInOut
            })), n.push(TweenMax.from(e.$visual.$poster, 1.1, {
                x: .5 * this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.from(e.$mask, 1.1, {
                x: .5 * this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.from(e.$mask.scale, 1.1, {
                x: 1,
                ease: Expo.easeInOut
            })), n.push(TweenMax.from(e.$cta.$el, 1.1, {
                alpha: 0,
                ease: Expo.easeInOut
            })), n.push(e.$caption.tweenIn()), new TimelineMax({
                tweens: n
            })
        },
        reverseSideClose: function (e, t) {
            var n = [];
            return n.push(TweenMax.from(e.$visual.$poster, 1.1, {
                x: -this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.from(e.$caption.$el, 1.1, {
                x: .5 * -this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.from(e.$cta.$el, 1.1, {
                x: -this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.from(e.$mask, 1.1, {
                x: .5 * -this.scope.stagesize.x * t,
                ease: Expo.easeInOut
            })), n.push(TweenMax.from(e.$mask.scale, 1.1, {
                x: 0,
                ease: Expo.easeInOut
            })), new TimelineMax({
                tweens: n
            })
        },
        restoreSide: function (e, t, n) {
            var i = [];
            return e.isShow = !1, e.isHide = !1, i.push(TweenMax.to(e.$visual.$poster, n, {
                x: 0,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$visual.$poster.filters[0], n, {
                gray: 1,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$visual.$poster.getChildAt(1), n, {
                alpha: 1,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$cta.$el, n, {
                x: 0,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$mask.scale, n, {
                x: .5,
                ease: Expo.easeOut
            })), i.push(TweenMax.to(e.$mask, n, {
                x: 0,
                ease: Expo.easeOut
            })), t > 0 && i.push(TweenMax.to(e.$caption.$el, n, {
                x: .5 * this.scope.stagesize.x - e.$caption.height - 50,
                ease: Expo.easeOut
            })), new TimelineMax({
                tweens: i,
                onStart: _.bind(function () {
                    this.isSideShow = !1
                }, this)
            })
        },
        loop: function () {
            this.loopTimeline = new TimelineMax({
                tweens: [
                    this.left.$cta.getLoop(),
                    this.right.$cta.getLoop()
                ],
                stagger: .2
            });
            this.timer = a(_.bind(this.loop, this), 600 * this.repeatDelay)
        },
        resize: function (t) {
            e.prototype.resize.call(this, t);
            this.$dashline.clear();
            this.$dashline.y = -t.y;
            this.$dashline.beginFill(this.colors.white, .4);
            for (var n = 0; n < Math.round(t.h / 5); ++n)
                this.$dashline.drawRect(-.5, Math.floor(5 * n), Math.floor(1), Math.floor(1));

            this.left.$mask.clear();
            this.left.$mask.beginFill(this.colors.red, .5);
            this.left.$mask.drawRect(-t.x, -t.y, t.w, t.h);
            this.left.isShow || this.left.isHide || (this.left.$caption.$el.x = .5 * t.x - this.left.$caption.height - 50);
            this.left.$caption.$el.y = t.y - 60;
            this.left.$el.x = .5 * -t.x * 1;
            this.left.$visual.resize(t);
            this.right.$mask.clear();
            this.right.$mask.beginFill(this.colors.red, .5);
            this.right.$mask.drawRect(-t.x, -t.y, t.w, t.h);
            this.right.$caption.$el.x = .5 * t.x - this.right.$caption.height - 50;
            this.right.$caption.$el.y = t.y - 60;
            this.right.$el.x = .5 * -t.x * -1;
            this.right.$visual.resize(t)
        },
        removeEvents: function () {
            this.left.$cta.click = this.left.$cta.tap = null;
            this.right.$cta.click = this.right.$cta.tap = null;
            this.left.$cta.$el.mouseover = null;
            this.left.$cta.$el.mouseout = null;
            this.right.$cta.$el.mouseover = null;
            this.right.$cta.$el.mouseout = null
        },
        destroy: function () {
            this.removeEvents();
            this.left.$visual.destroy();
            this.left.$cta.destroy();
            this.left.$caption.destroy();
            this.left.$mask.destroy();
            this.left.$wrap.destroy();
            this.left.$el.destroy();
            this.right.$visual.destroy();
            this.right.$cta.destroy();
            this.right.$caption.destroy();
            this.right.$mask.destroy();
            this.right.$wrap.destroy();
            this.right.$el.destroy();
            this.left.model = null;
            this.left.$texture = null;
            this.left.$visual = null;
            this.left.$cta = null;
            this.left.$caption = null;
            this.left.$mask = null;
            this.left.$wrap = null;
            this.left.$el = null;
            this.right.model = null;
            this.right.$texture = null;
            this.right.$visual = null;
            this.right.$cta = null;
            this.right.$caption = null;
            this.right.$mask = null;
            this.right.$wrap = null;
            this.right.$el = null;
            this.left = null;
            this.right = null;
            e.prototype.destroy.call(this)
        }
    });
    return o
}]