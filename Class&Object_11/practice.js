// Qs.1:You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.
document.writeln("Practice Page of Class and Object");
document.body.style.textAlign="center";
document.body.style.backgroundColor="orange";

let data="secret Information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
        console.log("name:\t"+this.name+"\nemail:\t"+this.email);
    }
    viewdata(name,email){
        console.log("name:\t"+name+"\nemail:\t"+email);
    }
    viewData(){
        console.log("data=\t"+data);
    }
}
// let Obj1=new User("Sagar Gautam","sagar389@gmail.com");
// let Obj2=new User("hari Gautam","sag389@gmail.com");
// let Obj3=new User("ram Gautam","saga389@gmail.com");
// Obj1.viewdata("sagar","sagar@gmail.com");



// Qs.2: Create a new class called Admin which inherits from User. Add a new method called
// editData to Admin that allows it to edit website data
class Admin extends User{
    // constructor(){
    //     super("Sagar Gautam","sagar389@gmail.com");
    // }
    constructor(name,email){
        super(name,email);
    }
    editData(){
        super.viewdata("ramHari","shyam@Hari");
        super.viewData();
        console.log("After website Data edit:");
        data="new data or information added";
        super.viewData();

    }
}

let Obj4=new Admin("Sagar Gautam","sagar389@gmail.com");
// let Obj4=new Admin();
// Obj4.viewdata("ram","shyam@");
Obj4.editData();
// Obj4.viewData();
