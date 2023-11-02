import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap  justify-center fixed bottom-12  insert-x-0 px-2">
          <div className="flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3 py-2 rounded-2xl ">
            <div
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1  text-white shadow-lg rounded-full"
              style={{ backgroundColor: "red", cursor: "pointer" }}
            >
              Red
            </div>
            <div
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1  text-white shadow-lg rounded-full"
              style={{ backgroundColor: "green", cursor: "pointer" }}
            >
              Green
            </div>
            <div
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1  text-white shadow-lg rounded-full"
              style={{ backgroundColor: "blue", cursor: "pointer" }}
            >
              Blue
            </div>
            <div
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1  text-white shadow-lg rounded-full"
              style={{ backgroundColor: "olive", cursor: "pointer" }}
            >
              Olive
            </div>
            <div
              onClick={() => setColor("Gray")}
              className="outline-none px-4 py-1  text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Gray", cursor: "pointer" }}
            >
              Gray
            </div>
            <div
              onClick={() => setColor("Yellow")}
              className="outline-none px-4 py-1  text-black shadow-lg rounded-full"
              style={{ backgroundColor: "Yellow", cursor: "pointer" }}
            >
              Yellow
            </div>
            <div
              onClick={() => setColor("Pink")}
              className="outline-none px-4 py-1  text-black shadow-lg rounded-full"
              style={{ backgroundColor: "Pink", cursor: "pointer" }}
            >
              Pink
            </div>
            <div
              onClick={() => setColor("Purple")}
              className="outline-none px-4 py-1  text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Purple", cursor: "pointer" }}
            >
              Purple
            </div>
            <div
              onClick={() => setColor("Lavender")}
              className="outline-none px-4 py-1  text-black shadow-lg rounded-full"
              style={{ backgroundColor: "Lavender", cursor: "pointer" }}
            >
              Lavender
            </div>
            <div
              onClick={() => setColor("White")}
              className="outline-none px-4 py-1  text-black shadow-lg rounded-full"
              style={{ backgroundColor: "White", cursor: "pointer" }}
            >
              White
            </div>
            <div
              onClick={() => setColor("Black")}
              className="outline-none px-4 py-1  text-white shadow-lg rounded-full"
              style={{ backgroundColor: "black", cursor: "pointer" }}
            >
              Black
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
