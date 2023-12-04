import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
      Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
        Chayan Maity
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          VESIT
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
