
const john ='john'
const peter='peter'
const secretname='SECRET NAME'
const sayHi =(name)=>{
  console.log(`Hello there ${name}`);

}

//sayHi('rose')
//sayHi(john)
//sayHi(peter)

module.exports={john ,peter}
module.exports=sayHi
console.log(module);

const utils = require('../Modules/3-utils');

utils.sayHi('John');        
console.log(utils.add(5, 7)); 
console.log(utils.PI);    
