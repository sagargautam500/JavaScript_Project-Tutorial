document.body.style.backgroundColor = "green";
let h1 = document.createElement("h1");
h1.innerText = "Promise-Chain details";
h1.style.color = "white";
h1.style.backgroundColor = "gray";
document.body.prepend(h1);
document.body.style.textAlign = "center";

console.log("Async Function");
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("acess data 1");
            resolve("sucess data1");
        }, 2000);
        // resolve("sucess data1");
    });
};

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("acess data 2");
            resolve("sucess data2");
        }, 2000);
        // resolve("sucess data2");
    });
};
console.log("fetching data 1............");
// console.log(asyncFunc());
// console.log(p1);
asyncFunc().then((res) => {
    console.log(res);
    console.log("fetching data 2............");
    // console.log(p2);
    asyncFunc2().then((res) => {
        console.log(res);
    });
});

// console.log("fetching data 2............");
// console.log(asyncFunc2());
// let p2=asyncFunc2();
// console.log(p2);
// p2.then((res)=>{
//     console.log(res);
// });

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data=", dataId);
            resolve("sucess result");
            // reject("Error");  
        }, 5000);
    });
};
//promise chain
/*getData(1).then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res);
        getData(3).then((res) => {
            console.log(res);
        });
    });
});*/

getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
});