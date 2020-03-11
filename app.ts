import { Product } from "./Product";

const product = new Product();

// Asigno los valores a los atributos de mi producto
product.id = "hlgg2004";
product.nombre = "Zero Point Energy Field Manipulator";
product.precio_Venta = 112004;
product.precio_Compra = 21704;
product.cantidad = 2;
product.proveedor = "Black Mesa Research Facility"

// Asi es como el producto se guarda en mi base de datos
product.save((err: any)=>{
if (err){
    console.log(err)
}else{
    console.log(product)
}
})
