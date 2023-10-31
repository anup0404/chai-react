import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 p-4 text-black border-dashed">
        Tailwind test
      </h1>
      <Card
        collection="new Collection"
        shoes="causal"
        wool="winter"
        jeans="skiny"
        btntext="shop now"
      />
      <Card
        collection="old Collection"
        shoes="normal"
        wool="summer"
        jeans="full length"
        btntext="Buy now"
      />
    </>
  );
}

export default App;
