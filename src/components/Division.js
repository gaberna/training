import React from "react";

function Division(props){

     return(
       <li>
        <button onClick={() => props.onDivisionSelected(props.div.id)}> {props.div.name} </button>
       </li>
     ) 
  }

  export default Division;