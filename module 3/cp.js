//child process is anode module used to 
// create sub process within a script.

// you can peerform different tasks 
// with you script by just using some method.



const cp=require("child_process")

cp.execSync("start chrome")

cp.execSync("calc")

console.log('output'+ cp.execSync("node demo.js"))