function StudentCard({ student, onDelete, onToggle, onMark }) {
  return (
    <>
      <div className="bg-white border rounded-lg p-4 mb-3 shadow-sm">

        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-gray-800">
            {student.name}
          </h2>
          <span className={`text-sm px-3 py-1 rounded-full font-medium ${
            student.isPresent
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}>
            {student.isPresent ? "Present" : "Absent"}
          </span>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => onToggle(student.id)}
            className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm"
          >
            {student.showDetails ? "Hide Details" : "Show Details"}
          </button>

          <button
            onClick={() => onMark(student.id, !student.isPresent)}
            className="bg-yellow-50 hover:bg-yellow-100 text-yellow-600 px-3 py-1 rounded-lg text-sm"
          >
            {student.isPresent ? "Mark Absent" : "Mark Present"}
          </button>

          <button
            onClick={() => onDelete(student.id)}
            className="bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm"
          >
            Delete
          </button>
        </div>

        {student.showDetails && (
          <div className="mt-3 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
            <p>ID: {student.id}</p>
            <p>Status: {student.isPresent ? "Present" : "Absent"}</p>
          </div>
        )}

      </div>
    </>
  );
}

export default StudentCard;