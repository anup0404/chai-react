import { useCallback, useEffect, useState, useRef } from "react";
import "./index.css";

function App() {
  const [password, setpassword] = useState("");
  const [length, setlength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);

  //useRef hook
  const passwordRef = useRef(null);
  const copyPasswordClickboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%678()?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, NumberAllowed, charAllowed, setpassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, NumberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className=" my-3 text-4xl text-white  text-center">
          Password Generator
        </h1>
        <div className="flex shadow overflow-hidden rounded-lg mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-3 py-1"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordClickboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex gap-x-2 text-sm">
          <div className="gap-x-1 items-center flex">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
            />
            <label htmlFor="length">Length:{length}</label>
          </div>
          <div className="flex-items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex-items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="CharacterInput"
              onChange={() => setcharAllowed((prev) => !prev)}
            />
            <label htmlFor="CharacterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
