const _ = require('underscore')

function e(e, t, n) {
    n.html5Mode(!0);
    t.otherwise(function (e, t) {
        var n = e.get("$state");
        _.isUndefined(n) || n.go("index")
    });
    
    e.state("menu", {
        url: "/menu",
        data: {
            instance: "menu",
            type: "menu"
        }
    }).state("index", {
        url: "/index",
        data: {
            instance: "index",
            type: "index"
        }
    }).state("work", {
        url: "/work",
        data: {
            instance: "work",
            type: "index",
            link: "work.wall",
            mlink: "work.wall.leaf"
        }
    }).state("about", {
        url: "/about",
        data: {
            instance: "about",
            type: "index",
            link: "about.scroll",
            mlink: "about.scroll"
        }
    }).state("contacts", {
        url: "/contacts",
        data: {
            instance: "contacts",
            type: "index",
            link: "contacts.leaf"
        }
    }).state("work.wall", {
        url: "/:page",
        params: {
            dir: 0
        },
        data: {
            instance: "wall",
            type: "wall",
            parent: "work",
            link: "work.wall.leaf",
            back: "work"
        }
    }).state("work.wall.leaf", {
        url: "/:leaf",
        params: {
            dir: 0
        },
        data: {
            instance: "leaf",
            type: "leaf",
            parent: "work",
            back: "work.wall",
            mback: "work"
        }
    }).state("about.scroll", {
        url: "/:page",
        data: {
            instance: "infos",
            type: "infos",
            parent: "about",
            back: "about",
            mback: "about"
        }
    }).state("contacts.leaf", {
        url: "/:page",
        data: {
            instance: "cleaf",
            type: "cleaf",
            parent: "contacts",
            back: "contacts",
            mback: "contacts"
        }
    })
}

module.exports = ["$stateProvider", "$urlRouterProvider", "$locationProvider", e]