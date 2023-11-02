import React from "react";
import projects from "./ProjectArray";
import Navbar from "./Navbar";
import About from "./About";
import Contacts from "./Contacts";
import PortfolioList from "./PortfolioList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <PortfolioList projects={projects}/>
      <Contacts/>
    </div>
  );
}

export default App;
