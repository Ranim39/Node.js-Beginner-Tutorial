const EventEmitter =require('events');

const customEmiiter =new EventEmitter();



customEmiiter.on('userRegistered',(user)=>{
    console.log(`Saving ${user.name}to the database`)
});

customEmiiter.on('userRegistered',(user)=>{
    console.log(`Sending welcome email to ${user.email}`)
});


customEmiiter.on('userRegistered',(user)=>{
    console.log(`Logging registration for ${user.name}`)
});



function registerUser(name,email){
    const user ={name,email};
    console.log('User registered successfully ! ');
    customEmiiter.emit('userRegistered', user);
}

registerUser('John','john@exp.com');
