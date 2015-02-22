var app = require('express')()
var http = require('http');
var fs = require('fs');
var io = require('socket.io')(http)

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
                        io.on('connection', function(socket){
                          console.log('a user connected');
                          socket.on('disconnect', function(){
                            console.log('user disconnected');
                          });
                        });
                    }

fs.readFile('./textbox.ejs', after_fileread);

