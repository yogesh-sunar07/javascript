// // array

// /*
// Parentheses: ( )
// Example: The meeting (which started late) ended quickly.

// Brackets (square brackets): [ ]
// Example: She said, "[The report] needs revision."

// Braces (curly brackets): { }
// Example: Set A = {1, 2, 3, 4}.
//  */

// const myArr = [0,1,2,3,4,5]
// const muHeros =["yogesh", "spiderman", "dipesh"]

// const myArr2 = new Array(1,2,3,4)

// console.log(myArr[7]);
// console.log(myArr.length);


// // Array methods

// myArr.push(6)// insert form back in array 
// myArr.push(7)
// myArr.pop()// remove last array element
// console.log(myArr);

// myArr.unshift(20)//insert from front side //if there is large data then its is time consiming
// myArr.shift()// remove the element from front side 
// console.log(myArr);

// const myArr3 = new Array(1,2,3,4,5,6)
// console.log(myArr3.includes(9));// search there is 9 number in array 
// console.log(myArr3.indexOf(3));

// const newArr3 = myArr3.join()// join make the array (object)type  to string type
// console.log(myArr3);
// console.log(newArr3);


//slice,splice
const myArr4 = [0,1,2,3,4,5]
// console.log("A", myArr4);

const myn1 = myArr4.slice(1,3)

console.log(myn1);
console.log("B", myArr4);

const myn2 =myArr4.splice(1,3)// original array manuplation
console.log(myn2);
console.log("A after splice ",myArr4);




