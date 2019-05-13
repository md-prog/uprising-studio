const _ = require('underscore')

module.exports = ["SectionObject", function (e) {
    function t(t, n) {
        e.call(this, t, n)
    }

    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            return this
        }
    });

    return t
}]