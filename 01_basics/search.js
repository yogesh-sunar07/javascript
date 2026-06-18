let sentence = `During a quiet evening in the small town near the river, curious neighbors gathered outside the library to celebrate a community project that transformed unused spaces into colorful gardens, inviting children and adults alike to share stories, plant flowers, exchange recipes, and learn practical skills from volunteers who believed kindness and cooperation could strengthen friendships, inspire creativity, encourage lifelong learning, and create lasting memories for everyone who participated with enthusiasm, patience, generosity, and hope, making each season brighter and every gathering more meaningful for families, visitors, students, artists, teachers, mentors, and friends across the entire welcoming and vibrant neighborhood community.`;

console.log(sentence.split(' '));
console.log(sentence.includes('evening'));
let position = sentence.indexOf('evening')
console.log(`the position of evening in the string  id ${position}`);
let wordPosition = sentence.split(' ').indexOf('evening');
console.log(`wordposition of word evening is ${wordPosition}`); 