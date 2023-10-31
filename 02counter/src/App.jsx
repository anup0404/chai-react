import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  const addvalue = () => (count <20 ? setCount(count + 1) : setCount(count));
  const removeValue = () =>
    count > 0 ? setCount(count - 1) : setCount(count);
  return (
    <>
      <h1> Counter project {count}</h1>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
