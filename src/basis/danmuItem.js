import Log from '../utils/logger.js';
import {
  setInterval
} from 'timers';

class DanmuItem {
  constructor(parent, config) {
    this.TAG = 'DanmuItem';
    Log.v(this.TAG, parent);
    this.stage = parent;
    console.log(this.stage.name)
    this.stageWidth = 960;
    this.stageHeight = 920;

    this.load = new createjs.LoadQueue(true);
    this.load.loadManifest(config);
    // this.load.on('complete', () => {
    //   setInterval(function () {
    //     let math=Math.random();
    //     if(math>0.3 && math<0.6){
    //       this.addDanmu({user:'你好啊傻逼',achor:"傻逼你好",count:parseInt(math*100000),type:"yzcmghp"})
    //     }else if(math>0 && math<=0.3){
    //       // this.addDanmu({user:'你好啊傻逼',achor:"傻逼你好",count:parseInt(math*100000),type:"yzcmmfp"})
    //     }else if(math>0.6){
    //       this.addDanmu({user:'你好啊傻逼',achor:"傻逼你好",count:parseInt(math*100000),type:"yzcmgrp"})
    //     }

    //   }.bind(this), 50)
    // });

  }

  addDanmu(data) {
    let color = {
      color: "#433200",
      type: "dm-geren",
      bg: "#d6a63e"
    };
    if (data.type == "yzcmgrp") {
      color = {
        color: "#6d370b",
        type: "dm-geren",
        bg: "#d6a63e"
      };
    } else if (data.type == "yzcmghp") {
      color = {
        color: "#ffff00",
        type: "dm-gonghui",
        bg: "#00abea"
      };
    } else if (data.type == "yzcmmfp") {
      color = {
        color: "#002735",
        type: "dm-nahan",
        bg: "#00abea"
      };
    }
    let itemBg = new createjs.Container()
    let user = new createjs.Text(this._setNameIndex(data.user, 6), "bold 21px 微软雅黑", "#fff");
    user.x = 30;
    user.y = 70 - user.getBounds().height >> 1;
    itemBg.addChild(user);
    let zs = new createjs.Text("赠送", "bold italic 18px 微软雅黑", "#fff");
    zs.x = user.x + user.getBounds().width + 5;
    zs.y = user.y + (user.getBounds().height - zs.getBounds().height)
    itemBg.addChild(zs);
    let achor = new createjs.Text(this._setNameIndex(data.achor, 6), "bold 21px 微软雅黑", color.color);
    achor.x = zs.x + zs.getBounds().width + 10;
    achor.y = user.y;
    itemBg.addChild(achor);
    let count = new createjs.Text(data.count, "bold italic 36px 微软雅黑", "#fff");
    count.x = achor.x + achor.getBounds().width + 20;
    count.y = 70 - count.getBounds().height >> 1;
    itemBg.addChild(count);
    let count_x = new createjs.Text("x", "bold italic 21px 微软雅黑", "#fff");
    count_x.x = count.x + count.getBounds().width + 10
    count_x.y = 70 - count_x.getBounds().height >> 1
    itemBg.addChild(count_x);
    console.log(color)
    let icon = new createjs.Bitmap(this.load.getResult(color.type));
    icon.scaleX = 85 / icon.getBounds().width;
    icon.scaleY = 90 / icon.getBounds().height;
    icon.x = count_x.x + count_x.getBounds().width + 10;
    icon.y = -25;
    itemBg.addChild(icon)
    let item = new createjs.Shape();
    item.graphics.beginFill(color.bg).drawRoundRect(0, 0, (35 + 30 + user.getBounds().width + zs.getBounds().width + achor.getBounds().width + count.getBounds().width + count_x.getBounds().width + icon.getBounds().width * icon.scaleX + 30), 70, 30);
    itemBg.addChildAt(item, 0);
    this.showTween(itemBg)
  }

  _setNameIndex(data, index) {
    if (data.length > index) {
      return data.slice(0, index - 1) + '...'
    }
    return data
  }

  /**
   * 动画展示类
   * child：传入的要显示的对象
   * pos：对象的优先级  
   */
  showTween(child, pos = 0) {
    child.alpha = 0.5;
    child.scaleX = child.scaleY = 0.2;
    let orgPos = this.allocOrigin();
    child.width = 100;
    child.height = 70;
    let w = child.width - 65;
    let h = child.width;

    let ds = 5;
    let d0 = 4;
    let d1 = 1;
    let rx = (this.stageWidth / 2);
    let ry = (this.stageHeight / 2);
    let x0 = orgPos[0];
    let y0 = orgPos[1];
    let x1 = 0;
    let y1 = 0;
    let signX = x0 > (this.stageWidth / 2) ? 1 : -1;
    let signY = y0 > (this.stageHeight / 2) ? 1 : -1;

    child.x = x0 - w / 2;
    child.y = y0 - h / 2 - 80;
    child.z = d0;
    let posAr = this.allocDestination();


    x1 = (ds - d1) / (ds - d0) * (x0 - rx) + rx - w * 5 / 2;
    y1 = (ds - d1) / (ds - d0) * (y0 - ry) + ry - h * 5 / 2 - 80;
    this.stage.addChild(child);
    createjs.Tween.get(child, {
        override: true
      })
      .to({
        x: x1,
        y: y1,
        z: d1,
        scaleX: 1,
        scaleY: 1,
        alpha: 1
      }, 8000)
      .call(function () {
        createjs.Tween.get(child, {
            override: true
          })
          .to({
            alpha: 0
          }, 1000)
          .call(function () {
            child.cache();
            this.stage.removeChild(child)
            child = null;
          }.bind(this))
      }.bind(this));
  }


  allocOrigin() {
    // return this.randomFromRect(this.stageWidth / 5 * 0.9, thisß.stageHeight * 1 / 5);
    return this.randomFromRect((this.stageWidth) / 5, this.stageHeight / 4);

  }

  allocDestination() {
    let width = this.stageWidth * 0.8;
    let height = width * 920 / 960;
    return this.randomFromRect(width, height);
  }

  /**
   * 从以舞台为中心点的矩形上随机取出一个点
   */
  randomFromRect(width, height) {
    let centerX = this.stageWidth / 2;
    let centerY = this.stageHeight / 2;
    let x = centerX - (width / 2) + Math.random() * width //- 50;
    if (this.stage.name == "右边") {
      x -= 100;
    }

    let y = centerY - (height / 2) + Math.random() * height + 80;
    return [parseInt(x, 10), parseInt(y, 10)];
  }
}
export default DanmuItem;