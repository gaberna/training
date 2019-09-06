import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";


export default class App extends React.Component {
  render(){
    return(
      <div>
      <Header/>
      <Container/>
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