const _ = require('underscore');

module.exports = ["SectionObject", function (SectionObject) {

    function t(t, n) {
        SectionObject.call(this, t, n)
    }

    t.prototype.constructor = t;
    t.prototype = _.extend(Object.create(SectionObject.prototype), {
        render: function () {
            SectionObject.prototype.render.call(this);
            return this
        }
    });
    return t
}]