const util =require('util')
const {readFile,writeFile}=require('fs');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);




const start =async () =>{
    try {
        const first=await readFilePromise('./content/first.txt','utf8')
        const second=await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise('./content/result-mind-granade.txt', `THIS IS AWESOME : ${first} ${second}`)

        console.log(first)
        console.log(second)
    }
    catch{
        console.log(error)
    }
}

start()