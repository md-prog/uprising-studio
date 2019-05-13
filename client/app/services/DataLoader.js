function e(e, s, a) {
    function o() {
        l = s.defer();
        var e = new createjs.LoadQueue(!0);
        e.on("complete", function (e) {
            var t = {
                sections: e.target.getResult(a.DataTypes.SECTIONS),
                projects: e.target.getResult(a.DataTypes.PROJECTS),
                clients: e.target.getResult(a.DataTypes.CLIENTS),
                team: e.target.getResult(a.DataTypes.TEAM)
            };
            l.resolve(t)
        })
        e.loadManifest([{
            id: a.DataTypes.SECTIONS,
            type: "json",
            src: t
        }, {
            id: a.DataTypes.PROJECTS,
            type: "json",
            src: n
        }, {
            id: a.DataTypes.CLIENTS,
            type: "json",
            src: i
        }, {
            id: a.DataTypes.TEAM,
            type: "json",
            src: r
        }])
         
        return l.promise
    }
    var l;
    return {
        load: o
    }
}
var t = "json/sections.json",
    n = "json/projects.json",
    i = "json/clients.json",
    r = "json/team.json";

module.exports = ["$http", "$q", "Const", e]