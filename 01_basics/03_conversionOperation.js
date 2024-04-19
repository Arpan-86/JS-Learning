let score = "33" 
console.log(typeof score)


let valueInNumber = Number(score)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = 1
let booleanIsLoggesIn = Boolean(isLoggedIn)
console.log(booleanIsLoggesIn)

// 1 => true; 0 => false
// "" => false
// "arpan" => true


let value = 3
let negValue = -value
console.log(negValue);


let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);       //12
console.log(1 + "2");       //12
console.log("1" + 2 + 2);   //122 
console.log(1 + 2 + "2");   //32

console.log( (3 + 4) * 5 % 3);

console.log(+true);    //1
console.log(+"");      //0


let gameCounter = 100
++gameCounter;
console.log(gameCounter);

