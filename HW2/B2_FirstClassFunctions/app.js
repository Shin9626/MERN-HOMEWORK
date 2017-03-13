// Your Javascript Code Goes Here
function greet(){
    console.log('Hi~');
}
greet();

//first-class function
function logGreeting(fn){
    fn();
}
logGreeting(greet);

//function expression
var greetMe = function(){
    console.log('Hi~Shin!');
}
greetMe();

logGreeting(greetMe);