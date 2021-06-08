/*
    @auto:胡雯

    排行榜模块：
        功能1：点击头部索引栏，实现日榜、周榜、月榜的内容切换
        功能2：发送ajax请求，获取日榜、周榜、月榜数据
        功能3：将获取的排行榜信息，在页面中一一呈现出来
*/


(function () {
  window.rankTableInit = function () {

    //功能1：点击头部索引栏，实现日榜、周榜、月榜的内容切换
    let eventList = function () {
      $("body").on("click", ".rank-btn > div", function () {
        $(".rank-btn > div ").removeClass("on");
        $(this).addClass("on")

        $(".rank-content > div").css("display", "none");
        let className = $(this).attr("class").split(" ")[0];
        $(`.rank-content .${className}`).css("display", "block");
      })
    }

    //功能2：发送ajax请求，获取日榜、周榜、月榜数据
    //获取月榜的排名信息
    let getMonthRank = function () {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "http://127.0.0.1:3000/getMonthRank",
          success: function (result) {
            resolve(result)
          }
        });
      })
    };
    //获取周榜的排名信息
    let getWeekRank = function () {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "http://127.0.0.1:3000/getWeekRank",
          success: function (result) {
            resolve(result)
          }
        });
      })
    };
    //获取日榜的排名信息
    let getDayRank = function () {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "http://127.0.0.1:3000/getDayRank",
          success: function (result) {
            resolve(result)
          }
        });
      })
    };

    // 功能3：将获取的排行榜信息，在页面中一一呈现出来
    let showRank = function () {
      //月榜显示
      if (monthData.length === 0) {
        $(".rank-content .month ul").append('<div><img src="./images/nonoe.svg" ></div>')
      }
      for (let i = 0; i < monthData.length; i++) {

        if (i <= 2) {
          let li = `
      <li>
      <div><img class="icon" src="images/rank_${i+1}.png"></div>
      <div><img class="avatar" src="${monthData[i].icon}"></div>
      <div><span>${monthData[i].user_name}</span><span><b>${monthData[i].integral}</b>积分</span><p>${monthData[i].signa}</p></div>
      </li>`
          $(".rank-content .month ul").append(li)
        } else {
          let li = `
      <li>
      <div><p>${i+1}</p></div>
      <div><img class="avatar" src="${monthData[i].icon}"></div>
      <div><span>${monthData[i].user_name}</span><span><b>${monthData[i].integral}</b>积分</span><p>${monthData[i].signa}</p></div>
      </li>`
          $(".rank-content .month ul").append(li)
        }
      }

      //周榜显示
      if (weekData.length === 0) {
        $(".rank-content .week ul").append('<div><img src="./images/nonoe.svg" ></div>')
      }
      for (let i = 0; i < weekData.length; i++) {
        if (i <= 2) {
          let li = `
      <li>
      <div><img class="icon" src="images/rank_${i+1}.png"></div>
      <div><img class="avatar" src="${weekData[i].icon}"></div>
      <div><span>${weekData[i].user_name}</span><span><b>${weekData[i].integral}</b>积分</span><p>${weekData[i].signa}</p></div>
      </li>`
          $(".rank-content .week ul").append(li)
        } else {
          let li = `
      <li>
      <div><p>${i+1}</p></div>
      <div><img class="avatar" src="${weekData[i].icon}"></div>
      <div><span>${weekData[i].user_name}</span><span><b>${weekData[i].integral}</b>积分</span><p>${weekData[i].signa}</p></div>
      </li>`
          $(".rank-content .week ul").append(li)
        }
      }

      //日榜显示
      if (dayhData.length === 0) {
        $(".rank-content .day ul").append('<div><img src="./images/nonoe.svg" ></div>')
      }
      for (let i = 0; i < dayhData.length; i++) {
        if (i <= 2) {
          let li = `
      <li>
      <div><img class="icon" src="images/rank_${i+1}.png"></div>
      <div><img class="avatar" src="${dayhData[i].icon}"></div>
      <div><span>${dayhData[i].user_name}</span><span><b>${dayhData[i].integral}</b>积分</span><p>${dayhData[i].signa}</p></div>
      </li>`
          $(".rank-content .day ul").append(li)
        } else {
          let li = `
      <li>
      <div><p>${i+1}</p></div>
      <div><img class="avatar" src="${dayhData[i].icon}"></div>
      <div><span>${dayhData[i].user_name}</span><span><b>${dayhData[i].integral}</b>积分</span><p>${dayhData[i].signa}</p></div>
      </li>`
          $(".rank-content .day ul").append(li)
        }
      }
    }

    let monthData; //月榜数据
    let weekData; //周榜数据
    let dayhData; //日榜数据

    async function init() {
      monthData = await getMonthRank();
      weekData = await getWeekRank();
      dayhData = await getDayRank();

      showRank();
      eventList();
    }

    init();
  }

})(window)

window.rankTableInit()