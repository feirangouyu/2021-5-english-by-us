/*
    @auto:胡雯

    答题模块：
        功能1：页面加载后，根据试卷id发送ajax请求得到试卷与题目数据
        功能2：实现在答题页面中，显示在线答题计时，与试卷标题信息
        功能3：实现在答题页面中，将试卷的全部题目信息一一排列显示出来
        功能4：完成在用户点击了"提交答题"后，将用户做题的正确情况计算显示出来
        功能5:将用户的答题情况写入数据库中存储，根据用户答对的题目数量增加对应学习积分，以及记录学生错题
*/

(function () {
  window.testInit = function () {
    let time = ""; //答题计时
    let inter; //答题计时器
    let num = 0; //总答题数
    let correct = 0; //答对题数
    let score = 0; //总分
    let titles = {}; //题目数据
    let test = {}; //试卷数据

    //功能1：页面加载后，根据试卷id发送ajax请求得到试卷与题目数据
    //根据试卷id获取试卷信息
    let getTest = function (data) {

      return new Promise((resolve, reject) => {
        $.ajax({
          url: "http://127.0.0.1:3000/getTest",
          data: data,
          success: function (result) {
            resolve(result)
          }

        });
      })
    };

    //根据试卷id获取题目信息
    let getTitles = function (data) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "http://127.0.0.1:3000/getTitles",
          data: data,
          success: function (result) {
            resolve(result)
          }
        });
      })
    };

    //根据题目类型获取题目信息
    let getTitles1 = function (data) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "http://127.0.0.1:3000/getTitles1",
          data: data,
          success: function (result) {
            resolve(result)
          }
        });
      })
    };

    //解析url地址，获得地址参数
    let getUrlParam = function () {
      let url = document.location.toString()
      let urlParmStr = url.slice(url.indexOf('?') + 1)
      let arr = urlParmStr.split('&')
      let data = {};
      if (arr.length === 3) {
        data.state = arr[0].split("=")[1];
        data.test_id = arr[1].split("=")[1];
        data.user_id = arr[2].split("=")[1];
      } else if (arr.length === 4) {
        data.user_id = arr[0].split("=")[1];
        data.state = arr[1].split("=")[1];
        data.test_title = decodeURI(arr[2].split("=")[1]);
        data.title_type = arr[3].split("=")[1];
      }
      
      return data;

    };

    //功能2：实现在答题页面中，显示在线答题计时，与试卷标题信息
    let showHeader = function () {
      let hh = 0,
        mm = 0,
        ss = 0;

      inter = setInterval(function () {
        ss++;
        if (ss === 60) {
          ss = 0;
          mm++;
        }
        if (mm === 60) {
          mm = 0;
          hh++;
        }
        time = ""
        if (hh < 10) time += "0" + hh + ":";
        else time += hh + ":";
        if (mm < 10) time += "0" + mm + ":";
        else time += mm + ":";
        if (ss < 10) time += "0" + ss;
        else time += ss;
        $(".header .time").text(time)
      }, 1000);
      $(".header h2").text(test.test_title);
      $(".header .num").text(test.test_num);
      $(".header .score").text(test.test_score + "分");
    }

    //功能3：实现在答题页面中，将试卷的全部题目信息一一排列显示出来
    let showtitles = function () {
      if (data.state != 1) $(".titles h4").css("display", "none")

      let type1Num = 0;
      let type1Score = 0;
      let type2Num = 0;
      let type2Score = 0;
      let title;
      for (let item of titles) {
        if (item.title_type === 1) {
          let options = item.title_options.split(";");
          title =
            `<div class="title" data=${item.test_id}-${item.title_id}>
            <div class="title_content">
              <span>${++type1Num}.</span>
              <span>(${item.title_score}分)</span>
              <span>${item.title_content}</span>
            </div>
            <div class="title_options">
              <div><input type="radio" name="option${type1Num}" value="A"> <span>A.${options[0]}</span></div>
              <div><input type="radio" name="option${type1Num}" value="B"> <span>B.${options[1]}</span></div>
              <div><input type="radio" name="option${type1Num}" value="C"> <span>C.${options[2]}</span></div>
              <div><input type="radio" name="option${type1Num}" value="D"> <span>D.${options[3]}</span></div>
            </div>
          </div>`

          type1Score += item.title_score;
        } else if (item.title_type === 2) {
          title =
            `<div class="title" data=${item.test_id}-${item.title_id}>
            <div class="title-content">
              <p><span>${++type2Num}.(${item.title_score}分)</span>${item.title_content}</p> 
            </div>
            <div class="title-write">
              <textarea name="text${type2Num}" cols="125" rows="15" ></textarea>
            </div>
          </div>`

          type2Score += item.title_score;
        }


        $(`.type${item.title_type}`).append(title)
      }

      let text1 = $(".type1").prev().text()
      $(".type1").prev().text(text1 + `(共${type1Num}题，${type1Score}分)`)
      let text2 = $(".type2").prev().text()
      $(".type2").prev().text(text2 + `(共${type2Num}题，${type2Score}分)`)
    }

    //功能4：完成在用户点击了"提交答题"后，将用户做题的正确情况计算显示出来
    let submitTest = function () {
      $("body").on("click", ".footer button", function () {
        $(".result").css("display", "block")

        $(".title_options").each(function () {
          let box = $(this).parent();
          let id = box.attr("data").split("-")[1];
          let title = searchTitle(id * 1);
          let flag = false;
          let text = "";


          if ($(this).find("input:checked").val()) {
            num++;
            if (title.title_answer === $(this).find("input:checked").val()) {
              correct++;
              score += title.title_score;
              flag = true;
            }
          }

          if (flag) text = "正确";
          else text = "错误"

          let result =
            `<div class=${flag}>
              <p>【回答${text}】</p>
              <p>【正确答案】: ${title.title_answer }</p>
              <p>【解析】: ${title.title_parsing}</p>
              </div>`
          $(box).append(result)
        })

        $("textarea").each(function () {
          let box = $(this).parent().parent();
          let flag = false;
          let id = box.attr("data").split("-")[1];
          let title = searchTitle(id * 1);
          let text = "";

          if ($(this).val() != "") num++;
          if (title.title_answer === $(this).val()) {
            flag = true;
            correct++;
            score += title.title_score
          }

          if (flag) text = "正确";
          else text = "错误"
          let result =
            `<div class=${flag}>
              <p>【回答${text}】</p>
              <p>【正确答案】: ${title.title_answer }</p>
              <p>【解析】: ${title.title_parsing}</p>
              </div>`
          $(box).append(result)
        })

        $(".result span").eq(0).text(num)
        $(".result span").eq(1).text(correct)
        $(".result span").eq(2).text(score)
        $(".result span").eq(3).text(time)


        clearInterval(inter)
        $(".footer button").css("display", "none")

        recordData();
      })
    }

    //功能5:将用户的答题情况写入数据库中存储，根据用户答对的题目数量增加对应学习积分，以及记录学生错题
    let recordData = function () {
        let data1 = {};
        data1.user_id = data.user_id; 
        data1.integral_num = $(".result p span").eq(1).text();
        $.ajax({
          url: "http://127.0.0.1:3000/setIntegral",
          data: data1,
        });

        let data2 = {};
        data2.user_id = data.user_id; 
        data2.wrongList = [];
        let wrongs = $(".false").parent()
        for(let i = 0; i < wrongs.length; i++) {
          let item = {};
          item.test_id = $(wrongs[i]).attr("data").split("-")[0];
          item.title_id = $(wrongs[i]).attr("data").split("-")[1];
          data2.wrongList[i] = item
        }
        
        $.ajax({
          url: "http://127.0.0.1:3000/addWrongList",
          data: data2,
        });

        let data3 = {};
        data3.user_id = data.user_id; 
        data3.learninList = [];
        let learnins = $(".title")
        for(let i = 0; i < learnins.length; i++) {
          let item = {};
          item.test_id = $(learnins[i]).attr("data").split("-")[0];
          item.title_id = $(learnins[i]).attr("data").split("-")[1];
          item.correct = $(learnins[i]).find("div:last").attr("class");
          if($(learnins[i]).find(".title_options").length != 0) {
            item.answer = $(learnins[i]).find(".title_options input:checked").val();

          }else {
            item.answer = $(learnins[i]).find("textarea").val()

          }
         
          if(!item.answer) item.answer = "无";
          data3.learninList[i] = item;
        }

        $.ajax({
          url: "http://127.0.0.1:3000/addLearninList",
          data: data3,
        });
    }
    

    //根据查找题目id查找题目全部信息
    let searchTitle = function (id) {
      for (let item of titles) {
        if (item.title_id === id) return item
      }
    }

    //增加必要事件监听事件
    let eventList = function () {
      //监听提交答题按钮
      $("body").on("click", "#resultRead", function () {
        $(".result").css("display", "none")
      })

      //点击"返回"与"退出"按钮时返回上一页面
      $("body").on("click", ".back", function () {
        window.location.href = `../index.html?user_id=${data.user_id}`
      })

    }

    let data = getUrlParam();

    async function init() {
      if (data.state == 1) {
        test = (await getTest(data))[0];
        titles = await getTitles(data);
      } else {
        titles = await getTitles1(data);
        test.test_title = data.test_title;
        test.test_num = titles.length;
        test.test_score = 0;
        for (let item of titles) {
          test.test_score += item.title_score
        }
      }

      showHeader();
      showtitles();
      submitTest();
      eventList();
      searchTitle();
    }

    init();
  }

})(window);

window.testInit();