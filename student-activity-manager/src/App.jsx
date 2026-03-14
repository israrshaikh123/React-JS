import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      isPresent: false,
      showDetails: false,
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const markStatus = (id, status) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, isPresent: status } : s)),
    );
  };

  const toggleDetails = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, showDetails: !s.showDetails } : s,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          🎓 Student Activity Manager
        </h1>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
            <p className="text-gray-500 text-sm">Total</p>
            <p className="text-3xl font-bold text-gray-800">
              {students.length}
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
            <p className="text-gray-500 text-sm">Present</p>
            <p className="text-3xl font-bold text-green-500">
              {students.filter((s) => s.isPresent).length}
            </p>
          </div>
          <div className="bg-white border rounded-lg p-4 text-center shadow-sm">
            <p className="text-gray-500 text-sm">Absent</p>
            <p className="text-3xl font-bold text-red-500">
              {students.filter((s) => !s.isPresent).length}
            </p>
          </div>
        </div>

        <StudentForm onAdd={addStudent} />

        <StudentList
          students={students}
          onDelete={deleteStudent}
          onToggle={toggleDetails}
          onMark={markStatus}
        />
      </div>
    </div>
  );
}

export default App;
