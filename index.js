#! /usr/bin/env node
import inquirer from "inquirer";
// Asking question from user thought inquirer
// printing a wellcome message
console.log("\n \t Wellcome To \'code with muzamil\' CLI simple calculator \n");
let answers = await inquirer.prompt([
    { message: "Enter Frist Number", type: "number", name: "fristnumber" },
    { message: " Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "Select one Operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
// Muxammilkhan
// /
// proj_calculator
// condltion statments if-else
if (answers.operator === "Addition") {
    console.log(answers.fristnumber + answers.secondnumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.fristnumber - answers.secondnumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.fristnumber * answers.secondnumber);
}
else if (answers.operator === "Division") {
    console.log(answers.fristnumber / answers.secondnumber);
}
else {
    console.log("invalid input");
}
