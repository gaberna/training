import React from "react";
import "./style.css";
import DivisionList from "../../components/DivisionList";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <DivisionList onCamote={this.props.onPapa}/>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
