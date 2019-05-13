const _ = require('underscore')

module.exports = ["SectionObject", function (e) {
    function t(t, n) {
        e.call(this, t, n)
    }
    
    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this)
            return this
        },
        loop: function () {
            return !1
        },
        resize: function (t) {
            e.prototype.resize.call(this, t);
            this.$topLine.clear();
            this.$botLine.clear()
        }
    });
    
    return t
}]