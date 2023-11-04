import { useCallback, useRef } from "react";

function App() {
  const refCopy = useRef(null);
  const namecopy = useCallback(() => {
    refCopy.current?.select();
    alert("password Copy");
  }, []);
  return (
    <div className="App">
      <h1>Chai aur Code </h1>
      <input type="text" placeholder="Enter your name" ref={refCopy} />
      <button onClick={namecopy}>copy </button>
    </div>
  );
}

export default App;
