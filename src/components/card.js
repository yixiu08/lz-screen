import Log from '../utils/logger.js';
import EventEmitter from 'events';

class Card {
  constructor(parent, config, data, fire) {

    this.firePng = [];
    for (let kk = 1; kk < 5; kk++) {
      for (let qq = 0; qq < 100; qq++) {
        if (qq.toString().length == 1) {
          this.firePng.push("../../firepng/" + kk + "/" + kk + "_100" + qq + ".png")
        } else if (qq.toString().length == 2) {
          this.firePng.push("../../firepng/" + kk + "/" + kk + "_10" + qq + ".png")
        } else if ((qq.toString().length == 3)) {
          this.firePng.push("../../firepng/" + kk + "/" + kk + "_1" + qq + ".png")
        }
      }
    }

    console.log(this.firePng.slice(100,200))
    this.firesheet1 = new createjs.SpriteSheet({
      "images": this.firePng.slice(0,100),
      "frames": {
        "height": 1080,
        "width": 432,
        "count": 100
      },
      "animations": {
        "0": [0, 99],
      }
    });
    this.firesheet2 = new createjs.SpriteSheet({
      "images": this.firePng.slice(100,200),
      "frames": {
        "height": 1080,
        "width": 432,
        "count": 100
      },
      "animations": {
        "0": [0, 99],
      }
    });
    this.firesheet3 = new createjs.SpriteSheet({
      "images": this.firePng.slice(200,300),
      "frames": {
        "height": 1080,
        "width": 432,
        "count": 100
      },
      "animations": {
        "0": [0, 99],
      }
    });
    this.firesheet4 = new createjs.SpriteSheet({
      "images": this.firePng.slice(300,400),
      "frames": {
        "height": 1080,
        "width": 432,
        "count": 100
      },
      "animations": {
        "0": [0, 99],
      }
    });

    console.log(this.firesheet)
    this.firesheet1.on("complete",function(e){
      console.log("下载完成啦");
    }.bind(this))
    this.num1=new createjs.Sprite(this.firesheet1,"0");
    this.num2=new createjs.Sprite(this.firesheet2,"0");
    this.num3=new createjs.Sprite(this.firesheet3,"0");
    this.num4=new createjs.Sprite(this.firesheet4,"0");


    this._width = null;
    this._height = null;
    this.score = null; //分数
    this.bscore = null; //背面分数
    this.pname = null; //人名
    this.rnumrnum = null; //排名
    this.rnumb = null;
    this.rankbg = null; //排名背景
    this.container = null;
    this.ranknow = null; //当前排名
    this.bgb_ranknum = null; //背面排名
    this.rankNumber = 0; //火力值
    this.death = false; //被没被淘汰
    this.ROOMID = data.roomid;
    let ac_name = data.name; //主播名字
    this.fire = fire;

    this.TAG = 'Card';
    this._emitter = new EventEmitter();
    Log.v(this.TAG);
    this.container = new createjs.Container(); //总容器
    this.bga = new createjs.Container(); //正面卡片容器
    this.bgb = new createjs.Container(); //背面卡片容器
    this.bga.visible = true;
    this.bgb.visible = false;
    this.bgb.scaleX = -1;

    this.imgsrc = config;

    this.container.addChild(this.bga);
    this.container.addChild(this.bgb);

    this.load = new createjs.LoadQueue(false);
    this.load.loadManifest(this.imgsrc);
    this.load.on('complete', () => {
      //正面背景
      let bg = new createjs.Bitmap(this.load.getResult('bg'));
      this._width = 432;
      this._height = 1080;
      bg.x = -this._width / 2;
      bg.y = 0;
      this.bga.addChild(bg);
      //特效
      this.video = new createjs.Container();
      this.video.x = -this._width / 2;
      this.bga.addChild(this.video)
      if (this.video && this.video.numChildren) {
        this.video.removeAllChildren();
      }
      this.video.addChild(this.num4)
      //背面背景
      let bbg = new createjs.Bitmap(this.load.getResult('bg-b'));
      console.log(bbg.getBounds());
      bbg.x = -this._width / 2;
      bbg.y = 0;
      this.bgb.addChild(bbg);
      //背面龙珠logo
      let bbg_logo = new createjs.Bitmap(this.load.getResult('logo-lz'));
      bbg_logo.x = -bbg_logo.getBounds().width / 2 + bbg.x + this._width / 2;
      bbg_logo.y = 90;
      this.bgb.addChild(bbg_logo);
      //背面活动logo
      let bbg_ac_logo = new createjs.Bitmap(this.load.getResult('ac-logo'));
      bbg_ac_logo.x = -bbg_ac_logo.getBounds().width / 2 + bbg.x + this._width / 2;
      bbg_ac_logo.y = 240;
      this.bgb.addChild(bbg_ac_logo);
      //背面人物名字背景
      let bbg_nbg = new createjs.Bitmap(this.load.getResult('nameBg-b'));
      bbg_nbg.x = -bbg_nbg.getBounds().width / 2 + bbg.x + this._width / 2;
      bbg_nbg.y = 620;
      this.bgb.addChild(bbg_nbg);
      //背面人物名字
      let bbg_pn = new createjs.Text(ac_name, "bold 52px 微软雅黑", "#fff");
      bbg_pn.x = -bbg_pn.getBounds().width / 2 + bbg.x + this._width / 2;
      bbg_pn.y = bbg_nbg.y;
      this.bgb.addChild(bbg_pn);
      //背面排名
      let bg_ranks = new createjs.SpriteSheet({
        "images": ["//player.plures.net/prod/activity/yzcm2017/assets/ranknumb.png"],
        "frames": {
          "height": 70,
          "width": 180,
          "count": 10
        },
        "animations": {
          "run": [0, 9]
        }
      });
      //背面排名
      this.bgb_ranknum = new createjs.Sprite(bg_ranks);
      this.bgb_ranknum.x = -180 / 2 + bbg.x + this._width / 2;
      this.bgb_ranknum.y = 800;
      this.bgb_ranknum.gotoAndStop(0);
      this.bgb.addChild(this.bgb_ranknum);
      //背面火力值
      let h2 = new createjs.Text("火力值", "26px 微软雅黑", "#fff");
      h2.alpha = 0.6;
      h2.x = -h2.getBounds().width / 2 + bbg.x + this._width / 2;
      h2.y = this.bgb_ranknum.y + 70 + 20;
      this.bgb.addChild(h2);
      //背面分数
      this.bscore = new createjs.Text(this._setNumChange(this.rankNumber), "bold 40px 微软雅黑", "#fff");
      this.bscore.x = -this.bscore.getBounds().width / 2 + bbg.x + this._width / 2;
      this.bscore.y = h2.y + h2.getBounds().height + 20;
      this.bgb.addChild(this.bscore);
      //人物照片
      let per = new createjs.Bitmap(this.load.getResult('persion'));
      per.scaleX = 432 / per.getBounds().width;
      per.scaleY = 1080 / per.getBounds().height;
      per.x = -per.getBounds().width * per.scaleX >> 1;
      // per.y = this._height - per.getBounds().height;
      this.bga.addChild(per);

      let permask = new createjs.Bitmap(this.load.getResult("perbg"));
      permask.x = -permask.getBounds().width >> 1;
      permask.y = this._height - permask.getBounds().height;
      this.bga.addChild(permask)

      //火力值背景图
      let rankbgs = new createjs.SpriteSheet({
        "images": ["//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png"],
        "frames": {
          "height": 237,
          "width": 432,
          "count": 4
        },
        "animations": {
          "run": [0, 3]
        }
      });
      this.rankbg = new createjs.Sprite(rankbgs);
      this.bga.addChild(this.rankbg);
      this.rankbg.x = -432 >> 1;
      this.rankbg.y = this._height - 237;
      this.bga.addChild(this.rankbg);
      this.rankbg.gotoAndStop(0);
      //人物名字背景
      let perBg = new createjs.Bitmap(this.load.getResult('nameBg'));
      perBg.x = this._width - perBg.getBounds().width - this._width >> 1;
      perBg.y = this.rankbg.y - perBg.getBounds().height - 20;
      this.bga.addChild(perBg);

      this.pname = new createjs.Text(ac_name, "bold 60px 微软雅黑", "#fff");
      this.pname.x = -this.pname.getBounds().width >> 1;
      this.pname.y = perBg.y;
      this.bga.addChild(this.pname);

      let hl = new createjs.Text("火力值", "40px 微软雅黑", "#fff");
      this.bga.addChild(hl);
      hl.alpha = 0.6;
      hl.x = this._width - hl.getBounds().width - this._width >> 1;
      hl.y = this.rankbg.y + 70;

      this.score = new createjs.Text(this._setNumChange(this.rankNumber), "bold 54px 微软雅黑", "#fff");
      this.bga.addChild(this.score);
      this.score.x = -this.score.getBounds().width >> 1;
      this.score.y = this._height - this.score.getBounds().height - 30;
      //分数上的遮罩层
      let maskshape = new createjs.Shape()
      maskshape.graphics.beginFill("#f00").drawRect(0, -10, 282, 330);
      maskshape.x = -282 >> 1;
      maskshape.y = perBg.y - 330;
      this.bga.addChild(maskshape)
      maskshape.alpha = 0;
      //1-10的排名
      let ranknums = new createjs.SpriteSheet({
        "images": ["//player.plures.net/prod/activity/yzcm2017/assets/ranknum.png"],
        "frames": {
          "height": 165,
          "width": 282,
          "count": 10
        },
        "animations": {
          "run": [0, 9]
        }
      });

      this.rnumb = new createjs.Sprite(ranknums);
      this.bga.addChild(this.rnumb);
      this.rnumb.x = -282 >> 1;
      this.rnumb.y = perBg.y;
      this.rnumb.mask = maskshape;
      this.rnumb.gotoAndStop(0);

      this.rnum = new createjs.Sprite(ranknums);
      this.bga.addChild(this.rnum);
      this.rnum.x = -282 >> 1;
      this.rnum.y = perBg.y - 165;
      this.rnum.mask = maskshape;

      this._emitter.emit('complete');
    });
    parent.addChild(this.container);
  }

  _setNumChange(data) {
    return parseFloat((data).toString()).toLocaleString();
  }

  changeRank(value) {
    if (this.ranknow == value) return
    console.log("aaaaaaaaaaaaaaa",this.video.numChildren)
    this.ranknow = value;
    value = value - 1;
    if (this.video && this.video.numChildren) {
      this.video.removeAllChildren();
    }
    if(value==0){
      this.video.addChild(this.num1)
    }else if(value==1){
      this.video.addChild(this.num2)
    }else if(value==2){
      this.video.addChild(this.num3)
    }else if(value>2){
      this.video.addChild(this.num4)
    }
    
    if (this.rnum) {
      this.rnumb.gotoAndStop(value)
      if (value > 2) {
        this.rankbg.gotoAndStop(3);
      } else {
        this.rankbg.gotoAndStop(value);
      }
      createjs.Tween.get(this.rnum, {
          override: true
        })
        .to({
          y: 733 - 330,
          alpha: 0
        }, 1000)
        .call(function () {
          this.rnum.gotoAndStop(value);
          this.bgb_ranknum.gotoAndStop(value)
          this.rnum.alpha = 1;
          this.rnum.y = 733 - 165;
        }.bind(this));
      this.rnumb.alpha = 0;
      createjs.Tween.get(this.rnumb, {
          override: true
        })
        .to({
          y: 733 - 165,
          alpha: 1
        }, 1000)
        .call(function () {
          createjs.Tween.get(this.rnumb, {
            override: true
          })
          this.rnumb.y = 733;
        }.bind(this));
    }
  }

  get out() {
    return this.death;
  }
  set out(bool) {
    this.death = bool;
    if (this.death) {
      let ra = 1;
      let rb = -1;
      let rotation = setInterval(function () {
        if (ra <= 0.1) {
          this.bga.visible = false;
          this.bgb.visible = true;
        } else {
          ra -= 0.1
        }
        if (rb >= 1) {
          clearInterval(rotation)
          rb=1;
        } else {
          rb += 0.1;
        }
        this.bga.scaleX = ra;
        this.bgb.scaleX = rb;
      }.bind(this), 50)
    }
  }

  get visible() {
    return this.container.visible;
  }
  set visible(bool) {
    this.container.visible = bool;
  }

  get X() {
    return this.container.x;
  }
  set X(value) {
    this.container.x = value;
  }

  get Y() {
    return this.container.y;
  }
  set Y(value) {
    this.container.y = value;
  }

  get pScore() {
    return this.score.text;
  }

  set pScore(data) {
    this.rankNumber = data;
    if (this.score) {
      this.score.text = this._setNumChange(this.rankNumber);
      this.score.x = -this.score.getBounds().width >> 1;

      this.bscore.text = this._setNumChange(this.rankNumber);
      this.bscore.x = -this.bscore.getBounds().width >> 1;
    }

  }

  get height() {
    return this._height;
  }
  get width() {
    return this._width;
  }

  get roomid() {
    return this.ROOMID;
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
export default Card;