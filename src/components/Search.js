import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {

    this.props.onKeystroke(event.target.value); 
    //this.setState({ lookingLetter: event.target.value }); // Estado local 
    //this.setState({ lookingLetter: event.target.value.toUpperCase() }); // Test UpperCase
    
  }

  render() {
    return (
      <div>
          <label>
            Search:
            <input
              type="text"
              value= {this.props.lookingLetter}
              onChange={this.handleChange}
            />
          </label>
      </div>
    );
  }
}

export default Search;
