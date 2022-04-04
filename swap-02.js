//swap without temp variable
var a = 20;
var b = 15;
console.log("Before Swap a =",a,"b=",b);
a = a+b; //20+15=35
b = a-b; //35-15 = 20
a = a-b; //35-20 = 15
console.log("After Swap a =",a,"b=",b);