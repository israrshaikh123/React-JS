function RecordRow({ record, onDelete, onEdit }) {
  return (
    <>
      <tr className="border-b border-gray-700">
        <td className="py-2 text-white">{record.title}</td>
        <td className="py-2 text-gray-400">{record.description}</td>
        <td className="py-2">
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(record.id)}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-lg text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(record.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default RecordRow;
