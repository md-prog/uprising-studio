const _ = require("underscore")

module.exports = ["DisplayObject", function (e) {
    function t(t) {
        e.call(this), this.color = t
    }
    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.$base = new PIXI.Graphics;
            this.$line = new PIXI.Sprite;
            this.$top = new PIXI.Sprite;
            this.$lineIn = new PIXI.Graphics;
            this.$lineOut = new PIXI.Graphics;
            this.$topIn = new PIXI.Graphics;
            this.$topOut = new PIXI.Graphics;
            this.$base.beginFill(this.colors.white, 0);
            this.$base.drawRect(-13, -10, 26, 20);
            this.$lineIn.beginFill(this.color);
            this.$lineIn.drawRect(-13, -1, 26, 2);
            this.$lineOut.beginFill(this.color);
            this.$lineOut.drawRect(-13, -1, 26, 2);
            this.$topIn.beginFill(this.color);
            this.$topIn.drawRect(-1, -8, 2, 7);
            this.$topOut.beginFill(this.color);
            this.$topOut.drawRect(-1, -8, 2, 7);
            this.$line.addChild(this.$lineIn);
            this.$line.addChild(this.$lineOut);
            this.$top.addChild(this.$topIn);
            this.$top.addChild(this.$topOut);
            this.$top.rotation = .7853;
            this.$top.x = -12.5;
            this.$el.addChild(this.$base);
            this.$el.addChild(this.$line);
            this.$el.addChild(this.$top);
            return this
        }
    });
    return t
}]