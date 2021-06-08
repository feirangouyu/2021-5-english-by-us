const express = require("express");
const axios =require("axios");
const app = new express();
const sqlList = require("./sqlList");
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//响应头设置
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

//开启服务器
app.listen(3000,function(){
    console.log("开启成功！"); 
})

//创建mysql实例
sqlList.init()


/*  用户登录请求
    响应数据：登录正确的用户信息
*/
app.get("/getUser",function(req,res){
    let data = req.query;
    let sqlQuery=`
        SELECT user_id
        FROM userinformation
        WHERE (user_name = "${data.name}" OR  user_phone = "${data.name}") AND user_password = "${data.user_password}"
    `;
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})


/*  用户注册请求
    请求参数：user_name，user_password，data.user_phone
    响应数据：user_id
*/
app.get("/setUser",function(req,res){
    let data = req.query;
    let sqlQuery1=`INSERT INTO UserInformation 
    ( user_name, user_password, user_phone, user_permiss)
    VALUES
    ( "${data.user_name}", "${data.user_password}","${data.user_phone}","user" )`;
    sqlList.getData(sqlQuery1)
    .then(() => {})
    let sqlQuery2 = `select user_id from UserInformation where user_phone = "${data.user_phone}"`;
    sqlList.getData(sqlQuery2)
    .then(result => {
        res.send(result)
    })
})


/*  请求得到试卷信息
    请求参数：test_id
    响应数据：当前试卷信息以及属于当前试卷的所有题目
*/
app.get("/getTest", function(req,res) {
    let data = req.query;

    let sqlQuery = `SELECT *
    FROM test
    WHERE test_id = "${data.test_id}"
    `;
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })

})

/*  根据试卷id请求得到试题目信息
    请求参数：test_id
    响应数据：属于当前试卷的所有题目
*/
app.get("/getTitles", function(req,res) {
    let data = req.query;

    let sqlQuery = `SELECT * 
    FROM title
    WHERE test_id in (
    SELECT test_id 
    FROM test
    WHERE test_id = "${data.test_id}"
    )`;
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  根据题型请求得到试题目信息
    请求参数：title_type
    响应数据：属于当前题目类型的所有题目
*/
app.get("/getTitles1", function(req,res) {
    let data = req.query;
    let sqlQuery = `SELECT * 
    FROM title
    WHERE title_type = "${data.title_type}"
    `;
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  请求得到所有题目类型的对应数目
    响应数据：所有题目类型的对应数目
*/
app.get("/getTypeNum", function(req,res) {
    let sqlQuery = `
    SELECT title_type, COUNT(*) AS num
    FROM title
    GROUP BY title_type;`
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  根据试卷id与题目id请求得到题目信息
    请求参数：test_id,title_id
    响应数据：属于当前题目的信息
*/
app.get("/getTitleData", function(req,res) {
    let data = req.query;
    let sqlQuery = `SELECT * 
    FROM title
    WHERE title_id = ${data.title_id} && test_id = ${data.test_id} 
    `;
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})


/*  请求修改学生积分
    请求参数：user_id,integral_num
    响应数据：无
*/
app.get("/setIntegral", function(req,res) {
    let data = req.query;
    let sqlQuery = `
    INSERT INTO integrallist
    (user_id,integral,time)
    VALUES
    (${data.user_id},${data.integral_num},now())`
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  请求增加错题记录
    请求参数：user_id,wrongList
    响应数据：无
*/
app.get("/addWrongList", function(req,res) {
    let data = req.query;
    let wrongList = data.wrongList
    for(let i = 0; i < wrongList.length; i++) {
        let sqlQuery = `
        INSERT INTO wrongtopic
        (user_id,test_id,title_id,time)
        VALUES
        (${data.user_id},${wrongList[i].test_id},${wrongList[i].title_id},now())`
        sqlList.getData(sqlQuery)
        .then(result => {
            res.send(result)
        })
    }
    
})


/*  请求增加学习记录
    请求参数：user_id,learninList
    响应数据：无
*/
app.get("/addLearninList", function(req,res) {
    let data = req.query;
    let learninList = data.learninList
    for(let i = 0; i < learninList.length; i++) {
        let sqlQuery = `
        INSERT INTO learningRecord
        (user_id,test_id,title_id,correct,answer,ctime)
        VALUES
        (${data.user_id},${learninList[i].test_id},${learninList[i].title_id},"${learninList[i].correct}","${learninList[i].answer}",now())`
        sqlList.getData(sqlQuery)
        .then(result => {
            res.send(result)
        })
    }
    
})

/*  请求得到学习记录
    请求参数：user_id
    响应数据：无
*/
app.get("/getLearninList", function(req,res) {
    let data = req.query;
    let sqlQuery = `
        SELECT * 
        FROM learningRecord
        WHERE user_id = ${data.user_id}`
    sqlList.getData(sqlQuery)
    .then(result => {
         res.send(result)
    })
    
    
})

/*  请求得到月排行榜数据
    响应数据：月排行榜数据
*/
app.get("/getMonthRank", function(req,res) {
    let sqlQuery = `
        SELECT i.user_id,SUM(i.integral) AS integral,p.user_name,p.icon,p.signa
        FROM  integralList as i
        INNER JOIN personalinformation as p
        WHERE i.user_id = p.user_id  && DATE_FORMAT(i.time,'%m') = DATE_FORMAT(now(),'%m')
        GROUP BY i.user_id
        ORDER BY integral DESC
        LIMIT 5`
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  请求得到周排行榜数据
    响应数据：周排行榜数据
*/
app.get("/getWeekRank", function(req,res) {
    let sqlQuery = `
        SELECT i.user_id,SUM(i.integral) AS integral,p.user_name,p.icon,p.signa
        FROM  integralList as i
        INNER JOIN personalinformation as p
        WHERE i.user_id = p.user_id  && DATE_FORMAT(i.time,'%u') = DATE_FORMAT(now(),'%u')
        GROUP BY i.user_id
        ORDER BY integral DESC
        LIMIT 5`
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  请求得到日排行榜数据
    响应数据：日排行榜数据
*/
app.get("/getDayRank", function(req,res) {
    let sqlQuery = `
        SELECT i.user_id,SUM(i.integral) AS integral,p.user_name,p.icon,p.signa
        FROM  integralList as i
        INNER JOIN personalinformation as p
        WHERE i.user_id = p.user_id  && DATE_FORMAT(i.time,'%d') = DATE_FORMAT(now(),'%d')
        GROUP BY i.user_id
        ORDER BY integral DESC
        LIMIT 5`
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  请求得到用户个人信息
    请求参数： user_id
    响应数据：用户个人信息
*/
app.get("/getPersonalData", function(req,res) {
    let data = req.query;
    let sqlQuery = `
        SELECT *
        FROM  personalinformation
        WHERE user_id = ${data.user_id}
       `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  请求修改用户个人信息
    请求参数： data
    响应数据：无
*/
app.get("/setPersonalData", function(req,res) {
    let data = req.query;
    let sqlQuery = `
        UPDATE personalinformation
        set integral = ${data.integral},
        user_phone = "${data.user_phone}",
        icon =  "${data.icon}",
        sex = "${data.sex}",
        age =  ${data.age},
        email =  "${data.email}",
        signa =  "${data.signa}"
        WHERE user_id =  ${data.user_id};
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})


/*  请求房间列表
    请求参数： 无
    响应数据：房间列表信息
*/
app.get("/getRoomList", function(req,res) {
    let data = req.query;
    let sqlQuery = `
    SELECT *
    FROM pkroom
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})


/*  根据房间id请求双方玩家数据
    请求参数： room_id
    响应数据：双方玩家个人信息数据
*/
app.get("/getUserData", function(req,res) {
    let data = req.query;
    let sqlQuery = `
    SELECT *
    FROM pkroom,personalinformation
    WHERE (1p_user_id = user_id || 2p_user_id = user_id ) and id = ${data.room_id}
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})


/*  根据用户id请求pk胜率
    请求参数： user_id
    响应数据：用户pk胜率
*/
app.get("/getUserWin", function(req,res) {
    let data = req.query;
    let sqlQuery = `
        SELECT COUNT(*)/(
        SELECT COUNT(*)
        FROM pklist
        WHERE (1p_user_id = ${data.user_id} || 2p_user_id = ${data.user_id} ) ) as win
        FROM pklist
        WHERE (1p_user_id = ${data.user_id} || 2p_user_id = ${data.user_id} ) AND win_user = ${data.user_id}
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  根据用户id请求pk积分
    请求参数： user_id
    响应数据：用户pk积分
*/
app.get("/getWinIntegarl", function(req,res) {
    let data = req.query;
    let sqlQuery = `
    SELECT SUM(win_integral) as win_integral
    FROM pklist
    WHERE win_user = ${data.user_id};
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})


/*  请求一组单词题目信息
    响应数据：单词题目信息
*/
app.get("/getWord", function(req,res) {
    let sqlQuery = `
    SELECT *
    FROM pkword
    LIMIT 10;       
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  更新对应房间id的用户积分/答题情况的数据
    请求参数： data
    响应数据：无
*/
app.get("/setRoomData", function(req,res) {
    let data = req.query;
    let sqlQuery = `
        UPDATE pkroom
        SET 1p_title_num = 1p_title_num + ${data["1p_title_num"]},
        2p_title_num = 2p_title_num + ${data["2p_title_num"]},
        1p_integral = 1p_integral + ${data["1p_integral"]},
        2p_integral = 2p_integral +${data["2p_integral"]}
        WHERE id = ${data.room_id}
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})



/*  新建房间
    请求参数： user_id
    响应数据：无
*/
app.get("/addRoom", function(req,res) {
    let data = req.query;
    let sqlQuery1 = `
        INSERT INTO pkroom
        (1p_user_id,ctime)
        VALUES
        (${data.user_id},now());
    `
    let sqlQuery2 = `
        SELECT * FROM pkroom
        ORDER BY  ctime DESC
        LIMIT 1
    `
    sqlList.getData(sqlQuery1).then(()=>{

    });

    sqlList.getData(sqlQuery2)
    .then(result => {
        res.send(result)
    })
})


/*  加入房间
    请求参数： user_id，room_id
    响应数据：无
*/
app.get("/enterRoom", function(req,res) {
    let data = req.query;
    data.user_id*=1;
    data.room_id*=1;
    let sqlQuery = `
        UPDATE pkroom
        SET 2p_user_id = ${data.user_id},state = 2
        WHERE id = ${data.room_id}
    `
    sqlList.getData(sqlQuery)
    .then(()=>{})
})

/*  更新state状态,开始pk,结束pk
    请求参数： room_id，state
    响应数据：无
*/
app.get("/upState", function(req,res) {
    let data = req.query;
    let sqlQuery = `
        UPDATE pkroom
        SET state =${data.state}
        WHERE id = ${data.room_id}
    `
    sqlList.getData(sqlQuery)
    .then(()=>{})
})

/*  更新pklist数据
    请求参数： data
    响应数据：无
*/
app.get("/upPklist", function(req,res) {
    let data = req.query;
    let sqlQuery1 = `
        INSERT INTO pklist
        (room_id,1p_user_id,2p_user_id,1p_integral,2p_integral,win_user,win_integral,ctime)
        VALUES
        (${data["room_id"]},
        ${data["1p_user_id"]},
        ${data["2p_user_id"]},
        ${data["1p_integral"]},
        ${data["2p_integral"]},
        ${data["win_user"]},
        ${data["win_integral"]},
        now())
    `
    sqlList.getData(sqlQuery1)
    .then(()=>{})
})

/* 获取所有问题数据
*  响应数据，所有问题
*/
app.get("/getQuestionlData", function(req,res) {
    let sqlQuery = `
        SELECT *
        FROM  question
        order by ctime desc,id;
       `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/* 获取问题数据
*  响应数据，该问题
*/
app.get("/getQuestionitemData", function(req,res) {
    let data = req.query
    let sqlQuery = `
        SELECT *
        FROM  question
        where id = ${data.question_id}
       `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*   更新问题数据
 *   请求参数data
 *   响应数据： 无
 */  
app.get("/setQuestionlData",function(req,res) {
    let data = req.query;
    let sqlQuery = `
        update question
        set num = ${data.num},
        focus = ${data.focus}
        where id = ${data.id};
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/*  获取回复信息
*   请求参数：data(question_id)
*   响应数据：所有回复
*/ 
app.get("/getReplydata",function(req,res) {
    let data = req.query;
    let sqlQuery = `
        SELECT r.*,p.user_name,p.icon
        FROM  reply r,question q,personalinformation p
        where r.question_id = ${data.question_id} and q.id = ${data.question_id} and p.user_id = r.user_id
        order by r.ctime desc,r.id;
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
})

/** 
 *   更新回复
 *   请求参数：data
*/
app.get("/setReplyData",function(req,res) {
    let data = req.query;
    console.log(data);
    let sqlQuery = `
        INSERT INTO reply
            (user_id,question_id,content,likes,ctime)
        VALUES
        (${data.user_id},${data.question_id},"${data.content}",${data.likes},now())
    `
    sqlList.getData(sqlQuery)
    .then(result => {
        res.send(result)
    })
  
})