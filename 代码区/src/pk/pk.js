$("body").on("click", ".gameOne", function () {
  $("body").css("backgroundColor", "rgba(0, 0, 0, 0.226)");
  $(".room").css("display", "block");
})

$("body").on("click", ".shut", function () {
  $("body").css("backgroundColor", "#fff");
  $(".room").css("display", "none");
})

$("body").on("click", ".back", function () {
  window.location.href = `../index.html?user_id=${userData.user_id}`
})


let getUrlParam = function () {
  let url = document.location.toString()
  let urlParmStr = url.slice(url.indexOf('?') + 1)
  let arr = urlParmStr.split('&')
  let data = {};
  data.user_id = arr[0].split("=")[1] * 1;
  return data;
};

let data = getUrlParam() //当前用户名以及房间id数据

//得到用户个人信息
let getPersonalData = function (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/getPersonalData",
      data: data,
      success: function (result) {
        resolve(result)
      }
    });
  })
};

//得到用户pk积分
let getWinIntegarl = function (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/getWinIntegarl",
      data: data,
      success: function (result) {
        resolve(result)
      }
    });
  })
};
//得到用户胜率
let getUserWin = function (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/getUserWin",
      data: data,
      success: function (result) {
        resolve(result)
      }
    });
  })
};
//得到房间列表
let getRoomList = function () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/getRoomList",
      success: function (result) {
        resolve(result)
      }
    });
  })
}

//功能1:初始化页面
let showData = function () {
  $(".name").text(userData.user_name);
  $(".pk_integral").text(WinIntegarl);
  $(".pk_win").text(UserWin * 100 + "%");

  for (let item of roomList) {
    (async function () {
      let data1 = {};
      data1.user_id = item["1p_user_id"];
      let user1 = (await getPersonalData(data1))[0];
      let data2 = {};
      let user2 = {};
      let str;
      if(!item["2p_user_id"]){
        str = `
        <li class="room-box">
         <p>房间id: <span class="room-id">${item.id}</span></p>
         <p>1P玩家: <img class="user_icon" src=${user1.icon}> <span class="1p_user_id">${user1.user_name}</span></p>
         <p>........................................等待你的加入</p>
         <button class = "enter_room">加入房间</button>
        </li>
      `
      }
      else {
        data2.user_id = item["2p_user_id"];
        user2 = (await getPersonalData(data2))[0];
        str = `
        <li class="room-box">
         <p>房间id: <span class="room-id">${item.id}</span></p>
         <p>1P玩家: <img class="user_icon" src=${user1.icon}> <span class="1p_user_id">${user1.user_name}</span></p>
         <p>2P玩家: <img class="user_icon" src=${user2.icon}> <span class="2p_user_id">${user2.user_name}</span></p>
         <button class = "watching" >进入观战</button>
        </li>
      `
      }
      $(".list ul").append(str)
    })()
    
  }
}

//插入新建房间
let addNewRoom = async function(item) {
  let data = {};
  data.user_id = item["1p_user_id"];
  let user = (await getPersonalData(data))[0];
  let str = `
    <li class="room-box">
    <p>房间id: <span class="room-id">${item.id}</span></p>
    <p>1P玩家: <img class="user_icon" src=${user.icon}> <span class="1p_user_id">${user.user_name}</span></p>
    <p>........................................等待你的加入</p>
    <button class = "enter_room">加入房间</button>
    </li>
  `
  if($(".room-box").length === 0) {
    $(".list ul").append(str)
  }else {
    $(".room-box:first").before(str)
  }
}

//功能2：新建房间,跳转
$("body").on("click","#addRoom", function () {
  addRoomAfter();
})

let addRoom = function (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/addRoom",
      data: data,
      success: function (result) {
        resolve(result)
      }
    });
  })
}

let addRoomAfter = async function () {
  let data = {
    user_id: userData.user_id
  }
  let room = (await addRoom(data))[0];
  addNewRoom(room);
  window.location.href = `../pkRing/pkRing.html?user_id=${userData.user_id}&room_id=${room.id}`
}

//功能3：加入房间,跳转
$("body").on("click",".enter_room", function () {
  let data = {};
  data.user_id = userData.user_id;
  data.room_id = $(this).parent().find(".room-id").text()*1;
  enterRoom(data);
  window.location.href = `../pkRing/pkRing.html?user_id=${data.user_id}&room_id=${data.room_id}`
})

$("body").on("click",".watching", function () {
  let data = {};
  data.user_id = userData.user_id;
  data.room_id = $(this).parent().find(".room-id").text()*1;
  window.location.href = `../pkRing/pkRing.html?user_id=${data.user_id}&room_id=${data.room_id}`
})

let enterRoom = function (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://127.0.0.1:3000/enterRoom",
      data: data,
      success: function (result) {
        resolve("")
      }
    });
  })
}


let userData; //用户个人信息
let WinIntegarl, UserWin;
let roomList;
async function init() {
  userData = (await getPersonalData(data))[0];
  WinIntegarl = (await getWinIntegarl(data))[0]["win_integral"];
  if (!WinIntegarl) WinIntegarl = 0;
  UserWin = (await getUserWin(data))[0].win;
  roomList = await getRoomList();

  showData();
}
init()