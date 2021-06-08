const mysql = require("mysql");
let connection;

//创建mysql实例
function init() {
    connection = mysql.createConnection({  
        host:"localhost",
        user:"root",
        password:"123456",
        port:"3306",
        database:"english" 
    });
    connection.connect(function () {
        console.log("数据库连接成功！");
    });
}

function getQuery(sqlQuery) {
    return new Promise((resolve, reject) => {
        connection.query(sqlQuery,function(err,result){
            if(err){
                reject(`SQL error: ${err}!`);
            }else{
                resolve(result)
            }
        });
    })
}

async function getData(sqlQuery) {
    let str = await getQuery(sqlQuery) ;
    return str;
}


//关闭服务器与数据库的连接
function end() {
    connection.end();
}

module.exports = {
    getData,
    init,
    end
}