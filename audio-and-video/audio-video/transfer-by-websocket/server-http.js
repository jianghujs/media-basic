let http = require('http'),
    fs = require('fs'),
    WebSocket = require('ws'),
    server = http.createServer(function (req, res) {
        fs.readFile('./index.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }).listen(3001, function () {
        console.log('服务启动成功')
    });
const wsServer = new WebSocket.Server({server});
wsServer.binaryType = 'arraybuffer';
wsServer.on('connection', (ws) => {
    console.log('connect success')
    ws.on('message', function (data) {
        wsServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN && client !== ws) {
                client.send(data);
            }
        });
    });
});
