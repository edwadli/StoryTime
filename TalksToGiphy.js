var http = require('http')
var fs = require('fs')
var request = require('request')

var search_term = "funny+cat";
var url = "http://api.giphy.com/v1/gifs/search?q="+ search_term +"&api_key=dc6zaTOxFJmzC";

request({url: url, json: true},
	function (error, response, body){
		if (!error && response.statusCode===200){
			the_gif = body.data[0].images.fixed_height.url);
			console.log(the gif);
		}
	})