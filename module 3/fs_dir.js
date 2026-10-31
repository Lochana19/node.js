// we can check the dirctories,
// create a dirctories,
// del a directories, and 
// see the content inside a dirctories.


// create a dirctory

const fs=require("fs")

// fs.mkdirSync("mydirectory")


// check the content inside the directory

let check="C:\\Users\\locha\\OneDrive\\Desktop\\node.js\\myDirctory"

let content=fs.readdirSync(check)

console.log('the content inside the directoy',content)


//check whether the directory is exit or not


let checking=fs.existsSync("myDirctory")

console.log(checking)


// deleting the directory

let del=fs.rmdirSync("mydirectory")

console.log(del)


