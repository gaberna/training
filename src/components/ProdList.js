import React from "react";
import Product from "./Product";
//import {prods} from "../api/data"

function ProdList(props){
 
  const lista = props.list;
  const selDiv = props.div;
  var productList = lista;
  debugger;
  if (selDiv !== null && selDiv > 0) {
    productList = lista.filter(prod => prod.division === selDiv);
  }
  
  const prodlist = productList.map(prod => <Product key={prod.id} prod={prod} />)

  return(<div>{prodlist}</div>)
  }
  



export default ProdList;

