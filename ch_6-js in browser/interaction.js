alert("hey sagar ! enter the value")
let num=prompt("enter the value")
num=Number.parseFloat(num)
document.write(num)
document.write("\n")
alert("you enterded a type "+(typeof num))
let write=confirm("do you want to write it to the page")
if(write)
{
    document.write(num)
}
else{
    document.write("please allow me to write")
}
