const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(fs.readFileSync('./fixture.txt'))
}).listen(process.env.PORT || 10000)
