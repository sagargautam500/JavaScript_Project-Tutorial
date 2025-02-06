//variable.map(....)
let arr=[45,23,21]
let a=arr.map(
    (value,index,array)=>{
        console.log(value,index,array)
        return value+index
    }
    )
    console.log(a)

//variable.filter(..)
const b=[45,23,21,0,3,5,7,9]
let b2=b.filter(
    (gtm)=>{
        return gtm<10
    }
)
console.log(b2)

//variable.reduce(...)
let num=[1,2,3,5,2,1]
/*let sag=num.reduce(
    (h1,h2)=>{
        return h1+h2
    }
)*/
const sagar=(h1,h2)=>{
    return h1+h2
}
let sag=num.reduce(sagar)
console.log(sag)