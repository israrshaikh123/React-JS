import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLeave } from "../features/leaveSlice";

function AddLeave() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (name.trim() === "") newErrors.name = "Name is required!";
    if (type.trim() === "") newErrors.type = "Leave type is required!";
    if (startDate === "") newErrors.startDate = "Start date is required!";
    if (endDate === "") newErrors.endDate = "End date is required!";
    if (reason.trim() === "") newErrors.reason = "Reason is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(addLeave({
      id: Date.now(),
      name,
      type,
      startDate,
      endDate,
      reason,
      status: "Pending",
      appliedDate: new Date().toLocaleDateString(),
    }));

    setName("");
    setType("");
    setStartDate("");
    setEndDate("");
    setReason("");
    setErrors({});
  };

  return (
    <>
      <div className="bg-gray-900 border border-purple-800 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-purple-400 mb-4">
          Apply for Leave
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 text-white rounded-lg p-2 outline-none border border-purple-800"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-gray-800 text-white rounded-lg p-2 outline-none border border-purple-800"
          >
            <option value="">Select Leave Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Emergency Leave">Emergency Leave</option>
            <option value="Vacation Leave">Vacation Leave</option>
            <option value="Half-Day Leave">Half-Day Leave</option>
          </select>
          {errors.type && <p className="text-red-400 text-sm">{errors.type}</p>}

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-gray-800 text-white rounded-lg p-2 outline-none border border-purple-800"
          />
          {errors.startDate && <p className="text-red-400 text-sm">{errors.startDate}</p>}

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-gray-800 text-white rounded-lg p-2 outline-none border border-purple-800"
          />
          {errors.endDate && <p className="text-red-400 text-sm">{errors.endDate}</p>}

          <textarea
            placeholder="Reason for leave..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="bg-gray-800 text-white rounded-lg p-2 outline-none border border-purple-800"
            rows={3}
          />
          {errors.reason && <p className="text-red-400 text-sm">{errors.reason}</p>}

          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-600 text-white rounded-lg p-2 font-semibold"
          >
            Apply Leave
          </button>
        </form>
      </div>
    </>
  );
}

export default AddLeave;