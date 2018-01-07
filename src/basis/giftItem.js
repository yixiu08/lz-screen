import Log from '../utils/logger.js';
import EventEmitter from 'events';

class GiftItem {
  constructor(parent,config,data){
    this.TAG='GiftItem';
    Log.v(this.TAG);
    this.parent=parent;
    this._emitter=new EventEmitter();
    this.bg=new createjs.Container();
    this.load=new createjs.LoadQueue(false);
    this.load.loadManifest(config);
    this.load.on('complete',()=>{
      this.gift_item_bg=new createjs.Bitmap(this.load.getResult('gift-item'));
      this.bg.addChild(this.gift_item_bg);
      this.gift_user=new createjs.Text(this._setNameIndex(data.user,6),"bold 24px 微软雅黑","#ffaa00");
      this.bg.addChild(this.gift_user)
      this.gift_user.x=20;
      this.gift_user.y=this.gift_item_bg.getBounds().height-this.gift_user.getBounds().height>>1;
      this.gift_static=new createjs.Text("赠送","italic 18px 微软雅黑","#cccccc");
      this.bg.addChild(this.gift_static)
      this.gift_static.x= this.gift_user.x+this.gift_user.getBounds().width+10;
      this.gift_static.y=this.gift_user.y+(this.gift_user.getBounds().height-this.gift_static.getBounds().height)
      this.gift_ac=new createjs.Text(this._setNameIndex(data.achor,6),"24px 微软雅黑","#fff3e0");
      this.bg.addChild(this.gift_ac)
      this.gift_ac.x=this.gift_static.x+this.gift_static.getBounds().width+10;
      this.gift_ac.y=this.gift_item_bg.getBounds().height-this.gift_ac.getBounds().height>>1;
      this.gift_num=new createjs.Text(data.count,"bold italic 24px 微软雅黑",data.color);
      this.bg.addChild(this.gift_num);
     
      this.gift_num.y=this.gift_item_bg.getBounds().height-this.gift_num.getBounds().height>>1;
      this.gift_x=new createjs.Text("x","italic 18px 微软雅黑",data.color);
      this.bg.addChild(this.gift_x);
     
      this.gift_x.y=this.gift_num.y+(this.gift_num.getBounds().height-this.gift_x.getBounds().height)/2
      this.gift_mask=new createjs.Shape();
      this.gift_mask.graphics.beginFill("#f00").drawCircle(0, 0, 30);
      this.bg.addChild(this.gift_mask);
      this.gift_icon=new createjs.Bitmap(this.load.getResult(data.type));
      this.gift_icon.scaleX=60/ this.gift_icon.getBounds().width;
      this.gift_icon.scaleY=60/ this.gift_icon.getBounds().height;
     
      this.gift_icon.y=this.gift_item_bg.getBounds().height-60>>1;
      this.bg.addChild(this.gift_icon);

      this.gift_num.x= this.gift_item_bg.getBounds().width-this.gift_x.getBounds().width-this.gift_icon.getBounds().width+20 //370;
      this.gift_x.x= this.gift_num.x+this.gift_num.getBounds().width+10;
      this.gift_icon.x=this.gift_x.x+this.gift_x.getBounds().width+10;

      this.gift_mask.alpha=0;
      this.gift_mask.x=this.gift_icon.x+30;
      this.gift_mask.y=this.gift_icon.y+30;
      this.gift_icon.mask=this.gift_mask;
    
      this._emitter.emit("complete");
    });
    this.parent.addChild(this.bg)
  }

  _setNameIndex(data,index){
    if(data.length>index){
      return data.slice(0,index-1)+'...'
    }
    return data 
  }

  run(){
    createjs.Tween.get(this.bg, {override:true})
    .to({y:this.Y-156}, 1000)
    .call(function(){
      Log.v(this.TAG,this.Y)
      if(this.Y &&this.Y<-110 &&this._emitter){
        this._emitter.emit("destroy");
      }
    }.bind(this))
  }

  get X(){
    return this.bg.x;
  }
  set X(value){
    this.bg.x=value;
  }

  get Y(){
    return this.bg.y;
  }
  set Y(value){
    this.bg.y=value;
  }

  destroy(){
    this._emitter.removeAllListeners();
    this._emitter = null;
    this.bg.removeAllChildren();
    this.bg.removeAllEventListeners();
    this.gift_item_bg=null;
    this.gift_user=null;
    this.gift_static=null;
    this.gift_ac=null;
    this.gift_num=null;
    this.gift_x=null;
    this.gift_mask=null;
    this.gift_icon=null;
    // this.bg.cache();
  }

  on(event, listener) {
    this._emitter.addListener(event, listener);
  }
  off(event, listener) {
    this._emitter.removeListener(event, listener);
  }
}
export default GiftItem;