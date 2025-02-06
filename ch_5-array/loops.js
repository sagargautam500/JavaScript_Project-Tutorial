let num=[3,5,6,8,6,9]
for(let i=0;i<num.length;i++)
{
    console.log(num[i])
}

//Now using forEach(...) looping method::

num.forEach(
    (element)=>{
        console.log(element*element)
    }

)
//for(...of)
let n=[500,600,700,900,800]
for(let i of n){
    console.log(i)
}
//for(..in)
for(let i in n){
    console.log(i)
}
// Array.from()
let name="sagar"
let arr=Array.from(name)
console.log(arr)
