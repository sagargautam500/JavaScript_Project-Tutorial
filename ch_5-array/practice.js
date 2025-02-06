//1.
let num=[1,2,3,5,8,9]
let num2=prompt("enter the number")
num2=Number.parseInt(num2)
console.log("input number=",num2)
num.push(num2)
console.log(num) 

//2.
let num3=[2,4,7,8,9]
let n
do{
n=prompt("enter second number")
n=Number.parseInt(n)
num3.push(n)
console.log("input number",n)
}while(n!=0)
console.log(num3) 

//3.

let num4=[20,15,25,30,10,40]
let sag=(a)=>{
    return a%10==0
}
let sagar=num4.filter(sag)
console.log(sagar)

//4.
let num5=[3,5,7,8]
let square=(b)=>{
    return b*b
}
console.log("square array="+num5.map(square))

//5.
let fact=(c,d)=>{
    return c*d
}
let res=num5.reduce(fact)
console.log(res)
console.log(num4.reduce(fact))