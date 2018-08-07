cc.Class({
    extends: cc.Component,

    properties: {
        money: {
            default: null,
            type: cc.Prefab
        }
    },
    newMoney: function () {
        var newMoney = cc.instantiate(this.money);
        this.node.addChild(newMoney, 100);
        newMoney.setPosition(this.getNewStartPosition());
        var moveTo = cc.moveTo(Math.random() * 5 + 0.5, cc.v2(newMoney.x, -this.node.height / 2 - 50));
        var finish = cc.callFunc(newMoney.removeFromParent, newMoney);
        var myAction = cc.sequence(moveTo, finish);
        newMoney.runAction(myAction);
    },
    getNewStartPosition: function () {
        var randX = Math.random() * 400 - 200;
        var randY = this.node.height / 2 + 100;
        return cc.v2(randX, randY);

    },


    onLoad: function () {
        this.schedule(function () {
            this.newMoney();
        }, 0.2);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});