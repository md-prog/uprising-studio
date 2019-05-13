const _ = require("underscore")

module.exports = ["DisplayObject", "Text", function (e, t) {
    function n(t, n) {
        e.call(this), this.options = n, this.label = t
    }

    n.prototype.constructor = n;
    n.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.current = this.getText(this.label);
            this.$el.addChild(this.current);
            return this
        },
        update: function (e) {
            if (e != this.label) {
                this.label = e;
                var t, n, i = [],
                    r = [];
                _.each(this.current.children, function (e, i) {
                    t = e.getChildAt(0);
                    n = e.getChildAt(1);
                    r.push(TweenMax.to(t, .75, {
                        y: -e.scope.height - 10,
                        ease: Expo.easeInOut
                    }))
                }, this);
                this.render();
                _.each(this.current.children, function (e, r) {
                    t = e.getChildAt(0);
                    n = e.getChildAt(1);
                    i.push(TweenMax.from(t, .75, {
                        y: n.height + 10,
                        ease: Expo.easeInOut
                    }))
                }, this);
                new TimelineMax({
                    tweens: [
                        new TimelineMax({
                            tweens: r,
                            stagger: .05
                        }),
                        new TimelineMax({
                            tweens: i,
                            stagger: .05
                        })
                    ],
                    stagger: 0,
                    onComplete: _.bind(function () {
                        var e = this.$el.getChildAt(0);
                        _.each(e.children, function (t, n) {
                            t = e.getChildAt(0);
                            t.getChildAt(0).getChildAt(0).destroy(!0);
                            e.removeChildAt(0);
                            t.destroy(!0)
                        }, this);
                        this.$el.removeChildAt(0)
                    }, this)
                })
            }
        },
        getText: function (e) {
            e.length < 1 && (e = " ");
            for (var n, i, r, s, a = (this.dpr, 0), o = 0, l = new PIXI.Sprite, u = 0; u < e.length; ++u) {
                n = e.charAt(u).toUpperCase();
                i = new t(n, this.options);
                i.$el.x = a;
                i.$el.y = o;
                r = new PIXI.Graphics;
                s = new PIXI.Graphics;
                r.beginFill(this.colors.black, .5);
                r.drawRect(-2, -5, i.width + 4, i.height + 10 * (u + 1));
                s.beginFill(this.colors.white, 0);
                s.drawRect(-2, -5, i.width + 4, i.height + 10 * (u + 1));
                a += i.width + i.spacing;
                i.$el.addChild(s);
                i.$el.addChild(r);
                l.addChild(i.$el);
                i.$el.mask = r;
            }
            this.width = a - i.spacing;
            this.height = i.height;
            return l
        },
        tweenIn: function () {
            return new TimelineMax({
                tweens: []
            })
        }
    });
    return n
}]