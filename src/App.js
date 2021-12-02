import React from "react";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"/>
          </header>
          <Dictionary defaultKeyword="unicorn"/>
          <footer>
          This project was coded by Andrea Hitchin and is 
          <a href="https://github.com/00Dre00/react-dictionary-search" target="_blank" rel="noopener noreferrer"> open-sourced on GitHub</a>
          and 
          <a href="https://brave-einstein-60ea29.netlify.app" target="_blank" rel="noopener noreferrer"> hosted on Netlify</a>
          </footer>
          </div>
          </div>
  
  );
}

export default App;


