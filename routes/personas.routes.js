const express=require("express");
const personaController= require("../controller/persona.controller");

const api=express.Router();

api.post("/persona",personaController.createpersona);
api.get("/personas",personaController.getpersona);
api.get("/persona/:id",personaController.buscarOnepersona);
api.delete("/persona/:id",personaController.deletePersona);
api.patch("/persona/:id",personaController.updatePersonas);



module.exports=api;