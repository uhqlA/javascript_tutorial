// using key word var

// var age = 32;
// var name = "edireka";


// using keyword let

// let age = 32;
// let name = "JOHN";

//  uing the keyword const(constant)
// const brand = "amazon"
// const pi =3.142;

// diference between VAR nad Let key

// 1. var keyword-global scope

var name ="Saitha";

function greet(){

    // console.log(name)
}
greet()

console.log(name)


// 2. local scope a variable declared inside a function can only be called within function

function greet(){
    var age=32;

    console.log(age)

}
greet()


// Let keyword
function xyz(){
    if(true){
       let z=10

       console.log(z)
    }
    // console.log(z) - prints error
}

xyz()


// console.log(z) - prints error also