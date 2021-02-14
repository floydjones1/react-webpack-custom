import React from "react";
import ReactDOM from "react-dom";

function App() {
  let num: number = 1
  num = 2
  return (
    <div>
      <h1>Hello blog readers {num}</h1>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);