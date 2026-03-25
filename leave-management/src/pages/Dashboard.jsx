import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLeave } from "../features/leaveSlice";
import AddLeave from "../components/AddLeave";
import LeaveList from "../components/LeaveList";
import SearchFilter from "../components/SearchFilter";

function Dashboard() {
  const dispatch = useDispatch();
  const leaves = useSelector((state) => state.leaves.leaves);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [editLeave, setEditLeave] = useState(null);

  const handleEdit = (leave) => {
    setEditLeave(leave);
  };

  const handleUpdate = (updatedData) => {
    dispatch(updateLeave({ ...editLeave, ...updatedData }));
    setEditLeave(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="bg-gray-900 border-b border-purple-900 px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-purple-400">
          Smart Leave Management System
        </h1>
        <div className="flex gap-4 mt-2">
          <p className="text-gray-400 text-sm">Total: {leaves.length}</p>
          <p className="text-yellow-400 text-sm">
            Pending: {leaves.filter((l) => l.status === "Pending").length}
          </p>
          <p className="text-green-400 text-sm">
            Approved: {leaves.filter((l) => l.status === "Approved").length}
          </p>
          <p className="text-red-400 text-sm">
            Rejected: {leaves.filter((l) => l.status === "Rejected").length}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <AddLeave />

        {editLeave && (
          <div className="bg-gray-900 border border-purple-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-purple-400 mb-4">
              Edit Leave
            </h2>
            <p className="text-gray-400 mb-2">Editing: {editLeave.name}</p>
            <button
              onClick={() => handleUpdate({ status: editLeave.status })}
              className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditLeave(null)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg ml-2"
            >
              Cancel
            </button>
          </div>
        )}

        <SearchFilter
          search={search}
          filterType={filterType}
          filterStatus={filterStatus}
          onSearch={setSearch}
          onFilterType={setFilterType}
          onFilterStatus={setFilterStatus}
        />

        <LeaveList
          onEdit={handleEdit}
          search={search}
          filterType={filterType}
          filterStatus={filterStatus}
        />
      </div>
    </div>
  );
}

export default Dashboard;