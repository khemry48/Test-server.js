let http = require('http');
let url = require('url')
let fs = require('fs')


 http.createServer(function (req, res) {
    let q = url.parse(req.url, true)
    let filename ="." + q.pathname
    fs.readFile(filename, function(err, data){
      if(err){
        res.writeHead(404, { 'content-Type': 'text/html'})
        return res.end('404 not fond')
      }
      res.writeHead(200,{ 'Content-Type':'text/html'})
      res.write(data)
      return res.end()
    })
}).listen(8000);

/*fs. rename('mynewfile2.txt','myrenamefile.txt', function(err, file){
    if (err) throw err
    console.log('file rename!')
}) */

/* let adr = 'http://localhost:8000/default.html?year=2023&month=november'
let q = url.parse(adr, true)

console.log(q.host) //returns localhost:8000
console.log(q.pathname)
console.log(q.search)

let qdata = q.query
console.log(qdata.year)
 */



