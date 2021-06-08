/*
    @auto:金洁

    登录注册模块：
        功能1：实现在登录页面中，账号登录盒子与手机扫码登录盒子的切换（display：显示或隐藏）
        功能2：在页面中，实现登录页面与注册页面的切换（display：显示或隐藏）
        功能3：完成页面中的某些特定鼠标事件效果的实现
        功能4：对登录与注册过程中用户的输入格式反馈错误提示
        功能5：登录功能，用户提交信息后，向后台请求数据验证用户信息是否正确，正确则跳转到主页面，反则提示错误信息
        功能6：注册功能，用户提交信息后，将数据发送给后台，后台将新用户信息写入数据库中，并跳转到主页面
        功能7：使用QRCode.js库生成随机二维码
*/

(function () {
    window.loginInit = function () {

        let init = function () {
            if(!getUrlParam()) return;
            eventList();
            login();
            verify();
            register();
            qrcodeCode();
        }

        /*
            功能1：实现在登录页面中，账号登录盒子与手机扫码登录盒子的切换（display：显示或隐藏）
            功能2：在页面中，实现登录页面与注册页面的切换（display：显示或隐藏）
            功能3：完成页面中的某些特定鼠标事件效果的实现
        */
        let eventList = function eventList() {
            //账号密码登录与二维码登录的样式切换
            $("body").on("click", "#loginAcc", function () {
                $(".login-account").css("display", "block");
                $(".login-sweep").css("display", "none");
                $("#loginAcc p").css("color", "rgb(64,158,255)")
                $("#loginSweep p").css("color", "#333")
            })

            $("body").on("click", "#loginSweep", function () {
                $(".login-account").css("display", "none");
                $(".login-sweep").css("display", "block");
                $("#loginSweep p").css("color", "rgb(64,158,255)")
                $("#loginAcc p").css("color", "#333")
            })

            //登录注册页面的切换
            $("body").on("click", "#goReg", function () {
                $(".login").css("display", "none");
                $(".register").css("display", "block");
            })

            $("body").on("click", "#goLogin", function () {
                $(".login").css("display", "block");
                $(".register").css("display", "none");
            })

            //文本框得到与失去焦点的样式切换
            $("body").on("focus", ".loginBox input", function () {
                $(this).css("borderColor", "rgb(64,158,255)")
            }).on("blur", ".loginBox input", function () {
                $(this).css("borderColor", "#bfc2c5")
            })

            //验证码发送后的倒计时效果
            $("body").on("click", "#getReg", function () {
                let oldText = $(this).text();
                let ctime = 40;
                $(this).text("重新获取(" + ctime + ")");
                let regTime = setInterval(() => {
                    ctime--;
                    $(this).text("重新获取(" + ctime + ")");
                    if (ctime === 0) {
                        clearInterval(regTime);
                        $(this).text(oldText);
                    }
                }, 1000);
            })
        }

        /*
            功能4：对登录与注册过程中用户的输入格式反馈错误提示
        */
        let verify = function () {
            //手机号验证提示
            $("body").on("blur", "#regPhone", function () {
                if (isPhone($(this).val())) {
                    $(this).next().remove()
                } else {
                    $(this).after("<b class = 'reg'>请输入正确格式的手机号码</b>");

                }
            })
            //密码验证提示
            $("body").on("blur", "#regPass", function () {
                if (isPasswd($(this).val())) {
                    $(this).next().remove()
                } else {
                    $(this).after("<b class = 'reg'>请输入由字母,数字或下划线组成的8-16位密码</b>");

                }
            })


            //用户名验证
            $("body").on("blur", "#regUser", function () {
                if ($(this).val() != "") {
                    $(this).next().remove()
                } else {
                    $(this).after("<b class = 'reg'>用户名不能为空</b>");

                }
            })


            //手机验证码验证
            $("body").on("blur", "#regCode", function () {
                if ($(this).val() != "") {
                    $(this).next().remove()
                } else {
                    $(this).after("<b class = 'reg'>请输入验证码</b>");

                }
            })
        }

        /*
            功能5：登录功能，用户提交信息后，向后台请求数据验证用户信息是否正确，正确则跳转到主页面，反则提示错误信息
        */
        let login = function () {
            //登录事件
            $("body").on("click", "#login", function () {
                let flag = 1;
                if (!window.$ckboxSucces) {
                    $(".login-account p").css("display", "block");
                    $(".login-account p").html("请先拖动滑块进行安全验证")
                    return;
                }
                $(".login-account input").each((index, element) => {
                    if ($(element).val() === "") {
                        flag = 0;
                        $(".login-account p").css("display", "block");
                        $(".login-account p").html("请先填入登录信息");
                    }
                });
                if (flag) {
                    loginVerify()
                }
            })

            //登录信息验证(进行ajax请求，验证数据是否正确)
            function loginVerify() {
                let loginUser = $("#loginUser").val();
                let loginPass = md5($("#loginPass").val());
                data = {
                    name:loginUser,
                    user_password:loginPass
                }
                $.ajax({
                    url: "http://127.0.0.1:3000/getUser",
                    data: data,
                    success: function (result) {
                        if (!result.length) {
                            $(".login-account p").css("display", "block");
                            $(".login-account p").html("用户名或密码错误!!");
                        }else {
                            window.location.href = "./../index.html?user_id=" + result[0].user_id;
                        }
                    }
                });
            }

        }

        /* 
            功能6：注册功能，用户提交信息后，将数据发送给后台，后台将新用户信息写入数据库中，并跳转到主页面
        */
        let register = function () {
            //注册事件
            $("body").on("click", "#register", function () {
                if ($(".reg").length != 0 || !$("#agree").prop("checked")) return;
                toRegister();
            })

            //进行注册 (进行ajax请求将注册信息写入数据库中,且自动完成登录)
            function toRegister() {
                let data = {};
                data.user_name = $("#regUser").val();
                data.user_password =  md5($("#regPass").val());
                data.user_phone = $("#regPhone").val();

                $.ajax({
                    url: "http://127.0.0.1:3000/setUser",
                    data: data,
                    success: function (result) {
                        window.location.href = "./../index.html?user_id=" + result[0].user_id;
                    }
                });
            }
        }

        /* 
            功能7：使用QRCode.js库生成随机二维码
        */
        let qrcodeCode = function () {
            //使用QRCode.js随机生成二维码
            let qrcode = new QRCode(document.getElementById("qrcode"), {
                width: 150,
                height: 150
            });

            function makeCode() {
                let chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
                let pwd = "";
                for (let i = 0; i < 10; i++) {
                    pwd += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                qrcode.makeCode(pwd);
            }

            makeCode();

            //点击实现二维码生成功能
            $("body").on("click", "#qrcode img, #loginSweep", function () {
                makeCode();
            })

        }

        // 密码验证
        let isPasswd = function (s) {
            let patrn = /^(\w){6,16}$/;
            return patrn.test(s) ? true : false;
        }

        //手机验证
        let isPhone = function (s) {
            let patrn = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
            return patrn.test(s) ? true : false;
        }

        let getUrlParam = function () {
            let url = document.location.toString()
            if(url.indexOf('?') != -1) {
                $("body").html('<h1 id="notFound">404</h1>')
                return false;
            }
            return true;
            
      
          };

        init()
    }
})(window)

window.loginInit()