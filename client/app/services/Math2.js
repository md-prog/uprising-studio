module.exports = [function () {
    2 * Math.PI;
    return {
        randInt: function (e, t) {
            return e + Math.floor(Math.random() * (t - e + 1))
        },
        randFloat: function (e, t) {
            return e + Math.random() * (t - e)
        },
        radToDeg: function (e) {
            return e * (180 / Math.PI)
        },
        degToRad: function (e) {
            return e * (Math.PI / 180)
        },
        rotate: function (e, t) {
            return {
                x: e * Math.cos(t),
                y: e * Math.sin(t)
            }
        },
        swing: function (e, t, n, i) {
            return {
                x: e.x * Math.cos(2 * n * Math.PI / t.x) + i,
                y: e.y * Math.sin(2 * n * Math.PI / t.y) + i,
                z: e.z * Math.cos(2 * n * Math.PI / t.z) + i
            }
        },
        atan: function (e, t) {
            return Math.atan2(e.x - t.x, e.z - t.z)
        }
    }
}]