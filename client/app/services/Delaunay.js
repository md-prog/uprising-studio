const _ = require('underscore')

function e(e) {
    var t, n, i, r, s, a, o = Number.POSITIVE_INFINITY,
        l = Number.POSITIVE_INFINITY,
        u = Number.NEGATIVE_INFINITY,
        c = Number.NEGATIVE_INFINITY;
    for (t = e.length; t--;) {
        e[t][0] < o && (o = e[t][0]);
        e[t][0] > u && (u = e[t][0]);
        e[t][1] < l && (l = e[t][1]);
        e[t][1] > c && (c = e[t][1]);
    }
    n = u - o;
    i = c - l;
    r = Math.max(n, i);
    s = o + .5 * n;
    a = l + .5 * i;
    return [
        [s - 20 * r, a - r],
        [s, a + 20 * r],
        [s + 20 * r, a - r]
    ]
}

function t(e, t, n, i) {
    var r, s, a, o, u, c, h, d, p, f, $ = e[t][0],
        m = e[t][1],
        g = e[n][0],
        v = e[n][1],
        w = e[i][0],
        y = e[i][1],
        x = Math.abs(m - v),
        b = Math.abs(v - y);
    if (l > x && l > b)
        throw new Error("Eek! Coincident points!");
    if (l > x) {
        o = -((w - g) / (y - v));
        c = (g + w) / 2;
        d = (v + y) / 2;
        r = (g + $) / 2;
        s = o * (r - c) + d
    } else if (l > b) {
        a = -((g - $) / (v - m));
        u = ($ + g) / 2;
        h = (m + v) / 2;
        r = (w + g) / 2;
        s = a * (r - u) + h
    } else {
        a = -((g - $) / (v - m));
        o = -((w - g) / (y - v));
        u = ($ + g) / 2;
        c = (g + w) / 2;
        h = (m + v) / 2;
        d = (v + y) / 2;
        r = (a * u - o * c + d - h) / (a - o);
        s = x > b ? a * (r - u) + h : o * (r - c) + d;
    }

    p = g - r,
        f = v - s;
    return {
        i: t,
        j: n,
        k: i,
        x: r,
        y: s,
        r: p * p + f * f
    }
}

function n(e) {
    var t, n, i, r, s, a;
    for (n = e.length; n;)
        for (r = e[--n], i = e[--n], t = n; t;)
            if (a = e[--t], s = e[--t], i === s && r === a || i === a && r === s) {
                e.splice(n, 2), e.splice(t, 2);
                break
            }
}

function i(e, t, n) {
    for (var i, r, a = e, o = t, l = [], u = 0; n > u; u++) {
        i = Math.random() * a;
        r = Math.random() * o;
        l.push([i, r]);
    }
    l.push([0, 0]);
    l.push([a, 0]);
    l.push([a, o]);
    l.push([0, o]);
    l.push([a / 2, o / 2]);
    l.forEach(_.bind(function (e) {
        e[0] = s(e[0], 0, a);
        e[1] = s(e[1], 0, o)
    }, this));
    return l
}

function r(e) {
    return o.triangulate(e)
}

function s(e, t, n) {
    return t > e ? t : e > n ? n : e
}

function a(e, t, n) {
    return e.sort(function (e, i) {
        var r = t,
            s = n,
            a = e.$el.x,
            o = e.$el.y,
            l = i.$el.x,
            u = i.$el.y,
            c = Math.sqrt(Math.pow(a - r, 2) + Math.pow(o - s, 2)),
            h = Math.sqrt(Math.pow(l - r, 2) + Math.pow(u - s, 2));
        return c > h ? 1 : -1
    })
}
var o, l = 1 / 1048576;
o = {
    triangulate: function (i, r) {
        var s, a, o, u, c, h, d, p, f, $, m, g, v = i.length;
        if (3 > v) return [];
        if (i = i.slice(0), r)
            for (s = v; s--;) i[s] = i[s][r];
        for (o = new Array(v), s = v; s--;)
            o[s] = s;
        o.sort(function (e, t) {
            return i[t][0] - i[e][0]
        });
        u = e(i);
        i.push(u[0], u[1], u[2]);
        c = [t(i, v + 0, v + 1, v + 2)];
        h = [];
        d = [];
        for (s = o.length; s--; d.length = 0) {
            for (g = o[s], a = c.length; a--;) {
                p = i[g][0] - c[a].x;
                p > 0 && p * p > c[a].r ? (h.push(c[a]), c.splice(a, 1)) : (f = i[g][1] - c[a].y, p * p + f * f - c[a].r > l || (d.push(c[a].i, c[a].j, c[a].j, c[a].k, c[a].k, c[a].i), c.splice(a, 1)));
            }
            for (n(d), a = d.length; a;) {
                m = d[--a];
                $ = d[--a];
                c.push(t(i, $, m, g))
            }
        }
        for (s = c.length; s--;)
            h.push(c[s]);
        for (c.length = 0, s = h.length; s--;)
            h[s].i < v && h[s].j < v && h[s].k < v && c.push(h[s].i, h[s].j, h[s].k);
        return c
    },
    contains: function (e, t) {
        if (t[0] < e[0][0] && t[0] < e[1][0] && t[0] < e[2][0] || t[0] > e[0][0] && t[0] > e[1][0] && t[0] > e[2][0] || t[1] < e[0][1] && t[1] < e[1][1] && t[1] < e[2][1] || t[1] > e[0][1] && t[1] > e[1][1] && t[1] > e[2][1])
            return null;
        var n = e[1][0] - e[0][0],
            i = e[2][0] - e[0][0],
            r = e[1][1] - e[0][1],
            s = e[2][1] - e[0][1],
            a = n * s - i * r;
        if (0 === a) return null;
        var o = (s * (t[0] - e[0][0]) - i * (t[1] - e[0][1])) / a,
            l = (n * (t[1] - e[0][1]) - r * (t[0] - e[0][0])) / a;
        return 0 > o || 0 > l || o + l > 1 ? null : [o, l]
    }
}

module.exports = [function () {
    return {
        sortTriangles: a,
        triangulate: i,
        getIndices: r
    }
}]