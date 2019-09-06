import React from "react";
import style from "./style.css";

class Header extends React.Component{
    render(){
            return(
                <div>
                    <header className = {style.header}>
                        Header
                    </header>                                          
                </div>
            )
    }
}

export default Header;
