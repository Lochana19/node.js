// it is one of the biggest module in the node js.
// in this file system to learn, 
// how to read a file,
// write a file,
// update a file 
// and delete a file


const fs=require('fs')

//read a file

let content=fs.readFileSync('file1.txt')
console.log('the file is here->'+ content)


// write a file

fs.writeFileSync('file2.txt','this is file 2')

console.log("the file 2 is sucessfully written")


// append a file

fs.appendFileSync('file3.txt','this is file 3')

console.log("the file 3 is sucessfully written")


// delete a file 

fs.unlinkSync('file3.txt')

console.log('deleted sucessfully')



