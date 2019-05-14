const _ = require('underscore')

function e(e, t, n, i, r) {
    var s = "work.wall",
        a = "work.wall.leaf";
    this.wallCount = 0, this.leafCount = 0, this.update = function () {
        if (!this.textures) {
            this.textures = e.data.projects.textures.items;
            this.collection = e.data.projects.collection;
            this.wallLimit = Math.ceil(this.collection.length / 2) - 1;
            this.leafLimit = this.collection.length - 1
        }
    };
    this.addEvents = function () {
        e.$on(n.OPEN_LEAF, _.bind(function (n, i) {
            var r = e.currstate.to;
            t.go(r.data.link, {
                leaf: i.route
            })
        }, this));
        e.$on(n.OPEN_LEAF_CONTENT, _.bind(function (t, n) {
            e.currstate.to;
            n.link && window.open(n.link, "_blank")
        }, this))
    };
    this.setState = function (t) {
        this.wallCount = parseInt(t.params.to.page) - 1;
        this.leafCount = _.indexOf(this.collection, _.where(this.collection, {
            route: e.currstate.params.to.leaf
        })[0]);
        isNaN(this.wallCount) && (this.wallCount = -1);
        isNaN(this.leafCount) && (this.leafCount = -1);
        this.setTextureState(t)
    };
    this.setTextureState = function (e) {
        var t = e.to.data.type;
        if (t == r.PagesTypes.WALL) {
            var n = this.getSides(parseInt(e.params.to.page) - 1),
                s = this.textures[this.collection[n.left].name],
                a = this.textures[this.collection[n.right].name];
            if(!i.isMobile()) {
                s && s.paused && s.play();
                a && a.paused && a.play()
            }
        } else if (t == r.PagesTypes.LEAF) {
            var o = this.textures[_.where(this.collection, {
                route: e.params.to.leaf
            })[0].name];
            o && o.paused && !i.isMobile() && o.play()
        }
    };
    this.clearTextureState = function () {
        var t = e.currstate.to.data.type,
            n = this.getSides(parseInt(e.currstate.params.to.page) - 1),
            s = _.where(this.collection, {
                route: e.currstate.params.to.leaf
            })[0];
        _.each(this.textures, _.bind(function (e, a) {
            if (t == r.PagesTypes.WALL)
                i.isMobile() || e.id == this.collection[n.left].name || e.id == this.collection[n.right].name || e.paused || e.pause()
            else if (t == r.PagesTypes.LEAF)
                e.id == s.name || e.paused || i.isMobile() || e.pause()
            else
                e.paused || i.isMobile() || e.pause()
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
        0 == this.wallCount && 0 > e || this.wallCount == this.wallLimit && e > 0 || (this.wallCount += e, t.go(s, {
            page: this.wallCount + 1,
            dir: e
        }))
    };
    this.updateLeaf = function (e) {
        this.leafCount += e;
        this.leafCount > this.leafLimit && e > 0 ? this.leafCount = 0 : this.leafCount < 0 && 0 > e && (this.leafCount = this.leafLimit);
        var n = Math.floor(this.leafCount / 2) + 1,
            i = this.collection[this.leafCount].route;
        t.go(a, {
            page: n,
            leaf: i,
            dir: e
        })
    }
}

module.exports = ["$scope", "$state", "Events", "Utils", "Const", e]