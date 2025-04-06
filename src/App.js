/* App.js */

import React from "react";
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="title">React Calculator</h1>
      <Calculator />

    </div>
  );
}

export default App;
