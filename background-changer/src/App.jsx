import { useState } from "react";
function App() {
  const [color, setcolor] = useState("");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex felx-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl shadow-lg">
          <button
            onClick={() => {
              setcolor("red");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          
            onClick={() => {
              setcolor("blue");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          
            onClick={() => {
              setcolor("olive");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
          
            onClick={() => {
              setcolor("purple");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
          
            onClick={() => {
              setcolor("pink");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
          
            onClick={() => {
              setcolor("grey");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "grey" }}
          >
            grey
          </button>
          <button
          
            onClick={() => {
              setcolor("tan");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "tan" }}
          >
            tan
          </button>
          <button
          
            onClick={() => {
              setcolor("limegreen");
            }}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "LimeGreen" }}
          >
            LimeGreen
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
