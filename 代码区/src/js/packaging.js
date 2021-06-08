/**
 * 名称：轮播事件
 * @param {*} obj    初始状态    必填isSwitch和isNav,switchClass和clickClass必填
 */
function SlideShow(obj) {
    this.defaults = {
        'clickNav': 'false',  //小圆点点击事件
        'switch': 'false',    //左右箭头点击事件
        'autoPlay': 'true',  //自动播放
        'isSwitch': 'false',  //是否拥有左右箭头
        'isNav': 'false',     //是否拥有小圆点
        'switchClass': '',  //左右箭头class
        'clickClass': '',    //小圆点父标签ul的class
        'elem': '',      //在最外层id或者class
        'wrap': ''     //图片div的id或者class
    }
    this.elem = $(obj.elem)    //获取在最外层id或者class
    this.wrap = $(obj.wrap)    //获取图片div的id或者class
    this.index = -1      //设置下表初始值
    this.active = $.extend({},this.defaults,obj)   //初始状态
    this.setTime()     //设置定时器
    this.clickNav()     //点击小圆球切换
    this.switch()    //点击左右箭头切换
    this.outTime()    //停止定时器
}

SlideShow.prototype = {
    setTime: function () {
        this.time = setInterval(function(){
            if(this.active.autoPlay === true) {
                this.move(true)
                this.nav(this.index % this.wrap.children().length)
            }
        }.bind(this),2000);
    },
    outTime: function() {
        let byIndex = this;
        this.elem.mouseover(function() {
            clearInterval(byIndex.time)
        }).mouseout(function() {
            byIndex.setTime()
        })
    },
    move: function(flag) {
        if(flag === true) {
            this.index++
        } else if(flag === false) {
            this.index--
            if (this.index < 0) {
                this.index = this.wrap.children().length - 1;
            }
        }
        this.nav(this.index % this.wrap.children().length);
        this.wrap.stop().animate({right: (this.index % this.wrap.children().length)*this.wrap.children().eq(0).width()})
    },
    nav: function(index) {
        if(this.active.isNav === true) {
            $(this.active.clickClass).children().eq(index).addClass('show').siblings().removeClass('show')
        }
    },
    clickNav: function() {
        if(this.active.clickNav === true && this.active.isNav === true) {
            let byIndex = this
            $(byIndex.active.clickClass).children().on('click',function() {
                byIndex.index = $(this).index() -1
                byIndex.move(true)
                byIndex.nav($(this).index())
            })
        }
    },
    switch: function() {
        if(this.active.switch === true && this.active.isSwitch === true) {
            let byIndex = this
            $(byIndex.active.switchClass).children().eq(0).on('click',function() {
                byIndex.move(false)
            })
            $(byIndex.active.switchClass).children().eq(1).on('click',function() {
                byIndex.move(true)
            })
        }
    }
};

/**
 * 名称：侧边栏
 * @param {*} elem  最外层id或者class   必填
 * @param {*} flag 判断是否需要侧边栏    非必填
 */

function Sidebar(elem,flag) {
    this.default = true
    this.elem = $(elem)   //最外层id或者class
    this.flag = flag || this.default //判断是否需要侧边栏
    this.isClick = false   //默认没有点击事件
    this.toTop()    //回到顶部
    this.active()     //侧边栏的显示隐藏
    this.color()    //侧边栏颜色随滚动的变化
    this.click()   //点击事件颜色变化
}

Sidebar.prototype = {
    toTop: function () {
        this.elem.children().eq(2).click(function() {
            $(document).scrollTop(0)
            $($('nav a')[0].parentNode).css({"background-color": "rgb(236,245,255)"}
            ).siblings().css({"background-color": "#fff"})
        })  
    },
    active: function () {
        if(this.flag === false) {
            this.elem.css({"display":"none"})
        } else  {
            $($('nav a')[0].parentNode).css({"background-color": "rgb(236,245,255)"})
            if($(window).width() <= 1500) {
                this.elem.css({"display":"none"})
            }
            let $this = this     
            $(window).resize(function() {     
                if($(window).width() <= 1500) {
                    $this.elem.fadeOut()
                } else {
                    $this.elem.fadeIn()
                }
            })
        } 
    },      
    color: function () {
        $(window).scroll(function () {
            if(this.isClick==true) {
                return
            }
            let scrollTop = $(document).scrollTop()
            $('nav a').each(function (index,el) {
                if($(el.hash).offset() && scrollTop >= $(el.hash).offset().top) {
                    $(this.parentNode).css({"background-color": "rgb(236,245,255)"}
                    ).siblings().css({"background-color": "#fff"})
                }
            })
        })
    },
    click: function() {
        $('nav a').click(function(){
            isClick = true
            $(this.parentNode).css({"background-color": "rgb(236,245,255)"}
            ).siblings().css({"background-color": "#fff"})
            setTimeout(function() {
                isClick = false
            },100)
        })
    }
};

/**
 * 名称：上下分页
 * @param {*} obj   elem和wrap必填
 */
function Paging(obj) {
    this.default = {  
        'elem': '',      //试卷总id或class   
        'wrap': '',     //试卷总id或class
        'len': 0        //默认页面显示为0
    }
    this.elem = $(obj.elem)     //显示页码总id或class
    this.wrap = $(obj.wrap)     //显示试卷总id或class
    this.totalData = this.wrap.children('div').length;      //数据总条数
    this.showData = obj.len || this.default.len      //每页显示的条数
    this.pageCount = Math.ceil(this.totalData / this.showData)    //总页数
    this.maxPage = 7       //最多显示数为7
    this.current = 1        //当前第几页,初始值为1
    this.init()             //初始页面
    this.switch()             //上下页切换页面
    this.move()              //点击页面切换页面
    this.jump()             //跳转页面
}  

Paging.prototype = {
    //初始页面
    init: function () {
        this.elem.children().eq(0).children().html(this.current+'/'+this.pageCount)
        for(let i=1;i<=this.pageCount;i++) {
            this.elem.children().eq(2).append('<a class="page-num">'+i+'</a>')
        }
        
        if(this.pageCount === 1) {
            this.elem.children().css({"color":"rgb(240, 116, 116)"})
        }

        this.active(this.current)
    },
    //点击页面切换页面
    move: function () {
        let $this = this
        this.elem.children().eq(2).children().on("click",function() {
            $this.current = parseInt($(this).html()) 
            let pgIndex = parseInt($(this).index())+1;
            $this.active(pgIndex)
        })
    },
     //跳转页面
    jump: function() {
        let $this = this
        this.elem.children('a:last').on("click",function() {
            let pgIndex = parseInt($this.elem.children('span:last').children('input').val())
            if(pgIndex <= $this.pageCount && pgIndex >0) {
                $this.current = pgIndex
                $this.active(pgIndex)
            } 
            let maxLen = $this.elem.children().eq(2).children()
            if(pgIndex>7) {
                for(let i=$this.maxPage-1;i>=0;i--) {
                    maxLen.eq(i).html(pgIndex)
                    pgIndex--
                }
            }
            $this.elem.children('span:last').children('input').val('')
        })
    },
    //上下页切换页面
    switch: function() {
        let $this = this
        //上一页事件
        this.elem.children('a:first').on("click",function() {
            if($this.current > 1) {
                $this.current--
            }
            let maxLen = $this.elem.children().eq(2).children()
            if($this.current >= $this.maxPage) {
                for(let i=0;i<$this.maxPage;i++) {
                    let x = parseInt(maxLen.eq(i).html())-1
                    maxLen.eq(i).html(x);
                }
            }
            $this.active($this.current)
        })
        //下一页事件
        this.elem.children('a:nth-last-child(3)').on("click",function() {
            if($this.current < $this.pageCount) {
                $this.current++
            }
            let maxLen = $this.elem.children().eq(2).children()
            let flag = $this.maxPage-1
            if($this.current > $this.maxPage && $this.current <= $this.pageCount) {
                for(let i=0;i<$this.maxPage;i++) {
                    let x = parseInt(maxLen.eq(i).html())+1
                    if(maxLen.eq(flag).html() == $this.pageCount) {
                        break;
                    }
                    maxLen.eq(i).html(x);
                }
            }
            $this.active($this.current)
        })
    },
    //显示样式
    active: function(index) {
        this.wrap.children().css({"display":"none"})
        let i = index>this.maxPage? this.maxPage-1:index-1
        this.elem.children().eq(2).children().eq(i).css({"color": "#fff","background-color": "rgb(240, 116, 116)"}
        ).siblings().css({"color": "#000","background-color": "#fff"})

        this.elem.children().eq(0).children().html(this.current+'/'+this.pageCount)
      
        for(let i=0,j=0;i<this.showData && j<this.pageCount;i++,j++) {
            let x = this.showData*(this.current-1) +i
            this.wrap.children().eq(x).css({"display": "block"})
        }
    }
};
