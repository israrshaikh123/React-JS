import { useState, useEffect } from "react";
import "./App.css";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";

function App() {
  const [records, setRecords] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedRecords = localStorage.getItem("records");
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords));
    }
  }, []);

  const addRecord = (record) => {
    const newRecord = {
      ...record,
      id: Date.now(),
    };
    const updated = [...records, newRecord];
    setRecords(updated);
    localStorage.setItem("records", JSON.stringify(updated));
  };

  const deleteRecord = (id) => {
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
    localStorage.setItem("records", JSON.stringify(updated));
  };

  const startEdit = (id) => {
    setEditId(id);
  };

  const updateRecord = (updatedRecord) => {
    const updated = records.map((r) =>
      r.id === editId ? { ...r, ...updatedRecord } : r,
    );
    setRecords(updated);
    localStorage.setItem("records", JSON.stringify(updated));
    setEditId(null);
  };

  const clearAllRecords = () => {
    setRecords([]);
    localStorage.removeItem("records");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-4 mb-6 shadow-md">
        <h1 className="text-2xl font-bold text-white">LocalBox Miner</h1>
        <p className="text-gray-400 text-sm">Total Records: {records.length}</p>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <RecordForm
          onAdd={addRecord}
          onUpdate={updateRecord}
          editId={editId}
          records={records}
        />
        <RecordList
          records={records}
          onDelete={deleteRecord}
          onEdit={startEdit}
          onClear={clearAllRecords}
        />
      </div>
    </div>
  );
}

export default App;
