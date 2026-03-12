import { useState, useRef } from "react";

function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Please enter student name!");
      inputRef.current.focus();
      return;
    }

    onAdd(name);
    setName("");
    setError("");
    inputRef.current.focus();
  };

  return (
    <>
      <div className="bg-white border rounded-lg p-4 mb-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Add New Student
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="Student naam likho..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 text-gray-700 outline-none focus:border-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + Add
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">⚠️ {error}</p>
          )}
        </form>
      </div>
    </>
  );
}

export default StudentForm;