const _ = require('underscore')

module.exports = ["$scope", "$state", "$timeout", "Events", "Const", function InfosController(scope, $state, $timeout, Events, Const) {
    this.count = 0;
    this.pages = ["intro", "team", "clients"];
    this.limit = this.pages.length - 1;
    this.addEvents = function () {
        scope.$on(Events.SNAP_TEAM, _.bind(function (n, i) {
            $state.current.data.type == Const.PagesTypes.INFOS && scope.section.setIdentity(i)
        }, this))
    };
    this.setState = function (t) {
        this.count = _.indexOf(this.pages, t.params.to.page);
        if (scope.section && scope.section.setState)
            return void(t.to.data.type == Const.PagesTypes.INFOS && scope.section.setState(t))
        else
            return $timeout(_.bind(function () {
                this.setState(t)
            }, this))
    };
    this.updatePage = function (e) {
        this.count += e;
        this.count < 0 && (this.count = 0);
        this.count > this.limit && (this.count = this.limit);
        $state.go("about.scroll", {
            page: this.pages[this.count]
        })
    }
}]