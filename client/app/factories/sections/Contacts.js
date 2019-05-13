const _ = require('underscore')

module.exports = ["SectionObject", function (e) {
    function t(t, n) {
        e.call(this, t, n)
    }

    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            this.$hitmail = new PIXI.Graphics;
            this.$hitmail.beginFill(this.colors.white, 0);
            this.$hitmail.drawRect(0, 0, 140, 15);
            this.$hitmail.interactive = !0;
            this.$hitmail.buttonMode = !0;
            e.prototype.render.call(this);
            return this
        },
        addEvents: function () {
            e.prototype.addEvents.call(this);
            this.$hitmail.click = this.$hitmail.tap = _.bind(function (e) {
                window.open("mailto:uprising@uprsg.com", "_self")
            }, this)
        },
        removeEvents: function () {
            e.prototype.removeEvents.call(this);
            this.$hitmail.click = this.$hitmail.tap = null
        },
        deafultResize: function (t) {
            e.prototype.deafultResize.call(this, t);
            this.$hitmail.x = this.$description.$el.x - 5;
            this.$hitmail.y = this.$description.$el.y + this.$description.height - 10
        }
    });
    
    return t
}]