const express=require("express");
const clientesController= require("../controller/clientes.controller");

const api=express.Router();

api.post("/cliente",clientesController.createclientes);
api.get("/clientes",clientesController.getclientes);
api.delete("/cliente/:id",clientesController.deleteclientes);
api.patch("/cliente/:id",clientesController.updateclientes);
api.get("/cliente/:id",clientesController.getclientes);


module.exports=api;