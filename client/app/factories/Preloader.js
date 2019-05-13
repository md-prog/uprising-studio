module.exports =  ["DisplayObject", "Text", "Math2", "Utils", "$q", "$timeout", "Const", function (e, t, n, i, r, s, a) {
    function o(e) {
        var t = e.type,
            n = e.scope;
        return t == a.LoaderTypes.POLY ? new l(n) : t == a.LoaderTypes.LINE ? new u(n) : void 0;
    }

    function l(t) {
        e.call(this)
    }

    function u(t) {
        e.call(this), this.scope = t
    }
    return o.prototype.constructor = o, o.prototype = _.extend(Object.create(e.prototype), {
        resize: function (e) {
            this.$el.x = e.x, this.$el.y = e.y
        },
        destroy: function () {
            e.prototype.destroy.call(this)
        }
    }), l.prototype.constructor = l, l.prototype = _.extend(Object.create(o.prototype), {
        render: function () {
            var e, r, a = (i.getDpr(), this.colors),
                o = 7;
            this.$base = new PIXI.Graphics, this.$loaderShape = new PIXI.Sprite, this.$loaderShape.$points = new PIXI.Sprite, this.$loaderShape.$vectors = new PIXI.Graphics, this.$loaderShape.rotation = -1.0472, this.$loadedShape = new PIXI.Sprite, this.$loadedShape.$points = new PIXI.Sprite, this.$loadedShape.$vectors = new PIXI.Graphics, this.$loadedShape.rotation = -1.0472, this.$loadedShape.alpha = 0, this.$text = new t("00%", {
                fontFamily: "din-condensed-web",
                fontSize: 21,
                fill: a.red,
                letterSpacing: 0
            }), this.$text.$el.x = -this.$text.width / 2 + 5, this.$text.$el.y = -this.$text.height / 2, this.$text.wave = {
                amplitude: {
                    x: n.randFloat(4, 5),
                    y: n.randFloat(4, 5)
                },
                period: {
                    x: n.randFloat(40, 80),
                    y: n.randFloat(50, 70)
                }
            }, this.$mask = new PIXI.Graphics, this.$mask.moveTo(0, 0), this.$mask.beginFill(a.black), this.$mask.arc(0, 0, 95, 0, 2 * Math.PI * 0), this.$mask.rotation = Math.random(), this.$loadedShape.mask = this.$mask, this.$loaderShape.addChild(this.$loaderShape.$points), this.$loaderShape.addChild(this.$loaderShape.$vectors), this.$loadedShape.addChild(this.$loadedShape.$points), this.$loadedShape.addChild(this.$loadedShape.$vectors), this.$el.addChild(this.$base), this.$el.addChild(this.$text.$el), this.$el.addChild(this.$loaderShape), this.$el.addChild(this.$loadedShape), this.$el.addChild(this.$mask);
            for (var l = o; l > 0; --l) e = new PIXI.Graphics, e.beginFill(a.white), e.drawCircle(0, 0, 2), r = new PIXI.Graphics, r.beginFill(a.red), r.drawCircle(0, 0, 2), e.wave = r.wave = {
                amplitude: {
                    x: n.randFloat(7, 9),
                    y: n.randFloat(7, 9)
                },
                period: {
                    x: n.randFloat(40, 80),
                    y: n.randFloat(50, 70)
                }
            }, e.r = 0, r.r = 0, this.$loaderShape.$points.addChild(e), this.$loadedShape.$points.addChild(r);
            return this.tweener = {
                perc: 0,
                r: 0
            }, this.$el.alpha = 0, this.angle = 0, s(_.bind(this.startLoop, this), 300), this
        },
        startLoop: function () {
            var e = [],
                t = [],
                i = 2 * Math.PI / this.$loaderShape.$points.children.length;
            _.each(this.$loaderShape.$points.children, function (t, n) {
                e.push(TweenMax.fromTo(t, .75, {
                    r: 180
                }, {
                    r: 80,
                    ease: Cubic.easeInOut
                }))
            }, this), _.each(this.$loadedShape.$points.children, function (e, n) {
                t.push(TweenMax.fromTo(e, .75, {
                    r: 180
                }, {
                    r: 80,
                    ease: Cubic.easeInOut
                }))
            }, this), this.loop = TweenMax.to({
                value: 0
            }, 1, {
                value: 1,
                repeat: -1,
                yoyo: !0,
                ease: Linear.easeNone,
                onUpdate: _.bind(function () {
                    _.each(this.$loaderShape.$points.children, function (e, t) {
                        e.x = n.swing(e.wave.amplitude, e.wave.period, this.angle, e.r * Math.cos(i * t)).x, e.y = n.swing(e.wave.amplitude, e.wave.period, this.angle, e.r * Math.sin(i * t)).y
                    }, this), _.each(this.$loadedShape.$points.children, function (e, t) {
                        e.x = n.swing(e.wave.amplitude, e.wave.period, this.angle, e.r * Math.cos(i * t)).x, e.y = n.swing(e.wave.amplitude, e.wave.period, this.angle, e.r * Math.sin(i * t)).y
                    }, this), this.$text.$el.x = -this.$text.width / 2 + n.swing(this.$text.wave.amplitude, this.$text.wave.period, this.angle, 0).x + 5, this.$text.$el.y = -this.$text.height / 2 + n.swing(this.$text.wave.amplitude, this.$text.wave.period, this.angle, 0).y, this.angle += .5, this.drawLines()
                }, this)
            }), new TimelineMax({
                tweens: [new TimelineMax({
                    tweens: [new TimelineMax({
                        tweens: e,
                        stagger: .035
                    }), new TimelineMax({
                        tweens: t,
                        stagger: .035
                    })]
                }), TweenMax.to(this.$el, .8, {
                    alpha: 1,
                    ease: Cubic.easeInOut
                })],
                stagger: .05,
                onUpdate: _.bind(this.drawLines, this)
            })
        },
        drawLines: function () {
            this.$loaderShape.$vectors.clear(), this.$loaderShape.$vectors.lineStyle(2, this.colors.white, .3), _.each(this.$loaderShape.$points.children, function (e, t) {
                var n = this.$loaderShape.$points.children[t],
                    i = this.$loaderShape.$points.children[t + 1] || this.$loaderShape.$points.children[0];
                this.$loaderShape.$vectors.moveTo(n.x, n.y), this.$loaderShape.$vectors.lineTo(i.x, i.y)
            }, this), this.$loadedShape.$vectors.clear(), this.$loadedShape.$vectors.lineStyle(2, this.colors.red, 1), _.each(this.$loadedShape.$points.children, function (e, t) {
                var n = this.$loadedShape.$points.children[t],
                    i = this.$loadedShape.$points.children[t + 1] || this.$loadedShape.$points.children[0];
                this.$loadedShape.$vectors.moveTo(n.x, n.y), this.$loadedShape.$vectors.lineTo(i.x, i.y)
            }, this)
        },
        progress: function (e, t) {
            var i;
            TweenMax.to(this.tweener, 2, {
                perc: e,
                ease: Linear.easeNone,
                onUpdate: _.bind(function () {
                    i = Math.round(100 * this.tweener.perc), 10 > i && (i = "0" + i), i += "%", this.$text.text(i), this.$text.$el.x = -this.$text.width / 2 + n.swing(this.$text.wave.amplitude, this.$text.wave.period, this.angle, 0).x + 5, this.$mask.clear(), this.$mask.moveTo(0, 0), this.$mask.beginFill(this.colors.black, .25), this.$mask.arc(0, 0, 95, 0, 2 * Math.PI * this.tweener.perc), this.$loadedShape.alpha = 1
                }, this)
            })
        },
        hide: function () {
            var e = r.defer();
            return new TimelineMax({
                tweens: [TweenMax.allTo(this.$loaderShape.$points.children, .8, {
                    r: 0,
                    ease: Expo.easeInOut
                }, .01), TweenMax.allTo(this.$loadedShape.$points.children, .8, {
                    r: 0,
                    ease: Expo.easeInOut
                }, .01), TweenMax.to(this.$loaderShape, .9, {
                    alpha: 0,
                    ease: Expo.easeInOut
                }), TweenMax.to(this.$loadedShape, .9, {
                    alpha: 0,
                    ease: Expo.easeInOut
                }), TweenMax.to(this.$text.$el, .9, {
                    alpha: 0,
                    ease: Expo.easeInOut
                })],
                onUpdate: _.bind(this.drawLines, this),
                onComplete: _.bind(function () {
                    e.resolve(), this.destroy()
                }, this)
            }), e.promise
        },
        resize: function (e) {
            var t = this.colors;
            this.$base.clear(), this.$base.beginFill(t.grey), this.$base.drawRect(-e.x, -e.y, e.w, e.h), o.prototype.resize.call(this, e)
        },
        destroy: function () {
            this.loop && this.loop.kill(), this.$base.destroy(), this.$text.destroy(), this.$loaderShape.destroy(!0), this.$loadedShape.destroy(!0), this.$mask.destroy(), this.$base = null, this.$text.$el = null, this.$loaderShape = null, this.$loadedShape = null, this.$mask = null, o.prototype.destroy.call(this)
        }
    }), u.prototype.constructor = u, u.prototype = _.extend(Object.create(o.prototype), {
        render: function () {
            return this.$dashline = new PIXI.Graphics, this.$dashMask = new PIXI.Graphics, this.$loadedLine = new PIXI.Graphics, this.$loadedLine.scale.y = 0, this.$dashline.mask = this.$dashMask, this.$dashMask.scale.y = 0, this.$el.addChild(this.$dashline), this.$el.addChild(this.$dashMask), this.$el.addChild(this.$loadedLine), this.checkForHelperLine(), this
        },
        checkForHelperLine: function () {
            var e = this.scope.currstate,
                t = window.innerWidth < 768 || 0 == e.from.name.length || e.from.name == a.PagesTypes.MENU;
            t && TweenMax.to(this.$dashMask.scale, 1.5, {
                y: 1,
                ease: Expo.easeOut
            })
        },
        progress: function (e) {
            TweenMax.to(this.$loadedLine.scale, 2, {
                y: e,
                ease: Linear.easeNone
            })
        },
        hide: function () {
            var e = r.defer();
            return new TimelineMax({
                tweens: [TweenMax.to(this.$loadedLine.scale, 1, {
                    y: 0,
                    ease: Expo.easeInOut
                }), TweenMax.to(this.$dashMask.scale, 1, {
                    y: 0,
                    ease: Expo.easeInOut
                })],
                onComplete: _.bind(function () {
                    this.showHelperLine = !1, e.resolve(), this.destroy()
                }, this)
            }), e.promise
        },
        resize: function (e) {
            var t = this.colors,
                n = (i.isPhone(), this.scope.currstate),
                r = e.w < 768 || 0 == n.from.name.length || n.from.name == a.PagesTypes.MENU ? 0 : e.x / 2;
            this.$dashline.clear(), this.$dashline.beginFill(t.white, .4);
            for (var s = 0; s < Math.round(e.h / 5); ++s) this.$dashline.drawRect(0, -e.y + Math.floor(5 * s), Math.floor(1), Math.floor(1));
            this.$dashMask.clear(), this.$dashMask.beginFill(t.black, 1), this.$dashMask.drawRect(-4, 0, 10, -e.h), this.$dashMask.y = e.y, this.$loadedLine.clear(), this.$loadedLine.beginFill(t.green), this.$loadedLine.drawRect(r, 0, 1, -e.h), this.$loadedLine.y = e.y, o.prototype.resize.call(this, e)
        },
        destroy: function () {
            this.$loadedLine.destroy(), this.$loadedLine = null, o.prototype.destroy.call(this)
        }
    }), o
}]