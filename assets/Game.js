// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // line: {
        //     default: null,
        //     type: cc.Node,
        // }
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    registerInput() {

    },
    onLoad() {

        var self = this;

        this.ctx = self.getComponent(cc.Graphics);

        if (!this.ctx ) {
            this.ctx  = self.addComponent(cc.Graphics)
        }
        this.ctx .lineWidth = 10;
        this.ctx .fillColor = cc.hexToColor('#000000');
        this.ctx .lineCap = cc.Graphics.LineCap.ROUND;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan.bind(this),
            onTouchMoved: this.onTouchMoved.bind(this),
            onTouchEnded: this.onTouchEnded.bind(this),
        }, this.node);
    },



    onTouchBegan: function (touch, event) {
        var touchLoc = touch.getLocation();
        // touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);

        this.points = [touchLoc];

        return true;
    },

    onTouchMoved: function (touch, event) {
        // var touchLoc = touch.getLocation();
        // // touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);
        //
        // this.points.push(touchLoc);
        //
        // this.ctx.clear();
        // for (let i = 0, l = this.points.length; i < l; i++) {
        //     let p = this.points[i];
        //     if (i === 0) {
        //         this.ctx.moveTo(p.x, p.y);
        //     }
        //     else {
        //         this.ctx.lineTo(p.x, p.y);
        //     }
        // }
        //
        // this.ctx.stroke();
    },

    onTouchEnded: function (touch, event) {
        var touchLoc = touch.getLocation();
        // touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);

        this.points.push(touchLoc);

        this.ctx.clear();
        for (let i = 0, l = this.points.length; i < l; i++) {
            let p = this.points[i];
            if (i === 0) {
                this.ctx.moveTo(p.x, p.y);
            }
            else {
                this.ctx.lineTo(p.x, p.y);
            }
        }

        this.ctx.stroke();

    },

    // update (dt) {},
});
