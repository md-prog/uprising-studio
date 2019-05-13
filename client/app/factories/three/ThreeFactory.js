module.exports = ["TerrainGeneration", "Performance", "Utils", "Math2", function (e, t, n, i) {
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