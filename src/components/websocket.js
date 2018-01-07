import Log from '../utils/logger.js';
import EventEmitter from 'events';
class websocket {
  constructor(url){
    this.TAG='WEBSOCKET';
    this._url=url;
    this.errtimes=[3000,10000,60000,300000,600000];
    this.errcount=0;
    this._emitter=new EventEmitter();
    Log.v(this.TAG);
   
    this.ws = new WebSocket(this._url);
    
    this.ws.onopen = ()=>{  
      Log.v(this.TAG,'open');
      this._emitter.emit('onopen');
    };
    this.ws.onmessage = (evt)=>{
      // Log.v(this.TAG,evt.data)
      this._emitter.emit('onmessage',evt.data);
    };
    this.ws.onclose = (evt)=>{
      Log.w(this.TAG,'WebSocketClosed!'+evt);
      this.errcount++;
      this._emitter.emit('onclose');
    };
    this.ws.onerror =(evt)=>{
      Log.e(this.TAG,'WebSocketError!'+evt);
      this.errcount++;
      this._emitter.emit('onerror');
    };

    this.on('onclose',this.reConnection.bind(this));
    this.on('onerror',this.reConnection.bind(this));
  
  }

  reConnection(evt){
    this.ws.close();
    this.ws=null;
    setTimeout(function(){
      this.ws = new WebSocket(this._url);
      this.ws.onopen = ()=>{  
        Log.v(this.TAG,'open');
        this._emitter.emit('onopen');
      };
      this.ws.onmessage = (evt)=>{
        // Log.v(this.TAG,evt.data)
        this._emitter.emit('onmessage',evt.data);
      };
      this.ws.onclose = (evt)=>{
        Log.w(this.TAG,'WebSocketClosed!'+evt);
        this.errcount++;
        this._emitter.emit('onclose');
      };
      this.ws.onerror =(evt)=>{
        Log.e(this.TAG,'WebSocketError!'+evt);
        this.errcount++;
        this._emitter.emit('onerror');
      };
    }.bind(this),this.errtimes[this.errcount>4?4:this.errcount])
  }

  destroy(){
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
export default websocket;