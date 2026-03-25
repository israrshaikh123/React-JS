function SearchFilter({ search, filterType, filterStatus, onSearch, onFilterType, onFilterStatus }) {
  return (
    <>
      <div className="bg-gray-900 border border-purple-800 rounded-lg p-4 mb-6">
        <div className="flex gap-3 flex-wrap">

          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="bg-gray-800 text-white rounded-lg p-2 outline-none border border-purple-800 flex-1"
          />

          <select
            value={filterType}
            onChange={(e) => onFilterType(e.target.value)}
            className="bg-gray-800 text-white rounded-lg p-2 outline-none border border-purple-800"
          >
            <option value="All">All Types</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Emergency Leave">Emergency Leave</option>
            <option value="Vacation Leave">Vacation Leave</option>
            <option value="Half-Day Leave">Half-Day Leave</option>
          </select>

          <select
            value={filterStatus}
            onChange={(e) => onFilterStatus(e.target.value)}
            className="bg-gray-800 text-white rounded-lg p-2 outline-none border border-purple-800"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Cancelled">Cancelled</option>
          </select>

        </div>
      </div>
    </>
  );
}

export default SearchFilter;