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
         jumpDuration: 1,
         jumpHeight: 300
     },
     ballJumpAction: function () {
         var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionInOut());
         var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
         return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
     },
     onLoad: function () {
        this.node.runAction(this.ballJumpAction());
     },
     // LIFE-CYCLE CALLBACKS:

     // onLoad () {},

     start() {

     },

     // update (dt) {},
 });