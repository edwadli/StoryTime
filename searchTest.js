var http = require('http')
var fs = require('fs')
var html;

var server_acts = function(req, res){
	res.writeHead(200);
	res.write(html);
	res.end();
}

fs.readFile('./tempdir/sample.html', function(err, my_html){
	if (err){
		throw err;
	}
	html = my_html;

	var my_server = http.createServer(server_acts);
	my_server.listen(1337, '127.0.0.1');

	/*http.createServer(server_acts
		function(req, res){
		res.writeHead(200);
		res.write(my_html);
		res.end();
	}).listen(1337, '127.0.0.1');*/
});