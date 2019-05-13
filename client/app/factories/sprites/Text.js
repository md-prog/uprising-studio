const _ = require("underscore")

module.exports = ["DisplayObject", function (e) {
    function t(t, n) {
        e.call(this);
        this.label = t;
        this.font = n.fontFamily;
        this.size = 2 * n.fontSize;
        this.spacing = n.letterSpacing || 0;
        this.fill = n.fill;
        this.tmpwidth = 0;
        this.tmpheight = 0;
        this.width = 0;
        this.height = 0;
        this.render()
    }
    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            this.label.length < 1 && (this.label = " ");
            var e, t, n, i, r, s = this.label.split("\n"),
                a = this.getPadding(),
                o = .5;
            _.each(s, function (l, u) {
                for (var c = 0; c < l.length; ++c) {
                    r = l.charAt(c);
                    i = new PIXI.Sprite;
                    i.x = this.tmpwidth;
                    i.y = this.tmpheight;
                    i.scale.x = o;
                    i.scale.y = o;
                    n = new PIXI.Text(r, {
                        fontFamily: this.font,
                        fontSize: this.size,
                        fill: this.fill,
                        padding: a,
                        align: "left"
                    });
                }
                e = n.width - 2 * a;
                t = n.height + a / 1.325;
                n.y = a;
                n.x = 0;
                i.addChild(n);
                this.$el.addChild(i);
                this.tmpwidth += e * o + this.spacing;
                s.length > 1 && (this.tmpheight = Math.round(t / this.getLineHeight() * (u + 1) * o), this.tmpwidth = 0)
            }, this);
            this.width = Math.round(this.tmpwidth - this.spacing);
            this.height = Math.round(t * o);
            s.length > 1 && (this.width = 520, this.height = Math.round(this.tmpheight - 9));
            return this
        },
        text: function (e) {
            this.label = e;
            _.each(this.$el.children, function () {
                this.$el.getChildAt(0).getChildAt(0).destroy(!0);
                this.$el.removeChildAt(0)
            }, this);
            this.tmpwidth = 0;
            this.tmpheight = 0;
            this.render()
        },
        getPadding: function () {
            var e = 0;
            "timmons" == this.font && (e = this.size / 3.5);
            return e
        },
        getLineHeight: function () {
            return "timmons" == this.font ? .8 : "din-condensed-web" == this.font ? .9 : .6
        },
        destroy: function () {
            _.each(this.$el.children, function (e) {
                this.$el.getChildAt(0).getChildAt(0).destroy(!0);
                this.$el.removeChildAt(0)
            }, this);
            e.prototype.destroy.call(this)
        }
    });
    return t
}]