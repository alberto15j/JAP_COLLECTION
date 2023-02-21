const clientes=require("../models/clientes.model1");

 function createclientes(req,res){
    const clientes=new clientes(req.body);
   
    clientes.save((error, clientesStored)=>{
        if(error){
            res.status(400).send({msg: "Error en  guardar los datos"})
        }else{
            res.status(200).send(clientesStored)
        }
    })
}

function getclientes(req,res){
    clientes.find((error, clientesStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(clientesStored)
        }
    })
}

 function deleteclientes(req,res){
    const {id}=req.params;

    clientes.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar un cliente"})
        }else{
            res.status(200).send({msg: "Cliente a sido eliminado"})
        }
    })
}

function updateclientes(req,res){
   const {id}=req.params;
   const datosclientes=req.body;

   clientes.findByIdAndUpdate({_id:id},datosclientes, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getclientes(req,res){
    console.log("Obtener los clientes");
}



module.exports={
    createclientes,
    updateclientes,
    deleteclientes,
    getclientes,
    getclientes
}