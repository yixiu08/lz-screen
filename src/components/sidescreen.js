import Log from '../utils/logger.js';
import EventEmitter from 'events';
import GiftItem from '../basis/giftItem.js'
import {
  setInterval,
  setTimeout
} from 'timers';

class SideScreen {
  constructor(parent, config) {
    this.TAG = 'SideScreen';
    Log.v(this.TAG);
    this._width = null; //容器宽
    this._height = null; //容器高
    this.ghArr = [];
    this.dghX = null;
    this.drwX = null;
    this.giftItems = []; //存着的礼物数组
    this.playGiftItemsNum = 0; //有多少个礼物
    this.playGiftItems = [];
    this.canAddOne = true;
    this._emitter = new EventEmitter();
    /*******************大公会 ***********[START]**********************************************/
    this.dgh_no1 = null; //大公会第一名 框
    this.ghfm_no1 = null; //大公会第一名 图标
    this.dgh_name_no1 = null; //大公会第一名 名字
    this.dgh_score_no1 = null; //大公会第一名 分数
    this.dgh_count_no1 = null; //大公会第一名 单位

    this.dgh_no2 = null; //大公会第一名 框
    this.ghfm_no2 = null; //大公会第一名 图标
    this.dgh_name_no2 = null; //大公会第一名 名字
    this.dgh_score_no2 = null; //大公会第一名 分数
    this.dgh_count_no2 = null; //大公会第一名 单位

    this.dgh_no3 = null; //大公会第一名 框
    this.ghfm_no3 = null; //大公会第一名 图标
    this.dgh_name_no3 = null; //大公会第一名 名字
    this.dgh_score_no3 = null; //大公会第一名 分数
    this.dgh_count_no3 = null; //大公会第一名 单位
    /*******************大公会 *************[END]********************************************/
    /*******************大人物 ***********[START]**********************************************/
    this.drw_no1 = null; //大人物第一名 框
    this.rwfm_no1 = null; //大人物第一名 图标
    this.drw_name_no1 = null; //大人物第一名 名字
    this.drw_score_no1 = null; //大人物第一名 分数
    this.drw_count_no1 = null; //大人物第一名 单位

    this.drw_no2 = null; //大人物第一名 框
    this.rwfm_no2 = null; //大人物第一名 图标
    this.drw_name_no2 = null; //大人物第一名 名字
    this.drw_score_no2 = null; //大人物第一名 分数
    this.drw_count_no2 = null; //大人物第一名 单位

    this.drw_no3 = null; //大人物第一名 框
    this.rwfm_no3 = null; //大人物第一名 图标
    this.drw_name_no3 = null; //大人物第一名 名字
    this.drw_score_no3 = null; //大人物第一名 分数
    this.drw_count_no3 = null; //大人物第一名 单位
    /*******************大人物 *************[END]********************************************/
    this.container = new createjs.Container(); //总容器
    this.giftBord = new createjs.Container(); //礼物模板
    this.giftItem = new createjs.Container(); //单个礼物


    this.container.scaleX=0.8;
    this.container.scaleY=0.8;

    this.imgsrc = config;
    this.load = new createjs.LoadQueue(false);
    this.load.loadManifest(this.imgsrc);
    this.load.on('complete', () => {
      //背景
      let bg = new createjs.Bitmap(this.load.getResult('bg'));
      this._width = 1920//bg.getBounds().width;
      this._height = 1080//bg.getBounds().height;
      console.log(this._width,this._height)
      bg.x = 0;
      bg.y = 0;
      // this.container.addChild(bg);
      // this.container.addChild(new createjs.Bitmap(fire))
      //标题加背景框
      let bg_a = new createjs.Bitmap(this.load.getResult('bg-a'))
      bg_a.x = 0;
      bg_a.y = 100+50;
      this.container.addChild(bg_a)

      ////////////龙珠大公会////////////[START]//////////////////////////////////////////////////////////
      this.dgh_no1 = new createjs.Bitmap(this.load.getResult('dgh-1'))
      this.dgh_no1.x = 90;
      this.dgh_no1.y = 260+50+100+50;
      this.container.addChild(this.dgh_no1)

      this.ghfm_no1 = new createjs.Bitmap(this.load.getResult('gh-fm'))
      this.ghfm_no1.scaleX = 180 / this.ghfm_no1.getBounds().width;
      this.ghfm_no1.scaleY = 116 / this.ghfm_no1.getBounds().height;
      this.ghfm_no1.x = this.dgh_no1.x + (this.dgh_no1.getBounds().width - this.ghfm_no1.scaleX * this.ghfm_no1.getBounds().width) / 2;
      this.ghfm_no1.y = this.dgh_no1.y + 46;
      this.container.addChild(this.ghfm_no1)

      this.dgh_no11 = new createjs.Bitmap(this.load.getResult('gh-fm11'));
      this.dghX = this.ghfm_no1.x + 25 + this.dgh_no1.getBounds().width;
      this.dgh_no11.x = this.dghX;
      this.dgh_no11.y = 260+50+100+50;
      this.container.addChild(this.dgh_no11)

      this.dgh_name_no1 = new createjs.Text(this._setNameIndex("情久传媒情久传", 6), "bold 40px 微软雅黑", "#ffe260");
      this.dgh_name_no1.x = this.dghX;
      this.dgh_name_no1.y = this.dgh_no11.y + this.dgh_no11.getBounds().height + 20;
      this.container.addChild(this.dgh_name_no1)

      this.dgh_score_no1 = new createjs.Text(this._setNumChange("123456789"), "bold 26px 微软雅黑", "#fef2e0");
      this.dgh_score_no1.x = this.dghX;
      this.dgh_score_no1.y = this.dgh_name_no1.y + this.dgh_name_no1.getBounds().height;
      this.container.addChild(this.dgh_score_no1)

      this.dgh_count_no1 = new createjs.Text("火力值", "18px 微软雅黑", "#fef2e0");
      this.dgh_count_no1.x = this.dgh_score_no1.x + this.dgh_score_no1.getBounds().width + 10;
      this.dgh_count_no1.y = this.dgh_score_no1.y + (this.dgh_score_no1.getBounds().height - this.dgh_count_no1.getBounds().height) / 2;
      this.container.addChild(this.dgh_count_no1)
      /////////////22222222222222///////////////////  
      this.dgh_no2 = new createjs.Bitmap(this.load.getResult('dgh-2'))
      this.dgh_no2.x = 90;
      this.dgh_no2.y = 545+50+100+50;
      this.container.addChild(this.dgh_no2)

      this.ghfm_no2 = new createjs.Bitmap(this.load.getResult('gh-fm'))
      this.ghfm_no2.scaleX = 156 / this.ghfm_no2.getBounds().width;
      this.ghfm_no2.scaleY = 100 / this.ghfm_no2.getBounds().height;
      this.ghfm_no2.x = this.dgh_no2.x + (this.dgh_no2.getBounds().width - this.ghfm_no2.scaleX * this.ghfm_no2.getBounds().width) / 2;
      this.ghfm_no2.y = this.dgh_no2.y + 42;
      this.container.addChild(this.ghfm_no2)

      this.dgh_no22 = new createjs.Bitmap(this.load.getResult('gh-fm22'));
      this.dgh_no22.x = this.dghX;
      this.dgh_no22.y = 545+50+100+50;
      this.container.addChild(this.dgh_no22)

      this.dgh_name_no2 = new createjs.Text(this._setNameIndex("情久传媒情久传情久传媒情久传", 7), "32px 微软雅黑", "#eeeeee");
      this.dgh_name_no2.x = this.dghX;
      this.dgh_name_no2.y = this.dgh_no22.y + this.dgh_no22.getBounds().height + 20;
      this.container.addChild(this.dgh_name_no2)

      this.dgh_score_no2 = new createjs.Text(this._setNumChange("123456789"), "bold 26px 微软雅黑", "#fef3e0");
      this.dgh_score_no2.x = this.dghX;
      this.dgh_score_no2.y = this.dgh_name_no2.y + this.dgh_name_no2.getBounds().height + 10;
      this.container.addChild(this.dgh_score_no2)

      this.dgh_count_no2 = new createjs.Text("火力值", "18px 微软雅黑", "#fff3e0");
      this.dgh_count_no2.x = this.dgh_score_no2.x + this.dgh_score_no2.getBounds().width + 10;
      this.dgh_count_no2.y = this.dgh_score_no2.y + (this.dgh_score_no2.getBounds().height - this.dgh_count_no2.getBounds().height) / 2;
      this.container.addChild(this.dgh_count_no2)
      ///////////////333333333333333333/////////////////
      this.dgh_no3 = new createjs.Bitmap(this.load.getResult('dgh-3'))
      this.dgh_no3.x = 90;
      this.dgh_no3.y = 780+50+100+50;
      this.container.addChild(this.dgh_no3)

      this.ghfm_no3 = new createjs.Bitmap(this.load.getResult('gh-fm1'))
      this.ghfm_no3.scaleX = 156 / this.ghfm_no3.getBounds().width;
      this.ghfm_no3.scaleY = 100 / this.ghfm_no3.getBounds().height;
      this.ghfm_no3.x = this.dgh_no3.x + (this.dgh_no3.getBounds().width - this.ghfm_no3.scaleX * this.ghfm_no3.getBounds().width) / 2;
      this.ghfm_no3.y = this.dgh_no3.y + 42;
      this.container.addChild(this.ghfm_no3)

      this.dgh_no33 = new createjs.Bitmap(this.load.getResult('gh-fm33'));
      this.dgh_no33.x = this.dghX;
      this.dgh_no33.y = 780+50+100+50;
      this.container.addChild(this.dgh_no33)

      this.dgh_name_no3 = new createjs.Text(this._setNameIndex("雨泽电竞", 7), "32px 微软雅黑", "#e59850");
      this.dgh_name_no3.x = this.dghX;
      this.dgh_name_no3.y = this.dgh_no33.y + this.dgh_no33.getBounds().height + 20;
      this.container.addChild(this.dgh_name_no3)

      this.dgh_score_no3 = new createjs.Text(this._setNumChange("123456789"), "bold 26px 微软雅黑", "#eeeeee");
      this.dgh_score_no3.x = this.dghX;
      this.dgh_score_no3.y = this.dgh_name_no3.y + this.dgh_name_no3.getBounds().height + 10;
      this.container.addChild(this.dgh_score_no3)

      this.dgh_count_no3 = new createjs.Text("火力值", "18px 微软雅黑", "#fff3e0");
      this.dgh_count_no3.x = this.dgh_score_no3.x + this.dgh_score_no3.getBounds().width + 10;
      this.dgh_count_no3.y = this.dgh_score_no3.y + (this.dgh_score_no3.getBounds().height - this.dgh_count_no3.getBounds().height) / 2;
      this.container.addChild(this.dgh_count_no3)
      ////////////龙珠大公会////////////[END]//////////////////////////////////////////////////////////
      ////////////龙珠大人物////////////[START]//////////////////////////////////////////////////////////
      this.drw_no1 = new createjs.Bitmap(this.load.getResult('drw-1'))
      this.drw_no1.x = 620;
      this.drw_no1.y = 260+100+50;
      this.container.addChild(this.drw_no1)

      this.rw_fm1_mask = new createjs.Shape();
      this.rw_fm1_mask.graphics.beginFill("#f00").drawCircle(0, 0, 60);
      this.rw_fm1_mask.alpha = 0;
      this.container.addChild(this.rw_fm1_mask);

      this.rwfm_no1 = new createjs.Bitmap(this.load.getResult('rw-fm'))
      this.rwfm_no1.scaleX = 120 / this.rwfm_no1.getBounds().width;
      this.rwfm_no1.scaleY = 120 / this.rwfm_no1.getBounds().height;
      this.rwfm_no1.x = this.drw_no1.x + (this.drw_no1.getBounds().width - this.rwfm_no1.scaleX * this.rwfm_no1.getBounds().width) / 2;
      this.rwfm_no1.y = this.drw_no1.y + 44;
      this.container.addChild(this.rwfm_no1)
      this.rw_fm1_mask.x = this.rwfm_no1.x + 60;
      this.rw_fm1_mask.y = this.rwfm_no1.y + 60;
      this.rwfm_no1.mask = this.rw_fm1_mask;


      this.drw_no11 = new createjs.Bitmap(this.load.getResult('gh-fm11'));
      this.drwX = this.rwfm_no1.x + this.drw_no1.getBounds().width + 50;
      this.drw_no11.x = this.drwX;
      this.drw_no11.y = 260+100+50;
      this.container.addChild(this.drw_no11)

      this.drw_name_no1 = new createjs.Text(this._setNameIndex("轻轻摇摆", 7), "bold 40px 微软雅黑", "#ffe260");
      this.drw_name_no1.x = this.drwX;
      this.drw_name_no1.y = this.drw_no11.y + this.drw_no11.getBounds().height + 20;
      this.container.addChild(this.drw_name_no1)

      this.drw_score_no1 = new createjs.Text(this._setNumChange("123456789"), "bold 26px 微软雅黑", "#fef2e0");
      this.drw_score_no1.x = this.drwX;
      this.drw_score_no1.y = this.drw_name_no1.y + this.drw_name_no1.getBounds().height + 10;
      this.container.addChild(this.drw_score_no1)

      this.drw_count_no1 = new createjs.Text("火力值", "18px 微软雅黑", "#fef2e0");
      this.drw_count_no1.x = this.drw_score_no1.x + this.drw_score_no1.getBounds().width + 10;
      this.drw_count_no1.y = this.drw_score_no1.y + (this.drw_score_no1.getBounds().height - this.drw_count_no1.getBounds().height) / 2;
      this.container.addChild(this.drw_count_no1)
      /////////////2222222222222222///////////////////
      this.drw_no2 = new createjs.Bitmap(this.load.getResult('drw-2'))
      this.drw_no2.x = 620;
      this.drw_no2.y = 545+100+50;
      this.container.addChild(this.drw_no2)

      this.rw_fm1_mask1 = new createjs.Shape();
      this.rw_fm1_mask1.graphics.beginFill("#f00").drawCircle(0, 0, 52.5);
      this.rw_fm1_mask1.alpha = 0;
      this.container.addChild(this.rw_fm1_mask1);

      this.rwfm_no2 = new createjs.Bitmap(this.load.getResult('rw-fm'))
      this.rwfm_no2.scaleX = 105 / this.rwfm_no2.getBounds().width;
      this.rwfm_no2.scaleY = 105 / this.rwfm_no2.getBounds().height;
      this.rwfm_no2.x = this.drw_no2.x + (this.drw_no2.getBounds().width - this.rwfm_no2.scaleX * this.rwfm_no2.getBounds().width) / 2;
      this.rwfm_no2.y = this.drw_no2.y + 50;
      this.container.addChild(this.rwfm_no2)
      this.rw_fm1_mask1.x = this.rwfm_no2.x + 52.5;
      this.rw_fm1_mask1.y = this.rwfm_no2.y + 52.5;
      this.rwfm_no2.mask = this.rw_fm1_mask1;

      this.drw_no22 = new createjs.Bitmap(this.load.getResult('gh-fm22'));
      this.drw_no22.x = this.drwX;
      this.drw_no22.y = 545+100+50;
      this.container.addChild(this.drw_no22)

      this.drw_name_no2 = new createjs.Text(this._setNameIndex("黑暗星球", 7), "32px 微软雅黑", "#eeeeee");
      this.drw_name_no2.x = this.drwX;
      this.drw_name_no2.y = this.drw_no22.y + this.drw_no22.getBounds().height + 20;
      this.container.addChild(this.drw_name_no2)

      this.drw_score_no2 = new createjs.Text(this._setNumChange("123456789"), "bold 26px 微软雅黑", "#fef3e0");
      this.drw_score_no2.x = this.drwX;
      this.drw_score_no2.y = this.drw_name_no2.y + this.drw_name_no2.getBounds().height + 10;
      this.container.addChild(this.drw_score_no2)

      this.drw_count_no2 = new createjs.Text("火力值", "18px 微软雅黑", "#fef3e0");
      this.drw_count_no2.x = this.drw_score_no2.x + this.drw_score_no2.getBounds().width + 10;
      this.drw_count_no2.y = this.drw_score_no2.y + (this.drw_score_no2.getBounds().height - this.drw_count_no2.getBounds().height) / 2;
      this.container.addChild(this.drw_count_no2)
      ///////////////33333333333333/////////////////
      this.drw_no3 = new createjs.Bitmap(this.load.getResult('drw-3'))
      this.drw_no3.x = 620;
      this.drw_no3.y = 780+100+50;
      this.container.addChild(this.drw_no3)

      this.rw_fm1_mask2 = new createjs.Shape();
      this.rw_fm1_mask2.graphics.beginFill("#f00").drawCircle(0, 0, 52.5);
      this.rw_fm1_mask2.alpha = 0;
      this.container.addChild(this.rw_fm1_mask2);

      this.rwfm_no3 = new createjs.Bitmap(this.load.getResult('rw-fm'))
      this.rwfm_no3.scaleX = 105 / this.rwfm_no3.getBounds().width;
      this.rwfm_no3.scaleY = 105 / this.rwfm_no3.getBounds().height;
      this.rwfm_no3.x = this.drw_no3.x + (this.drw_no3.getBounds().width - this.rwfm_no3.scaleX * this.rwfm_no3.getBounds().width) / 2;
      this.rwfm_no3.y = this.drw_no3.y + 40;
      this.container.addChild(this.rwfm_no3)
      this.rw_fm1_mask2.x = this.rwfm_no3.x + 52.5;
      this.rw_fm1_mask2.y = this.rwfm_no3.y + 52.5;
      this.rwfm_no3.mask = this.rw_fm1_mask2;

      this.drw_no33 = new createjs.Bitmap(this.load.getResult('gh-fm33'));
      this.drw_no33.x = this.drwX;
      this.drw_no33.y = 780+100+50;
      this.container.addChild(this.drw_no33)

      this.drw_name_no3 = new createjs.Text(this._setNameIndex("蓝色星球布鲁斯", 7), "32px 微软雅黑", "#e59850");
      this.drw_name_no3.x = this.drwX;
      this.drw_name_no3.y = this.drw_no33.y + this.drw_no33.getBounds().height + 20;
      this.container.addChild(this.drw_name_no3)

      this.drw_score_no3 = new createjs.Text(this._setNumChange("123456789"), "bold 26px 微软雅黑", "#fef3e0");
      this.drw_score_no3.x = this.drwX;
      this.drw_score_no3.y = this.drw_name_no3.y + this.drw_name_no3.getBounds().height + 10;
      this.container.addChild(this.drw_score_no3)

      this.drw_count_no3 = new createjs.Text("火力值", "18px 微软雅黑", "#fef3e0");
      this.drw_count_no3.x = this.drw_score_no3.x + this.drw_score_no3.getBounds().width + 10;
      this.drw_count_no3.y = this.drw_score_no3.y + (this.drw_score_no3.getBounds().height - this.drw_count_no3.getBounds().height) / 2;
      this.container.addChild(this.drw_count_no3)
      ////////////龙珠大人物////////////[END]//////////////////////////////////////////////////////////
      ////////////龙珠大礼物////////////[START]//////////////////////////////////////////////////////////
      let gift_mask = new createjs.Shape();
      gift_mask.graphics.beginFill("#f00").drawRect(0, -50+100+50, 530, 770);
      this.container.addChild(gift_mask)
      gift_mask.alpha = 0;
      gift_mask.x = 1090;
      gift_mask.y = 200;
      this.giftBord.x = 1090;
      this.giftBord.y = 200-50+100+50;
      this.container.addChild(this.giftBord);
      this.giftBord.mask = gift_mask;

      //type:gift-geren  color:#ffcc00 //个人
      //type:gift-nahan  color:#00ccff//呐喊
      //type:gift-gonghui  color:#ff6600//公会
      for (let qq = 100; qq < 100000; qq++) {
        this.giftPool.push({
          "user": "龙珠直播" + qq,
          "achor": "龙珠直播" + qq,
          "count": 333444,
          "type": "gift-geren",
          "color": "#00abea"
        })
      }

      ////////////龙珠大礼物////////////[END]//////////////////////////////////////////////////////////
      this._emitter.emit('complete');
      createjs.Ticker.addEventListener('tick', this._addToBord.bind(this));
    });

    parent.addChild(this.container);
    this.container.x=230;
    setInterval(function () {
      if (this.giftPool.length) {
        this._addGiftItem(this.giftPool.shift());
      }
    }.bind(this), 2000)
    this.giftPool = [];
  }

  addGiftItem(item) {
    this.giftPool.push(item)
  }

  _addGiftItem(item) {
    if (this.canAddOne) {
      this.giftItems.push(item);
    }
  }

  _addToBord(e) {
    if (this.giftItems.length && this.canAddOne) {
      this._addOne();
    }
  }

  _addOne() {
    this.canAddOne = false
    let one = this.giftItems.shift();
    let item = new GiftItem(this.giftBord, this.imgsrc, one)
    item.Y = 156 * this.playGiftItemsNum;
    this.playGiftItems.push(item);
    item.on("destroy", (e) => {
      this.playGiftItems.shift().destroy();
      this.playGiftItemsNum--;
      this.itemrun = false;
      this._runAnimation();
    })

    item.on("complete", function () {
      this.playGiftItemsNum++;
      this._runAnimation();
      this.canAddOne = true;
    }.bind(this));
  }

  _runAnimation() {
    if (this.playGiftItemsNum > 5) {
      for (let qq = 0; qq < this.playGiftItems.length; qq++) {
        this.playGiftItems[qq].Y = 156 * qq;
        this.playGiftItems[qq].run();
        this.itemrun = true;
      }
    }
  }

  _setNameIndex(data, index) {
    if (data.length > index) {
      return data.slice(0, index - 1) + '...'
    }
    return data
  }

  _setNumChange(data) {
    return parseFloat((data).toString()).toLocaleString();
  }

  changeRankDGH(data) {
    console.log('aaaaaaaa', data);
    let dgh_imgsrc = [];
    for (let index = 0; index < data.length; index++) {
      dgh_imgsrc.push({
        id: 'no-' + index,
        src: data[index].avatar,
        name: data[index].name,
        score: data[index].score
      })
    }
    let dgh_load = new createjs.LoadQueue(false);
    dgh_load.loadManifest(dgh_imgsrc);
    dgh_load.on('complete', function () {
      this.ghfm_no1.cache();
      this.ghfm_no1 = new createjs.Bitmap(dgh_load.getResult('no-0'))
      this.ghfm_no1.scaleX = 180 / this.ghfm_no1.getBounds().width;
      this.ghfm_no1.scaleY = 116 / this.ghfm_no1.getBounds().height;
      this.ghfm_no1.x = this.dgh_no1.x + (this.dgh_no1.getBounds().width - this.ghfm_no1.scaleX * this.ghfm_no1.getBounds().width) / 2;
      this.ghfm_no1.y = this.dgh_no1.y + 46;
      this.container.addChild(this.ghfm_no1)

      this.dgh_name_no1.cache();
      this.dgh_name_no1 = new createjs.Text(this._setNameIndex(dgh_imgsrc[0].name, 6), "bold 40px 微软雅黑", "#ffe260");
      this.dgh_name_no1.x = this.dghX;
      this.dgh_name_no1.y = this.dgh_no11.y + this.dgh_no11.getBounds().height + 20;
      this.container.addChild(this.dgh_name_no1)

      this.dgh_score_no1.cache();
      this.dgh_score_no1 = new createjs.Text(this._setNumChange(dgh_imgsrc[0].score), "bold 26px 微软雅黑", "#fef2e0");
      this.dgh_score_no1.x = this.dghX;
      this.dgh_score_no1.y = this.dgh_name_no1.y + this.dgh_name_no1.getBounds().height + 10;
      this.container.addChild(this.dgh_score_no1)

      this.dgh_count_no1.cache();
      this.dgh_count_no1 = new createjs.Text("火力值", "18px 微软雅黑", "#fef2e0");
      this.dgh_count_no1.x = this.dgh_score_no1.x + this.dgh_score_no1.getBounds().width + 10;
      this.dgh_count_no1.y = this.dgh_score_no1.y + (this.dgh_score_no1.getBounds().height - this.dgh_count_no1.getBounds().height) / 2;
      this.container.addChild(this.dgh_count_no1)

      this.ghfm_no2.cache();
      this.ghfm_no2 = new createjs.Bitmap(dgh_load.getResult('no-1'))
      this.ghfm_no2.scaleX = 156 / this.ghfm_no2.getBounds().width;
      this.ghfm_no2.scaleY = 100 / this.ghfm_no2.getBounds().height;
      this.ghfm_no2.x = this.dgh_no2.x + (this.dgh_no2.getBounds().width - this.ghfm_no2.scaleX * this.ghfm_no2.getBounds().width) / 2;
      this.ghfm_no2.y = this.dgh_no2.y + 42;
      this.container.addChild(this.ghfm_no2)

      this.dgh_name_no2.cache();
      this.dgh_name_no2 = new createjs.Text(this._setNameIndex(dgh_imgsrc[1].name, 7), "32px 微软雅黑", "#eeeeee");
      this.dgh_name_no2.x = this.dghX;
      this.dgh_name_no2.y = this.dgh_no22.y + this.dgh_no22.getBounds().height + 20;
      this.container.addChild(this.dgh_name_no2)

      this.dgh_score_no2.cache();
      this.dgh_score_no2 = new createjs.Text(this._setNumChange(dgh_imgsrc[1].score), "bold 26px 微软雅黑", "#fef3e0");
      this.dgh_score_no2.x = this.dghX;
      this.dgh_score_no2.y = this.dgh_name_no2.y + this.dgh_name_no2.getBounds().height + 10;
      this.container.addChild(this.dgh_score_no2)

      this.dgh_count_no2.cache();
      this.dgh_count_no2 = new createjs.Text("火力值", "18px 微软雅黑", "#fff3e0");
      this.dgh_count_no2.x = this.dgh_score_no2.x + this.dgh_score_no2.getBounds().width + 10;
      this.dgh_count_no2.y = this.dgh_score_no2.y + (this.dgh_score_no2.getBounds().height - this.dgh_count_no2.getBounds().height) / 2;
      this.container.addChild(this.dgh_count_no2)

      this.ghfm_no3.cache();
      this.ghfm_no3 = new createjs.Bitmap(dgh_load.getResult('no-2'))
      this.ghfm_no3.scaleX = 156 / this.ghfm_no3.getBounds().width;
      this.ghfm_no3.scaleY = 100 / this.ghfm_no3.getBounds().height;
      this.ghfm_no3.x = this.dgh_no3.x + (this.dgh_no3.getBounds().width - this.ghfm_no3.scaleX * this.ghfm_no3.getBounds().width) / 2;
      this.ghfm_no3.y = this.dgh_no3.y + 42;
      this.container.addChild(this.ghfm_no3)

      this.dgh_name_no3.cache();
      this.dgh_name_no3 = new createjs.Text(this._setNameIndex(dgh_imgsrc[2].name, 7), "32px 微软雅黑", "#e59850");
      this.dgh_name_no3.x = this.dghX;
      this.dgh_name_no3.y = this.dgh_no33.y + this.dgh_no33.getBounds().height + 20;
      this.container.addChild(this.dgh_name_no3)

      this.dgh_score_no3.cache();
      this.dgh_score_no3 = new createjs.Text(this._setNumChange(dgh_imgsrc[2].score), "bold 26px 微软雅黑", "#eeeeee");
      this.dgh_score_no3.x = this.dghX;
      this.dgh_score_no3.y = this.dgh_name_no3.y + this.dgh_name_no3.getBounds().height + 10;
      this.container.addChild(this.dgh_score_no3)

      this.dgh_count_no3.cache();
      this.dgh_count_no3 = new createjs.Text("火力值", "18px 微软雅黑", "#fff3e0");
      this.dgh_count_no3.x = this.dgh_score_no3.x + this.dgh_score_no3.getBounds().width + 10;
      this.dgh_count_no3.y = this.dgh_score_no3.y + (this.dgh_score_no3.getBounds().height - this.dgh_count_no3.getBounds().height) / 2;
      this.container.addChild(this.dgh_count_no3)
    }.bind(this));
  }

  changeRankDRW(data) {
    console.log('bbbbbbb', data);
    let drw_imgsrc = [];
    for (let index = 0; index < data.length; index++) {
      drw_imgsrc.push({
        id: 'no-' + index,
        src: data[index].avatar,
        name: data[index].userName,
        score: data[index].score
      })
    }

    let img_no1 = new Image();
    img_no1.src = drw_imgsrc[0].src
    img_no1.onload = function () {
      this.rwfm_no1.cache();
      this.rwfm_no1 = new createjs.Bitmap(img_no1)
      this.rwfm_no1.scaleX = 120 / this.rwfm_no1.getBounds().width;
      this.rwfm_no1.scaleY = 120 / this.rwfm_no1.getBounds().height;
      this.rwfm_no1.x = this.drw_no1.x + (this.drw_no1.getBounds().width - this.rwfm_no1.scaleX * this.rwfm_no1.getBounds().width) / 2;
      this.rwfm_no1.y = this.drw_no1.y + 44;
      this.container.addChild(this.rwfm_no1)
      this.rwfm_no1.mask = this.rw_fm1_mask;

    }.bind(this)


    this.drw_name_no1.cache();
    this.drw_name_no1 = new createjs.Text(this._setNameIndex(drw_imgsrc[0].name, 7), "bold 40px 微软雅黑", "#ffe260");
    this.drw_name_no1.x = this.drwX;
    this.drw_name_no1.y = this.drw_no11.y + this.drw_no11.getBounds().height + 20;
    this.container.addChild(this.drw_name_no1)

    this.drw_score_no1.cache();
    this.drw_score_no1 = new createjs.Text(this._setNumChange(drw_imgsrc[0].score), "bold 26px 微软雅黑", "#fef2e0");
    this.drw_score_no1.x = this.drwX;
    this.drw_score_no1.x = this.drwX;
    this.drw_score_no1.y = this.drw_name_no1.y + this.drw_name_no1.getBounds().height + 10;
    this.container.addChild(this.drw_score_no1)


    this.drw_count_no1.cache();
    this.drw_count_no1 = new createjs.Text("火力值", "18px 微软雅黑", "#fef2e0");
    this.drw_count_no1.x = this.drw_score_no1.x + this.drw_score_no1.getBounds().width + 10;
    this.drw_count_no1.y = this.drw_score_no1.y + (this.drw_score_no1.getBounds().height - this.drw_count_no1.getBounds().height) / 2;
    this.container.addChild(this.drw_count_no1)

    let img_no2 = new Image();
    img_no2.src = drw_imgsrc[1].src
    img_no2.onload = function () {
      this.rwfm_no2.cache();
      this.rwfm_no2 = new createjs.Bitmap(img_no2)
      this.rwfm_no2.scaleX = 105 / this.rwfm_no2.getBounds().width;
      this.rwfm_no2.scaleY = 105 / this.rwfm_no2.getBounds().height;
      this.rwfm_no2.x = this.drw_no2.x + (this.drw_no2.getBounds().width - this.rwfm_no2.scaleX * this.rwfm_no2.getBounds().width) / 2;
      this.rwfm_no2.y = this.drw_no2.y + 50;
      this.container.addChild(this.rwfm_no2)
      this.rwfm_no2.mask = this.rw_fm1_mask1;
    }.bind(this)

    this.drw_name_no2.cache();
    this.drw_name_no2 = new createjs.Text(this._setNameIndex(drw_imgsrc[1].name, 7), "32px 微软雅黑", "#eeeeee");
    this.drw_name_no2.x = this.drwX;
    this.drw_name_no2.y = this.drw_no22.y + this.drw_no22.getBounds().height + 20;
    this.container.addChild(this.drw_name_no2)

    this.drw_score_no2.cache();
    this.drw_score_no2 = new createjs.Text(this._setNumChange(drw_imgsrc[1].score), "bold 26px 微软雅黑", "#fef3e0");
    this.drw_score_no2.x = this.drwX;
    this.drw_score_no2.y = this.drw_name_no2.y + this.drw_name_no2.getBounds().height + 10;
    this.container.addChild(this.drw_score_no2)

    this.drw_count_no2.cache();
    this.drw_count_no2 = new createjs.Text("火力值", "18px 微软雅黑", "#fef3e0");
    this.drw_count_no2.x = this.drw_score_no2.x + this.drw_score_no2.getBounds().width + 10;
    this.drw_count_no2.y = this.drw_score_no2.y + (this.drw_score_no2.getBounds().height - this.drw_count_no2.getBounds().height) / 2;
    this.container.addChild(this.drw_count_no2)

    let img_no3 = new Image();
    img_no3.src = drw_imgsrc[2].src
    img_no3.onload = function () {
      this.rwfm_no3.cache();
      this.rwfm_no3 = new createjs.Bitmap(img_no3)
      this.rwfm_no3.scaleX = 105 / this.rwfm_no3.getBounds().width;
      this.rwfm_no3.scaleY = 105 / this.rwfm_no3.getBounds().height;
      this.rwfm_no3.x = this.drw_no3.x + (this.drw_no3.getBounds().width - this.rwfm_no3.scaleX * this.rwfm_no3.getBounds().width) / 2;
      this.rwfm_no3.y = this.drw_no3.y + 40;
      this.container.addChild(this.rwfm_no3)
      this.rwfm_no3.mask = this.rw_fm1_mask2;
    }.bind(this)

    this.drw_name_no3.cache();
    this.drw_name_no3 = new createjs.Text(this._setNameIndex(drw_imgsrc[2].name, 7), "32px 微软雅黑", "#e59850");
    this.drw_name_no3.x = this.drwX;
    this.drw_name_no3.y = this.drw_no33.y + this.drw_no33.getBounds().height + 20;
    this.container.addChild(this.drw_name_no3)

    this.drw_score_no3.cache();
    this.drw_score_no3 = new createjs.Text(this._setNumChange(drw_imgsrc[2].score), "bold 26px 微软雅黑", "#fef3e0");
    this.drw_score_no3.x = this.drwX;
    this.drw_score_no3.y = this.drw_name_no3.y + this.drw_name_no3.getBounds().height + 10;
    this.container.addChild(this.drw_score_no3)

    this.drw_count_no3.cache();
    this.drw_count_no3 = new createjs.Text("火力值", "30px 微软雅黑", "#fef3e0");
    this.drw_count_no3.x = this.drw_score_no3.x + this.drw_score_no3.getBounds().width + 10;
    this.drw_count_no3.y = this.drw_score_no3.y + (this.drw_score_no3.getBounds().height - this.drw_count_no3.getBounds().height) / 2;
    this.container.addChild(this.drw_count_no3)
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

export default SideScreen;