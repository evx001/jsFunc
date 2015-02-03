var http = require('http');
var path = require('path');
var fs = require('fs'); 
var url = require('url');
var mimeTypes = {
'.js' : 'text/javascript',
'.html': 'text/html',
'.css' : 'text/css',
'.jpg' : 'img/jpeg'
};

//requires variables, mimeType object...
http.createServer(function (request, response) {
var lookup = path.basename(decodeURI(request.url)) || 'index.html',
f = 'content/' + lookup; // how about changing this to the word fILE.
fs.exists(f, function (exists) {
if (exists) {
fs.readFile(f, function (err, data) {
	 if (err) { response.writeHead(500);
	 response.end('Server Error!'); return; }
var headers = {'Content-type': mimeTypes[path.extname(lookup)]};
response.writeHead(200, headers);
response.end(data);
});
return;
}
response.writeHead(404); //no such file found!
response.end();
});
}).listen(80);
