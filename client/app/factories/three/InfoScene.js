const _ = require("underscore")

module.exports = ["ThreeObject", "SoundManager", "Math2", "Events", function (e, t, n, i) {
    function r(t, n) {
        e.call(this, t, n);
        this.diff = 0;
        this.drag = !1;
        this.currface = -1;
        this.prevent = !1;
        this.mouse = {
            x: 0,
            y: 0
        };
        this.pitchs = [255, 195, 133, 91, 0];
        this.rotations = {
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

    r.prototype.constructor = r;
    r.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.renderer.domElement.id = "info";
            this.camera.position.x = 235;
            this.camera.position.z = 570;
            this.camera.position.y = -146;
            this.camera.rotation.x = .174533;
            this.camera.rotation.y = .959931;
            this.camera.rotation.z = 0;
            this.camera.wave = {
                amplitude: {
                    x: 0,
                    y: 40
                },
                period: {
                    x: 300,
                    y: 300
                },
                r: 0
            };
            this.scene.fog = new THREE.FogExp2(1053202, .006);
            this.room = this.factory.getRoomMesh();
            this.room.rotation.x = .174533;
            this.room.rotation.y = -.959931;
            this.faces = this.factory.getTeamMesh();
            this.particles = this.factory.getParticles({
                radius: {
                    min: 400,
                    max: 1e3
                },
                height: {
                    min: -750,
                    max: 750
                },
                particles: 300
            });
            this.lights = this.factory.getLights();
            this.lights.point1.light.position.set(500, -100, 500);
            this.lights.point1.light.target = this.faces;
            this.scene.add(this.room);
            this.scene.add(this.faces);
            this.scene.add(this.particles);
            this.scene.add(this.lights.ambient);
            this.scene.add(this.lights.point1.light);
            var t = this.faces.rotation.x;
            this.rotations.faces.start = t;
            this.rotations.faces.curr = t;
            this.rotations.faces.last = t;
            return this
        },
        onDown: function (e) {
            if (this.isTeamPage()) {
                this.drag = !0;
                this.rotations.startMouseX = e.clientX - window.innerWidth / 2;
                this.rotations.faces.start = this.rotations.faces.curr;
                this.rotations.parts.start = this.rotations.parts.curr;
                this.prevent = this.hitMenuButton(e) || this.hitBackButton(e);
                this.prevent || (this.scope.$emit(i.HOLD_START), this.toggleZoom(!0))
            }
        },
        onMove: function (e) {
            if (this.isTeamPage()) {
                this.mouse.x = e.clientX - window.innerWidth / 2;
                this.mouse.y = e.clientY - window.innerHeight / 2;
                var t = Math.abs(this.mouse.x - this.rotations.startMouseX);
                if (this.drag && t > 5) {
                    TweenMax.killTweensOf(this.faces.rotation);
                    this.rotations.faces.curr = this.rotations.faces.start + (this.mouse.x - this.rotations.startMouseX) * -.01;
                    this.rotations.parts.curr = this.rotations.parts.start + .01 * (this.mouse.x - this.rotations.startMouseX);
                    this.intersectsCount = 0;
                    this.diff = t
                }
            }
        },
        onUp: function (e) {
            if (this.isTeamPage()) {
                this.drag = !1;
                this.intersectsCount = 0;
                this.prevent = !1;
                this.toggleZoom(!1);
                this.scope.$emit(i.HOLD_END);
                this.diff > 5 && this.snapFace()
            }
        },
        toggleZoom: function (e) {
            var n = e ? 500 : 570,
                i = e ? 5e-4 : 8e-4;
            e && t.play("about", "zoom", !0);
            new TimelineMax({
                tweens: [
                    TweenMax.to(this.camera.position, 1.5, {
                        z: n,
                        ease: Expo.easeOut
                    }),
                    TweenMax.to(this.scene.fog, 1.5, {
                        density: i,
                        ease: Expo.easeOut
                    })
                ]
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
            this.currface != o && this.scope.$emit(i.SNAP_TEAM, this.scope.data.infos.team[o]);
            TweenMax.to(this.faces.rotation, 1.5, {
                x: l,
                ease: Quint.easeOut,
                onUpdate: _.bind(function () {
                    this.rotations.faces.curr = this.rotations.faces.last = this.faces.rotation.x
                }, this)
            });
            this.currface = o;
            this.diff = 0
        },
        tweenIn: function () {
            this.currface = 0;
            this.scope.$emit(i.SNAP_TEAM, this.scope.data.infos.team[0]);
            var e = 2 * Math.PI + this.getIncrRotation(this.pitchs[0]);
            return new TimelineMax({
                tweens: [
                    TweenMax.to(this.faces.rotation, 1.5, {
                        x: e,
                        ease: Quint.easeOut
                    }),
                    TweenMax.to(this.rotations.parts, 1.5, {
                        curr: e,
                        ease: Quint.easeOut
                    }),
                    TweenMax.to(this.scene.fog, 1.5, {
                        density: 8e-4,
                        ease: Quint.easeOut
                    })
                ],
                onUpdate: _.bind(function () {
                    this.rotations.faces.curr = this.rotations.faces.last = this.faces.rotation.x
                }, this)
            })
        },
        tweenOut: function () {
            this.currface = -1, this.scope.$emit(i.SNAP_TEAM, null);
            var e = 2 * Math.PI + this.getIncrRotation(299);
            return new TimelineMax({
                tweens: [
                    TweenMax.to(this.faces.rotation, 1.5, {
                        x: e,
                        ease: Quint.easeOut
                    }),
                    TweenMax.to(this.rotations.parts, 1.5, {
                        curr: e,
                        ease: Quint.easeOut
                    }),
                    TweenMax.to(this.scene.fog, 1.5, {
                        density: .006,
                        ease: Quint.easeOut
                    })
                ],
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
        update: function () {
            e.prototype.update.call(this), this.updateCamera();
            this.updateParticles(), this.updateTeamFaces()
        },
        updateCamera: function () {
            var e = this.camera.wave;
            this.camera.position.y += .005 * n.swing(e.amplitude, e.period, this.angle, e.r, 0).y
        },
        updateTeamFaces: function () {
            if (this.faces.rotation.x = this.rotations.faces.last, this.faces.group) {
                for (var e = this.faces.group, t = e.geometry.vertices.length, i = e.waves, r = t - 1; r >= 0; --r) {
                    e.geometry.vertices[r].x += .005 * n.swing(i[r].amplitude, i[r].period, this.angle, 0).x;
                    e.geometry.vertices[r].y += .005 * n.swing(i[r].amplitude, i[r].period, this.angle, 0).y;
                    e.geometry.vertices[r].z += .005 * n.swing(i[r].amplitude, i[r].period, this.angle, 0).z;
                }
                e.geometry.verticesNeedUpdate = !0
            }
            this.rotations.faces.last += .025 * (this.rotations.faces.curr - this.rotations.faces.last)
        },
        updateParticles: function () {
            this.particles.children[0].material.uniforms.angle.value = this.angle;
            this.particles.children[0].material.uniforms.lastRotation.value = this.rotations.parts.last;
            this.rotations.parts.last += .05 * (this.rotations.parts.curr - this.rotations.parts.last)
        },
        clear: function () {
            this.drag = !1
        }
    });
    return r
}]