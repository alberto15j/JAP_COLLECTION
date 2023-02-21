const mongoose=require("mongoose");


const clientes=mongoose.Schema({
    usuario:{
        type:String,
        unique:true
    },
    nombre: String,
    apellidos: String,
    fechana: Date,
    genero: String,
    telefono: Number,
    created_at:Date
})

module.exports=mongoose.model("Cliente", clientes);