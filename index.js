#! /usr/bin/env node
import inquirer from "inquirer";
const Number = Math.floor(Math.random() * 10 + 1);
let answer = await inquirer.prompt([
    {
        name: "useGuessedNumber",
        type: "number",
        message: "please guess a number 1 to 10",
    },
]);
if (answer.useGuessedNumber === Number) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
