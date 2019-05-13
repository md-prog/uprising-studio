const _ = require("underscore")

module.exports = ["DisplayObject", "Text", "Math2", function (e, t, n) {
    function i(t, n) {
        e.call(this);
        this.labels = t;
        this.options = n;
        this.limit = t.length - 1;
        this.timeline = null;
        this.count = 0
    }
    
    i.prototype.constructor = i;
    i.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.current = this.getTitle(this.labels[this.count]);
            this.$el.addChild(this.current)
            return this
        },
        tweenIn: function () {
            var e, t, n = [],
                i = 0;
            _.each(this.current.children, function (r, s) {
                t = r.getChildAt(0);
                e = r.getChildAt(1);
                i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2;
                n.push(TweenMax.from(t, .9, {
                    y: i,
                    ease: Expo.easeInOut
                }))
            }, this);
            this.timeline = new TimelineMax({
                tweens: n,
                stagger: .045
            });
            return this.timeline
        },
        getLoop: function () {
            ++this.count;
            this.count > this.limit && (this.count = 0);
            var e, t = [],
                n = [];
            _.each(this.current.children, function (t, i) {
                e = t.getChildAt(0), n.push(TweenMax.to(e, .65, {
                    x: 2.5 * t.scope.width,
                    ease: Expo.easeInOut
                }))
            }, this);
            this.render();
            _.each(this.current.children, function (n, i) {
                e = n.getChildAt(0), t.push(TweenMax.from(e, .65, {
                    x: 2.5 * -n.scope.width,
                    ease: Expo.easeInOut
                }))
            }, this);
            return new TimelineMax({
                tweens: [new TimelineMax({
                    tweens: n.reverse(),
                    stagger: .035
                }), new TimelineMax({
                    tweens: t.reverse(),
                    stagger: .035
                })],
                stagger: .05,
                onComplete: _.bind(function () {
                    var e, t = this.$el.getChildAt(0);
                    _.each(t.children, function () {
                        e = t.getChildAt(0);
                        e.getChildAt(0).getChildAt(0).destroy(!0);
                        t.removeChildAt(0), e.destroy()
                    }, this);
                    this.$el.removeChildAt(0)
                }, this)
            })
        },
        getTitle: function (e) {
            e.length < 1 && (e = " ");
            for (var i, r, s, a, o, l, u = 0, c = 0, h = {}, d = new PIXI.Sprite, p = 0; p < e.length; ++p) {
                i = e.charAt(p).toUpperCase();
                a = new t(i, this.options);
                a.$el.casheAsBitmap = !0;
                a.$el.x = u;
                a.$el.y = c;
                o = new PIXI.Graphics;
                l = new PIXI.Graphics;
                r = n.randFloat(50, 200);
                s = r + n.randFloat(100, 300);
                h.x = -2;
                h.y = -r;
                h.w = a.width + 4;
                h.h = a.height + s;
                o.beginFill(this.colors.black, .5);
                o.drawRect(h.x, 0, h.w, h.h);
                o.y = h.y;
                l.beginFill(this.colors.white, 0);
                l.drawRect(h.x, 0, h.w, h.h);
                l.y = h.y;
                u += a.width + a.spacing;
                a.$el.addChild(l);
                a.$el.addChild(o);
                d.addChild(a.$el);
                a.$el.mask = o;
            }
            this.width = u - a.spacing;
            this.height = a.height;
            return d
        },
        destroy: function () {
            this.timeline && this.timeline.kill();
            _.each(this.current.children, function (e) {
                this.current.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0);
                this.current.removeChildAt(0)
            }, this);
            this.current.destroy(!0);
            this.labels = null;
            this.options = null;
            this.current = null;
            this.timeline = null;
            e.prototype.destroy.call(this)
        }
    });
    return i
}]