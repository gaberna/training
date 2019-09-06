import React from "react";
import style from "./style.css"

class Sidebar extends React.Component{
    render(){
        return(
            <sidebar className = {style.sidebar}>
                Left Side
            </sidebar>

        )
    }
}

export default Sidebar;