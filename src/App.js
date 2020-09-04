import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from './components/Footer';
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="seperator"></div>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
