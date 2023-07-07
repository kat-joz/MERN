//Mongoose is the library connecting to Mongo - how we will interface with Mongo DB server
//You can connect with Mongo via Shell (compass) or something like Mongoose

//url for local mongo server or instead of localhost add the IP number of the other computer you're connecting to
//local host = 127.0.0.1

//Import and connect mongoose:


//.then and .catch are knows as promises
//Let me know when connected while I execute the rest of the code:
//mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
    //console.log("Connected")

    //rest of code HERE

    //Let me know when disconnected:

    //mongoose.disconnect().then(() => console.log("Disconnect"))
    //console.log("End of mongoose connect")
    
    //in case there is an error

//}).catch(err => { 
    //console.log("there was an error")
//})

// just some code to run to exemplify that this runs first:
//console.log("End of file")


//How to connect with Mongoose, create schema and push and object:


const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017").then (()=>{
    console.log("Connected!")

    carModel.create({
        reg:"ABC",
        age:10,
        make:"Toyota",
        model:"Aygo",
        colour:"Red"
    }).then(() => {

        carModel.find({}).then (res => {
            for(let car of res){
                console.log(car)
            }

            mongoose.disconnect()
        })

    })

    }).catch(err => { 
        console.log("there was an error")
        console.log(err)
    })
    
const carSchema = new mongoose.Schema({
    reg:String,
    age:{type:Number, required:true}, // means this field type in Number and it is required
    make:String,
    model:String,
    colour:String
})


const carModel = mongoose.model("car", carSchema)

