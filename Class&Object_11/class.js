document.writeln("hello sagar dada");
// let h1 = document.querySelector("h1");
let el=document.createElement("h1");
el.innerText="class ana Object tutirols";
document.body.prepend(el);

el.style.backgroundColor = "pink";
document.body.style.backgroundColor="gray";
document.body.style.textAlign="center";


//prototype & object:::
const student = {
    name: "sagar",
    mark: 98,
    rollNo: 25758,
    marks: () => {
        console.log(this.mark);
    },
    markss: function () {
        console.log("hello");
    }
}

console.log(student);
console.log(student.marks);
console.log(student.marks());
console.log(student.markss());
console.log(typeof student);

let arr = [3, 4, 5, 6, 6];
console.log(arr);
console.log(typeof arr);

const emp = {
    calcTax() {// functon 
        console.log("tax rate is 10%");
    }
};
// console.log(emp.calcTax);
// console.log(emp.calcTax());

const emp2={
    salary:500000,
};
emp2.__proto__=emp;
console.log(emp2.calcTax());


//classes---------------------
class toyotaCar {
    constructor(Brand){
        this.Brand=Brand;
        console.log("brand=="+this.Brand);
      console.log("this is constructor")  ;
    }
  start(){//function
  console.log("start");
  }

  stop(){
    console.log("stop");
  }
  setBrand(brand){
      this.brand=brand;
    //   this.Brand=brand;
      console.log(this.brand);
}
}
console.log(toyotaCar);
console.log(typeof toyotaCar);
let obj=new toyotaCar("tesla");//constructor//create a object of class 
console.log(obj);
console.log(typeof obj);
obj.start();//function call with help of class-object
obj.stop();
obj.setBrand("fortuner");


//inheritance::::
class parent{
    Parents(num){
    console.log("i am a parent class",num);
}}
class child extends parent{

}

let ob =new child();
ob.Parents(5);

class Person {
    
    
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person {
    work(day){
        console.log("solve problem,build something in " +day +"\tdays");
    }
    works(){
        console.log("i am a enginner");
    }
}
class doctor extends Engineer{
    works(){//overriding works function
        console.log("i am a doctor");
    }
}
let sagar=new doctor();
sagar.eat();
sagar.work(45);
sagar.sleep();
sagar.works();


///super keyword::::::::::::::::::::::::::::;
class Persion{
    constructor(n){
        this.n=n;
    this.species="home species\t"+this.n;
    console.log(this.species);
    }
   Eat(){
    console.log("eating")
   }
}

class enginner extends Persion{
    constructor(branch){
        super(6);//to invoke parents class constructor
        this.branch=branch;
        console.log(this.branch+ "\tis famous brand of car");
    }
    work(){
        super.Eat();
        console.log("working is done")
    }
}
let gtm=new enginner("tesla");
// gtm.Eat();
gtm.work();


////Error Handling::::::::::::::::::::
console.log("Error handling");
let a=4,b=2;
// let b=10;
console.log("a="+a);
console.log("b=",b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
try{
    console.log("a+b=",a+c);//Error
}catch(err){
    console.log(err);
}
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
