import React from "react";
import "./style.css";
import Search from "../../components/Search";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeystroke = this.handleKeystroke.bind(this);
    
  }

  handleKeystroke(lookingLetter) {
    this.props.onKeystroke(lookingLetter);
    
  }

  render() {
    return (
      <div>
        <div className="header">Header</div>
        <div className="header_content">
          <Search onKeystroke={this.handleKeystroke}/>
        </div>
      </div>
    );
  }
}

export default Header;
