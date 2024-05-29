
import superhero from "superhero-name-library";
import generateName from "sillyname";
// var myName = generateName();

// console.log(`My name is ${myName}.`);

var ranNum = Math.floor(Math.random()*731);
var generatedHero = superhero.allNames()[ranNum];
console.log(`I am ${generatedHero}!`);