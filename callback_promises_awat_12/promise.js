document.body.style.backgroundColor="orange";
let h1=document.createElement("h1");
h1.innerText="Promise details";
h1.style.color="white";
h1.style.backgroundColor="black";
document.body.prepend(h1);
document.body.style.textAlign="center";

let promise=new Promise((resolve , reject) => {
    console.log("I am a Promise");
    resolve("sucess");
    // reject("some error are occur");
});
console.log(promise);

function getData(dataId,getNextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data=",dataId);
            resolve("sucess result");
            // reject("Error");
          if(getNextdata){
            getNextdata();
          }
        },2000);
    });
};
// console.log(getData(233));

// setTimeout(()=>{
//     console.log(getData(23));   
// },5000);
// console.log(getData);

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("promise is defined");
        // resolve("promise Sucess");
        reject("error occur");
    });
};
let newPromise=getPromise();
console.log(newPromise);
newPromise.then((res)=>{
    console.log("promise Fullfiled by then used",res);
});
newPromise.catch((err)=>{
    console.log("reject this promise",err);
})

