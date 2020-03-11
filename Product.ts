/*
Para que todo esto funcione necesitan instalar las siguientes dependencias manualmente:
typescript: npm install typescript --save-dev      (save-dev es para crear las depencias de desarrollo que no van a estar en produccion)
ts-node: npm install ts-node-dev --save-dev  
mongoose: npm install mongoose
@types/mongoose: npm install @types/mongoose
*/ 

import mongoose = require("mongoose");

const uri: string = "mongodb+srv://admin:admin@cluster0-flsyv.azure.mongodb.net/test?retryWrites=true&w=majority"; // aqui usen su base de datos

// Funcion que verifica si la conexion a la base de datos es exitosa o no
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},(err: any) => {
if(err){
    console.log(err.message)
}else{
    console.log("Conexion exitosa")
}
});

// Crea la interfaz de mi documento y setea los atributos que mi objeto tendra
interface IProduct extends mongoose.Document{
    id: string;
    nombre: string;
    precio_Venta: number;
    precio_Compra:number;
    cantidad: number;
    proveedor: string;
}

// Crea el esquema que deben seguir mis atributos y limita el tipo de dato que reciben. Ademas de esto necesitan que se llenen los datos
const ProductSchema = new mongoose.Schema({
    id:{type: String, required:true},
    nombre:{type: String, required:true},
    precio_Venta:{type: Number, required:true},
    precio_Compra:{type: Number, required:true},
    cantidad:{type: Number, required:true},
    proveedor:{type: String, required:true},
});

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export {Product}

