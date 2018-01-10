import Log from '../utils/logger.js';

class BigGift {
  constructor(parent) {
    this.TAG = 'BigGift';
    Log.v(this.TAG);
    this.stage = parent;
    this.geren = new createjs.Container(); //个人
    this.playing = false; //当前是否有动画正在播放
    this.giftArr = []; //大额礼物数组
    this.imagesNumber = [];
    for (let kk = 0; kk < 10; kk++) {
      for (let qq = 0; qq < 120; qq++) {
        if (qq.toString().length == 1) {
          this.imagesNumber.push("//player.plures.net/prod/activity/yzcm2017/yasuo/" + kk + "/" + kk + "00" + qq + ".png")
        } else if (qq.toString().length == 2) {
          this.imagesNumber.push("//player.plures.net/prod/activity/yzcm2017/yasuo/" + kk + "/" + kk + "0" + qq + ".png")
        } else if ((qq.toString().length == 3)) {
          this.imagesNumber.push("//player.plures.net/prod/activity/yzcm2017/yasuo/" + kk + "/" + kk + "" + qq + ".png")
        }
      }
    }
    this.imagesType = [];
    for (let kk = 0; kk < 146; kk++) {
      if (kk.toString().length == 1) {
        this.imagesType.push("//player.plures.net/prod/activity/yzcm2017/yasuo/BG-geren/" + "BG-geren00" + kk + ".png")
      } else if (kk.toString().length == 2) {
        this.imagesType.push("//player.plures.net/prod/activity/yzcm2017/yasuo/BG-geren/" + "BG-geren0" + kk + ".png")
      } else if ((kk.toString().length == 3)) {
        this.imagesType.push("//player.plures.net/prod/activity/yzcm2017/yasuo/BG-geren/" + "BG-geren" + kk + ".png")
      }
    }
    for (let kk = 0; kk < 146; kk++) {
      if (kk.toString().length == 1) {
        this.imagesType.push("//player.plures.net/prod/activity/yzcm2017/yasuo/BG-gonghui/" + "BG-gonghui00" + kk + ".png")
      } else if (kk.toString().length == 2) {
        this.imagesType.push("//player.plures.net/prod/activity/yzcm2017/yasuo/BG-gonghui/" + "BG-gonghui0" + kk + ".png")
      } else if ((kk.toString().length == 3)) {
        this.imagesType.push("//player.plures.net/prod/activity/yzcm2017/yasuo/BG-gonghui/" + "BG-gonghui" + kk + ".png")
      }
    }
    this.getAllBg();
    this.getAllNum();

    this.stage.addChild(this.geren);
    this.geren.x = 40;
    setInterval(function () {
      if (this.giftArr.length && !this.playing) {
        let one = this.giftArr.shift();
        this.playBigAnimation(one.count, one.type, one.user, one.achor)
      }
    }.bind(this), 2000)
    // setInterval(function () {
    //   this.addBigGift({
    //     count: parseInt(11111),
    //     type: Math.random() > 0.5 ? 0 : 1,
    //     user: "h哈哈哈哈",
    //     achor: "h呵呵呵呵呵"
    //   })
    // }.bind(this), 500)
  }

  addBigGift(data) {
    this.giftArr.push(data)
  }

  //播放动画
  playBigAnimation(num, type, username, achorname) {
    this.playing = true;
    let bgSpr = this.getBgSpriteSheet(type)
    let gift_type = new createjs.Sprite(bgSpr, "0");
    if (!bgSpr.complete) {
      bgSpr.on("complete", () => {
        this.geren.alpha = 1;
        this.geren.addChildAt(gift_type, 0);
        gift_type.gotoAndStop(0)
        setTimeout(() => {
          gift_type.gotoAndPlay(0)
          this.getNumAnimation(num, this.geren)
          this.showName(username, achorname)
        }, 1000);
      })
    } else {
      this.geren.alpha = 1;
      this.geren.addChildAt(gift_type, 0);
      gift_type.gotoAndStop(0)
      setTimeout(() => {
        gift_type.gotoAndPlay(0)
        this.getNumAnimation(num, this.geren)
        this.showName(username, achorname)
      }, 1000);
    }

  }

  showName(user, achor) {
    let image = new Image()
    image.src = "//player.plures.net/prod/activity/yzcm2017/assets/hello.png";
    image.onload = function () {
      let imgname = new createjs.Container();
      this.geren.addChild(imgname);
      let img = new createjs.Bitmap(image);
      imgname.addChild(img);
      let uname = new createjs.Text(this._setNameIndex(user, 6), "21px 微软雅黑", "#ffcc66");
      let songgei = new createjs.Text("送给", "17.5px 微软雅黑", "#fff");
      let aname = new createjs.Text(this._setNameIndex(user, 6), "21px 微软雅黑", "#ffcc66");
      imgname.addChild(uname)
      imgname.addChild(songgei)
      imgname.addChild(aname)

      img.x = (1000 - img.getBounds().width) / 2 - 25;
      songgei.x = (1000 - songgei.getBounds().width) / 2 - 25;
      uname.x = songgei.x - 20 - uname.getBounds().width;
      aname.x = songgei.x + 20 + songgei.getBounds().width;

      songgei.y = img.getBounds().height - songgei.getBounds().height >> 1;
      uname.y = img.getBounds().height - uname.getBounds().height >> 1;
      aname.y = img.getBounds().height - aname.getBounds().height >> 1;

      imgname.y = 875;
      imgname.alpha = 0;
      createjs.Tween.get(imgname, {
          override: true
        })
        .to({
          alpha: 1
        }, 1000)
        .call(function () {

        }.bind(this));
    }.bind(this)

  }
  _setNameIndex(data, index) {
    if (data.length > index) {
      return data.slice(0, index - 1) + '...'
    }
    return data
  }

  ///大额动画上的礼物数字
  getNumAnimation(value, screen) {
    for (let hh = 0; hh < value.toString().length; hh++) {
      let numSpr = this.getNumSpriteSheet(value.toString().slice(hh, hh + 1))
      let num = new createjs.Sprite(numSpr, "0");
      if (!numSpr.complete) {
        numSpr.on("complete", () => {
          num.x = 305 * hh / 2 + (1000 - (value.toString().length + 1) * (305 / 2)) / 2;
          num.y = (1000 - 302) / 2
          screen.addChild(num);
          num.gotoAndStop(0)
          setTimeout(() => {
            num.gotoAndPlay(0)
          }, 500 * hh);
          if (hh == value.toString().length - 1) {
            let giftEnd = function (e) {
              if (e.target.currentFrame >= 119) {
                e.target.removeEventListener("tick", giftEnd);
                createjs.Tween.get(this.geren, {
                    override: true
                  })
                  .to({
                    alpha: 0
                  }, 1000)
                  .call(function () {
                    this.playing = false;
                    this.geren.removeAllChildren()
                  }.bind(this));
              }
            }.bind(this)
            num.addEventListener("tick", giftEnd);
          }
        })
      } else {
        num.x = 305 * hh / 2 + (1000 - (value.toString().length + 1) * (305 / 2)) / 2;
        num.y = (1000 - 302) / 2
        screen.addChild(num);
        num.gotoAndStop(0)
        setTimeout(() => {
          num.gotoAndPlay(0)
        }, 500 * hh);
        if (hh == value.toString().length - 1) {
          let giftEnd = function (e) {
            if (e.target.currentFrame >= 119) {
              e.target.removeEventListener("tick", giftEnd);
              createjs.Tween.get(this.geren, {
                  override: true
                })
                .to({
                  alpha: 0
                }, 1000)
                .call(function () {
                  this.playing = false;
                  this.geren.removeAllChildren()
                }.bind(this));
            }
          }.bind(this)
          num.addEventListener("tick", giftEnd);
        }
      }


    }
  }

  getNumSpriteSheet(value) {
    switch (value) {
      case "0":
        return this.num0;
        break
      case "1":
        return this.num1;
        break
      case "2":
        return this.num2;
        break
      case "3":
        return this.num3;
        break
      case "4":
        return this.num4;
        break
      case "5":
        return this.num5;
        break
      case "6":
        return this.num6;
        break
      case "7":
        return this.num7;
        break
      case "8":
        return this.num8;
        break
      case "9":
        return this.num9;
        break
    }
    // let num = new createjs.SpriteSheet({
    //   "images": this.imagesNumber.slice(value * 120, 120 * (value + 1)),
    //   "frames": {
    //     "height": 302,
    //     "width": 301,
    //     "count": 120
    //   },
    //   "animations": {
    //     "0": [0, 119]
    //   }
    // });
    // return num
  }

  getAllBg() {
    this.bg_geren = new createjs.SpriteSheet({
      "images": this.imagesType.slice(0 * 146, 146 * (0 + 1)),
      "frames": {
        "height": 1000,
        "width": 1000,
        "count": 146
      },
      "animations": {
        "0": [0, 145]
      }
    })
    this.bg_gonghui = new createjs.SpriteSheet({
      "images": this.imagesType.slice(1 * 146, 146 * (1 + 1)),
      "frames": {
        "height": 1000,
        "width": 1000,
        "count": 146
      },
      "animations": {
        "0": [0, 145]
      }
    })
  }
  getAllNum() {
    this.num0 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(0 * 120, 120 * (0 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    this.num1 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(1 * 120, 120 * (1 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    this.num2 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(2 * 120, 120 * (2 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    this.num3 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(3 * 120, 120 * (3 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    this.num4 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(4 * 120, 120 * (4 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    this.num5 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(5 * 120, 120 * (5 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    this.num6 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(6 * 120, 120 * (6 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    this.num7 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(7 * 120, 120 * (7 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    this.num8 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(8 * 120, 120 * (8 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    this.num9 = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(9 * 120, 120 * (9 + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
  }

  getBgSpriteSheet(value) {
    if (value == 0) {
      return this.bg_geren;
    } else if (value == 1) {
      return this.bg_gonghui;
    }
    // let bg = new createjs.SpriteSheet({
    //   "images": this.imagesType.slice(value * 146, 146 * (value + 1)),
    //   "frames": {
    //     "height": 1000,
    //     "width": 1000,
    //     "count": 146
    //   },
    //   "animations": {
    //     "0": [0, 145]
    //   }
    // })
    // return bg
  }
}
export default BigGift;