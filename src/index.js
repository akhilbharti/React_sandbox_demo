import React from "react";
import ReactDOM from "react-dom";
import Star from "./star";
import Rating from "./rating";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Star Components:</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Star color="pink" isFilled />
      <Star color="magenta" />
      <Star color="indigo" isFilled />
      <h2>Rating Component (uses Stars):</h2>
      <Rating stars={1} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
