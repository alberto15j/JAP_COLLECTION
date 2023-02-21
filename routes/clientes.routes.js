const express=require("express");
const clientesController= require("../controller/clientes.controller");

const api=express.Router();

api.post("/alumno",clientesController.createclientes);
api.get("/alumnos",clientesController.getclientes);
api.delete("/alumno/:id",clientesController.deleteclientes);
api.patch("/alumno/:id",clientesController.updateclientes);
api.get("/alumno/:id",clientesController.getclientes);


module.exports=api;