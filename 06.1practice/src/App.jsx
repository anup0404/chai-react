import React, { useEffect, useState } from "react";
import Inputfield from "./Components/Inputfield";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [currency, setCurrency] = useState("inr");
  const BASE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

  const options = Object.keys(data);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((item) => setData(item[currency]));
  }, [currency]);

  const convert = () => {
    const value = amount * data[to];
    setResult(value);
  };
  console.log(result);

  return (
    <>
      <h1 className="converter">Converter</h1>
      <div>
        <Inputfield
          label="From"
          currencyOption={options}
          onAmountChange={(res) => setAmount(res)}
        />
      </div>
      <div className="equals">=</div>

      <div>
        <Inputfield
          label="To"
          currencyOption={options}
          result={result}
          onCurrencyChange={(res) => setTo(res)}
        />
      </div>
      <button
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        Convert
      </button>
      <button>swap</button>
    </>
  );
}

export default App;
