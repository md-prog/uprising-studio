const _ = require('underscore')

module.exports = ["Utils", function (Utils) {
    function t() {
        this.$el = new PIXI.Sprite;
        this.$el.scope = this;
        this.colors = Utils.getColors();
        this.id = _.uniqueId("object_")
    }
    return t.prototype = {
        render: function () {
            return this
        },
        destroy: function () {
            this.$el.destroy(!0);
            this.$el.scope = null;
            this.$el = null;
            this.colors = null
        }
    }, t
}]