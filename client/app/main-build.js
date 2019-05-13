/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * State-based routing for AngularJS
 * @version v0.3.1
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

/**
 * @license RequireJS text 2.0.12 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

! function (e) {
    "use strict";

    function t(e, t) {
        return t = t || Error,
            function () {
                var n, i, r = 2,
                    s = arguments,
                    a = s[0],
                    o = "[" + (e ? e + ":" : "") + a + "] ",
                    l = s[1];
                for (o += l.replace(/\{\d+\}/g, function (e) {
                        var t = +e.slice(1, -1),
                            n = t + r;
                        return n < s.length ? ve(s[n]) : e
                    }), o += "\nhttp://errors.angularjs.org/1.5.8/" + (e ? e + "/" : "") + a, i = r, n = "?"; i < s.length; i++, n = "&") o += n + "p" + (i - r) + "=" + encodeURIComponent(ve(s[i]));
                return new t(o)
            }
    }

    function n(e) {
        if (null == e || E(e)) return !1;
        if (Yi(e) || x(e) || Di && e instanceof Di) return !0;
        var t = "length" in Object(e) && e.length;
        return b(t) && (t >= 0 && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
    }

    function i(e, t, r) {
        var s, a;
        if (e)
            if (M(e))
                for (s in e) "prototype" == s || "length" == s || "name" == s || e.hasOwnProperty && !e.hasOwnProperty(s) || t.call(r, e[s], s, e);
            else if (Yi(e) || n(e)) {
            var o = "object" != typeof e;
            for (s = 0, a = e.length; a > s; s++)(o || s in e) && t.call(r, e[s], s, e)
        } else if (e.forEach && e.forEach !== i) e.forEach(t, r, e);
        else if (y(e))
            for (s in e) t.call(r, e[s], s, e);
        else if ("function" == typeof e.hasOwnProperty)
            for (s in e) e.hasOwnProperty(s) && t.call(r, e[s], s, e);
        else
            for (s in e) Pi.call(e, s) && t.call(r, e[s], s, e);
        return e
    }

    function r(e, t, n) {
        for (var i = Object.keys(e).sort(), r = 0; r < i.length; r++) t.call(n, e[i[r]], i[r]);
        return i
    }

    function s(e) {
        return function (t, n) {
            e(n, t)
        }
    }

    function a() {
        return ++Wi
    }

    function o(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function l(e, t, n) {
        for (var i = e.$$hashKey, r = 0, s = t.length; s > r; ++r) {
            var a = t[r];
            if (w(a) || M(a))
                for (var u = Object.keys(a), c = 0, h = u.length; h > c; c++) {
                    var d = u[c],
                        p = a[d];
                    n && w(p) ? T(p) ? e[d] = new Date(p.valueOf()) : C(p) ? e[d] = new RegExp(p) : p.nodeName ? e[d] = p.cloneNode(!0) : j(p) ? e[d] = p.clone() : (w(e[d]) || (e[d] = Yi(p) ? [] : {}), l(e[d], [p], !0)) : e[d] = p
                }
        }
        return o(e, i), e
    }

    function u(e) {
        return l(e, Ui.call(arguments, 1), !1)
    }

    function c(e) {
        return l(e, Ui.call(arguments, 1), !0)
    }

    function h(e) {
        return parseInt(e, 10)
    }

    function d(e, t) {
        return u(Object.create(e), t)
    }

    function p() {}

    function f(e) {
        return e
    }

    function $(e) {
        return function () {
            return e
        }
    }

    function m(e) {
        return M(e.toString) && e.toString !== Vi
    }

    function g(e) {
        return "undefined" == typeof e
    }

    function v(e) {
        return "undefined" != typeof e
    }

    function w(e) {
        return null !== e && "object" == typeof e
    }

    function y(e) {
        return null !== e && "object" == typeof e && !qi(e)
    }

    function x(e) {
        return "string" == typeof e
    }

    function b(e) {
        return "number" == typeof e
    }

    function T(e) {
        return "[object Date]" === Vi.call(e)
    }

    function M(e) {
        return "function" == typeof e
    }

    function C(e) {
        return "[object RegExp]" === Vi.call(e)
    }

    function E(e) {
        return e && e.window === e
    }

    function I(e) {
        return e && e.$evalAsync && e.$watch
    }

    function S(e) {
        return "[object File]" === Vi.call(e)
    }

    function O(e) {
        return "[object FormData]" === Vi.call(e)
    }

    function k(e) {
        return "[object Blob]" === Vi.call(e)
    }

    function A(e) {
        return "boolean" == typeof e
    }

    function P(e) {
        return e && M(e.then)
    }

    function F(e) {
        return e && b(e.length) && Ki.test(Vi.call(e))
    }

    function _(e) {
        return "[object ArrayBuffer]" === Vi.call(e)
    }

    function j(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function R(e) {
        var t, n = {},
            i = e.split(",");
        for (t = 0; t < i.length; t++) n[i[t]] = !0;
        return n
    }

    function L(e) {
        return Fi(e.nodeName || e[0] && e[0].nodeName)
    }

    function D(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), n
    }

    function N(e, t) {
        function n(e, t) {
            var n, i = t.$$hashKey;
            if (Yi(e))
                for (var s = 0, a = e.length; a > s; s++) t.push(r(e[s]));
            else if (y(e))
                for (n in e) t[n] = r(e[n]);
            else if (e && "function" == typeof e.hasOwnProperty)
                for (n in e) e.hasOwnProperty(n) && (t[n] = r(e[n]));
            else
                for (n in e) Pi.call(e, n) && (t[n] = r(e[n]));
            return o(t, i), t
        }

        function r(e) {
            if (!w(e)) return e;
            var t = a.indexOf(e);
            if (-1 !== t) return l[t];
            if (E(e) || I(e)) throw Gi("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var i = !1,
                r = s(e);
            return void 0 === r && (r = Yi(e) ? [] : Object.create(qi(e)), i = !0), a.push(e), l.push(r), i ? n(e, r) : r
        }

        function s(e) {
            switch (Vi.call(e)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new e.constructor(r(e.buffer), e.byteOffset, e.length);
                case "[object ArrayBuffer]":
                    if (!e.slice) {
                        var t = new ArrayBuffer(e.byteLength);
                        return new Uint8Array(t).set(new Uint8Array(e)), t
                    }
                    return e.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new e.constructor(e.valueOf());
                case "[object RegExp]":
                    var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
                    return n.lastIndex = e.lastIndex, n;
                case "[object Blob]":
                    return new e.constructor([e], {
                        type: e.type
                    })
            }
            return M(e.cloneNode) ? e.cloneNode(!0) : void 0
        }
        var a = [],
            l = [];
        if (t) {
            if (F(t) || _(t)) throw Gi("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (e === t) throw Gi("cpi", "Can't copy! Source and destination are identical.");
            return Yi(t) ? t.length = 0 : i(t, function (e, n) {
                "$$hashKey" !== n && delete t[n]
            }), a.push(e), l.push(t), n(e, t)
        }
        return r(e)
    }

    function z(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e !== e && t !== t) return !0;
        var n, i, r, s = typeof e,
            a = typeof t;
        if (s == a && "object" == s) {
            if (!Yi(e)) {
                if (T(e)) return T(t) ? z(e.getTime(), t.getTime()) : !1;
                if (C(e)) return C(t) ? e.toString() == t.toString() : !1;
                if (I(e) || I(t) || E(e) || E(t) || Yi(t) || T(t) || C(t)) return !1;
                r = fe();
                for (i in e)
                    if ("$" !== i.charAt(0) && !M(e[i])) {
                        if (!z(e[i], t[i])) return !1;
                        r[i] = !0
                    } for (i in t)
                    if (!(i in r) && "$" !== i.charAt(0) && v(t[i]) && !M(t[i])) return !1;
                return !0
            }
            if (!Yi(t)) return !1;
            if ((n = e.length) == t.length) {
                for (i = 0; n > i; i++)
                    if (!z(e[i], t[i])) return !1;
                return !0
            }
        }
        return !1
    }

    function U(e, t, n) {
        return e.concat(Ui.call(t, n))
    }

    function X(e, t) {
        return Ui.call(e, t || 0)
    }

    function H(e, t) {
        var n = arguments.length > 2 ? X(arguments, 2) : [];
        return !M(t) || t instanceof RegExp ? t : n.length ? function () {
            return arguments.length ? t.apply(e, U(n, arguments, 0)) : t.apply(e, n)
        } : function () {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function V(t, n) {
        var i = n;
        return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = void 0 : E(n) ? i = "$WINDOW" : n && e.document === n ? i = "$DOCUMENT" : I(n) && (i = "$SCOPE"), i
    }

    function q(e, t) {
        return g(e) ? void 0 : (b(t) || (t = t ? 2 : null), JSON.stringify(e, V, t))
    }

    function G(e) {
        return x(e) ? JSON.parse(e) : e
    }

    function B(e, t) {
        e = e.replace(tr, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n
    }

    function W(e, t) {
        return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
    }

    function Y(e, t, n) {
        n = n ? -1 : 1;
        var i = e.getTimezoneOffset(),
            r = B(t, i);
        return W(e, n * (r - i))
    }

    function K(e) {
        e = Di(e).clone();
        try {
            e.empty()
        } catch (t) {}
        var n = Di("<div>").append(e).html();
        try {
            return e[0].nodeType === or ? Fi(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
                return "<" + Fi(t)
            })
        } catch (t) {
            return Fi(n)
        }
    }

    function Z(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {}
    }

    function J(e) {
        var t = {};
        return i((e || "").split("&"), function (e) {
            var n, i, r;
            e && (i = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (i = e.substring(0, n), r = e.substring(n + 1)), i = Z(i), v(i) && (r = v(r) ? Z(r) : !0, Pi.call(t, i) ? Yi(t[i]) ? t[i].push(r) : t[i] = [t[i], r] : t[i] = r))
        }), t
    }

    function Q(e) {
        var t = [];
        return i(e, function (e, n) {
            Yi(e) ? i(e, function (e) {
                t.push(te(n, !0) + (e === !0 ? "" : "=" + te(e, !0)))
            }) : t.push(te(n, !0) + (e === !0 ? "" : "=" + te(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function ee(e) {
        return te(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function te(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function ne(e, t) {
        var n, i, r = nr.length;
        for (i = 0; r > i; ++i)
            if (n = nr[i] + t, x(n = e.getAttribute(n))) return n;
        return null
    }

    function ie(e, t) {
        var n, r, s = {};
        i(nr, function (t) {
            var i = t + "app";
            !n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
        }), i(nr, function (t) {
            var i, s = t + "app";
            !n && (i = e.querySelector("[" + s.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(s))
        }), n && (s.strictDi = null !== ne(n, "strict-di"), t(n, r ? [r] : [], s))
    }

    function re(t, n, r) {
        w(r) || (r = {});
        var s = {
            strictDi: !1
        };
        r = u(s, r);
        var a = function () {
                if (t = Di(t), t.injector()) {
                    var i = t[0] === e.document ? "document" : K(t);
                    throw Gi("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                n = n || [], n.unshift(["$provide", function (e) {
                    e.value("$rootElement", t)
                }]), r.debugInfoEnabled && n.push(["$compileProvider", function (e) {
                    e.debugInfoEnabled(!0)
                }]), n.unshift("ng");
                var s = it(n, r.strictDi);
                return s.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (e, t, n, i) {
                    e.$apply(function () {
                        t.data("$injector", i), n(t)(e)
                    })
                }]), s
            },
            o = /^NG_ENABLE_DEBUG_INFO!/,
            l = /^NG_DEFER_BOOTSTRAP!/;
        return e && o.test(e.name) && (r.debugInfoEnabled = !0, e.name = e.name.replace(o, "")), e && !l.test(e.name) ? a() : (e.name = e.name.replace(l, ""), Bi.resumeBootstrap = function (e) {
            return i(e, function (e) {
                n.push(e)
            }), a()
        }, void(M(Bi.resumeDeferredBootstrap) && Bi.resumeDeferredBootstrap()))
    }

    function se() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function ae(e) {
        var t = Bi.element(e).injector();
        if (!t) throw Gi("test", "no injector found for element argument to getTestability");
        return t.get("$$testability")
    }

    function oe(e, t) {
        return t = t || "_", e.replace(ir, function (e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function le() {
        var t;
        if (!rr) {
            var n = er();
            Ni = g(n) ? e.jQuery : n ? e[n] : void 0, Ni && Ni.fn.on ? (Di = Ni, u(Ni.fn, {
                scope: Er.scope,
                isolateScope: Er.isolateScope,
                controller: Er.controller,
                injector: Er.injector,
                inheritedData: Er.inheritedData
            }), t = Ni.cleanData, Ni.cleanData = function (e) {
                for (var n, i, r = 0; null != (i = e[r]); r++) n = Ni._data(i, "events"), n && n.$destroy && Ni(i).triggerHandler("$destroy");
                t(e)
            }) : Di = Oe, Bi.element = Di, rr = !0
        }
    }

    function ue(e, t, n) {
        if (!e) throw Gi("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
    }

    function ce(e, t, n) {
        return n && Yi(e) && (e = e[e.length - 1]), ue(M(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function he(e, t) {
        if ("hasOwnProperty" === e) throw Gi("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function de(e, t, n) {
        if (!t) return e;
        for (var i, r = t.split("."), s = e, a = r.length, o = 0; a > o; o++) i = r[o], e && (e = (s = e)[i]);
        return !n && M(e) ? H(s, e) : e
    }

    function pe(e) {
        for (var t, n = e[0], i = e[e.length - 1], r = 1; n !== i && (n = n.nextSibling); r++)(t || e[r] !== n) && (t || (t = Di(Ui.call(e, 0, r))), t.push(n));
        return t || e
    }

    function fe() {
        return Object.create(null)
    }

    function $e(e) {
        function n(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var i = t("$injector"),
            r = t("ng"),
            s = n(e, "angular", Object);
        return s.$$minErr = s.$$minErr || t, n(s, "module", function () {
            var e = {};
            return function (t, s, a) {
                var o = function (e, t) {
                    if ("hasOwnProperty" === e) throw r("badname", "hasOwnProperty is not a valid {0} name", t)
                };
                return o(t, "module"), s && e.hasOwnProperty(t) && (e[t] = null), n(e, t, function () {
                    function e(e, t, n, i) {
                        return i || (i = r),
                            function () {
                                return i[n || "push"]([e, t, arguments]), c
                            }
                    }

                    function n(e, n) {
                        return function (i, s) {
                            return s && M(s) && (s.$$moduleName = t), r.push([e, n, arguments]), c
                        }
                    }
                    if (!s) throw i("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", t);
                    var r = [],
                        o = [],
                        l = [],
                        u = e("$injector", "invoke", "push", o),
                        c = {
                            _invokeQueue: r,
                            _configBlocks: o,
                            _runBlocks: l,
                            requires: s,
                            name: t,
                            provider: n("$provide", "provider"),
                            factory: n("$provide", "factory"),
                            service: n("$provide", "service"),
                            value: e("$provide", "value"),
                            constant: e("$provide", "constant", "unshift"),
                            decorator: n("$provide", "decorator"),
                            animation: n("$animateProvider", "register"),
                            filter: n("$filterProvider", "register"),
                            controller: n("$controllerProvider", "register"),
                            directive: n("$compileProvider", "directive"),
                            component: n("$compileProvider", "component"),
                            config: u,
                            run: function (e) {
                                return l.push(e), this
                            }
                        };
                    return a && u(a), c
                })
            }
        })
    }

    function me(e, t) {
        if (Yi(e)) {
            t = t || [];
            for (var n = 0, i = e.length; i > n; n++) t[n] = e[n]
        } else if (w(e)) {
            t = t || {};
            for (var r in e)("$" !== r.charAt(0) || "$" !== r.charAt(1)) && (t[r] = e[r])
        }
        return t || e
    }

    function ge(e) {
        var t = [];
        return JSON.stringify(e, function (e, n) {
            if (n = V(e, n), w(n)) {
                if (t.indexOf(n) >= 0) return "...";
                t.push(n)
            }
            return n
        })
    }

    function ve(e) {
        return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : g(e) ? "undefined" : "string" != typeof e ? ge(e) : e
    }

    function we(n) {
        u(n, {
            bootstrap: re,
            copy: N,
            extend: u,
            merge: c,
            equals: z,
            element: Di,
            forEach: i,
            injector: it,
            noop: p,
            bind: H,
            toJson: q,
            fromJson: G,
            identity: f,
            isUndefined: g,
            isDefined: v,
            isString: x,
            isFunction: M,
            isObject: w,
            isNumber: b,
            isElement: j,
            isArray: Yi,
            version: hr,
            isDate: T,
            lowercase: Fi,
            uppercase: _i,
            callbacks: {
                $$counter: 0
            },
            getTestability: ae,
            $$minErr: t,
            $$csp: Qi,
            reloadWithDebugInfo: se
        }), (zi = $e(e))("ng", ["ngLocale"], ["$provide", function (e) {
            e.provider({
                $$sanitizeUri: Cn
            }), e.provider("$compile", ft).directive({
                a: _s,
                input: Qs,
                textarea: Qs,
                form: Ns,
                script: Wa,
                select: Za,
                style: Qa,
                option: Ja,
                ngBind: na,
                ngBindHtml: ra,
                ngBindTemplate: ia,
                ngClass: aa,
                ngClassEven: la,
                ngClassOdd: oa,
                ngCloak: ua,
                ngController: ca,
                ngForm: zs,
                ngHide: Ua,
                ngIf: pa,
                ngInclude: fa,
                ngInit: ma,
                ngNonBindable: Pa,
                ngPluralize: Ra,
                ngRepeat: La,
                ngShow: za,
                ngStyle: Xa,
                ngSwitch: Ha,
                ngSwitchWhen: Va,
                ngSwitchDefault: qa,
                ngOptions: ja,
                ngTransclude: Ba,
                ngModel: Oa,
                ngList: ga,
                ngChange: sa,
                pattern: to,
                ngPattern: to,
                required: eo,
                ngRequired: eo,
                minlength: io,
                ngMinlength: io,
                maxlength: no,
                ngMaxlength: no,
                ngValue: ta,
                ngModelOptions: Aa
            }).directive({
                ngInclude: $a
            }).directive(js).directive(ha), e.provider({
                $anchorScroll: rt,
                $animate: Xr,
                $animateCss: qr,
                $$animateJs: zr,
                $$animateQueue: Ur,
                $$AnimateRunner: Vr,
                $$animateAsyncRun: Hr,
                $browser: ct,
                $cacheFactory: ht,
                $controller: yt,
                $document: xt,
                $exceptionHandler: bt,
                $filter: Nn,
                $$forceReflow: Zr,
                $interpolate: Rt,
                $interval: Lt,
                $http: Pt,
                $httpParamSerializer: Mt,
                $httpParamSerializerJQLike: Ct,
                $httpBackend: _t,
                $xhrFactory: Ft,
                $jsonpCallbacks: as,
                $location: Jt,
                $log: Qt,
                $parse: wn,
                $rootScope: Mn,
                $q: yn,
                $$q: xn,
                $sce: On,
                $sceDelegate: Sn,
                $sniffer: kn,
                $templateCache: dt,
                $templateRequest: An,
                $$testability: Pn,
                $timeout: Fn,
                $window: Rn,
                $$rAF: Tn,
                $$jqLite: Ke,
                $$HashMap: kr,
                $$cookieReader: Dn
            })
        }])
    }

    function ye() {
        return ++pr
    }

    function xe(e) {
        return e.replace(mr, function (e, t, n, i) {
            return i ? n.toUpperCase() : n
        }).replace(gr, "Moz$1")
    }

    function be(e) {
        return !xr.test(e)
    }

    function Te(e) {
        var t = e.nodeType;
        return t === sr || !t || t === ur
    }

    function Me(e) {
        for (var t in dr[e.ng339]) return !0;
        return !1
    }

    function Ce(e) {
        for (var t = 0, n = e.length; n > t; t++) Fe(e[t])
    }

    function Ee(e, t) {
        var n, r, s, a, o = t.createDocumentFragment(),
            l = [];
        if (be(e)) l.push(t.createTextNode(e));
        else {
            for (n = o.appendChild(t.createElement("div")), r = (br.exec(e) || ["", ""])[1].toLowerCase(), s = Mr[r] || Mr._default, n.innerHTML = s[1] + e.replace(Tr, "<$1></$2>") + s[2], a = s[0]; a--;) n = n.lastChild;
            l = U(l, n.childNodes), n = o.firstChild, n.textContent = ""
        }
        return o.textContent = "", o.innerHTML = "", i(l, function (e) {
            o.appendChild(e)
        }), o
    }

    function Ie(t, n) {
        n = n || e.document;
        var i;
        return (i = yr.exec(t)) ? [n.createElement(i[1])] : (i = Ee(t, n)) ? i.childNodes : []
    }

    function Se(e, t) {
        var n = e.parentNode;
        n && n.replaceChild(t, e), t.appendChild(e)
    }

    function Oe(e) {
        if (e instanceof Oe) return e;
        var t;
        if (x(e) && (e = Zi(e), t = !0), !(this instanceof Oe)) {
            if (t && "<" != e.charAt(0)) throw wr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Oe(e)
        }
        t ? Ne(this, Ie(e)) : Ne(this, e)
    }

    function ke(e) {
        return e.cloneNode(!0)
    }

    function Ae(e, t) {
        if (t || Fe(e), e.querySelectorAll)
            for (var n = e.querySelectorAll("*"), i = 0, r = n.length; r > i; i++) Fe(n[i])
    }

    function Pe(e, t, n, r) {
        if (v(r)) throw wr("offargs", "jqLite#off() does not support the `selector` argument");
        var s = _e(e),
            a = s && s.events,
            o = s && s.handle;
        if (o)
            if (t) {
                var l = function (t) {
                    var i = a[t];
                    v(n) && D(i || [], n), v(n) && i && i.length > 0 || ($r(e, t, o), delete a[t])
                };
                i(t.split(" "), function (e) {
                    l(e), vr[e] && l(vr[e])
                })
            } else
                for (t in a) "$destroy" !== t && $r(e, t, o), delete a[t]
    }

    function Fe(e, t) {
        var n = e.ng339,
            i = n && dr[n];
        if (i) {
            if (t) return void delete i.data[t];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Pe(e)), delete dr[n], e.ng339 = void 0
        }
    }

    function _e(e, t) {
        var n = e.ng339,
            i = n && dr[n];
        return t && !i && (e.ng339 = n = ye(), i = dr[n] = {
            events: {},
            data: {},
            handle: void 0
        }), i
    }

    function je(e, t, n) {
        if (Te(e)) {
            var i = v(n),
                r = !i && t && !w(t),
                s = !t,
                a = _e(e, !r),
                o = a && a.data;
            if (i) o[t] = n;
            else {
                if (s) return o;
                if (r) return o && o[t];
                u(o, t)
            }
        }
    }

    function Re(e, t) {
        return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
    }

    function Le(e, t) {
        t && e.setAttribute && i(t.split(" "), function (t) {
            e.setAttribute("class", Zi((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Zi(t) + " ", " ")))
        })
    }

    function De(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            i(t.split(" "), function (e) {
                e = Zi(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }), e.setAttribute("class", Zi(n))
        }
    }

    function Ne(e, t) {
        if (t)
            if (t.nodeType) e[e.length++] = t;
            else {
                var n = t.length;
                if ("number" == typeof n && t.window !== t) {
                    if (n)
                        for (var i = 0; n > i; i++) e[e.length++] = t[i]
                } else e[e.length++] = t
            }
    }

    function ze(e, t) {
        return Ue(e, "$" + (t || "ngController") + "Controller")
    }

    function Ue(e, t, n) {
        e.nodeType == ur && (e = e.documentElement);
        for (var i = Yi(t) ? t : [t]; e;) {
            for (var r = 0, s = i.length; s > r; r++)
                if (v(n = Di.data(e, i[r]))) return n;
            e = e.parentNode || e.nodeType === cr && e.host
        }
    }

    function Xe(e) {
        for (Ae(e, !0); e.firstChild;) e.removeChild(e.firstChild)
    }

    function He(e, t) {
        t || Ae(e);
        var n = e.parentNode;
        n && n.removeChild(e)
    }

    function Ve(t, n) {
        n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : Di(n).on("load", t)
    }

    function qe(e, t) {
        var n = Ir[t.toLowerCase()];
        return n && Sr[L(e)] && n
    }

    function Ge(e) {
        return Or[e]
    }

    function Be(e, t) {
        var n = function (n, i) {
            n.isDefaultPrevented = function () {
                return n.defaultPrevented
            };
            var r = t[i || n.type],
                s = r ? r.length : 0;
            if (s) {
                if (g(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function () {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function () {
                    return n.immediatePropagationStopped === !0
                };
                var o = r.specialHandlerWrapper || We;
                s > 1 && (r = me(r));
                for (var l = 0; s > l; l++) n.isImmediatePropagationStopped() || o(e, n, r[l])
            }
        };
        return n.elem = e, n
    }

    function We(e, t, n) {
        n.call(e, t)
    }

    function Ye(e, t, n) {
        var i = t.relatedTarget;
        (!i || i !== e && !Cr.call(e, i)) && n.call(e, t)
    }

    function Ke() {
        this.$get = function () {
            return u(Oe, {
                hasClass: function (e, t) {
                    return e.attr && (e = e[0]), Re(e, t)
                },
                addClass: function (e, t) {
                    return e.attr && (e = e[0]), De(e, t)
                },
                removeClass: function (e, t) {
                    return e.attr && (e = e[0]), Le(e, t)
                }
            })
        }
    }

    function Ze(e, t) {
        var n = e && e.$$hashKey;
        if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
        var i = typeof e;
        return n = "function" == i || "object" == i && null !== e ? e.$$hashKey = i + ":" + (t || a)() : i + ":" + e
    }

    function Je(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function () {
                return ++n
            }
        }
        i(e, this.put, this)
    }

    function Qe(e) {
        return Function.prototype.toString.call(e) + " "
    }

    function et(e) {
        var t = Qe(e).replace(jr, ""),
            n = t.match(Ar) || t.match(Pr);
        return n
    }

    function tt(e) {
        var t = et(e);
        return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function nt(e, t, n) {
        var r, s, a;
        if ("function" == typeof e) {
            if (!(r = e.$inject)) {
                if (r = [], e.length) {
                    if (t) throw x(n) && n || (n = e.name || tt(e)), Rr("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    s = et(e), i(s[1].split(Fr), function (e) {
                        e.replace(_r, function (e, t, n) {
                            r.push(n)
                        })
                    })
                }
                e.$inject = r
            }
        } else Yi(e) ? (a = e.length - 1, ce(e[a], "fn"), r = e.slice(0, a)) : ce(e, "fn", !0);
        return r
    }

    function it(e, t) {
        function n(e) {
            return function (t, n) {
                return w(t) ? void i(t, s(e)) : e(t, n)
            }
        }

        function r(e, t) {
            if (he(e, "service"), (M(t) || Yi(t)) && (t = T.instantiate(t)), !t.$get) throw Rr("pget", "Provider '{0}' must define $get factory method.", e);
            return b[e + m] = t
        }

        function a(e, t) {
            return function () {
                var n = I.invoke(t, this);
                if (g(n)) throw Rr("undef", "Provider '{0}' must return a value from $get factory method.", e);
                return n
            }
        }

        function o(e, t, n) {
            return r(e, {
                $get: n !== !1 ? a(e, t) : t
            })
        }

        function l(e, t) {
            return o(e, ["$injector", function (e) {
                return e.instantiate(t)
            }])
        }

        function u(e, t) {
            return o(e, $(t), !1)
        }

        function c(e, t) {
            he(e, "constant"), b[e] = t, C[e] = t
        }

        function h(e, t) {
            var n = T.get(e + m),
                i = n.$get;
            n.$get = function () {
                var e = I.invoke(i, n);
                return I.invoke(t, null, {
                    $delegate: e
                })
            }
        }

        function d(e) {
            ue(g(e) || Yi(e), "modulesToLoad", "not an array");
            var t, n = [];
            return i(e, function (e) {
                function i(e) {
                    var t, n;
                    for (t = 0, n = e.length; n > t; t++) {
                        var i = e[t],
                            r = T.get(i[0]);
                        r[i[1]].apply(r, i[2])
                    }
                }
                if (!y.get(e)) {
                    y.put(e, !0);
                    try {
                        x(e) ? (t = zi(e), n = n.concat(d(t.requires)).concat(t._runBlocks), i(t._invokeQueue), i(t._configBlocks)) : M(e) ? n.push(T.invoke(e)) : Yi(e) ? n.push(T.invoke(e)) : ce(e, "module")
                    } catch (r) {
                        throw Yi(e) && (e = e[e.length - 1]), r.message && r.stack && -1 == r.stack.indexOf(r.message) && (r = r.message + "\n" + r.stack), Rr("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, r.stack || r.message || r)
                    }
                }
            }), n
        }

        function p(e, n) {
            function i(t, i) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === f) throw Rr("cdep", "Circular dependency found: {0}", t + " <- " + v.join(" <- "));
                    return e[t]
                }
                try {
                    return v.unshift(t), e[t] = f, e[t] = n(t, i)
                } catch (r) {
                    throw e[t] === f && delete e[t], r
                } finally {
                    v.shift()
                }
            }

            function r(e, n, r) {
                for (var s = [], a = it.$$annotate(e, t, r), o = 0, l = a.length; l > o; o++) {
                    var u = a[o];
                    if ("string" != typeof u) throw Rr("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                    s.push(n && n.hasOwnProperty(u) ? n[u] : i(u, r))
                }
                return s
            }

            function s(e) {
                return 11 >= Li ? !1 : "function" == typeof e && /^(?:class\b|constructor\()/.test(Qe(e))
            }

            function a(e, t, n, i) {
                "string" == typeof n && (i = n, n = null);
                var a = r(e, n, i);
                return Yi(e) && (e = e[e.length - 1]), s(e) ? (a.unshift(null), new(Function.prototype.bind.apply(e, a))) : e.apply(t, a)
            }

            function o(e, t, n) {
                var i = Yi(e) ? e[e.length - 1] : e,
                    s = r(e, t, n);
                return s.unshift(null), new(Function.prototype.bind.apply(i, s))
            }
            return {
                invoke: a,
                instantiate: o,
                get: i,
                annotate: it.$$annotate,
                has: function (t) {
                    return b.hasOwnProperty(t + m) || e.hasOwnProperty(t)
                }
            }
        }
        t = t === !0;
        var f = {},
            m = "Provider",
            v = [],
            y = new Je([], !0),
            b = {
                $provide: {
                    provider: n(r),
                    factory: n(o),
                    service: n(l),
                    value: n(u),
                    constant: n(c),
                    decorator: h
                }
            },
            T = b.$injector = p(b, function (e, t) {
                throw Bi.isString(t) && v.push(t), Rr("unpr", "Unknown provider: {0}", v.join(" <- "))
            }),
            C = {},
            E = p(C, function (e, t) {
                var n = T.get(e + m, t);
                return I.invoke(n.$get, n, void 0, e)
            }),
            I = E;
        b["$injector" + m] = {
            $get: $(E)
        };
        var S = d(e);
        return I = E.get("$injector"), I.strictDi = t, i(S, function (e) {
            e && I.invoke(e)
        }), I
    }

    function rt() {
        var e = !0;
        this.disableAutoScrolling = function () {
            e = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (t, n, i) {
            function r(e) {
                var t = null;
                return Array.prototype.some.call(e, function (e) {
                    return "a" === L(e) ? (t = e, !0) : void 0
                }), t
            }

            function s() {
                var e = o.yOffset;
                if (M(e)) e = e();
                else if (j(e)) {
                    var n = e[0],
                        i = t.getComputedStyle(n);
                    e = "fixed" !== i.position ? 0 : n.getBoundingClientRect().bottom
                } else b(e) || (e = 0);
                return e
            }

            function a(e) {
                if (e) {
                    e.scrollIntoView();
                    var n = s();
                    if (n) {
                        var i = e.getBoundingClientRect().top;
                        t.scrollBy(0, i - n)
                    }
                } else t.scrollTo(0, 0)
            }

            function o(e) {
                e = x(e) ? e : n.hash();
                var t;
                e ? (t = l.getElementById(e)) ? a(t) : (t = r(l.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
            }
            var l = t.document;
            return e && i.$watch(function () {
                return n.hash()
            }, function (e, t) {
                (e !== t || "" !== e) && Ve(function () {
                    i.$evalAsync(o)
                })
            }), o
        }]
    }

    function st(e, t) {
        return e || t ? e ? t ? (Yi(e) && (e = e.join(" ")), Yi(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
    }

    function at(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (n.nodeType === Dr) return n
        }
    }

    function ot(e) {
        x(e) && (e = e.split(" "));
        var t = fe();
        return i(e, function (e) {
            e.length && (t[e] = !0)
        }), t
    }

    function lt(e) {
        return w(e) ? e : {}
    }

    function ut(e, t, n, r) {
        function s(e) {
            try {
                e.apply(null, X(arguments, 1))
            } finally {
                if (v--, 0 === v)
                    for (; w.length;) try {
                        w.pop()()
                    } catch (t) {
                        n.error(t)
                    }
            }
        }

        function a(e) {
            var t = e.indexOf("#");
            return -1 === t ? "" : e.substr(t)
        }

        function o() {
            M = null, l(), u()
        }

        function l() {
            y = C(), y = g(y) ? null : y, z(y, S) && (y = S), S = y
        }

        function u() {
            (b !== c.url() || x !== y) && (b = c.url(), x = y, i(E, function (e) {
                e(c.url(), y)
            }))
        }
        var c = this,
            h = e.location,
            d = e.history,
            f = e.setTimeout,
            $ = e.clearTimeout,
            m = {};
        c.isMock = !1;
        var v = 0,
            w = [];
        c.$$completeOutstandingRequest = s, c.$$incOutstandingRequestCount = function () {
            v++
        }, c.notifyWhenNoOutstandingRequests = function (e) {
            0 === v ? e() : w.push(e)
        };
        var y, x, b = h.href,
            T = t.find("base"),
            M = null,
            C = r.history ? function () {
                try {
                    return d.state
                } catch (e) {}
            } : p;
        l(), x = y, c.url = function (t, n, i) {
            if (g(i) && (i = null), h !== e.location && (h = e.location), d !== e.history && (d = e.history), t) {
                var s = x === i;
                if (b === t && (!r.history || s)) return c;
                var o = b && Ht(b) === Ht(t);
                return b = t, x = i, !r.history || o && s ? (o || (M = t), n ? h.replace(t) : o ? h.hash = a(t) : h.href = t, h.href !== t && (M = t)) : (d[n ? "replaceState" : "pushState"](i, "", t), l(), x = y), M && (M = t), c
            }
            return M || h.href.replace(/%27/g, "'")
        }, c.state = function () {
            return y
        };
        var E = [],
            I = !1,
            S = null;
        c.onUrlChange = function (t) {
            return I || (r.history && Di(e).on("popstate", o), Di(e).on("hashchange", o), I = !0), E.push(t), t
        }, c.$$applicationDestroyed = function () {
            Di(e).off("hashchange popstate", o)
        }, c.$$checkUrlChange = u, c.baseHref = function () {
            var e = T.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, c.defer = function (e, t) {
            var n;
            return v++, n = f(function () {
                delete m[n], s(e)
            }, t || 0), m[n] = !0, n
        }, c.defer.cancel = function (e) {
            return m[e] ? (delete m[e], $(e), s(p), !0) : !1
        }
    }

    function ct() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (e, t, n, i) {
            return new ut(e, i, t, n)
        }]
    }

    function ht() {
        this.$get = function () {
            function e(e, i) {
                function r(e) {
                    e != d && (p ? p == e && (p = e.n) : p = e, s(e.n, e.p), s(e, d), d = e, d.n = null)
                }

                function s(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e))
                }
                if (e in n) throw t("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                var a = 0,
                    o = u({}, i, {
                        id: e
                    }),
                    l = fe(),
                    c = i && i.capacity || Number.MAX_VALUE,
                    h = fe(),
                    d = null,
                    p = null;
                return n[e] = {
                    put: function (e, t) {
                        if (!g(t)) {
                            if (c < Number.MAX_VALUE) {
                                var n = h[e] || (h[e] = {
                                    key: e
                                });
                                r(n)
                            }
                            return e in l || a++, l[e] = t, a > c && this.remove(p.key), t
                        }
                    },
                    get: function (e) {
                        if (c < Number.MAX_VALUE) {
                            var t = h[e];
                            if (!t) return;
                            r(t)
                        }
                        return l[e]
                    },
                    remove: function (e) {
                        if (c < Number.MAX_VALUE) {
                            var t = h[e];
                            if (!t) return;
                            t == d && (d = t.p), t == p && (p = t.n), s(t.n, t.p), delete h[e]
                        }
                        e in l && (delete l[e], a--)
                    },
                    removeAll: function () {
                        l = fe(), a = 0, h = fe(), d = p = null
                    },
                    destroy: function () {
                        l = null, o = null, h = null, delete n[e]
                    },
                    info: function () {
                        return u({}, o, {
                            size: a
                        })
                    }
                }
            }
            var n = {};
            return e.info = function () {
                var e = {};
                return i(n, function (t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function (e) {
                return n[e]
            }, e
        }
    }

    function dt() {
        this.$get = ["$cacheFactory", function (e) {
            return e("templates")
        }]
    }

    function pt() {}

    function ft(t, n) {
        function r(e, t, n) {
            var r = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
                s = fe();
            return i(e, function (e, i) {
                if (e in E) return void(s[i] = E[e]);
                var a = e.match(r);
                if (!a) throw Gr("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, i, e, n ? "controller bindings definition" : "isolate scope definition");
                s[i] = {
                    mode: a[1][0],
                    collection: "*" === a[2],
                    optional: "?" === a[3],
                    attrName: a[4] || i
                }, a[4] && (E[e] = s[i])
            }), s
        }

        function a(e, t) {
            var n = {
                isolateScope: null,
                bindToController: null
            };
            if (w(e.scope) && (e.bindToController === !0 ? (n.bindToController = r(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = r(e.scope, t, !1)), w(e.bindToController) && (n.bindToController = r(e.bindToController, t, !0)), w(n.bindToController)) {
                var i = e.controller,
                    s = e.controllerAs;
                if (!i) throw Gr("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
                if (!wt(i, s)) throw Gr("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
            }
            return n
        }

        function o(e) {
            var t = e.charAt(0);
            if (!t || t !== Fi(t)) throw Gr("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
            if (e !== e.trim()) throw Gr("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
        }

        function l(e) {
            var t = e.require || e.controller && e.name;
            return !Yi(t) && w(t) && i(t, function (e, n) {
                var i = e.match(T),
                    r = e.substring(i[0].length);
                r || (t[n] = i[0] + n)
            }), t
        }
        var c = {},
            h = "Directive",
            m = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            y = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            b = R("ngSrc,ngSrcset,src,srcset"),
            T = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            C = /^(on[a-z]+|formaction)$/,
            E = fe();
        this.directive = function k(e, n) {
            return he(e, "directive"), x(e) ? (o(e), ue(n, "directiveFactory"), c.hasOwnProperty(e) || (c[e] = [], t.factory(e + h, ["$injector", "$exceptionHandler", function (t, n) {
                var r = [];
                return i(c[e], function (i, s) {
                    try {
                        var a = t.invoke(i);
                        M(a) ? a = {
                            compile: $(a)
                        } : !a.compile && a.link && (a.compile = $(a.link)), a.priority = a.priority || 0, a.index = s, a.name = a.name || e, a.require = l(a), a.restrict = a.restrict || "EA", a.$$moduleName = i.$$moduleName, r.push(a)
                    } catch (o) {
                        n(o)
                    }
                }), r
            }])), c[e].push(n)) : i(e, s(k)), this
        }, this.component = function (e, t) {
            function n(e) {
                function n(t) {
                    return M(t) || Yi(t) ? function (n, i) {
                        return e.invoke(t, this, {
                            $element: n,
                            $attrs: i
                        })
                    } : t
                }
                var s = t.template || t.templateUrl ? t.template : "",
                    a = {
                        controller: r,
                        controllerAs: wt(t.controller) || t.controllerAs || "$ctrl",
                        template: n(s),
                        templateUrl: n(t.templateUrl),
                        transclude: t.transclude,
                        scope: {},
                        bindToController: t.bindings || {},
                        restrict: "E",
                        require: t.require
                    };
                return i(t, function (e, t) {
                    "$" === t.charAt(0) && (a[t] = e)
                }), a
            }
            var r = t.controller || function () {};
            return i(t, function (e, t) {
                "$" === t.charAt(0) && (n[t] = e, M(r) && (r[t] = e))
            }), n.$inject = ["$injector"], this.directive(e, n)
        }, this.aHrefSanitizationWhitelist = function (e) {
            return v(e) ? (n.aHrefSanitizationWhitelist(e), this) : n.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (e) {
            return v(e) ? (n.imgSrcSanitizationWhitelist(e), this) : n.imgSrcSanitizationWhitelist()
        };
        var S = !0;
        this.debugInfoEnabled = function (e) {
            return v(e) ? (S = e, this) : S
        };
        var O = 10;
        this.onChangesTtl = function (e) {
            return arguments.length ? (O = e, this) : O
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (t, n, r, s, o, l, $, E, k, P) {
            function F() {
                try {
                    if (!--Te) throw we = void 0, Gr("infchng", "{0} $onChanges() iterations reached. Aborting!\n", O);
                    $.$apply(function () {
                        for (var e = [], t = 0, n = we.length; n > t; ++t) try {
                            we[t]()
                        } catch (i) {
                            e.push(i)
                        }
                        if (we = void 0, e.length) throw e
                    })
                } finally {
                    Te++
                }
            }

            function _(e, t) {
                if (t) {
                    var n, i, r, s = Object.keys(t);
                    for (n = 0, i = s.length; i > n; n++) r = s[n], this[r] = t[r]
                } else this.$attr = {};
                this.$$element = e
            }

            function j(e, t, n) {
                xe.innerHTML = "<span " + t + ">";
                var i = xe.firstChild.attributes,
                    r = i[0];
                i.removeNamedItem(r.name), r.value = n, e.attributes.setNamedItem(r)
            }

            function R(e, t) {
                try {
                    e.addClass(t)
                } catch (n) {}
            }

            function N(t, n, i, r, s) {
                t instanceof Di || (t = Di(t));
                for (var a = /\S+/, o = 0, l = t.length; l > o; o++) {
                    var u = t[o];
                    u.nodeType === or && u.nodeValue.match(a) && Se(u, t[o] = e.document.createElement("span"))
                }
                var c = V(t, n, t, i, r, s);
                N.$$addScopeClass(t);
                var h = null;
                return function (e, n, i) {
                    ue(e, "scope"), s && s.needsNewScope && (e = e.$parent.$new()), i = i || {};
                    var r = i.parentBoundTranscludeFn,
                        a = i.transcludeControllers,
                        o = i.futureParentElement;
                    r && r.$$boundTransclude && (r = r.$$boundTransclude), h || (h = U(o));
                    var l;
                    if (l = "html" !== h ? Di(he(h, Di("<div>").append(t).html())) : n ? Er.clone.call(t) : t, a)
                        for (var u in a) l.data("$" + u + "Controller", a[u].instance);
                    return N.$$addScopeInfo(l, e), n && n(l, e), c && c(e, l, l, r), l
                }
            }

            function U(e) {
                var t = e && e[0];
                return t && "foreignobject" !== L(t) && Vi.call(t).match(/SVG/) ? "svg" : "html"
            }

            function V(e, t, n, i, r, s) {
                function a(e, n, i, r) {
                    var s, a, o, l, u, c, h, d, $;
                    if (p) {
                        var m = n.length;
                        for ($ = new Array(m), u = 0; u < f.length; u += 3) h = f[u], $[h] = n[h]
                    } else $ = n;
                    for (u = 0, c = f.length; c > u;) o = $[f[u++]], s = f[u++], a = f[u++], s ? (s.scope ? (l = e.$new(), N.$$addScopeInfo(Di(o), l)) : l = e, d = s.transcludeOnThisElement ? q(e, s.transclude, r) : !s.templateOnThisElement && r ? r : !r && t ? q(e, t) : null, s(a, l, o, i, d)) : a && a(e, o.childNodes, void 0, r)
                }
                for (var o, l, u, c, h, d, p, f = [], $ = 0; $ < e.length; $++) o = new _, l = G(e[$], [], o, 0 === $ ? i : void 0, r), u = l.length ? J(l, e[$], o, t, n, null, [], [], s) : null, u && u.scope && N.$$addScopeClass(o.$$element), h = u && u.terminal || !(c = e[$].childNodes) || !c.length ? null : V(c, u ? (u.transcludeOnThisElement || !u.templateOnThisElement) && u.transclude : t), (u || h) && (f.push($, u, h), d = !0, p = p || u), s = null;
                return d ? a : null
            }

            function q(e, t, n) {
                function i(i, r, s, a, o) {
                    return i || (i = e.$new(!1, o), i.$$transcluded = !0), t(i, r, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: s,
                        futureParentElement: a
                    })
                }
                var r = i.$$slots = fe();
                for (var s in t.$$slots) t.$$slots[s] ? r[s] = q(e, t.$$slots[s], n) : r[s] = null;
                return i
            }

            function G(e, t, n, i, r) {
                var s, a, o = e.nodeType,
                    l = n.$attr;
                switch (o) {
                    case sr:
                        ne(t, mt(L(e)), "E", i, r);
                        for (var u, c, h, d, p, f, $ = e.attributes, m = 0, g = $ && $.length; g > m; m++) {
                            var v = !1,
                                b = !1;
                            u = $[m], c = u.name, p = Zi(u.value), d = mt(c), (f = Ie.test(d)) && (c = c.replace(Wr, "").substr(8).replace(/_(.)/g, function (e, t) {
                                return t.toUpperCase()
                            }));
                            var T = d.match(Oe);
                            T && ie(T[1]) && (v = c, b = c.substr(0, c.length - 5) + "end", c = c.substr(0, c.length - 6)), h = mt(c.toLowerCase()), l[h] = c, (f || !n.hasOwnProperty(h)) && (n[h] = p, qe(e, h) && (n[h] = !0)), pe(e, t, p, h, f), ne(t, h, "A", i, r, v, b)
                        }
                        if (a = e.className, w(a) && (a = a.animVal), x(a) && "" !== a)
                            for (; s = y.exec(a);) h = mt(s[2]), ne(t, h, "C", i, r) && (n[h] = Zi(s[3])), a = a.substr(s.index + s[0].length);
                        break;
                    case or:
                        if (11 === Li)
                            for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === or;) e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
                        ce(t, e.nodeValue);
                        break;
                    case lr:
                        B(e, t, n, i, r)
                }
                return t.sort(ae), t
            }

            function B(e, t, n, i, r) {
                try {
                    var s = m.exec(e.nodeValue);
                    if (s) {
                        var a = mt(s[1]);
                        ne(t, a, "M", i, r) && (n[a] = Zi(s[2]))
                    }
                } catch (o) {}
            }

            function W(e, t, n) {
                var i = [],
                    r = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e) throw Gr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                        e.nodeType == sr && (e.hasAttribute(t) && r++, e.hasAttribute(n) && r--), i.push(e), e = e.nextSibling
                    } while (r > 0)
                } else i.push(e);
                return Di(i)
            }

            function Y(e, t, n) {
                return function (i, r, s, a, o) {
                    return r = W(r[0], t, n), e(i, r, s, a, o)
                }
            }

            function Z(e, t, n, i, r, s) {
                var a;
                return e ? N(t, n, i, r, s) : function () {
                    return a || (a = N(t, n, i, r, s), t = n = s = null), a.apply(this, arguments)
                }
            }

            function J(e, t, n, s, a, o, l, c, h) {
                function d(e, t, n, i) {
                    e && (n && (e = Y(e, n, i)), e.require = f.require, e.directiveName = $, (C === f || f.$$isolateScope) && (e = me(e, {
                        isolateScope: !0
                    })), l.push(e)), t && (n && (t = Y(t, n, i)), t.require = f.require, t.directiveName = $, (C === f || f.$$isolateScope) && (t = me(t, {
                        isolateScope: !0
                    })), c.push(t))
                }

                function p(e, s, a, o, h) {
                    function d(e, t, n, i) {
                        var r;
                        if (I(e) || (i = n, n = t, t = e, e = void 0), A && (r = y), n || (n = A ? S.parent() : S), !i) return h(e, t, r, n, D);
                        var s = h.$$slots[i];
                        if (s) return s(e, t, r, n, D);
                        if (g(s)) throw Gr("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', i, K(S))
                    }
                    var p, f, $, m, v, y, x, S, O, k;
                    t === a ? (O = n, S = n.$$element) : (S = Di(a), O = new _(S, n)), v = s, C ? m = s.$new(!0) : b && (v = s.$parent), h && (x = d, x.$$boundTransclude = h, x.isSlotFilled = function (e) {
                        return !!h.$$slots[e]
                    }), T && (y = ee(S, O, x, T, m, s, C)), C && (N.$$addScopeInfo(S, m, !0, !(E && (E === C || E === C.$$originalDirective))), N.$$addScopeClass(S, !0), m.$$isolateBindings = C.$$isolateBindings, k = ve(s, O, m, m.$$isolateBindings, C), k.removeWatches && m.$on("$destroy", k.removeWatches));
                    for (var P in y) {
                        var F = T[P],
                            j = y[P],
                            R = F.$$bindings.bindToController;
                        j.identifier && R ? j.bindingInfo = ve(v, O, j.instance, R, F) : j.bindingInfo = {};
                        var L = j();
                        L !== j.instance && (j.instance = L, S.data("$" + F.name + "Controller", L), j.bindingInfo.removeWatches && j.bindingInfo.removeWatches(), j.bindingInfo = ve(v, O, j.instance, R, F))
                    }
                    for (i(T, function (e, t) {
                            var n = e.require;
                            e.bindToController && !Yi(n) && w(n) && u(y[t].instance, Q(t, n, S, y))
                        }), i(y, function (e) {
                            var t = e.instance;
                            if (M(t.$onChanges)) try {
                                t.$onChanges(e.bindingInfo.initialChanges)
                            } catch (n) {
                                r(n)
                            }
                            if (M(t.$onInit)) try {
                                t.$onInit()
                            } catch (n) {
                                r(n)
                            }
                            M(t.$doCheck) && (v.$watch(function () {
                                t.$doCheck()
                            }), t.$doCheck()), M(t.$onDestroy) && v.$on("$destroy", function () {
                                t.$onDestroy()
                            })
                        }), p = 0, f = l.length; f > p; p++) $ = l[p], ge($, $.isolateScope ? m : s, S, O, $.require && Q($.directiveName, $.require, S, y), x);
                    var D = s;
                    for (C && (C.template || null === C.templateUrl) && (D = m), e && e(D, a.childNodes, void 0, h), p = c.length - 1; p >= 0; p--) $ = c[p], ge($, $.isolateScope ? m : s, S, O, $.require && Q($.directiveName, $.require, S, y), x);
                    i(y, function (e) {
                        var t = e.instance;
                        M(t.$postLink) && t.$postLink()
                    })
                }
                h = h || {};
                for (var f, $, m, v, y, x = -Number.MAX_VALUE, b = h.newScopeDirective, T = h.controllerDirectives, C = h.newIsolateScopeDirective, E = h.templateDirective, S = h.nonTlbTranscludeDirective, O = !1, k = !1, A = h.hasElementTranscludeDirective, P = n.$$element = Di(t), F = o, j = s, R = !1, D = !1, z = 0, U = e.length; U > z; z++) {
                    f = e[z];
                    var V = f.$$start,
                        q = f.$$end;
                    if (V && (P = W(t, V, q)), m = void 0, x > f.priority) break;
                    if ((y = f.scope) && (f.templateUrl || (w(y) ? (le("new/isolated scope", C || b, f, P), C = f) : le("new/isolated scope", C, f, P)), b = b || f), $ = f.name, !R && (f.replace && (f.templateUrl || f.template) || f.transclude && !f.$$tlb)) {
                        for (var B, J = z + 1; B = e[J++];)
                            if (B.transclude && !B.$$tlb || B.replace && (B.templateUrl || B.template)) {
                                D = !0;
                                break
                            } R = !0
                    }
                    if (!f.templateUrl && f.controller && (y = f.controller, T = T || fe(), le("'" + $ + "' controller", T[$], f, P), T[$] = f), y = f.transclude)
                        if (O = !0, f.$$tlb || (le("transclusion", S, f, P), S = f), "element" == y) A = !0, x = f.priority, m = P, P = n.$$element = Di(N.$$createComment($, n[$])), t = P[0], $e(a, X(m), t), m[0].$$parentNode = m[0].parentNode, j = Z(D, m, s, x, F && F.name, {
                            nonTlbTranscludeDirective: S
                        });
                        else {
                            var ne = fe();
                            if (m = Di(ke(t)).contents(), w(y)) {
                                m = [];
                                var ie = fe(),
                                    ae = fe();
                                i(y, function (e, t) {
                                    var n = "?" === e.charAt(0);
                                    e = n ? e.substring(1) : e, ie[e] = t, ne[t] = null, ae[t] = n
                                }), i(P.contents(), function (e) {
                                    var t = ie[mt(L(e))];
                                    t ? (ae[t] = !0, ne[t] = ne[t] || [], ne[t].push(e)) : m.push(e)
                                }), i(ae, function (e, t) {
                                    if (!e) throw Gr("reqslot", "Required transclusion slot `{0}` was not filled.", t)
                                });
                                for (var oe in ne) ne[oe] && (ne[oe] = Z(D, ne[oe], s))
                            }
                            P.empty(), j = Z(D, m, s, void 0, void 0, {
                                needsNewScope: f.$$isolateScope || f.$$newScope
                            }), j.$$slots = ne
                        } if (f.template)
                        if (k = !0, le("template", E, f, P), E = f, y = M(f.template) ? f.template(P, n) : f.template, y = Ee(y), f.replace) {
                            if (F = f, m = be(y) ? [] : vt(he(f.templateNamespace, Zi(y))), t = m[0], 1 != m.length || t.nodeType !== sr) throw Gr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", $, "");
                            $e(a, P, t);
                            var ue = {
                                    $attr: {}
                                },
                                ce = G(t, [], ue),
                                de = e.splice(z + 1, e.length - (z + 1));
                            (C || b) && te(ce, C, b), e = e.concat(ce).concat(de), re(n, ue), U = e.length
                        } else P.html(y);
                    if (f.templateUrl) k = !0, le("template", E, f, P), E = f, f.replace && (F = f), p = se(e.splice(z, e.length - z), P, n, a, O && j, l, c, {
                        controllerDirectives: T,
                        newScopeDirective: b !== f && b,
                        newIsolateScopeDirective: C,
                        templateDirective: E,
                        nonTlbTranscludeDirective: S
                    }), U = e.length;
                    else if (f.compile) try {
                        v = f.compile(P, n, j);
                        var pe = f.$$originalDirective || f;
                        M(v) ? d(null, H(pe, v), V, q) : v && d(H(pe, v.pre), H(pe, v.post), V, q)
                    } catch (we) {
                        r(we, K(P))
                    }
                    f.terminal && (p.terminal = !0, x = Math.max(x, f.priority))
                }
                return p.scope = b && b.scope === !0, p.transcludeOnThisElement = O, p.templateOnThisElement = k, p.transclude = j, h.hasElementTranscludeDirective = A, p
            }

            function Q(e, t, n, r) {
                var s;
                if (x(t)) {
                    var a = t.match(T),
                        o = t.substring(a[0].length),
                        l = a[1] || a[3],
                        u = "?" === a[2];
                    if ("^^" === l ? n = n.parent() : (s = r && r[o], s = s && s.instance), !s) {
                        var c = "$" + o + "Controller";
                        s = l ? n.inheritedData(c) : n.data(c)
                    }
                    if (!s && !u) throw Gr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", o, e)
                } else if (Yi(t)) {
                    s = [];
                    for (var h = 0, d = t.length; d > h; h++) s[h] = Q(e, t[h], n, r)
                } else w(t) && (s = {}, i(t, function (t, i) {
                    s[i] = Q(e, t, n, r)
                }));
                return s || null
            }

            function ee(e, t, n, i, r, s, a) {
                var o = fe();
                for (var u in i) {
                    var c = i[u],
                        h = {
                            $scope: c === a || c.$$isolateScope ? r : s,
                            $element: e,
                            $attrs: t,
                            $transclude: n
                        },
                        d = c.controller;
                    "@" == d && (d = t[c.name]);
                    var p = l(d, h, !0, c.controllerAs);
                    o[c.name] = p, e.data("$" + c.name + "Controller", p.instance)
                }
                return o
            }

            function te(e, t, n) {
                for (var i = 0, r = e.length; r > i; i++) e[i] = d(e[i], {
                    $$isolateScope: t,
                    $$newScope: n
                })
            }

            function ne(e, n, i, s, o, l, u) {
                if (n === o) return null;
                var p = null;
                if (c.hasOwnProperty(n))
                    for (var f, $ = t.get(n + h), m = 0, v = $.length; v > m; m++) try {
                        if (f = $[m], (g(s) || s > f.priority) && -1 != f.restrict.indexOf(i)) {
                            if (l && (f = d(f, {
                                    $$start: l,
                                    $$end: u
                                })), !f.$$bindings) {
                                var y = f.$$bindings = a(f, f.name);
                                w(y.isolateScope) && (f.$$isolateBindings = y.isolateScope)
                            }
                            e.push(f), p = f
                        }
                    } catch (x) {
                        r(x)
                    }
                return p
            }

            function ie(e) {
                if (c.hasOwnProperty(e))
                    for (var n, i = t.get(e + h), r = 0, s = i.length; s > r; r++)
                        if (n = i[r], n.multiElement) return !0;
                return !1
            }

            function re(e, t) {
                var n = t.$attr,
                    r = e.$attr;
                e.$$element;
                i(e, function (i, r) {
                    "$" != r.charAt(0) && (t[r] && t[r] !== i && (i += ("style" === r ? ";" : " ") + t[r]), e.$set(r, i, !0, n[r]))
                }), i(t, function (t, i) {
                    e.hasOwnProperty(i) || "$" === i.charAt(0) || (e[i] = t, "class" !== i && "style" !== i && (r[i] = n[i]))
                })
            }

            function se(e, t, n, r, a, o, l, u) {
                var c, h, p = [],
                    f = t[0],
                    $ = e.shift(),
                    m = d($, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: $
                    }),
                    g = M($.templateUrl) ? $.templateUrl(t, n) : $.templateUrl,
                    v = $.templateNamespace;
                return t.empty(), s(g).then(function (s) {
                        var d, y, x, b;
                        if (s = Ee(s), $.replace) {
                            if (x = be(s) ? [] : vt(he(v, Zi(s))), d = x[0], 1 != x.length || d.nodeType !== sr) throw Gr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", $.name, g);
                            y = {
                                $attr: {}
                            }, $e(r, t, d);
                            var T = G(d, [], y);
                            w($.scope) && te(T, !0), e = T.concat(e), re(n, y)
                        } else d = f, t.html(s);
                        for (e.unshift(m), c = J(e, d, n, a, t, $, o, l, u), i(r, function (e, n) {
                                e == d && (r[n] = t[0])
                            }), h = V(t[0].childNodes, a); p.length;) {
                            var M = p.shift(),
                                C = p.shift(),
                                E = p.shift(),
                                I = p.shift(),
                                S = t[0];
                            if (!M.$$destroyed) {
                                if (C !== f) {
                                    var O = C.className;
                                    u.hasElementTranscludeDirective && $.replace || (S = ke(d)), $e(E, Di(C), S), R(Di(S), O)
                                }
                                b = c.transcludeOnThisElement ? q(M, c.transclude, I) : I, c(h, M, S, r, b)
                            }
                        }
                        p = null
                    }),
                    function (e, t, n, i, r) {
                        var s = r;
                        t.$$destroyed || (p ? p.push(t, n, i, s) : (c.transcludeOnThisElement && (s = q(t, c.transclude, r)), c(h, t, n, i, s)))
                    }
            }

            function ae(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function le(e, t, n, i) {
                function r(e) {
                    return e ? " (module: " + e + ")" : ""
                }
                if (t) throw Gr("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, r(t.$$moduleName), n.name, r(n.$$moduleName), e, K(i))
            }

            function ce(e, t) {
                var i = n(t, !0);
                i && e.push({
                    priority: 0,
                    compile: function (e) {
                        var t = e.parent(),
                            n = !!t.length;
                        return n && N.$$addBindingClass(t),
                            function (e, t) {
                                var r = t.parent();
                                n || N.$$addBindingClass(r), N.$$addBindingInfo(r, i.expressions), e.$watch(i, function (e) {
                                    t[0].nodeValue = e
                                })
                            }
                    }
                })
            }

            function he(t, n) {
                switch (t = Fi(t || "html")) {
                    case "svg":
                    case "math":
                        var i = e.document.createElement("div");
                        return i.innerHTML = "<" + t + ">" + n + "</" + t + ">", i.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function de(e, t) {
                if ("srcdoc" == t) return E.HTML;
                var n = L(e);
                return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? E.RESOURCE_URL : void 0
            }

            function pe(e, t, i, r, s) {
                var a = de(e, r);
                s = b[r] || s;
                var o = n(i, !0, a, s);
                if (o) {
                    if ("multiple" === r && "select" === L(e)) throw Gr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", K(e));
                    t.push({
                        priority: 100,
                        compile: function () {
                            return {
                                pre: function (e, t, l) {
                                    var u = l.$$observers || (l.$$observers = fe());
                                    if (C.test(r)) throw Gr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var c = l[r];
                                    c !== i && (o = c && n(c, !0, a, s), i = c), o && (l[r] = o(e), (u[r] || (u[r] = [])).$$inter = !0, (l.$$observers && l.$$observers[r].$$scope || e).$watch(o, function (e, t) {
                                        "class" === r && e != t ? l.$updateClass(e, t) : l.$set(r, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function $e(t, n, i) {
                var r, s, a = n[0],
                    o = n.length,
                    l = a.parentNode;
                if (t)
                    for (r = 0, s = t.length; s > r; r++)
                        if (t[r] == a) {
                            t[r++] = i;
                            for (var u = r, c = u + o - 1, h = t.length; h > u; u++, c++) h > c ? t[u] = t[c] : delete t[u];
                            t.length -= o - 1, t.context === a && (t.context = i);
                            break
                        } l && l.replaceChild(i, a);
                var d = e.document.createDocumentFragment();
                for (r = 0; o > r; r++) d.appendChild(n[r]);
                for (Di.hasData(a) && (Di.data(i, Di.data(a)), Di(a).off("$destroy")), Di.cleanData(d.querySelectorAll("*")), r = 1; o > r; r++) delete n[r];
                n[0] = i, n.length = 1
            }

            function me(e, t) {
                return u(function () {
                    return e.apply(null, arguments)
                }, e, t)
            }

            function ge(e, t, n, i, s, a) {
                try {
                    e(t, n, i, s, a)
                } catch (o) {
                    r(o, K(n))
                }
            }

            function ve(e, t, r, s, a) {
                function l(t, n, i) {
                    M(r.$onChanges) && n !== i && (we || (e.$$postDigest(F), we = []), c || (c = {}, we.push(u)), c[t] && (i = c[t].previousValue), c[t] = new $t(i, n))
                }

                function u() {
                    r.$onChanges(c), c = void 0
                }
                var c, h = [],
                    d = {};
                return i(s, function (i, s) {
                    var u, c, f, $, m, g = i.attrName,
                        v = i.optional,
                        w = i.mode;
                    switch (w) {
                        case "@":
                            v || Pi.call(t, g) || (r[s] = t[g] = void 0), t.$observe(g, function (e) {
                                if (x(e) || A(e)) {
                                    var t = r[s];
                                    l(s, e, t), r[s] = e
                                }
                            }), t.$$observers[g].$$scope = e, u = t[g], x(u) ? r[s] = n(u)(e) : A(u) && (r[s] = u), d[s] = new $t(Br, r[s]);
                            break;
                        case "=":
                            if (!Pi.call(t, g)) {
                                if (v) break;
                                t[g] = void 0
                            }
                            if (v && !t[g]) break;
                            c = o(t[g]), $ = c.literal ? z : function (e, t) {
                                return e === t || e !== e && t !== t
                            }, f = c.assign || function () {
                                throw u = r[s] = c(e), Gr("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[g], g, a.name)
                            }, u = r[s] = c(e);
                            var y = function (t) {
                                return $(t, r[s]) || ($(t, u) ? f(e, t = r[s]) : r[s] = t), u = t
                            };
                            y.$stateful = !0, m = i.collection ? e.$watchCollection(t[g], y) : e.$watch(o(t[g], y), null, c.literal), h.push(m);
                            break;
                        case "<":
                            if (!Pi.call(t, g)) {
                                if (v) break;
                                t[g] = void 0
                            }
                            if (v && !t[g]) break;
                            c = o(t[g]);
                            var b = r[s] = c(e);
                            d[s] = new $t(Br, r[s]), m = e.$watch(c, function (e, t) {
                                if (t === e) {
                                    if (t === b) return;
                                    t = b
                                }
                                l(s, e, t), r[s] = e
                            }, c.literal), h.push(m);
                            break;
                        case "&":
                            if (c = t.hasOwnProperty(g) ? o(t[g]) : p, c === p && v) break;
                            r[s] = function (t) {
                                return c(e, t)
                            }
                    }
                }), {
                    initialChanges: d,
                    removeWatches: h.length && function () {
                        for (var e = 0, t = h.length; t > e; ++e) h[e]()
                    }
                }
            }
            var we, ye = /^\w/,
                xe = e.document.createElement("div"),
                Te = O;
            _.prototype = {
                $normalize: mt,
                $addClass: function (e) {
                    e && e.length > 0 && k.addClass(this.$$element, e)
                },
                $removeClass: function (e) {
                    e && e.length > 0 && k.removeClass(this.$$element, e)
                },
                $updateClass: function (e, t) {
                    var n = gt(e, t);
                    n && n.length && k.addClass(this.$$element, n);
                    var i = gt(t, e);
                    i && i.length && k.removeClass(this.$$element, i)
                },
                $set: function (e, t, n, s) {
                    var a, o = this.$$element[0],
                        l = qe(o, e),
                        u = Ge(e),
                        c = e;
                    if (l ? (this.$$element.prop(e, t), s = l) : u && (this[u] = t, c = u), this[e] = t, s ? this.$attr[e] = s : (s = this.$attr[e], s || (this.$attr[e] = s = oe(e, "-"))), a = L(this.$$element), "a" === a && ("href" === e || "xlinkHref" === e) || "img" === a && "src" === e) this[e] = t = P(t, "src" === e);
                    else if ("img" === a && "srcset" === e && v(t)) {
                        for (var h = "", d = Zi(t), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, f = /\s/.test(d) ? p : /(,)/, $ = d.split(f), m = Math.floor($.length / 2), w = 0; m > w; w++) {
                            var y = 2 * w;
                            h += P(Zi($[y]), !0), h += " " + Zi($[y + 1])
                        }
                        var x = Zi($[2 * w]).split(/\s/);
                        h += P(Zi(x[0]), !0), 2 === x.length && (h += " " + Zi(x[1])), this[e] = t = h
                    }
                    n !== !1 && (null === t || g(t) ? this.$$element.removeAttr(s) : ye.test(s) ? this.$$element.attr(s, t) : j(this.$$element[0], s, t));
                    var b = this.$$observers;
                    b && i(b[c], function (e) {
                        try {
                            e(t)
                        } catch (n) {
                            r(n)
                        }
                    })
                },
                $observe: function (e, t) {
                    var n = this,
                        i = n.$$observers || (n.$$observers = fe()),
                        r = i[e] || (i[e] = []);
                    return r.push(t), $.$evalAsync(function () {
                            r.$$inter || !n.hasOwnProperty(e) || g(n[e]) || t(n[e])
                        }),
                        function () {
                            D(r, t)
                        }
                }
            };
            var Me = n.startSymbol(),
                Ce = n.endSymbol(),
                Ee = "{{" == Me && "}}" == Ce ? f : function (e) {
                    return e.replace(/\{\{/g, Me).replace(/}}/g, Ce)
                },
                Ie = /^ngAttr[A-Z]/,
                Oe = /^(.+)Start$/;
            return N.$$addBindingInfo = S ? function (e, t) {
                var n = e.data("$binding") || [];
                Yi(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
            } : p, N.$$addBindingClass = S ? function (e) {
                R(e, "ng-binding")
            } : p, N.$$addScopeInfo = S ? function (e, t, n, i) {
                var r = n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                e.data(r, t)
            } : p, N.$$addScopeClass = S ? function (e, t) {
                R(e, t ? "ng-isolate-scope" : "ng-scope")
            } : p, N.$$createComment = function (t, n) {
                var i = "";
                return S && (i = " " + (t || "") + ": ", n && (i += n + " ")), e.document.createComment(i)
            }, N
        }]
    }

    function $t(e, t) {
        this.previousValue = e, this.currentValue = t
    }

    function mt(e) {
        return xe(e.replace(Wr, ""))
    }

    function gt(e, t) {
        var n = "",
            i = e.split(/\s+/),
            r = t.split(/\s+/);
        e: for (var s = 0; s < i.length; s++) {
            for (var a = i[s], o = 0; o < r.length; o++)
                if (a == r[o]) continue e;
            n += (n.length > 0 ? " " : "") + a
        }
        return n
    }

    function vt(e) {
        e = Di(e);
        var t = e.length;
        if (1 >= t) return e;
        for (; t--;) {
            var n = e[t];
            n.nodeType === lr && Xi.call(e, t, 1)
        }
        return e
    }

    function wt(e, t) {
        if (t && x(t)) return t;
        if (x(e)) {
            var n = Kr.exec(e);
            if (n) return n[3]
        }
    }

    function yt() {
        var e = {},
            n = !1;
        this.has = function (t) {
            return e.hasOwnProperty(t)
        }, this.register = function (t, n) {
            he(t, "controller"), w(t) ? u(e, t) : e[t] = n
        }, this.allowGlobals = function () {
            n = !0
        }, this.$get = ["$injector", "$window", function (i, r) {
            function s(e, n, i, r) {
                if (!e || !w(e.$scope)) throw t("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r, n);
                e.$scope[n] = i
            }
            return function (t, a, o, l) {
                var c, h, d, p;
                if (o = o === !0, l && x(l) && (p = l), x(t)) {
                    if (h = t.match(Kr), !h) throw Yr("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", t);
                    d = h[1], p = p || h[3], t = e.hasOwnProperty(d) ? e[d] : de(a.$scope, d, !0) || (n ? de(r, d, !0) : void 0), ce(t, d, !0)
                }
                if (o) {
                    var f = (Yi(t) ? t[t.length - 1] : t).prototype;
                    c = Object.create(f || null), p && s(a, p, c, d || t.name);
                    var $;
                    return $ = u(function () {
                        var e = i.invoke(t, c, a, d);
                        return e !== c && (w(e) || M(e)) && (c = e, p && s(a, p, c, d || t.name)), c
                    }, {
                        instance: c,
                        identifier: p
                    })
                }
                return c = i.instantiate(t, a, d), p && s(a, p, c, d || t.name), c
            }
        }]
    }

    function xt() {
        this.$get = ["$window", function (e) {
            return Di(e.document)
        }]
    }

    function bt() {
        this.$get = ["$log", function (e) {
            return function (t, n) {
                e.error.apply(e, arguments)
            }
        }]
    }

    function Tt(e) {
        return w(e) ? T(e) ? e.toISOString() : q(e) : e
    }

    function Mt() {
        this.$get = function () {
            return function (e) {
                if (!e) return "";
                var t = [];
                return r(e, function (e, n) {
                    null === e || g(e) || (Yi(e) ? i(e, function (e) {
                        t.push(te(n) + "=" + te(Tt(e)))
                    }) : t.push(te(n) + "=" + te(Tt(e))))
                }), t.join("&")
            }
        }
    }

    function Ct() {
        this.$get = function () {
            return function (e) {
                function t(e, s, a) {
                    null === e || g(e) || (Yi(e) ? i(e, function (e, n) {
                        t(e, s + "[" + (w(e) ? n : "") + "]")
                    }) : w(e) && !T(e) ? r(e, function (e, n) {
                        t(e, s + (a ? "" : "[") + n + (a ? "" : "]"))
                    }) : n.push(te(s) + "=" + te(Tt(e))))
                }
                if (!e) return "";
                var n = [];
                return t(e, "", !0), n.join("&")
            }
        }
    }

    function Et(e, t) {
        if (x(e)) {
            var n = e.replace(ns, "").trim();
            if (n) {
                var i = t("Content-Type");
                (i && 0 === i.indexOf(Jr) || It(n)) && (e = G(n))
            }
        }
        return e
    }

    function It(e) {
        var t = e.match(es);
        return t && ts[t[0]].test(e)
    }

    function St(e) {
        function t(e, t) {
            e && (r[e] = r[e] ? r[e] + ", " + t : t)
        }
        var n, r = fe();
        return x(e) ? i(e.split("\n"), function (e) {
            n = e.indexOf(":"), t(Fi(Zi(e.substr(0, n))), Zi(e.substr(n + 1)))
        }) : w(e) && i(e, function (e, n) {
            t(Fi(n), Zi(e))
        }), r
    }

    function Ot(e) {
        var t;
        return function (n) {
            if (t || (t = St(e)), n) {
                var i = t[Fi(n)];
                return void 0 === i && (i = null), i
            }
            return t
        }
    }

    function kt(e, t, n, r) {
        return M(r) ? r(e, t, n) : (i(r, function (i) {
            e = i(e, t, n)
        }), e)
    }

    function At(e) {
        return e >= 200 && 300 > e
    }

    function Pt() {
        var e = this.defaults = {
                transformResponse: [Et],
                transformRequest: [function (e) {
                    return !w(e) || S(e) || k(e) || O(e) ? e : q(e)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: me(Qr),
                    put: me(Qr),
                    patch: me(Qr)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            n = !1;
        this.useApplyAsync = function (e) {
            return v(e) ? (n = !!e, this) : n
        };
        var r = !0;
        this.useLegacyPromiseExtensions = function (e) {
            return v(e) ? (r = !!e, this) : r
        };
        var s = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, o, l, c, h, d) {
            function p(n) {
                function s(e, t) {
                    for (var n = 0, i = t.length; i > n;) {
                        var r = t[n++],
                            s = t[n++];
                        e = e.then(r, s)
                    }
                    return t.length = 0, e
                }

                function a(e, t) {
                    var n, r = {};
                    return i(e, function (e, i) {
                        M(e) ? (n = e(t), null != n && (r[i] = n)) : r[i] = e
                    }), r
                }

                function o(t) {
                    var n, i, r, s = e.headers,
                        o = u({}, t.headers);
                    s = u({}, s.common, s[Fi(t.method)]);
                    e: for (n in s) {
                        i = Fi(n);
                        for (r in o)
                            if (Fi(r) === i) continue e;
                        o[n] = s[n]
                    }
                    return a(o, me(t))
                }

                function l(t) {
                    var n = t.headers,
                        r = kt(t.data, Ot(n), void 0, t.transformRequest);
                    return g(r) && i(n, function (e, t) {
                        "content-type" === Fi(t) && delete n[t]
                    }), g(t.withCredentials) && !g(e.withCredentials) && (t.withCredentials = e.withCredentials), m(t, r).then(c, c)
                }

                function c(e) {
                    var t = u({}, e);
                    return t.data = kt(e.data, e.headers, e.status, p.transformResponse), At(e.status) ? t : h.reject(t)
                }
                if (!w(n)) throw t("$http")("badreq", "Http request configuration must be an object.  Received: {0}", n);
                if (!x(n.url)) throw t("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", n.url);
                var p = u({
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse,
                    paramSerializer: e.paramSerializer
                }, n);
                p.headers = o(n), p.method = _i(p.method), p.paramSerializer = x(p.paramSerializer) ? d.get(p.paramSerializer) : p.paramSerializer;
                var f = [],
                    $ = [],
                    v = h.when(p);
                return i(T, function (e) {
                    (e.request || e.requestError) && f.unshift(e.request, e.requestError), (e.response || e.responseError) && $.push(e.response, e.responseError)
                }), v = s(v, f), v = v.then(l), v = s(v, $), r ? (v.success = function (e) {
                    return ce(e, "fn"), v.then(function (t) {
                        e(t.data, t.status, t.headers, p)
                    }), v
                }, v.error = function (e) {
                    return ce(e, "fn"), v.then(null, function (t) {
                        e(t.data, t.status, t.headers, p)
                    }), v
                }) : (v.success = rs("success"), v.error = rs("error")), v
            }

            function f(e) {
                i(arguments, function (e) {
                    p[e] = function (t, n) {
                        return p(u({}, n || {}, {
                            method: e,
                            url: t
                        }))
                    }
                })
            }

            function $(e) {
                i(arguments, function (e) {
                    p[e] = function (t, n, i) {
                        return p(u({}, i || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                })
            }

            function m(t, r) {
                function s(e) {
                    if (e) {
                        var t = {};
                        return i(e, function (e, i) {
                            t[i] = function (t) {
                                function i() {
                                    e(t)
                                }
                                n ? c.$applyAsync(i) : c.$$phase ? i() : c.$apply(i)
                            }
                        }), t
                    }
                }

                function l(e, t, i, r) {
                    function s() {
                        u(t, e, i, r)
                    }
                    $ && (At(e) ? $.put(C, [e, t, St(i), r]) : $.remove(C)), n ? c.$applyAsync(s) : (s(), c.$$phase || c.$apply())
                }

                function u(e, n, i, r) {
                    n = n >= -1 ? n : 0, (At(n) ? x.resolve : x.reject)({
                        data: e,
                        status: n,
                        headers: Ot(i),
                        config: t,
                        statusText: r
                    })
                }

                function d(e) {
                    u(e.data, e.status, me(e.headers()), e.statusText)
                }

                function f() {
                    var e = p.pendingRequests.indexOf(t); - 1 !== e && p.pendingRequests.splice(e, 1)
                }
                var $, m, x = h.defer(),
                    T = x.promise,
                    M = t.headers,
                    C = y(t.url, t.paramSerializer(t.params));
                if (p.pendingRequests.push(t), T.then(f, f), !t.cache && !e.cache || t.cache === !1 || "GET" !== t.method && "JSONP" !== t.method || ($ = w(t.cache) ? t.cache : w(e.cache) ? e.cache : b), $ && (m = $.get(C), v(m) ? P(m) ? m.then(d, d) : Yi(m) ? u(m[1], m[0], me(m[2]), m[3]) : u(m, 200, {}, "OK") : $.put(C, T)), g(m)) {
                    var E = jn(t.url) ? o()[t.xsrfCookieName || e.xsrfCookieName] : void 0;
                    E && (M[t.xsrfHeaderName || e.xsrfHeaderName] = E), a(t.method, C, r, l, M, t.timeout, t.withCredentials, t.responseType, s(t.eventHandlers), s(t.uploadEventHandlers))
                }
                return T
            }

            function y(e, t) {
                return t.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + t), e
            }
            var b = l("$http");
            e.paramSerializer = x(e.paramSerializer) ? d.get(e.paramSerializer) : e.paramSerializer;
            var T = [];
            return i(s, function (e) {
                T.unshift(x(e) ? d.get(e) : d.invoke(e))
            }), p.pendingRequests = [], f("get", "delete", "head", "jsonp"), $("post", "put", "patch"), p.defaults = e, p
        }]
    }

    function Ft() {
        this.$get = function () {
            return function () {
                return new e.XMLHttpRequest
            }
        }
    }

    function _t() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (e, t, n, i) {
            return jt(e, i, e.defer, t, n[0])
        }]
    }

    function jt(e, t, n, r, s) {
        function a(e, t, n) {
            e = e.replace("JSON_CALLBACK", t);
            var i = s.createElement("script"),
                a = null;
            return i.type = "text/javascript", i.src = e, i.async = !0, a = function (e) {
                $r(i, "load", a), $r(i, "error", a), s.body.removeChild(i), i = null;
                var o = -1,
                    l = "unknown";
                e && ("load" !== e.type || r.wasCalled(t) || (e = {
                    type: "error"
                }), l = e.type, o = "error" === e.type ? 404 : 200), n && n(o, l)
            }, fr(i, "load", a), fr(i, "error", a), s.body.appendChild(i), a
        }
        return function (s, o, l, u, c, h, d, f, $, m) {
            function w() {
                b && b(), T && T.abort()
            }

            function y(t, i, r, s, a) {
                v(E) && n.cancel(E), b = T = null, t(i, r, s, a), e.$$completeOutstandingRequest(p)
            }
            if (e.$$incOutstandingRequestCount(), o = o || e.url(), "jsonp" === Fi(s)) var x = r.createCallback(o),
                b = a(o, x, function (e, t) {
                    var n = 200 === e && r.getResponse(x);
                    y(u, e, n, "", t), r.removeCallback(x)
                });
            else {
                var T = t(s, o);
                T.open(s, o, !0), i(c, function (e, t) {
                    v(e) && T.setRequestHeader(t, e)
                }), T.onload = function () {
                    var e = T.statusText || "",
                        t = "response" in T ? T.response : T.responseText,
                        n = 1223 === T.status ? 204 : T.status;
                    0 === n && (n = t ? 200 : "file" == _n(o).protocol ? 404 : 0), y(u, n, t, T.getAllResponseHeaders(), e)
                };
                var M = function () {
                    y(u, -1, null, null, "")
                };
                if (T.onerror = M, T.onabort = M, i($, function (e, t) {
                        T.addEventListener(t, e)
                    }), i(m, function (e, t) {
                        T.upload.addEventListener(t, e)
                    }), d && (T.withCredentials = !0), f) try {
                    T.responseType = f
                } catch (C) {
                    if ("json" !== f) throw C
                }
                T.send(g(l) ? null : l)
            }
            if (h > 0) var E = n(w, h);
            else P(h) && h.then(w)
        }
    }

    function Rt() {
        var e = "{{",
            t = "}}";
        this.startSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, i, r) {
            function s(e) {
                return "\\\\\\" + e
            }

            function a(n) {
                return n.replace(p, e).replace(f, t)
            }

            function o(e) {
                if (null == e) return "";
                switch (typeof e) {
                    case "string":
                        break;
                    case "number":
                        e = "" + e;
                        break;
                    default:
                        e = q(e)
                }
                return e
            }

            function l(e, t, n, i) {
                var r;
                return r = e.$watch(function (e) {
                    return r(), i(e)
                }, t, n)
            }

            function c(s, c, p, f) {
                function m(e) {
                    try {
                        return e = P(e), f && !v(e) ? e : o(e)
                    } catch (t) {
                        i(ss.interr(s, t))
                    }
                }
                if (!s.length || -1 === s.indexOf(e)) {
                    var w;
                    if (!c) {
                        var y = a(s);
                        w = $(y), w.exp = s, w.expressions = [], w.$$watchDelegate = l
                    }
                    return w
                }
                f = !!f;
                for (var x, b, T, C = 0, E = [], I = [], S = s.length, O = [], k = []; S > C;) {
                    if (-1 == (x = s.indexOf(e, C)) || -1 == (b = s.indexOf(t, x + h))) {
                        C !== S && O.push(a(s.substring(C)));
                        break
                    }
                    C !== x && O.push(a(s.substring(C, x))), T = s.substring(x + h, b), E.push(T), I.push(n(T, m)), C = b + d, k.push(O.length), O.push("")
                }
                if (p && O.length > 1 && ss.throwNoconcat(s), !c || E.length) {
                    var A = function (e) {
                            for (var t = 0, n = E.length; n > t; t++) {
                                if (f && g(e[t])) return;
                                O[k[t]] = e[t]
                            }
                            return O.join("")
                        },
                        P = function (e) {
                            return p ? r.getTrusted(p, e) : r.valueOf(e)
                        };
                    return u(function (e) {
                        var t = 0,
                            n = E.length,
                            r = new Array(n);
                        try {
                            for (; n > t; t++) r[t] = I[t](e);
                            return A(r)
                        } catch (a) {
                            i(ss.interr(s, a))
                        }
                    }, {
                        exp: s,
                        expressions: E,
                        $$watchDelegate: function (e, t) {
                            var n;
                            return e.$watchGroup(I, function (i, r) {
                                var s = A(i);
                                M(t) && t.call(this, s, i !== r ? n : s, e), n = s
                            })
                        }
                    })
                }
            }
            var h = e.length,
                d = t.length,
                p = new RegExp(e.replace(/./g, s), "g"),
                f = new RegExp(t.replace(/./g, s), "g");
            return c.startSymbol = function () {
                return e
            }, c.endSymbol = function () {
                return t
            }, c
        }]
    }

    function Lt() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (e, t, n, i, r) {
            function s(s, o, l, u) {
                function c() {
                    h ? s.apply(null, d) : s($)
                }
                var h = arguments.length > 4,
                    d = h ? X(arguments, 4) : [],
                    p = t.setInterval,
                    f = t.clearInterval,
                    $ = 0,
                    m = v(u) && !u,
                    g = (m ? i : n).defer(),
                    w = g.promise;
                return l = v(l) ? l : 0, w.$$intervalId = p(function () {
                    m ? r.defer(c) : e.$evalAsync(c), g.notify($++), l > 0 && $ >= l && (g.resolve($), f(w.$$intervalId), delete a[w.$$intervalId]), m || e.$apply()
                }, o), a[w.$$intervalId] = g, w
            }
            var a = {};
            return s.cancel = function (e) {
                return e && e.$$intervalId in a ? (a[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete a[e.$$intervalId], !0) : !1
            }, s
        }]
    }

    function Dt(e) {
        for (var t = e.split("/"), n = t.length; n--;) t[n] = ee(t[n]);
        return t.join("/")
    }

    function Nt(e, t) {
        var n = _n(e);
        t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = h(n.port) || ls[n.protocol] || null
    }

    function zt(e, t) {
        var n = "/" !== e.charAt(0);
        n && (e = "/" + e);
        var i = _n(e);
        t.$$path = decodeURIComponent(n && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), t.$$search = J(i.search), t.$$hash = decodeURIComponent(i.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function Ut(e, t) {
        return 0 === e.lastIndexOf(t, 0)
    }

    function Xt(e, t) {
        return Ut(t, e) ? t.substr(e.length) : void 0
    }

    function Ht(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }

    function Vt(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }

    function qt(e) {
        return e.substr(0, Ht(e).lastIndexOf("/") + 1)
    }

    function Gt(e) {
        return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
    }

    function Bt(e, t, n) {
        this.$$html5 = !0, n = n || "", Nt(e, this), this.$$parse = function (e) {
            var n = Xt(t, e);
            if (!x(n)) throw us("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
            zt(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var e = Q(this.$$search),
                n = this.$$hash ? "#" + ee(this.$$hash) : "";
            this.$$url = Dt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (i, r) {
            if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
            var s, a, o;
            return v(s = Xt(e, i)) ? (a = s, o = v(s = Xt(n, s)) ? t + (Xt("/", s) || s) : e + a) : v(s = Xt(t, i)) ? o = t + s : t == i + "/" && (o = t), o && this.$$parse(o), !!o
        }
    }

    function Wt(e, t, n) {
        Nt(e, this), this.$$parse = function (i) {
            function r(e, t, n) {
                var i, r = /^\/[A-Z]:(\/.*)/;
                return Ut(t, n) && (t = t.replace(n, "")), r.exec(t) ? e : (i = r.exec(e), i ? i[1] : e)
            }
            var s, a = Xt(e, i) || Xt(t, i);
            g(a) || "#" !== a.charAt(0) ? this.$$html5 ? s = a : (s = "", g(a) && (e = i, this.replace())) : (s = Xt(n, a), g(s) && (s = a)), zt(s, this), this.$$path = r(this.$$path, s, e), this.$$compose()
        }, this.$$compose = function () {
            var t = Q(this.$$search),
                i = this.$$hash ? "#" + ee(this.$$hash) : "";
            this.$$url = Dt(this.$$path) + (t ? "?" + t : "") + i, this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
        }, this.$$parseLinkUrl = function (t, n) {
            return Ht(e) == Ht(t) ? (this.$$parse(t), !0) : !1
        }
    }

    function Yt(e, t, n) {
        this.$$html5 = !0, Wt.apply(this, arguments), this.$$parseLinkUrl = function (i, r) {
            if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
            var s, a;
            return e == Ht(i) ? s = i : (a = Xt(t, i)) ? s = e + n + a : t === i + "/" && (s = t), s && this.$$parse(s), !!s
        }, this.$$compose = function () {
            var t = Q(this.$$search),
                i = this.$$hash ? "#" + ee(this.$$hash) : "";
            this.$$url = Dt(this.$$path) + (t ? "?" + t : "") + i, this.$$absUrl = e + n + this.$$url
        }
    }

    function Kt(e) {
        return function () {
            return this[e]
        }
    }

    function Zt(e, t) {
        return function (n) {
            return g(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function Jt() {
        var e = "",
            t = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function (t) {
            return v(t) ? (e = t, this) : e
        }, this.html5Mode = function (e) {
            return A(e) ? (t.enabled = e, this) : w(e) ? (A(e.enabled) && (t.enabled = e.enabled), A(e.requireBase) && (t.requireBase = e.requireBase), A(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, i, r, s, a) {
            function o(e, t, n) {
                var r = u.url(),
                    s = u.$$state;
                try {
                    i.url(e, t, n), u.$$state = i.state()
                } catch (a) {
                    throw u.url(r), u.$$state = s, a
                }
            }

            function l(e, t) {
                n.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t)
            }
            var u, c, h, d = i.baseHref(),
                p = i.url();
            if (t.enabled) {
                if (!d && t.requireBase) throw us("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                h = Gt(p) + (d || "/"), c = r.history ? Bt : Yt
            } else h = Ht(p), c = Wt;
            var f = qt(h);
            u = new c(h, f, "#" + e), u.$$parseLinkUrl(p, p), u.$$state = i.state();
            var $ = /^\s*(javascript|mailto):/i;
            s.on("click", function (e) {
                if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
                    for (var r = Di(e.target);
                        "a" !== L(r[0]);)
                        if (r[0] === s[0] || !(r = r.parent())[0]) return;
                    var o = r.prop("href"),
                        l = r.attr("href") || r.attr("xlink:href");
                    w(o) && "[object SVGAnimatedString]" === o.toString() && (o = _n(o.animVal).href), $.test(o) || !o || r.attr("target") || e.isDefaultPrevented() || u.$$parseLinkUrl(o, l) && (e.preventDefault(), u.absUrl() != i.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                }
            }), Vt(u.absUrl()) != Vt(p) && i.url(u.absUrl(), !0);
            var m = !0;
            return i.onUrlChange(function (e, t) {
                return g(Xt(f, e)) ? void(a.location.href = e) : (n.$evalAsync(function () {
                    var i, r = u.absUrl(),
                        s = u.$$state;
                    e = Vt(e), u.$$parse(e), u.$$state = t, i = n.$broadcast("$locationChangeStart", e, r, t, s).defaultPrevented, u.absUrl() === e && (i ? (u.$$parse(r), u.$$state = s, o(r, !1, s)) : (m = !1, l(r, s)))
                }), void(n.$$phase || n.$digest()))
            }), n.$watch(function () {
                var e = Vt(i.url()),
                    t = Vt(u.absUrl()),
                    s = i.state(),
                    a = u.$$replace,
                    c = e !== t || u.$$html5 && r.history && s !== u.$$state;
                (m || c) && (m = !1, n.$evalAsync(function () {
                    var t = u.absUrl(),
                        i = n.$broadcast("$locationChangeStart", t, e, u.$$state, s).defaultPrevented;
                    u.absUrl() === t && (i ? (u.$$parse(e), u.$$state = s) : (c && o(t, a, s === u.$$state ? null : u.$$state), l(e, s)))
                })), u.$$replace = !1
            }), u
        }]
    }

    function Qt() {
        var e = !0,
            t = this;
        this.debugEnabled = function (t) {
            return v(t) ? (e = t, this) : e
        }, this.$get = ["$window", function (n) {
            function r(e) {
                return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
            }

            function s(e) {
                var t = n.console || {},
                    s = t[e] || t.log || p,
                    a = !1;
                try {
                    a = !!s.apply
                } catch (o) {}
                return a ? function () {
                    var e = [];
                    return i(arguments, function (t) {
                        e.push(r(t))
                    }), s.apply(t, e)
                } : function (e, t) {
                    s(e, null == t ? "" : t)
                }
            }
            return {
                log: s("log"),
                info: s("info"),
                warn: s("warn"),
                error: s("error"),
                debug: function () {
                    var n = s("debug");
                    return function () {
                        e && n.apply(t, arguments)
                    }
                }()
            }
        }]
    }

    function en(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw hs("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
        return e
    }

    function tn(e) {
        return e + ""
    }

    function nn(e, t) {
        if (e) {
            if (e.constructor === e) throw hs("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e.window === e) throw hs("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw hs("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
            if (e === Object) throw hs("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
        }
        return e
    }

    function rn(e, t) {
        if (e) {
            if (e.constructor === e) throw hs("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e === ds || e === ps || e === fs) throw hs("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
        }
    }

    function sn(e, t) {
        if (e && (e === 0..constructor || e === (!1).constructor || e === "".constructor || e === {}.constructor || e === [].constructor || e === Function.constructor)) throw hs("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", t)
    }

    function an(e, t) {
        return "undefined" != typeof e ? e : t
    }

    function on(e, t) {
        return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t
    }

    function ln(e, t) {
        var n = e(t);
        return !n.$stateful
    }

    function un(e, t) {
        var n, r;
        switch (e.type) {
            case vs.Program:
                n = !0, i(e.body, function (e) {
                    un(e.expression, t), n = n && e.expression.constant
                }), e.constant = n;
                break;
            case vs.Literal:
                e.constant = !0, e.toWatch = [];
                break;
            case vs.UnaryExpression:
                un(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                break;
            case vs.BinaryExpression:
                un(e.left, t), un(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                break;
            case vs.LogicalExpression:
                un(e.left, t), un(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case vs.ConditionalExpression:
                un(e.test, t), un(e.alternate, t), un(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case vs.Identifier:
                e.constant = !1, e.toWatch = [e];
                break;
            case vs.MemberExpression:
                un(e.object, t), e.computed && un(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant),
                    e.toWatch = [e];
                break;
            case vs.CallExpression:
                n = e.filter ? ln(t, e.callee.name) : !1, r = [], i(e.arguments, function (e) {
                    un(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                }), e.constant = n, e.toWatch = e.filter && ln(t, e.callee.name) ? r : [e];
                break;
            case vs.AssignmentExpression:
                un(e.left, t), un(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                break;
            case vs.ArrayExpression:
                n = !0, r = [], i(e.elements, function (e) {
                    un(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                }), e.constant = n, e.toWatch = r;
                break;
            case vs.ObjectExpression:
                n = !0, r = [], i(e.properties, function (e) {
                    un(e.value, t), n = n && e.value.constant && !e.computed, e.value.constant || r.push.apply(r, e.value.toWatch)
                }), e.constant = n, e.toWatch = r;
                break;
            case vs.ThisExpression:
                e.constant = !1, e.toWatch = [];
                break;
            case vs.LocalsExpression:
                e.constant = !1, e.toWatch = []
        }
    }

    function cn(e) {
        if (1 == e.length) {
            var t = e[0].expression,
                n = t.toWatch;
            return 1 !== n.length ? n : n[0] !== t ? n : void 0
        }
    }

    function hn(e) {
        return e.type === vs.Identifier || e.type === vs.MemberExpression
    }

    function dn(e) {
        return 1 === e.body.length && hn(e.body[0].expression) ? {
            type: vs.AssignmentExpression,
            left: e.body[0].expression,
            right: {
                type: vs.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function pn(e) {
        return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === vs.Literal || e.body[0].expression.type === vs.ArrayExpression || e.body[0].expression.type === vs.ObjectExpression)
    }

    function fn(e) {
        return e.constant
    }

    function $n(e, t) {
        this.astBuilder = e, this.$filter = t
    }

    function mn(e, t) {
        this.astBuilder = e, this.$filter = t
    }

    function gn(e) {
        return "constructor" == e
    }

    function vn(e) {
        return M(e.valueOf) ? e.valueOf() : ys.call(e)
    }

    function wn() {
        var e, t, n = fe(),
            r = fe(),
            s = {
                "true": !0,
                "false": !1,
                "null": null,
                undefined: void 0
            };
        this.addLiteral = function (e, t) {
            s[e] = t
        }, this.setIdentifierFns = function (n, i) {
            return e = n, t = i, this
        }, this.$get = ["$filter", function (a) {
            function o(e, t, i) {
                var s, o, u;
                switch (i = i || y, typeof e) {
                    case "string":
                        e = e.trim(), u = e;
                        var m = i ? r : n;
                        if (s = m[u], !s) {
                            ":" === e.charAt(0) && ":" === e.charAt(1) && (o = !0, e = e.substring(2));
                            var v = i ? w : g,
                                x = new gs(v),
                                b = new ws(x, a, v);
                            s = b.parse(e), s.constant ? s.$$watchDelegate = f : o ? s.$$watchDelegate = s.literal ? d : h : s.inputs && (s.$$watchDelegate = c), i && (s = l(s)), m[u] = s
                        }
                        return $(s, t);
                    case "function":
                        return $(e, t);
                    default:
                        return $(p, t)
                }
            }

            function l(e) {
                function t(t, n, i, r) {
                    var s = y;
                    y = !0;
                    try {
                        return e(t, n, i, r)
                    } finally {
                        y = s
                    }
                }
                if (!e) return e;
                t.$$watchDelegate = e.$$watchDelegate, t.assign = l(e.assign), t.constant = e.constant, t.literal = e.literal;
                for (var n = 0; e.inputs && n < e.inputs.length; ++n) e.inputs[n] = l(e.inputs[n]);
                return t.inputs = e.inputs, t
            }

            function u(e, t) {
                return null == e || null == t ? e === t : "object" == typeof e && (e = vn(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
            }

            function c(e, t, n, i, r) {
                var s, a = i.inputs;
                if (1 === a.length) {
                    var o = u;
                    return a = a[0], e.$watch(function (e) {
                        var t = a(e);
                        return u(t, o) || (s = i(e, void 0, void 0, [t]), o = t && vn(t)), s
                    }, t, n, r)
                }
                for (var l = [], c = [], h = 0, d = a.length; d > h; h++) l[h] = u, c[h] = null;
                return e.$watch(function (e) {
                    for (var t = !1, n = 0, r = a.length; r > n; n++) {
                        var o = a[n](e);
                        (t || (t = !u(o, l[n]))) && (c[n] = o, l[n] = o && vn(o))
                    }
                    return t && (s = i(e, void 0, void 0, c)), s
                }, t, n, r)
            }

            function h(e, t, n, i) {
                var r, s;
                return r = e.$watch(function (e) {
                    return i(e)
                }, function (e, n, i) {
                    s = e, M(t) && t.apply(this, arguments), v(e) && i.$$postDigest(function () {
                        v(s) && r()
                    })
                }, n)
            }

            function d(e, t, n, r) {
                function s(e) {
                    var t = !0;
                    return i(e, function (e) {
                        v(e) || (t = !1)
                    }), t
                }
                var a, o;
                return a = e.$watch(function (e) {
                    return r(e)
                }, function (e, n, i) {
                    o = e, M(t) && t.call(this, e, n, i), s(e) && i.$$postDigest(function () {
                        s(o) && a()
                    })
                }, n)
            }

            function f(e, t, n, i) {
                var r;
                return r = e.$watch(function (e) {
                    return r(), i(e)
                }, t, n)
            }

            function $(e, t) {
                if (!t) return e;
                var n = e.$$watchDelegate,
                    i = !1,
                    r = n !== d && n !== h,
                    s = r ? function (n, r, s, a) {
                        var o = i && a ? a[0] : e(n, r, s, a);
                        return t(o, n, r)
                    } : function (n, i, r, s) {
                        var a = e(n, i, r, s),
                            o = t(a, n, i);
                        return v(a) ? o : a
                    };
                return e.$$watchDelegate && e.$$watchDelegate !== c ? s.$$watchDelegate = e.$$watchDelegate : t.$stateful || (s.$$watchDelegate = c, i = !e.inputs, s.inputs = e.inputs ? e.inputs : [e]), s
            }
            var m = Qi().noUnsafeEval,
                g = {
                    csp: m,
                    expensiveChecks: !1,
                    literals: N(s),
                    isIdentifierStart: M(e) && e,
                    isIdentifierContinue: M(t) && t
                },
                w = {
                    csp: m,
                    expensiveChecks: !0,
                    literals: N(s),
                    isIdentifierStart: M(e) && e,
                    isIdentifierContinue: M(t) && t
                },
                y = !1;
            return o.$$runningExpensiveChecks = function () {
                return y
            }, o
        }]
    }

    function yn() {
        this.$get = ["$rootScope", "$exceptionHandler", function (e, t) {
            return bn(function (t) {
                e.$evalAsync(t)
            }, t)
        }]
    }

    function xn() {
        this.$get = ["$browser", "$exceptionHandler", function (e, t) {
            return bn(function (t) {
                e.defer(t)
            }, t)
        }]
    }

    function bn(e, n) {
        function r() {
            this.$$state = {
                status: 0
            }
        }

        function s(e, t) {
            return function (n) {
                t.call(e, n)
            }
        }

        function a(e) {
            var t, i, r;
            r = e.pending, e.processScheduled = !1, e.pending = void 0;
            for (var s = 0, a = r.length; a > s; ++s) {
                i = r[s][0], t = r[s][e.status];
                try {
                    M(t) ? i.resolve(t(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
                } catch (o) {
                    i.reject(o), n(o)
                }
            }
        }

        function o(t) {
            !t.processScheduled && t.pending && (t.processScheduled = !0, e(function () {
                a(t)
            }))
        }

        function l() {
            this.promise = new r
        }

        function c(e) {
            var t = new l,
                n = 0,
                r = Yi(e) ? [] : {};
            return i(e, function (e, i) {
                n++, v(e).then(function (e) {
                    r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
                }, function (e) {
                    r.hasOwnProperty(i) || t.reject(e)
                })
            }), 0 === n && t.resolve(r), t.promise
        }

        function h(e) {
            var t = p();
            return i(e, function (e) {
                v(e).then(t.resolve, t.reject)
            }), t.promise
        }
        var d = t("$q", TypeError),
            p = function () {
                var e = new l;
                return e.resolve = s(e, e.resolve), e.reject = s(e, e.reject), e.notify = s(e, e.notify), e
            };
        u(r.prototype, {
            then: function (e, t, n) {
                if (g(e) && g(t) && g(n)) return this;
                var i = new l;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([i, e, t, n]), this.$$state.status > 0 && o(this.$$state), i.promise
            },
            "catch": function (e) {
                return this.then(null, e)
            },
            "finally": function (e, t) {
                return this.then(function (t) {
                    return m(t, !0, e)
                }, function (t) {
                    return m(t, !1, e)
                }, t)
            }
        }), u(l.prototype, {
            resolve: function (e) {
                this.promise.$$state.status || (e === this.promise ? this.$$reject(d("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
            },
            $$resolve: function (e) {
                function t(e) {
                    l || (l = !0, a.$$resolve(e))
                }

                function i(e) {
                    l || (l = !0, a.$$reject(e))
                }
                var r, a = this,
                    l = !1;
                try {
                    (w(e) || M(e)) && (r = e && e.then), M(r) ? (this.promise.$$state.status = -1, r.call(e, t, i, s(this, this.notify))) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, o(this.promise.$$state))
                } catch (u) {
                    i(u), n(u)
                }
            },
            reject: function (e) {
                this.promise.$$state.status || this.$$reject(e)
            },
            $$reject: function (e) {
                this.promise.$$state.value = e, this.promise.$$state.status = 2, o(this.promise.$$state)
            },
            notify: function (t) {
                var i = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && i && i.length && e(function () {
                    for (var e, r, s = 0, a = i.length; a > s; s++) {
                        r = i[s][0], e = i[s][3];
                        try {
                            r.notify(M(e) ? e(t) : t)
                        } catch (o) {
                            n(o)
                        }
                    }
                })
            }
        });
        var f = function (e) {
                var t = new l;
                return t.reject(e), t.promise
            },
            $ = function (e, t) {
                var n = new l;
                return t ? n.resolve(e) : n.reject(e), n.promise
            },
            m = function (e, t, n) {
                var i = null;
                try {
                    M(n) && (i = n())
                } catch (r) {
                    return $(r, !1)
                }
                return P(i) ? i.then(function () {
                    return $(e, t)
                }, function (e) {
                    return $(e, !1)
                }) : $(e, t)
            },
            v = function (e, t, n, i) {
                var r = new l;
                return r.resolve(e), r.promise.then(t, n, i)
            },
            y = v,
            x = function (e) {
                function t(e) {
                    i.resolve(e)
                }

                function n(e) {
                    i.reject(e)
                }
                if (!M(e)) throw d("norslvr", "Expected resolverFn, got '{0}'", e);
                var i = new l;
                return e(t, n), i.promise
            };
        return x.prototype = r.prototype, x.defer = p, x.reject = f, x.when = v, x.resolve = y, x.all = c, x.race = h, x
    }

    function Tn() {
        this.$get = ["$window", "$timeout", function (e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                i = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                r = !!n,
                s = r ? function (e) {
                    var t = n(e);
                    return function () {
                        i(t)
                    }
                } : function (e) {
                    var n = t(e, 16.66, !1);
                    return function () {
                        t.cancel(n)
                    }
                };
            return s.supported = r, s
        }]
    }

    function Mn() {
        function e(e) {
            function t() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = a(), this.$$ChildScope = null
            }
            return t.prototype = e, t
        }
        var r = 10,
            s = t("$rootScope"),
            o = null,
            l = null;
        this.digestTtl = function (e) {
            return arguments.length && (r = e), r
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function (t, u, c) {
            function h(e) {
                e.currentScope.$$destroyed = !0
            }

            function d(e) {
                9 === Li && (e.$$childHead && d(e.$$childHead), e.$$nextSibling && d(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
            }

            function f() {
                this.$id = a(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function $(e) {
                if (C.$$phase) throw s("inprog", "{0} already in progress", C.$$phase);
                C.$$phase = e
            }

            function m() {
                C.$$phase = null
            }

            function v(e, t) {
                do e.$$watchersCount += t; while (e = e.$parent)
            }

            function y(e, t, n) {
                do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
            }

            function x() {}

            function b() {
                for (; S.length;) try {
                    S.shift()()
                } catch (e) {
                    t(e)
                }
                l = null
            }

            function T() {
                null === l && (l = c.defer(function () {
                    C.$apply(b)
                }))
            }
            f.prototype = {
                constructor: f,
                $new: function (t, n) {
                    var i;
                    return n = n || this, t ? (i = new f, i.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), i = new this.$$ChildScope), i.$parent = n, i.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = i, n.$$childTail = i) : n.$$childHead = n.$$childTail = i, (t || n != this) && i.$on("$destroy", h), i
                },
                $watch: function (e, t, n, i) {
                    var r = u(e);
                    if (r.$$watchDelegate) return r.$$watchDelegate(this, t, n, r, e);
                    var s = this,
                        a = s.$$watchers,
                        l = {
                            fn: t,
                            last: x,
                            get: r,
                            exp: i || e,
                            eq: !!n
                        };
                    return o = null, M(t) || (l.fn = p), a || (a = s.$$watchers = []), a.unshift(l), v(this, 1),
                        function () {
                            D(a, l) >= 0 && v(s, -1), o = null
                        }
                },
                $watchGroup: function (e, t) {
                    function n() {
                        l = !1, u ? (u = !1, t(s, s, o)) : t(s, r, o)
                    }
                    var r = new Array(e.length),
                        s = new Array(e.length),
                        a = [],
                        o = this,
                        l = !1,
                        u = !0;
                    if (!e.length) {
                        var c = !0;
                        return o.$evalAsync(function () {
                                c && t(s, s, o)
                            }),
                            function () {
                                c = !1
                            }
                    }
                    return 1 === e.length ? this.$watch(e[0], function (e, n, i) {
                        s[0] = e, r[0] = n, t(s, e === n ? s : r, i)
                    }) : (i(e, function (e, t) {
                        var i = o.$watch(e, function (e, i) {
                            s[t] = e, r[t] = i, l || (l = !0, o.$evalAsync(n))
                        });
                        a.push(i)
                    }), function () {
                        for (; a.length;) a.shift()()
                    })
                },
                $watchCollection: function (e, t) {
                    function i(e) {
                        s = e;
                        var t, i, r, o, l;
                        if (!g(s)) {
                            if (w(s))
                                if (n(s)) {
                                    a !== p && (a = p, m = a.length = 0, h++), t = s.length, m !== t && (h++, a.length = m = t);
                                    for (var u = 0; t > u; u++) l = a[u], o = s[u], r = l !== l && o !== o, r || l === o || (h++, a[u] = o)
                                } else {
                                    a !== f && (a = f = {}, m = 0, h++), t = 0;
                                    for (i in s) Pi.call(s, i) && (t++, o = s[i], l = a[i], i in a ? (r = l !== l && o !== o, r || l === o || (h++, a[i] = o)) : (m++, a[i] = o, h++));
                                    if (m > t) {
                                        h++;
                                        for (i in a) Pi.call(s, i) || (m--, delete a[i])
                                    }
                                }
                            else a !== s && (a = s, h++);
                            return h
                        }
                    }

                    function r() {
                        if ($ ? ($ = !1, t(s, s, l)) : t(s, o, l), c)
                            if (w(s))
                                if (n(s)) {
                                    o = new Array(s.length);
                                    for (var e = 0; e < s.length; e++) o[e] = s[e]
                                } else {
                                    o = {};
                                    for (var i in s) Pi.call(s, i) && (o[i] = s[i])
                                }
                        else o = s
                    }
                    i.$stateful = !0;
                    var s, a, o, l = this,
                        c = t.length > 1,
                        h = 0,
                        d = u(e, i),
                        p = [],
                        f = {},
                        $ = !0,
                        m = 0;
                    return this.$watch(d, r)
                },
                $digest: function () {
                    var e, n, i, a, u, h, d, p, f, g, v, w, y = r,
                        T = this,
                        S = [];
                    $("$digest"), c.$$checkUrlChange(), this === C && null !== l && (c.defer.cancel(l), b()), o = null;
                    do {
                        p = !1, g = T;
                        for (var k = 0; k < E.length; k++) {
                            try {
                                w = E[k], w.scope.$eval(w.expression, w.locals)
                            } catch (A) {
                                t(A)
                            }
                            o = null
                        }
                        E.length = 0;
                        e: do {
                            if (h = g.$$watchers)
                                for (d = h.length; d--;) try {
                                    if (e = h[d])
                                        if (u = e.get, (n = u(g)) === (i = e.last) || (e.eq ? z(n, i) : "number" == typeof n && "number" == typeof i && isNaN(n) && isNaN(i))) {
                                            if (e === o) {
                                                p = !1;
                                                break e
                                            }
                                        } else p = !0, o = e, e.last = e.eq ? N(n, null) : n, a = e.fn, a(n, i === x ? n : i, g), 5 > y && (v = 4 - y, S[v] || (S[v] = []), S[v].push({
                                            msg: M(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                            newVal: n,
                                            oldVal: i
                                        }))
                                } catch (A) {
                                    t(A)
                                }
                            if (!(f = g.$$watchersCount && g.$$childHead || g !== T && g.$$nextSibling))
                                for (; g !== T && !(f = g.$$nextSibling);) g = g.$parent
                        } while (g = f);
                        if ((p || E.length) && !y--) throw m(), s("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", r, S)
                    } while (p || E.length);
                    for (m(); O < I.length;) try {
                        I[O++]()
                    } catch (A) {
                        t(A)
                    }
                    I.length = O = 0
                },
                $destroy: function () {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === C && c.$$applicationDestroyed(), v(this, -this.$$watchersCount);
                        for (var t in this.$$listenerCount) y(this, this.$$listenerCount[t], t);
                        e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function () {
                            return p
                        }, this.$$listeners = {}, this.$$nextSibling = null, d(this)
                    }
                },
                $eval: function (e, t) {
                    return u(e)(this, t)
                },
                $evalAsync: function (e, t) {
                    C.$$phase || E.length || c.defer(function () {
                        E.length && C.$digest()
                    }), E.push({
                        scope: this,
                        expression: u(e),
                        locals: t
                    })
                },
                $$postDigest: function (e) {
                    I.push(e)
                },
                $apply: function (e) {
                    try {
                        $("$apply");
                        try {
                            return this.$eval(e)
                        } finally {
                            m()
                        }
                    } catch (n) {
                        t(n)
                    } finally {
                        try {
                            C.$digest()
                        } catch (n) {
                            throw t(n), n
                        }
                    }
                },
                $applyAsync: function (e) {
                    function t() {
                        n.$eval(e)
                    }
                    var n = this;
                    e && S.push(t), e = u(e), T()
                },
                $on: function (e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var i = this;
                    do i.$$listenerCount[e] || (i.$$listenerCount[e] = 0), i.$$listenerCount[e]++; while (i = i.$parent);
                    var r = this;
                    return function () {
                        var i = n.indexOf(t); - 1 !== i && (n[i] = null, y(r, 1, e))
                    }
                },
                $emit: function (e, n) {
                    var i, r, s, a = [],
                        o = this,
                        l = !1,
                        u = {
                            name: e,
                            targetScope: o,
                            stopPropagation: function () {
                                l = !0
                            },
                            preventDefault: function () {
                                u.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        c = U([u], arguments, 1);
                    do {
                        for (i = o.$$listeners[e] || a, u.currentScope = o, r = 0, s = i.length; s > r; r++)
                            if (i[r]) try {
                                i[r].apply(null, c)
                            } catch (h) {
                                t(h)
                            } else i.splice(r, 1), r--, s--;
                        if (l) return u.currentScope = null, u;
                        o = o.$parent
                    } while (o);
                    return u.currentScope = null, u
                },
                $broadcast: function (e, n) {
                    var i = this,
                        r = i,
                        s = i,
                        a = {
                            name: e,
                            targetScope: i,
                            preventDefault: function () {
                                a.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!i.$$listenerCount[e]) return a;
                    for (var o, l, u, c = U([a], arguments, 1); r = s;) {
                        for (a.currentScope = r, o = r.$$listeners[e] || [], l = 0, u = o.length; u > l; l++)
                            if (o[l]) try {
                                o[l].apply(null, c)
                            } catch (h) {
                                t(h)
                            } else o.splice(l, 1), l--, u--;
                        if (!(s = r.$$listenerCount[e] && r.$$childHead || r !== i && r.$$nextSibling))
                            for (; r !== i && !(s = r.$$nextSibling);) r = r.$parent
                    }
                    return a.currentScope = null, a
                }
            };
            var C = new f,
                E = C.$$asyncQueue = [],
                I = C.$$postDigestQueue = [],
                S = C.$$applyAsyncQueue = [],
                O = 0;
            return C
        }]
    }

    function Cn() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/,
            t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (t) {
            return v(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function (e) {
            return v(e) ? (t = e, this) : t
        }, this.$get = function () {
            return function (n, i) {
                var r, s = i ? t : e;
                return r = _n(n).href, "" === r || r.match(s) ? n : "unsafe:" + r
            }
        }
    }

    function En(e) {
        if ("self" === e) return e;
        if (x(e)) {
            if (e.indexOf("***") > -1) throw xs("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
            return e = Ji(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
        }
        if (C(e)) return new RegExp("^" + e.source + "$");
        throw xs("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function In(e) {
        var t = [];
        return v(e) && i(e, function (e) {
            t.push(En(e))
        }), t
    }

    function Sn() {
        this.SCE_CONTEXTS = bs;
        var e = ["self"],
            t = [];
        this.resourceUrlWhitelist = function (t) {
            return arguments.length && (e = In(t)), e
        }, this.resourceUrlBlacklist = function (e) {
            return arguments.length && (t = In(e)), t
        }, this.$get = ["$injector", function (n) {
            function i(e, t) {
                return "self" === e ? jn(t) : !!e.exec(t.href)
            }

            function r(n) {
                var r, s, a = _n(n.toString()),
                    o = !1;
                for (r = 0, s = e.length; s > r; r++)
                    if (i(e[r], a)) {
                        o = !0;
                        break
                    } if (o)
                    for (r = 0, s = t.length; s > r; r++)
                        if (i(t[r], a)) {
                            o = !1;
                            break
                        } return o
            }

            function s(e) {
                var t = function (e) {
                    this.$$unwrapTrustedValue = function () {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }

            function a(e, t) {
                var n = h.hasOwnProperty(e) ? h[e] : null;
                if (!n) throw xs("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                if (null === t || g(t) || "" === t) return t;
                if ("string" != typeof t) throw xs("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                return new n(t)
            }

            function o(e) {
                return e instanceof c ? e.$$unwrapTrustedValue() : e
            }

            function l(e, t) {
                if (null === t || g(t) || "" === t) return t;
                var n = h.hasOwnProperty(e) ? h[e] : null;
                if (n && t instanceof n) return t.$$unwrapTrustedValue();
                if (e === bs.RESOURCE_URL) {
                    if (r(t)) return t;
                    throw xs("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                }
                if (e === bs.HTML) return u(t);
                throw xs("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var u = function (e) {
                throw xs("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            n.has("$sanitize") && (u = n.get("$sanitize"));
            var c = s(),
                h = {};
            return h[bs.HTML] = s(c), h[bs.CSS] = s(c), h[bs.URL] = s(c), h[bs.JS] = s(c), h[bs.RESOURCE_URL] = s(h[bs.URL]), {
                trustAs: a,
                getTrusted: l,
                valueOf: o
            }
        }]
    }

    function On() {
        var e = !0;
        this.enabled = function (t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sceDelegate", function (t, n) {
            if (e && 8 > Li) throw xs("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = me(bs);
            r.isEnabled = function () {
                return e
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function (e, t) {
                return t
            }, r.valueOf = f), r.parseAs = function (e, n) {
                var i = t(n);
                return i.literal && i.constant ? i : t(n, function (t) {
                    return r.getTrusted(e, t)
                })
            };
            var s = r.parseAs,
                a = r.getTrusted,
                o = r.trustAs;
            return i(bs, function (e, t) {
                var n = Fi(t);
                r[xe("parse_as_" + n)] = function (t) {
                    return s(e, t)
                }, r[xe("get_trusted_" + n)] = function (t) {
                    return a(e, t)
                }, r[xe("trust_as_" + n)] = function (t) {
                    return o(e, t)
                }
            }), r
        }]
    }

    function kn() {
        this.$get = ["$window", "$document", function (e, t) {
            var n, i, r = {},
                s = e.chrome && e.chrome.app && e.chrome.app.runtime,
                a = !s && e.history && e.history.pushState,
                o = h((/android (\d+)/.exec(Fi((e.navigator || {}).userAgent)) || [])[1]),
                l = /Boxee/i.test((e.navigator || {}).userAgent),
                u = t[0] || {},
                c = /^(Moz|webkit|ms)(?=[A-Z])/,
                d = u.body && u.body.style,
                p = !1,
                f = !1;
            if (d) {
                for (var $ in d)
                    if (i = c.exec($)) {
                        n = i[0], n = n[0].toUpperCase() + n.substr(1);
                        break
                    } n || (n = "WebkitOpacity" in d && "webkit"), p = !!("transition" in d || n + "Transition" in d), f = !!("animation" in d || n + "Animation" in d), !o || p && f || (p = x(d.webkitTransition), f = x(d.webkitAnimation))
            }
            return {
                history: !(!a || 4 > o || l),
                hasEvent: function (e) {
                    if ("input" === e && 11 >= Li) return !1;
                    if (g(r[e])) {
                        var t = u.createElement("div");
                        r[e] = "on" + e in t
                    }
                    return r[e]
                },
                csp: Qi(),
                vendorPrefix: n,
                transitions: p,
                animations: f,
                android: o
            }
        }]
    }

    function An() {
        var e;
        this.httpOptions = function (t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$templateCache", "$http", "$q", "$sce", function (t, n, i, r) {
            function s(a, o) {
                function l(e) {
                    if (!o) throw Ts("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", a, e.status, e.statusText);
                    return i.reject(e)
                }
                s.totalPendingRequests++, (!x(a) || g(t.get(a))) && (a = r.getTrustedResourceUrl(a));
                var c = n.defaults && n.defaults.transformResponse;
                return Yi(c) ? c = c.filter(function (e) {
                    return e !== Et
                }) : c === Et && (c = null), n.get(a, u({
                    cache: t,
                    transformResponse: c
                }, e))["finally"](function () {
                    s.totalPendingRequests--
                }).then(function (e) {
                    return t.put(a, e.data), e.data
                }, l)
            }
            return s.totalPendingRequests = 0, s
        }]
    }

    function Pn() {
        this.$get = ["$rootScope", "$browser", "$location", function (e, t, n) {
            var r = {};
            return r.findBindings = function (e, t, n) {
                var r = e.getElementsByClassName("ng-binding"),
                    s = [];
                return i(r, function (e) {
                    var r = Bi.element(e).data("$binding");
                    r && i(r, function (i) {
                        if (n) {
                            var r = new RegExp("(^|\\s)" + Ji(t) + "(\\s|\\||$)");
                            r.test(i) && s.push(e)
                        } else -1 != i.indexOf(t) && s.push(e)
                    })
                }), s
            }, r.findModels = function (e, t, n) {
                for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r) {
                    var s = n ? "=" : "*=",
                        a = "[" + i[r] + "model" + s + '"' + t + '"]',
                        o = e.querySelectorAll(a);
                    if (o.length) return o
                }
            }, r.getLocation = function () {
                return n.url()
            }, r.setLocation = function (t) {
                t !== n.url() && (n.url(t), e.$digest())
            }, r.whenStable = function (e) {
                t.notifyWhenNoOutstandingRequests(e)
            }, r
        }]
    }

    function Fn() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (e, t, n, i, r) {
            function s(s, o, l) {
                M(s) || (l = o, o = s, s = p);
                var u, c = X(arguments, 3),
                    h = v(l) && !l,
                    d = (h ? i : n).defer(),
                    f = d.promise;
                return u = t.defer(function () {
                    try {
                        d.resolve(s.apply(null, c))
                    } catch (t) {
                        d.reject(t), r(t)
                    } finally {
                        delete a[f.$$timeoutId]
                    }
                    h || e.$apply()
                }, o), f.$$timeoutId = u, a[u] = d, f
            }
            var a = {};
            return s.cancel = function (e) {
                return e && e.$$timeoutId in a ? (a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
            }, s
        }]
    }

    function _n(e) {
        var t = e;
        return Li && (Ms.setAttribute("href", t), t = Ms.href), Ms.setAttribute("href", t), {
            href: Ms.href,
            protocol: Ms.protocol ? Ms.protocol.replace(/:$/, "") : "",
            host: Ms.host,
            search: Ms.search ? Ms.search.replace(/^\?/, "") : "",
            hash: Ms.hash ? Ms.hash.replace(/^#/, "") : "",
            hostname: Ms.hostname,
            port: Ms.port,
            pathname: "/" === Ms.pathname.charAt(0) ? Ms.pathname : "/" + Ms.pathname
        }
    }

    function jn(e) {
        var t = x(e) ? _n(e) : e;
        return t.protocol === Cs.protocol && t.host === Cs.host
    }

    function Rn() {
        this.$get = $(e)
    }

    function Ln(e) {
        function t(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var n = e[0] || {},
            i = {},
            r = "";
        return function () {
            var e, s, a, o, l, u = n.cookie || "";
            if (u !== r)
                for (r = u, e = r.split("; "), i = {}, a = 0; a < e.length; a++) s = e[a], o = s.indexOf("="), o > 0 && (l = t(s.substring(0, o)), g(i[l]) && (i[l] = t(s.substring(o + 1))));
            return i
        }
    }

    function Dn() {
        this.$get = Ln
    }

    function Nn(e) {
        function t(r, s) {
            if (w(r)) {
                var a = {};
                return i(r, function (e, n) {
                    a[n] = t(n, e)
                }), a
            }
            return e.factory(r + n, s)
        }
        var n = "Filter";
        this.register = t, this.$get = ["$injector", function (e) {
            return function (t) {
                return e.get(t + n)
            }
        }], t("currency", Vn), t("date", si), t("filter", zn), t("json", ai), t("limitTo", oi), t("lowercase", Ps), t("number", qn), t("orderBy", ui), t("uppercase", Fs)
    }

    function zn() {
        return function (e, i, r, s) {
            if (!n(e)) {
                if (null == e) return e;
                throw t("filter")("notarray", "Expected array but received: {0}", e)
            }
            s = s || "$";
            var a, o, l = Hn(i);
            switch (l) {
                case "function":
                    a = i;
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    o = !0;
                case "object":
                    a = Un(i, r, s, o);
                    break;
                default:
                    return e
            }
            return Array.prototype.filter.call(e, a)
        }
    }

    function Un(e, t, n, i) {
        var r, s = w(e) && n in e;
        return t === !0 ? t = z : M(t) || (t = function (e, t) {
            return g(e) ? !1 : null === e || null === t ? e === t : w(t) || w(e) && !m(e) ? !1 : (e = Fi("" + e), t = Fi("" + t), -1 !== e.indexOf(t))
        }), r = function (r) {
            return s && !w(r) ? Xn(r, e[n], t, n, !1) : Xn(r, e, t, n, i)
        }
    }

    function Xn(e, t, n, i, r, s) {
        var a = Hn(e),
            o = Hn(t);
        if ("string" === o && "!" === t.charAt(0)) return !Xn(e, t.substring(1), n, i, r);
        if (Yi(e)) return e.some(function (e) {
            return Xn(e, t, n, i, r)
        });
        switch (a) {
            case "object":
                var l;
                if (r) {
                    for (l in e)
                        if ("$" !== l.charAt(0) && Xn(e[l], t, n, i, !0)) return !0;
                    return s ? !1 : Xn(e, t, n, i, !1)
                }
                if ("object" === o) {
                    for (l in t) {
                        var u = t[l];
                        if (!M(u) && !g(u)) {
                            var c = l === i,
                                h = c ? e : e[l];
                            if (!Xn(h, u, n, i, c, c)) return !1
                        }
                    }
                    return !0
                }
                return n(e, t);
            case "function":
                return !1;
            default:
                return n(e, t)
        }
    }

    function Hn(e) {
        return null === e ? "null" : typeof e
    }

    function Vn(e) {
        var t = e.NUMBER_FORMATS;
        return function (e, n, i) {
            return g(n) && (n = t.CURRENCY_SYM), g(i) && (i = t.PATTERNS[1].maxFrac), null == e ? e : Wn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, i).replace(/\u00A4/g, n)
        }
    }

    function qn(e) {
        var t = e.NUMBER_FORMATS;
        return function (e, n) {
            return null == e ? e : Wn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function Gn(e) {
        var t, n, i, r, s, a = 0;
        for ((n = e.indexOf(Is)) > -1 && (e = e.replace(Is, "")), (i = e.search(/e/i)) > 0 ? (0 > n && (n = i), n += +e.slice(i + 1), e = e.substring(0, i)) : 0 > n && (n = e.length), i = 0; e.charAt(i) == Ss; i++);
        if (i == (s = e.length)) t = [0], n = 1;
        else {
            for (s--; e.charAt(s) == Ss;) s--;
            for (n -= i, t = [], r = 0; s >= i; i++, r++) t[r] = +e.charAt(i)
        }
        return n > Es && (t = t.splice(0, Es - 1), a = n - 1, n = 1), {
            d: t,
            e: a,
            i: n
        }
    }

    function Bn(e, t, n, i) {
        var r = e.d,
            s = r.length - e.i;
        t = g(t) ? Math.min(Math.max(n, s), i) : +t;
        var a = t + e.i,
            o = r[a];
        if (a > 0) {
            r.splice(Math.max(e.i, a));
            for (var l = a; l < r.length; l++) r[l] = 0
        } else {
            s = Math.max(0, s), e.i = 1, r.length = Math.max(1, a = t + 1), r[0] = 0;
            for (var u = 1; a > u; u++) r[u] = 0
        }
        if (o >= 5)
            if (0 > a - 1) {
                for (var c = 0; c > a; c--) r.unshift(0), e.i++;
                r.unshift(1), e.i++
            } else r[a - 1]++;
        for (; s < Math.max(0, t); s++) r.push(0);
        var h = r.reduceRight(function (e, t, n, i) {
            return t += e, i[n] = t % 10, Math.floor(t / 10)
        }, 0);
        h && (r.unshift(h), e.i++)
    }

    function Wn(e, t, n, i, r) {
        if (!x(e) && !b(e) || isNaN(e)) return "";
        var s, a = !isFinite(e),
            o = !1,
            l = Math.abs(e) + "",
            u = "";
        if (a) u = "∞";
        else {
            s = Gn(l), Bn(s, r, t.minFrac, t.maxFrac);
            var c = s.d,
                h = s.i,
                d = s.e,
                p = [];
            for (o = c.reduce(function (e, t) {
                    return e && !t
                }, !0); 0 > h;) c.unshift(0), h++;
            h > 0 ? p = c.splice(h, c.length) : (p = c, c = [0]);
            var f = [];
            for (c.length >= t.lgSize && f.unshift(c.splice(-t.lgSize, c.length).join("")); c.length > t.gSize;) f.unshift(c.splice(-t.gSize, c.length).join(""));
            c.length && f.unshift(c.join("")), u = f.join(n), p.length && (u += i + p.join("")), d && (u += "e+" + d)
        }
        return 0 > e && !o ? t.negPre + u + t.negSuf : t.posPre + u + t.posSuf
    }

    function Yn(e, t, n, i) {
        var r = "";
        for ((0 > e || i && 0 >= e) && (i ? e = -e + 1 : (e = -e, r = "-")), e = "" + e; e.length < t;) e = Ss + e;
        return n && (e = e.substr(e.length - t)), r + e
    }

    function Kn(e, t, n, i, r) {
        return n = n || 0,
            function (s) {
                var a = s["get" + e]();
                return (n > 0 || a > -n) && (a += n), 0 === a && -12 == n && (a = 12), Yn(a, t, i, r)
            }
    }

    function Zn(e, t, n) {
        return function (i, r) {
            var s = i["get" + e](),
                a = (n ? "STANDALONE" : "") + (t ? "SHORT" : ""),
                o = _i(a + e);
            return r[o][s]
        }
    }

    function Jn(e, t, n) {
        var i = -1 * n,
            r = i >= 0 ? "+" : "";
        return r += Yn(Math[i > 0 ? "floor" : "ceil"](i / 60), 2) + Yn(Math.abs(i % 60), 2)
    }

    function Qn(e) {
        var t = new Date(e, 0, 1).getDay();
        return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function ei(e) {
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
    }

    function ti(e) {
        return function (t) {
            var n = Qn(t.getFullYear()),
                i = ei(t),
                r = +i - +n,
                s = 1 + Math.round(r / 6048e5);
            return Yn(s, e)
        }
    }

    function ni(e, t) {
        return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
    }

    function ii(e, t) {
        return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
    }

    function ri(e, t) {
        return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
    }

    function si(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                var i = new Date(0),
                    r = 0,
                    s = 0,
                    a = t[8] ? i.setUTCFullYear : i.setFullYear,
                    o = t[8] ? i.setUTCHours : i.setHours;
                t[9] && (r = h(t[9] + t[10]), s = h(t[9] + t[11])), a.call(i, h(t[1]), h(t[2]) - 1, h(t[3]));
                var l = h(t[4] || 0) - r,
                    u = h(t[5] || 0) - s,
                    c = h(t[6] || 0),
                    d = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                return o.call(i, l, u, c, d), i
            }
            return e
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r, s) {
            var a, o, l = "",
                u = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, x(n) && (n = As.test(n) ? h(n) : t(n)), b(n) && (n = new Date(n)), !T(n) || !isFinite(n.getTime())) return n;
            for (; r;) o = ks.exec(r), o ? (u = U(u, o, 1), r = u.pop()) : (u.push(r), r = null);
            var c = n.getTimezoneOffset();
            return s && (c = B(s, c), n = Y(n, s, !0)), i(u, function (t) {
                a = Os[t], l += a ? a(n, e.DATETIME_FORMATS, c) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), l
        }
    }

    function ai() {
        return function (e, t) {
            return g(t) && (t = 2), q(e, t)
        }
    }

    function oi() {
        return function (e, t, i) {
            return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : h(t), isNaN(t) ? e : (b(e) && (e = e.toString()), n(e) ? (i = !i || isNaN(i) ? 0 : h(i), i = 0 > i ? Math.max(0, e.length + i) : i, t >= 0 ? li(e, i, i + t) : 0 === i ? li(e, t, e.length) : li(e, Math.max(0, i + t), i)) : e)
        }
    }

    function li(e, t, n) {
        return x(e) ? e.slice(t, n) : Ui.call(e, t, n)
    }

    function ui(e) {
        function i(t) {
            return t.map(function (t) {
                var n = 1,
                    i = f;
                if (M(t)) i = t;
                else if (x(t) && (("+" == t.charAt(0) || "-" == t.charAt(0)) && (n = "-" == t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (i = e(t), i.constant))) {
                    var r = i();
                    i = function (e) {
                        return e[r]
                    }
                }
                return {
                    get: i,
                    descending: n
                }
            })
        }

        function r(e) {
            switch (typeof e) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function s(e) {
            return M(e.valueOf) && (e = e.valueOf(), r(e)) ? e : m(e) && (e = e.toString(), r(e)) ? e : e
        }

        function a(e, t) {
            var n = typeof e;
            return null === e ? (n = "string", e = "null") : "object" === n && (e = s(e)), {
                value: e,
                type: n,
                index: t
            }
        }

        function o(e, t) {
            var n = 0,
                i = e.type,
                r = t.type;
            if (i === r) {
                var s = e.value,
                    a = t.value;
                "string" === i ? (s = s.toLowerCase(), a = a.toLowerCase()) : "object" === i && (w(s) && (s = e.index), w(a) && (a = t.index)), s !== a && (n = a > s ? -1 : 1)
            } else n = r > i ? -1 : 1;
            return n
        }
        return function (e, r, s, l) {
            function u(e, t) {
                return {
                    value: e,
                    tieBreaker: {
                        value: t,
                        type: "number",
                        index: t
                    },
                    predicateValues: h.map(function (n) {
                        return a(n.get(e), t)
                    })
                }
            }

            function c(e, t) {
                for (var n = 0, i = h.length; i > n; n++) {
                    var r = p(e.predicateValues[n], t.predicateValues[n]);
                    if (r) return r * h[n].descending * d
                }
                return p(e.tieBreaker, t.tieBreaker) * d
            }
            if (null == e) return e;
            if (!n(e)) throw t("orderBy")("notarray", "Expected array but received: {0}", e);
            Yi(r) || (r = [r]), 0 === r.length && (r = ["+"]);
            var h = i(r),
                d = s ? -1 : 1,
                p = M(l) ? l : o,
                f = Array.prototype.map.call(e, u);
            return f.sort(c), e = f.map(function (e) {
                return e.value
            })
        }
    }

    function ci(e) {
        return M(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", $(e)
    }

    function hi(e, t) {
        e.$name = t
    }

    function di(e, t, n, r, s) {
        var a = this,
            o = [];
        a.$error = {}, a.$$success = {}, a.$pending = void 0, a.$name = s(t.name || t.ngForm || "")(n), a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, a.$submitted = !1, a.$$parentForm = Rs, a.$rollbackViewValue = function () {
            i(o, function (e) {
                e.$rollbackViewValue()
            })
        }, a.$commitViewValue = function () {
            i(o, function (e) {
                e.$commitViewValue()
            })
        }, a.$addControl = function (e) {
            he(e.$name, "input"), o.push(e), e.$name && (a[e.$name] = e), e.$$parentForm = a
        }, a.$$renameControl = function (e, t) {
            var n = e.$name;
            a[n] === e && delete a[n], a[t] = e, e.$name = t
        }, a.$removeControl = function (e) {
            e.$name && a[e.$name] === e && delete a[e.$name], i(a.$pending, function (t, n) {
                a.$setValidity(n, null, e)
            }), i(a.$error, function (t, n) {
                a.$setValidity(n, null, e)
            }), i(a.$$success, function (t, n) {
                a.$setValidity(n, null, e)
            }), D(o, e), e.$$parentForm = Rs
        }, Ii({
            ctrl: this,
            $element: e,
            set: function (e, t, n) {
                var i = e[t];
                if (i) {
                    var r = i.indexOf(n); - 1 === r && i.push(n)
                } else e[t] = [n]
            },
            unset: function (e, t, n) {
                var i = e[t];
                i && (D(i, n), 0 === i.length && delete e[t])
            },
            $animate: r
        }), a.$setDirty = function () {
            r.removeClass(e, ya), r.addClass(e, xa), a.$dirty = !0, a.$pristine = !1, a.$$parentForm.$setDirty()
        }, a.$setPristine = function () {
            r.setClass(e, ya, xa + " " + Ls), a.$dirty = !1, a.$pristine = !0, a.$submitted = !1, i(o, function (e) {
                e.$setPristine()
            })
        }, a.$setUntouched = function () {
            i(o, function (e) {
                e.$setUntouched()
            })
        }, a.$setSubmitted = function () {
            r.addClass(e, Ls), a.$submitted = !0, a.$$parentForm.$setSubmitted()
        }
    }

    function pi(e) {
        e.$formatters.push(function (t) {
            return e.$isEmpty(t) ? t : t.toString()
        })
    }

    function fi(e, t, n, i, r, s) {
        $i(e, t, n, i, r, s), pi(i)
    }

    function $i(e, t, n, i, r, s) {
        var a = Fi(t[0].type);
        if (!r.android) {
            var o = !1;
            t.on("compositionstart", function () {
                o = !0
            }), t.on("compositionend", function () {
                o = !1, u()
            })
        }
        var l, u = function (e) {
            if (l && (s.defer.cancel(l), l = null), !o) {
                var r = t.val(),
                    u = e && e.type;
                "password" === a || n.ngTrim && "false" === n.ngTrim || (r = Zi(r)), (i.$viewValue !== r || "" === r && i.$$hasNativeValidators) && i.$setViewValue(r, u)
            }
        };
        if (r.hasEvent("input")) t.on("input", u);
        else {
            var c = function (e, t, n) {
                l || (l = s.defer(function () {
                    l = null, t && t.value === n || u(e)
                }))
            };
            t.on("keydown", function (e) {
                var t = e.keyCode;
                91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || c(e, this, this.value)
            }), r.hasEvent("paste") && t.on("paste cut", c)
        }
        t.on("change", u), Zs[a] && i.$$hasNativeValidators && a === n.type && t.on(Ks, function (e) {
            if (!l) {
                var t = this[Ai],
                    n = t.badInput,
                    i = t.typeMismatch;
                l = s.defer(function () {
                    l = null, (t.badInput !== n || t.typeMismatch !== i) && u(e)
                })
            }
        }), i.$render = function () {
            var e = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue;
            t.val() !== e && t.val(e)
        }
    }

    function mi(e, t) {
        if (T(e)) return e;
        if (x(e)) {
            Bs.lastIndex = 0;
            var n = Bs.exec(e);
            if (n) {
                var i = +n[1],
                    r = +n[2],
                    s = 0,
                    a = 0,
                    o = 0,
                    l = 0,
                    u = Qn(i),
                    c = 7 * (r - 1);
                return t && (s = t.getHours(), a = t.getMinutes(), o = t.getSeconds(), l = t.getMilliseconds()), new Date(i, 0, u.getDate() + c, s, a, o, l)
            }
        }
        return NaN
    }

    function gi(e, t) {
        return function (n, r) {
            var s, a;
            if (T(n)) return n;
            if (x(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Us.test(n)) return new Date(n);
                if (e.lastIndex = 0, s = e.exec(n)) return s.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, i(s, function (e, n) {
                    n < t.length && (a[t[n]] = +e)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return NaN
        }
    }

    function vi(e, t, n, i) {
        return function (r, s, a, o, l, u, c) {
            function h(e) {
                return e && !(e.getTime && e.getTime() !== e.getTime())
            }

            function d(e) {
                return v(e) && !T(e) ? n(e) || void 0 : e
            }
            wi(r, s, a, o), $i(r, s, a, o, l, u);
            var p, f = o && o.$options && o.$options.timezone;
            if (o.$$parserName = e, o.$parsers.push(function (e) {
                    if (o.$isEmpty(e)) return null;
                    if (t.test(e)) {
                        var i = n(e, p);
                        return f && (i = Y(i, f)), i
                    }
                    return void 0
                }), o.$formatters.push(function (e) {
                    if (e && !T(e)) throw Ia("datefmt", "Expected `{0}` to be a date", e);
                    return h(e) ? (p = e, p && f && (p = Y(p, f, !0)), c("date")(e, i, f)) : (p = null, "")
                }), v(a.min) || a.ngMin) {
                var $;
                o.$validators.min = function (e) {
                    return !h(e) || g($) || n(e) >= $
                }, a.$observe("min", function (e) {
                    $ = d(e), o.$validate()
                })
            }
            if (v(a.max) || a.ngMax) {
                var m;
                o.$validators.max = function (e) {
                    return !h(e) || g(m) || n(e) <= m
                }, a.$observe("max", function (e) {
                    m = d(e), o.$validate()
                })
            }
        }
    }

    function wi(e, t, n, i) {
        var r = t[0],
            s = i.$$hasNativeValidators = w(r.validity);
        s && i.$parsers.push(function (e) {
            var n = t.prop(Ai) || {};
            return n.badInput || n.typeMismatch ? void 0 : e
        })
    }

    function yi(e, t, n, i, r, s) {
        if (wi(e, t, n, i), $i(e, t, n, i, r, s), i.$$parserName = "number", i.$parsers.push(function (e) {
                return i.$isEmpty(e) ? null : Vs.test(e) ? parseFloat(e) : void 0
            }), i.$formatters.push(function (e) {
                if (!i.$isEmpty(e)) {
                    if (!b(e)) throw Ia("numfmt", "Expected `{0}` to be a number", e);
                    e = e.toString()
                }
                return e
            }), v(n.min) || n.ngMin) {
            var a;
            i.$validators.min = function (e) {
                return i.$isEmpty(e) || g(a) || e >= a
            }, n.$observe("min", function (e) {
                v(e) && !b(e) && (e = parseFloat(e)), a = b(e) && !isNaN(e) ? e : void 0, i.$validate()
            })
        }
        if (v(n.max) || n.ngMax) {
            var o;
            i.$validators.max = function (e) {
                return i.$isEmpty(e) || g(o) || o >= e
            }, n.$observe("max", function (e) {
                v(e) && !b(e) && (e = parseFloat(e)), o = b(e) && !isNaN(e) ? e : void 0, i.$validate()
            })
        }
    }

    function xi(e, t, n, i, r, s) {
        $i(e, t, n, i, r, s), pi(i), i.$$parserName = "url", i.$validators.url = function (e, t) {
            var n = e || t;
            return i.$isEmpty(n) || Xs.test(n)
        }
    }

    function bi(e, t, n, i, r, s) {
        $i(e, t, n, i, r, s), pi(i), i.$$parserName = "email", i.$validators.email = function (e, t) {
            var n = e || t;
            return i.$isEmpty(n) || Hs.test(n)
        }
    }

    function Ti(e, t, n, i) {
        g(n.name) && t.attr("name", a());
        var r = function (e) {
            t[0].checked && i.$setViewValue(n.value, e && e.type)
        };
        t.on("click", r), i.$render = function () {
            var e = n.value;
            t[0].checked = e == i.$viewValue
        }, n.$observe("value", i.$render)
    }

    function Mi(e, t, n, i, r) {
        var s;
        if (v(i)) {
            if (s = e(i), !s.constant) throw Ia("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
            return s(t)
        }
        return r
    }

    function Ci(e, t, n, i, r, s, a, o) {
        var l = Mi(o, e, "ngTrueValue", n.ngTrueValue, !0),
            u = Mi(o, e, "ngFalseValue", n.ngFalseValue, !1),
            c = function (e) {
                i.$setViewValue(t[0].checked, e && e.type)
            };
        t.on("click", c), i.$render = function () {
            t[0].checked = i.$viewValue
        }, i.$isEmpty = function (e) {
            return e === !1
        }, i.$formatters.push(function (e) {
            return z(e, l)
        }), i.$parsers.push(function (e) {
            return e ? l : u
        })
    }

    function Ei(e, t) {
        return e = "ngClass" + e, ["$animate", function (n) {
            function r(e, t) {
                var n = [];
                e: for (var i = 0; i < e.length; i++) {
                    for (var r = e[i], s = 0; s < t.length; s++)
                        if (r == t[s]) continue e;
                    n.push(r)
                }
                return n
            }

            function s(e) {
                var t = [];
                return Yi(e) ? (i(e, function (e) {
                    t = t.concat(s(e))
                }), t) : x(e) ? e.split(" ") : w(e) ? (i(e, function (e, n) {
                    e && (t = t.concat(n.split(" ")))
                }), t) : e
            }
            return {
                restrict: "AC",
                link: function (a, o, l) {
                    function u(e) {
                        var t = h(e, 1);
                        l.$addClass(t)
                    }

                    function c(e) {
                        var t = h(e, -1);
                        l.$removeClass(t)
                    }

                    function h(e, t) {
                        var n = o.data("$classCounts") || fe(),
                            r = [];
                        return i(e, function (e) {
                            (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
                        }), o.data("$classCounts", n), r.join(" ")
                    }

                    function d(e, t) {
                        var i = r(t, e),
                            s = r(e, t);
                        i = h(i, 1), s = h(s, -1), i && i.length && n.addClass(o, i), s && s.length && n.removeClass(o, s)
                    }

                    function p(e) {
                        if (t === !0 || (1 & a.$index) === t) {
                            var n = s(e || []);
                            if (f) {
                                if (!z(e, f)) {
                                    var i = s(f);
                                    d(i, n)
                                }
                            } else u(n)
                        }
                        f = Yi(e) ? e.map(function (e) {
                            return me(e)
                        }) : me(e)
                    }
                    var f;
                    a.$watch(l[e], p, !0), l.$observe("class", function (t) {
                        p(a.$eval(l[e]))
                    }), "ngClass" !== e && a.$watch("$index", function (n, i) {
                        var r = 1 & n;
                        if (r !== (1 & i)) {
                            var o = s(a.$eval(l[e]));
                            r === t ? u(o) : c(o)
                        }
                    })
                }
            }
        }]
    }

    function Ii(e) {
        function t(e, t, o) {
            g(t) ? n("$pending", e, o) : i("$pending", e, o), A(t) ? t ? (c(a.$error, e, o), u(a.$$success, e, o)) : (u(a.$error, e, o), c(a.$$success, e, o)) : (c(a.$error, e, o), c(a.$$success, e, o)), a.$pending ? (r(Ma, !0), a.$valid = a.$invalid = void 0, s("", null)) : (r(Ma, !1), a.$valid = Si(a.$error), a.$invalid = !a.$valid, s("", a.$valid));
            var l;
            l = a.$pending && a.$pending[e] ? void 0 : a.$error[e] ? !1 : a.$$success[e] ? !0 : null, s(e, l), a.$$parentForm.$setValidity(e, l, a)
        }

        function n(e, t, n) {
            a[e] || (a[e] = {}), u(a[e], t, n)
        }

        function i(e, t, n) {
            a[e] && c(a[e], t, n), Si(a[e]) && (a[e] = void 0)
        }

        function r(e, t) {
            t && !l[e] ? (h.addClass(o, e), l[e] = !0) : !t && l[e] && (h.removeClass(o, e), l[e] = !1)
        }

        function s(e, t) {
            e = e ? "-" + oe(e, "-") : "", r(va + e, t === !0), r(wa + e, t === !1)
        }
        var a = e.ctrl,
            o = e.$element,
            l = {},
            u = e.set,
            c = e.unset,
            h = e.$animate;
        l[wa] = !(l[va] = o.hasClass(va)), a.$setValidity = t
    }

    function Si(e) {
        if (e)
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
        return !0
    }

    function Oi(e) {
        e[0].hasAttribute("selected") && (e[0].selected = !0)
    }
    var ki = /^\/(.+)\/([a-z]*)$/,
        Ai = "validity",
        Pi = Object.prototype.hasOwnProperty,
        Fi = function (e) {
            return x(e) ? e.toLowerCase() : e
        },
        _i = function (e) {
            return x(e) ? e.toUpperCase() : e
        },
        ji = function (e) {
            return x(e) ? e.replace(/[A-Z]/g, function (e) {
                return String.fromCharCode(32 | e.charCodeAt(0))
            }) : e
        },
        Ri = function (e) {
            return x(e) ? e.replace(/[a-z]/g, function (e) {
                return String.fromCharCode(-33 & e.charCodeAt(0))
            }) : e
        };
    "i" !== "I".toLowerCase() && (Fi = ji, _i = Ri);
    var Li, Di, Ni, zi, Ui = [].slice,
        Xi = [].splice,
        Hi = [].push,
        Vi = Object.prototype.toString,
        qi = Object.getPrototypeOf,
        Gi = t("ng"),
        Bi = e.angular || (e.angular = {}),
        Wi = 0;
    Li = e.document.documentMode, p.$inject = [], f.$inject = [];
    var Yi = Array.isArray,
        Ki = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        Zi = function (e) {
            return x(e) ? e.trim() : e
        },
        Ji = function (e) {
            return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        Qi = function () {
            function t() {
                try {
                    return new Function(""), !1
                } catch (e) {
                    return !0
                }
            }
            if (!v(Qi.rules)) {
                var n = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
                if (n) {
                    var i = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
                    Qi.rules = {
                        noUnsafeEval: !i || -1 !== i.indexOf("no-unsafe-eval"),
                        noInlineStyle: !i || -1 !== i.indexOf("no-inline-style")
                    }
                } else Qi.rules = {
                    noUnsafeEval: t(),
                    noInlineStyle: !1
                }
            }
            return Qi.rules
        },
        er = function () {
            if (v(er.name_)) return er.name_;
            var t, n, i, r, s = nr.length;
            for (n = 0; s > n; ++n)
                if (i = nr[n], t = e.document.querySelector("[" + i.replace(":", "\\:") + "jq]")) {
                    r = t.getAttribute(i + "jq");
                    break
                } return er.name_ = r
        },
        tr = /:/g,
        nr = ["ng-", "data-ng-", "ng:", "x-ng-"],
        ir = /[A-Z]/g,
        rr = !1,
        sr = 1,
        ar = 2,
        or = 3,
        lr = 8,
        ur = 9,
        cr = 11,
        hr = {
            full: "1.5.8",
            major: 1,
            minor: 5,
            dot: 8,
            codeName: "arbitrary-fallbacks"
        };
    Oe.expando = "ng339";
    var dr = Oe.cache = {},
        pr = 1,
        fr = function (e, t, n) {
            e.addEventListener(t, n, !1)
        },
        $r = function (e, t, n) {
            e.removeEventListener(t, n, !1)
        };
    Oe._data = function (e) {
        return this.cache[e[this.expando]] || {}
    };
    var mr = /([\:\-\_]+(.))/g,
        gr = /^moz([A-Z])/,
        vr = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        wr = t("jqLite"),
        yr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        xr = /<|&#?\w+;/,
        br = /<([\w:-]+)/,
        Tr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Mr = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Mr.optgroup = Mr.option, Mr.tbody = Mr.tfoot = Mr.colgroup = Mr.caption = Mr.thead, Mr.th = Mr.td;
    var Cr = e.Node.prototype.contains || function (e) {
            return !!(16 & this.compareDocumentPosition(e))
        },
        Er = Oe.prototype = {
            ready: function (t) {
                function n() {
                    i || (i = !0, t())
                }
                var i = !1;
                "complete" === e.document.readyState ? e.setTimeout(n) : (this.on("DOMContentLoaded", n), Oe(e).on("load", n))
            },
            toString: function () {
                var e = [];
                return i(this, function (t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function (e) {
                return Di(e >= 0 ? this[e] : this[this.length + e])
            },
            length: 0,
            push: Hi,
            sort: [].sort,
            splice: [].splice
        },
        Ir = {};
    i("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (e) {
        Ir[Fi(e)] = e
    });
    var Sr = {};
    i("input,select,option,textarea,button,form,details".split(","), function (e) {
        Sr[e] = !0
    });
    var Or = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    i({
        data: je,
        removeData: Fe,
        hasData: Me,
        cleanData: Ce
    }, function (e, t) {
        Oe[t] = e
    }), i({
        data: je,
        inheritedData: Ue,
        scope: function (e) {
            return Di.data(e, "$scope") || Ue(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function (e) {
            return Di.data(e, "$isolateScope") || Di.data(e, "$isolateScopeNoTemplate")
        },
        controller: ze,
        injector: function (e) {
            return Ue(e, "$injector")
        },
        removeAttr: function (e, t) {
            e.removeAttribute(t)
        },
        hasClass: Re,
        css: function (e, t, n) {
            return t = xe(t), v(n) ? void(e.style[t] = n) : e.style[t]
        },
        attr: function (e, t, n) {
            var i = e.nodeType;
            if (i !== or && i !== ar && i !== lr) {
                var r = Fi(t);
                if (Ir[r]) {
                    if (!v(n)) return e[t] || (e.attributes.getNamedItem(t) || p).specified ? r : void 0;
                    n ? (e[t] = !0, e.setAttribute(t, r)) : (e[t] = !1, e.removeAttribute(r))
                } else if (v(n)) e.setAttribute(t, n);
                else if (e.getAttribute) {
                    var s = e.getAttribute(t, 2);
                    return null === s ? void 0 : s
                }
            }
        },
        prop: function (e, t, n) {
            return v(n) ? void(e[t] = n) : e[t]
        },
        text: function () {
            function e(e, t) {
                if (g(t)) {
                    var n = e.nodeType;
                    return n === sr || n === or ? e.textContent : ""
                }
                e.textContent = t
            }
            return e.$dv = "", e
        }(),
        val: function (e, t) {
            if (g(t)) {
                if (e.multiple && "select" === L(e)) {
                    var n = [];
                    return i(e.options, function (e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        },
        html: function (e, t) {
            return g(t) ? e.innerHTML : (Ae(e, !0), void(e.innerHTML = t))
        },
        empty: Xe
    }, function (e, t) {
        Oe.prototype[t] = function (t, n) {
            var i, r, s = this.length;
            if (e !== Xe && g(2 == e.length && e !== Re && e !== ze ? t : n)) {
                if (w(t)) {
                    for (i = 0; s > i; i++)
                        if (e === je) e(this[i], t);
                        else
                            for (r in t) e(this[i], r, t[r]);
                    return this
                }
                for (var a = e.$dv, o = g(a) ? Math.min(s, 1) : s, l = 0; o > l; l++) {
                    var u = e(this[l], t, n);
                    a = a ? a + u : u
                }
                return a
            }
            for (i = 0; s > i; i++) e(this[i], t, n);
            return this
        }
    }), i({
        removeData: Fe,
        on: function (e, t, n, i) {
            if (v(i)) throw wr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (Te(e)) {
                var r = _e(e, !0),
                    s = r.events,
                    a = r.handle;
                a || (a = r.handle = Be(e, s));
                for (var o = t.indexOf(" ") >= 0 ? t.split(" ") : [t], l = o.length, u = function (t, i, r) {
                        var o = s[t];
                        o || (o = s[t] = [], o.specialHandlerWrapper = i, "$destroy" === t || r || fr(e, t, a)), o.push(n)
                    }; l--;) t = o[l], vr[t] ? (u(vr[t], Ye), u(t, void 0, !0)) : u(t)
            }
        },
        off: Pe,
        one: function (e, t, n) {
            e = Di(e), e.on(t, function i() {
                e.off(t, n), e.off(t, i)
            }), e.on(t, n)
        },
        replaceWith: function (e, t) {
            var n, r = e.parentNode;
            Ae(e), i(new Oe(t), function (t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function (e) {
            var t = [];
            return i(e.childNodes, function (e) {
                e.nodeType === sr && t.push(e)
            }), t
        },
        contents: function (e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function (e, t) {
            var n = e.nodeType;
            if (n === sr || n === cr) {
                t = new Oe(t);
                for (var i = 0, r = t.length; r > i; i++) {
                    var s = t[i];
                    e.appendChild(s)
                }
            }
        },
        prepend: function (e, t) {
            if (e.nodeType === sr) {
                var n = e.firstChild;
                i(new Oe(t), function (t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function (e, t) {
            Se(e, Di(t).eq(0).clone()[0])
        },
        remove: He,
        detach: function (e) {
            He(e, !0)
        },
        after: function (e, t) {
            var n = e,
                i = e.parentNode;
            t = new Oe(t);
            for (var r = 0, s = t.length; s > r; r++) {
                var a = t[r];
                i.insertBefore(a, n.nextSibling), n = a
            }
        },
        addClass: De,
        removeClass: Le,
        toggleClass: function (e, t, n) {
            t && i(t.split(" "), function (t) {
                var i = n;
                g(i) && (i = !Re(e, t)), (i ? De : Le)(e, t)
            })
        },
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== cr ? t : null
        },
        next: function (e) {
            return e.nextElementSibling
        },
        find: function (e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: ke,
        triggerHandler: function (e, t, n) {
            var r, s, a, o = t.type || t,
                l = _e(e),
                c = l && l.events,
                h = c && c[o];
            h && (r = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function () {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function () {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: p,
                type: o,
                target: e
            }, t.type && (r = u(r, t)), s = me(h), a = n ? [r].concat(n) : [r], i(s, function (t) {
                r.isImmediatePropagationStopped() || t.apply(e, a)
            }))
        }
    }, function (e, t) {
        Oe.prototype[t] = function (t, n, i) {
            for (var r, s = 0, a = this.length; a > s; s++) g(r) ? (r = e(this[s], t, n, i), v(r) && (r = Di(r))) : Ne(r, e(this[s], t, n, i));
            return v(r) ? r : this
        }, Oe.prototype.bind = Oe.prototype.on, Oe.prototype.unbind = Oe.prototype.off
    }), Je.prototype = {
        put: function (e, t) {
            this[Ze(e, this.nextUid)] = t
        },
        get: function (e) {
            return this[Ze(e, this.nextUid)]
        },
        remove: function (e) {
            var t = this[e = Ze(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var kr = [function () {
            this.$get = [function () {
                return Je
            }]
        }],
        Ar = /^([^\(]+?)=>/,
        Pr = /^[^\(]*\(\s*([^\)]*)\)/m,
        Fr = /,/,
        _r = /^\s*(_?)(\S+?)\1\s*$/,
        jr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Rr = t("$injector");
    it.$$annotate = nt;
    var Lr = t("$animate"),
        Dr = 1,
        Nr = "ng-animate",
        zr = function () {
            this.$get = p
        },
        Ur = function () {
            var e = new Je,
                t = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function (n, r) {
                function s(e, t, n) {
                    var r = !1;
                    return t && (t = x(t) ? t.split(" ") : Yi(t) ? t : [], i(t, function (t) {
                        t && (r = !0, e[t] = n)
                    })), r
                }

                function a() {
                    i(t, function (t) {
                        var n = e.get(t);
                        if (n) {
                            var r = ot(t.attr("class")),
                                s = "",
                                a = "";
                            i(n, function (e, t) {
                                var n = !!r[t];
                                e !== n && (e ? s += (s.length ? " " : "") + t : a += (a.length ? " " : "") + t)
                            }), i(t, function (e) {
                                s && De(e, s), a && Le(e, a)
                            }), e.remove(t)
                        }
                    }), t.length = 0
                }

                function o(n, i, o) {
                    var l = e.get(n) || {},
                        u = s(l, i, !0),
                        c = s(l, o, !1);
                    (u || c) && (e.put(n, l), t.push(n), 1 === t.length && r.$$postDigest(a))
                }
                return {
                    enabled: p,
                    on: p,
                    off: p,
                    pin: p,
                    push: function (e, t, i, r) {
                        r && r(), i = i || {}, i.from && e.css(i.from), i.to && e.css(i.to), (i.addClass || i.removeClass) && o(e, i.addClass, i.removeClass);
                        var s = new n;
                        return s.complete(), s
                    }
                }
            }]
        },
        Xr = ["$provide", function (e) {
            var t = this;
            this.$$registeredAnimations = Object.create(null), this.register = function (n, i) {
                if (n && "." !== n.charAt(0)) throw Lr("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                var r = n + "-animation";
                t.$$registeredAnimations[n.substr(1)] = r, e.factory(r, i)
            }, this.classNameFilter = function (e) {
                if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null, this.$$classNameFilter)) {
                    var t = new RegExp("(\\s+|\\/)" + Nr + "(\\s+|\\/)");
                    if (t.test(this.$$classNameFilter.toString())) throw Lr("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Nr)
                }
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function (e) {
                function t(e, t, n) {
                    if (n) {
                        var i = at(n);
                        !i || i.parentNode || i.previousElementSibling || (n = null)
                    }
                    n ? n.after(e) : t.prepend(e)
                }
                return {
                    on: e.on,
                    off: e.off,
                    pin: e.pin,
                    enabled: e.enabled,
                    cancel: function (e) {
                        e.end && e.end()
                    },
                    enter: function (n, i, r, s) {
                        return i = i && Di(i), r = r && Di(r), i = i || r.parent(), t(n, i, r), e.push(n, "enter", lt(s))
                    },
                    move: function (n, i, r, s) {
                        return i = i && Di(i), r = r && Di(r), i = i || r.parent(), t(n, i, r), e.push(n, "move", lt(s))
                    },
                    leave: function (t, n) {
                        return e.push(t, "leave", lt(n), function () {
                            t.remove()
                        })
                    },
                    addClass: function (t, n, i) {
                        return i = lt(i), i.addClass = st(i.addclass, n), e.push(t, "addClass", i)
                    },
                    removeClass: function (t, n, i) {
                        return i = lt(i), i.removeClass = st(i.removeClass, n), e.push(t, "removeClass", i)
                    },
                    setClass: function (t, n, i, r) {
                        return r = lt(r), r.addClass = st(r.addClass, n), r.removeClass = st(r.removeClass, i), e.push(t, "setClass", r)
                    },
                    animate: function (t, n, i, r, s) {
                        return s = lt(s), s.from = s.from ? u(s.from, n) : n, s.to = s.to ? u(s.to, i) : i, r = r || "ng-inline-animate", s.tempClasses = st(s.tempClasses, r), e.push(t, "animate", s)
                    }
                }
            }]
        }],
        Hr = function () {
            this.$get = ["$$rAF", function (e) {
                function t(t) {
                    n.push(t), n.length > 1 || e(function () {
                        for (var e = 0; e < n.length; e++) n[e]();
                        n = []
                    })
                }
                var n = [];
                return function () {
                    var e = !1;
                    return t(function () {
                            e = !0
                        }),
                        function (n) {
                            e ? n() : t(n)
                        }
                }
            }]
        },
        Vr = function () {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (e, t, n, r, s) {
                function a(e) {
                    this.setHost(e);
                    var t = n(),
                        i = function (e) {
                            s(e, 0, !1)
                        };
                    this._doneCallbacks = [], this._tick = function (e) {
                        var n = r[0];
                        n && n.hidden ? i(e) : t(e)
                    }, this._state = 0
                }
                var o = 0,
                    l = 1,
                    u = 2;
                return a.chain = function (e, t) {
                    function n() {
                        return i === e.length ? void t(!0) : void e[i](function (e) {
                            return e === !1 ? void t(!1) : (i++, void n())
                        })
                    }
                    var i = 0;
                    n()
                }, a.all = function (e, t) {
                    function n(n) {
                        s = s && n, ++r === e.length && t(s)
                    }
                    var r = 0,
                        s = !0;
                    i(e, function (e) {
                        e.done(n)
                    })
                }, a.prototype = {
                    setHost: function (e) {
                        this.host = e || {}
                    },
                    done: function (e) {
                        this._state === u ? e() : this._doneCallbacks.push(e)
                    },
                    progress: p,
                    getPromise: function () {
                        if (!this.promise) {
                            var t = this;
                            this.promise = e(function (e, n) {
                                t.done(function (t) {
                                    t === !1 ? n() : e()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function (e, t) {
                        return this.getPromise().then(e, t)
                    },
                    "catch": function (e) {
                        return this.getPromise()["catch"](e)
                    },
                    "finally": function (e) {
                        return this.getPromise()["finally"](e)
                    },
                    pause: function () {
                        this.host.pause && this.host.pause()
                    },
                    resume: function () {
                        this.host.resume && this.host.resume()
                    },
                    end: function () {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function () {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function (e) {
                        var t = this;
                        t._state === o && (t._state = l, t._tick(function () {
                            t._resolve(e)
                        }))
                    },
                    _resolve: function (e) {
                        this._state !== u && (i(this._doneCallbacks, function (t) {
                            t(e)
                        }), this._doneCallbacks.length = 0, this._state = u)
                    }
                }, a
            }]
        },
        qr = function () {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (e, t, n) {
                return function (t, i) {
                    function r() {
                        return e(function () {
                            s(), o || l.complete(), o = !0
                        }), l
                    }

                    function s() {
                        a.addClass && (t.addClass(a.addClass), a.addClass = null), a.removeClass && (t.removeClass(a.removeClass), a.removeClass = null), a.to && (t.css(a.to), a.to = null)
                    }
                    var a = i || {};
                    a.$$prepared || (a = N(a)), a.cleanupStyles && (a.from = a.to = null), a.from && (t.css(a.from), a.from = null);
                    var o, l = new n;
                    return {
                        start: r,
                        end: r
                    }
                }
            }]
        },
        Gr = t("$compile"),
        Br = new pt;
    ft.$inject = ["$provide", "$$sanitizeUriProvider"], $t.prototype.isFirstChange = function () {
        return this.previousValue === Br
    };
    var Wr = /^((?:x|data)[\:\-_])/i,
        Yr = t("$controller"),
        Kr = /^(\S+)(\s+as\s+([\w$]+))?$/,
        Zr = function () {
            this.$get = ["$document", function (e) {
                return function (t) {
                    return t ? !t.nodeType && t instanceof Di && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                }
            }]
        },
        Jr = "application/json",
        Qr = {
            "Content-Type": Jr + ";charset=utf-8"
        },
        es = /^\[|^\{(?!\{)/,
        ts = {
            "[": /]$/,
            "{": /}$/
        },
        ns = /^\)\]\}',?\n/,
        is = t("$http"),
        rs = function (e) {
            return function () {
                throw is("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
            }
        },
        ss = Bi.$interpolateMinErr = t("$interpolate");
    ss.throwNoconcat = function (e) {
        throw ss("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
    }, ss.interr = function (e, t) {
        return ss("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
    };
    var as = function () {
            this.$get = ["$window", function (e) {
                function t(e) {
                    var t = function (e) {
                        t.data = e, t.called = !0
                    };
                    return t.id = e, t
                }
                var n = e.angular.callbacks,
                    i = {};
                return {
                    createCallback: function (e) {
                        var r = "_" + (n.$$counter++).toString(36),
                            s = "angular.callbacks." + r,
                            a = t(r);
                        return i[s] = n[r] = a, s
                    },
                    wasCalled: function (e) {
                        return i[e].called
                    },
                    getResponse: function (e) {
                        return i[e].data
                    },
                    removeCallback: function (e) {
                        var t = i[e];
                        delete n[t.id], delete i[e]
                    }
                }
            }]
        },
        os = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        ls = {
            http: 80,
            https: 443,
            ftp: 21
        },
        us = t("$location"),
        cs = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: Kt("$$absUrl"),
            url: function (e) {
                if (g(e)) return this.$$url;
                var t = os.exec(e);
                return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
            },
            protocol: Kt("$$protocol"),
            host: Kt("$$host"),
            port: Kt("$$port"),
            path: Zt("$$path", function (e) {
                return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
            }),
            search: function (e, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (x(e) || b(e)) e = e.toString(), this.$$search = J(e);
                        else {
                            if (!w(e)) throw us("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            e = N(e, {}), i(e, function (t, n) {
                                null == t && delete e[n]
                            }), this.$$search = e
                        }
                        break;
                    default:
                        g(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                }
                return this.$$compose(), this
            },
            hash: Zt("$$hash", function (e) {
                return null !== e ? e.toString() : ""
            }),
            replace: function () {
                return this.$$replace = !0, this
            }
        };
    i([Yt, Wt, Bt], function (e) {
        e.prototype = Object.create(cs), e.prototype.state = function (t) {
            if (!arguments.length) return this.$$state;
            if (e !== Bt || !this.$$html5) throw us("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = g(t) ? null : t, this
        }
    });
    var hs = t("$parse"),
        ds = Function.prototype.call,
        ps = Function.prototype.apply,
        fs = Function.prototype.bind,
        $s = fe();
    i("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (e) {
        $s[e] = !0
    });
    var ms = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "",
            "'": "'",
            '"': '"'
        },
        gs = function (e) {
            this.options = e
        };
    gs.prototype = {
        constructor: gs,
        lex: function (e) {
            for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if ('"' === t || "'" === t) this.readString(t);
                else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
                else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: t
                }), this.index++;
                else if (this.isWhitespace(t)) this.index++;
                else {
                    var n = t + this.peek(),
                        i = n + this.peek(2),
                        r = $s[t],
                        s = $s[n],
                        a = $s[i];
                    if (r || s || a) {
                        var o = a ? i : s ? n : t;
                        this.tokens.push({
                            index: this.index,
                            text: o,
                            operator: !0
                        }), this.index += o.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function (e, t) {
            return -1 !== t.indexOf(e)
        },
        peek: function (e) {
            var t = e || 1;
            return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
        },
        isNumber: function (e) {
            return e >= "0" && "9" >= e && "string" == typeof e
        },
        isWhitespace: function (e) {
            return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || " " === e
        },
        isIdentifierStart: function (e) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
        },
        isValidIdentifierStart: function (e) {
            return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
        },
        isIdentifierContinue: function (e) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
        },
        isValidIdentifierContinue: function (e, t) {
            return this.isValidIdentifierStart(e, t) || this.isNumber(e)
        },
        codePointAt: function (e) {
            return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
        },
        peekMultichar: function () {
            var e = this.text.charAt(this.index),
                t = this.peek();
            if (!t) return e;
            var n = e.charCodeAt(0),
                i = t.charCodeAt(0);
            return n >= 55296 && 56319 >= n && i >= 56320 && 57343 >= i ? e + t : e
        },
        isExpOperator: function (e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function (e, t, n) {
            n = n || this.index;
            var i = v(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
            throw hs("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, i, this.text)
        },
        readNumber: function () {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = Fi(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n;
                else {
                    var i = this.peek();
                    if ("e" == n && this.isExpOperator(i)) e += n;
                    else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: t,
                text: e,
                constant: !0,
                value: Number(e)
            })
        },
        readIdent: function () {
            var e = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var t = this.peekMultichar();
                if (!this.isIdentifierContinue(t)) break;
                this.index += t.length
            }
            this.tokens.push({
                index: e,
                text: this.text.slice(e, this.index),
                identifier: !0
            })
        },
        readString: function (e) {
            var t = this.index;
            this.index++;
            for (var n = "", i = e, r = !1; this.index < this.text.length;) {
                var s = this.text.charAt(this.index);
                if (i += s, r) {
                    if ("u" === s) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        var o = ms[s];
                        n += o || s
                    }
                    r = !1
                } else if ("\\" === s) r = !0;
                else {
                    if (s === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: i,
                        constant: !0,
                        value: n
                    });
                    n += s
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var vs = function (e, t) {
        this.lexer = e, this.options = t
    };
    vs.Program = "Program", vs.ExpressionStatement = "ExpressionStatement", vs.AssignmentExpression = "AssignmentExpression", vs.ConditionalExpression = "ConditionalExpression", vs.LogicalExpression = "LogicalExpression", vs.BinaryExpression = "BinaryExpression", vs.UnaryExpression = "UnaryExpression", vs.CallExpression = "CallExpression", vs.MemberExpression = "MemberExpression", vs.Identifier = "Identifier", vs.Literal = "Literal", vs.ArrayExpression = "ArrayExpression", vs.Property = "Property", vs.ObjectExpression = "ObjectExpression", vs.ThisExpression = "ThisExpression", vs.LocalsExpression = "LocalsExpression", vs.NGValueParameter = "NGValueParameter", vs.prototype = {
        ast: function (e) {
            this.text = e, this.tokens = this.lexer.lex(e);
            var t = this.program();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
        },
        program: function () {
            for (var e = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
                    type: vs.Program,
                    body: e
                }
        },
        expressionStatement: function () {
            return {
                type: vs.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function () {
            for (var e, t = this.expression(); e = this.expect("|");) t = this.filter(t);
            return t
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var e = this.ternary();
            return this.expect("=") && (e = {
                type: vs.AssignmentExpression,
                left: e,
                right: this.assignment(),
                operator: "="
            }), e
        },
        ternary: function () {
            var e, t, n = this.logicalOR();
            return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                type: vs.ConditionalExpression,
                test: n,
                alternate: e,
                consequent: t
            }) : n
        },
        logicalOR: function () {
            for (var e = this.logicalAND(); this.expect("||");) e = {
                type: vs.LogicalExpression,
                operator: "||",
                left: e,
                right: this.logicalAND()
            };
            return e
        },
        logicalAND: function () {
            for (var e = this.equality(); this.expect("&&");) e = {
                type: vs.LogicalExpression,
                operator: "&&",
                left: e,
                right: this.equality()
            };
            return e
        },
        equality: function () {
            for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
                type: vs.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.relational()
            };
            return t
        },
        relational: function () {
            for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
                type: vs.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.additive()
            };
            return t
        },
        additive: function () {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
                type: vs.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.multiplicative()
            };
            return t
        },
        multiplicative: function () {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
                type: vs.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.unary()
            };
            return t
        },
        unary: function () {
            var e;
            return (e = this.expect("+", "-", "!")) ? {
                type: vs.UnaryExpression,
                operator: e.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function () {
            var e;
            this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = N(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
                type: vs.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
                type: vs.CallExpression,
                callee: e,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === t.text ? (e = {
                type: vs.MemberExpression,
                object: e,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === t.text ? e = {
                type: vs.MemberExpression,
                object: e,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return e
        },
        filter: function (e) {
            for (var t = [e], n = {
                    type: vs.CallExpression,
                    callee: this.identifier(),
                    arguments: t,
                    filter: !0
                }; this.expect(":");) t.push(this.expression());
            return n
        },
        parseArguments: function () {
            var e = [];
            if (")" !== this.peekToken().text)
                do e.push(this.filterChain()); while (this.expect(","));
            return e
        },
        identifier: function () {
            var e = this.consume();
            return e.identifier || this.throwError("is not a valid identifier", e), {
                type: vs.Identifier,
                name: e.text
            }
        },
        constant: function () {
            return {
                type: vs.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function () {
            var e = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    e.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: vs.ArrayExpression,
                elements: e
            }
        },
        object: function () {
            var e, t = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    e = {
                        type: vs.Property,
                        kind: "init"
                    }, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
                } while (this.expect(","));
            return this.consume("}"), {
                type: vs.ObjectExpression,
                properties: t
            }
        },
        throwError: function (e, t) {
            throw hs("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        consume: function (e) {
            if (0 === this.tokens.length) throw hs("ueoe", "Unexpected end of expression: {0}", this.text);
            var t = this.expect(e);
            return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
        },
        peekToken: function () {
            if (0 === this.tokens.length) throw hs("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function (e, t, n, i) {
            return this.peekAhead(0, e, t, n, i)
        },
        peekAhead: function (e, t, n, i, r) {
            if (this.tokens.length > e) {
                var s = this.tokens[e],
                    a = s.text;
                if (a === t || a === n || a === i || a === r || !t && !n && !i && !r) return s
            }
            return !1
        },
        expect: function (e, t, n, i) {
            var r = this.peek(e, t, n, i);
            return r ? (this.tokens.shift(), r) : !1
        },
        selfReferential: {
            "this": {
                type: vs.ThisExpression
            },
            $locals: {
                type: vs.LocalsExpression
            }
        }
    }, $n.prototype = {
        compile: function (e, t) {
            var n = this,
                r = this.astBuilder.ast(e);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: t,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, un(r, n.$filter);
            var s, a = "";
            if (this.stage = "assign", s = dn(r)) {
                this.state.computing = "assign";
                var o = this.nextId();
                this.recurse(s, o), this.return_(o), a = "fn.assign=" + this.generateFunction("assign", "s,v,l")
            }
            var l = cn(r.body);
            n.stage = "inputs", i(l, function (e, t) {
                var i = "fn" + t;
                n.state[i] = {
                    vars: [],
                    body: [],
                    own: {}
                }, n.state.computing = i;
                var r = n.nextId();
                n.recurse(e, r), n.return_(r), n.state.inputs.push(i), e.watchId = t
            }), this.state.computing = "fn", this.stage = "main", this.recurse(r);
            var u = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + a + this.watchFns() + "return fn;",
                c = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", u)(this.$filter, en, nn, rn, tn, sn, an, on, e);
            return this.state = this.stage = void 0, c.literal = pn(r), c.constant = fn(r), c
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function () {
            var e = [],
                t = this.state.inputs,
                n = this;
            return i(t, function (t) {
                e.push("var " + t + "=" + n.generateFunction(t, "s"))
            }), t.length && e.push("fn.inputs=[" + t.join(",") + "];"), e.join("")
        },
        generateFunction: function (e, t) {
            return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
        },
        filterPrefix: function () {
            var e = [],
                t = this;
            return i(this.state.filters, function (n, i) {
                e.push(n + "=$filter(" + t.escape(i) + ")")
            }), e.length ? "var " + e.join(",") + ";" : ""
        },
        varsPrefix: function (e) {
            return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
        },
        body: function (e) {
            return this.state[e].body.join("")
        },
        recurse: function (e, t, n, r, s, a) {
            var o, l, u, c, h, d = this;
            if (r = r || p, !a && v(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, r, s, !0));
            switch (e.type) {
                case vs.Program:
                    i(e.body, function (t, n) {
                        d.recurse(t.expression, void 0, void 0, function (e) {
                            l = e
                        }), n !== e.body.length - 1 ? d.current().body.push(l, ";") : d.return_(l)
                    });
                    break;
                case vs.Literal:
                    c = this.escape(e.value), this.assign(t, c), r(c);
                    break;
                case vs.UnaryExpression:
                    this.recurse(e.argument, void 0, void 0, function (e) {
                        l = e
                    }), c = e.operator + "(" + this.ifDefined(l, 0) + ")", this.assign(t, c), r(c);
                    break;
                case vs.BinaryExpression:
                    this.recurse(e.left, void 0, void 0, function (e) {
                        o = e
                    }), this.recurse(e.right, void 0, void 0, function (e) {
                        l = e
                    }), c = "+" === e.operator ? this.plus(o, l) : "-" === e.operator ? this.ifDefined(o, 0) + e.operator + this.ifDefined(l, 0) : "(" + o + ")" + e.operator + "(" + l + ")", this.assign(t, c), r(c);
                    break;
                case vs.LogicalExpression:
                    t = t || this.nextId(), d.recurse(e.left, t), d.if_("&&" === e.operator ? t : d.not(t), d.lazyRecurse(e.right, t)), r(t);
                    break;
                case vs.ConditionalExpression:
                    t = t || this.nextId(), d.recurse(e.test, t), d.if_(t, d.lazyRecurse(e.alternate, t), d.lazyRecurse(e.consequent, t)), r(t);
                    break;
                case vs.Identifier:
                    t = t || this.nextId(), n && (n.context = "inputs" === d.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), n.computed = !1, n.name = e.name), en(e.name),
                        d.if_("inputs" === d.stage || d.not(d.getHasOwnProperty("l", e.name)), function () {
                            d.if_("inputs" === d.stage || "s", function () {
                                s && 1 !== s && d.if_(d.not(d.nonComputedMember("s", e.name)), d.lazyAssign(d.nonComputedMember("s", e.name), "{}")), d.assign(t, d.nonComputedMember("s", e.name))
                            })
                        }, t && d.lazyAssign(t, d.nonComputedMember("l", e.name))), (d.state.expensiveChecks || gn(e.name)) && d.addEnsureSafeObject(t), r(t);
                    break;
                case vs.MemberExpression:
                    o = n && (n.context = this.nextId()) || this.nextId(), t = t || this.nextId(), d.recurse(e.object, o, void 0, function () {
                        d.if_(d.notNull(o), function () {
                            s && 1 !== s && d.addEnsureSafeAssignContext(o), e.computed ? (l = d.nextId(), d.recurse(e.property, l), d.getStringValue(l), d.addEnsureSafeMemberName(l), s && 1 !== s && d.if_(d.not(d.computedMember(o, l)), d.lazyAssign(d.computedMember(o, l), "{}")), c = d.ensureSafeObject(d.computedMember(o, l)), d.assign(t, c), n && (n.computed = !0, n.name = l)) : (en(e.property.name), s && 1 !== s && d.if_(d.not(d.nonComputedMember(o, e.property.name)), d.lazyAssign(d.nonComputedMember(o, e.property.name), "{}")), c = d.nonComputedMember(o, e.property.name), (d.state.expensiveChecks || gn(e.property.name)) && (c = d.ensureSafeObject(c)), d.assign(t, c), n && (n.computed = !1, n.name = e.property.name))
                        }, function () {
                            d.assign(t, "undefined")
                        }), r(t)
                    }, !!s);
                    break;
                case vs.CallExpression:
                    t = t || this.nextId(), e.filter ? (l = d.filter(e.callee.name), u = [], i(e.arguments, function (e) {
                        var t = d.nextId();
                        d.recurse(e, t), u.push(t)
                    }), c = l + "(" + u.join(",") + ")", d.assign(t, c), r(t)) : (l = d.nextId(), o = {}, u = [], d.recurse(e.callee, l, o, function () {
                        d.if_(d.notNull(l), function () {
                            d.addEnsureSafeFunction(l), i(e.arguments, function (e) {
                                d.recurse(e, d.nextId(), void 0, function (e) {
                                    u.push(d.ensureSafeObject(e))
                                })
                            }), o.name ? (d.state.expensiveChecks || d.addEnsureSafeObject(o.context), c = d.member(o.context, o.name, o.computed) + "(" + u.join(",") + ")") : c = l + "(" + u.join(",") + ")", c = d.ensureSafeObject(c), d.assign(t, c)
                        }, function () {
                            d.assign(t, "undefined")
                        }), r(t)
                    }));
                    break;
                case vs.AssignmentExpression:
                    if (l = this.nextId(), o = {}, !hn(e.left)) throw hs("lval", "Trying to assign a value to a non l-value");
                    this.recurse(e.left, void 0, o, function () {
                        d.if_(d.notNull(o.context), function () {
                            d.recurse(e.right, l), d.addEnsureSafeObject(d.member(o.context, o.name, o.computed)), d.addEnsureSafeAssignContext(o.context), c = d.member(o.context, o.name, o.computed) + e.operator + l, d.assign(t, c), r(t || c)
                        })
                    }, 1);
                    break;
                case vs.ArrayExpression:
                    u = [], i(e.elements, function (e) {
                        d.recurse(e, d.nextId(), void 0, function (e) {
                            u.push(e)
                        })
                    }), c = "[" + u.join(",") + "]", this.assign(t, c), r(c);
                    break;
                case vs.ObjectExpression:
                    u = [], h = !1, i(e.properties, function (e) {
                        e.computed && (h = !0)
                    }), h ? (t = t || this.nextId(), this.assign(t, "{}"), i(e.properties, function (e) {
                        e.computed ? (o = d.nextId(), d.recurse(e.key, o)) : o = e.key.type === vs.Identifier ? e.key.name : "" + e.key.value, l = d.nextId(), d.recurse(e.value, l), d.assign(d.member(t, o, e.computed), l)
                    })) : (i(e.properties, function (t) {
                        d.recurse(t.value, e.constant ? void 0 : d.nextId(), void 0, function (e) {
                            u.push(d.escape(t.key.type === vs.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
                        })
                    }), c = "{" + u.join(",") + "}", this.assign(t, c)), r(t || c);
                    break;
                case vs.ThisExpression:
                    this.assign(t, "s"), r("s");
                    break;
                case vs.LocalsExpression:
                    this.assign(t, "l"), r("l");
                    break;
                case vs.NGValueParameter:
                    this.assign(t, "v"), r("v")
            }
        },
        getHasOwnProperty: function (e, t) {
            var n = e + "." + t,
                i = this.current().own;
            return i.hasOwnProperty(n) || (i[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), i[n]
        },
        assign: function (e, t) {
            return e ? (this.current().body.push(e, "=", t, ";"), e) : void 0
        },
        filter: function (e) {
            return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
        },
        ifDefined: function (e, t) {
            return "ifDefined(" + e + "," + this.escape(t) + ")"
        },
        plus: function (e, t) {
            return "plus(" + e + "," + t + ")"
        },
        return_: function (e) {
            this.current().body.push("return ", e, ";")
        },
        if_: function (e, t, n) {
            if (e === !0) t();
            else {
                var i = this.current().body;
                i.push("if(", e, "){"), t(), i.push("}"), n && (i.push("else{"), n(), i.push("}"))
            }
        },
        not: function (e) {
            return "!(" + e + ")"
        },
        notNull: function (e) {
            return e + "!=null"
        },
        nonComputedMember: function (e, t) {
            var n = /[$_a-zA-Z][$_a-zA-Z0-9]*/,
                i = /[^$_a-zA-Z0-9]/g;
            return n.test(t) ? e + "." + t : e + '["' + t.replace(i, this.stringEscapeFn) + '"]'
        },
        computedMember: function (e, t) {
            return e + "[" + t + "]"
        },
        member: function (e, t, n) {
            return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
        },
        addEnsureSafeObject: function (e) {
            this.current().body.push(this.ensureSafeObject(e), ";")
        },
        addEnsureSafeMemberName: function (e) {
            this.current().body.push(this.ensureSafeMemberName(e), ";")
        },
        addEnsureSafeFunction: function (e) {
            this.current().body.push(this.ensureSafeFunction(e), ";")
        },
        addEnsureSafeAssignContext: function (e) {
            this.current().body.push(this.ensureSafeAssignContext(e), ";")
        },
        ensureSafeObject: function (e) {
            return "ensureSafeObject(" + e + ",text)"
        },
        ensureSafeMemberName: function (e) {
            return "ensureSafeMemberName(" + e + ",text)"
        },
        ensureSafeFunction: function (e) {
            return "ensureSafeFunction(" + e + ",text)"
        },
        getStringValue: function (e) {
            this.assign(e, "getStringValue(" + e + ")")
        },
        ensureSafeAssignContext: function (e) {
            return "ensureSafeAssignContext(" + e + ",text)"
        },
        lazyRecurse: function (e, t, n, i, r, s) {
            var a = this;
            return function () {
                a.recurse(e, t, n, i, r, s)
            }
        },
        lazyAssign: function (e, t) {
            var n = this;
            return function () {
                n.assign(e, t)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function (e) {
            if (x(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (b(e)) return e.toString();
            if (e === !0) return "true";
            if (e === !1) return "false";
            if (null === e) return "null";
            if ("undefined" == typeof e) return "undefined";
            throw hs("esc", "IMPOSSIBLE")
        },
        nextId: function (e, t) {
            var n = "v" + this.state.nextId++;
            return e || this.current().vars.push(n + (t ? "=" + t : "")), n
        },
        current: function () {
            return this.state[this.state.computing]
        }
    }, mn.prototype = {
        compile: function (e, t) {
            var n = this,
                r = this.astBuilder.ast(e);
            this.expression = e, this.expensiveChecks = t, un(r, n.$filter);
            var s, a;
            (s = dn(r)) && (a = this.recurse(s));
            var o, l = cn(r.body);
            l && (o = [], i(l, function (e, t) {
                var i = n.recurse(e);
                e.input = i, o.push(i), e.watchId = t
            }));
            var u = [];
            i(r.body, function (e) {
                u.push(n.recurse(e.expression))
            });
            var c = 0 === r.body.length ? p : 1 === r.body.length ? u[0] : function (e, t) {
                var n;
                return i(u, function (i) {
                    n = i(e, t)
                }), n
            };
            return a && (c.assign = function (e, t, n) {
                return a(e, n, t)
            }), o && (c.inputs = o), c.literal = pn(r), c.constant = fn(r), c
        },
        recurse: function (e, t, n) {
            var r, s, a, o = this;
            if (e.input) return this.inputs(e.input, e.watchId);
            switch (e.type) {
                case vs.Literal:
                    return this.value(e.value, t);
                case vs.UnaryExpression:
                    return s = this.recurse(e.argument), this["unary" + e.operator](s, t);
                case vs.BinaryExpression:
                    return r = this.recurse(e.left), s = this.recurse(e.right), this["binary" + e.operator](r, s, t);
                case vs.LogicalExpression:
                    return r = this.recurse(e.left), s = this.recurse(e.right), this["binary" + e.operator](r, s, t);
                case vs.ConditionalExpression:
                    return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                case vs.Identifier:
                    return en(e.name, o.expression), o.identifier(e.name, o.expensiveChecks || gn(e.name), t, n, o.expression);
                case vs.MemberExpression:
                    return r = this.recurse(e.object, !1, !!n), e.computed || (en(e.property.name, o.expression), s = e.property.name), e.computed && (s = this.recurse(e.property)), e.computed ? this.computedMember(r, s, t, n, o.expression) : this.nonComputedMember(r, s, o.expensiveChecks, t, n, o.expression);
                case vs.CallExpression:
                    return a = [], i(e.arguments, function (e) {
                        a.push(o.recurse(e))
                    }), e.filter && (s = this.$filter(e.callee.name)), e.filter || (s = this.recurse(e.callee, !0)), e.filter ? function (e, n, i, r) {
                        for (var o = [], l = 0; l < a.length; ++l) o.push(a[l](e, n, i, r));
                        var u = s.apply(void 0, o, r);
                        return t ? {
                            context: void 0,
                            name: void 0,
                            value: u
                        } : u
                    } : function (e, n, i, r) {
                        var l, u = s(e, n, i, r);
                        if (null != u.value) {
                            nn(u.context, o.expression), rn(u.value, o.expression);
                            for (var c = [], h = 0; h < a.length; ++h) c.push(nn(a[h](e, n, i, r), o.expression));
                            l = nn(u.value.apply(u.context, c), o.expression)
                        }
                        return t ? {
                            value: l
                        } : l
                    };
                case vs.AssignmentExpression:
                    return r = this.recurse(e.left, !0, 1), s = this.recurse(e.right),
                        function (e, n, i, a) {
                            var l = r(e, n, i, a),
                                u = s(e, n, i, a);
                            return nn(l.value, o.expression), sn(l.context), l.context[l.name] = u, t ? {
                                value: u
                            } : u
                        };
                case vs.ArrayExpression:
                    return a = [], i(e.elements, function (e) {
                            a.push(o.recurse(e))
                        }),
                        function (e, n, i, r) {
                            for (var s = [], o = 0; o < a.length; ++o) s.push(a[o](e, n, i, r));
                            return t ? {
                                value: s
                            } : s
                        };
                case vs.ObjectExpression:
                    return a = [], i(e.properties, function (e) {
                            e.computed ? a.push({
                                key: o.recurse(e.key),
                                computed: !0,
                                value: o.recurse(e.value)
                            }) : a.push({
                                key: e.key.type === vs.Identifier ? e.key.name : "" + e.key.value,
                                computed: !1,
                                value: o.recurse(e.value)
                            })
                        }),
                        function (e, n, i, r) {
                            for (var s = {}, o = 0; o < a.length; ++o) a[o].computed ? s[a[o].key(e, n, i, r)] = a[o].value(e, n, i, r) : s[a[o].key] = a[o].value(e, n, i, r);
                            return t ? {
                                value: s
                            } : s
                        };
                case vs.ThisExpression:
                    return function (e) {
                        return t ? {
                            value: e
                        } : e
                    };
                case vs.LocalsExpression:
                    return function (e, n) {
                        return t ? {
                            value: n
                        } : n
                    };
                case vs.NGValueParameter:
                    return function (e, n, i) {
                        return t ? {
                            value: i
                        } : i
                    }
            }
        },
        "unary+": function (e, t) {
            return function (n, i, r, s) {
                var a = e(n, i, r, s);
                return a = v(a) ? +a : 0, t ? {
                    value: a
                } : a
            }
        },
        "unary-": function (e, t) {
            return function (n, i, r, s) {
                var a = e(n, i, r, s);
                return a = v(a) ? -a : 0, t ? {
                    value: a
                } : a
            }
        },
        "unary!": function (e, t) {
            return function (n, i, r, s) {
                var a = !e(n, i, r, s);
                return t ? {
                    value: a
                } : a
            }
        },
        "binary+": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a),
                    l = t(i, r, s, a),
                    u = on(o, l);
                return n ? {
                    value: u
                } : u
            }
        },
        "binary-": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a),
                    l = t(i, r, s, a),
                    u = (v(o) ? o : 0) - (v(l) ? l : 0);
                return n ? {
                    value: u
                } : u
            }
        },
        "binary*": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) * t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary/": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) / t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary%": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) % t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary===": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) === t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary!==": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) !== t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary==": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) == t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary!=": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) != t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary<": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) < t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary>": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) > t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary<=": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) <= t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary>=": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) >= t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary&&": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) && t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "binary||": function (e, t, n) {
            return function (i, r, s, a) {
                var o = e(i, r, s, a) || t(i, r, s, a);
                return n ? {
                    value: o
                } : o
            }
        },
        "ternary?:": function (e, t, n, i) {
            return function (r, s, a, o) {
                var l = e(r, s, a, o) ? t(r, s, a, o) : n(r, s, a, o);
                return i ? {
                    value: l
                } : l
            }
        },
        value: function (e, t) {
            return function () {
                return t ? {
                    context: void 0,
                    name: void 0,
                    value: e
                } : e
            }
        },
        identifier: function (e, t, n, i, r) {
            return function (s, a, o, l) {
                var u = a && e in a ? a : s;
                i && 1 !== i && u && !u[e] && (u[e] = {});
                var c = u ? u[e] : void 0;
                return t && nn(c, r), n ? {
                    context: u,
                    name: e,
                    value: c
                } : c
            }
        },
        computedMember: function (e, t, n, i, r) {
            return function (s, a, o, l) {
                var u, c, h = e(s, a, o, l);
                return null != h && (u = t(s, a, o, l), u = tn(u), en(u, r), i && 1 !== i && (sn(h), h && !h[u] && (h[u] = {})), c = h[u], nn(c, r)), n ? {
                    context: h,
                    name: u,
                    value: c
                } : c
            }
        },
        nonComputedMember: function (e, t, n, i, r, s) {
            return function (a, o, l, u) {
                var c = e(a, o, l, u);
                r && 1 !== r && (sn(c), c && !c[t] && (c[t] = {}));
                var h = null != c ? c[t] : void 0;
                return (n || gn(t)) && nn(h, s), i ? {
                    context: c,
                    name: t,
                    value: h
                } : h
            }
        },
        inputs: function (e, t) {
            return function (n, i, r, s) {
                return s ? s[t] : e(n, i, r)
            }
        }
    };
    var ws = function (e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n, this.ast = new vs(e, n), this.astCompiler = n.csp ? new mn(this.ast, t) : new $n(this.ast, t)
    };
    ws.prototype = {
        constructor: ws,
        parse: function (e) {
            return this.astCompiler.compile(e, this.options.expensiveChecks)
        }
    };
    var ys = Object.prototype.valueOf,
        xs = t("$sce"),
        bs = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Ts = t("$compile"),
        Ms = e.document.createElement("a"),
        Cs = _n(e.location.href);
    Ln.$inject = ["$document"], Nn.$inject = ["$provide"];
    var Es = 22,
        Is = ".",
        Ss = "0";
    Vn.$inject = ["$locale"], qn.$inject = ["$locale"];
    var Os = {
            yyyy: Kn("FullYear", 4, 0, !1, !0),
            yy: Kn("FullYear", 2, 0, !0, !0),
            y: Kn("FullYear", 1, 0, !1, !0),
            MMMM: Zn("Month"),
            MMM: Zn("Month", !0),
            MM: Kn("Month", 2, 1),
            M: Kn("Month", 1, 1),
            LLLL: Zn("Month", !1, !0),
            dd: Kn("Date", 2),
            d: Kn("Date", 1),
            HH: Kn("Hours", 2),
            H: Kn("Hours", 1),
            hh: Kn("Hours", 2, -12),
            h: Kn("Hours", 1, -12),
            mm: Kn("Minutes", 2),
            m: Kn("Minutes", 1),
            ss: Kn("Seconds", 2),
            s: Kn("Seconds", 1),
            sss: Kn("Milliseconds", 3),
            EEEE: Zn("Day"),
            EEE: Zn("Day", !0),
            a: ni,
            Z: Jn,
            ww: ti(2),
            w: ti(1),
            G: ii,
            GG: ii,
            GGG: ii,
            GGGG: ri
        },
        ks = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        As = /^\-?\d+$/;
    si.$inject = ["$locale"];
    var Ps = $(Fi),
        Fs = $(_i);
    ui.$inject = ["$parse"];
    var _s = $({
            restrict: "E",
            compile: function (e, t) {
                return t.href || t.xlinkHref ? void 0 : function (e, t) {
                    if ("a" === t[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === Vi.call(t.prop("href")) ? "xlink:href" : "href";
                        t.on("click", function (e) {
                            t.attr(n) || e.preventDefault()
                        })
                    }
                }
            }
        }),
        js = {};
    i(Ir, function (e, t) {
        function n(e, n, r) {
            e.$watch(r[i], function (e) {
                r.$set(t, !!e)
            })
        }
        if ("multiple" != e) {
            var i = mt("ng-" + t),
                r = n;
            "checked" === e && (r = function (e, t, r) {
                r.ngModel !== r[i] && n(e, t, r)
            }), js[i] = function () {
                return {
                    restrict: "A",
                    priority: 100,
                    link: r
                }
            }
        }
    }), i(Or, function (e, t) {
        js[t] = function () {
            return {
                priority: 100,
                link: function (e, n, i) {
                    if ("ngPattern" === t && "/" == i.ngPattern.charAt(0)) {
                        var r = i.ngPattern.match(ki);
                        if (r) return void i.$set("ngPattern", new RegExp(r[1], r[2]))
                    }
                    e.$watch(i[t], function (e) {
                        i.$set(t, e)
                    })
                }
            }
        }
    }), i(["src", "srcset", "href"], function (e) {
        var t = mt("ng-" + e);
        js[t] = function () {
            return {
                priority: 99,
                link: function (n, i, r) {
                    var s = e,
                        a = e;
                    "href" === e && "[object SVGAnimatedString]" === Vi.call(i.prop("href")) && (a = "xlinkHref", r.$attr[a] = "xlink:href", s = null), r.$observe(t, function (t) {
                        return t ? (r.$set(a, t), void(Li && s && i.prop(s, r[a]))) : void("href" === e && r.$set(a, null))
                    })
                }
            }
        }
    });
    var Rs = {
            $addControl: p,
            $$renameControl: hi,
            $removeControl: p,
            $setValidity: p,
            $setDirty: p,
            $setPristine: p,
            $setSubmitted: p
        },
        Ls = "ng-submitted";
    di.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Ds = function (e) {
            return ["$timeout", "$parse", function (t, n) {
                function i(e) {
                    return "" === e ? n('this[""]').assign : n(e).assign || p
                }
                var r = {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: di,
                    compile: function (n, r) {
                        n.addClass(ya).addClass(va);
                        var s = r.name ? "name" : e && r.ngForm ? "ngForm" : !1;
                        return {
                            pre: function (e, n, r, a) {
                                var o = a[0];
                                if (!("action" in r)) {
                                    var l = function (t) {
                                        e.$apply(function () {
                                            o.$commitViewValue(), o.$setSubmitted()
                                        }), t.preventDefault()
                                    };
                                    fr(n[0], "submit", l), n.on("$destroy", function () {
                                        t(function () {
                                            $r(n[0], "submit", l)
                                        }, 0, !1)
                                    })
                                }
                                var c = a[1] || o.$$parentForm;
                                c.$addControl(o);
                                var h = s ? i(o.$name) : p;
                                s && (h(e, o), r.$observe(s, function (t) {
                                    o.$name !== t && (h(e, void 0), o.$$parentForm.$$renameControl(o, t), (h = i(o.$name))(e, o))
                                })), n.on("$destroy", function () {
                                    o.$$parentForm.$removeControl(o), h(e, void 0), u(o, Rs)
                                })
                            }
                        }
                    }
                };
                return r
            }]
        },
        Ns = Ds(),
        zs = Ds(!0),
        Us = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        Xs = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Hs = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Vs = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        qs = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Gs = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Bs = /^(\d{4,})-W(\d\d)$/,
        Ws = /^(\d{4,})-(\d\d)$/,
        Ys = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Ks = "keydown wheel mousedown",
        Zs = fe();
    i("date,datetime-local,month,time,week".split(","), function (e) {
        Zs[e] = !0
    });
    var Js = {
            text: fi,
            date: vi("date", qs, gi(qs, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": vi("datetimelocal", Gs, gi(Gs, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: vi("time", Ys, gi(Ys, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: vi("week", Bs, mi, "yyyy-Www"),
            month: vi("month", Ws, gi(Ws, ["yyyy", "MM"]), "yyyy-MM"),
            number: yi,
            url: xi,
            email: bi,
            radio: Ti,
            checkbox: Ci,
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        },
        Qs = ["$browser", "$sniffer", "$filter", "$parse", function (e, t, n, i) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function (r, s, a, o) {
                        o[0] && (Js[Fi(a.type)] || Js.text)(r, s, a, o[0], t, e, n, i)
                    }
                }
            }
        }],
        ea = /^(true|false|\d+)$/,
        ta = function () {
            return {
                restrict: "A",
                priority: 100,
                compile: function (e, t) {
                    return ea.test(t.ngValue) ? function (e, t, n) {
                        n.$set("value", e.$eval(n.ngValue))
                    } : function (e, t, n) {
                        e.$watch(n.ngValue, function (e) {
                            n.$set("value", e)
                        })
                    }
                }
            }
        },
        na = ["$compile", function (e) {
            return {
                restrict: "AC",
                compile: function (t) {
                    return e.$$addBindingClass(t),
                        function (t, n, i) {
                            e.$$addBindingInfo(n, i.ngBind), n = n[0], t.$watch(i.ngBind, function (e) {
                                n.textContent = g(e) ? "" : e
                            })
                        }
                }
            }
        }],
        ia = ["$interpolate", "$compile", function (e, t) {
            return {
                compile: function (n) {
                    return t.$$addBindingClass(n),
                        function (n, i, r) {
                            var s = e(i.attr(r.$attr.ngBindTemplate));
                            t.$$addBindingInfo(i, s.expressions), i = i[0], r.$observe("ngBindTemplate", function (e) {
                                i.textContent = g(e) ? "" : e
                            })
                        }
                }
            }
        }],
        ra = ["$sce", "$parse", "$compile", function (e, t, n) {
            return {
                restrict: "A",
                compile: function (i, r) {
                    var s = t(r.ngBindHtml),
                        a = t(r.ngBindHtml, function (t) {
                            return e.valueOf(t)
                        });
                    return n.$$addBindingClass(i),
                        function (t, i, r) {
                            n.$$addBindingInfo(i, r.ngBindHtml), t.$watch(a, function () {
                                var n = s(t);
                                i.html(e.getTrustedHtml(n) || "")
                            })
                        }
                }
            }
        }],
        sa = $({
            restrict: "A",
            require: "ngModel",
            link: function (e, t, n, i) {
                i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                })
            }
        }),
        aa = Ei("", !0),
        oa = Ei("Odd", 0),
        la = Ei("Even", 1),
        ua = ci({
            compile: function (e, t) {
                t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
            }
        }),
        ca = [function () {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        ha = {},
        da = {
            blur: !0,
            focus: !0
        };
    i("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e) {
        var t = mt("ng-" + e);
        ha[t] = ["$parse", "$rootScope", function (n, i) {
            return {
                restrict: "A",
                compile: function (r, s) {
                    var a = n(s[t], null, !0);
                    return function (t, n) {
                        n.on(e, function (n) {
                            var r = function () {
                                a(t, {
                                    $event: n
                                })
                            };
                            da[e] && i.$$phase ? t.$evalAsync(r) : t.$apply(r)
                        })
                    }
                }
            }
        }]
    });
    var pa = ["$animate", "$compile", function (e, t) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (n, i, r, s, a) {
                    var o, l, u;
                    n.$watch(r.ngIf, function (n) {
                        n ? l || a(function (n, s) {
                            l = s, n[n.length++] = t.$$createComment("end ngIf", r.ngIf), o = {
                                clone: n
                            }, e.enter(n, i.parent(), i)
                        }) : (u && (u.remove(), u = null), l && (l.$destroy(), l = null), o && (u = pe(o.clone), e.leave(u).then(function () {
                            u = null
                        }), o = null))
                    })
                }
            }
        }],
        fa = ["$templateRequest", "$anchorScroll", "$animate", function (e, t, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Bi.noop,
                compile: function (i, r) {
                    var s = r.ngInclude || r.src,
                        a = r.onload || "",
                        o = r.autoscroll;
                    return function (i, r, l, u, c) {
                        var h, d, p, f = 0,
                            $ = function () {
                                d && (d.remove(), d = null), h && (h.$destroy(), h = null), p && (n.leave(p).then(function () {
                                    d = null
                                }), d = p, p = null)
                            };
                        i.$watch(s, function (s) {
                            var l = function () {
                                    !v(o) || o && !i.$eval(o) || t()
                                },
                                d = ++f;
                            s ? (e(s, !0).then(function (e) {
                                if (!i.$$destroyed && d === f) {
                                    var t = i.$new();
                                    u.template = e;
                                    var o = c(t, function (e) {
                                        $(), n.enter(e, null, r).then(l)
                                    });
                                    h = t, p = o, h.$emit("$includeContentLoaded", s), i.$eval(a)
                                }
                            }, function () {
                                i.$$destroyed || d === f && ($(), i.$emit("$includeContentError", s))
                            }), i.$emit("$includeContentRequested", s)) : ($(), u.template = null)
                        })
                    }
                }
            }
        }],
        $a = ["$compile", function (t) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function (n, i, r, s) {
                    return Vi.call(i[0]).match(/SVG/) ? (i.empty(), void t(Ee(s.template, e.document).childNodes)(n, function (e) {
                        i.append(e)
                    }, {
                        futureParentElement: i
                    })) : (i.html(s.template), void t(i.contents())(n))
                }
            }
        }],
        ma = ci({
            priority: 450,
            compile: function () {
                return {
                    pre: function (e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        ga = function () {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function (e, t, n, r) {
                    var s = t.attr(n.$attr.ngList) || ", ",
                        a = "false" !== n.ngTrim,
                        o = a ? Zi(s) : s,
                        l = function (e) {
                            if (!g(e)) {
                                var t = [];
                                return e && i(e.split(o), function (e) {
                                    e && t.push(a ? Zi(e) : e)
                                }), t
                            }
                        };
                    r.$parsers.push(l), r.$formatters.push(function (e) {
                        return Yi(e) ? e.join(s) : void 0
                    }), r.$isEmpty = function (e) {
                        return !e || !e.length
                    }
                }
            }
        },
        va = "ng-valid",
        wa = "ng-invalid",
        ya = "ng-pristine",
        xa = "ng-dirty",
        ba = "ng-untouched",
        Ta = "ng-touched",
        Ma = "ng-pending",
        Ca = "ng-empty",
        Ea = "ng-not-empty",
        Ia = t("ngModel"),
        Sa = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (e, t, n, r, s, a, o, l, u, c) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = c(n.name || "", !1)(e), this.$$parentForm = Rs;
            var h, d = s(n.ngModel),
                f = d.assign,
                $ = d,
                m = f,
                w = null,
                y = this;
            this.$$setOptions = function (e) {
                if (y.$options = e, e && e.getterSetter) {
                    var t = s(n.ngModel + "()"),
                        i = s(n.ngModel + "($$$p)");
                    $ = function (e) {
                        var n = d(e);
                        return M(n) && (n = t(e)), n
                    }, m = function (e, t) {
                        M(d(e)) ? i(e, {
                            $$$p: t
                        }) : f(e, t)
                    }
                } else if (!d.assign) throw Ia("nonassign", "Expression '{0}' is non-assignable. Element: {1}", n.ngModel, K(r))
            }, this.$render = p, this.$isEmpty = function (e) {
                return g(e) || "" === e || null === e || e !== e
            }, this.$$updateEmptyClasses = function (e) {
                y.$isEmpty(e) ? (a.removeClass(r, Ea), a.addClass(r, Ca)) : (a.removeClass(r, Ca), a.addClass(r, Ea))
            };
            var x = 0;
            Ii({
                ctrl: this,
                $element: r,
                set: function (e, t) {
                    e[t] = !0
                },
                unset: function (e, t) {
                    delete e[t]
                },
                $animate: a
            }), this.$setPristine = function () {
                y.$dirty = !1, y.$pristine = !0, a.removeClass(r, xa), a.addClass(r, ya)
            }, this.$setDirty = function () {
                y.$dirty = !0, y.$pristine = !1, a.removeClass(r, ya), a.addClass(r, xa), y.$$parentForm.$setDirty()
            }, this.$setUntouched = function () {
                y.$touched = !1, y.$untouched = !0, a.setClass(r, ba, Ta)
            }, this.$setTouched = function () {
                y.$touched = !0, y.$untouched = !1, a.setClass(r, Ta, ba)
            }, this.$rollbackViewValue = function () {
                o.cancel(w), y.$viewValue = y.$$lastCommittedViewValue, y.$render()
            }, this.$validate = function () {
                if (!b(y.$modelValue) || !isNaN(y.$modelValue)) {
                    var e = y.$$lastCommittedViewValue,
                        t = y.$$rawModelValue,
                        n = y.$valid,
                        i = y.$modelValue,
                        r = y.$options && y.$options.allowInvalid;
                    y.$$runValidators(t, e, function (e) {
                        r || n === e || (y.$modelValue = e ? t : void 0, y.$modelValue !== i && y.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function (e, t, n) {
                function r() {
                    var e = y.$$parserName || "parse";
                    return g(h) ? (o(e, null), !0) : (h || (i(y.$validators, function (e, t) {
                        o(t, null)
                    }), i(y.$asyncValidators, function (e, t) {
                        o(t, null)
                    })), o(e, h), h)
                }

                function s() {
                    var n = !0;
                    return i(y.$validators, function (i, r) {
                        var s = i(e, t);
                        n = n && s, o(r, s)
                    }), n ? !0 : (i(y.$asyncValidators, function (e, t) {
                        o(t, null)
                    }), !1)
                }

                function a() {
                    var n = [],
                        r = !0;
                    i(y.$asyncValidators, function (i, s) {
                        var a = i(e, t);
                        if (!P(a)) throw Ia("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
                        o(s, void 0), n.push(a.then(function () {
                            o(s, !0)
                        }, function () {
                            r = !1, o(s, !1)
                        }))
                    }), n.length ? u.all(n).then(function () {
                        l(r)
                    }, p) : l(!0)
                }

                function o(e, t) {
                    c === x && y.$setValidity(e, t)
                }

                function l(e) {
                    c === x && n(e)
                }
                x++;
                var c = x;
                return r() && s() ? void a() : void l(!1)
            }, this.$commitViewValue = function () {
                var e = y.$viewValue;
                o.cancel(w), (y.$$lastCommittedViewValue !== e || "" === e && y.$$hasNativeValidators) && (y.$$updateEmptyClasses(e), y.$$lastCommittedViewValue = e, y.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function () {
                function t() {
                    y.$modelValue !== s && y.$$writeModelToScope()
                }
                var n = y.$$lastCommittedViewValue,
                    i = n;
                if (h = g(i) ? void 0 : !0)
                    for (var r = 0; r < y.$parsers.length; r++)
                        if (i = y.$parsers[r](i), g(i)) {
                            h = !1;
                            break
                        } b(y.$modelValue) && isNaN(y.$modelValue) && (y.$modelValue = $(e));
                var s = y.$modelValue,
                    a = y.$options && y.$options.allowInvalid;
                y.$$rawModelValue = i, a && (y.$modelValue = i, t()), y.$$runValidators(i, y.$$lastCommittedViewValue, function (e) {
                    a || (y.$modelValue = e ? i : void 0, t())
                })
            }, this.$$writeModelToScope = function () {
                m(e, y.$modelValue), i(y.$viewChangeListeners, function (e) {
                    try {
                        e()
                    } catch (n) {
                        t(n)
                    }
                })
            }, this.$setViewValue = function (e, t) {
                y.$viewValue = e, (!y.$options || y.$options.updateOnDefault) && y.$$debounceViewValueCommit(t)
            }, this.$$debounceViewValueCommit = function (t) {
                var n, i = 0,
                    r = y.$options;
                r && v(r.debounce) && (n = r.debounce, b(n) ? i = n : b(n[t]) ? i = n[t] : b(n["default"]) && (i = n["default"])), o.cancel(w), i ? w = o(function () {
                    y.$commitViewValue()
                }, i) : l.$$phase ? y.$commitViewValue() : e.$apply(function () {
                    y.$commitViewValue()
                })
            }, e.$watch(function () {
                var t = $(e);
                if (t !== y.$modelValue && (y.$modelValue === y.$modelValue || t === t)) {
                    y.$modelValue = y.$$rawModelValue = t, h = void 0;
                    for (var n = y.$formatters, i = n.length, r = t; i--;) r = n[i](r);
                    y.$viewValue !== r && (y.$$updateEmptyClasses(r), y.$viewValue = y.$$lastCommittedViewValue = r, y.$render(), y.$$runValidators(t, r, p))
                }
                return t
            })
        }],
        Oa = ["$rootScope", function (e) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Sa,
                priority: 1,
                compile: function (t) {
                    return t.addClass(ya).addClass(ba).addClass(va), {
                        pre: function (e, t, n, i) {
                            var r = i[0],
                                s = i[1] || r.$$parentForm;
                            r.$$setOptions(i[2] && i[2].$options), s.$addControl(r), n.$observe("name", function (e) {
                                r.$name !== e && r.$$parentForm.$$renameControl(r, e)
                            }), e.$on("$destroy", function () {
                                r.$$parentForm.$removeControl(r)
                            })
                        },
                        post: function (t, n, i, r) {
                            var s = r[0];
                            s.$options && s.$options.updateOn && n.on(s.$options.updateOn, function (e) {
                                s.$$debounceViewValueCommit(e && e.type)
                            }), n.on("blur", function () {
                                s.$touched || (e.$$phase ? t.$evalAsync(s.$setTouched) : t.$apply(s.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        ka = /(\s+|^)default(\s+|$)/,
        Aa = function () {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function (e, t) {
                    var n = this;
                    this.$options = N(e.$eval(t.ngModelOptions)), v(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Zi(this.$options.updateOn.replace(ka, function () {
                        return n.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        Pa = ci({
            terminal: !0,
            priority: 1e3
        }),
        Fa = t("ngOptions"),
        _a = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        ja = ["$compile", "$document", "$parse", function (t, r, s) {
            function a(e, t, i) {
                function r(e, t, n, i, r) {
                    this.selectValue = e, this.viewValue = t, this.label = n, this.group = i, this.disabled = r
                }

                function a(e) {
                    var t;
                    if (!u && n(e)) t = e;
                    else {
                        t = [];
                        for (var i in e) e.hasOwnProperty(i) && "$" !== i.charAt(0) && t.push(i)
                    }
                    return t
                }
                var o = e.match(_a);
                if (!o) throw Fa("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, K(t));
                var l = o[5] || o[7],
                    u = o[6],
                    c = / as /.test(o[0]) && o[1],
                    h = o[9],
                    d = s(o[2] ? o[1] : l),
                    p = c && s(c),
                    f = p || d,
                    $ = h && s(h),
                    m = h ? function (e, t) {
                        return $(i, t)
                    } : function (e) {
                        return Ze(e)
                    },
                    g = function (e, t) {
                        return m(e, T(e, t))
                    },
                    v = s(o[2] || o[1]),
                    w = s(o[3] || ""),
                    y = s(o[4] || ""),
                    x = s(o[8]),
                    b = {},
                    T = u ? function (e, t) {
                        return b[u] = t, b[l] = e, b
                    } : function (e) {
                        return b[l] = e, b
                    };
                return {
                    trackBy: h,
                    getTrackByValue: g,
                    getWatchables: s(x, function (e) {
                        var t = [];
                        e = e || [];
                        for (var n = a(e), r = n.length, s = 0; r > s; s++) {
                            var l = e === n ? s : n[s],
                                u = e[l],
                                c = T(u, l),
                                h = m(u, c);
                            if (t.push(h), o[2] || o[1]) {
                                var d = v(i, c);
                                t.push(d)
                            }
                            if (o[4]) {
                                var p = y(i, c);
                                t.push(p)
                            }
                        }
                        return t
                    }),
                    getOptions: function () {
                        for (var e = [], t = {}, n = x(i) || [], s = a(n), o = s.length, l = 0; o > l; l++) {
                            var u = n === s ? l : s[l],
                                c = n[u],
                                d = T(c, u),
                                p = f(i, d),
                                $ = m(p, d),
                                b = v(i, d),
                                M = w(i, d),
                                C = y(i, d),
                                E = new r($, p, b, M, C);
                            e.push(E), t[$] = E
                        }
                        return {
                            items: e,
                            selectValueMap: t,
                            getOptionFromViewValue: function (e) {
                                return t[g(e)]
                            },
                            getViewValueFromOption: function (e) {
                                return h ? Bi.copy(e.viewValue) : e.viewValue
                            }
                        }
                    }
                }
            }

            function o(e, n, s, o) {
                function c(e, t) {
                    var n = l.cloneNode(!1);
                    t.appendChild(n), h(e, n)
                }

                function h(e, t) {
                    e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), e.value !== t.value && (t.value = e.selectValue)
                }

                function d() {
                    var e = T && f.readValue();
                    if (T)
                        for (var t = T.items.length - 1; t >= 0; t--) {
                            var i = T.items[t];
                            He(v(i.group) ? i.element.parentNode : i.element)
                        }
                    T = M.getOptions();
                    var r = {};
                    if (x && n.prepend(p), T.items.forEach(function (e) {
                            var t;
                            v(e.group) ? (t = r[e.group], t || (t = u.cloneNode(!1), C.appendChild(t), t.label = null === e.group ? "null" : e.group, r[e.group] = t), c(e, t)) : c(e, C)
                        }), n[0].appendChild(C), $.$render(), !$.$isEmpty(e)) {
                        var s = f.readValue(),
                            a = M.trackBy || m;
                        (a ? z(e, s) : e === s) || ($.$setViewValue(s), $.$render())
                    }
                }
                for (var p, f = o[0], $ = o[1], m = s.multiple, g = 0, w = n.children(), y = w.length; y > g; g++)
                    if ("" === w[g].value) {
                        p = w.eq(g);
                        break
                    } var x = !!p,
                    b = Di(l.cloneNode(!1));
                b.val("?");
                var T, M = a(s.ngOptions, n, e),
                    C = r[0].createDocumentFragment(),
                    E = function () {
                        x || n.prepend(p), n.val(""), p.prop("selected", !0), p.attr("selected", !0)
                    },
                    I = function () {
                        x || p.remove()
                    },
                    S = function () {
                        n.prepend(b), n.val("?"), b.prop("selected", !0), b.attr("selected", !0)
                    },
                    O = function () {
                        b.remove()
                    };
                m ? ($.$isEmpty = function (e) {
                    return !e || 0 === e.length
                }, f.writeValue = function (e) {
                    T.items.forEach(function (e) {
                        e.element.selected = !1
                    }), e && e.forEach(function (e) {
                        var t = T.getOptionFromViewValue(e);
                        t && (t.element.selected = !0)
                    })
                }, f.readValue = function () {
                    var e = n.val() || [],
                        t = [];
                    return i(e, function (e) {
                        var n = T.selectValueMap[e];
                        n && !n.disabled && t.push(T.getViewValueFromOption(n))
                    }), t
                }, M.trackBy && e.$watchCollection(function () {
                    return Yi($.$viewValue) ? $.$viewValue.map(function (e) {
                        return M.getTrackByValue(e)
                    }) : void 0
                }, function () {
                    $.$render()
                })) : (f.writeValue = function (e) {
                    var t = T.getOptionFromViewValue(e);
                    t ? (n[0].value !== t.selectValue && (O(), I(), n[0].value = t.selectValue, t.element.selected = !0), t.element.setAttribute("selected", "selected")) : null === e || x ? (O(), E()) : (I(), S())
                }, f.readValue = function () {
                    var e = T.selectValueMap[n.val()];
                    return e && !e.disabled ? (I(), O(), T.getViewValueFromOption(e)) : null
                }, M.trackBy && e.$watch(function () {
                    return M.getTrackByValue($.$viewValue)
                }, function () {
                    $.$render()
                })), x ? (p.remove(), t(p)(e), p.removeClass("ng-scope")) : p = Di(l.cloneNode(!1)), n.empty(), d(), e.$watchCollection(M.getWatchables, d)
            }
            var l = e.document.createElement("option"),
                u = e.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function (e, t, n, i) {
                        i[0].registerOption = p
                    },
                    post: o
                }
            }
        }],
        Ra = ["$locale", "$interpolate", "$log", function (e, t, n) {
            var r = /{}/g,
                s = /^when(Minus)?(.+)$/;
            return {
                link: function (a, o, l) {
                    function u(e) {
                        o.text(e || "")
                    }
                    var c, h = l.count,
                        d = l.$attr.when && o.attr(l.$attr.when),
                        f = l.offset || 0,
                        $ = a.$eval(d) || {},
                        m = {},
                        v = t.startSymbol(),
                        w = t.endSymbol(),
                        y = v + h + "-" + f + w,
                        x = Bi.noop;
                    i(l, function (e, t) {
                        var n = s.exec(t);
                        if (n) {
                            var i = (n[1] ? "-" : "") + Fi(n[2]);
                            $[i] = o.attr(l.$attr[t])
                        }
                    }), i($, function (e, n) {
                        m[n] = t(e.replace(r, y))
                    }), a.$watch(h, function (t) {
                        var i = parseFloat(t),
                            r = isNaN(i);
                        if (r || i in $ || (i = e.pluralCat(i - f)), i !== c && !(r && b(c) && isNaN(c))) {
                            x();
                            var s = m[i];
                            g(s) ? (null != t && n.debug("ngPluralize: no rule defined for '" + i + "' in " + d), x = p, u()) : x = a.$watch(s, u), c = i
                        }
                    })
                }
            }
        }],
        La = ["$parse", "$animate", "$compile", function (e, r, s) {
            var a = "$$NG_REMOVED",
                o = t("ngRepeat"),
                l = function (e, t, n, i, r, s, a) {
                    e[n] = i, r && (e[r] = s), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
                },
                u = function (e) {
                    return e.clone[0]
                },
                c = function (e) {
                    return e.clone[e.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (t, h) {
                    var d = h.ngRepeat,
                        p = s.$$createComment("end ngRepeat", d),
                        f = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!f) throw o("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", d);
                    var $ = f[1],
                        m = f[2],
                        g = f[3],
                        v = f[4];
                    if (f = $.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !f) throw o("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", $);
                    var w = f[3] || f[1],
                        y = f[2];
                    if (g && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g))) throw o("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", g);
                    var x, b, T, M, C = {
                        $id: Ze
                    };
                    return v ? x = e(v) : (T = function (e, t) {
                            return Ze(t)
                        }, M = function (e) {
                            return e
                        }),
                        function (e, t, s, h, f) {
                            x && (b = function (t, n, i) {
                                return y && (C[y] = t), C[w] = n, C.$index = i, x(e, C)
                            });
                            var $ = fe();
                            e.$watchCollection(m, function (s) {
                                var h, m, v, x, C, E, I, S, O, k, A, P, F = t[0],
                                    _ = fe();
                                if (g && (e[g] = s), n(s)) O = s, S = b || T;
                                else {
                                    S = b || M, O = [];
                                    for (var j in s) Pi.call(s, j) && "$" !== j.charAt(0) && O.push(j)
                                }
                                for (x = O.length, A = new Array(x), h = 0; x > h; h++)
                                    if (C = s === O ? h : O[h], E = s[C], I = S(C, E, h), $[I]) k = $[I], delete $[I], _[I] = k, A[h] = k;
                                    else {
                                        if (_[I]) throw i(A, function (e) {
                                            e && e.scope && ($[e.id] = e)
                                        }), o("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", d, I, E);
                                        A[h] = {
                                            id: I,
                                            scope: void 0,
                                            clone: void 0
                                        }, _[I] = !0
                                    } for (var R in $) {
                                    if (k = $[R], P = pe(k.clone), r.leave(P), P[0].parentNode)
                                        for (h = 0, m = P.length; m > h; h++) P[h][a] = !0;
                                    k.scope.$destroy()
                                }
                                for (h = 0; x > h; h++)
                                    if (C = s === O ? h : O[h], E = s[C], k = A[h], k.scope) {
                                        v = F;
                                        do v = v.nextSibling; while (v && v[a]);
                                        u(k) != v && r.move(pe(k.clone), null, F), F = c(k), l(k.scope, h, w, E, y, C, x)
                                    } else f(function (e, t) {
                                        k.scope = t;
                                        var n = p.cloneNode(!1);
                                        e[e.length++] = n, r.enter(e, null, F), F = n, k.clone = e, _[k.id] = k, l(k.scope, h, w, E, y, C, x)
                                    });
                                $ = _
                            })
                        }
                }
            }
        }],
        Da = "ng-hide",
        Na = "ng-hide-animate",
        za = ["$animate", function (e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (t, n, i) {
                    t.$watch(i.ngShow, function (t) {
                        e[t ? "removeClass" : "addClass"](n, Da, {
                            tempClasses: Na
                        })
                    })
                }
            }
        }],
        Ua = ["$animate", function (e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (t, n, i) {
                    t.$watch(i.ngHide, function (t) {
                        e[t ? "addClass" : "removeClass"](n, Da, {
                            tempClasses: Na
                        })
                    })
                }
            }
        }],
        Xa = ci(function (e, t, n) {
            e.$watch(n.ngStyle, function (e, n) {
                n && e !== n && i(n, function (e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }),
        Ha = ["$animate", "$compile", function (e, t) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function () {
                    this.cases = {}
                }],
                link: function (n, r, s, a) {
                    var o = s.ngSwitch || s.on,
                        l = [],
                        u = [],
                        c = [],
                        h = [],
                        d = function (e, t) {
                            return function () {
                                e.splice(t, 1)
                            }
                        };
                    n.$watch(o, function (n) {
                        var r, s;
                        for (r = 0, s = c.length; s > r; ++r) e.cancel(c[r]);
                        for (c.length = 0, r = 0, s = h.length; s > r; ++r) {
                            var o = pe(u[r].clone);
                            h[r].$destroy();
                            var p = c[r] = e.leave(o);
                            p.then(d(c, r))
                        }
                        u.length = 0, h.length = 0, (l = a.cases["!" + n] || a.cases["?"]) && i(l, function (n) {
                            n.transclude(function (i, r) {
                                h.push(r);
                                var s = n.element;
                                i[i.length++] = t.$$createComment("end ngSwitchWhen");
                                var a = {
                                    clone: i
                                };
                                u.push(a), e.enter(i, s.parent(), s)
                            })
                        })
                    })
                }
            }
        }],
        Va = ci({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (e, t, n, i, r) {
                i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [], i.cases["!" + n.ngSwitchWhen].push({
                    transclude: r,
                    element: t
                })
            }
        }),
        qa = ci({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (e, t, n, i, r) {
                i.cases["?"] = i.cases["?"] || [], i.cases["?"].push({
                    transclude: r,
                    element: t
                })
            }
        }),
        Ga = t("ngTransclude"),
        Ba = ["$compile", function (e) {
            return {
                restrict: "EAC",
                terminal: !0,
                compile: function (t) {
                    var n = e(t.contents());
                    return t.empty(),
                        function (e, t, i, r, s) {
                            function a(e, n) {
                                e.length ? t.append(e) : (o(), n.$destroy())
                            }

                            function o() {
                                n(e, function (e) {
                                    t.append(e)
                                })
                            }
                            if (!s) throw Ga("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", K(t));
                            i.ngTransclude === i.$attr.ngTransclude && (i.ngTransclude = "");
                            var l = i.ngTransclude || i.ngTranscludeSlot;
                            s(a, null, l), l && !s.isSlotFilled(l) && o()
                        }
                }
            }
        }],
        Wa = ["$templateCache", function (e) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function (t, n) {
                    if ("text/ng-template" == n.type) {
                        var i = n.id,
                            r = t[0].text;
                        e.put(i, r)
                    }
                }
            }
        }],
        Ya = {
            $setViewValue: p,
            $render: p
        },
        Ka = ["$element", "$scope", function (t, n) {
            var i = this,
                r = new Je;
            i.ngModelCtrl = Ya, i.unknownOption = Di(e.document.createElement("option")), i.renderUnknownOption = function (e) {
                var n = "? " + Ze(e) + " ?";
                i.unknownOption.val(n), t.prepend(i.unknownOption), t.val(n)
            }, n.$on("$destroy", function () {
                i.renderUnknownOption = p
            }), i.removeUnknownOption = function () {
                i.unknownOption.parent() && i.unknownOption.remove()
            }, i.readValue = function () {
                return i.removeUnknownOption(), t.val()
            }, i.writeValue = function (e) {
                i.hasOption(e) ? (i.removeUnknownOption(), t.val(e), "" === e && i.emptyOption.prop("selected", !0)) : null == e && i.emptyOption ? (i.removeUnknownOption(), t.val("")) : i.renderUnknownOption(e)
            }, i.addOption = function (e, t) {
                if (t[0].nodeType !== lr) {
                    he(e, '"option value"'), "" === e && (i.emptyOption = t);
                    var n = r.get(e) || 0;
                    r.put(e, n + 1), i.ngModelCtrl.$render(), Oi(t)
                }
            }, i.removeOption = function (e) {
                var t = r.get(e);
                t && (1 === t ? (r.remove(e), "" === e && (i.emptyOption = void 0)) : r.put(e, t - 1))
            }, i.hasOption = function (e) {
                return !!r.get(e)
            }, i.registerOption = function (e, t, n, r, s) {
                if (r) {
                    var a;
                    n.$observe("value", function (e) {
                        v(a) && i.removeOption(a), a = e, i.addOption(e, t)
                    })
                } else s ? e.$watch(s, function (e, r) {
                    n.$set("value", e), r !== e && i.removeOption(r), i.addOption(e, t)
                }) : i.addOption(n.value, t);
                t.on("$destroy", function () {
                    i.removeOption(n.value), i.ngModelCtrl.$render()
                })
            }
        }],
        Za = function () {
            function e(e, t, n, r) {
                var s = r[1];
                if (s) {
                    var a = r[0];
                    if (a.ngModelCtrl = s, t.on("change", function () {
                            e.$apply(function () {
                                s.$setViewValue(a.readValue())
                            })
                        }), n.multiple) {
                        a.readValue = function () {
                            var e = [];
                            return i(t.find("option"), function (t) {
                                t.selected && e.push(t.value)
                            }), e
                        }, a.writeValue = function (e) {
                            var n = new Je(e);
                            i(t.find("option"), function (e) {
                                e.selected = v(n.get(e.value))
                            })
                        };
                        var o, l = NaN;
                        e.$watch(function () {
                            l !== s.$viewValue || z(o, s.$viewValue) || (o = me(s.$viewValue), s.$render()), l = s.$viewValue
                        }), s.$isEmpty = function (e) {
                            return !e || 0 === e.length
                        }
                    }
                }
            }

            function t(e, t, n, i) {
                var r = i[1];
                if (r) {
                    var s = i[0];
                    r.$render = function () {
                        s.writeValue(r.$viewValue)
                    }
                }
            }
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Ka,
                priority: 1,
                link: {
                    pre: e,
                    post: t
                }
            }
        },
        Ja = ["$interpolate", function (e) {
            return {
                restrict: "E",
                priority: 100,
                compile: function (t, n) {
                    if (v(n.value)) var i = e(n.value, !0);
                    else {
                        var r = e(t.text(), !0);
                        r || n.$set("value", t.text())
                    }
                    return function (e, t, n) {
                        var s = "$selectController",
                            a = t.parent(),
                            o = a.data(s) || a.parent().data(s);
                        o && o.registerOption(e, t, n, i, r)
                    }
                }
            }
        }],
        Qa = $({
            restrict: "E",
            terminal: !1
        }),
        eo = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (e, t, n, i) {
                    i && (n.required = !0, i.$validators.required = function (e, t) {
                        return !n.required || !i.$isEmpty(t)
                    }, n.$observe("required", function () {
                        i.$validate()
                    }))
                }
            }
        },
        to = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (e, n, i, r) {
                    if (r) {
                        var s, a = i.ngPattern || i.pattern;
                        i.$observe("pattern", function (e) {
                            if (x(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw t("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, e, K(n));
                            s = e || void 0, r.$validate()
                        }), r.$validators.pattern = function (e, t) {
                            return r.$isEmpty(t) || g(s) || s.test(t)
                        }
                    }
                }
            }
        },
        no = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (e, t, n, i) {
                    if (i) {
                        var r = -1;
                        n.$observe("maxlength", function (e) {
                            var t = h(e);
                            r = isNaN(t) ? -1 : t, i.$validate()
                        }), i.$validators.maxlength = function (e, t) {
                            return 0 > r || i.$isEmpty(t) || t.length <= r
                        }
                    }
                }
            }
        },
        io = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (e, t, n, i) {
                    if (i) {
                        var r = 0;
                        n.$observe("minlength", function (e) {
                            r = h(e) || 0, i.$validate()
                        }), i.$validators.minlength = function (e, t) {
                            return i.$isEmpty(t) || t.length >= r
                        }
                    }
                }
            }
        };
    return e.angular.bootstrap ? void(e.console && console.log("WARNING: Tried to load angular more than once.")) : (le(), we(Bi), Bi.module("ngLocale", [], ["$provide", function (e) {
        function t(e) {
            e += "";
            var t = e.indexOf(".");
            return -1 == t ? 0 : e.length - t - 1
        }

        function n(e, n) {
            var i = n;
            void 0 === i && (i = Math.min(t(e), 3));
            var r = Math.pow(10, i),
                s = (e * r | 0) % r;
            return {
                v: i,
                f: s
            }
        }
        var i = {
            ZERO: "zero",
            ONE: "one",
            TWO: "two",
            FEW: "few",
            MANY: "many",
            OTHER: "other"
        };
        e.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (e, t) {
                var r = 0 | e,
                    s = n(e, t);
                return 1 == r && 0 == s.v ? i.ONE : i.OTHER
            }
        })
    }]), void Di(e.document).ready(function () {
        ie(e.document, re)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), define("angular", function (e) {
        return function () {
            var t;
            return t || e.angular
        }
    }(this)), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function (e, t, n) {
        function i(e, t) {
            return H(new(H(function () {}, {
                prototype: e
            })), t)
        }

        function r(e) {
            return X(arguments, function (t) {
                t !== e && X(t, function (t, n) {
                    e.hasOwnProperty(n) || (e[n] = t)
                })
            }), e
        }

        function s(e, t) {
            var n = [];
            for (var i in e.path) {
                if (e.path[i] !== t.path[i]) break;
                n.push(e.path[i])
            }
            return n
        }

        function a(e) {
            if (Object.keys) return Object.keys(e);
            var t = [];
            return X(e, function (e, n) {
                t.push(n)
            }), t
        }

        function o(e, t) {
            if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
            var n = e.length >>> 0,
                i = Number(arguments[2]) || 0;
            for (i = 0 > i ? Math.ceil(i) : Math.floor(i), 0 > i && (i += n); n > i; i++)
                if (i in e && e[i] === t) return i;
            return -1
        }

        function l(e, t, n, i) {
            var r, l = s(n, i),
                u = {},
                c = [];
            for (var h in l)
                if (l[h] && l[h].params && (r = a(l[h].params), r.length))
                    for (var d in r) o(c, r[d]) >= 0 || (c.push(r[d]), u[r[d]] = e[r[d]]);
            return H({}, u, t)
        }

        function u(e, t, n) {
            if (!n) {
                n = [];
                for (var i in e) n.push(i)
            }
            for (var r = 0; r < n.length; r++) {
                var s = n[r];
                if (e[s] != t[s]) return !1
            }
            return !0
        }

        function c(e, t) {
            var n = {};
            return X(e, function (e) {
                n[e] = t[e]
            }), n
        }

        function h(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return X(n, function (n) {
                n in e && (t[n] = e[n])
            }), t
        }

        function d(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var i in e) - 1 == o(n, i) && (t[i] = e[i]);
            return t
        }

        function p(e, t) {
            var n = U(e),
                i = n ? [] : {};
            return X(e, function (e, r) {
                t(e, r) && (i[n ? i.length : r] = e)
            }), i
        }

        function f(e, t) {
            var n = U(e) ? [] : {};
            return X(e, function (e, i) {
                n[i] = t(e, i)
            }), n
        }

        function $(e, t) {
            var i = 1,
                s = 2,
                l = {},
                u = [],
                c = l,
                h = H(e.when(l), {
                    $$promises: l,
                    $$values: l
                });
            this.study = function (l) {
                function p(e, n) {
                    if (v[n] !== s) {
                        if (g.push(n), v[n] === i) throw g.splice(0, o(g, n)), new Error("Cyclic dependency: " + g.join(" -> "));
                        if (v[n] = i, N(e)) m.push(n, [function () {
                            return t.get(e)
                        }], u);
                        else {
                            var r = t.annotate(e);
                            X(r, function (e) {
                                e !== n && l.hasOwnProperty(e) && p(l[e], e)
                            }), m.push(n, e, r)
                        }
                        g.pop(), v[n] = s
                    }
                }

                function f(e) {
                    return z(e) && e.then && e.$$promises
                }
                if (!z(l)) throw new Error("'invocables' must be an object");
                var $ = a(l || {}),
                    m = [],
                    g = [],
                    v = {};
                return X(l, p), l = g = v = null,
                    function (i, s, a) {
                        function o() {
                            --y || (x || r(w, s.$$values), g.$$values = w, g.$$promises = g.$$promises || !0, delete g.$$inheritedValues, p.resolve(w))
                        }

                        function l(e) {
                            g.$$failure = e, p.reject(e)
                        }

                        function u(n, r, s) {
                            function u(e) {
                                h.reject(e), l(e)
                            }

                            function c() {
                                if (!L(g.$$failure)) try {
                                    h.resolve(t.invoke(r, a, w)), h.promise.then(function (e) {
                                        w[n] = e, o()
                                    }, u)
                                } catch (e) {
                                    u(e)
                                }
                            }
                            var h = e.defer(),
                                d = 0;
                            X(s, function (e) {
                                v.hasOwnProperty(e) && !i.hasOwnProperty(e) && (d++, v[e].then(function (t) {
                                    w[e] = t, --d || c()
                                }, u))
                            }), d || c(), v[n] = h.promise
                        }
                        if (f(i) && a === n && (a = s, s = i, i = null), i) {
                            if (!z(i)) throw new Error("'locals' must be an object")
                        } else i = c;
                        if (s) {
                            if (!f(s)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else s = h;
                        var p = e.defer(),
                            g = p.promise,
                            v = g.$$promises = {},
                            w = H({}, i),
                            y = 1 + m.length / 3,
                            x = !1;
                        if (L(s.$$failure)) return l(s.$$failure), g;
                        s.$$inheritedValues && r(w, d(s.$$inheritedValues, $)), H(v, s.$$promises), s.$$values ? (x = r(w, d(s.$$values, $)), g.$$inheritedValues = d(s.$$values, $), o()) : (s.$$inheritedValues && (g.$$inheritedValues = d(s.$$inheritedValues, $)), s.then(o, l));
                        for (var b = 0, T = m.length; T > b; b += 3) i.hasOwnProperty(m[b]) ? o() : u(m[b], m[b + 1], m[b + 2]);
                        return g
                    }
            }, this.resolve = function (e, t, n, i) {
                return this.study(e)(t, n, i)
            }
        }

        function m(e, t, n) {
            this.fromConfig = function (e, t, n) {
                return L(e.template) ? this.fromString(e.template, t) : L(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : L(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
            }, this.fromString = function (e, t) {
                return D(e) ? e(t) : e
            }, this.fromUrl = function (n, i) {
                return D(n) && (n = n(i)), null == n ? null : e.get(n, {
                    cache: t,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function (e) {
                    return e.data
                })
            }, this.fromProvider = function (e, t, i) {
                return n.invoke(e, null, i || {
                    params: t
                })
            }
        }

        function g(e, t, r) {
            function s(t, n, i, r) {
                if (m.push(t), f[t]) return f[t];
                if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
                if ($[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
                return $[t] = new G.Param(t, n, i, r), $[t]
            }

            function a(e, t, n, i) {
                var r = ["", ""],
                    s = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!t) return s;
                switch (n) {
                    case !1:
                        r = ["(", ")" + (i ? "?" : "")];
                        break;
                    case !0:
                        s = s.replace(/\/$/, ""), r = ["(?:/(", ")|/)?"];
                        break;
                    default:
                        r = ["(" + n + "|", ")?"]
                }
                return s + r[0] + t + r[1]
            }

            function o(r, s) {
                var a, o, l, u, c;
                return a = r[2] || r[3], c = t.params[a], l = e.substring(d, r.index), o = s ? r[4] : r[4] || ("*" == r[1] ? ".*" : null), o && (u = G.type(o) || i(G.type("string"), {
                    pattern: new RegExp(o, t.caseInsensitive ? "i" : n)
                })), {
                    id: a,
                    regexp: o,
                    segment: l,
                    type: u,
                    cfg: c
                }
            }
            t = H({
                params: {}
            }, z(t) ? t : {});
            var l, u = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                c = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                h = "^",
                d = 0,
                p = this.segments = [],
                f = r ? r.params : {},
                $ = this.params = r ? r.params.$$new() : new G.ParamSet,
                m = [];
            this.source = e;
            for (var g, v, w;
                (l = u.exec(e)) && (g = o(l, !1), !(g.segment.indexOf("?") >= 0));) v = s(g.id, g.type, g.cfg, "path"), h += a(g.segment, v.type.pattern.source, v.squash, v.isOptional), p.push(g.segment), d = u.lastIndex;
            w = e.substring(d);
            var y = w.indexOf("?");
            if (y >= 0) {
                var x = this.sourceSearch = w.substring(y);
                if (w = w.substring(0, y), this.sourcePath = e.substring(0, d + y), x.length > 0)
                    for (d = 0; l = c.exec(x);) g = o(l, !0), v = s(g.id, g.type, g.cfg, "search"), d = u.lastIndex
            } else this.sourcePath = e, this.sourceSearch = "";
            h += a(w) + (t.strict === !1 ? "/?" : "") + "$", p.push(w), this.regexp = new RegExp(h, t.caseInsensitive ? "i" : n), this.prefix = p[0], this.$$paramNames = m
        }

        function v(e) {
            H(this, e)
        }

        function w() {
            function e(e) {
                return null != e ? e.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : e
            }

            function r(e) {
                return null != e ? e.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : e
            }

            function s() {
                return {
                    strict: $,
                    caseInsensitive: d
                }
            }

            function l(e) {
                return D(e) || U(e) && D(e[e.length - 1])
            }

            function u() {
                for (; b.length;) {
                    var e = b.shift();
                    if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    t.extend(y[e.name], h.invoke(e.def))
                }
            }

            function c(e) {
                H(this, e || {})
            }
            G = this;
            var h, d = !1,
                $ = !0,
                m = !1,
                y = {},
                x = !0,
                b = [],
                T = {
                    string: {
                        encode: e,
                        decode: r,
                        is: function (e) {
                            return null == e || !L(e) || "string" == typeof e
                        },
                        pattern: /[^\/]*/
                    },
                    "int": {
                        encode: e,
                        decode: function (e) {
                            return parseInt(e, 10)
                        },
                        is: function (e) {
                            return L(e) && this.decode(e.toString()) === e
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function (e) {
                            return e ? 1 : 0
                        },
                        decode: function (e) {
                            return 0 !== parseInt(e, 10)
                        },
                        is: function (e) {
                            return e === !0 || e === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function (e) {
                            return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : n
                        },
                        decode: function (e) {
                            if (this.is(e)) return e;
                            var t = this.capture.exec(e);
                            return t ? new Date(t[1], t[2] - 1, t[3]) : n
                        },
                        is: function (e) {
                            return e instanceof Date && !isNaN(e.valueOf())
                        },
                        equals: function (e, t) {
                            return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: t.toJson,
                        decode: t.fromJson,
                        is: t.isObject,
                        equals: t.equals,
                        pattern: /[^\/]*/
                    },
                    any: {
                        encode: t.identity,
                        decode: t.identity,
                        equals: t.equals,
                        pattern: /.*/
                    }
                };
            w.$$getDefaultValue = function (e) {
                if (!l(e.value)) return e.value;
                if (!h) throw new Error("Injectable functions cannot be called at configuration time");
                return h.invoke(e.value)
            }, this.caseInsensitive = function (e) {
                return L(e) && (d = e), d
            }, this.strictMode = function (e) {
                return L(e) && ($ = e), $
            }, this.defaultSquashPolicy = function (e) {
                if (!L(e)) return m;
                if (e !== !0 && e !== !1 && !N(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
                return m = e, e
            }, this.compile = function (e, t) {
                return new g(e, H(s(), t))
            }, this.isMatcher = function (e) {
                if (!z(e)) return !1;
                var t = !0;
                return X(g.prototype, function (n, i) {
                    D(n) && (t = t && L(e[i]) && D(e[i]))
                }), t
            }, this.type = function (e, t, n) {
                if (!L(t)) return y[e];
                if (y.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
                return y[e] = new v(H({
                    name: e
                }, t)), n && (b.push({
                    name: e,
                    def: n
                }), x || u()), this
            }, X(T, function (e, t) {
                y[t] = new v(H({
                    name: t
                }, e))
            }), y = i(y, {}), this.$get = ["$injector", function (e) {
                return h = e, x = !1, u(), X(T, function (e, t) {
                    y[t] || (y[t] = new v(e))
                }), this
            }], this.Param = function (e, i, r, s) {
                function u(e) {
                    var t = z(e) ? a(e) : [],
                        n = -1 === o(t, "value") && -1 === o(t, "type") && -1 === o(t, "squash") && -1 === o(t, "array");
                    return n && (e = {
                        value: e
                    }), e.$$fn = l(e.value) ? e.value : function () {
                        return e.value
                    }, e
                }

                function c(n, i, r) {
                    if (n.type && i) throw new Error("Param '" + e + "' has two type configurations.");
                    return i ? i : n.type ? t.isString(n.type) ? y[n.type] : n.type instanceof v ? n.type : new v(n.type) : "config" === r ? y.any : y.string
                }

                function d() {
                    var t = {
                            array: "search" === s ? "auto" : !1
                        },
                        n = e.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return H(t, n, r).array
                }

                function $(e, t) {
                    var n = e.squash;
                    if (!t || n === !1) return !1;
                    if (!L(n) || null == n) return m;
                    if (n === !0 || N(n)) return n;
                    throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
                }

                function g(e, t, i, r) {
                    var s, a, l = [{
                        from: "",
                        to: i || t ? n : ""
                    }, {
                        from: null,
                        to: i || t ? n : ""
                    }];
                    return s = U(e.replace) ? e.replace : [], N(r) && s.push({
                        from: r,
                        to: n
                    }), a = f(s, function (e) {
                        return e.from
                    }), p(l, function (e) {
                        return -1 === o(a, e.from)
                    }).concat(s)
                }

                function w() {
                    if (!h) throw new Error("Injectable functions cannot be called at configuration time");
                    var e = h.invoke(r.$$fn);
                    if (null !== e && e !== n && !T.type.is(e)) throw new Error("Default value (" + e + ") for parameter '" + T.id + "' is not an instance of Type (" + T.type.name + ")");
                    return e
                }

                function x(e) {
                    function t(e) {
                        return function (t) {
                            return t.from === e
                        }
                    }

                    function n(e) {
                        var n = f(p(T.replace, t(e)), function (e) {
                            return e.to
                        });
                        return n.length ? n[0] : e
                    }
                    return e = n(e), L(e) ? T.type.$normalize(e) : w()
                }

                function b() {
                    return "{Param:" + e + " " + i + " squash: '" + E + "' optional: " + C + "}"
                }
                var T = this;
                r = u(r), i = c(r, i, s);
                var M = d();
                i = M ? i.$asArray(M, "search" === s) : i, "string" !== i.name || M || "path" !== s || r.value !== n || (r.value = "");
                var C = r.value !== n,
                    E = $(r, C),
                    I = g(r, M, C, E);
                H(this, {
                    id: e,
                    type: i,
                    location: s,
                    array: M,
                    squash: E,
                    replace: I,
                    isOptional: C,
                    value: x,
                    dynamic: n,
                    config: r,
                    toString: b
                })
            }, c.prototype = {
                $$new: function () {
                    return i(this, H(new c, {
                        $$parent: this
                    }))
                },
                $$keys: function () {
                    for (var e = [], t = [], n = this, i = a(c.prototype); n;) t.push(n), n = n.$$parent;
                    return t.reverse(), X(t, function (t) {
                        X(a(t), function (t) {
                            -1 === o(e, t) && -1 === o(i, t) && e.push(t)
                        })
                    }), e
                },
                $$values: function (e) {
                    var t = {},
                        n = this;
                    return X(n.$$keys(), function (i) {
                        t[i] = n[i].value(e && e[i])
                    }), t
                },
                $$equals: function (e, t) {
                    var n = !0,
                        i = this;
                    return X(i.$$keys(), function (r) {
                        var s = e && e[r],
                            a = t && t[r];
                        i[r].type.equals(s, a) || (n = !1)
                    }), n
                },
                $$validates: function (e) {
                    var i, r, s, a, o, l = this.$$keys();
                    for (i = 0; i < l.length && (r = this[l[i]], s = e[l[i]], s !== n && null !== s || !r.isOptional); i++) {
                        if (a = r.type.$normalize(s), !r.type.is(a)) return !1;
                        if (o = r.type.encode(a), t.isString(o) && !r.type.pattern.exec(o)) return !1
                    }
                    return !0
                },
                $$parent: n
            }, this.ParamSet = c
        }

        function y(e, i) {
            function r(e) {
                var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
                return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
            }

            function s(e, t) {
                return e.replace(/\$(\$|\d{1,2})/, function (e, n) {
                    return t["$" === n ? 0 : Number(n)]
                })
            }

            function a(e, t, n) {
                if (!n) return !1;
                var i = e.invoke(t, t, {
                    $match: n
                });
                return L(i) ? i : !0
            }

            function o(i, r, s, a, o) {
                function d(e, t, n) {
                    return "/" === m ? e : t ? m.slice(0, -1) + e : n ? m.slice(1) + e : e
                }

                function p(e) {
                    function t(e) {
                        var t = e(s, i);
                        return t ? (N(t) && i.replace().url(t), !0) : !1
                    }
                    if (!e || !e.defaultPrevented) {
                        $ && i.url() === $;
                        $ = n;
                        var r, a = u.length;
                        for (r = 0; a > r; r++)
                            if (t(u[r])) return;
                        c && t(c)
                    }
                }

                function f() {
                    return l = l || r.$on("$locationChangeSuccess", p)
                }
                var $, m = a.baseHref(),
                    g = i.url();
                return h || f(), {
                    sync: function () {
                        p()
                    },
                    listen: function () {
                        return f()
                    },
                    update: function (e) {
                        return e ? void(g = i.url()) : void(i.url() !== g && (i.url(g), i.replace()))
                    },
                    push: function (e, t, r) {
                        var s = e.format(t || {});
                        null !== s && t && t["#"] && (s += "#" + t["#"]), i.url(s), $ = r && r.$$avoidResync ? i.url() : n, r && r.replace && i.replace()
                    },
                    href: function (n, r, s) {
                        if (!n.validates(r)) return null;
                        var a = e.html5Mode();
                        t.isObject(a) && (a = a.enabled), a = a && o.history;
                        var l = n.format(r);
                        if (s = s || {}, a || null === l || (l = "#" + e.hashPrefix() + l), null !== l && r && r["#"] && (l += "#" + r["#"]), l = d(l, a, s.absolute), !s.absolute || !l) return l;
                        var u = !a && l ? "/" : "",
                            c = i.port();
                        return c = 80 === c || 443 === c ? "" : ":" + c, [i.protocol(), "://", i.host(), c, u, l].join("")
                    }
                }
            }
            var l, u = [],
                c = null,
                h = !1;
            this.rule = function (e) {
                if (!D(e)) throw new Error("'rule' must be a function");
                return u.push(e), this
            }, this.otherwise = function (e) {
                if (N(e)) {
                    var t = e;
                    e = function () {
                        return t
                    }
                } else if (!D(e)) throw new Error("'rule' must be a function");
                return c = e, this
            }, this.when = function (e, t) {
                var n, o = N(t);
                if (N(e) && (e = i.compile(e)), !o && !D(t) && !U(t)) throw new Error("invalid 'handler' in when()");
                var l = {
                        matcher: function (e, t) {
                            return o && (n = i.compile(t), t = ["$match", function (e) {
                                return n.format(e)
                            }]), H(function (n, i) {
                                return a(n, t, e.exec(i.path(), i.search()))
                            }, {
                                prefix: N(e.prefix) ? e.prefix : ""
                            })
                        },
                        regex: function (e, t) {
                            if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return o && (n = t, t = ["$match", function (e) {
                                return s(n, e)
                            }]), H(function (n, i) {
                                return a(n, t, e.exec(i.path()))
                            }, {
                                prefix: r(e)
                            })
                        }
                    },
                    u = {
                        matcher: i.isMatcher(e),
                        regex: e instanceof RegExp
                    };
                for (var c in u)
                    if (u[c]) return this.rule(l[c](e, t));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function (e) {
                e === n && (e = !0), h = e
            }, this.$get = o, o.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
        }

        function x(e, r) {
            function s(e) {
                return 0 === e.indexOf(".") || 0 === e.indexOf("^")
            }

            function d(e, t) {
                if (!e) return n;
                var i = N(e),
                    r = i ? e : e.name,
                    a = s(r);
                if (a) {
                    if (!t) throw new Error("No reference point given for path '" + r + "'");
                    t = d(t);
                    for (var o = r.split("."), l = 0, u = o.length, c = t; u > l; l++)
                        if ("" !== o[l] || 0 !== l) {
                            if ("^" !== o[l]) break;
                            if (!c.parent) throw new Error("Path '" + r + "' not valid for state '" + t.name + "'");
                            c = c.parent
                        } else c = t;
                    o = o.slice(l).join("."), r = c.name + (c.name && o ? "." : "") + o
                }
                var h = C[r];
                return !h || !i && (i || h !== e && h.self !== e) ? n : h
            }

            function p(e, t) {
                E[e] || (E[e] = []), E[e].push(t)
            }

            function $(e) {
                for (var t = E[e] || []; t.length;) m(t.shift())
            }

            function m(t) {
                t = i(t, {
                    self: t,
                    resolve: t.resolve || {},
                    toString: function () {
                        return this.name
                    }
                });
                var n = t.name;
                if (!N(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (C.hasOwnProperty(n)) throw new Error("State '" + n + "' is already defined");
                var r = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : N(t.parent) ? t.parent : z(t.parent) && N(t.parent.name) ? t.parent.name : "";
                if (r && !C[r]) return p(r, t.self);
                for (var s in S) D(S[s]) && (t[s] = S[s](t, S.$delegates[s]));
                return C[n] = t, !t[I] && t.url && e.when(t.url, ["$match", "$stateParams", function (e, n) {
                    M.$current.navigable == t && u(e, n) || M.transitionTo(t, e, {
                        inherit: !0,
                        location: !1
                    })
                }]), $(n), t
            }

            function g(e) {
                return e.indexOf("*") > -1
            }

            function v(e) {
                for (var t = e.split("."), n = M.$current.name.split("."), i = 0, r = t.length; r > i; i++) "*" === t[i] && (n[i] = "*");
                return "**" === t[0] && (n = n.slice(o(n, t[1])), n.unshift("**")), "**" === t[t.length - 1] && (n.splice(o(n, t[t.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), t.length != n.length ? !1 : n.join("") === t.join("")
            }

            function w(e, t) {
                return N(e) && !L(t) ? S[e] : D(t) && N(e) ? (S[e] && !S.$delegates[e] && (S.$delegates[e] = S[e]), S[e] = t, this) : this
            }

            function y(e, t) {
                return z(e) ? t = e : t.name = e, m(t), this
            }

            function x(e, r, s, o, h, p, $, m, w) {
                function y(t, n, i, s) {
                    var a = e.$broadcast("$stateNotFound", t, n, i);
                    if (a.defaultPrevented) return $.update(), O;
                    if (!a.retry) return null;
                    if (s.$retry) return $.update(), k;
                    var o = M.transition = r.when(a.retry);
                    return o.then(function () {
                        return o !== M.transition ? E : (t.options.$retry = !0, M.transitionTo(t.to, t.toParams, t.options))
                    }, function () {
                        return O
                    }), $.update(), o
                }

                function x(e, n, i, a, l, u) {
                    function d() {
                        var n = [];
                        return X(e.views, function (i, r) {
                            var a = i.resolve && i.resolve !== e.resolve ? i.resolve : {};
                            a.$template = [function () {
                                return s.load(r, {
                                    view: i,
                                    locals: l.globals,
                                    params: p,
                                    notify: u.notify
                                }) || ""
                            }], n.push(h.resolve(a, l.globals, l.resolve, e).then(function (n) {
                                if (D(i.controllerProvider) || U(i.controllerProvider)) {
                                    var s = t.extend({}, a, l.globals);
                                    n.$$controller = o.invoke(i.controllerProvider, null, s)
                                } else n.$$controller = i.controller;
                                n.$$state = e, n.$$controllerAs = i.controllerAs, n.$$resolveAs = i.resolveAs, l[r] = n
                            }))
                        }), r.all(n).then(function () {
                            return l.globals
                        })
                    }
                    var p = i ? n : c(e.params.$$keys(), n),
                        f = {
                            $stateParams: p
                        };
                    l.resolve = h.resolve(e.resolve, f, l.resolve, e);
                    var $ = [l.resolve.then(function (e) {
                        l.globals = e
                    })];
                    return a && $.push(a), r.all($).then(d).then(function (e) {
                        return l
                    })
                }
                var E = r.reject(new Error("transition superseded")),
                    S = r.reject(new Error("transition prevented")),
                    O = r.reject(new Error("transition aborted")),
                    k = r.reject(new Error("transition failed"));
                return T.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, M = {
                    params: {},
                    current: T.self,
                    $current: T,
                    transition: null
                }, M.reload = function (e) {
                    return M.transitionTo(M.current, p, {
                        reload: e || !0,
                        inherit: !1,
                        notify: !0
                    })
                }, M.go = function (e, t, n) {
                    return M.transitionTo(e, t, H({
                        inherit: !0,
                        relative: M.$current
                    }, n))
                }, M.transitionTo = function (t, n, s) {
                    n = n || {}, s = H({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, s || {});
                    var a, u = M.$current,
                        h = M.params,
                        f = u.path,
                        m = d(t, s.relative),
                        g = n["#"];
                    if (!L(m)) {
                        var v = {
                                to: t,
                                toParams: n,
                                options: s
                            },
                            w = y(v, u.self, h, s);
                        if (w) return w;
                        if (t = v.to, n = v.toParams, s = v.options, m = d(t, s.relative), !L(m)) {
                            if (!s.relative) throw new Error("No such state '" + t + "'");
                            throw new Error("Could not resolve '" + t + "' from state '" + s.relative + "'")
                        }
                    }
                    if (m[I]) throw new Error("Cannot transition to abstract state '" + t + "'");
                    if (s.inherit && (n = l(p, n || {}, M.$current, m)), !m.params.$$validates(n)) return k;
                    n = m.params.$$values(n), t = m;
                    var C = t.path,
                        O = 0,
                        A = C[O],
                        P = T.locals,
                        F = [];
                    if (s.reload) {
                        if (N(s.reload) || z(s.reload)) {
                            if (z(s.reload) && !s.reload.name) throw new Error("Invalid reload state object");
                            var _ = s.reload === !0 ? f[0] : d(s.reload);
                            if (s.reload && !_) throw new Error("No such reload state '" + (N(s.reload) ? s.reload : s.reload.name) + "'");
                            for (; A && A === f[O] && A !== _;) P = F[O] = A.locals, O++, A = C[O]
                        }
                    } else
                        for (; A && A === f[O] && A.ownParams.$$equals(n, h);) P = F[O] = A.locals, O++, A = C[O];
                    if (b(t, n, u, h, P, s)) return g && (n["#"] = g), M.params = n, V(M.params, p), V(c(t.params.$$keys(), p), t.locals.globals.$stateParams), s.location && t.navigable && t.navigable.url && ($.push(t.navigable.url, n, {
                        $$avoidResync: !0,
                        replace: "replace" === s.location
                    }), $.update(!0)), M.transition = null, r.when(M.current);
                    if (n = c(t.params.$$keys(), n || {}), g && (n["#"] = g), s.notify && e.$broadcast("$stateChangeStart", t.self, n, u.self, h, s).defaultPrevented) return e.$broadcast("$stateChangeCancel", t.self, n, u.self, h), null == M.transition && $.update(), S;
                    for (var j = r.when(P), R = O; R < C.length; R++, A = C[R]) P = F[R] = i(P), j = x(A, n, A === t, j, P, s);
                    var D = M.transition = j.then(function () {
                        var i, r, a;
                        if (M.transition !== D) return E;
                        for (i = f.length - 1; i >= O; i--) a = f[i], a.self.onExit && o.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
                        for (i = O; i < C.length; i++) r = C[i], r.locals = F[i], r.self.onEnter && o.invoke(r.self.onEnter, r.self, r.locals.globals);
                        return M.transition !== D ? E : (M.$current = t, M.current = t.self, M.params = n, V(M.params, p), M.transition = null, s.location && t.navigable && $.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === s.location
                        }), s.notify && e.$broadcast("$stateChangeSuccess", t.self, n, u.self, h), $.update(!0), M.current)
                    }).then(null, function (i) {
                        return M.transition !== D ? E : (M.transition = null, a = e.$broadcast("$stateChangeError", t.self, n, u.self, h, i), a.defaultPrevented || $.update(), r.reject(i))
                    });
                    return D
                }, M.is = function (e, t, i) {
                    i = H({
                        relative: M.$current
                    }, i || {});
                    var r = d(e, i.relative);
                    return L(r) ? M.$current !== r ? !1 : t ? u(r.params.$$values(t), p) : !0 : n
                }, M.includes = function (e, t, i) {
                    if (i = H({
                            relative: M.$current
                        }, i || {}), N(e) && g(e)) {
                        if (!v(e)) return !1;
                        e = M.$current.name
                    }
                    var r = d(e, i.relative);
                    return L(r) ? L(M.$current.includes[r.name]) ? t ? u(r.params.$$values(t), p, a(t)) : !0 : !1 : n
                }, M.href = function (e, t, i) {
                    i = H({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: M.$current
                    }, i || {});
                    var r = d(e, i.relative);
                    if (!L(r)) return null;
                    i.inherit && (t = l(p, t || {}, M.$current, r));
                    var s = r && i.lossy ? r.navigable : r;
                    return s && s.url !== n && null !== s.url ? $.href(s.url, c(r.params.$$keys().concat("#"), t || {}), {
                        absolute: i.absolute
                    }) : null
                }, M.get = function (e, t) {
                    if (0 === arguments.length) return f(a(C), function (e) {
                        return C[e].self
                    });
                    var n = d(e, t || M.$current);
                    return n && n.self ? n.self : null
                }, M
            }

            function b(e, t, n, i, r, s) {
                function a(e, t, n) {
                    function i(t) {
                        return "search" != e.params[t].location
                    }
                    var r = e.params.$$keys().filter(i),
                        s = h.apply({}, [e.params].concat(r)),
                        a = new G.ParamSet(s);
                    return a.$$equals(t, n)
                }
                return !s.reload && e === n && (r === n.locals || e.self.reloadOnSearch === !1 && a(n, i, t)) ? !0 : void 0
            }
            var T, M, C = {},
                E = {},
                I = "abstract",
                S = {
                    parent: function (e) {
                        if (L(e.parent) && e.parent) return d(e.parent);
                        var t = /^(.+)\.[^.]+$/.exec(e.name);
                        return t ? d(t[1]) : T
                    },
                    data: function (e) {
                        return e.parent && e.parent.data && (e.data = e.self.data = i(e.parent.data, e.data)), e.data
                    },
                    url: function (e) {
                        var t = e.url,
                            n = {
                                params: e.params || {}
                            };
                        if (N(t)) return "^" == t.charAt(0) ? r.compile(t.substring(1), n) : (e.parent.navigable || T).url.concat(t, n);
                        if (!t || r.isMatcher(t)) return t;
                        throw new Error("Invalid url '" + t + "' in state '" + e + "'")
                    },
                    navigable: function (e) {
                        return e.url ? e : e.parent ? e.parent.navigable : null
                    },
                    ownParams: function (e) {
                        var t = e.url && e.url.params || new G.ParamSet;
                        return X(e.params || {}, function (e, n) {
                            t[n] || (t[n] = new G.Param(n, null, e, "config"))
                        }), t
                    },
                    params: function (e) {
                        var t = h(e.ownParams, e.ownParams.$$keys());
                        return e.parent && e.parent.params ? H(e.parent.params.$$new(), t) : new G.ParamSet
                    },
                    views: function (e) {
                        var t = {};
                        return X(L(e.views) ? e.views : {
                            "": e
                        }, function (n, i) {
                            i.indexOf("@") < 0 && (i += "@" + e.parent.name), n.resolveAs = n.resolveAs || e.resolveAs || "$resolve", t[i] = n
                        }), t
                    },
                    path: function (e) {
                        return e.parent ? e.parent.path.concat(e) : []
                    },
                    includes: function (e) {
                        var t = e.parent ? H({}, e.parent.includes) : {};
                        return t[e.name] = !0, t
                    },
                    $delegates: {}
                };
            T = m({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), T.navigable = null, this.decorator = w, this.state = y, this.$get = x, x.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function b() {
            function e(e, t) {
                return {
                    load: function (e, n) {
                        var i, r = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return n = H(r, n), n.view && (i = t.fromConfig(n.view, n.params, n.locals)), i
                    }
                }
            }
            this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
        }

        function T() {
            var e = !1;
            this.useAnchorScroll = function () {
                e = !0
            }, this.$get = ["$anchorScroll", "$timeout", function (t, n) {
                return e ? t : function (e) {
                    return n(function () {
                        e[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function M(e, n, i, r, s) {
            function a() {
                return n.has ? function (e) {
                    return n.has(e) ? n.get(e) : null
                } : function (e) {
                    try {
                        return n.get(e)
                    } catch (t) {
                        return null
                    }
                }
            }

            function o(e, n) {
                var i = function () {
                    return {
                        enter: function (e, t, n) {
                            t.after(e), n()
                        },
                        leave: function (e, t) {
                            e.remove(), t()
                        }
                    }
                };
                if (c) return {
                    enter: function (e, n, i) {
                        t.version.minor > 2 ? c.enter(e, null, n).then(i) : c.enter(e, null, n, i)
                    },
                    leave: function (e, n) {
                        t.version.minor > 2 ? c.leave(e).then(n) : c.leave(e, n)
                    }
                };
                if (u) {
                    var r = u && u(n, e);
                    return {
                        enter: function (e, t, n) {
                            r.enter(e, null, t), n()
                        },
                        leave: function (e, t) {
                            r.leave(e), t()
                        }
                    }
                }
                return i()
            }
            var l = a(),
                u = l("$animator"),
                c = l("$animate"),
                h = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function (n, a, l) {
                        return function (n, a, u) {
                            function c() {
                                if (d && (d.remove(), d = null), f && (f.$destroy(), f = null), p) {
                                    var e = p.data("$uiViewAnim");
                                    v.leave(p, function () {
                                        e.$$animLeave.resolve(), d = null
                                    }), d = p, p = null
                                }
                            }

                            function h(o) {
                                var h, d = E(n, u, a, r),
                                    w = d && e.$current && e.$current.locals[d];
                                if (o || w !== $) {
                                    h = n.$new(), $ = e.$current.locals[d], h.$emit("$viewContentLoading", d);
                                    var y = l(h, function (e) {
                                        var r = s.defer(),
                                            o = s.defer(),
                                            l = {
                                                $animEnter: r.promise,
                                                $animLeave: o.promise,
                                                $$animLeave: o
                                            };
                                        e.data("$uiViewAnim", l),
                                            v.enter(e, a, function () {
                                                r.resolve(), f && f.$emit("$viewContentAnimationEnded"), (t.isDefined(g) && !g || n.$eval(g)) && i(e)
                                            }), c()
                                    });
                                    p = y, f = h, f.$emit("$viewContentLoaded", d), f.$eval(m)
                                }
                            }
                            var d, p, f, $, m = u.onload || "",
                                g = u.autoscroll,
                                v = o(u, n);
                            a.inheritedData("$uiView");
                            n.$on("$stateChangeSuccess", function () {
                                h(!1)
                            }), h(!0)
                        }
                    }
                };
            return h
        }

        function C(e, n, i, r) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function (s) {
                    var a = s.html();
                    return function (s, o, l) {
                        var u = i.$current,
                            c = E(s, l, o, r),
                            h = u && u.locals[c];
                        if (h) {
                            o.data("$uiView", {
                                name: c,
                                state: h.$$state
                            }), o.html(h.$template ? h.$template : a);
                            var d = t.extend({}, h);
                            s[h.$$resolveAs] = d;
                            var p = e(o.contents());
                            if (h.$$controller) {
                                h.$scope = s, h.$element = o;
                                var f = n(h.$$controller, h);
                                h.$$controllerAs && (s[h.$$controllerAs] = f, s[h.$$controllerAs][h.$$resolveAs] = d), D(f.$onInit) && f.$onInit(), o.data("$ngControllerController", f), o.children().data("$ngControllerController", f)
                            }
                            p(s)
                        }
                    }
                }
            }
        }

        function E(e, t, n, i) {
            var r = i(t.uiView || t.name || "")(e),
                s = n.inheritedData("$uiView");
            return r.indexOf("@") >= 0 ? r : r + "@" + (s ? s.state.name : "")
        }

        function I(e, t) {
            var n, i = e.match(/^\s*({[^}]*})\s*$/);
            if (i && (e = t + "(" + i[1] + ")"), n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + e + "'");
            return {
                state: n[1],
                paramExpr: n[3] || null
            }
        }

        function S(e) {
            var t = e.parent().inheritedData("$uiView");
            return t && t.state && t.state.name ? t.state : void 0
        }

        function O(e) {
            var t = "[object SVGAnimatedString]" === Object.prototype.toString.call(e.prop("href")),
                n = "FORM" === e[0].nodeName;
            return {
                attr: n ? "action" : t ? "xlink:href" : "href",
                isAnchor: "A" === e.prop("tagName").toUpperCase(),
                clickable: !n
            }
        }

        function k(e, t, n, i, r) {
            return function (s) {
                var a = s.which || s.button,
                    o = r();
                if (!(a > 1 || s.ctrlKey || s.metaKey || s.shiftKey || e.attr("target"))) {
                    var l = n(function () {
                        t.go(o.state, o.params, o.options)
                    });
                    s.preventDefault();
                    var u = i.isAnchor && !o.href ? 1 : 0;
                    s.preventDefault = function () {
                        u-- <= 0 && n.cancel(l)
                    }
                }
            }
        }

        function A(e, t) {
            return {
                relative: S(e) || t.$current,
                inherit: !0
            }
        }

        function P(e, n) {
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function (i, r, s, a) {
                    var o, l = I(s.uiSref, e.current.name),
                        u = {
                            state: l.state,
                            href: null,
                            params: null
                        },
                        c = O(r),
                        h = a[1] || a[0],
                        d = null;
                    u.options = H(A(r, e), s.uiSrefOpts ? i.$eval(s.uiSrefOpts) : {});
                    var p = function (n) {
                        n && (u.params = t.copy(n)), u.href = e.href(l.state, u.params, u.options), d && d(), h && (d = h.$$addStateInfo(l.state, u.params)), null !== u.href && s.$set(c.attr, u.href)
                    };
                    l.paramExpr && (i.$watch(l.paramExpr, function (e) {
                        e !== u.params && p(e)
                    }, !0), u.params = t.copy(i.$eval(l.paramExpr))), p(), c.clickable && (o = k(r, e, n, c, function () {
                        return u
                    }), r.bind("click", o), i.$on("$destroy", function () {
                        r.unbind("click", o)
                    }))
                }
            }
        }

        function F(e, t) {
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function (n, i, r, s) {
                    function a(t) {
                        d.state = t[0], d.params = t[1], d.options = t[2], d.href = e.href(d.state, d.params, d.options), p && p(), u && (p = u.$$addStateInfo(d.state, d.params)), d.href && r.$set(l.attr, d.href)
                    }
                    var o, l = O(i),
                        u = s[1] || s[0],
                        c = [r.uiState, r.uiStateParams || null, r.uiStateOpts || null],
                        h = "[" + c.map(function (e) {
                            return e || "null"
                        }).join(", ") + "]",
                        d = {
                            state: null,
                            params: null,
                            options: null,
                            href: null
                        },
                        p = null;
                    n.$watch(h, a, !0), a(n.$eval(h)), l.clickable && (o = k(i, e, t, l, function () {
                        return d
                    }), i.bind("click", o), n.$on("$destroy", function () {
                        i.unbind("click", o)
                    }))
                }
            }
        }

        function _(e, t, n) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", "$timeout", function (t, i, r, s) {
                    function a(t, n, r) {
                        var s = e.get(t, S(i)),
                            a = o(t, n),
                            l = {
                                state: s || {
                                    name: t
                                },
                                params: n,
                                hash: a
                            };
                        return $.push(l), m[a] = r,
                            function () {
                                var e = $.indexOf(l); - 1 !== e && $.splice(e, 1)
                            }
                    }

                    function o(e, n) {
                        if (!N(e)) throw new Error("state should be a string");
                        return z(n) ? e + q(n) : (n = t.$eval(n), z(n) ? e + q(n) : e)
                    }

                    function l() {
                        for (var e = 0; e < $.length; e++) h($[e].state, $[e].params) ? u(i, m[$[e].hash]) : c(i, m[$[e].hash]), d($[e].state, $[e].params) ? u(i, p) : c(i, p)
                    }

                    function u(e, t) {
                        s(function () {
                            e.addClass(t)
                        })
                    }

                    function c(e, t) {
                        e.removeClass(t)
                    }

                    function h(t, n) {
                        return e.includes(t.name, n)
                    }

                    function d(t, n) {
                        return e.is(t.name, n)
                    }
                    var p, f, $ = [],
                        m = {};
                    p = n(r.uiSrefActiveEq || "", !1)(t);
                    try {
                        f = t.$eval(r.uiSrefActive)
                    } catch (g) {}
                    f = f || n(r.uiSrefActive || "", !1)(t), z(f) && X(f, function (n, i) {
                        if (N(n)) {
                            var r = I(n, e.current.name);
                            a(r.state, t.$eval(r.paramExpr), i)
                        }
                    }), this.$$addStateInfo = function (e, t) {
                        if (!(z(f) && $.length > 0)) {
                            var n = a(e, t, f);
                            return l(), n
                        }
                    }, t.$on("$stateChangeSuccess", l), l()
                }]
            }
        }

        function j(e) {
            var t = function (t, n) {
                return e.is(t, n)
            };
            return t.$stateful = !0, t
        }

        function R(e) {
            var t = function (t, n, i) {
                return e.includes(t, n, i)
            };
            return t.$stateful = !0, t
        }
        var L = t.isDefined,
            D = t.isFunction,
            N = t.isString,
            z = t.isObject,
            U = t.isArray,
            X = t.forEach,
            H = t.extend,
            V = t.copy,
            q = t.toJson;
        t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), $.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", $), m.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", m);
        var G;
        g.prototype.concat = function (e, t) {
            var n = {
                caseInsensitive: G.caseInsensitive(),
                strict: G.strictMode(),
                squash: G.defaultSquashPolicy()
            };
            return new g(this.sourcePath + e + this.sourceSearch, H(n, t), this)
        }, g.prototype.toString = function () {
            return this.source
        }, g.prototype.exec = function (e, t) {
            function n(e) {
                function t(e) {
                    return e.split("").reverse().join("")
                }

                function n(e) {
                    return e.replace(/\\-/g, "-")
                }
                var i = t(e).split(/-(?!\\)/),
                    r = f(i, t);
                return f(r, n).reverse()
            }
            var i = this.regexp.exec(e);
            if (!i) return null;
            t = t || {};
            var r, s, a, o = this.parameters(),
                l = o.length,
                u = this.segments.length - 1,
                c = {};
            if (u !== i.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            var h, d;
            for (r = 0; u > r; r++) {
                for (a = o[r], h = this.params[a], d = i[r + 1], s = 0; s < h.replace.length; s++) h.replace[s].from === d && (d = h.replace[s].to);
                d && h.array === !0 && (d = n(d)), L(d) && (d = h.type.decode(d)), c[a] = h.value(d)
            }
            for (; l > r; r++) {
                for (a = o[r], c[a] = this.params[a].value(t[a]), h = this.params[a], d = t[a], s = 0; s < h.replace.length; s++) h.replace[s].from === d && (d = h.replace[s].to);
                L(d) && (d = h.type.decode(d)), c[a] = h.value(d)
            }
            return c
        }, g.prototype.parameters = function (e) {
            return L(e) ? this.params[e] || null : this.$$paramNames
        }, g.prototype.validates = function (e) {
            return this.params.$$validates(e)
        }, g.prototype.format = function (e) {
            function t(e) {
                return encodeURIComponent(e).replace(/-/g, function (e) {
                    return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            e = e || {};
            var n = this.segments,
                i = this.parameters(),
                r = this.params;
            if (!this.validates(e)) return null;
            var s, a = !1,
                o = n.length - 1,
                l = i.length,
                u = n[0];
            for (s = 0; l > s; s++) {
                var c = o > s,
                    h = i[s],
                    d = r[h],
                    p = d.value(e[h]),
                    $ = d.isOptional && d.type.equals(d.value(), p),
                    m = $ ? d.squash : !1,
                    g = d.type.encode(p);
                if (c) {
                    var v = n[s + 1],
                        w = s + 1 === o;
                    if (m === !1) null != g && (u += U(g) ? f(g, t).join("-") : encodeURIComponent(g)), u += v;
                    else if (m === !0) {
                        var y = u.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        u += v.match(y)[1]
                    } else N(m) && (u += m + v);
                    w && d.squash === !0 && "/" === u.slice(-1) && (u = u.slice(0, -1))
                } else {
                    if (null == g || $ && m !== !1) continue;
                    if (U(g) || (g = [g]), 0 === g.length) continue;
                    g = f(g, encodeURIComponent).join("&" + h + "="), u += (a ? "&" : "?") + (h + "=" + g), a = !0
                }
            }
            return u
        }, v.prototype.is = function (e, t) {
            return !0
        }, v.prototype.encode = function (e, t) {
            return e
        }, v.prototype.decode = function (e, t) {
            return e
        }, v.prototype.equals = function (e, t) {
            return e == t
        }, v.prototype.$subPattern = function () {
            var e = this.pattern.toString();
            return e.substr(1, e.length - 2)
        }, v.prototype.pattern = /.*/, v.prototype.toString = function () {
            return "{Type:" + this.name + "}"
        }, v.prototype.$normalize = function (e) {
            return this.is(e) ? e : this.decode(e)
        }, v.prototype.$asArray = function (e, t) {
            function i(e, t) {
                function i(e, t) {
                    return function () {
                        return e[t].apply(e, arguments)
                    }
                }

                function r(e) {
                    return U(e) ? e : L(e) ? [e] : []
                }

                function s(e) {
                    switch (e.length) {
                        case 0:
                            return n;
                        case 1:
                            return "auto" === t ? e[0] : e;
                        default:
                            return e
                    }
                }

                function a(e) {
                    return !e
                }

                function o(e, t) {
                    return function (n) {
                        if (U(n) && 0 === n.length) return n;
                        n = r(n);
                        var i = f(n, e);
                        return t === !0 ? 0 === p(i, a).length : s(i)
                    }
                }

                function l(e) {
                    return function (t, n) {
                        var i = r(t),
                            s = r(n);
                        if (i.length !== s.length) return !1;
                        for (var a = 0; a < i.length; a++)
                            if (!e(i[a], s[a])) return !1;
                        return !0
                    }
                }
                this.encode = o(i(e, "encode")), this.decode = o(i(e, "decode")), this.is = o(i(e, "is"), !0), this.equals = l(i(e, "equals")), this.pattern = e.pattern, this.$normalize = o(i(e, "$normalize")), this.name = e.name, this.$arrayMode = t
            }
            if (!e) return this;
            if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
            return new i(this, e)
        }, t.module("ui.router.util").provider("$urlMatcherFactory", w), t.module("ui.router.util").run(["$urlMatcherFactory", function (e) {}]), y.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", y), x.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").factory("$stateParams", function () {
            return {}
        }).constant("$state.runtime", {
            autoinject: !0
        }).provider("$state", x).run(["$injector", function (e) {
            e.get("$state.runtime").autoinject && e.get("$state")
        }]), b.$inject = [], t.module("ui.router.state").provider("$view", b), t.module("ui.router.state").provider("$uiViewScroll", T), M.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate", "$q"], C.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", M), t.module("ui.router.state").directive("uiView", C), P.$inject = ["$state", "$timeout"], F.$inject = ["$state", "$timeout"], _.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", P).directive("uiSrefActive", _).directive("uiSrefActiveEq", _).directive("uiState", F), j.$inject = ["$state"], R.$inject = ["$state"], t.module("ui.router.state").filter("isState", j).filter("includedByState", R)
    }(window, window.angular), define("uirouter", ["angular"], function () {}),
    function (e, t) {
        "use strict";

        function n(e, t, n) {
            if (!e) throw $e("areq", "Argument '{0}' is {1}", t || "?", n || "required");
            return e
        }

        function i(e, t) {
            return e || t ? e ? t ? (Y(e) && (e = e.join(" ")), Y(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
        }

        function r(e) {
            var t = {};
            return e && (e.to || e.from) && (t.to = e.to, t.from = e.from), t
        }

        function s(e, t, n) {
            var i = "";
            return e = Y(e) ? e : e && ee(e) && e.length ? e.split(/\s+/) : [], W(e, function (e, r) {
                e && e.length > 0 && (i += r > 0 ? " " : "", i += n ? t + e : e + t)
            }), i
        }

        function a(e, t) {
            var n = e.indexOf(t);
            t >= 0 && e.splice(n, 1)
        }

        function o(e) {
            if (e instanceof ne) switch (e.length) {
                case 0:
                    return e;
                case 1:
                    if (e[0].nodeType === L) return e;
                    break;
                default:
                    return ne(l(e))
            }
            return e.nodeType === L ? ne(e) : void 0
        }

        function l(e) {
            if (!e[0]) return e;
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.nodeType == L) return n
            }
        }

        function u(e, t, n) {
            W(t, function (t) {
                e.addClass(t, n)
            })
        }

        function c(e, t, n) {
            W(t, function (t) {
                e.removeClass(t, n)
            })
        }

        function h(e) {
            return function (t, n) {
                n.addClass && (u(e, t, n.addClass), n.addClass = null), n.removeClass && (c(e, t, n.removeClass), n.removeClass = null)
            }
        }

        function d(e) {
            if (e = e || {}, !e.$$prepared) {
                var t = e.domOperation || ie;
                e.domOperation = function () {
                    e.$$domOperationFired = !0, t(), t = ie
                }, e.$$prepared = !0
            }
            return e
        }

        function p(e, t) {
            f(e, t), $(e, t)
        }

        function f(e, t) {
            t.from && (e.css(t.from), t.from = null)
        }

        function $(e, t) {
            t.to && (e.css(t.to), t.to = null)
        }

        function m(e, t, n) {
            var i = t.options || {},
                r = n.options || {},
                s = (i.addClass || "") + " " + (r.addClass || ""),
                a = (i.removeClass || "") + " " + (r.removeClass || ""),
                o = g(e.attr("class"), s, a);
            r.preparationClasses && (i.preparationClasses = M(r.preparationClasses, i.preparationClasses), delete r.preparationClasses);
            var l = i.domOperation !== ie ? i.domOperation : null;
            return B(i, r), l && (i.domOperation = l), o.addClass ? i.addClass = o.addClass : i.addClass = null, o.removeClass ? i.removeClass = o.removeClass : i.removeClass = null, t.addClass = i.addClass, t.removeClass = i.removeClass, i
        }

        function g(e, t, n) {
            function i(e) {
                ee(e) && (e = e.split(" "));
                var t = {};
                return W(e, function (e) {
                    e.length && (t[e] = !0)
                }), t
            }
            var r = 1,
                s = -1,
                a = {};
            e = i(e), t = i(t), W(t, function (e, t) {
                a[t] = r
            }), n = i(n), W(n, function (e, t) {
                a[t] = a[t] === r ? null : s
            });
            var o = {
                addClass: "",
                removeClass: ""
            };
            return W(a, function (t, n) {
                var i, a;
                t === r ? (i = "addClass", a = !e[n] || e[n + N]) : t === s && (i = "removeClass", a = e[n] || e[n + D]), a && (o[i].length && (o[i] += " "), o[i] += n)
            }), o
        }

        function v(e) {
            return e instanceof ne ? e[0] : e
        }

        function w(e, t, n) {
            var i = "";
            t && (i = s(t, z, !0)), n.addClass && (i = M(i, s(n.addClass, D))), n.removeClass && (i = M(i, s(n.removeClass, N))), i.length && (n.preparationClasses = i, e.addClass(i))
        }

        function y(e, t) {
            t.preparationClasses && (e.removeClass(t.preparationClasses), t.preparationClasses = null), t.activeClasses && (e.removeClass(t.activeClasses), t.activeClasses = null)
        }

        function x(e, t) {
            var n = t ? "-" + t + "s" : "";
            return T(e, [pe, n]), [pe, n]
        }

        function b(e, t) {
            var n = t ? "paused" : "",
                i = j + ue;
            return T(e, [i, n]), [i, n]
        }

        function T(e, t) {
            var n = t[0],
                i = t[1];
            e.style[n] = i
        }

        function M(e, t) {
            return e ? t ? e + " " + t : e : t
        }

        function C(e) {
            return [de, e + "s"]
        }

        function E(e, t) {
            var n = t ? he : pe;
            return [n, e + "s"]
        }

        function I(e, t, n) {
            var i = Object.create(null),
                r = e.getComputedStyle(t) || {};
            return W(n, function (e, t) {
                var n = r[e];
                if (n) {
                    var s = n.charAt(0);
                    ("-" === s || "+" === s || s >= 0) && (n = S(n)), 0 === n && (n = null), i[t] = n
                }
            }), i
        }

        function S(e) {
            var t = 0,
                n = e.split(/\s*,\s*/);
            return W(n, function (e) {
                "s" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e
            }), t
        }

        function O(e) {
            return 0 === e || null != e
        }

        function k(e, t) {
            var n = F,
                i = e + "s";
            return t ? n += re : i += " linear all", [n, i]
        }

        function A() {
            var e = Object.create(null);
            return {
                flush: function () {
                    e = Object.create(null)
                },
                count: function (t) {
                    var n = e[t];
                    return n ? n.total : 0
                },
                get: function (t) {
                    var n = e[t];
                    return n && n.value
                },
                put: function (t, n) {
                    e[t] ? e[t].total++ : e[t] = {
                        total: 1,
                        value: n
                    }
                }
            }
        }

        function P(e, t, n) {
            W(n, function (n) {
                e[n] = K(e[n]) ? e[n] : t.style.getPropertyValue(n)
            })
        }
        var F, _, j, R, L = 1,
            D = "-add",
            N = "-remove",
            z = "ng-",
            U = "-active",
            X = "-prepare",
            H = "ng-animate",
            V = "$$ngAnimateChildren",
            q = "";
        void 0 === e.ontransitionend && void 0 !== e.onwebkittransitionend ? (q = "-webkit-", F = "WebkitTransition", _ = "webkitTransitionEnd transitionend") : (F = "transition", _ = "transitionend"), void 0 === e.onanimationend && void 0 !== e.onwebkitanimationend ? (q = "-webkit-", j = "WebkitAnimation", R = "webkitAnimationEnd animationend") : (j = "animation", R = "animationend");
        var G, B, W, Y, K, Z, J, Q, ee, te, ne, ie, re = "Duration",
            se = "Property",
            ae = "Delay",
            oe = "TimingFunction",
            le = "IterationCount",
            ue = "PlayState",
            ce = 9999,
            he = j + ae,
            de = j + re,
            pe = F + ae,
            fe = F + re,
            $e = t.$$minErr("ng"),
            me = ["$$rAF", function (e) {
                function t(e) {
                    i = i.concat(e), n()
                }

                function n() {
                    if (i.length) {
                        for (var t = i.shift(), s = 0; s < t.length; s++) t[s]();
                        r || e(function () {
                            r || n()
                        })
                    }
                }
                var i, r;
                return i = t.queue = [], t.waitUntilQuiet = function (t) {
                    r && r(), r = e(function () {
                        r = null, t(), n()
                    })
                }, t
            }],
            ge = ["$interpolate", function (e) {
                return {
                    link: function (t, n, i) {
                        function r(e) {
                            e = "on" === e || "true" === e, n.data(V, e)
                        }
                        var s = i.ngAnimateChildren;
                        ee(s) && 0 === s.length ? n.data(V, !0) : (r(e(s)(t)), i.$observe("ngAnimateChildren", r))
                    }
                }
            }],
            ve = "$$animateCss",
            we = 1e3,
            ye = 3,
            xe = 1.5,
            be = {
                transitionDuration: fe,
                transitionDelay: pe,
                transitionProperty: F + se,
                animationDuration: de,
                animationDelay: he,
                animationIterationCount: j + le
            },
            Te = {
                transitionDuration: fe,
                transitionDelay: pe,
                animationDuration: de,
                animationDelay: he
            },
            Me = ["$animateProvider", function (e) {
                var t = A(),
                    n = A();
                this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (e, i, o, l, u, c, m, g) {
                    function w(e, t) {
                        var n = "$$ngAnimateParentKey",
                            i = e.parentNode,
                            r = i[n] || (i[n] = ++X);
                        return r + "-" + e.getAttribute("class") + "-" + t
                    }

                    function y(n, i, r, s) {
                        var a = t.get(r);
                        return a || (a = I(e, n, s), "infinite" === a.animationIterationCount && (a.animationIterationCount = 1)), t.put(r, a), a
                    }

                    function M(r, a, o, l) {
                        var u;
                        if (t.count(o) > 0 && (u = n.get(o), !u)) {
                            var c = s(a, "-stagger");
                            i.addClass(r, c), u = I(e, r, l), u.animationDuration = Math.max(u.animationDuration, 0), u.transitionDuration = Math.max(u.transitionDuration, 0), i.removeClass(r, c), n.put(o, u)
                        }
                        return u || {}
                    }

                    function S(e) {
                        H.push(e), m.waitUntilQuiet(function () {
                            t.flush(), n.flush();
                            for (var e = u(), i = 0; i < H.length; i++) H[i](e);
                            H.length = 0
                        })
                    }

                    function A(e, t, n) {
                        var i = y(e, t, n, be),
                            r = i.animationDelay,
                            s = i.transitionDelay;
                        return i.maxDelay = r && s ? Math.max(r, s) : r || s, i.maxDuration = Math.max(i.animationDuration * i.animationIterationCount, i.transitionDuration), i
                    }
                    var L = h(i),
                        X = 0,
                        H = [];
                    return function (e, n) {
                        function u() {
                            m()
                        }

                        function h() {
                            m(!0)
                        }

                        function m(t) {
                            if (!(K || J && Z)) {
                                K = !0, Z = !1, V.$$skipPreparationClasses || i.removeClass(e, be), i.removeClass(e, Ce), b(B, !1), x(B, !1), W(ue, function (e) {
                                    B.style[e[0]] = ""
                                }), L(e, V), p(e, V), Object.keys(q).length && W(q, function (e, t) {
                                    e ? B.style.setProperty(t, e) : B.style.removeProperty(t)
                                }), V.onDone && V.onDone(), pe && pe.length && e.off(pe.join(" "), X);
                                var n = e.data(ve);
                                n && (l.cancel(n[0].timer), e.removeData(ve)), Q && Q.complete(!t)
                            }
                        }

                        function y(e) {
                            Ne.blockTransition && x(B, e), Ne.blockKeyframeAnimation && b(B, !!e)
                        }

                        function I() {
                            return Q = new o({
                                end: u,
                                cancel: h
                            }), S(ie), m(), {
                                $$willAnimate: !1,
                                start: function () {
                                    return Q
                                },
                                end: u
                            }
                        }

                        function X(e) {
                            e.stopPropagation();
                            var t = e.originalEvent || e,
                                n = t.$manualTimeStamp || Date.now(),
                                i = parseFloat(t.elapsedTime.toFixed(ye));
                            Math.max(n - le, 0) >= ne && i >= re && (J = !0, m())
                        }

                        function H() {
                            function t() {
                                if (!K) {
                                    if (y(!1), W(ue, function (e) {
                                            var t = e[0],
                                                n = e[1];
                                            B.style[t] = n
                                        }), L(e, V), i.addClass(e, Ce), Ne.recalculateTimingStyles) {
                                        if (Me = B.className + " " + be, Se = w(B, Me), Le = A(B, Me, Se), De = Le.maxDelay, te = Math.max(De, 0), re = Le.maxDuration, 0 === re) return void m();
                                        Ne.hasTransitions = Le.transitionDuration > 0, Ne.hasAnimations = Le.animationDuration > 0
                                    }
                                    if (Ne.applyAnimationDelay && (De = "boolean" != typeof V.delay && O(V.delay) ? parseFloat(V.delay) : De, te = Math.max(De, 0), Le.animationDelay = De, ze = E(De, !0), ue.push(ze), B.style[ze[0]] = ze[1]), ne = te * we, ae = re * we, V.easing) {
                                        var t, r = V.easing;
                                        Ne.hasTransitions && (t = F + oe, ue.push([t, r]), B.style[t] = r), Ne.hasAnimations && (t = j + oe, ue.push([t, r]), B.style[t] = r)
                                    }
                                    Le.transitionDuration && pe.push(_), Le.animationDuration && pe.push(R), le = Date.now();
                                    var s = ne + xe * ae,
                                        a = le + s,
                                        o = e.data(ve) || [],
                                        u = !0;
                                    if (o.length) {
                                        var c = o[0];
                                        u = a > c.expectedEndTime, u ? l.cancel(c.timer) : o.push(m)
                                    }
                                    if (u) {
                                        var h = l(n, s, !1);
                                        o[0] = {
                                            timer: h,
                                            expectedEndTime: a
                                        }, o.push(m), e.data(ve, o)
                                    }
                                    pe.length && e.on(pe.join(" "), X), V.to && (V.cleanupStyles && P(q, B, Object.keys(V.to)), $(e, V))
                                }
                            }

                            function n() {
                                var t = e.data(ve);
                                if (t) {
                                    for (var n = 1; n < t.length; n++) t[n]();
                                    e.removeData(ve)
                                }
                            }
                            if (!K) {
                                if (!B.parentNode) return void m();
                                var r = function (e) {
                                        if (J) Z && e && (Z = !1, m());
                                        else if (Z = !e, Le.animationDuration) {
                                            var t = b(B, Z);
                                            Z ? ue.push(t) : a(ue, t)
                                        }
                                    },
                                    s = je > 0 && (Le.transitionDuration && 0 === Oe.transitionDuration || Le.animationDuration && 0 === Oe.animationDuration) && Math.max(Oe.animationDelay, Oe.transitionDelay);
                                s ? l(t, Math.floor(s * je * we), !1) : t(), ee.resume = function () {
                                    r(!0)
                                }, ee.pause = function () {
                                    r(!1)
                                }
                            }
                        }
                        var V = n || {};
                        V.$$prepared || (V = d(G(V)));
                        var q = {},
                            B = v(e);
                        if (!B || !B.parentNode || !g.enabled()) return I();
                        var K, Z, J, Q, ee, te, ne, re, ae, le, ue = [],
                            he = e.attr("class"),
                            de = r(V),
                            pe = [];
                        if (0 === V.duration || !c.animations && !c.transitions) return I();
                        var fe = V.event && Y(V.event) ? V.event.join(" ") : V.event,
                            $e = fe && V.structural,
                            me = "",
                            ge = "";
                        $e ? me = s(fe, z, !0) : fe && (me = fe), V.addClass && (ge += s(V.addClass, D)), V.removeClass && (ge.length && (ge += " "), ge += s(V.removeClass, N)), V.applyClassesEarly && ge.length && L(e, V);
                        var be = [me, ge].join(" ").trim(),
                            Me = he + " " + be,
                            Ce = s(be, U),
                            Ee = de.to && Object.keys(de.to).length > 0,
                            Ie = (V.keyframeStyle || "").length > 0;
                        if (!Ie && !Ee && !be) return I();
                        var Se, Oe;
                        if (V.stagger > 0) {
                            var ke = parseFloat(V.stagger);
                            Oe = {
                                transitionDelay: ke,
                                animationDelay: ke,
                                transitionDuration: 0,
                                animationDuration: 0
                            }
                        } else Se = w(B, Me), Oe = M(B, be, Se, Te);
                        V.$$skipPreparationClasses || i.addClass(e, be);
                        var Ae;
                        if (V.transitionStyle) {
                            var Pe = [F, V.transitionStyle];
                            T(B, Pe), ue.push(Pe)
                        }
                        if (V.duration >= 0) {
                            Ae = B.style[F].length > 0;
                            var Fe = k(V.duration, Ae);
                            T(B, Fe), ue.push(Fe)
                        }
                        if (V.keyframeStyle) {
                            var _e = [j, V.keyframeStyle];
                            T(B, _e), ue.push(_e)
                        }
                        var je = Oe ? V.staggerIndex >= 0 ? V.staggerIndex : t.count(Se) : 0,
                            Re = 0 === je;
                        Re && !V.skipBlocking && x(B, ce);
                        var Le = A(B, Me, Se),
                            De = Le.maxDelay;
                        te = Math.max(De, 0), re = Le.maxDuration;
                        var Ne = {};
                        if (Ne.hasTransitions = Le.transitionDuration > 0, Ne.hasAnimations = Le.animationDuration > 0, Ne.hasTransitionAll = Ne.hasTransitions && "all" == Le.transitionProperty, Ne.applyTransitionDuration = Ee && (Ne.hasTransitions && !Ne.hasTransitionAll || Ne.hasAnimations && !Ne.hasTransitions), Ne.applyAnimationDuration = V.duration && Ne.hasAnimations, Ne.applyTransitionDelay = O(V.delay) && (Ne.applyTransitionDuration || Ne.hasTransitions), Ne.applyAnimationDelay = O(V.delay) && Ne.hasAnimations, Ne.recalculateTimingStyles = ge.length > 0, (Ne.applyTransitionDuration || Ne.applyAnimationDuration) && (re = V.duration ? parseFloat(V.duration) : re, Ne.applyTransitionDuration && (Ne.hasTransitions = !0, Le.transitionDuration = re, Ae = B.style[F + se].length > 0, ue.push(k(re, Ae))), Ne.applyAnimationDuration && (Ne.hasAnimations = !0, Le.animationDuration = re, ue.push(C(re)))), 0 === re && !Ne.recalculateTimingStyles) return I();
                        if (null != V.delay) {
                            var ze;
                            "boolean" != typeof V.delay && (ze = parseFloat(V.delay), te = Math.max(ze, 0)), Ne.applyTransitionDelay && ue.push(E(ze)), Ne.applyAnimationDelay && ue.push(E(ze, !0))
                        }
                        return null == V.duration && Le.transitionDuration > 0 && (Ne.recalculateTimingStyles = Ne.recalculateTimingStyles || Re), ne = te * we, ae = re * we, V.skipBlocking || (Ne.blockTransition = Le.transitionDuration > 0, Ne.blockKeyframeAnimation = Le.animationDuration > 0 && Oe.animationDelay > 0 && 0 === Oe.animationDuration), V.from && (V.cleanupStyles && P(q, B, Object.keys(V.from)), f(e, V)), Ne.blockTransition || Ne.blockKeyframeAnimation ? y(re) : V.skipBlocking || x(B, !1), {
                            $$willAnimate: !0,
                            end: u,
                            start: function () {
                                return K ? void 0 : (ee = {
                                    end: u,
                                    cancel: h,
                                    resume: null,
                                    pause: null
                                }, Q = new o(ee), S(H), Q)
                            }
                        }
                    }
                }]
            }],
            Ce = ["$$animationProvider", function (e) {
                function t(e) {
                    return e.parentNode && 11 === e.parentNode.nodeType
                }
                e.drivers.push("$$animateCssDriver");
                var n = "ng-animate-shim",
                    i = "ng-anchor",
                    r = "ng-anchor-out",
                    s = "ng-anchor-in";
                this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (e, a, o, l, u, c, d) {
                    function p(e) {
                        return e.replace(/\bng-\S+\b/g, "")
                    }

                    function f(e, t) {
                        return ee(e) && (e = e.split(" ")), ee(t) && (t = t.split(" ")), e.filter(function (e) {
                            return -1 === t.indexOf(e)
                        }).join(" ")
                    }

                    function $(t, a, l) {
                        function u(e) {
                            var t = {},
                                n = v(e).getBoundingClientRect();
                            return W(["width", "height", "top", "left"], function (e) {
                                var i = n[e];
                                switch (e) {
                                    case "top":
                                        i += w.scrollTop;
                                        break;
                                    case "left":
                                        i += w.scrollLeft
                                }
                                t[e] = Math.floor(i) + "px"
                            }), t
                        }

                        function c() {
                            var t = e(m, {
                                addClass: r,
                                delay: !0,
                                from: u(a)
                            });
                            return t.$$willAnimate ? t : null
                        }

                        function h(e) {
                            return e.attr("class") || ""
                        }

                        function d() {
                            var t = p(h(l)),
                                n = f(t, g),
                                i = f(g, t),
                                a = e(m, {
                                    to: u(l),
                                    addClass: s + " " + n,
                                    removeClass: r + " " + i,
                                    delay: !0
                                });
                            return a.$$willAnimate ? a : null
                        }

                        function $() {
                            m.remove(), a.removeClass(n), l.removeClass(n)
                        }
                        var m = ne(v(a).cloneNode(!0)),
                            g = p(h(m));
                        a.addClass(n), l.addClass(n), m.addClass(i), x.append(m);
                        var y, b = c();
                        if (!b && (y = d(), !y)) return $();
                        var T = b || y;
                        return {
                            start: function () {
                                function e() {
                                    n && n.end()
                                }
                                var t, n = T.start();
                                return n.done(function () {
                                    return n = null, !y && (y = d()) ? (n = y.start(), n.done(function () {
                                        n = null, $(), t.complete()
                                    }), n) : ($(), void t.complete())
                                }), t = new o({
                                    end: e,
                                    cancel: e
                                })
                            }
                        }
                    }

                    function m(e, t, n, i) {
                        var r = g(e, ie),
                            s = g(t, ie),
                            a = [];
                        return W(i, function (e) {
                            var t = e.out,
                                i = e["in"],
                                r = $(n, t, i);
                            r && a.push(r)
                        }), r || s || 0 !== a.length ? {
                            start: function () {
                                function e() {
                                    W(t, function (e) {
                                        e.end()
                                    })
                                }
                                var t = [];
                                r && t.push(r.start()), s && t.push(s.start()), W(a, function (e) {
                                    t.push(e.start())
                                });
                                var n = new o({
                                    end: e,
                                    cancel: e
                                });
                                return o.all(t, function (e) {
                                    n.complete(e)
                                }), n
                            }
                        } : void 0
                    }

                    function g(t) {
                        var n = t.element,
                            i = t.options || {};
                        t.structural && (i.event = t.event, i.structural = !0, i.applyClassesEarly = !0, "leave" === t.event && (i.onDone = i.domOperation)), i.preparationClasses && (i.event = M(i.event, i.preparationClasses));
                        var r = e(n, i);
                        return r.$$willAnimate ? r : null
                    }
                    if (!u.animations && !u.transitions) return ie;
                    var w = d[0].body,
                        y = v(l),
                        x = ne(t(y) || w.contains(y) ? y : w);
                    h(c);
                    return function (e) {
                        return e.from && e.to ? m(e.from, e.to, e.classes, e.anchors) : g(e)
                    }
                }]
            }],
            Ee = ["$animateProvider", function (e) {
                this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (t, n, i) {
                    function r(n) {
                        n = Y(n) ? n : n.split(" ");
                        for (var i = [], r = {}, s = 0; s < n.length; s++) {
                            var a = n[s],
                                o = e.$$registeredAnimations[a];
                            o && !r[a] && (i.push(t.get(o)), r[a] = !0)
                        }
                        return i
                    }
                    var s = h(i);
                    return function (e, t, i, a) {
                        function o() {
                            a.domOperation(), s(e, a)
                        }

                        function l() {
                            f = !0, o(), p(e, a)
                        }

                        function u(e, t, i, r, s) {
                            var a;
                            switch (i) {
                                case "animate":
                                    a = [t, r.from, r.to, s];
                                    break;
                                case "setClass":
                                    a = [t, g, v, s];
                                    break;
                                case "addClass":
                                    a = [t, g, s];
                                    break;
                                case "removeClass":
                                    a = [t, v, s];
                                    break;
                                default:
                                    a = [t, s]
                            }
                            a.push(r);
                            var o = e.apply(e, a);
                            if (o)
                                if (J(o.start) && (o = o.start()), o instanceof n) o.done(s);
                                else if (J(o)) return o;
                            return ie
                        }

                        function c(e, t, i, r, s) {
                            var a = [];
                            return W(r, function (r) {
                                var o = r[s];
                                o && a.push(function () {
                                    var r, s, a = !1,
                                        l = function (e) {
                                            a || (a = !0, (s || ie)(e), r.complete(!e))
                                        };
                                    return r = new n({
                                        end: function () {
                                            l()
                                        },
                                        cancel: function () {
                                            l(!0)
                                        }
                                    }), s = u(o, e, t, i, function (e) {
                                        var t = e === !1;
                                        l(t)
                                    }), r
                                })
                            }), a
                        }

                        function h(e, t, i, r, s) {
                            var a = c(e, t, i, r, s);
                            if (0 === a.length) {
                                var o, l;
                                "beforeSetClass" === s ? (o = c(e, "removeClass", i, r, "beforeRemoveClass"), l = c(e, "addClass", i, r, "beforeAddClass")) : "setClass" === s && (o = c(e, "removeClass", i, r, "removeClass"), l = c(e, "addClass", i, r, "addClass")), o && (a = a.concat(o)), l && (a = a.concat(l))
                            }
                            if (0 !== a.length) return function (e) {
                                var t = [];
                                return a.length && W(a, function (e) {
                                        t.push(e())
                                    }), t.length ? n.all(t, e) : e(),
                                    function (e) {
                                        W(t, function (t) {
                                            e ? t.cancel() : t.end()
                                        })
                                    }
                            }
                        }
                        var f = !1;
                        3 === arguments.length && Q(i) && (a = i, i = null), a = d(a), i || (i = e.attr("class") || "", a.addClass && (i += " " + a.addClass), a.removeClass && (i += " " + a.removeClass));
                        var $, m, g = a.addClass,
                            v = a.removeClass,
                            w = r(i);
                        if (w.length) {
                            var y, x;
                            "leave" == t ? (x = "leave", y = "afterLeave") : (x = "before" + t.charAt(0).toUpperCase() + t.substr(1), y = t), "enter" !== t && "move" !== t && ($ = h(e, t, a, w, x)), m = h(e, t, a, w, y)
                        }
                        if ($ || m) {
                            var b;
                            return {
                                $$willAnimate: !0,
                                end: function () {
                                    return b ? b.end() : (l(), b = new n, b.complete(!0)), b
                                },
                                start: function () {
                                    function e(e) {
                                        l(e), b.complete(e)
                                    }

                                    function t(t) {
                                        f || ((i || ie)(t), e(t))
                                    }
                                    if (b) return b;
                                    b = new n;
                                    var i, r = [];
                                    return $ && r.push(function (e) {
                                        i = $(e)
                                    }), r.length ? r.push(function (e) {
                                        o(), e(!0)
                                    }) : o(), m && r.push(function (e) {
                                        i = m(e)
                                    }), b.setHost({
                                        end: function () {
                                            t()
                                        },
                                        cancel: function () {
                                            t(!0)
                                        }
                                    }), n.chain(r, e), b
                                }
                            }
                        }
                    }
                }]
            }],
            Ie = ["$$animationProvider", function (e) {
                e.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function (e, t) {
                    function n(t) {
                        var n = t.element,
                            i = t.event,
                            r = t.options,
                            s = t.classes;
                        return e(n, i, s, r)
                    }
                    return function (e) {
                        if (e.from && e.to) {
                            var i = n(e.from),
                                r = n(e.to);
                            if (!i && !r) return;
                            return {
                                start: function () {
                                    function e() {
                                        return function () {
                                            W(s, function (e) {
                                                e.end()
                                            })
                                        }
                                    }

                                    function n(e) {
                                        a.complete(e)
                                    }
                                    var s = [];
                                    i && s.push(i.start()), r && s.push(r.start()), t.all(s, n);
                                    var a = new t({
                                        end: e(),
                                        cancel: e()
                                    });
                                    return a
                                }
                            }
                        }
                        return n(e)
                    }
                }]
            }],
            Se = "data-ng-animate",
            Oe = "$ngAnimatePin",
            ke = ["$animateProvider", function (t) {
                function i(e) {
                    if (!e) return null;
                    var t = e.split(f),
                        n = Object.create(null);
                    return W(t, function (e) {
                        n[e] = !0
                    }), n
                }

                function r(e, t) {
                    if (e && t) {
                        var n = i(t);
                        return e.split(f).some(function (e) {
                            return n[e]
                        })
                    }
                }

                function s(e, t, n, i) {
                    return $[e].some(function (e) {
                        return e(t, n, i)
                    })
                }

                function a(e, t) {
                    var n = (e.addClass || "").length > 0,
                        i = (e.removeClass || "").length > 0;
                    return t ? n && i : n || i
                }
                var u = 1,
                    c = 2,
                    f = " ",
                    $ = this.rules = {
                        skip: [],
                        cancel: [],
                        join: []
                    };
                $.join.push(function (e, t, n) {
                    return !t.structural && a(t)
                }), $.skip.push(function (e, t, n) {
                    return !t.structural && !a(t)
                }), $.skip.push(function (e, t, n) {
                    return "leave" == n.event && t.structural
                }), $.skip.push(function (e, t, n) {
                    return n.structural && n.state === c && !t.structural
                }), $.cancel.push(function (e, t, n) {
                    return n.structural && t.structural
                }), $.cancel.push(function (e, t, n) {
                    return n.state === c && t.structural
                }), $.cancel.push(function (e, t, n) {
                    if (n.structural) return !1;
                    var i = t.addClass,
                        s = t.removeClass,
                        a = n.addClass,
                        o = n.removeClass;
                    return te(i) && te(s) || te(a) && te(o) ? !1 : r(i, o) || r(s, a)
                }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (i, r, f, $, g, x, b, T, M, C) {
                    function E() {
                        var e = !1;
                        return function (t) {
                            e ? t() : r.$$postDigest(function () {
                                e = !0, t()
                            })
                        }
                    }

                    function I(e, t) {
                        return m(e, t, {})
                    }

                    function S(e, t, n) {
                        var i = v(t),
                            r = v(e),
                            s = [],
                            a = X[n];
                        return a && W(a, function (e) {
                            ie.call(e.node, i) ? s.push(e.callback) : "leave" === n && ie.call(e.node, r) && s.push(e.callback)
                        }), s
                    }

                    function O(e, t, n) {
                        var i = l(t);
                        return e.filter(function (e) {
                            var t = e.node === i && (!n || e.callback === n);
                            return !t
                        })
                    }

                    function k(e, t) {
                        "close" !== e || t[0].parentNode || re.off(t)
                    }

                    function A(e, t, n) {
                        function l(t, n, r, s) {
                            C(function () {
                                var t = S(g, e, n);
                                t.length ? i(function () {
                                    W(t, function (t) {
                                        t(e, r, s)
                                    }), k(r, e)
                                }) : k(r, e)
                            }), t.progress(n, r, s)
                        }

                        function h(t) {
                            y(e, T), J(e, T), p(e, T), T.domOperation(), M.complete(!t)
                        }
                        var f, g, T = G(n);
                        e = o(e), e && (f = v(e), g = e.parent()), T = d(T);
                        var M = new b,
                            C = E();
                        if (Y(T.addClass) && (T.addClass = T.addClass.join(" ")), T.addClass && !ee(T.addClass) && (T.addClass = null), Y(T.removeClass) && (T.removeClass = T.removeClass.join(" ")), T.removeClass && !ee(T.removeClass) && (T.removeClass = null), T.from && !Q(T.from) && (T.from = null), T.to && !Q(T.to) && (T.to = null), !f) return h(), M;
                        var O = [f.className, T.addClass, T.removeClass].join(" ");
                        if (!q(O)) return h(), M;
                        var A = ["enter", "move", "leave"].indexOf(t) >= 0,
                            _ = $[0].hidden,
                            L = !z || _ || N.get(f),
                            U = !L && D.get(f) || {},
                            X = !!U.state;
                        if (L || X && U.state == u || (L = !j(e, g, t)), L) return _ && l(M, t, "start"), h(), _ && l(M, t, "close"), M;
                        A && P(e);
                        var H = {
                            structural: A,
                            element: e,
                            event: t,
                            addClass: T.addClass,
                            removeClass: T.removeClass,
                            close: h,
                            options: T,
                            runner: M
                        };
                        if (X) {
                            var V = s("skip", e, H, U);
                            if (V) return U.state === c ? (h(), M) : (m(e, U, H), U.runner);
                            var B = s("cancel", e, H, U);
                            if (B)
                                if (U.state === c) U.runner.end();
                                else {
                                    if (!U.structural) return m(e, U, H), U.runner;
                                    U.close()
                                }
                            else {
                                var K = s("join", e, H, U);
                                if (K) {
                                    if (U.state !== c) return w(e, A ? t : null, T), t = H.event = U.event, T = m(e, U, H), U.runner;
                                    I(e, H)
                                }
                            }
                        } else I(e, H);
                        var Z = H.structural;
                        if (Z || (Z = "animate" === H.event && Object.keys(H.options.to || {}).length > 0 || a(H)), !Z) return h(), F(e), M;
                        var te = (U.counter || 0) + 1;
                        return H.counter = te, R(e, u, H), r.$$postDigest(function () {
                            var n = D.get(f),
                                i = !n;
                            n = n || {};
                            var r = e.parent() || [],
                                s = r.length > 0 && ("animate" === n.event || n.structural || a(n));
                            if (i || n.counter !== te || !s) return i && (J(e, T), p(e, T)), (i || A && n.event !== t) && (T.domOperation(), M.end()), void(s || F(e));
                            t = !n.structural && a(n, !0) ? "setClass" : n.event, R(e, c);
                            var o = x(e, t, n.options);
                            M.setHost(o), l(M, t, "start", {}), o.done(function (n) {
                                h(!n);
                                var i = D.get(f);
                                i && i.counter === te && F(v(e)), l(M, t, "close", {})
                            })
                        }), M
                    }

                    function P(e) {
                        var t = v(e),
                            n = t.querySelectorAll("[" + Se + "]");
                        W(n, function (e) {
                            var t = parseInt(e.getAttribute(Se)),
                                n = D.get(e);
                            if (n) switch (t) {
                                case c:
                                    n.runner.end();
                                case u:
                                    D.remove(e)
                            }
                        })
                    }

                    function F(e) {
                        var t = v(e);
                        t.removeAttribute(Se), D.remove(t)
                    }

                    function _(e, t) {
                        return v(e) === v(t)
                    }

                    function j(e, t, n) {
                        var i, r = ne($[0].body),
                            s = _(e, r) || "HTML" === e[0].nodeName,
                            a = _(e, f),
                            o = !1,
                            l = N.get(v(e)),
                            u = ne.data(e[0], Oe);
                        for (u && (t = u), t = v(t); t && (a || (a = _(t, f)), t.nodeType === L);) {
                            var c = D.get(t) || {};
                            if (!o) {
                                var h = N.get(t);
                                if (h === !0 && l !== !1) {
                                    l = !0;
                                    break
                                }
                                h === !1 && (l = !1), o = c.structural
                            }
                            if (te(i) || i === !0) {
                                var d = ne.data(t, V);
                                K(d) && (i = d)
                            }
                            if (o && i === !1) break;
                            if (s || (s = _(t, r)), s && a) break;
                            t = a || !(u = ne.data(t, Oe)) ? t.parentNode : v(u)
                        }
                        var p = (!o || i) && l !== !0;
                        return p && a && s
                    }

                    function R(e, t, n) {
                        n = n || {}, n.state = t;
                        var i = v(e);
                        i.setAttribute(Se, t);
                        var r = D.get(i),
                            s = r ? B(r, n) : n;
                        D.put(i, s)
                    }
                    var D = new g,
                        N = new g,
                        z = null,
                        U = r.$watch(function () {
                            return 0 === T.totalPendingRequests
                        }, function (e) {
                            e && (U(), r.$$postDigest(function () {
                                r.$$postDigest(function () {
                                    null === z && (z = !0)
                                })
                            }))
                        }),
                        X = Object.create(null),
                        H = t.classNameFilter(),
                        q = H ? function (e) {
                            return H.test(e)
                        } : function () {
                            return !0
                        },
                        J = h(M),
                        ie = e.Node.prototype.contains || function (e) {
                            return this === e || !!(16 & this.compareDocumentPosition(e))
                        },
                        re = {
                            on: function (e, t, n) {
                                var i = l(t);
                                X[e] = X[e] || [], X[e].push({
                                    node: i,
                                    callback: n
                                }), ne(t).on("$destroy", function () {
                                    var r = D.get(i);
                                    r || re.off(e, t, n)
                                })
                            },
                            off: function (e, t, n) {
                                if (1 !== arguments.length || ee(arguments[0])) {
                                    var i = X[e];
                                    i && (X[e] = 1 === arguments.length ? null : O(i, t, n))
                                } else {
                                    t = arguments[0];
                                    for (var r in X) X[r] = O(X[r], t)
                                }
                            },
                            pin: function (e, t) {
                                n(Z(e), "element", "not an element"), n(Z(t), "parentElement", "not an element"), e.data(Oe, t)
                            },
                            push: function (e, t, n, i) {
                                return n = n || {}, n.domOperation = i, A(e, t, n)
                            },
                            enabled: function (e, t) {
                                var n = arguments.length;
                                if (0 === n) t = !!z;
                                else {
                                    var i = Z(e);
                                    if (i) {
                                        var r = v(e);
                                        1 === n ? t = !N.get(r) : N.put(r, !t)
                                    } else t = z = !!e
                                }
                                return t
                            }
                        };
                    return re
                }]
            }],
            Ae = ["$animateProvider", function (e) {
                function t(e, t) {
                    e.data(o, t)
                }

                function n(e) {
                    e.removeData(o)
                }

                function r(e) {
                    return e.data(o)
                }
                var s = "ng-animate-ref",
                    a = this.drivers = [],
                    o = "$$animationRunner";
                this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (e, o, l, u, c, f) {
                    function $(e) {
                        function t(e) {
                            if (e.processed) return e;
                            e.processed = !0;
                            var n = e.domNode,
                                i = n.parentNode;
                            s.put(n, e);
                            for (var a; i;) {
                                if (a = s.get(i)) {
                                    a.processed || (a = t(a));
                                    break
                                }
                                i = i.parentNode
                            }
                            return (a || r).children.push(e), e
                        }

                        function n(e) {
                            var t, n = [],
                                i = [];
                            for (t = 0; t < e.children.length; t++) i.push(e.children[t]);
                            var r = i.length,
                                s = 0,
                                a = [];
                            for (t = 0; t < i.length; t++) {
                                var o = i[t];
                                0 >= r && (r = s, s = 0, n.push(a), a = []), a.push(o.fn), o.children.forEach(function (e) {
                                    s++, i.push(e)
                                }), r--
                            }
                            return a.length && n.push(a), n
                        }
                        var i, r = {
                                children: []
                            },
                            s = new c;
                        for (i = 0; i < e.length; i++) {
                            var a = e[i];
                            s.put(a.domNode, e[i] = {
                                domNode: a.domNode,
                                fn: a.fn,
                                children: []
                            })
                        }
                        for (i = 0; i < e.length; i++) t(e[i]);
                        return n(r)
                    }
                    var m = [],
                        g = h(e);
                    return function (c, h, w) {
                        function y(e) {
                            var t = "[" + s + "]",
                                n = e.hasAttribute(s) ? [e] : e.querySelectorAll(t),
                                i = [];
                            return W(n, function (e) {
                                var t = e.getAttribute(s);
                                t && t.length && i.push(e)
                            }), i
                        }

                        function x(e) {
                            var t = [],
                                n = {};
                            W(e, function (e, i) {
                                var r = e.element,
                                    a = v(r),
                                    o = e.event,
                                    l = ["enter", "move"].indexOf(o) >= 0,
                                    u = e.structural ? y(a) : [];
                                if (u.length) {
                                    var c = l ? "to" : "from";
                                    W(u, function (e) {
                                        var t = e.getAttribute(s);
                                        n[t] = n[t] || {}, n[t][c] = {
                                            animationID: i,
                                            element: ne(e)
                                        }
                                    })
                                } else t.push(e)
                            });
                            var i = {},
                                r = {};
                            return W(n, function (n, s) {
                                var a = n.from,
                                    o = n.to;
                                if (!a || !o) {
                                    var l = a ? a.animationID : o.animationID,
                                        u = l.toString();
                                    return void(i[u] || (i[u] = !0, t.push(e[l])))
                                }
                                var c = e[a.animationID],
                                    h = e[o.animationID],
                                    d = a.animationID.toString();
                                if (!r[d]) {
                                    var p = r[d] = {
                                        structural: !0,
                                        beforeStart: function () {
                                            c.beforeStart(), h.beforeStart()
                                        },
                                        close: function () {
                                            c.close(), h.close()
                                        },
                                        classes: b(c.classes, h.classes),
                                        from: c,
                                        to: h,
                                        anchors: []
                                    };
                                    p.classes.length ? t.push(p) : (t.push(c), t.push(h))
                                }
                                r[d].anchors.push({
                                    out: a.element,
                                    "in": o.element
                                })
                            }), t
                        }

                        function b(e, t) {
                            e = e.split(" "), t = t.split(" ");
                            for (var n = [], i = 0; i < e.length; i++) {
                                var r = e[i];
                                if ("ng-" !== r.substring(0, 3))
                                    for (var s = 0; s < t.length; s++)
                                        if (r === t[s]) {
                                            n.push(r);
                                            break
                                        }
                            }
                            return n.join(" ")
                        }

                        function T(e) {
                            for (var t = a.length - 1; t >= 0; t--) {
                                var n = a[t],
                                    i = l.get(n),
                                    r = i(e);
                                if (r) return r
                            }
                        }

                        function M() {
                            c.addClass(H), A && e.addClass(c, A), P && (e.removeClass(c, P), P = null)
                        }

                        function C(e, t) {
                            function n(e) {
                                var n = r(e);
                                n && n.setHost(t)
                            }
                            e.from && e.to ? (n(e.from.element), n(e.to.element)) : n(e.element)
                        }

                        function E() {
                            var e = r(c);
                            !e || "leave" === h && w.$$domOperationFired || e.end()
                        }

                        function I(t) {
                            c.off("$destroy", E), n(c), g(c, w), p(c, w), w.domOperation(), A && e.removeClass(c, A), c.removeClass(H), O.complete(!t)
                        }
                        w = d(w);
                        var S = ["enter", "move", "leave"].indexOf(h) >= 0,
                            O = new u({
                                end: function () {
                                    I()
                                },
                                cancel: function () {
                                    I(!0)
                                }
                            });
                        if (!a.length) return I(), O;
                        t(c, O);
                        var k = i(c.attr("class"), i(w.addClass, w.removeClass)),
                            A = w.tempClasses;
                        A && (k += " " + A, w.tempClasses = null);
                        var P;
                        return S && (P = "ng-" + h + X, e.addClass(c, P)), m.push({
                            element: c,
                            classes: k,
                            event: h,
                            structural: S,
                            options: w,
                            beforeStart: M,
                            close: I
                        }), c.on("$destroy", E), m.length > 1 ? O : (o.$$postDigest(function () {
                            var e = [];
                            W(m, function (t) {
                                r(t.element) ? e.push(t) : t.close()
                            }), m.length = 0;
                            var t = x(e),
                                n = [];
                            W(t, function (e) {
                                n.push({
                                    domNode: v(e.from ? e.from.element : e.element),
                                    fn: function () {
                                        e.beforeStart();
                                        var t, n = e.close,
                                            i = e.anchors ? e.from.element || e.to.element : e.element;
                                        if (r(i)) {
                                            var s = T(e);
                                            s && (t = s.start)
                                        }
                                        if (t) {
                                            var a = t();
                                            a.done(function (e) {
                                                n(!e)
                                            }), C(e, a)
                                        } else n()
                                    }
                                })
                            }), f($(n))
                        }), O)
                    }
                }]
            }],
            Pe = ["$animate", "$rootScope", function (e, t) {
                return {
                    restrict: "A",
                    transclude: "element",
                    terminal: !0,
                    priority: 600,
                    link: function (t, n, i, r, s) {
                        var a, o;
                        t.$watchCollection(i.ngAnimateSwap || i["for"], function (i) {
                            a && e.leave(a), o && (o.$destroy(), o = null), (i || 0 === i) && (o = t.$new(), s(o, function (t) {
                                a = t, e.enter(t, null, n)
                            }))
                        })
                    }
                }
            }];
        t.module("ngAnimate", [], function () {
            ie = t.noop, G = t.copy, B = t.extend, ne = t.element, W = t.forEach, Y = t.isArray, ee = t.isString, Q = t.isObject, te = t.isUndefined, K = t.isDefined, J = t.isFunction, Z = t.isElement
        }).directive("ngAnimateSwap", Pe).directive("ngAnimateChildren", ge).factory("$$rAFScheduler", me).provider("$$animateQueue", ke).provider("$$animation", Ae).provider("$animateCss", Me).provider("$$animateCssDriver", Ce).provider("$$animateJs", Ee).provider("$$animateJsDriver", Ie)
    }(window, window.angular), define("nganimate", ["angular", "uirouter"], function () {}),
    function (e) {
        "use strict";
        e("app/router", [], function () {
            function e(e, t, n) {
                n.html5Mode(!0), t.otherwise(function (e, t) {
                    var n = e.get("$state");
                    _.isUndefined(n) || n.go("index")
                }), e.state("menu", {
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
            return ["$stateProvider", "$urlRouterProvider", "$locationProvider", e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/Const", [], function () {
            function e() {
                return {
                    DataTypes: {
                        SECTIONS: "sections",
                        PROJECTS: "projects",
                        CONTACTS: "contacts",
                        CLIENTS: "clients",
                        TEAM: "team"
                    },
                    LoaderTypes: {
                        POLY: "poly",
                        LINE: "line"
                    },
                    DirsTipes: {
                        VERT: "vertical",
                        HORIZ: "horizontal"
                    },
                    PagesTypes: {
                        MENU: "menu",
                        INDEX: "index",
                        WALL: "wall",
                        LEAF: "leaf",
                        INFOS: "infos",
                        CLEAF: "cleaf"
                    }
                }
            }
            return [e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/Math2", [], function () {
            return [function () {
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
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/Utils", [], function () {
            return ["Performance", function (e) {
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
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/Events", [], function () {
            function e() {
                return {
                    OPEN_MENU: "openmenu",
                    CLOSE_MENU: "closemenu",
                    CLICK_MENU: "clickmenu",
                    SNAP_TEAM: "snapteam",
                    CHANGE_STATE: "changestate",
                    BACK: "back",
                    OPEN_PAGE: "openpage",
                    OPEN_LEAF: "openleaf",
                    OPEN_LEAF_CONTENT: "openleafcontent",
                    TOGGLE_SOUNDS: "toggle_sounds",
                    OPEN_COOKIE: "opencookie",
                    SHARE_SITE: "sharesite",
                    SWIPE: "swipe",
                    KEY_DOWN: "keydown",
                    MOUSE_WHEEL: "mousewheel",
                    MOUSE_DOWN: "mousedown",
                    MOUSE_MOVE: "mousemove",
                    MOUSE_UP: "mouseup",
                    TOUCH_START: "touchstart",
                    TOUCH_MOVE: "touchmove",
                    TOUCH_END: "touchend",
                    HOLD_START: "holdstart",
                    HOLD_END: "holdend",
                    RESIZE: "resize"
                }
            }
            return [e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/Sharer", [], function () {
            return [function () {
                return {
                    shareOn: function (e) {
                        "fb" == e && window.open("https://www.facebook.com/Uprising/", "_blank"), "tw" == e && window.open("https://twitter.com/uprsg", "_blank")
                    }
                }
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/Delaunay", [], function () {
            function e(e) {
                var t, n, i, r, s, a, o = Number.POSITIVE_INFINITY,
                    l = Number.POSITIVE_INFINITY,
                    u = Number.NEGATIVE_INFINITY,
                    c = Number.NEGATIVE_INFINITY;
                for (t = e.length; t--;) e[t][0] < o && (o = e[t][0]), e[t][0] > u && (u = e[t][0]), e[t][1] < l && (l = e[t][1]), e[t][1] > c && (c = e[t][1]);
                return n = u - o, i = c - l, r = Math.max(n, i), s = o + .5 * n, a = l + .5 * i, [
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
                if (l > x && l > b) throw new Error("Eek! Coincident points!");
                return l > x ? (o = -((w - g) / (y - v)), c = (g + w) / 2, d = (v + y) / 2, r = (g + $) / 2, s = o * (r - c) + d) : l > b ? (a = -((g - $) / (v - m)), u = ($ + g) / 2, h = (m + v) / 2, r = (w + g) / 2, s = a * (r - u) + h) : (a = -((g - $) / (v - m)), o = -((w - g) / (y - v)), u = ($ + g) / 2, c = (g + w) / 2, h = (m + v) / 2, d = (v + y) / 2, r = (a * u - o * c + d - h) / (a - o), s = x > b ? a * (r - u) + h : o * (r - c) + d), p = g - r, f = v - s, {
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
                for (var i, r, a = e, o = t, l = [], u = 0; n > u; u++) i = Math.random() * a, r = Math.random() * o, l.push([i, r]);
                return l.push([0, 0]), l.push([a, 0]), l.push([a, o]), l.push([0, o]), l.push([a / 2, o / 2]), l.forEach(_.bind(function (e) {
                    e[0] = s(e[0], 0, a), e[1] = s(e[1], 0, o)
                }, this)), l
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
            return o = {
                triangulate: function (i, r) {
                    var s, a, o, u, c, h, d, p, f, $, m, g, v = i.length;
                    if (3 > v) return [];
                    if (i = i.slice(0), r)
                        for (s = v; s--;) i[s] = i[s][r];
                    for (o = new Array(v), s = v; s--;) o[s] = s;
                    for (o.sort(function (e, t) {
                            return i[t][0] - i[e][0]
                        }), u = e(i), i.push(u[0], u[1], u[2]), c = [t(i, v + 0, v + 1, v + 2)], h = [], d = [], s = o.length; s--; d.length = 0) {
                        for (g = o[s], a = c.length; a--;) p = i[g][0] - c[a].x, p > 0 && p * p > c[a].r ? (h.push(c[a]), c.splice(a, 1)) : (f = i[g][1] - c[a].y, p * p + f * f - c[a].r > l || (d.push(c[a].i, c[a].j, c[a].j, c[a].k, c[a].k, c[a].i), c.splice(a, 1)));
                        for (n(d), a = d.length; a;) m = d[--a], $ = d[--a], c.push(t(i, $, m, g))
                    }
                    for (s = c.length; s--;) h.push(c[s]);
                    for (c.length = 0, s = h.length; s--;) h[s].i < v && h[s].j < v && h[s].k < v && c.push(h[s].i, h[s].j, h[s].k);
                    return c
                },
                contains: function (e, t) {
                    if (t[0] < e[0][0] && t[0] < e[1][0] && t[0] < e[2][0] || t[0] > e[0][0] && t[0] > e[1][0] && t[0] > e[2][0] || t[1] < e[0][1] && t[1] < e[1][1] && t[1] < e[2][1] || t[1] > e[0][1] && t[1] > e[1][1] && t[1] > e[2][1]) return null;
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
            }, [function () {
                return {
                    sortTriangles: a,
                    triangulate: i,
                    getIndices: r
                }
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/Textures", [], function () {
            function e(e, t, n, i) {
                function r(e, n, i) {
                    return v = 0, h = t.defer(), g = n.length < 4 ? n.length : 4, d = i, c = n, m = e, $[e] = {}, p ? l(e, c, i) : s(), h.promise
                }

                function s() {
                    _.each(c, function (e) {
                        var t = document.createElement("video");
                        t.appendChild(o(e.video)), t.preload = "auto", t.id = e.name, t.autoplay = !0, $[m][t.id] = t, f ? n(function () {
                            a(t)
                        }, 600) : t.addEventListener("canplay", a)
                    })
                }

                function a(e) {
                    var t = e.currentTarget || e;
                    t.width = t.videoWidth || 1280, t.height = t.videoHeight || 720, t.pause(), t.removeEventListener("canplay", a), ++v, g >= v && d.call(null, v / g), v == g && u()
                }

                function o(e, t) {
                    t || (t = "video/" + e.substr(e.lastIndexOf(".") + 1));
                    var n = document.createElement("source");
                    return n.src = e + "?v=" + Date.now(), n.type = t, n
                }

                function l(e, t, n) {
                    var i = new createjs.LoadQueue(!1),
                        r = [];
                    i.on("progress", function (e) {
                        d.call(null, e.progress)
                    }), i.on("fileload", function (e) {
                        $[m][e.item.id] = e.result
                    }), i.on("complete", function (e) {
                        u()
                    }), _.each(t, function (e) {
                        r.push({
                            id: e.name,
                            src: e.poster
                        })
                    }), i.loadManifest(r)
                }

                function u() {
                    n(function () {
                        h.resolve($)
                    }, 2e3)
                }
                var c, h, d, p = i.isMobile(),
                    f = i.isValidIE() || i.isSafari(),
                    $ = {},
                    m = "",
                    g = 0,
                    v = 0;
                return {
                    load: r
                }
            }
            return ["$http", "$q", "$timeout", "Utils", e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/DataLoader", [], function () {
            function e(e, s, a) {
                function o() {
                    l = s.defer();
                    var e = new createjs.LoadQueue(!0);
                    return e.on("complete", function (e) {
                        var t = {
                            sections: e.target.getResult(a.DataTypes.SECTIONS),
                            projects: e.target.getResult(a.DataTypes.PROJECTS),
                            clients: e.target.getResult(a.DataTypes.CLIENTS),
                            team: e.target.getResult(a.DataTypes.TEAM)
                        };
                        l.resolve(t)
                    }), e.loadManifest([{
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
                    }]), l.promise
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
            return ["$http", "$q", "Const", e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/Performance", [], function () {
            function e() {
                function e(e) {
                    var t = "video/performance_test.mp4";
                    s = new PIXI.Container, a = new PIXI.Sprite(PIXI.Texture.fromVideoUrl(t)), a.texture.baseTexture.source.loop = !0, s.addChild(a), e.addChild(s), s.alpha = 0
                }

                function t() {
                    c && (o = i(), g = o - l, $ = Math.min($, g), m = Math.max(m, g), l = o, ++h, o > u + 1e3 && (f = Math.round(1e3 * h / (o - u)), d = Math.min(d, f), p = Math.max(p, f), u = o, h = 0))
                }

                function n() {
                    var e = {
                        fps: 0,
                        index: -1,
                        color: 0,
                        label: "Test..."
                    };
                    return c || (f > 59 && (e = {
                        fps: {
                            last: f,
                            min: d,
                            max: p
                        },
                        index: 2,
                        color: "#00ff90",
                        label: "High"
                    }), 59 >= f && (e = {
                        fps: {
                            last: f,
                            min: d,
                            max: p
                        },
                        index: 1,
                        color: "orange",
                        label: "Medium"
                    }), 10 >= f && (e = {
                        fps: {
                            last: f,
                            min: d,
                            max: p
                        },
                        index: 0,
                        color: "#ff0054",
                        label: "Low"
                    })), e
                }

                function i() {
                    return Date.now() || (new Date).getTime()
                }

                function r() {
                    c = !1, a.destroy(!0), s.destroy(), s = null, a = null
                }
                var s, a, o = i(),
                    l = o,
                    u = o,
                    c = !0,
                    h = 0,
                    d = 1e3,
                    p = 0,
                    f = 0,
                    $ = 1e3,
                    m = 0,
                    g = 0;
                return {
                    update: t,
                    clear: r,
                    test: e,
                    get: n
                }
            }
            return [e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/ThreeManager", [], function () {
            function e(e, t, n, i, r) {
                function s(i) {
                    var r = new n;
                    m = {
                        menu: {
                            scene: new e(i, r),
                            active: !0
                        },
                        infos: {
                            scene: new t(i, r),
                            active: !0
                        }
                    }, m.menu.scene.render(), m.infos.scene.render(), g = i, a(), setTimeout(function () {
                        m.menu.active = !1, m.infos.active = !1
                    }, 1e3)
                }

                function a() {
                    var e = $(document);
                    e.on(i.MOUSE_DOWN, _.bind(function (e) {
                        e.preventDefault(), o({
                            clientX: e.clientX,
                            clientY: e.clientY
                        })
                    }, this)), e.on(i.MOUSE_MOVE, _.bind(function (e) {
                        e.preventDefault(), l({
                            clientX: e.clientX,
                            clientY: e.clientY
                        })
                    }, this)), e.on(i.MOUSE_UP, _.bind(function (e) {
                        e.preventDefault(), u({
                            clientX: e.clientX,
                            clientY: e.clientY
                        })
                    }, this)), e.on(i.TOUCH_START, _.bind(function (e) {
                        1 == e.touches.length && (e.preventDefault(), o({
                            clientX: e.touches[0].pageX,
                            clientY: e.touches[0].pageY
                        }))
                    }, this)), e.on(i.TOUCH_MOVE, _.bind(function (e) {
                        1 == e.touches.length && (e.preventDefault(), l({
                            clientX: e.touches[0].pageX,
                            clientY: e.touches[0].pageY
                        }))
                    }, this)), e.on(i.TOUCH_END, _.bind(function (e) {
                        e.preventDefault(), u(e)
                    }, this))
                }

                function o(e) {
                    m.menu.active && m.menu.scene.onDown(e), m.infos.active && m.infos.scene.onDown(e)
                }

                function l(e) {
                    m.menu.active && m.menu.scene.onMove(e), m.infos.active && m.infos.scene.onMove(e)
                }

                function u(e) {
                    m.menu.active && m.menu.scene.onUp(e), m.infos.active && m.infos.scene.onUp(e)
                }

                function c() {
                    return m
                }

                function h(e) {
                    var t = m[e].scene.renderer.domElement;
                    return t._pixiId && (delete PIXI.utils.BaseTextureCache[t._pixiId], delete t._pixiId), m[e].active = !0, new PIXI.Texture.fromCanvas(t)
                }

                function d() {
                    m && (m.menu.active && m.menu.scene.udpate(), m.infos.active && m.infos.scene.udpate())
                }

                function p(e) {
                    g.currstate.to.data.type != e && (m[e].active = !1, m[e].scene.clear())
                }

                function f() {}
                var m, g;
                return {
                    setup: s,
                    clear: p,
                    update: d,
                    resize: f,
                    getStore: c,
                    getTexture: h
                }
            }
            return ["MenuScene", "InfoScene", "ThreeFactory", "Events", "Const", e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/SoundManager", [], function () {
            function e(e) {
                function t() {
                    var e;
                    _.each(u, function (t) {
                        _.each(t, function (t) {
                            e = $('<audio preload="auto" />')[0], e.src = t.src + "?v=" + Date.now(), e.volume = 0, t.player = e
                        })
                    })
                }

                function n(e) {
                    i(e), r(e)
                }

                function i(t) {
                    t.to.name == e.PagesTypes.MENU ? TweenMax.to(u.menu.ambient.player, 1, {
                        volume: l ? 0 : 1,
                        ease: Linear.easeNone,
                        onStart: function () {
                            u.menu.ambient.player.loop = !0, u.menu.ambient.player.paused && u.menu.ambient.player.play()
                        }
                    }) : TweenMax.to(u.menu.ambient.player, 1, {
                        volume: 0,
                        ease: Linear.easeNone,
                        onComplete: function () {
                            u.menu.ambient.player.paused || u.menu.ambient.player.pause()
                        }
                    })
                }

                function r(t) {
                    t.to.name != e.PagesTypes.MENU ? TweenMax.to(u.sections.ambient.player, 1, {
                        volume: l ? 0 : 1,
                        ease: Linear.easeNone,
                        onStart: function () {
                            u.sections.ambient.player.loop = !0, u.sections.ambient.player.paused && u.sections.ambient.player.play()
                        }
                    }) : TweenMax.to(u.sections.ambient.player, 1, {
                        volume: 0,
                        ease: Linear.easeNone,
                        onComplete: function () {
                            u.sections.ambient.player.paused || u.sections.ambient.player.pause()
                        }
                    })
                }

                function s(e, t, n) {
                    var i = u[e][t].player;
                    (i.paused || n) && (i.currentTime = 0, i.volume = l ? 0 : 1, i.play())
                }

                function a(e, t) {
                    var n = u[e][t].player;
                    n.paused || (n.pause(), n.volume = 0)
                }

                function o() {
                    l = !l, _.each(u, function (e) {
                        _.each(e, function (e) {
                            e.player.paused || TweenMax.to(e.player, 1, {
                                volume: l ? 0 : 1,
                                ease: Linear.easeNone
                            })
                        })
                    })
                }
                var l = !1,
                    u = {
                        menu: {
                            ambient: {
                                src: "audio/menu-ambient.mp3"
                            },
                            iconshover: {
                                src: "audio/menu-icons-hover.mp3"
                            },
                            tweens: {
                                src: "audio/menu-tweens.mp3"
                            },
                            zoom: {
                                src: "audio/menu-zoom.mp3"
                            }
                        },
                        sections: {
                            ambient: {
                                src: "audio/sections-ambient.mp3"
                            },
                            copyloop: {
                                src: "audio/sections-copy-loop.mp3"
                            },
                            hambbackhover: {
                                src: "audio/sections-hamb-back-hover.mp3"
                            },
                            tweenIn: {
                                src: "audio/sections-tweenIn.mp3"
                            },
                            tweenOut: {
                                src: "audio/sections-tweenOut.mp3"
                            }
                        },
                        projects: {
                            wall: {
                                src: "audio/projects-wall.mp3"
                            },
                            leaf: {
                                src: "audio/projects-leaf.mp3"
                            }
                        },
                        about: {
                            introtween: {
                                src: "audio/about-intro-tween.mp3"
                            },
                            copytween: {
                                src: "audio/about-copy-tween.mp3"
                            },
                            scroll: {
                                src: "audio/about-scroll-tween.mp3"
                            },
                            zoom: {
                                src: "audio/about-zoom.mp3"
                            }
                        },
                        post: {
                            glitch: {
                                src: "audio/post-glitch.mp3"
                            }
                        }
                    };
                return {
                    setAmbientSound: n,
                    toggle: o,
                    setup: t,
                    play: s,
                    stop: a
                }
            }
            return ["Const", e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/services/AssetsLoader", [], function () {
            function e(e, t, n) {
                function i(e, n, i) {
                    return o = t.defer(), l ? s(e, n, i) : r(e, n, i), o.promise
                }

                function r(e, t, n) {
                    var i = new createjs.LoadQueue(!1);
                    i.on("progress", function (e) {
                        u = .5 * e.progress, n.call(null, u)
                    }), i.on("complete", function (i) {
                        s(e, t, n)
                    }), i.loadManifest(a())
                }

                function s(e, t, i) {
                    n.load(e, t, function (e) {
                        u = l ? e : .5 + .5 * e, i.call(null, u)
                    }).then(function (e) {
                        o.resolve(e)
                    })
                }

                function a() {
                    return [{
                        src: "img/envmap/px.jpg"
                    }, {
                        src: "img/envmap/nx.jpg"
                    }, {
                        src: "img/envmap/py.jpg"
                    }, {
                        src: "img/envmap/ny.jpg"
                    }, {
                        src: "img/envmap/pz.jpg"
                    }, {
                        src: "img/envmap/nz.jpg"
                    }, {
                        src: "img/mouse-icon.png"
                    }, {
                        src: "img/share-icon.png"
                    }, {
                        src: "img/uprsg-logo.png"
                    }, {
                        src: "img/texture/payoff.png"
                    }, {
                        src: "img/texture/main-label.png"
                    }, {
                        src: "img/texture/work-label.png"
                    }, {
                        src: "img/texture/about-label.png"
                    }, {
                        src: "img/texture/contacts-label.png"
                    }]
                }
                var o, l = !1,
                    u = 0;
                return {
                    load: i
                }
            }
            return ["$http", "$q", "Textures", e]
        })
    }(define),
    function () {
        function e(e) {
            function t(t, n, i, r, s, a) {
                for (; s >= 0 && a > s; s += e) {
                    var o = r ? r[s] : s;
                    i = n(i, t[o], o, t)
                }
                return i
            }
            return function (n, i, r, s) {
                i = w(i, s, 4);
                var a = !E(n) && v.keys(n),
                    o = (a || n).length,
                    l = e > 0 ? 0 : o - 1;
                return arguments.length < 3 && (r = n[a ? a[l] : l], l += e), t(n, i, r, a, l, o)
            }
        }

        function t(e) {
            return function (t, n, i) {
                n = y(n, i);
                for (var r = C(t), s = e > 0 ? 0 : r - 1; s >= 0 && r > s; s += e)
                    if (n(t[s], s, t)) return s;
                return -1
            }
        }

        function n(e, t, n) {
            return function (i, r, s) {
                var a = 0,
                    o = C(i);
                if ("number" == typeof s) e > 0 ? a = s >= 0 ? s : Math.max(s + o, a) : o = s >= 0 ? Math.min(s + 1, o) : s + o + 1;
                else if (n && s && o) return s = n(i, r), i[s] === r ? s : -1;
                if (r !== r) return s = t(c.call(i, a, o), v.isNaN), s >= 0 ? s + a : -1;
                for (s = e > 0 ? a : o - 1; s >= 0 && o > s; s += e)
                    if (i[s] === r) return s;
                return -1
            }
        }

        function i(e, t) {
            var n = A.length,
                i = e.constructor,
                r = v.isFunction(i) && i.prototype || o,
                s = "constructor";
            for (v.has(e, s) && !v.contains(t, s) && t.push(s); n--;) s = A[n], s in e && e[s] !== r[s] && !v.contains(t, s) && t.push(s)
        }
        var r = this,
            s = r._,
            a = Array.prototype,
            o = Object.prototype,
            l = Function.prototype,
            u = a.push,
            c = a.slice,
            h = o.toString,
            d = o.hasOwnProperty,
            p = Array.isArray,
            f = Object.keys,
            $ = l.bind,
            m = Object.create,
            g = function () {},
            v = function (e) {
                return e instanceof v ? e : this instanceof v ? void(this._wrapped = e) : new v(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : r._ = v, v.VERSION = "1.8.3";
        var w = function (e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function (n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function (n, i) {
                            return e.call(t, n, i)
                        };
                    case 3:
                        return function (n, i, r) {
                            return e.call(t, n, i, r)
                        };
                    case 4:
                        return function (n, i, r, s) {
                            return e.call(t, n, i, r, s)
                        }
                }
                return function () {
                    return e.apply(t, arguments)
                }
            },
            y = function (e, t, n) {
                return null == e ? v.identity : v.isFunction(e) ? w(e, t, n) : v.isObject(e) ? v.matcher(e) : v.property(e)
            };
        v.iteratee = function (e, t) {
            return y(e, t, 1 / 0)
        };
        var x = function (e, t) {
                return function (n) {
                    var i = arguments.length;
                    if (2 > i || null == n) return n;
                    for (var r = 1; i > r; r++)
                        for (var s = arguments[r], a = e(s), o = a.length, l = 0; o > l; l++) {
                            var u = a[l];
                            t && void 0 !== n[u] || (n[u] = s[u])
                        }
                    return n
                }
            },
            b = function (e) {
                if (!v.isObject(e)) return {};
                if (m) return m(e);
                g.prototype = e;
                var t = new g;
                return g.prototype = null, t
            },
            T = function (e) {
                return function (t) {
                    return null == t ? void 0 : t[e]
                }
            },
            M = Math.pow(2, 53) - 1,
            C = T("length"),
            E = function (e) {
                var t = C(e);
                return "number" == typeof t && t >= 0 && M >= t
            };
        v.each = v.forEach = function (e, t, n) {
            t = w(t, n);
            var i, r;
            if (E(e))
                for (i = 0, r = e.length; r > i; i++) t(e[i], i, e);
            else {
                var s = v.keys(e);
                for (i = 0, r = s.length; r > i; i++) t(e[s[i]], s[i], e)
            }
            return e
        }, v.map = v.collect = function (e, t, n) {
            t = y(t, n);
            for (var i = !E(e) && v.keys(e), r = (i || e).length, s = Array(r), a = 0; r > a; a++) {
                var o = i ? i[a] : a;
                s[a] = t(e[o], o, e)
            }
            return s
        }, v.reduce = v.foldl = v.inject = e(1), v.reduceRight = v.foldr = e(-1), v.find = v.detect = function (e, t, n) {
            var i;
            return i = E(e) ? v.findIndex(e, t, n) : v.findKey(e, t, n), void 0 !== i && -1 !== i ? e[i] : void 0
        }, v.filter = v.select = function (e, t, n) {
            var i = [];
            return t = y(t, n), v.each(e, function (e, n, r) {
                t(e, n, r) && i.push(e)
            }), i
        }, v.reject = function (e, t, n) {
            return v.filter(e, v.negate(y(t)), n)
        }, v.every = v.all = function (e, t, n) {
            t = y(t, n);
            for (var i = !E(e) && v.keys(e), r = (i || e).length, s = 0; r > s; s++) {
                var a = i ? i[s] : s;
                if (!t(e[a], a, e)) return !1
            }
            return !0
        }, v.some = v.any = function (e, t, n) {
            t = y(t, n);
            for (var i = !E(e) && v.keys(e), r = (i || e).length, s = 0; r > s; s++) {
                var a = i ? i[s] : s;
                if (t(e[a], a, e)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function (e, t, n, i) {
            return E(e) || (e = v.values(e)), ("number" != typeof n || i) && (n = 0), v.indexOf(e, t, n) >= 0
        }, v.invoke = function (e, t) {
            var n = c.call(arguments, 2),
                i = v.isFunction(t);
            return v.map(e, function (e) {
                var r = i ? t : e[t];
                return null == r ? r : r.apply(e, n)
            })
        }, v.pluck = function (e, t) {
            return v.map(e, v.property(t))
        }, v.where = function (e, t) {
            return v.filter(e, v.matcher(t))
        }, v.findWhere = function (e, t) {
            return v.find(e, v.matcher(t))
        }, v.max = function (e, t, n) {
            var i, r, s = -(1 / 0),
                a = -(1 / 0);
            if (null == t && null != e) {
                e = E(e) ? e : v.values(e);
                for (var o = 0, l = e.length; l > o; o++) i = e[o], i > s && (s = i)
            } else t = y(t, n), v.each(e, function (e, n, i) {
                r = t(e, n, i), (r > a || r === -(1 / 0) && s === -(1 / 0)) && (s = e, a = r)
            });
            return s
        }, v.min = function (e, t, n) {
            var i, r, s = 1 / 0,
                a = 1 / 0;
            if (null == t && null != e) {
                e = E(e) ? e : v.values(e);
                for (var o = 0, l = e.length; l > o; o++) i = e[o], s > i && (s = i)
            } else t = y(t, n), v.each(e, function (e, n, i) {
                r = t(e, n, i), (a > r || r === 1 / 0 && s === 1 / 0) && (s = e, a = r)
            });
            return s
        }, v.shuffle = function (e) {
            for (var t, n = E(e) ? e : v.values(e), i = n.length, r = Array(i), s = 0; i > s; s++) t = v.random(0, s), t !== s && (r[s] = r[t]), r[t] = n[s];
            return r
        }, v.sample = function (e, t, n) {
            return null == t || n ? (E(e) || (e = v.values(e)), e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
        }, v.sortBy = function (e, t, n) {
            return t = y(t, n), v.pluck(v.map(e, function (e, n, i) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, i)
                }
            }).sort(function (e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var I = function (e) {
            return function (t, n, i) {
                var r = {};
                return n = y(n, i), v.each(t, function (i, s) {
                    var a = n(i, s, t);
                    e(r, i, a)
                }), r
            }
        };
        v.groupBy = I(function (e, t, n) {
            v.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), v.indexBy = I(function (e, t, n) {
            e[n] = t
        }), v.countBy = I(function (e, t, n) {
            v.has(e, n) ? e[n]++ : e[n] = 1
        }), v.toArray = function (e) {
            return e ? v.isArray(e) ? c.call(e) : E(e) ? v.map(e, v.identity) : v.values(e) : []
        }, v.size = function (e) {
            return null == e ? 0 : E(e) ? e.length : v.keys(e).length
        }, v.partition = function (e, t, n) {
            t = y(t, n);
            var i = [],
                r = [];
            return v.each(e, function (e, n, s) {
                (t(e, n, s) ? i : r).push(e)
            }), [i, r]
        }, v.first = v.head = v.take = function (e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : v.initial(e, e.length - t)
        }, v.initial = function (e, t, n) {
            return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, v.last = function (e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : v.rest(e, Math.max(0, e.length - t))
        }, v.rest = v.tail = v.drop = function (e, t, n) {
            return c.call(e, null == t || n ? 1 : t)
        }, v.compact = function (e) {
            return v.filter(e, v.identity)
        };
        var S = function (e, t, n, i) {
            for (var r = [], s = 0, a = i || 0, o = C(e); o > a; a++) {
                var l = e[a];
                if (E(l) && (v.isArray(l) || v.isArguments(l))) {
                    t || (l = S(l, t, n));
                    var u = 0,
                        c = l.length;
                    for (r.length += c; c > u;) r[s++] = l[u++]
                } else n || (r[s++] = l)
            }
            return r
        };
        v.flatten = function (e, t) {
            return S(e, t, !1)
        }, v.without = function (e) {
            return v.difference(e, c.call(arguments, 1))
        }, v.uniq = v.unique = function (e, t, n, i) {
            v.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = y(n, i));
            for (var r = [], s = [], a = 0, o = C(e); o > a; a++) {
                var l = e[a],
                    u = n ? n(l, a, e) : l;
                t ? (a && s === u || r.push(l), s = u) : n ? v.contains(s, u) || (s.push(u), r.push(l)) : v.contains(r, l) || r.push(l)
            }
            return r
        }, v.union = function () {
            return v.uniq(S(arguments, !0, !0))
        }, v.intersection = function (e) {
            for (var t = [], n = arguments.length, i = 0, r = C(e); r > i; i++) {
                var s = e[i];
                if (!v.contains(t, s)) {
                    for (var a = 1; n > a && v.contains(arguments[a], s); a++);
                    a === n && t.push(s)
                }
            }
            return t
        }, v.difference = function (e) {
            var t = S(arguments, !0, !0, 1);
            return v.filter(e, function (e) {
                return !v.contains(t, e)
            })
        }, v.zip = function () {
            return v.unzip(arguments)
        }, v.unzip = function (e) {
            for (var t = e && v.max(e, C).length || 0, n = Array(t), i = 0; t > i; i++) n[i] = v.pluck(e, i);
            return n
        }, v.object = function (e, t) {
            for (var n = {}, i = 0, r = C(e); r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, v.findIndex = t(1), v.findLastIndex = t(-1), v.sortedIndex = function (e, t, n, i) {
            n = y(n, i, 1);
            for (var r = n(t), s = 0, a = C(e); a > s;) {
                var o = Math.floor((s + a) / 2);
                n(e[o]) < r ? s = o + 1 : a = o
            }
            return s
        }, v.indexOf = n(1, v.findIndex, v.sortedIndex), v.lastIndexOf = n(-1, v.findLastIndex), v.range = function (e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), s = 0; i > s; s++, e += n) r[s] = e;
            return r
        };
        var O = function (e, t, n, i, r) {
            if (!(i instanceof t)) return e.apply(n, r);
            var s = b(e.prototype),
                a = e.apply(s, r);
            return v.isObject(a) ? a : s
        };
        v.bind = function (e, t) {
            if ($ && e.bind === $) return $.apply(e, c.call(arguments, 1));
            if (!v.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = c.call(arguments, 2),
                i = function () {
                    return O(e, i, t, this, n.concat(c.call(arguments)))
                };
            return i
        }, v.partial = function (e) {
            var t = c.call(arguments, 1),
                n = function () {
                    for (var i = 0, r = t.length, s = Array(r), a = 0; r > a; a++) s[a] = t[a] === v ? arguments[i++] : t[a];
                    for (; i < arguments.length;) s.push(arguments[i++]);
                    return O(e, n, this, this, s)
                };
            return n
        }, v.bindAll = function (e) {
            var t, n, i = arguments.length;
            if (1 >= i) throw new Error("bindAll must be passed function names");
            for (t = 1; i > t; t++) n = arguments[t], e[n] = v.bind(e[n], e);
            return e
        }, v.memoize = function (e, t) {
            var n = function (i) {
                var r = n.cache,
                    s = "" + (t ? t.apply(this, arguments) : i);
                return v.has(r, s) || (r[s] = e.apply(this, arguments)), r[s]
            };
            return n.cache = {}, n
        }, v.delay = function (e, t) {
            var n = c.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function (e, t, n) {
            var i, r, s, a = null,
                o = 0;
            n || (n = {});
            var l = function () {
                o = n.leading === !1 ? 0 : v.now(), a = null, s = e.apply(i, r), a || (i = r = null)
            };
            return function () {
                var u = v.now();
                o || n.leading !== !1 || (o = u);
                var c = t - (u - o);
                return i = this, r = arguments, 0 >= c || c > t ? (a && (clearTimeout(a), a = null), o = u, s = e.apply(i, r), a || (i = r = null)) : a || n.trailing === !1 || (a = setTimeout(l, c)), s
            }
        }, v.debounce = function (e, t, n) {
            var i, r, s, a, o, l = function () {
                var u = v.now() - a;
                t > u && u >= 0 ? i = setTimeout(l, t - u) : (i = null, n || (o = e.apply(s, r), i || (s = r = null)))
            };
            return function () {
                s = this, r = arguments, a = v.now();
                var u = n && !i;
                return i || (i = setTimeout(l, t)), u && (o = e.apply(s, r), s = r = null), o
            }
        }, v.wrap = function (e, t) {
            return v.partial(t, e)
        }, v.negate = function (e) {
            return function () {
                return !e.apply(this, arguments)
            }
        }, v.compose = function () {
            var e = arguments,
                t = e.length - 1;
            return function () {
                for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
                return i
            }
        }, v.after = function (e, t) {
            return function () {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, v.before = function (e, t) {
            var n;
            return function () {
                return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
            }
        }, v.once = v.partial(v.before, 2);
        var k = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            A = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        v.keys = function (e) {
            if (!v.isObject(e)) return [];
            if (f) return f(e);
            var t = [];
            for (var n in e) v.has(e, n) && t.push(n);
            return k && i(e, t), t
        }, v.allKeys = function (e) {
            if (!v.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return k && i(e, t), t
        }, v.values = function (e) {
            for (var t = v.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++) i[r] = e[t[r]];
            return i
        }, v.mapObject = function (e, t, n) {
            t = y(t, n);
            for (var i, r = v.keys(e), s = r.length, a = {}, o = 0; s > o; o++) i = r[o], a[i] = t(e[i], i, e);
            return a
        }, v.pairs = function (e) {
            for (var t = v.keys(e), n = t.length, i = Array(n), r = 0; n > r; r++) i[r] = [t[r], e[t[r]]];
            return i
        }, v.invert = function (e) {
            for (var t = {}, n = v.keys(e), i = 0, r = n.length; r > i; i++) t[e[n[i]]] = n[i];
            return t
        }, v.functions = v.methods = function (e) {
            var t = [];
            for (var n in e) v.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, v.extend = x(v.allKeys), v.extendOwn = v.assign = x(v.keys), v.findKey = function (e, t, n) {
            t = y(t, n);
            for (var i, r = v.keys(e), s = 0, a = r.length; a > s; s++)
                if (i = r[s], t(e[i], i, e)) return i
        }, v.pick = function (e, t, n) {
            var i, r, s = {},
                a = e;
            if (null == a) return s;
            v.isFunction(t) ? (r = v.allKeys(a), i = w(t, n)) : (r = S(arguments, !1, !1, 1), i = function (e, t, n) {
                return t in n
            }, a = Object(a));
            for (var o = 0, l = r.length; l > o; o++) {
                var u = r[o],
                    c = a[u];
                i(c, u, a) && (s[u] = c)
            }
            return s
        }, v.omit = function (e, t, n) {
            if (v.isFunction(t)) t = v.negate(t);
            else {
                var i = v.map(S(arguments, !1, !1, 1), String);
                t = function (e, t) {
                    return !v.contains(i, t)
                }
            }
            return v.pick(e, t, n)
        }, v.defaults = x(v.allKeys, !0), v.create = function (e, t) {
            var n = b(e);
            return t && v.extendOwn(n, t), n
        }, v.clone = function (e) {
            return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
        }, v.tap = function (e, t) {
            return t(e), e
        }, v.isMatch = function (e, t) {
            var n = v.keys(t),
                i = n.length;
            if (null == e) return !i;
            for (var r = Object(e), s = 0; i > s; s++) {
                var a = n[s];
                if (t[a] !== r[a] || !(a in r)) return !1
            }
            return !0
        };
        var P = function (e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
            var r = h.call(e);
            if (r !== h.call(t)) return !1;
            switch (r) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var s = "[object Array]" === r;
            if (!s) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var a = e.constructor,
                    o = t.constructor;
                if (a !== o && !(v.isFunction(a) && a instanceof a && v.isFunction(o) && o instanceof o) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], i = i || [];
            for (var l = n.length; l--;)
                if (n[l] === e) return i[l] === t;
            if (n.push(e), i.push(t), s) {
                if (l = e.length, l !== t.length) return !1;
                for (; l--;)
                    if (!P(e[l], t[l], n, i)) return !1
            } else {
                var u, c = v.keys(e);
                if (l = c.length, v.keys(t).length !== l) return !1;
                for (; l--;)
                    if (u = c[l], !v.has(t, u) || !P(e[u], t[u], n, i)) return !1
            }
            return n.pop(), i.pop(), !0
        };
        v.isEqual = function (e, t) {
            return P(e, t)
        }, v.isEmpty = function (e) {
            return null == e ? !0 : E(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)) ? 0 === e.length : 0 === v.keys(e).length
        }, v.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, v.isArray = p || function (e) {
            return "[object Array]" === h.call(e)
        }, v.isObject = function (e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
            v["is" + e] = function (t) {
                return h.call(t) === "[object " + e + "]"
            }
        }), v.isArguments(arguments) || (v.isArguments = function (e) {
            return v.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function (e) {
            return "function" == typeof e || !1
        }), v.isFinite = function (e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, v.isNaN = function (e) {
            return v.isNumber(e) && e !== +e
        }, v.isBoolean = function (e) {
            return e === !0 || e === !1 || "[object Boolean]" === h.call(e)
        }, v.isNull = function (e) {
            return null === e
        }, v.isUndefined = function (e) {
            return void 0 === e
        }, v.has = function (e, t) {
            return null != e && d.call(e, t)
        }, v.noConflict = function () {
            return r._ = s, this
        }, v.identity = function (e) {
            return e
        }, v.constant = function (e) {
            return function () {
                return e
            }
        }, v.noop = function () {}, v.property = T, v.propertyOf = function (e) {
            return null == e ? function () {} : function (t) {
                return e[t]
            }
        }, v.matcher = v.matches = function (e) {
            return e = v.extendOwn({}, e),
                function (t) {
                    return v.isMatch(t, e)
                }
        }, v.times = function (e, t, n) {
            var i = Array(Math.max(0, e));
            t = w(t, n, 1);
            for (var r = 0; e > r; r++) i[r] = t(r);
            return i
        }, v.random = function (e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, v.now = Date.now || function () {
            return (new Date).getTime()
        };
        var F = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            _ = v.invert(F),
            j = function (e) {
                var t = function (t) {
                        return e[t]
                    },
                    n = "(?:" + v.keys(e).join("|") + ")",
                    i = RegExp(n),
                    r = RegExp(n, "g");
                return function (e) {
                    return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, t) : e
                }
            };
        v.escape = j(F), v.unescape = j(_), v.result = function (e, t, n) {
            var i = null == e ? void 0 : e[t];
            return void 0 === i && (i = n), v.isFunction(i) ? i.call(e) : i
        };
        var R = 0;
        v.uniqueId = function (e) {
            var t = ++R + "";
            return e ? e + t : t
        }, v.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var L = /(.)^/,
            D = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            N = /\\|'|\r|\n|\u2028|\u2029/g,
            z = function (e) {
                return "\\" + D[e]
            };
        v.template = function (e, t, n) {
            !t && n && (t = n), t = v.defaults({}, t, v.templateSettings);
            var i = RegExp([(t.escape || L).source, (t.interpolate || L).source, (t.evaluate || L).source].join("|") + "|$", "g"),
                r = 0,
                s = "__p+='";
            e.replace(i, function (t, n, i, a, o) {
                return s += e.slice(r, o).replace(N, z), r = o + t.length, n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : a && (s += "';\n" + a + "\n__p+='"), t
            }), s += "';\n", t.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj", "_", s)
            } catch (o) {
                throw o.source = s, o
            }
            var l = function (e) {
                    return a.call(this, e, v)
                },
                u = t.variable || "obj";
            return l.source = "function(" + u + "){\n" + s + "}", l
        }, v.chain = function (e) {
            var t = v(e);
            return t._chain = !0, t
        };
        var U = function (e, t) {
            return e._chain ? v(t).chain() : t
        };
        v.mixin = function (e) {
            v.each(v.functions(e), function (t) {
                var n = v[t] = e[t];
                v.prototype[t] = function () {
                    var e = [this._wrapped];
                    return u.apply(e, arguments), U(this, n.apply(v, e))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            var t = a[e];
            v.prototype[e] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], U(this, n)
            }
        }), v.each(["concat", "join", "slice"], function (e) {
            var t = a[e];
            v.prototype[e] = function () {
                return U(this, t.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function () {
            return this._wrapped
        }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function () {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function () {
            return v
        })
    }.call(this),
    function (e) {
        "use strict";
        e("app/controllers/AppController", ["underscore"], function (e) {
            function t(t, n, i, r, s, a, o, l, u, c) {
                var h = $(window),
                    d = $(document),
                    p = 0,
                    f = 150,
                    m = 0;
                t.data = {}, t.stage = null, t.loaded = !1, t.currstate = null, t.stagesize = null, t.direction = {
                    value: 0
                }, this.ready = function (e) {
                    t.loaded = !0, t.data = {
                        menu: {
                            geometry: {
                                shape: null
                            },
                            textures: {
                                loaded: !1,
                                materials: null
                            }
                        },
                        sections: {
                            collection: e.sections,
                            textures: {
                                loaded: !1
                            },
                            controller: r("SectionsController", {
                                $scope: t
                            })
                        },
                        projects: {
                            collection: e.projects,
                            textures: {
                                loaded: !1
                            },
                            controller: r("ProjectsController", {
                                $scope: t
                            })
                        },
                        infos: {
                            team: e.team,
                            clients: e.clients,
                            controller: r("InfosController", {
                                $scope: t
                            })
                        },
                        contacts: {
                            collection: [{
                                name: "contacts",
                                video: "video/_Reel_converted.mp4",
                                poster: "video/_Reel_converted.mp4"
                            }],
                            textures: {
                                loaded: !1
                            }
                        }
                    }, s.sync()
                }, this.onStateChange = function (e, n, i, r, s, a) {
                    return u.getWebgl() ? !t.loaded || t.isLoading ? (e.preventDefault(), !1) : (t.currstate = {
                        model: this.getModel(n.data.instance),
                        to: n,
                        from: r,
                        params: {
                            to: i,
                            from: s
                        }
                    }, void t.resize()) : (window.redirect("nowebgl"), !1)
                }, this.onWheel = function (e) {
                    var t = 0,
                        n = c.DirsTipes.VERT;
                    u.getTime() - p;
                    p = u.getTime(), e.deltaY > 0 && (t = -1), e.deltaY < 0 && (t = 1), 0 != t && this.setDir(t, n)
                }, this.onKey = function (e) {
                    var t = 0,
                        n = c.DirsTipes.VERT,
                        i = u.getTime() - m;
                    m = u.getTime(), 40 == e.keyCode && (t = 1), 38 == e.keyCode && (t = -1), (40 == e.keyCode || 38 == e.keyCode && i > f) && this.setDir(t, n)
                }, this.onSwipe = function (e, t) {
                    var n, i = 0;
                    t.direction == Hammer.DIRECTION_UP && (i = 1, n = c.DirsTipes.VERT), t.direction == Hammer.DIRECTION_DOWN && (i = -1, n = c.DirsTipes.VERT), t.direction == Hammer.DIRECTION_LEFT && (i = 1, n = c.DirsTipes.HORIZ), t.direction == Hammer.DIRECTION_RIGHT && (i = -1, n = c.DirsTipes.HORIZ), this.setDir(i, n)
                }, this.setDir = function (e, n) {
                    e != t.direction.value && (t.direction = {
                        value: e,
                        type: n
                    }, t.$apply())
                }, this.getModel = function (n) {
                    return e.where(t.data.sections.collection, {
                        name: n
                    })[0] || {}
                }, this.resize = function () {
                    t.stagesize = {
                        w: innerWidth,
                        h: innerHeight,
                        x: innerWidth / 2,
                        y: innerHeight / 2
                    }, a(function () {
                        t.stagesize = {
                            w: innerWidth,
                            h: innerHeight,
                            x: innerWidth / 2,
                            y: innerHeight / 2
                        }
                    })
                }, t.resize = function () {
                    h.trigger(l.RESIZE)
                }, i.$on("$stateChangeStart", e.bind(this.onStateChange, this)), h.on(l.RESIZE, e.bind(this.resize, this)).trigger(l.RESIZE), d.on(l.TOUCH_MOVE, function (e) {
                    e.preventDefault()
                }, !1), d.on(l.MOUSE_WHEEL, e.bind(this.onWheel, this)), d.on(l.KEY_DOWN, e.bind(this.onKey, this)), t.$on(l.SWIPE, e.bind(this.onSwipe, this)), o.load().then(e.bind(this.ready, this))
            }
            return ["$scope", "$state", "$rootScope", "$controller", "$urlRouter", "$timeout", "DataLoader", "Events", "Utils", "Const", t]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/controllers/CanvasController", [], function () {
            function e(e, t, n, i, r, s, a, o, l, u, c, h, d, p, f, $, m, g, v, w, y, x, b, T, M) {
                var C, E, I, S, O, k, A, P, F, j = (r.getColors(), w),
                    R = y,
                    L = T,
                    D = x,
                    N = [],
                    z = {
                        menu: a,
                        index: o,
                        work: l,
                        about: u,
                        contacts: c,
                        leaf: d,
                        wall: h,
                        infos: p,
                        cleaf: f
                    };
                e.setupCanvas = _.bind(function (t) {
                    I = PIXI.autoDetectRenderer(1280, 720, {
                        view: t,
                        antialias: !0,
                        transparent: !0,
                        resolution: r.getDpr()
                    }), A = new PIXI.Container, F = new PIXI.Container, F.addChild(A), e.stage = A, console.log(e), this.startTick()
                }, this), this.startTick = function () {
                    TweenLite.ticker.fps(60), TweenLite.ticker.addEventListener("tick", window.tick, !1)
                }, window.tick = function () {
                    I.render(F), j.update(), L.update(), D.update(), S && S.update(), O && O.update()
                }, this.preload = function (t, n, i) {
                    var r = t == M.DataTypes.SECTIONS ? M.LoaderTypes.POLY : M.LoaderTypes.LINE;
                    C = new g({
                        type: r,
                        scope: e
                    }), A.children.length > 0 && e.currstate.from.name == M.PagesTypes.MENU ? A.addChildAt(C.render().$el, 1) : A.addChild(C.render().$el), e.isLoading = !0, e.resize(), v.load(t, n, function (e) {
                        C.progress(e)
                    }).then(_.bind(function (t) {
                        C.hide().then(_.bind(function () {
                            C = null, e.isLoading = !1, i.call(this, t)
                        }, this))
                    }, this))
                }, this.update = function (t, i) {
                    if (t && !C) {
                        if (-1 == L.get().index) return E = new m, A.addChild(E.render().$el), L.test(A), e.resize(), void n(_.bind(function () {
                            L.clear(), E.hide(_.bind(function () {
                                E.destroy(), E = null, this.setupMenagers(), this.updateResolution(r.getDpr()), n(_.bind(function () {
                                    this.update(t, i)
                                }, this), 600)
                            }, this))
                        }, this), 3e3);
                        if (!e.data.sections.textures.loaded) return void this.preload(M.DataTypes.SECTIONS, e.data.sections.collection, function (n) {
                            e.data.sections.textures = {
                                loaded: !0,
                                items: n.sections
                            }, this.buildStage(), this.update(t, i)
                        });
                        if (!e.data.projects.textures.loaded && (t.to.data.type == M.PagesTypes.WALL || t.to.data.type == M.PagesTypes.LEAF)) return void this.preload(M.DataTypes.PROJECTS, e.data.projects.collection, function (n) {
                            e.data.projects.textures = {
                                loaded: !0,
                                items: n.projects
                            }, this.update(t, i)
                        });
                        if (!e.data.contacts.textures.loaded && t.to.data.type == M.PagesTypes.CLEAF) return void this.preload(M.DataTypes.CONTACTS, e.data.contacts.collection, function (n) {
                            e.data.contacts.textures = {
                                loaded: !0,
                                items: n.contacts
                            }, this.update(t, i)
                        });
                        e.data.sections.controller.update(), e.data.projects.controller.update();
                        var s = this.needClear(S, t, i) ? 600 : 0;
                        n(_.bind(function () {
                            this.setState(t, i), e.resize()
                        }, this), s)
                    }
                }, this.updateResolution = function (t) {
                    I.resolution = t, I.rootRenderTarget.resolution = t, I.plugins.interaction.resolution = t, e.resize()
                }, this.setupMenagers = function () {
                    j.setup(e), R.setup(e)
                }, this.buildStage = function () {
                    k = new $(e), A.addChild(k.render().$el), F.filters = [D.addNoise()], A.filters = [D.addGlitch()], this.addEvents()
                }, this.addEvents = function () {
                    var n = "work",
                        i = "about",
                        a = "contacts",
                        o = "work.wall",
                        l = "about.scroll",
                        u = "contacts.leaf";
                    e.data.sections.controller.addEvents(), e.data.projects.controller.addEvents(), e.data.infos.controller.addEvents(), e.$on(s.CHANGE_STATE, _.bind(function (e, n) {
                        t.go(n.name)
                    }, this)), e.$on(s.OPEN_MENU, _.bind(function (e, n) {
                        t.go(M.PagesTypes.MENU)
                    }, this)), e.$on(s.CLICK_MENU, _.bind(function (e, r) {
                        r.name == n ? t.go(o, {
                            page: 1
                        }) : r.name == i ? t.go(l, {
                            page: "intro"
                        }) : r.name == a ? t.go(u, {
                            page: "letstalk"
                        }) : t.go(r.name), k.menuopen = !1
                    }, this)), e.$on(s.BACK, _.bind(function (n) {
                        var i = e.currstate.to,
                            s = e.currstate.from;
                        if (i.data.back || i.data.mback) r.isPhone() ? t.go(i.data.mback) : t.go(i.data.back);
                        else {
                            var a = s.name || "index";
                            t.go(a, e.currstate.params.from)
                        }
                    }, this)), e.$on(s.HOLD_START, _.bind(function () {
                        S.$holdrag && S.$holdrag.expand()
                    }, this)), e.$on(s.HOLD_END, _.bind(function () {
                        S.$holdrag && S.$holdrag.collapse()
                    }, this)), e.$on(s.SHARE_SITE, _.bind(function (e, t) {
                        b.shareOn(t)
                    }, this)), e.$on(s.TOGGLE_SOUNDS, _.bind(function (e, t) {
                        y.toggle()
                    }, this)), e.$on(s.OPEN_COOKIE, _.bind(function (e, t) {
                        window.open("cookie/", "_blank")
                    }, this))
                }, this.navigate = function (t) {
                    if (0 != t.value) {
                        var i = e.currstate.to.data.type;
                        if (P && n.cancel(P), P = n(_.bind(function () {
                                e.direction = {
                                    value: 0,
                                    type: M.DirsTipes.VERT
                                }, e.$apply()
                            }, this), 900), e.data.sections.textures.loaded && (i != M.PagesTypes.WALL && i != M.PagesTypes.LEAF || e.data.projects.textures.loaded))
                            if (i == M.PagesTypes.INDEX && t.type == M.DirsTipes.VERT) e.data.sections.controller.updatePage(t.value);
                            else if (i == M.PagesTypes.WALL && t.type == M.DirsTipes.VERT) e.data.projects.controller.updateWall(t.value);
                        else if (i == M.PagesTypes.LEAF) e.data.projects.controller.updateLeaf(t.value);
                        else if (i == M.PagesTypes.INFOS && t.type == M.DirsTipes.VERT) e.data.infos.controller.updatePage(t.value);
                        else if (i == M.PagesTypes.CLEAF) return
                    }
                }, this.setState = function (t, n) {
                    return N = [], e.data.sections.controller.setState(t), e.data.projects.controller.setState(t), e.data.infos.controller.setState(t), R.setAmbientSound(t), "about.scroll" == t.from.name && t.from.name == t.to.name ? void k.setState(t) : _.isUndefined(this.currstate) ? (this.currstate = t, void this.addState(t, n)) : ((t.to.name != this.currstate.to.name || parseInt(t.params.page) != parseInt(this.currstate.params.to.page) || t.params.leaf != this.currstate.params.to.leaf) && (this.removeState(this.currstate), this.currstate = t), void this.addState(t, n))
                }, this.addState = function (t, n) {
                    var i = z[t.to.data.instance];
                    O = S, S = new i(e, t.model), e.section = S, this.addOnTop(t, n) ? A.addChild(S.render().$el) : A.addChildAt(S.render().$el, 0), A.addChild(k.$el), k.setState(t), t.to.data.type != M.PagesTypes.WALL && t.to.data.type != M.PagesTypes.LEAF ? D.start() : D.stop(), N.push(new TimelineMax({
                        tweens: this.getTweensIn(t, n),
                        stagger: .15
                    })), this.tween()
                }, this.removeState = function (e) {
                    N.push(new TimelineMax({
                        tweens: this.getTweensOut(e),
                        data: {
                            scope: S
                        }
                    }))
                }, this.tween = function () {
                    var t = S;
                    new TimelineMax({
                        tweens: N,
                        onComplete: function () {
                            if (t.ready(), this.vars.tweens.length > 1) {
                                e.data.sections.controller.clearState(), e.data.projects.controller.clearState();
                                var n = this.vars.tweens[0].data.scope;
                                A.removeChild(n.$el), n.destroy(), n = null, O = null
                            }
                        }
                    })
                }, this.getTweensIn = function (e, t) {
                    var n = S.tweenIn;
                    return t && (e.to.data.type == M.PagesTypes.WALL && t.to.data.type == M.PagesTypes.WALL && (n = S.tweenInWithRows), e.to.data.type == M.PagesTypes.LEAF && t.to.data.type == M.PagesTypes.LEAF && (n = S.tweenInWithSlide), e.to.data.type == M.PagesTypes.WALL && t.to.data.type == M.PagesTypes.LEAF && (n = S.tweenInFromLeaf), t.to.data.type == M.PagesTypes.MENU && (n = S.tweenInFromMenu)), [n.call(S), k.tweenIn()]
                }, this.getTweensOut = function (t) {
                    var n = S.tweenOut;
                    return t.to.data.type == M.PagesTypes.INDEX && e.currstate.to.data.type != M.PagesTypes.INDEX && (n = S.tweenOutToPage), t.to.data.type == M.PagesTypes.WALL && e.currstate.to.data.type == M.PagesTypes.WALL && (n = S.tweenOutWithRows), t.to.data.type == M.PagesTypes.WALL && e.currstate.to.data.type == M.PagesTypes.LEAF && (n = S.tweenOutToLeaf), t.to.data.type == M.PagesTypes.LEAF && e.currstate.to.data.type == M.PagesTypes.LEAF && (n = S.tweenOutWithSlide), e.currstate.to.data.type == M.PagesTypes.MENU && (n = S.tweenOutToMenu), [n.call(S)]
                }, this.needClear = function (e, t, n) {
                    var i = !1;
                    return t.to.data.type == M.PagesTypes.WALL && e && e.isSideShow && (e.clearSides(), i = !0), i
                }, this.addOnTop = function (e, t) {
                    var n = !0;
                    return t && (t.to.data.type != e.to.data.type ? (e.from.data.type == M.PagesTypes.MENU || e.to.data.type == M.PagesTypes.LEAF || e.to.data.type == M.PagesTypes.WALL || e.to.data.type == M.PagesTypes.INFOS || e.to.data.type == M.PagesTypes.CLEAF) && (n = !1) : e.to.data.type == M.PagesTypes.LEAF && (n = !1)), n
                }, this.resize = function (e) {
                    e && I && (I.resize(e.w, e.h), j.resize(e), S && S.resize(e), k && k.resize(e), C && C.resize(e), E && E.resize(e))
                }, e.$watch("direction", _.bind(this.navigate, this)), e.$watch("currstate", _.bind(this.update, this)), e.$watch("stagesize", _.bind(this.resize, this))
            }
            return ["$scope", "$state", "$timeout", "$location", "Utils", "Events", "Menu", "Index", "Work", "About", "Contacts", "Wall", "Leaf", "Infos", "CLeaf", "SiteUI", "Benchmark", "Preloader", "AssetsLoader", "ThreeManager", "SoundManager", "PostProcessing", "Sharer", "Performance", "Const", e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/controllers/SectionsController", [], function () {
            function e(e, t, n, i, r) {
                this.count = 0, this.update = function () {
                    this.textures || (this.textures = e.data.sections.textures.items, this.collection = e.data.sections.collection, this.limit = this.collection.length - 1)
                }, this.addEvents = function () {
                    e.$on(n.OPEN_PAGE, _.bind(function (n) {
                        var r = e.currstate.to,
                            s = "about.scroll" == r.data.link ? "intro" : "contacts.leaf" == r.data.link ? "letstalk" : 1;
                        i.isPhone() ? t.go(r.data.mlink, {
                            leaf: e.data.projects.collection[0].route,
                            page: s
                        }) : t.go(r.data.link, {
                            page: s
                        })
                    }, this))
                }, this.setState = function (t) {
                    this.count = _.indexOf(this.collection, e.currstate.model), this.setTextureState(t)
                }, this.setTextureState = function (e) {
                    var t = this.textures[e.to.name];
                    t && t.paused && !i.isMobile() && t.play()
                }, this.clearTextureState = function () {
                    (e.data.projects.textures.loaded || e.currstate.to.data.type != r.PagesTypes.WALL) && _.each(this.textures, _.bind(function (t, n) {
                        t.id == e.currstate.to.name || t.paused || i.isMobile() || t.pause()
                    }, this))
                }, this.clearState = function () {
                    this.clearTextureState()
                }, this.updatePage = function (e) {
                    this.count += e, this.count < 0 && (this.count = 0), this.count > this.limit && (this.count = this.limit), this.collection && t.go(this.collection[this.count].name)
                }
            }
            return ["$scope", "$state", "Events", "Utils", "Const", e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/controllers/ProjectsController", [], function () {
            function e(e, t, n, i, r) {
                var s = "work.wall",
                    a = "work.wall.leaf";
                this.wallCount = 0, this.leafCount = 0, this.update = function () {
                    this.textures || (this.textures = e.data.projects.textures.items, this.collection = e.data.projects.collection, this.wallLimit = Math.ceil(this.collection.length / 2) - 1, this.leafLimit = this.collection.length - 1)
                }, this.addEvents = function () {
                    e.$on(n.OPEN_LEAF, _.bind(function (n, i) {
                        var r = e.currstate.to;
                        t.go(r.data.link, {
                            leaf: i.route
                        })
                    }, this)), e.$on(n.OPEN_LEAF_CONTENT, _.bind(function (t, n) {
                        e.currstate.to;
                        n.link && window.open(n.link, "_blank")
                    }, this))
                }, this.setState = function (t) {
                    this.wallCount = parseInt(t.params.to.page) - 1, this.leafCount = _.indexOf(this.collection, _.where(this.collection, {
                        route: e.currstate.params.to.leaf
                    })[0]), isNaN(this.wallCount) && (this.wallCount = -1), isNaN(this.leafCount) && (this.leafCount = -1), this.setTextureState(t)
                }, this.setTextureState = function (e) {
                    var t = e.to.data.type;
                    if (t == r.PagesTypes.WALL) {
                        var n = this.getSides(parseInt(e.params.to.page) - 1),
                            s = this.textures[this.collection[n.left].name],
                            a = this.textures[this.collection[n.right].name];
                        i.isMobile() || (s && s.paused && s.play(), a && a.paused && a.play())
                    } else if (t == r.PagesTypes.LEAF) {
                        var o = this.textures[_.where(this.collection, {
                            route: e.params.to.leaf
                        })[0].name];
                        o && o.paused && !i.isMobile() && o.play()
                    }
                }, this.clearTextureState = function () {
                    var t = e.currstate.to.data.type,
                        n = this.getSides(parseInt(e.currstate.params.to.page) - 1),
                        s = _.where(this.collection, {
                            route: e.currstate.params.to.leaf
                        })[0];
                    _.each(this.textures, _.bind(function (e, a) {
                        t == r.PagesTypes.WALL ? i.isMobile() || e.id == this.collection[n.left].name || e.id == this.collection[n.right].name || e.paused || e.pause() : t == r.PagesTypes.LEAF ? e.id == s.name || e.paused || i.isMobile() || e.pause() : e.paused || i.isMobile() || e.pause()
                    }, this))
                }, this.getSides = function (e) {
                    var t = 2 * e,
                        n = t + 1;
                    return n > this.collection.length - 1 && (t = this.collection.length - 2, n = this.collection.length - 1), {
                        left: t,
                        right: n
                    }
                }, this.clearState = function () {
                    this.clearTextureState()
                }, this.updateWall = function (e) {
                    0 == this.wallCount && 0 > e || this.wallCount == this.wallLimit && e > 0 || (this.wallCount += e, t.go(s, {
                        page: this.wallCount + 1,
                        dir: e
                    }))
                }, this.updateLeaf = function (e) {
                    this.leafCount += e, this.leafCount > this.leafLimit && e > 0 ? this.leafCount = 0 : this.leafCount < 0 && 0 > e && (this.leafCount = this.leafLimit);
                    var n = Math.floor(this.leafCount / 2) + 1,
                        i = this.collection[this.leafCount].route;
                    t.go(a, {
                        page: n,
                        leaf: i,
                        dir: e
                    })
                }
            }
            return ["$scope", "$state", "Events", "Utils", "Const", e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/controllers/InfosController", [], function () {
            function e(e, t, n, i, r) {
                this.count = 0, this.pages = ["intro", "team", "clients"], this.limit = this.pages.length - 1, this.addEvents = function () {
                    e.$on(i.SNAP_TEAM, _.bind(function (n, i) {
                        t.current.data.type == r.PagesTypes.INFOS && e.section.setIdentity(i)
                    }, this))
                }, this.setState = function (t) {
                    return this.count = _.indexOf(this.pages, t.params.to.page), e.section && e.section.setState ? void(t.to.data.type == r.PagesTypes.INFOS && e.section.setState(t)) : n(_.bind(function () {
                        this.setState(t)
                    }, this))
                }, this.updatePage = function (e) {
                    this.count += e, this.count < 0 && (this.count = 0), this.count > this.limit && (this.count = this.limit), t.go("about.scroll", {
                        page: this.pages[this.count]
                    })
                }
            }
            return ["$scope", "$state", "$timeout", "Events", "Const", e]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/core/DisplayObject", [], function () {
            return ["Utils", function (e) {
                function t() {
                    this.$el = new PIXI.Sprite, this.$el.scope = this, this.colors = e.getColors(), this.id = _.uniqueId("object_")
                }
                return t.prototype = {
                    render: function () {
                        return this
                    },
                    destroy: function () {
                        this.$el.destroy(!0), this.$el.scope = null, this.$el = null, this.colors = null
                    }
                }, t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/core/ContainerObject", [], function () {
            return ["DisplayObject", "$timeout", "Utils", function (e, t, n) {
                function i(t, n) {
                    e.call(this), this.model = n || {}, this.scope = t || {}, this.timer = null, this.timeline = null, this.loopTimeline = null, this.id = _.uniqueId("section_")
                }
                return i.prototype.constructor = i, i.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this
                    },
                    getTexture: function (e) {
                        var t, i = this.getTextureSource(e);
                        if (n.isMobile()) {
                            var r = new PIXI.BaseTexture(i);
                            t = new PIXI.Texture(r)
                        } else t = new PIXI.Texture.fromVideo(i), t.baseTexture.source.loop = !0;
                        return t
                    },
                    getTextureSource: function (e) {
                        var t = this.texStore.items[e.name];
                        return t._pixiId && (delete PIXI.utils.BaseTextureCache[t._pixiId], delete t._pixiId), t
                    },
                    ready: function () {
                        return this
                    },
                    update: function () {
                        return this
                    },
                    tweenIn: function () {
                        return new TimelineMax({
                            tweens: [TweenMax.from(this.$el, 1.5, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }), TweenMax.from(this.$el.scale, 1.5, {
                                x: 1.5,
                                y: 1.5,
                                ease: Expo.easeOut
                            })]
                        })
                    },
                    tweenOut: function () {
                        return this.removeEvents(), new TimelineMax({
                            tweens: [TweenMax.to(this.$el.scale, .75, {
                                x: 1.5,
                                y: 1.5,
                                ease: Cubic.easeInOut
                            }), TweenMax.to(this.$el, .75, {
                                alpha: 0,
                                ease: Cubic.easeInOut
                            })]
                        })
                    },
                    tweenInFromMenu: function () {
                        return this.tweenIn()
                    },
                    tweenOutToMenu: function () {
                        return this.tweenOut()
                    },
                    resize: function (e) {
                        this.$el.x = e.x, this.$el.y = e.y, this.stagesize = {
                            w: e.w,
                            h: e.h,
                            x: e.x,
                            y: e.y
                        }
                    },
                    removeEvents: function () {},
                    destroy: function () {
                        this.timer && t.cancel(this.timer), this.loopTimeline && this.loopTimeline.kill(), this.timeline && this.timeline.kill(), this.timer = null, this.timeline = null, this.loopTimeline = null, this.stagesize = null, this.scope = null, this.model = null, e.prototype.destroy.call(this)
                    }
                }), i
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/core/SectionObject", [], function () {
            return ["ContainerObject", "Text", "Poster", "Copy", "Maincta", "SoundManager", "Math2", "Events", "Utils", "$timeout", function (e, t, n, i, r, s, a, o, l, u) {
                function c(t, n) {
                    e.call(this, t, n), this.tweener = {
                        value: 0
                    }, this.repeatDelay = 3, this.timer = 0
                }
                return c.prototype.constructor = c, c.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var s = this.colors,
                            a = "work" == this.model.name ? 250 : 200;
                        return this.texStore = this.scope.data.sections.textures, this.$texture = this.getTexture(this.model), this.$poster = new n(this.$texture), this.$wrapper = new PIXI.Sprite, this.$head = new t(this.model.head.toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 18,
                            fill: s.white,
                            letterSpacing: .5
                        }), this.$copyline = new i(this.model.copylines, {
                            fontFamily: "timmons",
                            fontSize: a,
                            fill: s.green,
                            letterSpacing: 20
                        }), this.$subtitle = new t(this.model.subtitle.toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 32,
                            fill: s.white,
                            letterSpacing: .5
                        }), this.$description = new t(this.model.description.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: s.white,
                            letterSpacing: 0
                        }), this.$cta = new r(this.model.cta.toUpperCase()), this.$topLine = new PIXI.Graphics, this.$botLine = new PIXI.Graphics, this.$wrapper.addChild(this.$topLine), this.$wrapper.addChild(this.$botLine), this.$wrapper.addChild(this.$head.$el), this.$wrapper.addChild(this.$subtitle.$el), this.$wrapper.addChild(this.$description.$el), this.$wrapper.addChild(this.$copyline.render().$el), this.$wrapper.addChild(this.$cta.render().$el), this.$el.addChild(this.$poster.render().$el), this.$el.addChild(this.$wrapper), this.filter = new PIXI.filters.GlitchFilter, this.filter.resolution = l.getDpr(), this.filter.padding = 0, this.filter.seed = 0, this.addEvents(), this
                    },
                    addEvents: function () {
                        this.$cta.$el.click = this.$cta.$el.tap = _.bind(function (e) {
                            this.scope.$emit(o.OPEN_PAGE)
                        }, this)
                    },
                    update: function () {
                        e.prototype.update.call(this), this.$poster && this.$poster.update()
                    },
                    tweenIn: function () {
                        return this.timer = u(_.bind(this.loop, this), 3e3), this.timeline = new TimelineMax({
                            tweens: [TweenMax.to(this.$el, .125, {
                                alpha: 1,
                                ease: Expo.easeOut
                            }), new TimelineMax({
                                tweens: [this.$poster.tweenIn(), new TimelineMax({
                                    tweens: [new TimelineMax({
                                        tweens: [new TimelineMax({
                                            tweens: [TweenMax.allFrom(this.$head.$el.children.reverse(), .6, {
                                                x: -75,
                                                ease: Expo.easeInOut
                                            }, .05), TweenMax.from(this.$topLine.scale, .8, {
                                                x: 0,
                                                ease: Expo.easeInOut
                                            })],
                                            stagger: .08
                                        }), this.$cta.tweenIn()],
                                        stagger: .5
                                    }), new TimelineMax({
                                        tweens: [this.$copyline.tweenIn(), TweenMax.allFrom(this.$subtitle.$el.children, 1, {
                                            alpha: 0,
                                            ease: Expo.easeOut
                                        }, .025), TweenMax.allFrom(this.$description.$el.children, 1, {
                                            alpha: 0,
                                            ease: Expo.easeOut
                                        }, .015)],
                                        stagger: .15
                                    }), TweenMax.from(this.$botLine.scale, .9, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })],
                                    stagger: .15
                                })]
                            })],
                            stagger: .125
                        }), s.play("sections", "tweenIn", !0), this.timeline
                    },
                    tweenOut: function () {
                        return this.removeEvents(), this.timer && u.cancel(this.timer), this.timeline = new TimelineMax({
                            tweens: [this.$cta.tweenOut(), this.$poster.tweenOut(), new TimelineMax({
                                tweens: [TweenMax.to({
                                    value: 0
                                }, .5, {
                                    value: 1,
                                    ease: Cubic.easeInOut
                                }), TweenMax.to(this.$wrapper, .01, {
                                    alpha: 0,
                                    ease: Cubic.easeInOut
                                })],
                                stagger: .4
                            })],
                            onStart: _.bind(function () {
                                this.$wrapper.filters = [this.filter]
                            }, this),
                            onUpdate: _.bind(this.generateGlitch, this)
                        }), this.timeline
                    },
                    tweenInFromMenu: function () {
                        var e = this.scope.stagesize.x * -.5;
                        this.scope.stagesize.y * -.5;
                        return this.$poster.$video.alpha = 1, this.timer = u(_.bind(this.loop, this), 3e3), new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.from(this.$poster.$el.scale, 1.5, {
                                    x: 1.5,
                                    y: 1.5,
                                    ease: Expo.easeOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.from(this.$wrapper.scale, 1.5, {
                                    x: 1.5,
                                    y: 1.5,
                                    ease: Expo.easeOut
                                }), TweenMax.from(this.$wrapper, 1.5, {
                                    alpha: 1,
                                    x: e,
                                    ease: Expo.easeOut
                                })]
                            })],
                            stagger: .15
                        })
                    },
                    tweenOutToMenu: function () {
                        this.removeEvents(), this.timer && u.cancel(this.timer);
                        var e = this.scope.stagesize.x * -.5,
                            t = this.scope.stagesize.y * -.5;
                        return new TimelineMax({
                            tweens: [TweenMax.to(this.$el.scale, .75, {
                                x: 1.5,
                                y: 1.5,
                                ease: Cubic.easeInOut
                            }), TweenMax.to(this.$el, .75, {
                                alpha: 1,
                                x: e,
                                y: t,
                                ease: Cubic.easeInOut
                            })]
                        })
                    },
                    tweenOutToPage: function () {
                        return this.removeEvents(), this.timer && u.cancel(this.timer), this.timeline = new TimelineMax({
                            tweens: [this.$poster.tweenOutToPage(), new TimelineMax({
                                tweens: [TweenMax.fromTo(this.tweener, .5, {
                                    value: 0
                                }, {
                                    value: 1,
                                    ease: Cubic.easeInOut
                                }), TweenMax.to(this.$wrapper, .15, {
                                    alpha: 0,
                                    ease: Cubic.easeInOut
                                })],
                                stagger: .25
                            })],
                            onStart: _.bind(function () {
                                this.$wrapper.filters = [this.filter]
                            }, this),
                            onUpdate: _.bind(this.generateGlitch, this)
                        }), s.play("sections", "tweenOut", !0), this.timeline
                    },
                    loop: function () {
                        s.play("sections", "copyloop", !0), this.tweener.value = this.$copyline.width, this.loopTimeline = new TimelineMax({
                            tweens: [this.$cta.getLoop(), this.$copyline.getLoop(), TweenMax.to(this.tweener, .75, {
                                value: this.$copyline.width,
                                ease: Expo.easeInOut,
                                onUpdate: _.bind(function () {
                                    this.$topLine && (this.$topLine.clear(), this.$topLine.beginFill(this.colors.white), this.$topLine.drawRect(50 + this.$head.width + 25, 0, this.tweener.value - this.$head.width - 33, 1))
                                }, this)
                            })]
                        }), this.timer = u(_.bind(this.loop, this), 1e3 * this.repeatDelay)
                    },
                    generateGlitch: function () {
                        this.filter.byp = 0, this.filter.amount = Math.random() / 60, this.filter.angle = a.randFloat(-Math.PI, Math.PI), this.filter.distortionX = a.randFloat(0, 1), this.filter.distortionY = a.randFloat(0, 1), this.filter.seedX = a.randFloat(-.5, .5), this.filter.seedY = a.randFloat(-.5, .5)
                    },
                    resize: function (t) {
                        e.prototype.resize.call(this, t), this.deafultResize(t), t.w < 768 && this.phoneResize(t), this.$el.x = this.$el.y = 0
                    },
                    deafultResize: function (e) {
                        var t = this.colors,
                            n = 50,
                            i = 20;
                        this.$poster.resize(e), this.$head.$el.scale.x = 1, this.$head.$el.scale.y = 1, this.$head.$el.x = n, this.$head.$el.y = -9, this.$copyline.$el.scale.x = 1, this.$copyline.$el.scale.y = 1, this.$copyline.$el.x = n - 5, this.$copyline.$el.y = i + 5, this.$subtitle.$el.scale.x = 1, this.$subtitle.$el.scale.y = 1, this.$subtitle.$el.y = this.$copyline.$el.y + this.$copyline.height + i, this.$subtitle.$el.x = n, this.$description.$el.scale.x = 1, this.$description.$el.scale.y = 1, this.$description.$el.y = this.$subtitle.$el.y + this.$subtitle.height + i, this.$description.$el.x = n, this.height = Math.round(this.$description.$el.y + this.$description.height + 11), this.$cta.$el.x = Math.round(.75 * e.w), this.$cta.$el.y = 0, this.$wrapper.y = Math.round(e.y - .5 * (this.height + i)), this.$wrapper.x = 0, this.$topLine.clear(), this.$topLine.beginFill(t.white), this.$topLine.drawRect(n + this.$head.width + 25, 0, this.$copyline.width - this.$head.width - 33, 1), this.$botLine.clear(), this.$botLine.beginFill(t.white), this.$botLine.drawRect(0, this.height + i, -e.w + n, 2), this.$botLine.x = e.w
                    },
                    phoneResize: function (e) {
                        var t = this.colors,
                            n = 25,
                            i = 20;
                        this.$head.$el.scale.x = .7, this.$head.$el.scale.y = .7, this.$copyline.$el.scale.x = .5, this.$copyline.$el.scale.y = .5, this.$copyline.$el.y = i + 5, this.$subtitle.$el.scale.x = .6, this.$subtitle.$el.scale.y = .6, this.$subtitle.$el.y = this.$copyline.$el.y + .5 * this.$copyline.height + i, this.$description.$el.scale.x = .8, this.$description.$el.scale.y = .8, this.$description.$el.y = this.$subtitle.$el.y + .6 * this.$subtitle.height + i, this.height = Math.round(this.$description.$el.y + .8 * this.$description.height), this.$wrapper.y = Math.round(e.y - .6 * (this.height + i)), this.$wrapper.x = -n, this.$cta.$el.y = e.h - this.$wrapper.y - 110, this.$cta.$el.x = n + e.x, this.$botLine.clear(), this.$botLine.beginFill(t.white), this.$botLine.drawRect(0, this.height + i, -e.w + n, 2), this.$botLine.x = e.w + n
                    },
                    removeEvents: function () {
                        this.$cta.$el.click = this.$cta.$el.tap = null
                    },
                    destroy: function () {
                        this.removeEvents(), this.$head.destroy(!0), this.$description.destroy(!0), this.$copyline.destroy(!0), this.$subtitle.destroy(!0), this.$poster.destroy(!0), this.$cta.destroy(!0), this.$head = null, this.$poster = null, this.$copyline = null, this.$subtitle = null, this.$description = null, this.$topLine = null, this.$botLine = null, this.$wrapper = null, this.tweener = null, this.$cta = null, this.$texture = null, e.prototype.destroy.call(this)
                    }
                }), c
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/core/ThreeObject", [], function () {
            return ["DisplayObject", "Utils", function (e, t) {
                function n(n, i) {
                    e.call(this), this.dpr = t.getDpr(), this.factory = i, this.scope = n, this.r = 2 * Math.PI, this.angle = 0
                }
                return n.prototype = {
                    render: function () {
                        return e.prototype.render.call(this), this.renderer = new THREE.WebGLRenderer({
                            antialias: !0,
                            alpha: !1
                        }), this.renderer.setPixelRatio(this.dpr), this.renderer.setSize(1280, 720), this.renderer.shadowMap.enabled = !1, this.renderer.autoClear = !0, this.camera = new THREE.PerspectiveCamera(70, 1280 / 720, 1, 5e3), this.scene = new THREE.Scene, this
                    },
                    udpate: function () {
                        this.renderer.render(this.scene, this.camera), this.angle += .5
                    },
                    destroy: function () {
                        e.prototype.destroy.call(this)
                    }
                }, n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sections/Menu", [], function () {
            return ["DisplayObject", "ThreeManager", "SoundManager", "Menugrid", "Holdrag", "Events", "Utils", "Math2", function (e, t, n, i, r, s, a, o) {
                function l(t) {
                    e.call(this), this.scope = t || {}
                }
                return l.prototype.constructor = l, l.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var n = t.getTexture("menu"),
                            s = t.getStore().menu.scene.dpr;
                        return this.$base = new PIXI.Graphics, this.$el.addChild(this.$base), this.$scene = new i(n, s), this.$el.addChild(this.$scene.render().$el), this.$scene.filters = [this.getGlitch()], this.$holdrag = new r("Hold down & drag to rotate"), this.$el.addChild(this.$holdrag.render().$el), this.$el.interactive = !0, this
                    },
                    ready: function () {
                        return this
                    },
                    update: function () {
                        this.$scene && this.$scene.update(), this.$scene.filters[0].seed = .25 * Math.random()
                    },
                    getGlitch: function () {
                        var e = new PIXI.filters.GlitchFilter;
                        return e.resolution = a.getDpr(), e.angle = o.randFloat(-Math.PI, Math.PI), e.distortionX = -1, e.distortionY = -1, e.amount = .0015, e.padding = 0, e.seedX = 0, e.seedY = 0, e.byp = 0, e
                    },
                    tweenIn: function () {
                        return n.play("menu", "tweens", !0), new TimelineMax({
                            tweens: [TweenMax.to(this.$scene.filters[0], 1, {
                                amount: .0015,
                                ease: Cubic.easeOut
                            }), TweenMax.to(this.$holdrag.$mask.scale, .55, {
                                x: 1,
                                delay: .15,
                                ease: Cubic.easeInOut
                            }), this.$scene.tweenIn()]
                        })
                    },
                    tweenOut: function () {
                        return this.$holdrag.kill(), n.play("menu", "tweens", !0), new TimelineMax({
                            tweens: [TweenMax.to(this.$scene.filters[0], 1, {
                                amount: 0,
                                ease: Cubic.easeOut
                            }), TweenMax.to(this.$holdrag.$mask.scale, .25, {
                                x: 0,
                                ease: Cubic.easeInOut
                            }), this.$scene.tweenOutToPage()]
                        })
                    },
                    resize: function (e) {
                        this.$base.clear(), this.$base.beginFill(this.colors.red, 0), this.$base.drawRect(-e.x, -e.y, e.w, e.h), this.$scene && this.$scene.resize(e), this.$holdrag.$el.x = 0, this.$holdrag.$el.y = e.y / 1.5, this.$el.x = e.x, this.$el.y = e.y
                    },
                    destroy: function () {
                        t.clear("menu"), this.$base.destroy(), this.$scene.destroy(), this.$holdrag.destroy(), this.$holdrag = null, this.$scene = null, this.$base = null, e.prototype.destroy.call(this)
                    }
                }), l
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sections/Index", [], function () {
            return ["SectionObject", function (e) {
                function t(t, n) {
                    e.call(this, t, n)
                }
                return t.prototype.constructor = t, t.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this
                    },
                    loop: function () {
                        return !1
                    },
                    resize: function (t) {
                        e.prototype.resize.call(this, t), this.$topLine.clear(), this.$botLine.clear()
                    }
                }), t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sections/Work", [], function () {
            return ["SectionObject", function (e) {
                function t(t, n) {
                    e.call(this, t, n)
                }
                return t.prototype.constructor = t, t.prototype = _.extend(Object.create(e.prototype), {
                    redner: function () {
                        return e.prototype.redner.call(this), this
                    }
                }), t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sections/About", [], function () {
            return ["SectionObject", function (e) {
                function t(t, n) {
                    e.call(this, t, n)
                }
                return t.prototype.constructor = t, t.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this
                    }
                }), t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sections/Contacts", [], function () {
            return ["SectionObject", function (e) {
                function t(t, n) {
                    e.call(this, t, n)
                }
                return t.prototype.constructor = t, t.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return this.$hitmail = new PIXI.Graphics, this.$hitmail.beginFill(this.colors.white, 0), this.$hitmail.drawRect(0, 0, 140, 15), this.$hitmail.interactive = !0, this.$hitmail.buttonMode = !0, e.prototype.render.call(this), this
                    },
                    addEvents: function () {
                        e.prototype.addEvents.call(this), this.$hitmail.click = this.$hitmail.tap = _.bind(function (e) {
                            window.open("mailto:uprising@uprsg.com", "_self")
                        }, this)
                    },
                    removeEvents: function () {
                        e.prototype.removeEvents.call(this), this.$hitmail.click = this.$hitmail.tap = null
                    },
                    deafultResize: function (t) {
                        e.prototype.deafultResize.call(this, t), this.$hitmail.x = this.$description.$el.x - 5, this.$hitmail.y = this.$description.$el.y + this.$description.height - 10
                    }
                }), t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sections/Wall", [], function () {
            return ["ContainerObject", "SoundManager", "Visual", "Leafcta", "Specs", "Events", "$timeout", function (e, t, n, i, r, s, a) {
                function o(t) {
                    e.call(this, t), this.isRowsTween = !1, this.isSideTween = !1, this.isSideShow = !1, this.repeatDelay = 3, this.timer = 0
                }
                return o.prototype.constructor = o, o.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.collection = this.scope.data.projects.collection, this.texStore = this.scope.data.projects.textures, this.left = {}, this.left.model = this.collection[this.getSides().left], this.left.$texture = this.getTexture(this.left.model), this.left.$visual = new n(this.left.model, this.left.$texture, 1), this.left.$cta = new i("view project".toUpperCase(), 1), this.left.$caption = new r(this.left.model), this.left.$mask = new PIXI.Graphics, this.left.$wrap = new PIXI.Sprite, this.left.$el = new PIXI.Sprite, this.right = {}, this.right.model = this.collection[this.getSides().right], this.right.$texture = this.getTexture(this.right.model), this.right.$visual = new n(this.right.model, this.right.$texture, -1), this.right.$cta = new i("view project".toUpperCase(), -1), this.right.$caption = new r(this.right.model), this.right.$mask = new PIXI.Graphics, this.right.$wrap = new PIXI.Sprite, this.right.$el = new PIXI.Sprite, this.left.$texture.baseTexture.source.loop = !0, this.right.$texture.baseTexture.source.loop = !0, this.$dashline = new PIXI.Graphics, this.left.$wrap.addChild(this.left.$visual.render().$el), this.left.$wrap.addChild(this.left.$caption.render().$el), this.left.$wrap.addChild(this.left.$cta.render().$el), this.left.$el.addChild(this.left.$wrap), this.left.$el.addChild(this.left.$mask), this.right.$wrap.addChild(this.right.$visual.render().$el), this.right.$wrap.addChild(this.right.$caption.render().$el), this.right.$wrap.addChild(this.right.$cta.render().$el), this.right.$el.addChild(this.right.$wrap), this.right.$el.addChild(this.right.$mask), this.$el.addChild(this.left.$el), this.$el.addChild(this.right.$el), this.$el.addChild(this.$dashline), this.left.$wrap.mask = this.left.$mask, this.right.$wrap.mask = this.right.$mask, this.left.$caption.$el.rotation = -1.5708, this.right.$caption.$el.rotation = -1.5708, this.left.$mask.scale.x = .5, this.right.$mask.scale.x = .5, this.addEvents(), this
                    },
                    getSides: function () {
                        var e = parseInt(this.scope.currstate.params.to.page) - 1,
                            t = 2 * e,
                            n = t + 1;
                        return n > this.collection.length - 1 && (t = this.collection.length - 2, n = this.collection.length - 1), {
                            left: t,
                            right: n
                        }
                    },
                    addEvents: function () {
                        this.left.$cta.$el.mouseover = _.bind(function () {
                            this.isRowsTween || new TimelineMax({
                                tweens: [TweenMax.to(this.$dashline, 1.1, {
                                    x: this.scope.stagesize.x / 2,
                                    ease: Expo.easeOut
                                }), this.showSide(this.left, 1, 1.1), this.hideSide(this.right, -1, 1.1), this.left.$cta.toggleState(!0)]
                            })
                        }, this), this.left.$cta.$el.mouseout = _.bind(function () {
                            new TimelineMax({
                                tweens: [TweenMax.to(this.$dashline, 1.1, {
                                    x: 0,
                                    ease: Expo.easeOut
                                }), this.restoreSide(this.left, 1, 1.1), this.restoreSide(this.right, -1, 1.1), this.left.$cta.toggleState(!1)]
                            })
                        }, this), this.left.$cta.$el.click = this.left.$cta.$el.tap = _.bind(function () {
                            this.scope.$emit(s.OPEN_LEAF, this.left.model)
                        }, this), this.right.$cta.$el.mouseover = _.bind(function () {
                            this.isRowsTween || new TimelineMax({
                                tweens: [TweenMax.to(this.$dashline, 1.1, {
                                    x: -this.scope.stagesize.x / 2,
                                    ease: Expo.easeOut
                                }), this.showSide(this.right, -1, 1.1), this.hideSide(this.left, 1, 1.1), this.right.$cta.toggleState(!0)]
                            })
                        }, this), this.right.$cta.$el.mouseout = _.bind(function () {
                            new TimelineMax({
                                tweens: [TweenMax.to(this.$dashline, 1.1, {
                                    x: 0,
                                    ease: Expo.easeOut
                                }), this.restoreSide(this.left, 1, 1.1), this.restoreSide(this.right, -1, 1.1), this.right.$cta.toggleState(!0)]
                            })
                        }, this), this.right.$cta.$el.click = this.right.$cta.$el.tap = _.bind(function () {
                            this.scope.$emit(s.OPEN_LEAF, this.right.model)
                        }, this)
                    },
                    update: function () {
                        this.left.$visual && this.left.$visual.update(), this.right.$visual && this.right.$visual.update()
                    },
                    tweenIn: function () {
                        return this.timer = a(_.bind(this.loop, this), 1e3), e.prototype.tweenIn.call(this)
                    },
                    tweenOut: function () {
                        return this.timer && a.cancel(this.timer), e.prototype.tweenOut.call(this)
                    },
                    tweenInWithRows: function () {
                        this.isRowsTween = !0, t.play("projects", "wall", !0);
                        var e = this.scope.currstate.params.to.dir || 1;
                        return this.timer = a(_.bind(this.loop, this), 1e3), new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [this.left.$visual.tweenInWithRows(e), TweenMax.from(this.left.$cta.$el, 1, {
                                    x: 1 * (.5 * this.scope.stagesize.x + 180) * e,
                                    ease: Expo.easeInOut
                                }), this.left.$caption.tweenIn()],
                                stagger: .15
                            }), new TimelineMax({
                                tweens: [this.right.$visual.tweenInWithRows(e), TweenMax.from(this.right.$cta.$el, 1, {
                                    x: -1 * (.5 * this.scope.stagesize.x + 180) * e,
                                    ease: Expo.easeInOut
                                }), this.right.$caption.tweenIn()],
                                stagger: .15
                            }), TweenMax.from(this.$dashline, 1.1, {
                                alpha: 0,
                                ease: Expo.easeOut
                            })],
                            onComplete: _.bind(function () {
                                this.isRowsTween = !1
                            }, this)
                        })
                    },
                    tweenOutWithRows: function () {
                        this.removeEvents(), this.timer && a.cancel(this.timer);
                        var e = this.scope.currstate.params.to.dir || 1;
                        return new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(this.left.$cta.$el, 1, {
                                    x: 1 * -(.5 * this.scope.stagesize.x + 180) * e,
                                    ease: Expo.easeInOut
                                }), this.left.$visual.tweenOutWithRows(e), this.left.$caption.tweenOut()]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.right.$cta.$el, 1, {
                                    x: -1 * -(.5 * this.scope.stagesize.x + 180) * e,
                                    ease: Expo.easeInOut
                                }), this.right.$visual.tweenOutWithRows(e), this.right.$caption.tweenOut()]
                            })]
                        })
                    },
                    tweenOutToLeaf: function () {
                        var e = [],
                            t = 0;
                        return this.removeEvents(), this.isSideTween = !0, this.timer && a.cancel(this.timer), this.scope.currstate.params.to.leaf == this.left.model.route && (e.push(this.openSide(this.left, 1)), e.push(this.closeSide(this.right, -1)), t = 1), this.scope.currstate.params.to.leaf == this.right.model.route && (e.push(this.openSide(this.right, -1)), e.push(this.closeSide(this.left, 1)), t = -1), e.push(TweenMax.to(this.$dashline, 1.1, {
                            x: this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), new TimelineMax({
                            tweens: e,
                            onComplete: _.bind(function () {
                                this.isSideTween = !1
                            }, this)
                        })
                    },
                    tweenInFromLeaf: function () {
                        var e = [],
                            t = 0;
                        return this.isSideTween = !0, this.resize(this.scope.stagesize), this.timer = a(_.bind(this.loop, this), 1e3), this.scope.currstate.params.from.leaf == this.left.model.route && (e.push(this.reverseSideOpen(this.left, 1)), e.push(this.reverseSideClose(this.right, -1)), t = 1), this.scope.currstate.params.from.leaf == this.right.model.route && (e.push(this.reverseSideOpen(this.right, -1)), e.push(this.reverseSideClose(this.left, 1)), t = -1), e.push(TweenMax.from(this.$dashline, 1.1, {
                            x: this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), new TimelineMax({
                            tweens: e,
                            onComplete: _.bind(function () {
                                this.isSideTween = !1
                            }, this)
                        })
                    },
                    clearSides: function () {
                        this.removeEvents(), new TimelineMax({
                            tweens: [TweenMax.to(this.$dashline, .75, {
                                x: 0,
                                ease: Expo.easeOut
                            }), this.restoreSide(this.left, 1, .75), this.restoreSide(this.right, -1, .75)]
                        })
                    },
                    showSide: function (e, t, n) {
                        var i = [];
                        return e.isShow = !0, this.isSideShow = !0, i.push(TweenMax.to(e.$visual.$poster.filters[0], n, {
                            gray: 0,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$visual.$poster.getChildAt(1), n, {
                            alpha: 0,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$visual.$poster, n, {
                            x: .25 * this.scope.stagesize.x * t,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$mask, n, {
                            x: .25 * this.scope.stagesize.x * t,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$mask.scale, n, {
                            x: .75,
                            ease: Expo.easeOut
                        })), t > 0 && i.push(TweenMax.to(e.$caption.$el, n, {
                            x: this.scope.stagesize.x - e.$caption.height - 50,
                            ease: Expo.easeOut
                        })), new TimelineMax({
                            tweens: i
                        })
                    },
                    hideSide: function (e, t, n) {
                        var i = [];
                        return e.isHide = !0, i.push(TweenMax.to(e.$visual.$poster.filters[0], n, {
                            gray: 1,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$visual.$poster.getChildAt(1), n, {
                            alpha: 1,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$visual.$poster, n, {
                            x: .25 * -this.scope.stagesize.x * t,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$cta.$el, n, {
                            x: .5 * -this.scope.stagesize.x * t,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$mask, n, {
                            x: .25 * -this.scope.stagesize.x * t,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$mask.scale, n, {
                            x: .25,
                            ease: Expo.easeOut
                        })), t > 0 && i.push(TweenMax.to(e.$caption.$el, n, {
                            x: -e.$caption.height - 50,
                            ease: Expo.easeOut
                        })), new TimelineMax({
                            tweens: i,
                            stagger: 0
                        })
                    },
                    openSide: function (e, t) {
                        var n = [];
                        return n.push(TweenMax.to(e.$visual.$poster.filters[0], 1.1, {
                            gray: 0,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.to(e.$visual.$poster.getChildAt(1), 1.1, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.to(e.$visual.$poster, 1.1, {
                            x: .5 * this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.to(e.$mask, 1.1, {
                            x: .5 * this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.to(e.$mask.scale, 1.1, {
                            x: 1,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.to(e.$cta.$el, 1.1, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        })), n.push(e.$caption.tweenOut()), new TimelineMax({
                            tweens: n
                        })
                    },
                    closeSide: function (e, t) {
                        var n = [];
                        return n.push(TweenMax.to(e.$visual.$poster, 1.1, {
                            x: -this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.to(e.$mask, 1.1, {
                            x: .5 * -this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.to(e.$cta.$el, 1.1, {
                            x: -this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.to(e.$caption.$el, 1.1, {
                            x: .5 * -this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.to(e.$mask.scale, 1.1, {
                            x: 0,
                            ease: Expo.easeInOut
                        })), new TimelineMax({
                            tweens: n
                        })
                    },
                    reverseSideOpen: function (e, t) {
                        var n = [];
                        return n.push(TweenMax.fromTo(e.$visual.$poster.filters[0], 1.1, {
                            gray: 0
                        }, {
                            gray: 1,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.fromTo(e.$visual.$poster.getChildAt(1), 1.1, {
                            alpha: 0
                        }, {
                            alpha: 1,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.from(e.$visual.$poster, 1.1, {
                            x: .5 * this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.from(e.$mask, 1.1, {
                            x: .5 * this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.from(e.$mask.scale, 1.1, {
                            x: 1,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.from(e.$cta.$el, 1.1, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        })), n.push(e.$caption.tweenIn()), new TimelineMax({
                            tweens: n
                        })
                    },
                    reverseSideClose: function (e, t) {
                        var n = [];
                        return n.push(TweenMax.from(e.$visual.$poster, 1.1, {
                            x: -this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.from(e.$caption.$el, 1.1, {
                            x: .5 * -this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.from(e.$cta.$el, 1.1, {
                            x: -this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.from(e.$mask, 1.1, {
                            x: .5 * -this.scope.stagesize.x * t,
                            ease: Expo.easeInOut
                        })), n.push(TweenMax.from(e.$mask.scale, 1.1, {
                            x: 0,
                            ease: Expo.easeInOut
                        })), new TimelineMax({
                            tweens: n
                        })
                    },
                    restoreSide: function (e, t, n) {
                        var i = [];
                        return e.isShow = !1, e.isHide = !1, i.push(TweenMax.to(e.$visual.$poster, n, {
                            x: 0,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$visual.$poster.filters[0], n, {
                            gray: 1,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$visual.$poster.getChildAt(1), n, {
                            alpha: 1,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$cta.$el, n, {
                            x: 0,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$mask.scale, n, {
                            x: .5,
                            ease: Expo.easeOut
                        })), i.push(TweenMax.to(e.$mask, n, {
                            x: 0,
                            ease: Expo.easeOut
                        })), t > 0 && i.push(TweenMax.to(e.$caption.$el, n, {
                            x: .5 * this.scope.stagesize.x - e.$caption.height - 50,
                            ease: Expo.easeOut
                        })), new TimelineMax({
                            tweens: i,
                            onStart: _.bind(function () {
                                this.isSideShow = !1
                            }, this)
                        })
                    },
                    loop: function () {
                        this.loopTimeline = new TimelineMax({
                            tweens: [this.left.$cta.getLoop(), this.right.$cta.getLoop()],
                            stagger: .2
                        }), this.timer = a(_.bind(this.loop, this), 600 * this.repeatDelay)
                    },
                    resize: function (t) {
                        e.prototype.resize.call(this, t), this.$dashline.clear(), this.$dashline.y = -t.y, this.$dashline.beginFill(this.colors.white, .4);
                        for (var n = 0; n < Math.round(t.h / 5); ++n) this.$dashline.drawRect(-.5, Math.floor(5 * n), Math.floor(1), Math.floor(1));
                        this.left.$mask.clear(), this.left.$mask.beginFill(this.colors.red, .5), this.left.$mask.drawRect(-t.x, -t.y, t.w, t.h), this.left.isShow || this.left.isHide || (this.left.$caption.$el.x = .5 * t.x - this.left.$caption.height - 50), this.left.$caption.$el.y = t.y - 60, this.left.$el.x = .5 * -t.x * 1, this.left.$visual.resize(t), this.right.$mask.clear(), this.right.$mask.beginFill(this.colors.red, .5), this.right.$mask.drawRect(-t.x, -t.y, t.w, t.h), this.right.$caption.$el.x = .5 * t.x - this.right.$caption.height - 50, this.right.$caption.$el.y = t.y - 60, this.right.$el.x = .5 * -t.x * -1, this.right.$visual.resize(t)
                    },
                    removeEvents: function () {
                        this.left.$cta.click = this.left.$cta.tap = null, this.right.$cta.click = this.right.$cta.tap = null, this.left.$cta.$el.mouseover = null, this.left.$cta.$el.mouseout = null, this.right.$cta.$el.mouseover = null, this.right.$cta.$el.mouseout = null
                    },
                    destroy: function () {
                        this.removeEvents(), this.left.$visual.destroy(), this.left.$cta.destroy(), this.left.$caption.destroy(), this.left.$mask.destroy(), this.left.$wrap.destroy(), this.left.$el.destroy(), this.right.$visual.destroy(), this.right.$cta.destroy(), this.right.$caption.destroy(), this.right.$mask.destroy(), this.right.$wrap.destroy(), this.right.$el.destroy(), this.left.model = null, this.left.$texture = null, this.left.$visual = null, this.left.$cta = null, this.left.$caption = null, this.left.$mask = null, this.left.$wrap = null, this.left.$el = null, this.right.model = null, this.right.$texture = null, this.right.$visual = null, this.right.$cta = null, this.right.$caption = null, this.right.$mask = null, this.right.$wrap = null, this.right.$el = null, this.left = null, this.right = null, e.prototype.destroy.call(this)
                    }
                }), o
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sections/Leaf", [], function () {
            return ["ContainerObject", "SoundManager", "Visual", "Caption", "Utils", "Events", "Const", function (e, t, n, i, r, s, a) {
                function o(t) {
                    e.call(this, t)
                }
                return o.prototype.constructor = o, o.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.texStore = this.scope.data.projects.textures, this.collection = this.scope.data.projects.collection, this.model = _.where(this.collection, {
                            route: this.scope.currstate.params.to.leaf
                        })[0], this.$texture = new PIXI.Texture.fromVideo(this.getTextureSource(this.model)), this.$texture.baseTexture.source.loop = !0, this.$visual = new n(this.model, this.$texture, 0), this.$background = new PIXI.Graphics, this.$caption = new i(this.model), this.$mask = new PIXI.Graphics, this.$el.addChild(this.$background), this.$el.addChild(this.$visual.render().$el), this.$el.addChild(this.$caption.render().$el), this.$el.addChild(this.$mask), this.$visual.$poster.getChildAt(1).alpha = 0, this.$visual.$poster.filters[0].gray = 0, this.$visual.$el.mask = this.$mask, this.addEvents(), this
                    },
                    addEvents: function () {
                        this.$caption.$cta.click = this.$caption.$cta.tap = _.bind(function () {
                            this.scope.$emit(s.OPEN_LEAF_CONTENT, this.model)
                        }, this)
                    },
                    ready: function () {
                        if (e.prototype.ready.call(this), !this.scope) return this;
                        var t = this.scope.currstate.to,
                            n = this.scope.currstate.from;
                        return n.data && n.data.type != a.PagesTypes.MENU && n.data && n.data.type != a.PagesTypes.LEAF && t.data && t.data.type == a.PagesTypes.LEAF && this.$caption.tweenInWithSlide(-1), this
                    },
                    update: function () {
                        this.$visual && this.$visual.update()
                    },
                    tweenIn: function () {
                        return r.isPhone() ? e.prototype.tweenIn.call(this) : new TimelineMax({
                            tweens: []
                        })
                    },
                    tweenOut: function () {
                        return this.removeEvents(), r.isPhone() ? e.prototype.tweenOut.call(this) : new TimelineMax({
                            tweens: [TweenMax.set(this.$background, {
                                alpha: 0
                            }), TweenMax.set(this.$visual.$el, {
                                alpha: 0
                            }), this.$caption.tweenOutWithSlide(1)]
                        })
                    },
                    tweenInWithSlide: function () {
                        this.resize(this.scope.stagesize), t.play("projects", "leaf", !0);
                        var e = this.scope.currstate.params.to.dir || 1;
                        return new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.from(this.$mask, 1.4, {
                                    x: this.scope.stagesize.w * e,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(this.$mask.scale, 1.4, {
                                    x: .6,
                                    ease: Expo.easeInOut
                                }), this.$visual.tweenInWithSlide(e)]
                            }), this.$caption.tweenInWithSlide(e)],
                            stagger: .4
                        })
                    },
                    tweenOutWithSlide: function () {
                        this.removeEvents();
                        var e = this.scope.currstate.params.to.dir || 1;
                        return new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.set(this.$background, {
                                    alpha: 1
                                }), TweenMax.to(this.$background, 1.4, {
                                    x: -this.scope.stagesize.w * e,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$mask, 1.4, {
                                    x: -this.scope.stagesize.w * e,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$mask.scale, 1.4, {
                                    x: .6,
                                    ease: Expo.easeInOut
                                }), this.$visual.tweenOutWithSlide(e)]
                            }), this.$caption.tweenOutWithSlide(e)],
                            stagger: .15
                        })
                    },
                    tweenInFromMenu: function () {
                        return new TimelineMax({
                            tweens: [TweenMax.set(this.$background, {
                                alpha: 0
                            }), TweenMax.from(this.$el, 1.5, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }), TweenMax.from(this.$el.scale, 1.5, {
                                x: 1.5,
                                y: 1.5,
                                ease: Expo.easeOut
                            })]
                        })
                    },
                    tweenOutToMenu: function () {
                        return this.removeEvents(), new TimelineMax({
                            tweens: [TweenMax.set(this.$background, {
                                alpha: 0
                            }), TweenMax.to(this.$el, .75, {
                                alpha: 0,
                                ease: Cubic.easeInOut
                            }), TweenMax.to(this.$el.scale, .75, {
                                x: 1.5,
                                y: 1.5,
                                ease: Cubic.easeInOut
                            })]
                        })
                    },
                    resize: function (t) {
                        e.prototype.resize.call(this, t);
                        var n = 50,
                            i = 20;
                        this.$visual && this.$visual.resize(t), this.$background.clear(), this.$background.beginFill(this.colors.red), this.$background.drawRect(-t.x, -t.y, t.w, t.h), this.$caption.$el.x = -t.x + n, this.$caption.$el.y = t.y - i, this.$mask.clear(), this.$mask.beginFill(this.colors.red), this.$mask.drawRect(-t.x, -t.y, t.w, t.h)
                    },
                    removeEvents: function () {
                        this.$caption.$cta.click = this.$caption.$cta.tap = null
                    },
                    destroy: function () {
                        this.removeEvents(), this.$background.destroy(), this.$visual.destroy(), this.$mask.destroy(), this.$background = null, this.$texture = null, this.$visual = null, this.$mask = null, e.prototype.destroy.call(this)
                    }
                }), o
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sections/Infos", [], function () {
            return ["DisplayObject", "ThreeManager", "SoundManager", "Aboutintro", "Identity", "Clients", "Holdrag", "Utils", "Events", "Math2", function (e, t, n, i, r, s, a, o, l, u) {
                function c(t) {
                    e.call(this), this.scope = t || {}
                }
                return c.prototype.constructor = c, c.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var n = t.getTexture("infos"),
                            r = this.scope.data.infos.clients;
                        return this.$base = new PIXI.Graphics, this.$el.addChild(this.$base), this.$scene = new PIXI.Sprite(n), this.$scene.anchor.x = .5, this.$scene.anchor.y = .5, this.$intro = new i, this.$clients = new s(r), this.$lines = new PIXI.Sprite, this.$baseline = new PIXI.Graphics, this.$tweenline = new PIXI.Sprite, this.$tweenlineGraph = new PIXI.Graphics, this.$baseline.beginFill(this.colors.white, .2), this.$baseline.drawRect(0, 0, 1, 80), this.$tweenlineGraph.beginFill(this.colors.white, 1), this.$tweenlineGraph.drawRect(0, 0, 1, 80), this.$tweenlineGraph.scale.y = .2, this.$mouselabels = new PIXI.Sprite, this.$mouselabel1 = new PIXI.Text("Discover the team".toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: this.colors.white
                        }), this.$mouselabel2 = new PIXI.Text("Clients List".toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: this.colors.white
                        }), this.$mouselabelsMask = new PIXI.Graphics, this.$mouselabelsMask.beginFill(this.colors.white, .5), this.$mouselabelsMask.drawRect(-5, -5, this.$mouselabel1.width + 10, this.$mouselabel1.height + 10), this.$mouselabel2.x = this.$mouselabel1.width + 10, this.$holder = new PIXI.Sprite, this.$holdrag = new a("Hold down & drag to discover the team"), this.$lines.addChild(this.$baseline), this.$lines.addChild(this.$tweenline), this.$tweenline.addChild(this.$tweenlineGraph), this.$mouselabels.addChild(this.$mouselabel1), this.$mouselabels.addChild(this.$mouselabel2), this.$mouselabels.addChild(this.$mouselabelsMask), this.$mouselabels.mask = this.$mouselabelsMask, this.$el.addChild(this.$scene), this.$el.addChild(this.$holder), this.$el.addChild(this.$intro.render().$el), this.$el.addChild(this.$clients.render().$el), this.$el.addChild(this.$holdrag.render().$el), this.$el.addChild(this.$mouselabels), this.$el.addChild(this.$lines), this.$scene.filters = [this.getGlitch()], this.$el.interactive = !0, this
                    },
                    setIdentity: function (e) {
                        var t = [];
                        return this.identity && t.push(this.identity.tweenOut()), e ? (this.identity = new r(e), this.$holder.addChild(this.identity.render().$el), t.push(this.identity.tweenIn())) : this.identity = null, n.play("about", "copytween", !0), new TimelineMax({
                            tweens: t,
                            stagger: .15
                        })
                    },
                    ready: function () {
                        return this
                    },
                    update: function () {
                        this.$scene && this.$scene.texture.update(), this.$scene.filters[0].seed = .25 * Math.random()
                    },
                    setState: function (e) {
                        var i = [],
                            r = e.params.to.page,
                            s = t.getStore().infos.scene;
                        return this.timeline && this.timeline.kill(), this.initState && n.play("about", "scroll", !0), "intro" == r ? (i.push(s.tweenOut()), i.push(this.$intro.tweenIn()), i.push(this.$clients.tweenOut()), i.push(TweenMax.to(this.$holdrag.$mask.scale, .25, {
                            x: 0,
                            ease: Cubic.easeInOut
                        })), i.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(this.$mouselabel2, .8, {
                                    x: this.$mouselabel1.width + 10,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$mouselabel1, .8, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .1
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$baseline, 1, {
                                    y: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$tweenline, 1, {
                                    y: 0,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .12
                            })],
                            stagger: .1
                        })), this.loopTimeline && this.loopTimeline.kill(), this.loopTimeline = new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.fromTo(this.$tweenlineGraph, 1, {
                                    y: 0
                                }, {
                                    y: 0,
                                    ease: Expo.easeOut
                                }), TweenMax.fromTo(this.$tweenlineGraph.scale, 1, {
                                    y: 0
                                }, {
                                    y: .2,
                                    ease: Expo.easeOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$tweenlineGraph.scale, 1, {
                                    y: 1,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$tweenlineGraph, 1, {
                                    y: 100,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .35
                            })],
                            stagger: 1.35,
                            repeat: -1
                        }), n.play("about", "introtween", !0)) : "team" == r ? (i.push(s.tweenIn()), i.push(this.$intro.tweenOut()), i.push(this.$clients.tweenOut()), i.push(TweenMax.to(this.$holdrag.$mask.scale, .55, {
                            x: 1,
                            delay: .15,
                            ease: Cubic.easeInOut
                        })), i.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(this.$mouselabel1, .8, {
                                    x: -this.$mouselabel1.width - 10,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$mouselabel2, .8, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .1
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$tweenline, 1, {
                                    y: 100,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$baseline, 1, {
                                    y: 100,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .12
                            })],
                            stagger: .1
                        })), this.loopTimeline && this.loopTimeline.kill()) : "clients" == r && (i.push(s.tweenOut()), i.push(this.$intro.tweenOut()), i.push(this.$clients.tweenIn()), i.push(TweenMax.to(this.$holdrag.$mask.scale, .25, {
                            x: 0,
                            ease: Cubic.easeInOut
                        })), i.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(this.$mouselabel1, .8, {
                                    x: -this.$mouselabel1.width - 10,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$mouselabel2, .8, {
                                    x: -this.$mouselabel1.width - 10,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .1
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$tweenline, 1, {
                                    y: 100,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$baseline, 1, {
                                    y: 100,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .12
                            })],
                            stagger: .1
                        })), this.loopTimeline && this.loopTimeline.kill(), n.play("about", "introtween", !0)), this.initState = !0, this.timeline = new TimelineMax({
                            tweens: i
                        }), this.timeline
                    },
                    getGlitch: function () {
                        var e = new PIXI.filters.GlitchFilter;
                        return e.resolution = o.getDpr(), e.angle = u.randFloat(-Math.PI, Math.PI), e.distortionX = -1, e.distortionY = -1, e.amount = .0015, e.padding = 0, e.seedX = 0, e.seedY = 0, e.byp = 0, e
                    },
                    tweenIn: function () {
                        return new TimelineMax({
                            tweens: [TweenMax.from(this.$el, 1.5, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }), TweenMax.from(this.$el.scale, 1.5, {
                                x: 1.5,
                                y: 1.5,
                                ease: Expo.easeOut
                            })]
                        })
                    },
                    tweenOut: function () {
                        return this.$holdrag.kill(), new TimelineMax({
                            tweens: [TweenMax.to(this.$el.scale, .75, {
                                x: 1.25,
                                y: 1.25,
                                ease: Cubic.easeInOut
                            }), TweenMax.to(this.$el, .75, {
                                alpha: 0,
                                ease: Cubic.easeInOut
                            })]
                        })
                    },
                    tweenInFromMenu: function () {
                        return this.tweenIn()
                    },
                    tweenOutToMenu: function () {
                        return this.tweenOut()
                    },
                    resize: function (e) {
                        var n = 1,
                            i = t.getStore().infos.scene.dpr;
                        this.$base.clear(), this.$base.beginFill(this.colors.red, 0), this.$base.drawRect(-e.x, -e.y, e.w, e.h), this.$el.x = e.x, this.$el.y = e.y, this.$holder.x = -e.x, this.$intro.resize(e), this.$clients.resize(e), this.$holdrag.$el.x = 0, this.$holdrag.$el.y = e.y / 1.5, this.$lines.y = e.y - 80, this.$mouselabels.rotation = -1.5708, this.$mouselabels.x = -e.x + 54, this.$mouselabels.y = e.y - 80, this.identity && this.identity.resize(e), n = e.w / e.h > 1280 / 720 ? e.w / 1280 : e.h / 720, this.$scene.scale.x = n / i, this.$scene.scale.y = n / i
                    },
                    destroy: function () {
                        t.clear("infos"), this.loopTimeline && this.loopTimeline.kill(), this.identity && this.identity.destroy(), this.$base.destroy(), this.$holder.destroy(), this.$intro.destroy(), this.$clients.destroy(), this.$holdrag.destroy(), this.$lines.destroy(), this.$mouselabel1.destroy(!0), this.$mouselabel2.destroy(!0), this.$mouselabels.destroy(), this.$mouselabel1 = null, this.$mouselabel2 = null, this.$mouselabels = null, this.$holdrag = null, this.identity = null, this.$holder = null, this.$clients = null, this.$intro = null, this.$scene = null, this.$lines = null, this.$base = null, e.prototype.destroy.call(this)
                    }
                }), c
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sections/CLeaf", [], function () {
            return ["ContainerObject", "Text", "Utils", function (e, t, n) {
                function i(t, n) {
                    e.call(this, t, n), this.labels = {
                        title: "Uprising™",
                        body: "Via Vigevano 14, 20144\nMilan - Italy\n+39 02 367.54.221\nuprising@uprsg.com",
                        quests: [{
                            q: "Would you share a digital project?",
                            a: "Business enquiries",
                            mailto: "mailto:uprising@uprsg.com?subject=Business enquires"
                        }, {
                            q: "Would you join Uprising?",
                            a: "Apply for a job",
                            mailto: "mailto:uprising@uprsg.com?subject=Apply for a job"
                        }, {
                            q: "Would you say hello?",
                            a: "Let’s talk!",
                            mailto: "mailto:uprising@uprsg.com?subject=Let’s talk!"
                        }]
                    }
                }
                return i.prototype.constructor = i, i.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var i = this.colors;
                        return this.model = this.scope.data.contacts.collection[0], this.texStore = this.scope.data.contacts.textures, this.$title = new t(this.labels.title.toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 34,
                            fill: i.white,
                            letterSpacing: 0
                        }), this.$body = new PIXI.Text(this.labels.body.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: i.white,
                            letterSpacing: 1,
                            lineHeight: 18
                        }), this.$body.y = -this.$body.height - 50, this.$title.$el.y = this.$body.y - this.$title.height - 30, this.$quests = new PIXI.Sprite, _.each(this.labels.quests, function (e, n) {
                            var r = new PIXI.Sprite,
                                s = new PIXI.Text(e.q.toUpperCase(), {
                                    fontFamily: "montser-bold",
                                    fontSize: 9,
                                    fill: i.white,
                                    letterSpacing: 1
                                }),
                                a = new t(e.a.toUpperCase(), {
                                    fontFamily: "din-condensed-web",
                                    fontSize: 21,
                                    fill: i.red,
                                    letterSpacing: 1
                                }),
                                o = new PIXI.Graphics,
                                l = new PIXI.Graphics;
                            a.$el.y = s.height + 8, l.mailto = e.mailto, r.y = 65 * n, o.beginFill(i.white, 1), o.drawRect(0, a.$el.y + a.height / 2 - 1, -a.width - 10, 2), o.x = -20, l.beginFill(i.white, 0), l.drawRect(-5, a.$el.y - 5, a.width + 10, a.height + 10), l.interactive = !0, l.buttonMode = !0, l.timeline = new TimelineMax({
                                tweens: [TweenMax.to(o, .6, {
                                    x: a.width + 5,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(o.scale, .75, {
                                    bezier: {
                                        curviness: 0,
                                        values: [{
                                            x: 3
                                        }, {
                                            x: 1
                                        }]
                                    },
                                    ease: Expo.easeInOut
                                })],
                                paused: !0
                            }), r.addChild(s), r.addChild(a.$el), r.addChild(o), r.addChild(l), this.$quests.addChild(r)
                        }, this), this.$holder = new PIXI.Sprite, this.$holder.addChild(this.$title.$el), this.$holder.addChild(this.$body), this.$holder.addChild(this.$quests), this.$texture = this.getTexture(this.model), this.$video = new PIXI.Sprite(this.$texture), this.$video.anchor.x = .5, this.$video.anchor.y = .5, this.$el.addChild(this.$video), this.$el.addChild(this.$holder), this.addEvents(), this.texStore.items.contacts && this.texStore.items.contacts.paused && !n.isMobile() && this.texStore.items.contacts.play(), this
                    },
                    addEvents: function () {
                        _.each(this.$quests.children, function (e) {
                            var t = e.getChildAt(3);
                            t.mouseover = _.bind(function () {
                                t.timeline.play()
                            }, this), t.mouseout = _.bind(function () {
                                t.timeline.reverse()
                            }, this), t.click = t.tap = _.bind(function (e) {
                                window.open(e.target.mailto, "_self")
                            }, this)
                        })
                    },
                    update: function () {
                        this.$texture && this.$texture.update()
                    },
                    resize: function (e) {
                        var t = 50,
                            n = 1;
                        this.$el.x = e.x, this.$el.y = e.y, this.$holder.x = -e.x + t, n = e.w / e.h > 1280 / 720 ? e.w / 1280 : e.h / 720, this.$video.scale.x = n, this.$video.scale.y = n
                    },
                    removeEvents: function () {
                        _.each(this.$quests.children, function (e) {
                            var t = e.getChildAt(3);
                            t.mouseover = null, t.mouseout = null
                        })
                    },
                    destroy: function () {
                        "contacts.leaf" == this.scope.currstate.to.name || this.texStore.items.contacts.paused || n.isMobile() || this.texStore.items.contacts.pause(), this.removeEvents(), this.$video.destroy(!0), this.$holder.destroy(!0), this.$video = null, this.$holder = null, e.prototype.destroy.call(this)
                    }
                }), i
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Text", [], function () {
            return ["DisplayObject", function (e) {
                function t(t, n) {
                    e.call(this), this.label = t, this.font = n.fontFamily, this.size = 2 * n.fontSize, this.spacing = n.letterSpacing || 0, this.fill = n.fill, this.tmpwidth = 0, this.tmpheight = 0, this.width = 0, this.height = 0, this.render()
                }
                return t.prototype.constructor = t, t.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        this.label.length < 1 && (this.label = " ");
                        var e, t, n, i, r, s = this.label.split("\n"),
                            a = this.getPadding(),
                            o = .5;
                        return _.each(s, function (l, u) {
                            for (var c = 0; c < l.length; ++c) r = l.charAt(c), i = new PIXI.Sprite, i.x = this.tmpwidth, i.y = this.tmpheight, i.scale.x = o, i.scale.y = o, n = new PIXI.Text(r, {
                                fontFamily: this.font,
                                fontSize: this.size,
                                fill: this.fill,
                                padding: a,
                                align: "left"
                            }), e = n.width - 2 * a, t = n.height + a / 1.325, n.y = a, n.x = 0, i.addChild(n), this.$el.addChild(i), this.tmpwidth += e * o + this.spacing;
                            s.length > 1 && (this.tmpheight = Math.round(t / this.getLineHeight() * (u + 1) * o), this.tmpwidth = 0)
                        }, this), this.width = Math.round(this.tmpwidth - this.spacing), this.height = Math.round(t * o), s.length > 1 && (this.width = 520, this.height = Math.round(this.tmpheight - 9)), this
                    },
                    text: function (e) {
                        this.label = e, _.each(this.$el.children, function () {
                            this.$el.getChildAt(0).getChildAt(0).destroy(!0), this.$el.removeChildAt(0)
                        }, this), this.tmpwidth = 0, this.tmpheight = 0, this.render()
                    },
                    getPadding: function () {
                        var e = 0;
                        return "timmons" == this.font && (e = this.size / 3.5), e
                    },
                    getLineHeight: function () {
                        return "timmons" == this.font ? .8 : "din-condensed-web" == this.font ? .9 : .6
                    },
                    destroy: function () {
                        _.each(this.$el.children, function (e) {
                            this.$el.getChildAt(0).getChildAt(0).destroy(!0), this.$el.removeChildAt(0)
                        }, this), e.prototype.destroy.call(this)
                    }
                }), t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Arrow", [], function () {
            return ["DisplayObject", function (e) {
                function t(t) {
                    e.call(this), this.color = t
                }
                return t.prototype.constructor = t, t.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.$base = new PIXI.Graphics, this.$line = new PIXI.Sprite, this.$top = new PIXI.Sprite, this.$lineIn = new PIXI.Graphics, this.$lineOut = new PIXI.Graphics, this.$topIn = new PIXI.Graphics, this.$topOut = new PIXI.Graphics, this.$base.beginFill(this.colors.white, 0), this.$base.drawRect(-13, -10, 26, 20), this.$lineIn.beginFill(this.color), this.$lineIn.drawRect(-13, -1, 26, 2), this.$lineOut.beginFill(this.color), this.$lineOut.drawRect(-13, -1, 26, 2), this.$topIn.beginFill(this.color), this.$topIn.drawRect(-1, -8, 2, 7), this.$topOut.beginFill(this.color), this.$topOut.drawRect(-1, -8, 2, 7), this.$line.addChild(this.$lineIn), this.$line.addChild(this.$lineOut), this.$top.addChild(this.$topIn), this.$top.addChild(this.$topOut), this.$top.rotation = .7853, this.$top.x = -12.5, this.$el.addChild(this.$base), this.$el.addChild(this.$line), this.$el.addChild(this.$top), this
                    }
                }), t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Poster", [], function () {
            return ["DisplayObject", "Delaunay", "Fragment", "Performance", "Utils", function (e, t, n, i, r) {
                function s(t) {
                    e.call(this), this.$texture = t, this.width = r.isMobile() ? 960 : 1280, this.height = r.isMobile() ? 540 : 720, this.ratio = this.width / this.height, this.timeline = null, this.fragstore = [], this.maxFrags = 17, this.frags = 2
                }
                return s.prototype.constructor = s, s.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.$video = new PIXI.Sprite(this.$texture), this.$holder = new PIXI.Sprite, this.$video.anchor.x = .5, this.$video.anchor.y = .5, this.$video.alpha = 0, this.$el.addChild(this.$video), this.$el.addChild(this.$holder), this.frags = this.maxFrags, this
                    },
                    update: function () {
                        this.$texture && this.$texture.update()
                    },
                    tweenIn: function () {
                        var e = [];
                        return this.timeline && this.timeline.kill(), 0 == this.fragstore.length && this.addFragments(), _.each(this.fragstore, function (t) {
                            e.push(t.tweenIn())
                        }, this), this.timeline = new TimelineMax({
                            tweens: [TweenMax.from(this.$el, .15, {
                                alpha: 0,
                                ease: Cubic.easeInOut
                            }), new TimelineMax({
                                tweens: e,
                                stagger: .0075
                            })],
                            onComplete: _.bind(function () {
                                this.$video && (this.$video.alpha = 1), this.removeFragments()
                            }, this)
                        }), this.timeline
                    },
                    tweenOut: function () {
                        return this.timeline = new TimelineMax({
                            tweens: [TweenMax.to(this.$el, 1, {
                                alpha: 0,
                                rotation: -.45,
                                ease: Cubic.easeInOut
                            }), TweenMax.to(this.$el.scale, 1, {
                                x: 1.125,
                                y: 1.125,
                                ease: Cubic.easeInOut
                            })]
                        }), this.timeline
                    },
                    tweenOutToPage: function () {
                        var e = [];
                        return this.timeline && this.timeline.kill(), 0 == this.fragstore.length && this.addFragments(), _.each(this.fragstore, function (t) {
                            e.push(t.tweenOut())
                        }, this), this.$video.alpha = 0, new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: e.reverse(),
                                stagger: .0075
                            })],
                            onComplete: _.bind(function () {
                                this.removeFragments()
                            }, this)
                        })
                    },
                    addFragments: function () {
                        this.stagesize || (this.stagesize = this.getStageSize());
                        var e, i, r, s, a = t.triangulate(this.stagesize.w, this.stagesize.h, this.frags),
                            o = t.getIndices(a);
                        this.fragstore = [];
                        for (var l = 0; l < o.length; l += 3) i = a[o[l + 0]], r = a[o[l + 1]], s = a[o[l + 2]], e = new n(this.$texture, i, r, s, this.stagesize), this.$holder.addChild(e.render().$el), this.fragstore.push(e);
                        t.sortTriangles(this.fragstore, this.stagesize.x, this.stagesize.y)
                    },
                    removeFragments: function () {
                        _.each(this.fragstore, function (e) {
                            e.destroy()
                        }, this), this.fragstore = []
                    },
                    getStageSize: function () {
                        var e = window.innerWidth,
                            t = window.innerHeight,
                            n = 1;
                        return n = e / t > this.ratio ? e / this.width : t / this.height, {
                            w: e,
                            h: t,
                            x: e / 2,
                            y: t / 2,
                            s: n
                        }
                    },
                    resize: function (e) {
                        var t = 1;
                        this.$el.x = e.x, this.$el.y = e.y, this.$holder.x = -e.x, this.$holder.y = -e.y, t = e.w / e.h > this.ratio ? e.w / this.width : e.h / this.height, this.$video.scale.x = t, this.$video.scale.y = t, this.stagesize = this.getStageSize()
                    },
                    destroy: function () {
                        this.fragstore.length > 0 && this.removeFragments(), this.$video.destroy(!0), this.$holder.destroy(!0), this.$texture = null, this.$video = null, e.prototype.destroy.call(this)
                    }
                }), s
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Visual", [], function () {
            return ["DisplayObject", "Utils", function (e, t) {
                function n(n, i, r) {
                    e.call(this), this.$texture = i, this.width = t.isMobile() ? 960 : 1280, this.height = t.isMobile() ? 540 : 720, this.numrows = (t.getDpr() > 1, 5), this.halfrows = Math.floor(this.numrows / 2), this.ratio = this.width / this.height, this.timeline = null, this.model = n, this.sort = r
                }
                return n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.$poster = this.getPoster(this.$texture), this.$poster.filters = [new PIXI.filters.GrayFilter], this.$poster.filters[0].resolution = t.getDpr(), this.$poster.filters[0].padding = 0, this.$poster.anchor.x = .5, this.$poster.anchor.y = .5, this.$el.addChild(this.$poster), this
                    },
                    update: function () {
                        this.$texture && this.$texture.update()
                    },
                    tweenInWithRows: function (e) {
                        var t = this.$poster.getChildAt(0),
                            n = this.$poster.getChildAt(1),
                            i = this.$poster.getChildAt(2);
                        this.$poster.getChildAt(3);
                        0 == i.children.length && this.addRows();
                        var r, s = this.stagesize.x * this.sort * e,
                            a = Math.floor(i.children.length / 2),
                            o = [],
                            l = [],
                            u = [],
                            c = [],
                            h = Expo.easeInOut,
                            d = .1,
                            p = 1;
                        for (r = a - 1; r >= 0; --r) o.push(new TimelineMax({
                            tweens: [TweenMax.from(i.children[r], p, {
                                x: s,
                                ease: h
                            }), TweenMax.from(i.children[r].getChildAt(3), p, {
                                alpha: .75,
                                ease: h
                            })]
                        }));
                        for (r = a + 1; r < i.children.length; ++r) l.push(new TimelineMax({
                            tweens: [TweenMax.from(i.children[r], p, {
                                x: s,
                                ease: h
                            }), TweenMax.from(i.children[r].getChildAt(3), p, {
                                alpha: .75,
                                ease: h
                            })]
                        }));
                        return u.push(new TimelineMax({
                            tweens: [TweenMax.from(i.children[a], p, {
                                x: s,
                                ease: h
                            }), TweenMax.from(i.children[a].getChildAt(3), p, {
                                alpha: .75,
                                ease: h
                            })]
                        })), 1 == e ? c.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: u
                            }), new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: o,
                                    stagger: d
                                }), new TimelineMax({
                                    tweens: l,
                                    stagger: d
                                })]
                            })],
                            stagger: d
                        })) : -1 == e && c.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: o.reverse(),
                                    stagger: d
                                }), new TimelineMax({
                                    tweens: l.reverse(),
                                    stagger: d
                                })]
                            }), new TimelineMax({
                                tweens: u
                            })],
                            stagger: d * this.halfrows
                        })), this.timeline = new TimelineMax({
                            tweens: c,
                            onComplete: _.bind(function () {
                                t && (t.alpha = 1), t.alpha = 1, n.alpha = 1, this.removeRows()
                            }, this)
                        }), t.alpha = 0, n.alpha = 0, this.timeline
                    },
                    tweenOutWithRows: function (e) {
                        var t = this.$poster.getChildAt(0),
                            n = this.$poster.getChildAt(1),
                            i = this.$poster.getChildAt(2),
                            r = this.$poster.getChildAt(3);
                        this.timeline && this.timeline.kill(), 0 == i.children.length && this.addRows();
                        var s, a = this.stagesize.x * -this.sort * e,
                            o = Math.floor(i.children.length / 2),
                            l = [],
                            u = [],
                            c = [],
                            h = [],
                            d = Expo.easeInOut,
                            p = .1,
                            f = 1;
                        for (s = o - 1; s >= 0; --s) l.push(TweenMax.to(i.children[s], f, {
                            x: a,
                            ease: d
                        }));
                        for (s = o + 1; s < i.children.length; ++s) u.push(TweenMax.to(i.children[s], f, {
                            x: a,
                            ease: d
                        }));
                        return c.push(TweenMax.to(i.children[o], f, {
                            x: a,
                            ease: d
                        })), 1 == e ? h.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: c
                            }), new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: l,
                                    stagger: p
                                }), new TimelineMax({
                                    tweens: u,
                                    stagger: p
                                })]
                            })],
                            stagger: p
                        })) : -1 == e && h.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: l.reverse(),
                                    stagger: p
                                }), new TimelineMax({
                                    tweens: u.reverse(),
                                    stagger: p
                                })]
                            }), new TimelineMax({
                                tweens: c
                            })],
                            stagger: p * this.halfrows
                        })), this.timeline = new TimelineMax({
                            tweens: h
                        }), r.alpha = 0, t.alpha = 0, n.alpha = 0, this.timeline
                    },
                    tweenInWithSlide: function (e) {
                        return this.stagesize || (this.stagesize = this.getStageSize()), this.timeline = new TimelineMax({
                            tweens: [TweenMax.from(this.$el, 1.4, {
                                x: this.stagesize.w * e,
                                ease: Expo.easeInOut
                            }), TweenMax.from(this.$el.scale, 1.4, {
                                x: 1.5,
                                y: 1.5,
                                ease: Expo.easeInOut
                            })]
                        }), this.timeline
                    },
                    tweenOutWithSlide: function (e) {
                        return this.timeline = new TimelineMax({
                            tweens: [TweenMax.to(this.$el, 1.4, {
                                x: -this.stagesize.w * e,
                                ease: Expo.easeInOut
                            }), TweenMax.to(this.$el.scale, 1.4, {
                                x: 1.5,
                                y: 1.5,
                                ease: Expo.easeInOut
                            })]
                        }), this.timeline
                    },
                    addRows: function () {
                        this.stagesize || (this.stagesize = this.getStageSize());
                        var e = this.colors,
                            t = Math.round(this.stagesize.h / this.numrows),
                            n = this.$poster.getChildAt(2),
                            i = this.$poster.getChildAt(0),
                            r = this.stagesize.x;
                        i.alpha = 0;
                        for (var s = 0; s < this.numrows; ++s) {
                            var a = new PIXI.Sprite(i.texture),
                                o = new PIXI.Graphics,
                                l = new PIXI.Graphics,
                                u = new PIXI.Graphics,
                                c = new PIXI.Sprite;
                            o.beginFill(e.black), o.drawRect(-r / 2, 0, r, t), o.endFill(), l.beginFill(e.grey, .6), l.drawRect(-r / 2, 0, r, t), l.endFill(), u.beginFill(e.white, .6), u.drawRect(-r / 2, 0, r, t), u.endFill(), u.blendMode = PIXI.BLEND_MODES.ADD, u.alpha = 0, a.anchor.x = .5, a.anchor.y = .5, a.scale.x = this.stagesize.s, a.scale.y = this.stagesize.s, a.y = -t * s + this.stagesize.y, c.y = t * s - this.stagesize.y, c.addChild(a), c.addChild(l), c.addChild(o), c.addChild(u), c.mask = o, n.addChild(c)
                        }
                    },
                    removeRows: function () {
                        var e, t = this.$poster.getChildAt(2);
                        _.each(t.children, function () {
                            e = t.getChildAt(0), t.removeChildAt(0), e.destroy()
                        })
                    },
                    getPoster: function (e) {
                        var t = new PIXI.Sprite,
                            n = new PIXI.Sprite(e),
                            i = new PIXI.Graphics,
                            r = new PIXI.Sprite,
                            s = new PIXI.extras.TilingSprite(new PIXI.Texture.fromCanvas(this.getTile()));
                        return n.anchor.x = .5, n.anchor.y = .5, s.tileScale.x = .5, s.tileScale.y = .5, s.alpha = .15, t.addChild(n), t.addChild(i), t.addChild(r), t.addChild(s), t
                    },
                    getTile: function () {
                        var e = 2,
                            t = Math.floor(1 * e),
                            n = $("<canvas />")[0],
                            i = n.getContext("2d");
                        return n.width = 9 * e, n.height = 9 * e, i.fillStyle = "#000", i.fillRect(3 * e, 4 * e, 3 * t, t), i.fillRect(4 * e, 3 * e, t, 3 * t), i.fillRect(1 * e, 1 * e, t, t), i.fillRect(4 * e, 1 * e, t, t), i.fillRect(7 * e, 1 * e, t, t), i.fillRect(1 * e, 7 * e, t, t), i.fillRect(4 * e, 7 * e, t, t), i.fillRect(7 * e, 7 * e, t, t), i.fillRect(1 * e, 4 * e, t, t), i.fillRect(7 * e, 4 * e, t, t), n
                    },
                    getStageSize: function () {
                        var e = window.innerWidth,
                            t = window.innerHeight,
                            n = 1;
                        return n = e / t > this.ratio ? e / this.width : t / this.height, {
                            w: e,
                            h: t,
                            x: e / 2,
                            y: t / 2,
                            s: n
                        }
                    },
                    resize: function (e) {
                        var t = 1,
                            n = this.colors,
                            i = (this.sort > 0 ? 0 : 1, this.$poster.getChildAt(0)),
                            r = this.$poster.getChildAt(1),
                            s = this.$poster.getChildAt(3),
                            a = e.w,
                            o = e.h,
                            l = e.x,
                            u = e.y;
                        this.stagesize = this.getStageSize(), t = e.w / e.h > this.ratio ? e.w / this.width : e.h / this.height, i.scale.x = t, i.scale.y = t, r.clear(), r.beginFill(n.grey, .6), r.drawRect(-l, -u, a, o), s.x = -l, s.y = -u, s.width = a, s.height = o
                    },
                    destroy: function () {
                        var t = this.$poster.getChildAt(0);
                        t.destroy(!0);
                        var n = this.$poster.getChildAt(2);
                        n.destroy(!0), this.$poster.destroy(!0), this.$poster = null, this.$texture = null, this.model = null, this.sort = null, e.prototype.destroy.call(this)
                    }
                }), n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Fragment", [], function () {
            return ["DisplayObject", function (e) {
                function t(t, n, i, r, s) {
                    e.call(this), this.texture = t, this.size = s, this.v0 = n, this.v1 = i, this.v2 = r
                }
                return t.prototype.constructor = t, t.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.$wrap = new PIXI.Sprite, this.$mask = new PIXI.Graphics, this.$sprite = new PIXI.Sprite(this.texture), this.$solid = new PIXI.Graphics, this.$cdot = new PIXI.Graphics, this.bbox = this.computeBoundingBox(), this.center = this.computeCenter(), this.$sprite.x = -this.bbox.x + this.size.x - this.center.x, this.$sprite.y = -this.bbox.y + this.size.y - this.center.y, this.$sprite.scale.x = this.size.s, this.$sprite.scale.y = this.size.s, this.$sprite.anchor.x = .5, this.$sprite.anchor.y = .5, this.$solid.beginFill(this.colors.white, .5), this.$solid.lineStyle(1, this.colors.green, 0), this.$solid.moveTo(this.v0[0] - this.bbox.x - this.center.x, this.v0[1] - this.bbox.y - this.center.y), this.$solid.lineTo(this.v1[0] - this.bbox.x - this.center.x, this.v1[1] - this.bbox.y - this.center.y), this.$solid.lineTo(this.v2[0] - this.bbox.x - this.center.x, this.v2[1] - this.bbox.y - this.center.y), this.$solid.lineTo(this.v0[0] - this.bbox.x - this.center.x, this.v0[1] - this.bbox.y - this.center.y), this.$solid.blendMode = PIXI.BLEND_MODES.ADD, this.$cdot.beginFill(this.colors.green, 0), this.$cdot.drawCircle(0, 0, 3), this.$mask.beginFill(this.colors.black), this.$mask.moveTo(this.v0[0] - this.bbox.x - this.center.x, this.v0[1] - this.bbox.y - this.center.y), this.$mask.lineTo(this.v1[0] - this.bbox.x - this.center.x, this.v1[1] - this.bbox.y - this.center.y), this.$mask.lineTo(this.v2[0] - this.bbox.x - this.center.x, this.v2[1] - this.bbox.y - this.center.y), this.$mask.lineTo(this.v0[0] - this.bbox.x - this.center.x, this.v0[1] - this.bbox.y - this.center.y), this.$el.x = this.bbox.x + this.center.x, this.$el.y = this.bbox.y + this.center.y, this.$el.anchor.x = .5, this.$el.anchor.y = .5, this.$wrap.addChild(this.$sprite), this.$wrap.addChild(this.$solid), this.$wrap.addChild(this.$cdot), this.$el.addChild(this.$wrap), this.$el.addChild(this.$mask), this.$wrap.mask = this.$mask, this
                    },
                    tweenIn: function () {
                        var e = (this.$el.x - this.size.x) / this.size.x,
                            t = (this.$el.y - this.size.y) / this.size.y,
                            n = this.$el.x + this.size.w * e,
                            i = this.$el.y + this.size.h * t,
                            r = (this.bbox.w + .5 * this.$sprite.width) * e,
                            s = (this.bbox.h + .5 * this.$sprite.height) * t,
                            a = Math.random() * Math.PI;
                        return new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.from(this.$el, .5, {
                                    x: n,
                                    y: i,
                                    rotation: a,
                                    ease: Expo.easeOut
                                }), TweenMax.from(this.$el.scale, .9, {
                                    x: e,
                                    y: t,
                                    ease: Expo.easeOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.from(this.$sprite.scale, .9, {
                                    x: 1.5,
                                    y: 1.5,
                                    ease: Circ.easeOut
                                }), TweenMax.from(this.$sprite, .5, {
                                    x: r,
                                    y: s,
                                    ease: Expo.easeOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.fromTo(this.$solid, .7, {
                                    alpha: 1
                                }, {
                                    alpha: 0,
                                    ease: Cubic.easeInOut
                                })]
                            })]
                        })
                    },
                    tweenOut: function () {
                        var e = (this.$el.x - this.size.x) / this.size.x,
                            t = (this.$el.y - this.size.y) / this.size.y,
                            n = this.$el.x + this.size.w * e / 2,
                            i = this.$el.y + this.size.h * t / 2,
                            r = (this.bbox.w + .5 * this.$sprite.width) * e,
                            s = (this.bbox.h + .5 * this.$sprite.height) * t,
                            a = Math.random() * Math.PI / 2;
                        return new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(this.$el, .8, {
                                    x: n,
                                    y: i,
                                    rotation: a,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$el.scale, 1, {
                                    x: 0,
                                    y: 0,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$sprite.scale, .8, {
                                    x: 1.25,
                                    y: 1.25,
                                    ease: Circ.easeInOut
                                }), TweenMax.to(this.$sprite, 1, {
                                    x: r,
                                    y: s,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.fromTo(this.$solid, .7, {
                                    alpha: 0
                                }, {
                                    alpha: .1,
                                    ease: Cubic.easeInOut
                                })]
                            })]
                        })
                    },
                    computeBoundingBox: function () {
                        var e = Math.min(this.v0[0], this.v1[0], this.v2[0]),
                            t = Math.max(this.v0[0], this.v1[0], this.v2[0]),
                            n = Math.min(this.v0[1], this.v1[1], this.v2[1]),
                            i = Math.max(this.v0[1], this.v1[1], this.v2[1]);
                        return {
                            x: Math.round(e),
                            y: Math.round(n),
                            w: Math.round(t - e),
                            h: Math.round(i - n)
                        }
                    },
                    computeCenter: function () {
                        return {
                            x: (this.v0[0] - this.bbox.x + (this.v1[0] - this.bbox.x) + (this.v2[0] - this.bbox.x)) / 3,
                            y: (this.v0[1] - this.bbox.y + (this.v1[1] - this.bbox.y) + (this.v2[1] - this.bbox.y)) / 3
                        }
                    },
                    destroy: function () {
                        this.$sprite.destroy(), this.$solid.destroy(), this.$cdot.destroy(), this.$wrap.destroy(), this.$mask.destroy(), this.$wrap = null, this.$mask = null, this.$sprite = null, this.$solid = null, this.$cdot = null, this.texture = null, this.size = null, this.v0 = null, this.v1 = null, this.v2 = null, e.prototype.destroy.call(this)
                    }
                }), t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Scroller", [], function () {
            return ["DisplayObject", "Text", "$timeout", function (e, t, n) {
                function i() {
                    e.call(this), this.timer, this.intro = !0, this.repeatDelay = 1, this.labels = {
                        start: "Scroll to explore",
                        scroll: "Scroll to continue"
                    }
                }
                return i.prototype.constructor = i, i.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.$dashline = new PIXI.Graphics, this.$dashMask = new PIXI.Graphics, this.$labelMask = new PIXI.Graphics, this.$wrap = new PIXI.Sprite, this.$mask = new PIXI.Graphics, this.$line = new PIXI.Graphics, this.$labels = new PIXI.Sprite, this.$label = new PIXI.Text(this.labels.scroll.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 8,
                            fill: this.colors.white,
                            letterSpacing: 2
                        }), this.$nums0 = new PIXI.Sprite, this.$nums1 = new PIXI.Sprite, this.$num0 = new t("0", {
                            fontFamily: "din-condensed-web",
                            fontSize: 36,
                            fill: this.colors.white
                        }), this.$num1 = new t("1", {
                            fontFamily: "din-condensed-web",
                            fontSize: 36,
                            fill: this.colors.white
                        }), this.$dashline.mask = this.$dashMask, this.$line.beginFill(this.colors.white), this.$line.drawRect(0, -25, 1, 50), this.$label.rotation = -1.5708, this.$label.y = this.$label.width, this.$labelMask.beginFill(this.colors.white), this.$labelMask.drawRect(0, 0, this.$label.height, this.$label.width + 10), this.$labels.addChild(this.$label), this.$labels.addChild(this.$labelMask), this.$label.mask = this.$labelMask, this.$nums0.addChild(this.$num0.$el), this.$nums1.addChild(this.$num1.$el), this.$wrap.mask = this.$mask, this.$wrap.addChild(this.$line), this.$wrap.addChild(this.$labels), this.$wrap.addChild(this.$nums0), this.$wrap.addChild(this.$nums1), this.$el.addChild(this.$dashline), this.$el.addChild(this.$dashMask), this.$el.addChild(this.$wrap), this.$el.addChild(this.$mask), this.$el.alpha = 0, this
                    },
                    update: function (e) {
                        var t = 0 == e ? this.labels.start : this.labels.scroll,
                            n = "" + (e + 1);
                        this.index = e, this.$num1.text(n.toUpperCase()), this.$label.text = t.toUpperCase(), TweenMax.to(this.$label, .6, {
                            y: 3 > e ? this.$label.width : 0,
                            ease: Expo.easeInOut
                        })
                    },
                    tweenIn: function () {
                        var e = 25;
                        return new TimelineMax({
                            tweens: [TweenMax.from(this.$dashMask.scale, .75, {
                                y: 0,
                                ease: Expo.easeInOut
                            }), new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: [TweenMax.fromTo(this.$nums1, 1, {
                                        y: -85
                                    }, {
                                        y: -e - 3,
                                        ease: Expo.easeInOut
                                    }), TweenMax.fromTo(this.$nums0, 1, {
                                        y: -85
                                    }, {
                                        y: -e - 3,
                                        ease: Expo.easeInOut
                                    })],
                                    stagger: .1
                                }), new TimelineMax({
                                    tweens: [TweenMax.from(this.$line, .5, {
                                        alpha: 0,
                                        ease: Expo.easeInOut
                                    }), TweenMax.from(this.$line, .9, {
                                        y: 900,
                                        ease: Expo.easeInOut
                                    })]
                                }), new TimelineMax({
                                    tweens: [TweenMax.from(this.$labels, .5, {
                                        alpha: 0,
                                        ease: Expo.easeInOut
                                    }), TweenMax.fromTo(this.$labels, .9, {
                                        y: 900
                                    }, {
                                        y: -e,
                                        ease: Expo.easeInOut
                                    })]
                                })],
                                stagger: .1,
                                onStart: _.bind(function () {
                                    this.$el.alpha = 1
                                }, this),
                                onComplete: _.bind(function () {
                                    this.timer = n(_.bind(this.startLoop, this), 1e3), this.intro = !1
                                }, this)
                            })]
                        })
                    },
                    startLoop: function () {
                        var e = 25,
                            t = 225;
                        this.loop = new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.fromTo(this.$labels, 1, {
                                    y: -e
                                }, {
                                    y: t - e,
                                    ease: Expo.easeInOut
                                }), TweenMax.fromTo(this.$line, 1, {
                                    y: 0
                                }, {
                                    y: t,
                                    ease: Expo.easeInOut
                                }), TweenMax.fromTo(this.$nums1, 1, {
                                    y: -e - 3
                                }, {
                                    y: -e - 3 + t,
                                    ease: Expo.easeInOut
                                }), TweenMax.fromTo(this.$nums0, 1, {
                                    y: -e - 3
                                }, {
                                    y: -e - 3 + t,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .075
                            }), new TimelineMax({
                                tweens: [TweenMax.fromTo(this.$labels, .5, {
                                    y: -this.$label.width - 3 * e
                                }, {
                                    y: -e,
                                    ease: Expo.easeOut
                                }), TweenMax.fromTo(this.$line, .5, {
                                    y: -this.$label.width - 2 * e
                                }, {
                                    y: 0,
                                    ease: Expo.easeOut
                                }), TweenMax.fromTo(this.$nums1, .5, {
                                    y: -this.$label.width - 3 * e
                                }, {
                                    y: -e - 3,
                                    ease: Expo.easeOut
                                }), TweenMax.fromTo(this.$nums0, .5, {
                                    y: -this.$label.width - 3 * e
                                }, {
                                    y: -e - 3,
                                    ease: Expo.easeOut
                                })],
                                stagger: .075
                            })],
                            stagger: 1.25,
                            repeat: -1,
                            repeatDelay: this.repeatDelay
                        })
                    },
                    restartLoop: function () {
                        this.timer && n.cancel(this.timer), this.loop && this.loop.kill(), this.timer = n(_.bind(this.startLoop, this), 1e3)
                    },
                    resize: function (e) {
                        var t = 25,
                            n = 225;
                        this.$dashline.clear(), this.$dashline.beginFill(this.colors.white, .4);
                        for (var i = 0; i < Math.round(e.h / 5); ++i) this.$dashline.drawRect(0, Math.floor(5 * i), Math.floor(1), Math.floor(1));
                        this.$dashMask.clear(), this.$dashMask.beginFill(this.colors.black), this.$dashMask.drawRect(-4, 0, 10, -e.h), this.$dashMask.y = e.h, this.$line.y = 0, this.$nums0.x = -this.$num0.width - 24, this.$nums0.y = -t - 3, this.$nums1.x = -this.$num1.width - 8, this.$nums1.y = -t - 3, this.$labels.x = 10, this.$labels.y = -t, this.$wrap.x = 0, this.$wrap.y = e.y, this.$mask.clear(), this.$mask.beginFill(this.colors.white, .5), this.$mask.drawRect(-50, e.y - 2 * t, 100, n), this.$el.x = .75 * e.w, this.$el.y = 0, !this.intro && this.stagesize && this.stagesize.x - e.x != 0 && this.restartLoop(), this.stagesize = e
                    }
                }), i
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Maincta", [], function () {
            return ["DisplayObject", "Text", function (e, t) {
                function n(t) {
                    e.call(this), this.label = t.toUpperCase(), this.timeline = null, this.repeatDelay = 2
                }
                return n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        if (e.prototype.render.call(this), this.label.length < 1) return this;
                        var n, i, r = this.colors,
                            s = 15;
                        this.$text = new t(this.label, {
                            fontFamily: "din-condensed-web",
                            fontSize: 20,
                            fill: r.red,
                            letterSpacing: .5
                        }), this.$text.$el.x = .5 * -this.$text.width, this.$text.$el.y = s + 2, this.$blink = new t(this.label, {
                            fontFamily: "din-condensed-web",
                            fontSize: 20,
                            fill: r.green,
                            letterSpacing: .5
                        }), _.each(this.$blink.$el.children, function (e) {
                            e.alpha = 0
                        }), this.$blink.$el.x = .5 * -this.$blink.width, this.$blink.$el.y = s + 2, this.$blink.$el.alpha = .9, n = this.$text.width, i = this.$text.height + 2 * s + 2, this.$linesWrap = new PIXI.Sprite, this.$topLine = new PIXI.Graphics, this.$topLine2 = new PIXI.Graphics, this.$botLine = new PIXI.Graphics, this.$botLine2 = new PIXI.Graphics;
                        var a = this.$text.width + 40,
                            o = this.$text.height + 30;
                        return this.$quadWrap = new PIXI.Sprite, this.$quad = new PIXI.Graphics, this.$quad.beginFill(this.colors.white), this.$quad.drawRect(.5 * -a, 0, a, o), this.$quad.x = -a, this.$quad2 = new PIXI.Graphics, this.$quad2.beginFill(this.colors.white), this.$quad2.drawRect(.5 * -a, 0, a, o), this.$quad2.x = -a, this.$quadMask = new PIXI.Graphics, this.$quadMask.beginFill(this.colors.green), this.$quadMask.drawRect(.5 * -a, 0, a, o), this.$topLine.beginFill(r.white), this.$topLine.drawRect(-48, -1, 96, 2), this.$topLine.x = Math.round(.5 * -(n - 96) - 20), this.$topLine.y = 1, this.$topLine2.beginFill(r.white), this.$topLine2.drawRect(-48, -1, 96, 2), this.$topLine2.x = Math.round(.5 * -(n - 96) - 20), this.$topLine2.y = 1, this.$botLine.beginFill(r.white), this.$botLine.drawRect(-23, -1, 46, 2), this.$botLine.x = Math.round(.5 * (n - 46) + 10), this.$botLine.y = Math.round(i + 1), this.$botLine2.beginFill(r.white), this.$botLine2.drawRect(-23, -1, 46, 2), this.$botLine2.x = Math.round(.5 * (n - 46) + 10), this.$botLine2.y = Math.round(i + 1), this.$base = new PIXI.Graphics, this.$base.beginFill(r.white, 0), this.$base.drawRect(.5 * -n, 0, n, i), this.$mask = new PIXI.Graphics, this.$mask.beginFill(r.white, .5), this.$mask.drawRect(0, 0, -n - 10, i), this.$mask.x = (n + 10) / 2, this.$hoverLine = new PIXI.Graphics, this.$hoverLine.beginFill(r.white), this.$hoverLine.drawRect(-this.$text.width / 2 - 5, this.$text.$el.y + this.$text.height / 2 - 2, this.$text.width + 10, 2), this.$hoverLine.scale.x = 0, this.$text.$el.mask = this.$mask, this.$el.anchor.x = .5, this.$el.anchor.y = .5, this.$linesWrap.addChild(this.$topLine), this.$linesWrap.addChild(this.$topLine2), this.$linesWrap.addChild(this.$botLine), this.$linesWrap.addChild(this.$botLine2), this.$quadWrap.addChild(this.$quad), this.$quadWrap.addChild(this.$quad2), this.$quadWrap.addChild(this.$quadMask), this.$quadWrap.mask = this.$quadMask, this.$el.addChild(this.$base), this.$el.addChild(this.$text.$el), this.$el.addChild(this.$blink.$el), this.$el.addChild(this.$mask), this.$el.addChild(this.$quadWrap), this.$el.addChild(this.$hoverLine), this.$quadWrap.visible = !1, this.$el.interactive = !0, this.$el.buttonMode = !0, this.addEvents(), this
                    },
                    addEvents: function () {
                        this.$el.mouseover = _.bind(function () {
                            TweenMax.to(this.$hoverLine.scale, 1, {
                                x: 1,
                                ease: Expo.easeOut
                            })
                        }, this), this.$el.mouseout = _.bind(function () {
                            TweenMax.to(this.$hoverLine.scale, .8, {
                                x: 0,
                                ease: Expo.easeOut
                            })
                        }, this)
                    },
                    tweenIn: function () {
                        return this.timeline = this.label.length > 1 ? new TimelineMax({
                            tweens: [TweenMax.allFrom(this.$text.$el.children, .75, {
                                x: this.$text.width + 10,
                                ease: Expo.easeOut
                            }, .035), new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: [TweenMax.from(this.$topLine.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeOut
                                    }), TweenMax.from(this.$topLine, .45, {
                                        x: -200,
                                        ease: Expo.easeOut
                                    })]
                                }), new TimelineMax({
                                    tweens: [TweenMax.from(this.$topLine2.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeOut
                                    }), TweenMax.from(this.$topLine2, .45, {
                                        x: -200,
                                        ease: Expo.easeOut
                                    })]
                                })]
                            }), new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: [TweenMax.from(this.$botLine.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeOut
                                    }), TweenMax.from(this.$botLine, .45, {
                                        x: 400,
                                        ease: Expo.easeOut
                                    })]
                                }), new TimelineMax({
                                    tweens: [TweenMax.from(this.$botLine2.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeOut
                                    }), TweenMax.from(this.$botLine2, .45, {
                                        x: 400,
                                        ease: Expo.easeOut
                                    })]
                                })]
                            })],
                            stagger: .075
                        }) : new TimelineMax({
                            tweens: []
                        }), this.timeline
                    },
                    tweenOut: function () {
                        return this.timeline = this.label.length > 1 ? new TimelineMax({
                            tweens: [TweenMax.allTo(this.$text.$el.children, .75, {
                                x: -this.$text.width - 10,
                                ease: Expo.easeInOut
                            }, .035), new TimelineMax({
                                tweens: [TweenMax.to(this.$topLine.scale, .45, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$topLine, .45, {
                                    x: -200,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$botLine.scale, .45, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$botLine, .45, {
                                    x: 400,
                                    ease: Expo.easeInOut
                                })]
                            })],
                            stagger: .075
                        }) : new TimelineMax({
                            tweens: []
                        }), this.timeline
                    },
                    getLoop: function () {
                        var e = 15,
                            t = this.$text.width,
                            e = (this.$text.height + 2 * e + 2, Math.round(.5 * -(t - 96) - 20), Math.round(.5 * (t - 46) + 10), Math.round(this.$text.width + 44));
                        return this.$quadWrap.visible = !0, new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.fromTo(this.$quad, 1, {
                                    x: -e
                                }, {
                                    bezier: {
                                        curviness: 0,
                                        values: [{
                                            x: 0
                                        }, {
                                            x: e
                                        }]
                                    },
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.fromTo(this.$quad2, 1.5, {
                                    x: -e
                                }, {
                                    bezier: {
                                        curviness: 0,
                                        values: [{
                                            x: 0
                                        }, {
                                            x: e
                                        }]
                                    },
                                    ease: Expo.easeInOut
                                })]
                            })],
                            stagger: .2,
                            delay: 0
                        })
                    },
                    removeEvents: function () {
                        this.$el.mouseover = this.$el.mouseout = null
                    },
                    destroy: function () {
                        this.removeEvents(), this.timeline && this.timeline.kill(), this.$text && this.$text.destroy(!0), this.$blink && this.$blink.destroy(!0), this.timeline = null, this.$blink = null, this.$text = null, this.label = null, e.prototype.destroy.call(this)
                    }
                }), n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Leafcta", [], function () {
            return ["DisplayObject", "Text", function (e, t) {
                function n(t, n) {
                    e.call(this), this.label = t.toUpperCase(), this.timeline = null, this.repeatDelay = 2, this.sort = n
                }
                return n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        if (e.prototype.render.call(this), this.label.length < 1) return this;
                        var n, i, r = 15;
                        this.$text = new t(this.label, {
                            fontFamily: "din-condensed-web",
                            fontSize: 16,
                            fill: this.colors.white,
                            letterSpacing: 2
                        }), this.$text.$el.x = .5 * -this.$text.width, this.$text.$el.y = .5 * -this.$text.height, n = this.$text.width, i = .5 * this.$text.height + r + 2;
                        var s = this.$text.width + 40,
                            a = this.$text.height + 30;
                        return this.$base = new PIXI.Graphics, this.$base.beginFill(this.colors.white, 0), this.$base.drawRect(.5 * -s, .5 * -a, s, a), this.$quad = new PIXI.Graphics, this.$quad.beginFill(this.colors.red), this.$quad.drawRect(.5 * -s, .5 * -a, s, a), this.$quad.x = -s, this.$quadMask = new PIXI.Graphics, this.$quadMask.beginFill(this.colors.green), this.$quadMask.drawRect(.5 * -s, .5 * -a, s, a), this.$quad.mask = this.$quadMask, this.$el.addChild(this.$base), this.$el.addChild(this.$text.$el), this.$el.addChild(this.$quad), this.$el.addChild(this.$quadMask), this.$el.interactive = !0, this.$el.buttonMode = !0, this
                    },
                    toggleState: function (e) {
                        var t = [];
                        return new TimelineMax({
                            tweens: t
                        })
                    },
                    tweenIn: function () {},
                    getLoop: function () {
                        var e = this.$text.width + 42;
                        return new TimelineMax({
                            tweens: [TweenMax.fromTo(this.$quad, 1.2, {
                                x: -e * this.sort
                            }, {
                                bezier: {
                                    values: [{
                                        x: 0
                                    }, {
                                        x: e * this.sort
                                    }]
                                },
                                ease: Expo.easeInOut
                            })]
                        })
                    },
                    removeEvents: function () {
                        this.$el.mouseover = this.$el.mouseout = null
                    },
                    destroy: function () {
                        this.removeEvents(), this.timeline && this.timeline.kill(), this.$text && this.$text.destroy(!0), this.timeline = null, this.$text = null, this.label = null, e.prototype.destroy.call(this)
                    }
                }), n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Caption", [], function () {
            return ["DisplayObject", "Text", function (e, t) {
                function n(t) {
                    e.call(this), this.model = t, this.labels = {
                        agency: "Agency",
                        viewvideo: "View Video",
                        viewsite: "Launch Project",
                        nolongerlive: "No Longer Online"
                    }
                }
                return n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var n = this.colors,
                            i = this.model.client + " _ " + this.model.name,
                            r = "light" == this.model.theme ? 16777215 : 6710886,
                            s = "light" == this.model.theme ? 13421772 : 10066329;
                        return this.$title = new PIXI.Text(i.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: s,
                            letterSpacing: 2
                        }), this.$description = new PIXI.Text(this.model.description.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: r,
                            letterSpacing: 2,
                            lineHeight: 18
                        }), this.$label = new PIXI.Text(this.labels.agency.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: s,
                            letterSpacing: 2
                        }), this.$agency = new t(this.model.agency.toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 21,
                            fill: r,
                            letterSpacing: 1
                        }), this.$cta = this.getCta(), this.$titleMask = new PIXI.Graphics, this.$descrMask = new PIXI.Graphics, this.$labelMask = new PIXI.Graphics, this.$cta.y = -this.$cta.$text.height, this.$label.x = this.$cta.$text.width + 50, this.$label.y = -this.$cta.$text.height / 2 - this.$label.height / 2, this.$agency.$el.x = this.$cta.$text.width + this.$label.width + 20 + 50, this.$agency.$el.y = -this.$agency.height, this.$description.y = -this.$cta.$text.height - this.$description.height - 40, this.$title.y = -this.$cta.$text.height - this.$description.height - this.$title.height - 40 - 20, this.$titleMask.beginFill(n.white, .5), this.$titleMask.drawRect(0, this.$title.y, this.$title.width, this.$title.height), this.$descrMask.beginFill(n.white, .5), this.$descrMask.drawRect(0, this.$description.y, this.$description.width, this.$description.height), this.$labelMask.beginFill(n.white, .5), this.$labelMask.drawRect(0, this.$label.y, this.$label.width, this.$label.height), this.$labelMask.x = this.$label.x, this.$el.addChild(this.$title), this.$el.addChild(this.$titleMask), this.$el.addChild(this.$description), this.$el.addChild(this.$descrMask), this.$el.addChild(this.$agency.$el), this.$el.addChild(this.$label), this.$el.addChild(this.$labelMask), this.$el.addChild(this.$cta), this.$title.mask = this.$titleMask, this.$description.mask = this.$descrMask, this.$label.mask = this.$labelMask, this.addEvents(), this
                    },
                    getCta: function () {
                        var e = this.model.link ? this.labels.viewsite : this.labels.nolongerlive,
                            n = new PIXI.Sprite,
                            i = new PIXI.Graphics,
                            r = new PIXI.Graphics,
                            s = new t(e.toUpperCase(), {
                                fontFamily: "din-condensed-web",
                                fontSize: 21,
                                fill: this.colors.red,
                                letterSpacing: 1
                            });
                        return i.beginFill(this.colors.white, 0), i.drawRect(-5, -5, s.width + 10, s.height + 10), r.beginFill(this.colors.white), r.drawRect(0, -1, -s.width - 10, 2), r.y = s.height / 2, r.x = -20, n.addChild(i), n.addChild(s.$el), n.addChild(r), n.$text = s, n.$line = r, n.interactive = !_.isUndefined(this.model.link), n.buttonMode = !_.isUndefined(this.model.link), this.model.link ? n.timeline = new TimelineMax({
                            tweens: [TweenMax.to(r, .6, {
                                x: s.width + 5,
                                ease: Expo.easeInOut
                            }), TweenMax.to(r.scale, .75, {
                                bezier: {
                                    curviness: 0,
                                    values: [{
                                        x: 3
                                    }, {
                                        x: 1
                                    }]
                                },
                                ease: Expo.easeInOut
                            })],
                            paused: !0
                        }) : r.x = s.width + 5, n
                    },
                    addEvents: function () {
                        this.model.link && (this.$cta.mouseover = _.bind(function () {
                            this.$cta.timeline.play()
                        }, this), this.$cta.mouseout = _.bind(function () {
                            this.$cta.timeline.reverse()
                        }, this))
                    },
                    tweenIn: function () {
                        return new TimelineMax({
                            tweens: [TweenMax.fromTo(this.$el, 1, {
                                alpha: 0
                            }, {
                                alpha: 1,
                                ease: Expo.easeInOut
                            })]
                        })
                    },
                    tweenOut: function () {
                        return this.removeEvents(), new TimelineMax({
                            tweens: [TweenMax.fromTo(this.$el, 1, {
                                alpha: 1
                            }, {
                                alpha: 0,
                                ease: Expo.easeInOut
                            })]
                        })
                    },
                    tweenInWithSlide: function (e) {
                        var t = [];
                        return t.push(TweenMax.from(this.$titleMask, .8, {
                            x: this.$title.width * e,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.from(this.$descrMask, .8, {
                            x: this.$description.width * e,
                            ease: Expo.easeInOut
                        })), 1 == e && t.push(TweenMax.allFrom(this.$cta.$text.$el.children.slice(0).reverse(), .8, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        }, .025)), -1 == e && t.push(TweenMax.allFrom(this.$cta.$text.$el.children.slice(0), .8, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        }, .025)), t.push(TweenMax.from(this.$labelMask, .8, {
                            x: this.$label.x + this.$label.width * e,
                            ease: Expo.easeInOut
                        })), 1 == e && t.push(TweenMax.allFrom(this.$agency.$el.children.slice(0).reverse(), .8, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        }, .025)), -1 == e && t.push(TweenMax.allFrom(this.$agency.$el.children.slice(0), .8, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        }, .025)), t.push(new TimelineMax({
                            tweens: [TweenMax.from(this.$cta.$line, .8, {
                                x: this.$cta.$text.width * e,
                                ease: Expo.easeInOut
                            }), TweenMax.from(this.$cta.$line.scale, .8, {
                                x: 0,
                                ease: Expo.easeInOut
                            })]
                        })), new TimelineMax({
                            tweens: t,
                            stagger: .1
                        })
                    },
                    tweenOutWithSlide: function (e) {
                        var t = [];
                        return this.removeEvents(), t.push(TweenMax.to(this.$titleMask, .8, {
                            x: -this.$title.width * e,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$descrMask, .8, {
                            x: -this.$description.width * e,
                            ease: Expo.easeInOut
                        })), 1 == e && t.push(TweenMax.allTo(this.$cta.$text.$el.children.slice(0).reverse(), .6, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        }, .025)), -1 == e && t.push(TweenMax.allTo(this.$cta.$text.$el.children.slice(0), .6, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        }, .025)), t.push(TweenMax.to(this.$labelMask, .8, {
                            x: this.$label.x - this.$label.width * e,
                            ease: Expo.easeInOutOut
                        })), 1 == e && t.push(TweenMax.allTo(this.$agency.$el.children.slice(0).reverse(), .6, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        }, .025)), -1 == e && t.push(TweenMax.allTo(this.$agency.$el.children.slice(0), .6, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        }, .025)), t.push(new TimelineMax({
                            tweens: [TweenMax.to(this.$cta.$line, .8, {
                                x: -this.$cta.$text.width * e,
                                ease: Expo.easeInOut
                            }), TweenMax.to(this.$cta.$line.scale, .8, {
                                x: 0,
                                ease: Expo.easeInOut
                            })]
                        })), new TimelineMax({
                            tweens: t,
                            stagger: 0
                        })
                    },
                    removeEvents: function () {
                        this.$cta.mouseover = this.$cta.mouseout = null
                    },
                    destroy: function () {
                        this.removeEvents(), this.$cta.$text.destroy(), this.$title.destroy(!0), this.$description.destroy(!0), this.$label.destroy(!0), this.$agency.destroy(), this.$cta.destroy(), this.$title = null, this.$description = null, this.$label = null, this.$agency = null, this.$cta = null, this.model = null, e.prototype.destroy.call(this)
                    }
                }), n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Numnav", [], function () {
            return ["DisplayObject", "Text", "Arrow", function (e, t, n) {
                function i() {
                    e.call(this)
                }
                return i.prototype.constructor = i, i.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var n = this.colors;
                        return this.$slider = this.getIndexSlider(), this.$total = new t("5", {
                            fontFamily: "din-condensed-web",
                            fontSize: 30,
                            fill: n.white,
                            letterSpacing: 1
                        }), this.$line = new PIXI.Graphics, this.$prev = this.getArrow(), this.$next = this.getArrow(), this.$line.beginFill(n.white), this.$line.drawRect(-10, -.5, 20, 1), this.$line.rotation = -.7853, this.$line.y = 4, this.$slider.x = 0, this.$slider.y = -55, this.$total.$el.x = -this.$total.width / 2, this.$total.$el.y = 20, this.$prev.x = 0, this.$prev.y = this.$total.$el.y + this.$total.height + 13 + 20, this.$prev.rotation = 1.5708, this.$next.y = this.$prev.y + 26 + 20, this.$next.rotation = -1.5708, this.$prev.timeline = this.getArrowTimeline(this.$prev), this.$next.timeline = this.getArrowTimeline(this.$next), this.$el.addChild(this.$slider), this.$el.addChild(this.$line), this.$el.addChild(this.$total.$el), this.$el.addChild(this.$prev), this.$el.addChild(this.$next), this.addEvents(), this
                    },
                    getIndexSlider: function () {
                        var e = this.colors,
                            t = new PIXI.Sprite,
                            n = new PIXI.Graphics,
                            i = this.getIndex("1");
                        return n.beginFill(e.white, .5), n.drawRect(-13, -5, 26, 48), t.addChild(n), t.addChild(i.$el), t.current = i, t.mask = n, t
                    },
                    getArrow: function () {
                        var e = this.colors,
                            t = new n(e.red),
                            i = new n(e.red),
                            r = new PIXI.Graphics,
                            s = new PIXI.Sprite;
                        return r.beginFill(e.white), r.drawRect(-18, -15, 36, 30), s.addChild(r), s.addChild(i.render().$el), s.addChild(t.render().$el), s.$arrowIn = t.$el, s.$arrowOut = i.$el, s.interactive = !0, s.buttonMode = !0, s.mask = r, i.$el.x = 50, s
                    },
                    addEvents: function () {
                        this.$prev.mouseover = _.bind(function () {
                            this.$prev.timeline.play()
                        }, this), this.$prev.mouseout = _.bind(function () {
                            this.$prev.timeline.reverse()
                        }, this), this.$next.mouseover = _.bind(function () {
                            this.$next.timeline.play()
                        }, this), this.$next.mouseout = _.bind(function () {
                            this.$next.timeline.reverse()
                        }, this)
                    },
                    getArrowTimeline: function (e) {
                        var t = .6,
                            n = Expo.easeInOut;
                        return new TimelineMax({
                            tweens: [TweenMax.to(e.$arrowIn, t, {
                                x: -50,
                                ease: n
                            }), TweenMax.to(e.$arrowOut, t, {
                                x: 0,
                                ease: n
                            })],
                            stagger: .1,
                            paused: !0
                        })
                    },
                    renderIndex: function (e) {
                        var t = this.getIndex(e);
                        t.$el.x = -t.width / 2, this.$slider.addChild(t.$el), this.$slider.current = t
                    },
                    getIndex: function (e) {
                        return new t(e, {
                            fontFamily: "din-condensed-web",
                            fontSize: 46,
                            fill: this.colors.white,
                            letterSpacing: 1
                        })
                    },
                    update: function (e, t, n) {
                        var i, r = [],
                            s = [];
                        i = this.$slider.current, s.push(TweenMax.to(i.$el, .7, {
                            x: -i.width / 2 + -22 * n,
                            ease: Expo.easeInOut
                        })), this.renderIndex(e.toString()), i = this.$slider.current, r.push(TweenMax.from(i.$el, .7, {
                            x: -i.width / 2 + 22 * n,
                            ease: Expo.easeInOut
                        })), new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: s
                            }), new TimelineMax({
                                tweens: r
                            })],
                            stagger: .07,
                            onComplete: _.bind(function () {
                                var e = this.$slider.getChildAt(1);
                                e.scope.destroy()
                            }, this)
                        }), this.$total.text(t.toString())
                    }
                }), i
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Bread", [], function () {
            return ["DisplayObject", "Text", function (e, t) {
                function n(t, n) {
                    e.call(this), this.options = n, this.label = t
                }
                return n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.current = this.getText(this.label), this.$el.addChild(this.current), this
                    },
                    update: function (e) {
                        if (e != this.label) {
                            this.label = e;
                            var t, n, i = [],
                                r = [];
                            _.each(this.current.children, function (e, i) {
                                t = e.getChildAt(0), n = e.getChildAt(1), r.push(TweenMax.to(t, .75, {
                                    y: -e.scope.height - 10,
                                    ease: Expo.easeInOut
                                }))
                            }, this), this.render(), _.each(this.current.children, function (e, r) {
                                t = e.getChildAt(0), n = e.getChildAt(1), i.push(TweenMax.from(t, .75, {
                                    y: n.height + 10,
                                    ease: Expo.easeInOut
                                }))
                            }, this), new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: r,
                                    stagger: .05
                                }), new TimelineMax({
                                    tweens: i,
                                    stagger: .05
                                })],
                                stagger: 0,
                                onComplete: _.bind(function () {
                                    var e = this.$el.getChildAt(0);
                                    _.each(e.children, function (t, n) {
                                        t = e.getChildAt(0), t.getChildAt(0).getChildAt(0).destroy(!0), e.removeChildAt(0), t.destroy(!0)
                                    }, this), this.$el.removeChildAt(0)
                                }, this)
                            })
                        }
                    },
                    getText: function (e) {
                        e.length < 1 && (e = " ");
                        for (var n, i, r, s, a = (this.dpr, 0), o = 0, l = new PIXI.Sprite, u = 0; u < e.length; ++u) n = e.charAt(u).toUpperCase(), i = new t(n, this.options), i.$el.x = a, i.$el.y = o, r = new PIXI.Graphics, s = new PIXI.Graphics, r.beginFill(this.colors.black, .5), r.drawRect(-2, -5, i.width + 4, i.height + 10 * (u + 1)), s.beginFill(this.colors.white, 0), s.drawRect(-2, -5, i.width + 4, i.height + 10 * (u + 1)), a += i.width + i.spacing, i.$el.addChild(s), i.$el.addChild(r), l.addChild(i.$el), i.$el.mask = r;
                        return this.width = a - i.spacing, this.height = i.height, l
                    },
                    tweenIn: function () {
                        return new TimelineMax({
                            tweens: []
                        })
                    }
                }), n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Copy", [], function () {
            return ["DisplayObject", "Text", "Math2", function (e, t, n) {
                function i(t, n) {
                    e.call(this), this.labels = t, this.options = n, this.limit = t.length - 1, this.timeline = null, this.count = 0
                }
                return i.prototype.constructor = i, i.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.current = this.getTitle(this.labels[this.count]), this.$el.addChild(this.current), this
                    },
                    tweenIn: function () {
                        var e, t, n = [],
                            i = 0;
                        return _.each(this.current.children, function (r, s) {
                            t = r.getChildAt(0), e = r.getChildAt(1), i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2, n.push(TweenMax.from(t, .9, {
                                y: i,
                                ease: Expo.easeInOut
                            }))
                        }, this), this.timeline = new TimelineMax({
                            tweens: n,
                            stagger: .045
                        }), this.timeline
                    },
                    getLoop: function () {
                        ++this.count, this.count > this.limit && (this.count = 0);
                        var e, t = [],
                            n = [];
                        return _.each(this.current.children, function (t, i) {
                            e = t.getChildAt(0), n.push(TweenMax.to(e, .65, {
                                x: 2.5 * t.scope.width,
                                ease: Expo.easeInOut
                            }))
                        }, this), this.render(), _.each(this.current.children, function (n, i) {
                            e = n.getChildAt(0), t.push(TweenMax.from(e, .65, {
                                x: 2.5 * -n.scope.width,
                                ease: Expo.easeInOut
                            }))
                        }, this), new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: n.reverse(),
                                stagger: .035
                            }), new TimelineMax({
                                tweens: t.reverse(),
                                stagger: .035
                            })],
                            stagger: .05,
                            onComplete: _.bind(function () {
                                var e, t = this.$el.getChildAt(0);
                                _.each(t.children, function () {
                                    e = t.getChildAt(0), e.getChildAt(0).getChildAt(0).destroy(!0), t.removeChildAt(0), e.destroy()
                                }, this), this.$el.removeChildAt(0)
                            }, this)
                        })
                    },
                    getTitle: function (e) {
                        e.length < 1 && (e = " ");
                        for (var i, r, s, a, o, l, u = 0, c = 0, h = {}, d = new PIXI.Sprite, p = 0; p < e.length; ++p) i = e.charAt(p).toUpperCase(), a = new t(i, this.options), a.$el.casheAsBitmap = !0, a.$el.x = u, a.$el.y = c, o = new PIXI.Graphics, l = new PIXI.Graphics, r = n.randFloat(50, 200), s = r + n.randFloat(100, 300), h.x = -2, h.y = -r, h.w = a.width + 4, h.h = a.height + s, o.beginFill(this.colors.black, .5), o.drawRect(h.x, 0, h.w, h.h), o.y = h.y, l.beginFill(this.colors.white, 0), l.drawRect(h.x, 0, h.w, h.h), l.y = h.y, u += a.width + a.spacing, a.$el.addChild(l), a.$el.addChild(o), d.addChild(a.$el), a.$el.mask = o;
                        return this.width = u - a.spacing, this.height = a.height, d
                    },
                    destroy: function () {
                        this.timeline && this.timeline.kill(), _.each(this.current.children, function (e) {
                            this.current.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0), this.current.removeChildAt(0)
                        }, this), this.current.destroy(!0), this.labels = null, this.options = null, this.current = null, this.timeline = null, e.prototype.destroy.call(this)
                    }
                }), i
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Back", [], function () {
            return ["DisplayObject", "SoundManager", "Arrow", function (e, t, n) {
                function i(t) {
                    e.call(this), this.type = t
                }
                return i.prototype.constructor = i, i.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var t = this.colors;
                        return this.$basel = new PIXI.Graphics, this.$basel.beginFill(t.red), this.$basel.drawRect(0, 0, 28, 56), this.$baser = new PIXI.Graphics, this.$baser.beginFill(t.red), this.$baser.drawRect(28, 0, 28, 56), this.$arrow = this.getArrow(), this.$icon = this.getIcon(), this.$icon.x = 28, this.$icon.y = 28, this.$arrow.x = 28, this.$arrow.y = 29, this.$mask = new PIXI.Graphics, this.$mask.beginFill(t.white), this.$mask.drawRect(0, 0, 56, 56), this.$el.addChild(this.$basel), this.$el.addChild(this.$baser), this.$el.addChild(this.$icon), this.$el.addChild(this.$arrow), this.$el.addChild(this.$mask), this.$el.interactive = !0, this.$el.buttonMode = !0, this.$el.mask = this.$mask, this.$el.visible = !1, this.$icon.$line1.x = 28, this.$icon.$line1.y = 28, this.$icon.$line1.scale.x = 0, this.$icon.$line2.x = -28, this.$icon.$line2.y = 28, this.$icon.$line2.scale.x = 0, this.$arrow.$line.x = 24, this.$arrow.$line.scale.x = 0, this.$arrow.$top.y = -17, this.$arrow.$top.x = 5, this.$arrow.$top.scale.x = 0, this.$arrow.$top.scale.y = 0, this.$basel.y = -60, this.$baser.y = -60, this.addEvents(), this
                    },
                    getArrow: function () {
                        var e = new PIXI.Sprite,
                            t = new n(this.colors.white),
                            i = new PIXI.Graphics;
                        return i.beginFill(this.colors.white), i.drawRect(-28, -28, 56, 56), e.addChild(t.render().$el), e.addChild(i), e.timeline = new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(t.$lineIn, .6, {
                                    x: -24,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(t.$lineIn.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(t.$lineOut, .6, {
                                    x: 24,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(t.$lineOut.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(t.$topIn, .6, {
                                    y: 18,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(t.$topIn.scale, .6, {
                                    y: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(t.$topOut, .6, {
                                    y: -24,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(t.$topOut.scale, .6, {
                                    y: 0,
                                    ease: Expo.easeInOut
                                })]
                            })],
                            stagger: 0,
                            paused: !0
                        }), e.$line = t.$line, e.$top = t.$top, e.mask = i, e
                    },
                    getIcon: function () {
                        var e = new PIXI.Sprite,
                            t = new PIXI.Sprite,
                            n = new PIXI.Graphics,
                            i = new PIXI.Graphics,
                            r = new PIXI.Sprite,
                            s = new PIXI.Graphics,
                            a = new PIXI.Graphics;
                        return n.beginFill(this.colors.white), n.drawRect(-10, -1, 20, 2), i.beginFill(this.colors.white), i.drawRect(-10, -1, 20, 2), s.beginFill(this.colors.white), s.drawRect(-16, -1, 26, 2), a.beginFill(this.colors.white), a.drawRect(-16, -1, 26, 2), t.addChild(n), t.addChild(i), t.rotation = .7853, t.anchor.x = .5, t.anchor.y = .5, r.addChild(s), r.addChild(a), r.rotation = -.7853, r.anchor.x = .5, r.anchor.y = .5, e.addChild(t), e.addChild(r), e.$line1 = t, e.$line2 = r, e.timeline = new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(s, .6, {
                                    x: 30,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(s.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(a, .6, {
                                    x: -30,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(a.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(n, .6, {
                                    x: -30,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(n.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(i, .6, {
                                    x: 30,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(i.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })]
                            })],
                            stagger: .05,
                            paused: !0
                        }), e
                    },
                    addEvents: function () {
                        this.$el.mouseover = _.bind(function () {
                            t.play("sections", "hambbackhover", !0), this.$arrow.timeline.play(), this.$icon.timeline.play()
                        }, this), this.$el.mouseout = _.bind(function () {
                            this.$arrow.timeline.reverse(), this.$icon.timeline.reverse()
                        }, this)
                    },
                    setState: function (e) {
                        var t = [];
                        return 0 == e ? (t.push(TweenMax.allTo([this.$baser, this.$basel], .8, {
                            y: -60,
                            ease: Expo.easeInOut
                        }, .08)), t.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(this.$arrow.$line, .6, {
                                    x: 24,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$arrow.$line.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$arrow.$top, .6, {
                                    x: 5,
                                    y: -17,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$arrow.$top.scale, .6, {
                                    x: 0,
                                    y: 0,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$icon.$line1, .6, {
                                    x: 21,
                                    y: 21,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$icon.$line1.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$icon.$line2, .6, {
                                    x: -21,
                                    y: 21,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$icon.$line2.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })]
                            })],
                            stagger: .04
                        }))) : 1 == e ? (t.push(TweenMax.allTo([this.$basel, this.$baser], .8, {
                            y: 0,
                            ease: Expo.easeInOut
                        }, .08)), t.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(this.$icon.$line2, .6, {
                                    x: 0,
                                    y: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$icon.$line2.scale, .6, {
                                    x: 1,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$icon.$line1, .6, {
                                    x: 0,
                                    y: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$icon.$line1.scale, .6, {
                                    x: 1,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$arrow.$line, .6, {
                                    x: 24,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$arrow.$line.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$arrow.$top, .6, {
                                    x: 5,
                                    y: -17,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$arrow.$top.scale, .6, {
                                    x: 0,
                                    y: 0,
                                    ease: Expo.easeInOut
                                })]
                            })],
                            stagger: .04
                        }))) : 2 == e && (t.push(TweenMax.allTo([this.$basel, this.$baser], .8, {
                            y: 0,
                            ease: Expo.easeInOut
                        }, .08)), t.push(new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(this.$arrow.$line, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$arrow.$line.scale, .6, {
                                    x: 1,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$arrow.$top, .6, {
                                    x: -12.5,
                                    y: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$arrow.$top.scale, .6, {
                                    x: 1,
                                    y: 1,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$icon.$line1, .6, {
                                    x: -21,
                                    y: -21,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$icon.$line1.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$icon.$line2, .6, {
                                    x: -21,
                                    y: 21,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(this.$icon.$line2.scale, .6, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })]
                            })],
                            stagger: .04
                        }))), new TimelineMax({
                            tweens: t,
                            onStart: _.bind(function () {
                                this.$el.visible = !0
                            }, this),
                            onComplete: _.bind(function () {
                                this.$el.visible = 0 != e
                            }, this)
                        })
                    }
                }), i
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Hamb", [], function () {
            return ["DisplayObject", "SoundManager", function (e, t) {
                function n(t) {
                    e.call(this)
                }
                return n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.$base = new PIXI.Graphics, this.$topline = new PIXI.Graphics, this.$topline2 = new PIXI.Graphics, this.$botline = new PIXI.Graphics, this.$botline2 = new PIXI.Graphics, this.$mask = new PIXI.Graphics, this.$base.beginFill(this.colors.white, 0), this.$base.drawRect(50, 0, 66, 21), this.$mask.beginFill(this.colors.white, .5), this.$mask.drawRect(0, 0, 66, 21), this.$mask.x = 50, this.$topline.beginFill(this.colors.white), this.$topline.drawRect(0, -1, 66, 2), this.$topline.x = 50, this.$topline.y = 1, this.$topline2.beginFill(this.colors.white), this.$topline2.drawRect(0, -1, 66, 2), this.$topline2.x = -16, this.$topline2.y = 1, this.$botline.beginFill(this.colors.white), this.$botline.drawRect(0, -1, 46, 2), this.$botline.x = 50, this.$botline.y = 18, this.$botline2.beginFill(this.colors.white), this.$botline2.drawRect(0, -1, 46, 2), this.$botline2.x = 4, this.$botline2.y = 18, this.$el.addChild(this.$base), this.$el.addChild(this.$topline), this.$el.addChild(this.$topline2), this.$el.addChild(this.$botline), this.$el.addChild(this.$botline2), this.$el.addChild(this.$mask), this.$el.interactive = !0, this.$el.buttonMode = !0, this.timeline = this.getTimeline(), this.$el.mask = this.$mask, this.addEvents(), this
                    },
                    addEvents: function () {
                        this.$el.mouseover = _.bind(function () {
                            t.play("sections", "hambbackhover", !0), this.timeline.play()
                        }, this), this.$el.mouseout = _.bind(function () {
                            this.timeline.reverse()
                        }, this)
                    },
                    getTimeline: function () {
                        var e = .6,
                            t = .09,
                            n = Expo.easeInOut;
                        return new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(this.$topline, e, {
                                    x: 116,
                                    ease: n
                                }), TweenMax.to(this.$botline, e, {
                                    x: 116,
                                    ease: n
                                })],
                                stagger: t
                            }), new TimelineMax({
                                tweens: [TweenMax.to(this.$topline2, e, {
                                    x: 50,
                                    ease: n
                                }), TweenMax.to(this.$botline2, e, {
                                    x: 70,
                                    ease: n
                                })],
                                stagger: t
                            })],
                            stagger: t,
                            paused: !0
                        })
                    }
                }), n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Mouse", [], function () {
            return ["DisplayObject", function (e) {
                function t() {
                    e.call(this)
                }
                return t.prototype.constructor = t, t.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.$bitmap = new PIXI.Sprite.fromImage("img/mouse-icon.png"), this.$bitmap.anchor.x = .5, this.$bitmap.anchor.y = .5, this.$dot = new PIXI.Graphics, this.$dot.beginFill(this.colors.white), this.$dot.drawCircle(0, 0, 4), this.$dot.alpha = 0, this.$dot.y = -10, this.$el.addChild(this.$bitmap), this.$el.addChild(this.$dot), this.$el.scale.x = .5, this.$el.scale.y = .5, new TimelineMax({
                            tweens: [TweenMax.to(this.$dot, .75, {
                                alpha: 1,
                                ease: Expo.easeOut
                            }), TweenMax.to(this.$dot, .75, {
                                y: 10,
                                alpha: 0,
                                ease: Expo.easeInOut
                            })],
                            stagger: .75,
                            repeat: -1,
                            repeatDelay: .25
                        }), this
                    }
                }), t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Specs", [], function () {
            return ["DisplayObject", "Text", function (e, t) {
                function n(t) {
                    e.call(this), this.model = t
                }
                return n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var t = this.colors,
                            n = this.model.client + " _ " + this.model.name;
                        return this.$line = new PIXI.Graphics, this.$agency = this.getAgency(this.model.agency, {
                            fontFamily: "din-condensed-web",
                            fontSize: 23,
                            fill: t.white,
                            letterSpacing: 1
                        }), this.$title = this.getTitle(n.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: t.white,
                            letterSpacing: 2
                        }), this.$title.x = this.width + 25, this.$title.y = 2, this.$line.beginFill(t.green), this.$line.drawRect(0, 0, 50, 2), this.$line.x = this.width + 30, this.$line.y = this.height - 6, this.$el.addChild(this.$agency), this.$el.addChild(this.$title), this.$el.addChild(this.$line), this
                    },
                    tweenIn: function () {
                        var e = [];
                        return _.each(this.$agency.children, function (t, n) {
                            e.push(TweenMax.from(t.getChildAt(0), .65, {
                                x: 2.5 * -t.scope.width,
                                ease: Expo.easeInOut
                            }))
                        }, this), new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: e.reverse(),
                                stagger: .025
                            }), new TimelineMax({
                                tweens: [TweenMax.from(this.$title.getChildAt(1).scale, .85, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(this.$line.scale, .65, {
                                    x: 0,
                                    ease: Expo.easeOut
                                }), TweenMax.from(this.$line, .65, {
                                    x: 0,
                                    ease: Expo.easeOut
                                })],
                                stagger: .1
                            })]
                        })
                    },
                    tweenOut: function () {
                        var e = [];
                        return _.each(this.$agency.children, function (t, n) {
                            e.push(TweenMax.to(t.getChildAt(0), .65, {
                                x: 2.5 * t.scope.width,
                                ease: Expo.easeInOut
                            }))
                        }, this), new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: [TweenMax.to(this.$title.getChildAt(1), .85, {
                                        x: this.$title.getChildAt(0).width,
                                        ease: Expo.easeInOut
                                    }), TweenMax.to(this.$title.getChildAt(1).scale, .85, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })]
                                }), new TimelineMax({
                                    tweens: [TweenMax.to(this.$line, .65, {
                                        x: this.$title.getChildAt(0).width,
                                        ease: Expo.easeInOut
                                    }), TweenMax.to(this.$line.scale, .65, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })],
                                    stagger: .065
                                })]
                            }), new TimelineMax({
                                tweens: e.reverse(),
                                stagger: .025
                            })]
                        })
                    },
                    getAgency: function (e, n) {
                        e.length < 1 && (e = " ");
                        for (var i, r, s, a, o = 0, l = 0, u = this.colors, c = new PIXI.Sprite, h = 0; h < e.length; ++h) i = e.charAt(h).toUpperCase(), r = new t(i, n), r.$el.x = o, r.$el.y = l, s = new PIXI.Graphics, a = new PIXI.Graphics, s.beginFill(u.black), s.drawRect(-2, -5, r.width + 4, r.height + 10), a.beginFill(u.white, 0), a.drawRect(-2, -5, r.width + 4, r.height + 10), o += r.width + r.spacing, r.$el.mask = s, r.$el.addChild(a), r.$el.addChild(s), c.addChild(r.$el);
                        return this.width = o - r.spacing, this.height = r.height, c
                    },
                    getTitle: function (e, t) {
                        var n = new PIXI.Text(e, t),
                            i = new PIXI.Graphics,
                            r = new PIXI.Sprite;
                        return n.x = 5, i.beginFill(this.colors.black), i.drawRect(0, 0, n.width + 10, n.height), n.mask = i, r.addChild(n), r.addChild(i), r
                    },
                    destroy: function () {
                        _.each(this.$agency.children, function (e) {
                            this.$agency.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0), this.$agency.removeChildAt(0)
                        }, this), this.$title.getChildAt(0).destroy(!0), this.$agency.destroy(!0), this.$title.destroy(!0), this.model = null, e.prototype.destroy.call(this)
                    }
                }), n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Holdrag", [], function () {
            return ["DisplayObject", function (e) {
                function t(t) {
                    e.call(this), this.label = t, this.isHold = !1
                }
                return t.prototype.constructor = t, t.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var t = this.colors;
                        this.$base = new PIXI.Graphics, this.$base.beginFill(t.white, .15), this.$base.drawRect(-80, 0, 160, 2), this.$base.scale.x = .5, this.$base.y = 30, this.$line = new PIXI.Graphics, this.$line.beginFill(t.red, 1), this.$line.drawRect(-80, 0, 160, 2), this.$line.scale.x = 0, this.$line.x = -40, this.$line.y = 30, this.$tutorial = new PIXI.Text(this.label.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: t.white,
                            letterSpacing: 2
                        }), this.$tutorial.x = -this.$tutorial.width / 2;
                        var n = this.$tutorial.width + 10,
                            i = this.$base.y + 10;
                        return this.$mask = new PIXI.Graphics, this.$mask.beginFill(t.white, 1), this.$mask.drawRect(-n / 2, -5, n, i), this.$mask.scale.x = 0, this.$el.addChild(this.$tutorial), this.$el.addChild(this.$base), this.$el.addChild(this.$line), this.$el.addChild(this.$mask), this.$el.mask = this.$mask, this.loopTimeline = new TimelineMax({
                            tweens: [TweenMax.to(this.$line.scale, 1.75, {
                                bezier: {
                                    curviness: 0,
                                    values: [{
                                        x: 0
                                    }, {
                                        x: .5
                                    }, {
                                        x: 0
                                    }]
                                },
                                ease: Expo.easeInOut
                            }), TweenMax.to(this.$line, 1.75, {
                                bezier: {
                                    curviness: 0,
                                    values: [{
                                        x: -40
                                    }, {
                                        x: 0
                                    }, {
                                        x: 40
                                    }]
                                },
                                ease: Expo.easeInOut
                            })],
                            repeat: -1
                        }), this
                    },
                    expand: function () {
                        this.kill(), this.isHold = !0, this.timeline = new TimelineMax({
                            tweens: [TweenMax.to(this.$base.scale, 1.5, {
                                x: 1,
                                ease: Expo.easeOut
                            }), TweenMax.to(this.$line.scale, 1.5, {
                                x: 1,
                                ease: Expo.easeOut
                            }), TweenMax.to(this.$line, 1.5, {
                                x: 0,
                                ease: Expo.easeOut
                            })]
                        })
                    },
                    collapse: function () {
                        this.kill(), this.isHold = !1, this.timeline = new TimelineMax({
                            tweens: [TweenMax.to(this.$base.scale, 1.5, {
                                x: .5,
                                ease: Expo.easeOut
                            }), TweenMax.to(this.$line.scale, 1.5, {
                                x: 0,
                                ease: Expo.easeOut
                            }), TweenMax.to(this.$line, 1.5, {
                                x: -40,
                                ease: Expo.easeOut
                            })],
                            onComplete: _.bind(function () {
                                !this.isHold && this.loopTimeline && this.loopTimeline.play()
                            }, this)
                        })
                    },
                    kill: function () {
                        this.timeline && this.timeline.kill(), this.loopTimeline && this.loopTimeline.kill()
                    },
                    destroy: function () {
                        this.kill(), this.$tutorial.destroy(!0), this.$base.destroy(!0), this.$line.destroy(!0), this.$mask.destroy(!0), this.$tutorial = null, this.$base = null, this.$line = null, this.$mask = null, this.loopTimeline = null, this.timeline = null, this.isHold = !1, e.prototype.destroy.call(this)
                    }
                }), t
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Menugrid", [], function () {
            return ["DisplayObject", "Utils", function (e, t) {
                function n(n, i) {
                    e.call(this), this.$texture = n, this.width = t.isMobile() ? 960 : 1280, this.height = t.isMobile() ? 540 : 720, this.ratio = this.width / this.height, this.timeline = null, this.fragstore = [], this.dpr = i
                }
                return n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.$poster = new PIXI.Sprite(this.$texture), this.$poster.anchor.x = .5, this.$poster.anchor.y = .5, this.$poster.alpha = 0, this.$holder = new PIXI.Sprite, this.$el.addChild(this.$poster), this.$el.addChild(this.$holder), this
                    },
                    update: function () {
                        this.$texture && this.$texture.update()
                    },
                    tweenIn: function () {
                        this.timeline && this.timeline.kill(), 0 == this.fragstore.length && this.addFragments();
                        var e = this.$holder.children[0],
                            t = this.$holder.children[1],
                            n = e.children[1],
                            i = t.children[1];
                        return this.timeline = new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.from(n.scale, 1.5, {
                                    y: 0,
                                    ease: Expo.easeOut
                                }), TweenMax.from(e.scale, 1.5, {
                                    x: 1.45,
                                    y: 1.45,
                                    ease: Expo.easeOut
                                })],
                                stagger: .1
                            }), new TimelineMax({
                                tweens: [TweenMax.from(i.scale, 1.5, {
                                    y: 0,
                                    ease: Expo.easeOut
                                }), TweenMax.from(t.scale, 1.5, {
                                    x: 1.45,
                                    y: 1.45,
                                    ease: Expo.easeOut
                                })],
                                stagger: .1
                            })],
                            stagger: .1,
                            onComplete: _.bind(function () {
                                this.$poster && (this.$poster.alpha = 1), this.removeFragments()
                            }, this)
                        }), this.timeline
                    },
                    tweenOut: function () {
                        this.$poster.alpha = 0, this.timeline && this.timeline.kill(), 0 == this.fragstore.length && this.addFragments();
                        var e = this.$holder.children[0],
                            t = this.$holder.children[1],
                            n = e.children[1],
                            i = t.children[1];
                        return new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [TweenMax.to(i.scale, 1.25, {
                                    y: 0,
                                    ease: Expo.easeOut
                                }), TweenMax.to(t.scale, 1.25, {
                                    x: 1.45,
                                    y: 1.45,
                                    ease: Expo.easeOut
                                })],
                                stagger: .1
                            }), new TimelineMax({
                                tweens: [TweenMax.to(n.scale, 1.25, {
                                    y: 0,
                                    ease: Expo.easeOut
                                }), TweenMax.to(e.scale, 1.25, {
                                    x: 1.45,
                                    y: 1.45,
                                    ease: Expo.easeOut
                                })],
                                stagger: .1
                            })],
                            stagger: .1,
                            onComplete: _.bind(function () {
                                this.removeFragments()
                            }, this)
                        })
                    },
                    tweenOutToPage: function () {
                        return this.tweenOut()
                    },
                    addFragments: function () {
                        this.stagesize || (this.stagesize = this.getStageSize());
                        var e = new PIXI.Sprite,
                            t = new PIXI.Sprite,
                            n = new PIXI.Sprite(this.$texture),
                            i = new PIXI.Sprite(this.$texture),
                            r = this.stagesize.s / this.dpr;
                        n.anchor.x = .5, n.anchor.y = .5, n.scale.x = r, n.scale.y = r, i.anchor.x = .5, i.anchor.y = .5, i.scale.x = r, i.scale.y = r;
                        var s = new PIXI.Graphics,
                            a = new PIXI.Graphics;
                        s.clear(), s.beginFill(this.colors.red, .5), s.drawRect(-this.stagesize.x, 0, this.stagesize.x, this.stagesize.h), s.y = -this.stagesize.y, a.clear(), a.beginFill(this.colors.red, .5), a.drawRect(0, 0, this.stagesize.x, -this.stagesize.h), a.y = this.stagesize.y, e.addChild(n), e.addChild(s), t.addChild(i), t.addChild(a), e.mask = s, t.mask = a, this.fragstore.push(e), this.fragstore.push(t), this.$holder.addChild(e), this.$holder.addChild(t)
                    },
                    removeFragments: function () {
                        _.each(this.fragstore, function (e) {
                            e.destroy()
                        }, this), this.fragstore = []
                    },
                    getStageSize: function (e) {
                        var t = window.innerWidth,
                            n = window.innerHeight,
                            i = 1;
                        return i = t / n > this.ratio ? t / this.width : n / this.height, {
                            w: t,
                            h: n,
                            x: t / 2,
                            y: n / 2,
                            s: i
                        }
                    },
                    resize: function (e) {
                        var t = 1;
                        this.$el.x = e.x, this.$el.y = e.y, this.$holder.x = -e.x, this.$holder.y = -e.y, t = e.w / e.h > this.ratio ? e.w / this.width : e.h / this.height, this.$poster.x = -e.x, this.$poster.y = -e.y, this.$poster.scale.x = t / this.dpr, this.$poster.scale.y = t / this.dpr, this.stagesize = this.getStageSize()
                    }
                }), n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Identity", [], function () {
            return ["DisplayObject", "Text", "Math2", "Utils", function (e, t, n, i) {
                function r(t) {
                    e.call(this), this.person = t
                }
                return r.prototype.constructor = r, r.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var n = this.colors;
                        return this.$wrapper = new PIXI.Sprite, this.$head = new t("I am".toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 18,
                            fill: n.white,
                            letterSpacing: .5
                        }), this.$name = this.getName(this.person.name, {
                            fontFamily: "timmons",
                            fontSize: 100,
                            fill: n.green,
                            letterSpacing: 10
                        }), this.$type = new t(this.person.type.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: n.white,
                            letterSpacing: 0
                        }), this.$role = new t(this.person.role.toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 30,
                            fill: n.white,
                            letterSpacing: 0
                        }), this.$topLine = new PIXI.Graphics, this.$botLine = new PIXI.Graphics, this.$wrapper.addChild(this.$topLine), this.$wrapper.addChild(this.$botLine), this.$wrapper.addChild(this.$head.$el), this.$wrapper.addChild(this.$type.$el), this.$wrapper.addChild(this.$role.$el), this.$el.addChild(this.$wrapper), this.$el.addChild(this.$name), this.filter = new PIXI.filters.GlitchFilter, this.filter.resolution = i.getDpr(), this.filter.padding = 0, this.filter.seed = 0, this.resize({
                            w: innerWidth,
                            h: innerHeight,
                            x: innerWidth / 2,
                            y: innerHeight / 2
                        }), this
                    },
                    tweenIn: function () {
                        var e, t, n = [],
                            i = 0;
                        return _.each(this.$name.children, function (r, s) {
                            t = r.getChildAt(0), e = r.getChildAt(1), i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2, n.push(TweenMax.from(t, .9, {
                                y: i,
                                ease: Expo.easeInOut
                            }))
                        }, this), new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: n,
                                stagger: .045
                            }), new TimelineMax({
                                tweens: [TweenMax.allFrom(this.$head.$el.children.reverse(), .6, {
                                    x: -75,
                                    ease: Expo.easeInOut
                                }, .05), TweenMax.from(this.$topLine.scale, .8, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .08
                            }), TweenMax.allFrom(this.$type.$el.children, 1, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }, .025), TweenMax.allFrom(this.$role.$el.children, 1, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }, .015), TweenMax.from(this.$botLine.scale, .9, {
                                x: 0,
                                ease: Expo.easeInOut
                            })],
                            stagger: .15
                        })
                    },
                    tweenOut: function () {
                        var e, t, n = [],
                            i = 0;
                        return _.each(this.$name.children, function (r, s) {
                            t = r.getChildAt(0), e = r.getChildAt(1), i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2, n.push(TweenMax.to(t, .75, {
                                y: i,
                                ease: Expo.easeOut
                            }))
                        }, this), new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: n,
                                stagger: .045
                            }), TweenMax.to(this.$el, .15, {
                                alpha: 0,
                                ease: Cubic.easeInOut
                            })],
                            stagger: .5,
                            onStart: _.bind(function () {
                                this.$wrapper.filters = [this.filter]
                            }, this),
                            onUpdate: _.bind(this.generateGlitch, this),
                            onComplete: _.bind(function () {
                                this.destroy()
                            }, this)
                        })
                    },
                    generateGlitch: function () {
                        this.filter.byp = 0, this.filter.amount = Math.random() / 60, this.filter.angle = n.randFloat(-Math.PI, Math.PI), this.filter.distortionX = n.randFloat(0, 1), this.filter.distortionY = n.randFloat(0, 1), this.filter.seedX = n.randFloat(-.5, .5), this.filter.seedY = n.randFloat(-.5, .5)
                    },
                    getName: function (e, i) {
                        for (var r, s, a, o, l, u, c = 0, h = 0, d = {}, p = new PIXI.Sprite, f = 0; f < e.length; ++f) r = e.charAt(f).toUpperCase(), o = new t(r, i), o.$el.casheAsBitmap = !0, o.$el.x = c, o.$el.y = h, l = new PIXI.Graphics, u = new PIXI.Graphics, s = n.randFloat(25, 100), a = s + n.randFloat(50, 150), d.x = -2, d.y = -s, d.w = o.width + 4, d.h = o.height + a, l.beginFill(this.colors.black, .5), l.drawRect(d.x, 0, d.w, d.h), l.y = d.y, u.beginFill(this.colors.white, 0), u.drawRect(d.x, 0, d.w, d.h), u.y = d.y, c += o.width + o.spacing, o.$el.addChild(u), o.$el.addChild(l), p.addChild(o.$el), o.$el.mask = l;
                        return this.width = c - o.spacing, this.height = o.height, p
                    },
                    resize: function (e) {
                        var t = this.colors,
                            n = 50;
                        this.$head.$el.x = 50, this.$name.x = 48, this.$name.y = this.$head.height + 30, this.$type.$el.x = this.width + 25 + n, this.$type.$el.y = this.$name.y, this.$role.$el.x = this.width + 25 + n, this.$role.$el.y = this.$type.$el.y + this.$type.height + 10;
                        var i = {
                                y: .5 * this.$head.height,
                                x: this.$head.width + n + 30,
                                w: this.$type.$el.x + this.$type.width - (this.$head.width + n + 30)
                            },
                            r = {
                                x: this.$role.$el.x,
                                y: this.$role.$el.y + this.$role.height + 28,
                                w: e.w - this.$role.$el.x
                            };
                        this.$topLine.clear(), this.$topLine.beginFill(t.white), this.$topLine.drawRect(i.x, i.y, i.w, 1), this.$botLine.clear(), this.$botLine.beginFill(t.white), this.$botLine.drawRect(0, r.y, -r.w, 2), this.$botLine.x = e.w, this.$el.y = .5 * -r.y
                    },
                    destroy: function () {
                        _.each(this.$name.children, function (e) {
                            this.$name.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0), this.$name.removeChildAt(0)
                        }, this), this.$name.destroy(!0), this.$head.destroy(!0), this.$type.destroy(!0), this.$role.destroy(!0), this.$name = null, this.$head = null, this.$type = null, this.$role = null, e.prototype.destroy.call(this)
                    }
                }), r
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Benchmark", [], function () {
            return ["DisplayObject", "Text", function (e, t) {
                function n() {
                    e.call(this)
                }
                return n.prototype.constructor = n, n.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var n = "Turn up your volume or use headphones";
                        return this.$icon = new PIXI.Sprite.fromImage("img/audio-icon.png"), this.$icon.x = 0, this.$icon.y = -5, this.$icon.scale.x = .5, this.$icon.scale.y = .5, this.$text = new t(n.toUpperCase(), {
                            fontFamily: "montser-bold",
                            fontSize: 9,
                            fill: this.colors.white,
                            letterSpacing: 1
                        }), this.$text.$el.x = 30, this.$el.addChild(this.$text.$el), this.$el.addChild(this.$icon), this.startLoop(), this
                    },
                    startLoop: function () {
                        TweenMax.from(this.$el, .5, {
                            alpha: 0,
                            ease: Cubic.easeInOut,
                            onComplete: _.bind(function () {
                                TweenMax.to(this.$text.$el, 1, {
                                    alpha: .25,
                                    ease: Cubic.easeInOut,
                                    repeat: -1,
                                    yoyo: !0
                                })
                            }, this)
                        })
                    },
                    hide: function (e) {
                        TweenMax.to(this.$el, .5, {
                            alpha: 0,
                            ease: Cubic.easeOut,
                            onComplete: e
                        })
                    },
                    resize: function (e) {
                        this.$el.x = e.x - .5 * (this.$text.width + 35), this.$el.y = e.y - .5 * this.$text.height
                    },
                    destroy: function () {
                        this.$text.destroy(), this.$text.$el = null, e.prototype.destroy.call(this)
                    }
                }), n
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Aboutintro", [], function () {
            return ["DisplayObject", "Text", "Math2", function (e, t, n) {
                function i() {
                    e.call(this), this.labels = {
                        head: "Uprising™",
                        whitep1: "We are a ",
                        greenp1: "digital creative design & production studio",
                        whitep2: "We create digital projects to top communication agencies"
                    }
                }
                return i.prototype.constructor = i, i.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var n = this.colors;
                        this.$head = new t(this.labels.head.toUpperCase(), {
                            fontFamily: "montser-reg",
                            fontSize: 9,
                            fill: n.white,
                            letterSpacing: 0
                        }), this.$whitep1 = new t(this.labels.whitep1.toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 28,
                            fill: n.white,
                            letterSpacing: 0
                        }), this.$greenp1 = this.getMaskText(this.labels.greenp1.toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 28,
                            fill: n.green,
                            letterSpacing: 0
                        }), this.$whitep2 = new t(this.labels.whitep2.toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 28,
                            fill: n.white,
                            letterSpacing: 0
                        }), this.$botLine = new PIXI.Graphics, this.$whitep1.$el.y = this.$head.height + 8, this.$greenp1.x = this.$whitep1.width, this.$greenp1.y = this.$head.height + 8, this.$whitep2.$el.y = this.$head.height + this.$whitep1.height + 10, _.each(this.$head.$el.children, function (e) {
                            e.alpha = 0
                        }), _.each(this.$whitep1.$el.children, function (e) {
                            e.alpha = 0
                        }), _.each(this.$whitep2.$el.children, function (e) {
                            e.alpha = 0
                        });
                        var i, r, s = 0;
                        return _.each(this.$greenp1.children, function (e, t) {
                            r = e.getChildAt(0), i = e.getChildAt(1), s = t % 2 == 0 ? i.height + i.y + e.scope.getPadding() / 2 : i.y - e.scope.height - e.scope.getPadding() / 2, TweenMax.set(r, {
                                y: s
                            })
                        }, this), this.$botLine.scale.x = 0, this.$el.addChild(this.$head.$el), this.$el.addChild(this.$whitep1.$el), this.$el.addChild(this.$whitep2.$el), this.$el.addChild(this.$greenp1), this.$el.addChild(this.$botLine), this
                    },
                    tweenIn: function () {
                        var e, t, n = [],
                            i = 0;
                        return _.each(this.$greenp1.children, function (r, s) {
                            t = r.getChildAt(0), e = r.getChildAt(1), i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2, n.push(TweenMax.to(t, .75, {
                                y: 0,
                                ease: Expo.easeInOut
                            }))
                        }, this), new TimelineMax({
                            tweens: [TweenMax.allTo(this.$head.$el.children, 1, {
                                alpha: 1,
                                ease: Expo.easeOut
                            }, .025), TweenMax.allTo(this.$whitep1.$el.children, 1, {
                                alpha: 1,
                                ease: Expo.easeOut
                            }, .025), TweenMax.allTo(this.$whitep2.$el.children, 1, {
                                alpha: 1,
                                ease: Expo.easeOut
                            }, .025), TweenMax.to(this.$botLine.scale, 1, {
                                x: 1,
                                ease: Expo.easeInOut
                            }), new TimelineMax({
                                tweens: n,
                                stagger: .025
                            })],
                            delay: .45
                        })
                    },
                    tweenOut: function () {
                        var e, t, n = [],
                            i = 0;
                        return _.each(this.$greenp1.children, function (r, s) {
                            t = r.getChildAt(0), e = r.getChildAt(1), i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2, n.push(TweenMax.to(t, .75, {
                                y: i,
                                ease: Expo.easeOut
                            }))
                        }, this), new TimelineMax({
                            tweens: [TweenMax.allTo(this.$head.$el.children, .75, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }, .015), TweenMax.allTo(this.$whitep1.$el.children, .75, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }, .015), TweenMax.allTo(this.$whitep2.$el.children, .75, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }, .015), TweenMax.to(this.$botLine.scale, 1, {
                                x: 0,
                                ease: Expo.easeInOut
                            }), new TimelineMax({
                                tweens: n,
                                stagger: .025
                            })]
                        })
                    },
                    getMaskText: function (e, i) {
                        for (var r, s, a, o, l, u, c = 0, h = 0, d = {}, p = new PIXI.Sprite, f = 0; f < e.length; ++f) r = e.charAt(f).toUpperCase(), o = new t(r, i), o.$el.casheAsBitmap = !0, o.$el.x = c, o.$el.y = h, l = new PIXI.Graphics, u = new PIXI.Graphics, s = n.randFloat(20, 50), a = s + n.randFloat(25, 100), d.x = -2, d.y = -s, d.w = o.width + 4, d.h = o.height + a, l.beginFill(this.colors.black, .5), l.drawRect(d.x, 0, d.w, d.h), l.y = d.y, u.beginFill(this.colors.white, 0), u.drawRect(d.x, 0, d.w, d.h), u.y = d.y, c += o.width + o.spacing, o.$el.addChild(u), o.$el.addChild(l), p.addChild(o.$el), o.$el.mask = l;
                        return this.width = c - o.spacing, this.height = o.height, p
                    },
                    resize: function (e) {
                        var t = this.colors,
                            n = 660,
                            i = -60;
                        this.$el.x = .5 * -n, this.$el.y = i;
                        var r = {
                            y: this.$whitep2.$el.y + this.$whitep2.height + 28,
                            w: e.x + .5 * n
                        };
                        this.$botLine.clear(), this.$botLine.beginFill(t.white), this.$botLine.drawRect(0, r.y, -r.w, 2), this.$botLine.x = r.w
                    },
                    destroy: function () {
                        _.each(this.$greenp1.children, function (e) {
                            this.$greenp1.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0),
                                this.$greenp1.removeChildAt(0)
                        }, this), this.$head.destroy(), this.$whitep1.destroy(), this.$whitep2.destroy(), this.$botLine.destroy(), this.$head = null, this.$whitep1 = null, this.$greenp1 = null, this.$whitep2 = null, this.$botLine = null, e.prototype.destroy.call(this)
                    }
                }), i
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/sprites/Clients", [], function () {
            return ["DisplayObject", "Text", "Math2", "SoundManager", function (e, t, n, i) {
                function r(e, t) {
                    this.model = e, this.colors = t, this.$el = new PIXI.Sprite, this.$el.scope = this
                }

                function s(t) {
                    e.call(this), this.length = t.length, this.collection = t, this.module = 4, this.slide = -1
                }
                return r.prototype.constructor = r, r.prototype = {
                    render: function () {
                        var e = this.colors;
                        this.$name = this.getMaskText(this.model.client.toUpperCase(), {
                            fontFamily: "din-condensed-web",
                            fontSize: 28,
                            fill: e.green,
                            letterSpacing: 0
                        }), this.$name.x = 0, this.$name.x = 0, this.$place = new t(this.model.place.toUpperCase(), {
                            fontFamily: "montser-bold",
                            fontSize: 9,
                            fill: e.white,
                            letterSpacing: 1
                        }), this.$place.$el.y = this.$name.oheight + 10, this.$place.$el.x = 0, this.$el.addChild(this.$name), this.$el.addChild(this.$place.$el), this.width = this.$name.owidth;
                        var n, i, r = 0;
                        return _.each(this.$place.$el.children, function (e) {
                            e.alpha = 0
                        }), _.each(this.$name.children, function (e, t) {
                            i = e.getChildAt(0), n = e.getChildAt(1), r = t % 2 == 0 ? n.height + n.y + e.scope.getPadding() / 2 : n.y - e.scope.height - e.scope.getPadding() / 2, TweenMax.set(i, {
                                y: r
                            })
                        }, this), this
                    },
                    tweenIn: function () {
                        var e, t, n = [],
                            i = 0;
                        return this.timeline && this.timeline.kill(), _.each(this.$name.children, function (r, s) {
                            t = r.getChildAt(0), e = r.getChildAt(1), i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2, n.push(TweenMax.fromTo(t, .9, {
                                y: i
                            }, {
                                y: 0,
                                ease: Expo.easeInOut
                            }))
                        }, this), this.timeline = new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: n,
                                stagger: .035
                            }), TweenMax.allFromTo(this.$place.$el.children, 1, {
                                alpha: 0
                            }, {
                                alpha: 1,
                                ease: Expo.easeOut
                            }, .035)],
                            stagger: .35
                        }), this.timeline
                    },
                    tweenOut: function () {
                        var e, t, n = [],
                            i = 0;
                        return this.timeline && this.timeline.kill(), _.each(this.$name.children, function (r, s) {
                            t = r.getChildAt(0), e = r.getChildAt(1), i = s % 2 == 0 ? e.height + e.y + r.scope.getPadding() / 2 : e.y - r.scope.height - r.scope.getPadding() / 2, n.push(TweenMax.to(t, .75, {
                                y: i,
                                ease: Expo.easeInOut
                            }))
                        }, this), this.timeline = new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: n,
                                stagger: .035
                            }), TweenMax.allTo(this.$place.$el.children, .9, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }, .035)],
                            stagger: .35
                        }), this.timeline
                    },
                    getMaskText: function (e, i) {
                        for (var r, s, a, o, l, u, c = 0, h = 0, d = {}, p = new PIXI.Sprite, f = 0; f < e.length; ++f) r = e.charAt(f).toUpperCase(), o = new t(r, i), o.$el.casheAsBitmap = !0, o.$el.x = c, o.$el.y = h, l = new PIXI.Graphics, u = new PIXI.Graphics, s = n.randFloat(15, 40), a = s + n.randFloat(20, 80), d.x = -2, d.y = -s, d.w = o.width + 4, d.h = o.height + a, l.beginFill(this.colors.black, .5), l.drawRect(d.x, 0, d.w, d.h), l.y = d.y, u.beginFill(this.colors.white, 0), u.drawRect(d.x, 0, d.w, d.h), u.y = d.y, c += o.width + o.spacing, o.$el.addChild(u), o.$el.addChild(l), p.addChild(o.$el), o.$el.mask = l;
                        return p.owidth = c - o.spacing, p.oheight = o.height, p
                    },
                    destroy: function () {
                        _.each(this.$name.children, function (e) {
                            this.$name.getChildAt(0).getChildAt(0).getChildAt(0).destroy(!0), this.$name.removeChildAt(0)
                        }, this), this.$name.destroy(!0), this.$place.destroy(!0), this.$name = null, this.$place = null, e.prototype.destroy.call(this)
                    }
                }, s.prototype.constructor = s, s.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this);
                        var n = this.colors;
                        return this.gallery = [], this.$gallery = new PIXI.Sprite, this.$line = new PIXI.Graphics, this.$line.x = -(window.innerWidth - 642) / 2, this.$line.scale.x = 0, this.$navigation = new PIXI.Sprite, this.$navigation.x = -10, this.$navigation.y = 150, this.$head = new t("It’s been a pleasure working for:".toUpperCase(), {
                            fontFamily: "montser-bold",
                            fontSize: 9,
                            fill: n.white,
                            letterSpacing: 1
                        }), _.each(this.$head.$el.children, function (e) {
                            e.alpha = 0
                        }), this.$gallery.y = this.$head.height + 30, _.each(this.collection, function (e, t) {
                            var i = new r(e, n),
                                s = Math.floor(t / this.module);
                            if (this.$gallery.addChild(i.render().$el), this.gallery.push(i), t % this.module == 0) {
                                var a = new PIXI.Sprite,
                                    o = new PIXI.Graphics,
                                    l = new PIXI.Graphics,
                                    u = new PIXI.Graphics;
                                o.beginFill(this.colors.white, 0), o.drawRect(0, 0, 20, 30), l.beginFill(this.colors.white, .2), l.drawRect(10, 0, 1, 30), l.scale.y = .65, u.beginFill(this.colors.red, 1), u.drawRect(10, 0, 1, 30), u.scale.y = s == this.slide ? 1 : 0, a.addChild(o), a.addChild(l), a.addChild(u), a.index = s, a.x = 20 * a.index, a.y = 20, a.alpha = 0, a.interactive = !0, a.buttonMode = !0, a.click = a.tap = _.bind(function (e) {
                                    this.gotoSlide(e.target.index)
                                }, this), this.$navigation.addChild(a)
                            }
                        }, this), this.$el.addChild(this.$line), this.$el.addChild(this.$head.$el), this.$el.addChild(this.$gallery), this.$el.addChild(this.$navigation), this.gotoSlide(0), this
                    },
                    gotoSlide: function (e) {
                        if (this.last = this.slide, this.slide = e, this.last == this.slide) return new TimelineMax({
                            tweens: []
                        });
                        var t, n, r = this.slide * this.module,
                            s = r + this.module,
                            a = [];
                        s > this.length && (s = this.length), _.each(this.$navigation.children, function (t, n) {
                            n == e ? new TimelineMax({
                                tweens: [TweenMax.to(t.getChildAt(1).scale, .9, {
                                    y: 1,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(t.getChildAt(2).scale, .9, {
                                    y: 1,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .1
                            }) : new TimelineMax({
                                tweens: [TweenMax.to(t.getChildAt(2).scale, .9, {
                                    y: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.to(t.getChildAt(1).scale, .9, {
                                    y: .65,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .1
                            })
                        }), _.each(this.$gallery.children, function (e) {
                            a.push(e.scope.tweenOut())
                        }, this);
                        for (var o = r, l = 0; s > o; ++o, ++l) t = this.gallery[o], n = this.gallery[o - 1], t && (l - 1 >= 0 && (t.$el.x = n.width + n.$el.x + 30), a.push(t.tweenIn()));
                        if (t) {
                            var u = this.$line,
                                c = this.colors,
                                h = (window.innerWidth - 642) / 2,
                                d = t ? h + t.$el.x + t.width - 2 : 0;
                            a.push(TweenMax.to({
                                x: u.x,
                                w: u.width
                            }, 1, {
                                x: -h,
                                w: d,
                                ease: Expo.easeInOut,
                                onUpdate: function () {
                                    u.clear(), u.beginFill(c.white), u.drawRect(0, 118, this.target.w, 2), u.x = this.target.x
                                }
                            }))
                        }
                        return i.play("about", "introtween", !0), new TimelineMax({
                            tweens: a,
                            stagger: .015
                        })
                    },
                    tweenIn: function () {
                        return new TimelineMax({
                            tweens: [this.gotoSlide(0), TweenMax.allTo(this.$head.$el.children, .75, {
                                alpha: 1,
                                ease: Expo.easeOut
                            }, .015), TweenMax.allTo(this.$navigation.children, .75, {
                                alpha: 1,
                                y: 0,
                                ease: Expo.easeInOut
                            }, .045), TweenMax.to(this.$line.scale, 1, {
                                x: 1,
                                ease: Expo.easeInOut
                            })],
                            delay: .35
                        })
                    },
                    tweenOut: function () {
                        return new TimelineMax({
                            tweens: [this.gotoSlide(-1), TweenMax.allTo(this.$head.$el.children, .75, {
                                alpha: 0,
                                ease: Expo.easeOut
                            }, .015), TweenMax.allTo(this.$navigation.children, .75, {
                                alpha: 0,
                                y: 20,
                                ease: Expo.easeInOut
                            }, .045), TweenMax.to(this.$line.scale, 1, {
                                x: 0,
                                ease: Expo.easeInOut
                            })]
                        })
                    },
                    resize: function (e) {
                        var t = 684,
                            n = 186;
                        this.$el.x = .5 * -t, this.$el.y = .5 * -n;
                        var i, r = this.slide * this.module,
                            s = r + this.module;
                        s > this.length && (s = this.length);
                        for (var a = r, o = 0; s > a; ++a, ++o) i = this.gallery[a];
                        if (i) {
                            var l = (e.w - t) / 2,
                                u = i ? l + i.$el.x + i.width - 2 : 0;
                            this.$line.clear(), this.$line.beginFill(this.colors.white), this.$line.drawRect(0, 118, u, 2), this.$line.x = -l
                        }
                    },
                    destroy: function () {
                        _.each(this.gallery, function (e) {
                            e.destroy()
                        }, this), this.$navigation.destroy(!0), this.$gallery.destroy(!0), this.$head.destroy(!0), this.$navigation = null, this.$gallery = null, this.$head = null, e.prototype.destroy.call(this)
                    }
                }), s
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/three/InfoScene", [], function () {
            return ["ThreeObject", "SoundManager", "Math2", "Events", function (e, t, n, i) {
                function r(t, n) {
                    e.call(this, t, n), this.diff = 0, this.drag = !1, this.currface = -1, this.prevent = !1, this.mouse = {
                        x: 0,
                        y: 0
                    }, this.pitchs = [255, 195, 133, 91, 0], this.rotations = {
                        faces: {
                            start: 0,
                            curr: 0,
                            last: 0
                        },
                        parts: {
                            start: 0,
                            curr: 0,
                            last: 0
                        },
                        startMouseX: 0
                    }
                }
                return r.prototype.constructor = r, r.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        e.prototype.render.call(this), this.renderer.domElement.id = "info", this.camera.position.x = 235, this.camera.position.z = 570, this.camera.position.y = -146, this.camera.rotation.x = .174533, this.camera.rotation.y = .959931, this.camera.rotation.z = 0, this.camera.wave = {
                            amplitude: {
                                x: 0,
                                y: 40
                            },
                            period: {
                                x: 300,
                                y: 300
                            },
                            r: 0
                        }, this.scene.fog = new THREE.FogExp2(1053202, .006), this.room = this.factory.getRoomMesh(), this.room.rotation.x = .174533, this.room.rotation.y = -.959931, this.faces = this.factory.getTeamMesh(), this.particles = this.factory.getParticles({
                            radius: {
                                min: 400,
                                max: 1e3
                            },
                            height: {
                                min: -750,
                                max: 750
                            },
                            particles: 300
                        }), this.lights = this.factory.getLights(), this.lights.point1.light.position.set(500, -100, 500), this.lights.point1.light.target = this.faces, this.scene.add(this.room), this.scene.add(this.faces), this.scene.add(this.particles), this.scene.add(this.lights.ambient), this.scene.add(this.lights.point1.light);
                        var t = this.faces.rotation.x;
                        return this.rotations.faces.start = t, this.rotations.faces.curr = t, this.rotations.faces.last = t, this
                    },
                    onDown: function (e) {
                        this.isTeamPage() && (this.drag = !0, this.rotations.startMouseX = e.clientX - window.innerWidth / 2, this.rotations.faces.start = this.rotations.faces.curr, this.rotations.parts.start = this.rotations.parts.curr, this.prevent = this.hitMenuButton(e) || this.hitBackButton(e), this.prevent || (this.scope.$emit(i.HOLD_START), this.toggleZoom(!0)))
                    },
                    onMove: function (e) {
                        if (this.isTeamPage()) {
                            this.mouse.x = e.clientX - window.innerWidth / 2, this.mouse.y = e.clientY - window.innerHeight / 2;
                            var t = Math.abs(this.mouse.x - this.rotations.startMouseX);
                            this.drag && t > 5 && (TweenMax.killTweensOf(this.faces.rotation), this.rotations.faces.curr = this.rotations.faces.start + (this.mouse.x - this.rotations.startMouseX) * -.01, this.rotations.parts.curr = this.rotations.parts.start + .01 * (this.mouse.x - this.rotations.startMouseX), this.intersectsCount = 0, this.diff = t)
                        }
                    },
                    onUp: function (e) {
                        this.isTeamPage() && (this.drag = !1, this.intersectsCount = 0, this.prevent = !1, this.toggleZoom(!1), this.scope.$emit(i.HOLD_END), this.diff > 5 && this.snapFace())
                    },
                    toggleZoom: function (e) {
                        var n = e ? 500 : 570,
                            i = e ? 5e-4 : 8e-4;
                        e && t.play("about", "zoom", !0), new TimelineMax({
                            tweens: [TweenMax.to(this.camera.position, 1.5, {
                                z: n,
                                ease: Expo.easeOut
                            }), TweenMax.to(this.scene.fog, 1.5, {
                                density: i,
                                ease: Expo.easeOut
                            })]
                        })
                    },
                    snapFace: function () {
                        function e(e, t) {
                            var n = t.map(function (t) {
                                var n = Math.abs(e - t);
                                return n > 180 ? 360 - n : n
                            });
                            return t[_.indexOf(n, Math.min.apply(null, n))]
                        }
                        var t = n.radToDeg(this.rotations.faces.curr),
                            r = Math.round(t % 360);
                        0 > r && (r = 360 + r);
                        var s = parseFloat(e(r, this.pitchs)),
                            a = 360 * Math.floor((t - s) / 360);
                        (r - s + 360) % 360 > 180 && (a += 360);
                        var o = _.indexOf(this.pitchs, s),
                            l = n.degToRad(s + a);
                        this.currface != o && this.scope.$emit(i.SNAP_TEAM, this.scope.data.infos.team[o]), TweenMax.to(this.faces.rotation, 1.5, {
                            x: l,
                            ease: Quint.easeOut,
                            onUpdate: _.bind(function () {
                                this.rotations.faces.curr = this.rotations.faces.last = this.faces.rotation.x
                            }, this)
                        }), this.currface = o, this.diff = 0
                    },
                    tweenIn: function () {
                        this.currface = 0, this.scope.$emit(i.SNAP_TEAM, this.scope.data.infos.team[0]);
                        var e = 2 * Math.PI + this.getIncrRotation(this.pitchs[0]);
                        return new TimelineMax({
                            tweens: [TweenMax.to(this.faces.rotation, 1.5, {
                                x: e,
                                ease: Quint.easeOut
                            }), TweenMax.to(this.rotations.parts, 1.5, {
                                curr: e,
                                ease: Quint.easeOut
                            }), TweenMax.to(this.scene.fog, 1.5, {
                                density: 8e-4,
                                ease: Quint.easeOut
                            })],
                            onUpdate: _.bind(function () {
                                this.rotations.faces.curr = this.rotations.faces.last = this.faces.rotation.x
                            }, this)
                        })
                    },
                    tweenOut: function () {
                        this.currface = -1, this.scope.$emit(i.SNAP_TEAM, null);
                        var e = 2 * Math.PI + this.getIncrRotation(299);
                        return new TimelineMax({
                            tweens: [TweenMax.to(this.faces.rotation, 1.5, {
                                x: e,
                                ease: Quint.easeOut
                            }), TweenMax.to(this.rotations.parts, 1.5, {
                                curr: e,
                                ease: Quint.easeOut
                            }), TweenMax.to(this.scene.fog, 1.5, {
                                density: .006,
                                ease: Quint.easeOut
                            })],
                            onUpdate: _.bind(function () {
                                this.rotations.faces.curr = this.rotations.faces.last = this.faces.rotation.x
                            }, this)
                        })
                    },
                    getIncrRotation: function (e) {
                        var t = n.radToDeg(this.rotations.faces.curr),
                            i = Math.round(t % 360);
                        0 > i && (i = 360 + i);
                        var r = e,
                            s = 360 * Math.floor((t - r) / 360);
                        return (i - r + 360) % 360 > 180 && (s += 360), n.degToRad(r + s)
                    },
                    hitBackButton: function (e) {
                        return this.mouse.x > -28 && this.mouse.x < 28 && e.clientY >= 0 && e.clientY < 56
                    },
                    hitMenuButton: function (e) {
                        return e.clientX > 50 && e.clientX < 116 && e.clientY > 20 && e.clientY < 40
                    },
                    isTeamPage: function () {
                        return "team" == this.scope.currstate.params.to.page
                    },
                    udpate: function () {
                        e.prototype.udpate.call(this), this.updateCamera(), this.updateParticles(), this.updateTeamFaces()
                    },
                    updateCamera: function () {
                        var e = this.camera.wave;
                        this.camera.position.y += .005 * n.swing(e.amplitude, e.period, this.angle, e.r, 0).y
                    },
                    updateTeamFaces: function () {
                        if (this.faces.rotation.x = this.rotations.faces.last, this.faces.group) {
                            for (var e = this.faces.group, t = e.geometry.vertices.length, i = e.waves, r = t - 1; r >= 0; --r) e.geometry.vertices[r].x += .005 * n.swing(i[r].amplitude, i[r].period, this.angle, 0).x, e.geometry.vertices[r].y += .005 * n.swing(i[r].amplitude, i[r].period, this.angle, 0).y, e.geometry.vertices[r].z += .005 * n.swing(i[r].amplitude, i[r].period, this.angle, 0).z;
                            e.geometry.verticesNeedUpdate = !0
                        }
                        this.rotations.faces.last += .025 * (this.rotations.faces.curr - this.rotations.faces.last)
                    },
                    updateParticles: function () {
                        this.particles.children[0].material.uniforms.angle.value = this.angle, this.particles.children[0].material.uniforms.lastRotation.value = this.rotations.parts.last, this.rotations.parts.last += .05 * (this.rotations.parts.curr - this.rotations.parts.last)
                    },
                    clear: function () {
                        this.drag = !1
                    }
                }), r
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/three/MenuScene", [], function () {
            return ["ThreeObject", "SoundManager", "Math2", "Events", function (e, t, n, i) {
                function r(t, n) {
                    e.call(this, t, n), this.diff = 0, this.drag = !1, this.prevent = !1, this.mouse = {
                        x: 0,
                        y: 0
                    }, this.intersectsCount = 0, this.selectIcon, this.rotations = {
                        icons: {
                            start: 0,
                            curr: 0,
                            last: 0,
                            radius: 0
                        },
                        parts: {
                            start: 0,
                            curr: 0,
                            last: 0
                        },
                        startMouseX: 0
                    }
                }
                return r.prototype.constructor = r, r.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.renderer.domElement.id = "menu", this.nullObj = new THREE.Vector3(0, 0, 0), this.raycaster = new THREE.Raycaster, this.camera.position.x = 0, this.camera.position.z = 650, this.camera.position.y = -120, this.camera.wave = {
                            amplitude: {
                                x: 30,
                                y: 120
                            },
                            period: {
                                x: 300,
                                y: 300
                            },
                            r: 0
                        }, this.scene.fog = new THREE.FogExp2(1053202, 8e-4), this.room = this.factory.getRoomMesh(), this.room.rotation.y = -1.5708, this.room.position.z = 600, this.floor = this.factory.getFloorMesh(), this.floor.rotation.x = -1.5708, this.floor.rotation.z = -.78, this.floor.position.y = -450, this.floor.position.z = -650, this.logo = this.factory.getLogoMesh(), this.logo.rotation.y = -.72, this.menuicons = this.factory.getMenuMesh(), this.menuicons.rotation.y = -.52, this.payoffs = this.factory.getPayoffsMesh(), this.payoffs.rotation.y = -.52, this.particles = this.factory.getParticles({
                            radius: {
                                min: 200,
                                max: 1500
                            },
                            height: {
                                min: -350,
                                max: 1e3
                            },
                            particles: 300
                        }), this.lights = this.factory.getLights(), this.scene.add(this.room), this.scene.add(this.floor), this.scene.add(this.logo), this.scene.add(this.payoffs), this.scene.add(this.menuicons), this.scene.add(this.particles), this.scene.add(this.lights.ambient), this.scene.add(this.lights.point1.light), this.scene.add(this.lights.point2.light), this
                    },
                    onDown: function (e) {
                        this.drag = !0, this.rotations.startMouseX = e.clientX - window.innerWidth / 2, this.rotations.icons.start = this.rotations.icons.curr, this.rotations.parts.start = this.rotations.parts.curr;
                        var t = this.getIntersects(e, this.menuicons.children);
                        t && (this.selectIcon = {
                            index: t.index,
                            state: t.state
                        }, ++this.intersectsCount), this.prevent = this.intersectsCount > 0 || this.hitBackButton(e), this.prevent || (this.scope.$emit(i.HOLD_START), this.toggleZoom(!0))
                    },
                    onMove: function (e) {
                        this.mouse.x = e.clientX - window.innerWidth / 2, this.mouse.y = e.clientY - window.innerHeight / 2;
                        var t = this.getIntersects(e, this.menuicons.children);
                        _.each(this.menuicons.children, function (e) {
                            this.tasselizeIcon(e, t.id == e.id)
                        }, this);
                        var n = Math.abs(this.mouse.x - this.rotations.startMouseX);
                        this.drag && n > 5 && (this.rotations.icons.curr = this.rotations.icons.start + .01 * (this.mouse.x - this.rotations.startMouseX), this.rotations.parts.curr = this.rotations.icons.curr, this.intersectsCount = 0, this.prevent = !1, this.diff = n)
                    },
                    onUp: function (e) {
                        if (this.drag = !1, this.prevent || (this.scope.$emit(i.HOLD_END), this.toggleZoom(!1)), this.intersectsCount > 0) {
                            var t = this.scope.data.sections.collection[this.selectIcon.index];
                            this.scope.$emit(i.CLICK_MENU, t)
                        }
                        this.intersectsCount = 0, this.prevent = !1
                    },
                    toggleZoom: function (e) {
                        var n = e ? 900 : 650,
                            i = e ? 5e-4 : 8e-4;
                        e && t.play("menu", "zoom", !0), new TimelineMax({
                            tweens: [TweenMax.to(this.camera.position, 1.5, {
                                z: n,
                                ease: Expo.easeOut
                            }), TweenMax.to(this.scene.fog, 1.5, {
                                density: i,
                                ease: Expo.easeOut
                            })]
                        })
                    },
                    tasselizeIcon: function (e, n) {
                        var i = e.children[0].children[0],
                            r = i.geometry.attributes.position.array;
                        n && !e.tasselized ? (e.tasselized = !0, TweenMax.killTweensOf(r), t.play("menu", "iconshover", !0)) : !n && e.tasselized && (e.tasselized = !1, TweenMax.killTweensOf(r), TweenMax.to(r, 1, {
                            endArray: i.data.oVertices,
                            ease: Cubic.easeOut,
                            onUpdate: function () {
                                i.geometry.attributes.position.needsUpdate = !0
                            }
                        }))
                    },
                    getIntersects: function (e, t) {
                        var n, i = {
                            x: e.clientX / window.innerWidth * 2 - 1,
                            y: 2 * -(e.clientY / window.innerHeight) + 1
                        };
                        this.raycaster.setFromCamera(i, this.camera), n = this.raycaster.intersectObjects(t, !0);
                        for (var r = 0; r < n.length; ++r) {
                            var s = n[r];
                            if (s && "menu" == s.object.parent.name) return s.object.parent
                        }
                        return !1
                    },
                    hitBackButton: function (e) {
                        return this.mouse.x > -28 && this.mouse.x < 28 && e.clientY >= 0 && e.clientY < 56
                    },
                    udpate: function () {
                        e.prototype.udpate.call(this), this.updateFloor(), this.updateCamera(), this.updateIcons(), this.updateLights(), this.updateParticles()
                    },
                    updateCamera: function () {
                        var e = this.camera.wave;
                        this.camera.position.y += .005 * n.swing(e.amplitude, e.period, this.angle, e.r, 0).y, this.camera.position.x += .01 * (this.mouse.x / 10 - this.camera.position.x), this.camera.lookAt(this.nullObj)
                    },
                    updateFloor: function () {
                        for (var e, t, i, r, s, a = 0, o = this.floor.children[0].geometry, l = this.floor.children[1].geometry, u = this.floor.segments; u >= 0; --u)
                            for (var c = this.floor.segments; c >= 0; --c) s = this.floor.waves[a], e = o.vertices[a], t = l.vertices[a], i = s.amplitude, r = s.period, e.x += .005 * n.swing(i, r, this.angle, 0).x, e.y += .005 * n.swing(i, r, this.angle, 0).y, e.z = this.floor.terrain[u][c] + n.swing(i, r, this.angle, 0).z, t.x = e.x, t.y = e.y, t.z = e.z + 25, a++;
                        o.verticesNeedUpdate = !0, l.verticesNeedUpdate = !0
                    },
                    updateIcons: function () {
                        for (var e, t, i, r, s, a, o, l, u, c = this.drag && !this.prevent ? 250 : 320, h = {
                                x: 0,
                                y: -30,
                                z: 5e3
                            }, d = this.menuicons.children, p = 2 * Math.PI / 4, f = d.length, $ = f - 1; $ >= 0; --$)
                            if (r = d[$], s = r.children[0], a = s.children[0], e = a.geometry, t = e.attributes.position.array, i = p * $, i += -this.rotations.icons.last, r.position.x = n.rotate(this.rotations.icons.radius, i).x, r.position.z = n.rotate(this.rotations.icons.radius, i).y, r.rotation.y = n.atan(h, r.position), s.rotation.y += s.angle, r.tasselized) {
                                for (var m = t.length - 1; m >= 0; --m) o = a.data.mVertices[3 * m + 0] + n.swing(a.data.wave[3 * m + 0].amplitude, a.data.wave[3 * m + 0].period, this.angle, 0).x, l = a.data.mVertices[3 * m + 1] + n.swing(a.data.wave[3 * m + 0].amplitude, a.data.wave[3 * m + 0].period, this.angle, 0).y, u = a.data.mVertices[3 * m + 2] + n.swing(a.data.wave[3 * m + 0].amplitude, a.data.wave[3 * m + 0].period, this.angle, 0).z, t[3 * m + 0] += .1 * (o - t[3 * m + 0]), t[3 * m + 1] += .1 * (l - t[3 * m + 1]), t[3 * m + 2] += .1 * (u - t[3 * m + 2]);
                                e.attributes.position.needsUpdate = !0, s.rotation.y -= .75 * s.angle
                            } this.rotations.icons.last += .1 * (this.rotations.icons.curr - this.rotations.icons.last), this.rotations.icons.radius += .1 * (c - this.rotations.icons.radius)
                    },
                    updateLights: function () {
                        var e = .015 * -this.angle,
                            t = .015 * -this.angle + Math.PI,
                            i = n.rotate(400, e).x,
                            r = n.rotate(400, e).y,
                            s = n.rotate(400, t).x,
                            a = n.rotate(400, t).y,
                            o = -550,
                            l = -550;
                        this.lights.point1.light.position.x = i, this.lights.point1.light.position.y = o, this.lights.point1.light.position.z = r, this.lights.point2.light.position.x = s, this.lights.point2.light.position.y = l, this.lights.point2.light.position.z = a
                    },
                    updateParticles: function () {
                        this.particles.children[0].material.uniforms.angle.value = this.angle, this.particles.children[0].material.uniforms.lastRotation.value = this.rotations.parts.last, this.rotations.parts.last += .05 * (this.rotations.parts.curr - this.rotations.parts.last)
                    },
                    clear: function () {
                        this.drag = !1
                    }
                }), r
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/three/ThreeFactory", [], function () {
            return ["TerrainGeneration", "Performance", "Utils", "Math2", function (e, t, n, i) {
                function r() {
                    var t = !1,
                        r = n.getColors(),
                        s = new THREE.CubeTextureLoader,
                        a = "img/envmap/",
                        o = ".jpg",
                        l = [a + "px" + o, a + "nx" + o, a + "py" + o, a + "ny" + o, a + "pz" + o, a + "nz" + o],
                        u = s.load(l);
                    return u.format = THREE.RGBFormat, {
                        getMenuMesh: function () {
                            var e = new THREE.Object3D,
                                t = new THREE.OBJLoader,
                                n = new THREE.TextureLoader,
                                s = [{
                                    path: "img/meshes/cross.obj",
                                    label: "img/texture/main-label.png",
                                    labelpos: {
                                        x: 68,
                                        y: 0
                                    },
                                    state: "index"
                                }, {
                                    path: "img/meshes/triangle.obj",
                                    label: "img/texture/work-label.png",
                                    labelpos: {
                                        x: 68,
                                        y: -18
                                    },
                                    state: "work"
                                }, {
                                    path: "img/meshes/rectangle.obj",
                                    label: "img/texture/about-label.png",
                                    labelpos: {
                                        x: 68,
                                        y: 36
                                    },
                                    state: "infos"
                                }, {
                                    path: "img/meshes/hexagon.obj",
                                    label: "img/texture/contacts-label.png",
                                    labelpos: {
                                        x: 68,
                                        y: -46
                                    },
                                    state: "contacts"
                                }];
                            return _.each(s, function (s, a) {
                                var o = new THREE.Object3D;
                                t.load(s.path, _.bind(function (t) {
                                    t.angle = i.randFloat(.02, .06), t.traverse(_.bind(function (e) {
                                        if (e instanceof THREE.Mesh) {
                                            e.material = new THREE.MeshLambertMaterial({
                                                color: r.red,
                                                reflectivity: 0
                                            });
                                            var t = e.geometry.attributes.position.array;
                                            e.data = {
                                                oVertices: [],
                                                mVertices: [],
                                                wave: []
                                            };
                                            for (var n = t.length - 1; n >= 0; --n) e.data.oVertices[3 * n + 0] = t[3 * n + 0], e.data.oVertices[3 * n + 1] = t[3 * n + 1], e.data.oVertices[3 * n + 2] = t[3 * n + 2], e.data.mVertices[3 * n + 0] = t[3 * n + 0] + i.randFloat(-10, 10), e.data.mVertices[3 * n + 1] = t[3 * n + 1] + i.randFloat(-5, 5), e.data.mVertices[3 * n + 2] = t[3 * n + 2] + i.randFloat(-10, 10), e.data.wave[3 * n + 0] = {
                                                amplitude: {
                                                    x: i.randFloat(-10, 10),
                                                    y: i.randFloat(-10, 10),
                                                    z: i.randFloat(-10, 10)
                                                },
                                                period: {
                                                    x: i.randFloat(100, 200),
                                                    y: i.randFloat(100, 200),
                                                    z: i.randFloat(100, 200)
                                                }
                                            }, e.data.wave[3 * n + 1] = {
                                                amplitude: {
                                                    x: i.randFloat(-10, 10),
                                                    y: i.randFloat(-10, 10),
                                                    z: i.randFloat(-10, 10)
                                                },
                                                period: {
                                                    x: i.randFloat(100, 200),
                                                    y: i.randFloat(100, 200),
                                                    z: i.randFloat(100, 200)
                                                }
                                            }, e.data.wave[3 * n + 2] = {
                                                amplitude: {
                                                    x: i.randFloat(-10, 10),
                                                    y: i.randFloat(-10, 10),
                                                    z: i.randFloat(-10, 10)
                                                },
                                                period: {
                                                    x: i.randFloat(100, 200),
                                                    y: i.randFloat(100, 200),
                                                    z: i.randFloat(100, 200)
                                                }
                                            }
                                        }
                                    }, this));
                                    var l = new THREE.Mesh(new THREE.CubeGeometry(120, 120, 1), new THREE.MeshLambertMaterial({
                                            color: r.red,
                                            transparent: !0,
                                            opacity: 0,
                                            wireframe: !1
                                        })),
                                        u = new THREE.Mesh(new THREE.PlaneGeometry(64, 16), new THREE.MeshBasicMaterial({
                                            map: n.load(s.label),
                                            transparent: !0,
                                            wireframe: !1
                                        }));
                                    u.position.x = s.labelpos.x, u.position.y = s.labelpos.y, u.position.z = 1, o.index = a, o.name = "menu", o.state = s.state, o.add(t), o.add(l), o.add(u), e.add(o)
                                }, this))
                            }, this), e
                        },
                        getTeamMesh: function () {
                            var e = "img/meshes/abstract.obj",
                                n = "img/meshes/team.obj",
                                r = new THREE.Object3D,
                                s = new THREE.OBJLoader;
                            return s.load(e, _.bind(function (e) {
                                e.castShadow = !1, e.traverse(_.bind(function (e) {
                                    if (e instanceof THREE.Mesh) {
                                        var n = (new THREE.Geometry).fromBufferGeometry(e.geometry);
                                        e.material = new THREE.MeshStandardMaterial({
                                            wireframe: t,
                                            color: 1053202,
                                            roughness: .25,
                                            metalness: 0,
                                            envMapIntensity: 5,
                                            envMap: u,
                                            shading: THREE.FlatShading
                                        }), n.mergeVertices(), e.geometry = n
                                    }
                                }, this)), r.add(e)
                            }, this)), s.load(n, _.bind(function (e) {
                                e.castShadow = !1, e.traverse(_.bind(function (e) {
                                    if (e instanceof THREE.Mesh) {
                                        var t = (new THREE.Geometry).fromBufferGeometry(e.geometry);
                                        t.mergeVertices(), e.geometry = t, e.waves = [];
                                        for (var n = 0; n < e.geometry.vertices.length; ++n) e.waves.push({
                                            amplitude: {
                                                x: i.randFloat(-10, 10),
                                                y: i.randFloat(-10, 10),
                                                z: i.randFloat(-10, 10)
                                            },
                                            period: {
                                                x: i.randFloat(100, 200),
                                                y: i.randFloat(100, 200),
                                                z: i.randFloat(100, 200)
                                            }
                                        });
                                        var s = THREE.UniformsUtils.merge([THREE.ShaderLib.phong.uniforms, {
                                                angle: {
                                                    type: "f",
                                                    value: 0
                                                },
                                                reflectivity: {
                                                    type: "f",
                                                    value: .25
                                                }
                                            }]),
                                            a = new THREE.ShaderMaterial({
                                                uniforms: s,
                                                vertexShader: document.getElementById("infosFacesVertexshader").textContent,
                                                fragmentShader: document.getElementById("infosFacesFragmentshader").textContent,
                                                shading: THREE.FlatShading,
                                                lights: !0,
                                                fog: !0
                                            });
                                        a.envMap = u, e.material = a, r.group = e
                                    }
                                }, this)), r.add(e)
                            }, this)), r.rotation.x = i.degToRad(148), r
                        },
                        getParticles: function (e) {
                            for (var t, n, s = new THREE.Object3D, a = e.particles, o = new THREE.Geometry, l = new THREE.Matrix4, u = {
                                    positions: [],
                                    rotations: [],
                                    amplitude: [],
                                    period: []
                                }, c = 0; a > c; ++c) t = new THREE.SphereGeometry(6, 4, 4, 0, 2 * Math.PI, 0, 2 * Math.PI), u.positions.push({
                                radius: i.randFloat(e.radius.min, e.radius.max),
                                height: i.randFloat(e.height.min, e.height.max),
                                scale: i.randFloat(.5, 1.5)
                            }), u.rotations.push({
                                speed: i.randFloat(.075, .75),
                                angle: i.randFloat(0, 2 * Math.PI)
                            }), u.amplitude.push({
                                x: i.randFloat(-40, 40),
                                y: i.randFloat(-75, 75),
                                z: i.randFloat(-60, 60)
                            }), u.period.push({
                                x: i.randFloat(300, 400),
                                y: i.randFloat(200, 300),
                                z: i.randFloat(400, 500)
                            }), l.makeRotationX(i.randFloat(2 * -Math.PI, 2 * Math.PI)), l.makeRotationY(i.randFloat(2 * -Math.PI, 2 * Math.PI)), l.makeRotationZ(i.randFloat(2 * -Math.PI, 2 * Math.PI)), o.merge(t, l);
                            for (var h = (new THREE.BufferGeometry).fromGeometry(o), d = h.attributes.position.array.length, p = new THREE.Color, f = new Float32Array(d), $ = new Float32Array(d), m = new Float32Array(d), g = new Float32Array(d), v = new Float32Array(d), w = 0, y = 0, c = 0; d > c; c += 24)
                                for (var x = 0; 24 > x; x += 3) {
                                    w = c + x, y = Math.floor(w / 216), $[w + 0] = u.positions[y].radius, $[w + 1] = u.positions[y].height, $[w + 2] = u.positions[y].scale, m[w + 0] = u.rotations[y].angle, m[w + 1] = u.rotations[y].speed, m[w + 2] = u.rotations[y].center, g[w + 0] = u.amplitude[y].x, g[w + 1] = u.amplitude[y].y, g[w + 2] = u.amplitude[y].z, v[w + 0] = u.period[y].x, v[w + 1] = u.period[y].y, v[w + 2] = u.period[y].z;
                                    var p = new THREE.Color(y % 2 == 0 ? r.green : r.grey3);
                                    f[w + 0] = p.r, f[w + 1] = p.g, f[w + 2] = p.b
                                }
                            h.addAttribute("vPosition", new THREE.BufferAttribute($, 3)), h.addAttribute("vRotation", new THREE.BufferAttribute(m, 3)), h.addAttribute("vAmplitude", new THREE.BufferAttribute(g, 3)), h.addAttribute("vPeriod", new THREE.BufferAttribute(v, 3)), h.addAttribute("cColor", new THREE.BufferAttribute(f, 3));
                            var b = THREE.UniformsUtils.merge([THREE.ShaderLib.phong.uniforms, {
                                    angle: {
                                        type: "f",
                                        value: 0
                                    },
                                    lastRotation: {
                                        type: "f",
                                        value: 0
                                    }
                                }]),
                                T = new THREE.ShaderMaterial({
                                    uniforms: b,
                                    vertexShader: document.getElementById("menuParticlesVertexshader").textContent,
                                    fragmentShader: document.getElementById("menuParticlesFragmentshader").textContent,
                                    shading: THREE.FlatShading,
                                    lights: !0,
                                    fog: !0
                                });
                            return n = new THREE.Mesh(h, T), s.add(n), s
                        },
                        getPayoffsMesh: function () {
                            var e = new THREE.Object3D,
                                t = new THREE.TextureLoader,
                                n = [{
                                    texture: "img/texture/payoff.png",
                                    position: {
                                        x: 400,
                                        y: -50,
                                        z: -100
                                    },
                                    scale: {
                                        x: .6,
                                        y: .6
                                    }
                                }, {
                                    texture: "img/texture/payoff.png",
                                    position: {
                                        x: 100,
                                        y: 30,
                                        z: -500
                                    },
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                }, {
                                    texture: "img/texture/payoff.png",
                                    position: {
                                        x: 0,
                                        y: 200,
                                        z: -300
                                    },
                                    scale: {
                                        x: 1.3,
                                        y: 1.3
                                    }
                                }, {
                                    texture: "img/texture/payoff.png",
                                    position: {
                                        x: -500,
                                        y: 0,
                                        z: 100
                                    },
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                }, {
                                    texture: "img/texture/payoff.png",
                                    position: {
                                        x: 200,
                                        y: 150,
                                        z: 400
                                    },
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                }, {
                                    texture: "img/texture/payoff.png",
                                    position: {
                                        x: -600,
                                        y: 200,
                                        z: 350
                                    },
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                }, {
                                    texture: "img/texture/payoff.png",
                                    position: {
                                        x: -600,
                                        y: 50,
                                        z: -150
                                    },
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                }, {
                                    texture: "img/texture/payoff.png",
                                    position: {
                                        x: 550,
                                        y: -100,
                                        z: 200
                                    },
                                    scale: {
                                        x: 1,
                                        y: 1
                                    }
                                }];
                            return _.each(n, function (n, i) {
                                var s = new THREE.Object3D,
                                    a = new THREE.Mesh(new THREE.PlaneGeometry(74, 3), new THREE.MeshBasicMaterial({
                                        color: r.white,
                                        wireframe: !1
                                    })),
                                    o = new THREE.Mesh(new THREE.PlaneGeometry(128, 16), new THREE.MeshBasicMaterial({
                                        map: t.load(n.texture),
                                        transparent: !0,
                                        wireframe: !1
                                    }));
                                a.position.x = -27, a.position.y = 15, a.position.z = 5, s.rotation.y = 0, s.position.x = n.position.x, s.position.y = n.position.y, s.position.z = n.position.z, s.scale.x = n.scale.x, s.scale.y = n.scale.y, s.add(a), s.add(o), e.add(s)
                            }, this), e
                        },
                        getLogoMesh: function () {
                            var e = new THREE.Object3D,
                                n = new THREE.OBJLoader;
                            return n.load("img/meshes/uprising-logo.obj", _.bind(function (n) {
                                n.position.x = -50, n.castShadow = !1, n.traverse(_.bind(function (e) {
                                    if (e instanceof THREE.Mesh) {
                                        var n = (new THREE.Geometry).fromBufferGeometry(e.geometry);
                                        e.material = new THREE.MeshPhongMaterial({
                                            color: r.white,
                                            envMap: u,
                                            fog: !1,
                                            reflectivity: .25,
                                            shininess: 30,
                                            wireframe: t
                                        }), n.mergeVertices(), e.geometry = n
                                    }
                                }, this)), e.add(n)
                            }, this)), e
                        },
                        getLights: function () {
                            var e = new THREE.AmbientLight(r.white, .5),
                                t = new THREE.PointLight(r.white, .9),
                                n = new THREE.PointLight(r.white, .6);
                            t.shadow.mapSize.width = 256, t.shadow.mapSize.height = 256, t.castShadow = !1, n.shadow.mapSize.width = 256, n.shadow.mapSize.height = 256, n.castShadow = !1;
                            var i = new THREE.Mesh(new THREE.SphereGeometry(6, 4, 4, 0, 2 * Math.PI, 0, 2 * Math.PI), new THREE.MeshBasicMaterial({
                                    color: 16777215,
                                    wireframe: !1
                                })),
                                s = new THREE.Mesh(new THREE.SphereGeometry(6, 4, 4, 0, 2 * Math.PI, 0, 2 * Math.PI), new THREE.MeshBasicMaterial({
                                    color: 16777215,
                                    wireframe: !1
                                }));
                            return {
                                ambient: e,
                                point1: {
                                    light: t,
                                    helper: i
                                },
                                point2: {
                                    light: n,
                                    helper: s
                                }
                            }
                        },
                        getFloorMesh: function () {
                            for (var n = 16, s = [], a = new THREE.Object3D, o = new e(5e3, 5e3, n, 1), l = o.diamondSquare(), c = this.getFloorPlane(5e3, 5e3, n, l), h = this.getFloorPlane(5e3, 5e3, n, l), d = new THREE.MeshStandardMaterial({
                                    wireframe: t,
                                    color: 1382167,
                                    roughness: .25,
                                    metalness: 0,
                                    envMapIntensity: 5,
                                    envMap: u,
                                    shading: THREE.FlatShading
                                }), p = new THREE.MeshBasicMaterial({
                                    color: 4080708,
                                    vertexColors: r.red,
                                    wireframeLinewidth: 1,
                                    wireframe: !0
                                }), f = new THREE.Mesh(c, d), $ = new THREE.Mesh(h, p), m = 0, g = 0; n >= g; ++g)
                                for (var v = 0; n >= v; ++v) {
                                    c.vertices[m];
                                    s[m] = {
                                        vertices: c.vertices[m],
                                        amplitude: {
                                            x: i.randFloat(-150, 150),
                                            y: i.randFloat(-100, 100),
                                            z: i.randFloat(-120, 120)
                                        },
                                        period: {
                                            x: i.randFloat(300, 400),
                                            y: i.randFloat(200, 300),
                                            z: i.randFloat(250, 350)
                                        }
                                    }, ++m
                                }
                            return f.receiveShadow = !0, f.receiveShadow = !0, $.position.y = 0, a.segments = n, a.terrain = l, a.waves = s, a.add(f), a.add($), a
                        },
                        getFloorPlane: function (e, t, n, r) {
                            for (var s = new THREE.PlaneGeometry(e, t, n, n), a = 0, o = 0; n >= o; o++)
                                for (var l = 0; n >= l; l++) s.vertices[a].x += i.randFloat(-150, 150), s.vertices[a].y += i.randFloat(-100, 100), s.vertices[a].z = r[o][l] + i.randFloat(-100, 200), a++;
                            return s.mergeVertices(), s
                        },
                        getRoomMesh: function () {
                            var e = ".jpg",
                                n = "img/envmap/",
                                i = new THREE.TextureLoader,
                                r = i.load(n + "px" + e),
                                s = i.load(n + "nx" + e),
                                a = i.load(n + "py" + e),
                                o = i.load(n + "ny" + e),
                                l = i.load(n + "pz" + e),
                                u = i.load(n + "nz" + e),
                                c = [new THREE.MeshBasicMaterial({
                                    map: r,
                                    side: THREE.BackSide,
                                    wireframe: t
                                }), new THREE.MeshBasicMaterial({
                                    map: s,
                                    side: THREE.BackSide,
                                    wireframe: t
                                }), new THREE.MeshBasicMaterial({
                                    map: a,
                                    side: THREE.BackSide,
                                    wireframe: t
                                }), new THREE.MeshBasicMaterial({
                                    map: o,
                                    side: THREE.BackSide,
                                    wireframe: t
                                }), new THREE.MeshBasicMaterial({
                                    map: l,
                                    side: THREE.BackSide,
                                    wireframe: t
                                }), new THREE.MeshBasicMaterial({
                                    map: u,
                                    side: THREE.BackSide,
                                    wireframe: t
                                })],
                                h = new THREE.BoxGeometry(5e3, 5e3, 5e3),
                                d = new THREE.MeshFaceMaterial(c);
                            return new THREE.Mesh(h, d)
                        }
                    }
                }
                return r
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/three/TerrainGeneration", [], function () {
            return [function () {
                function e(e, t, n, i) {
                    this.width = e, this.height = t, this.segments = n, this.smoothingFactor = i, this.terrain = new Array, this._init = function () {
                        this.terrain = new Array;
                        for (var e = 0; e <= this.segments; e++) {
                            this.terrain[e] = new Array;
                            for (var t = 0; t <= this.segments; t++) this.terrain[e][t] = 0
                        }
                    }
                }
                return e.prototype.constructor = e, e.prototype = _.extend(Object.create({}), {
                    diamondSquare: function () {
                        this._init();
                        for (var e = this.segments + 1, t = this.segments; t >= 2; t /= 2) {
                            var n = t / 2;
                            this.smoothingFactor /= 2;
                            for (var i = 0; i < this.segments; i += t)
                                for (var r = 0; r < this.segments; r += t) {
                                    var s = this.terrain[i][r] + this.terrain[i + t][r] + this.terrain[i][r + t] + this.terrain[i + t][r + t];
                                    s /= 4, s += 2 * this.smoothingFactor * Math.random() - this.smoothingFactor, this.terrain[i + n][r + n] = s
                                }
                            for (var i = 0; i < this.segments; i += n)
                                for (var r = (i + n) % t; r < this.segments; r += t) {
                                    var s = this.terrain[(i - n + e) % e][r] + this.terrain[(i + n) % e][r] + this.terrain[i][(r + n) % e] + this.terrain[i][(r - n + e) % e];
                                    s /= 4, s += 2 * this.smoothingFactor * Math.random() - this.smoothingFactor, this.terrain[i][r] = s, 0 === i && (this.terrain[this.segments][r] = s), 0 === r && (this.terrain[i][this.segments] = s)
                                }
                        }
                        return this.terrain
                    }
                }), e
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/PostProcessing", [], function () {
            return ["SoundManager", "Math2", "Utils", function (e, t, n) {
                function i() {
                    return h = new PIXI.filters.GlitchFilter, h.resolution = n.getDpr(), h.padding = 0, a(), h
                }

                function r() {
                    return c = new PIXI.filters.FilmFilter, c.resolution = n.getDpr(), c.nIntensity = .15, c.sIntensity = 0, c.padding = 0, c
                }

                function s() {
                    c && (c.time += .01), p || (h && (h.seed = .25 * Math.random(), h.byp = 0, f % d == 0 ? (f = 0, a()) : d / 20 > f % d ? (h.amount = Math.random() / 60, h.angle = t.randFloat(-Math.PI, Math.PI), h.distortionX = t.randFloat(0, 1), h.distortionY = -1, h.seedX = t.randFloat(-.2, .2), h.seedY = t.randFloat(-.2, .2), e.play("post", "glitch", !1)) : h.byp = 1), ++f, ++$)
                }

                function a() {
                    d = t.randInt(280, 540)
                }

                function o() {
                    p && (p = !1)
                }

                function l() {
                    p || (p = !0), u()
                }

                function u() {
                    h.seed = 0, h.angle = 0, h.amount = 0, h.seedX = 0, h.seedY = 0, h.distortionX = -1, h.distortionY = -1, e.stop("post", "glitch")
                }
                var c, h, d, p = !0,
                    f = 0,
                    $ = 0;
                return {
                    addGlitch: i,
                    addNoise: r,
                    update: s,
                    start: o,
                    stop: l
                }
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/Preloader", [], function () {
            return ["DisplayObject", "Text", "Math2", "Utils", "$q", "$timeout", "Const", function (e, t, n, i, r, s, a) {
                function o(e) {
                    var t = e.type,
                        n = e.scope;
                    return t == a.LoaderTypes.POLY ? new l(n) : t == a.LoaderTypes.LINE ? new u(n) : void 0;
                }

                function l(t) {
                    e.call(this)
                }

                function u(t) {
                    e.call(this), this.scope = t
                }
                return o.prototype.constructor = o, o.prototype = _.extend(Object.create(e.prototype), {
                    resize: function (e) {
                        this.$el.x = e.x, this.$el.y = e.y
                    },
                    destroy: function () {
                        e.prototype.destroy.call(this)
                    }
                }), l.prototype.constructor = l, l.prototype = _.extend(Object.create(o.prototype), {
                    render: function () {
                        var e, r, a = (i.getDpr(), this.colors),
                            o = 7;
                        this.$base = new PIXI.Graphics, this.$loaderShape = new PIXI.Sprite, this.$loaderShape.$points = new PIXI.Sprite, this.$loaderShape.$vectors = new PIXI.Graphics, this.$loaderShape.rotation = -1.0472, this.$loadedShape = new PIXI.Sprite, this.$loadedShape.$points = new PIXI.Sprite, this.$loadedShape.$vectors = new PIXI.Graphics, this.$loadedShape.rotation = -1.0472, this.$loadedShape.alpha = 0, this.$text = new t("00%", {
                            fontFamily: "din-condensed-web",
                            fontSize: 21,
                            fill: a.red,
                            letterSpacing: 0
                        }), this.$text.$el.x = -this.$text.width / 2 + 5, this.$text.$el.y = -this.$text.height / 2, this.$text.wave = {
                            amplitude: {
                                x: n.randFloat(4, 5),
                                y: n.randFloat(4, 5)
                            },
                            period: {
                                x: n.randFloat(40, 80),
                                y: n.randFloat(50, 70)
                            }
                        }, this.$mask = new PIXI.Graphics, this.$mask.moveTo(0, 0), this.$mask.beginFill(a.black), this.$mask.arc(0, 0, 95, 0, 2 * Math.PI * 0), this.$mask.rotation = Math.random(), this.$loadedShape.mask = this.$mask, this.$loaderShape.addChild(this.$loaderShape.$points), this.$loaderShape.addChild(this.$loaderShape.$vectors), this.$loadedShape.addChild(this.$loadedShape.$points), this.$loadedShape.addChild(this.$loadedShape.$vectors), this.$el.addChild(this.$base), this.$el.addChild(this.$text.$el), this.$el.addChild(this.$loaderShape), this.$el.addChild(this.$loadedShape), this.$el.addChild(this.$mask);
                        for (var l = o; l > 0; --l) e = new PIXI.Graphics, e.beginFill(a.white), e.drawCircle(0, 0, 2), r = new PIXI.Graphics, r.beginFill(a.red), r.drawCircle(0, 0, 2), e.wave = r.wave = {
                            amplitude: {
                                x: n.randFloat(7, 9),
                                y: n.randFloat(7, 9)
                            },
                            period: {
                                x: n.randFloat(40, 80),
                                y: n.randFloat(50, 70)
                            }
                        }, e.r = 0, r.r = 0, this.$loaderShape.$points.addChild(e), this.$loadedShape.$points.addChild(r);
                        return this.tweener = {
                            perc: 0,
                            r: 0
                        }, this.$el.alpha = 0, this.angle = 0, s(_.bind(this.startLoop, this), 300), this
                    },
                    startLoop: function () {
                        var e = [],
                            t = [],
                            i = 2 * Math.PI / this.$loaderShape.$points.children.length;
                        _.each(this.$loaderShape.$points.children, function (t, n) {
                            e.push(TweenMax.fromTo(t, .75, {
                                r: 180
                            }, {
                                r: 80,
                                ease: Cubic.easeInOut
                            }))
                        }, this), _.each(this.$loadedShape.$points.children, function (e, n) {
                            t.push(TweenMax.fromTo(e, .75, {
                                r: 180
                            }, {
                                r: 80,
                                ease: Cubic.easeInOut
                            }))
                        }, this), this.loop = TweenMax.to({
                            value: 0
                        }, 1, {
                            value: 1,
                            repeat: -1,
                            yoyo: !0,
                            ease: Linear.easeNone,
                            onUpdate: _.bind(function () {
                                _.each(this.$loaderShape.$points.children, function (e, t) {
                                    e.x = n.swing(e.wave.amplitude, e.wave.period, this.angle, e.r * Math.cos(i * t)).x, e.y = n.swing(e.wave.amplitude, e.wave.period, this.angle, e.r * Math.sin(i * t)).y
                                }, this), _.each(this.$loadedShape.$points.children, function (e, t) {
                                    e.x = n.swing(e.wave.amplitude, e.wave.period, this.angle, e.r * Math.cos(i * t)).x, e.y = n.swing(e.wave.amplitude, e.wave.period, this.angle, e.r * Math.sin(i * t)).y
                                }, this), this.$text.$el.x = -this.$text.width / 2 + n.swing(this.$text.wave.amplitude, this.$text.wave.period, this.angle, 0).x + 5, this.$text.$el.y = -this.$text.height / 2 + n.swing(this.$text.wave.amplitude, this.$text.wave.period, this.angle, 0).y, this.angle += .5, this.drawLines()
                            }, this)
                        }), new TimelineMax({
                            tweens: [new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: e,
                                    stagger: .035
                                }), new TimelineMax({
                                    tweens: t,
                                    stagger: .035
                                })]
                            }), TweenMax.to(this.$el, .8, {
                                alpha: 1,
                                ease: Cubic.easeInOut
                            })],
                            stagger: .05,
                            onUpdate: _.bind(this.drawLines, this)
                        })
                    },
                    drawLines: function () {
                        this.$loaderShape.$vectors.clear(), this.$loaderShape.$vectors.lineStyle(2, this.colors.white, .3), _.each(this.$loaderShape.$points.children, function (e, t) {
                            var n = this.$loaderShape.$points.children[t],
                                i = this.$loaderShape.$points.children[t + 1] || this.$loaderShape.$points.children[0];
                            this.$loaderShape.$vectors.moveTo(n.x, n.y), this.$loaderShape.$vectors.lineTo(i.x, i.y)
                        }, this), this.$loadedShape.$vectors.clear(), this.$loadedShape.$vectors.lineStyle(2, this.colors.red, 1), _.each(this.$loadedShape.$points.children, function (e, t) {
                            var n = this.$loadedShape.$points.children[t],
                                i = this.$loadedShape.$points.children[t + 1] || this.$loadedShape.$points.children[0];
                            this.$loadedShape.$vectors.moveTo(n.x, n.y), this.$loadedShape.$vectors.lineTo(i.x, i.y)
                        }, this)
                    },
                    progress: function (e, t) {
                        var i;
                        TweenMax.to(this.tweener, 2, {
                            perc: e,
                            ease: Linear.easeNone,
                            onUpdate: _.bind(function () {
                                i = Math.round(100 * this.tweener.perc), 10 > i && (i = "0" + i), i += "%", this.$text.text(i), this.$text.$el.x = -this.$text.width / 2 + n.swing(this.$text.wave.amplitude, this.$text.wave.period, this.angle, 0).x + 5, this.$mask.clear(), this.$mask.moveTo(0, 0), this.$mask.beginFill(this.colors.black, .25), this.$mask.arc(0, 0, 95, 0, 2 * Math.PI * this.tweener.perc), this.$loadedShape.alpha = 1
                            }, this)
                        })
                    },
                    hide: function () {
                        var e = r.defer();
                        return new TimelineMax({
                            tweens: [TweenMax.allTo(this.$loaderShape.$points.children, .8, {
                                r: 0,
                                ease: Expo.easeInOut
                            }, .01), TweenMax.allTo(this.$loadedShape.$points.children, .8, {
                                r: 0,
                                ease: Expo.easeInOut
                            }, .01), TweenMax.to(this.$loaderShape, .9, {
                                alpha: 0,
                                ease: Expo.easeInOut
                            }), TweenMax.to(this.$loadedShape, .9, {
                                alpha: 0,
                                ease: Expo.easeInOut
                            }), TweenMax.to(this.$text.$el, .9, {
                                alpha: 0,
                                ease: Expo.easeInOut
                            })],
                            onUpdate: _.bind(this.drawLines, this),
                            onComplete: _.bind(function () {
                                e.resolve(), this.destroy()
                            }, this)
                        }), e.promise
                    },
                    resize: function (e) {
                        var t = this.colors;
                        this.$base.clear(), this.$base.beginFill(t.grey), this.$base.drawRect(-e.x, -e.y, e.w, e.h), o.prototype.resize.call(this, e)
                    },
                    destroy: function () {
                        this.loop && this.loop.kill(), this.$base.destroy(), this.$text.destroy(), this.$loaderShape.destroy(!0), this.$loadedShape.destroy(!0), this.$mask.destroy(), this.$base = null, this.$text.$el = null, this.$loaderShape = null, this.$loadedShape = null, this.$mask = null, o.prototype.destroy.call(this)
                    }
                }), u.prototype.constructor = u, u.prototype = _.extend(Object.create(o.prototype), {
                    render: function () {
                        return this.$dashline = new PIXI.Graphics, this.$dashMask = new PIXI.Graphics, this.$loadedLine = new PIXI.Graphics, this.$loadedLine.scale.y = 0, this.$dashline.mask = this.$dashMask, this.$dashMask.scale.y = 0, this.$el.addChild(this.$dashline), this.$el.addChild(this.$dashMask), this.$el.addChild(this.$loadedLine), this.checkForHelperLine(), this
                    },
                    checkForHelperLine: function () {
                        var e = this.scope.currstate,
                            t = window.innerWidth < 768 || 0 == e.from.name.length || e.from.name == a.PagesTypes.MENU;
                        t && TweenMax.to(this.$dashMask.scale, 1.5, {
                            y: 1,
                            ease: Expo.easeOut
                        })
                    },
                    progress: function (e) {
                        TweenMax.to(this.$loadedLine.scale, 2, {
                            y: e,
                            ease: Linear.easeNone
                        })
                    },
                    hide: function () {
                        var e = r.defer();
                        return new TimelineMax({
                            tweens: [TweenMax.to(this.$loadedLine.scale, 1, {
                                y: 0,
                                ease: Expo.easeInOut
                            }), TweenMax.to(this.$dashMask.scale, 1, {
                                y: 0,
                                ease: Expo.easeInOut
                            })],
                            onComplete: _.bind(function () {
                                this.showHelperLine = !1, e.resolve(), this.destroy()
                            }, this)
                        }), e.promise
                    },
                    resize: function (e) {
                        var t = this.colors,
                            n = (i.isPhone(), this.scope.currstate),
                            r = e.w < 768 || 0 == n.from.name.length || n.from.name == a.PagesTypes.MENU ? 0 : e.x / 2;
                        this.$dashline.clear(), this.$dashline.beginFill(t.white, .4);
                        for (var s = 0; s < Math.round(e.h / 5); ++s) this.$dashline.drawRect(0, -e.y + Math.floor(5 * s), Math.floor(1), Math.floor(1));
                        this.$dashMask.clear(), this.$dashMask.beginFill(t.black, 1), this.$dashMask.drawRect(-4, 0, 10, -e.h), this.$dashMask.y = e.y, this.$loadedLine.clear(), this.$loadedLine.beginFill(t.green), this.$loadedLine.drawRect(r, 0, 1, -e.h), this.$loadedLine.y = e.y, o.prototype.resize.call(this, e)
                    },
                    destroy: function () {
                        this.$loadedLine.destroy(), this.$loadedLine = null, o.prototype.destroy.call(this)
                    }
                }), o
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/UIfactory", [], function () {
            return ["Text", "Hamb", "Bread", "Scroller", "Numnav", "Back", "Mouse", "Utils", function (e, t, n, i, r, s, a, o) {
                function l(e) {
                    var l = o.getColors();
                    return {
                        getHamb: function () {
                            return new t
                        },
                        getBread: function () {
                            return new n("", {
                                fontFamily: "din-condensed-web",
                                fontSize: 17,
                                fill: l.red,
                                letterSpacing: .25
                            })
                        },
                        getLogo: function () {
                            var e = new PIXI.Sprite,
                                t = new PIXI.Sprite.fromImage("img/uprsg-logo.png"),
                                n = new PIXI.Graphics;
                            return n.beginFill(l.black, .5), n.drawRect(-5, -10, 192, 50), t.mask = n, e.addChild(t), e.addChild(n), e.scale.x = .5, e.scale.y = .5, e
                        },
                        getShare: function () {
                            var e = new PIXI.Sprite,
                                t = new PIXI.Graphics,
                                n = new PIXI.Sprite.fromImage("img/share-icon.png"),
                                i = new PIXI.Graphics,
                                r = new PIXI.Sprite,
                                s = new PIXI.Graphics,
                                a = new PIXI.Sprite,
                                o = new PIXI.Text("F", {
                                    fontFamily: "montser-reg",
                                    fontSize: 8,
                                    fill: l.white
                                }),
                                u = new PIXI.Text("T", {
                                    fontFamily: "montser-reg",
                                    fontSize: 8,
                                    fill: l.white
                                });
                            return t.beginFill(l.white), t.drawRect(0, 0, -50, 2), t.x = 50, n.scale.x = .5, n.scale.y = .5, n.y = -25, n.x = 0, i.beginFill(l.white, 0), i.drawRect(-6, -4, 18, 18), r.addChild(i), r.addChild(o), r.interactive = !0, r.buttonMode = !0, r.x = 25, r.y = -25, s.beginFill(l.white, 0), s.drawRect(-6, -4, 18, 18), a.addChild(s), a.addChild(u), a.interactive = !0, a.buttonMode = !0, a.x = 45, a.y = -25, e.addChild(t), e.addChild(n), e.addChild(r), e.addChild(a), r.mouseover = _.bind(function () {
                                TweenMax.to(r, 1, {
                                    alpha: .2,
                                    ease: Expo.easeOut
                                })
                            }, this), r.mouseout = _.bind(function () {
                                TweenMax.to(r, 1, {
                                    alpha: 1,
                                    ease: Expo.easeOut
                                })
                            }, this), a.mouseover = _.bind(function () {
                                TweenMax.to(a, 1, {
                                    alpha: .2,
                                    ease: Expo.easeOut
                                })
                            }, this), a.mouseout = _.bind(function () {
                                TweenMax.to(a, 1, {
                                    alpha: 1,
                                    ease: Expo.easeOut
                                })
                            }, this), e
                        },
                        getAudio: function () {
                            var e = !1,
                                t = new PIXI.Sprite,
                                n = new PIXI.Graphics,
                                i = new PIXI.Sprite.fromImage("img/audio-icon.png");
                            return i.scale.x = .5, i.scale.y = .5, n.beginFill(l.red, 1), n.drawRect(-10, -1, 20, 2), n.rotation = -Math.PI / 4, n.scale.x = 0, n.x = 10, n.y = 10, t.addChild(i), t.addChild(n), t.interactive = !0, t.buttonMode = !0, t.mouseover = _.bind(function () {
                                TweenMax.to(t, 1, {
                                    alpha: .2,
                                    ease: Expo.easeOut
                                })
                            }, this), t.mouseout = _.bind(function () {
                                TweenMax.to(t, 1, {
                                    alpha: 1,
                                    ease: Expo.easeOut
                                })
                            }, this), t.toggleMute = function () {
                                e = !e, TweenMax.to(n.scale, .5, {
                                    x: e ? 1 : 0,
                                    ease: Expo.easeOut
                                })
                            }, t
                        },
                        getFooter: function () {
                            var e = new PIXI.Sprite,
                                t = new PIXI.Sprite,
                                n = "Cookie Policy",
                                i = " . VAT 02651970549",
                                r = new PIXI.Text(n.toUpperCase(), {
                                    fontFamily: "montser-reg",
                                    fontSize: 8,
                                    fill: l.white,
                                    letterSpacing: 1.25
                                }),
                                s = new PIXI.Text(i.toUpperCase(), {
                                    fontFamily: "montser-reg",
                                    fontSize: 8,
                                    fill: 10066329,
                                    letterSpacing: 1.25
                                }),
                                a = new PIXI.Graphics,
                                o = new PIXI.Graphics,
                                u = new PIXI.Graphics,
                                c = new PIXI.Graphics;
                            s.x = r.width, o.beginFill(l.white), o.drawRect(-20, 4, -30, 1), u.beginFill(l.white), u.drawRect(-20, 5, -25, 1);
                            var h = r.width + s.width;
                            return c.beginFill(l.white, .5), c.drawRect(0, 0, -h - 60, s.height), c.x = h + 5, a.beginFill(l.white, 0), a.drawRect(-5, -5, r.width + 10, r.height + 10), a.interactive = !0, a.buttonMode = !0, t.addChild(c), t.addChild(o), t.addChild(u), t.addChild(s), t.addChild(r), t.addChild(r), e.addChild(t), e.addChild(a), a.mouseover = _.bind(function () {
                                TweenMax.to(r, 1, {
                                    alpha: .5,
                                    ease: Expo.easeOut
                                })
                            }, this), a.mouseout = _.bind(function () {
                                TweenMax.to(r, 1, {
                                    alpha: 1,
                                    ease: Expo.easeOut
                                })
                            }, this), e.cookie = a, t.mask = c, e
                        },
                        getQuadNav: function () {
                            var t, n, i, r, s, a = new PIXI.Sprite,
                                o = new PIXI.Sprite;
                            return _.each(e.sections, function (e, a) {
                                t = new PIXI.Sprite, t.interactive = !0, t.buttonMode = !0, n = new PIXI.Graphics, i = new PIXI.Graphics, r = new PIXI.Graphics, s = new PIXI.Graphics, n.beginFill(l.white, 0), n.drawRect(-10, -10, 20, 20), i.beginFill(l.white, 0), i.lineStyle(2, l.white), i.drawRect(-3, -3, 6, 6), r.beginFill(l.green, 0), r.lineStyle(2, l.green), r.drawRect(-3, -3, 6, 6), i.rotation = .785398, r.rotation = .785398, r.alpha = 0 == a ? 1 : 0, t.x = Math.round(23 * a), t.addChild(n), t.addChild(i), t.addChild(r), o.addChild(t)
                            }, this), a.addChild(o), a.$child = o, a
                        },
                        getScroller: function () {
                            var e = new PIXI.Sprite,
                                t = new i;
                            return e.addChild(t.render().$el), e.$child = t, e.alpha = 0, e
                        },
                        getNumnav: function () {
                            var e = new PIXI.Sprite,
                                t = new r;
                            return e.addChild(t.render().$el), e.$child = t, e.$child.$el.x = 80, e
                        },
                        getBack: function () {
                            var e = new PIXI.Sprite,
                                t = new s;
                            return e.addChild(t.render().$el), e.$child = t, e
                        },
                        getMouse: function () {
                            var e = new PIXI.Sprite,
                                t = new a;
                            return e.addChild(t.render().$el), e.$child = t, e.$child.$el.y = 60, e
                        }
                    }
                }
                return l
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/factories/SiteUI", [], function () {
            return ["DisplayObject", "UIfactory", "Events", "Math2", "Utils", "Const", "$timeout", function (e, t, n, i, r, s, a) {
                function o(t) {
                    e.call(this), this.intro = !0, this.menuopen = !1, this.scope = t, this.collections = {
                        sections: this.scope.data.sections.collection,
                        projects: this.scope.data.projects.collection
                    }
                }
                return o.prototype.constructor = o, o.prototype = _.extend(Object.create(e.prototype), {
                    render: function () {
                        return e.prototype.render.call(this), this.factory = new t(this.collections), this.$hamb = this.factory.getHamb(), this.$bread = this.factory.getBread(), this.$logo = this.factory.getLogo(), this.$share = this.factory.getShare(), this.$audio = this.factory.getAudio(), this.$foo = this.factory.getFooter(), this.$nav = this.factory.getQuadNav(), this.$scroller = this.factory.getScroller(), this.$numnav = this.factory.getNumnav(), this.$back = this.factory.getBack(), this.$mouse = this.factory.getMouse(), this.$el.addChild(this.$hamb.render().$el), this.$el.addChild(this.$bread.render().$el), this.$el.addChild(this.$logo), this.$el.addChild(this.$share), this.$el.addChild(this.$audio), this.$el.addChild(this.$foo), this.$el.addChild(this.$nav), this.$el.addChild(this.$scroller), this.$el.addChild(this.$numnav), this.$el.addChild(this.$back), this.$el.addChild(this.$mouse), this.$el.alpha = 0, this.addEvents(), this
                    },
                    addEvents: function () {
                        this.$hamb.$el.click = this.$hamb.$el.tap = _.bind(function (e) {
                            this.scope.$emit(n.OPEN_MENU)
                        }, this), _.each(this.$nav.$child.children, function (e, t) {
                            e.click = e.tap = _.bind(function (e) {
                                var t = this.collections.sections[_.indexOf(this.$nav.$child.children, e.target)];
                                this.scope.$emit(n.CHANGE_STATE, t)
                            }, this)
                        }, this), this.$back.$child.$el.click = this.$back.$child.$el.tap = _.bind(function (e) {
                            this.scope.$emit(n.BACK)
                        }, this), this.$numnav.$child.$prev.click = this.$numnav.$child.$prev.tap = _.bind(function () {
                            this.scope.direction = {
                                value: -1,
                                type: s.DirsTipes.HORIZ
                            }, this.scope.$apply()
                        }, this), this.$numnav.$child.$next.click = this.$numnav.$child.$next.tap = _.bind(function () {
                            this.scope.direction = {
                                value: 1,
                                type: s.DirsTipes.HORIZ
                            }, this.scope.$apply()
                        }, this);
                        var e = this.$share.getChildAt(2),
                            t = this.$share.getChildAt(3);
                        e.click = e.tap = _.bind(function () {
                            this.scope.$emit(n.SHARE_SITE, "fb")
                        }, this), t.click = t.tap = _.bind(function () {
                            this.scope.$emit(n.SHARE_SITE, "tw")
                        }, this), this.$audio.click = this.$audio.tap = _.bind(function () {
                            this.scope.$emit(n.TOGGLE_SOUNDS), this.$audio.toggleMute()
                        }, this), this.$foo.cookie.click = this.$foo.cookie.tap = _.bind(function (e) {
                            this.scope.$emit(n.OPEN_COOKIE)
                        }, this)
                    },
                    setState: function (e) {
                        var t = e.to.data.type;
                        t == s.PagesTypes.MENU && this.setMenuState(e), t == s.PagesTypes.INDEX ? this.setIndexState(e) : t == s.PagesTypes.WALL ? this.setWallState(e) : t == s.PagesTypes.LEAF ? this.setLeafState(e) : t == s.PagesTypes.INFOS ? this.setInfosState(e) : t == s.PagesTypes.CLEAF && this.setCLeafState(e)
                    },
                    setMenuState: function (e) {
                        var t = [];
                        return this.menuopen = !0, this.$bread.update(""), t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                            x: 0,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                            y: 60,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                            x: 80,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$scroller, .75, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$nav.$child, .75, {
                            y: 40,
                            ease: Expo.easeInOut
                        })), t.push(this.$back.$child.setState(1)), new TimelineMax({
                            tweens: t
                        })
                    },
                    setIndexState: function (e) {
                        var t = [],
                            n = _.indexOf(this.collections.sections, e.model);
                        return this.$scroller.$child.update(n), this.$bread.update(e.model.bread.toUpperCase()), _.each(this.$nav.$child.children, function (e, t) {
                            TweenMax.to(e.children[2], .5, {
                                alpha: t == n ? 1 : 0,
                                ease: Expo.easeInOut
                            }), TweenMax.to(e, .5, {
                                rotation: t == n ? "+=" + Math.PI / 2 : 0,
                                ease: Expo.easeInOut
                            })
                        }), t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                            x: 1,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                            y: 60,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                            x: 80,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$scroller, .75, {
                            alpha: 1,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$nav.$child, .75, {
                            y: 0,
                            ease: Expo.easeInOut
                        })), t.push(this.$back.$child.setState(0)), new TimelineMax({
                            tweens: t
                        })
                    },
                    setWallState: function (e) {
                        var t = [];
                        return this.$bread.update(e.to.data.parent.toUpperCase()), t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                            x: 1,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                            y: 0,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                            x: 80,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$scroller, .75, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$nav.$child, .75, {
                            y: 40,
                            ease: Expo.easeInOut
                        })), t.push(this.$back.$child.setState(1)), new TimelineMax({
                            tweens: t
                        })
                    },
                    setLeafState: function (e) {
                        var t = this.collections.projects.length,
                            n = this.getIndexFromState(e) + 1,
                            i = this.scope.currstate.params.to.dir || 1,
                            s = [];
                        return this.$numnav.$child.update(n, t, i), this.$bread.update(e.to.data.parent.toUpperCase()), s.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                            x: 1,
                            ease: Expo.easeInOut
                        })), s.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                            y: 60,
                            ease: Expo.easeInOut
                        })), s.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                            x: 0,
                            ease: Expo.easeInOut
                        })), s.push(TweenMax.to(this.$scroller, .75, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        })), s.push(TweenMax.to(this.$nav.$child, .75, {
                            y: 40,
                            ease: Expo.easeInOut
                        })), r.isPhone() ? s.push(this.$back.$child.setState(1)) : s.push(this.$back.$child.setState(2)), new TimelineMax({
                            tweens: s
                        })
                    },
                    setInfosState: function (e) {
                        var t = [],
                            n = "clients" == e.params.to.page ? 60 : 0;
                        return this.$bread.update(e.to.data.parent.toUpperCase()), t.push(TweenMax.to(this.$back.$child.$el, .75, {
                            y: 0,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                            x: 1,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                            y: n,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                            x: 80,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$scroller, .75, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$nav.$child, .75, {
                            y: 40,
                            ease: Expo.easeInOut
                        })), t.push(this.$back.$child.setState(1)), new TimelineMax({
                            tweens: t
                        })
                    },
                    setCLeafState: function (e) {
                        var t = [];
                        return this.$bread.update(e.to.data.parent.toUpperCase()), t.push(TweenMax.to(this.$back.$child.$el, .75, {
                            y: 0,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$hamb.$mask.scale, .75, {
                            x: 1,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$mouse.$child.$el, .75, {
                            y: 60,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$numnav.$child.$el, .75, {
                            x: 80,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$scroller, .75, {
                            alpha: 0,
                            ease: Expo.easeInOut
                        })), t.push(TweenMax.to(this.$nav.$child, .75, {
                            y: 40,
                            ease: Expo.easeInOut
                        })), t.push(this.$back.$child.setState(1)), new TimelineMax({
                            tweens: t
                        })
                    },
                    getIndexFromState: function (e) {
                        return _.indexOf(this.collections.projects, _.where(this.collections.projects, {
                            route: e.params.to.leaf
                        })[0])
                    },
                    tweenIn: function () {
                        return this.intro ? new TimelineMax({
                            tweens: [TweenMax.to(this.$el, .125, {
                                alpha: 1,
                                ease: Expo.easeOut
                            }), new TimelineMax({
                                tweens: [new TimelineMax({
                                    tweens: [TweenMax.from(this.$hamb.$topline.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    }), TweenMax.from(this.$hamb.$topline, .45, {
                                        x: 250,
                                        ease: Expo.easeInOut
                                    })]
                                }), new TimelineMax({
                                    tweens: [TweenMax.from(this.$hamb.$botline.scale, .45, {
                                        x: 0,
                                        ease: Expo.easeInOut
                                    })]
                                })],
                                stagger: .1
                            }), this.$bread.tweenIn(), new TimelineMax({
                                tweens: [TweenMax.from(this.$logo.getChildAt(0), .75, {
                                    y: 50,
                                    ease: Expo.easeInOut
                                })]
                            }), new TimelineMax({
                                tweens: [TweenMax.from(this.$share.getChildAt(0).scale, .75, {
                                    x: 0,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(this.$share.getChildAt(3), .75, {
                                    y: 5,
                                    alpha: .25,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(this.$share.getChildAt(2), .75, {
                                    y: 5,
                                    alpha: .25,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(this.$share.getChildAt(1), .75, {
                                    y: 5,
                                    alpha: .25,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .075
                            }), TweenMax.from(this.$share.getChildAt(1), .75, {
                                y: 0,
                                alpha: 0,
                                ease: Expo.easeInOut
                            }), TweenMax.from(this.$audio.getChildAt(0), .75, {
                                y: 50,
                                alpha: .25,
                                ease: Expo.easeInOut
                            }), TweenMax.from(this.$foo.getChildAt(0).getChildAt(0).scale, .9, {
                                x: 0,
                                ease: Expo.easeInOut
                            }), this.$scroller.$child.tweenIn(), new TimelineMax({
                                tweens: [TweenMax.from(this.$nav.$child.getChildAt(0), .75, {
                                    y: 40,
                                    rotation: 1 * -Math.PI,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(this.$nav.$child.getChildAt(1), .75, {
                                    y: 40,
                                    rotation: 1 * -Math.PI,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(this.$nav.$child.getChildAt(2), .75, {
                                    y: 40,
                                    rotation: 1 * -Math.PI,
                                    ease: Expo.easeInOut
                                }), TweenMax.from(this.$nav.$child.getChildAt(3), .75, {
                                    y: 40,
                                    rotation: 1 * -Math.PI,
                                    ease: Expo.easeInOut
                                })],
                                stagger: .05
                            })],
                            stagger: .15,
                            onStart: _.bind(function () {
                                this.intro = !1
                            }, this)
                        }) : new TimelineMax({
                            tweens: []
                        })
                    },
                    resize: function (e) {
                        var t = this.scope.currstate;
                        this.deafultResize(e, t), e.w < 768 && this.phoneResize(e, t)
                    },
                    deafultResize: function (e, t) {
                        var n = 50,
                            i = 20;
                        this.$hamb.$el.x = 0, this.$hamb.$el.y = i, this.$bread.$el.x = Math.round(n + 100), this.$bread.$el.y = Math.round(i + 1), this.$logo.x = Math.round(e.w - 86 - n), this.$logo.y = Math.round(i + 2), this.$share.x = Math.round(e.w - 50 - n), this.$share.y = Math.round(e.h - 2), this.$audio.x = Math.round(e.w - 160), this.$audio.y = Math.round(e.h - 32), this.$foo.x = Math.round(e.w - 378), this.$foo.y = Math.round(e.h - 7 - i), this.$nav.x = Math.round(e.x - 35), this.$nav.y = Math.round(e.h - 4 - i), this.$scroller.$child.resize(e), this.$numnav.x = Math.round(e.w - 55), this.$numnav.y = Math.round(e.y), this.$mouse.x = n + 9, this.$mouse.y = Math.round(e.h - 40), this.$back.x = Math.round(e.x - 28), this.$back.y = 0, this.$scroller.visible = !0, this.$mouse.visible = !0, this.$share.visible = !0, this.$foo.visible = !0
                    },
                    phoneResize: function (e, t) {
                        var n = 25;
                        this.$hamb.$el.x = -n, this.$logo.x += n, this.$numnav.x += n, this.$bread.$el.x -= 2 * n, this.$scroller.visible = !1, this.$mouse.visible = !1, this.$share.visible = !1, this.$foo.visible = !1
                    }
                }), o
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("app/directives/AppStage", [], function () {
            return [function () {
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
                            t.preventDefault(), e.$emit("swipe", t)
                        }), e.setupCanvas(r)
                    }
                }
            }]
        })
    }(define), define("text", ["module"], function (e) {
        "use strict";
        var t, n, i, r, s, a = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
            o = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
            l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
            u = "undefined" != typeof location && location.href,
            c = u && location.protocol && location.protocol.replace(/\:/, ""),
            h = u && location.hostname,
            d = u && (location.port || void 0),
            p = {},
            f = e.config && e.config() || {};
        return t = {
            version: "2.0.12",
            strip: function (e) {
                if (e) {
                    e = e.replace(o, "");
                    var t = e.match(l);
                    t && (e = t[1])
                } else e = "";
                return e
            },
            jsEscape: function (e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
            },
            createXhr: f.createXhr || function () {
                var e, t, n;
                if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                if ("undefined" != typeof ActiveXObject)
                    for (t = 0; 3 > t; t += 1) {
                        n = a[t];
                        try {
                            e = new ActiveXObject(n)
                        } catch (i) {}
                        if (e) {
                            a = [n];
                            break
                        }
                    }
                return e
            },
            parseName: function (e) {
                var t, n, i, r = !1,
                    s = e.indexOf("."),
                    a = 0 === e.indexOf("./") || 0 === e.indexOf("../");
                return -1 !== s && (!a || s > 1) ? (t = e.substring(0, s), n = e.substring(s + 1, e.length)) : t = e, i = n || t, s = i.indexOf("!"), -1 !== s && (r = "strip" === i.substring(s + 1), i = i.substring(0, s), n ? n = i : t = i), {
                    moduleName: t,
                    ext: n,
                    strip: r
                }
            },
            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
            useXhr: function (e, n, i, r) {
                var s, a, o, l = t.xdRegExp.exec(e);
                return l ? (s = l[2], a = l[3], a = a.split(":"), o = a[1], a = a[0], !(s && s !== n || a && a.toLowerCase() !== i.toLowerCase() || (o || a) && o !== r)) : !0
            },
            finishLoad: function (e, n, i, r) {
                i = n ? t.strip(i) : i, f.isBuild && (p[e] = i), r(i)
            },
            load: function (e, n, i, r) {
                if (r && r.isBuild && !r.inlineText) return void i();
                f.isBuild = r && r.isBuild;
                var s = t.parseName(e),
                    a = s.moduleName + (s.ext ? "." + s.ext : ""),
                    o = n.toUrl(a),
                    l = f.useXhr || t.useXhr;
                return 0 === o.indexOf("empty:") ? void i() : void(!u || l(o, c, h, d) ? t.get(o, function (n) {
                    t.finishLoad(e, s.strip, n, i)
                }, function (e) {
                    i.error && i.error(e)
                }) : n([a], function (e) {
                    t.finishLoad(s.moduleName + "." + s.ext, s.strip, e, i)
                }))
            },
            write: function (e, n, i, r) {
                if (p.hasOwnProperty(n)) {
                    var s = t.jsEscape(p[n]);
                    i.asModule(e + "!" + n, "define(function () { return '" + s + "';});\n")
                }
            },
            writeFile: function (e, n, i, r, s) {
                var a = t.parseName(n),
                    o = a.ext ? "." + a.ext : "",
                    l = a.moduleName + o,
                    u = i.toUrl(a.moduleName + o) + ".js";
                t.load(l, i, function (n) {
                    var i = function (e) {
                        return r(u, e)
                    };
                    i.asModule = function (e, t) {
                        return r.asModule(e, u, t)
                    }, t.write(e, l, i, s)
                }, s)
            }
        }, "node" === f.env || !f.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (n = require.nodeRequire("fs"), t.get = function (e, t, i) {
            try {
                var r = n.readFileSync(e, "utf8");
                0 === r.indexOf("\ufeff") && (r = r.substring(1)), t(r)
            } catch (s) {
                i && i(s)
            }
        }) : "xhr" === f.env || !f.env && t.createXhr() ? t.get = function (e, n, i, r) {
            var s, a = t.createXhr();
            if (a.open("GET", e, !0), r)
                for (s in r) r.hasOwnProperty(s) && a.setRequestHeader(s.toLowerCase(), r[s]);
            f.onXhr && f.onXhr(a, e), a.onreadystatechange = function (t) {
                var r, s;
                4 === a.readyState && (r = a.status || 0, r > 399 && 600 > r ? (s = new Error(e + " HTTP status: " + r), s.xhr = a, i && i(s)) : n(a.responseText), f.onXhrComplete && f.onXhrComplete(a, e))
            }, a.send(null)
        } : "rhino" === f.env || !f.env && "undefined" != typeof Packages && "undefined" != typeof java ? t.get = function (e, t) {
            var n, i, r = "utf-8",
                s = new java.io.File(e),
                a = java.lang.System.getProperty("line.separator"),
                o = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s), r)),
                l = "";
            try {
                for (n = new java.lang.StringBuffer, i = o.readLine(), i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)), null !== i && n.append(i); null !== (i = o.readLine());) n.append(a), n.append(i);
                l = String(n.toString())
            } finally {
                o.close()
            }
            t(l)
        } : ("xpconnect" === f.env || !f.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (i = Components.classes, r = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), s = "@mozilla.org/windows-registry-key;1" in i, t.get = function (e, t) {
            var n, a, o, l = {};
            s && (e = e.replace(/\//g, "\\")), o = new FileUtils.File(e);
            try {
                n = i["@mozilla.org/network/file-input-stream;1"].createInstance(r.nsIFileInputStream), n.init(o, 1, 0, !1), a = i["@mozilla.org/intl/converter-input-stream;1"].createInstance(r.nsIConverterInputStream), a.init(n, "utf-8", n.available(), r.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), a.readString(n.available(), l), a.close(), n.close(), t(l.value)
            } catch (u) {
                throw new Error((o && o.path || "") + ": " + u)
            }
        }), t
    }), define("text!templates/debugger.html", [], function () {
        return '<div id="debugger">\r\n	<div class="param"><span class="label montser-reg">Frame Rate:</span><span class="value montser-bold">{{memory.frameRate}} Fps</span></div>\r\n	<div class="param"><span class="label montser-reg">Children + Cache:</span><span class="value montser-bold">{{memory.childrenAndCache}}</span></div>\r\n	<div class="param"><span class="label montser-reg">Performance:</span><span class="value montser-bold" style="color: {{memory.performanceColor}};">{{memory.performance}}</span></div>\r\n	<div class="param"><span class="label montser-reg">Memory Use:</span><span class="value montser-bold" style="color: {{memory.memoryColor}};">{{memory.memoryUse}}</span></div>\r\n</div>'
    }),
    function (e) {
        "use strict";
        e("app/directives/Debugger", ["text!templates/debugger.html"], function (e) {
            return [function () {
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
                    template: e,
                    replace: !0,
                    link: function (e, t, n, i) {}
                }
            }]
        })
    }(define),
    function (e) {
        "use strict";
        e("application", ["angular", "uirouter", "nganimate", "app/router", "app/services/Const", "app/services/Math2", "app/services/Utils", "app/services/Events", "app/services/Sharer", "app/services/Delaunay", "app/services/Textures", "app/services/DataLoader", "app/services/Performance", "app/services/ThreeManager", "app/services/SoundManager", "app/services/AssetsLoader", "app/controllers/AppController", "app/controllers/CanvasController", "app/controllers/SectionsController", "app/controllers/ProjectsController", "app/controllers/InfosController", "app/factories/core/DisplayObject", "app/factories/core/ContainerObject", "app/factories/core/SectionObject", "app/factories/core/ThreeObject", "app/factories/sections/Menu", "app/factories/sections/Index", "app/factories/sections/Work", "app/factories/sections/About", "app/factories/sections/Contacts", "app/factories/sections/Wall", "app/factories/sections/Leaf", "app/factories/sections/Infos", "app/factories/sections/CLeaf", "app/factories/sprites/Text", "app/factories/sprites/Arrow", "app/factories/sprites/Poster", "app/factories/sprites/Visual", "app/factories/sprites/Fragment", "app/factories/sprites/Scroller", "app/factories/sprites/Maincta", "app/factories/sprites/Leafcta", "app/factories/sprites/Caption", "app/factories/sprites/Numnav", "app/factories/sprites/Bread", "app/factories/sprites/Copy", "app/factories/sprites/Back", "app/factories/sprites/Hamb", "app/factories/sprites/Mouse", "app/factories/sprites/Specs", "app/factories/sprites/Holdrag", "app/factories/sprites/Menugrid", "app/factories/sprites/Identity", "app/factories/sprites/Benchmark", "app/factories/sprites/Aboutintro", "app/factories/sprites/Clients", "app/factories/three/InfoScene", "app/factories/three/MenuScene", "app/factories/three/ThreeFactory", "app/factories/three/TerrainGeneration", "app/factories/PostProcessing", "app/factories/Preloader", "app/factories/UIfactory", "app/factories/SiteUI", "app/directives/AppStage", "app/directives/Debugger"], function (e, t, n, i, r, s, a, o, l, u, c, h, d, p, f, $, m, g, v, w, y, x, b, T, M, C, E, I, S, O, k, A, P, F, _, j, R, L, D, N, z, U, X, H, V, q, G, B, W, Y, K, Z, J, Q, ee, te, ne, ie, re, se, ae, oe, le, ue, ce, he) {
            function de() {
                pe = e.module(fe, ["ui.router", "ngAnimate"]), pe.service("Math2", s).service("Const", r).service("Utils", a).service("Events", o).service("Sharer", l).service("Delaunay", u).service("Textures", c).service("DataLoader", h).service("Performance", d).service("ThreeManager", p).service("SoundManager", f).service("AssetsLoader", $).controller("AppController", m).controller("CanvasController", g).controller("SectionsController", v).controller("ProjectsController", w).controller("InfosController", y).factory("DisplayObject", x).factory("ContainerObject", b).factory("SectionObject", T).factory("ThreeObject", M).factory("PostProcessing", ae).factory("TerrainGeneration", se).factory("Preloader", oe).factory("Benchmark", Q).factory("InfoScene", ne).factory("MenuScene", ie).factory("ThreeFactory", re).factory("UIfactory", le).factory("SiteUI", ue).factory("Menugrid", Z).factory("Menu", C).factory("Index", E).factory("Work", I).factory("About", S).factory("Contacts", O).factory("Wall", k).factory("Leaf", A).factory("Infos", P).factory("CLeaf", F).factory("Poster", R).factory("Visual", L).factory("Fragment", D).factory("Scroller", N).factory("Maincta", z).factory("Leafcta", U).factory("Identity", J).factory("Aboutintro", ee).factory("Clients", te).factory("Caption", X).factory("Holdrag", K).factory("Numnav", H).factory("Arrow", j).factory("Bread", V).factory("Text", _).factory("Copy", q).factory("Back", G).factory("Hamb", B).factory("Mouse", W).factory("Specs", Y).directive("appStage", ce).directive("debugger", he).config(i), e.element(document).ready(function () {
                    e.bootstrap(document, [fe])
                })
            }
            var pe, fe = "UprsgApp";
            return {
                initialize: de
            }
        })
    }(define), require.config({
        baseUrl: "js",
        urlArgs: "v=" + (new Date).getTime(),
        waitSeconds: 0,
        paths: {
            angular: "../node_modules/angular/angular",
            nganimate: "../node_modules/angular-animate/angular-animate",
            uirouter: "../node_modules/angular-ui-router/release/angular-ui-router",
            underscore: "../node_modules/underscore/underscore",
            text: "../node_modules/requirejs-text/text",
            application: "app/application"
        },
        shim: {
            angular: {
                exports: "angular"
            },
            uirouter: {
                deps: ["angular"]
            },
            nganimate: {
                deps: ["angular", "uirouter"]
            }
        }
    }), require(["application"], function (e) {
        e.initialize()
    }), define("main", function () {});