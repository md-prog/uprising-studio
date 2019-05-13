const _ = require("underscore")

module.exports = [function () {
    function e(e, t, n, i) {
        this.width = e;
        this.height = t;
        this.segments = n;
        this.smoothingFactor = i;
        this.terrain = new Array;
        this._init = function () {
            this.terrain = new Array;
            for (var e = 0; e <= this.segments; e++) {
                this.terrain[e] = new Array;
                for (var t = 0; t <= this.segments; t++)
                    this.terrain[e][t] = 0
            }
        }
    }
    
    e.prototype.constructor = e;
    e.prototype = _.extend(Object.create({}), {
        diamondSquare: function () {
            this._init();
            for (var e = this.segments + 1, t = this.segments; t >= 2; t /= 2) {
                var n = t / 2;
                this.smoothingFactor /= 2;
                for (var i = 0; i < this.segments; i += t)
                    for (var r = 0; r < this.segments; r += t) {
                        var s = this.terrain[i][r] + this.terrain[i + t][r] + this.terrain[i][r + t] + this.terrain[i + t][r + t];
                        s /= 4;
                        s += 2 * this.smoothingFactor * Math.random() - this.smoothingFactor;
                        this.terrain[i + n][r + n] = s
                    }
                for (var i = 0; i < this.segments; i += n)
                    for (var r = (i + n) % t; r < this.segments; r += t) {
                        var s = this.terrain[(i - n + e) % e][r] + this.terrain[(i + n) % e][r] + this.terrain[i][(r + n) % e] + this.terrain[i][(r - n + e) % e];
                        s /= 4;
                        s += 2 * this.smoothingFactor * Math.random() - this.smoothingFactor;
                        this.terrain[i][r] = s;
                        0 === i && (this.terrain[this.segments][r] = s);
                        0 === r && (this.terrain[i][this.segments] = s)
                    }
            }
            return this.terrain
        }
    })
    return e
}]