document.write("Functin and Method");
console.log("Function and Method");

// LET'S PRACTICE::::::::::::::::::::
// Qs. Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

function countVowel(str) {
    let count = 0;
    for (let val of str) {
        if (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u') {
            count++;
            console.log("vowel_words=", val);
        }
    }
    return count;

}
console.log("Used of no.of vowel word=" + countVowel("hello"));

// Qs. Create an arrow function to perform the same task.
console.log("Used by ArrowFunction-------------");
let Count_vowel = (msgg) => {
    let Count = 0;
    for (let msg of msgg) {
        if (msg === 'a' || msg === 'e' || msg === 'i' || msg === 'o' || msg === 'u') {
            Count++;
            console.log("vowel_Word=" + msg);
        }
    }
    return Count;
}
console.log(`No.of Used Vowel word=${Count_vowel("hello")}`);

console.log("Used by For Each-loops with arrow function-------------");
let Countvowel = (msgg) => {
    let Count = 0;
    msgg.forEach((msg) => {
        if (msg === 'a' || msg === 'e' || msg === 'i' || msg === 'o' || msg === 'u') {
            Count++;
            console.log("vowel_Word=" + msg);
        }
    });


    return Count;
}
console.log(`No.of Used Vowel word=${Count_vowel("hellooo")}`);

// Qs. For a given array of numbers, print the square of each value using the forEach loop.
console.log("print the square of each value\n");
let arr = [2, 3, 4, 5];
arr.forEach(val => {
    let y = val * val;
    console.log(y);
})
//map() method used:::
new_arr = arr.map(val => {
    return val * val;

})
console.log(new_arr);


// used by reduce() method::::
let nums = [1, 2, 6, 3, 4, 5]
let sum_num = nums.reduce((prev, curr) => {
    return prev + curr;
});
console.log(sum_num);

let Max_Num = nums.reduce((prev, curr) => {
    return (prev > curr) ? prev : curr;
});
console.log(Max_Num);

//Used by filter() method:::
let evenNum = nums.filter(num => {
    return num % 2 === 0;
})
console.log(evenNum);


// lets practice-------------------------------------------------
// Qs.1: We are given array of marks of students. Filter our of the marks of students that scored 90
let marks=[67,99,89,90,95,45,91];
let new_marks=marks.filter(val=>{
    return val>90;
})
console.log(new_marks);

// Qs.2: Take a number n as input from user. Create an array of numbers from 1 to n
let n=prompt("enter number");
let new_Array=[];
console.log("userNumber(n)="+n);
for(i=1;i<=n;i++)
{
    new_Array[i-1]=i;
}
console.log(new_Array);

// 3:Use the reduce method to calculate sum of all numbers in the array
let Sum=new_Array.reduce((prev,curr)=>{
   return prev+curr; 
})
console.log("Sum of array=",Sum);

//4:Use the reduce method to calculate product of all numbers in the array
let product=new_Array.reduce((prev,curr)=>{
    return prev*curr;
})
console.log("product of array="+product);5