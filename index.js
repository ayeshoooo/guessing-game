#! /usr/bin/env node
import inquirer from 'inquirer';
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10:"
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess ", systemGeneratedNo, 'SYs');
if (userGuess === systemGeneratedNo) {
    console.log("Yeaaa Your answer is correct \n you Win!");
}
else {
    console.log("Please try again better luck next time!");
}
