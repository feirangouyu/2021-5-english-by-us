/*
    @auto:邹昀

    个人主页模块：
        功能1：页面加载后,通过ajax获取当前用户的个人信息
        功能2：通过ajax请求修改当前用户个人信息
        功能3：页面加载后,通过ajax请求获取当前用户的学习记录
        功能4：通过ajax请求获取当前题目的信息
        功能5：在页面上显示用户个人信息
        功能6：用户提交个人信息修改
        功能7：显示用户的学习记录以及错题记录
*/

(function () {
  window.myPageInit = function () {
    let data ; //网页地址解析参数，得到用户id 
    // data.user_id = 1
    let personalData; //用户信息
    let studyData; //学习记录

    
    //解析url地址，获得地址参数
    let getUrlParam = function () {
      let url = document.location.toString()
      let urlParmStr = url.slice(url.indexOf('?') + 1)
      let arr = urlParmStr.split('&')
      let data = {};
      data.user_id = arr[0].split("=")[1] * 1;
      return data;
    };

    // 增加必要监听事件
    let eventList = function () {
      $("body").on("mouseover", ".content-left .list li", function () {
        $(".content-left .list li").removeClass("hover")
        $(this).addClass("hover")
      })

      $("body").on("mouseout", ".content-left .list li", function () {
        $(".content-left .list li").removeClass("hover")
      })

      $("body").on("click", ".content-left .list li", function () {
        let className = $(this).attr("class").split(" ")[0]
        if (className === "back") {
          window.location.href = "../index.html"
        } else {
          $(".content-left .list li").removeClass("on")
          $(this).addClass("on")
          $(".content-right > div").css("display", "none")
          $(`.content-right .${className}`).css("display", "block")
        }
      })

      $("body").on("click", ".sex input", function () {
        $(".sex input").removeAttr("checked")
        $(this).attr("checked", "")
      })

      $("body").on("change", ".my-data select", function () {
        $(".my-data select option").removeAttr("selected")
        $(".my-data select option:selected").attr("selected", "")
      })

      $("body").on("click", ".my-data #setData", function () {
        setData()
      })
    }

    //增加年龄下拉框的下拉列表
    let addSelect = function () {
      let select = $(".my-data select");
      for (let i = 12; i <= 40; i++) {
        select.append(`<option value="${i}">${i}</option>`)
      }
    }

    //功能1：页面加载后，通过ajax获取当前用户的个人信息
    let getPersonalData = function () {
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

    //功能2：通过ajax请求修改当前用户个人信息
    let setPersonalData = function (data) {
      $.ajax({
        url: "http://127.0.0.1:3000/setPersonalData",
        data: data
      });
    }

    //功能3：页面加载后,通过ajax请求获取当前用户的学习记录
    let getLearninList = function () {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "http://127.0.0.1:3000/getLearninList",
          data: data,
          success: function (result) {
            resolve(result)
          }
        });
      })
    };

    //功能4：通过ajax请求获取当前题目的信息
    let getTitleData = function (titile) {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "http://127.0.0.1:3000/getTitleData",
          data: titile,
          success: function (result) {
            resolve(result)
          }
        });
      })
    };

    //功能5：在页面上显示用户个人信息
    let showData = function () {
      $(".icon-src").attr("src", personalData.icon)
      $(".name").text(personalData.user_name)
      $(".integral span:last").text(personalData.integral)
      $(".user_phone span:last").text(personalData.user_phone)
      $(".icon img").attr("src", personalData.icon)
      if (personalData.sex) {
        if (personalData.sex === "男") $(".sex input:first").attr("checked", "")
        else $(".sex input:last").attr("checked", "")
      }
      if (personalData.age) {
        $(`.my-data select option[value=${personalData.age}]`).attr("selected", "")
      }
      if (personalData.email) {
        $(".email input").val(personalData.email)
      }
      if (personalData.signa) {
        $(".signa textarea").val(personalData.signa)
      }
    }

    //功能6：用户提交个人信息修改
    let setData = function () {
      let data = {};
      data.user_id = personalData.user_id
      data.user_name = $(".user_name span:last").text();
      data.integral = $(".integral span:last").text() * 1;
      data.user_phone = $(".user_phone span:last").text();
      data.icon = $(".icon img").attr("src");
      data.sex = $(".sex input[checked]").val();
      data.age = $(".my-data select option[selected]").val() * 1;
      data.email = $(".email input").val();
      data.signa = $(".signa textarea").val()

      setPersonalData(data)
    }

    //功能7：显示用户的学习记录以及错题记录
    let showrRecord = async function () {
      let studyNum = studyData.length;
      let wrongNum = 0;
      for (let i = 0; i < studyData.length; i++) {
        let title = {};
        title.test_id = studyData[i].test_id;
        title.title_id = studyData[i].title_id;
        let titleData = (await getTitleData(title))[0];

        let item;
        let itemDiv1;
        let itemDiv2;
        //显示选择题的学习记录
        if (titleData.title_type === 1) {
          let options = titleData.title_options.split(";");
          item = `
      <div class="title ${studyData[i].correct}" data="${studyData[i].test_id}-${studyData[i].title_id}">
      <div class="title_content">
        <span>${i+1}.</span>
        <span>(${titleData.title_score}分)</span>
        <span>${titleData.title_content}</span>
      </div>
      <div class="title_options">
        <div><input type="radio" name="option${i+1}" value="A" disabled> <span>A.${options[0]}</span></div>
        <div><input type="radio" name="option${i+1}" value="B" disabled> <span>B.${options[1]}</span></div>
        <div><input type="radio" name="option${i+1}" value="C" disabled> <span>C.${options[2]}</span></div>
        <div><input type="radio" name="option${i+1}" value="D" disabled> <span>D.${options[3]}</span></div>
      </div>
      <div>
        <p>【正确答案】: ${titleData.title_answer}</p>
        <p>【解析】: ${titleData.title_parsing}</p>
        </div>
      </div>`

          itemDiv1 = $(item);
          let option1 = itemDiv1.find(`input[value="${studyData[i].answer}"]`);
          option1.attr("checked");
          option1.parent().addClass("checked");

          itemDiv2 = $(item);
          let option2 = itemDiv2.find(`input[value="${studyData[i].answer}"]`);
          option2.attr("checked");
          option2.parent().addClass("checked");
        }

        //显示翻译题的学习记录
        else {
          let item = `
      <div class="title" data="${studyData[i].test_id}-${studyData[i].title_id}">
        <div class="title-content">
          <p><span>${i+1}.(${titleData.title_score}分)</span>${titleData.title_content}</p> 
        </div>
        <div class="title-write">
          <textarea name="text${i+1}" cols="100" rows="15" disabled>${studyData[i].answer}</textarea>
        </div>
        <p style = "line-height:40px">【正确答案】:<br/> ${titleData.title_answer}</p>
        <p>【解析】: ${titleData.title_parsing}</p>
      </div>`

          itemDiv1 = $(item);
          itemDiv2 = $(item);
        }

        if (studyData[i].correct === "false") {
          wrongNum++;
          $(".wrong .titles").append(itemDiv1)
        }
        $(".study .titles").append(itemDiv2)
      }
      $(".study .num span").text(studyNum);
      $(".wrong .num span").text(wrongNum);

      let obj = {
        elem: '.study .page',
        wrap: '.study .titles',
        len: 3
      }
      new Paging(obj);

      let obj1 = {
        elem: '.wrong .page',
        wrap: '.wrong .titles',
        len: 3
      }
      new Paging(obj1);
    }

    async function init() {
      data = getUrlParam();
      eventList();
      addSelect();

      personalData = (await getPersonalData())[0];
      showData()
      studyData = await getLearninList();
      showrRecord();

    }

    init();
  }
})(window)

window.myPageInit();
