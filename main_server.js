var http = require('http');
var fs = require('fs');

var after_fileread = function(err,my_html){
                        if (err){
                            throw err;
                        }

                        var my_server = http.createServer(function (req, res) {
                            res.writeHead(200);
                            res.write(my_html);
                            res.end();
                        });
                        my_server.listen(1337, '127.0.0.1');

                        console.log('Server running at http://127.0.0.1:1337/');
                    }

fs.readFile('./textbox.html', after_fileread);

