import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [isVisible, setVisible] = useState(false);
  const inputRef = useRef(null);
  const [s1 , setS1] = useState([]);

  const ss = [
    {id : 1 , name : "Israr" , age : 19},
    {id : 2 , name : "Rehan" , age : 19},
    {id : 3 , name : "Aavesh" , age : 20}
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please write your name!");
      inputRef.current.focus();
      return;
    }

    setStudents([...students, name]);
    setName("");
    inputRef.current.focus();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Student naam likho"
          className="border-1 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {students.length === 0 ? (
        <p>No Student Found!</p>
      ) : (
        students.map((student, index) => (
          <p key={index}>{student}</p>
        ))
      )}

      <h1>Conditional Rendering Practice</h1>
      <button onClick={() => setVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>Hello Israr!</p>}

     { ss.map((stud) => (
        <div key = {stud.id}>
          <h2>{stud.name}</h2>
          <h2>{stud.age}</h2>
        </div>
      ))
    }
      
    </>
  );
}

export default App;
