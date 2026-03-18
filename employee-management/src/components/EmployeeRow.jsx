function EmployeeRow({ employee, onDelete, onEdit }) {
  return (
    <>
      <tr className="border-b border-orange-100 hover:bg-orange-50">
        <td className="py-3">
          {employee.image ? (
            <img
              src={employee.image}
              alt={employee.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              {employee.name.charAt(0)}
            </div>
          )}
        </td>
        <td className="py-3 text-gray-800 font-medium">{employee.name}</td>
        <td className="py-3 text-gray-500">{employee.email}</td>
        <td className="py-3 text-gray-500">{employee.phone}</td>
        <td className="py-3 text-orange-500 font-medium">${employee.salary}</td>
        <td className="py-3">
          <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
            {employee.status}
          </span>
        </td>
        <td className="py-3">
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(employee.id)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(employee.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default EmployeeRow;