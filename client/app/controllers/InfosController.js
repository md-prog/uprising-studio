const _ = require('underscore')

function e(e, t, n, i, r) {
    this.count = 0;
    this.pages = ["intro", "team", "clients"];
    this.limit = this.pages.length - 1;
    this.addEvents = function () {
        e.$on(i.SNAP_TEAM, _.bind(function (n, i) {
            t.current.data.type == r.PagesTypes.INFOS && e.section.setIdentity(i)
        }, this))
    }, this.setState = function (t) {
        this.count = _.indexOf(this.pages, t.params.to.page);
        return e.section && e.section.setState ? void(t.to.data.type == r.PagesTypes.INFOS && e.section.setState(t)) : n(_.bind(function () {
            this.setState(t)
        }, this))
    }, this.updatePage = function (e) {
        this.count += e;
        this.count < 0 && (this.count = 0);
        this.count > this.limit && (this.count = this.limit);
        t.go("about.scroll", {
            page: this.pages[this.count]
        })
    }
}

module.exports = ["$scope", "$state", "$timeout", "Events", "Const", e]