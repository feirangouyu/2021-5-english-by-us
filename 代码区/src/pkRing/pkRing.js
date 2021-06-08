/*
    @auto:胡雯

    pk模块：
        功能1.根据房间id请求双方玩家个人信息,pk积分,请求单词题目信息，更新pklist数据
        功能2：启动等待玩家加入模式
        功能3：启动pk等待开始模式，显示初始化数据，展示单词题目
        功能4：开始pk，启动定时器 
        功能5：pk结束，窗口提示并展示双方pk结果
        功能6：第三用户观战
*/


//解析网址栏参数，取得user_id,room_id
let getUrlParam = function () {
  let url = document.location.toString()
  let urlParmStr = url.slice(url.indexOf('?') + 1)
  let arr = urlParmStr.split('&')
  let data = {};
  data.user_id = arr[0].split("=")[1] * 1;
  data.room_id = arr[1].split("=")[1] * 1;
  return data;
};

let data = getUrlParam() //当前用户id以及房间id数据

/*
  功能1.根据房间id请求双方玩家个人信息,pk积分,请求单词题目信息，更新pklist数据
*/

//功能1-1 请求双方玩家个人信息
let getUserData = function () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/getUserData",
      data: data,
      success: function (result) {
        resolve(result)
      }
    });
  })
}

//功能1-2 请求双方玩家个人信息
let getWin = function () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/getUserWin",
      data: data,
      success: function (result) {
        resolve(result)
      }
    });
  })
}

//功能1-3 请求双方玩家个人信息
let getWord = function () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/getWord",
      success: function (result) {
        resolve(result)
      }
    });
  })
}

//功能1-4 请求双方玩家个人信息
let upState = function (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/upState",
      data:data,
      success: function (result) {
        resolve(result)
      }
    });
  })
}


//功能1-5 更新pklist数据
let upPklist = function (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/upPklist",
      data:data,
      success: function (result) {
        resolve(result)
      }
    });
  })
}

//将初始化数据在页面显示出来 
let showData = function (state) {
  if(state === 0 || state === 1) {
    $(".right  .name").text(userData[state].user_name);
    $(".right .user_icon").attr("src", userData[state].icon);
    $(".player-wait .user_icon2").attr("src", userData[1].icon);
    $(".player-wait  .name2").text(userData[1].user_name);
    $(".player-wait .user_icon1").attr("src", userData[0].icon);
    $(".player-wait  .name1").text(userData[0].user_name);
  }else {
    showData1();
    let left = userData[0],right = userData[1];;
    if(data.user_p != 3) {
      if(userData[0]["1p_user_id"] === data.user_id) {right = userData[0]; left = userData[1];}
    }
    $(".right  .name").text(right.user_name);
    $(".right .user_icon").attr("src", right.icon);
    $(".left .user_icon").attr("src", left.icon);
    $(".left  .name").text(left.user_name);
  }

}

//更新答题与积分数据 
let showData1 = function () {
  if(data.user_p === 1) {
    // $(".right .title_num").text(userData[0]["1p_title_num"]);
    $(".left .title_num").text(userData[0]["2p_title_num"]);
    $(".right .integral").text(userData[0]["1p_integral"]);
    $(".left .integral").text(userData[0]["2p_integral"]);
  }else if((data.user_p === 2)){
    // $(".right .title_num").text(userData[0]["2p_title_num"]);
    $(".left .title_num").text(userData[0]["1p_title_num"]);
    $(".right .integral").text(userData[0]["2p_integral"]);
    $(".left .integral").text(userData[0]["1p_integral"]);
  }  
}


let flag = 0;

/*
  功能2：启动等待玩家加入模式
*/
let playerWait = function () {
  $(".player-wait .user_icon1").eq(0).attr("src",userData[0].icon);
  $(".player-wait .name1").text(userData[0].user_name);
  let time = 1;
  let interval =  setInterval(function() {
    $(".player-wait .time").text(time);
    time++;

    let ws = new WebSocket('ws://localhost:3001/');
    let wsTime ;
    ws.onopen = function() {
      wsTime = setInterval(function() {
          ws.send(data.room_id);
      },500);
    }
    ws.onmessage = function(e) {
      userData = JSON.parse(e.data)
      if(userData[0].state === 2) {
        clearInterval(interval);
        clearInterval(wsTime);
        ws.close();
        $(".start").html('<button class="start-btn">开始</button>')
  
        if(flag ===0)pkWait();
      }
    }
  },1000)
}

/*
  功能3：启动pk等待开始模式，显示初始化数据，展示单词题目
*/
let pkWait = async function () {
  flag = 1;
  userData = await getUserData();
  if(data.user_p === 1){
    win = (await getWin())[0].win;
    word = await getWord();
    addBox1();
    showData(0);
    pkState();
  }else if(data.user_p === 2) {
    $(".start").html('<button class="start-btn">开始</button>')
    $(".player-wait > p").eq(1).css("display","none")
    win = (await getWin())[0].win;
    word = await getWord();
    addBox1();
    showData(1);
    pkState();
  }
}

//功能3-1 监听是否有玩家开局
let pkState = function () {
    let ws = new WebSocket('ws://localhost:3001/');
    let wsTime ;
    ws.onopen = function() {
      wsTime = setInterval(function() {
          ws.send(data.room_id);
      },500);
    }
    ws.onmessage = function(e) {
      userData = JSON.parse(e.data)
      if(userData[0].state === 3) {
        clearInterval(wsTime);
        if(flag === 1) pkStart();
        ws.close();
      }
    }
}

$("body").on("click",".start-btn", async function () {
  let data1 = {
    room_id:data.room_id,
    state:3
  }
   await upState(data1);
  
  pkStart()
})

//增加对手与玩家盒子
let addBox1 = function () {
  $(".main").append(`<div class="left">
  <div class="user_data">
    <img src="./images/player.svg" class="user_icon" >
    <p class="name"></p>
    <p>当前答题数:<span class="title_num">0</span>/10</p>
    <p>积分: <span class="integral">0</span></p>
  </div>
</div>`)
  $(".main").append(`<h2>PK大擂台</h2>`)
  $(".main").append(
    `<div class="right">
      <div class="login"> 
      <div class="time"><p>倒计时: <span></span>s</p></div>

      <div class="user_data">
        <img class="user_icon" >
        <p class="name"></p>
        <p>当前答题数:<span class="title_num">0</span>/10</p>
        <p>积分: <span class="integral">0</span></p>
      </div>

      <div class="pk-box">
        <div class="head">
          <span><span class="num">1</span>/10</span>
          <span class="next">下一题</span>
        </div>

        <div class="titles">

        </div>
      </div>
    </div>
 </div>`)
}


/*
  功能4：开始pk，启动定时器 
*/
let pkStart = function () {
  flag = 2;
  $(".player-wait").css("display","none");
  $("body").css("backgroundColor","white");
  showData();
  addWordBox();
  onTime();
  realTimeShow();
  pkIsEnd()
}

//功能4-1 实时判断pk是否结束
let pkIsEnd = function () {
  let ws = new WebSocket('ws://localhost:3001/');
    let wsTime ;
    ws.onopen = function() {
      wsTime = setInterval(function() {
          ws.send(data.room_id);
      },500);
    }
    ws.onmessage = function(e) {
      userData = JSON.parse(e.data)
      if(userData[0].state === 4) {
        clearInterval(wsTime);
        if(flag === 2) pkOver(0);
        ws.close();
      }
    }
}

//增加单词列表
let addWordBox = function () {
  word.forEach((item,i) => {
    let options = item.word_options.split(";");
    let str = `
    <div class="title" data=${item.word_id}>
      <div class="title_content">
        <span>${++i}.</span>
        <span>${item.word_content}</span>
      </div>
      <div class="title_options">
        <div><input type="radio" name="option${i}" value="A"> <span>A.${options[0]}</span></div>
        <div><input type="radio" name="option${i}" value="B"> <span>B.${options[1]}</span></div>
        <div><input type="radio" name="option${i}" value="C"> <span>C.${options[2]}</span></div>
        <div><input type="radio" name="option${i}" value="D"> <span>D.${options[3]}</span></div>
      </div>
    </div>
    `
  $(".titles").append(str)
  });
}

//计时器功能 
let time;
let onTime = function () {
  clearInterval(time)
  $(".time span").text(15)
  let t = 15;
  time = setInterval(function () {
    t--;
    $(".time span").text(t)
    if (t === 0) {clearInterval(time);cutWordPage(1);}
  }, 1000)
}

//单词题目切页功能 
$("body").on("click", ".next",function () {
  cutWordPage(2);
})
let cutWordPage = function (num) {
  let page = $(".num").text();
  $(".right .title_num").text(page*1)
  if(page >= 10)  {return pkOver(1);}
  onTime();
  $(".num").text(page*1+1)
  $(".title").eq(page-1).css("display","none")
  $(".title").eq(page).css("display","block")
  addIntegral($(".title").eq(page-1), page-1,num)
}

//判断玩家答案是否正确，更新用户积分 
let addIntegral = function (title, index, num) {
  let answer = title.find("input:checked").val()
  let addnum = 0;
  if(answer) {
   if(word[index].word_answer === answer){
    addnum = num;
   }; 
  }
  let d ;
  if(data.user_p === 1){
    d = {
      "1p_title_num":1,
      "2p_title_num":0,
      "1p_integral":addnum,
      "2p_integral":0,
      room_id: data.room_id
    }
  }else {
    d = {
      "1p_title_num":0,
      "2p_title_num":1,
      "1p_integral":0,
      "2p_integral":addnum,
      room_id: data.room_id
    }
  }
  updata(d);
}

let updata = function(data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/setRoomData",
      data:data,
      success: function (result) {
        resolve(result)
      }
    });
  })
}

//实时展示数据 
let realTimeShow =  function () {
  let ws = new WebSocket('ws://localhost:3001/');
  ws.onopen = function() {
    setInterval(function() {
        ws.send(data.room_id);
    },1000);
  }
  ws.onmessage = function(e) {
    userData = JSON.parse(e.data)
    showData();
  }
}


/*
  功能5：pk结束，窗口提示并展示双方pk结果
*/
let pkOver = function (up) {
  clearInterval(time);
  flag = 2;
  let data1 = {
    room_id:data.room_id,
    state:4
  }

  upState(data1);

  let data2 = upPkData();
  let data3 = {};
  data3["1p_user_id"] = userData[0]["1p_user_id"];
  data3["2p_user_id"] = userData[0]["2p_user_id"];
  if(data.user_p === 1){
    data3["1p_integral"] = data2.right.integral;
    data3["2p_integral"] = data2.left.integral;
    
  }else {
    data3["2p_integral"] = data2.right.integral;
    data3["1p_integral"] = data2.left.integral;
  }
  if(data3["1p_integral"] > data3["2p_integral"]){
    data3["win_user"] = data3["1p_user_id"];
    data3["win_integral"] = data3["1p_integral"];
  }else {
    data3["win_user"] = data3["2p_user_id"];
    data3["win_integral"] = data3["2p_integral"];
  }

  data3.room_id = data.room_id;
  if(up === 1) {
    upPklist(data3);
  }

  $(".pk-end").css("display","block");
  $("body").css("backgroundColor","rgba(0, 0, 0, 0.219)");
  let win_user = data2.left;
  if(data2.right.integral > data2.left.integral) {
    win_user = data2.right
  }

  $(".win_user").text(win_user.name);
  $(".pk-end .user_icon1").attr("src", data2.left.icon)
  $(".pk-end .user_icon2").attr("src", data2.right.icon)
  $(".pk-end .name1").text(data2.left.name)
  $(".pk-end .name2").text(data2.right.name)
  $(".pk-end .integral1").text(data2.left.integral)
  $(".pk-end .integral2").text(data2.right.integral)

}

// 功能5-1 取得玩家pk结果数据
let upPkData = function () {
  let left ={}, right = {};
  left.icon = $(".left .user_icon").attr("src");
  left.name = $(".left .name").text();
  left.num = $(".left .title_num").text();
  left.integral = $(".left .integral").text();

  right.icon = $(".right .user_icon").attr("src");
  right.name = $(".right .name").text();
  right.num = $(".right .title_num").text();
  right.integral = $(".right .integral").text();

  let data = {
    left:left,
    right:right
  }

  return data
}


/*
  功能6：第三用户观战
*/
let watching = function () {
  $("body").css("backgroundColor","white");
  $(".main").html("")
  let str = `
  <div class="watch">
    <div class="watch-left">
      <div class="user_data">
        <img class="user_icon" >
        <p class="name"></p>
        <p>答题数:<span class="title_num"></span>/10</p>
        <p>获得积分: <span class="integral"></span></p>
      </div>
    </div>
    <div class="watch-right">
      <div class="user_data">
        <img class="user_icon" >
        <p class="name"></p>
        <p>答题数:<span class="title_num"></span>/10</p>
        <p>获得积分: <span class="integral"></span></p>
      </div>
    </div>
   </div>
  `
  $(".main").append(str)

  $(".watch-left .user_icon").attr("src",userData[0].icon);
  $(".watch-right .user_icon").attr("src",userData[1].icon);
  $(".watch-left .name").text(userData[0].user_name);
  $(".watch-right .name").text(userData[0].user_name);

  upWatchData();
 
} 

let upWatchData = function () {
  let ws = new WebSocket('ws://localhost:3001/');
    let wsTime ;
    ws.onopen = function() {
      wsTime = setInterval(function() {
          ws.send(data.room_id);
      },500);
    }
    ws.onmessage = function(e) {
      userData = JSON.parse(e.data)
      $(".watch-left .title_num").text(userData[0]["1p_title_num"]);
      $(".watch-right .title_num").text(userData[0]["2p_title_num"]);
      $(".watch-left .integral").text(userData[0]["1p_integral"]);
      $(".watch-right .integral").text(userData[0]["2p_integral"]);
      }
}


let userData, win,word;//玩家信息,玩家pk积分,单词列表

async function init() {
  userData = await getUserData(); 
  if(data.user_id === userData[0]["1p_user_id"]) data.user_p = 1
  else if(data.user_id === userData[0]["2p_user_id"]) data.user_p = 2
  else data.user_p = 3  //第三玩家

  if(data.user_p === 1) playerWait();
  else if(data.user_p === 2) pkWait();
  else watching();
}

init();