import React from "react";
import Sidebar from "../Sidebar";
import Box from "../Box";
import Aside from "../Aside";
import "./style.css"


class Container extends React.Component{
    
    state = {
        
        selectedDiv : 0
    }
    
    onDivisionSlected = (divSel) => {
        this.setState({ selectedDiv: divSel});
       
    }
    

    render(){
        return (
            <div className = "cont">
            
            <Sidebar onPapa={this.onDivisionSlected} />
            
            <Box selectedDiv={this.state.selectedDiv} onKeystroke={this.props.onKeystroke}/>

            <Aside/>
            
                           
            </div>
        )
    }
}

export default Container;