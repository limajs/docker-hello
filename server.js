const http = require('http')

http.createServer((req, res) => {
	res.end('Hello World - From Docker Cloud')
}).listen(8000)

