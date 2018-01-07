import Log from '../utils/logger.js';

class BigGift {
  constructor(parent) {
    this.TAG = 'BigGift';
    Log.v(this.TAG);
    this.stage = parent;
    this.geren = new createjs.Container(); //个人
    this.gonghui = new createjs.Container(); //公会

    this.imagesNumber = [];
    for (let kk = 0; kk < 10; kk++) {
      for (let qq = 0; qq < 120; qq++) {
        if (qq.toString().length == 1) {
          this.imagesNumber.push("../src/yasuo/" + kk + "/" + kk + "00" + qq + ".png")
        } else if (qq.toString().length == 2) {
          this.imagesNumber.push("../src/yasuo/" + kk + "/" + kk + "0" + qq + ".png")
        } else if ((qq.toString().length == 3)) {
          this.imagesNumber.push("../src/yasuo/" + kk + "/" + kk + "" + qq + ".png")
        }
      }
    }
    this.imagesType = [];
    for (let kk = 0; kk < 146; kk++) {
      if (kk.toString().length == 1) {
        this.imagesType.push("../src/yasuo/BG-geren/" + "BG-geren00" + kk + ".png")
      } else if (kk.toString().length == 2) {
        this.imagesType.push("../src/yasuo/BG-geren/" + "BG-geren0" + kk + ".png")
      } else if ((kk.toString().length == 3)) {
        this.imagesType.push("../src/yasuo/BG-geren/" + "BG-geren" + kk + ".png")
      }
    }
    for (let kk = 0; kk < 146; kk++) {
      if (kk.toString().length == 1) {
        this.imagesType.push("../src/yasuo/BG-gonghui/" + "BG-gonghui00" + kk + ".png")
      } else if (kk.toString().length == 2) {
        this.imagesType.push("../src/yasuo/BG-gonghui/" + "BG-gonghui0" + kk + ".png")
      } else if ((kk.toString().length == 3)) {
        this.imagesType.push("../src/yasuo/BG-gonghui/" + "BG-gonghui" + kk + ".png")
      }
    }
    this.stage.addChild(this.geren);
    this.geren.x=40;
    this.stage.addChild(this.gonghui);
    // this.getNumAnimation(335544, this.geren)
    let aaa = new createjs.Sprite(this.getBgSpriteSheet(0),"0");
    this.getBgSpriteSheet(0).on("complete",()=>{
      this.geren.addChildAt(aaa,0);
      aaa.gotoAndStop(0)
      setTimeout(() => {
        aaa.gotoAndPlay(0)
        this.getNumAnimation(335544, this.geren)
      }, 100);
      let giftEnd=(e)=>{
        if(e.target.currentFrame>=145){
          aaa.removeEventListener("tick", giftEnd);
          this.geren.removeAllChildren()
          aaa=null;
          this.geren.cache();
        }
      }
      // aaa.addEventListener("tick",giftEnd);
    })
  }

  getNumAnimation(value, screen) {
    for (let hh = 0; hh < value.toString().length; hh++) {
      let num = new createjs.Sprite(this.getNumSpriteSheet(value.toString().slice(hh, hh + 1)), "0");
      this.getNumSpriteSheet(value.toString().slice(hh, hh + 1)).on("complete", () => {
        num.x = 305 * hh / 2+(1000-(value.toString().length+1)*(305/2))/2;
        num.y=(1000-302)/2
        screen.addChild(num);
        num.gotoAndStop(0)
        setTimeout(() => {
          num.gotoAndPlay(0)
        }, 500 * hh);
        if(hh==value.toString().length-1){
          let giftEnd=function(e){
            if(e.target.currentFrame>=119){
              e.target.removeEventListener("tick", giftEnd);
              setTimeout(function() {
                this.geren.removeAllChildren()
                this.geren.cache();
              }.bind(this), 1000);
           
            }
          }.bind(this)
          num.addEventListener("tick",giftEnd);
        }
      })

    }
  }

  getNumSpriteSheet(value) {
    let num = new createjs.SpriteSheet({
      "images": this.imagesNumber.slice(value * 120, 120 * (value + 1)),
      "frames": {
        "height": 302,
        "width": 301,
        "count": 120
      },
      "animations": {
        "0": [0, 119]
      }
    });
    return num
  }

  getBgSpriteSheet(value) {
    let bg = new createjs.SpriteSheet({
      "images": this.imagesType.slice(value * 146, 146 * (value + 1)),
      "frames": {
        "height": 1000,
        "width": 1000,
        "count": 146
      },
      "animations": {
        "0": [0, 145]
      }
    })
    return bg
  }
}
export default BigGift;