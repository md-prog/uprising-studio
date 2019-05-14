const _ = require('underscore')

module.exports = ["DisplayObject", "ThreeManager", "SoundManager", "Aboutintro", "Identity", "Clients", "Holdrag", "Utils", "Events", "Math2", function (DisplayObject, ThreeManager, SoundManager, Aboutintro, Identity, Clients, Holdrag, Utils, Events, Math2) {
    function c(t) {
        DisplayObject.call(this), this.scope = t || {}
    }

    c.prototype.constructor = c;
    c.prototype = _.extend(Object.create(DisplayObject.prototype), {
        render: function () {
            DisplayObject.prototype.render.call(this);
            var n = ThreeManager.getTexture("infos"),
                r = this.scope.data.infos.clients;

            this.$base = new PIXI.Graphics;
            this.$el.addChild(this.$base);
            this.$scene = new PIXI.Sprite(n);
            this.$scene.anchor.x = .5;
            this.$scene.anchor.y = .5;
            this.$intro = new Aboutintro;
            this.$clients = new Clients(r);
            this.$lines = new PIXI.Sprite;
            this.$baseline = new PIXI.Graphics;
            this.$tweenline = new PIXI.Sprite;
            this.$tweenlineGraph = new PIXI.Graphics;
            this.$baseline.beginFill(this.colors.white, .2);
            this.$baseline.drawRect(0, 0, 1, 80);
            this.$tweenlineGraph.beginFill(this.colors.white, 1);
            this.$tweenlineGraph.drawRect(0, 0, 1, 80);
            this.$tweenlineGraph.scale.y = .2;
            this.$mouselabels = new PIXI.Sprite;
            this.$mouselabel1 = new PIXI.Text(
                "Discover the team".toUpperCase(), {
                    fontFamily: "montser-reg",
                    fontSize: 9,
                    fill: this.colors.white
                }
            );
            this.$mouselabel2 = new PIXI.Text(
                "Clients List".toUpperCase(), {
                    fontFamily: "montser-reg",
                    fontSize: 9,
                    fill: this.colors.white
                }
            );
            this.$mouselabelsMask = new PIXI.Graphics;
            this.$mouselabelsMask.beginFill(this.colors.white, .5);
            this.$mouselabelsMask.drawRect(-5, -5, this.$mouselabel1.width + 10, this.$mouselabel1.height + 10);
            this.$mouselabel2.x = this.$mouselabel1.width + 10;
            this.$holder = new PIXI.Sprite;
            this.$holdrag = new Holdrag("Hold down & drag to discover the team");
            this.$lines.addChild(this.$baseline);
            this.$lines.addChild(this.$tweenline);
            this.$tweenline.addChild(this.$tweenlineGraph);
            this.$mouselabels.addChild(this.$mouselabel1);
            this.$mouselabels.addChild(this.$mouselabel2);
            this.$mouselabels.addChild(this.$mouselabelsMask);
            this.$mouselabels.mask = this.$mouselabelsMask;
            this.$el.addChild(this.$scene);
            this.$el.addChild(this.$holder);
            this.$el.addChild(this.$intro.render().$el);
            this.$el.addChild(this.$clients.render().$el);
            this.$el.addChild(this.$holdrag.render().$el);
            this.$el.addChild(this.$mouselabels);
            this.$el.addChild(this.$lines);
            this.$scene.filters = [this.getGlitch()];
            this.$el.interactive = !0;

            return this
        },
        setIdentity: function (e) {
            var t = [];
            this.identity && t.push(this.identity.tweenOut());
            if (e) {
                this.identity = new Identity(e);
                this.$holder.addChild(this.identity.render().$el);
                t.push(this.identity.tweenIn())
            } else {
                this.identity = null;
            }
            SoundManager.play("about", "copytween", !0);
            return new TimelineMax({
                tweens: t,
                stagger: .15
            })
        },
        ready: function () {
            return this
        },
        update: function () {
            this.$scene && this.$scene.texture.update();
            this.$scene.filters[0].seed = .25 * Math.random()
        },
        setState: function (e) {
            var i = [],
                r = e.params.to.page,
                s = ThreeManager.getStore().infos.scene;
            this.timeline && this.timeline.kill();
            this.initState && SoundManager.play("about", "scroll", !0);
            if ("intro" == r) {
                i.push(s.tweenOut());
                i.push(this.$intro.tweenIn());
                i.push(this.$clients.tweenOut());
                i.push(TweenMax.to(this.$holdrag.$mask.scale, .25, {
                    x: 0,
                    ease: Cubic.easeInOut
                }));
                i.push(new TimelineMax({
                    tweens: [new TimelineMax({
                        tweens: [TweenMax.to(this.$mouselabel2, .8, {
                            x: this.$mouselabel1.width + 10,
                            ease: Expo.easeInOut
                        }), TweenMax.to(this.$mouselabel1, .8, {
                            x: 0,
                            ease: Expo.easeInOut
                        })],
                        stagger: .1
                    }), new TimelineMax({
                        tweens: [TweenMax.to(this.$baseline, 1, {
                            y: 0,
                            ease: Expo.easeInOut
                        }), TweenMax.to(this.$tweenline, 1, {
                            y: 0,
                            ease: Expo.easeInOut
                        })],
                        stagger: .12
                    })],
                    stagger: .1
                }));
                this.loopTimeline && this.loopTimeline.kill();
                this.loopTimeline = new TimelineMax({
                    tweens: [new TimelineMax({
                        tweens: [TweenMax.fromTo(this.$tweenlineGraph, 1, {
                            y: 0
                        }, {
                            y: 0,
                            ease: Expo.easeOut
                        }), TweenMax.fromTo(this.$tweenlineGraph.scale, 1, {
                            y: 0
                        }, {
                            y: .2,
                            ease: Expo.easeOut
                        })]
                    }), new TimelineMax({
                        tweens: [TweenMax.to(this.$tweenlineGraph.scale, 1, {
                            y: 1,
                            ease: Expo.easeInOut
                        }), TweenMax.to(this.$tweenlineGraph, 1, {
                            y: 100,
                            ease: Expo.easeInOut
                        })],
                        stagger: .35
                    })],
                    stagger: 1.35,
                    repeat: -1
                });
                SoundManager.play("about", "introtween", !0)
            } else {
                if ("team" == r) {
                    i.push(s.tweenIn());
                    i.push(this.$intro.tweenOut());
                    i.push(this.$clients.tweenOut());
                    i.push(TweenMax.to(this.$holdrag.$mask.scale, .55, {
                        x: 1,
                        delay: .15,
                        ease: Cubic.easeInOut
                    }));
                    i.push(new TimelineMax({
                        tweens: [
                            new TimelineMax({
                                tweens: [
                                    TweenMax.to(this.$mouselabel1, .8, {
                                        x: -this.$mouselabel1.width - 10,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.to(this.$mouselabel2, .8, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })
                                ],
                                stagger: .1
                            }),
                            new TimelineMax({
                                tweens: [TweenMax.to(this.$tweenline, 1, {
                                    y: 100,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$baseline, 1, {
                                    y: 100,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .12
                            })
                        ],
                        stagger: .1
                    }));
                    this.loopTimeline && this.loopTimeline.kill();
                } else {
                    if ("clients" == r) {
                        i.push(s.tweenOut());
                        i.push(this.$intro.tweenOut());
                        i.push(this.$clients.tweenIn());
                        i.push(TweenMax.to(this.$holdrag.$mask.scale, .25, {
                            x: 0,
                            ease: Cubic.easeInOut
                        }));
                        i.push(new TimelineMax({
                            tweens: [
                                new TimelineMax({
                                    tweens: [
                                        TweenMax.to(this.$mouselabel1, .8, {
                                            x: -this.$mouselabel1.width - 10,
                                            ease: Expo.easeInOut
                                        }),
                                        TweenMax.to(this.$mouselabel2, .8, {
                                            x: -this.$mouselabel1.width - 10,
                                            ease: Expo.easeInOut
                                        })
                                    ],
                                    stagger: .1
                                }),
                                new TimelineMax({
                                    tweens: [
                                        TweenMax.to(this.$tweenline, 1, {
                                            y: 100,
                                            ease: Expo.easeInOut
                                        }),
                                        TweenMax.to(this.$baseline, 1, {
                                            y: 100,
                                            ease: Expo.easeInOut
                                        })
                                    ],
                                    stagger: .12
                                })
                            ],
                            stagger: .1
                        }));
                        this.loopTimeline && this.loopTimeline.kill();
                        SoundManager.play("about", "introtween", !0)
                    }
                }
            }
            this.initState = !0;
            this.timeline = new TimelineMax({
                tweens: i
            });
            return this.timeline;
        },
        getGlitch: function () {
            var e = new PIXI.filters.GlitchFilter;
            e.resolution = Utils.getDpr();
            e.angle = Math2.randFloat(-Math.PI, Math.PI);
            e.distortionX = -1;
            e.distortionY = -1;
            e.amount = .0015;
            e.padding = 0;
            e.seedX = 0;
            e.seedY = 0;
            e.byp = 0;
            return e
        },
        tweenIn: function () {
            return new TimelineMax({
                tweens: [TweenMax.from(this.$el, 1.5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), TweenMax.from(this.$el.scale, 1.5, {
                    x: 1.5,
                    y: 1.5,
                    ease: Expo.easeOut
                })]
            })
        },
        tweenOut: function () {
            this.$holdrag.kill();
            return new TimelineMax({
                tweens: [TweenMax.to(this.$el.scale, .75, {
                    x: 1.25,
                    y: 1.25,
                    ease: Cubic.easeInOut
                }), TweenMax.to(this.$el, .75, {
                    alpha: 0,
                    ease: Cubic.easeInOut
                })]
            })
        },
        tweenInFromMenu: function () {
            return this.tweenIn()
        },
        tweenOutToMenu: function () {
            return this.tweenOut()
        },
        resize: function (e) {
            var n = 1,
                dpr = ThreeManager.getStore().infos.scene.dpr;
            this.$base.clear();
            this.$base.beginFill(this.colors.red, 0);
            this.$base.drawRect(-e.x, -e.y, e.w, e.h);
            this.$el.x = e.x;
            this.$el.y = e.y;
            this.$holder.x = -e.x;
            this.$intro.resize(e);
            this.$clients.resize(e);
            this.$holdrag.$el.x = 0;
            this.$holdrag.$el.y = e.y / 1.5;
            this.$lines.y = e.y - 80;
            this.$mouselabels.rotation = -1.5708;
            this.$mouselabels.x = -e.x + 54;
            this.$mouselabels.y = e.y - 80;
            this.identity && this.identity.resize(e);
            n = e.w / e.h > 1280 / 720 ? e.w / 1280 : e.h / 720;
            this.$scene.scale.x = n / dpr;
            this.$scene.scale.y = n / dpr;
        },
        destroy: function () {
            ThreeManager.clear("infos");
            this.loopTimeline && this.loopTimeline.kill();
            this.identity && this.identity.destroy();
            this.$base.destroy();
            this.$holder.destroy();
            this.$intro.destroy();
            this.$clients.destroy();
            this.$holdrag.destroy();
            this.$lines.destroy();
            this.$mouselabel1.destroy(!0);
            this.$mouselabel2.destroy(!0);
            this.$mouselabels.destroy();
            this.$mouselabel1 = null;
            this.$mouselabel2 = null;
            this.$mouselabels = null;
            this.$holdrag = null;
            this.identity = null;
            this.$holder = null;
            this.$clients = null;
            this.$intro = null;
            this.$scene = null;
            this.$lines = null;
            this.$base = null;
            DisplayObject.prototype.destroy.call(this)
        }
    });
    return c
}]