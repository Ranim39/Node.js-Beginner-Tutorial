const {createReadStream}=require('fs');
const { encode } = require('punycode');


const stream =createReadS00tream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'});


stream.on('data',(chunk) =>{
    console.log(chunk)
    console.log(chunk.length)
})




