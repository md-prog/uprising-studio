module.exports = ["DisplayObject", "Utils", function (DisplayObject, Utils) {
    function n(n, i) {
        DisplayObject.call(this);
        this.dpr = Utils.getDpr();
        this.factory = i;
        this.scope = n;
        this.r = 2 * Math.PI;
        this.angle = 0
    }

    n.prototype = {
        render: function () {
            DisplayObject.prototype.render.call(this);
            this.renderer = new THREE.WebGLRenderer({
                antialias: !0,
                alpha: !1
            });
            this.renderer.setPixelRatio(this.dpr);
            this.renderer.setSize(1280, 720);
            this.renderer.shadowMap.enabled = !1;
            this.renderer.autoClear = !0;
            this.camera = new THREE.PerspectiveCamera(70, 1280 / 720, 1, 5e3);
            this.scene = new THREE.Scene;
            return this;
        },
        update: function () {
            this.renderer.render(this.scene, this.camera);
            this.angle += .5
        },
        destroy: function () {
            DisplayObject.prototype.destroy.call(this)
        }
    };
    
    return n
}]