import React from 'react';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../layouts/Container";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeystroke = this.handleKeystroke.bind(this);
    this.state = { lookingLetter: "" };
  }

  handleKeystroke(lookingLetter) {
    this.setState({ lookingLetter });
    console.log(lookingLetter);
  }

render(){

    return(
      <div>
      <Header  onKeystroke={this.handleKeystroke} />
      <Container onKeystroke={this.state.lookingLetter}/>
      <Footer/>
      </div>     
        
    )   
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/