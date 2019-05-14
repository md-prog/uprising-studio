const _ = require('underscore')

module.exports = ["$scope", "$state", "Events", "Utils", "Const", function ProjectsController(scope, $state, Events, Utils, Const) {
    var s = "work.wall",
        a = "work.wall.leaf";
    this.wallCount = 0;
    this.leafCount = 0;
    this.update = function () {
        if (!this.textures) {
            this.textures = scope.data.projects.textures.items;
            this.collection = scope.data.projects.collection;
            this.wallLimit = Math.ceil(this.collection.length / 2) - 1;
            this.leafLimit = this.collection.length - 1
        }
    };
    this.addEvents = function () {
        scope.$on(Events.OPEN_LEAF, _.bind(function (n, i) {
            var r = scope.currstate.to;
            $state.go(r.data.link, {
                leaf: i.route
            })
        }, this));
        scope.$on(Events.OPEN_LEAF_CONTENT, _.bind(function (t, n) {
            scope.currstate.to;
            n.link && window.open(n.link, "_blank")
        }, this))
    };
    this.setState = function (t) {
        this.wallCount = parseInt(t.params.to.page) - 1;
        this.leafCount = _.indexOf(this.collection, _.where(this.collection, {
            route: scope.currstate.params.to.leaf
        })[0]);
        isNaN(this.wallCount) && (this.wallCount = -1);
        isNaN(this.leafCount) && (this.leafCount = -1);
        this.setTextureState(t)
    };
    this.setTextureState = function (e) {
        var t = e.to.data.type;
        if (t == Const.PagesTypes.WALL) {
            var n = this.getSides(parseInt(e.params.to.page) - 1),
                s = this.textures[this.collection[n.left].name],
                a = this.textures[this.collection[n.right].name];
            if(!Utils.isMobile()) {
                s && s.paused && s.play();
                a && a.paused && a.play()
            }
        } else if (t == Const.PagesTypes.LEAF) {
            var o = this.textures[_.where(this.collection, {
                route: e.params.to.leaf
            })[0].name];
            o && o.paused && !Utils.isMobile() && o.play()
        }
    };
    this.clearTextureState = function () {
        var t = scope.currstate.to.data.type,
            n = this.getSides(parseInt(scope.currstate.params.to.page) - 1),
            s = _.where(this.collection, {
                route: scope.currstate.params.to.leaf
            })[0];
        _.each(this.textures, _.bind(function (e, a) {
            if (t == Const.PagesTypes.WALL)
                Utils.isMobile() || e.id == this.collection[n.left].name || e.id == this.collection[n.right].name || e.paused || e.pause()
            else if (t == Const.PagesTypes.LEAF)
                e.id == s.name || e.paused || Utils.isMobile() || e.pause()
            else
                e.paused || Utils.isMobile() || e.pause()
        }, this))
    };
    this.getSides = function (e) {
        var t = 2 * e,
            n = t + 1;
        n > this.collection.length - 1 && (t = this.collection.length - 2, n = this.collection.length - 1);
        return {
            left: t,
            right: n
        }
    };
    this.clearState = function () {
        this.clearTextureState()
    };
    this.updateWall = function (e) {
        0 == this.wallCount && 0 > e || this.wallCount == this.wallLimit && e > 0 || (this.wallCount += e, $state.go(s, {
            page: this.wallCount + 1,
            dir: e
        }))
    };
    this.updateLeaf = function (e) {
        this.leafCount += e;
        this.leafCount > this.leafLimit && e > 0 ? this.leafCount = 0 : this.leafCount < 0 && 0 > e && (this.leafCount = this.leafLimit);
        var n = Math.floor(this.leafCount / 2) + 1,
            i = this.collection[this.leafCount].route;
        $state.go(a, {
            page: n,
            leaf: i,
            dir: e
        })
    }
}]