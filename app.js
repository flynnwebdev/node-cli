const util = require("./util");
const _ = require("lodash");
const chalk = require("chalk");

console.log(util.random(100, 200));

util.times(5, i => {
  console.log(i);
});

console.log(_.kebabCase("HelloThereWorld"));
console.log(_.camelCase("this-is-my-long-kebab"));

const inquirer = require("inquirer");
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "list",
      name: "color",
      message: "What is your favourite color?",
      choices: [
        "black",
        "red",
        "green",
        "yellow",
        "blue",
        "magenta",
        "cyan",
        "white"
      ]
    }
  ])
  .then(answers => {
    let { name, color } = answers;
    if (!chalk[color]) {
      throw "Sorry, I don't know that color!";
    }
    console.log(chalk[color](name));
  })
  .catch(err => console.log(err));

//   console.log(inquirer.prompt)
