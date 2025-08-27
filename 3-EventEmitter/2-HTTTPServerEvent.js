const http =require('http');
const EventEmitter=require('events');

const customEmitter =new EventEmitter();

customEmitter.on('requestEvent',(req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to Home Page');
    }
    else if (req.url==='/about'){
        res.end("This is the About Page");
    }
    else {
        res.end('404 NOT FOUND');
    }
    });

    const server =http.createServer((req,res) =>{
        console.log(`Request received for ${req.url}`);
        customEmitter.emit('requestEvent',req,res);
    })

    server.listen(5000 ,() =>{
    console.log('Server is running on http://localhost:5000');
});