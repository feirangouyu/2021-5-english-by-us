//解析url地址，获得地址参数
let getUrlParam = function () {
    let url = document.location.toString()
    let urlParmStr = url.slice(url.indexOf('?') + 1)
    let arr = urlParmStr.split('&')
    console.log(arr[0].split("=")[1]);
    return arr[0].split("=")[1];
};


(() => {
    //异步调取数据初始页面     
    $.ajax({
        type: 'GET',
        url: '../json/index.json',
        async: true,
        dataType: "json",
        data: {},
        success: function (data) {
            let user_id = getUrlParam();
            data.navDate.forEach(function (value) {
                $('ul').append('<li><a href="#">' + value + '</a></li>')

            })
            for (let i = 1; i <= 150; i++) {
                if (i <= 6) {
                    let str = `
                    <div class="paper">
                        <a href="../test/test.html?state=1&test_id=${i}&user_id=${ user_id }" >
                            <img src="../images/title${i}.jpg"/>
                            <span>${data.libraryData[i-1].name}</span>
                        </a>
                    </div>`
                    $('.library-wrap').append(str)
                }else if(i > 6 && i <= 9) {
                    let str = `
                    <div class="paper">
                        <a href="#" >
                            <img src="../images/title${i-6}.jpg"/>
                            <span>${data.libraryData[i-6].name}</span>
                        </a>
                    </div>`
                    $('.library-wrap').append(str)
                }else $('.library-wrap').append('<div class="paper">' + i + '</div>')
            }

            if (version() === true) {
                init()
                $(window).resize(function () {
                    init()
                })
            }

            //导航栏  
            $(document).ready(function () {
                $('nav ul a').on('click', function () {
                    $(this.parentNode).css({
                        'background-color': "rgb(240, 116, 116)",
                        "border-radius": "100px"
                    }).siblings().css({
                        'background-color': "#fff"
                    })
                })
            });

            let len, flag;
            if (version() === false) {
                len = 5
                flag = false
            } else {
                len = 9
                flag = true
            }
        
            let pageObj = {
                elem: '.page',
                wrap: '.library-wrap',
                len: len
            }
            new Paging(pageObj)

        }
    });






    //pc端处理页面元素初始
    function init() {
        let width = $('.library-wrap .paper').width()
        let x = parseInt($(window).width() / $('.library-wrap .paper').width())
        let j = $('.library-wrap .paper').length % x
        for (let i = 0; i < x - j; i++) {
            $('.library-wrap .paper:last').after('<span style="width:' + width + 'px"></span>')
        }
    };



})();


