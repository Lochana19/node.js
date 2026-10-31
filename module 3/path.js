// it gives the path of the file or folder


const path=require("path")

console.log(__dirname)

console.log(__filename)

let ext=path.extname('C:\\Users\\locha\\OneDrive\\Desktop\\node.js\\module 3\\file.txt')

console.log(ext)


let base=path.basename('C:\\Users\\locha\\OneDrive\\Desktop\\node.js\\module 3\\file.txt')

console.log(base)
