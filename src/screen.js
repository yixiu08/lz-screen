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
  setTimeout,
  setInterval
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
  screenjs.env = arg[1].env;



  // // },
  // //   error: (depsNotFound)=> {console.log('faile')}
  // // }) 

  // window.addEventListener('resize',function(e){
  //   setTimeout(function(e){
  //     card.changeRank(parseInt(Math.random()*10));
  //     card.pScore=parseInt(Math.random()*1000000000);
  //   }.bind(this),1000)

  // }.bind(this))


  if (arg[1].type == "guaping-left") {
    screenjs.stageindex = 0;
    let c1 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/aimijiang.png'
      },
      {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      },
      {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },

      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let c2 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/xiaotxiantao.png'
      }, {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let c3 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/baozi.png'
      }, {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let c4 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/polang.png'
      }, {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let c5 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/xiaotianbing.png'
      }, {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let rankFire = [];
    for (let num = 1; num < 5; num++) {
      let rank = document.createElement("video");
      rank.src = "//player.plures.net/prod/activity/yzcm2017/sp/" + num + ".mp4"
      rank.autoplay = true;
      rank.loop = true;
      rankFire.push(rank)
    }
    screenjs.rankWS = new WEBSOCKET(screenjs.env == "test" ? "wss://mbgows.plu.cn:8806/?room_id=8565&group=0" : 'wss://mbgows.plu.cn:8806/?room_id=238817&group=0');
    let dataArr = [{
      name: "艾米酱",
      "roomid": 16085
    }, {
      name: "小仙桃",
      "roomid": 2079594
    }, {
      name: "包子",
      "roomid": 613784
    }, {
      name: "一匹破狼",
      "roomid": 439499
    }, {
      name: "小甜饼",
      "roomid": 1847037
    }];
    if (screenjs.env == "test") {
      dataArr = [{
        name: "白鲨",
        "roomid": 8895
      }, {
        name: "Vivi.道祺",
        "roomid": 904104
      }, {
        name: "艾伦..",
        "roomid": 895507
      }, {
        name: "上善若水",
        "roomid": 924300
      }, {
        name: "PE谭校长",
        "roomid": 957460
      }];
    }
    let card = new Card(screenjs.mainStage, c1, dataArr[0], rankFire);
    card.X = (216);
    let card2 = new Card(screenjs.mainStage, c2, dataArr[1], rankFire);
    card2.X = (432) * 1 + 216;
    let card3 = new Card(screenjs.mainStage, c3, dataArr[2], rankFire);
    card3.X = (432) * 2 + 216;
    let card4 = new Card(screenjs.mainStage, c4, dataArr[3], rankFire);
    card4.X = (432) * 3 + 216;
    let card5 = new Card(screenjs.mainStage, c5, dataArr[4], rankFire);
    card5.X = (432) * 4 + 216;
    card.on('complete', (e) => {
      // card.pScore = 5555;
      // card.changeRank(0);
      // card.out = true;
      // card.changeRank(4);
    }, rankFire);
    screenjs.rankWS.on("onmessage", function (msg) {
      // msg='{"id":24829205951297,"type":"eventroomrank","msg":{"f":[],"phaseId":17,"groupId":23,"line":10,"total":10,"items":[{"roomId":1847037,"score":433687,"rank":1,"name":"一个磨人的小甜饼","domain":"xiaotianbing","avatar":"http://img2.plures.net/users/avatar/052/646/985/52646985/822d95408282df3dc3b91607698bc5b7.jpg","userId":52646985,"grade":38,"isLive":false},{"roomId":2218344,"score":400873,"rank":2,"name":"龙奇丶婧baby","domain":"m170111","avatar":"http://pic.plures.net/users/avatar/010/908/977/10908977/2d2ab2dc5228a39653f65a72ad5e1b20.jpg","userId":10908977,"grade":29,"isLive":false},{"roomId":1466603,"score":202766,"rank":3,"name":"我是金禾","domain":"x103005","avatar":"http://pic.plures.net/d7a1/1e20/cc64/93c7/88f4/c50a/e379/ca8a.avatar","userId":52238348,"grade":40,"isLive":false},{"roomId":439499,"score":199084,"rank":4,"name":"一匹破狼","domain":"170170","avatar":"http://img2.plures.net/users/avatar/032/888/164/32888164/ce7a034f582d6965f67de5afd15e346d.jpg","userId":32888164,"grade":28,"isLive":false},{"roomId":125348,"score":143877,"rank":5,"name":"心爱Sia","domain":"z160454","avatar":"http://img2.plures.net/users/avatar/011/173/427/11173427/a764b0771c9eb06794ad4a7f44706a77.jpg","userId":11173427,"grade":24,"isLive":false},{"roomId":1511916,"score":99612,"rank":6,"name":"综皇 小锐雯","domain":"153014","avatar":"http://pic.plures.net/users/avatar/053/223/789/53223789/8f1d86283dd168ced9b94e0e13a06101.jpg","userId":53223789,"grade":28,"isLive":false},{"roomId":563131,"score":64157,"rank":7,"name":"情久_珮瑜","domain":"m190933","avatar":"http://pic.plures.net/users/avatar/040/272/558/40272558/445a2fd08c2ff2137c32e59b532fdebb.jpg","userId":40272558,"grade":27,"isLive":false},{"roomId":16085,"score":58689,"rank":8,"name":"Aimee艾米酱","domain":"101823","avatar":"http://pic.plures.net/users/avatar/003/708/164/3708164/c977d5632e8075b1f968815443d42e41.jpg","userId":3708164,"grade":29,"isLive":false},{"roomId":613784,"score":57248,"rank":9,"name":"综皇-包子（欧阳）","domain":"y199999","avatar":"http://pic.plures.net/users/avatar/041/560/286/41560286/71ab85915258ada485f92c00294e170d.jpg","userId":41560286,"grade":38,"isLive":false},{"roomId":2079594,"score":46586,"rank":10,"name":"情久小仙桃","domain":"165239","avatar":"http://pic.plures.net/users/avatar/068/156/446/68156446/bda107a8ea15077f13f479bd210fe77c.png","userId":68156446,"grade":25,"isLive":false}]}}'
      let obj = JSON.parse(msg);
      console.log(obj)
      if (obj.type == "eventroomrank") {
        for (let index = 0; index < obj.msg.items.length; index++) {
          if (card.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card.roomid) != -1) {
                card.pScore = obj.msg.items[index].score;
                card.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card.out){
                  card.out = true;
                }
                
              }
            } else {
              card.pScore = obj.msg.items[index].score;
              card.changeRank(obj.msg.items[index].rank);
            }
          }
          if (card5.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card5.roomid) != -1) {
                card5.pScore = obj.msg.items[index].score;
                card5.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card5.out){
                  card5.out = true;
                }
              }
            } else {
              card5.pScore = obj.msg.items[index].score;
              card5.changeRank(obj.msg.items[index].rank);
            }
          }
          if (card2.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card2.roomid) != -1) {
                card2.pScore = obj.msg.items[index].score;
                card2.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card2.out){
                  card2.out = true;
                }
              }
            } else {
              card2.pScore = obj.msg.items[index].score;
              card2.changeRank(obj.msg.items[index].rank);
            }
          }
          if (card3.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card3.roomid) != -1) {
                card3.pScore = obj.msg.items[index].score;
                card3.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card3.out){
                  card3.out = true;
                }
              }
            } else {
              card3.pScore = obj.msg.items[index].score;
              card3.changeRank(obj.msg.items[index].rank);
            }
          }
          if (card4.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card4.roomid) != -1) {
                card4.pScore = obj.msg.items[index].score;
                card4.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card4.out){
                  card4.out = true;
                }
              }
            } else {
              card4.pScore = obj.msg.items[index].score;
              card4.changeRank(obj.msg.items[index].rank);
            }
          }
        }
      }

    })
  } else if (arg[1].type == "guaping-right") {
    screenjs.stageindex = 0;
    let c1 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/ruiwen.png'
      },
      {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      },
      {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },

      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let c2 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/jingbaby.png'
      }, {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let c3 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/jinhe.png'
      }, {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let c4 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/peiyu.png'
      }, {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let c5 = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg.png'
      },
      {
        id: 'persion',
        src: '//player.plures.net/prod/activity/yzcm2017/photo/xinaisia.png'
      }, {
        id: 'perbg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/per.png'
      },
      {
        id: 'nameBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg.png'
      }, {
        id: 'nameBg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/n-bg-b.png'
      },
      {
        id: 'rankBg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/r-bg.png'
      },
      {
        id: 'bg-b',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-bg-b.png'
      },
      {
        id: 'logo-lz',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/card-logo.png'
      },
      {
        id: 'ac-logo',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ac-logo.png'
      },
    ];
    let rankFire = [];
    for (let num = 1; num < 5; num++) {
      let rank = document.createElement("video");
      rank.src = "//player.plures.net/prod/activity/yzcm2017/sp/" + num + ".mp4"
      rank.autoplay = true;
      rank.loop = true;
      rankFire.push(rank)
    }
    screenjs.rankWS = new WEBSOCKET(screenjs.env == "test" ? "wss://mbgows.plu.cn:8806/?room_id=8565&group=0" : 'wss://mbgows.plu.cn:8806/?room_id=238817&group=0');
    let dataArr = [{
      name: "锐雯",
      "roomid": 1511916
    }, {
      name: "婧baby",
      "roomid": 2218344
    }, {
      name: "金禾苗苗",
      "roomid": 1466603
    }, {
      name: "珮瑜",
      "roomid": 563131
    }, {
      name: "心爱sia",
      "roomid": 125348
    }];
    if (screenjs.env == "test") {
      dataArr = [{
        name: "星途",
        "roomid": 962042
      }, {
        name: "逆天花木兰",
        "roomid": 903728
      }, {
        name: "焦点神话",
        "roomid": 926311
      }, {
        name: "TV第一德莱文",
        "roomid": 911352
      }, {
        name: "Vivi.美素",
        "roomid": 904030
      }];
    }
    let card = new Card(screenjs.mainStage, c1, dataArr[0], rankFire);
    card.X = (216);
    let card2 = new Card(screenjs.mainStage, c2, dataArr[1], rankFire);
    card2.X = (432) * 1 + 216;
    let card3 = new Card(screenjs.mainStage, c3, dataArr[2], rankFire);
    card3.X = (432) * 2 + 216;
    let card4 = new Card(screenjs.mainStage, c4, dataArr[3], rankFire);
    card4.X = (432) * 3 + 216;
    let card5 = new Card(screenjs.mainStage, c5, dataArr[4], rankFire);
    card5.X = (432) * 4 + 216;
    card.on('complete', (e) => {
      // card.pScore = 5555;
      // card.changeRank(0);
      // card.out = true;
      // card.changeRank(4);
    });
    screenjs.rankWS.on("onmessage", function (msg) {
      let obj = JSON.parse(msg);
      if (obj.type == "eventroomrank") {
        console.log(obj)
        for (let index = 0; index < obj.msg.items.length; index++) {
          if (card.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card.roomid) != -1) {
                card.pScore = obj.msg.items[index].score;
                card.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card.out){
                  card.out = true;
                }
              }
            } else {
              card.pScore = obj.msg.items[index].score;
              card.changeRank(obj.msg.items[index].rank);
            }
          }
          if (card5.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card5.roomid) != -1) {
                card5.pScore = obj.msg.items[index].score;
                card5.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card5.out){
                  card5.out = true;
                }
              }
            } else {
              card5.pScore = obj.msg.items[index].score;
              card5.changeRank(obj.msg.items[index].rank);
            }
          }
          if (card2.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card2.roomid) != -1) {
                card2.pScore = obj.msg.items[index].score;
                card2.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card2.out){
                  card2.out = true;
                }
              }
            } else {
              card2.pScore = obj.msg.items[index].score;
              card2.changeRank(obj.msg.items[index].rank);
            }
          }
          if (card3.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card3.roomid) != -1) {
                card3.pScore = obj.msg.items[index].score;
                card3.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card3.out){
                  card3.out = true;
                }
              }
            } else {
              card3.pScore = obj.msg.items[index].score;
              card3.changeRank(obj.msg.items[index].rank);
            }
          }
          if (card4.roomid == obj.msg.items[index].roomId) {
            if (obj.msg.f.length) {
              if (obj.msg.f.indexOf(card4.roomid) != -1) {
                card4.pScore = obj.msg.items[index].score;
                card4.changeRank(obj.msg.items[index].rank);
              } else {
                if(!card4.out){
                  card4.out = true;
                }
                card4.out = true
              }
            } else {
              card4.pScore = obj.msg.items[index].score;
              card4.changeRank(obj.msg.items[index].rank);
            }
          }
        }
      }

    })
  } else if (arg[1].type == "ceping") {
    screenjs.stageindex = 1;
    screenjs.rankWS = new WEBSOCKET('wss://mbgows.plu.cn:8806/?room_id=2207730&group=0');
    let sideConfig = [{
        id: 'bg',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/side-bg.png'
      },
      {
        id: 'bg-a',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/side-bg-a.png'
      },
      {
        id: 'dgh-1',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/side-no1.png'
      },
      {
        id: 'dgh-2',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/side-no2.png'
      },
      {
        id: 'dgh-3',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/side-no3.png'
      },
      {
        id: 'gh-fm',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ghfm.png'
      },
      {
        id: 'gh-fm1',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/ghfm1.png'
      },
      {
        id: 'gh-fm11',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/side_no1.png'
      },
      {
        id: 'gh-fm22',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/side_no2.png'
      },
      {
        id: 'gh-fm33',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/side_no3.png'
      },
      {
        id: 'drw-1',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/center-no1.png'
      },
      {
        id: 'drw-2',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/center-no2.png'
      },
      {
        id: 'drw-3',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/center-no3.png'
      },
      {
        id: 'rw-fm',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/rwfm.png'
      },
      {
        id: 'gift-item',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/gift-line.png'
      },
      {
        id: 'gift-geren',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/geren.png'
      },
      {
        id: 'gift-gonghui',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/gonghui.png'
      },
      {
        id: 'gift-nahan',
        src: '//player.plures.net/prod/activity/yzcm2017/assets/nahan.png'
      },
    ];
    let rank = document.createElement("video");
    rank.src = "//player.plures.net/prod/activity/yzcm2017/sp/ceping.mp4"
    rank.autoplay = true;
    rank.loop = true;
    let sidescreen = new SideScreen(screenjs.mainStage, sideConfig, rank);
    let fmailyurl = "//rankapi.longzhu.com/ranklist/GetEventFamilyRankList";
    let userurl = "//rankapi.longzhu.com/ranklist/GetEventUserRankList";
    sidescreen.on("complete", (e) => {
      screenjs.rankWS.on("onmessage", function (msg) {
        // msg='{"id":24829205941923,"type":"gift","msg":{"title":"呐喊","itemType":"yzcmmfp","time":"\/Date(1515509651263+0800)\/","number":3344,"combo":2,"comboId":1906,"user":{"avatar":"http://img2.plures.net/users/avatar/028/207/675/28207675/a414db4d3eb658ae7f84b39a81c7a771.png","sex":2,"geocode":130115,"status":0,"uid":28207675,"username":"杀我别用感情","grade":11,"newGrade":15},"taskMedal":[],"ppvip":"","hostName":"一匹破狼","isInteractive":false,"nobleLevel":0}}'
        let obj = JSON.parse(msg)
        console.log(obj)
        if (obj.type == "gift") {
          let giftData = {
            user: obj.msg.user.username,
            "achor": obj.msg.hostName,
            "count": obj.msg.number,
            "type": "gift-geren",
            "color": "#ffcc00"
          }
          if (obj.msg.itemType == "yzcmgrp") {
            giftData.type = "gift-geren";
            giftData.color = "#ffcc00";
          } else if (obj.msg.itemType == "yzcmghp") {
            giftData.type = "gift-gonghui";
            giftData.color = "#ff6600";
          } else if (obj.msg.itemType == "yzcmmfp") {
            giftData.type = "gift-nahan";
            giftData.color = "#00ccff";
          }
          if (obj.msg.number >= 3344 || obj.msg.itemType == "yzcmgrp" || obj.msg.itemType == "yzcmghp" || obj.msg.itemType == "yzcmmfp") {
            sidescreen.addGiftItem(giftData)
          }
        }
      }.bind(this))

      let eventid = screenjs.env == "test" ? 13 : 10002;


      axios.get(fmailyurl, {
        params: {
          eventId: eventid,
          startIndex: 0,
          maxResults: 3
        }
      }).then((e) => {
        sidescreen.changeRankDGH(e.data);
      }).catch((e) => {});
      axios.get(userurl, {
        params: {
          eventId: eventid,
          startIndex: 0,
          maxResults: 3
        }
      }).then((e) => {
        sidescreen.changeRankDRW(e.data);
      }).catch((e) => {});
      setInterval(function () {
        axios.get(fmailyurl, {
          params: {
            eventId: eventid,
            startIndex: 0,
            maxResults: 3
          }
        }).then((e) => {
          sidescreen.changeRankDGH(e.data);
        }).catch((e) => {});
        axios.get(userurl, {
          params: {
            eventId: eventid,
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
    screenjs.stageindex = 2;
    let mainConfig = [{
      id: 'bg',
      src: '//player.plures.net/prod/activity/yzcm2017/assets/main-bg.png'
    }, {
      id: "kv",
      src: "//player.plures.net/prod/activity/yzcm2017/assets/mainKV.png"
    }, {
      id: "allper",
      src: "//player.plures.net/prod/activity/yzcm2017/assets/allPer.png"
    }, {
      id: "dm-geren",
      src: "//player.plures.net/prod/activity/yzcm2017/assets/dm-geren.png"
    }, {
      id: "dm-gonghui",
      src: "//player.plures.net/prod/activity/yzcm2017/assets/dm-gonghui.png"
    }, {
      id: "dm-nahan",
      src: "//player.plures.net/prod/activity/yzcm2017/assets/dm-nahan.png"
    }, ];
    screenjs.rankWS = new WEBSOCKET('wss://mbgows.plu.cn:8806/?room_id=2207730&group=0');
    document.getElementById("video").style.display = "block";
    let mainScreen = new MainScreen(screenjs.mainStage, mainConfig);
    mainScreen.on("complete", function () {
      console.log("mainScreen complete")
      screenjs.rankWS.on("onmessage", function (msg) {
        // msg='{"id":24829205941923,"type":"gift","msg":{"title":"呐喊","itemType":"yzcmghp","time":"\/Date(1515509651263+0800)\/","number":3344,"combo":2,"comboId":1906,"user":{"avatar":"http://img2.plures.net/users/avatar/028/207/675/28207675/a414db4d3eb658ae7f84b39a81c7a771.png","sex":2,"geocode":130115,"status":0,"uid":28207675,"username":"杀我别用感情","grade":11,"newGrade":15},"taskMedal":[],"ppvip":"","hostName":"一匹破狼","isInteractive":false,"nobleLevel":0}}'
        let obj = JSON.parse(msg);
        console.log(obj)
        if (obj.type == "gift") {
          let danmuData = {
            "user": obj.msg.user.username,
            "achor": obj.msg.hostName,
            "count": obj.msg.number,
            "type": obj.msg.itemType
          }
          if(danmuData.type=="yzcmmfp"||danmuData.type=="yzcmgrp"||danmuData.type=="yzcmghp"){
            mainScreen.addDanmu(danmuData);
          }
        }

      }.bind(this));
      let online = "//roomapicdn.plu.cn/room/getonline"
      axios.get(online, {
        params: {
          roomid: 2207730
        }
      }).then((e) => {
        mainScreen.perNum = e.data.result;
      }).catch((e) => {});
      setInterval(function () {
        axios.get(online, {
          params: {
            roomid: 2207730
          }
        }).then((e) => {
          mainScreen.perNum = e.data.result;
        }).catch((e) => {});
      }.bind(this), 60000)
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
screenjs.env = "cn";
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