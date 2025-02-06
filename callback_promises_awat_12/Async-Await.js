document.body.style.backgroundColor = "orange";
let h1 = document.createElement("h1");
h1.innerText = "Async-Await Function details";
h1.style.color = "white";
h1.style.backgroundColor = "blue";
document.body.prepend(h1);
document.body.style.textAlign = "center";

async function hello() {
    console.log("hello");
}
console.log(hello());

function Api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data:");
            resolve("Sucess");
        }, 2000);
    });
};

async function getWeatherData() {
    await Api();//1st call
    await Api();//2nd call
}
console.log(getWeatherData());


//IIFE:Immediately invoked Function Expression:::::::::::
//getdata................................
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data=", dataId);
            resolve("sucess result");
            // reject("Error");  
        }, 5000);
    });
};

(async function () {  //Used IIFE
    await getData(45);
    await getData(55);
    await getData(65);
})();

