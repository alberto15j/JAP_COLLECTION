const Personas=require("../models/persona.model");

 function createPersonas(req,res){
    const personas=new Personas(req.body);
   
    personas.save((error, personaStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(personaStored)
        }
    })
}

function getPersonas(req,res){
    Personas.find((error, personasStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(personasStored)
        }
    })
}

 function deletePersona(req,res){
    const {id}=req.params;

    Personas.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el dato"})
        }else{
            res.status(200).send({msg: "Persona eliminado"})
        }
    })
}

function updatePersonas(req,res){
   const {id}=req.params;
   const datosPersona=req.body;

   Personas.findByIdAndUpdate({_id:id},datosPersona, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

function buscarOnePersona(req,res){
const {id}=req.params;

Personas.findById(id, (error, storedPersona)=>{
    if(error){
        res.status(400).send({msg: "No se encunetra el dato"})
    }else{
        res.status(200).send(storedPersona);
    }
})
}



module.exports={
    createPersonas,
    getPersonas,
    deletePersona,
    updatePersonas,
    buscarOnePersona
}