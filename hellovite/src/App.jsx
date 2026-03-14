import "./App.css";
import { useState, useRef } from "react";
function App() {
  const [steps, setSteps] = useState([""]);
  const updateStep = (index, value) => {
    const updated = steps.map((s, i) => (i === index ? value : s));
    setSteps(updated);
  };

  const addSteps = () => {
    setSteps([...steps, ""]);
  };

  const removeSteps = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };
  return (
    <>
      <h1>steps list</h1>
      {steps.map((step, index) => (
        <div key={index}>
          <input
            value={step}
            onChange={(e) => updateStep(index, e.target.value)}
            placeholder={`step ${index + 1}`}
            className="border-1 rounded p-1 mt-2"
          />
          <button
            onClick={() => removeSteps(index)}
            className="text-red-500 mt-2"
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={addSteps} className="mt-2">
        + Add Step
      </button>
    </>
  );
}

export default App;
// const [name, setName] = useState("");
// const inputRef = useRef(null);
// const [isFocused, setIsFocused] = useState(false);
// const [error, setError] = useState("");
// const[steps , setSteps] = useState([""]);

// const handleSubmit = () => {
//   alert(name);
//   alert(inputRef.current.value);
// };

// const addStes = () => {
//   setSteps([...steps, ""]);
// };

// const removeSteps = (index) => {
//   setSteps(steps.filter((_, i) => i !== index));
// }
//   <h1>Hello Israr</h1>
//   <input
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//     className="border-1 rounded"
//     />
//   <input
//     ref={inputRef}
//     className="border-1 rounded flex mt-5 align-center"
//     />

//   <input
//     placeholder="write something..."
//     style={{
//       border: isFocused ? "2px solid blue" : "2px solid orange",
//       outline: "none",
//     }}
//     className="rounded p-2 mt-5"
//     onFocus={() => {
//       setIsFocused(true);
//     }}
//     onBlur={(e) => {
//       setIsFocused(false);
//       if (e.target.value === "") {
//         setError("Feild required");
//       } else {
//         setError("");
//       }
//     }}
//     />
//   {error && <p className="text-red-500 text-sm">{error}</p>}

//   <button onClick={handleSubmit}>Submit</button>

//   <button onClick={addStes} >Add Value Tag</button>
//   <button  onClick={removeSteps}>Remove Value Tag</button>
