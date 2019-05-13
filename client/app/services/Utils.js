module.exports = ["Performance", function (e) {
    return {
        getDpr: function () {
            var t = window.devicePixelRatio || 1,
                n = e.get().index || 1;
            return 0 > n && (t += 1), n >= 0 && 2 > n && (t = 1), this.isMobile() && (t = 1), Math.floor(t)
        },
        getTime: function () {
            return Date.now() || (new Date).getTime()
        },
        getColors: function () {
            return {
                black: 0,
                white: 16777215,
                green: 65424,
                grey: 1579032,
                grey2: 13421772,
                grey3: 6710886,
                grey4: 3355443,
                red: 16711764
            }
        },
        getWebgl: function () {
            var e = document.createElement("canvas"),
                t = "probablySupportsContext" in e ? "probablySupportsContext" : "supportsContext";
            return t in e ? e[t]("webgl") || e[t]("experimental-webgl") : "WebGLRenderingContext" in window
        },
        isMobile: function () {
            return $("html").hasClass("tablet") || $("html").hasClass("phone")
        },
        isPhone: function () {
            return $("html").hasClass("phone")
        },
        isSafari: function () {
            var e = !1,
                t = navigator.userAgent;
            return e = -1 != t.indexOf("Safari") && -1 == t.indexOf("Chrome")
        },
        isValidIE: function () {
            var e = !1,
                t = navigator.userAgent;
            return /MSIE 10/i.test(t) && (e = !1), (/MSIE 9/i.test(t) || /rv:11.0/i.test(t)) && (e = !1), /Edge\/\d./i.test(t) && (e = !0), e
        }
    }
}]