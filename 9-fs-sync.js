//const fs=require('fs');
//fs.readFileSync

//or

const{readFileSync,writeFileSync}=require('fs')

const first =readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8')

console.log(first,second)

writeFileSync('./content/result-sync.txt',
  `Here is the result : ${first} , ${second}`,
  { flag:'a'}
)
//if the file exists then node will use it ,otherwise it will create one by default
