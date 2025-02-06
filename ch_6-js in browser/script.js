/*document.write("this is combined code ")
console.log("hey sagar vai")
//let age=parseInt(prompt("enter your age?"))
//console.log(`your age=${age}`)
console.info("this is info part")
obj={a:2,b:3,c:4,d:5,e:6}
console.table(obj)
console.error("this is a error part")
console.assert(5>4)
console.warn("this is a warning part")
console.assert("err" !=false)
console.assert("err"==true)*/

console.time("forLoop")
for(let i=0;i<5;i++)
{
    console.log(233)
}
console.timeEnd("forLoop")

console.time("whileLoop")
let i=0
while(i<5)
{
    console.log(233)
    i++
}
console.timeEnd("whileLoop")