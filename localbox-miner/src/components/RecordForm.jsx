import { useState, useEffect } from "react";

function RecordForm({ onAdd, onUpdate, editId, records }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (editId) {
      const record = records.find((r) => r.id === editId);
      if (record) {
        setTitle(record.title);
        setDescription(record.description);
      }
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Title is required!");
      return;
    }

    const recordData = { title, description };

    if (editId) {
      onUpdate(recordData);
    } else {
      onAdd(recordData);
    }

    setTitle("");
    setDescription("");
    setError("");
  };
  return (
    <>
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">
          {editId ? "Edit Record" : "Add Record"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-700 text-white rounded-lg p-2 outline-none"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-700 text-white rounded-lg p-2 outline-none"
            rows={3}
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2 font-semibold"
          >
            {editId ? "Update Record" : "Add Record"}
          </button>
        </form>
      </div>
    </>
  );
}
export default RecordForm;
