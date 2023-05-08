const mongoose=require("mongoose");


const Personas=mongoose.Schema({

    nombre: String,
    apellidos: String,
    fechana: Date,
    sexo: String,
    telefono: Number,
    email:String,
    created_at:Date
})

module.exports=mongoose.model("Personas", Personas);