import Log from '../utils/logger.js';
import EventEmitter from 'events';
import DanmuItem from '../basis/danmuItem.js'
import BigGift from '../basis/bigGift.js'

class MainScreen {
  constructor(parent, config, fire) {
    this.TAG = 'MainScreen';
    Log.v(this.TAG);
    this._emitter = new EventEmitter();
    this.container = new createjs.Container(); //总容器
    this.leftMain = new createjs.Container(); //左边显示区域
    this.centerMain = new createjs.Container() //中间显示区域
    this.rightMain = new createjs.Container(); //右边显示区域


    this.playLeft = true; //是不是在左边播放
    this.leftGift = new createjs.Container(); //左边礼物
    this.rightGift = new createjs.Container(); //右边礼物
    this.leftMain.name = "左边"
    this.rightMain.name = "右边"
    this.config = config;
    this.onlinetimer = null; //在线人数更新计时器
    this.online = 0; //在线人数
    this._randomList = [1, 2, 3, 4, 5, 6, -6, -5, -4, -3, -2, -1]; //在线随机数组
    this.load = new createjs.LoadQueue(false);
    this.load.loadManifest(this.config);
    this.load.on('complete', () => {
      let bg = new createjs.Bitmap(this.load.getResult("bg"));
      this.mainWidth = bg.getBounds().width;
      this.mainHeight = bg.getBounds().height;
      bg.x = 0;
      bg.y = 0;
      // this.container.addChild(bg);

      let centerSprite = new createjs.Shape();
      centerSprite.graphics.beginFill("green").drawRect(0, 0, 1348, 785);
      this.centerWidth = 1348;
      this.centerHeight = 785;
      // this.centerMain.addChild(centerSprite);

      let centerkv = new createjs.Bitmap(this.load.getResult("kv"));
      // this.centerMain.addChild(centerkv);

      //  this.container.addChild(new createjs.Bitmap(fire))
      let leftSprite = new createjs.Shape();
      leftSprite.graphics.beginFill("#000").drawRect(0, 0, 960, 920);
      this.leftWidht = 960;
      this.leftHeight = 920;
      // this.leftMain.addChild(leftSprite);

      this.itemLeft = new DanmuItem(this.leftMain, this.config);
      this.itemRight = new DanmuItem(this.rightMain, this.config);

      let rightSprite = new createjs.Shape();
      rightSprite.graphics.beginFill("#000").drawRect(0, 0, 960, 920);
      this.rightWidht = 960;
      this.rightHeight = 920;
      // this.rightMain.addChild(rightSprite);


      this.container.addChild(this.centerMain);
      this.centerMain.x = this.mainWidth - this.centerWidth >> 1;
      this.centerMain.y = this.mainHeight - this.centerHeight >> 1;
      this.container.addChild(this.leftMain);
      this.leftMain.x = 50;
      this.leftMain.y = 80;
      this.container.addChild(this.rightMain);
      this.rightMain.x = this.mainWidth - this.rightWidht - 50;
      this.rightMain.y = 80;

      this.allPerImg = new createjs.Bitmap(this.load.getResult("allper"))
      this.allPerImg.scaleX=0.9
      this.allPerImg.scaleY=0.9
      this.allPerImg.x = this.mainWidth - 0.9*this.allPerImg.getBounds().width >> 1
      this.allPerImg.y = 120;
      this.container.addChild(this.allPerImg);
      this.allPerTxt = new createjs.Text(this._setNumChange("0"), "bold 60px 微软雅黑", "#fff");
      this.allPerTxt.x = this.allPerImg.x + 260 + (368 - 0.9*this.allPerTxt.getBounds().width) / 2
      this.allPerTxt.y = (0.9*this.allPerImg.getBounds().height - 0.9*this.allPerTxt.getBounds().height) / 2 + 40*0.9;
      this.container.addChild(this.allPerTxt);

      this.biggiftLeft = new BigGift(this.leftGift);
      this.biggiftRight = new BigGift(this.rightGift);

      this.container.addChild(this.leftGift);
      this.container.addChild(this.rightGift);
      this.leftGift.x = this.leftMain.x+200
      this.leftGift.y = this.leftMain.y
      this.rightGift.x = this.rightMain.x-200
      this.rightGift.y = this.rightMain.y

      this._emitter.emit("complete")
    });

    parent.addChild(this.container);
  }

  addDanmu(data) {
    if (data.type == "yzcmghp"  || data.type == "yzcmgrp") {
      if (data.count) {
        if (Math.random() < 0.5) {
          this.itemLeft.addDanmu(data);
        } else {
          this.itemRight.addDanmu(data);
        }
      }
      if (data.count >= 9999) {
        console.log("biggift====>", this.playLeft)
        if (this.playLeft) {
          this.playLeft = false;
          if (data.type == "yzcmghp") {
            this.biggiftLeft.addBigGift({
              count: data.count,
              type: 1,
              user: data.user,
              achor: data.achor
            })
          } else if (data.type == "yzcmgrp") {
            this.biggiftLeft.addBigGift({
              count: data.count,
              type: 0,
              user: data.user,
              achor: data.achor

            })
          }
        } else {
          this.playLeft = true;
          if (data.type == "yzcmghp") {
            this.biggiftRight.addBigGift({
              count: data.count,
              type: 1,
              user: data.user,
              achor: data.achor
            })
          } else if (data.type == "yzcmgrp") {
            this.biggiftRight.addBigGift({
              count: data.count,
              type: 0,
              user: data.user,
              achor: data.achor
            })
          }
        }
      }
    }
  }

  get perNum() {
    return this.allPerTxt.text;
  }
  set perNum(value) {
    // this.allPerTxt.text = this._setNumChange(value);
    // this.allPerTxt.x = this.allPerImg.x + 260
    // this.allPerTxt.y = (this.allPerImg.getBounds().height - this.allPerTxt.getBounds().height )/2+40;
    this.stepupdateonline(value)
  }

  stepupdateonline(value) {
    if (this.onlinetimer) {
      clearInterval(this.onlinetimer)
    }
    let step = parseInt((value - this.online) / 600);
    this.setsteponline(step)
    this.onlinetimer = setInterval(function () {
      this.setsteponline(step);
    }.bind(this), 100);
  }

  setAllFireScore(step){
    this.allPerTxt.text = this._setNumChange(parseInt(step));
    this.allPerTxt.x = this.allPerImg.x + 0.9*260 + 0.9*(368 - this.allPerTxt.getBounds().width) / 2
    this.allPerTxt.y = 0.9*(this.allPerImg.getBounds().height - this.allPerTxt.getBounds().height) / 2 + 115;
  }

  setsteponline(step) {
    let temp = this.getOnlineStep(step);
    this.online += temp;
    if (this.online < 0) {
      this.online = 0;
    }
    this.allPerTxt.text = this._setNumChange(parseInt(this.online));
    this.allPerTxt.x = this.allPerImg.x + 0.9*260 + 0.9*(368 - this.allPerTxt.getBounds().width) / 2
    this.allPerTxt.y = 0.9*(this.allPerImg.getBounds().height - this.allPerTxt.getBounds().height) / 2 + 110;
  }
  getOnlineStep(step) {
    let temp = step;
    if (Math.abs(temp) > 1) {
      if (temp > 0) {
        temp = Math.ceil(temp);
      } else {
        temp = Math.floor(temp);
      }
    } else {
      temp = this.getRandomStep();
    }
    return temp || 0;
  }
  getRandomStep() {
    let randomIndex = Math.floor(Math.random() * this._randomList.length);
    return this._randomList.slice(randomIndex, 1)[0];
  }

  _setNumChange(data) {
    return parseFloat((data).toString()).toLocaleString();
  }

  destroy() {
    this._emitter.removeAllListeners();
    this._emitter = null;
  }

  on(event, listener) {
    this._emitter.addListener(event, listener);
  }
  off(event, listener) {
    this._emitter.removeListener(event, listener);
  }


}
export default MainScreen;