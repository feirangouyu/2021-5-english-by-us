(() => {
    let questionData;
    let replyData;
    let data = {};

     //1.轮播实现 
     $.ajax({
        type: 'GET',
        url: '../json/index.json',
        async: true,
        dataType: "json",
        data: {},
        success: function (data) {
            data.advertiseData.forEach(function (value) {   //广告轮播的生成
                let str2 = `
                        <a href="${value.url}" target="_blank">
                            <img src=".${value.img}" />
                        </a>
                    `
                $('.slideshow-wrap').append(str2)
                $('.slideNav').append('<li></li>')
            })
            let iWidth = $('.slideNav li').length * $('.slideshow-wrap').children().width()
            let nWidth = $('.slideNav li').outerWidth(true) * $('.slideNav li').length
            $('.slideshow-wrap').css({ 'width': iWidth })
            $('.slideNav').css({ 'width': nWidth })
        }
    })

    //解析地址  data为user_id和question_id
    let getUrlParam = function () {
        let url = document.location.toString()
        let urlParmStr = url.slice(url.indexOf('?') + 1)
        let arr = urlParmStr.split('&')
        let data = {};
        data.user_id = arr[0].split("=")[1] * 1;
        data.question_id = arr[1].split("=")[1] * 1
        return data;
    };

    //获取问题数据
    let getQuestionitemData = function (data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://127.0.0.1:3000/getQuestionitemData",
                data: data,
                success: function (result) {
                    resolve(result)
                }
            });
        })
    };

    //获取回答数据
    let getReplydata = function (data) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "http://127.0.0.1:3000/getReplydata",
                data: data,
                success: function (result) {
                    resolve(result)
                }
            });
        })
    };

    let showData = function () {
        let qTitle = `
            <div class="question-item">
                <h3 class="item-content">${qusetionData[0].question}</h3>
                <div class="item-box">
                    <span class="focus">关注问题</span>
                    <span class="btn-write">
                        <svg class="Zi Zi--Edit Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em"
                            height="1.2em">
                            <path
                                d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z">
                            </path>
                        </svg>
                        写回答</span>
                </div>
            </div>
        `
        let reply = `
            <div class="reply">
                <span>共${replyData.length}条回答</span>
                <div class="reply-wrap">
                </div>
            </div>
        `
        $('.item').append(qTitle)
        $('.item').append(reply)

        let noReply = `<span class="isReply">还没有回答，欢迎来回答</span>`

        if (replyData.length === 0) {
            $('.reply-wrap').append(noReply)
        } else {
            for (let i = 0; i < replyData.length; i++) {
                let time = replyData[i].ctime.split('T')[0];
                console.log(time);
                let replyItem = `
                    <div class="reply-item">
                        <div>​
                            <div class="user">
                                <img src="${replyData[i].icon}" />
                                <span>${replyData[i].user_name}</span>
                                <span class="like">​<svg class="Zi Zi--Heart Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>喜欢</span>
                            </div>
                            <div class="item">
                                <div class="item-number">${replyData[i].likes} 人喜欢</div>
                                <div class="item-content">${replyData[i].content}</div>
                                <div class="item-time">发布于${time}</div>
                            </div>   
                        </div>
                    </div>
                `
                $('.reply-wrap').append(replyItem)
            }
        }

    }

    // 问题的回答
    let writeInit = function () {
        let writeDiv = `
            <div class="write">
                <textarea type="text" class="text" placeholder="请输入你的看法......"></textarea>
                <div class="sub-answer">
                    <div class="set">
                        <span style="display: inline-flex; align-items: center;">​
                            <svg class="Zi Zi--Settings Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M20.868 17.185a.896.896 0 0 1-.452.137c-.123 0-1.397-.26-1.617-.233-1.354.014-1.78 1.276-1.835 1.742-.055.453 0 .892.191 1.303a.8.8 0 0 1-.068.851C16.224 21.877 14.922 22 14.73 22a.548.548 0 0 1-.356-.151c-.11-.096-.685-1.138-1.069-1.468-1.304-.955-2.247-.329-2.63 0-.398.33-.672.7-.836 1.125a.632.632 0 0 1-.329.37c-1.354.426-2.918-.919-3.014-1.056a.564.564 0 0 1-.123-.356c-.014-.138.383-1.276.342-1.688-.342-1.9-1.836-1.687-2.096-1.673a3.192 3.192 0 0 0-.918.178.873.873 0 0 1-.59-.055c-.887-.462-1.136-2.332-1.109-2.51.055-.315.192-.521.438-.604.425-.164.809-.452 1.151-.85.931-1.262.343-2.25 0-2.634-.342-.356-.726-.645-1.15-.809-.138-.041-.234-.151-.33-.316-.38-1.434.613-2.552.867-2.77.255-.22.6-.055.723 0 .425.164.877.219 1.343.15C6.7 6.636 6.784 5.141 6.81 4.908c.014-.247-.11-1.29-.137-1.4a.488.488 0 0 1 .027-.315C7.317 2.178 9.071 2 9.222 2a.56.56 0 0 1 .439.178c.11.124.63 1.111 1 1.4.4.338 1.583.83 2.59.013.397-.274.959-1.29 1.082-1.413A.55.55 0 0 1 14.717 2c1.56 0 2.329 1.029 2.438 1.22a.458.458 0 0 1 .069.371c-.028.151-.329 1.152-.26 1.605.365 1.537 1.383 1.742 1.89 1.783.493.028 1.644-.356 1.809-.343a.63.63 0 0 1 .424.206c.535.31.85 1.715.905 2.14.027.233-.014.439-.11.562-.11.138-1.165.714-1.48 1.112-.855.982-.342 2.25-.068 2.606.26.37 1.22.905 1.288.96.15.137.26.302.315.494.146 1.413-.89 2.387-1.069 2.47zm-8.905-.535c.644 0 1.246-.123 1.822-.356a4.576 4.576 0 0 0 1.493-1.016 4.694 4.694 0 0 0 1-1.495c.247-.562.357-1.18.357-1.81 0-.659-.11-1.262-.356-1.825a4.79 4.79 0 0 0-1-1.481 4.542 4.542 0 0 0-1.494-1.002 4.796 4.796 0 0 0-3.631 0 4.627 4.627 0 0 0-1.48 1.002c-.424.425-.767.919-1 1.481a4.479 4.479 0 0 0-.37 1.825c0 .644.124 1.248.37 1.81a4.62 4.62 0 0 0 1 1.495c.425.426.918.768 1.48 1.016a4.677 4.677 0 0 0 1.809.356z" fill-rule="evenodd"></path></svg>
                        </span>设置
                    </div>
                    <button type="button" class="sumbit">提交回答</button>
                </div>
            </div>
        `

        $('.question-item').append(writeDiv);
    }

    let setQuestionlData = function (data) {
        $.ajax({
            url: "http://127.0.0.1:3000/setQuestionlData",
            data: data
        });
    }

    let setReplyData = function (data) {
        $.ajax({
            url: "http://127.0.0.1:3000/setReplyData",
            data: data
        });
    }

    //2.问题标题

    async function init() {
        data = getUrlParam();
        qusetionData = await getQuestionitemData(data)
        replyData = await getReplydata(data);
        showData()
        writeInit()
        console.log(qusetionData);

        let status = $('.btn-write').attr('class')   //判断状态
        /*点击回答问题 */
        $('.btn-write').on("click", function () {
            if (status == this.className) {
                $(this).parent().next().css({ 'display': 'block' })
                $(this).attr('class', status + ' true')
            } else {
                $(this).parent().next().css({ 'display': 'none' })
                $(this).attr('class', status)
            }
        })

        //确认提交
        $('.sumbit').on("click", function () {
            let obj = {};
            let rData = {};
            let divClass = $(this).parent().parent()
            let text = divClass.children('.text')
            rData.content = text.val()
            rData.likes = 0

            console.log(qusetionData[0].num);

            if (text.val() !== '') {
                text.val('')

                divClass.css({ 'display': 'none' })
                divClass.prev().children('.btn-write').attr('class', status)

                divClass.prev().children('.statusItem reply')
                obj.num = qusetionData[0].num + 1
                obj.id = data.question_id
                obj.focus = qusetionData[0].focus
                rData.question_id = data.question_id

                divClass.prev().children('.item-status').children('.statusItem.reply').html(data.num + " 回答")
                console.log(rData);
                setQuestionlData(obj)
                setReplyData(rData)
            } else {
                text.attr({ "placeholder": "提交内容不能为空!!!" })
            }
        })

        console.log(replyData);
        console.log(data);
    }

    init();
})();

(() => {
    let str1 = `
        <div class="slideshow-wrap"></div>
        <div class="count">
            <ul class="slideNav"></ul>
        </div>
    `
    //广告轮播的初始化
    $('.slideshow').append(str1)

    //实现轮播和侧边栏功能
    $(window).ready(function () {
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
    })

    //回到顶部
    $(window).scroll(function () {
        var top = Math.round($(document).scrollTop());
        if (top >= 300) {
            $('.toTop').fadeIn(400)
        } else {
            $('.toTop').fadeOut(400)
        }
    })

    $('.toTop').click(function () {
        $(document).scrollTop(0)
    });

})();