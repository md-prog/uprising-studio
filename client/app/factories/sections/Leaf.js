const _ = require('underscore')

module.exports = ["ContainerObject", "SoundManager", "Visual", "Caption", "Utils", "Events", "Const", function (e, t, n, i, r, s, a) {
    function o(t) {
        e.call(this, t)
    }

    o.prototype.constructor = o;
    o.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.texStore = this.scope.data.projects.textures;
            this.collection = this.scope.data.projects.collection;
            this.model = _.where(this.collection, {
                route: this.scope.currstate.params.to.leaf
            })[0];
            this.$texture = new PIXI.Texture.fromVideo(this.getTextureSource(this.model));
            this.$texture.baseTexture.source.loop = !0;
            this.$visual = new n(this.model, this.$texture, 0);
            this.$background = new PIXI.Graphics;
            this.$caption = new i(this.model);
            this.$mask = new PIXI.Graphics;
            this.$el.addChild(this.$background);
            this.$el.addChild(this.$visual.render().$el);
            this.$el.addChild(this.$caption.render().$el);
            this.$el.addChild(this.$mask);
            this.$visual.$poster.getChildAt(1).alpha = 0;
            this.$visual.$poster.filters[0].gray = 0;
            this.$visual.$el.mask = this.$mask;
            this.addEvents();
            return this
        },
        addEvents: function () {
            this.$caption.$cta.click = this.$caption.$cta.tap = _.bind(function () {
                this.scope.$emit(s.OPEN_LEAF_CONTENT, this.model)
            }, this)
        },
        ready: function () {
            if (e.prototype.ready.call(this), !this.scope) return this;
            var t = this.scope.currstate.to,
                n = this.scope.currstate.from;
            n.data && n.data.type != a.PagesTypes.MENU && n.data && n.data.type != a.PagesTypes.LEAF && t.data && t.data.type == a.PagesTypes.LEAF && this.$caption.tweenInWithSlide(-1);
            return this;
        },
        update: function () {
            this.$visual && this.$visual.update()
        },
        tweenIn: function () {
            return r.isPhone() ? e.prototype.tweenIn.call(this) : new TimelineMax({
                tweens: []
            })
        },
        tweenOut: function () {
            return this.removeEvents(), r.isPhone() ? e.prototype.tweenOut.call(this) : new TimelineMax({
                tweens: [TweenMax.set(this.$background, {
                    alpha: 0
                }), TweenMax.set(this.$visual.$el, {
                    alpha: 0
                }), this.$caption.tweenOutWithSlide(1)]
            })
        },
        tweenInWithSlide: function () {
            this.resize(this.scope.stagesize), t.play("projects", "leaf", !0);
            var e = this.scope.currstate.params.to.dir || 1;
            return new TimelineMax({
                tweens: [new TimelineMax({
                    tweens: [TweenMax.from(this.$mask, 1.4, {
                        x: this.scope.stagesize.w * e,
                        ease: Expo.easeInOut
                    }), TweenMax.from(this.$mask.scale, 1.4, {
                        x: .6,
                        ease: Expo.easeInOut
                    }), this.$visual.tweenInWithSlide(e)]
                }), this.$caption.tweenInWithSlide(e)],
                stagger: .4
            })
        },
        tweenOutWithSlide: function () {
            this.removeEvents();
            var e = this.scope.currstate.params.to.dir || 1;
            return new TimelineMax({
                tweens: [
                    new TimelineMax({
                        tweens: [
                            TweenMax.set(this.$background, {
                                alpha: 1
                            }),
                            TweenMax.to(this.$background, 1.4, {
                                x: -this.scope.stagesize.w * e,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.to(this.$mask, 1.4, {
                                x: -this.scope.stagesize.w * e,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.to(this.$mask.scale, 1.4, {
                                x: .6,
                                ease: Expo.easeInOut
                            }),
                            this.$visual.tweenOutWithSlide(e)
                        ]
                    }),
                    this.$caption.tweenOutWithSlide(e)
                ],
                stagger: .15
            })
        },
        tweenInFromMenu: function () {
            return new TimelineMax({
                tweens: [
                    TweenMax.set(this.$background, {
                        alpha: 0
                    }),
                    TweenMax.from(this.$el, 1.5, {
                        alpha: 0,
                        ease: Expo.easeOut
                    }),
                    TweenMax.from(this.$el.scale, 1.5, {
                        x: 1.5,
                        y: 1.5,
                        ease: Expo.easeOut
                    })
                ]
            })
        },
        tweenOutToMenu: function () {
            this.removeEvents();
            return new TimelineMax({
                tweens: [
                    TweenMax.set(this.$background, {
                        alpha: 0
                    }),
                    TweenMax.to(this.$el, .75, {
                        alpha: 0,
                        ease: Cubic.easeInOut
                    }),
                    TweenMax.to(this.$el.scale, .75, {
                        x: 1.5,
                        y: 1.5,
                        ease: Cubic.easeInOut
                    })
                ]
            })
        },
        resize: function (t) {
            e.prototype.resize.call(this, t);
            var n = 50,
                i = 20;
            this.$visual && this.$visual.resize(t);
            this.$background.clear();
            this.$background.beginFill(this.colors.red);
            this.$background.drawRect(-t.x, -t.y, t.w, t.h);
            this.$caption.$el.x = -t.x + n;
            this.$caption.$el.y = t.y - i;
            this.$mask.clear();
            this.$mask.beginFill(this.colors.red);
            this.$mask.drawRect(-t.x, -t.y, t.w, t.h)
        },
        removeEvents: function () {
            this.$caption.$cta.click = this.$caption.$cta.tap = null
        },
        destroy: function () {
            this.removeEvents();
            this.$background.destroy();
            this.$visual.destroy();
            this.$mask.destroy();
            this.$background = null;
            this.$texture = null;
            this.$visual = null;
            this.$mask = null;
            e.prototype.destroy.call(this)
        }
    });

    return o;
}]