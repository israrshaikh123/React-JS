import EmployeeRow from "./EmployeeRow";

function EmployeeList({ employees, onDelete, onEdit, onClear }) {
  return (
    <>
      <div className="bg-white border border-orange-200 rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-orange-500">Employees</h2>
          <button
            onClick={onClear}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Clear All
          </button>
        </div>

        {employees.length === 0 ? (
          <p className="text-gray-400">No Employees Found!</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="text-orange-500 border-b border-orange-200">
                <th className="pb-2">Image</th>
                <th className="pb-2">Name</th>
                <th className="pb-2">Email</th>
                <th className="pb-2">Phone</th>
                <th className="pb-2">Salary</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <EmployeeRow
                  key={employee.id}
                  employee={employee}
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

export default EmployeeList;
