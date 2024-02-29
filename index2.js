//1
var num1 =4;
var num2 =16;
console.log(num1>num2);
console.log(num1<num2);
console.log(num1==num2);

//2
 
var one =1;
var two =2;
var three =4;
var four =3;
 
if(one>two && three>four){
    console.log("Yes");
}
else{
    console.log("No");
}

//3

var one = 1;
var two = 2;
var three= 3;
var four = 4;
var five =5;
var six = 6;

var a = one + two;
var b = four + five;

if(a>three && b>six){
     console.log("Yes");
}
else{
    console.log("No");
}

//4

var one = 1;
var two = 2;
var three= 3;
var four = 4;
var five =5;


sum1 = one + two;
sum2 = three + four;

if(sum1>five||sum2>five){
    console.log("Yes");
}
else{
    console.log("No");
}

//5

var one = 4;
var two = 8;
 
if(one%2===0 && two%2===0){
    console.log("Both");
}
else{
    console.log("No");
}

//6

var num = 12;

var x = num % 10;

if(x===0){
    console.log("Zero");
}
else if(x===1){
    console.log("one");
}
else if(x===2){
    console.log("two");
}
else if(x===3){
    console.log("three");
}
else if(x===4){
    console.log("four");
}

else if(x===5){
    console.log("five");
}
else if(x===6){
    console.log("six");
}
else if(x===7){
    console.log("seven");
}
else if(x===8){
    console.log("eight");
}
else{
    console.log("Nine");
}


//7

for(var i=1;i<=5;i++){
    console.log("Masai School");
}

//8

var x =2;
var y = 3;
var sum = x + y;

if(sum > 5){
    console.log("Avobe 5");
}
else if(sum < 5){
    console.log("Below 5");
}
else{
    console.log("equal");
}