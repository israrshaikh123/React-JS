import { useDispatch } from "react-redux";
import { deleteLeave, updateStatus } from "../features/leaveSlice";

function LeaveCard({ leave, onEdit }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gray-900 border border-purple-800 rounded-lg p-4 mb-3">

       
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-white">{leave.name}</h2>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
            leave.status === "Approved" ? "bg-green-800 text-green-300" :
            leave.status === "Rejected" ? "bg-red-800 text-red-300" :
            leave.status === "Cancelled" ? "bg-gray-700 text-gray-300" :
            "bg-yellow-800 text-yellow-300"
          }`}>
            {leave.status}
          </span>
        </div>

        <p className="text-purple-400 text-sm mb-1">{leave.type}</p>
        <p className="text-gray-400 text-sm mb-1">
          {leave.startDate} → {leave.endDate}
        </p>
        <p className="text-gray-400 text-sm mb-3">{leave.reason}</p>
        <p className="text-gray-500 text-xs mb-3">Applied: {leave.appliedDate}</p>

        <div className="flex gap-2 flex-wrap mb-2">
          <button
            onClick={() => dispatch(updateStatus({ id: leave.id, status: "Approved" }))}
            className="bg-green-800 hover:bg-green-700 text-white px-2 py-1 rounded text-xs"
          >
            Approve
          </button>
          <button
            onClick={() => dispatch(updateStatus({ id: leave.id, status: "Rejected" }))}
            className="bg-red-800 hover:bg-red-700 text-white px-2 py-1 rounded text-xs"
          >
            Reject
          </button>
          <button
            onClick={() => dispatch(updateStatus({ id: leave.id, status: "Cancelled" }))}
            className="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs"
          >
            Cancel
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(leave)}
            className="bg-purple-700 hover:bg-purple-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteLeave(leave.id))}
            className="bg-red-800 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm"
          >
            Delete
          </button>
        </div>

      </div>
    </>
  );
}

export default LeaveCard;