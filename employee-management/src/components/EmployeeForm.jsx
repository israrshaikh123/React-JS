import { useState, useEffect } from "react";

function EmployeeForm({ onAdd, onUpdate, editId, employees }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (editId) {
      const employee = employees.find((e) => e.id === editId);
      if (employee) {
        setName(employee.name);
        setEmail(employee.email);
        setPhone(employee.phone);
        setSalary(employee.salary);
        setImage(employee.image);
      }
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setSalary("");
      setImage("");
      setErrors({});
    }
  }, [editId]);
  const validate = () => {
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Name is required!";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required!";
    } else if (!email.includes("@")) {
      newErrors.email = "Invalid email!";
    }

    if (phone.trim() === "") {
      newErrors.phone = "Phone is required!";
    } else if (phone.length < 10) {
      newErrors.phone = "Phone must be 10 digits!";
    }

    if (salary.trim() === "") {
      newErrors.salary = "Salary is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const employeeData = { name, email, phone, salary, image };

    if (editId) {
      onUpdate(employeeData);
    } else {
      onAdd(employeeData);
    }

    setName("");
    setEmail("");
    setPhone("");
    setSalary("");
    setImage("");
    setErrors({});
  };
 return (
    <>
      <div className="bg-white border border-orange-200 rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-bold text-orange-500 mb-4">
          {editId ? "Edit Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-orange-50 text-gray-800 rounded-lg p-2 outline-none border border-orange-200"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-orange-50 text-gray-800 rounded-lg p-2 outline-none border border-orange-200"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-orange-50 text-gray-800 rounded-lg p-2 outline-none border border-orange-200"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="bg-orange-50 text-gray-800 rounded-lg p-2 outline-none border border-orange-200"
          />
          {errors.salary && <p className="text-red-500 text-sm">{errors.salary}</p>}

          <input
            type="text"
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="bg-orange-50 text-gray-800 rounded-lg p-2 outline-none border border-orange-200"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-2 font-semibold"
          >
            {editId ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </div>
    </>
  );
}

export default EmployeeForm;
