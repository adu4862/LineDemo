// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
//   this.line = this.node.getComponent(cc.Graphics);
//         this.line.lineWidth = 10;
//         // this.line.miterLimit = 300;
//         this.line.fillColor = cc.hexToColor('#000000');
//         this.inputEnabled = true;
//         this.line.lineCap = cc.Graphics.LineCap.ROUND;

cc.Class({
    extends: cc.Graphics,

    properties: {
        // lineWidth:20,
    },
    init(game){
        this.game = game;
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.lineWidth = 10;
        this.fillColor = cc.hexToColor('#000000');
        this.lineCap = cc.Graphics.LineCap.ROUND;

    },

    start () {

    },

    // update (dt) {},
});
