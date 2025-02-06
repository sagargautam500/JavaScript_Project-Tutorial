let a=Math.random()*100
a=Number.parseInt(a)
let input
let score=100

while(input !=a)
{
    score=score-1
    input=parseInt(prompt("Enter the number:"))
    if(input==a)
    {
        console.log(`congratulation!...${input} is a current number`)
        console.log(`you guess actual number in ${100-score} chances.`)
    }
    else if(input>a&& input<100)
    {
        console.log("your number is greater than actual number:")
    }
    else if(input<a && input>0)
    {
        console.log("your number is smaller than actual number:")

    }
    else
    {
        console.log("Enter number between 1 to 100 only")
    }
}
