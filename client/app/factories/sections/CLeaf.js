const _ = require('underscore')

module.exports = ["ContainerObject", "Text", "Utils", function (e, t, n) {
    function i(t, n) {
        e.call(this, t, n);
        this.labels = {
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

    i.prototype.constructor = i;
    i.prototype = _.extend(Object.create(e.prototype), {
        render: function () {
            e.prototype.render.call(this);
            var i = this.colors;
            this.model = this.scope.data.contacts.collection[0];
            this.texStore = this.scope.data.contacts.textures;
            this.$title = new t(this.labels.title.toUpperCase(), {
                fontFamily: "din-condensed-web",
                fontSize: 34,
                fill: i.white,
                letterSpacing: 0
            });
            this.$body = new PIXI.Text(this.labels.body.toUpperCase(), {
                fontFamily: "montser-reg",
                fontSize: 9,
                fill: i.white,
                letterSpacing: 1,
                lineHeight: 18
            });
            this.$body.y = -this.$body.height - 50;
            this.$title.$el.y = this.$body.y - this.$title.height - 30;
            this.$quests = new PIXI.Sprite;
            _.each(this.labels.quests, function (e, n) {
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
                a.$el.y = s.height + 8;
                l.mailto = e.mailto;
                r.y = 65 * n, o.beginFill(i.white, 1);
                o.drawRect(0, a.$el.y + a.height / 2 - 1, -a.width - 10, 2);
                o.x = -20;
                l.beginFill(i.white, 0);
                l.drawRect(-5, a.$el.y - 5, a.width + 10, a.height + 10);
                l.interactive = !0;
                l.buttonMode = !0;
                l.timeline = new TimelineMax({
                    tweens: [
                        TweenMax.to(o, .6, {
                            x: a.width + 5,
                            ease: Expo.easeInOut
                        }),
                        TweenMax.to(o.scale, .75, {
                            bezier: {
                                curviness: 0,
                                values: [{
                                    x: 3
                                }, {
                                    x: 1
                                }]
                            },
                            ease: Expo.easeInOut
                        })
                    ],
                    paused: !0
                });
                r.addChild(s);
                r.addChild(a.$el);
                r.addChild(o);
                r.addChild(l);
                this.$quests.addChild(r)
            }, this);
            this.$holder = new PIXI.Sprite;
            this.$holder.addChild(this.$title.$el);
            this.$holder.addChild(this.$body);
            this.$holder.addChild(this.$quests);
            this.$texture = this.getTexture(this.model);
            this.$video = new PIXI.Sprite(this.$texture);
            this.$video.anchor.x = .5;
            this.$video.anchor.y = .5;
            this.$el.addChild(this.$video);
            this.$el.addChild(this.$holder);
            this.addEvents();
            this.texStore.items.contacts && this.texStore.items.contacts.paused && !n.isMobile() && this.texStore.items.contacts.play();
            return this
        },
        addEvents: function () {
            _.each(this.$quests.children, function (e) {
                var t = e.getChildAt(3);
                t.mouseover = _.bind(function () {
                    t.timeline.play()
                }, this);
                t.mouseout = _.bind(function () {
                    t.timeline.reverse()
                }, this);
                t.click = t.tap = _.bind(function (e) {
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
            this.$el.x = e.x;
            this.$el.y = e.y;
            this.$holder.x = -e.x + t;
            n = e.w / e.h > 1280 / 720 ? e.w / 1280 : e.h / 720;
            this.$video.scale.x = n;
            this.$video.scale.y = n
        },
        removeEvents: function () {
            _.each(this.$quests.children, function (e) {
                var t = e.getChildAt(3);
                t.mouseover = null;
                t.mouseout = null
            })
        },
        destroy: function () {
            "contacts.leaf" == this.scope.currstate.to.name || this.texStore.items.contacts.paused || n.isMobile() || this.texStore.items.contacts.pause();
            this.removeEvents();
            this.$video.destroy(!0);
            this.$holder.destroy(!0);
            this.$video = null;
            this.$holder = null;
            e.prototype.destroy.call(this)
        }
    });
    return i
}]