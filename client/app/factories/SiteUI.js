const _ = require('underscore')

module.exports = ["DisplayObject", "UIfactory", "Events", "Math2", "Utils", "Const", "$timeout", function (e, t, n, i, r, s, a) {
    function o(t) {
        e.call(this);
        this.intro = !0;
        this.menuopen = !1;
        this.scope = t;
        this.collections = {
            sections: this.scope.data.sections.collection,
            projects: this.scope.data.projects.collection
        }
    }
    o.prototype.constructor = o;
    o.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.factory = new t(this.collections);
            this.$hamb = this.factory.getHamb();
            this.$bread = this.factory.getBread();
            this.$logo = this.factory.getLogo();
            this.$share = this.factory.getShare();
            this.$audio = this.factory.getAudio();
            this.$foo = this.factory.getFooter();
            this.$nav = this.factory.getQuadNav();
            this.$scroller = this.factory.getScroller();
            this.$numnav = this.factory.getNumnav();
            this.$back = this.factory.getBack();
            this.$mouse = this.factory.getMouse();
            this.$el.addChild(this.$hamb.render().$el);
            this.$el.addChild(this.$bread.render().$el);
            this.$el.addChild(this.$logo);
            this.$el.addChild(this.$share);
            this.$el.addChild(this.$audio);
            this.$el.addChild(this.$foo);
            this.$el.addChild(this.$nav);
            this.$el.addChild(this.$scroller);
            this.$el.addChild(this.$numnav);
            this.$el.addChild(this.$back);
            this.$el.addChild(this.$mouse);
            this.$el.alpha = 0;
            this.addEvents();
            return this
        },
        addEvents: function () {
            this.$hamb.$el.click = this.$hamb.$el.tap = _.bind(function (e) {
                this.scope.$emit(n.OPEN_MENU)
            }, this);
            _.each(this.$nav.$child.children, function (e, t) {
                e.click = e.tap = _.bind(function (e) {
                    var t = this.collections.sections[_.indexOf(this.$nav.$child.children, e.target)];
                    this.scope.$emit(n.CHANGE_STATE, t)
                }, this)
            }, this);
            this.$back.$child.$el.click = this.$back.$child.$el.tap = _.bind(function (e) {
                this.scope.$emit(n.BACK)
            }, this);
            this.$numnav.$child.$prev.click = this.$numnav.$child.$prev.tap = _.bind(function () {
                this.scope.direction = {
                    value: -1,
                    type: s.DirsTipes.HORIZ
                }, this.scope.$apply()
            }, this);
            this.$numnav.$child.$next.click = this.$numnav.$child.$next.tap = _.bind(function () {
                this.scope.direction = {
                    value: 1,
                    type: s.DirsTipes.HORIZ
                }, this.scope.$apply()
            }, this);
            var e = this.$share.getChildAt(2),
                t = this.$share.getChildAt(3);
            e.click = e.tap = _.bind(function () {
                this.scope.$emit(n.SHARE_SITE, "fb")
            }, this);
            t.click = t.tap = _.bind(function () {
                this.scope.$emit(n.SHARE_SITE, "tw")
            }, this);
            this.$audio.click = this.$audio.tap = _.bind(function () {
                this.scope.$emit(n.TOGGLE_SOUNDS);
                this.$audio.toggleMute()
            }, this);
            this.$foo.cookie.click = this.$foo.cookie.tap = _.bind(function (e) {
                this.scope.$emit(n.OPEN_COOKIE)
            }, this)
        },
        setState: function (e) {
            var t = e.to.data.type;
            t == s.PagesTypes.MENU && this.setMenuState(e);
            t == s.PagesTypes.INDEX ? this.setIndexState(e) : t == s.PagesTypes.WALL ? this.setWallState(e) : t == s.PagesTypes.LEAF ? this.setLeafState(e) : t == s.PagesTypes.INFOS ? this.setInfosState(e) : t == s.PagesTypes.CLEAF && this.setCLeafState(e)
        },
        setMenuState: function (e) {
            var t = [];
            this.menuopen = !0;
            this.$bread.update("");
            t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                x: 0,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                y: 60,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                x: 80,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$scroller, .75, {
                alpha: 0,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$nav.$child, .75, {
                y: 40,
                ease: Expo.easeInOut
            }));
            t.push(this.$back.$child.setState(1));

            return new TimelineMax({
                tweens: t
            })
        },
        setIndexState: function (e) {
            var t = [],
                n = _.indexOf(this.collections.sections, e.model);
            this.$scroller.$child.update(n);
            this.$bread.update(e.model.bread.toUpperCase());
            _.each(this.$nav.$child.children, function (e, t) {
                TweenMax.to(e.children[2], .5, {
                    alpha: t == n ? 1 : 0,
                    ease: Expo.easeInOut
                }), TweenMax.to(e, .5, {
                    rotation: t == n ? "+=" + Math.PI / 2 : 0,
                    ease: Expo.easeInOut
                })
            });
            t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                x: 1,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                y: 60,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                x: 80,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$scroller, .75, {
                alpha: 1,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$nav.$child, .75, {
                y: 0,
                ease: Expo.easeInOut
            }));
            t.push(this.$back.$child.setState(0));
            return new TimelineMax({
                tweens: t
            })
        },
        setWallState: function (e) {
            var t = [];
            this.$bread.update(e.to.data.parent.toUpperCase());
            t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                x: 1,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                y: 0,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                x: 80,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$scroller, .75, {
                alpha: 0,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$nav.$child, .75, {
                y: 40,
                ease: Expo.easeInOut
            }));
            t.push(this.$back.$child.setState(1));
            return new TimelineMax({
                tweens: t
            })
        },
        setLeafState: function (e) {
            var t = this.collections.projects.length,
                n = this.getIndexFromState(e) + 1,
                i = this.scope.currstate.params.to.dir || 1,
                s = [];
            this.$numnav.$child.update(n, t, i);
            this.$bread.update(e.to.data.parent.toUpperCase());
            s.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                x: 1,
                ease: Expo.easeInOut
            }));
            s.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                y: 60,
                ease: Expo.easeInOut
            }));
            s.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                x: 0,
                ease: Expo.easeInOut
            }));
            s.push(TweenMax.to(this.$scroller, .75, {
                alpha: 0,
                ease: Expo.easeInOut
            }));
            s.push(TweenMax.to(this.$nav.$child, .75, {
                y: 40,
                ease: Expo.easeInOut
            }));
            r.isPhone() ? s.push(this.$back.$child.setState(1)) : s.push(this.$back.$child.setState(2));
            return new TimelineMax({
                tweens: s
            })
        },
        setInfosState: function (e) {
            var t = [],
                n = "clients" == e.params.to.page ? 60 : 0;
            this.$bread.update(e.to.data.parent.toUpperCase());
            t.push(TweenMax.to(this.$back.$child.$el, .75, {
                y: 0,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                x: 1,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                y: n,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                x: 80,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$scroller, .75, {
                alpha: 0,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$nav.$child, .75, {
                y: 40,
                ease: Expo.easeInOut
            }));
            t.push(this.$back.$child.setState(1));
            return new TimelineMax({
                tweens: t
            })
        },
        setCLeafState: function (e) {
            var t = [];
            this.$bread.update(e.to.data.parent.toUpperCase());
            t.push(TweenMax.to(this.$back.$child.$el, .75, {
                y: 0,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                x: 1,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                y: 60,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                x: 80,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$scroller, .75, {
                alpha: 0,
                ease: Expo.easeInOut
            }));
            t.push(TweenMax.to(this.$nav.$child, .75, {
                y: 40,
                ease: Expo.easeInOut
            }));
            t.push(this.$back.$child.setState(1));
            return new TimelineMax({
                tweens: t
            })
        },
        getIndexFromState: function (e) {
            return _.indexOf(this.collections.projects, _.where(this.collections.projects, {
                route: e.params.to.leaf
            })[0])
        },
        tweenIn: function () {
            return this.intro ? new TimelineMax({
                tweens: [
                    TweenMax.to(this.$el, .125, {
                        alpha: 1,
                        ease: Expo.easeOut
                    }),
                    new TimelineMax({
                        tweens: [
                            new TimelineMax({
                                tweens: [
                                    TweenMax.from(this.$hamb.$topline.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    }),
                                    TweenMax.from(this.$hamb.$topline, .45, {
                                        x: 250,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            }),
                            new TimelineMax({
                                tweens: [
                                    TweenMax.from(this.$hamb.$botline.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })
                                ]
                            })
                        ],
                        stagger: .1
                    }),
                    this.$bread.tweenIn(),
                    new TimelineMax({
                        tweens: [
                            TweenMax.from(this.$logo.getChildAt(0), .75, {
                                y: 50,
                                ease: Expo.easeInOut
                            })
                        ]
                    }),
                    new TimelineMax({
                        tweens: [
                            TweenMax.from(this.$share.getChildAt(0).scale, .75, {
                                x: 0,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(this.$share.getChildAt(3), .75, {
                                y: 5,
                                alpha: .25,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(this.$share.getChildAt(2), .75, {
                                y: 5,
                                alpha: .25,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(this.$share.getChildAt(1), .75, {
                                y: 5,
                                alpha: .25,
                                ease: Expo.easeInOut
                            })
                        ],
                        stagger: .075
                    }),
                    TweenMax.from(this.$share.getChildAt(1), .75, {
                        y: 0,
                        alpha: 0,
                        ease: Expo.easeInOut
                    }),
                    TweenMax.from(this.$audio.getChildAt(0), .75, {
                        y: 50,
                        alpha: .25,
                        ease: Expo.easeInOut
                    }),
                    TweenMax.from(this.$foo.getChildAt(0).getChildAt(0).scale, .9, {
                        x: 0,
                        ease: Expo.easeInOut
                    }), this.$scroller.$child.tweenIn(), new TimelineMax({
                        tweens: [
                            TweenMax.from(this.$nav.$child.getChildAt(0), .75, {
                                y: 40,
                                rotation: 1 * -Math.PI,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(this.$nav.$child.getChildAt(1), .75, {
                                y: 40,
                                rotation: 1 * -Math.PI,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(this.$nav.$child.getChildAt(2), .75, {
                                y: 40,
                                rotation: 1 * -Math.PI,
                                ease: Expo.easeInOut
                            }),
                            TweenMax.from(this.$nav.$child.getChildAt(3), .75, {
                                y: 40,
                                rotation: 1 * -Math.PI,
                                ease: Expo.easeInOut
                            })
                        ],
                        stagger: .05
                    })
                ],
                stagger: .15,
                onStart: _.bind(function () {
                    this.intro = !1
                }, this)
            }) : new TimelineMax({
                tweens: []
            })
        },
        resize: function (e) {
            var t = this.scope.currstate;
            this.deafultResize(e, t), e.w < 768 && this.phoneResize(e, t)
        },
        deafultResize: function (e, t) {
            var n = 50,
                i = 20;
            this.$hamb.$el.x = 0;
            this.$hamb.$el.y = i;
            this.$bread.$el.x = Math.round(n + 100);
            this.$bread.$el.y = Math.round(i + 1);
            this.$logo.x = Math.round(e.w - 86 - n);
            this.$logo.y = Math.round(i + 2);
            this.$share.x = Math.round(e.w - 50 - n);
            this.$share.y = Math.round(e.h - 2);
            this.$audio.x = Math.round(e.w - 160);
            this.$audio.y = Math.round(e.h - 32);
            this.$foo.x = Math.round(e.w - 378);
            this.$foo.y = Math.round(e.h - 7 - i);
            this.$nav.x = Math.round(e.x - 35);
            this.$nav.y = Math.round(e.h - 4 - i);
            this.$scroller.$child.resize(e);
            this.$numnav.x = Math.round(e.w - 55);
            this.$numnav.y = Math.round(e.y);
            this.$mouse.x = n + 9;
            this.$mouse.y = Math.round(e.h - 40);
            this.$back.x = Math.round(e.x - 28);
            this.$back.y = 0;
            this.$scroller.visible = !0;
            this.$mouse.visible = !0;
            this.$share.visible = !0;
            this.$foo.visible = !0;
        },
        phoneResize: function (e, t) {
            var n = 25;
            this.$hamb.$el.x = -n;
            this.$logo.x += n;
            this.$numnav.x += n;
            this.$bread.$el.x -= 2 * n;
            this.$scroller.visible = !1;
            this.$mouse.visible = !1;
            this.$share.visible = !1;
            this.$foo.visible = !1
        }
    });
    return o
}]