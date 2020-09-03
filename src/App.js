import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="seperator"></div>
      <Content />
    </div>
  );
}

export default App;
