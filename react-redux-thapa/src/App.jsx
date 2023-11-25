import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className=" w-full h-screen flex items-center flex-col gap-5 text-white  bg-black py-20">
      <h1 className="text-4xl font-bold  ">Increment/Decrement Counter</h1>
      <p className="text-2xl">using React and Redux</p>
      <div className=" rounded-lg w-40 h-15 p-2  items-center justify-center text-3xl flex gap-5 border-2 bg-red-400">
        <button onClick={() => dispatch(decNumber())}>-</button>
        <span className="text-black bg-white w-20 text-center h-10 rounded-lg">
          {myState}
        </span>
        <button onClick={() => dispatch(incNumber())}>+</button>
      </div>
    </div>
  );
}

export default App;
