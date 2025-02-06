//define array
let marks=[90,78,89,95,96,null,false,true,"not present"]
console.log(marks)

//accessing values:
console.log(marks[0])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[8])
console.log(marks[9])//its value is not defined in array

//finding length ::
console.log("no of students=",marks.length)
//changing values::
let a=[3,5,7,8]
a[4]=10 //add new value
a[0]=0//change the first value
console.log(a)
//types of array;
console.log(typeof a)

//using for loop 
for(let i=0;i<a.length;i++)
{
    console.log(a[i])
}
