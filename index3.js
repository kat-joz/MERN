/// Task

// Create (refactor your current code) a schema and model in another file
// and import it into index.js
// use a async (await) to create and then read a few elements from the database
// create an async function to setup test data for one of your collections
/// ^ what i did
 // Using prompt-sync
 // make a full CRUD menu for your collections
 // ReadAll
 // Create
 // Delete

  // EXT:
  // ReadOne
  // Update
  // Login menu/check before the menu
  // Anything else you can think of

//car.find({}).then(car => console.log(car)) 

const promptSync = require("prompt-sync")
const input = promptSync()
const mongoose = require("mongoose")
const {carModel, setupTestData} = require("./models/car.js") //module.exports = car; you can have import from other files

//nationwide is the deafult database now; just put a slash after computer
//this line will specify what to do once connected

mongoose.connect("mongodb://127.0.0.1:27017/nationwide").then( async () => { 
    console.log("Connected")
    await setupTestData();

    carModel.create({reg:"ABC", name:"Toyota", colour:"pink"}).then (car => console.log(car));

    carModel.find({}).then(cars => {
        console.log(`Cars: ${cars.length}`) //print Cars: the number of cars in the array
    for (let car of cars){  //go through each car dataset in the cars array and check for specified info before printing
    console.log(car)
    }
    })
})
let customerInput = prompt("Do you want to read, update or login? ");
    switch(input(customerInput)) {
        case "read":
            //function
            break;
        case "update":
            //function
            break;
        case "login":
            //function
            break
    }

//async function: async functionName(){} - allows to use the 'await' key word, and await will pause execution until the function is done and go in specified order


