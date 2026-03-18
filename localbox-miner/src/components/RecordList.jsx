import RecordRow from "./RecordRow";

function RecordList({ records, onDelete, onEdit, onClear }) {
  return (
    <>
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Records</h2>
          <button
            onClick={onClear}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm"
          >
            Clear All
          </button>
        </div>

        {records.length === 0 ? (
          <p className="text-gray-400">No Records Found!</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="pb-2">Title</th>
                <th className="pb-2">Description</th>
                <th className="pb-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <RecordRow
                  key={record.id}
                  record={record}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default RecordList;
