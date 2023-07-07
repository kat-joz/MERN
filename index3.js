 //car.find({}).then(car => console.log(car)) 

const input = require("prompt-sync")
const mongoose = require("mongoose")
const carModel = require("./models/car.js") //module.exports = car; you can have import from other files

//nationwide is the deafult database now; just put a slash after computer
//this line will specify what to do once connected

mongoose.connect("mongodb://127.0.0.1:27017/nationwide").then(() => { 
    console.log("Connected")

    carModel.create({reg:"registration", name:"name", colour:"pink"}).then (car => console.log(car))
})