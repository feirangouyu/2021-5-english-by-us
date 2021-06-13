# 2021-5-english-by-us
项目主题：一遍过英语学习平台

主要技术：html,css,js,jQuey,nodejs,mysql

页面功能：用户登录注册以及支持自定义,提供在线答题、支持判卷等且附有记录答题情况等功能，使用sorket长连接实现了简易版的双人玩家在线单词pk

使用说明：

1.在mysql中新建数据库，数据库名:english, 运行SQL文件：<代码区/english.sql>

2.在<>文件修改配置参数，

connection = mysql.createConnection({
 
        host:"localhost", //主机名
				
        user:"root", //mysql用户名
				
        password:"123456", //mysql用户密码
				
        port:"3306",   //mysql运行端口号
				
        database:"english"   //数据库名
    });
    
3.在根目录的终端下运行nodejs服务器

nodemon server.js

nodemon pkServer.js

4.在项目环境下打开主页面

<代码区/src/index.html>
