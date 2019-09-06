import React from "react";
import Sidebar from "./Sidebar";
import Box from "./Box";
import Aside from "./Aside";
import style from "./style.css"

class Container extends React.Component{
    render(){
        return (
            <cont className = {style.cont}>

            <Sidebar/>
            
            <Box/>

            <Aside/>
            
                             
            </cont>
        )
    }
}

export default Container;