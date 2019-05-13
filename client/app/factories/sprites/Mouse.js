const _ = require("underscore")

module.exports = ["DisplayObject", function (e) {
    function t() {
        e.call(this)
    }

    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.$bitmap = new PIXI.Sprite.fromImage("img/mouse-icon.png");
            this.$bitmap.anchor.x = .5;
            this.$bitmap.anchor.y = .5;
            this.$dot = new PIXI.Graphics;
            this.$dot.beginFill(this.colors.white);
            this.$dot.drawCircle(0, 0, 4);
            this.$dot.alpha = 0;
            this.$dot.y = -10;
            this.$el.addChild(this.$bitmap);
            this.$el.addChild(this.$dot);
            this.$el.scale.x = .5;
            this.$el.scale.y = .5;

            new TimelineMax({
                tweens: [TweenMax.to(this.$dot, .75, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), TweenMax.to(this.$dot, .75, {
                    y: 10,
                    alpha: 0,
                    ease: Expo.easeInOut
                })],
                stagger: .75,
                repeat: -1,
                repeatDelay: .25
            });
            return this
        }
    });

    return t
}]