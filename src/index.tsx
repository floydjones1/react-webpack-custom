import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import Navbar from './components/Navbar'

// import default style
import './main.css'

function App() {
  let num: number = 1
  num = 2
  return (
    <div>
      <Navbar label='login' />
      <h1>Hello blog readers {num}</h1>
      <Button variant="contained" color="primary">Hi</Button>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);