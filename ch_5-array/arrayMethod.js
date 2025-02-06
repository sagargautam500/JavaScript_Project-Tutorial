//array method:
let num=[1,7,9]
console.log(num)
console.log(typeof num)
//1:variable.toString()
let a=num.toString()//a is now string:
console.log(a)
console.log(typeof a)

//2:variable.join(".operator.....")
console.log(num.join("_"))

//3:variable.pop()
num.pop()
console.log(num)
//console.log(num.pop()) //it is return pop value

//4.variable.push(..any value...)
let sagar=[4,6,8,9]
console.log(sagar.push(10))
//sagar.push(10)
console.log(sagar)

//5.variable.shift()
let b=[2,4,5,7]
console.log(b.shift())
console.log(b)

//6.variable.unshift(...any value..)
let c=[2,4,5,7]
console.log(c.unshift(9))
console.log(c)



