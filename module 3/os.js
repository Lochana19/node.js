// os module is used to get information 
// about current working system


const os=require('os')


console.log(os.arch())

console.log(os.freemem())

console.log(os.totalmem())

console.log(os.cpus())

console.log(os.platform())

console.log(os.networkInterfaces())