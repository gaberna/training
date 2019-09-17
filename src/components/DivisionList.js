import React from 'react';
import Division from "./Division";
import {divs} from "../api/data";

function DivisionList (props) {
    
 const listDivs = divs.map(div => <Division key = {div.id} div = {div} onDivisionSelected={props.onCamote} />)
    
    return(
      <div>
        <ul>
         {listDivs}
        </ul>
      </div>     
        
    )   
  }


export default DivisionList;
