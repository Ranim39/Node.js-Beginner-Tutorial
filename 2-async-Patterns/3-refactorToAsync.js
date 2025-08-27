const {readFile}=require('fs');
const { get } = require('lodash');
const { promiseHooks } = require('v8');


const getText = (path)=>{
    return new Promise((resolve,reject)=>{
readFile(path,'utf8',(err,data)=>{
    if ( err){
        reject(err)
    }
    else{
        resolve(data)
    }
    })
    })
}

const start =async () =>{
    try {
        const first=await getText('./content/first.txt')
        const second=await getText('./content/second.txt')

        console.log(first)
        console.log(second)
    }
    catch{
        console.log(error)
    }
}

start()