import React from "react";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
      </nav>
    </div>
  );
};

export default App;
