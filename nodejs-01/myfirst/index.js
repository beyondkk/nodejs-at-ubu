var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1 style="color:red;background-color:black;">Hello World form Kitipong 5711403148!</h1>');
}).listen(8080);
