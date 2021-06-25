import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "./components/Navbar/About";
import "./components/Navbar/Contact";
import "./components/Navbar/Home";
import "./components/Navbar/Resume";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

      <Home></Home>
      <About></About>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  );
};

export default App;
