const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    reg:{type:String, required:true},
    name:{type:String, required:true},
    colour:{type:String, required:true}
})

const carModel = mongoose.model("car", carSchema)

async function setupTestData(){
await carModel.deleteMany({})
    carModel.create({reg:"ABC", name:"Renault", colour:"white"}),
    carModel.create({reg:"DEF", name:"Mercedes", colour:"red"}),
    carModel.create({reg:"GHI", name:"BMW", colour:"black"})
}

module.exports = {carModel, setupTestData}
