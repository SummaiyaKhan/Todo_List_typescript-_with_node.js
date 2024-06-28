#! /usr/bin/env node


import inquirer from "inquirer";

let todos = [];
let statement = true;

    

while (statement) {
    let addTask = await inquirer.prompt([
        {
            name:"todo",
            message:"what you want to add in your todos?",
            type:"input"
        },
        {
            name:"addmore",
            message:"are you sure you are want to add in your todos?",
            type:"confirm",
            default:"false",
        },
    ]
);
    todos.unshift(addTask.todo);
    statement = addTask.addmore;
    console.log(todos);
}


    
    


