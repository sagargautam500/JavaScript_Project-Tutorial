//7:delete variable[..value..]
let num=[7,8,9,10,11]
//console.log(delete num[2])
delete num[1]
console.log(num)
console.log(num.length)

//8:variable.concat(variable1,variable2,..)
let a1=[0,1],a2=[2,3],a3=[4,5,6]
console.log(a1.concat(a2,a3))

//9:variable.sort()
let a=[2,1,4,6,3,5]
console.log(a.sort())
let b=[2,4444,5,33,666,1111111]
console.log(b.sort())
//using function to compare and sorting actually
let compare=(a,b)=>{
    return a-b
}
b.sort(compare)
console.log(b)

//10:variable.reverse()
console.log(a.reverse())

//11:variable.splice(no.of pos,no.of remove element,adding elements)
let sag=[22,34,56,78,89,33]
let gtm=sag.splice(1,2,500,600)
console.log(gtm)//return delete elements
console.log(sag)
console.log(typeof sag)
console.log(typeof gtm)

//12:variable.slice(..pos..)
let r=[12,23,34,45,56,67,78]
console.log(r.slice(2))
console.log(r.slice(2,4))
console.log(r.slice(1,6))
