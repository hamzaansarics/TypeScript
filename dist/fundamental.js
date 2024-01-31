"use strict";
/*
TypeScript is the Super set of JavaScript it contains all the JS features
with their own features as well, TypeScript introduces some new datatypes
any, unknown, never, tupple, enum
There is one more important thing is that when we don't annotate datatype then typeScript
will inference/guess the datatype by self
*/
console.log('First typescript code');
let xyz = 100;
console.log(xyz);
if (xyz >= 100) {
    xyz -= 50;
}
console.log(xyz);
//When we pass variable to function without datatype then it shows errors as inference
//not worked in this case so we have to pass datatype of configure tsconfig.json file to hide these errors
//WITH ERROR:
// function testJava(doc){
//     console.log(doc)
// }
//WITHOTU ERROR:
function testJava(doc) {
    console.log(doc);
}
//Inferences the datatype example with array
let arrayNumber = [1, 2, 3, 4, 5];
let arrayAny = [1, 2, 3, 4, 5, '6', '7', true, false, 8.9];
let concat = '';
arrayNumber.forEach(n => {
    concat += n + ' ';
});
console.log(concat);
//Enums
//Enums are the strongly type constants which used for making group of constants
//First way of declaring constants
const numA = 1;
const numB = 2;
var enumList;
(function (enumList) {
    enumList[enumList["Small"] = 0] = "Small";
    enumList[enumList["Medium"] = 1] = "Medium";
    enumList[enumList["Large"] = 2] = "Large";
})(enumList || (enumList = {}));
console.log(enumList.Small);
//# sourceMappingURL=fundamental.js.map