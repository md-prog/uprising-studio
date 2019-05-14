module.exports = [function () {
    return {
        controller: "CanvasController",
        restrict: "E",
        template: '<div id="stage"> <canvas></canvas> </div>',
        replace: !0,
        link: function (e, t, n, i) {
            var r = t.find("canvas")[0],
                s = new Hammer(document);
            s.get("swipe").set({
                direction: Hammer.DIRECTION_ALL
            }), s.on("swipe", function (t) {
                t.preventDefault();
                e.$emit("swipe", t)
            }), e.setupCanvas(r)
        }
    }
}]