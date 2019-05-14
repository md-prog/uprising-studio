const _ = require('underscore')

module.exports = ["DisplayObject", "ThreeManager", "SoundManager", "Menugrid", "Holdrag", "Events", "Utils", "Math2", function (DisplayObject, ThreeManager,SoundManager, Menugrid, Holdrag, Events, Utils, Math2) {
    function l(t) {
        DisplayObject.call(this), this.scope = t || {}
    }

    l.prototype.constructor = l;
    l.prototype = _.extend(Object.create(DisplayObject.prototype), {
        render: function () {
            DisplayObject.prototype.render.call(this);
            var n = ThreeManager.getTexture("menu"),
                s = ThreeManager.getStore().menu.scene.dpr;
            this.$base = new PIXI.Graphics;
            this.$el.addChild(this.$base);
            this.$scene = new Menugrid(n, s);
            this.$el.addChild(this.$scene.render().$el);
            this.$scene.filters = [this.getGlitch()];
            this.$holdrag = new Holdrag("Hold down & drag to rotate");
            this.$el.addChild(this.$holdrag.render().$el);
            this.$el.interactive = !0;
            return this
        },
        ready: function () {
            return this
        },
        update: function () {
            this.$scene && this.$scene.update();
            this.$scene.filters[0].seed = .25 * Math.random()
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
            SoundManager.play("menu", "tweens", !0);
            return new TimelineMax({
                tweens: [
                    TweenMax.to(this.$scene.filters[0], 1, {
                        amount: .0015,
                        ease: Cubic.easeOut
                    }),
                    TweenMax.to(this.$holdrag.$mask.scale, .55, {
                        x: 1,
                        delay: .15,
                        ease: Cubic.easeInOut
                    }),
                    this.$scene.tweenIn()
                ]
            })
        },
        tweenOut: function () {
            this.$holdrag.kill();
            SoundManager.play("menu", "tweens", !0);

            return new TimelineMax({
                tweens: [
                    TweenMax.to(this.$scene.filters[0], 1, {
                        amount: 0,
                        ease: Cubic.easeOut
                    }),
                    TweenMax.to(this.$holdrag.$mask.scale, .25, {
                        x: 0,
                        ease: Cubic.easeInOut
                    }),
                    this.$scene.tweenOutToPage()
                ]
            })
        },
        resize: function (e) {
            this.$base.clear();
            this.$base.beginFill(this.colors.red, 0);
            this.$base.drawRect(-e.x, -e.y, e.w, e.h);
            this.$scene && this.$scene.resize(e);
            this.$holdrag.$el.x = 0;
            this.$holdrag.$el.y = e.y / 1.5;
            this.$el.x = e.x;
            this.$el.y = e.y
        },
        destroy: function () {
            ThreeManager.clear("menu");
            this.$base.destroy();
            this.$scene.destroy();
            this.$holdrag.destroy();
            this.$holdrag = null;
            this.$scene = null;
            this.$base = null;
            DisplayObject.prototype.destroy.call(this)
        }
    });
    
    return l
}]