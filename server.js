

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url);

  if (parsedUrl.pathname !== null) {
    var markdown = "md" + parsedUrl.pathname + ".md"
    fs.readFile(markdown, function(err, data) {
      if (err) {
        res.writeHead(500);
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  }
}).listen(10101);
