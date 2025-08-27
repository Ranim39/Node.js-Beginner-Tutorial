
const {writeFileSync}=require('fs');
console.log('stream example');
for (let i=0;i<100000;i++){
    writeFileSync('./content/big.txt',`hello world ${i}\n`,{flag:'a'})
}


const http =require('http');
const fs=require('fs');

http.createServer(function(req,res){
const fileStream =fs.createReadStream('./content/big.txt','utf8');




fileStream.on('open',()=>{
    fileStream.pipe(res)


})

fileStream.on('error',(err)=>{
    res.end(err)
})
})
.listen(5000)