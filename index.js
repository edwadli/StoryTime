var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/textbox.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg) {
  	var arr = msg.trim().split(".");
  	for(var i =0; i < arr.length; i++) {
  		var search = "";
	  	var url = "http://demo.ark.cs.cmu.edu/parse/api/v1/parse?sentence=" + arr[i];
	  	console.log(arr[i]);
	  	request({url: url, json: true},
				function (error, response, body){
					if (!error && response.statusCode===200){
						try {
							search = body['sentences'][0]['frames'][0]['target']['text'];
						} catch(err) {
							search = arr[i];
						}
						if(search === undefined) {
							return;
						}
						var url = "http://api.giphy.com/v1/gifs/search?q="+ search +"&api_key=dc6zaTOxFJmzC";
						request({url: url, json: true},
							function (error, response, body){
								if (!error && response.statusCode===200){
									var the_gif = body.data[0].images.fixed_height.url;
									io.emit('chat message', the_gif);
								}
						});
					}
			});	
  	}
  	msg = "";
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
