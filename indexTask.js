///TASK
//Connect to the mongodb server using mongoose
//Create a schema
//Create a model from the schema
//Add a disconnect clause to the .then of the conect
//Create an object
//Read all objects
//Add a find query

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017").then (()=>{
    console.log("Connected!")

    animalModel.create({
        name:"Axel",
        breed:"Beagle",
        age:5})
    }).then(() => {
        animalModel.find({}).then (connect =>{
            for (let animal of connect){
                console.log(animal)
            }
            })
        })

const animalSchema = new mongoose.Schema({
    name:{type:String, required:true},
    breed:{type:String, required:true},
    age:{type:Number, required:true}
})

const animalModel = mongoose.model("animal", animalSchema)


animalModel.create({
    name:"Dot",
    breed:"Labrador",
    age:4
})

animalModel.deleteMany({name:"Axel"}, {name:"Dot"});

mongoose.disconnect()

//Extension
//Intstall prompt-sync
//user input 