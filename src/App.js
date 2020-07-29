import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Barcode } from "./Barcode";
import Webcam from "./react-webcam";

function App() {


  return (
    <div className="App">
      <Barcode />
      <Webcam />
    </div>
  );
}

export default App;
