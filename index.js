const pokemon = require("pokemon");
const superheroes = require("superheroes");
const supervillains = require('supervillains');
const cowsay = require("cowsay");
const chalk = require("chalk");
const moment = require("moment");

let pokemons = pokemon.all()
pokemons.forEach(name => {
    console.log(name)
});

let superhero = superheroes.all
superhero.forEach(name => {
    console.log(name)
});

let supervillain = supervillains.all
supervillain.forEach(name => {
    console.log(name)
});

console.log(
  cowsay.say({
    text: "hello Kind Komodo",
    e: "oO",
    T: "U "
  })
);

const a = moment().format("MMMM Do YYYY"); 
const b = moment("20010408", "YYYYMMDD").fromNow(); 
const c = moment()
  .subtract(7, "month")
  .calendar(); // 05/27/2019

  console.log(chalk.yellow.bgRed.bold(a));
console.log(chalk.yellow.bgRed.bold(b));
console.log(chalk.yellow.bgRed.bold(c));

