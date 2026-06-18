const name = "yogesh"
const repoCount = 1
console.log(name +  repoCount + "hero");// outedated old verson

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("yogesh-ys")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.__proto__);
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    yogesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yogesh.com/yogesh%20sunar"

console.log(url.replace('%20','-'));
console.log(url.includes('sunar'));
console.log(url.includes('lunar'));


console.log(gameName.split('-'))
