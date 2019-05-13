const _ = require("underscore")

module.exports = ["DisplayObject", "Text", function (e, t) {
    function n() {
        e.call(this)
    }

    n.prototype.constructor = n;
    n.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var n = "Turn up your volume or use headphones";
            this.$icon = new PIXI.Sprite.fromImage("img/audio-icon.png");
            this.$icon.x = 0;
            this.$icon.y = -5;
            this.$icon.scale.x = .5;
            this.$icon.scale.y = .5;
            this.$text = new t(n.toUpperCase(), {
                fontFamily: "montser-bold",
                fontSize: 9,
                fill: this.colors.white,
                letterSpacing: 1
            });
            this.$text.$el.x = 30;
            this.$el.addChild(this.$text.$el);
            this.$el.addChild(this.$icon);
            this.startLoop()
            return this
        },
        startLoop: function () {
            TweenMax.from(this.$el, .5, {
                alpha: 0,
                ease: Cubic.easeInOut,
                onComplete: _.bind(function () {
                    TweenMax.to(this.$text.$el, 1, {
                        alpha: .25,
                        ease: Cubic.easeInOut,
                        repeat: -1,
                        yoyo: !0
                    })
                }, this)
            })
        },
        hide: function (e) {
            TweenMax.to(this.$el, .5, {
                alpha: 0,
                ease: Cubic.easeOut,
                onComplete: e
            })
        },
        resize: function (e) {
            this.$el.x = e.x - .5 * (this.$text.width + 35);
            this.$el.y = e.y - .5 * this.$text.height
        },
        destroy: function () {
            this.$text.destroy();
            this.$text.$el = null;
            e.prototype.destroy.call(this)
        }
    });
    return n
}]