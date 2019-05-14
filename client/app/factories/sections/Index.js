const _ = require('underscore')

module.exports = ["SectionObject", function (SectionObject) {
    function t(t, n) {
        SectionObject.call(this, t, n)
    }
    
    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(SectionObject.prototype), {
        render: function () {
            SectionObject.prototype.render.call(this)
            return this
        },
        loop: function () {
            return !1
        },
        resize: function (t) {
            SectionObject.prototype.resize.call(this, t);
            this.$topLine.clear();
            this.$botLine.clear()
        }
    });
    
    return t
}]