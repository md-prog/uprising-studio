const _ = require('underscore')

module.exports = ["$scope", "$state", "Events", "Utils", "Const", function SectionsController(scope, $state, Events, Utils, Const) {
    this.count = 0;
    this.update = function () {
        if (!this.textures) {
            this.textures = scope.data.sections.textures.items;
            this.collection = scope.data.sections.collection;
            this.limit = this.collection.length - 1
        }
    };
    this.addEvents = function () {
        scope.$on(Events.OPEN_PAGE, _.bind(function (n) {
            var r = scope.currstate.to,
                s = "about.scroll" == r.data.link ? "intro" : "contacts.leaf" == r.data.link ? "letstalk" : 1;
            if (Utils.isPhone())
                $state.go(r.data.mlink, {
                    leaf: scope.data.projects.collection[0].route,
                    page: s
                })
            else
                $state.go(r.data.link, {
                    page: s
                })
        }, this))
    };
    this.setState = function (t) {
        this.count = _.indexOf(this.collection, scope.currstate.model);
        this.setTextureState(t)
    };
    this.setTextureState = function (e) {
        var t = this.textures[e.to.name];
        t && t.paused && !Utils.isMobile() && t.play()
    };
    this.clearTextureState = function () {
        if (scope.data.projects.textures.loaded || scope.currstate.to.data.type != Const.PagesTypes.WALL)
            _.each(this.textures, _.bind(function (t, n) {
                t.id == scope.currstate.to.name || t.paused || Utils.isMobile() || t.pause()
            }, this))
    };
    this.clearState = function () {
        this.clearTextureState()
    };
    this.updatePage = function (e) {
        this.count += e;
        this.count < 0 && (this.count = 0);
        this.count > this.limit && (this.count = this.limit);
        this.collection && $state.go(this.collection[this.count].name)
    }
}]