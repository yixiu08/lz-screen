/*
 * Copyright (C) 2016 Bilibili. All Rights Reserved.
 *
 * @author zheng qian <xqq@xqq.im>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Polyfill from './utils/polyfill.js';
import Card from './components/card.js';
import WEBSOCKET from './components/websocket.js'
import SideScreen from './components/sidescreen.js'
import MainScreen from './components/mainscreen.js'
import loadjs from 'loadjs';
import {
  setTimeout, setInterval
} from 'timers';
import axios from "axios"
// here are all the interfaces

// install polyfills
Polyfill.install();

function createStage(...arg) {
  screenjs.stage = arg[0];
  // loadjs(['//player.plures.net/prod/activity/createjs-2015.11.26.min.js'],'foobar');
  // loadjs.ready('foobar',{
  //   success:()=> { 
  console.log('success')
  // screenjs.rankWS=new WEBSOCKET('wss://mbgows.plu.cn:8806/?room_id=238817&group=0');

  screenjs.mainStage = new createjs.Stage(screenjs.stage);
  createjs.Ticker.setFPS(24);
  createjs.Ticker.addEventListener('tick', screenjs.mainStage);
  screenjs.mainStage.update();




  // // },
  // //   error: (depsNotFound)=> {console.log('faile')}
  // // }) 

  // window.addEventListener('resize',function(e){
  //   setTimeout(function(e){
  //     card.changeRank(parseInt(Math.random()*10));
  //     card.pScore=parseInt(Math.random()*1000000000);
  //   }.bind(this),1000)

  // }.bind(this))


  if (arg[1].type == "guapin-left") {
    let c1 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      },
      {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      },
      {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },

      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    let c2 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      }, {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    let c3 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      }, {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    let c4 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      }, {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    let c5 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      }, {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    screenjs.rankWS = new WEBSOCKET('wss://mbgows.plu.cn:8806/?room_id=238817&group=0');
    let card = new Card(screenjs.mainStage, c1);
    card.X = (216);
    let card2 = new Card(screenjs.mainStage, c2);
    card2.X = (432) * 1 + 216;
    let card3 = new Card(screenjs.mainStage, c3);
    card3.X = (432) * 2 + 216;
    let card4 = new Card(screenjs.mainStage, c4);
    card4.X = (432) * 3 + 216;
    let card5 = new Card(screenjs.mainStage, c5);
    card5.X = (432) * 4 + 216;
    card.on('complete', (e) => {
      console.log(22222222222)
      card.pScore = 5555;
      // card.changeRank(0);
      // card.out = true;
      card.changeRank(4);
      screenjs.rankWS.on("onmessage", function (msg) {
        console.log(msg)
      })
    });
  } else if (arg[1].type == "guapin-right") {
    let c1 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      },
      {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      },
      {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },

      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    let c2 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      }, {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    let c3 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      }, {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    let c4 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      }, {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    let c5 = [{
        id: 'bg',
        src: '../src/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '../src/assets/n-1.png'
      }, {
        id: 'perbg',
        src: '../src/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '../src/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '../src/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '../src/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '../src/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '../src/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '../src/assets/ac-logo.png'
      },
    ];
    screenjs.rankWS = new WEBSOCKET('wss://mbgows.plu.cn:8806/?room_id=238817&group=0');
    let card = new Card(screenjs.mainStage, c1);
    card.X = (216);
    let card2 = new Card(screenjs.mainStage, c2);
    card2.X = (432) * 1 + 216;
    let card3 = new Card(screenjs.mainStage, c3);
    card3.X = (432) * 2 + 216;
    let card4 = new Card(screenjs.mainStage, c4);
    card4.X = (432) * 3 + 216;
    let card5 = new Card(screenjs.mainStage, c5);
    card5.X = (432) * 4 + 216;
    card.on('complete', (e) => {
      console.log(22222222222)
      card.pScore = 5555;
      // card.changeRank(0);
      // card.out = true;
      card.changeRank(4);
      screenjs.rankWS.on("onmessage", function (msg) {
        console.log(msg)
      })
    });
  } else if (arg[1].type == "cepin") {
    screenjs.rankWS = new WEBSOCKET('wss://mbgows.plu.cn:8806/?room_id=2207730&group=0');
    let sideConfig = [{
        id: 'bg',
        src: '../src/assets/side-bg.png'
      },
      {
        id: 'bg-a',
        src: '../src/assets/side-bg-a.png'
      },
      {
        id: 'dgh-1',
        src: '../src/assets/side-no1.png'
      },
      {
        id: 'dgh-2',
        src: '../src/assets/side-no2.png'
      },
      {
        id: 'dgh-3',
        src: '../src/assets/side-no3.png'
      },
      {
        id: 'gh-fm',
        src: '../src/assets/ghfm.png'
      },
      {
        id: 'gh-fm1',
        src: '../src/assets/ghfm1.png'
      },
      {
        id: 'gh-fm11',
        src: '../src/assets/side_no1.png'
      },
      {
        id: 'gh-fm22',
        src: '../src/assets/side_no2.png'
      },
      {
        id: 'gh-fm33',
        src: '../src/assets/side_no3.png'
      },
      {
        id: 'drw-1',
        src: '../src/assets/center-no1.png'
      },
      {
        id: 'drw-2',
        src: '../src/assets/center-no2.png'
      },
      {
        id: 'drw-3',
        src: '../src/assets/center-no3.png'
      },
      {
        id: 'rw-fm',
        src: '../src/assets/rwfm.png'
      },
      {
        id: 'gift-item',
        src: '../src/assets/gift-line.png'
      },
      {
        id: 'gift-geren',
        src: '../src/assets/geren.png'
      },
      {
        id: 'gift-gonghui',
        src: '../src/assets/gonghui.png'
      },
      {
        id: 'gift-nahan',
        src: '../src/assets/nahan.png'
      },
    ];
    let sidescreen = new SideScreen(screenjs.mainStage, sideConfig);
    let fmailyurl = "//rankapi.longzhu.com/ranklist/GetEventFamilyRankList";
    let userurl = "//rankapi.longzhu.com/ranklist/GetEventUserRankList";
    sidescreen.on("complete", (e) => {
      screenjs.rankWS.on("onmessage", function (msg) {
        console.log(msg)
        if (msg.type == "gift") {
          let giftData = {
            user: msg.user.username,
            "achor": msg.hostName,
            "count": msg.number,
            "type": "gift-geren",
            "color": "#ffcc00"
          }
          if (msg.itemType == "yzcmgrp") {
            giftData.type = "gift-geren";
            giftData.color = "#ffcc00";
          } else if (msg.itemType == "yzcmghp") {
            giftData.type = "gift-gonghui";
            giftData.color = "#ff6600";
          } else if (msg.itemType == "yzcmmfp") {
            giftData.type = "gift-nahan";
            giftData.color = "#00ccff";
          }
          sidescreen.addGiftItem(giftData)
        }
      }.bind(this))



      axios.get(fmailyurl, {
        params: {
          eventId: 10002,
          startIndex: 0,
          maxResults: 3
        }
      }).then((e) => {
        sidescreen.changeRankDGH(e.data);
      }).catch((e) => {});
      axios.get(userurl, {
        params: {
          eventId: 10002,
          startIndex: 0,
          maxResults: 3
        }
      }).then((e) => {
        sidescreen.changeRankDRW(e.data);
      }).catch((e) => {});
      setInterval(function () {
        axios.get(fmailyurl, {
          params: {
            eventId: 10002,
            startIndex: 0,
            maxResults: 3
          }
        }).then((e) => {
          sidescreen.changeRankDGH(e.data);
        }).catch((e) => {});
        axios.get(userurl, {
          params: {
            eventId: 10002,
            startIndex: 0,
            maxResults: 3
          }
        }).then((e) => {
          sidescreen.changeRankDRW(e.data);
        }).catch((e) => {});
      }.bind(this), 10000)
    })
  } else if (arg[1].type == "zhuping") {
    console.log("主屏")
    let mainConfig = [{
      id: 'bg',
      src: '../src/assets/main-bg.png'
    },{
      id:"kv",
      src:"../src/assets/mainKV.png"
    },{
      id:"allper",
      src:"../src/assets/allPer.png"
    },{
      id:"dm-geren",
      src:"../src/assets/dm-geren.png"
    },{
      id:"dm-gonghui",
      src:"../src/assets/dm-gonghui.png"
    },{
      id:"dm-nahan",
      src:"../src/assets/dm-nahan.png"
    },];
    screenjs.rankWS = new WEBSOCKET('wss://mbgows.plu.cn:8806/?room_id=2207730&group=0');
    let mainScreen=new MainScreen(screenjs.mainStage,mainConfig);
    mainScreen.on("complete",function(){
      console.log("mainScreen complete")
      screenjs.rankWS.on("onmessage", function (msg) {
        // console.log(msg);
        if (msg.type == "gift") {
          let danmuData = {
            "user": msg.user.username,
            "achor": msg.hostName,
            "count": msg.number,
            "type": msg.itemType
          }
          mainScreen.addDanmu(danmuData);
        }

      }.bind(this));
      let online="//roomapicdn.plu.cn/room/getonline"
      axios.get(online, {
        params: {
          roomid: 2207730
        }
      }).then((e) => {
        mainScreen.perNum=e.data.result;
      }).catch((e) => {});
      setInterval(function(){
        axios.get(online, {
          params: {
            roomid: 2207730
          }
        }).then((e) => {
          mainScreen.perNum=e.data.result;
        }).catch((e) => {});
      }.bind(this),60000)
    }.bind(this))
  }
  restScale();
  changeSize();
}


function restScale() {
  let scale = screenjs.stageScale[screenjs.stageindex].w / screenjs.stageScale[screenjs.stageindex].h;
  window.addEventListener('resize', (e) => {
    changeSize();
  })
}

function changeSize() {
  screenjs.stage.width = window.innerWidth;
  screenjs.stage.height = window.innerHeight;
  if (screenjs.stageScale[screenjs.stageindex].w != screenjs.stage.width || screenjs.stageScale[screenjs.stageindex].h != screenjs.stage.height) {
    let a;
    let b = screenjs.stage.width / screenjs.stageScale[screenjs.stageindex].w;
    let c = screenjs.stage.height / screenjs.stageScale[screenjs.stageindex].h;
    if (b > c) {
      a = c;
    } else {
      a = b;
    }
    screenjs.mainStage.scaleX = a;
    screenjs.mainStage.scaleY = a;
  }
}

function test() {

}

// interfaces
let screenjs = {};
screenjs.createStage = createStage;
screenjs.stage = null;
screenjs.test = test;
screenjs.mainStage = null;
screenjs.rankWS = null;
screenjs.stageScale = [{
  "w": 2160,
  "h": 1080
}, {
  "w": 1697,
  "h": 1080
}, {
  "w": 2777,
  "h": 1080
}]
screenjs.stageindex = 2;

Object.defineProperty(screenjs, 'version', {
  enumerable: true,
  get: function () {
    // replaced by browserify-versionify transform
    return '__VERSION__';
  }
});

export default screenjs;