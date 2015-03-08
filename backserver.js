http = require('http');
fs = require('fs');
var request = require('request');
server = http.createServer( function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});

        var search_term = "funny+cat";
        var url = "http://api.giphy.com/v1/gifs/search?q="+ search_term +"&api_key=dc6zaTOxFJmzC";

        request({url: url, json: true},
            function (error, response, body){
                if (!error && response.statusCode===200){
                    the_gif = body.data[0].images.fixed_height.url);
                    console.log(the gif);
        }
    })

        res.end(html);
    }

});

port = 3000;
host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);