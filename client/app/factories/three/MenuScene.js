const _ = require("underscore")

module.exports = ["ThreeObject", "SoundManager", "Math2", "Events", function (e, t, n, i) {
    function r(t, n) {
        e.call(this, t, n);
        this.diff = 0;
        this.drag = !1;
        this.prevent = !1;
        this.mouse = {
            x: 0,
            y: 0
        };
        this.intersectsCount = 0;
        this.selectIcon;
        this.rotations = {
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

    r.prototype.constructor = r, r.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            this.renderer.domElement.id = "menu";
            this.nullObj = new THREE.Vector3(0, 0, 0);
            this.raycaster = new THREE.Raycaster;
            this.camera.position.x = 0;
            this.camera.position.z = 650;
            this.camera.position.y = -120;
            this.camera.wave = {
                amplitude: {
                    x: 30,
                    y: 120
                },
                period: {
                    x: 300,
                    y: 300
                },
                r: 0
            };
            this.scene.fog = new THREE.FogExp2(1053202, 8e-4);
            this.room = this.factory.getRoomMesh();
            this.room.rotation.y = -1.5708;
            this.room.position.z = 600;
            this.floor = this.factory.getFloorMesh();
            this.floor.rotation.x = -1.5708;
            this.floor.rotation.z = -.78;
            this.floor.position.y = -450;
            this.floor.position.z = -650;
            this.logo = this.factory.getLogoMesh();
            this.logo.rotation.y = -.72;
            this.menuicons = this.factory.getMenuMesh();
            this.menuicons.rotation.y = -.52;
            this.payoffs = this.factory.getPayoffsMesh();
            this.payoffs.rotation.y = -.52;
            this.particles = this.factory.getParticles({
                radius: {
                    min: 200,
                    max: 1500
                },
                height: {
                    min: -350,
                    max: 1e3
                },
                particles: 300
            });
            this.lights = this.factory.getLights();
            this.scene.add(this.room);
            this.scene.add(this.floor);
            this.scene.add(this.logo);
            this.scene.add(this.payoffs);
            this.scene.add(this.menuicons);
            this.scene.add(this.particles);
            this.scene.add(this.lights.ambient);
            this.scene.add(this.lights.point1.light);
            this.scene.add(this.lights.point2.light);
            return this
        },
        onDown: function (e) {
            this.drag = !0;
            this.rotations.startMouseX = e.clientX - window.innerWidth / 2;
            this.rotations.icons.start = this.rotations.icons.curr;
            this.rotations.parts.start = this.rotations.parts.curr;
            var t = this.getIntersects(e, this.menuicons.children);
            if (t) {
                this.selectIcon = {
                    index: t.index,
                    state: t.state
                };
                ++this.intersectsCount;
            }
            this.prevent = this.intersectsCount > 0 || this.hitBackButton(e);
            this.prevent || (this.scope.$emit(i.HOLD_START), this.toggleZoom(!0))
        },
        onMove: function (e) {
            this.mouse.x = e.clientX - window.innerWidth / 2;
            this.mouse.y = e.clientY - window.innerHeight / 2;
            var t = this.getIntersects(e, this.menuicons.children);
            _.each(this.menuicons.children, function (e) {
                this.tasselizeIcon(e, t.id == e.id)
            }, this);
            var n = Math.abs(this.mouse.x - this.rotations.startMouseX);
            if (this.drag && n > 5) {
                this.rotations.icons.curr = this.rotations.icons.start + .01 * (this.mouse.x - this.rotations.startMouseX);
                this.rotations.parts.curr = this.rotations.icons.curr;
                this.intersectsCount = 0;
                this.prevent = !1;
                this.diff = n
            }
        },
        onUp: function (e) {
            if (this.drag = !1, this.prevent || (this.scope.$emit(i.HOLD_END), this.toggleZoom(!1)), this.intersectsCount > 0) {
                var t = this.scope.data.sections.collection[this.selectIcon.index];
                this.scope.$emit(i.CLICK_MENU, t)
            }
            this.intersectsCount = 0;
            this.prevent = !1
        },
        toggleZoom: function (e) {
            var n = e ? 900 : 650,
                i = e ? 5e-4 : 8e-4;
            e && t.play("menu", "zoom", !0);
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
        tasselizeIcon: function (e, n) {
            var i = e.children[0].children[0],
                r = i.geometry.attributes.position.array;
            if (n && !e.tasselized) {
                e.tasselized = !0;
                TweenMax.killTweensOf(r);
                t.play("menu", "iconshover", !0)
            } else {
                !n && e.tasselized && (
                    e.tasselized = !1,
                    TweenMax.killTweensOf(r),
                    TweenMax.to(r, 1, {
                        endArray: i.data.oVertices,
                        ease: Cubic.easeOut,
                        onUpdate: function () {
                            i.geometry.attributes.position.needsUpdate = !0
                        }
                    })
                )
            }
        },
        getIntersects: function (e, t) {
            var n, i = {
                x: e.clientX / window.innerWidth * 2 - 1,
                y: 2 * -(e.clientY / window.innerHeight) + 1
            };
            this.raycaster.setFromCamera(i, this.camera);
            n = this.raycaster.intersectObjects(t, !0);
            for (var r = 0; r < n.length; ++r) {
                var s = n[r];
                if (s && "menu" == s.object.parent.name)
                    return s.object.parent
            }
            return !1
        },
        hitBackButton: function (e) {
            return this.mouse.x > -28 && this.mouse.x < 28 && e.clientY >= 0 && e.clientY < 56
        },
        update: function () {
            e.prototype.update.call(this);
            this.updateFloor();
            this.updateCamera();
            this.updateIcons();
            this.updateLights();
            this.updateParticles()
        },
        updateCamera: function () {
            var e = this.camera.wave;
            this.camera.position.y += .005 * n.swing(e.amplitude, e.period, this.angle, e.r, 0).y;
            this.camera.position.x += .01 * (this.mouse.x / 10 - this.camera.position.x);
            this.camera.lookAt(this.nullObj)
        },
        updateFloor: function () {
            for (var e, t, i, r, s, a = 0, o = this.floor.children[0].geometry, l = this.floor.children[1].geometry, u = this.floor.segments; u >= 0; --u) {
                for (var c = this.floor.segments; c >= 0; --c) {
                    s = this.floor.waves[a];
                    e = o.vertices[a];
                    t = l.vertices[a];
                    i = s.amplitude;
                    r = s.period;
                    e.x += .005 * n.swing(i, r, this.angle, 0).x;
                    e.y += .005 * n.swing(i, r, this.angle, 0).y;
                    e.z = this.floor.terrain[u][c] + n.swing(i, r, this.angle, 0).z;
                    t.x = e.x;
                    t.y = e.y;
                    t.z = e.z + 25;
                    a++;
                }
            }
            o.verticesNeedUpdate = !0;
            l.verticesNeedUpdate = !0
        },
        updateIcons: function () {
            for (var e, t, i, r, s, a, o, l, u, c = this.drag && !this.prevent ? 250 : 320, h = {
                    x: 0,
                    y: -30,
                    z: 5e3
                }, d = this.menuicons.children, p = 2 * Math.PI / 4, f = d.length, $ = f - 1; $ >= 0; --$) {
                r = d[$];
                s = r.children[0];
                a = s.children[0];
                e = a.geometry;
                t = e.attributes.position.array;
                i = p * $;
                i += -this.rotations.icons.last;
                r.position.x = n.rotate(this.rotations.icons.radius, i).x;
                r.position.z = n.rotate(this.rotations.icons.radius, i).y;
                r.rotation.y = n.atan(h, r.position);
                s.rotation.y += s.angle;
                if (r.tasselized) {
                    for (var m = t.length - 1; m >= 0; --m) {
                        o = a.data.mVertices[3 * m + 0] + n.swing(a.data.wave[3 * m + 0].amplitude, a.data.wave[3 * m + 0].period, this.angle, 0).x;
                        l = a.data.mVertices[3 * m + 1] + n.swing(a.data.wave[3 * m + 0].amplitude, a.data.wave[3 * m + 0].period, this.angle, 0).y;
                        u = a.data.mVertices[3 * m + 2] + n.swing(a.data.wave[3 * m + 0].amplitude, a.data.wave[3 * m + 0].period, this.angle, 0).z;
                        t[3 * m + 0] += .1 * (o - t[3 * m + 0]);
                        t[3 * m + 1] += .1 * (l - t[3 * m + 1]);
                        t[3 * m + 2] += .1 * (u - t[3 * m + 2]);
                    }
                    e.attributes.position.needsUpdate = !0;
                    s.rotation.y -= .75 * s.angle
                }
            }
            this.rotations.icons.last += .1 * (this.rotations.icons.curr - this.rotations.icons.last);
            this.rotations.icons.radius += .1 * (c - this.rotations.icons.radius)
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
            this.lights.point1.light.position.x = i;
            this.lights.point1.light.position.y = o;
            this.lights.point1.light.position.z = r;
            this.lights.point2.light.position.x = s;
            this.lights.point2.light.position.y = l;
            this.lights.point2.light.position.z = a
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