let msg:string = "hello world"

console.log(msg)

// number 

let id: number = 234

//boolean 

let isLoggenIn: boolean = true;

//function
function userSignIn(name: string , email: string , pin: number , isPaid: boolean){

}
userSignIn("Tyagi","tyagi@123" , 76543,true);


// function strictly return a type of values only
function greetMsg(name: string): string{
    return `hello ${name}`

}





//arrow function
const calculate = (num1: number , num2: number): number=>{

    return num1 * num2;

}
calculate(2,3)



// in case you dont want to give all the parameter as arguments

const loginUser = (name: string , email: string , isPaid: boolean = false)=>{
    return 'you are logged in'

}
loginUser("uday" , 'u@t');



const heros = ["thor", "spiderman",2,]
heros.map((hero)=>{
    return `hero is${hero}`

})


//we should explicitly  mention return type of a function is "void" if it is not returning anything

function consoleError(errmsg: string): void{
    console.log(errmsg)
}




export {}