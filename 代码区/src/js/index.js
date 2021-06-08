let state; //登录状态，-1:404， 0：未登录，1：已登录


let userInit = function () {
    let url = document.location.toString()
    let urlParmStr = url.slice(url.indexOf('?') + 1)
    let arr = urlParmStr.split('&')
    if (url.indexOf('?') === -1) state = 0;
    else if (arr.length >= 2 || !url.indexOf("user_id")) { state = -1; }
    else {
        window.$user_id = arr[0].split("=")[1];// 获取用户id
        state = 1;
    }
};

(() => {
    //判断用户状态
    userInit();

    //请求用户信息
    if (state === 1) {
        $.ajax({
            url: "http://127.0.0.1:3000/getPersonalData",
            data: { user_id: window.$user_id },
            success: function (result) {
                $(".icon-src").attr("src", result[0].icon)
                $(".name").text(result[0].user_name)
            }
        })
    }


    //异步获取数据初始页面
    $.ajax({
        type: 'GET',
        url: './json/index.json',
        async: true,
        dataType: "json",
        data: {},
        success: function (data) {
            let loginSrc = "./login/login.html"
            if (state === 1) {
                $(".library-more").attr("href", `./library/library.html?user_id=${window.$user_id}`)
            } else {
                $(".library-more").attr("href", "./login/login.html")
            }
            data.linkData.forEach(function (value) {  //链接的生成
                $('.link-wrap').append('<a href="' + value.url + '" target="_blank">' + value.name + '</a>')
            })
            data.libraryData.forEach(function (value, i) {   //卷库的生成
                let src;
                if (state === 1) src = `./test/test.html?state=1&test_id=${i + 1}&user_id=${window.$user_id}`;
                else src = loginSrc;
                $('.library-wrap').append('<div class="paper">'
                    + `<a href="${src}">`
                    + '<img src=" ' + value.img + '"/>'
                    + '<span>' + value.name + '</span>'
                    + '</a>'
                    + '</div>')
            })
            data.useData.forEach(function (value, i) {   //应用的生成
                let src;
                if (state === 1) {
                    src = value.url;
                    if (i === 0) src = `./test/test.html?state=1&test_id=${i + 1}&user_id=${window.$user_id}`;
                    else if (i === 1) src = `./practice/practice.html?user_id=${window.$user_id}`;
                    else if (i === 3) src = `./pk/pk.html?user_id=${window.$user_id}`;
                    else if (i === 4) src = `./discuss/discuss.html?user_id=${window.$user_id}`;
                } else src = loginSrc;
                $('.application-wrap').append('<div>'
                    + `<a href="${src}" target="_blank">`
                    + '<img src=" ' + value.img + '"/>'
                    + '<span>' + value.name + '</span>'
                    + '</a>'
                    + '</div>')
            })

            data.advertiseData.forEach(function (value) {   //广告轮播的生成
                $('.slideshow-wrap').append('<a href="' + value.url + '" target="_blank">'
                    + '<img src="' + value.img + '" />'
                    + '</a>'
                )
                $('.slideNav').append('<li></li>')
            })
            let iWidth = $('.slideNav li').length * $('.slideshow-wrap').children().width()
            let nWidth = $('.slideNav li').outerWidth(true) * $('.slideNav li').length
            $('.slideshow-wrap').css({ 'width': iWidth })
            $('.slideNav').css({ 'width': nWidth })

            data.slideData.forEach(function (value) {   //鸡汤轮播
                $('.slideshow-wrapper').append('<img src="' + value.img + '"/>')
            })
            $('.slideshow-wrapper').css({'width': $('.accumulate-slideshow').width()})
            $('.slideshow-wrapper img').css({"width": $('.accumulate-slideshow').width()})
            console.log($('.accumulate-slideshow').width());

            data.wordData.forEach(function (value) {
                $('.word-box>div').append(`<p>${value.en}</p>`)
                $('.translation-box>div').append(`<p>${value.translation}</p>`)
                $('.eg-box>div').append(`<p>${value.eg}</p>`)
            })

            let index=1
            show(index)
            $('.num').html(index+'/'+$('.word-box>div>p').length)
            $('.pre').on('click', function() {
                if(index > 1) {
                    index--
                    show(index)
                }
            })
            $('.next').on('click', function() {
                if(index < $('.word-box>div>p').length) {
                    index++
                    show(index)
                }
            })
            function show(index) {
                $('.num').html(index+'/'+$('.word-box>div>p').length)
                $('.word-box>div>p').eq(index-1).css('display', 'block'
                ).siblings().css('display', 'none')
                $('.translation-box>div>p').eq(index-1).css('display', 'block'
                ).siblings().css('display', 'none')
                $('.eg-box>div>p').eq(index-1).css('display', 'block'
                ).siblings().css('display', 'none')
            }
        }
    })



    //广告轮播的初始化
    $('.slideshow').append('<div class="slideshow-wrap"></div>'
        + '<div class="count">'
        + '<ul class="slideNav"></ul>'
        + '</div>'
    )

    //鸡汤轮播
    $('.accumulate-slideshow').append('<div class="slideshow-wrapper"></div>')

    //单词推荐
    $('.word-wrap').append('<div class="box1"></div>')
    let wordStr = `
                <div class="word-box">
                    <h4>单词</h4>
                    <div></div>
                </div>
                <div class="translation-box">
                    <h4>注释</h4>    
                    <div></div> 
                </div>
                <div class="eg-box">
                    <h4>例句</h4>
                    <div></div>
                </div>`
    $('.box1').append(wordStr)


    //顶部移动固定
    $(window).scroll(function () {
        let top = Math.round($(document).scrollTop())
        if (top > 40) {
            $('header').css("position", "fixed")
        } else {
            $('header').css("position", "")
        }
    });

})();

//实现轮播和侧边栏功能
$(window).ready(function () {
    new Sidebar("#navbar", true)
    let advObj = {
        clickNav: true,  //小圆点点击事件
        switch: false,    //左右箭头点击事件
        autoPlay: true,  //自动播放
        isSwitch: false,  //是否拥有左右箭头
        isNav: true,     //是否拥有小圆点
        clickClass: '.slideNav',    //小圆点class
        elem: '.slideshow',      //在最外层id或者class
        wrap: '.slideshow-wrap'     //图片div的id或者clas
    }
    new SlideShow(advObj)
    let obj = {
        clickNav: false,  //小圆点点击事件
        switch: false,    //左右箭头点击事件
        autoPlay: true,  //自动播放
        isSwitch: false,  //是否拥有左右箭头
        isNav: false,     //是否拥有小圆点
        elem: '.accumulate-slideshow',      //在最外层id或者class
        wrap: '.slideshow-wrapper'     //图片div的id或者clas
    }
    new SlideShow(obj)
})

$("body").on("click", "#onLogin", function () {
    if (state != 1) window.open('./login/login.html', '_self');
    else window.open(`./myPage/myPage.html?user_id=${window.$user_id}`);
})

