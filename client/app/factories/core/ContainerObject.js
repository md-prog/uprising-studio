const _ = require("underscore")

module.exports = ["DisplayObject", "$timeout", "Utils", function (e, t, n) {
    function i(t, n) {
        e.call(this);
        this.model = n || {};
        this.scope = t || {};
        this.timer = null;
        this.timeline = null;
        this.loopTimeline = null;
        this.id = _.uniqueId("section_")
    }
    return i.prototype.constructor = i, i.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            return e.prototype.render.call(this), this
        },
        getTexture: function (e) {
            var t, i = this.getTextureSource(e);
            if (n.isMobile()) {
                var r = new PIXI.BaseTexture(i);
                t = new PIXI.Texture(r)
            } else {
                t = new PIXI.Texture.fromVideo(i);
                t.baseTexture.source.loop = !0;
            }
            return t
        },
        getTextureSource: function (e) {
            var t = this.texStore.items[e.name];
            if(t._pixiId) {
                delete PIXI.utils.BaseTextureCache[t._pixiId];
                delete t._pixiId
            }
            return t
        },
        ready: function () {
            return this
        },
        update: function () {
            return this
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
            return this.removeEvents(), new TimelineMax({
                tweens: [TweenMax.to(this.$el.scale, .75, {
                    x: 1.5,
                    y: 1.5,
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
            this.$el.x = e.x, this.$el.y = e.y, this.stagesize = {
                w: e.w,
                h: e.h,
                x: e.x,
                y: e.y
            }
        },
        removeEvents: function () {},
        destroy: function () {
            this.timer && t.cancel(this.timer);
            this.loopTimeline && this.loopTimeline.kill();
            this.timeline && this.timeline.kill();
            this.timer = null;
            this.timeline = null;
            this.loopTimeline = null;
            this.stagesize = null;
            this.scope = null;
            this.model = null;
            e.prototype.destroy.call(this)
        }
    }), i
}]