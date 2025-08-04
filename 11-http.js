const http =require('http');

const server=http.createServer((req,res)=>{
  //req (request) represents the incoming request
  //res (response) represents what we're sending back
console.log(req)
if(req.url==='/'){
  res.end('Welcome to our home page')

}
if(req.url==='/about'){
  res.end('Here is our short history')
}
//default response 
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href='/'>back home</a>
`)
})
server.listen(5000)
