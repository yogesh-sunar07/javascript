const marvel_heros =["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // insert the dc_hoes array in the last memory  of marvel_heros

// console.log(marvel_heros);


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// join array
const all_Heros = [...marvel_heros, ...dc_heros]
console.log(all_Heros);

const another_array = [1,2,3,4,[4,5,6],7, [6,7,[4,5]]];
const real_another_array = another_array.flat(1);//(infinity for simplicity )//depth of array in number 
console.log(real_another_array);


console.log(Array.isArray("yogesh"));
console.log(Array.from("yogesh"));
console.log(Array.from({name:"hitesh"}));//intresting
// individual scores in array 
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

let arrayScore = Array.of(score1, score2,score3,score4);
console.log(arrayScore);



