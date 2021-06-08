/*
    @auto:胡雯

    题型分类模块：
        功能1：页面加载后，发送ajax请求得到每个题型对应的题目数量
        功能2：点击题型盒子，跳转到答题页面
        
*/

(function() {
  window.PracticeInit = function () {
     //功能1：页面加载后，发送ajax请求得到每个题型对应的题目数量
  let getTypeNum = function () {
 
    return new Promise((resolve, reject) => { 
      $.ajax({
      url: "http://127.0.0.1:3000/getTypeNum",
      success: function (result) {
        resolve(result)
      }
      }); 
    })
  };

  //解析地址参数
  let getUrlParam = function () {
    let url = document.location.toString()
    let urlParmStr = url.slice(url.indexOf('?') + 1)
    let arr = urlParmStr.split('&')
    return arr[0].split("=")[1] * 1;
  };

  //功能2：点击题型盒子，跳转到答题页面
  let eventList = function () {
    $("body").on("click", ".practice div", function () {
      let data = {}
      data.user_id = getUrlParam(), 
      data.state = 2, 
      data.test_title = encodeURI($(this).find("p").text().split("(")[0]);
      data.title_type = $(this).attr('class').split("e")[1];
    
      location.href = `../test/test.html?user_id=${data.user_id}&state=${data.state}&test_title=${data.test_title}&title_type=${data.title_type}`
    })

    $("body").on("click",".back",function () {
      let data = {}
      data.user_id = getUrlParam(), 
      window.location.href = `../index.html?user_id=${data.user_id}`
    })
  }

  async function init () {
    test = await getTypeNum();
    let span = $(".practice span");
    $(".practice span").text(0)
    for(let i = 0; i < test.length; i++) {
      span.eq(test[i].title_type - 1).text(test[i].num)
    }
    
    eventList();
  }

  init();
  }
 
})(window)

window.PracticeInit();
