import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";

const Button = React.lazy(() => import("./components/Button"));
// import Button from "./components/Button";

// import default style
import "./main.css";

interface Data {
  id: number;
  title: string;
}

function App() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState<Array<Data>>([]);
  let date = new Date();

  const handleIncrement = () => {
    setNum(num + 1);
  };

  const handleDecrement = () => {
    setNum(num - 1);
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((err) => console.error(err));
  }, []);

  console.log(data[0]?.title);
  return (
    <div className="App">
      <h1 style={{ width: "100%" }}>Welcome to App! {date.toDateString()}</h1>

      <h3>Your number is {num}</h3>
      <Suspense fallback={null}>
        <Button text="Increment Me!" onClick={handleIncrement} />
        <Button text="Decrement Me!" onClick={handleDecrement} />
      </Suspense>
      <ul>
        {data.map((row) => (
          <li key={row.id}>{row.title}</li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
