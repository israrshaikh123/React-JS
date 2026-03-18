import { useState, useEffect } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("employees");
    if (saved) {
      setEmployees(JSON.parse(saved));
    }
  }, []);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now(),
      status: "Active",
    };
    const updated = [...employees, newEmployee];
    setEmployees(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
  };

  const deleteEmployee = (id) => {
    const updated = employees.filter((e) => e.id !== id);
    setEmployees(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
  };

  const startEdit = (id) => {
    setEditId(id);
  };

  const updateEmployee = (updatedEmployee) => {
    const updated = employees.map((e) =>
      e.id === editId ? { ...e, ...updatedEmployee } : e,
    );
    setEmployees(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
    setEditId(null);
  };

  const clearAllEmployees = () => {
    setEmployees([]);
    localStorage.removeItem("employees");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="bg-orange-500 px-6 py-4 mb-6 shadow-md">
        <h1 className="text-2xl font-bold text-white">
          Employee Management System
        </h1>
        <p className="text-orange-100 text-sm">
          Total Employees: {employees.length}
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-6">
        <EmployeeForm
          onAdd={addEmployee}
          onUpdate={updateEmployee}
          editId={editId}
          employees={employees}
        />
        <EmployeeList
          employees={employees}
          onDelete={deleteEmployee}
          onEdit={startEdit}
          onClear={clearAllEmployees}
        />
      </div>
    </div>
  );
}

export default App;
