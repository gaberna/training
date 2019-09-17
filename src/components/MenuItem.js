import React from 'react';



export default class MenuItem extends React.Component {
  render(){
       
    return(
      <div>
        <li>
            <a href="#">{this.props.name}</a>
        </li>
      </div>     
        
    )   
  }
}
