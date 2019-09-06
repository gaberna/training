import React from "react";
import style from "./style.css";

class Aside extends React.Component{
    render(){
        return(
            <aside className = {style.aside}>
                Right Side
            </aside>
        )
    }
}

export default Aside;