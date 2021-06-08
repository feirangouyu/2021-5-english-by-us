const ws = require('nodejs-websocket');
const sqlList = require("./sqlList");

//创建mysql实例
sqlList.init()

let server = ws.createServer(function (socket) {
  socket.on('text', function (data) {
    let sqlQuery = `
      SELECT *
      FROM pkroom,personalinformation
      WHERE (1p_user_id = user_id || 2p_user_id = user_id ) and id = ${data}
    `;
    sqlList.getData(sqlQuery)
      .then(result => {
        socket.sendText(JSON.stringify(result));
      })
  });
}).listen(3001);

