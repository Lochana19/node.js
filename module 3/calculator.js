// here i am going to create a calculator module 
// that module is used to the another modules/file 
// to perform the calculor function



function add(a,b){
    console.log(a+b)
}
function sub(c,d){
    console.log(c-d)
}
function mul(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a/b)
}

module.exports={        //this a export method by using keys
    addition:add,
    subraction:sub,
    multiplication:mul,
    divition:div
}