const express = require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const {
    API_VERSION
}=require("./constants");


const app=express();


const clientesroutes=require("./routes/clientes.routes");
const PersonasRoutes=require("./routes/personas.route")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.use(`/api/${API_VERSION}`, clientesroutes);

app.use(`/api/${API_VERSION}`, PersonasRoutes);

module.exports=app;
