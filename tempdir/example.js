var http = require('http');
var fs = require('fs');

fs.readFile('./sample.html',function(err,my_html){
	if (err){
		throw err;
	}


http.createServer(function (req, res) {
  res.writeHead(200);
  res.write(my_html);
  res.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


});
