import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./container/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
