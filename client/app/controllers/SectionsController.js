function e(e, t, n, i, r) {
    this.count = 0, this.update = function () {
        this.textures || (this.textures = e.data.sections.textures.items, this.collection = e.data.sections.collection, this.limit = this.collection.length - 1)
    }, this.addEvents = function () {
        e.$on(n.OPEN_PAGE, _.bind(function (n) {
            var r = e.currstate.to,
                s = "about.scroll" == r.data.link ? "intro" : "contacts.leaf" == r.data.link ? "letstalk" : 1;
            i.isPhone() ? t.go(r.data.mlink, {
                leaf: e.data.projects.collection[0].route,
                page: s
            }) : t.go(r.data.link, {
                page: s
            })
        }, this))
    }, this.setState = function (t) {
        this.count = _.indexOf(this.collection, e.currstate.model), this.setTextureState(t)
    }, this.setTextureState = function (e) {
        var t = this.textures[e.to.name];
        t && t.paused && !i.isMobile() && t.play()
    }, this.clearTextureState = function () {
        (e.data.projects.textures.loaded || e.currstate.to.data.type != r.PagesTypes.WALL) && _.each(this.textures, _.bind(function (t, n) {
            t.id == e.currstate.to.name || t.paused || i.isMobile() || t.pause()
        }, this))
    }, this.clearState = function () {
        this.clearTextureState()
    }, this.updatePage = function (e) {
        this.count += e, this.count < 0 && (this.count = 0), this.count > this.limit && (this.count = this.limit), this.collection && t.go(this.collection[this.count].name)
    }
}

module.exports = ["$scope", "$state", "Events", "Utils", "Const", e]