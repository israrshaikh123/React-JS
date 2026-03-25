import { useSelector } from "react-redux";
import LeaveCard from "./LeaveCard";

function LeaveList({ onEdit, search, filterType, filterStatus }) {
  const leaves = useSelector((state) => state.leaves.leaves);

  const filtered = leaves.filter((leave) => {
    const matchSearch = leave.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchType = filterType === "All" || leave.type === filterType;
    const matchStatus = filterStatus === "All" || leave.status === filterStatus;
    return matchSearch && matchType && matchStatus;
  });

  return (
    <>
      <div className="bg-gray-900 border border-purple-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-purple-400 mb-4">
          Leave Records ({filtered.length})
        </h2>

        {filtered.length === 0 ? (
          <p className="text-gray-400">No Leave Records Found!</p>
        ) : (
          filtered.map((leave) => (
            <LeaveCard
              key={leave.id}
              leave={leave}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </>
  );
}

export default LeaveList;
