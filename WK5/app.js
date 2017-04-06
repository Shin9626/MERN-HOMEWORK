var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    if(req.url ==='/index.html'){
        fs.createReadStream(__dirname+'/index.html').pipe(res);       
    }
    else if (req.url === '/about.html') {
        fs.createReadStream(__dirname+'/about.html').pipe(res);
    }

    else if (req.url === '/') {
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
 
    else{      
        res.writeHead(404, { 'Content-Type': 'text/html' });
        var  oops404= fs.readFileSync(__dirname+'/http404.html','utf8');
        res.end(oops404);
    }
    
}).listen(3000, '127.0.0.1');
