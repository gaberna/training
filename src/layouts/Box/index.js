import React from "react";
import "./style.css";
import ProdList from "../../components/ProdList";
import {prods} from "../../api/data";
//import Product from "../../components/Product";


class Box extends React.Component{
    render(){
        
        console.log(prods);
        console.log(this.props.onKeystroke);

        let list = [];
        let newList = [];


    if (this.props.onKeystroke !=="") {
            
            list = prods;

            newList = list.filter(d => {
                debugger;
                const ls = d.descripcion.toLowerCase();
                const filter =this.props.onKeystroke;
                return ls.includes(filter);
            });
            
    } else {
        newList = prods;
        console.log(newList);

    }
        
    return(
            <div className = "box">
                <ProdList list={newList} div={this.props.selectedDiv}/>
                
            </div>
            )
    }
}

export default Box;