function SearchFilter({ search, filterCategory, onSearch, onFilter }) {
  return (
    <>
      <div className="flex gap-3 mb-6">

        <input
          type="text"
          placeholder="Search by file name..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
        />

        <select
          value={filterCategory}
          onChange={(e) => onFilter(e.target.value)}
          className="border border-gray-200 rounded-lg p-2 outline-none text-gray-800"
        >
          <option value="All">All Categories</option>
          <option value="General">General</option>
          <option value="Personal">Personal</option>
          <option value="Academic">Academic</option>
          <option value="Office">Office</option>
          <option value="Certificates">Certificates</option>
        </select>

      </div>
    </>
  );
}

export default SearchFilter;