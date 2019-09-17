import React from "react";

function Product ({prod}){
    return(
            <div>
            <p>Producto: {prod.descripcion}</p>
            <h5>Precio: ${prod.precio}</h5>
            <h6>Division: {prod.divisionNombre}</h6>
            </div>
    )
}

export default Product;