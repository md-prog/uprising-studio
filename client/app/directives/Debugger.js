module.exports = [function () {
    return {
        controller: ["$scope", "$element", "$timeout", "Performance", function (e, t, n, i) {
            function r() {
                o = s(), u = o;
                var t = window.performance.memory.usedJSHeapSize - l;
                l = window.performance.memory.usedJSHeapSize;
                var r = 0 > t ? "#ff0054" : "#00ff90",
                    p = a(l, 2),
                    f = e.stage.children.length,
                    $ = f > 0 ? e.stage.getChildAt(0).children.length : 0,
                    m = f + "(" + $ + ")",
                    g = m + " + " + _.keys(PIXI.utils.BaseTextureCache).length,
                    v = i.get().label,
                    w = i.get().color;
                ++h, o > c + 1e3 && (d = Math.round(1e3 * h / (o - c)), n(function () {
                    e.memory = {
                        memoryUse: p,
                        childrenAndCache: g,
                        performanceColor: w,
                        performance: v,
                        memoryColor: r,
                        frameRate: d
                    }
                }), c = o, h = 0)
            }

            function s() {
                return Date.now() || (new Date).getTime()
            }

            function a(e, t) {
                var n = ["Bytes", "KB", "MB", "GB", "TB"];
                if (0 == e) return "n/a";
                t = void 0 !== t ? t : 0;
                var i = Math.pow(10, t),
                    r = Math.floor(Math.log(e) / Math.log(1024));
                return Math.round(e * i / Math.pow(1024, r)) / i + " " + n[r]
            }
            var o = s(),
                l = window.performance.memory.usedJSHeapSize,
                u = o,
                c = o,
                h = 0,
                d = 0;
            e.memory = {
                childrenAndCache: 0,
                performanceColor: 0,
                performance: "Test...",
                memoryColor: 0,
                frameRate: 0,
                memoryUse: 0
            }, TweenLite.ticker.addEventListener("tick", r)
        }],
        restrict: "E",
        template: require('../templates/debugger.html'),
        replace: !0,
        link: function (e, t, n, i) {}
    }
}]