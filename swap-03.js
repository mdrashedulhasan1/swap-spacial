//swap with destructing
var a = 20;
var b = 15;
console.log("Before Swap a =",a,"b=",b);
[a,b] = [b,a];
console.log("After Swap a =",a,"b=",b);